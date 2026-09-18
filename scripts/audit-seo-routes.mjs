/**
 * Audit every URL advertised in the live sitemap.
 *
 * Reports redirects, errors, missing/self-inconsistent canonicals, and
 * internal links that point at redirects or 404s. The concurrency cap keeps
 * this polite enough to run against production.
 */
const ORIGIN = process.env.SITE_ORIGIN ?? "https://www.gemopedia.online";
const CONCURRENCY = 12;

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

async function fetchWithTimeout(url, init = {}, timeoutMs = 20_000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      ...init,
      redirect: "manual",
      signal: controller.signal,
      headers: { "user-agent": "Gemopedia-SEO-Audit/1.0", ...init.headers },
    });
  } finally {
    clearTimeout(timer);
  }
}

async function mapConcurrent(items, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  async function run() {
    while (cursor < items.length) {
      const index = cursor++;
      try {
        results[index] = await worker(items[index], index);
      } catch (error) {
        results[index] = { url: items[index], error: String(error) };
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, run));
  return results;
}

const sitemapResponse = await fetchWithTimeout(`${ORIGIN}/sitemap.xml`);
if (!sitemapResponse.ok) {
  throw new Error(`Sitemap returned ${sitemapResponse.status}`);
}
const sitemapXml = await sitemapResponse.text();
const sitemapEntries = [
  ...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g),
].map((match) => decodeXml(match[1]));
const sitemapUrls = [...new Set(sitemapEntries)];
const duplicateSitemapUrls = [
  ...new Set(
    sitemapEntries.filter((url, index) => sitemapEntries.indexOf(url) !== index),
  ),
];

console.log(`Auditing ${sitemapUrls.length} unique sitemap URLs...`);
console.log(`Duplicate sitemap URLs: ${duplicateSitemapUrls.length}`);
for (const url of duplicateSitemapUrls) console.log(`  ${url}`);

const routeResults = await mapConcurrent(sitemapUrls, async (url) => {
  const response = await fetchWithTimeout(url);
  return {
    url,
    status: response.status,
    location: response.headers.get("location"),
  };
});

const routeFailures = routeResults.filter(
  (result) => result.error || result.status !== 200,
);
console.log(`Sitemap non-200 URLs: ${routeFailures.length}`);
for (const result of routeFailures) {
  console.log(
    `  ${result.status ?? "ERR"} ${result.url}` +
      (result.location ? ` -> ${result.location}` : "") +
      (result.error ? ` (${result.error})` : ""),
  );
}

// Fetch HTML pages and verify their canonical/link graph. Skip XML/text routes.
const htmlUrls = sitemapUrls.filter(
  (url) => !url.endsWith(".xml") && !url.endsWith(".txt"),
);
console.log(`\nChecking canonicals and internal links on ${htmlUrls.length} pages...`);

const pageResults = await mapConcurrent(htmlUrls, async (url) => {
  const response = await fetchWithTimeout(url);
  if (response.status !== 200) return { url, status: response.status, links: [] };
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/i)?.[1]?.trim();
  const description =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)/i)?.[1] ??
    html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description/i)?.[1];
  const robots =
    html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)/i)?.[1] ??
    html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']robots/i)?.[1];
  const canonical =
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1] ??
    html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical/i)?.[1];
  const links = [...html.matchAll(/href=["']([^"'#?]+)(?:[?#][^"']*)?["']/gi)]
    .map((match) => match[1])
    .filter((href) => href.startsWith("/") && !href.startsWith("//"));
  return { url, status: response.status, title, description, robots, canonical, links };
});

const canonicalFailures = pageResults.filter((page) => {
  if (page.status !== 200) return false;
  const expected = page.url.replace(/\/$/, "");
  const actual = page.canonical?.replace(/\/$/, "");
  return !actual || actual !== expected;
});
console.log(`Canonical mismatches/missing: ${canonicalFailures.length}`);
for (const page of canonicalFailures) {
  console.log(`  ${page.url} -> ${page.canonical ?? "(missing)"}`);
}

const metadataFailures = pageResults.filter(
  (page) =>
    page.status === 200 &&
    (!page.title ||
      !page.description ||
      page.robots?.toLowerCase().includes("noindex")),
);
console.log(`Missing metadata or sitemap URLs marked noindex: ${metadataFailures.length}`);
for (const page of metadataFailures) {
  console.log(
    `  ${page.url}: title=${Boolean(page.title)}, description=${Boolean(page.description)}, robots=${page.robots ?? "(none)"}`,
  );
}

function duplicateMetadata(field) {
  const values = new Map();
  for (const page of pageResults) {
    const value = page[field]?.trim().toLowerCase();
    if (!value) continue;
    if (!values.has(value)) values.set(value, []);
    values.get(value).push(page.url);
  }
  return [...values.values()].filter((urls) => urls.length > 1);
}

const duplicateTitles = duplicateMetadata("title");
const duplicateDescriptions = duplicateMetadata("description");
console.log(`Duplicate title groups: ${duplicateTitles.length}`);
console.log(`Duplicate description groups: ${duplicateDescriptions.length}`);
for (const urls of [...duplicateTitles, ...duplicateDescriptions]) {
  console.log(`  ${urls.join(", ")}`);
}

const linkSources = new Map();
for (const page of pageResults) {
  for (const href of page.links ?? []) {
    const absolute = new URL(href, ORIGIN).href;
    if (!linkSources.has(absolute)) linkSources.set(absolute, []);
    if (linkSources.get(absolute).length < 3) {
      linkSources.get(absolute).push(page.url);
    }
  }
}

const internalUrls = [...linkSources.keys()].filter((url) =>
  url.startsWith(ORIGIN),
);

// Every indexable sitemap page except the homepage must be discoverable from
// at least one other sitemap page. This catches accidental orphaning when a
// visual directory is paginated or capped for performance.
const orphanedUrls = htmlUrls.filter((url) => {
  const normalized = url.replace(/\/$/, "");
  if (normalized === ORIGIN.replace(/\/$/, "")) return false;
  return !linkSources.has(normalized) && !linkSources.has(`${normalized}/`);
});
console.log(`Sitemap URLs without an internal link: ${orphanedUrls.length}`);
for (const url of orphanedUrls) console.log(`  ${url}`);

const linkResults = await mapConcurrent(internalUrls, async (url) => {
  // A few CDNs handle HEAD unreliably even though GET is healthy. Retry with
  // GET before reporting a broken link so transient HEAD failures do not make
  // the audit noisy.
  let response;
  try {
    response = await fetchWithTimeout(url, { method: "HEAD" });
  } catch {
    response = await fetchWithTimeout(url);
  }
  return {
    url,
    status: response.status,
    location: response.headers.get("location"),
  };
});
const brokenLinks = linkResults.filter(
  (result) => result.error || result.status !== 200,
);
console.log(`Internal links to non-200 URLs: ${brokenLinks.length}`);
for (const result of brokenLinks) {
  console.log(
    `  ${result.status ?? "ERR"} ${result.url}` +
      (result.location ? ` -> ${result.location}` : ""),
  );
  for (const source of linkSources.get(result.url) ?? []) {
    console.log(`      linked from ${source}`);
  }
}

if (
  duplicateSitemapUrls.length ||
  routeFailures.length ||
  canonicalFailures.length ||
  metadataFailures.length ||
  duplicateTitles.length ||
  duplicateDescriptions.length ||
  orphanedUrls.length ||
  brokenLinks.length
) {
  process.exitCode = 1;
} else {
  console.log("\nSEO route audit passed.");
}

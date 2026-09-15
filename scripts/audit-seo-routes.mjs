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
const sitemapUrls = [
  ...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g),
].map((match) => decodeXml(match[1]));

console.log(`Auditing ${sitemapUrls.length} sitemap URLs...`);

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
  const canonical =
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1] ??
    html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical/i)?.[1];
  const links = [...html.matchAll(/href=["']([^"'#?]+)(?:[?#][^"']*)?["']/gi)]
    .map((match) => match[1])
    .filter((href) => href.startsWith("/") && !href.startsWith("//"));
  return { url, status: response.status, canonical, links };
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
const linkResults = await mapConcurrent(internalUrls, async (url) => {
  const response = await fetchWithTimeout(url, { method: "HEAD" });
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

if (routeFailures.length || canonicalFailures.length || brokenLinks.length) {
  process.exitCode = 1;
} else {
  console.log("\nSEO route audit passed.");
}

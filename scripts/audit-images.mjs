/**
 * Audits ACTUAL image coverage: for every sport in the site, calls Wikipedia's
 * summary endpoint (exactly like the site does at build time) and reports:
 *   - how many have a real image
 *   - which slugs return no image (either no article or no lead photo)
 *
 * Uses `wikipediaTitle` when set, otherwise falls back to the slug-derived
 * title. Prints results to stdout and writes JSON to scripts/image-audit.json.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Agent } from "undici";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "lib", "data", "sports");
const OUT = path.resolve(__dirname, "image-audit.json");

const dispatcher = new Agent({ connect: { rejectUnauthorized: false } });

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
      continue;
    }
    if (!entry.name.endsWith(".ts")) continue;
    if (entry.name === "index.ts") continue;
    if (entry.name.startsWith("_")) continue;
    if (full.includes(`${path.sep}_`)) continue;
    yield full;
  }
}

function slugToWikiTitle(slug) {
  return slug
    .split("-")
    .map((word, i) =>
      i === 0 && word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word,
    )
    .join(" ");
}

async function fetchImageOnce(title) {
  const safe = encodeURIComponent(title.replace(/ /g, "_"));
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${safe}?redirect=true`;
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "GemopediaBot/1.0 (https://gemopedia.online; hello@gemopedia.dev)",
        Accept: "application/json",
      },
      dispatcher,
    });
    if (res.status === 429) return { retry: true, status: 429 };
    if (!res.ok) return { ok: false, reason: `HTTP ${res.status}` };
    const data = await res.json();
    const img = data.originalimage ?? data.thumbnail;
    if (!img?.source) return { ok: false, reason: "no-image", pageTitle: data.title };
    return { ok: true, src: img.source, pageTitle: data.title };
  } catch (e) {
    return { retry: true, reason: `fetch-error: ${e?.message ?? String(e)}` };
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchImage(title) {
  const delays = [800, 2000, 5000, 12000];
  let last;
  for (let attempt = 0; attempt <= delays.length; attempt++) {
    const r = await fetchImageOnce(title);
    if (!r.retry) return r;
    last = r;
    if (attempt < delays.length) await sleep(delays[attempt]);
  }
  return { ok: false, reason: `rate-limited (${last?.status ?? last?.reason ?? "unknown"})` };
}

const entries = [];
for await (const file of walk(ROOT)) {
  const src = await fs.readFile(file, "utf8");
  if (!/\bexport\s+const\s+\w+\s*:\s*Sport\b/.test(src)) continue;

  const slugMatch = src.match(/slug\s*:\s*"([^"]+)"/);
  const nameMatch = src.match(/name\s*:\s*"([^"]+)"/);
  const wikiMatch = src.match(/wikipediaTitle\s*:\s*"([^"]+)"/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  const name = nameMatch?.[1] ?? slug;
  const explicitTitle = wikiMatch?.[1];
  const title = explicitTitle ?? slugToWikiTitle(slug);
  entries.push({
    file: path.relative(path.resolve(__dirname, ".."), file).replace(/\\/g, "/"),
    slug,
    name,
    title,
    explicit: Boolean(explicitTitle),
  });
}

// Deduplicate by slug (some sports appear in stubs and also in a real file — we
// scan only real files above, so this is defensive).
const bySlug = new Map();
for (const e of entries) if (!bySlug.has(e.slug)) bySlug.set(e.slug, e);
const uniq = [...bySlug.values()].sort((a, b) => a.slug.localeCompare(b.slug));

console.log(`Sports to check: ${uniq.length}`);

const CONCURRENCY = 3;
const PER_REQUEST_DELAY_MS = 150; // gentle pacing so we stay under Wikipedia's throttle
const results = new Array(uniq.length);
let done = 0;
let cursor = 0;

async function worker() {
  while (true) {
    const i = cursor++;
    if (i >= uniq.length) return;
    const e = uniq[i];
    const r = await fetchImage(e.title);
    results[i] = { ...e, ...r };
    done += 1;
    if (done % 20 === 0 || done === uniq.length) {
      process.stdout.write(`\r  Checked ${done}/${uniq.length}…`);
    }
    await sleep(PER_REQUEST_DELAY_MS);
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));
process.stdout.write("\n");

const missing = results.filter((r) => !r.ok);
const withImg = results.filter((r) => r.ok);

console.log();
console.log(`✅ With Wikipedia image: ${withImg.length}`);
console.log(`❌ Missing image:        ${missing.length}`);
console.log();

if (missing.length) {
  console.log("=== Sports MISSING a Wikipedia image ===");
  for (const m of missing) {
    console.log(`  [${m.slug}] title="${m.title}" reason=${m.reason}   → ${m.file}`);
  }
}

await fs.writeFile(OUT, JSON.stringify({ withImg, missing }, null, 2), "utf8");
console.log(`\nJSON report → ${path.relative(process.cwd(), OUT).replace(/\\/g, "/")}`);

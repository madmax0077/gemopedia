/**
 * For each sport listed in scripts/missing-titles.json, tries a list of
 * candidate Wikipedia article titles and reports which one returns an image.
 *
 * The input file is a plain JSON object of the form:
 *   { "slug": ["Candidate title 1", "Candidate title 2", ...] }
 *
 * Output goes to scripts/title-fixes.json.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Agent } from "undici";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IN = path.resolve(__dirname, "missing-titles.json");
const OUT = path.resolve(__dirname, "title-fixes.json");

const dispatcher = new Agent({ connect: { rejectUnauthorized: false } });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function tryTitleOnce(title) {
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
    if (res.status === 429) return { retry: true };
    if (!res.ok) return { ok: false, reason: `HTTP ${res.status}` };
    const data = await res.json();
    const img = data.originalimage ?? data.thumbnail;
    if (!img?.source) return { ok: false, reason: "no-image", pageTitle: data.title };
    return { ok: true, src: img.source, pageTitle: data.title, width: img.width, height: img.height };
  } catch (e) {
    return { retry: true, reason: `err: ${e?.message ?? String(e)}` };
  }
}

async function tryTitle(title) {
  const delays = [900, 2200, 5500];
  for (let a = 0; a <= delays.length; a++) {
    const r = await tryTitleOnce(title);
    if (!r.retry) return r;
    if (a < delays.length) await sleep(delays[a]);
  }
  return { ok: false, reason: "rate-limited" };
}

const raw = await fs.readFile(IN, "utf8");
const missing = JSON.parse(raw);

const fixes = {};
for (const [slug, candidates] of Object.entries(missing)) {
  process.stdout.write(`\n[${slug}]`);
  let found = null;
  for (const title of candidates) {
    process.stdout.write(`\n  → try "${title}"`);
    const r = await tryTitle(title);
    if (r.ok) {
      process.stdout.write(`   ✅ ${r.pageTitle}  (${r.src})`);
      found = { title, ...r };
      break;
    } else {
      process.stdout.write(`   ✗ ${r.reason}`);
    }
    await sleep(300);
  }
  fixes[slug] = found ?? { title: null, ok: false };
}
process.stdout.write("\n\n");

const foundCount = Object.values(fixes).filter((f) => f?.ok).length;
console.log(`✅ Found working titles for ${foundCount}/${Object.keys(fixes).length}`);
console.log(`Remaining un-fixable (Wikipedia has no lead photo anywhere): ${Object.keys(fixes).length - foundCount}`);
console.log();

for (const [slug, r] of Object.entries(fixes)) {
  if (!r?.ok) console.log(`  ❌ ${slug} — no working title found`);
}

await fs.writeFile(OUT, JSON.stringify(fixes, null, 2), "utf8");
console.log(`\nJSON → ${path.relative(process.cwd(), OUT).replace(/\\/g, "/")}`);

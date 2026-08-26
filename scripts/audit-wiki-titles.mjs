/**
 * Audits which sport files have `wikipediaTitle` set and which rely on the
 * slug-to-title fallback. Prints a summary and lists any files missing the
 * explicit title so we can decide whether to backfill them.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "lib", "data", "sports");

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

const withTitle = [];
const withoutTitle = [];

for await (const file of walk(ROOT)) {
  const src = await fs.readFile(file, "utf8");
  if (!/\bexport\s+const\s+\w+\s*:\s*Sport\b/.test(src)) continue;
  if (/\bwikipediaTitle\s*:/.test(src)) {
    withTitle.push(file);
  } else {
    withoutTitle.push(file);
  }
}

const rel = (p) => path.relative(path.resolve(__dirname, ".."), p).replace(/\\/g, "/");

console.log(`Total sport files scanned:   ${withTitle.length + withoutTitle.length}`);
console.log(`With explicit wikipediaTitle: ${withTitle.length}`);
console.log(`Relying on slug fallback:     ${withoutTitle.length}`);
console.log();
if (withoutTitle.length) {
  console.log("=== Files WITHOUT explicit wikipediaTitle ===");
  for (const f of withoutTitle) console.log(`  ${rel(f)}`);
}

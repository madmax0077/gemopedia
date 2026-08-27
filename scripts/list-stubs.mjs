/**
 * Lists every game currently living as a shallow stub (in a _stubs_*.ts
 * aggregator) rather than a fully deep-filled individual file. Also flags
 * whether an individual .ts file already exists for that slug (so we don't
 * re-do work that's actually done).
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "lib", "data", "sports");

async function collectIndividualSlugs() {
  const slugs = new Set();
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
  for await (const f of walk(ROOT)) {
    const src = await fs.readFile(f, "utf8");
    const m = src.match(/slug\s*:\s*"([^"]+)"/);
    if (m) slugs.add(m[1]);
  }
  return slugs;
}

const individual = await collectIndividualSlugs();

const stubFiles = (await fs.readdir(ROOT))
  .filter((f) => f.startsWith("_stubs_") && f.endsWith(".ts"))
  .sort();

for (const sf of stubFiles) {
  const full = path.join(ROOT, sf);
  const src = await fs.readFile(full, "utf8");
  // Each stub literal starts with an object containing `slug: "..."` and `name: "..."`.
  const stubs = [];
  const re = /\{\s*([^}]*?slug\s*:\s*"([^"]+)"[^}]*?name\s*:\s*"([^"]+)"[^}]*?)\}/gs;
  let m;
  while ((m = re.exec(src)) !== null) {
    stubs.push({ slug: m[2], name: m[3] });
  }
  const still = stubs.filter((s) => !individual.has(s.slug));
  console.log(`\n=== ${sf} — ${still.length} still stubbed (of ${stubs.length}) ===`);
  for (const s of still) console.log(`  ${s.slug.padEnd(40)} ${s.name}`);
}

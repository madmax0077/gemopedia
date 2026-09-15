/**
 * Rewrites the `redirects` block of vercel.json from RETIRED_SLUGS.
 *
 * `redirects` in next.config.mjs is unsupported under `output: "export"`,
 * so the platform-level vercel.json is where these have to live.
 *
 * Run after editing lib/data/retiredSlugs.ts:
 *   npx tsx scripts/gen-redirects.mts
 */
import fs from "node:fs";
import { RETIRED_SLUGS } from "../lib/data/retiredSlugs";

const CONFIG = "vercel.json";
const config = JSON.parse(fs.readFileSync(CONFIG, "utf8"));

config.redirects = Object.entries(RETIRED_SLUGS)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([from, to]) => ({
    source: `/sports/${from}`,
    destination: `/sports/${to}`,
    permanent: true,
  }));

fs.writeFileSync(CONFIG, `${JSON.stringify(config, null, 2)}\n`);
console.log(`wrote ${config.redirects.length} redirects to ${CONFIG}`);

/**
 * Applies a curated set of `wikipediaTitle` overrides to the corresponding
 * sport-data files. Only touches files that already have the field set;
 * leaves everything else untouched.
 *
 * Input map hard-coded below so we don't accidentally re-run an out-of-date
 * scripts/title-fixes.json against future files.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "lib", "data", "sports");

// slug → { file (relative to lib/data/sports), newTitle }
const FIXES = [
  ["angry-birds", "video/angry-birds.ts", "Angry Birds (video game)"],
  ["bulls-and-cows", "puzzle/bulls-and-cows.ts", "Mastermind (board game)"],
  ["call-of-duty", "video/call-of-duty.ts", "Call of Duty (video game)"],
  ["civilization", "video/civilization.ts", "Sid Meier's Civilization"],
  ["counter-strike", "esports/counter-strike.ts", "Counter-Strike 2"],
  ["dance-dance-revolution", "video/dance-dance-revolution.ts", "Dance Dance Revolution (1998 video game)"],
  ["donkey-kong", "video/donkey-kong.ts", "Donkey Kong (character)"],
  ["final-fantasy", "video/final-fantasy.ts", "Final Fantasy (video game)"],
  ["five-card-draw", "card/five-card-draw.ts", "Poker"],
  ["guitar-hero", "video/guitar-hero.ts", "Guitar Hero (video game)"],
  ["halo", "video/halo.ts", "Halo: Combat Evolved"],
  ["liars-dice", "dice/liars-dice.ts", "Perudo"],
  ["madden-nfl", "video/madden-nfl.ts", "Madden NFL 24"],
  ["metroid", "video/metroid.ts", "Metroid (video game)"],
  ["nascar", "motor/nascar.ts", "NASCAR Cup Series"],
  ["nba-2k", "video/nba-2k.ts", "NBA 2K25"],
  ["resident-evil", "video/resident-evil.ts", "Resident Evil (1996 video game)"],
  ["spirit-island", "board/spirit-island.ts", "Spirit Island (board game)"],
  ["super-smash-bros", "video/super-smash-bros.ts", "Super Smash Bros. (video game)"],
  ["superbike-racing", "motor/superbike-racing.ts", "Superbike racing"],
  ["tekken", "video/tekken.ts", "Tekken (video game)"],
];

let touched = 0;
let skipped = 0;

for (const [slug, rel, newTitle] of FIXES) {
  const file = path.join(ROOT, rel);
  let src;
  try {
    src = await fs.readFile(file, "utf8");
  } catch {
    console.log(`  ⚠ ${slug}: file not found → ${rel}`);
    skipped += 1;
    continue;
  }

  const re = /(wikipediaTitle\s*:\s*")([^"]*)(")/;
  const m = src.match(re);
  if (!m) {
    console.log(`  ⚠ ${slug}: no wikipediaTitle field in ${rel}`);
    skipped += 1;
    continue;
  }
  if (m[2] === newTitle) {
    console.log(`  · ${slug}: already "${newTitle}"`);
    skipped += 1;
    continue;
  }
  const next = src.replace(re, `$1${newTitle.replace(/\$/g, "$$$$")}$3`);
  await fs.writeFile(file, next, "utf8");
  console.log(`  ✓ ${slug}: "${m[2]}" → "${newTitle}"`);
  touched += 1;
}

console.log(`\nDone. Updated ${touched} file(s), skipped ${skipped}.`);

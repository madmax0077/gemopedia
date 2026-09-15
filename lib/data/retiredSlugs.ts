/**
 * Slugs retired because they were the *same game* published twice under
 * different slugs — typically a thin stub entry shadowing a fully-authored
 * page. `dedupeBySlug` in ./index.ts only catches exact slug matches, so
 * near-misses like "yo-yo" vs "yoyo" and "klondike" vs "klondike-solitaire"
 * both survived into the catalog.
 *
 * Google clustered each pair, and because both pages self-canonicalised
 * neither nominated the other — so Search Console reported "Duplicate
 * without user-selected canonical" and dropped one of them from the index.
 *
 * Maps retired slug -> surviving slug. Single source of truth for both
 * removing the entry from the catalog and emitting the 301s in vercel.json,
 * so an old URL keeps its accumulated ranking instead of 404ing.
 * Regenerate the redirects with `npx tsx scripts/gen-redirects.mts`.
 *
 * Deliberately an explicit list rather than automatic name-matching: "Golf"
 * the precision sport and "Golf (card game)" share a base name but are
 * unrelated games, so name-matching would wrongly delete one of them.
 *
 * This lives in its own module so the redirect generator can import it
 * without pulling in the ~1500-file catalog.
 */
export const RETIRED_SLUGS: Record<string, string> = {
  "blood-on-clocktower": "blood-on-the-clocktower",
  "candy-crush": "candy-crush-saga",
  "caribbean-stud-poker": "caribbean-stud",
  "civilization-game": "civilization",
  "decrypto-team": "decrypto",
  "diablo-game": "diablo",
  "doom-game": "doom",
  "ea-sports-fc": "ea-fc",
  "enduro-motorbike": "enduro",
  ballooning: "hot-air-ballooning",
  klondike: "klondike-solitaire",
  "mexican-train": "mexican-train-dominoes",
  "mobile-legends-bang-bang": "mobile-legends",
  mothership: "mothership-rpg",
  "portal-game": "portal",
  "president-card-game": "president",
  "roblox-game": "roblox",
  "silambam-tamil": "silambam",
  sonic: "sonic-the-hedgehog",
  "speed-cubing": "speedcubing",
  "spyfall-party": "spyfall",
  "star-wars-xwing": "star-wars-x-wing",
  "starcraft-2": "starcraft-ii",
  "tarot-game": "tarot",
  trampolining: "trampoline",
  triominos: "triominoes",
  "two-truths-lie": "two-truths-and-a-lie",
  "ultimate-texas-hold-em": "ultimate-texas-holdem",
  "ultra-marathon": "ultramarathon",
  "warhammer-40k": "warhammer-40000",
  "warhammer-fantasy-rp": "warhammer-fantasy-roleplay",
  "wavelength-party": "wavelength",
  "yo-yo": "yoyo",
};

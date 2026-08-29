import type { Sport } from "@/lib/types";

export const cthulhuDice: Sport = {
  id: "cthulhu-dice",
  slug: "cthulhu-dice",
  name: "Cthulhu Dice",
  officialName: "Cthulhu Dice",
  aliases: ["SJG Cthulhu Dice"],
  shortDescription:
    "Steve Jackson Games ultra-quick 2-6 player dice game (Steve Jackson, 2010) — one custom 12-sided die + sanity tokens. Roll to steal sanity from opponents; last sane player wins. ~15 min, ~$10 retail. Iconic Lovecraftian party filler.",
  longDescription:
    "Cthulhu Dice is an ultra-quick lightweight party dice game designed by Steve Jackson + published by Steve Jackson Games (SJG), released 2010. 2-6 players; ~15 min play; ~$10 MSRP. Uses one 12-sided die with symbols instead of numbers (Yellow Sign, Elder Sign, Cthulhu, Tentacle, Eye of Horus). Each player starts with 3 Sanity tokens (glass beads). On your turn: pick a target player, roll the die once, resolve symbol effect (Yellow Sign = target loses 1 Sanity to you; Elder Sign = you gain 1 Sanity from pool; Cthulhu = everyone loses Sanity; Tentacle = swap Sanity totals; Eye of Horus = target loses 1 to pool). When you're reduced to 0 Sanity, you become 'insane' — still play, but win only if all other insane players joined by everyone becoming insane in same round (last-sane-wins otherwise). Iconic Lovecraftian light party game; often used as filler between heavier games. Tiny footprint (fits in shirt pocket). Rules learnable in 60 seconds.",
  category: "dice-games",
  subCategory: "quick party dice (Lovecraftian)",
  sportType: "mixed", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Steve Jackson Games, Austin, Texas)",
  estimatedOrigin: "Released 2010 by Steve Jackson Games",
  players: { min: 2, max: 6, note: "Best with 3-4 players." },
  equipment: [
    { name: "1 custom 12-sided die", description: "Symbol die: Yellow Sign, Elder Sign, Cthulhu, Tentacle, Eye of Horus faces." },
    { name: "Sanity tokens (glass beads)", description: "3 per player at start." },
    { name: "Tiny rulebook + carry pouch", description: "Fits in shirt pocket." },
  ],
  duration: { approximateMinutes: 15, structure: "Single game ~10-15 min; typically play multiple back-to-back." },
  objective: "Be the last player with Sanity remaining (or if all players go insane simultaneously, all insane players win).",
  matchStructure: "Rounds continue until only one player has Sanity remaining (or all go insane).",
  basicRules: [
    { title: "Roll die at chosen target on your turn", body: "Pick any other player as target, roll the 12-sided die, resolve symbol effect." },
    { title: "Yellow Sign / Elder Sign / Cthulhu / Tentacle / Eye", body: "Each face has different Sanity-transfer effect." },
    { title: "Reduce all opponents to 0 Sanity to win", body: "Last sane player wins; or all players go insane in same round = all insane players win." },
  ],
  advancedRules: [
    { title: "Insane player still plays", body: "Insane players continue rolling on turns but hoping others also go insane." },
    { title: "Sanity pool (Elder Sign)", body: "Central pool that pays out on Elder Sign rolls." },
  ],
  scoring: {
    summary: "No score — Sanity survival based.",
    winCondition: "Last player with Sanity wins; or all-insane simultaneous = all insane players share win.",
    breakdown: [{ action: "Sanity token", points: "Tracked personally" }],
  },
  penalties: [
    { title: "Losing all Sanity", body: "Become insane; can only win if all other players also insane." },
  ],
  positions: [{ name: "Cthulhu Cultist", role: "Solo player attempting to steal others' Sanity.", count: 1 }],
  officiating: { officials: ["Group consensus"], summary: "No officials." },
  governingBodies: [
    { name: "Steve Jackson Games", founded: 1980, headquarters: "Austin, Texas" },
  ],
  majorCompetitions: [
    { name: "Not applicable — party filler game", frequency: "n/a", founded: 2010, region: "n/a" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "IT", "ES", "JP", "AU"],
  famousAthletes: ["Steve Jackson (designer)"],
  records: [
    { title: "Released 2010 by SJG", holder: "Steve Jackson Games", value: "Released 2010; still in print + widely stocked", year: 2010 },
    { title: "Signature quick-filler dice game", holder: "SJG", value: "Considered signature 'quick filler' Lovecraftian party dice game", year: 2015 },
  ],
  variants: ["cthulhu-dice-standard"],
  relatedSports: ["zombie-dice", "elder-sign", "martian-dice", "rorys-story-cubes"],
  skills: ["quick decision-making (target choice)", "luck management", "party-game social reading"],
  strategies: [
    { title: "Target leader with high Sanity", body: "Focus roll on player with most Sanity to prevent runaway leader." },
    { title: "Tentacle swap timing", body: "If Tentacle rolls, use to swap Sanity with player whose total helps you most." },
  ],
  terminology: [
    { term: "Yellow Sign", meaning: "Face — target loses 1 Sanity to you" },
    { term: "Elder Sign", meaning: "Face — you gain 1 Sanity from pool" },
    { term: "Cthulhu", meaning: "Face — everyone loses Sanity" },
    { term: "Tentacle", meaning: "Face — swap Sanity totals with target" },
    { term: "Eye of Horus", meaning: "Face — target loses 1 to pool" },
    { term: "Sanity", meaning: "Player HP-equivalent tokens" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "First 3-player game", body: "Learn 5 die faces in one game (~10 min)." }] },
    { level: "intermediate", steps: [{ title: "5-6 player chaos", body: "Multi-player games have more chaos + more insane-simultaneous-win potential." }] },
  ],
  faq: [
    { question: "How long is one game of Cthulhu Dice?", answer: "10-15 minutes typically. Designed as a quick filler between larger games or a light party game." },
    { question: "Can I win after going insane?", answer: "Yes — if all players go insane in the same round, all insane players share the win. So 'trolling' a slow-to-die opponent by inducing simultaneous insanity is a legitimate strategy." },
  ],
  wikipediaTitle: "Cthulhu Dice",
  sources: [{ label: "BoardGameGeek — Cthulhu Dice", url: "https://boardgamegeek.com/boardgame/64720/cthulhu-dice", publisher: "BoardGameGeek" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default cthulhuDice;

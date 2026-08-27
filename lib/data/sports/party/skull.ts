import type { Sport } from "@/lib/types";

export const skull: Sport = {
  id: "skull",
  slug: "skull",
  name: "Skull",
  officialName: "Skull",
  aliases: ["Skull", "Skull & Roses"],
  shortDescription:
    "MINIMALIST BLUFFING PARTY GAME (2011) by HERVÉ MAROT, published by LUI-MÊME / ASMODEE. 3-6 players use 4 wooden ROUND TILES (3 FLOWERS + 1 SKULL) to bid on 'how many flowers I can flip without hitting a skull.' Bidder must reveal that many played tiles + if any is a skull, they LOSE + discard a random tile forever (game over at 0 tiles). Considered THE minimalist masterpiece of bluffing games. Won multiple French game awards. HELD BGG top-50 party. 15-30 min.",
  longDescription:
    "SKULL (originally SKULL & ROSES) is a MINIMALIST BLUFFING PARTY GAME designed by HERVÉ MAROT (France), published by LUI-MÊME (France) later Asmodee. Originally released as SKULL & ROSES in 2011; reprinted as SKULL by Asmodee in 2013. 3-6 PLAYERS use just 4 WOODEN ROUND TILES each (3 FLOWERS + 1 SKULL) — no board, no dice, no cards beyond these. Extremely simple physical game with DEEP BLUFFING TENSION. Bid on 'HOW MANY FLOWERS I can flip without hitting a skull' after all players secretly place tiles. Considered THE MINIMALIST MASTERPIECE of bluffing games + a benchmark for elegant party game design. WON multiple French game awards (As d'Or 2012 nominee, Tric Trac). HELD BGG TOP-50 PARTY for 12+ years (2011-2026). GAMEPLAY: Each player has 4 tiles (3 flowers + 1 skull). Each round: (1) BID PHASE — one player begins by placing a tile face-down in front of them; each other player then plays a tile OR ENTERS BIDDING; (2) A player enters bidding by declaring 'X flowers' (must be higher than previous); (3) Other players raise bid or pass; (4) Highest bidder becomes THE CHALLENGER; (5) Challenger must FLIP their own tiles first (start with own), then any other players' tiles totaling to bid; (6) SUCCESS = all flipped are flowers = challenger flips own tile face up (records win); (7) FAIL = any flipped is a SKULL = challenger LOSES A RANDOM TILE FOREVER (given to loser player). WINNER = first to 2 successful challenges. GAME OVER FOR PLAYER = when down to 0 tiles (out). BLUFF: place skull first, bid low, force others to flip. TRUST: place flower, hope opponents can't detect. Considered PSYCHOLOGY GAME > mechanics; you're reading FACES not cards. RECEPTION: BGG top-50 party 12+ years; multiple French game awards; considered a MASTERPIECE of minimalist design.",
  category: "party-games",
  subCategory: "bluffing party / minimalist / psychological / French classic",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (Lui-Même publisher; Hervé Marot designer)",
  estimatedOrigin: "Released 2011 Lui-Même (originally as Skull & Roses); reprinted 2013 Asmodee",
  players: { min: 3, max: 6, note: "3-6 players; BEST AT 4-5. Escalates well with more bluffers." },
  field: {
    surfaceName: "Table for tile play",
    dimensions: "~60×60cm",
    description: "Each player has 4 wooden round tiles (3 flower + 1 skull) + personal mat/coaster (biker gang theme in original art).",
  },
  equipment: [
    { name: "Skull base box", description: "$20 USD; 24 wooden tiles + 6 personal mats" },
    { name: "6 personal mats (biker-gang themed art)", description: "Themed art per player" },
    { name: "24 wooden round tiles (18 flower + 6 skull)", description: "3 flowers + 1 skull per player" },
  ],
  duration: { approximateMinutes: 25, structure: "15-30 min per game; first to 2 wins." },
  objective: "Be the first player to SUCCEED at 2 CHALLENGES (bidding + flipping the declared number of flowers without hitting a skull).",
  basicRules: [
    { title: "Each player has 4 tiles: 3 flowers + 1 skull", body: "Fixed hand." },
    { title: "Round: place tiles face-down in front of you", body: "Others follow with more tiles OR enter bidding." },
    { title: "Bid 'X flowers' higher than previous; others raise or pass", body: "Highest bid = challenger." },
    { title: "Challenger flips OWN tiles first, then other players', totaling bid", body: "Must be all flowers." },
    { title: "Success = record win; Fail = skull revealed = LOSE random tile forever", body: "Attrition mechanism." },
    { title: "First to 2 wins = victor", body: "Short game." },
  ],
  scoring: {
    summary: "First to 2 successful CHALLENGES wins.",
    breakdown: [
      { action: "Successful challenge (all flipped tiles = flowers)", points: "1 win token" },
      { action: "2 win tokens", points: "WIN game" },
      { action: "Failed challenge (skull flipped)", points: "Lose 1 random tile (attrition)" },
      { action: "0 tiles remaining", points: "OUT of game" },
    ],
    winCondition: "First to 2 successful challenges wins.",
  },
  governingBodies: [
    { name: "Lui-Même (original publisher)", founded: 2011, headquarters: "France" },
    { name: "Asmodee (current publisher)", founded: 1995, headquarters: "France" },
    { name: "Hervé Marot (designer)", founded: 2011, headquarters: "France" },
  ],
  majorCompetitions: [
    { name: "As d'Or 2012 nominee (France)", frequency: "annual", founded: 2012, region: "France" },
    { name: "Tric Trac awards (France)", frequency: "annual", founded: 2011, region: "France" },
    { name: "BGG top-50 party 12+ years", frequency: "ongoing", founded: 2011, region: "worldwide" },
  ],
  countriesPlayed: ["FR", "DE", "US", "GB", "IT", "ES", "PL", "AU", "CA", "SE", "NL", "JP"],
  famousAthletes: [
    "Hervé Marot (France) — Designer",
  ],
  variants: [
    "skull-and-roses-2011-original",
    "skull-2013-asmodee-reprint",
    "skull-roses-red-red-red-edition-2013-variant-with-crowning-card",
  ],
  relatedSports: ["coup", "love-letter", "spyfall", "the-resistance-avalon", "poker"],
  skills: ["bluffing", "reading faces", "psychology", "risk assessment", "aggressive vs cautious play style"],
  strategies: [
    { title: "Skull-first bluff", body: "Play skull first + let others follow with flowers; then bid low to lure opponent challenge." },
    { title: "Trust-building rounds", body: "Play flowers early; build trust before bluff round." },
    { title: "Force challenger to flip your tiles", body: "Big bids force challenger to flip yours = they might hit your skull." },
    { title: "Read player tendencies", body: "Some players never bluff early; some bluff every round." },
    { title: "Play mind games", body: "Table talk, glances, deliberate slow placement = psychological weapons." },
  ],
  terminology: [
    { term: "Flower", meaning: "Safe tile (3 per player)." },
    { term: "Skull", meaning: "Danger tile (1 per player); flipped = challenger loses." },
    { term: "Bid", meaning: "Declaration of 'X flowers' — must be higher than previous." },
    { term: "Challenger", meaning: "Highest bidder who must flip declared number of flowers." },
    { term: "Attrition", meaning: "Lost tiles are gone forever; 0 tiles = out of game." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy Skull ($20)", body: "2-min learning; deep psychology reveals over games." },
    ]},
  ],
  faq: [
    { question: "What is Skull?", answer: "MINIMALIST BLUFFING PARTY GAME (2011) by Hervé Marot. 3-6 players use 4 wooden tiles each (3 flowers + 1 skull) to bid on 'how many flowers I can flip without hitting a skull.' Considered THE minimalist masterpiece of bluffing games. Won multiple French awards. HELD BGG top-50 party 12+ years. 15-30 min." },
  ],
  wikipediaTitle: "Skull (game)",
  sources: [
    { label: "Asmodee — Skull", url: "https://www.asmodee.com/en/games/skull/", publisher: "Asmodee" },
    { label: "BoardGameGeek — Skull", url: "https://boardgamegeek.com/boardgame/92415/skull", publisher: "BGG" },
    { label: "Wikipedia — Skull (game)", url: "https://en.wikipedia.org/wiki/Skull_(game)", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-27",
  confidence: "verified",
};

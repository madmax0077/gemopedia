import type { Sport } from "@/lib/types";

export const pokemonGo: Sport = {
  id: "pokemon-go",
  slug: "pokemon-go",
  name: "Pokémon GO",
  officialName: "Pokémon GO",
  aliases: ["PoGO", "PoGo"],
  shortDescription:
    "Free-to-play augmented-reality mobile game (Niantic + The Pokémon Company, launched July 6, 2016 iOS/Android) — players walk real-world locations to encounter, catch, hatch, and battle Pokémon. Competitive PvP GO Battle League (GBL) + Community Days. 500M+ downloads first year; $6B+ lifetime revenue.",
  longDescription:
    "Pokémon GO is a free-to-play augmented-reality mobile game co-developed by Niantic (San Francisco) + The Pokémon Company, launched July 6, 2016 on iOS + Android. Players walk real-world locations (GPS-tracked) to encounter, catch, hatch (via egg incubators + distance walked), and battle Pokémon. Competitive PvP through the GO Battle League (GBL) — three cups by CP cap (Great League ≤1500, Ultra League ≤2500, Master League no cap) + rotating specialty formats. Raids are async 20-player max group battles (local or Remote Raid Pass). Community Days (monthly featured Pokémon 3-hour event) + Elite TM/CD moves. Official Pokémon World Championships added Pokémon GO PvP division in 2022 (London → Yokohama → Honolulu). 500M+ downloads first year; $6B+ lifetime revenue (Sensor Tower 2023); peaked 45M DAU July 2016.",
  category: "video-games",
  subCategory: "mobile augmented-reality game",
  sportType: "mixed",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Niantic San Francisco) + Japan (The Pokémon Company)",
  estimatedOrigin: "Launched July 6, 2016 (US + AU/NZ first); global rollout by end of 2016",
  players: { min: 1, max: 20, note: "Solo play + 20-player async raids + 3v3 PvP." },
  equipment: [
    { name: "Smartphone (iOS 14+ / Android 8+)", description: "Required — GPS, camera, gyroscope for AR mode." },
    { name: "Pokémon GO Plus / GO Plus+ / Poké Ball Plus", description: "Bluetooth wearables that auto-catch + spin stops without opening phone." },
    { name: "External battery pack", description: "GO drains battery — active players carry 10,000+ mAh power bank." },
    { name: "Comfortable walking shoes", description: "Serious players walk 5-15 km per Community Day event." },
  ],
  duration: { approximateMinutes: 5, structure: "Battle 4 min max; Raid 3-5 min encounter + catch; Community Day 3 hrs monthly." },
  objective: "Complete Pokédex; climb GBL ELO ranks (Rank 1-24 + Legend); raid + trade with community.",
  matchStructure: "Solo real-world exploration + async raids (up to 20 players in remote/local groups) + PvP GO Battle League (3v3 shielded battles, 240-sec timer or 24 turns).",
  basicRules: [
    { title: "GPS location-locked spawns", body: "Pokémon appear based on player GPS + biome; speed lock >35 mph disables spawns." },
    { title: "3 Pokémon per PvP team, 2 shields", body: "Battle League 3v3 with 2 protective shields per player." },
    { title: "Level 40 → 50 mastery grind", body: "XP levels 1-40 easy; 41-50 requires XP + specific Master Tasks." },
  ],
  advancedRules: [
    { title: "IV differences PvP vs raid", body: "PvP IVs prioritise defensive stats to maximise CP under cap; raid IVs prioritise attack." },
    { title: "Weather boost mechanics", body: "Weather-boosted Pokémon spawn at higher level (25 vs 20 max wild) + higher IV floor." },
  ],
  scoring: {
    summary: "PvP Battle League ELO ranks; XP levels 1-50; Pokédex + catch counts on trainer profile.",
    winCondition: "PvP battle: reduce opponent's 3 Pokémon to 0 HP or higher HP at time-out.",
    breakdown: [
      { action: "PvP win", points: "ELO gain in current cup" },
      { action: "Rare candy from raids", points: "Endgame Pokémon powering resource" },
    ],
  },
  penalties: [
    { title: "Cheating (spoofing, botting)", body: "Progressive strikes: soft-ban (7 days) → warning → 30-day ban → permanent termination." },
    { title: "Speed lock", body: "Traveling >35 mph disables PokéStop spinning + spawn tracking (anti-driving safety)." },
    { title: "Tournament rule violation", body: "Silph Arena + Play! Pokémon Worlds — team-sheet, unsportsmanlike conduct = DQ." },
  ],
  positions: [{ name: "Trainer", role: "Player who catches, trains, battles Pokémon in AR world.", count: 1 }],
  officiating: {
    officials: ["Play! Pokémon Tournament Organizers", "Silph Arena regional TOs", "Head Judges + Floor Judges at Worlds"],
    summary: "GBL is algorithmically matched; live tournaments have human TO + judge staff.",
  },
  governingBodies: [
    { name: "Niantic Inc.", founded: 2010, headquarters: "San Francisco, California, USA" },
    { name: "The Pokémon Company International", founded: 1998, headquarters: "Bellevue, Washington, USA" },
    { name: "Silph Arena (community)", founded: 2018, headquarters: "online (worldwide)" },
  ],
  majorCompetitions: [
    { name: "Pokémon GO World Championships", frequency: "annual", founded: 2022, region: "global" },
    { name: "Silph Arena Championship", frequency: "annual", founded: 2018, region: "global (community)" },
    { name: "Community Days (monthly)", frequency: "monthly", founded: 2018, region: "global" },
  ],
  countriesPlayed: ["US", "JP", "GB", "DE", "FR", "IT", "BR", "AU", "KR", "IN"],
  famousAthletes: [
    "Xhamm (Japan) — Silph Arena champion",
    "GreenAstro (USA) — GO Battle League community icon",
  ],
  records: [
    { title: "Most-downloaded mobile game launch", holder: "Niantic", value: "500M+ downloads first year; peak 45M concurrent DAU July 2016", year: 2016 },
    { title: "Highest-grossing mobile game", holder: "Niantic + TPC", value: "$6B+ lifetime revenue as of 2023 (Sensor Tower)", year: 2020 },
    { title: "World Championship Pokémon GO", holder: "Various", value: "First Pokémon GO PvP Worlds — London 2022; Yokohama 2023; Honolulu 2024", year: 2022 },
  ],
  variants: ["pokemon-go-plus-hardware-play", "silph-arena-community-ruleset"],
  relatedSports: ["pokemon-video-games", "pokemon-scarlet-violet", "pokemon-unite", "pokemon-tcg"],
  skills: ["shield-baiting", "team-building", "IV optimisation", "raid coordination"],
  strategies: [
    { title: "Shield-baiting", body: "Force opponent to use shield on cheap fast-charge move, then unleash primary charged attack." },
    { title: "Buddy candy farm", body: "Set high-candy-need Pokémon as buddy, walk 3-20km per candy." },
    { title: "Weather boost hunt", body: "Hunt during matching weather — boosted spawn at higher level + IV floor." },
  ],
  terminology: [
    { term: "CP", meaning: "Combat Power — battle strength metric" },
    { term: "IV", meaning: "Individual Values — innate stat genes" },
    { term: "GBL", meaning: "GO Battle League" },
    { term: "Community Day", meaning: "Monthly 3-hour featured Pokémon event" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "New Trainer basics", body: "Catching, PokéStop spinning, gym battling, buddy walking, first raids." }] },
    { level: "intermediate", steps: [{ title: "PvP GBL climb", body: "IV optimisation, team composition (lead/switch/closer), shield strategy." }] },
    { level: "advanced", steps: [{ title: "Elite PvP + Silph Arena", body: "Meta-cycle analysis, tournament team-building, factions, Worlds qualifying." }] },
  ],
  faq: [
    { question: "Is Pokémon GO free to play?", answer: "Yes — free download with optional in-app purchases (PokéCoins for items, remote raid passes, event tickets)." },
    { question: "What is the GO Battle League?", answer: "Season-based PvP ranked ladder with three cups: Great (≤1500 CP), Ultra (≤2500 CP), Master (no cap) + rotating specialty formats." },
  ],
  wikipediaTitle: "Pokémon Go",
  sources: [{ label: "Wikipedia — Pokémon Go", url: "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default pokemonGo;

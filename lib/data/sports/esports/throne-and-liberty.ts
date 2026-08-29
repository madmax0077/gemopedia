import type { Sport } from "@/lib/types";

export const throneAndLiberty: Sport = {
  id: "throne-and-liberty",
  slug: "throne-and-liberty",
  name: "Throne and Liberty",
  officialName: "Throne and Liberty",
  aliases: ["TL", "TnL", "쓰론 앤 리버티"],
  shortDescription:
    "NCSoft + Amazon Games MMORPG (Dec 7, 2023 KR; Oct 1, 2024 global) — massive-scale PvPvE with 100+ player siege battles + free-to-play F2P model. Set on Solisium continent; players 'transform' into eagle/wolf/piranha/lightning-wolf. 1M+ concurrent Steam launch.",
  longDescription:
    "Throne and Liberty is a massively-multiplayer online role-playing game developed by NCSoft + published by Amazon Games (global) / NCSoft (Korea) — released December 7, 2023 in South Korea, October 1, 2024 globally for PS5, Xbox Series X/S, and PC (Steam). Free-to-play model with cosmetic + convenience monetisation. Set on the continent of Solisium — players choose from various races and use flexible weapon-swap system (no locked classes; equip any 2 weapons freely). Signature mechanic: 'Morph Transformation' — players transform into eagle (flight), wolf (fast run), piranha (swim), lightning-wolf (combat) forms for traversal + gameplay. Combat blends real-time action + tab-target elements; day/night + weather cycles affect boss spawns + world events. Massive-scale PvPvE: 100+ player siege wars, guild vs guild territory control, world bosses, arch-boss raids requiring 200+ players. Peaked 1M+ concurrent Steam players at global launch October 2024. Mixed reception — praised for scale + free-to-play model + PvPvE depth; criticised for grind + auction house RMT concerns. Multiple content updates since launch.",
  category: "esports",
  subCategory: "MMORPG (large-scale PvPvE)",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "major",
  countryOfOrigin: "KR",
  regionOfOrigin: "South Korea (NCSoft, Seongnam)",
  estimatedOrigin: "Released Dec 7, 2023 (Korea); Oct 1, 2024 (global) by NCSoft + Amazon Games",
  players: { min: 1, max: 500, note: "Solo questing → 100+ player siege battles → 200+ player arch-boss raids." },
  equipment: [
    { name: "PS5, Xbox Series X/S, PC (Steam / Amazon Games)", description: "Cross-play across all platforms globally." },
    { name: "Standard controller or M+KB", description: "M+KB advantage for complex targeting; controller fully supported." },
  ],
  duration: { approximateMinutes: 60, structure: "Daily play session: 30-60 min (dungeons + events); guild siege 60-120 min; arch-boss raid 30-60 min." },
  objective: "Progress character level + gear; participate in guild siege wars + world boss events; contribute to guild territory control on Solisium.",
  matchStructure: "Persistent MMORPG world; scheduled sieges + world bosses + arch-boss raids; guild-vs-guild territory control across regions.",
  basicRules: [
    { title: "Weapon-swap classless system", body: "No fixed class — equip any 2 weapons (Sword+Shield, Longbow, Wand, Dagger, Staff, Great Sword, Crossbow) for hybrid role." },
    { title: "Morph transformations", body: "Transform into Eagle (fly), Wolf (fast land), Piranha (swim), Lightning Wolf (combat morph) for exploration + combat." },
    { title: "PvPvE zones", body: "Some zones are PvP-open (world PvP for resources); others are PvE-safe (levelling zones)." },
  ],
  advancedRules: [
    { title: "Guild siege wars (100+ players)", body: "Guilds compete weekly for control of castles + territories; sieges support 100+ players per side." },
    { title: "Arch-boss raids (200+ players)", body: "Server-wide arch-boss raids require entire guild alliances (200+ players) to defeat." },
    { title: "Weather + day/night cycle mechanics", body: "Certain bosses spawn only during storms / night; weather changes affect skill effectiveness." },
  ],
  scoring: {
    summary: "Persistent MMORPG progression: character level, gear score, guild ranking, siege victories.",
    winCondition: "No end-game — persistent progression + guild territory control competition.",
    breakdown: [{ action: "Level, gear score, guild siege wins", points: "Persistent progression" }],
  },
  penalties: [
    { title: "PvP death in open-PvP zone", body: "Small XP + gear-durability loss; risk-reward for high-value contested zones." },
    { title: "Guild siege loss", body: "Guild loses castle/territory control until next siege cycle." },
  ],
  positions: [{ name: "Weapon-swap Adventurer", role: "Player uses any 2 weapons for hybrid role in guild + solo play.", count: 1 }],
  officiating: { officials: ["Amazon Games / NCSoft support + moderation"], summary: "Publisher-run moderation + anti-cheat; guild self-organisation for siege events." },
  governingBodies: [
    { name: "NCSoft", founded: 1997, headquarters: "Seongnam, South Korea" },
    { name: "Amazon Games", founded: 2012, headquarters: "Seattle, Washington" },
  ],
  majorCompetitions: [
    { name: "In-game Guild Siege Wars (weekly cross-server)", frequency: "weekly", founded: 2023, region: "global (server-shard-based)" },
    { name: "Arch-Boss World Raid events", frequency: "monthly / patch-tied", founded: 2023, region: "global" },
  ],
  countriesPlayed: ["KR", "US", "GB", "DE", "FR", "JP", "CN", "BR", "TW", "AU"],
  famousAthletes: ["Top guilds on major NA/EU/KR/BR servers — dominant siege war participants"],
  records: [
    { title: "1M+ concurrent Steam at global launch", holder: "Amazon Games", value: "Peaked 1 million+ concurrent Steam players at October 2024 global launch", year: 2024 },
    { title: "First major NCSoft global MMORPG partner-published", holder: "NCSoft / Amazon Games", value: "First NCSoft MMORPG published globally by Amazon Games — a landmark East-West MMO partnership", year: 2024 },
    { title: "Morph transformation system", holder: "NCSoft", value: "Innovative morph mechanic (Eagle/Wolf/Piranha/Lightning-Wolf) unique to Throne and Liberty in MMORPG genre", year: 2023 },
  ],
  variants: ["throne-and-liberty-korea", "throne-and-liberty-global"],
  relatedSports: ["lineage-2", "black-desert-online", "new-world", "elder-scrolls-online"],
  skills: ["weapon-swap build crafting", "PvP positioning + burst rotation", "large-scale siege coordination", "guild + alliance leadership"],
  strategies: [
    { title: "Weapon-swap hybrid build", body: "Combine Wand + Longbow (magic ranged) or Sword+Shield + Great Sword (tank-DPS) for flexibility." },
    { title: "Morph traversal shortcuts", body: "Eagle-morph shortcuts save 5-10 min per crossing on Solisium's massive map." },
    { title: "Siege war zerg vs coordinated small-team", body: "Some guilds win via massive numbers (100+ zerg); others via 20-30 coordinated squad tactics + rotation timing." },
  ],
  terminology: [
    { term: "Morph", meaning: "Transformation form (Eagle/Wolf/Piranha/Lightning-Wolf)" },
    { term: "Solisium", meaning: "Continent setting of TL" },
    { term: "Arch-Boss", meaning: "Server-wide 200+ player raid boss" },
    { term: "Guild Siege", meaning: "100+ player weekly territory-control battle" },
    { term: "Weapon-swap", meaning: "Classless system equipping any 2 weapons" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Solo levelling + first Morphs", body: "Learn combat + Morph traversal; reach level cap." }] },
    { level: "intermediate", steps: [{ title: "Guild + first siege war", body: "Join large guild; participate in first siege war + world boss." }] },
    { level: "advanced", steps: [{ title: "Elite guild + arch-boss + alliance leadership", body: "Compete in top-guild siege wars + arch-boss races; coordinate 100+ player alliance." }] },
  ],
  faq: [
    { question: "Is Throne and Liberty free to play?", answer: "Yes — fully F2P with cosmetic + convenience monetisation (no P2W gear directly). Battle pass + skin shop model. All gameplay content free." },
    { question: "How does Throne and Liberty's classless system work?", answer: "Instead of fixed classes, players equip any 2 weapons from 7 options (Sword+Shield, Longbow, Wand, Dagger, Staff, Great Sword, Crossbow). Weapon combos define role: Longbow+Wand = ranged mage, Sword+Shield+Staff = tank-healer, etc. Weapons can be swapped freely (though respec has small cost)." },
  ],
  wikipediaTitle: "Throne and Liberty",
  sources: [{ label: "Wikipedia — Throne and Liberty", url: "https://en.wikipedia.org/wiki/Throne_and_Liberty", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default throneAndLiberty;

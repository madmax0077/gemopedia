import type { Sport } from "@/lib/types";

export const starRail: Sport = {
  id: "star-rail",
  slug: "star-rail",
  name: "Honkai: Star Rail",
  officialName: "Honkai: Star Rail",
  aliases: ["Star Rail", "HSR"],
  shortDescription:
    "Turn-based space-fantasy RPG (2023, HoYoverse) — successor spirit to Genshin Impact with railroad-hopping party-based combat, gacha character acquisition, and cinematic story. 40M+ monthly active players; top-5 gacha revenue worldwide alongside Genshin + Nikke + FGO.",
  longDescription:
    "Honkai: Star Rail is a turn-based sci-fantasy gacha RPG released April 2023 by miHoYo/HoYoverse. Players lead the Astral Express crew across star-hopping worlds — Belobog (Ice), Xianzhou Luofu (Chinese mythology), Penacony (dream heist), Amphoreus (Greek mythology) — in turn-based combat featuring 7 Paths (Destruction, Preservation, Hunt, Erudition, Nihility, Harmony, Abundance, Remembrance) and 7 Elements. Blends Genshin's global cinematic gacha polish with deep turn-based combat mechanics (weakness break, ultimate rotations, DoT/buff/debuff teams). Hosted on iOS, Android, PC, PS5. Reported 40M+ MAU and $2-3B annual gacha revenue. Competitive endgame includes Memory of Chaos, Pure Fiction, Apocalyptic Shadow, and Divergent Universe roguelite mode.",

  category: "video-games",
  subCategory: "turn-based gacha RPG (sci-fantasy)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "CN",
  regionOfOrigin: "Shanghai, China (miHoYo/HoYoverse)",
  estimatedOrigin: "Released April 26, 2023 globally; sequel-spirit to Honkai Impact 3rd + Genshin Impact",

  players: { min: 1, max: 4, note: "Single-player primarily; 4-character combat team; no PvP." },
  equipment: [
    { name: "Smartphone / PC / PS5", description: "Free-to-play cross-platform with cloud progress." },
    { name: "Gacha 'Warp' pulls", description: "Monetization via character + Light Cone Warps (50/50 pity system, 90-pull hard pity)." },
  ],
  duration: { approximateMinutes: 30, structure: "Version updates ~6 weeks; endgame content refresh 2 weeks (Memory of Chaos)." },
  objective: "Progress story + build gacha teams + clear rotating endgame combat challenges (Memory of Chaos / Pure Fiction / Apocalyptic Shadow).",
  matchStructure: "Turn-based combat rounds; action value / speed determines turn order; weakness break interrupt system; ultimate meter fills via basic + skill actions.",

  basicRules: [
    { title: "Party of 4 characters", body: "Deploy 4-character team with Path + Element synergies." },
    { title: "Turn-based combat with speed/AV system", body: "Character action value determined by speed stat + effects; higher speed = more turns." },
    { title: "Weakness Break", body: "Attack enemy's elemental weakness to fill toughness bar → break → damage + debuff (Break DMG, DoT, freeze, imprison)." },
    { title: "Ultimate skill", body: "Ultimate charges via energy; can be used any time (out-of-turn interrupt)." },
    { title: "Gacha 'Warp' system", body: "Pull characters + Light Cones (weapons); 50/50 pity on 5-star; 90-pull hard pity." },
  ],
  advancedRules: [
    { title: "Path system", body: "8 Paths (Destruction, Preservation, Hunt, Erudition, Nihility, Harmony, Abundance, Remembrance) — role-based mechanic system similar to class." },
    { title: "Element system", body: "7 elements (Physical, Fire, Ice, Lightning, Wind, Quantum, Imaginary); weakness break interactions per element." },
    { title: "Endgame rotations", body: "Memory of Chaos (bosses), Pure Fiction (waves), Apocalyptic Shadow (elite bosses); refresh every 2 weeks." },
    { title: "Divergent Universe (roguelite)", body: "Persistent roguelite mode with random blessings + curios; long-form progression." },
  ],
  scoring: {
    summary: "Star rating (0-3 stars per endgame stage) + leaderboard clear time; gacha collection completion.",
    winCondition: "N/A (single-player content); competitive metric = endgame star clear + speedrun times.",
    breakdown: [
      { action: "Endgame stage clear", points: "1-3 stars per stage (36+ per rotation)" },
      { action: "Character/Light Cone collection", points: "Gacha pull count" },
    ],
  },
  penalties: [],

  positions: [
    { name: "Damage Dealer (DPS)", role: "Primary damage output via Path (Hunt/Erudition/Destruction).", count: 1 },
    { name: "Sub-DPS / Break", role: "Secondary damage + weakness break setup.", count: 1 },
    { name: "Support (Harmony/Nihility)", role: "Buff DPS + debuff enemies.", count: 1 },
    { name: "Sustain (Preservation/Abundance/Remembrance)", role: "Healing + shielding + defensive utility.", count: 1 },
  ],
  officiating: { officials: ["N/A (single-player)"], summary: "No PvP or officiated competitive play." },

  governingBodies: [
    { name: "miHoYo/HoYoverse", founded: 2011, headquarters: "Shanghai, China", website: "https://www.hoyoverse.com" },
  ],
  majorCompetitions: [
    { name: "Community speedrun events (Memory of Chaos, Pure Fiction)", frequency: "biweekly rotations", founded: 2023, region: "worldwide (community-driven)" },
  ],
  countriesPlayed: ["CN", "JP", "KR", "US", "TW", "HK", "SG", "MY", "TH", "PH", "ID", "VN", "IN", "DE", "FR", "GB", "BR", "MX", "RU", "worldwide"],
  famousAthletes: [
    "Popular content creators — Tectone, Mtashed, Enviosity, Vars2 (Genshin/HSR crossover creators)",
    "Chinese creators dominate speedrun leaderboards",
  ],
  records: [
    { title: "Top-tier gacha revenue", holder: "Honkai: Star Rail", value: "$2-3B+ annual gacha revenue; consistent top-5 mobile game revenue worldwide 2023-2025", year: 2024 },
    { title: "Largest turn-based RPG playerbase", holder: "HSR", value: "40M+ MAU — largest turn-based combat RPG playerbase globally", year: 2024 },
  ],

  variants: ["standard-version-updates-6-week-cycle", "beta-server-early-access", "china-server-vs-global-server"],
  relatedSports: ["genshin-impact", "wuthering-waves", "zenless-zone-zero", "final-fantasy-xiv"],

  skills: ["turn-order manipulation (speed tuning)", "weakness break sequencing", "energy regeneration optimization", "team composition (Path + Element synergies)", "endgame speedrunning", "gacha resource management"],
  strategies: [
    { title: "Speed tune around 134/160 breakpoints", body: "Precise SPD stat tuning enables extra turns per cycle in endgame; core progression skill." },
    { title: "Break DMG focus vs. crit DMG focus", body: "Two meta damage types; team composition centers around one or the other." },
    { title: "Save Jades for guaranteed banners", body: "Free-to-play optimization: save currency for double-featured banners (usually version 2.x)." },
  ],

  terminology: [
    { term: "Warp", meaning: "Gacha pull for characters or Light Cones." },
    { term: "Trailblazer", meaning: "The player character (MC)." },
    { term: "Path", meaning: "Character role class (8 paths)." },
    { term: "Light Cone", meaning: "HSR equivalent of weapon in Genshin." },
    { term: "Jades", meaning: "Premium currency used for Warps." },
    { term: "Memory of Chaos", meaning: "Bi-weekly rotating endgame boss content." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Complete Trailblaze story (Belobog + Xianzhou Luofu)", body: "Learn combat + Path + Element system through story arc." },
      { title: "Save Jades for standard beginner banner", body: "First 300 pulls have soft-pity boost; guaranteed 5-star." },
    ]},
    { level: "advanced", steps: [
      { title: "Max endgame clear (36 stars Memory of Chaos)", body: "Requires 2 fully-built teams for both halves." },
      { title: "Divergent Universe unbounded runs", body: "Deep roguelite progression + blessing synergies." },
    ]},
  ],

  faq: [
    { question: "Is Honkai: Star Rail free-to-play?", answer: "Yes — fully free-to-play with optional gacha monetization for characters + Light Cones. F2P clearable to endgame with careful team-building; whales spend $50-500+/month typically." },
    { question: "How is it different from Genshin Impact?", answer: "Same publisher (HoYoverse) + similar gacha model + character quality — but HSR is turn-based combat (not action) with speed/action value system + weakness break mechanics. HSR is more mechanically deep in combat but less exploration-focused than Genshin." },
    { question: "What's the meta endgame content?", answer: "Memory of Chaos (bi-weekly boss rotation, 36 stars), Pure Fiction (wave clear), Apocalyptic Shadow (single-boss DPS check), and Divergent Universe (roguelite blessings). Requires 2 built teams for full clears." },
  ],

  wikipediaTitle: "Honkai: Star Rail",
  sources: [
    { label: "Official website", url: "https://hsr.hoyoverse.com", publisher: "HoYoverse" },
    { label: "Wikipedia — Honkai: Star Rail", url: "https://en.wikipedia.org/wiki/Honkai:_Star_Rail", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const wutheringWaves: Sport = {
  id: "wuthering-waves",
  slug: "wuthering-waves",
  name: "Wuthering Waves",
  officialName: "Wuthering Waves",
  aliases: ["WuWa", "鸣潮"],
  shortDescription:
    "Chinese open-world action RPG gacha (2024, Kuro Games) — faster + more combo-heavy combat than Genshin Impact; features 'Echoes' monster-absorbing system + real-time parry mechanics. Direct Genshin competitor with 20M+ MAU by launch year.",
  longDescription:
    "Wuthering Waves is a free-to-play open-world action RPG released May 2024 by Chinese studio Kuro Games (creators of Punishing: Gray Raven). Set in the post-apocalyptic world of Solaris-3, players play as Rovers awakening in a devastated future. Combat is real-time action with a signature 'Echoes' system — defeated monsters can be absorbed to gain their skills for player use. Faster-paced + more combo-focused than Genshin Impact, with parry + intro/outro skill system enabling deep character rotations. Launched to 30M+ registrations in first month, targets $500M-1B annual revenue in year 2. Competing directly against HoYoverse's Genshin + Star Rail in the Chinese-developed open-world gacha space.",

  category: "video-games",
  subCategory: "open-world action gacha RPG",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "CN",
  regionOfOrigin: "Guangzhou, China (Kuro Games)",
  estimatedOrigin: "Released May 23, 2024 globally; direct competitor to Genshin Impact + Honkai: Star Rail",

  players: { min: 1, max: 3, note: "Single-player primarily; 3-character rotation combat team." },
  equipment: [
    { name: "Smartphone / PC / PS5", description: "Free-to-play cross-platform, launched on iOS/Android/PC, PS5 mid-2025." },
    { name: "Gacha 'Convene' pulls", description: "Character + weapon gacha with 80-pull soft pity + 50/50 rate-up." },
  ],
  duration: { approximateMinutes: 45, structure: "Version updates ~6 weeks; endgame content 2-week rotations." },
  objective: "Progress story + explore open world + build 3-character rotation teams + clear endgame combat challenges (Tower of Adversity, Whimpering Wastes).",
  matchStructure: "Real-time action combat; 3-character rotation with intro/outro skills; parry + counter mechanic; Echo system for extra skill on cooldown.",

  basicRules: [
    { title: "3-character combat rotation", body: "Deploy 3-character team; swap between characters to chain intro/outro skills for damage buffs." },
    { title: "Real-time action combat with parry", body: "Combos + dodge + parry attacks; parry window creates counter opportunity." },
    { title: "Echo system", body: "Defeat monsters → absorb as Echo → deploy monster's skill in combat rotation." },
    { title: "Gacha 'Convene' pulls", body: "Character + Weapon gacha; 80-pull soft pity + 50/50 rate-up mechanic." },
  ],
  advancedRules: [
    { title: "Intro / Outro skills", body: "Character swaps trigger intro skill (incoming) + outro buff (outgoing) — chains for optimized damage rotations." },
    { title: "Echo main/sub stats + set effects", body: "Echoes function like artifacts; 4-piece set effects + main/sub stat tuning." },
    { title: "Endgame content", body: "Tower of Adversity (fixed floors), Whimpering Wastes (rotating boss content)." },
  ],
  scoring: {
    summary: "Endgame star clear + speedrun times + gacha collection completion.",
    winCondition: "N/A single-player; competitive metric = endgame star clears.",
    breakdown: [
      { action: "Tower of Adversity clear", points: "Stars per floor" },
    ],
  },
  penalties: [],

  positions: [
    { name: "Main DPS", role: "Primary damage carry.", count: 1 },
    { name: "Sub-DPS", role: "Off-field damage + buffs.", count: 1 },
    { name: "Support", role: "Buffs + shields + healing.", count: 1 },
  ],
  officiating: { officials: ["N/A"], summary: "Single-player." },

  governingBodies: [
    { name: "Kuro Games (developer)", founded: 2017, headquarters: "Guangzhou, China", website: "https://www.kurogames.com" },
  ],
  majorCompetitions: [
    { name: "Community speedrun challenges (Tower of Adversity)", frequency: "biweekly", founded: 2024, region: "worldwide" },
  ],
  countriesPlayed: ["CN", "JP", "KR", "TW", "HK", "US", "SG", "MY", "TH", "PH", "ID", "IN", "DE", "FR", "GB", "BR", "MX", "RU", "worldwide"],
  famousAthletes: ["YouTube speedrun creators — 30SecondSpicy, Braxophone, IWinToLoseGaming"],
  records: [
    { title: "Fastest 30M registrations for a Chinese gacha", holder: "Wuthering Waves", value: "30M+ registrations within launch month (May 2024)", year: 2024 },
    { title: "Direct Genshin competitor arrival", holder: "Kuro Games", value: "First Chinese studio outside HoYoverse to launch open-world gacha at similar scale", year: 2024 },
  ],

  variants: ["standard-live-service", "china-server-vs-global"],
  relatedSports: ["genshin-impact", "star-rail", "zenless-zone-zero", "punishing-gray-raven"],

  skills: ["real-time combat rotation", "parry timing", "3-character intro/outro chain optimization", "Echo build + tuning", "gacha resource management"],
  strategies: [
    { title: "Intro/outro chain optimization", body: "Sequence character swaps to maximize buff windows + damage combo." },
    { title: "Echo tuning around DPS class", body: "Echo main stats + subs must align with main DPS scaling stat." },
  ],

  terminology: [
    { term: "Convene", meaning: "WuWa's gacha pull term." },
    { term: "Echo", meaning: "Monster-absorbed skill deployable in combat." },
    { term: "Resonator", meaning: "Playable character." },
    { term: "Astrite", meaning: "Premium currency for Convene." },
    { term: "Rover", meaning: "Main player character (MC)." },
    { term: "Tower of Adversity", meaning: "Standard endgame content." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Complete Solaris-3 main story", body: "Learn combat + Echo + Convene basics." },
      { title: "Save Astrite for Weapon Convene", body: "Weapon banners have 100% rate-up; guaranteed 5-star weapon." },
    ]},
    { level: "advanced", steps: [
      { title: "Max Tower of Adversity clear", body: "Requires 2 built teams." },
    ]},
  ],

  faq: [
    { question: "Is Wuthering Waves a Genshin Impact clone?", answer: "It's a direct competitor in the open-world gacha RPG space with similar art style + character-collection model. But combat is meaningfully different: faster + more combo/parry-focused with unique Echo system + intro/outro skill chains. Some call it 'action-focused Genshin'." },
    { question: "Is WuWa free-to-play?", answer: "Yes — fully free-to-play with gacha monetization. F2P clearable with careful team-building." },
    { question: "How does it compare to Star Rail?", answer: "WuWa is real-time action; Star Rail is turn-based. Different genres entirely. Both are gacha with weekly/monthly monetization cycles + character banners." },
  ],

  wikipediaTitle: "Wuthering Waves",
  sources: [
    { label: "Official website", url: "https://wutheringwaves.kurogames.com", publisher: "Kuro Games" },
    { label: "Wikipedia — Wuthering Waves", url: "https://en.wikipedia.org/wiki/Wuthering_Waves", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

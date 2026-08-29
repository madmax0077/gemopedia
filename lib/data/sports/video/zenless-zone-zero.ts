import type { Sport } from "@/lib/types";

export const zenlessZoneZero: Sport = {
  id: "zenless-zone-zero",
  slug: "zenless-zone-zero",
  name: "Zenless Zone Zero",
  officialName: "Zenless Zone Zero",
  aliases: ["ZZZ", "Zenless"],
  shortDescription:
    "Third HoYoverse gacha (2024) — urban-fantasy action combat with 3-character team-swap chains, hyper-stylized 'anime-punk' aesthetic set in post-apocalyptic New Eridu city. Focus on tight combo combat + weekly hollow zero exploration.",
  longDescription:
    "Zenless Zone Zero (ZZZ) is the third HoYoverse gacha title released July 2024 (after Genshin Impact + Honkai: Star Rail). Set in post-apocalyptic urban world of New Eridu where dimensional 'Hollows' spawn Ether monsters, players are Proxies (guides) leading Agent teams into Hollow instances. Combat is real-time action with tight 3-character team-swap chain combos: Basic → Chain → Ultimate rotations focusing on Assault (stagger break) + Anomaly (elemental DoT). Signature 'anime-punk' urban aesthetic — bright neon + street fashion + gritty tone unlike prior HoYoverse titles. Rapid combat pacing distinguishes it from turn-based Star Rail + exploration-heavy Genshin. Endgame: Deadly Assault + Shiyu Defense + Hollow Zero roguelite.",

  category: "video-games",
  subCategory: "urban-fantasy action gacha RPG",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "CN",
  regionOfOrigin: "Shanghai, China (HoYoverse)",
  estimatedOrigin: "Released July 4, 2024 globally",

  players: { min: 1, max: 3, note: "3-character combat team; single-player." },
  equipment: [
    { name: "Smartphone / PC / PS5", description: "Cross-platform F2P." },
    { name: "Gacha 'Signal Search' pulls", description: "Agents (characters) + W-Engines (weapons) gacha with pity + 50/50 rate-up." },
  ],
  duration: { approximateMinutes: 30, structure: "Version 6-week cycle; endgame 2-week rotations." },
  objective: "Progress story + explore New Eridu + build Agent teams + clear Shiyu Defense + Hollow Zero + Deadly Assault.",
  matchStructure: "Real-time action combat with 3-character swap-chain system: Basic attacks charge Chain Attack meter → Chain Attack triggers ally swap-in; Ultimate rotations.",

  basicRules: [
    { title: "3-character team", body: "Deploy 3 Agents in combat rotation." },
    { title: "Chain Attack + Ultimate rotation", body: "Basic attacks fill meter → Chain Attack calls in ally → chain up to 3-character combo → Ultimate finish." },
    { title: "Assault vs. Anomaly damage", body: "Two damage archetypes: Assault = stagger + break; Anomaly = elemental status DoT (fire/ice/electric/ether/physical)." },
    { title: "Perfect Dodge + Parry", body: "Timed dodges enable counter windows; parry heavy attacks for damage advantage." },
    { title: "Gacha Signal Search", body: "Character + W-Engine gacha with 90-pull hard pity." },
  ],
  advancedRules: [
    { title: "Disc drives (artifacts)", body: "6-slot equipment system; set-bonus stacking + main/sub stat tuning." },
    { title: "Hollow Zero roguelite", body: "Persistent progression roguelite with random buffs + curses." },
    { title: "Bangboo companions", body: "Deploy bangboo (utility pets) alongside 3-character team for utility skills." },
  ],
  scoring: {
    summary: "Star clear on endgame content + gacha collection.",
    winCondition: "N/A single-player.",
    breakdown: [{ action: "Shiyu Defense stars", points: "0-3 per stage" }],
  },
  penalties: [],

  positions: [
    { name: "Attacker", role: "Main damage dealer.", count: 1 },
    { name: "Anomaly / Stun", role: "Status effects + stagger.", count: 1 },
    { name: "Support / Defense", role: "Buffs + shields + healing.", count: 1 },
  ],
  officiating: { officials: ["N/A"], summary: "Single-player." },

  governingBodies: [{ name: "miHoYo/HoYoverse", founded: 2011, headquarters: "Shanghai, China", website: "https://www.hoyoverse.com" }],
  majorCompetitions: [
    { name: "Shiyu Defense biweekly leaderboards", frequency: "biweekly", founded: 2024, region: "worldwide" },
  ],
  countriesPlayed: ["CN", "JP", "KR", "TW", "HK", "US", "SG", "MY", "TH", "PH", "ID", "IN", "DE", "FR", "GB", "BR", "MX", "RU", "worldwide"],
  famousAthletes: ["YouTube ZZZ community creators — MrPokke, Twennyone, Cygnify"],
  records: [
    { title: "HoYoverse third pillar", holder: "ZZZ", value: "Third HoYoverse gacha after Genshin + HSR; consistent top-20 mobile revenue in 2024-2025", year: 2024 },
    { title: "Distinct urban aesthetic in gacha", holder: "ZZZ", value: "First HoYoverse gacha with urban-punk + street-fashion aesthetic; distinct from fantasy Genshin + space HSR", year: 2024 },
  ],

  variants: ["standard-version-6-week-cycle", "china-server-vs-global"],
  relatedSports: ["genshin-impact", "star-rail", "wuthering-waves", "punishing-gray-raven", "nikke"],

  skills: ["chain attack chain optimization", "parry + dodge timing", "team rotation for endgame", "gacha resource management"],
  strategies: [
    { title: "Chain Attack rotation optimization", body: "Sequence characters to maximize chain hits for max damage window." },
    { title: "Anomaly stacking teams", body: "3 anomaly characters stack multi-element status for massive DoT ticks." },
  ],

  terminology: [
    { term: "Signal Search", meaning: "Gacha pull." },
    { term: "Agent", meaning: "Playable character." },
    { term: "W-Engine", meaning: "Weapon." },
    { term: "Bangboo", meaning: "Utility pet companion." },
    { term: "Proxy", meaning: "Player character (Belle/Wise)." },
    { term: "Hollow", meaning: "Dimensional rift instance." },
    { term: "Polychrome", meaning: "Premium currency." },
  ],

  learningPaths: [
    { level: "beginner", steps: [{ title: "Complete main story chapter 1", body: "Learn Chain Attack + Assault vs Anomaly system." }] },
    { level: "advanced", steps: [{ title: "Max Shiyu Defense stars", body: "Requires 2 built teams." }] },
  ],

  faq: [
    { question: "Is ZZZ different from Genshin + Star Rail?", answer: "Yes — action combat like Genshin but with tighter 3-character swap-chain focus. Aesthetic is urban-punk not fantasy. Combat pacing is faster than Genshin, real-time unlike turn-based Star Rail. HoYoverse's genre experimentation." },
    { question: "F2P viable?", answer: "Yes — fully F2P clearable through Shiyu Defense with careful team-building." },
  ],

  wikipediaTitle: "Zenless Zone Zero",
  sources: [
    { label: "Official website", url: "https://zenless.hoyoverse.com", publisher: "HoYoverse" },
    { label: "Wikipedia — Zenless Zone Zero", url: "https://en.wikipedia.org/wiki/Zenless_Zone_Zero", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

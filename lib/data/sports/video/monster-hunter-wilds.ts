import type { Sport } from "@/lib/types";

export const monsterHunterWilds: Sport = {
  id: "monster-hunter-wilds",
  slug: "monster-hunter-wilds",
  name: "Monster Hunter Wilds",
  officialName: "Monster Hunter Wilds",
  aliases: ["MH Wilds", "ワイルズ"],
  shortDescription:
    "Sixth-generation Monster Hunter action-RPG (Capcom, Feb 28, 2025 PS5/Xbox Series/PC) — set in the Forbidden Lands with dynamic weather-driven ecosystems, Seikret mount, and seamless online multiplayer across a single persistent open world. 8M units in 3 days launch record.",
  longDescription:
    "Monster Hunter Wilds is the sixth-generation Monster Hunter action-RPG developed + published by Capcom for PS5, Xbox Series X|S, and PC (Steam) — released February 28, 2025 with cross-play. Set in the Forbidden Lands with a dynamic Fallow → Plenty → Inclemency weather cycle that spawns unique monsters per phase. Introduces Seikret mount (rideable that carries hunter between engagements + allows secondary weapon swap mid-hunt), Focus Mode targeting (attacking specific limb creates 'wound' → Focus Strike for massive damage + guaranteed part-break), and seamless single-world online multiplayer with drop-in co-op. 14 weapon types return. Launch broke Capcom records: 8M units in first 3 days + 1.38M concurrent Steam players (3rd-highest CCU of any game on Steam). Story campaign 25-35 hrs; endgame Tempered + Arch-Tempered + Title Update content pushes toward 150+ hrs.",
  category: "video-games",
  subCategory: "action-role-playing (hunt-craft loop)",
  sportType: "mixed",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Capcom Osaka)",
  estimatedOrigin: "Released Feb 28, 2025 cross-platform (PS5 + Xbox Series + PC Steam)",
  players: { min: 1, max: 4, note: "Solo or online 4-player squad." },
  equipment: [
    { name: "PS5 / Xbox Series X|S / PC", description: "Cross-platform release; PC requires SSD, ~65GB, Ryzen 5 3600 / i5-10600 minimum." },
    { name: "Seikret (in-game mount)", description: "Rideable mount that carries player between engagements, allows secondary weapon swap." },
    { name: "14 weapon types (in-game)", description: "All returning World/Rise weapons: Great Sword through Heavy Bowgun." },
  ],
  duration: { approximateMinutes: 45, structure: "Chapter-driven story 25-35 hrs; endgame + TUs 150+ hrs." },
  objective: "Complete Chapter story campaign; hunt Tempered + Arch-Tempered post-credits monsters.",
  matchStructure: "Solo or 4-player online co-op with seamless world drop-in. Story progresses through Chapters; endgame Tempered + Arch-Tempered unlocked post-credits.",
  basicRules: [
    { title: "Seamless single world", body: "No zone transitions; entire Forbidden Lands loaded as single persistent world." },
    { title: "Focus Mode targeting", body: "Aim at monster part with Focus Mode to create wound → Focus Strike for damage." },
    { title: "Dynamic weather cycle", body: "Fallow → Plenty → Inclemency phases spawn different monsters + affect weakness." },
  ],
  advancedRules: [
    { title: "Seikret secondary weapon", body: "Mount carries secondary weapon; swap mid-hunt via mount menu." },
    { title: "Cross-platform matchmaking", body: "PS5/Xbox/PC play together in shared lobbies." },
  ],
  scoring: {
    summary: "Hunter Rank (HR) progression + Guild Card kill counts + Investigation completion; no PvP.",
    winCondition: "Slay/capture target within cart + time limit.",
    breakdown: [{ action: "Hunt completion", points: "HR progress + rewards" }],
  },
  penalties: [
    { title: "Cart (faint)", body: "3 party carts = quest failure." },
    { title: "Quest timeout", body: "50-min standard; sieges 30 min." },
    { title: "Multiplayer griefing", body: "Report system for intentional carting; verified reports lead to session bans." },
  ],
  positions: [{ name: "Hunter", role: "Wields 1 of 14 weapons; hunts monsters solo or in 4-player squad.", count: 1 }],
  officiating: { officials: ["Speedrun.com community moderators"], summary: "PvE only; no formal competitive scene." },
  governingBodies: [{ name: "Capcom Co., Ltd.", founded: 1979, headquarters: "Osaka, Japan" }],
  majorCompetitions: [{ name: "Speedrun.com Monster Hunter Wilds leaderboards", frequency: "ongoing", founded: 2025, region: "global (community)" }],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "IT", "KR", "AU", "BR"],
  famousAthletes: ["Early speedrun community establishing 2025 TA leaderboards"],
  records: [
    { title: "Capcom's biggest launch ever", holder: "Capcom", value: "8 million units in first 3 days — surpasses World's launch", year: 2025 },
    { title: "Steam concurrent record for Capcom", holder: "Capcom", value: "1.38M concurrent Steam players at launch — 3rd-highest CCU of any Steam game", year: 2025 },
    { title: "First MH with seamless open world", holder: "Capcom", value: "No zone transitions; single persistent world", year: 2025 },
  ],
  variants: ["monster-hunter-wilds-title-updates"],
  relatedSports: ["monster-hunter", "monster-hunter-world", "monster-hunter-rise"],
  skills: ["weapon combos", "Focus Mode wound targeting", "Seikret positioning", "weather-cycle strategy"],
  strategies: [
    { title: "Wound + Focus Strike combo", body: "Attack a limb until it 'wounds' (glowing tears), then Focus Mode + Focus Strike for massive damage + part-break." },
    { title: "Seikret free-attack window", body: "While mounted between engagements, sharpen weapon or use items — enables aggressive re-engagement." },
    { title: "Weather flip strategy", body: "Certain monsters only appear or weaken during specific weather shifts." },
  ],
  terminology: [
    { term: "Seikret", meaning: "Rideable mount + secondary weapon carrier" },
    { term: "Focus Mode", meaning: "Precision aiming for wound creation" },
    { term: "Wound", meaning: "Visible damage marker enabling Focus Strike" },
    { term: "Fallow / Plenty / Inclemency", meaning: "Three phases of weather cycle" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Chapter 1 tutorial", body: "Pick weapon, learn Focus Mode, Seikret navigation, first Alpha monster." }] },
    { level: "intermediate", steps: [{ title: "Chapter 5-6 + HR 20+", body: "Weather-shift mechanics, pack hunts, Kunafa/Sild region mastery." }] },
    { level: "advanced", steps: [{ title: "Tempered + Title Updates", body: "TU1 Mizutsune/Zoh Shia augment builds, weapon skill grind, speedrun optimisation." }] },
  ],
  faq: [
    { question: "How is Wilds different from World?", answer: "Seamless open world (no zone transitions), dynamic weather that spawns unique monsters, Seikret mount for fast travel + repositioning, Focus Mode wound targeting, reduced loading." },
    { question: "Is Wilds beginner-friendly?", answer: "Yes — most streamlined MH yet with better tutorials, QoL features, and forgiving difficulty until endgame Tempered fights." },
  ],
  wikipediaTitle: "Monster Hunter Wilds",
  sources: [{ label: "Wikipedia — Monster Hunter Wilds", url: "https://en.wikipedia.org/wiki/Monster_Hunter_Wilds", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default monsterHunterWilds;

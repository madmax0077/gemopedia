import type { Sport } from "@/lib/types";

export const blackMythZhongKui: Sport = {
  id: "black-myth-zhong-kui",
  slug: "black-myth-zhong-kui",
  name: "Black Myth: Zhong Kui",
  officialName: "Black Myth: Zhong Kui (Chinese: 黑神话：钟馗)",
  aliases: ["Black Myth 2", "BM: Zhong Kui"],
  shortDescription:
    "Game Science's confirmed second Black Myth franchise entry (Aug 2025 Gamescom reveal); follows 2024 breakout hit Black Myth: Wukong and features Chinese folklore ghost-hunter Zhong Kui. Full title expected 2027; PC + PS5.",
  longDescription:
    "Black Myth: Zhong Kui is the confirmed second entry in Game Science's Black Myth franchise, officially unveiled at Gamescom 2025 following the massive 2024 commercial + critical success of Black Myth: Wukong (25M+ copies sold in 6 months per Game Science reports, first Chinese AAA action title). Zhong Kui centers on the Chinese folklore ghost-hunter Zhong Kui 钟馗 — a Tang Dynasty imperial exam scholar turned demon-slayer of the underworld after committing suicide over unfair rejection. Game Science founder + creative director Yocar Feng described the shift as darker + more urban-legend/ghost-focused than Wukong's mythic-journey structure. Similar Souls-like action-RPG combat expected, adapted to Zhong Kui's traditional Zhong Kui Sword + spirit-catching gourd. Full release targeted 2027, PC (Steam + Epic + WeGame) + PS5 confirmed; Xbox Series pending. Game Science headquartered in Hangzhou + Shenzhen, China; funded partially by Tencent + Hero Games post-Wukong success. Expected to further cement Chinese AAA industry's global emergence post-Wukong.",
  category: "video-games",
  subCategory: "Chinese folklore action-RPG (Souls-like)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "major",
  countryOfOrigin: "CN",
  regionOfOrigin: "China (Game Science, Hangzhou + Shenzhen)",
  estimatedOrigin: "Announced Gamescom Aug 2025; target release 2027",
  players: { min: 1, max: 1 },
  equipment: [{ name: "PC / PS5 (confirmed platforms)", description: "Xbox Series pending; no Nintendo confirmed." }, { name: "Standard controller or M+KB", description: "Souls-like — controller recommended." }],
  duration: { approximateMinutes: 2400, structure: "Anticipated 40+ hrs main story per Wukong precedent." },
  objective: "Play Zhong Kui hunting demons across the underworld + human realms.",
  matchStructure: "Single-player Souls-like narrative campaign; combat + boss encounters + exploration.",
  basicRules: [
    { title: "Souls-like combat expected", body: "Stamina + dodge/parry + heavy weapon combat per Wukong template." },
    { title: "Zhong Kui Sword primary weapon", body: "Iconic character weapon; likely central to combat." },
    { title: "Spirit-catching gourd mechanic", body: "Zhong Kui's folkloric ghost-trapping tool likely gameplay feature." },
  ],
  scoring: { summary: "Narrative progression; no PvP." },
  positions: [{ name: "Zhong Kui (protagonist)", role: "Sole playable character." }],
  governingBodies: [{ name: "Game Science", founded: 2014, headquarters: "Hangzhou + Shenzhen, China" }, { name: "Hero Games / Tencent (backers)", founded: 2011, headquarters: "Shenzhen, China" }],
  majorCompetitions: [{ name: "Speedrun.com Black Myth franchise", frequency: "ongoing", founded: 2024, region: "worldwide" }],
  famousAthletes: ["Yocar Feng (Game Science CEO + creative director)"],
  records: [
    { title: "Wukong 25M+ copies sold in 6 months", holder: "Game Science", value: "Predecessor Black Myth: Wukong sold 25M+ copies in 6 months (2024) — largest Chinese AAA launch ever", year: 2024 },
    { title: "Zhong Kui announced Gamescom 2025", holder: "Game Science", value: "Officially unveiled at Gamescom Aug 2025", year: 2025 },
  ],
  variants: ["black-myth-wukong-2024"],
  relatedSports: ["black-myth-wukong", "sekiro-shadows-die-twice", "elden-ring", "wo-long-fallen-dynasty"],
  skills: ["souls-like parry timing", "stamina management", "boss pattern recognition"],
  wikipediaTitle: "Black Myth (series)",
  sources: [{ label: "Wikipedia — Black Myth: Wukong", url: "https://en.wikipedia.org/wiki/Black_Myth:_Wukong", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default blackMythZhongKui;

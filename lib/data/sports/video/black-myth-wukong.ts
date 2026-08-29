import type { Sport } from "@/lib/types";

export const blackMythWukong: Sport = {
  id: "black-myth-wukong",
  slug: "black-myth-wukong",
  name: "Black Myth: Wukong",
  officialName: "Black Myth: Wukong",
  aliases: ["黑神话：悟空", "BMW", "Wukong"],
  shortDescription:
    "Chinese action-RPG (Game Science, Aug 20, 2024 PS5/PC; Xbox 2025) based on Ming novel 'Journey to the West'. Player is 'Destined One' fighting Yaoguai across mythic Chinese chapters. 20M+ units first month — best-selling PS5 game of 2024 in some regions; 3M+ concurrent Steam peak.",
  longDescription:
    "Black Myth: Wukong is a single-player action-RPG developed + published by Chinese studio Game Science, released August 20, 2024 for PS5 + PC (Steam/Epic). Xbox Series X/S delayed to 2025. Directed by Feng Ji, based on the 16th-century Ming-dynasty novel 'Journey to the West' by Wu Cheng'en — specifically re-imagining Sun Wukong's story after the original novel's ending. Player controls 'the Destined One' (a monkey pilgrim), searching for six relics of Sun Wukong scattered across mythical China. Combat is action-RPG in Souls-adjacent style — combos, dodges, staff-based moveset with three stances (Smash, Pillar, Thrust), transformations into slain Yaoguai (demons/spirits), and Spells (Immobilise, Cloud Step, Body-Off, Rock Solid). Six-chapter campaign spanning Black Wind Mountain, Yellow Wind Ridge, Small Western Heaven, Webbed Hollow, Bishui Cave, Mount Huaguo. Cutting-edge Unreal Engine 5 (Lumen + Nanite) visuals. 10M+ units first three days; 20M+ within first month — a landmark for Chinese AAA. Peak 3M+ concurrent Steam players. Praised for atmosphere, boss design, cultural depth; criticised for pacing + camera. Named 2024 Game of the Year at 2024 Steam Awards + several player-voted awards.",
  category: "video-games",
  subCategory: "action-RPG (Souls-like)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "CN",
  regionOfOrigin: "China (Game Science, Shenzhen)",
  estimatedOrigin: "Released Aug 20, 2024 for PS5 + PC; Xbox 2025",
  players: { min: 1, max: 1, note: "Single-player only." },
  equipment: [
    { name: "PS5, PC (Steam/Epic), Xbox Series (2025)", description: "Multi-platform release; Xbox delayed to 2025." },
    { name: "Standard controller or M+KB (PC)", description: "Full controller support recommended." },
  ],
  duration: { approximateMinutes: 60, structure: "Main story ~35-45 hrs; 100% + secret ending ~60-80 hrs." },
  objective: "Retrieve the six relics of Sun Wukong; defeat all Yaoguai bosses; face the final trial and unlock true ending.",
  matchStructure: "Single-player 6-chapter action-RPG; each chapter has hub area + optional bosses + main path culminating in chapter boss.",
  basicRules: [
    { title: "Souls-adjacent action combat", body: "Dodge, light/heavy attacks, focus points, staff stance switching." },
    { title: "Three staff stances", body: "Smash (chargeable overhead), Pillar (defensive stance), Thrust (long-range poke)." },
    { title: "Transformations + Spells", body: "Kill certain Yaoguai to unlock transformations; equip up to 4 Spells (Immobilise, Cloud Step, Body-Off, Rock Solid)." },
  ],
  advancedRules: [
    { title: "Focus points + heavy attacks", body: "Landing hits builds Focus (1-4 points); spend Focus for chargeable heavy attacks." },
    { title: "Secret bosses + true ending", body: "Optional bosses unlock in each chapter; defeating specific hidden bosses unlocks the extended true ending in Chapter 6." },
    { title: "Vessels + Gourds + Curios", body: "Passive gear slots — Vessels grant special abilities, Gourds are healing flasks, Curios provide stat bonuses." },
  ],
  scoring: {
    summary: "Chapter completion + all bosses + secret bosses + true ending.",
    winCondition: "Complete Chapter 6 for standard ending; complete all secret bosses + Chapter 6 hidden path for true ending. 100% = all Spells + all Transformations + all bosses.",
    breakdown: [{ action: "Boss defeat", points: "Xiangyou (currency) + item drops + progression" }],
  },
  penalties: [
    { title: "Death", body: "Respawn at last Shrine (bonfire equivalent); enemies respawn; lose no permanent progress but must recover to boss." },
    { title: "Missed hidden path", body: "Some optional bosses/paths only accessible during specific chapter windows — miss window, must NG+ to retry." },
  ],
  positions: [{ name: "The Destined One (monkey pilgrim)", role: "Sole playable character; wields staff of Ruyi Jingu Bang lineage.", count: 1 }],
  officiating: { officials: ["Speedrun.com moderators"], summary: "Single-player only." },
  governingBodies: [
    { name: "Game Science", founded: 2014, headquarters: "Shenzhen, China" },
  ],
  majorCompetitions: [
    { name: "Speedrun.com Black Myth: Wukong leaderboards", frequency: "ongoing", founded: 2024, region: "global (community)" },
    { name: "The Game Awards 2024 (Game of the Year nominee)", frequency: "annual", founded: 2014, region: "global (Geoff Keighley)" },
  ],
  countriesPlayed: ["CN", "US", "JP", "GB", "DE", "FR", "KR", "IT", "AU", "BR", "IN"],
  famousAthletes: ["Feng Ji (director)", "Yang Qi (art director)", "Community speedrunners establishing Any% + All Bosses leaderboards"],
  records: [
    { title: "20M+ units first month", holder: "Game Science", value: "20 million+ units sold within first month across all platforms — landmark Chinese AAA", year: 2024 },
    { title: "3M+ concurrent Steam peak", holder: "Game Science", value: "Peak 3+ million concurrent Steam players — top-3 all-time launch", year: 2024 },
    { title: "First Chinese AAA breakout hit", holder: "Game Science", value: "First AAA-scale Chinese-developed game to achieve global commercial + critical success", year: 2024 },
  ],
  variants: ["black-myth-wukong-standard", "black-myth-wukong-deluxe"],
  relatedSports: ["elden-ring", "dark-souls", "sekiro", "god-of-war"],
  skills: ["souls-adjacent combat", "staff stance mastery", "boss pattern reading", "resource management (Gourd/Focus)"],
  strategies: [
    { title: "Smash stance boss burst", body: "Charge Smash stance to 4-hit combo when boss opens up — Focus-spent heavy hits melt Yaoguai health bars." },
    { title: "Immobilise + Rock Solid combo", body: "Cast Immobilise to freeze boss, then Rock Solid stance for parry-safe burst combo." },
    { title: "Cloud Step reposition", body: "Cloud Step creates invisible after-image — use to reposition behind bosses for backstab combos." },
    { title: "Vessel + Curio synergy", body: "Match Vessel special ability to Curio stat bonuses (e.g., Wandering Wight Vessel + Focus-heavy Curios)." },
  ],
  terminology: [
    { term: "Yaoguai", meaning: "Chinese mythological demons/spirits/monsters (main enemies)" },
    { term: "Xiangyou", meaning: "In-game currency (also called 'Sparks')" },
    { term: "Shrine", meaning: "Save/rest point (bonfire equivalent) — heals, refills Gourd" },
    { term: "Focus", meaning: "1-4 point resource for chargeable heavy attacks" },
    { term: "Spirit", meaning: "Transformation form gained from defeating certain bosses" },
    { term: "Destined One", meaning: "Player character — successor to Sun Wukong" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Chapter 1 (Black Wind Mountain)", body: "Learn Smash stance + basic dodge + Focus system." }] },
    { level: "intermediate", steps: [{ title: "Chapters 2-4 + first Transformations", body: "Master all 3 stances; equip complementary Spells + Transformations." }] },
    { level: "advanced", steps: [{ title: "Chapter 6 secret path + NG+ true ending", body: "Find + defeat all hidden bosses each chapter; unlock true ending in Chapter 6 NG+." }] },
  ],
  faq: [
    { question: "Is Black Myth: Wukong a Souls-like?", answer: "Souls-adjacent — shares dodge-heavy combat, Shrine checkpoints, boss-focused design. Not as unforgiving as FromSoftware games; no stamina bar for attacks (only dodge)." },
    { question: "Do I need to know 'Journey to the West' to enjoy the game?", answer: "No — game is a re-imagining/sequel set after the novel's ending. Cultural/mythological references enhance experience but story stands alone. Chapter 1-6 recap Chinese mythology beautifully." },
    { question: "How long is Black Myth: Wukong?", answer: "Main story ~35-45 hours; 100% + secret ending + all bosses ~60-80 hours; NG+ replay another 30-40 hours." },
  ],
  wikipediaTitle: "Black Myth: Wukong",
  sources: [{ label: "Wikipedia — Black Myth: Wukong", url: "https://en.wikipedia.org/wiki/Black_Myth:_Wukong", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default blackMythWukong;

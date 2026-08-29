import type { Sport } from "@/lib/types";

export const zeldaTearsOfTheKingdom: Sport = {
  id: "zelda-tears-of-the-kingdom",
  slug: "zelda-tears-of-the-kingdom",
  name: "The Legend of Zelda: Tears of the Kingdom",
  officialName: "The Legend of Zelda: Tears of the Kingdom",
  aliases: ["TotK", "Zelda TotK", "ゼルダの伝説 ティアーズ オブ ザ キングダム"],
  shortDescription:
    "Open-world action-adventure sequel to Breath of the Wild (Nintendo EPD + Nintendo, May 12, 2023, Switch) — set in Hyrule with sky islands + underground Depths. Introduces Ultrahand, Fuse, Ascend, Recall abilities. 20M+ units in first 6 weeks; multiple GOTY awards 2023.",
  longDescription:
    "The Legend of Zelda: Tears of the Kingdom is the open-world action-adventure sequel to Breath of the Wild — developed by Nintendo EPD + published by Nintendo for Nintendo Switch (May 12, 2023). Set in a transformed Hyrule with new sky islands + underground Depths layers. Introduces four Zonai-tech abilities: Ultrahand (attach + build vehicles/weapons from any object), Fuse (combine weapons + items), Ascend (swim upward through ceilings), Recall (rewind object trajectory). Sold 10M units in first 3 days + 20M+ in first 6 weeks — one of Nintendo's fastest launches ever. Won multiple 2023 Game of the Year awards including The Game Awards, D.I.C.E., BAFTA. Story: Link + Zelda investigate ancient Zonai ruins; Zelda vanishes to distant past; Ganondorf reawakens. Score by Manaka Kataoka. 60+ hour main quest; 150+ hour completionist.",
  category: "video-games",
  subCategory: "open-world action-adventure",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Nintendo EPD Kyoto)",
  estimatedOrigin: "Released May 12, 2023 on Nintendo Switch",
  players: { min: 1, max: 1, note: "Single-player only." },
  equipment: [
    { name: "Nintendo Switch (OLED/regular/Lite)", description: "Sole platform — 30 FPS docked/handheld with some drops in dense build scenarios." },
    { name: "Amiibo (optional)", description: "Zelda-series amiibo unlock in-game cosmetics + material rewards." },
    { name: "Pro Controller (recommended)", description: "Preferred over Joy-Con for extended play + build precision." },
  ],
  duration: { approximateMinutes: 60, structure: "Main quest 60+ hrs; 100% completionist 150-200 hrs." },
  objective: "Rescue Zelda, defeat Ganondorf, and explore all sky islands + Depths + surface Hyrule.",
  matchStructure: "Single-player open-world with 4 main dungeon quests + Zonai shrines + tears memories + optional side content.",
  basicRules: [
    { title: "4 Zonai abilities", body: "Ultrahand (build), Fuse (combine), Ascend (upward swim), Recall (rewind)." },
    { title: "3 world layers", body: "Surface Hyrule + sky islands + underground Depths — traverse via towers + falls + Ascend." },
    { title: "Build vehicles/weapons freely", body: "Ultrahand allows creative construction from Zonai devices + world objects." },
  ],
  advancedRules: [
    { title: "Weapon durability + Fuse", body: "Weapons break; Fuse with monster horns/rocks/wood to extend durability + change move." },
    { title: "Autobuild memory 21 slots", body: "Save 21 vehicle blueprints via Autobuild; costs Zonaite to instant-build." },
  ],
  scoring: {
    summary: "Story progression + shrines cleared + Korok seed collection + Depths mapped.",
    winCondition: "Complete story + defeat Ganondorf; 100% = all 152 shrines + 1000 Korok seeds + all Depths lightroots.",
    breakdown: [{ action: "Story completion + all shrines", points: "Golden save file" }],
  },
  penalties: [
    { title: "Weapon break", body: "Weapon must be Fused or replaced — no permanent loss." },
    { title: "Depths gloom", body: "Reduces max HP until healed at Lightroot or Sun Fruit." },
    { title: "Death (Game Over)", body: "Reload last save/autosave; no permanent death." },
  ],
  positions: [{ name: "Player (Link)", role: "Hero controlling Link + Zelda memories.", count: 1 }],
  officiating: { officials: ["Speedrun.com moderators for community leaderboards"], summary: "Single-player only; no PvP." },
  governingBodies: [{ name: "Nintendo Co., Ltd.", founded: 1889, headquarters: "Kyoto, Japan" }],
  majorCompetitions: [
    { name: "Speedrun.com TotK leaderboards", frequency: "ongoing", founded: 2023, region: "global (community)" },
    { name: "The Game Awards 2023 GOTY winner", frequency: "annual", founded: 2014, region: "global" },
  ],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "IT", "ES", "AU", "KR", "BR"],
  famousAthletes: ["Community speedrunners — sub-1:20 Any% Amiibo runs; sub-45m Any% No Amiibo"],
  records: [
    { title: "Fastest-launching Nintendo IP", holder: "Tears of the Kingdom", value: "10M units in first 3 days; 20M+ in 6 weeks", year: 2023 },
    { title: "2023 Game of the Year", holder: "Nintendo EPD", value: "The Game Awards, D.I.C.E., BAFTA GOTY awards", year: 2023 },
    { title: "Speedrun world records", holder: "various speedrunners", value: "Sub-45min Any% No Amiibo; sub-1:20 Any% Amiibo", year: 2024 },
  ],
  variants: ["totk-any-percent", "totk-100-percent", "totk-glitchless"],
  relatedSports: ["zelda-breath-of-the-wild", "elden-ring", "genshin-impact"],
  skills: ["exploration", "vehicle building", "weapon crafting", "shrine puzzles", "combat"],
  strategies: [
    { title: "Ultrahand + Autobuild vehicle library", body: "Save reusable vehicle blueprints (glider, tank, hover-bike) via Autobuild for repeat use." },
    { title: "Fuse for elemental weapons", body: "Fuse lynel horns or elemental gems for high-damage or effect-inducing weapons." },
    { title: "Depths lightroot mapping", body: "Depths mirror surface — activating lightroot reveals matching surface region skyview." },
  ],
  terminology: [
    { term: "Ultrahand", meaning: "Ability to attach objects together" },
    { term: "Fuse", meaning: "Combine weapon + item for buffed effect" },
    { term: "Ascend", meaning: "Swim upward through ceiling" },
    { term: "Recall", meaning: "Rewind object trajectory" },
    { term: "Zonai", meaning: "Ancient tech civilisation in TotK" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Great Sky Island tutorial", body: "Learn 4 Zonai abilities + basic combat + gliding." }] },
    { level: "intermediate", steps: [{ title: "Main dungeons + Depths", body: "4 regional dungeons + Depths mapping + Zonai shrine grinding." }] },
    { level: "advanced", steps: [{ title: "Speedrun + 100% completion", body: "Glitchless speedruns; all 152 shrines + 1000 Koroks + all Depths lightroots." }] },
  ],
  faq: [
    { question: "Is Tears of the Kingdom a direct sequel to Breath of the Wild?", answer: "Yes — same Hyrule world with expanded layers (sky islands + Depths) and new Zonai abilities. Prior BotW knowledge helpful but not required." },
    { question: "Is it available outside Switch?", answer: "No — Nintendo Switch exclusive (all models). No PC or other console release announced." },
  ],
  wikipediaTitle: "The Legend of Zelda: Tears of the Kingdom",
  sources: [{ label: "Wikipedia — The Legend of Zelda: Tears of the Kingdom", url: "https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Tears_of_the_Kingdom", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default zeldaTearsOfTheKingdom;

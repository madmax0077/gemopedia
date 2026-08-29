import type { Sport } from "@/lib/types";

export const octopathTraveler2: Sport = {
  id: "octopath-traveler-2",
  slug: "octopath-traveler-2",
  name: "Octopath Traveler II",
  officialName: "Octopath Traveler II",
  aliases: ["OT2", "Octopath 2", "オクトパストラベラーII"],
  shortDescription:
    "HD-2D turn-based JRPG (Square Enix + Acquire, Feb 24, 2023 PS4/PS5/Switch/PC) — 8 protagonists with unique storylines in continent of Solistia. Sequel to 2018 Octopath Traveler; introduces Day/Night cycle, Path Actions, EX Skills. 1.5M+ units in first month.",
  longDescription:
    "Octopath Traveler II is the HD-2D turn-based JRPG sequel to 2018's Octopath Traveler — developed by Acquire + published by Square Enix. Released February 24, 2023 for PS4, PS5, Nintendo Switch, and PC (Steam). Set on the continent of Solistia (unrelated to first game's Orsterra) — 8 protagonists each with unique 4-chapter storyline: Ochette (Hunter), Castti (Apothecary), Throné (Thief), Osvald (Scholar), Partitio (Merchant), Agnea (Dancer), Temenos (Cleric), Hikari (Warrior). Player selects starting character; recruits others from home cities. Introduces Day/Night cycle affecting Path Actions (each character has 2 Path Actions per Day/Night — e.g., Ochette Provoke/Befriend, Osvald Study/Ambush). Adds EX Skills unlocked via job mastery. Retains signature HD-2D visual style + Yasunori Nishiki score. 1.5M+ units in first month; strong critical reception praising improvements over first game.",
  category: "video-games",
  subCategory: "HD-2D turn-based JRPG",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Acquire + Square Enix Tokyo)",
  estimatedOrigin: "Released Feb 24, 2023 for PS4/PS5/Switch/PC",
  players: { min: 1, max: 1, note: "Single-player only." },
  equipment: [
    { name: "PS4/PS5, Switch, PC", description: "Multi-platform; Switch runs 30 FPS docked, other platforms 60 FPS." },
    { name: "Standard controller or M+KB (PC)", description: "Turn-based combat with any input." },
  ],
  duration: { approximateMinutes: 60, structure: "Main story (all 8 protagonists) ~60-80 hrs; 100% + crossed stories + secret jobs ~100-130 hrs." },
  objective: "Complete all 8 protagonist storylines + optional Crossed Paths + final crossroad battle.",
  matchStructure: "Single-player 8-storyline JRPG; each protagonist has 4-chapter arc.",
  basicRules: [
    { title: "8 protagonists with unique storylines", body: "Ochette, Castti, Throné, Osvald, Partitio, Agnea, Temenos, Hikari — 4 chapters each." },
    { title: "Break + Boost system", body: "Break enemy shield with weapon type/element; Boost points enhance attacks." },
    { title: "Path Actions per Day/Night", body: "Each character has 2 Path Actions (1 Day, 1 Night) for town interaction." },
  ],
  advancedRules: [
    { title: "Job + subjob system", body: "8 base jobs + 4 secret jobs; each character can equip subjob for skills." },
    { title: "Crossed Paths (2-character optional stories)", body: "Once you have 2 protagonists, unlock optional Crossed Paths side stories combining their backstories." },
    { title: "EX Skills via job mastery", body: "Master job to unlock EX Skill — powerful signature move." },
  ],
  scoring: {
    summary: "8 protagonist storylines + Crossed Paths + secret jobs + final crossroad boss.",
    winCondition: "Complete all 8 stories + final crossroad; 100% = all Crossed Paths + all secret jobs + all EX Skills.",
    breakdown: [{ action: "Story completion (per protagonist)", points: "4 chapters credits" }],
  },
  penalties: [
    { title: "Party wipe (all HP 0)", body: "Reload autosave; no permanent loss." },
    { title: "Failed Path Action (e.g., Provoke KO)", body: "Path Action resets; character reputation may take hit in town." },
  ],
  positions: [{ name: "8 protagonists (Ochette, Castti, Throné, Osvald, Partitio, Agnea, Temenos, Hikari)", role: "Rotating 4-character party from 8-protagonist pool.", count: 4 }],
  officiating: { officials: ["Speedrun.com moderators"], summary: "Single-player only." },
  governingBodies: [
    { name: "Square Enix Holdings", founded: 2003, headquarters: "Tokyo, Japan" },
    { name: "Acquire Corp", founded: 1994, headquarters: "Tokyo, Japan" },
  ],
  majorCompetitions: [
    { name: "Speedrun.com Octopath Traveler II leaderboards", frequency: "ongoing", founded: 2023, region: "global (community)" },
  ],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "IT", "KR", "AU", "BR"],
  famousAthletes: ["Community speedrunners establishing Any% + 100% All Chapters leaderboards"],
  records: [
    { title: "1.5M+ units first month", holder: "Square Enix", value: "1.5 million+ units sold in first month across all platforms", year: 2023 },
    { title: "HD-2D visual style pioneered", holder: "Acquire / Square Enix", value: "Continues HD-2D style pioneered by Octopath Traveler (2018) + Triangle Strategy (2022)", year: 2023 },
  ],
  variants: ["octopath-traveler-2-standard", "octopath-traveler-2-digital-deluxe"],
  relatedSports: ["octopath-traveler-1", "triangle-strategy", "bravely-default-2"],
  skills: ["turn-based tactics", "break-boost timing", "path action strategy", "job + subjob building"],
  strategies: [
    { title: "Break turn-order manipulation", body: "Break enemy just before their turn to skip their action + set up combos." },
    { title: "Path Action town efficiency", body: "Use Day + Night Path Actions on same townspeople for combined rewards." },
    { title: "Secret job unlock chain", body: "Recruit specific NPCs + complete side quests to unlock 4 secret jobs (Inventor, Arcanist, Armsmaster, Conjurer)." },
  ],
  terminology: [
    { term: "Path Action", meaning: "Character-unique town interaction ability" },
    { term: "Break", meaning: "Shield destruction leaving enemy vulnerable + skipping turn" },
    { term: "Boost", meaning: "Points spent to enhance attack strength" },
    { term: "Latent Power", meaning: "Character-specific super mode charged via combat" },
    { term: "Crossed Path", meaning: "Optional 2-character side story" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "First protagonist Chapter 1", body: "Pick starting character; learn Break-Boost combat + Path Actions." }] },
    { level: "intermediate", steps: [{ title: "Recruit all 8 + complete Chapter 2-3", body: "Build 4-party rotation; complete mid-game storylines + start Crossed Paths." }] },
    { level: "advanced", steps: [{ title: "All chapters + secret jobs + speedrun", body: "Complete all 8 storylines + 4 secret jobs + final crossroad boss." }] },
  ],
  faq: [
    { question: "Is Octopath Traveler II connected to first Octopath?", answer: "No direct story connection — new continent (Solistia), new characters. Familiar mechanics + HD-2D style. First game not required." },
    { question: "Do all 8 protagonists' stories connect?", answer: "Each has independent 4-chapter arc, but optional Crossed Paths side stories connect 2-character pairs. Final crossroad chapter unites all 8." },
  ],
  wikipediaTitle: "Octopath Traveler II",
  sources: [{ label: "Wikipedia — Octopath Traveler II", url: "https://en.wikipedia.org/wiki/Octopath_Traveler_II", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default octopathTraveler2;

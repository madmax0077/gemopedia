import type { Sport } from "@/lib/types";

export const alanWake2: Sport = {
  id: "alan-wake-2",
  slug: "alan-wake-2",
  name: "Alan Wake 2",
  officialName: "Alan Wake II",
  aliases: ["AW2"],
  shortDescription:
    "Remedy Entertainment psychological survival-horror (Oct 27, 2023 PS5/Xbox/PC) — dual protagonists Alan Wake + FBI agent Saga Anderson investigating serial murders in Bright Falls. First Remedy game with survival-horror mechanics + full-motion video hybrid. GOTY-nominee 2023.",
  longDescription:
    "Alan Wake 2 is a psychological survival-horror game developed by Finnish studio Remedy Entertainment + published by Epic Games Publishing, released October 27, 2023 for PS5, Xbox Series X/S, and PC (Epic Games Store — exclusive digital-only release). Sequel to 2010's Alan Wake — 13-year gap. Directed by Sam Lake + Kyle Rowley. Dual-protagonist structure: FBI Special Agent Saga Anderson investigates ritualistic serial murders in Bright Falls / Watery / Cauldron Lake (Pacific Northwest, 2023); meanwhile Alan Wake, trapped in the Dark Place since AW1, attempts to write his way back to reality via a shifting nightmare New York. Players can freely swap between the two protagonists after Prologue + Chapter 2, each with distinct mechanics: Saga uses 'Mind Place' investigation board + Profiling; Alan uses 'Plot Board' to re-write scenes. First Remedy game with true survival-horror pacing — limited ammo, shadow-monster 'Taken' enemies weakened by light, deliberate combat. Extensive use of full-motion video hybrid — live-action + in-engine cutscenes seamlessly integrated. Sets up Remedy Connected Universe with Control (2019). 1M+ units first month; nominated for Game of the Year at TGA 2023 (won Best Narrative + Best Game Direction + Best Art Direction).",
  category: "video-games",
  subCategory: "psychological survival-horror",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "major",
  countryOfOrigin: "FI",
  regionOfOrigin: "Finland (Remedy Entertainment, Espoo)",
  estimatedOrigin: "Released Oct 27, 2023 PS5/Xbox Series/PC — sequel to Alan Wake (2010)",
  players: { min: 1, max: 1, note: "Single-player only." },
  equipment: [
    { name: "PS5, Xbox Series X/S, PC (Epic exclusive)", description: "Digital-only release; no physical PC copy. Physical PS5/Xbox editions came later 2024." },
    { name: "Standard controller (recommended)", description: "Uses DualSense haptics on PS5." },
  ],
  duration: { approximateMinutes: 60, structure: "Main story ~18-25 hrs; 100% + both DLC (Night Springs + Lake House) ~35-45 hrs." },
  objective: "Solve Cauldron Lake ritualistic murders (as Saga); escape the Dark Place (as Alan); ultimately reunite the narrative to break the loop.",
  matchStructure: "Single-player dual-protagonist horror; ~10 chapters swappable between Saga (Bright Falls) + Alan (Dark Place New York). 2 DLC episodes.",
  basicRules: [
    { title: "Light weakens shadow enemies", body: "Taken enemies are protected by darkness; use flashlight to strip shadow before shooting." },
    { title: "Limited ammo + resource management", body: "Survival-horror pacing; save ammo + batteries for tougher encounters." },
    { title: "Dual-protagonist swap (post-Ch2)", body: "Swap between Saga + Alan freely after Chapter 2; each has unique mechanics." },
  ],
  advancedRules: [
    { title: "Saga's Mind Place", body: "Investigation-board room where Saga pins clues, profiles suspects, builds cases." },
    { title: "Alan's Plot Board", body: "Rewrite scene plot points (Location/Story Element) to reshape the Dark Place level around him." },
    { title: "Word of Power collectibles", body: "Alan-side collectibles that permanently boost weapon damage/reload/handling." },
  ],
  scoring: {
    summary: "Chapter progression + collectibles + Nightmare difficulty for NG+.",
    winCondition: "Complete both protagonists' final chapters. 100% = all collectibles + Nightmare difficulty + both DLC.",
    breakdown: [{ action: "Chapter completion", points: "Story progression + collectible unlocks" }],
  },
  penalties: [
    { title: "Death (ammo/resource depletion)", body: "Reload autosave; combat is unforgiving but no permadeath." },
    { title: "Missed collectibles/manuscripts", body: "Some chapter-locked collectibles require chapter select replay or NG+." },
  ],
  positions: [
    { name: "Saga Anderson (FBI Special Agent)", role: "Bright Falls investigator; uses Mind Place + Profiling.", count: 1 },
    { name: "Alan Wake (Bestselling horror author)", role: "Trapped in Dark Place; uses Plot Board to rewrite reality.", count: 1 },
  ],
  officiating: { officials: ["Speedrun.com moderators"], summary: "Single-player only." },
  governingBodies: [
    { name: "Remedy Entertainment", founded: 1995, headquarters: "Espoo, Finland" },
    { name: "Epic Games Publishing", founded: 2020, headquarters: "Cary, North Carolina" },
  ],
  majorCompetitions: [
    { name: "The Game Awards 2023 (Best Narrative + Direction + Art)", frequency: "annual", founded: 2014, region: "global" },
    { name: "Speedrun.com Alan Wake 2 leaderboards", frequency: "ongoing", founded: 2023, region: "global (community)" },
  ],
  countriesPlayed: ["FI", "US", "GB", "DE", "FR", "JP", "SE", "NO"],
  famousAthletes: ["Sam Lake (creative director)", "Kyle Rowley (game director)", "Ilkka Villi (Alan Wake actor)", "Melanie Liburd (Saga Anderson actress)", "Petri Alanko (composer)"],
  records: [
    { title: "1M+ units first month", holder: "Remedy / Epic", value: "1 million+ units sold in first month across all platforms", year: 2023 },
    { title: "TGA 2023 3 wins", holder: "Remedy", value: "Won Best Narrative, Best Game Direction, Best Art Direction at The Game Awards 2023", year: 2023 },
    { title: "First survival-horror from Remedy", holder: "Remedy", value: "Studio's first true survival-horror after 30 years of third-person action games", year: 2023 },
  ],
  variants: ["alan-wake-2-standard", "alan-wake-2-deluxe", "alan-wake-2-night-springs-dlc", "alan-wake-2-lake-house-dlc"],
  relatedSports: ["alan-wake-1", "control", "quantum-break", "silent-hill-2-remake"],
  skills: ["survival-horror resource management", "light + shadow combat timing", "investigation puzzle solving", "narrative attention to detail"],
  strategies: [
    { title: "Flashlight burn timing", body: "Fully burn shadow shield with flashlight before switching to firearm — hasty shots waste ammo on shielded enemies." },
    { title: "Mind Place clue-pinning", body: "As Saga, pin every clue immediately; Case Board evidence chains unlock optional lore + easier puzzle solutions." },
    { title: "Plot Board scene-swap tactics", body: "As Alan, cycle Location + Plot Element swaps to reveal hidden Words of Power + enemy-free paths." },
  ],
  terminology: [
    { term: "Taken", meaning: "Shadow-possessed shambling enemies weakened by light" },
    { term: "Dark Place", meaning: "Otherworldly prison Alan is trapped in" },
    { term: "Mind Place", meaning: "Saga's mental investigation room" },
    { term: "Plot Board", meaning: "Alan's scene-rewriting mechanic" },
    { term: "Manuscript page", meaning: "In-universe collectibles that foreshadow scenes" },
    { term: "Cauldron Lake", meaning: "Central mythic location near Bright Falls, WA" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Prologue + Chapter 1", body: "Learn flashlight + firearm combo + Saga's Mind Place." }] },
    { level: "intermediate", steps: [{ title: "Mid-game (Ch 3-6) + both protagonists", body: "Learn Alan's Plot Board; balance both storylines." }] },
    { level: "advanced", steps: [{ title: "Nightmare difficulty + both DLC + all collectibles", body: "Full 100% with harder combat + Night Springs + Lake House episodes." }] },
  ],
  faq: [
    { question: "Do I need to play Alan Wake 1 first?", answer: "Highly recommended but not strictly required — AW2 includes 'Previously On' recap. AW1 remaster + AW1 DLC (American Nightmare) provide essential context for Alan's arc." },
    { question: "How does AW2 connect to Control?", answer: "AW2 is part of Remedy Connected Universe with Control (2019) — Federal Bureau of Control (FBC), Alan's manuscripts, + Cauldron Lake all appear in both. Alan Wake 2 Lake House DLC bridges directly to Control 2 (upcoming)." },
    { question: "Is Alan Wake 2 scary?", answer: "Yes — psychological horror with jump scares + dread atmosphere. Not gore-focused; more Lynchian/Kingian tone. Difficulty modes affect combat intensity, not scare intensity." },
  ],
  wikipediaTitle: "Alan Wake 2",
  sources: [{ label: "Wikipedia — Alan Wake 2", url: "https://en.wikipedia.org/wiki/Alan_Wake_2", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default alanWake2;

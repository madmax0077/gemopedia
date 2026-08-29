import type { Sport } from "@/lib/types";

export const pokemonLegendsArceus: Sport = {
  id: "pokemon-legends-arceus",
  slug: "pokemon-legends-arceus",
  name: "Pokémon Legends: Arceus",
  officialName: "Pokémon Legends: Arceus",
  aliases: ["PLA", "Legends Arceus", "ポケモンレジェンズ アルセウス"],
  shortDescription:
    "Open-region action-RPG spinoff (Game Freak, Jan 28, 2022, Nintendo Switch) set in the feudal Hisui region (ancient Sinnoh) — first Pokémon game with dodge-rolls, action-based catching (no forced battles), and dedicated survey missions to complete the first Pokédex. 15M+ units sold.",
  longDescription:
    "Pokémon Legends: Arceus is an open-region action-RPG spinoff developed by Game Freak + published by The Pokémon Company / Nintendo for Switch (January 28, 2022). Set in the feudal Hisui region (ancient Sinnoh, ~150 years before Diamond/Pearl), it introduced series-first mechanics that later influenced Scarlet/Violet: dodge-rolls, action-based Pokémon catching (throw balls without triggering battle), Frenzied Noble boss fights (Kleavor, Lilligant, Arcanine, Electrode, Avalugg — calmed with real-time balm throws), and 5 open zones (Obsidian Fieldlands, Crimson Mirelands, Cobalt Coastlands, Coronet Highlands, Alabaster Icelands). Structured as Galaxy Team survey missions with Star Rank progression (I-X). Sold 6.5M units in first week; 15M+ lifetime as of 2024. Single-player only — no PvP, no online tournaments.",
  category: "video-games",
  subCategory: "action-role-playing spinoff (Pokémon Hisui)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Game Freak Tokyo)",
  estimatedOrigin: "Released Jan 28, 2022 on Nintendo Switch",
  players: { min: 1, max: 1, note: "Single-player only." },
  equipment: [
    { name: "Nintendo Switch", description: "Only platform — 30 FPS docked/handheld with dips in dense areas." },
    { name: "Arceus Phone (in-game)", description: "Menu system tracking Pokédex, quests, satchel." },
    { name: "Balms + Pokéballs (in-game)", description: "Balms calm Frenzied Nobles; various Pokéballs (feather, heavy, gigaton, jet, leaden, wing) for varied catch conditions." },
  ],
  duration: { approximateMinutes: 25, structure: "Main story 25-35 hrs; Perfect Hisui Pokédex 60-80 hrs; Star rank max 100+ hrs." },
  objective: "Complete Hisui Pokédex; calm 5 Frenzied Nobles; advance through Galaxy Team Star Ranks.",
  matchStructure: "Single-player 30-40 hr campaign across 5 open regions + post-game rank grinding.",
  basicRules: [
    { title: "Stealth catching enabled", body: "Throw Pokéball from behind hidden position for guaranteed catch without battle." },
    { title: "Dodge-roll in real-time", body: "Player dodges enemy attacks in field encounters — not turn-based." },
    { title: "Balm-calm Noble bosses", body: "Frenzied Nobles must be calmed by throwing balms + dodging before capture." },
  ],
  advancedRules: [
    { title: "Strong/Agile style toggle", body: "Battles use style toggle — Strong = higher damage/slower turn; Agile = lower damage/faster." },
    { title: "Mass outbreak shiny chains", body: "Complete outbreak → return to Jubilife → chain (up to 4) for improved shiny odds with Shiny Charm." },
  ],
  scoring: {
    summary: "Rank up through Galaxy Team missions (Star Ranks I-X); Hisui Pokédex 100% completion + shiny hunt.",
    winCondition: "Story completion → 100% Pokédex → all shiny hunt (aspirational).",
    breakdown: [{ action: "Pokémon research max level (10)", points: "Full Pokédex entry" }],
  },
  penalties: [
    { title: "Blacked out (all party fainted)", body: "Wake up at nearest campsite/Jubilife; lose portion of held items — retrieve from fainting spot." },
    { title: "Alpha Pokémon aggression", body: "Higher-level Alphas can 1-shot player character — retreat if outmatched." },
    { title: "Being spotted by Noble unprepared", body: "Instant battle with limited escape — recommend having balms + full HP." },
  ],
  positions: [{ name: "Survey Corps member", role: "Galaxy Team member cataloguing Hisui Pokémon and calming Nobles.", count: 1 }],
  officiating: { officials: ["No competitive tournaments"], summary: "Single-player only; no PvP or online tournaments." },
  governingBodies: [{ name: "The Pokémon Company", founded: 1998, headquarters: "Tokyo, Japan / Bellevue, Washington, USA" }],
  majorCompetitions: [{ name: "Speedrun.com Any% leaderboard", frequency: "ongoing", founded: 2022, region: "global (community)" }],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "AU", "KR", "BR"],
  famousAthletes: ["Community speedrunners maintaining Any% + 100% leaderboards"],
  records: [
    { title: "First-week sales", holder: "Pokémon Legends: Arceus", value: "6.5 million units in first week — massive success for a spinoff", year: 2022 },
    { title: "Total sales (2024)", holder: "Game Freak / Nintendo", value: "15+ million units sold worldwide", year: 2024 },
    { title: "Speedrun any% world record", holder: "various speedrunners", value: "~4h 30m for main story any%", year: 2024 },
  ],
  variants: ["pokemon-legends-arceus-japan-launch", "hisui-shiny-hunt-community"],
  relatedSports: ["pokemon-scarlet-violet", "pokemon-video-games", "monster-hunter"],
  skills: ["stealth catching", "real-time dodge", "Pokéball throw accuracy", "shiny chain optimisation"],
  strategies: [
    { title: "Stealth-throw farming", body: "Sneak behind Pokémon in tall grass, throw heavy ball from behind for guaranteed catch." },
    { title: "Strong-style / Agile-style toggle", body: "Chain Agile moves against slower opponents to double-turn them." },
    { title: "Mass outbreak shiny chain", body: "Complete outbreak → back to village → return for chain (up to 4)." },
  ],
  terminology: [
    { term: "Alpha", meaning: "Giant, aggressive high-level wild Pokémon" },
    { term: "Frenzied Noble", meaning: "Boss Pokémon that must be calmed with balms" },
    { term: "Hisui", meaning: "Feudal-era Sinnoh region setting" },
    { term: "Balm", meaning: "Thrown item to calm Frenzied Nobles" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Basic capture + battle", body: "Throwing Pokéballs from sneak position, dodge-rolling, using berries + status items." }] },
    { level: "intermediate", steps: [{ title: "Alpha + Frenzied Noble hunting", body: "Battling Frenzied Nobles with balm throws; catching Alpha Pokémon; mass outbreak farming." }] },
    { level: "advanced", steps: [{ title: "Perfect Pokédex + shiny hunt", body: "10/10 research level all 242 Pokémon; mass outbreak shiny chains." }] },
  ],
  faq: [
    { question: "Is Legends: Arceus a mainline Pokémon game?", answer: "Officially a spinoff, though its series-first mechanics (dodge-rolls, action catching) influenced Scarlet/Violet." },
    { question: "How is catching different?", answer: "You can catch Pokémon by throwing a ball from stealth without entering battle — or engage battle. Stealth catches are faster + safer." },
  ],
  wikipediaTitle: "Pokémon Legends: Arceus",
  sources: [{ label: "Wikipedia — Pokémon Legends: Arceus", url: "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Arceus", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default pokemonLegendsArceus;

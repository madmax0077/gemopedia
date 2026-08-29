import type { Sport } from "@/lib/types";

export const persona3Reload: Sport = {
  id: "persona-3-reload",
  slug: "persona-3-reload",
  name: "Persona 3 Reload",
  officialName: "Persona 3 Reload",
  aliases: ["P3R", "ペルソナ3 リロード"],
  shortDescription:
    "Modern remake of Persona 3 (Atlus + Sega, Feb 2, 2024 PS4/PS5/Xbox/PC/Game Pass) — story of Specialized Extracurricular Execution Squad (SEES) fighting Shadows during the Dark Hour. Rebuilt with Persona 5-style UI + modernised gameplay. 1M+ units in first week.",
  longDescription:
    "Persona 3 Reload is the modern remake of Persona 3 (originally 2006 PS2) — developed by Atlus P-Studio + published by Sega. Released February 2, 2024 for PS4/PS5, Xbox One/Series X|S, PC (Steam + Microsoft Store), and Xbox Game Pass day one. Story follows the Specialized Extracurricular Execution Squad (SEES) — high-school student team fighting supernatural Shadows during the hidden 'Dark Hour' between midnight + 1 AM. Uses Personas (mythological beings summoned via Evokers) to battle Shadows within Tartarus tower. Rebuilds original P3 with Persona 5-style UI + modernised gameplay: Baton Pass, Theurgy signature moves per character, revamped Tartarus, expanded social links. Retains original P3 story unchanged (unlike previous P3 FES/Portable versions). Does NOT include The Answer expansion (later added as paid DLC 'Episode Aigis'). Reached 1M+ units in first week, Atlus's fastest-selling game ever.",
  category: "video-games",
  subCategory: "JRPG remake (Atlus Persona series)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Atlus P-Studio Tokyo, published by Sega)",
  estimatedOrigin: "Released Feb 2, 2024; Episode Aigis DLC Sep 10, 2024",
  players: { min: 1, max: 1, note: "Single-player only." },
  equipment: [
    { name: "PS4/PS5, Xbox One/Series, PC, Game Pass", description: "Cross-platform; day-one Xbox Game Pass inclusion." },
    { name: "Standard controller or M+KB (PC)", description: "Turn-based combat playable with any input." },
  ],
  duration: { approximateMinutes: 60, structure: "Main story ~80 hrs; 100% + social links ~120 hrs; Episode Aigis DLC ~20-30 hrs." },
  objective: "Guide the Protagonist + SEES team through Dark Hour battles + calendar year toward final confrontation with Nyx.",
  matchStructure: "Single-player calendar-based JRPG — social sim by day + Tartarus dungeon crawl by night (Dark Hour).",
  basicRules: [
    { title: "Calendar-based sim + dungeon", body: "Choose daily activities (social links, school, part-time work); at night enter Tartarus for Persona battles." },
    { title: "Persona summoning via Evoker", body: "Characters shoot themselves in head with Evoker (symbolic) to summon Persona." },
    { title: "Turn-based combat with weakness targeting", body: "1 More extra turn on weakness hit or crit." },
  ],
  advancedRules: [
    { title: "Baton Pass", body: "New in Reload — pass extra turn to ally after successful weakness hit." },
    { title: "Theurgy signature attacks", body: "Character-specific super attacks charged via specific actions." },
    { title: "Persona fusion in Velvet Room", body: "Fuse existing Personas into new ones; carry-over skills strategy." },
  ],
  scoring: {
    summary: "Story completion + social links maxed (S-Link Rank 10) + Persona compendium + Tartarus floors + final boss defeat.",
    winCondition: "Complete story (calendar year to Nyx battle); 100% = all S-Links + all Personas + all Tartarus floors + Episode Aigis DLC.",
    breakdown: [{ action: "Story completion", points: "Credits + True Ending" }],
  },
  penalties: [
    { title: "Game Over (all HP 0)", body: "Reload autosave; Reload adds more autosaves than original P3." },
    { title: "Missed social link rank", body: "Can miss maxing S-Link if calendar days used inefficiently — plan calendar carefully." },
  ],
  positions: [{ name: "Protagonist + SEES party (Yukari, Junpei, Akihiko, Mitsuru, Fuuka, Aigis, Ken, Koromaru, Shinjiro)", role: "10 total party members across story.", count: 4 }],
  officiating: { officials: ["Speedrun.com moderators"], summary: "Single-player only." },
  governingBodies: [
    { name: "Sega Sammy Holdings", founded: 1960, headquarters: "Tokyo, Japan" },
    { name: "Atlus P-Studio", founded: 1986, headquarters: "Tokyo, Japan" },
  ],
  majorCompetitions: [
    { name: "Speedrun.com Persona 3 Reload leaderboards", frequency: "ongoing", founded: 2024, region: "global (community)" },
  ],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "IT", "KR", "AU", "BR"],
  famousAthletes: ["Community speedrunners establishing Any% + True Ending leaderboards"],
  records: [
    { title: "Atlus's fastest-selling game", holder: "Atlus / Sega", value: "1M+ units in first week — Atlus's fastest-selling title ever", year: 2024 },
    { title: "Episode Aigis DLC", holder: "Atlus", value: "Paid DLC adding The Answer epilogue expansion (Sep 10, 2024)", year: 2024 },
    { title: "Day-one Xbox Game Pass release", holder: "Sega + Microsoft", value: "First mainline Persona to launch day-one on Game Pass", year: 2024 },
  ],
  variants: ["persona-3-reload-standard", "persona-3-reload-digital-deluxe-episode-aigis"],
  relatedSports: ["persona-5", "persona-4-golden", "shin-megami-tensei-v"],
  skills: ["persona fusion", "social link planning", "weakness targeting", "calendar optimisation"],
  strategies: [
    { title: "Calendar optimisation for max S-Links", body: "Plan calendar days for S-Link maxing before Nyx battle; use S-Link fusion bonus." },
    { title: "Weakness + Baton Pass chain", body: "Chain weakness hits with Baton Pass for All-Out Attack setups." },
    { title: "Persona fusion sniping", body: "Fuse specific Personas at higher social link ranks for maximum XP + skill inheritance." },
  ],
  terminology: [
    { term: "SEES", meaning: "Specialized Extracurricular Execution Squad" },
    { term: "Dark Hour", meaning: "Hidden 25th hour between midnight + 1 AM" },
    { term: "Evoker", meaning: "Persona-summoning gun" },
    { term: "Tartarus", meaning: "Procedural tower dungeon" },
    { term: "S-Link", meaning: "Social Link relationship progression" },
    { term: "Theurgy", meaning: "Character signature super attack" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "First month (April) intro", body: "Learn calendar sim + Tartarus combat basics." }] },
    { level: "intermediate", steps: [{ title: "Full year + all S-Links", body: "Max all social links + complete Tartarus." }] },
    { level: "advanced", steps: [{ title: "Episode Aigis DLC + speedrun", body: "The Answer post-story + Any% speedruns." }] },
  ],
  faq: [
    { question: "Do I need to play prior Persona games?", answer: "No — Reload is standalone remake of P3 (2006). No prior knowledge needed. Follow-up P3 FES + P3P are older/alternative versions." },
    { question: "Does Reload include The Answer?", answer: "Not in base game — added as paid DLC 'Episode Aigis' September 10, 2024." },
  ],
  wikipediaTitle: "Persona 3 Reload",
  sources: [{ label: "Wikipedia — Persona 3 Reload", url: "https://en.wikipedia.org/wiki/Persona_3_Reload", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default persona3Reload;

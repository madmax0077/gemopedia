import type { Sport } from "@/lib/types";

export const starfinderSociety: Sport = {
  id: "starfinder-society",
  slug: "starfinder-society",
  name: "Starfinder Society (RPG)",
  officialName: "Paizo Starfinder Society Organized Play",
  aliases: ["Starfinder", "SFS", "Starfinder Second Edition"],
  shortDescription:
    "Science-fantasy tabletop RPG by Paizo (2017, Starfinder 1E; 2E playtest 2024) set in the far-future of the Pathfinder universe — d20-based system with starships + magic + aliens; Starfinder Society organized play program with ~3-6 player groups completing published scenarios in shared setting.",
  longDescription:
    "Starfinder is a science-fantasy tabletop RPG published by Paizo (Renton, Washington) in 2017 as a sci-fi successor + companion to Paizo's flagship Pathfinder RPG. Set in the far-future of the Pathfinder universe (thousands of years after cataclysmic event 'The Gap' — a memory-erased period), the game combines high-fantasy elements (magic, gods, elves, goblins, dragons) with science-fiction elements (starships, laser weapons, alien races like Vesk, Ysoki, Kasathas, Shirren). Uses d20-based system evolved from Pathfinder 1E with unique starship combat, computer hacking, spaceship-scale action, class + race customization. Starfinder Society is Paizo's organized play program (launched simultaneously with core rules 2017) — modeled after the successful Pathfinder Society. Program features: (1) Standardized character creation with legal options; (2) Published scenarios (~3-6 hour adventures) organized in numbered Sessions; (3) Reporting system tracking character progression across worldwide sessions; (4) Guild-based faction system with rewards for allegiance; (5) Persistent characters carry XP + wealth + faction reputation between sessions worldwide. Second Edition (Starfinder 2E) entered public playtest 2024 with full release planned 2025 — modernized system compatibility with Pathfinder 2E. Global program active in ~50+ countries via game stores + conventions (PaizoCon annually, Gen Con largest); ~50,000+ registered organized-play members. Distinguished from Dungeons & Dragons (fantasy) + traditional sci-fi RPGs by unique hybrid setting. Notable adventures: 'Attack of the Swarm!' campaign, 'Dead Suns' + 'Signal of Screams' Adventure Paths.",
  category: "tabletop-rpg",
  subCategory: "science-fantasy tabletop RPG organized play",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "niche",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Paizo — Renton, Washington)",
  estimatedOrigin: "Starfinder 1E published 2017; Society launched simultaneously; 2E playtest 2024",
  players: { min: 3, max: 7, note: "1 GM + 3-6 players standard (organized play accommodates 4-6 characters)." },
  equipment: [{ name: "Starfinder Core Rulebook + Alien Archive + Armory", description: "Core books (~$60 each print, PDF via Paizo/DriveThruRPG)." }, { name: "Character sheet (Starfinder-specific)", description: "Standardized SFS character sheet with career + faction tracking." }, { name: "Polyhedral dice set (d20 primary)", description: "d20 + d4/d6/d8/d10/d12 + percentiles." }, { name: "Published scenario / Adventure Path", description: "Paizo-published scenarios required for Society credit." }, { name: "Miniatures + battle mat / Virtual Tabletop", description: "For starship + tactical combat; Foundry VTT + Roll20 support Starfinder." }, { name: "SFS Guide + Reporting Sheet", description: "Chronicle sheet for character progression tracking." }],
  duration: { approximateMinutes: 240, structure: "Session: 3-6 hours per scenario; Character career: multi-year progression across sessions." },
  objective: "Complete scenarios; earn XP + wealth + fame; support Starfinder Society faction; advance character across levels 1-20.",
  matchStructure: "Cooperative session-based play; GM runs scenarios; reporting tracks worldwide progression.",
  basicRules: [
    { title: "d20 + skill/attack roll resolution", body: "Roll d20 + modifiers to beat DC or opposing roll; standard Pathfinder-descendant mechanic." },
    { title: "Class + race customization", body: "8 classes (Envoy, Mechanic, Mystic, Operative, Soldier, Solarian, Technomancer, Witchwarper) + 14+ races." },
    { title: "Starship combat unique mechanic", body: "Starship-scale combat with role-based crew positions (Captain, Pilot, Gunner, Engineer, Science Officer)." },
    { title: "Faction reputation tracking", body: "Character earns Reputation with SFS factions (Wayfinders, Second Seekers, Acquisitives, Exo-Guardians); grants special options." },
    { title: "Standardized scenarios (~4-hour published)", body: "Society-legal scenarios published by Paizo; standardized rules for character legality + rewards." },
  ],
  scoring: { summary: "Story success + character progression; scenarios grant XP + wealth + faction reputation; no PvP points typically.", winCondition: "Cooperative — complete scenario objectives + character survival + advancement to higher levels." },
  positions: [{ name: "Player-character (Starfinder)", role: "One of 8 classes; player creates + progresses.", count: 4 }, { name: "Game Master (GM)", role: "Storyteller + rules referee + all NPCs.", count: 1 }],
  officiating: { officials: ["Starfinder Society Venture-Officer network (Regional/Venture-Captain/Venture-Lieutenant)"], summary: "Volunteer regional coordinators oversee organized play integrity." },
  governingBodies: [{ name: "Paizo Inc.", founded: 2002, headquarters: "Renton, Washington, USA" }, { name: "Starfinder Society Venture-Officer program (volunteer)", founded: 2017, headquarters: "worldwide" }],
  majorCompetitions: [{ name: "PaizoCon (annual convention)", frequency: "annual (Memorial Day weekend)", founded: 2008, region: "Seattle, Washington, USA" }, { name: "Gen Con Starfinder Society tracks", frequency: "annual (August)", founded: 2017, region: "Indianapolis, USA" }, { name: "Regional cons + FLGS (worldwide organized play)", frequency: "ongoing", founded: 2017, region: "worldwide" }],
  countriesPlayed: ["USA", "CAN", "GBR", "GER", "AUS", "BRA", "worldwide via FLGS + conventions"],
  famousAthletes: ["Paizo design team (James Jacobs, Owen K.C. Stephens — original Starfinder architects)", "SFS Venture-Officers (rotating volunteer leadership)"],
  records: [
    { title: "Starfinder 1E published August 2017", holder: "Paizo Inc.", value: "Starfinder Roleplaying Game published August 2017 by Paizo — as sci-fi companion to Pathfinder in shared setting", year: 2017 },
    { title: "Starfinder Society launched simultaneously 2017", holder: "Paizo Inc.", value: "Starfinder Society organized play program launched simultaneously with core rules 2017 — inherited structure from successful Pathfinder Society", year: 2017 },
    { title: "Starfinder 2E playtest 2024", holder: "Paizo Inc.", value: "Starfinder 2E public playtest launched August 2024 (Free RPG Day); modernized system compatibility with Pathfinder 2E", year: 2024 },
  ],
  variants: ["starfinder-1e-2017", "starfinder-2e-2024-playtest-2025-release", "starfinder-society-organized-play-modes"],
  relatedSports: ["dungeons-and-dragons-adventurers-league", "pathfinder-society", "call-of-cthulhu-rpg", "shadowrun"],
  skills: ["character optimization within SFS legal options", "roleplay + character voice", "starship combat crew coordination", "GM narrative direction", "table etiquette + organized-play courtesy"],
  wikipediaTitle: "Starfinder Roleplaying Game",
  sources: [{ label: "Wikipedia — Starfinder Roleplaying Game", url: "https://en.wikipedia.org/wiki/Starfinder_Roleplaying_Game", publisher: "Wikipedia" }, { label: "Paizo Starfinder Society", url: "https://paizo.com/starfindersociety", publisher: "Paizo Inc." }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default starfinderSociety;

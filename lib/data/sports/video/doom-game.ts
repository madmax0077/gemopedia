import type { Sport } from "@/lib/types";

export const doomGame: Sport = {
  id: "doom-game",
  slug: "doom-game",
  name: "Doom",
  officialName: "Doom (series)",
  aliases: ["DOOM", "Doom Eternal", "Doom 2016", "The Dark Ages"],
  shortDescription:
    "id Software's genre-defining first-person shooter — rip and tear demons through a nonstop hellscape of speed, secrets, and thunderous metal.",
  longDescription:
    "Doom (1993) invented the modern first-person shooter template and popularised network multiplayer, modding, and the shareware model. id Software's engine (John Carmack's Doom Engine) rewrote what home PCs could render in real time. The 2016 reboot and 2020's Doom Eternal reinvented fast-paced FPS combat with the 'push-forward' loop of chainsaw for ammo, glory kills for health, and flame belch for armor. The 2025 Doom: The Dark Ages installs a medieval-futuristic aesthetic. The competitive Doom scene lives on via speedrunning (DSDA, DoomWorld) and Quakelike duel play.",

  category: "video-games",
  subCategory: "single-player + multiplayer first-person shooter",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Richardson, Texas (id Software)",
  estimatedOrigin: "Doom (1993, MS-DOS); Doom II (1994); Doom (2016, reboot); Doom Eternal (2020); Doom: The Dark Ages (2025)",

  players: { min: 1, max: 8, note: "Single-player campaign standard; 2-8 player multiplayer deathmatch + Battlemode." },
  field: {
    surfaceName: "Hell/Mars/Earth arenas",
    dimensions: "Level-based maps, arena size varies",
    description: "Corridors and arenas populated with demons, secrets, and vertical platforming (Doom Eternal onwards)." },
  equipment: [
    { name: "Gaming PC / console", description: "Modern platforms (PC via Steam, PS5, Xbox Series X|S, Switch)." },
    { name: "Mouse + keyboard or controller", description: "M+KB preferred for classic Doom; controller comfortable for modern Doom." },
  ],
  duration: {
    approximateMinutes: 900,
    structure: "Doom Eternal main campaign: ~15 hours. Speedruns: sub-1-hour (Any%). Multiplayer matches: 8-12 min." },

  objective:
    "Slay all demons across each level, find the exit, collect secrets, complete Master Levels and the DLC campaigns.",
  matchStructure:
    "Levels grouped into Chapters. Each level: navigate arena → clear waves of demons → find keycards/exit. Encounter-driven pacing between exploration and 'combat arenas'.",

  basicRules: [
    { title: "Rip and tear", body: "Kill every demon in sight; low health / low ammo forces glory kills / chainsaw." },
    { title: "Glory kill", body: "Stagger a demon (blue glow) then melee to trigger a canned animation that grants health." },
    { title: "Chainsaw fuel", body: "Chainsaws use fuel per demon size; 1-fuel demons drop full ammo replenishment." },
    { title: "Weapon swap", body: "Fast-swap to optimize DPS — swap mid-magazine to reload passively (Doom Eternal)." },
    { title: "Movement", body: "Dash + double-jump + monkey bars + wall climbs — Doom Eternal rewards constant motion." },
  ],
  advancedRules: [
    { title: "Rune / Suit upgrades", body: "Argent Cells for health/armor/ammo capacity; Praetor Suit tokens for utility." },
    { title: "Slayer Gate", body: "Optional ultra-hard arenas with unique rewards (Empyrean Keys, Extra Life)." },
    { title: "Battlemode", body: "2 demons + 1 Slayer PvP with distinct role-based mechanics." },
  ],
  scoring: {
    summary: "Speedrun leaderboards rank by real-time completion; challenge runs by Nightmare / Ultra-Nightmare completion.",
    winCondition: "Complete campaign; speedruns aim for Any% / 100% / Ultra-Nightmare.",
    breakdown: [
      { action: "Level complete", points: "N/A (time-based)" },
      { action: "Sub-hour Any%", points: "World record ranking" },
    ],
  },

  officiating: {
    officials: ["speedrun.com moderators", "DSDA verifiers"],
    summary: "speedrun.com + Doom Speed Demos Archive (DSDA) verify all classic + modern Doom runs.",
  },

  governingBodies: [
    { name: "id Software (developer)", founded: 1991, headquarters: "Dallas, Texas, USA", website: "https://id.software" },
    { name: "Bethesda Softworks / Microsoft (publisher)", founded: 1986, headquarters: "Rockville, Maryland, USA", website: "https://bethesda.net" },
  ],
  majorCompetitions: [
    { name: "QuakeCon Doom tournament", frequency: "annual", founded: 1996, region: "Dallas, USA" },
    { name: "Doom speedrun leaderboards (speedrun.com)", frequency: "year-round", founded: 2013, region: "online" },
    { name: "DSDA classic-Doom compendium", frequency: "year-round", founded: 2000, region: "online" },
  ],
  countriesPlayed: ["US", "GB", "DE", "PL", "RU", "SE", "FI", "BR", "JP"],
  famousAthletes: [
    "Zero Master (FI, classic Doom speedrun legend)",
    "Byte_Me (US, Doom Eternal speedrunner)",
    "Under_the_Mayo (US, Doom Eternal analyst)",
    "Kn0tt (US, competitive multiplayer)",
    "Karin Andersson (SE, Doom Eternal WR runner)",
  ],
  records: [
    { title: "First Ultra-Nightmare no-death run", holder: "Byte_Me", value: "Doom Eternal + Master Levels UN", year: 2021 },
    { title: "Fastest Doom (1993) UV-Speed E1M1", holder: "Various", value: "0:07 (7 seconds)", year: 2019 },
    { title: "Total Doom 2016 + Eternal copies sold", holder: "id Software", value: "10+ million combined", year: 2023 },
  ],

  variants: ["classic-doom", "doom-eternal", "doom-2016", "doom-the-dark-ages", "quake"],
  relatedSports: ["quake", "unreal-tournament", "half-life", "wolfenstein"],

  skills: [
    "mouse aim + tracking accuracy",
    "resource-loop mastery (health/ammo/armor triangles)",
    "movement + arena awareness",
    "weapon-swap muscle memory",
    "boss pattern recognition",
  ],
  strategies: [
    { title: "Weapon swap always", body: "Alternate ballista + super shotgun for continuous damage without reload downtime." },
    { title: "Kill the Marauder first", body: "In Eternal, prioritize Marauders — their green-eye counter-window is 0.4s of super shotgun / ballista." },
    { title: "Chainsaw when ammo <25%", body: "Never let the chainsaw pip stay full — always convert to ammo before rooms." },
    { title: "Ice bomb crowds", body: "Ice bomb freezes 8+ demons; punch them mid-freeze for guaranteed glory-kill health." },
  ],

  terminology: [
    { term: "Glory kill", meaning: "Melee finisher on staggered demon that grants free health." },
    { term: "Marauder", meaning: "Doom Eternal's hardest single-demon fight — parry-based combat." },
    { term: "IDDQD", meaning: "Classic Doom god-mode cheat code, culturally iconic." },
    { term: "Slayer Gate", meaning: "Optional ultra-hard arena with reward key." },
    { term: "Rip and tear", meaning: "The Doom Slayer's directive — the game's mantra." },
    { term: "Ultra-Nightmare", meaning: "One-life permadeath difficulty; loses all progress on death." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Start with Doom 2016", body: "More forgiving pacing than Eternal; teaches loop mechanics." },
        { title: "Play on Hurt Me Plenty", body: "Standard difficulty; scale up to Nightmare after finishing once." },
        { title: "Follow the tutorials", body: "The in-game demon codex explains every enemy weakness." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Master Doom Eternal on Nightmare", body: "Learn Marauder + Archvile patterns; the game's true skill ceiling." },
        { title: "Attempt Ultra-Nightmare", body: "One-life permadeath run for the ultimate challenge." },
        { title: "Enter DSDA classic-Doom category", body: "Speedrun scene has 30-year history; category variety enormous." },
      ],
    },
  ],

  faq: [
    { question: "Which Doom should I start with?", answer: "Doom 2016 (accessible, standard shooter) then Doom Eternal (mechanically deeper). Classic Doom via 'Doom + Doom II' 2024 rerelease." },
    { question: "Do I need to play classic Doom to enjoy the reboots?", answer: "No — 2016 and Eternal have self-contained stories." },
    { question: "Is Doom on Switch?", answer: "Yes — classic Doom, Doom 3, 2016, Eternal all playable on Switch." },
    { question: "Can I mod Doom?", answer: "Classic Doom has 30 years of mods (Brutal Doom, Sigil II, Ashes 2063); Eternal has limited mod support." },
  ],

  sources: [
    { label: "Wikipedia — Doom (franchise)", url: "https://en.wikipedia.org/wiki/Doom_(franchise)", publisher: "Wikipedia" },
    { label: "DSDA Doom Speed Demos Archive", url: "https://dsdarchive.com", publisher: "DSDA" },
    { label: "id Software official site", url: "https://slayersclub.bethesda.net", publisher: "Bethesda" },
  ],
  wikipediaTitle: "Doom (franchise)",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

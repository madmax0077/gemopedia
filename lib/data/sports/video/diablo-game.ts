import type { Sport } from "@/lib/types";

export const diabloGame: Sport = {
  id: "diablo-game",
  slug: "diablo-game",
  name: "Diablo",
  officialName: "Diablo (series)",
  aliases: ["Diablo IV", "D4", "D2R"],
  shortDescription:
    "Blizzard's iconic isometric hack-and-slash action-RPG series — descend into hell, click enemies, collect loot, and level up your character across ever-tougher difficulty tiers.",
  longDescription:
    "Created by Blizzard North (David Brevik) and released 1996, Diablo defined the action-RPG genre with click-to-move combat, procedurally-generated dungeons, and endless loot chase. The series encompasses Diablo (1996), II (2000), III (2012), Immortal (mobile, 2022), and IV (2023). Diablo IV shipped 12 million copies in the first month, and its Seasons + Ladder system drives competitive Pit runs and speed-clearing challenges. The 'loot chase' formula spawned an entire ARPG genre (Path of Exile, Torchlight, Grim Dawn, Last Epoch).",

  category: "video-games",
  subCategory: "isometric action role-playing game (ARPG)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Irvine, California (Blizzard Entertainment / Blizzard North)",
  estimatedOrigin: "First Diablo released December 31, 1996; Diablo IV released June 6, 2023",

  players: { min: 1, max: 4, note: "Solo standard; 4-player co-op (2-8 in D4 shared world); PvP zones in D4." },
  field: {
    surfaceName: "Sanctuary (game world)",
    dimensions: "Vast open world (Sanctuary) + instanced dungeons",
    description: "5 major zones in D4 (Fractured Peaks, Scosglen, Dry Steppes, Hawezar, Kehjistan) plus hundreds of dungeons and Nightmare tier dungeons." },
  equipment: [
    { name: "Gaming PC / console", description: "PC (Battle.net), PS5/PS4, Xbox Series X|S/One." },
    { name: "Mouse + keyboard or controller", description: "Both fully supported; controller preferred on couch." },
    { name: "Battle.net account", description: "Required for online-only Diablo IV." },
  ],
  duration: {
    approximateMinutes: 3600,
    structure: "Campaign ~30-40 hours. Season endgame + Paragon grind: 100+ hours. Speedrun categories: 3-12 hours." },

  objective:
    "Defeat Lilith and her allies, level to 100, complete Nightmare/Pit dungeons at max difficulty, and optimize your character for the Season leaderboards.",
  matchStructure:
    "Character starts at level 1; progress through story (Acts I-VI), then endgame: Nightmare Dungeons, Helltides, Pit of the Artificers, Uber bosses. Seasons reset all characters every ~3 months on the Seasonal realm.",

  basicRules: [
    { title: "Class", body: "Choose Barbarian, Sorcerer, Druid, Rogue, Necromancer, or Spiritborn — each has 6 skill trees." },
    { title: "Skills", body: "Unlock skills via level-up points; Basic + Core + Defensive + Ultimate rotations." },
    { title: "Loot", body: "Enemies drop Common → Magic → Rare → Legendary → Unique → Mythic items with random stats." },
    { title: "Difficulty", body: "World Tier 1-4 in campaign; Torment I-IV in endgame with escalating monster power." },
    { title: "Paragon board", body: "Post-50 grid of nodes and glyphs — hundreds of hours of optimization." },
  ],
  advancedRules: [
    { title: "Nightmare Dungeons", body: "Timed instanced dungeons with escalating affixes and monster level." },
    { title: "Pit of the Artificers", body: "Endless-tier speed clears — leaderboards for fastest Tier 100+ clears." },
    { title: "Helltide", body: "Zone-wide event with Cinder currency + Tortured Gift chests." },
  ],
  scoring: {
    summary: "Leaderboards rank Pit tier cleared + clear time. Seasonal rank determined by speed and depth.",
    winCondition: "Speedrun goals: sub-3-hour campaign, world-first Pit 150 clear, first level 100 of a Season.",
    breakdown: [
      { action: "Pit tier cleared", points: "Higher tier = higher rank" },
      { action: "Sub-time bonus", points: "Faster clear breaks tier ties" },
    ],
  },

  officiating: {
    officials: ["Blizzard tournament staff"],
    summary: "Blizzard runs World First races via Battle.net; speedrun.com moderates category rules for Any%/All Bosses/etc.",
  },

  governingBodies: [
    { name: "Blizzard Entertainment", founded: 1991, headquarters: "Irvine, California, USA", website: "https://blizzard.com" },
  ],
  majorCompetitions: [
    { name: "World First Race (Season)", frequency: "quarterly", founded: 2023, region: "streamed online" },
    { name: "Pit of the Artificers Leaderboards", frequency: "per season", founded: 2024, region: "global online" },
    { name: "Diablo II: Resurrected Ladder Race", frequency: "quarterly", founded: 2021, region: "online" },
  ],
  countriesPlayed: ["US", "DE", "GB", "KR", "CN", "FR", "PL", "SE", "BR", "RU"],
  famousAthletes: [
    "Wudijo (US, Diablo speedrun leader)",
    "Rob2628 (DE, streamer + build maker)",
    "Kripparrian (CA, ARPG icon)",
    "Raxxanterax (US, Maxroll co-founder)",
    "Rhykker (US, Diablo YouTube educator)",
  ],
  records: [
    { title: "Fastest Diablo IV campaign", holder: "Wudijo", value: "under 2 hours (Any%)", year: 2024 },
    { title: "Highest Pit tier", holder: "Ben (KR)", value: "Pit 150 cleared", year: 2024 },
    { title: "Diablo IV opening-month sales", holder: "Blizzard", value: "$666 million (12 M copies)", year: 2023 },
  ],

  variants: ["diablo-immortal", "diablo-2-resurrected", "diablo-3", "path-of-exile", "last-epoch"],
  relatedSports: ["path-of-exile", "last-epoch", "grim-dawn", "torchlight-3"],

  skills: [
    "build theorycrafting + stat optimization",
    "loot filtering + item evaluation",
    "APM (actions per minute) for pit speed clears",
    "boss mechanic knowledge",
    "farming route efficiency",
  ],
  strategies: [
    { title: "Follow a Maxroll build", body: "Maxroll and Icy-Veins publish tier-1 builds — copy-paste for endgame success." },
    { title: "Farm the right content", body: "Helltides + Nightmares > random overworld for XP and loot per hour." },
    { title: "Reset for Season", body: "Every 3 months brings a new Season with class balance + new mechanics; a fresh start is often more fun than eternal realm." },
    { title: "Uber uniques via Duriel", body: "Farm Duriel with 2 Egg + 2 Mucus-Slick per attempt for chance at Mythic Uniques." },
  ],

  terminology: [
    { term: "Paragon", meaning: "Post-level-50 progression system with hundreds of nodes and Glyphs." },
    { term: "Uber Unique / Mythic", meaning: "The rarest items (Doombringer, Harlequin Crest); ~1 in 15000 drops." },
    { term: "Nightmare Dungeon (NM)", meaning: "Timed endgame dungeon with escalating tier." },
    { term: "Pit", meaning: "Endless-tier dungeon leaderboards; primary speedrun content." },
    { term: "Aspect", meaning: "Legendary power that can be imprinted onto Rare items via Codex of Power." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play the campaign", body: "30-40 hour intro that teaches class + world; pick Sorcerer/Necromancer if new to ARPGs." },
        { title: "Pick a Maxroll leveling build", body: "Follow a step-by-step leveling guide from Maxroll/Icy-Veins." },
        { title: "Understand item affixes", body: "Rares = 3-4 affixes; Legendaries add 1 Aspect; Uniques have fixed powers." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Farm Nightmares to 100", body: "NM Dungeons + Helltides are the fastest XP loop past 70." },
        { title: "Run Pit for leaderboard", body: "Time your Pit clears; optimize each tier by 20+ seconds via better gear + rotation." },
        { title: "Enter World First race", body: "Season start speedrun to level 100 is the closest thing to competitive Diablo." },
      ],
    },
  ],

  faq: [
    { question: "Which Diablo game should I start with?", answer: "Diablo IV — current, active seasons, controller-friendly. Diablo II: Resurrected for classic loot-hunt feel." },
    { question: "Is Diablo IV free?", answer: "No — one-time purchase (~$70). Diablo Immortal is free on mobile/PC but pay-to-win-adjacent." },
    { question: "Do I need to play the older games?", answer: "No — Diablo IV's story stands alone. Prior games add context but aren't required." },
    { question: "Is Diablo pay-to-win?", answer: "IV: cosmetic only (Battle Pass rewards). Immortal has controversial gear-tied monetization." },
  ],

  sources: [
    { label: "Wikipedia — Diablo IV", url: "https://en.wikipedia.org/wiki/Diablo_IV", publisher: "Wikipedia" },
    { label: "Maxroll.gg Diablo hub", url: "https://maxroll.gg/d4", publisher: "Maxroll" },
    { label: "Blizzard official site", url: "https://diablo.blizzard.com", publisher: "Blizzard" },
  ],
  wikipediaTitle: "Diablo (series)",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

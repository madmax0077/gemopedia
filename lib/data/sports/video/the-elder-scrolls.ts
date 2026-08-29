import type { Sport } from "@/lib/types";

export const theElderScrolls: Sport = {
  id: "the-elder-scrolls",
  slug: "the-elder-scrolls",
  name: "The Elder Scrolls",
  officialName: "The Elder Scrolls (series)",
  aliases: ["TES", "Skyrim", "Oblivion", "Morrowind", "ESO"],
  shortDescription:
    "Bethesda's flagship open-world fantasy RPG series — explore vast provinces of Tamriel as any race/class, master 18 skills, and shape the world through freeform quests, factions, and mods.",
  longDescription:
    "The Elder Scrolls: Arena launched in 1994; the series' 5 mainline entries (Arena, Daggerfall, Morrowind, Oblivion, Skyrim) plus the persistent-online spin-off (ESO, 2014) sold 100+ million combined. Skyrim (2011) alone shipped 60 M+ copies and is available on 20+ platforms including refrigerators. The Elder Scrolls VI was announced in 2018 and remains in development. The series is legendary for its modding community — Nexus Mods hosts 60,000+ Skyrim mods that transform every aspect of the game.",

  category: "video-games",
  subCategory: "single-player open-world action RPG (+ MMO spin-off)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Rockville, Maryland (Bethesda Game Studios)",
  estimatedOrigin: "Arena (1994); Daggerfall (1996); Morrowind (2002); Oblivion (2006); Skyrim (2011); ESO (2014); TES VI in development",

  players: { min: 1, max: 2000, note: "Single-player mainline; ESO is a MMORPG with 2000-player megaservers." },
  field: {
    surfaceName: "Tamriel (fantasy continent)",
    dimensions: "Skyrim ~37 km²; Daggerfall ~161,000 km² (largest RPG map ever)",
    description: "Open-world with cities, dungeons, wilderness, and dynamic weather." },
  equipment: [
    { name: "Gaming PC / console", description: "PC (Steam, Bethesda), PS5/PS4, Xbox Series X|S/One, Switch (Skyrim), VR headsets (Skyrim VR)." },
    { name: "Mouse + keyboard or controller", description: "Both supported; M+KB advantage for menu-heavy alchemy/enchanting." },
  ],
  duration: {
    approximateMinutes: 5400,
    structure: "Skyrim main quest: 20 hours. All content: 300+ hours. Modded playthroughs: 1000+ hours." },

  objective:
    "Complete the main questline (defeat Alduin in Skyrim, prevent Oblivion Crisis in Oblivion, etc.) while pursuing infinite side content: guilds, factions, exploration, crafting.",
  matchStructure:
    "No enforced structure — player chooses main quest, faction (Dark Brotherhood, Thieves Guild, Companions, Mages Guild), or pure exploration.",

  basicRules: [
    { title: "Character creation", body: "Choose 10 playable races (Nord, Khajiit, Argonian, etc.); each has racial bonuses + starting spells." },
    { title: "Skills", body: "18 skills (One-Handed, Destruction, Sneak, Smithing, etc.) level with use; unlock perks per level." },
    { title: "Combat", body: "Real-time melee, ranged (bows), spells (magicka), and shouts (Dragonborn power). Blocks + dodges optional." },
    { title: "Quests", body: "Main + Faction + Miscellaneous + Radiant (procedural). Journal auto-tracks active quests." },
    { title: "Inventory + weight", body: "Carry weight limit forces prioritization; storage in owned houses or containers." },
  ],
  advancedRules: [
    { title: "Enchanting + Alchemy", body: "Combine ingredients + soul gems for custom item enchantments — the meta path to god-tier gear." },
    { title: "Sneak archery", body: "Skyrim's most powerful build — sneak-crit bow shots deal 30x damage with perks." },
    { title: "Shouts", body: "Dragonborn power — unlock 20+ shouts (Fus Ro Dah, Whirlwind Sprint) with dragon souls." },
    { title: "Modding", body: "Nexus Mods + Steam Workshop for endless content; SKSE (Skyrim Script Extender) required for advanced mods." },
  ],
  scoring: {
    summary: "No score — speedrun categories (Any%, All Main Quests, All Shouts) rank by time.",
    winCondition: "Complete Main Quest; speedrun categories vary.",
    breakdown: [
      { action: "Skyrim Any%", points: "sub-30-min WR" },
      { action: "All Main Quests", points: "1h 45m WR" },
    ],
  },

  officiating: {
    officials: ["speedrun.com moderators"],
    summary: "speedrun.com verifies all TES speedrun submissions; ZeniMax handles ESO tournament moderation.",
  },

  governingBodies: [
    { name: "Bethesda Game Studios (developer)", founded: 1986, headquarters: "Rockville, Maryland, USA", website: "https://bethesda.net" },
    { name: "ZeniMax Online (ESO)", founded: 2007, headquarters: "Hunt Valley, Maryland, USA", website: "https://elderscrollsonline.com" },
  ],
  majorCompetitions: [
    { name: "SGDQ Skyrim speedrun", frequency: "annual", founded: 2013, region: "streamed" },
    { name: "ESO Group Finder / Trials leaderboards", frequency: "week-round", founded: 2014, region: "in-game" },
  ],
  countriesPlayed: ["US", "GB", "DE", "RU", "FR", "PL", "SE", "BR", "JP", "CN"],
  famousAthletes: [
    "Bradozz (US, Skyrim Any% WR)",
    "Micrologist (US, TES V speedrunner)",
    "Nooberss (Skyrim glitched runs)",
    "Aloshi (ESO trials leader)",
  ],
  records: [
    { title: "Skyrim Any% WR", holder: "Bradozz", value: "27:35 (glitched)", year: 2024 },
    { title: "Skyrim total sales", holder: "Bethesda", value: "60+ million copies (across all versions)", year: 2024 },
    { title: "Daggerfall map size", holder: "Bethesda", value: "161,600 km² (largest RPG world ever)", year: 1996 },
  ],

  variants: ["skyrim", "oblivion", "morrowind", "elder-scrolls-online", "the-elder-scrolls-vi"],
  relatedSports: ["fallout-4", "starfield", "witcher-3", "kingdom-come-deliverance"],

  skills: [
    "build theorycrafting (perks + gear)",
    "combat rotation + spell timing",
    "quest routing (speedrun)",
    "modding + Papyrus scripting",
    "roleplay + character-driven decisions",
  ],
  strategies: [
    { title: "Alchemy → Enchanting loop", body: "Skyrim's infamous exploit: fortify enchanting potions → +enchanting gear → stronger potions → repeat for god-tier scaling." },
    { title: "Sneak Archery", body: "Level Sneak + Archery + Alchemy for 30x sneak-crit bow shots; melts every boss." },
    { title: "Follower + mount", body: "Bring Serana (Skyrim's best follower) + a horse; effectively doubles combat power + carry weight." },
    { title: "Whiterun quicksave", body: "Save at every merchant + dragon fight — Papyrus engine crashes randomly." },
  ],

  terminology: [
    { term: "Fus Ro Dah", meaning: "Unrelenting Force — Skyrim's iconic starter Shout." },
    { term: "Dragonborn", meaning: "The player character in Skyrim; can absorb dragon souls." },
    { term: "Sweet roll", meaning: "In-joke pastry appearing in every TES game." },
    { term: "N'wah", meaning: "Dunmer slur for outlanders (Morrowind)." },
    { term: "SKSE", meaning: "Skyrim Script Extender — required for most advanced mods." },
    { term: "Radiant quest", meaning: "Bethesda's procedural quest system introduced in Skyrim." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play Skyrim first", body: "Most accessible entry; 20-hour main quest teaches all systems." },
        { title: "Pick a role-playing race", body: "Nord (survivability), Breton (magic resistance), or Khajiit (stealth) — each shapes early game." },
        { title: "Follow the main quest to High Hrothgar", body: "Unlocks Shouts + the game's core power fantasy." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Install a modlist (Wabbajack)", body: "Curated modlists (Nolvus, Wildlander) transform Skyrim into a completely new game." },
        { title: "Try Morrowind or Daggerfall", body: "Older entries have deeper builds + lore; free Daggerfall Unity is community remake." },
        { title: "Speedrun Any%", body: "Skyrim WR under 30 minutes uses save-scumming + Whirlwind Sprint glitches." },
      ],
    },
  ],

  faq: [
    { question: "Which TES game should I start with?", answer: "Skyrim (2011, Anniversary Edition 2021) — most accessible + best combat. Morrowind for lore + depth." },
    { question: "Is ESO worth playing?", answer: "Yes — the MMO has extensive solo content + 8-year live service; different but complementary to mainline TES." },
    { question: "When is TES VI coming out?", answer: "Announced 2018, still in development. Bethesda's next after Starfield; likely 2027-2028." },
    { question: "Do I need mods to enjoy Skyrim?", answer: "No — vanilla Skyrim is complete. Mods add optional infinite replay value." },
  ],

  sources: [
    { label: "Wikipedia — The Elder Scrolls", url: "https://en.wikipedia.org/wiki/The_Elder_Scrolls", publisher: "Wikipedia" },
    { label: "Bethesda official site", url: "https://elderscrolls.bethesda.net", publisher: "Bethesda" },
    { label: "UESP Elder Scrolls wiki", url: "https://en.uesp.net", publisher: "UESP" },
  ],
  wikipediaTitle: "The Elder Scrolls",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const finalFantasyXIV: Sport = {
  id: "final-fantasy-xiv",
  slug: "final-fantasy-xiv",
  name: "Final Fantasy XIV (Ultimate Raid Racing)",
  officialName: "Final Fantasy XIV Online (Square Enix) — Ultimate Raid World First",
  aliases: ["FF14", "FFXIV", "FF14 Ultimate Raid Race", "World First Race"],
  shortDescription:
    "Square Enix's flagship MMORPG with a uniquely competitive scene — the Ultimate Raid World First Race, where 8-player static groups compete to clear brand-new endgame raids before the world in a live 24-hour Twitch spectacle drawing 100K+ concurrent viewers.",
  longDescription:
    "Final Fantasy XIV (Square Enix, relaunched as 'A Realm Reborn' in 2013 after the 2010 original's failure) is a subscription-based MMORPG with 30M+ registered accounts. Its unique competitive scene is the Ultimate Raid World First Race — a race between top 8-player static raid groups to be the FIRST in the world to clear each new 'Ultimate' tier raid (released 1-2 per expansion cycle, ~every 2 years). Ultimates (The Unending Coil of Bahamut, The Weapon's Refrain, The Epic of Alexander, Dragonsong's Reprise, The Omega Protocol, The Futures Rewritten) require 500+ practice hours of coordinated 8-player mechanical execution; teams livestream 12-24 hour attempts on Twitch during the release window. Notable competitors: UNNAMED_SAGA, Pandæmonium (Japan), TOP (Japan), Neverland (Japan), and various NA/EU statics. Prize pool is essentially bragging rights + Twitch subs + community fame. Beyond Ultimate racing, FFXIV also has FLL (FFXIV Live Letter) crystal conflict PVP tournaments (4v4 arena PVP) and Grand Company deep-dungeon competitions — a smaller but real competitive layer.",

  category: "esports",
  subCategory: "MMORPG raid racing + arena PvP",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Square Enix, Tokyo); Yoshi-P (Naoki Yoshida) directed relaunch since 2010",
  estimatedOrigin: "FFXIV 1.0 released 2010; A Realm Reborn (2.0) relaunch 2013; first Ultimate Raid 'Unending Coil of Bahamut' released January 2018; Ultimate Race scene emerged 2018+",

  players: { min: 8, max: 8, note: "Ultimate raids: 8-player static (2 Tanks + 2 Healers + 4 DPS). Crystal Conflict PvP: 4v4 or 5v5." },
  field: {
    surfaceName: "Raid instance (digital 3D arena)",
    dimensions: "Circular or square arena ~40m diameter for Ultimate raids; multi-phase geometry",
    description: "Ultimate raids: 8-player closed arenas with rotating mechanics — auto-attacks, telegraphed AoEs, positional debuffs, meteor drops, tank swaps. PvP: Crystal Conflict small arenas.",
  },
  equipment: [
    { name: "Gaming PC / PS5 / Mac", description: "Cross-platform support; PC standard for high-end raiding due to add-ons + macros." },
    { name: "Mouse + Keyboard / Controller", description: "Both viable; controller users use extended crossbars for hotbar access." },
    { name: "Headset with team voice comms", description: "Discord voice call throughout 12+ hour raid attempts; callouts decisive." },
    { name: "ACT + Cactbot (parser + timeline)", description: "Advanced Combat Tracker + Cactbot add-on for real-time DPS parsing + mechanic timelines. Semi-officially tolerated." },
    { name: "In-game job (class) + gear", description: "20+ playable jobs: Tanks (PLD, WAR, DRK, GNB), Healers (WHM, SCH, AST, SGE), DPS (13 melee/ranged/caster jobs)." },
  ],
  duration: { approximateMinutes: 720, structure: "Ultimate raid attempts: 15-minute enrage timers per pull; races extend 12-24 hours per day across 5-14 days of streaming." },
  objective: "Complete the newly-released Ultimate raid to full clear before any other 8-player group in the world — establishing 'World First' status.",
  matchStructure: "Ultimate Raid Race is single-run continuous — statics stream attempts until clear. First clear worldwide claims World First. Crystal Conflict tournaments: single-elimination brackets on 4v4 arenas.",

  basicRules: [
    { title: "8-player static composition", body: "2 Tanks + 2 Healers + 4 DPS (mix of melee/ranged/casters). Every job has unique kit and mitigation timing." },
    { title: "Enrage timer (~15 min)", body: "Each raid pull has a hard enrage timer — team must DPS boss to below threshold in time or wipe." },
    { title: "Mechanic execution", body: "Every ~30 seconds a new mechanic (telegraphed AoE, positional debuff, meteor, tank buster) must be resolved by specific players." },
    { title: "Full-clear requirement", body: "Ultimate raids do NOT save progression through phases — every pull starts from phase 1." },
  ],
  advancedRules: [
    { title: "World First eligibility", body: "First public clear video posted publicly (Twitch VOD or YouTube upload) claims World First. Community moderators verify (no exploits, no cheats)." },
    { title: "Tools allowed", body: "ACT + Cactbot + FFLogs are community-accepted analytical tools; automation of gameplay = disqualification." },
    { title: "Job diversity", body: "Static composition affects mechanic solves; some Ultimate racers pick specific jobs (Astrologian's cards, Bard's mobility) for buffs + niche utility." },
    { title: "Livestream requirement (community norm)", body: "Top statics livestream their attempts on Twitch for World First credibility." },
  ],
  scoring: {
    summary: "First 8-player group in the world to clear the Ultimate raid claims World First title.",
    winCondition: "First public verified full-clear worldwide.",
    breakdown: [
      { action: "World First clear", points: "World First title (bragging rights, no prize money)" },
      { action: "Server First clear", points: "Server First title" },
      { action: "Speed Kill records", points: "Fastest clear time tracked on FFLogs" },
    ],
  },
  penalties: [
    { title: "Cheating / automation", body: "Ban from Square Enix + community DQ from World First contention." },
    { title: "Skipping unclearable mechanics via exploits", body: "Community + Square Enix will invalidate the clear." },
    { title: "Toxicity in Twitch chat / voice", body: "Community + Twitch platform-level enforcement." },
  ],

  positions: [
    { name: "Main Tank (MT)", role: "Holds primary aggro; takes tank busters; manages mitigation.", count: 1 },
    { name: "Off Tank (OT)", role: "Absorbs adds + tank swap mechanics; often provides raid buffs.", count: 1 },
    { name: "Pure Healer (WHM/AST)", role: "Big-hit + regen healing; raid-wide cures.", count: 1 },
    { name: "Shield Healer (SCH/SGE)", role: "Preventive shielding + damage mitigation stacking.", count: 1 },
    { name: "Melee DPS ×2", role: "High-uptime damage in melee range (SAM, NIN, DRG, RPR, MNK).", count: 2 },
    { name: "Ranged DPS", role: "Mobility + raid buffs (BRD, MCH, DNC).", count: 1 },
    { name: "Caster DPS", role: "Highest burst damage windows (BLM, SMN, RDM, PCT).", count: 1 },
  ],
  officiating: {
    officials: ["Community moderators (informal — verify World First clears)", "Square Enix (bans cheaters)", "Twitch broadcast platform"],
    summary: "Ultimate Race is community-refereed — Square Enix does not officially crown a World First. FFXIV Speed WR + FFLogs staff verify legitimate clears.",
  },

  governingBodies: [
    { name: "Square Enix (game developer + publisher)", founded: 1975, headquarters: "Tokyo, Japan", website: "https://na.finalfantasyxiv.com" },
    { name: "FFLogs (community-run parser + verification)", founded: 2013, headquarters: "USA (Zorah / Kihra)" },
  ],
  majorCompetitions: [
    { name: "Ultimate Raid World First Race (community event)", frequency: "1-2 per expansion (every 1-2 years)", founded: 2018, region: "worldwide" },
    { name: "The Feast + Crystal Conflict Tournaments (official PvP)", frequency: "seasonal", founded: 2015, region: "worldwide (region-locked)" },
    { name: "Fan Festival Tournaments (World PVP)", frequency: "at Square Enix Fan Fests (~biennial)", founded: 2014, region: "worldwide" },
  ],
  countriesPlayed: ["JP", "US", "CA", "GB", "DE", "FR", "AU", "SE", "NO", "KR", "CN", "SG"],
  famousAthletes: [
    "UNNAMED_SAGA (statically dominant Japanese Ultimate raid group; multiple World Firsts)",
    "TOP (Japan — Ultimate racing static)",
    "Neverland (Japan — first Unending Coil World First 2018)",
    "Pandæmonium (Japan — Dragonsong's Reprise World First 2022)",
    "Xeno (streamer + raider; face of Western FFXIV racing)",
    "Rinon (Japan — legendary Black Mage raider)",
    "Ryulia (Japan — famed healer main)",
  ],
  records: [
    { title: "First Ultimate raid World First", holder: "Neverland (Japan) — Unending Coil of Bahamut", value: "First-ever Ultimate clear January 2018 after ~1 week of racing", year: 2018 },
    { title: "Fastest Ultimate World First", holder: "Various (per raid tier)", value: "Ranges from 3 days (Weapon's Refrain 2018) to 14 days (Dragonsong's Reprise 2022)", year: 2022 },
    { title: "Most Japan World First dominance", holder: "Japanese statics", value: "Japan has claimed nearly every Ultimate World First — dominance rooted in raiding culture + practice hours", year: 2024 },
    { title: "Largest MMORPG raiding community", holder: "FFXIV", value: "~30M registered accounts; ~1M active raiders across all tiers", year: 2024 },
  ],

  variants: ["ultimate-raid-8-player-world-first", "savage-raid-8-player-tier-clears", "extreme-trial-8-player-single-boss", "crystal-conflict-5v5-pvp", "the-feast-4v4-arena-pvp"],
  relatedSports: ["world-of-warcraft", "destiny-2", "monster-hunter", "phantasy-star-online-2"],

  skills: ["mechanic memorization (200+ per Ultimate)", "position + rotation timing precision (frame-perfect)", "8-player communication + callouts", "gear optimization (best-in-slot theorycraft)", "12+ hour raid endurance + mental focus", "adapting on-the-fly to previously unknown mechanics"],
  strategies: [
    { title: "First reads then optimizations", body: "First 48 hours of a race = pure discovery. Log all mechanics + timings, then teams theorycraft optimal strats before further pulls." },
    { title: "Uptime > mechanics safety", body: "Racing statics push aggressive uptime — accept some deaths for higher DPS check clear odds." },
    { title: "Job comp for buff windows", body: "Astrologian card + Bard Battle Voice + Dragoon Litany + Ninja Trick Attack — synchronized 2-min raid buff windows are decisive." },
    { title: "Sleep management across multi-day race", body: "Racers rotate sleep in shifts; some statics have 10-12 raider rotating cast to keep fresh brains at the wheel." },
  ],

  terminology: [
    { term: "Ultimate", meaning: "Top-tier raid category; ~1-2 released per expansion (every 2 years)." },
    { term: "Static", meaning: "Fixed 8-player raid team that trains for weeks/months." },
    { term: "Enrage", meaning: "Hard timer at end of raid — boss instantly kills team if not defeated in time." },
    { term: "DPS check", meaning: "Damage threshold required to survive a mechanic or beat enrage." },
    { term: "FFLogs", meaning: "Community-run damage parser + ranking site; source of speed records + role-ranking." },
    { term: "Wipe", meaning: "Team-wide death; forces restart of pull from phase 1." },
    { term: "Cactbot", meaning: "Community timeline + callout add-on used by nearly all raid groups." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play through Endwalker / Dawntrail MSQ (Main Story Quest)", body: "FFXIV requires ~200 hours of story before endgame raiding — unique among MMORPGs." },
      { title: "Clear Extreme trials (8-player)", body: "First step above story content; teaches mechanic discipline in 5-10 min encounters." },
      { title: "Progress to Savage raid tiers", body: "Savage is the standard 8-player endgame raid tier (4 raid encounters per expansion tier); necessary training for Ultimate." },
    ]},
    { level: "advanced", steps: [
      { title: "Join / form an Ultimate static", body: "Discord communities (Balance, Vote Kick, Enix Empire) match raiders to statics based on schedule + region." },
      { title: "Practice on Party Finder groups", body: "Cross-server party finder brings 8-player teams together on-demand for training." },
      { title: "Compete in an Ultimate World First Race", body: "Every 1-2 years, a new Ultimate releases — top 100 statics worldwide race for the World First within 1-14 days." },
    ]},
  ],

  faq: [
    { question: "Is FFXIV really an esport?", answer: "It is a competitive scene rather than a traditional sponsored esport. The Ultimate Raid World First Race is the community-organized, Twitch-livestreamed race to clear each new Ultimate raid first worldwide. There is no prize pool (except Twitch subs + fame) but the scene is highly organized, tracked by FFLogs, and draws 100K+ concurrent viewers during major race windows. Crystal Conflict PvP tournaments have official Square Enix support with actual prize money and season rankings." },
    { question: "How long does the Ultimate Race take?", answer: "Ultimate Race lengths have ranged from 3 days (The Weapon's Refrain 2018) to 14 days (Dragonsong's Reprise 2022). Top statics stream 12-16 hours per day across the race window, with rotating sleep shifts. The Unending Coil of Bahamut (first-ever Ultimate) took Japanese static Neverland ~1 week." },
    { question: "Why does Japan dominate the FFXIV Ultimate scene?", answer: "Japan has the largest FFXIV player base, longest MMORPG raiding tradition, and multiple established statics that have been together for 8+ years. Japanese statics also benefit from server proximity (lowest ping to game servers), community organization (specialized theorycraft blogs), and cultural willingness to grind 500+ hours per Ultimate. Western statics have won some tiers but Japan is the dominant region." },
  ],

  wikipediaTitle: "Final Fantasy XIV",
  sources: [
    { label: "Final Fantasy XIV Online", url: "https://na.finalfantasyxiv.com", publisher: "Square Enix" },
    { label: "FFLogs", url: "https://www.fflogs.com", publisher: "FFLogs / Kihra" },
    { label: "Wikipedia — Final Fantasy XIV", url: "https://en.wikipedia.org/wiki/Final_Fantasy_XIV", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

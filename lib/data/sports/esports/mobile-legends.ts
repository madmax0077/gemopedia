import type { Sport } from "@/lib/types";

export const mobileLegends: Sport = {
  id: "mobile-legends",
  slug: "mobile-legends",
  name: "Mobile Legends: Bang Bang",
  officialName: "Mobile Legends: Bang Bang (Moonton)",
  aliases: ["MLBB", "ML", "Mobile Legends", "MPL"],
  shortDescription:
    "Southeast Asia's #1 mobile MOBA — 5v5 lane-and-jungle format with 120+ heroes; MPL leagues in 8 countries + M-Series World Championship draw hundreds of millions of viewers annually.",
  longDescription:
    "Mobile Legends: Bang Bang (Moonton, launched 2016) is the dominant mobile MOBA in Southeast Asia and increasingly worldwide. Two teams of 5 heroes battle on a symmetrical 3-lane map (with a jungle between lanes) to destroy the enemy's base 'core'. Matches are compressed to 15-20 minutes (vs. 30-45 for League of Legends), making it perfectly suited to mobile play. Moonton runs Mobile Legends Professional League (MPL) in 8 countries — Indonesia, Philippines, Malaysia, Singapore, Myanmar, Cambodia, Vietnam, and MENA — with 8 franchised teams each. Champions from all leagues meet at the M-Series World Championship annually. Prize pools exceed $2M for M-World finals. In Indonesia and the Philippines, MLBB tournaments regularly outdraw traditional sports on national TV. Filipino team Blacklist International, Indonesian EVOS Legends, and RRQ Hoshi are legendary franchises. Confirmed medal event at SEA Games since 2019 and Asian Games 2022 (Hangzhou) — one of the few esports with recognition at Asian multi-sport games.",

  category: "esports",
  subCategory: "5v5 mobile MOBA",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "CN",
  regionOfOrigin: "China (Moonton, Shanghai); dominant in Southeast Asia — Indonesia + Philippines especially",
  estimatedOrigin: "Launched July 2016 (SEA); MPL Indonesia launched 2017; M-Series World Championship since 2019; SEA Games medal sport 2019+",

  players: { min: 5, max: 5, note: "5v5 competitive; also 3v3 and 1v1 modes." },
  field: {
    surfaceName: "Land of Dawn map (Summoners-Rift analog)",
    dimensions: "3-lane MOBA map with jungle + Lord + Turtle objectives; compressed for mobile screen",
    description: "Symmetrical 3-lane map (top/mid/bot) with jungle between lanes; Lord (baron equivalent), Turtle (dragon equivalent), Turrets, Base Core.",
  },
  equipment: [
    { name: "Mobile phone (Android/iOS)", description: "60Hz minimum; 120Hz preferred for pro play; specific gaming phones (ROG Phone, Redmagic) common in pro leagues." },
    { name: "Finger sleeves + optional controller", description: "Sweat control for touch precision; controllers not allowed in official ranked/MPL." },
    { name: "Gaming earbuds", description: "Positional audio + team voice comms." },
    { name: "In-game heroes + emblems", description: "120+ heroes across 6 roles (Tank, Fighter, Assassin, Mage, Marksman, Support); emblem talent trees customize builds." },
  ],
  duration: { approximateMinutes: 18, structure: "Average pro match: 15-20 min (vs. 30-45 for LoL). Match to core destruction (no time limit)." },
  objective: "Destroy the enemy team's Base Core through the middle Turret and Base Turrets, protected by NPC minions.",
  matchStructure: "Best-of-3, best-of-5, or best-of-7 series in pro leagues. Each game to Base Core destruction. Draft phase with hero bans + picks before each game.",

  basicRules: [
    { title: "5v5 MOBA fundamentals", body: "3 lanes (top, mid, bot) + jungle + river; two teams each with 3 outer turrets, 3 inner turrets, 2 base turrets, and 1 core." },
    { title: "Roles: EXP, Gold, Mid, Jungle, Roamer", body: "5 fixed roles — EXP lane top, Gold lane bot (marksman + support), Mid mage, Jungler, Roamer/Support." },
    { title: "Kill/Assist/Farm for gold + XP", body: "Kill minions/heroes/monsters for gold; buy items in Land of Dawn shop for stats." },
    { title: "Objectives: Turtle + Lord", body: "Turtle (dragon) gives gold + buffs; Lord (baron) pushes lanes as super-minion." },
  ],
  advancedRules: [
    { title: "Draft phase", body: "6-ban → 5-pick alternating format at pro level; bans shape meta counter-picks." },
    { title: "Emblem + spell customization", body: "Each player selects an emblem tree (Assassin, Marksman, etc.) + a battle spell (flicker, retribution, execute) pre-match." },
    { title: "Vision control via wards", body: "Not as deep as LoL but hero abilities + Roamer items provide vision." },
    { title: "Rotations + gank timing", body: "Jungler + Roamer rotate to gank vulnerable lanes; timing wins games." },
  ],
  scoring: {
    summary: "Best-of-series format; win by destroying opponent's Base Core.",
    winCondition: "First team to majority of games in a best-of-3/5/7 series wins the match.",
    breakdown: [
      { action: "Base Core destroyed", points: "1 game win" },
      { action: "Series game count wins", points: "Series win (best-of-3/5/7)" },
    ],
  },
  penalties: [
    { title: "Team-killing / griefing", body: "Match report + potential team suspension." },
    { title: "Third-party software", body: "Immediate ban (Moonton anti-cheat)." },
    { title: "In-game toxicity", body: "Chat mute + potential ranked suspension." },
  ],

  positions: [
    { name: "EXP Lane (Top)", role: "Solo tank/fighter; farms XP; teleport support to other lanes.", count: 1 },
    { name: "Gold Lane / Marksman", role: "Primary damage dealer late-game; farms gold in bot lane.", count: 1 },
    { name: "Mid Lane / Mage", role: "Central lane mage; provides burst + wave clear + roams.", count: 1 },
    { name: "Jungle / Assassin", role: "Farms jungle camps; ganks lanes; secures Turtle + Lord.", count: 1 },
    { name: "Roamer / Support / Tank", role: "Roams to support lanes; sets vision; frontlines fights.", count: 1 },
  ],
  officiating: {
    officials: ["Head referee", "Draft referee", "Anti-cheat observer", "Broadcast producer"],
    summary: "Moonton-provided referees at MPL + M-Series events.",
  },

  governingBodies: [
    { name: "Moonton (game developer + esports operator)", founded: 2014, headquarters: "Shanghai, China", website: "https://www.mobilelegends.com" },
    { name: "MPL leagues (region-specific)", founded: 2017, headquarters: "regional (Indonesia, Philippines, etc.)" },
  ],
  majorCompetitions: [
    { name: "M-Series World Championship (M1 → M6+)", frequency: "annual", founded: 2019, region: "worldwide (rotating hosts)" },
    { name: "MPL Regional Leagues (8 leagues)", frequency: "biannual splits", founded: 2017, region: "Indonesia, Philippines, Malaysia/Singapore, Myanmar, Cambodia, Vietnam, MENA" },
    { name: "SEA Games (MLBB)", frequency: "biennial", founded: 2019, region: "Southeast Asia" },
    { name: "MSC (Mid-Season Cup)", frequency: "annual", founded: 2017, region: "regional champions worldwide" },
  ],
  countriesPlayed: ["ID", "PH", "MY", "SG", "MM", "KH", "VN", "TH", "IN", "BR", "SA", "AE"],
  famousAthletes: [
    "Kairi Rayosdelsol (Philippines — jungle superstar, Bren Esports/Falcons AP Bren M3 world champion)",
    "Karltzy (Philippines — Blacklist International M2 champion)",
    "Xin (Indonesia — RRQ Hoshi mid legend)",
    "OhMyV33nus (Philippines — Blacklist International roamer captain; first LGBTQ+ M-Series champion)",
    "Wise (Indonesia — EVOS Legends M1 world champion)",
    "Sanji (Philippines — 2022 M4 World Champion ECHO)",
  ],
  records: [
    { title: "Most M-Series World Championships", holder: "AP Bren / ECHO / Blacklist (Philippines)", value: "Filipino teams have won M2 (Bren 2020), M3 (Blacklist 2021), M4 (ECHO 2022) — 3 consecutive world titles for the Philippines", year: 2022 },
    { title: "Peak concurrent viewers", holder: "M4 World Championship 2023", value: "~5M concurrent global viewers (majority Southeast Asia)", year: 2023 },
    { title: "SEA Games medal sport", holder: "MLBB", value: "Contested since 2019 SEA Games Philippines; multiple gold medals for host nation each edition", year: 2023 },
  ],

  variants: ["ranked-5v5-competitive", "classic-5v5-unranked", "brawl-5v5-single-lane", "aram-single-lane", "custom-tournament"],
  relatedSports: ["league-of-legends", "arena-of-valor", "honor-of-kings", "wild-rift", "dota-2"],

  skills: ["hero mastery across 6 roles (120+ heroes)", "map awareness + rotation timing", "objective-taking (Turtle/Lord)", "mobile touch precision + finger dexterity", "team-fight positioning", "draft phase counter-picking"],
  strategies: [
    { title: "Early Turtle contest", body: "First Turtle spawns at 2:00 — teams often 5-man rotate for it; winning first Turtle snowballs mid-game." },
    { title: "Level 4 gank cadence", body: "Jungler ganks EXP or Mid at level 4 to snowball priority lanes." },
    { title: "Meta hero identification", body: "Each patch has 3-5 dominant heroes; picking or banning them decisively shapes the game." },
    { title: "Late-game Lord force", body: "Lord spawns 8:00; taking Lord with buff pushes lanes and often ends games via super-minions." },
  ],

  terminology: [
    { term: "MPL", meaning: "Mobile Legends Professional League — regional franchised league (8 regions)." },
    { term: "Turtle / Lord", meaning: "Neutral objectives providing gold + buffs / lane push." },
    { term: "Roamer", meaning: "Support role that rotates lanes to gank + place vision." },
    { term: "GG", meaning: "Concede vote — game surrender." },
    { term: "M-Series", meaning: "Annual world championship (M1-M6+)." },
    { term: "Meta", meaning: "Currently dominant heroes, items, and strategies per patch." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play unranked for 50 games", body: "Learn map, roles, and 3-4 heroes per role before touching ranked." },
      { title: "Watch MPL VODs (Indonesia + Philippines)", body: "YouTube archives of MPL are the best free education for advanced play." },
      { title: "Join a Discord scrim community", body: "Amateur scrim discords in most SEA countries pipeline talent to lower-tier tournaments." },
    ]},
    { level: "advanced", steps: [
      { title: "Climb to Mythical Glory (top 0.1%)", body: "Scouts monitor Mythical Glory leaderboards in Indonesia + Philippines especially." },
      { title: "Amateur tournament circuits", body: "Various regional open tournaments feed into MPL Development League + main MPL." },
      { title: "MPL franchised roster", body: "8 franchised teams per MPL region; secure spot via development league or direct sign." },
      { title: "M-Series World Championship", body: "Annual world championship — Filipino + Indonesian teams dominant." },
    ]},
  ],

  faq: [
    { question: "How is Mobile Legends different from Arena of Valor or Wild Rift?", answer: "MLBB dominates Southeast Asia while Arena of Valor (also called Honor of Kings in China) dominates China + Vietnam + Thailand, and Wild Rift is Riot's mobile League of Legends port. All three are 5v5 mobile MOBAs but MLBB has the largest esports scene in SEA thanks to Moonton's MPL franchising and cultural embedding in Indonesia and the Philippines." },
    { question: "How big is MLBB esports?", answer: "MPL runs in 8 countries with 8 franchised teams each = 64 pro teams globally. The M-Series World Championship draws 5M+ concurrent viewers. MLBB is a medal sport at SEA Games (since 2019) and Asian Games (2022 Hangzhou), which is rare recognition for any esport." },
    { question: "Which country has the best MLBB teams?", answer: "The Philippines and Indonesia are the historical powerhouses. Filipino teams have won 3 consecutive M-Series World Championships (M2 Bren 2020, M3 Blacklist 2021, M4 ECHO 2022). Indonesia won M1 with EVOS Legends and remains a top region." },
  ],

  wikipediaTitle: "Mobile Legends: Bang Bang",
  sources: [
    { label: "Mobile Legends: Bang Bang", url: "https://www.mobilelegends.com", publisher: "Moonton" },
    { label: "Wikipedia — Mobile Legends: Bang Bang", url: "https://en.wikipedia.org/wiki/Mobile_Legends:_Bang_Bang", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const freeFire: Sport = {
  id: "free-fire",
  slug: "free-fire",
  name: "Free Fire",
  officialName: "Garena Free Fire (Garena)",
  aliases: ["FF", "Free Fire MAX", "Garena Free Fire"],
  shortDescription:
    "The lightweight mobile battle royale (50 players, 10-min matches) that dominates Latin America, MENA, and India replacements — hundreds of millions of players; Free Fire World Series annual finals draw 5M+ concurrent viewers.",
  longDescription:
    "Free Fire (Garena, launched September 2017) is a lightweight mobile battle royale designed specifically for low-end phones and short attention spans. Matches are 50-player (vs. 100 in PUBG), 10 minutes long (vs. 25+ in PUBG), and playable on 1GB-RAM devices. Each player selects a 'character' with a unique ability (Kelly's speed boost, Chrono's shield, Alok's healing aura, etc.) before dropping onto shrinking maps (Bermuda, Kalahari, Purgatory, Alpine, Nexterra). The compressed format made Free Fire dominant across Latin America (especially Brazil + Mexico), the Middle East + North Africa, Southeast Asia, and India (particularly after PUBG Mobile's 2020 India ban — where Free Fire filled the vacuum before its own India ban and 2023 relaunch as Free Fire India). The Free Fire World Series (annual since 2019) crowns the global champion, with 8-team continental leagues (LBFF Brazil, LFB Latin America, FFL MENA, FFWS Global) feeding into it. Peak concurrent viewership at Free Fire World Series routinely exceeds 5M — often outdrawing traditional esports in emerging markets.",

  category: "esports",
  subCategory: "mobile battle royale (lightweight)",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "SG",
  regionOfOrigin: "Singapore (Garena, published Southeast Asia + LATAM + MENA globally)",
  estimatedOrigin: "Launched September 2017 by Garena; peak popularity 2019-2023; Free Fire World Series since 2019",

  players: { min: 1, max: 50, note: "Battle royale: 50 players per match. Solo (1), Duo (2), Squad (4) modes." },
  field: {
    surfaceName: "Battle royale map (digital 3D environment)",
    dimensions: "Compact BR maps ~4×4 km — Bermuda, Kalahari, Purgatory, Alpine, Nexterra (2025)",
    description: "5 rotating BR maps + arena maps for 4v4 clash squad + rank modes.",
  },
  equipment: [
    { name: "Mobile phone (Android/iOS)", description: "Runs on 1GB-RAM devices; Free Fire MAX (2021) is high-graphics version for premium phones." },
    { name: "Finger sleeves + optional 4-finger claw grip", description: "Pro players use 4-finger claw grip for simultaneous move/aim/shoot/scope." },
    { name: "Bluetooth earbuds", description: "Positional audio + team voice comms." },
    { name: "In-game characters + weapons", description: "60+ characters with unique abilities; 30+ weapons; pets with combat buffs; skill combinations decisive." },
  ],
  duration: { approximateMinutes: 10, structure: "Standard BR: 10 minutes for 50 players → 1 winner. Clash Squad: 4v4 rounds ~3 min each." },
  objective: "Be the last player or squad alive on the map, or top the scoreboard on placement + kills in tournament format.",
  matchStructure: "BR tournament: multi-match series scored by placement + kills. Clash Squad: best-of-7 rounds 4v4. Free Fire World Series: 12 teams, 6-match final series.",

  basicRules: [
    { title: "Drop and scavenge", body: "50 players parachute from plane; scavenge weapons + armor + heals from buildings." },
    { title: "Shrinking safe zone", body: "Circle shrinks every 2-3 minutes; outside = damage; forces engagements." },
    { title: "Character abilities", body: "Unlike PUBG, each player picks a Character with a passive/active ability (Kelly speed, Alok heal aura, Chrono shield, etc.) — meta-defining." },
    { title: "Squad revive", body: "Downed teammates can be revived within a time window before permanent knockout." },
  ],
  advancedRules: [
    { title: "Character combos", body: "Pro squads combine 4 characters into synergistic loadouts (e.g., Alok heal + Chrono shield + K mode + DJ headshot buff)." },
    { title: "Pet abilities", body: "Combat pets (Falco glide speed, Rockie cooldown reduction, Beaston longer grenade throw) supplement character passives." },
    { title: "Rank + level restrictions", body: "Some tournament modes require Grandmaster rank + specific character levels." },
    { title: "Placement + kill points", body: "Tournaments score both placement (WWCD = 12 pts) and kills (1 pt each); highest combined = winner." },
  ],
  scoring: {
    summary: "Placement + kills combined; highest team total wins the tournament.",
    winCondition: "Tournament: highest combined placement + kill points across match series. BR match: last squad alive (WWCD).",
    breakdown: [
      { action: "WWCD (WinnerWinnerChickenDinner)", points: "12 pts" },
      { action: "2nd place", points: "9 pts" },
      { action: "3rd place", points: "8 pts, decreasing by 1 per rank" },
      { action: "Kill", points: "1 pt per kill" },
    ],
  },
  penalties: [
    { title: "Third-party software / macro / bot", body: "Immediate perma-ban (Garena anti-cheat)." },
    { title: "Team-killing", body: "Match penalty + potential suspension." },
    { title: "In-game abuse", body: "Chat mute + report system + tournament DQ possible." },
  ],

  positions: [
    { name: "IGL (In-Game Leader)", role: "Calls rotations + engagement decisions; usually most experienced.", count: 1 },
    { name: "Fragger", role: "Aggressive entry player; secures kills for point pool.", count: 1 },
    { name: "Support", role: "Provides Alok heal aura or utility; secures resources.", count: 1 },
    { name: "Sniper / Scout", role: "Long-range picks + intel gathering.", count: 1 },
  ],
  officiating: {
    officials: ["Head referee", "Anti-cheat observer", "Broadcast producer"],
    summary: "Garena-provided referees at LBFF, LFB, FFL, and FFWS events.",
  },

  governingBodies: [
    { name: "Garena (game developer + esports operator)", founded: 2009, headquarters: "Singapore", website: "https://ff.garena.com" },
    { name: "Sea Group (Garena parent)", founded: 2009, headquarters: "Singapore" },
  ],
  majorCompetitions: [
    { name: "Free Fire World Series (FFWS)", frequency: "biannual (spring + global finals)", founded: 2019, region: "worldwide (12 teams; rotating hosts)" },
    { name: "LBFF (Liga Brasileira de Free Fire)", frequency: "biannual splits", founded: 2019, region: "Brazil (biggest FF market)" },
    { name: "LFB (Liga Free Fire Latinoamérica)", frequency: "biannual splits", founded: 2019, region: "Latin America" },
    { name: "Free Fire League (Southeast Asia + MENA + India)", frequency: "biannual splits", founded: 2019, region: "regional" },
  ],
  countriesPlayed: ["BR", "MX", "TH", "ID", "IN", "SA", "AE", "EG", "PK", "VN", "PH", "MY"],
  famousAthletes: [
    "LOUD (Brazil — Free Fire team; multiple LBFF titles; global fanbase)",
    "Nobru (Bruno Goes, Brazil — legendary Free Fire streamer + player; 30M+ followers)",
    "AB Kwikk (India — top Indian Free Fire player)",
    "Total Gaming (India — mass content creator + competitive)",
    "Corinthians (Brazil — traditional football club with Free Fire esports team)",
    "OP Gaming (Vietnam — SEA champions)",
  ],
  records: [
    { title: "Highest concurrent viewers (any esport)", holder: "Free Fire World Series 2021 Singapore", value: "~5.4M concurrent viewers (excl. China) — outdrew League of Legends World Championship briefly", year: 2021 },
    { title: "Highest peak DAU (any mobile game)", holder: "Free Fire", value: "150M+ daily active users at 2020-2021 peak; still >100M today", year: 2021 },
    { title: "Most Brazilian LBFF titles", holder: "LOUD + Corinthians (Brazil)", value: "Multiple LBFF championships each; Brazil the dominant Free Fire nation", year: 2024 },
  ],

  variants: ["battle-royale-50p-standard", "clash-squad-4v4-arena", "ranked-br-competitive", "solo-vs-squad-hardcore", "custom-tournament-lan"],
  relatedSports: ["pubg", "pubg-mobile", "fortnite", "apex-legends", "call-of-duty-mobile"],

  skills: ["4-finger claw grip mobile precision", "character-ability combo memorization", "compact-map rotation reading", "close-quarter movement + dodge", "shot-drop compensation", "team voice callouts under compressed timeline"],
  strategies: [
    { title: "Hot-drop or safe-drop meta", body: "Hot-drop for early kills + gear (aggressive); safe-drop for late-game positioning (conservative). Pick based on tournament scoring." },
    { title: "Character sync", body: "Squad picks 4 characters that combo — Alok heal + Chrono shield + K mode HP + DJ headshot buff is a classic team comp." },
    { title: "Circle prediction", body: "Rotate early to end-circle probabilities; late rotations get caught in outside damage." },
    { title: "Loot economy", body: "First 60 seconds after drop define the match — armor + primary weapon + heals decide teamfights." },
  ],

  terminology: [
    { term: "WWCD", meaning: "'WinnerWinnerChickenDinner' — battle royale win." },
    { term: "Booyah!", meaning: "Free Fire's victory screen callout (equivalent to WWCD)." },
    { term: "Character passive/active", meaning: "Unique per-character ability that shapes team comps." },
    { term: "Clash Squad", meaning: "4v4 arena mode (best-of-7 rounds)." },
    { term: "M1014 / MP40 / AWM", meaning: "Iconic weapons — shotgun / SMG / sniper of the game." },
    { term: "Gulag / Rebirth", meaning: "Free Fire's revive-after-death mechanics in some modes." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play Clash Squad first", body: "4v4 arena is a low-stakes way to learn gunplay + character abilities before BR." },
      { title: "Learn 4 characters + their combos", body: "Meta characters (Alok, Chrono, Kelly, K, DJ) are prioritized; buy or unlock them via events." },
      { title: "Watch LBFF (Brazil) or FFWS VODs", body: "Brazilian pro play is peak Free Fire; YouTube archives are free education." },
    ]},
    { level: "advanced", steps: [
      { title: "Climb to Grandmaster rank", body: "Grandmaster = top 0.1% of players; visible to scouts + tryout invites." },
      { title: "Regional league qualifiers (LBFF Development, LFB Development)", body: "Feeder leagues in Brazil, LATAM, SEA, MENA." },
      { title: "Free Fire World Series qualification", body: "Continental league champions qualify for FFWS Global Finals; annual world championship." },
    ]},
  ],

  faq: [
    { question: "How is Free Fire different from PUBG Mobile?", answer: "Free Fire is designed for low-end phones and short attention spans: 50 players (vs. 100), 10-minute matches (vs. 25+), runs on 1GB-RAM devices. Each player also selects a Character with a unique ability (a MOBA-like layer PUBG lacks). Free Fire dominates emerging-market esports (Brazil, MENA, SEA) while PUBG Mobile leads in mature markets." },
    { question: "Why is Free Fire so popular in Brazil?", answer: "Free Fire matched the Brazilian mobile ecosystem (low-end Android phones dominant, data caps common) and Garena invested heavily in Portuguese-language broadcasts, LBFF franchising with traditional football clubs (Corinthians, LOUD), and streamer sponsorships (Nobru is a national celebrity). LBFF is the world's largest Free Fire esports league." },
    { question: "Was Free Fire banned in India?", answer: "Yes — Free Fire (and Free Fire MAX) were banned in India in February 2022 alongside other Chinese-linked apps. Garena re-launched a new India-specific version, 'Free Fire India', in 2023 under a local publishing arrangement, which is again the dominant BR in the Indian market." },
  ],

  wikipediaTitle: "Garena Free Fire",
  sources: [
    { label: "Garena Free Fire", url: "https://ff.garena.com", publisher: "Garena" },
    { label: "Wikipedia — Garena Free Fire", url: "https://en.wikipedia.org/wiki/Garena_Free_Fire", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

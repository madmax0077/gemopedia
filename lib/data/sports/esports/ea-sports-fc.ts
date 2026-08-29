import type { Sport } from "@/lib/types";

export const eaSportsFc: Sport = {
  id: "ea-sports-fc",
  slug: "ea-sports-fc",
  name: "EA Sports FC",
  officialName: "EA Sports FC (formerly FIFA)",
  aliases: ["FC 24", "FC 25", "FIFA", "eFootball", "Ultimate Team"],
  shortDescription:
    "EA's flagship football video game (formerly FIFA) — 1v1 competitive Ultimate Team card-collector meets tactical simulation, with $10M+ FC Pro official esports circuit.",
  longDescription:
    "EA Sports FC (formerly FIFA, 1993-2023) is the world's best-selling sports video game series, selling 325 M+ copies through 2024. The FIFA branding ended in 2023 after EA and FIFA disagreed on licensing; the game continues as EA Sports FC with all major leagues (Premier League, La Liga, Bundesliga, etc.). Its esports circuit — FC Pro (formerly FIFA Global Series/EA Sports FC Pro) — runs 1v1 Ultimate Team ranked qualifiers with $10M+ annual prize pool across the eChampions League, FC Pro Open, and FC Pro World Championship.",

  category: "esports",
  subCategory: "football simulation esports (1v1 Ultimate Team competitive)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "CA",
  regionOfOrigin: "Burnaby, British Columbia (EA Sports; historically EA Canada)",
  estimatedOrigin: "FIFA International Soccer released 1993; EA Sports FC 24 released September 2023 after FIFA license expired",

  players: { min: 1, max: 2, note: "1v1 competitive standard; 2v2 (Co-op Seasons) and 11v11 (Pro Clubs) recreational." },
  field: {
    surfaceName: "Virtual football pitch",
    dimensions: "Standard 105×68 m simulated",
    description: "Any licensed stadium (Old Trafford, Bernabéu, etc.) or custom Ultimate Team stadium." },
  equipment: [
    { name: "PlayStation 5 or Xbox Series X", description: "FC Pro is dual-console; PS5 majority of pros." },
    { name: "Wired DualSense/Xbox controller", description: "Wired to eliminate latency; some pros use Scuf/PowerA custom controllers." },
    { name: "Wired monitor + low-latency mode", description: "1080p 120Hz TV/monitor, low-latency picture mode critical." },
    { name: "Wired ethernet", description: "Sub-30ms ping to EA servers required for pro play." },
  ],
  duration: {
    approximateMinutes: 12,
    structure: "Standard match: 6-minute halves = 12 minutes. Extra time + penalties add 5 minutes. Tournament best-of-2 aggregate + golden goal." },

  objective:
    "Score more goals than opponent over two 6-minute halves in FC Pro competitive rules. Progress through group + knockout brackets to win events.",
  matchStructure:
    "Regular match: 2×6 min. Cup format: best-of-2 aggregate → extra time → penalties. Tournaments: swiss group → single-elim bracket.",

  basicRules: [
    { title: "Standard football rules", body: "Offsides, fouls, cards, throw-ins, corners, free kicks — all standard FIFA laws." },
    { title: "6-minute halves", body: "Competitive FC Pro standard — regulation match is 12 minutes total." },
    { title: "Ultimate Team squad", body: "Build a 23-card squad from packs, market, and objectives; chemistry system rewards nationality/league synergies." },
    { title: "Controller", body: "L1/L2/R1/R2 for shooting, sprint, cross, through-ball. Right stick for skill moves." },
  ],
  advancedRules: [
    { title: "PlayStyles+ (FC 24+)", body: "Player-specific abilities (Finesse Shot+, Whipped Pass+, Bruiser) that trigger unique animations." },
    { title: "Custom Tactics", body: "Pre-set defensive line depth, width, pressing intensity, buildup style, offensive shape." },
    { title: "Set-piece Rework", body: "FC 24 introduced power meter + directional aiming for corners + free kicks." },
    { title: "Evolutions", body: "Upgrade specific cards over multiple matches with challenges — meta squad building." },
  ],
  scoring: {
    summary: "Goals scored; aggregate over 2 legs; away goals rule scrapped in favor of extra time + penalties.",
    winCondition: "Highest aggregate goals wins; ties resolved by extra time then penalty shootout.",
    breakdown: [
      { action: "Goal", points: "1 goal" },
      { action: "Penalty (in ET/regular)", points: "1 goal if converted" },
      { action: "Own goal", points: "1 for opponent" },
    ],
  },
  penalties: [
    { title: "Rage quit", body: "Auto-loss + FC Pro rank penalty; repeat offenders banned." },
    { title: "Boosting", body: "Colluding with opponents for wins — permaban." },
    { title: "Modded controller", body: "Any input macro/rapid-fire modification — DQ + ban." },
  ],

  positions: [
    { name: "Attackers (ST, CF, LW, RW)", role: "Score goals; typically Mbappé, Haaland, Vinicius meta.", count: 3 },
    { name: "Midfielders (CAM, CM, CDM)", role: "Build attacks + defensive shield.", count: 3 },
    { name: "Defenders (CB, LB, RB)", role: "Block shots + intercept passes.", count: 4 },
    { name: "Goalkeeper (GK)", role: "Save shots; AI-controlled unless keeper-swap trained.", count: 1 },
  ],
  officiating: {
    officials: ["FC Pro tournament admins", "EA anti-cheat + integrity team"],
    summary: "EA-run tournament admins moderate FC Pro events; disconnects handled by pause/restart rules.",
  },

  governingBodies: [
    { name: "EA Sports (Electronic Arts)", founded: 1982, headquarters: "Redwood City, California, USA", website: "https://easports.com/fc" },
  ],
  majorCompetitions: [
    { name: "FC Pro World Championship", frequency: "annual", founded: 2018, region: "global" },
    { name: "eChampions League", frequency: "annual", founded: 2019, region: "UEFA/EA collaboration" },
    { name: "FC Pro Open", frequency: "annual (regional splits)", founded: 2023, region: "NA + EU + APAC + LATAM" },
  ],
  countriesPlayed: ["GB", "DE", "FR", "ES", "IT", "US", "BR", "SA", "NL", "TR", "PL", "AR"],
  famousAthletes: [
    "Umut 'Umut' Gültekin (DE, FC Pro World Champion 2024)",
    "Nicolas99fc (AR, first FC Pro World Champion under new brand)",
    "Manuel 'Manuel Bridge' Bridge (DE, e-Champions League winner)",
    "Ryan 'Rzn' Barnden (GB, eEURO)",
    "MoAuba (DE, 2 × FIFA eWorld Cup winner)",
  ],
  records: [
    { title: "FIFA eWorld Cup prize (2019)", holder: "Mohammed 'MoAuba' Harkous", value: "$250,000", year: 2019 },
    { title: "FC/FIFA lifetime unit sales", holder: "EA Sports", value: "325+ million copies", year: 2024 },
    { title: "Ultimate Team annual revenue", holder: "EA Sports", value: "$1.6B in FY24 (Ultimate Team is EA's most profitable line)", year: 2024 },
  ],

  variants: ["ea-sports-fc-mobile", "efootball-2024", "pro-evolution-soccer", "rocket-league"],
  relatedSports: ["efootball", "football", "rocket-league"],

  skills: [
    "controller mechanics + skill move execution",
    "pass timing + weighting",
    "defensive positioning (manual defending)",
    "Ultimate Team squad building + market trading",
    "set-piece routine memorization",
  ],
  strategies: [
    { title: "Meta formation", body: "4-3-2-1 or 4-2-3-1 wide — current FC 25 meta prioritizes CDMs + fullback overlaps." },
    { title: "First-time finishes", body: "Chained one-touch shots (finesse or driven) beat GK reactions." },
    { title: "L1 through-balls", body: "Threaded through-balls beat high defensive line; pair with sprint attackers." },
    { title: "Defensive AI toggles", body: "Custom Tactics + Aggressive Interception drastically improve AI defensive coverage." },
  ],

  terminology: [
    { term: "TOTW", meaning: "Team of the Week — weekly upgraded cards based on real-life performance." },
    { term: "TOTS", meaning: "Team of the Season — league-based year-end SBC releases." },
    { term: "Div Rivals", meaning: "Divisions ranked ladder — earn weekly rewards from wins." },
    { term: "FUT Champs (WL)", meaning: "Weekend League — 20-game elite qualifier for FC Pro." },
    { term: "SBC", meaning: "Squad Building Challenge — trade cards for exclusive rewards." },
    { term: "AcM", meaning: "Ancelotti's Metronome — a joke meta term for possession-based buildup." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play offline Squad Battles", body: "AI matches to earn coins + rewards; no online pressure." },
        { title: "Complete beginner SBCs", body: "Squad Building Challenges give guaranteed reward cards early." },
        { title: "Try Division Rivals Div 8-9", body: "Casual online play with weekly rewards regardless of rank." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Reach Elite Division", body: "Top-100 in each region; direct pipeline to FC Pro qualifiers." },
        { title: "Win Weekend League Rank 1", body: "17-20 wins in FUT Champs qualifies for FC Pro Open finals." },
        { title: "Enter FC Pro Open regionals", body: "$100K+ regional finals with LAN qualifier for World Championship." },
      ],
    },
  ],

  faq: [
    { question: "Is FC 25 the same as FIFA?", answer: "Same team, same engine — just no FIFA branding after 2023. Full club/league/player licenses retained (except FIFA World Cup)." },
    { question: "PC or console?", answer: "Both, but FC Pro is console-only (PS5 + Xbox Series X). PC has separate Ranked but no official esports." },
    { question: "How much do FC Pro pros earn?", answer: "$100K salary tier for top esports orgs (RBLZ, FaZe, FUT Champs). World champion takes home $100K+ per major event." },
    { question: "Ultimate Team is pay-to-win?", answer: "Yes and no — spending accelerates squad building, but skilled f2p players regularly reach Elite Division. Top pros spend +$500-$5000/season." },
  ],

  sources: [
    { label: "Wikipedia — EA Sports FC", url: "https://en.wikipedia.org/wiki/EA_Sports_FC", publisher: "Wikipedia" },
    { label: "FC Pro official", url: "https://www.ea.com/games/ea-sports-fc/fc-pro", publisher: "EA Sports" },
    { label: "FUTBIN squad database", url: "https://www.futbin.com", publisher: "FUTBIN" },
  ],
  wikipediaTitle: "EA Sports FC",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

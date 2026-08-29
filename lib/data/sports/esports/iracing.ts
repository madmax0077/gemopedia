import type { Sport } from "@/lib/types";

export const iracing: Sport = {
  id: "iracing",
  slug: "iracing",
  name: "iRacing",
  officialName: "iRacing.com Motorsport Simulations",
  aliases: ["iRacing", "iR", "iRacing Motorsport"],
  shortDescription:
    "The world's most accurate racing simulator and largest online racing service — subscription-based, laser-scanned track library, and 24/7 official-scheduled races with iRating skill matchmaking used by real F1/NASCAR pros.",
  longDescription:
    "iRacing launched in 2008 by NASCAR/John Henry (Boston Red Sox owner) as a subscription simulation. Its laser-scanned tracks, tire physics, and monthly official series set the sim-racing benchmark. iRacing hosts F1 Esports Series feeder events, official NASCAR eSeries, and the 24 Hours of Le Mans Virtual. Real-world pros (Max Verstappen, Lando Norris, Kyle Larson) actively compete. The subscription model ($13/month + $12-$25 per track/car DLC) creates a serious commitment — but delivers unmatched competition.",

  category: "esports",
  subCategory: "sim-racing subscription platform with 24/7 official races",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Bedford, Massachusetts (iRacing.com Motorsport Simulations LLC)",
  estimatedOrigin: "Released August 2008; founded by Dave Kaemmer + John Henry (NASCAR / Boston Red Sox investor)",

  players: { min: 1, max: 65, note: "1-65 cars per online session; team endurance races have 4+ drivers per car sharing driving duty." },
  field: {
    surfaceName: "Laser-scanned real-world circuits",
    dimensions: "125+ tracks worldwide (Spa, Nürburgring, Daytona, Bathurst, etc.)",
    description: "Every corner scanned to millimeter accuracy; day/night cycle + weather (rain in v2024)." },
  equipment: [
    { name: "Gaming PC", description: "Windows PC with dedicated GPU (RTX 3060+); iRacing PC-exclusive." },
    { name: "Sim racing wheel + pedals", description: "Direct-drive wheel (Fanatec CSL DD, Simucube) + load-cell pedals for realism." },
    { name: "Racing seat/rig", description: "Playseat, Sim-Lab, or full-motion rig for pros ($500-$50,000+ range)." },
    { name: "VR headset (optional)", description: "Meta Quest 3 or Pimax for immersive cockpit view." },
    { name: "iRacing subscription", description: "$13/month or $99/year; +$12-$25 per additional car/track DLC." },
  ],
  duration: {
    approximateMinutes: 45,
    structure: "Sprint races: 20-60 min. Endurance: 6h/12h/24h in team format. Weekly Series: 8-week season with 2-3 races per week." },

  objective:
    "Finish highest position in each race to earn Championship Points. Improve iRating (elo-like) + Safety Rating to progress licenses (Rookie → D → C → B → A → Pro).",
  matchStructure:
    "12-week season. Each week: qualify + race in your official series (Skip Barber F2000, Porsche Cup, GT3, NASCAR Cup, etc.). Season points = your best 8 of 12 weeks.",

  basicRules: [
    { title: "License classes", body: "Rookie → D → C → B → A → Pro. Higher licenses unlock faster cars + open-wheel." },
    { title: "iRating (elo)", body: "Adjusts per race based on relative finish; 1000 = beginner, 10,000+ = world-class." },
    { title: "Safety Rating (SR)", body: "0-4.99; incidents (contact, spins, off-tracks) reduce SR. Below thresholds = license demotion." },
    { title: "Incident Points", body: "1x = off-track, 2x = loss of control, 4x = car contact. Rack up incidents = penalty then DQ." },
    { title: "Fair Racing Rules", body: "Blue flags = let leaders pass; yellow flag = no passing; blocking rules enforced." },
  ],
  advancedRules: [
    { title: "Endurance team format", body: "24h Le Mans, 12h Bathurst — 3-4 drivers per car with stint length limits." },
    { title: "Weather (v2024+)", body: "Dynamic rain, temperature, wind — full tire/setup adaptation required." },
    { title: "Custom setups", body: "Damper, wing, tire pressure tuning — advanced players spend hours on setups." },
    { title: "Rated official series", body: "Only official races contribute to iRating; hosted sessions are unranked." },
  ],
  scoring: {
    summary: "Championship Points per race (150 for 1st, decreasing); best-of-N counts for season standings.",
    winCondition: "Race: finish 1st. Season: highest points across best 8-of-12 weeks in your division.",
    breakdown: [
      { action: "1st place finish", points: "150 pts" },
      { action: "10th place", points: "80 pts" },
      { action: "Pole position", points: "1 pt bonus" },
    ],
  },
  penalties: [
    { title: "Excessive incident points", body: "4x-per-lap incident cap = drive-through or stop-go penalty." },
    { title: "Corner cutting", body: "Automatic track-limits detection = time penalty." },
    { title: "Griefing", body: "Intentional contact reported = manual review + possible ban." },
  ],

  positions: [
    { name: "Lead driver", role: "Fastest team member; qualifies + starts endurance races.", count: 1 },
    { name: "Support drivers", role: "Rotate stints; manage tire/fuel strategy.", count: 3 },
    { name: "Team spotter", role: "Voice comms for traffic, weather, and pit-stop callouts.", count: 1 },
  ],
  officiating: {
    officials: ["iRacing Race Control", "Steward review board"],
    summary: "In-race officiating automated (incident points, track limits); post-race stewards review protests for special cases.",
  },

  governingBodies: [
    { name: "iRacing.com Motorsport Simulations", founded: 2004, headquarters: "Bedford, Massachusetts, USA", website: "https://iracing.com" },
  ],
  majorCompetitions: [
    { name: "iRacing Special Events (Daytona 500, Le Mans 24h, Nürburgring 24h)", frequency: "annual", founded: 2012, region: "official series" },
    { name: "eNASCAR iRacing Series", frequency: "annual", founded: 2010, region: "NASCAR-branded" },
    { name: "F1 Esports Series (feeder tier uses iRacing)", frequency: "annual", founded: 2017, region: "global" },
    { name: "24 Hours of Le Mans Virtual", frequency: "annual", founded: 2020, region: "streamed globally" },
  ],
  countriesPlayed: ["US", "GB", "DE", "AU", "NL", "FR", "IT", "BR", "SE", "FI", "CA", "JP"],
  famousAthletes: [
    "Max Verstappen (NL, F1 world champion + iRacing top 0.1%)",
    "Lando Norris (GB, F1 driver + Team Redline sim driver)",
    "Rennie Bryce (US, iRacing world champion sim)",
    "Kevin Magnussen (DK, F1 + real sim driver)",
    "Jimmy Broadbent (GB, iRacing YouTuber + sim pro)",
  ],
  records: [
    { title: "iRacing peak concurrent users", holder: "iRacing", value: "35,000+ concurrent during Le Mans Virtual", year: 2023 },
    { title: "Fastest lap Nürburgring Nordschleife (iRacing)", holder: "Various pros", value: "6:33.xx (in GT3)", year: 2024 },
    { title: "Largest iRating", holder: "Ray Alfalla / Max Verstappen", value: "12,000+", year: 2023 },
  ],

  variants: ["assetto-corsa-competizione", "rfactor-2", "automobilista-2", "granturismo-7"],
  relatedSports: ["formula-1-esports", "assetto-corsa", "rfactor-2", "gran-turismo-7"],

  skills: [
    "consistency (sub-0.2s lap variance)",
    "tire + fuel management",
    "wheel force-feedback interpretation",
    "race craft + overtaking",
    "setup engineering",
  ],
  strategies: [
    { title: "Practice hot-laps daily", body: "Consistency > absolute pace; 10 clean laps daily builds muscle memory." },
    { title: "Copy top setups", body: "Setups from Coach Dave Academy, VRS, and top-split drivers — start there, tune from base." },
    { title: "Race conservatively for SR", body: "Higher iRating requires 3.0+ Safety Rating; contact ends careers." },
    { title: "Team endurance", body: "24h races reward consistent 4-driver teams; 6-hour Bathurst pairs work well for casual pros." },
  ],

  terminology: [
    { term: "iRating", meaning: "Elo-like ranking; higher = harder + faster splits." },
    { term: "Safety Rating (SR)", meaning: "0-4.99; measures clean driving. Below 3.0 = license demotion." },
    { term: "Split", meaning: "Race server tier; higher iRating = higher split = tougher field." },
    { term: "Incident points", meaning: "Penalty currency per race; too many = DQ." },
    { term: "Setup", meaning: "Car tuning — aero, springs, dampers, tire pressure. Fixed setup series ban customization." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Complete the Skip Barber F2000 rookie series", body: "Free rookie series; teaches Fair Racing + license progression." },
        { title: "Buy a wheel + pedal set", body: "Fanatec CSL DD ($400-$600 bundle) is the community-recommended entry." },
        { title: "Watch VRS + Coach Dave", body: "Free tutorial content teaches racecraft + setup basics." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Reach A-license", body: "Requires 3.0+ SR + clean driving in B-class series (typically 6+ months)." },
        { title: "Enter Le Mans Virtual qualifier", body: "Open Q-events for the 24h Le Mans Virtual give amateurs a shot vs. pros." },
        { title: "Join a sim-racing team", body: "Team Redline (NL), Williams eSports, Mercedes eSports recruit from A-license + Pro-license drivers." },
      ],
    },
  ],

  faq: [
    { question: "How much does iRacing cost?", answer: "$99/year subscription + $12-$25 per additional car/track (many included). Serious sim racers spend $200-$500/year on content." },
    { question: "Do I need a full sim rig?", answer: "No — a wheel + pedals + desk mount ($400-$600) is enough. Full motion rigs ($5K-$50K) are optional." },
    { question: "PC only?", answer: "Yes — iRacing is Windows PC exclusive. No console version." },
    { question: "Are F1 pros really on iRacing?", answer: "Yes — Max Verstappen, Lando Norris, Charles Leclerc, and 20+ other F1 drivers actively race and stream." },
  ],

  sources: [
    { label: "Wikipedia — iRacing", url: "https://en.wikipedia.org/wiki/IRacing", publisher: "Wikipedia" },
    { label: "iRacing official", url: "https://iracing.com", publisher: "iRacing" },
    { label: "Coach Dave Academy setups", url: "https://coachdaveacademy.com", publisher: "Coach Dave" },
  ],
  wikipediaTitle: "IRacing",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

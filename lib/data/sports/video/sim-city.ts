import type { Sport } from "@/lib/types";

export const simCity: Sport = {
  id: "sim-city",
  slug: "sim-city",
  name: "SimCity",
  officialName: "SimCity (series)",
  aliases: ["Sim City", "SC4", "SimCity 2000", "SimCity BuildIt"],
  shortDescription:
    "The pioneering city-builder simulator by Maxis — zone residential/commercial/industrial districts, balance the budget, and grow a metropolis while battling traffic, pollution, and (occasional) UFO attacks.",
  longDescription:
    "SimCity was created by Will Wright in 1989 for Maxis, launching the city-builder / life-sim genre. Its sequels — SimCity 2000 (1993), 3000 (1999), 4 (2003), the disastrous online-only reboot (2013), and mobile BuildIt (2014) — sold 100+ million combined. Cities: Skylines (2015) by Paradox has surpassed SimCity 4 as the modern city-builder standard, but SimCity remains the archetype and is still played competitively via SimCity 4 megaregion challenges + BAT/LEX mod scene.",

  category: "video-games",
  subCategory: "city-builder simulation",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "US",
  regionOfOrigin: "Redwood City, California (Maxis, acquired by EA 1997)",
  estimatedOrigin: "First SimCity released 1989 by Maxis; SimCity 4 remains the community favorite; BuildIt (mobile) still active",

  players: { min: 1, max: 16, note: "Single-player standard; SimCity 4 supports regional trade between neighboring cities; SC2013 attempted multiplayer regions." },
  field: {
    surfaceName: "City tile map",
    dimensions: "1×1 to 4×4 km tile grids (SimCity 4)",
    description: "3D isometric terrain with elevation, zoning, and utilities overlays." },
  equipment: [
    { name: "Gaming PC or mobile", description: "SimCity 4 on PC (Steam, GOG); BuildIt on iOS + Android; SC2013 online-only (largely defunct)." },
    { name: "Mouse + keyboard", description: "M+KB standard; touch for BuildIt mobile." },
  ],
  duration: {
    approximateMinutes: 3600,
    structure: "Casual play: hours per session. Building a 500K-population city: 50-100+ hours across weeks." },

  objective:
    "Grow a thriving city while balancing budget, satisfaction, and services. Reach population/economy milestones and unlock reward buildings.",
  matchStructure:
    "Sandbox — no defined end. Time advances at variable speeds; player zones land, places utilities, and reacts to citizen demands.",

  basicRules: [
    { title: "Zoning", body: "Assign land as Residential, Commercial, or Industrial (light or heavy). Sims auto-build within zones." },
    { title: "RCI demand", body: "Right-side bar shows demand for each zone type; zone accordingly." },
    { title: "Utilities", body: "Power (plants + wires), water (pumps + pipes), and garbage (landfill/recycling) required for zones to function." },
    { title: "Services", body: "Police, fire, health, education, and parks placed to keep citizens happy." },
    { title: "Budget", body: "Monthly income vs. expenses; adjust tax rates + service funding to stay in the black." },
  ],
  advancedRules: [
    { title: "Regional play (SC4)", body: "Cities in the same region trade power/water/garbage + reveal neighbor connections." },
    { title: "Reward buildings", body: "Unlocked at population + capital thresholds (e.g., Mayor's House at 5K residents)." },
    { title: "Disasters", body: "Toggle earthquakes, tornadoes, fires, UFOs, and Godzilla (BuildIt). Rebuild is part of the challenge." },
    { title: "Mods (SC4)", body: "BAT (Building Architect Tool) + NAM (Network Addon Mod) transform the game — the community's soul." },
  ],
  scoring: {
    summary: "Population, mayor rating, and city net worth. Challenges rank megaregion aggregate population.",
    winCondition: "No defined win — sandbox goals are self-set (Cross-500K, no-highways challenge, Traffic-free megacity)." ,
    breakdown: [
      { action: "Population milestone", points: "Reward buildings + mayor titles" },
      { action: "Megaregion pop record", points: "Community leaderboard" },
    ],
  },

  officiating: {
    officials: ["SimCity 4 megaregion community moderators (Simtropolis)"],
    summary: "Simtropolis forum + LEX (Landmark Exchange) maintain community records + mod repository.",
  },

  governingBodies: [
    { name: "Maxis (Electronic Arts)", founded: 1987, headquarters: "Redwood City, California, USA", website: "https://ea.com/games/simcity" },
  ],
  majorCompetitions: [
    { name: "Simtropolis City Journals", frequency: "year-round", founded: 2004, region: "online" },
    { name: "SimCity BuildIt Contest of Mayors", frequency: "weekly", founded: 2018, region: "in-game leaderboard" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "JP", "CN", "BR", "IT", "AU"],
  famousAthletes: [
    "Will Wright (US, creator)",
    "Chuck Norris (megaregion builder, Simtropolis)",
    "Chris Adams (LEX mod curator)",
    "CityBuilder (Twitch streamer)",
  ],
  records: [
    { title: "Largest SC4 megaregion population", holder: "Simtropolis community", value: "50+ million across 16 cities", year: 2018 },
    { title: "Total franchise sales", holder: "Maxis/EA", value: "100+ million copies across all SimCity titles", year: 2020 },
    { title: "Longest continuously-played SimCity", holder: "N/A (self-reported)", value: "Since 1989 (35 years)", year: 2024 },
  ],

  variants: ["simcity-2000", "simcity-4", "simcity-buildit", "cities-skylines", "cities-skylines-2"],
  relatedSports: ["cities-skylines", "cities-skylines-2", "tropico", "anno-1800", "the-sims"],

  skills: [
    "spatial urban planning",
    "budgetary + economic modeling",
    "infrastructure sequencing (roads → power → zoning)",
    "traffic engineering",
    "aesthetic + district composition",
  ],
  strategies: [
    { title: "Grid + arterial roads first", body: "Design the road backbone before zoning — retrofitting arterials is painful." },
    { title: "Balance RCI early", body: "Under-zoning industrial causes commercial to fail; over-zoning pollutes residential." },
    { title: "Neighbor deals for utilities", body: "Sell water/power to neighboring cities in SC4 for extra income." },
    { title: "Traffic solutions", body: "Bus/subway + one-way streets solve gridlock; monorails for wealthy suburbs." },
  ],

  terminology: [
    { term: "RCI", meaning: "Residential/Commercial/Industrial zone demand indicator." },
    { term: "Megaregion", meaning: "SC4 term for 16 connected cities sharing utilities + traffic." },
    { term: "NAM", meaning: "Network Addon Mod — SimCity 4's essential road/rail mod." },
    { term: "BAT", meaning: "Building Architect Tool — SimCity 4 modding tool for custom buildings." },
    { term: "Traffic simulator", meaning: "The engine that routes Sims to jobs; SC4's is famously fragile at scale." },
    { term: "Godzilla mode", meaning: "BuildIt disaster where a giant lizard trashes the city — rebuild for rewards." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play the tutorial", body: "SC4 tutorial + first city; take it slow with 3×3 zoning grid." },
        { title: "Grow to 50K population", body: "Master utility placement + service coverage before scaling." },
        { title: "Try BuildIt mobile", body: "Modern, streamlined version — Contest of Mayors weekly." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Install NAM + BAT for SC4", body: "The community mods make the 20-year-old game feel modern." },
        { title: "Build a megaregion", body: "Connect 4-16 cities with rail + power sharing." },
        { title: "Post a City Journal on Simtropolis", body: "Show off your builds for community critique + awards." },
      ],
    },
  ],

  faq: [
    { question: "Which SimCity should I start with?", answer: "SimCity 4 Deluxe (with NAM mod) on PC — still the community favorite. SimCity BuildIt for mobile." },
    { question: "Is SimCity (2013) worth playing?", answer: "Not really — the online-only launch was a disaster; server shutdown makes it a legacy purchase." },
    { question: "Cities: Skylines vs. SimCity?", answer: "Cities: Skylines is the modern successor with better traffic + bigger maps. SimCity is the classic with brand nostalgia." },
    { question: "Can I still buy SimCity?", answer: "Yes — SC4 on Steam/GOG; BuildIt free on mobile. SC2013 delisted." },
  ],

  sources: [
    { label: "Wikipedia — SimCity", url: "https://en.wikipedia.org/wiki/SimCity", publisher: "Wikipedia" },
    { label: "Simtropolis community", url: "https://www.simtropolis.com", publisher: "Simtropolis" },
    { label: "SimCity on Steam", url: "https://store.steampowered.com/app/24780/SimCity_4_Deluxe_Edition/", publisher: "Maxis / EA" },
  ],
  wikipediaTitle: "SimCity",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

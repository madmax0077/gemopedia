import type { Sport } from "@/lib/types";

export const speedClimbing: Sport = {
  id: "speed-climbing",
  slug: "speed-climbing",
  name: "Speed Climbing",
  officialName: "Speed Climbing (IFSC / Olympic)",
  aliases: ["100m Vertical Sprint", "Speed"],
  shortDescription:
    "Olympic sport climbing sprint discipline â€” race up a standardized 15-metre wall in under 5 seconds against a parallel opponent, decided by dual-lane elimination.",
  longDescription:
    "Speed climbing began as an informal side event at climbing gyms and was standardized by IFSC in 2007 with a 15-metre wall and identical route worldwide. Auto-belay systems catch climbers at fall or top. Olympic debut Tokyo 2020 (combined format); Paris 2024 gave speed its own gold medal. Veddriq Leonardo (INA) holds the men's WR at 4.74s; Aleksandra Miroslaw (POL) at 6.06s. The 20-hold route is memorized worldwide and identical from Boulder to Beijing.",

  category: "adventure-extreme-sports",
  subCategory: "Olympic sprint climbing discipline",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "major",

  countryOfOrigin: "RU",
  regionOfOrigin: "Soviet Union (informal speed climbing 1970s) â€” standardized IFSC route 2007",
  estimatedOrigin: "Standardized 15m speed wall introduced by IFSC 2007; Olympic debut Tokyo 2020",

  players: { min: 2, max: 2, note: "1v1 elimination format; dual parallel lanes." },
  field: {
    surfaceName: "IFSC standardized speed wall",
    dimensions: "15 m high Ã— 3 m wide Ã— 5Â° overhang; 20 identical hand-holds + 11 foot-holds",
    description: "Two identical parallel lanes with auto-belay top-anchor; standardized worldwide since 2007." },
  equipment: [
    { name: "Speed climbing shoes", description: "Tight-fitting climbing shoes (Scarpa Vapor S, La Sportiva Solution)." },
    { name: "Auto-belay device", description: "Perfect Descent or TruBlue auto-belay at wall top." },
    { name: "Harness + chalk", description: "Minimal chalk on hands for grip; harness clipped to auto-belay carabiner." },
    { name: "Electronic timing pad", description: "Bottom start pad + top touch-plate; sub-millisecond timing." },
  ],
  duration: {
    approximateMinutes: 1,
    structure: "Single climb: 5-15 seconds. Round: 2 lanes Ã— N climbers Ã— elimination brackets. Full competition: 2-4 hours." },

  objective:
    "Climb the 15-metre standardized route faster than your opponent in dual-lane knockout format.",
  matchStructure:
    "Qualification: 2 individual timed runs, best time counts. Elimination: 1/8 â†’ 1/4 â†’ semi â†’ final. Small final for 3rd-4th.",

  basicRules: [
    { title: "Standardized wall", body: "20 hand-holds + 11 foot-holds in identical positions worldwide since 2007." },
    { title: "Start pad", body: "Both feet on start pad; hands on start holds; timer starts on foot lift-off." },
    { title: "Top touch-plate", body: "Timer stops when climber touches the top button; auto-belay lowers." },
    { title: "False start = elimination", body: "Any false start (early lift-off) in eliminations = automatic loss." },
    { title: "Fall = DNF", body: "Fall or slip = eliminated (no restart in dual eliminations)." },
  ],
  advancedRules: [
    { title: "Auto-belay malfunction", body: "Re-run allowed if auto-belay fails to catch." },
    { title: "Lane swap", body: "Semi-final + final swap lanes for second attempts." },
    { title: "Beta swaps", body: "Since route is identical worldwide, all climbers use the same 'beta' (sequence)." },
    { title: "Countback tie-break", body: "Ties resolved by prior round times." },
  ],
  scoring: {
    summary: "Time in seconds. Fastest time wins in each dual heat; elimination bracket determines podium.",
    winCondition: "Beat opponent's time in dual heat.",
    breakdown: [
      { action: "Elimination win", points: "Advance to next round" },
      { action: "World record", points: "Instant fame + sponsor bonuses" },
    ],
  },
  penalties: [
    { title: "False start", body: "Automatic loss of heat (in eliminations)." },
    { title: "Fall / slip", body: "Automatic loss of heat." },
    { title: "Skipping start pad", body: "DQ from race." },
  ],

  positions: [
    { name: "Climber (left lane)", role: "One competitor.", count: 1 },
    { name: "Climber (right lane)", role: "Opposing competitor.", count: 1 },
    { name: "Starter", role: "Sound the start beep after 'set' command." },
  ],
  officiating: {
    officials: ["IFSC Chief Judge", "Starter", "Timing Officials"],
    summary: "IFSC-certified officials with sub-millisecond electronic timing; video review for false-start disputes.",
  },

  governingBodies: [
    { name: "International Federation of Sport Climbing (IFSC)", founded: 2007, headquarters: "Turin, Italy", website: "https://www.ifsc-climbing.org" },
  ],
  majorCompetitions: [
    { name: "Olympic Games (Speed Climbing standalone)", frequency: "every 4 years", founded: 2024, region: "rotating" },
    { name: "IFSC Climbing World Championships", frequency: "biennial", founded: 1991, region: "rotating" },
    { name: "IFSC Climbing World Cup Series", frequency: "annual (8-10 events)", founded: 2007, region: "global" },
    { name: "Speed Climbing World Records League", frequency: "year-round", founded: 2020, region: "wall-video submissions" },
  ],
  countriesPlayed: ["ID", "PL", "CN", "RU", "IR", "US", "FR", "IT", "UA", "KR"],
  famousAthletes: [
    "Veddriq Leonardo (INA, men's world record + Paris 2024 gold)",
    "Aleksandra Miroslaw (POL, women's world record + Paris 2024 gold)",
    "Kiromal Katibin (INA, prior WR holder)",
    "Bassa Mawem (FRA, Tokyo 2020 speed silver combined)",
    "Iuliia Kaplina (RUS, multi-time WR holder)",
  ],
  records: [
    { title: "Men's speed climbing WR", holder: "Veddriq Leonardo (INA)", value: "4.74 seconds", year: 2024 },
    { title: "Women's speed climbing WR", holder: "Aleksandra Miroslaw (POL)", value: "6.06 seconds", year: 2024 },
    { title: "First sub-5-second men's climb", holder: "Kiromal Katibin", value: "4.98 s (2022)", year: 2022 },
  ],

  variants: ["ifsc-speed-relay", "youth-speed-climbing"],
  relatedSports: ["bouldering", "lead-climbing", "sprint"],

  skills: [
    "explosive power (leg + upper body)",
    "precise beta memorization",
    "reaction time (start pad)",
    "coordination + rhythm",
    "mental composure vs. side-by-side opponent",
  ],
  strategies: [
    { title: "Master the beta", body: "Every climber uses identical sequence; the 20-hold beta is memorized in months + refined for years." },
    { title: "Explosive start", body: "First 3 moves determine 30% of time; reaction + jump start critical." },
    { title: "Left-right stride pattern", body: "Alternating hand pattern up standardized holds â€” no improvisation." },
    { title: "Train on real wall", body: "Not simulator â€” must train on IFSC-spec wall to match exact hold spacing." },
  ],

  terminology: [
    { term: "Standardized route", meaning: "The identical 20-hold IFSC route used worldwide since 2007." },
    { term: "Beta", meaning: "Sequence of moves on a route; universal for speed climbing." },
    { term: "Dyno", meaning: "Dynamic jump between holds â€” key move on speed route." },
    { term: "Top touch", meaning: "The button climber must hit to stop the timer." },
    { term: "False start", meaning: "Early lift-off before start beep; automatic loss in eliminations." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Access a speed wall", body: "USA Climbing / IFSC-certified gyms with 15m speed wall; most cities have 0-1 walls." },
        { title: "Learn the standardized beta", body: "20-hold sequence + 11 foot-holds; watch WR runs on YouTube." },
        { title: "Sub-15 second climb", body: "First goal for adults training seriously; sub-10 for talented youth." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Sub-8 seconds", body: "Elite amateur; potential regional podium contender." },
        { title: "Enter IFSC World Cup", body: "Speed World Cup + Continental Championships; typical age 16-30." },
        { title: "Aim for Olympics", body: "Individual event since Paris 2024; national federation qualification via WC ranking." },
      ],
    },
  ],

  faq: [
    { question: "How fast is the world record?", answer: "Men: Veddriq Leonardo 4.74 seconds (2024). Women: Aleksandra Miroslaw 6.06 seconds (2024). Both approach the physical limits of human ability on the standardized route." },
    { question: "Is speed climbing an Olympic event?", answer: "Yes â€” since Tokyo 2020 (combined) and Paris 2024 (standalone). Los Angeles 2028 will continue individual medals." },
    { question: "Is the route the same everywhere?", answer: "Yes â€” IFSC standardized the 15m route with 20 hand-holds in 2007. Every competition worldwide uses identical hold placement." },
    { question: "Do speed climbers train differently?", answer: "Yes â€” speed specialists rarely compete in lead or bouldering. Training focuses on explosive power, reaction time, and standardized-route memorization." },
  ],

  sources: [
    { label: "Wikipedia â€” Speed climbing", url: "https://en.wikipedia.org/wiki/Speed_climbing", publisher: "Wikipedia" },
    { label: "IFSC Speed World Records", url: "https://www.ifsc-climbing.org/rankings/wr", publisher: "IFSC" },
  ],
  wikipediaTitle: "Speed climbing",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

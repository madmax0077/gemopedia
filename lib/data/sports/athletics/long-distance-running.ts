import type { Sport } from "@/lib/types";

export const longDistanceRunning: Sport = {
  id: "long-distance-running",
  slug: "long-distance-running",
  name: "Long-Distance Running",
  officialName: "Long-Distance Running (5000m + 10000m + Marathon)",
  aliases: ["5K", "10K", "Distance Running"],
  shortDescription:
    "Track and road events from 5000m to marathon (42.195 km) — pure aerobic tests dominated by Kenyan and Ethiopian athletes running at world-record 3-minute-per-km pace.",
  longDescription:
    "Long-distance running spans 5000m (12.5 laps) and 10000m (25 laps) on track, plus half-marathon and marathon on road. Kenyan Rift Valley and Ethiopian highland training bases produce most of the world's elite runners. Kelvin Kiptum's 2:00:35 marathon WR (Chicago 2023) was tragically cut short by his death aged 24. Eliud Kipchoge (KEN) remains the ambassador of the modern marathon era. Kenya + Ethiopia dominate global podiums; Norway (Ingebrigtsen) recently disrupted the East African monopoly on the 5000m.",

  category: "athletics",
  subCategory: "long-distance track + road running events",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "year-round",
  era: "ancient",
  popularity: "global",

  countryOfOrigin: "GR",
  regionOfOrigin: "Ancient Greece (dolichos race at Olympia + Marathon legend)",
  estimatedOrigin: "Ancient dolichos 776 BCE; modern marathon 1896 Athens (~40 km); WA-standardized 42.195 km from 1908 London",

  players: { min: 1, max: 50, note: "Track: up to 20 in finals. Road marathon: elite field 30-50 + tens of thousands of mass participants." },
  field: {
    surfaceName: "Athletics track (5000m + 10000m) / Road course (Half + Marathon)",
    dimensions: "Track: 400m oval. Road: 21.0975 km (Half) + 42.195 km (Marathon).",
    description: "Track events on synthetic Mondo; road events on paved courses through cities." },
  equipment: [
    { name: "Racing shoes", description: "Nike Alphafly, Adidas Adios Pro — carbon-plated 'super-shoes' with legal 40mm sole max." },
    { name: "Track spikes (5000m/10000m)", description: "4-6 spikes; ultra-lightweight (100g total)." },
    { name: "Race kit", description: "Lightweight singlet + shorts, race bib." },
    { name: "Nutrition kit (marathon)", description: "6-8 gels + electrolyte bottles at 5km stations." },
    { name: "GPS watch", description: "Garmin, Coros, Polar — real-time pace + heart rate + splits." },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "5000m: 12-14 min. 10000m: 26-30 min. Half marathon: 60-90 min. Marathon: 2h-4h+ typical." },

  objective:
    "Complete the distance in the shortest time. Track: finish first. Road: chase PBs or overall placement.",
  matchStructure:
    "Track: heats/finals over 2-4 days. Marathon: single mass-start race with elite bibs + wave starts for non-elites.",

  basicRules: [
    { title: "Common start", body: "All track distance events + road marathons use common start (no lane assignments)." },
    { title: "Course markers", body: "Marathon: km markers + 5K aid stations; time-mat splits at 5K/10K/half/30K/40K." },
    { title: "Legal marathon course", body: "IAAF/AIMS courses certified for record eligibility; net elevation loss ≤ 42m + no drop >1m/km." },
    { title: "Aid stations (marathon)", body: "Elite personal bottles at 5K intervals; mass runners water + Gatorade at 3K intervals." },
    { title: "Anti-doping", body: "WADA + AIU comprehensive testing." },
  ],
  advancedRules: [
    { title: "Pacemakers", body: "Legal in road + Diamond League; must exit race after set distance." },
    { title: "Super-shoes", body: "Nike Alphafly/Vaporfly + Adidas Adios Pro legal within World Athletics rules (max 40mm sole, publicly available)." },
    { title: "Waveflight (Wavelights)", body: "LED lights on track pace record attempts." },
    { title: "Elevation + wind rules", body: "Marathon record: net downhill ≤ 42m, point-to-point ≤ 50% distance." },
  ],
  scoring: {
    summary: "Time; ranked by finish order. Prize money for major marathons top-10 male + female.",
    winCondition: "First across finish line.",
    breakdown: [
      { action: "Marathon win (major)", points: "$150K+ prize (Boston, London, NYC)" },
      { action: "World record bonus", points: "$100K+ for course record" },
      { action: "Age-group placement", points: "Recognition" },
    ],
  },
  penalties: [
    { title: "Pacing violation", body: "Illegal pacemaker use = record disqualification." },
    { title: "Course cutting", body: "DQ." },
    { title: "Doping violation", body: "2-4 year ban." },
  ],

  positions: [
    { name: "Runner", role: "Individual competitor.", count: 1 },
    { name: "Pacer (marathon)", role: "Elite race pacemaker OR mass-race pace group leader." },
  ],
  officiating: {
    officials: ["Race director", "Course marshals", "Timing crew", "Doping officers"],
    summary: "World Athletics + AIMS-certified officials manage marathons; course + timing verified for record status.",
  },

  governingBodies: [
    { name: "World Athletics", founded: 1912, headquarters: "Monaco", website: "https://worldathletics.org" },
    { name: "Association of International Marathons (AIMS)", founded: 1982, headquarters: "Rome, Italy", website: "https://aimsworldrunning.org" },
    { name: "World Marathon Majors", founded: 2006, headquarters: "USA", website: "https://worldmarathonmajors.com" },
  ],
  majorCompetitions: [
    { name: "Olympic Games (5000m/10000m + Marathon)", frequency: "every 4 years", founded: 1896, region: "rotating" },
    { name: "World Athletics Championships", frequency: "biennial", founded: 1983, region: "rotating" },
    { name: "World Marathon Majors (Boston, London, Berlin, Chicago, NYC, Tokyo)", frequency: "annual", founded: 2006, region: "6 cities globally" },
    { name: "Diamond League (5000m + 10000m)", frequency: "annual", founded: 2010, region: "global" },
  ],
  countriesPlayed: ["KE", "ET", "US", "GB", "NO", "JP", "MX", "MA", "CA", "AU", "DE", "IT"],
  famousAthletes: [
    "Eliud Kipchoge (KEN, 2× Olympic marathon gold, sub-2 unofficial 1:59:40)",
    "Kelvin Kiptum (KEN, marathon WR 2:00:35 — died 2024 aged 24)",
    "Sifan Hassan (NL, 3× Olympic gold Paris 2024 distance)",
    "Jakob Ingebrigtsen (NOR, 5000m Olympic gold 2024)",
    "Peres Jepchirchir (KEN, Olympic marathon 2020 + London 2024 gold)",
    "Kenenisa Bekele (ETH, 5000m + 10000m WRs)",
  ],
  records: [
    { title: "Marathon men's WR", holder: "Kelvin Kiptum (KEN)", value: "2:00:35 (Chicago 2023)", year: 2023 },
    { title: "Marathon women's WR", holder: "Tigst Assefa (ETH)", value: "2:11:53 (Berlin 2023)", year: 2023 },
    { title: "10000m men's WR", holder: "Joshua Cheptegei (UGA)", value: "26:11.00 (Valencia 2020)", year: 2020 },
    { title: "5000m men's WR", holder: "Joshua Cheptegei (UGA)", value: "12:35.36 (Monaco 2020)", year: 2020 },
    { title: "First sub-2 marathon", holder: "Eliud Kipchoge (unofficial INEOS 1:59)", value: "1:59:40 (Vienna 2019)", year: 2019 },
  ],

  variants: ["half-marathon", "marathon-running", "10-km-road-race", "ultramarathon", "trail-running"],
  relatedSports: ["marathon", "half-marathon", "cross-country", "trail-running", "middle-distance-running"],

  skills: [
    "aerobic capacity (VO2max)",
    "lactate threshold",
    "running economy",
    "pace judgment across distances",
    "mental resilience (2+ hours of racing)",
  ],
  strategies: [
    { title: "Even pacing", body: "Marathon WRs achieved with 0-2 second per km variance across all 42.195 km." },
    { title: "Follow the group", body: "Drafting behind lead group in road races saves 3-5%." },
    { title: "Fuel every 5K", body: "Marathon: 60-90g carbs/hour via gels + Gatorade." },
    { title: "Peak for majors", body: "12-16 week specific marathon build; taper 2-3 weeks." },
  ],

  terminology: [
    { term: "Negative split", meaning: "Running second half faster than first." },
    { term: "The Wall", meaning: "Marathon glycogen depletion typically at 30-35km." },
    { term: "Pack running", meaning: "Group of runners drafting together." },
    { term: "Kipchoge shuffle", meaning: "Eliud Kipchoge's smiling efficient stride." },
    { term: "Super-shoes", meaning: "Carbon-plated racing shoes (Vaporfly era, from 2016)." },
    { term: "PB / PR", meaning: "Personal best / personal record." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Build to 30-mile weeks", body: "6-month base building; 3 runs/week to 5 runs/week." },
        { title: "Race a 5K + 10K", body: "Local weekly parkrun 5K + monthly 10K races." },
        { title: "Complete a first marathon", body: "16-20 week training plan; goal to finish, not race." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Sub-3-hour marathon", body: "Requires 60-80 miles/week + tempo runs + long runs to 22 miles." },
        { title: "Qualify for Boston Marathon", body: "Sub-3:00 (M25-29) to sub-3:35 (M50-54) qualifying times." },
        { title: "Race elite Majors + Diamond League", body: "Sub-2:10 marathon or sub-27 min 10K opens the pro circuit." },
      ],
    },
  ],

  faq: [
    { question: "How fast is the marathon world record?", answer: "Kelvin Kiptum (KEN): 2:00:35 (Chicago 2023). Average pace 2:51/km (13.7 mph). Kiptum tragically died aged 24 in 2024." },
    { question: "Are super-shoes legal?", answer: "Yes — carbon-plated shoes legal within World Athletics rules: max 40mm sole, publicly available for 4+ months." },
    { question: "Which marathon is fastest?", answer: "Berlin Marathon (7 of last 12 WRs). Flat course + typically cool September weather." },
    { question: "How much does elite marathoning pay?", answer: "Top-10 at Majors: $150K+ (winner). WR bonus $100K+. Sponsorship (Nike/Adidas) $1M+/year for top-10 world-ranked." },
  ],

  sources: [
    { label: "Wikipedia — Long-distance running", url: "https://en.wikipedia.org/wiki/Long-distance_running", publisher: "Wikipedia" },
    { label: "World Athletics distance events", url: "https://worldathletics.org/disciplines/road-running", publisher: "World Athletics" },
  ],
  wikipediaTitle: "Long-distance running",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

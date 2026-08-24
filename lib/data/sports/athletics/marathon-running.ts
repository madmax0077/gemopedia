import type { Sport } from "@/lib/types";

export const marathonRunning: Sport = {
  id: "marathon-running",
  slug: "marathon-running",
  name: "Marathon",
  officialName: "Marathon (42.195 km road race)",
  aliases: ["Marathon running", "42K road race"],
  shortDescription:
    "The classic 42.195-kilometre road race — the Olympic long-distance running event and the flagship event of every big-city runner festival.",
  longDescription:
    "The marathon is a long-distance road-running event of 42.195 km (26 miles 385 yards). It commemorates the legendary run of a Greek soldier from the Battle of Marathon to Athens in 490 BCE and was included in the first modern Olympic Games in 1896. Today the marathon is contested at the Olympics, at World Athletics Championships, and at six annual World Marathon Majors (Boston, London, Berlin, Chicago, New York, Tokyo) plus hundreds of city marathons. Elite men run under 2:02 and elite women under 2:11 on record-eligible courses; participation-level runners typically finish in 3-6 hours. Marathon running also drives huge amateur participation — the New York City Marathon regularly has more than 50,000 finishers.",

  category: "athletics",
  subCategory: "long-distance road running",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "GR",
  regionOfOrigin: "Greece (legendary origin); modern event codified in Britain",
  estimatedOrigin: "Modern marathon debuted at Athens 1896 Olympics; standard 42.195 km set at London 1908",

  players: { min: 1, max: 50000, note: "Individual race; large city marathons have tens of thousands of participants racing simultaneously." },
  field: {
    surfaceName: "road course",
    dimensions: "42.195 km (26 miles 385 yards) point-to-point or loop course on paved roads.",
    description: "City streets or country roads; a certified course meets specific measurement (Jones Counter) and elevation-drop criteria. Aid stations every 5 km supply water and sports drink.",
  },
  equipment: [
    { name: "Running shoes", description: "Cushioned or carbon-plated racing shoes — carbon plates boosted world records after 2016." },
    { name: "Racing singlet & shorts", description: "Lightweight breathable clothing; team kit at championships." },
    { name: "GPS watch", description: "Personal pace and distance tracker (optional in racing).", optional: true },
    { name: "Bib with timing chip", description: "Race number carrying an RFID chip for personal timing." },
    { name: "Nutrition / hydration", description: "Sports gels, energy chews, hydration belts — carried or picked up at aid stations." },
  ],
  duration: {
    approximateMinutes: 240,
    structure: "Continuous race from starting gun to finish line; no clock stoppages.",
    note: "Elite men <2:02, elite women <2:11; recreational average 4:15 (men) / 4:45 (women).",
  },
  objective: "Complete the 42.195 km course in the fastest possible time.",
  matchStructure:
    "Runners assemble in start corrals ordered by projected finish time. On the gun, elites and preferred entries start first; slower waves follow. Runners cover the certified course, timing chips record splits at 5 km intervals, and finishing time is recorded to 0.1 s. Prize money and world-record ratification depend on the course meeting World Athletics rules (no more than 42 m elevation drop end-to-end and no more than 1 m/km net drop).",

  basicRules: [
    { title: "Course completion", body: "Runners must complete the full certified 42.195 km course, following the marked route." },
    { title: "Aid stations", body: "Water and sports drink are provided at regular intervals (usually every 5 km); runners may accept fluids only within designated zones." },
    { title: "No pace-setters for records after 30 km (mixed field)", body: "Since 2018, women's records set in mixed-gender races require women-only pacing after certain distances." },
    { title: "Cut-off times", body: "Most marathons have a course sweep time (typically 6-7 hours); runners not maintaining a minimum pace are asked to move to the sidewalk." },
    { title: "Drop-out (DNF)", body: "Any runner may withdraw voluntarily; medical staff can require withdrawal for safety reasons." },
    { title: "No performance-enhancing drugs", body: "Runners are subject to WADA anti-doping controls before and after the race." },
  ],
  advancedRules: [
    { title: "Record-eligible courses", body: "Loop or out-and-back courses; net elevation drop ≤ 1 m/km and start-to-finish separation ≤ 50% of race distance for world records." },
    { title: "Wave starts", body: "Big-city marathons use wave starts to reduce course congestion; official time is net time between chip-crossings." },
    { title: "Elite fields", body: "Championship marathons (Olympic, Worlds) use qualifying standards and national team selection." },
    { title: "Pacemakers", body: "In record-attempt races, professional pacemakers set an even pace for the first 25-32 km and drop out." },
    { title: "Wheelchair division", body: "Wheelchair racers start in a separate wave and complete the same course on hand-cycled racers." },
  ],
  scoring: {
    summary: "Ranked by finishing time; fastest wins.",
    breakdown: [
      { action: "Cross the finish line", points: "time recorded", note: "To 0.1 or 0.01 s." },
      { action: "Championship / prize", points: "podium finish", note: "First 3 receive medals; big-city races have prize money down to top-20." },
    ],
    winCondition: "Fastest legal finish time on a certified course.",
  },

  officiating: {
    officials: ["Race director", "Chief timekeeper (chip system + backup gun)", "Course marshals", "Medical staff", "Anti-doping officers"],
    summary: "Marshals police the course, direct runners at turns and prevent shortcut cheating. Timing is fully automated with RFID chips at start, mile splits and finish.",
  },
  governingBodies: [
    { name: "World Athletics", founded: 1912, headquarters: "Monaco", website: "https://www.worldathletics.org" },
    { name: "Association of International Marathons and Distance Races", acronym: "AIMS", founded: 1982, headquarters: "Athens, Greece", website: "https://aims-worldrunning.org" },
    { name: "World Marathon Majors", founded: 2006, headquarters: "New York, USA", website: "https://www.worldmarathonmajors.com" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games — Marathon", frequency: "quadrennial", founded: 1896, region: "worldwide" },
    { name: "World Athletics Championships — Marathon", frequency: "biennial", founded: 1983, region: "worldwide" },
    { name: "Abbott World Marathon Majors", frequency: "annual", founded: 2006, region: "Boston, London, Berlin, Chicago, NYC, Tokyo, Sydney (from 2025)" },
    { name: "Comrades Marathon (ultra)", frequency: "annual", founded: 1921, region: "South Africa", note: "Not technically a marathon (89 km) — famous companion ultra race." },
  ],
  countriesPlayed: ["KE", "ET", "US", "GB", "DE", "JP", "IN", "BR", "CN", "MX", "ES", "IT", "FR", "MA", "UG", "ER"],
  famousAthletes: [
    "Eliud Kipchoge",
    "Kelvin Kiptum",
    "Brigid Kosgei",
    "Tigst Assefa",
    "Kenenisa Bekele",
    "Ruth Chepngetich",
    "Paula Radcliffe",
    "Haile Gebrselassie",
    "Mary Keitany",
    "Sifan Hassan",
  ],
  records: [
    { title: "Men's world record", holder: "Kelvin Kiptum (Kenya)", value: "2:00:35 (Chicago 2023)", year: 2023 },
    { title: "Women's world record", holder: "Ruth Chepngetich (Kenya)", value: "2:09:56 (Chicago 2024)", year: 2024 },
    { title: "Sub-2 hour (unofficial)", holder: "Eliud Kipchoge", value: "1:59:40 (INEOS 1:59 Challenge, Vienna)", year: 2019 },
    { title: "Most Olympic marathon golds", holder: "Abebe Bikila / Waldemar Cierpinski / Eliud Kipchoge", value: "2 each", year: 2020 },
  ],

  variants: ["half-marathon", "ultra-marathon", "50k", "50-mile", "100-mile", "trail-marathon"],
  relatedSports: ["half-marathon", "long-distance-running", "cross-country-running", "ultra-marathon", "triathlon"],

  skills: [
    "aerobic endurance",
    "running economy",
    "pacing discipline",
    "mental toughness",
    "hydration strategy",
    "fuelling on the run",
    "heat / cold tolerance",
  ],
  strategies: [
    { title: "Even pacing", body: "Splits within 30-60 seconds either side of average — the physiological optimum." },
    { title: "Negative split", body: "Second half faster than the first; achievable with disciplined early conservation." },
    { title: "Fuelling window", body: "Carbohydrate intake of 60-90 g/hour to sustain glycogen; start early (first 30 min) before thirst." },
    { title: "Draft in packs", body: "Sit in a group to reduce aerodynamic effort in wind, especially in professional pace-line racing." },
  ],

  terminology: [
    { term: "PB / PR", meaning: "Personal best / personal record — a runner's fastest marathon time." },
    { term: "BQ", meaning: "Boston qualifying time — age-graded qualifying standard for the Boston Marathon." },
    { term: "Split", meaning: "Time to reach a specific distance milestone (e.g., 21.1 km half-marathon split)." },
    { term: "Wall / bonk", meaning: "Sudden depletion of glycogen around 30-32 km, causing severe fatigue." },
    { term: "Taper", meaning: "Reduced training load in the 2-3 weeks before race day." },
    { term: "LSR / LSD", meaning: "Long slow run — the weekly build-up run at aerobic pace, typically 32-38 km peaked." },
    { term: "Tempo run", meaning: "Sustained run at lactate-threshold pace — the marathon-specific interval." },
    { term: "Kick", meaning: "Final sprint in the last 400 m of a race." },
    { term: "Carbo-loading", meaning: "Increased carbohydrate intake for 3 days before the race to maximise muscle glycogen." },
    { term: "Wave start", meaning: "Runners begin in staggered groups to prevent course congestion." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Build a base", body: "Consistently run 25-30 km/week (5-6 km × 4-5 days) for 8 weeks before starting a marathon plan." },
      { title: "Choose a 16-20 week plan", body: "First-time marathoners typically follow Hal Higdon Novice or Jeff Galloway plans." },
      { title: "Nutrition & hydration", body: "Practise mid-run fuelling with gels and sports drink during long runs." },
      { title: "Race day logistics", body: "Learn the course, tape or gel-lube any hotspots, and race in tested shoes and kit." },
    ] },
    { level: "intermediate", steps: [
      { title: "Add speed work", body: "Weekly tempo runs and 800 m or 1000 m intervals at 5 km pace." },
      { title: "Improve running economy", body: "Strides, hill sprints and strength training 2× per week." },
      { title: "Target a time goal", body: "Use a McMillan or VDOT calculator to set realistic marathon pace based on shorter-race results." },
      { title: "Practise race-pace long runs", body: "Insert 15-30 km at goal marathon pace into peak long runs." },
    ] },
    { level: "advanced", steps: [
      { title: "Periodisation", body: "16-24 week cycle with hypertrophy, aerobic, threshold and race-specific phases." },
      { title: "Altitude and heat prep", body: "Simulate race conditions with heat rooms or altitude tents." },
      { title: "Pacing team strategy", body: "Coordinate with pace-setters at record-attempt races." },
    ] },
  ],
  faq: [
    { question: "Why is the marathon 42.195 km?", answer: "Legend traces it to the run from Marathon to Athens (~40 km). At London 1908 the course was extended so the finish would be at the royal box, setting the length at 26 miles 385 yards (42.195 km) — standardised in 1921." },
    { question: "How long does a marathon take?", answer: "Elite men run under 2 hours 5 minutes; recreational runners typically finish between 3½ and 5½ hours; walkers can take 6-7 hours." },
    { question: "What is 'the wall'?", answer: "The point (typically 30-32 km) where muscle glycogen depletes and the body switches to slower fat-based fuelling, causing a sudden dramatic slowdown." },
    { question: "What is the World Marathon Majors?", answer: "A series of six (soon seven) major-city marathons: Boston, London, Berlin, Chicago, New York, Tokyo, and Sydney from 2025 — winners are crowned annually across the series." },
    { question: "Are carbon-plated shoes legal?", answer: "Yes, but World Athletics limits stack height to 40 mm for road racing shoes and one carbon plate; released for public sale before world-record use." },
  ],

  wikipediaTitle: "Marathon",
  sources: [
    { label: "Wikipedia — Marathon", url: "https://en.wikipedia.org/wiki/Marathon", publisher: "Wikipedia" },
    { label: "World Athletics — Road Running Rules", url: "https://www.worldathletics.org/download/download?filename=road-running-rules.pdf&urlSlug=road-running-rules", publisher: "World Athletics" },
    { label: "Abbott World Marathon Majors", url: "https://www.worldmarathonmajors.com", publisher: "WMM" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

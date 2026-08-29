import type { Sport } from "@/lib/types";

export const surfLifesaving: Sport = {
  id: "surf-lifesaving",
  slug: "surf-lifesaving",
  name: "Surf Lifesaving",
  officialName: "Surf Life Saving (International Life Saving Federation)",
  aliases: ["Ironman", "Surf Rescue", "SLSA", "ILS"],
  shortDescription:
    "Multi-discipline lifesaving sport originating on Australian beaches — competitors race swim, board paddle, ski paddle, run, and beach flags; the Ironman event combines all four water-based disciplines into a single race.",
  longDescription:
    "Surf Lifesaving is a multi-discipline sport originating from Australian beach lifeguard training. Events combine swimming, board paddling (surfboard), ski paddling (surf ski), running, and beach flag chasing. The iconic 'Ironman' event combines swim + surfboard + ski + run legs into a single race — the ultimate surf lifesaving test. Sport formalized in Australia 1907 (Surf Life Saving Australia); International Life Saving Federation (ILS) formed 1993 as world governing body. Contested at World Life Saving Championships biennially; not Olympic despite lobbying. Australia dominates historically — Surf Life Saving is the country's largest volunteer organization (170,000+ members) + a cultural institution. Beach lifeguarding techniques + rescue swimming underlie all events. Legendary athletes: Grant Kenny (Australia — 3× World Ironman Champion 1980s), Trevor Hendy (Australia — 4× World Ironman Champion 1990s), Ky Hurst (Australia — modern Olympic swimmer + Ironman legend), Ali Day (Australia — multiple Nutri-Grain Ironman Series wins). Signature events: The Coolangatta Gold, Nutri-Grain Ironman Series.",

  category: "aquatic-sports",
  subCategory: "multi-discipline beach + water lifesaving sport",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "summer",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "AU",
  regionOfOrigin: "Australia (Bondi + Bronte beaches 1907); formalized as Surf Life Saving Australia; ILS founded 1993",
  estimatedOrigin: "Australian beach lifeguard training early 20th century; formalized 1907 (Surf Life Saving Australia); ILS founded 1993; sport spread globally through Commonwealth beaches",

  players: { min: 1, max: 6, note: "Individual events (Ironman, swim, ski, board) + team events (surf teams, beach relay)." },
  field: {
    surfaceName: "Ocean beach with adjacent surf zone",
    dimensions: "Beach + surf zone 500-2000m; race distances vary by event",
    description: "Standard sandy beach with surf breaking 200-500m offshore. Race distances: Ironman ~2-3 km total (all disciplines); shorter individual events. Beach flags: 30m sprint on sand.",
  },
  equipment: [
    { name: "Surfboard (paddling)", description: "Traditional 10-11 foot paddling board; different from surfing board — designed for paddle speed + rescue. Fiberglass or foam core." },
    { name: "Surf ski (kayak-like)", description: "Long sit-on-top ski (5-6m long); double-bladed paddle. Speed averaged 12-15 km/h in racing." },
    { name: "Swimwear (racing suit)", description: "Full-body compression suit; brand-specific." },
    { name: "Rescue tube (some events)", description: "Foam rescue float; carried in patrol training." },
    { name: "Reel + line (traditional)", description: "Historic beach-based rescue line reel; still used in traditional events." },
    { name: "Beach flags (dowels)", description: "Wooden dowels placed in sand for beach flag chase event." },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "Ironman: 20-30 min. Individual event: 3-15 min depending on distance. Full carnival: 4-8 hours across multiple events.",
  },
  objective: "Complete race in fastest time — Ironman combines multiple disciplines sequentially; individual events isolate one discipline.",
  matchStructure: "Ironman: Swim → Board → Ski → Run (order varies by event). Individual events: single discipline. Beach events: sprint + flags. Team events: relay format.",

  basicRules: [
    { title: "Race disciplines completed in order (Ironman)", body: "Standard Ironman order: swim → board → ski → run (varies by event). Full transitions on sand." },
    { title: "Course completion required", body: "Missing markers or shortening course = DQ." },
    { title: "Beach flag rules (chase event)", body: "Athletes lie face-down on sand; on start, sprint 30m to grab flags; fewer flags than athletes = elimination." },
    { title: "Rescue simulation events", body: "Some competitive events simulate real rescues; time + technique judged." },
    { title: "Board + ski paddling technique", body: "Standing on paddling board = DQ; must stay on knees or prone. Sit-on-top surf ski." },
    { title: "Multiple heats + finals structure", body: "Qualification heats → semi-finals → finals for major events." },
  ],
  advancedRules: [
    { title: "Nutri-Grain Ironman Series format", body: "Australian pro circuit; 8-10 rounds; season champion crowned." },
    { title: "Coolangatta Gold (46 km ultra)", body: "Ultra-distance Ironman event held annually; sport's ultimate endurance test." },
    { title: "Beach flag elimination brackets", body: "Beach flag chase: each round eliminates one athlete; final = 2 athletes chase 1 flag." },
    { title: "Ski board transitions", body: "Elite paddlers can transition between disciplines in <10 seconds; transitions are key to Ironman success." },
    { title: "Weather + surf conditions modify events", body: "Extreme surf may cancel or modify events for safety." },
    { title: "Team events + relays", body: "Surf teams: 4-person relay of different disciplines. Team point totals contribute to championship." },
  ],
  scoring: {
    summary: "Fastest time wins. Beach flags: elimination-based. Series championships: cumulative points across events.",
    winCondition: "Fastest completion time in each event; series champions from cumulative rankings.",
    breakdown: [
      { action: "Ironman winner", points: "Series or event victory" },
      { action: "Beach flag survivor", points: "1 flag = 1 elimination round survived" },
      { action: "Nutri-Grain Ironman Series champion", points: "Cumulative points across 8-10 rounds" },
      { action: "World Championship medal", points: "Individual event victory" },
    ],
  },
  penalties: [
    { title: "Cutting course", body: "DQ from event." },
    { title: "Illegal equipment", body: "DQ." },
    { title: "Missing transition mark", body: "Time penalty or DQ." },
    { title: "False start", body: "Warning; DQ on repeat." },
    { title: "Unsafe behavior in surf", body: "Warning; DQ + potential ban." },
  ],

  positions: [
    { name: "Competitor", role: "Individual athlete competing in one or multiple disciplines.", count: 1 },
    { name: "Team member (relay)", role: "1 of 4 in team relay events.", count: 4 },
    { name: "Coach + team support", role: "Transitions + strategy + equipment." },
  ],
  officiating: {
    officials: ["Race Director", "Water safety crew (multiple)", "Beach marshals", "Judges", "Timekeepers"],
    summary: "Water safety infrastructure mandatory due to ocean nature; multi-officiating for complex Ironman events.",
  },

  governingBodies: [
    { name: "International Life Saving Federation (ILS)", founded: 1993, headquarters: "Leuven, Belgium", website: "https://ilsf.org" },
    { name: "Surf Life Saving Australia (SLSA)", founded: 1907, headquarters: "Sydney, Australia", website: "https://sls.com.au" },
    { name: "Surf Life Saving New Zealand", founded: 1910, headquarters: "New Zealand" },
    { name: "United States Lifesaving Association", founded: 1964, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "ILS World Life Saving Championships", frequency: "biennial", founded: 1971, region: "worldwide" },
    { name: "Nutri-Grain Ironman Series (Australia)", frequency: "annual", founded: 1989, region: "Australia (pro circuit)" },
    { name: "The Coolangatta Gold (46 km ultra)", frequency: "annual", founded: 1984, region: "Gold Coast, Australia" },
    { name: "Trans-Tasman Test (AUS vs NZ)", frequency: "annual", founded: 1968, region: "AUS + NZ" },
    { name: "Australian Surf Life Saving Championships (Aussies)", frequency: "annual", founded: 1915, region: "Australia" },
  ],
  countriesPlayed: ["AU", "NZ", "US", "GB", "ZA", "BR", "CA", "IE", "NL", "DE", "FR", "IT", "JP", "HK", "PH"],
  famousAthletes: [
    "Grant Kenny (Australia — 3× World Ironman Champion 1980s + Olympic kayaker)",
    "Trevor Hendy (Australia — 4× World Ironman Champion 1990s)",
    "Ky Hurst (Australia — Olympic swimmer + multiple Nutri-Grain Ironman Series wins)",
    "Ali Day (Australia — multiple Nutri-Grain Series wins + The Coolangatta Gold)",
    "Zane Holmes (Australia — modern Nutri-Grain Series contender)",
    "Shannon Eckstein (Australia — multi-time Nutri-Grain Series champion)",
    "Sharon Cain (Australia — women's Ironman pioneer + multiple Kellogg's Nutri-Grain series)",
    "Naomi Scott (Australia — women's ILS World Champion)",
    "Ryder Kesnick (Australia — Nutri-Grain champion multiple)",
  ],
  records: [
    { title: "Most Nutri-Grain Ironman Series wins", holder: "Trevor Hendy (Australia)", value: "4× World Ironman Champion 1990s + multiple Nutri-Grain Series", year: 1998 },
    { title: "Largest volunteer surf lifesaving org", holder: "Surf Life Saving Australia", value: "170,000+ members; Australia's largest volunteer organization", year: 2023 },
    { title: "The Coolangatta Gold longevity", holder: "The Coolangatta Gold", value: "46km ultra Ironman event annual since 1984", year: 2023 },
    { title: "First ILS World Championships", holder: "ILS", value: "First held Sydney 1971; biennial since", year: 1971 },
  ],

  variants: ["ironman-ironwoman-full-multi-discipline", "individual-swim-board-ski-events", "team-surf-relay", "beach-flags-elimination", "ultra-coolangatta-gold-46km"],
  relatedSports: ["triathlon", "swimming", "surfing", "kayaking", "paddleboarding"],

  skills: ["ocean swimming (surf-zone navigation)", "surfboard paddling technique", "surf ski technique (double-blade)", "sand running speed", "transitions between disciplines", "physical endurance (Ironman format)", "beach flag sprint + dive"],
  strategies: [
    { title: "Nail transitions", body: "Ironman won/lost in transitions. Practice board + ski + running transitions until automatic." },
    { title: "Ocean reading", body: "Study wave patterns + rip currents; use them for speed rather than fighting them." },
    { title: "Pace management for endurance", body: "Ironman requires managing energy across 20-30 min; sprinter mentality doesn't work." },
    { title: "Cross-train multiple disciplines", body: "Elite Ironman athletes strong in all 4 disciplines. Weakness in any = losing race." },
    { title: "Beach flag reaction time", body: "Beach flag chase = pure reaction + sprint speed. Practice starts on sand." },
    { title: "Weather + surf awareness", body: "Different surf conditions favor different techniques + timings. Adapt strategy per day." },
  ],

  terminology: [
    { term: "Ironman / Ironwoman", meaning: "Multi-discipline race combining swim + board + ski + run." },
    { term: "Board", meaning: "Paddling surfboard (10-11 ft); prone or knee paddling." },
    { term: "Ski", meaning: "Surf ski (sit-on-top long kayak); double-bladed paddle." },
    { term: "Beach flags", meaning: "Elimination sprint event with fewer flags than athletes." },
    { term: "Coolangatta Gold", meaning: "46km ultra Ironman event; sport's ultimate endurance test." },
    { term: "Nutri-Grain Ironman Series", meaning: "Australian professional Ironman circuit; annual season." },
    { term: "The Aussies", meaning: "Australian Surf Life Saving Championships; national championships." },
    { term: "ILS", meaning: "International Life Saving Federation; world governing body." },
    { term: "Rescue tube", meaning: "Foam rescue float used in lifeguard training + traditional events." },
    { term: "Rip", meaning: "Rip current in surf; can be used for speed or dangerous." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Join Surf Life Saving Club", body: "Australia + NZ + South Africa have strong local clubs; entry from age 5 (Nippers). Weekly training + community." },
      { title: "Basic Nippers program", body: "Australian junior surf lifesaving program; teaches swimming + board paddling + water safety." },
      { title: "Get bronze medallion (lifeguard cert)", body: "Australian + NZ certifications required for beach patrol duty; pathway to competitive events." },
    ]},
    { level: "intermediate", steps: [
      { title: "Compete at Regional Australian Championships", body: "Progress through junior + senior competitive ladder; club-based competitions." },
      { title: "Master surf ski technique", body: "Surf ski most technical event; requires years of paddling to master." },
      { title: "Cross-train swimming + running", body: "Swimming pool + track training complement ocean sessions." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at Nutri-Grain Ironman Series", body: "Australian pro circuit; 8-10 rounds; season champion crowned. Elite pathway." },
      { title: "Enter Coolangatta Gold + The Aussies", body: "46km ultra event + national championships; peak Australian surf lifesaving events." },
      { title: "ILS World Championships", body: "International elite competition; biennial multi-nation event." },
    ]},
  ],

  faq: [
    { question: "What is Surf Lifesaving?", answer: "A multi-discipline sport originating from Australian beach lifeguard training. Events combine swimming, board paddling (surfboard), ski paddling (surf ski), running, and beach flag chasing. The iconic 'Ironman' event combines swim + surfboard + ski + run legs into a single race. Australia dominates; Surf Life Saving Australia is the country's largest volunteer organization (170,000+ members)." },
    { question: "Is Surf Lifesaving in the Olympics?", answer: "No. ILS has lobbied for Olympic inclusion multiple times but IOC not accepted. Contested at World Life Saving Championships biennially + regional events. Sport's Olympic pathway blocked by IOC concerns about beach + weather dependency + narrow global reach outside Commonwealth beaches." },
    { question: "Where is Surf Lifesaving most popular?", answer: "Australia (dominant + sport's home), New Zealand, South Africa, UK, US (California), Brazil, France. Australia's 170,000-member Surf Life Saving movement is unmatched globally. The Nutri-Grain Ironman Series is Australia's premier surf lifesaving pro circuit." },
    { question: "What is the Coolangatta Gold?", answer: "A 46km ultra Ironman event held annually on Australia's Gold Coast (since 1984). Combines swimming + surfboard + ski paddling + running over 46km — the sport's ultimate endurance test. Winners consider it the pinnacle of surf lifesaving achievement. Winners of Coolangatta Gold rank among Australian sports legends." },
    { question: "Who is the greatest surf lifesaver?", answer: "Multiple candidates: (1) Trevor Hendy (Australia) — 4× World Ironman Champion 1990s + multiple Nutri-Grain Series. (2) Grant Kenny (Australia) — 3× World Ironman Champion 1980s + Olympic kayaker. (3) Ky Hurst (Australia) — Olympic swimmer + multiple Nutri-Grain Series wins. (4) Ali Day (Australia) — modern era Nutri-Grain multi-time champion + Coolangatta Gold winner." },
  ],

  wikipediaTitle: "Surf lifesaving",
  sources: [{ label: "International Life Saving Federation", url: "https://ilsf.org", publisher: "ILS" }, { label: "Surf Life Saving Australia", url: "https://sls.com.au", publisher: "SLSA" }, { label: "Wikipedia — Surf lifesaving", url: "https://en.wikipedia.org/wiki/Surf_lifesaving", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

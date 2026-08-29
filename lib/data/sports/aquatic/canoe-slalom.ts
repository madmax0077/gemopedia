import type { Sport } from "@/lib/types";

export const canoeSlalom: Sport = {
  id: "canoe-slalom",
  slug: "canoe-slalom",
  name: "Canoe Slalom",
  officialName: "Canoe Slalom (International Canoe Federation)",
  aliases: ["Whitewater Slalom", "K1 Slalom", "C1 Slalom", "Slalom Kayak"],
  shortDescription:
    "Summer Olympic whitewater sport where paddlers navigate a course of 18-25 gates (both upstream + downstream) in a whitewater channel — fastest time wins with 2-second penalty per gate touched; contested at Olympics since Munich 1972.",
  longDescription:
    "Canoe Slalom is a Summer Olympic whitewater sport where paddlers navigate a course of 18-25 gates suspended over a whitewater channel — some downstream (green markers), some upstream (red markers, requiring paddling against current). The winner has the fastest time; touching a gate = 2-second penalty; missing/wrong-direction = 50-second penalty. Course length ~200-400m; race time 90-110 seconds. Events: K1 (single kayak), C1 (single canoe), C2 (double canoe — discontinued 2017 Olympics), + Extreme Slalom (Kayak Cross debut Paris 2024 — 4-paddler head-to-head bracket format). Debuted at Munich 1972; became permanent Olympic sport at Barcelona 1992. Legendary paddlers: Michal Martikán (Slovakia — 5× Olympic medalist), Tony Estanguet (France — 3× Olympic gold C1), Élise Bouchard (France — early women's champion), Jessica Fox (Australia — Olympic gold Paris 2024 + multiple World Championships), Ricarda Funk (Germany — 2020 Olympic gold), Peter Kauzer (Slovenia — 4× World Champion).",

  category: "aquatic-sports",
  subCategory: "whitewater canoe/kayak — slalom gate racing",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: false,
  isProfessional: true,
  season: "summer",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "CH",
  regionOfOrigin: "Switzerland (1930s slalom racing on rivers); Olympic Munich 1972 debut; permanent from Barcelona 1992",
  estimatedOrigin: "Emerged 1930s Switzerland from downriver whitewater racing; Olympic debut Munich 1972 (constructed course); permanent Barcelona 1992",

  players: { min: 1, max: 4, note: "K1 + C1 single-person events; Extreme Slalom (Kayak Cross) 4-paddler head-to-head." },
  field: {
    surfaceName: "Whitewater channel — natural river or purpose-built course",
    dimensions: "200-400m course length; 18-25 gates; typical race time 90-110 seconds",
    description: "Purpose-built whitewater channels with pumps + weirs simulate natural rapids consistently for competition. Olympic venues: Lee Valley (London 2012), Deodoro (Rio 2016), Kasai (Tokyo 2020), Vaires-sur-Marne (Paris 2024).",
  },
  equipment: [
    { name: "Slalom kayak (K1)", description: "Sit-in kayak with double-bladed paddle; 3.5m long; lightweight (~8-10 kg); carbon fiber composite." },
    { name: "Slalom canoe (C1)", description: "Kneeling canoe with single-bladed paddle; different technique from kayak. C1 = single-person; historic C2 = double." },
    { name: "Kayak paddle", description: "Carbon-fiber double-bladed paddle; various blade profiles for control." },
    { name: "Canoe paddle", description: "Single-blade paddle for C1 kneeling technique." },
    { name: "Spray skirt", description: "Neoprene/nylon skirt sealing paddler in kayak cockpit; prevents water entry." },
    { name: "Life vest (mandatory)", description: "PFD (personal flotation device); ICF-approved." },
    { name: "Helmet (mandatory)", description: "Whitewater-specific helmet with drainage." },
    { name: "Wetsuit + thermal", description: "Cold-water conditions common; layers for temperature management." },
  ],
  duration: { approximateMinutes: 3, structure: "Each run: 90-110 seconds. Competition: qualifying (2 runs, best counts) + semifinal + final = 3-4 hours." },
  objective: "Complete course in fastest time; touching/missing gates adds time penalties. Sum of run time + penalties = final time.",
  matchStructure: "Qualifying (2 runs, best counted) → Semifinal (single run; top 10 advance) → Final (single run; top 8 finalists). Fastest final run = event champion.",

  basicRules: [
    { title: "Navigate gates in correct sequence + direction", body: "Gates numbered 1-25; downstream gates (green) paddled downstream; upstream gates (red) paddled upstream." },
    { title: "Gate penalties", body: "Touching gate = 2-second penalty; missing / wrong direction / body pole penalty = 50-second penalty." },
    { title: "Sum time + penalties = final time", body: "Course time + total penalties (0, 2, 4, 50, 52, ...) = final score. Lowest = winner." },
    { title: "Boat must clear gate", body: "Boat must pass between gate poles in correct direction with head + hull cleanly through." },
    { title: "Class-specific", body: "K1 (kayak single), C1 (canoe single), C2 historically. Different course + gate placement per class." },
    { title: "Best time of qualifying runs advances", body: "2 qualifying runs; best time (with penalties) counts for advancement." },
  ],
  advancedRules: [
    { title: "Body-pole penalty", body: "Paddler's body/head touches gate = 2-second penalty (same as boat touch)." },
    { title: "50-second penalty scenarios", body: "Missed gate, wrong direction through gate, deliberate contact, gate order violation." },
    { title: "Gate crossing definition", body: "Boat + paddler must cleanly cross gate line; ICF-standardized." },
    { title: "Course change between runs", body: "Some events change gate positions between qualifying + finals; course setter revealed pre-race." },
    { title: "Extreme Slalom (Kayak Cross)", body: "New event: 4-paddler head-to-head bracket; combined skills — slalom + freestyle + roll. Paris 2024 debut." },
    { title: "Weather + water-level dependent", body: "Rain + pumps + weirs can change course difficulty; events postpone for extreme flooding." },
  ],
  scoring: {
    summary: "Race time + gate penalties = final score. Lowest score wins. Extreme Slalom: elimination brackets.",
    winCondition: "Fastest total time (with penalties) in final. Extreme Slalom: win Big Final.",
    breakdown: [
      { action: "Clean run through gate", points: "0 penalty" },
      { action: "Gate touched (any pole)", points: "+2 seconds" },
      { action: "Missing gate / wrong direction / gate order", points: "+50 seconds" },
      { action: "Winning final time (elite)", points: "~90-110 seconds total including any penalties" },
      { action: "Extreme Slalom heat win", points: "Advance to next round" },
    ],
  },
  penalties: [
    { title: "Gate touch (2 seconds)", body: "Added to race time." },
    { title: "Missing / wrong direction (50 seconds)", body: "Effectively eliminates from medal contention." },
    { title: "Illegal equipment", body: "DQ from event." },
    { title: "Cutting course", body: "DQ if outside marked corridor." },
    { title: "Unsafe behavior", body: "Warning; DQ for serious offenses." },
  ],

  positions: [
    { name: "Paddler (K1 + C1)", role: "Individual competitor.", count: 1 },
    { name: "Paddler (Extreme Slalom, 4-person)", role: "1 of 4 in head-to-head heat.", count: 4 },
    { name: "Coach + team support", role: "Between-run advice; equipment tuning." },
  ],
  officiating: {
    officials: ["Chief Judge", "Gate judges (per gate)", "Video review official", "Timekeeper", "Chief of Course"],
    summary: "ICF-certified officials; individual gate judges + head judge oversee; video review for close calls.",
  },

  governingBodies: [
    { name: "International Canoe Federation (ICF)", founded: 1946, headquarters: "Lausanne, Switzerland", website: "https://canoeicf.com" },
    { name: "American Canoe Association (ACA)", founded: 1880, headquarters: "Fredericksburg, USA" },
    { name: "British Canoeing", founded: 1936, headquarters: "Nottingham, UK" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games (Canoe Slalom)", frequency: "quadrennial", founded: 1972, region: "worldwide" },
    { name: "ICF Canoe Slalom World Championships", frequency: "annual (except Olympic years)", founded: 1949, region: "worldwide" },
    { name: "ICF Canoe Slalom World Cup", frequency: "annual (5-7 rounds)", founded: 1988, region: "worldwide" },
    { name: "European Canoe Slalom Championships", frequency: "annual", founded: 1996, region: "Europe" },
  ],
  countriesPlayed: ["FR", "GB", "DE", "SK", "SI", "CZ", "AU", "US", "IT", "ES", "PL", "AT", "CN", "NZ", "JP"],
  famousAthletes: [
    "Michal Martikán (Slovakia — 5× Olympic medalist across C1)",
    "Tony Estanguet (France — 3× Olympic gold C1 2000+2004+2012)",
    "Jessica Fox (Australia — Olympic gold Paris 2024 + multiple World Championships)",
    "Peter Kauzer (Slovenia — 4× K1 World Champion)",
    "Ricarda Funk (Germany — 2020 Olympic gold K1W)",
    "Étienne Stott (UK — 2012 Olympic gold C2)",
    "Alexander Slafkovský (Slovakia — 2× World Champion + multiple Olympic medals)",
    "Denis Gargaud Chanut (France — 2016 Olympic gold C1)",
    "Emilie Fer (France — 2012 Olympic gold K1W)",
    "David Ford (Canada — 3× World Cup gold)",
  ],
  records: [
    { title: "Olympic debut", holder: "Munich 1972", value: "First Olympic Canoe Slalom event", year: 1972 },
    { title: "Most Olympic Canoe Slalom medals", holder: "Michal Martikán (Slovakia)", value: "5 Olympic medals across C1 events over 20-year career", year: 2016 },
    { title: "Most C1 Olympic golds", holder: "Tony Estanguet (France)", value: "3 gold medals 2000+2004+2012", year: 2012 },
    { title: "First women's C1 Olympic (Paris 2024)", holder: "IOC", value: "Women's C1 became Olympic event 2024; men's since 1972", year: 2024 },
    { title: "Extreme Slalom (Kayak Cross) Olympic debut", holder: "Paris 2024", value: "New format contested first time at Paris Olympics", year: 2024 },
    { title: "Jessica Fox career", holder: "Jessica Fox (Australia)", value: "Multiple Olympic medals across K1 + C1 + 2024 Extreme Slalom", year: 2024 },
  ],

  variants: ["k1-kayak-single", "c1-canoe-single", "c2-canoe-double-non-olympic-since-2017", "kayak-cross-extreme-slalom-since-2024"],
  relatedSports: ["canoe-sprint", "whitewater-rafting", "canoeing", "wildwater-canoeing", "freestyle-kayaking"],

  skills: ["whitewater reading + line selection", "gate technique + timing", "eskimo roll (self-recovery)", "physical fitness (short intense bursts)", "mental focus (single run pressure)", "boat handling in swirling water"],
  strategies: [
    { title: "Course-walking + line-reading", body: "Every course is different; walking course + visualizing every gate approach is critical." },
    { title: "Choose safe vs. fast lines", body: "Aggressive line = faster but risks gate touch; safer line = 1-2 seconds slower but no penalty risk." },
    { title: "Upstream gate technique", body: "Upstream gates require exact eddy positioning + snap turn. Elite paddlers execute these in <2 seconds." },
    { title: "Manage energy through course", body: "Fast twitch fibers deplete rapidly; pace energy to peak in decisive middle section." },
    { title: "Recover from small errors", body: "Small mistake in one gate → adjust for next; don't let one gate error compound." },
    { title: "Study top paddlers' videos", body: "Video analysis of Fox + Martikán + Estanguet; learn line selection + technique." },
  ],

  terminology: [
    { term: "Slalom", meaning: "The gate-navigation racing format." },
    { term: "K1", meaning: "Kayak single (1 person); sit-in with double paddle." },
    { term: "C1", meaning: "Canoe single (1 person); kneeling with single paddle." },
    { term: "C2", meaning: "Canoe double (2 people); discontinued Olympic 2017." },
    { term: "Gate", meaning: "Suspended pole pair marking course; must be paddled through cleanly." },
    { term: "Green gate", meaning: "Downstream gate; paddled with current direction." },
    { term: "Red gate", meaning: "Upstream gate; paddled against current direction." },
    { term: "Eddy", meaning: "Calm water pocket behind rock or bank; used for upstream gates." },
    { term: "Roll", meaning: "Eskimo roll — flipping capsized boat upright without exit." },
    { term: "Extreme Slalom (Kayak Cross)", meaning: "New 4-paddler head-to-head format; Paris 2024 debut." },
    { term: "ICF", meaning: "International Canoe Federation." },
    { term: "50-second penalty", meaning: "Missed or wrong-direction gate; effectively eliminates medal chance." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn kayaking basics on flat water", body: "Kayak school for stroke technique + roll + safety. Local outdoor programs." },
      { title: "Progress to easy whitewater", body: "Class I-II rivers with instruction. Build reading water skills over 1-2 years." },
      { title: "Join club with slalom program", body: "Slalom-specific coaching different from recreational whitewater. UK + France + Germany + Slovakia + Slovenia have strongest programs." },
    ]},
    { level: "intermediate", steps: [
      { title: "Compete at regional slalom races", body: "Club + regional slalom races; entry-level competition." },
      { title: "Buy proper slalom boat + paddle", body: "$2,000-4,000 for competitive K1 or C1 setup." },
      { title: "Cross-train fitness", body: "Cardiovascular + core + upper body strength. Swimming + cycling + gym work." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at ICF World Cup + World Championships", body: "Top-tier international circuit; qualification via national federation." },
      { title: "Target Olympic team", body: "National federation trials + World Cup ranking determine Olympic squad." },
      { title: "Extreme Slalom cross-training", body: "New Olympic event; ideal for K1 slalom paddlers + creative-water crossovers." },
    ]},
  ],

  faq: [
    { question: "Is Canoe Slalom in the Olympics?", answer: "Yes — debuted at Munich 1972, permanent from Barcelona 1992. Events: K1 men + women, C1 men + women (women C1 added Paris 2024), and NEW Extreme Slalom (Kayak Cross) added Paris 2024. Olympic venues: Lee Valley (London 2012), Deodoro (Rio 2016), Kasai (Tokyo 2020), Vaires-sur-Marne (Paris 2024)." },
    { question: "How are canoe slalom races scored?", answer: "Race time + gate penalties = final score. Touching gate pole = 2 seconds. Missing gate or wrong direction = 50 seconds (effectively eliminates medal chance). Lowest total score wins. Elite times: 90-110 seconds with 0-4 seconds of penalties." },
    { question: "What is Extreme Slalom (Kayak Cross)?", answer: "New Olympic event debut Paris 2024. 4 paddlers race head-to-head down whitewater course with jumps + rolls required. Combines slalom + freestyle + head-to-head racing (like Snowboard Cross). Elimination brackets. Fastest across finish wins. Adds spectator excitement to canoe events." },
    { question: "Who is the greatest canoe slalom athlete?", answer: "Multiple candidates: (1) Michal Martikán (Slovakia) — 5 Olympic medals across C1 events over 20-year career. (2) Tony Estanguet (France) — 3× Olympic gold C1 2000+2004+2012; longest men's career gold sequence. (3) Jessica Fox (Australia) — Olympic gold Paris 2024 + multiple World Championships; considered greatest women's paddler ever. (4) Peter Kauzer (Slovenia) — 4× K1 World Champion." },
    { question: "How is Canoe Slalom different from Canoe Sprint?", answer: "Canoe Slalom: whitewater course with gates; navigation + technique focus; ~90-110 sec races. Canoe Sprint: flatwater linear races (200m to 5000m); pure paddling speed; longer races. Different boats, different courses, different Olympic events. Slalom is technical + whitewater; sprint is speed + flatwater." },
  ],

  wikipediaTitle: "Canoe slalom",
  sources: [{ label: "ICF — Canoe Slalom", url: "https://canoeicf.com/disciplines/canoe-slalom", publisher: "ICF" }, { label: "Wikipedia — Canoe slalom", url: "https://en.wikipedia.org/wiki/Canoe_slalom", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

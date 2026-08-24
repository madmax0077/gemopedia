import type { Sport } from "@/lib/types";

export const diving: Sport = {
  id: "diving",
  slug: "diving",
  name: "Diving",
  officialName: "Diving",
  aliases: ["Springboard Diving", "Platform Diving", "Competitive Diving"],
  shortDescription:
    "Aquatic sport in which competitors jump or leap from a springboard (3 m) or platform (10 m), execute acrobatic manoeuvres in the air, and enter the water with a minimum of splash for judged scores.",
  longDescription:
    "Diving is the sport of jumping or falling into water from a raised platform or springboard, usually while performing acrobatic manoeuvres. It has been part of the modern Olympic Games since 1904. Competitors dive from a 1-metre or 3-metre springboard (springy diving board) or a 5-, 7.5-, or 10-metre platform (rigid concrete tower). Each dive is judged on approach, takeoff, elevation, execution of manoeuvres (twists, somersaults, tucks, pikes), and entry (near-vertical with minimal splash — the 'rip entry'). Divers execute up to 6 dives (springboard) or 6 dives (platform) per competition, each from a different 'dive group' (forward, back, reverse, inward, twisting, armstand). Scores from 7 judges are multiplied by the dive's 'degree of difficulty' (DD) to compute total points. Synchronised diving pairs two divers executing identical dives simultaneously — added to the Olympics in 2000.",

  category: "aquatic-sports",
  subCategory: "acrobatic aquatic",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: true,
  isParalympic: false,
  isProfessional: true,
  season: "summer",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "SE",
  regionOfOrigin: "Sweden and Germany (Gymnastics 'plunging' 19th c.)",
  estimatedOrigin: "Late 19th-century Swedish and German gymnastics 'water plunging'; first Olympic diving 1904 (St. Louis)",

  players: { min: 1, max: 2, note: "Individual events; synchro paired events (2 divers)." },
  field: {
    surfaceName: "diving pool",
    dimensions: "Pool 25 m × 21 m minimum; depth 5 m under 10 m platform. Springboard: 3 m or 1 m above water; Platform: 10 m (also 5, 7.5).",
    description: "Deep pool with springboards (3 m and 1 m) and rigid platforms at 5, 7.5, and 10 metres. Bubble machines aerate the water surface for softer landing practice.",
  },
  equipment: [
    { name: "Springboard", description: "Fibreglass or aluminium spring diving board, 4.9 m long, adjustable fulcrum." },
    { name: "Platform", description: "Rigid concrete or steel platform with non-slip surface, at 5 m, 7.5 m, or 10 m above the water." },
    { name: "Chamois", description: "Small towel divers use between dives to dry off — wet skin can cause 'grip slip' on hands." },
    { name: "Diving suit", description: "Tight-fitting swim briefs (men) or one-piece racing suit (women)." },
    { name: "Bubble system", description: "Underwater jets producing surface bubbles that soften practice landings." },
  ],
  duration: {
    approximateMinutes: 2,
    structure: "Each dive: takeoff + 1.4-1.8 sec airtime + entry = <5 sec. Round of 6 dives per finalist across ~90 minutes.",
    note: "Olympic springboard final: ~90-120 minutes across 6 dives per finalist.",
  },
  objective: "Execute technically difficult dives with clean form and a vertical, splashless entry — maximising judges' scores × difficulty coefficients.",
  matchStructure:
    "Divers perform a pre-declared list of dives across preliminary, semi-final, and final rounds. Each dive is judged by 7 judges on a 0-10 scale in half-point increments; the top two and bottom two are discarded, and the middle three are summed and multiplied by the dive's 'degree of difficulty' (DD) value. Cumulative score across all dives determines the ranking. In synchronised diving, 11 judges score: 5 execution (both divers) + 6 synchronisation.",

  basicRules: [
    { title: "Dive groups", body: "6 groups: Forward, Back, Reverse, Inward, Twisting, Armstand (platform only). Divers must select from different groups for their dive list." },
    { title: "Position", body: "Divers execute in one of 4 body positions: Straight (A), Pike (B), Tuck (C), Free (D). Each has a difficulty adjustment." },
    { title: "Judging (0-10)", body: "Each dive scored 0-10 in half-point steps: excellent (8.5-10), good (7-8.5), satisfactory (5-6.5), deficient (2.5-4.5), unsatisfactory (0.5-2), completely failed (0)." },
    { title: "Number of dives", body: "Men's 3 m springboard: 6 dives. Women's: 5 dives. Platform: 6 dives (men and women)." },
    { title: "Voluntary and required categories", body: "Dive lists must span multiple groups; in some formats, some dives are required and others are voluntary." },
  ],
  advancedRules: [
    { title: "Degree of Difficulty (DD)", body: "Every dive has a DD from ~1.2 (easiest) to 4.8 (hardest). Higher DD = higher scoring potential with same execution." },
    { title: "The 'rip' entry", body: "A near-vertical entry with hands flat overhead creating a distinctive 'ripping' sound and almost no splash — the hallmark of world-class divers." },
    { title: "Somersaults and twists", body: "Elite dives include 4½ somersaults, or 2½ somersaults with 3 twists — split-second timing." },
    { title: "Failed dive", body: "If a diver enters feet-first when the dive requires headfirst (or vice versa), or misses the required rotation, judges award very low scores or 0." },
    { title: "Balk / restart", body: "If a diver aborts a dive after starting the approach, referee may allow 1 restart with a 2-point deduction." },
  ],
  scoring: {
    summary: "Sum of (3 middle judges' scores × 0.6) × Degree of Difficulty for each dive.",
    breakdown: [
      { action: "Each judge scores 0-10 (half-point increments)", points: "0-10 per judge" },
      { action: "Discard high and low scores", points: "Keep 3 middle scores of 7 judges (or 5 middle of 11 for synchro)" },
      { action: "Sum × 0.6", points: "Normalisation factor" },
      { action: "Multiply by Degree of Difficulty (1.2-4.8)", points: "Final dive score" },
      { action: "Total across all dives (usually 5-6)", points: "Total = ranking" },
    ],
    winCondition: "Highest cumulative score across all dives wins.",
  },

  officiating: {
    officials: ["Referee", "7 Execution Judges (individual)", "11 Judges for Synchro (5 execution × 2 divers + 6 synchronisation)", "Announcer", "Scorer"],
    summary: "A panel of 7 judges scores each individual dive; scores are entered into computer, high-low discarded, middle three retained and multiplied by DD.",
  },
  governingBodies: [
    { name: "World Aquatics (formerly FINA)", acronym: "WA", founded: 1908, headquarters: "Lausanne, Switzerland", website: "https://www.worldaquatics.com/" },
    { name: "USA Diving", founded: 1980, headquarters: "Indianapolis, USA", website: "https://www.usadiving.org/" },
    { name: "British Diving (Aquatics GB)", founded: 1901, headquarters: "London, UK", website: "https://www.britishswimming.org/discover-aquatics/diving/" },
  ],
  majorCompetitions: [
    { name: "Olympic Games diving events", frequency: "quadrennial", founded: 1904, region: "worldwide" },
    { name: "World Aquatics Championships", frequency: "biennial (annual since 2022)", founded: 1973, region: "worldwide" },
    { name: "FINA Diving World Cup", frequency: "annual", founded: 1979, region: "worldwide" },
    { name: "FINA Diving Grand Prix / World Series", frequency: "annual multi-stage", founded: 2007, region: "worldwide (6 legs)" },
  ],
  countriesPlayed: ["CN", "US", "GB", "MX", "AU", "RU", "GE", "IT", "DE", "MY", "CA", "UA", "KR", "JP"],
  famousAthletes: [
    "Greg Louganis (USA) — 4× Olympic gold; iconic 1988 Seoul comeback after head strike",
    "Fu Mingxia (China) — 4× Olympic gold; youngest ever World Champion at 12",
    "Guo Jingjing (China) — 4× Olympic gold; dominant 2000s 3 m springboard",
    "Wu Minxia (China) — 5× Olympic gold, most-decorated diver of all time",
    "Chen Ruolin (China) — 5× Olympic gold, 10 m platform",
    "Tom Daley (Great Britain) — 2020 Olympic gold in 10 m synchro (with Matty Lee)",
    "Dmitri Sautin (Russia) — 8× Olympic medallist, 5 different Games",
    "David Boudia (USA) — 2012 Olympic gold 10 m platform",
  ],
  records: [
    { title: "Most Olympic diving golds", holder: "Wu Minxia (China)", value: "5 (2004-2016)", year: 2016 },
    { title: "Highest single-dive score (Olympic final)", holder: "Various", value: "102+ (armstand back triple somersault 3½ twist, DD 3.9-4.1)" },
    { title: "Highest platform used competitively", holder: "N/A — Olympic max is 10 m", value: "10 m (Olympic); cliff diving uses 27 m" },
    { title: "First to win 4 consecutive World springboard golds", holder: "Guo Jingjing (China)", value: "2001, 2003, 2005, 2007", year: 2007 },
  ],

  variants: ["springboard-diving", "platform-diving", "synchronised-diving", "cliff-diving", "high-diving", "mixed-team-diving"],
  relatedSports: ["cliff-diving", "high-diving", "artistic-swimming", "trampoline"],

  skills: [
    "explosive vertical power (takeoff)",
    "body-position control (tuck, pike, straight)",
    "aerial spatial awareness",
    "entry-line precision",
    "flexibility and core strength",
    "mental composure",
    "somersault and twist timing",
  ],
  strategies: [
    { title: "Difficulty balance", body: "Choose dives with high DD but consistently executable — a botched 3.8 DD often scores less than a clean 3.2 DD." },
    { title: "Save your best for last (finals)", body: "Order dives to build momentum; end on a dive you know you can nail under pressure." },
    { title: "Perfect the entry", body: "Judges heavily weight the entry. A great rip can lift a 6.5 dive to 7.5+." },
    { title: "Consistency over spectacle", body: "Championship winners rarely have the highest DD — they have the lowest variance in execution." },
  ],

  terminology: [
    { term: "Springboard", meaning: "Flexible diving board, 1 m or 3 m; used for the springboard events." },
    { term: "Platform", meaning: "Rigid diving platform; 5 m, 7.5 m, or 10 m; the 10 m is Olympic." },
    { term: "DD (Degree of Difficulty)", meaning: "Numerical difficulty rating for each dive (1.2-4.8); multiplies final score." },
    { term: "Rip entry", meaning: "Vertical, splashless entry — hallmark of elite divers." },
    { term: "Tuck (C)", meaning: "Body folded at hips and knees; hands hold shins." },
    { term: "Pike (B)", meaning: "Body folded at hips; legs straight; hands touch shins." },
    { term: "Straight / Layout (A)", meaning: "Body fully extended; hardest position for somersaults." },
    { term: "Free (D)", meaning: "Combination position — used for twisting dives." },
    { term: "Armstand", meaning: "Dive begins from a handstand on the platform edge." },
    { term: "Reverse", meaning: "Facing forward on takeoff, rotate backward toward the board." },
    { term: "Inward", meaning: "Facing backward on takeoff, rotate forward toward the board." },
    { term: "Balk", meaning: "Halting the dive after initiating; penalised or allowed one restart." },
    { term: "Synchro", meaning: "Two divers executing identical dives simultaneously." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Master a straight standing dive", body: "From poolside then from 1 m board — hands together overhead, entry vertical." },
      { title: "Learn the tuck and pike", body: "Practice tuck and pike positions on dryland trampoline before applying in water." },
      { title: "Forward roll off 1 m", body: "First rotation dive; from 1 m springboard, tuck forward somersault." },
      { title: "Backward take-off", body: "Learn safe backward jump entry before adding rotations." },
    ] },
    { level: "intermediate", steps: [
      { title: "2½ forward somersault (pike)", body: "Building block of competitive diving; requires strong core and controlled tuck." },
      { title: "Twisting dives", body: "Introduce ½ and 1 twists off 1 m and 3 m springboard." },
      { title: "Basic platform work", body: "Progress from 3 m to 5 m to 7.5 m platform; then 10 m for advanced." },
      { title: "Judging awareness", body: "Learn to critique your entry angle, splash, and body line via video review." },
    ] },
    { level: "advanced", steps: [
      { title: "4½ somersault dives", body: "Elite 10 m dives (4½ forward, 3½ back with 2 twists) — requires elite spatial awareness." },
      { title: "Synchro training", body: "Perfectly matched takeoff and airborne timing with a partner." },
      { title: "Competitive tour", body: "USA Diving / World Aquatics Grand Prix events; NCAA collegiate diving in USA is a common pipeline." },
    ] },
  ],
  faq: [
    { question: "How high is the Olympic diving platform?", answer: "10 metres (about 33 feet) — approximately a 3-story building. Divers hit the water at 55-60 km/h (34-37 mph)." },
    { question: "What are dive 'positions'?", answer: "4 positions: Straight (body extended), Pike (bent at hips), Tuck (bent hips + knees, hands on shins), Free (used for twisting dives)." },
    { question: "How does synchronised diving get judged?", answer: "11 judges: 5 score execution of Diver 1, 5 score Diver 2, and 6 score synchronisation (takeoff timing, height matching, rotation matching, entry timing)." },
    { question: "What is the 'rip'?", answer: "A near-perfect vertical entry with hands flat overhead that creates a distinctive 'ripping' sound and almost zero splash — the hallmark of world-class divers." },
    { question: "Which country dominates diving?", answer: "China — dominant since the 1990s. China has won 47+ Olympic diving golds, more than the rest of the world combined." },
    { question: "How dangerous is diving?", answer: "Injuries occur — Greg Louganis famously struck his head on the 3 m board at 1988 Seoul but returned to win gold. Modern diving pools have bubble systems and coaches enforce technique to minimise risk." },
  ],

  wikipediaTitle: "Diving (sport)",
  sources: [
    { label: "Wikipedia — Diving (sport)", url: "https://en.wikipedia.org/wiki/Diving_(sport)", publisher: "Wikipedia" },
    { label: "World Aquatics — Diving", url: "https://www.worldaquatics.com/diving", publisher: "World Aquatics" },
    { label: "USA Diving", url: "https://www.usadiving.org/", publisher: "USA Diving" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

import type { Sport } from "@/lib/types";

export const figureSkating: Sport = {
  id: "figure-skating",
  slug: "figure-skating",
  name: "Figure Skating",
  officialName: "Figure Skating",
  aliases: ["Ice skating (artistic)"],
  shortDescription:
    "Winter sport where skaters perform jumps, spins, step sequences and lifts on ice, judged on technical difficulty and artistic execution across four disciplines.",
  longDescription:
    "Figure skating is a winter sport in which individuals, pairs or ice-dancers perform on ice-skates on a rink. Elite competition has four disciplines: men's singles, women's singles, pair skating (male-female pair with lifts and throw jumps), and ice dance (male-female pair emphasising rhythm and unison over jumps). Programs — short (2:40) and free (4:00 for singles, 4:00 for pairs and ice dance) — are set to music and scored on the ISU Judging System (IJS), which awards a technical score (element difficulty and execution) and a component score (skating skills, transitions, performance, composition and interpretation). Figure skating became an Olympic sport in 1908 (London Summer Games) and has been part of the Winter Games since Chamonix 1924.",

  category: "winter-sports",
  subCategory: "artistic ice sport",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: true,
  isParalympic: false,
  isProfessional: true,
  season: "winter",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "Britain / Vienna (modern refinements); Sweden (school figures)",
  estimatedOrigin: "First championships 1882 (Vienna); Olympic 1908 (Summer, London); Winter Olympic 1924",

  players: { min: 1, max: 2, note: "Singles = 1 skater; pairs and ice dance = 2 skaters (one male, one female traditionally)." },
  field: {
    surfaceName: "ice rink",
    dimensions: "Olympic size: 60 m × 30 m (200 × 100 ft); NHL size: 60 m × 26 m — championships use ISU-approved rinks with clear ice and quality lighting.",
    description: "Enclosed indoor ice sheet with white boards, minimum 4-cm clear ice. Judges' area at rink-side; kiss-and-cry booth for post-program scoring.",
  },
  equipment: [
    { name: "Figure skates", description: "Rigid leather boots with toe picks on the blade — pick-assisted jumps and precise blade edges." },
    { name: "Costumes", description: "Custom-designed outfits that match the music; must not be theatrical or overly revealing per ISU rules." },
    { name: "Music", description: "Choreographed program music, 2:40 short / 4:00 free (singles); vocal music allowed since 2014." },
    { name: "Blade covers", description: "Rubber guards for walking off the ice.", optional: true },
    { name: "Boot supports / punch-outs", description: "Cushioning to relieve pressure points on the boot.", optional: true },
  ],
  duration: {
    approximateMinutes: 45,
    structure: "Short program (2:40) + free skate (4:00) — total on-ice performance ~7 minutes per skater; full competition sessions run 90-180 min.",
    note: "Ice dance has a rhythm dance (2:50) and free dance (4:00). Pairs are similar to singles but with lifts and throw jumps.",
  },
  objective: "Earn the highest combined score across the short program and free skate through technical elements (jumps, spins, steps) and program components (skating skills, artistry).",
  matchStructure:
    "Competitors are drawn in a starting order (skate order after short program is set by short-program result, in reverse). Each program is scored live: technical panel identifies each element and level (1-4 for spins/steps), 9 judges award Grade of Execution (GOE) -5 to +5 for each element and 0-10 component scores. Technical Score + Program Component Score = Segment Score; Short + Free = Total Score.",

  basicRules: [
    { title: "Two-program format", body: "Short program (specific required elements) + Free skate (more freedom). Total score decides." },
    { title: "Well-balanced short program", body: "Singles must include 7 elements: 3 jumps (including a jump combination and a solo jump), 3 spins, and a step sequence." },
    { title: "Well-balanced free skate", body: "Singles must include 7 jumps (women) / 7 jumps (men) plus 3 spins and 2 step/choreo sequences." },
    { title: "Jump repetition", body: "Only one triple or quadruple jump of each type may be attempted twice, and only in combination or sequence." },
    { title: "Time limits", body: "Programs must run within 10 seconds either side of the specified duration; over-time deducts 1 point per 5 s." },
    { title: "Music", body: "Vocal music allowed since 2014; skaters choose their own music; ice dance has assigned rhythm categories each season." },
    { title: "Falls", body: "Each fall = -1 point deduction from the segment total; deep edge falls that don't require the hand may not be scored as a fall." },
  ],
  advancedRules: [
    { title: "GOE (Grade of Execution)", body: "Judges score each element -5 to +5 based on execution, entry difficulty, height, air position, exit position." },
    { title: "Levels for spins & steps", body: "Technical panel assigns Level 1-4 based on completed features; Level 4 has the highest base value." },
    { title: "Under-rotation & downgrade", body: "A jump missing 90°-180° of rotation is 'under-rotated' (base value ×0.7); missing more than 180° is 'downgraded' to a lower jump." },
    { title: "Coefficients", body: "Free skate technical/component scores are worth more than short program to balance the two segments' contributions." },
    { title: "Referee's authority", body: "Referee may deduct for costume/prop violations, time overrun, and interruptions." },
  ],
  scoring: {
    summary: "Total Score = Short Segment + Free Segment; each Segment = Technical Element Score + Program Component Score − deductions.",
    breakdown: [
      { action: "Technical element (jumps, spins, steps)", points: "Base value ± GOE", note: "e.g., Quad Salchow base 9.7 + GOE up to +5." },
      { action: "Program Components (5 categories)", points: "0-10 each × 5 with factor", note: "Skating Skills, Transitions, Performance, Composition, Interpretation." },
      { action: "Fall deduction", points: "-1", note: "Per fall." },
      { action: "Time deduction", points: "-1 per 5 seconds over/under" },
    ],
    winCondition: "Highest total score across both programs wins.",
  },
  penalties: [
    { title: "Fall deduction", body: "-1 per fall." },
    { title: "Time deduction", body: "-1 for every 5 seconds over/under the required program length." },
    { title: "Costume prop deduction", body: "-1 if a prop or costume element is dropped on the ice." },
    { title: "Interruption", body: "-5 for a program interruption more than 10 seconds; may cause disqualification if exceeding 3 minutes." },
    { title: "Wardrobe violation", body: "-1 for costumes violating rules on modesty or theatricality." },
  ],

  officiating: {
    officials: ["Referee", "Technical Controller", "Two Technical Specialists", "Nine Judges", "Data & Video Operator"],
    summary: "Technical Panel (Controller + Specialists) identifies each element and its level. Nine Judges independently score GOE and Components; highest and lowest are dropped, remaining seven averaged. Referee ensures fair play and applies deductions.",
  },
  governingBodies: [
    { name: "International Skating Union", acronym: "ISU", founded: 1892, headquarters: "Lausanne, Switzerland", website: "https://www.isu.org" },
    { name: "U.S. Figure Skating", founded: 1921, headquarters: "Colorado Springs, USA", website: "https://www.usfigureskating.org" },
    { name: "Japan Skating Federation", founded: 1929, headquarters: "Tokyo, Japan" },
  ],
  majorCompetitions: [
    { name: "Winter Olympic Games", frequency: "quadrennial", founded: 1908, region: "worldwide" },
    { name: "ISU World Figure Skating Championships", frequency: "annual", founded: 1896, region: "worldwide" },
    { name: "ISU European Championships", frequency: "annual", founded: 1891, region: "Europe" },
    { name: "Four Continents Championships", frequency: "annual", founded: 1999, region: "Asia/Americas/Africa/Oceania" },
    { name: "ISU Grand Prix Final", frequency: "annual", founded: 1995, region: "worldwide (elite invitational)" },
  ],
  countriesPlayed: ["US", "RU", "JP", "CA", "CN", "KR", "FR", "IT", "DE", "GB", "SE", "FI", "NO", "AT", "UZ"],
  famousAthletes: [
    "Yuzuru Hanyu",
    "Nathan Chen",
    "Evgeni Plushenko",
    "Alexei Yagudin",
    "Michelle Kwan",
    "Katarina Witt",
    "Kim Yuna",
    "Alina Zagitova",
    "Sonja Henie",
    "Ilia Malinin",
    "Torvill and Dean",
    "Meryl Davis & Charlie White",
  ],
  records: [
    { title: "Highest men's total score (post-2018 scale)", holder: "Ilia Malinin (USA)", value: "333.76 (2025 Worlds)", year: 2025 },
    { title: "First quadruple axel in competition", holder: "Ilia Malinin (USA)", value: "4A (US Classic 2022)", year: 2022 },
    { title: "Most Olympic gold medals (singles)", holder: "Sonja Henie / Karl Schäfer", value: "3 each (Henie 1928-36)", year: 1936 },
    { title: "Highest short program score (women)", holder: "Kim Yuna", value: "78.50 (Vancouver 2010, old system)", year: 2010 },
  ],

  variants: ["mens-singles", "womens-singles", "pair-skating", "ice-dance", "synchronised-skating", "adult-figure-skating"],
  relatedSports: ["speed-skating", "short-track-speed-skating", "ice-dance", "synchronised-skating"],

  skills: [
    "edge control (inside / outside / forward / back)",
    "jump rotation speed",
    "landing softness",
    "spin centring",
    "artistic interpretation",
    "musicality",
    "stamina (4-minute free skate at max effort)",
  ],
  strategies: [
    { title: "Front-load or back-load the free skate", body: "Elite skaters place biggest jumps in the second half of the program for a 10% bonus (removed in 2022 but strategy varies)." },
    { title: "Combination stacking", body: "Adding a triple to a triple, or a quadruple + triple loop, maximises base value in a single element." },
    { title: "Element level maximisation", body: "Spin and step sequence Level 4 achieved by executing 5+ specific features; coaches drill this in practice." },
    { title: "Program balance", body: "Choreography weaves connecting steps into the program so skating skills score is maximised throughout." },
  ],

  terminology: [
    { term: "Axel", meaning: "Only jump taking off from a forward edge; adds an extra half-rotation (a 'triple' Axel = 3.5 rotations)." },
    { term: "Salchow", meaning: "Toe-assisted back-edge jump named for Ulrich Salchow." },
    { term: "Toe loop", meaning: "Toe-assisted back-outside edge jump — the base jump for most quadruples." },
    { term: "Loop", meaning: "Back-outside edge takeoff, no toe pick." },
    { term: "Flip", meaning: "Toe-assisted back-inside edge jump." },
    { term: "Lutz", meaning: "Toe-assisted back-outside edge jump (from a counter-rotational entry)." },
    { term: "Quad", meaning: "A jump with four rotations in the air (e.g., quad Salchow = 4S)." },
    { term: "GOE", meaning: "Grade of Execution — judges' -5 to +5 rating for each element." },
    { term: "Combination", meaning: "Two jumps landed back-to-back on the same foot with no steps in between." },
    { term: "Sit spin", meaning: "Spin in a low sitting position with the free leg extended." },
    { term: "Layback spin", meaning: "Upright spin with the back arched backward — usually performed by women." },
    { term: "Death spiral", meaning: "Pairs element where the man pivots and the woman circles low with feet on the ice." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Ice basics", body: "Learn to fall safely, stand, glide forward and backward on both feet." },
      { title: "Basic edges", body: "Forward and back outside/inside edges — the foundation of every element." },
      { title: "Two-foot spin", body: "Small centred spin on both feet — precursor to one-foot spins." },
      { title: "Bunny hop and waltz jump", body: "First jump — a half-rotation waltz jump on a forward outside edge." },
    ] },
    { level: "intermediate", steps: [
      { title: "Single jumps", body: "Salchow, toe loop, loop, flip, Lutz, and axel." },
      { title: "Advanced spins", body: "Sit spin, camel spin, layback spin — hold 8+ revolutions." },
      { title: "Step sequences", body: "Straight-line, circular, or serpentine sequences of turns and steps." },
      { title: "Choreographed program", body: "First program with music — 1:30 short with 4-5 elements." },
    ] },
    { level: "advanced", steps: [
      { title: "Double and triple jumps", body: "Add rotations one at a time; the double axel (2.5 rotations) is often the toughest early milestone." },
      { title: "Combination jumps", body: "Triple-triple or triple-double combinations to maximise base value." },
      { title: "Program building", body: "Craft the well-balanced short and free per ISU technical requirements; work with a choreographer." },
    ] },
  ],
  faq: [
    { question: "Why is the Axel so hard?", answer: "It's the only jump with a forward take-off, so it requires an extra half-rotation to land backward — a 'triple Axel' is really 3.5 rotations in the air." },
    { question: "What are the 5 program components?", answer: "Skating Skills, Transitions, Performance, Composition, and Interpretation of the Music (formerly 'Choreography')." },
    { question: "How many quads can a skater do in one program?", answer: "In principle unlimited, but each type can only be attempted twice (once solo, once in combination). Elite men's programs typically feature 5-6 quads." },
    { question: "Do skaters really cry in the 'kiss and cry'?", answer: "Yes — it's a small booth where skaters and coaches wait for scores; emotions run high both ways." },
    { question: "Can two skaters tie?", answer: "Yes — the ISU Judging System averages 7 of 9 judges' scores, so ties are possible; each skater keeps the medal." },
  ],

  wikipediaTitle: "Figure skating",
  sources: [
    { label: "Wikipedia — Figure skating", url: "https://en.wikipedia.org/wiki/Figure_skating", publisher: "Wikipedia" },
    { label: "ISU Judging System — Special Regulations", url: "https://www.isu.org/figure-skating/rules/fsk-special-regulations-technical-rules", publisher: "International Skating Union" },
    { label: "U.S. Figure Skating Rulebook", url: "https://www.usfigureskating.org", publisher: "U.S. Figure Skating" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

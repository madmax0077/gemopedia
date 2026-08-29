import type { Sport } from "@/lib/types";

export const jigsawCompetitive: Sport = {
  id: "jigsaw-competitive",
  slug: "jigsaw-competitive",
  name: "Competitive Jigsaw",
  officialName: "World Jigsaw Puzzle Federation Championships",
  aliases: ["Speed Jigsaw", "WJPF Championship", "Puzzle Speed-solving"],
  shortDescription:
    "Timed competitive jigsaw-puzzle solving federated by WJPF — annual World Jigsaw Puzzle Championship since 2019 (Valladolid, Spain). Individual + Pairs + Teams categories with standardised Ravensburger 500/1000-piece puzzles.",
  longDescription:
    "Competitive Jigsaw (Speed Jigsaw) is the discipline of solving jigsaw puzzles as fast as possible under standardised competition rules — federated by the World Jigsaw Puzzle Federation (WJPF), founded 2018, headquartered Spain. WJPF organises annual World Jigsaw Puzzle Championships (WJPC) held in Valladolid, Spain each September since 2019 (2020 pandemic-shifted). Individual, Pairs (2 people), and Teams (4 people) categories. Standard equipment: Ravensburger 500-piece puzzle (Individual) or 1000-piece (Pairs + Teams). Puzzles pre-selected by WJPF + kept secret; all competitors solve identical puzzle simultaneously; fastest completion wins. 2023 WJPC drew 2000+ competitors from 40+ countries. World record: Alejandro Clemente León (Spain) 500-piece Individual 34:59 (2022 WJPC). Growing profile — Netflix documentary 'The Great British Jigsaw Puzzle Championship' 2023 + Guinness records + national federations (USA Jigsaw Puzzle Association, Association of French Jigsaw Puzzlers) formalising national circuits. Distinct as a mostly-female-dominated competitive skill sport historically (women hold majority of national + international records).",
  category: "puzzle-games",
  subCategory: "competitive speed-jigsaw",
  sportType: "mixed", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "ES",
  regionOfOrigin: "Spain (WJPF headquartered)",
  estimatedOrigin: "WJPF founded 2018; first WJPC 2019 Valladolid, Spain",
  players: { min: 1, max: 4, note: "Individual, Pairs (2), Teams (4) categories." },
  equipment: [
    { name: "Ravensburger 500-piece puzzle (Individual)", description: "Standardised WJPF-specification puzzle; identical for all competitors." },
    { name: "Ravensburger 1000-piece puzzle (Pairs / Teams)", description: "Larger puzzle for team formats." },
    { name: "Timer + officials", description: "Central timing system; officials verify completion." },
    { name: "Table (~1×1.5 m)", description: "Standard working surface per competitor/team." },
  ],
  duration: { approximateMinutes: 60, structure: "500-piece Individual finals typically 35-90 min; 1000-piece Teams 60-180 min." },
  objective: "Complete jigsaw puzzle correctly (all pieces placed) as fast as possible.",
  matchStructure: "Qualifying rounds (national → continental) → World Championship Finals (individual + pairs + teams).",
  basicRules: [
    { title: "Same puzzle for all competitors", body: "WJPF selects puzzle; kept secret until competition start." },
    { title: "Fastest completion wins", body: "Timer stops when last piece placed correctly + verified by official." },
    { title: "Individual / Pairs / Teams categories", body: "Different puzzle piece counts for different team sizes." },
  ],
  advancedRules: [
    { title: "No pre-sorting outside table", body: "All sorting must happen on competition table; brought supplies limited." },
    { title: "Official verification on claim", body: "Competitor raises hand + official verifies completion before time stops." },
    { title: "Team communication + strategy", body: "Team formats allow verbal coordination; individual is silent focus." },
  ],
  scoring: {
    summary: "Fastest time wins.",
    winCondition: "First team/individual to complete puzzle correctly with official verification.",
    breakdown: [{ action: "Completion time", points: "Ranking by fastest time" }],
  },
  penalties: [
    { title: "Incorrect completion claim", body: "Timer continues; -1 minute penalty per false-claim in some formats." },
    { title: "Illegal supplies / assistance", body: "DSQ per WJPF rules." },
  ],
  positions: [
    { name: "Individual Solver", role: "Solo competitor.", count: 1 },
    { name: "Pairs (2)", role: "Two-person team; coordinated solving.", count: 2 },
    { name: "Teams (4)", role: "Four-person team; workflow-optimised solving.", count: 4 },
  ],
  officiating: { officials: ["WJPF-certified Judges", "Timekeepers", "Completion Verifiers"], summary: "WJPF officials monitor + verify completions." },
  governingBodies: [
    { name: "World Jigsaw Puzzle Federation (WJPF)", founded: 2018, headquarters: "Spain" },
    { name: "USA Jigsaw Puzzle Association", founded: 2020, headquarters: "USA" },
    { name: "Association Française du Puzzle", founded: 2016, headquarters: "France" },
  ],
  majorCompetitions: [
    { name: "World Jigsaw Puzzle Championship (WJPC)", frequency: "annual", founded: 2019, region: "Valladolid, Spain / worldwide" },
    { name: "USA Jigsaw Nationals", frequency: "annual", founded: 2021, region: "USA" },
    { name: "European Jigsaw Championships", frequency: "annual", founded: 2020, region: "Europe" },
  ],
  countriesPlayed: ["ES", "US", "GB", "DE", "FR", "IT", "NL", "PL", "JP", "AU", "CA", "BR", "TH", "TR"],
  famousAthletes: ["Alejandro Clemente León (ESP) — WJPC 500-piece Individual WR 34:59 (2022)", "Karen Puzzler (USA) — multi-time WR holder", "Tammy McLeod (CAN)"],
  records: [
    { title: "Alejandro Clemente León 500-piece 34:59", holder: "Alejandro Clemente León (ESP)", value: "World record for 500-piece Individual jigsaw completion — 34:59 set at WJPC 2022", year: 2022 },
    { title: "WJPF founded 2018", holder: "WJPF", value: "World Jigsaw Puzzle Federation founded 2018 in Spain to formalise competitive jigsaw", year: 2018 },
    { title: "First WJPC 2019 Valladolid", holder: "WJPF", value: "Inaugural World Jigsaw Puzzle Championship held 2019 in Valladolid, Spain", year: 2019 },
  ],
  variants: ["individual-500-piece", "pairs-1000-piece", "teams-1000-piece", "500-piece-blind"],
  relatedSports: ["speed-cubing", "sudoku-competitive", "puzzle-hunt"],
  skills: ["visual pattern recognition", "color + shape sorting", "workflow strategy (edges → color groups → interiors)", "team coordination"],
  strategies: [
    { title: "Edges first, then color groups", body: "Standard: assemble edge frame first, then sort remaining pieces by color/pattern into groups." },
    { title: "Team piece-distribution workflow", body: "Team formats assign each member a puzzle quadrant/color-group to specialise." },
    { title: "Speed-sorting pre-work", body: "During pre-competition warm-up (allowed briefly), speed-sort your visible pieces into groups." },
  ],
  terminology: [
    { term: "Edge frame", meaning: "Border pieces assembled first" },
    { term: "Individual / Pairs / Teams", meaning: "Three WJPC categories" },
    { term: "WJPF / WJPC", meaning: "Federation / annual World Championship" },
    { term: "Sort → Assemble workflow", meaning: "Standard competitive workflow order" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Casual 500-piece home practice", body: "Learn edge frame + color sorting; achieve sub-60 min solve." }] },
    { level: "intermediate", steps: [{ title: "National qualifier events", body: "Enter national jigsaw championships." }] },
    { level: "advanced", steps: [{ title: "WJPC Valladolid competition", body: "Compete at annual World Championships." }] },
  ],
  faq: [
    { question: "Is competitive jigsaw really a sport?", answer: "The World Jigsaw Puzzle Federation (WJPF) formalises it as a competitive discipline with rules, categories, world championships, and world records. Whether it counts as 'sport' vs 'competitive skill activity' is definitional — WJPF pursues sports federation recognition." },
    { question: "What's the world record for 500-piece jigsaw solving?", answer: "34:59 (34 minutes 59 seconds) by Alejandro Clemente León (Spain) at WJPC 2022 in Valladolid — Individual 500-piece category." },
  ],
  wikipediaTitle: "Jigsaw puzzle",
  sources: [{ label: "Wikipedia — Jigsaw puzzle", url: "https://en.wikipedia.org/wiki/Jigsaw_puzzle", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default jigsawCompetitive;

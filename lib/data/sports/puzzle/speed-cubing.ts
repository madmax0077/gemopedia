import type { Sport } from "@/lib/types";

export const speedCubing: Sport = {
  id: "speed-cubing",
  slug: "speed-cubing",
  name: "Speedcubing",
  officialName: "Speedcubing (WCA)",
  aliases: ["Speed Cubing", "Rubik's Cube Speedsolving", "3×3 Cube"],
  shortDescription:
    "Competitive solving of Rubik's Cube (and other twisty puzzles) as fast as possible under World Cube Association (WCA) rules. Current 3×3 world record ~3.13 sec (Max Park, 2023). WCA sanctions 1000+ events annually with 20+ puzzle categories.",
  longDescription:
    "Speedcubing is the competitive discipline of solving Rubik's Cube + other twisty puzzles as fast as possible, federated globally by the World Cube Association (WCA). WCA founded 2004 by Ron van Bruchem + Tyson Mao; sanctions 1000+ competitions annually across 100+ countries. Standard event: 3×3 Cube Single (fastest solve of one attempt) + 3×3 Average of 5 (drop best + worst of 5 attempts, average middle 3). Current 3×3 Single world record: 3.13 seconds by Max Park (USA, 2023). 3×3 Average WR: 4.86 seconds by Yiheng Wang (China, 2023). 20+ WCA events: 2×2, 4×4, 5×5, 6×6, 7×7, 3×3 Blindfolded, Multi-Blindfold (memorise + solve many cubes blindfolded), 3×3 One-Handed, 3×3 Feet (discontinued 2020), Pyraminx (triangular tetrahedron), Megaminx (dodecahedron), Skewb, Square-1, Clock, plus specialised 4BLD, 5BLD, Multi-BLD variants. Modern methods: CFOP/Fridrich (Cross → F2L → OLL → PLL) is standard 3×3 method; Roux + ZZ + Petrus are alternatives. Speedcubes are custom-designed (GAN, MoYu, QiYi, Yuxin brands) with lubricated internals + magnetic core alignment. Massive worldwide community.",
  category: "puzzle-games",
  subCategory: "twisty puzzle competitive solving",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "HU",
  regionOfOrigin: "Global (Rubik's Cube invented Hungary 1974; WCA founded USA/NL 2004)",
  estimatedOrigin: "Rubik's Cube invented 1974 by Ernő Rubik (Hungary); speedcubing community emerged 1981 first WC; WCA founded 2004",
  players: { min: 1, max: 1, note: "Individual event; team relay + tag-team formats exist informally." },
  equipment: [
    { name: "Speedcube (3×3, 4×4, etc.)", description: "Custom-designed lubricated magnetic speedcube — GAN, MoYu, QiYi brands dominate." },
    { name: "Timer (Stackmat)", description: "Precision touch-pad timer approved by WCA for competition." },
    { name: "Scramble sheet", description: "WCA-generated scramble sequence displayed to competitor before solve." },
    { name: "Inspection cover", description: "Sheet to hide cube during 15-sec inspection window." },
  ],
  duration: { approximateMinutes: 60, structure: "Individual solve seconds to minutes; competition day 3-8 hrs across events." },
  objective: "Solve puzzle from scrambled state as fast as possible.",
  matchStructure: "Rounds: 5 solves per round for 3×3 (best + worst dropped, middle 3 averaged). Multiple rounds narrow field to final.",
  basicRules: [
    { title: "15-second inspection before solve", body: "Competitor inspects scrambled cube for up to 15 seconds before starting timer." },
    { title: "Timer starts on both-hands-off; stops on both-hands-back", body: "Stackmat timer detects hand-lift + hand-return; measures precisely to milliseconds." },
    { title: "Solve complete when cube is fully solved (all faces one color)", body: "Cube must be visually solved when timer stops; misalignment > 45° = +2 sec penalty." },
  ],
  advancedRules: [
    { title: "DNF (Did Not Finish) rules", body: "Failed solve (unsolved, dropped cube, etc.) = DNF (worst possible score, dropped from average)." },
    { title: "+2 second penalty (misalignment)", body: "Cube face misaligned > 45° at stop = +2 sec added." },
    { title: "Method choice (CFOP/Roux/ZZ)", body: "No method restriction; competitors choose CFOP (most common), Roux, ZZ, Petrus, or blindsolving." },
  ],
  scoring: {
    summary: "Single (fastest solve) + Average of 5 (drop best + worst; average middle 3). Best-average ranks the round.",
    winCondition: "Fastest Average of 5 in final round wins; ties broken by Single time.",
    breakdown: [{ action: "Single solve", points: "Time in seconds (fastest wins)" }, { action: "Average of 5 (middle 3)", points: "Averaged time (fastest wins ranking)" }],
  },
  penalties: [
    { title: "+2 sec (misalignment)", body: "Cube face misaligned > 45° at stop = +2 sec." },
    { title: "DNF (drop, unsolved, etc.)", body: "Solve counted as DNF for averaging." },
    { title: "Illegal inspection (over 15 sec)", body: "First offense = +2 sec; second = DNF." },
  ],
  positions: [{ name: "Speedcuber", role: "Solo competitor.", count: 1 }],
  officiating: { officials: ["WCA-certified Judges", "Scramblers", "Runners", "Delegate (senior WCA official per competition)"], summary: "WCA-certified judges validate each solve; delegate oversees full competition." },
  governingBodies: [
    { name: "World Cube Association (WCA)", founded: 2004, headquarters: "Netherlands (registered) / global volunteer network" },
  ],
  majorCompetitions: [
    { name: "WCA World Championship", frequency: "biennial", founded: 2003, region: "worldwide" },
    { name: "WCA Continental Championships (Euro / Asian / African / North American / South American / Oceanic)", frequency: "biennial", founded: 2004, region: "continental" },
    { name: "Rubik's Cube World Championship (Rubik's brand, 1982 original)", frequency: "historical", founded: 1982, region: "worldwide" },
  ],
  countriesPlayed: ["global — 100+ countries WCA-registered"],
  famousAthletes: ["Max Park (USA) — 3×3 SR + former WR 3.13 sec", "Yiheng Wang (CHN) — 3×3 average WR 4.86 sec", "Feliks Zemdegs (AUS) — multi-time World Champion + community legend", "Yusheng Du (CHN) — former 3.47 sec WR", "Tymon Kolasiński (POL) — 3×3 Average WR holder"],
  records: [
    { title: "Max Park 3×3 Single 3.13 sec (2023)", holder: "Max Park (USA)", value: "Current WCA 3×3 Single world record 3.13 seconds set by Max Park at Pride in Long Beach 2023", year: 2023 },
    { title: "Yiheng Wang 3×3 Average 4.86 sec (2023)", holder: "Yiheng Wang (CHN)", value: "Current WCA 3×3 Average of 5 world record 4.86 seconds by Yiheng Wang", year: 2023 },
    { title: "WCA founded 2004", holder: "Ron van Bruchem + Tyson Mao", value: "World Cube Association founded 2004 to standardise speedcubing competition rules", year: 2004 },
    { title: "First WC 1982", holder: "Rubik's Cube World Championship", value: "First World Championship held Budapest 1982 by Rubik's brand — Minh Thai (USA) won with 22.95 sec", year: 1982 },
  ],
  variants: ["3x3-cube", "4x4-cube", "5x5-cube", "6x6-cube", "7x7-cube", "2x2-cube", "3x3-one-handed", "3x3-blindfolded", "multi-blindfolded", "pyraminx", "megaminx", "skewb", "square-1", "clock"],
  relatedSports: ["rubiks-cube", "puzzle-hunt", "sudoku-competitive"],
  skills: ["algorithm memorisation (100+ algorithms)", "finger-trick execution speed", "look-ahead pattern reading", "match temperament + tactility"],
  strategies: [
    { title: "CFOP method mastery (100+ algorithms)", body: "CFOP requires 78 PLL + 57 OLL algorithms — memorising + finger-training all is core competitive requirement." },
    { title: "Look-ahead F2L", body: "During F2L solve, look ahead 2-3 pieces to plan next case without pausing." },
    { title: "Lube + magnetic tuning", body: "Cube maintenance (lube type + magnet configuration + tension) makes 0.5-1 sec difference in average." },
  ],
  terminology: [
    { term: "CFOP / Fridrich", meaning: "Standard 3×3 method: Cross → F2L → OLL → PLL" },
    { term: "Roux / ZZ / Petrus", meaning: "Alternative 3×3 methods" },
    { term: "Ao5 (Average of 5)", meaning: "5-solve average dropping best + worst" },
    { term: "Ao12 / Ao50 / Ao100", meaning: "Larger averages for practice tracking" },
    { term: "Sub-X", meaning: "Solving in under X seconds (e.g., 'sub-10')" },
    { term: "DNF", meaning: "Did Not Finish (invalid solve)" },
    { term: "Scramble", meaning: "WCA-generated randomised move sequence" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Beginner method → sub-60 seconds", body: "Layer-by-layer beginner method; 60+ second solves." }] },
    { level: "intermediate", steps: [{ title: "CFOP + all 4 last-layer OLL/PLL → sub-20", body: "Learn full CFOP with 57 OLL + 78 PLL algorithms; sub-20 second solves." }] },
    { level: "advanced", steps: [{ title: "WCA competition + sub-10 seconds", body: "Enter WCA competitions; train for sub-10 second solves." }] },
  ],
  faq: [
    { question: "How fast is the current Rubik's Cube world record?", answer: "3.13 seconds (3×3 Single) by Max Park (USA) at Pride in Long Beach 2023. Average of 5 world record: 4.86 seconds by Yiheng Wang (China, 2023)." },
    { question: "What method should I learn to speedsolve?", answer: "CFOP (Cross → F2L → OLL → PLL, aka Fridrich method) is used by ~95% of top speedcubers. Requires memorising 78 PLL + 57 OLL algorithms. Roux + ZZ + Petrus are alternatives with smaller communities." },
  ],
  wikipediaTitle: "Speedcubing",
  sources: [{ label: "Wikipedia — Speedcubing", url: "https://en.wikipedia.org/wiki/Speedcubing", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default speedCubing;

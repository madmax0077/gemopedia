import type { Sport } from "@/lib/types";

export const speedcubing: Sport = {
  id: "speedcubing",
  slug: "speedcubing",
  name: "Speedcubing",
  officialName: "Speedcubing (WCA competitive Rubik's Cube solving)",
  aliases: ["Speed Cubing", "Rubik's Cube Racing", "Cube Speedsolving"],
  shortDescription:
    "Competitive speed-solving of Rubik's Cube and other twisty puzzles — governed by the WCA, with world records under 3 seconds on 3×3, and 20+ official events including one-handed, blindfolded, and mega-minx.",
  longDescription:
    "Speedcubing was born in 1982 with the first World Championship (Budapest) organized shortly after Ernő Rubik's Cube hit the mass market. The World Cube Association (WCA) was founded in 2004 and now sanctions 800+ competitions per year in 100+ countries. World records have plummeted from 22 seconds (1982) to under 3.1 seconds (Max Park, 2023). Athletes memorize 100+ algorithms (CFOP method) and train muscle memory + look-ahead for 50+ hours/week to reach sub-6-second averages.",

  category: "mind-sports",
  subCategory: "twisty puzzle speed-solving competition",
  sportType: "individual",
  indoorOutdoor: "both",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "HU",
  regionOfOrigin: "Hungary (Ernő Rubik invented the Cube 1974; first Worlds Budapest 1982)",
  estimatedOrigin: "Cube invented 1974; first World Championship 1982; WCA founded 2004; modern era from ~2005",

  players: { min: 1, max: 1, note: "Individual event. Also team relay events in some competitions." },
  field: {
    surfaceName: "Competition table",
    dimensions: "Standard folding table with StackMat timer",
    description: "Standardized StackMat Gen4 timer + regulation cube + inspection area." },
  equipment: [
    { name: "Speedcube (WCA-legal)", description: "GAN 14, MoYu WeiLong WR M V10, QiYi X-Man Tornado V3 — magnetized, corner-cut, lubed." },
    { name: "StackMat Gen4 timer", description: "Two-hand-touch timer sanctioned by WCA." },
    { name: "Timing mat", description: "Standardized surface for the StackMat sensors." },
    { name: "Cube lubricant + magnets", description: "DIY tuning — Lubicle Traxxas 50K, Silica-C, magnet sets." },
    { name: "Scramble sheet + inspection cover", description: "Judge provides scrambled cube; 15-second inspection allowed." },
  ],
  duration: {
    approximateMinutes: 1,
    structure: "Each solve: 15s inspection + <60s solve. Round: 5 solves (best + worst dropped, middle 3 averaged). Competition: 1-3 days." },

  objective:
    "Complete the assigned puzzle in the shortest time. Rankings by single best time + average of 5 solves (middle 3).",
  matchStructure:
    "Round of 5 solves with 15-second inspection each; average of middle 3 is your score. Competitions have multiple rounds culminating in Finals of top ~10 competitors.",

  basicRules: [
    { title: "Inspection", body: "15 seconds to observe scrambled cube before starting timer. No moves during inspection." },
    { title: "Both hands on timer", body: "Both palms flat on StackMat sensors; release to start timer." },
    { title: "Solve", body: "Manipulate cube to fully solved state; stop timer by placing both hands back on sensors." },
    { title: "5 solves per average", body: "Drop best + worst; middle 3 averaged. WCA average is your official time." },
    { title: "DNF (Did Not Finish)", body: "Timer overtime, mis-scramble, or dropped cube = DNF; counts as worst in average." },
  ],
  advancedRules: [
    { title: "Multi-BLD", body: "Multiple Blindfold — memorize N cubes then solve all blindfolded. 1 hour time limit." },
    { title: "One-Handed", body: "Solve 3×3 with one hand only; the other hand must not touch cube after timer starts." },
    { title: "Fewest Moves", body: "Given 60 minutes, write out the fewest-turn solution — no re-solve allowed." },
    { title: "Big cubes (4×4-7×7)", body: "Longer solves (30-300 seconds); use techniques like reduction (solve like 3×3 after prep)." },
  ],
  scoring: {
    summary: "Time in seconds. Ranked by single best time (best of 5) OR average of 5 (middle 3 averaged).",
    winCondition: "Fastest average or single in the round wins.",
    breakdown: [
      { action: "Single best solve", points: "Fastest of 5 solves" },
      { action: "Average of 5 (Ao5)", points: "Middle 3 solves averaged" },
    ],
  },
  penalties: [
    { title: "+2 penalty", body: "Cube not fully solved (one turn away) — 2 seconds added." },
    { title: "DNF", body: "Timer overtime, dropped cube, or mid-solve stop — solve invalid." },
  ],

  positions: [
    { name: "Competitor", role: "The solver.", count: 1 },
    { name: "Judge", role: "Runs the timer + verifies solve.", count: 1 },
    { name: "Scrambler", role: "Applies the WCA-generated scramble to the cube." },
  ],
  officiating: {
    officials: ["WCA Delegate", "Judges", "Scramblers"],
    summary: "Every WCA competition has an appointed Delegate to enforce WCA regulations + record results.",
  },

  governingBodies: [
    { name: "World Cube Association (WCA)", founded: 2004, headquarters: "USA (nonprofit; distributed board)", website: "https://worldcubeassociation.org" },
  ],
  majorCompetitions: [
    { name: "Rubik's WCA World Championship", frequency: "biennial", founded: 1982, region: "rotating global" },
    { name: "US Nationals + European Championships", frequency: "annual + biennial", founded: 2005, region: "USA / Europe" },
    { name: "Asian + African Championships", frequency: "biennial", founded: 2010, region: "regional" },
    { name: "CubingUSA Nationals", frequency: "annual", founded: 2011, region: "USA" },
  ],
  countriesPlayed: ["US", "CN", "IN", "JP", "GB", "DE", "PL", "AU", "BR", "KR", "HU", "RU", "FR"],
  famousAthletes: [
    "Max Park (US, 3×3 WR holder 3.13s)",
    "Feliks Zemdegs (AU, most decorated speedcuber ever)",
    "Yiheng Wang (CN, current 3×3 average WR)",
    "Tymon Kolasiński (PL, big cube specialist + 3×3 top-10)",
    "Yusheng Du (CN, first sub-3.5 second WR)",
  ],
  records: [
    { title: "3×3 single WR", holder: "Max Park", value: "3.13 seconds", year: 2023 },
    { title: "3×3 Ao5 WR", holder: "Yiheng Wang", value: "4.48 seconds", year: 2024 },
    { title: "3×3 Blindfolded WR", holder: "Tommy Cherry", value: "12.00 seconds", year: 2024 },
    { title: "Most successful cubes (MultiBLD)", holder: "Graham Siggins", value: "62 cubes in 1 hour", year: 2022 },
  ],

  variants: ["megaminx", "square-1", "pyraminx", "skewb", "clock"],
  relatedSports: ["stacking-cups", "rubiks-cube"],

  skills: [
    "algorithm memorization (100+ patterns)",
    "look-ahead (planning next steps during current move)",
    "finger dexterity + trigger patterns",
    "spatial visualization",
    "focus + pressure management",
  ],
  strategies: [
    { title: "Learn CFOP method", body: "Cross → F2L → OLL → PLL — the standard 100-algorithm method for sub-15 second solves." },
    { title: "Practice ZBLL for advanced", body: "Zborowski-Bruchem Last Layer — 493 algorithms — takes solves from 8 to 5 seconds." },
    { title: "Turn tension + lube", body: "Personalized cube tuning shaves 0.5+ seconds off averages." },
    { title: "Look-ahead drills", body: "Solve first 3 layers while planning last layer — the key sub-10 skill." },
  ],

  terminology: [
    { term: "CFOP", meaning: "Cross-F2L-OLL-PLL — the dominant speedsolving method." },
    { term: "F2L", meaning: "First Two Layers — bottom cross + first two solved layers." },
    { term: "OLL / PLL", meaning: "Orient/Permute Last Layer — final two algorithm phases." },
    { term: "TPS", meaning: "Turns Per Second — pros hit 8-12 TPS in F2L." },
    { term: "Ao5", meaning: "Average of 5 (dropping best + worst)." },
    { term: "DNF", meaning: "Did Not Finish — solve invalidated (timer overtime, wrong scramble, +2)." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Learn beginner method", body: "Layer-by-layer method solves cube in ~2 minutes with only 7 algorithms." },
        { title: "Buy a speedcube", body: "MoYu RS3M ($15) — best budget cube; graduates to GAN 12 or Tornado V3 later." },
        { title: "Practice CFOP F2L", body: "Free tutorials on JPerm YouTube channel — the community-standard learning resource." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Master full PLL then OLL", body: "21 PLL + 57 OLL algorithms + intuitive F2L takes solves to sub-15." },
        { title: "Enter WCA competition", body: "Register on worldcubeassociation.org — first competition is a rite of passage." },
        { title: "Learn ZBLL + Roux/Petrus", body: "For sub-10 solves; alternate methods offer unique advantages." },
      ],
    },
  ],

  faq: [
    { question: "How fast is the current world record?", answer: "Max Park: 3.13 seconds single (2023). Yiheng Wang: 4.48 second average of 5 (2024). Both far below the 15-second inspection." },
    { question: "How many algorithms do pros know?", answer: "Full CFOP = ~100 algorithms. Full ZBLL adds ~500 more. Top pros memorize 800+ algorithms for edge cases." },
    { question: "Is speedcubing an Olympic sport?", answer: "No — but WCA runs official world championships with global recognition. IOC has considered speedcubing as an urban/youth sport." },
    { question: "What cube should I buy?", answer: "Under $10: QiYi Warrior W. Under $30: MoYu RS3M 2020. Serious: GAN 14 M Pro / MoYu WeiLong WR M V10." },
  ],

  sources: [
    { label: "World Cube Association", url: "https://worldcubeassociation.org", publisher: "WCA" },
    { label: "Wikipedia — Speedcubing", url: "https://en.wikipedia.org/wiki/Speedcubing", publisher: "Wikipedia" },
    { label: "JPerm YouTube tutorials", url: "https://www.youtube.com/c/JPerm", publisher: "JPerm" },
  ],
  wikipediaTitle: "Speedcubing",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

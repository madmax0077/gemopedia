import type { Sport } from "@/lib/types";

export const freecell: Sport = {
  id: "freecell",
  slug: "freecell",
  name: "FreeCell",
  officialName: "FreeCell",
  shortDescription:
    "Solitaire card game where ALL 52 cards are dealt face-up + 4 FREE CELLS for temporary card holding. Invented ~1960s by Paul Alfille (Illinois computer teacher). Popularized by MICROSOFT WINDOWS 95 (bundled version). Notably 99.999% of dealt hands are WINNABLE with perfect play (only 1 known unwinnable — #11982). Game of pure skill, minimal luck.",
  longDescription:
    "FreeCell is SOLITAIRE CARD GAME distinct from Klondike due to (1) ALL 52 CARDS DEALT FACE-UP + (2) 4 FREE CELLS for temporary card holding. Invented ~1960s (some claim earlier) by PAUL ALFILLE (Illinois computer science teacher) as PLATO computer system game. Popularized GLOBALLY by MICROSOFT bundling with Windows 95 (bundled as demo of Win32 capabilities); Microsoft's version includes numbered 32,000 unique deals. NOTABLE MATHEMATICAL FACT: Of Microsoft's 32,000 numbered hands, ONLY GAME #11982 IS PROVABLY UNWINNABLE with perfect play (99.99+% win rate). Considered GAME OF PURE SKILL — no hidden cards + minimal luck = solving = intelligent problem-solving. SETUP: 8 TABLEAU COLUMNS (52 cards face-up), 4 FREE CELLS (empty), 4 FOUNDATIONS (empty). GAMEPLAY: like Klondike but tableau built DOWN ALTERNATING COLOR, single-card moves plus free-cell parking, no stock pile draws. WIN = all cards to foundations A→K by suit. HARDER than Klondike due to no drawing but rewards planning. WINDOWS FREECELL popular workplace 'productivity killer' 1995-present. VARIANTS: BAKER'S GAME (build DOWN by SAME SUIT — harder), EIGHT OFF (variant with 8 free cells).",
  category: "card-games",
  subCategory: "single-player solitaire card game (open information)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "global",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Illinois; Paul Alfille via PLATO computer system)",
  estimatedOrigin: "Invented ~1960s Paul Alfille via PLATO computer system; Microsoft Windows 95 bundled 1995 for global popularization",
  players: { min: 1, max: 1, note: "Single-player only." },
  field: { surfaceName: "table + card layout", dimensions: "layout requires ~2ft × 1.5ft", description: "8 tableau columns + 4 free cells + 4 foundations." },
  equipment: [
    { name: "Standard 52-card deck", description: "€2-10" },
    { name: "Or digital app (Microsoft, PySolFC, Solitaired)", description: "Free" },
  ],
  duration: { approximateMinutes: 5, structure: "3-10 min per game; skilled players sub-2 min." },
  objective: "Move all 52 cards to 4 foundations (A→K per suit) using tableau + 4 free cells.",
  basicRules: [
    { title: "Setup: 8 tableau columns, all cards face-up", body: "Columns 1-4 have 7 cards; columns 5-8 have 6 cards." },
    { title: "4 FREE CELLS empty at start (temporary parking)", body: "Only ONE card per free cell at any time." },
    { title: "Foundations built UP A → 2 → K by suit", body: "One foundation per suit." },
    { title: "Tableau built DOWN alternating COLOR", body: "Red 7 on Black 8, etc." },
    { title: "Move sequences (only 1 card at time officially)", body: "Modern implementations allow super-moves (multi-card if enough free cells + empty columns)." },
    { title: "Win: all cards on foundations", body: "99.99+% win rate with perfect play." },
  ],
  scoring: {
    summary: "Not scored typically. Win/lose. Some track games won + fastest times.",
    breakdown: [
      { action: "Win", points: "Solving the game" },
      { action: "Windows FreeCell statistics", points: "Games won + longest streak tracked" },
      { action: "Time bonus", points: "Faster wins = more score in some scoring versions" },
    ],
    winCondition: "All 52 cards on foundations (A→K each suit).",
  },
  governingBodies: [
    { name: "No official governing body", founded: 0, headquarters: "n/a" },
  ],
  majorCompetitions: [
    { name: "Microsoft Solitaire Collection Star Club", frequency: "ongoing", founded: 2016, region: "worldwide" },
    { name: "FreeCell Pro deal solving community", frequency: "ongoing", founded: 1995, region: "worldwide" },
  ],
  countriesPlayed: ["global — via Microsoft Windows"],
  famousAthletes: [
    "Paul Alfille (USA) — Inventor 1960s via PLATO",
    "Wes Cherry (USA) — Windows Solitaire developer (also FreeCell)",
    "Various speed-solving competitors in online communities",
  ],
  variants: [
    "freecell-standard-4-free-cells",
    "bakers-game-build-DOWN-SAME-SUIT-harder",
    "eight-off-8-free-cells-easier",
    "seahaven-towers-10-tableau-4-free-cells",
    "penguin-different-layout",
    "microsoft-freecell-32000-numbered-deals",
  ],
  relatedSports: ["klondike-solitaire", "spider-solitaire", "pyramid-solitaire", "solitaire"],
  skills: ["multi-step planning", "spatial reasoning", "pattern recognition", "systematic search"],
  strategies: [
    { title: "Never fill all free cells early", body: "Free cells = flexibility; running out = stuck." },
    { title: "Move Aces + 2s to foundations quickly", body: "Immediate progress + tableau cleared." },
    { title: "Plan sequences before moving", body: "Think 3-5 moves ahead." },
    { title: "Watch for buried Kings", body: "Kings underneath obstruct — extract early." },
    { title: "Super-moves calculation: (empty cells+1) × 2^(empty columns) cards", body: "How many cards can move at once." },
  ],
  terminology: [
    { term: "Free cell", meaning: "One of 4 temporary parking spots for single card." },
    { term: "Foundation", meaning: "One of 4 A→K by suit piles." },
    { term: "Tableau", meaning: "8 columns of face-up cards." },
    { term: "Super-move", meaning: "Multi-card move enabled by free cells + empty columns." },
    { term: "Auto-play", meaning: "Application auto-moves cards to foundations when safe." },
    { term: "Winnable deal", meaning: "Deal solvable with perfect play." },
    { term: "Deal #11982", meaning: "Only Microsoft numbered deal PROVABLY UNWINNABLE." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play Microsoft FreeCell (free Windows) OR PySolFC (multi-platform)", body: "Learn basic mechanics." },
    ]},
    { level: "intermediate", steps: [
      { title: "Deep planning: 3-5 moves ahead", body: "Elite play requires reading multiple moves." },
      { title: "Try Baker's Game variant", body: "Build DOWN by same suit — much harder." },
    ]},
    { level: "advanced", steps: [
      { title: "Solve Microsoft deals in order 1-32000", body: "Community project — deal #11982 unwinnable." },
      { title: "Speed solving competitions", body: "Sub-90-second wins possible." },
    ]},
  ],
  faq: [
    { question: "What is FreeCell?", answer: "SOLITAIRE CARD GAME distinct from Klondike due to (1) ALL 52 CARDS DEALT FACE-UP + (2) 4 FREE CELLS for temporary parking. Invented ~1960s by PAUL ALFILLE via PLATO computer system. GLOBALLY POPULARIZED by MICROSOFT WINDOWS 95 bundle. Considered GAME OF PURE SKILL — no hidden cards + 99.99+% of hands winnable with perfect play. HARDER than Klondike due to no stock pile drawing but MORE REWARDING due to pure skill. Windows FreeCell has 32,000 numbered deals; deal #11982 is only one PROVABLY UNWINNABLE." },
    { question: "How is FreeCell different from Klondike Solitaire?", answer: "KLONDIKE = HIDDEN CARDS (tableau face-down), STOCK PILE draws, cards built DOWN alternating color. FREECELL = ALL CARDS FACE-UP, NO STOCK PILE, 4 FREE CELLS for temporary parking. Klondike ~30-80% win rate depending draw variant (luck involved). FreeCell 99.99%+ win rate (skill involved). Both build foundations A→K by suit. FreeCell considered CHESS-LIKE (skill); Klondike considered POKER-LIKE (skill + luck)." },
    { question: "What is deal #11982?", answer: "Microsoft FreeCell has 32,000 NUMBERED DEALS (seeded PRNG). Analysis over years found ALL WINNABLE except DEAL #11982 — provably UNWINNABLE by any strategy. Also #146692 (in extended deal sets) unwinnable. All others solved by community + computer solvers. Famous 'Internet FreeCell Project' (Dave Ring 1994) systematically solved all 32000 deals — earliest crowd-sourced computer problem-solving. Considered FASCINATING mathematical fact of specific-deal solvability." },
  ],
  wikipediaTitle: "FreeCell",
  sources: [
    { label: "Wikipedia — FreeCell", url: "https://en.wikipedia.org/wiki/FreeCell", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};

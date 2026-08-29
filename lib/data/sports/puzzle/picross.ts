import type { Sport } from "@/lib/types";

export const picross: Sport = {
  id: "picross",
  slug: "picross",
  name: "Picross (Nonogram)",
  officialName: "Picross / Nonogram / Griddler",
  aliases: ["Nonogram", "Griddler", "Hanjie", "Paint by Numbers", "Logic Art"],
  shortDescription:
    "Logic puzzle where clues at row + column edges tell player how many consecutive cells to fill — solving reveals hidden pixel-art image. Invented by Non Ishida (JP) 1987; popularised by Nintendo Picross (Game Boy 1995) + newspaper 'Hanjie' puzzles.",
  longDescription:
    "Picross (also known as Nonogram, Griddler, Hanjie, Paint by Numbers, or Logic Art) is a logic puzzle where players fill cells in a grid based on numeric clues at the edges of each row + column. Clues describe how many consecutive filled cells + gaps appear in that row/column (e.g., '3 2 1' = 3 filled + gap + 2 filled + gap + 1 filled). Solving reveals a hidden pixel-art image (often depicting animals, objects, characters). Invented by Non Ishida (Japan) in 1987 as 'window art puzzle'; independently invented by Tetsuya Nishio around same time; popularised in Japanese newspapers 1988+ + Times of London 1990s. Nintendo Picross (Game Boy 1995, Super NES 1995) launched game-form popularity; ongoing Nintendo Picross series (Picross e, Picross S) on 3DS + Switch has 20+ entries. Web + mobile apps (Pixel Art, Picross Touch, Nonograms Katana) have millions of downloads. Standard sizes: 5×5 (beginner), 10×10, 15×15, 20×20 (advanced), 30×30+ (expert). Color Picross variants use multiple ink colors. Solving is pure deductive logic (no guessing needed for well-formed puzzles). Speed-solving competition exists (Nonogram World Championships since ~2010, though less formalised than sudoku).",
  category: "puzzle-games",
  subCategory: "logic pixel-art puzzle",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Non Ishida + Tetsuya Nishio)",
  estimatedOrigin: "Invented 1987 by Non Ishida + independently Tetsuya Nishio; popularised via Japanese newspapers 1988; Nintendo Picross 1995",
  players: { min: 1, max: 1, note: "Single-player puzzle." },
  equipment: [
    { name: "Puzzle grid + clues", description: "Paper/digital grid with row + column clues at edges." },
    { name: "Pen / pencil / digital app", description: "Fill cells (black) + mark empty cells (X)." },
  ],
  duration: { approximateMinutes: 30, structure: "5×5 = 1-5 min; 10×10 = 5-20 min; 15×15 = 15-45 min; 20×20+ = 30-90 min; expert 30×30+ = 1-3 hrs." },
  objective: "Fill grid cells based on edge clues to reveal hidden pixel-art image.",
  matchStructure: "Solve puzzle; puzzle is complete when all cells correctly filled/emptied.",
  basicRules: [
    { title: "Row/column edge clues", body: "Numbers at row/column edges = counts of consecutive filled cells (gaps between counts = at least 1 empty cell)." },
    { title: "Fill or X-mark each cell", body: "Each cell is either filled (part of image) or empty (X-marked for clarity)." },
    { title: "Solution must satisfy all row + column clues", body: "Every row + column must match its clue exactly for solve to be valid." },
  ],
  advancedRules: [
    { title: "Well-formed puzzles have unique solution via pure logic", body: "No guessing needed — every step can be deduced. Puzzles with multiple solutions are considered mal-formed." },
    { title: "Color Picross variants", body: "Some puzzles use multiple ink colors; clues include color indicators." },
    { title: "Speed-solving techniques", body: "Advanced solvers use 'edge-of-clue' deduction, 'sum-of-clues' overlap detection, and 'no-space' contradiction patterns." },
  ],
  scoring: {
    summary: "Puzzle complete = win; time tracked for competitive.",
    winCondition: "All cells correctly filled per clues.",
    breakdown: [{ action: "Puzzle solved", points: "1 puzzle complete + time recorded" }],
  },
  penalties: [
    { title: "Incorrect cell fill (competitive)", body: "Time penalty per mistake; some apps allow mistakes with penalty, others invalidate solve." },
    { title: "Timeout (competitive)", body: "Unsolved after time limit = DNF." },
  ],
  positions: [{ name: "Picross Solver", role: "Solo puzzle-solver.", count: 1 }],
  officiating: { officials: ["None (self-contained puzzle); World Puzzle Federation officials for WPC-adjacent Nonogram events"], summary: "No standing officials; WPF-verified for competitive events." },
  governingBodies: [
    { name: "World Puzzle Federation (WPF, sponsors Nonogram at WPC)", founded: 1999, headquarters: "Netherlands" },
  ],
  majorCompetitions: [
    { name: "World Puzzle Championship — Nonogram events", frequency: "annual", founded: 1992, region: "worldwide" },
    { name: "Nintendo Picross official Time Attack modes (in-game)", frequency: "ongoing", founded: 1995, region: "global (Nintendo platforms)" },
  ],
  countriesPlayed: ["global — universally distributed via apps + Nintendo"],
  famousAthletes: ["Non Ishida (JP, inventor)", "Tetsuya Nishio (JP, independent inventor)", "Top WPC Nonogram medallists"],
  records: [
    { title: "Invented 1987 by Non Ishida", holder: "Non Ishida", value: "Non Ishida invented Picross concept 1987 in Japan; published in newspapers 1988", year: 1987 },
    { title: "Nintendo Picross 1995 (Game Boy)", holder: "Nintendo", value: "Mario's Picross (1995 Game Boy) launched Nintendo's ongoing Picross game series", year: 1995 },
    { title: "Nintendo Picross e/S series 20+ entries", holder: "Jupiter Corp", value: "20+ Picross entries across DS/3DS/Switch since 2009 (Picross DS through Picross S9+)", year: 2024 },
  ],
  variants: ["standard-nonogram", "color-nonogram", "triangular-nonogram", "wraparound-nonogram", "mega-nonogram-30x30+"],
  relatedSports: ["sudoku", "kakuro", "kenken", "crossword"],
  skills: ["logical deduction", "pattern recognition", "grid visualisation", "sum-of-clues overlap analysis"],
  strategies: [
    { title: "Start with longest clues", body: "Long clues force overlap → guaranteed filled cells in row." },
    { title: "Sum-of-clues + gaps calculation", body: "If sum of clues + minimum gaps = row length, all cells forced." },
    { title: "Edge deduction", body: "Cells at edges near clue start often forced fill/empty based on adjacent constraints." },
  ],
  terminology: [
    { term: "Clue (row/column)", meaning: "Numbers at edge indicating consecutive fill counts" },
    { term: "Filled / Empty cell", meaning: "Part of pixel image / not part" },
    { term: "X-mark", meaning: "Marker for definitely-empty cell" },
    { term: "Overlap", meaning: "Cells guaranteed filled by clue-length overlap in row/column" },
    { term: "Well-formed puzzle", meaning: "Puzzle with unique logical solution" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "5×5 puzzles", body: "Learn basic clue-following on simple pixel art." }] },
    { level: "intermediate", steps: [{ title: "15×15 with overlap deductions", body: "Master overlap + sum-of-clues techniques." }] },
    { level: "advanced", steps: [{ title: "30×30 + WPC-level speed-solving", body: "Expert-size puzzles + competitive speed." }] },
  ],
  faq: [
    { question: "What is the difference between Picross and Nonogram?", answer: "They're the same puzzle. 'Picross' is Nintendo's branded name (Picture Cross). 'Nonogram' is the international academic/community name. 'Griddler', 'Hanjie', 'Paint by Numbers' are regional variants — all identical puzzle." },
    { question: "Are Picross puzzles solvable by pure logic?", answer: "Well-formed puzzles yes — every step can be deduced logically without guessing. Mal-formed puzzles (multiple solutions) exist but are considered poor design. Most published + Nintendo Picross puzzles are guaranteed unique-solution logic." },
  ],
  wikipediaTitle: "Nonogram",
  sources: [{ label: "Wikipedia — Nonogram", url: "https://en.wikipedia.org/wiki/Nonogram", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default picross;

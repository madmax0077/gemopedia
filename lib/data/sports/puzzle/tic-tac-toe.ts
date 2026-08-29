import type { Sport } from "@/lib/types";

export const ticTacToe: Sport = {
  id: "tic-tac-toe",
  slug: "tic-tac-toe",
  name: "Tic-Tac-Toe",
  officialName: "Tic-Tac-Toe",
  aliases: ["Noughts and Crosses", "Xs and Os", "Three-in-a-Row"],
  shortDescription:
    "The classic two-player pencil-and-paper game — take turns marking X or O on a 3×3 grid and be the first to line up three in a row.",
  longDescription:
    "Tic-Tac-Toe is the world's most-played pencil-and-paper game, taught to virtually every child in cultures with a written script. Its roots stretch back to ancient Rome, where a very similar game called Terni Lapilli was scratched into stone in the 1st century BCE. Modern rules crystallised in Britain in the 19th century, where it was called Noughts and Crosses. Because the game is solved — with perfect play it always ends in a draw — Tic-Tac-Toe is a canonical teaching example in game theory, artificial intelligence, and computer-science courses on minimax search.",

  category: "puzzle-games",
  subCategory: "solved abstract strategy game",
  sportType: "individual",
  indoorOutdoor: "both",
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "global",

  countryOfOrigin: "IT",
  regionOfOrigin: "Ancient Rome (Terni Lapilli); modern rules Great Britain",
  estimatedOrigin: "c. 1st century BCE (Terni Lapilli); modern 'noughts and crosses' name c. 1860s",

  players: { min: 2, max: 2, note: "Exactly two players alternate turns; there is no team format." },
  field: {
    surfaceName: "3×3 grid",
    dimensions: "9 cells in a square",
    description: "Two vertical lines and two horizontal lines drawn on paper, sand, or any writable surface.",
  },
  equipment: [
    { name: "Writing surface", description: "Paper, chalkboard, sand, or a screen." },
    { name: "Writing instrument", description: "Pencil, pen, chalk, or finger — anything that leaves a temporary mark." },
  ],
  duration: {
    approximateMinutes: 2,
    structure: "A single game lasts at most 9 moves and typically resolves in under 2 minutes. Best-of-N series often played for tie-breaking.",
  },

  objective:
    "Be the first player to place three of your marks in a horizontal, vertical, or diagonal line while blocking the opponent from doing the same.",
  matchStructure:
    "One player is X, the other is O. X moves first by convention. Players alternate placing a single mark on any empty cell until either a player achieves three-in-a-row (they win) or all nine cells are filled without a line (a draw, often called a 'cat's game').",

  basicRules: [
    { title: "Board", body: "Draw a 3×3 grid — two vertical and two horizontal lines creating nine empty cells." },
    { title: "Marks", body: "One player uses X, the other uses O. X always moves first in traditional play." },
    { title: "Turns", body: "On your turn, place your mark in exactly one empty cell. You cannot skip a turn or move an existing mark." },
    { title: "Winning", body: "The first player to place three of their marks in a straight line — horizontally, vertically, or diagonally — wins immediately." },
    { title: "Drawing", body: "If all nine cells are filled and no player has three in a row, the game is a draw." },
  ],
  advancedRules: [
    { title: "Misère (loser's) Tic-Tac-Toe", body: "Reversed goal — the player who forms three-in-a-row loses. Also always a draw with perfect play." },
    { title: "3D Tic-Tac-Toe", body: "Played on three stacked 3×3 grids; three-in-a-row can now include vertical lines through the cube." },
    { title: "Ultimate Tic-Tac-Toe", body: "Nine 3×3 boards arranged in a meta 3×3 grid. Your move sends your opponent to the corresponding local board." },
    { title: "Wild Tic-Tac-Toe", body: "Either player may play X or O on any turn." },
  ],
  scoring: {
    summary: "One point per game won in a match. Draws typically award half a point in tournament settings.",
    winCondition: "Achieve three of your marks in an unbroken horizontal, vertical, or diagonal line.",
    breakdown: [
      { action: "Win", points: "1" },
      { action: "Draw ('cat's game')", points: "0.5 each (tournament)" },
      { action: "Loss", points: "0" },
    ],
  },

  positions: [
    { name: "First player (X)", role: "Moves first; slight theoretical advantage — best play draws.", count: 1 },
    { name: "Second player (O)", role: "Reactive; must play defensively to force a draw.", count: 1 },
  ],
  officiating: {
    officials: ["Tournament director (Ultimate Tic-Tac-Toe events)"],
    summary: "No formal officiating in casual play. Tournament variants like Ultimate Tic-Tac-Toe use tournament directors to resolve rule disputes and timing.",
  },

  governingBodies: [],
  majorCompetitions: [
    { name: "AI/coding competitions (e.g., Codingame, Kaggle)", frequency: "ad-hoc", note: "Not a human-competitive sport; the game features in AI programming contests." },
  ],
  countriesPlayed: ["GB", "US", "IN", "CN", "DE", "FR", "BR", "JP", "IT", "AU"],
  records: [
    { title: "First computer to solve tic-tac-toe", holder: "OXO (EDSAC, Cambridge)", value: "First graphical computer game", year: 1952 },
    { title: "Optimal Ultimate Tic-Tac-Toe program", holder: "Various academic papers", value: "Approximated with Monte Carlo Tree Search", year: 2017 },
  ],

  variants: ["ultimate-tic-tac-toe", "3d-tic-tac-toe", "misere-tic-tac-toe", "gomoku", "connect-6"],
  relatedSports: ["gomoku", "connect-6", "renju", "pente", "connect-four"],

  skills: ["forward planning", "pattern recognition", "basic game theory intuition", "focus"],
  strategies: [
    { title: "Take the centre", body: "The centre square is part of 4 of the 8 winning lines — always the strongest opening cell when available." },
    { title: "Create a fork", body: "Aim to create two simultaneous three-in-a-row threats so your opponent can only block one." },
    { title: "Force blocks", body: "Play moves that threaten a win, forcing your opponent to react defensively rather than build their own line." },
  ],

  terminology: [
    { term: "Fork", meaning: "A move that creates two simultaneous winning threats — unstoppable in a single response." },
    { term: "Cat's game", meaning: "A drawn game where the board fills with no winner." },
    { term: "X-player / O-player", meaning: "The two contestants, named after their marker." },
    { term: "Centre / edge / corner", meaning: "The three positional zones on the 3×3 board." },
    { term: "Ultimate Tic-Tac-Toe", meaning: "Meta-game of nine 3×3 boards inside a 3×3 grid, dramatically deeper than the base game." },
    { term: "Solved game", meaning: "A game whose outcome is known with perfect play — Tic-Tac-Toe is a proven draw." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Learn the grid", body: "Understand the 3×3 grid, the 8 possible winning lines, and how X and O alternate placements.", anchor: "rules" },
        { title: "Recognise wins and blocks", body: "Before each move, scan for any immediate winning line and for any two-in-a-row threat by the opponent that must be blocked.", anchor: "rules" },
        { title: "Open with the centre", body: "As X, always start in the middle cell; it belongs to 4 of the 8 winning lines.", anchor: "strategies" },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Create forks", body: "Set up positions where you threaten two lines at once so your opponent cannot block both.", anchor: "strategies" },
        { title: "Defend against forks", body: "Learn the specific responses to X's corner openings that prevent O from being forked.", anchor: "strategies" },
        { title: "Explore Ultimate Tic-Tac-Toe", body: "Try the meta variant — it introduces genuine strategic depth and has no known perfect solution.", anchor: "variants" },
      ],
    },
  ],

  faq: [
    { question: "Can Tic-Tac-Toe ever be won with perfect play?", answer: "No — the game is a proven draw. With both players playing optimally, every game ends in a cat's game." },
    { question: "Does X always win?", answer: "X has a slight theoretical edge, but only against poor play. Against a competent O, the best X can do is draw." },
    { question: "Is Tic-Tac-Toe considered educational?", answer: "Yes — it's the canonical teaching example in AI courses for the minimax algorithm and in game-theory courses for solved games." },
    { question: "How many total game states are possible?", answer: "There are 255,168 possible unique games, but only 138 terminal positions after accounting for symmetries." },
  ],

  sources: [
    { label: "Britannica — Tic-Tac-Toe", url: "https://www.britannica.com/topic/tic-tac-toe", publisher: "Encyclopaedia Britannica" },
    { label: "Wikipedia — Tic-Tac-Toe", url: "https://en.wikipedia.org/wiki/Tic-tac-toe", publisher: "Wikipedia" },
  ],
  wikipediaTitle: "Tic-tac-toe",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

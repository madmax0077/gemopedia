import type { Sport } from "@/lib/types";

export const chess: Sport = {
  id: "chess",
  slug: "chess",
  name: "Chess",
  officialName: "Chess",
  shortDescription:
    "A two-player strategy game on an 8×8 board — checkmate the enemy king before your own falls.",
  longDescription:
    "Chess is one of the world's oldest and most-studied strategy games. Its ancestor, chaturanga, emerged in India around the 6th century and evolved through Persian shatranj into modern chess in 15th-century southern Europe. Two players — White and Black — command 16 pieces each and alternate moves on a 64-square board. Governed by FIDE, chess is now considered a mind sport by the IOC, played at professional level with time controls ranging from 1-minute bullet to 7-hour classical games.",

  category: "mind-sports",
  subCategory: "abstract strategy game",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "medieval",
  popularity: "global",

  countryOfOrigin: "IN",
  regionOfOrigin: "Northern India (chaturanga)",
  estimatedOrigin: "c. 6th century (chaturanga) — modern rules c. 1475",

  players: { min: 2, max: 2, note: "Exactly 2 players. Team chess exists in olympiads." },
  field: {
    surfaceName: "chessboard",
    dimensions: "8 × 8 = 64 alternating light and dark squares.",
    description: "The board is oriented so each player has a light-coloured square in the bottom-right corner.",
  },
  equipment: [
    { name: "Chessboard", description: "8×8 grid, 64 squares in two alternating colours." },
    { name: "32 pieces", description: "Each side: 1 king, 1 queen, 2 rooks, 2 bishops, 2 knights, 8 pawns." },
    { name: "Clock", description: "Two-faced clock, mandatory in competitive play; players press it after each move." },
    { name: "Scoresheet", description: "For notating games in algebraic notation." },
  ],
  duration: {
    approximateMinutes: 120,
    structure: "Time control varies: bullet (1–3 min), blitz (3–10 min), rapid (10–60 min), classical (90+30 min per player).",
  },
  objective: "Checkmate your opponent's king — put it under attack with no legal move to escape.",
  matchStructure:
    "White moves first; players alternate one move per turn. A game ends by checkmate, resignation, draw by agreement, stalemate, threefold repetition, the 50-move rule or timeout.",

  basicRules: [
    { title: "Movement", body: "Rook: any number of squares in a straight line. Bishop: diagonals. Queen: rook + bishop combined. Knight: L-shape (2+1), jumps over pieces. King: one square any direction. Pawn: one square forward (two on first move), captures diagonally." },
    { title: "Check & checkmate", body: "'Check' is a direct threat to the king. 'Checkmate' is a check the king cannot escape — game over." },
    { title: "Castling", body: "The king moves two squares toward a rook and the rook jumps to the king's other side. Only allowed if neither piece has moved, no squares between are occupied, and the king is not in / does not pass through check." },
    { title: "En passant", body: "A pawn that advances two squares can be captured 'in passing' by an enemy pawn on the very next move." },
    { title: "Promotion", body: "A pawn reaching the last rank promotes — most commonly to a queen, but any piece except a king is allowed." },
    { title: "Draw conditions", body: "Stalemate (no legal move but not in check), threefold repetition, 50-move rule (no capture / pawn move), insufficient material or mutual agreement." },
  ],
  scoring: {
    summary: "1 point for a win, ½ for a draw, 0 for a loss. Round-robin totals decide tournament standings; Swiss pairings and tiebreaks handle everything else.",
    winCondition: "Checkmate, resignation, or opponent's flag falling on the clock (win on time).",
  },
  penalties: [
    { title: "Illegal move", body: "First illegal move → opponent gets extra time. Second → automatic loss." },
    { title: "Touch-move", body: "Touch a piece, you must move it. Touch an opponent's piece, you must capture it — if legal." },
  ],

  positions: [
    { name: "King", role: "Must be protected — game ends if it is checkmated.", count: 1 },
    { name: "Queen", role: "Most powerful piece — moves like a rook and bishop combined.", count: 1 },
    { name: "Rook", role: "Moves any number of squares in a straight line.", count: 2 },
    { name: "Bishop", role: "Moves diagonally — one per colour of square.", count: 2 },
    { name: "Knight", role: "L-shaped move; only piece that can jump.", count: 2 },
    { name: "Pawn", role: "Slow but many; promotes at the last rank.", count: 8 },
  ],
  officiating: {
    officials: ["Arbiter — enforces rules, resolves disputes, monitors clocks"],
    summary: "In official play a certified arbiter oversees the game; players may summon the arbiter at any time.",
  },

  governingBodies: [
    { name: "Fédération Internationale des Échecs", acronym: "FIDE", founded: 1924, headquarters: "Lausanne, Switzerland", website: "https://www.fide.com" },
  ],
  majorCompetitions: [
    { name: "World Chess Championship", frequency: "biennial", founded: 1886, region: "worldwide" },
    { name: "Chess Olympiad", frequency: "biennial", founded: 1927, region: "worldwide" },
    { name: "Candidates Tournament", frequency: "biennial", region: "worldwide", note: "Winner challenges the World Champion." },
    { name: "Grand Chess Tour", frequency: "annual", founded: 2015, region: "worldwide" },
  ],
  countriesPlayed: ["IN", "US", "RU", "CN", "NO", "DE", "FR", "ES", "IR", "AR"],
  famousAthletes: [
    "Emanuel Lasker",
    "José Raúl Capablanca",
    "Bobby Fischer",
    "Garry Kasparov",
    "Viswanathan Anand",
    "Magnus Carlsen",
    "Judit Polgár",
    "Ding Liren",
  ],
  records: [
    { title: "Highest Elo rating in history", holder: "Magnus Carlsen", value: "2882 (May 2014)", year: 2014 },
    { title: "Youngest chess grandmaster", holder: "Abhimanyu Mishra", value: "12 years, 4 months, 25 days", year: 2021 },
  ],

  variants: ["chess960", "blitz-chess", "bullet-chess", "correspondence-chess"],
  relatedSports: ["xiangqi", "shogi", "go"],

  skills: ["pattern recognition", "calculation", "memory", "endurance", "psychological resilience"],

  terminology: [
    { term: "Fork", meaning: "A single move that attacks two enemy pieces at once — typically by a knight." },
    { term: "Pin", meaning: "A piece is 'pinned' if moving it would expose a more valuable piece behind it." },
    { term: "Zugzwang", meaning: "A position in which any move a player makes worsens their position." },
    { term: "Zwischenzug", meaning: "An 'in-between move' that ignores an apparent obligation to force a stronger reply." },
    { term: "Endgame", meaning: "The final phase of the game, typically with few pieces left." },
    { term: "Elo", meaning: "The rating system used to measure a player's strength — introduced by Arpad Elo in 1960." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "How the pieces move", body: "Learn king, queen, rook, bishop, knight and pawn movement.", anchor: "rules" },
      { title: "Check, checkmate & stalemate", body: "The three states that decide the game.", anchor: "rules" },
      { title: "Castling & en passant", body: "The two special moves every beginner should know.", anchor: "rules" },
      { title: "Basic opening principles", body: "Control the centre, develop your knights and bishops, castle early.", anchor: "strategies" },
    ] },
    { level: "advanced", steps: [
      { title: "Tactical motifs", body: "Forks, pins, skewers, discovered attacks, back-rank mates.", anchor: "terminology" },
      { title: "Positional play", body: "Weak squares, outposts, pawn structure, minority attacks.", anchor: "strategies" },
      { title: "Endgame technique", body: "King and pawn endgames, opposition, Lucena and Philidor positions.", anchor: "strategies" },
    ] },
  ],
  diagrams: [
    {
      id: "chess-board-setup",
      title: "Starting position",
      component: "chess-board-setup",
      slot: "playing-area",
    },
  ],
  faq: [
    { question: "Is chess considered a sport?", answer: "Yes — the IOC recognises chess as a mind sport, and FIDE is a recognised international federation." },
    { question: "How long does a chess game last?", answer: "From 1 minute (bullet) to over 7 hours (classical world-championship). Casual games can be as short or as long as you like." },
    { question: "What is the highest chess title?", answer: "Grandmaster (GM), awarded for life once a player passes 2500 Elo and achieves 3 GM norms." },
  ],

  sources: [
    { label: "FIDE Handbook — Laws of Chess", publisher: "FIDE", url: "https://handbook.fide.com" },
    { label: "Britannica — Chess", publisher: "Encyclopaedia Britannica", url: "https://www.britannica.com/topic/chess" },
  ],
  lastVerified: "2026-08-20",
  confidence: "verified",
};

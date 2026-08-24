import type { Sport } from "@/lib/types";

export const backgammon: Sport = {
  id: "backgammon",
  slug: "backgammon",
  name: "Backgammon",
  officialName: "Backgammon",
  aliases: ["Nard", "Tavla", "Tavli", "Shesh Besh"],
  shortDescription:
    "A 5,000-year-old race game — roll two dice and bear off all 15 checkers before your opponent, using the doubling cube to raise the stakes.",
  longDescription:
    "Backgammon is one of the oldest board games in the world — its ancestor, the Royal Game of Ur, was played in Mesopotamia around 3000 BCE, and a near-identical Persian game called nard dates from at least the 3rd century. Modern rules were codified in 17th-century England. Two players race 15 checkers each around a 24-point board in opposite directions using two dice, with the goal of moving all their checkers into their home board and 'bearing them off' before their opponent does the same. The 1970s doubling cube — invented in New York during the game's mid-century boom — turned backgammon into a serious probability-and-nerve game and produced the first world-championship match in 1967. Since 1979 the World Backgammon Championship has been held in Monte Carlo.",

  category: "mind-sports",
  subCategory: "dice race game",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "ancient",
  popularity: "global",

  countryOfOrigin: "IQ",
  regionOfOrigin: "Mesopotamia (modern Iraq) — Royal Game of Ur, c. 3000 BCE",
  estimatedOrigin: "Ancestor 3000 BCE; modern rules published in England 1743 by Edmond Hoyle",

  players: { min: 2, max: 2, note: "Head-to-head. Chouette variant allows 3+ players in casino settings." },
  field: {
    surfaceName: "backgammon board",
    dimensions: "24 narrow triangular points arranged in four quadrants: two home boards and two outer boards, split by a raised bar.",
    description: "Each player owns one home board and one outer board on their side; checkers move from opponent's home → outer → own outer → own home → borne off.",
  },
  equipment: [
    { name: "Backgammon board", description: "24 points in 4 quadrants, plus a central bar and a bear-off tray." },
    { name: "30 checkers", description: "15 per player in contrasting colours; usually black and white or brown and cream." },
    { name: "Two six-sided dice per player", description: "Rolled from a cup for random turn distances." },
    { name: "Doubling cube", description: "A 6-sided die numbered 2, 4, 8, 16, 32, 64 — used to raise the stakes." },
    { name: "Dice cups", description: "Prevent illegal dice manipulation in tournament play." },
  ],
  duration: {
    approximateMinutes: 15,
    structure: "A single game typically 15-30 minutes; matches run to a target 'point' (e.g. first to 11 points wins the World Championship final).",
  },
  objective: "Bear off all 15 of your checkers from the board before your opponent — while blocking their pieces, hitting exposed 'blots', and managing the doubling cube.",
  matchStructure:
    "Both players roll one die to decide who starts (whoever rolls higher plays that combined roll). Each turn: roll two dice, move any two checkers by those pip counts (or one checker twice). A checker landing on a point occupied by exactly one opposing checker 'hits' it and sends it to the bar. Doubles are played twice (four moves of that number). When all your checkers are in your home board, you bear off — remove them by rolls matching or exceeding the point they sit on. First player with no checkers on the board wins.",

  basicRules: [
    { title: "Starting position", body: "Each player starts with 15 checkers: 2 on the 24-point, 5 on the 13-point, 3 on the 8-point, and 5 on the 6-point (mirrored for the opponent)." },
    { title: "Direction of movement", body: "White moves counter-clockwise from 24 → 1; Black moves clockwise from 24 → 1 (mirrored perspective)." },
    { title: "Legal moves", body: "You may move to any point not occupied by two or more enemy checkers. A single enemy checker (a 'blot') can be hit — sent to the bar and re-entered by rolling into your opponent's home board." },
    { title: "Bearing off", body: "Once all 15 checkers are in your home board (points 1-6), roll to remove them; e.g. a 5 removes a checker from the 5-point, or moves within the home board." },
    { title: "The bar", body: "A hit checker sits on the bar and must re-enter the game on the opponent's home board before any other move." },
    { title: "Doubles", body: "Rolling a double (e.g. 4-4) plays four moves of that number instead of two." },
    { title: "Doubling cube", body: "Either player, on their turn before rolling, may 'double' — offering to double the game's stakes. The opponent must accept (take) or resign (drop) losing the current stake." },
  ],
  advancedRules: [
    { title: "Gammon and backgammon", body: "If the winner bears off all checkers while the loser has borne none, it's a gammon (2× stake). If any losing checker is still on the bar or in the winner's home board, it's a backgammon (3× stake)." },
    { title: "Automatic and beaver doubles", body: "In money play, opening doubles auto-redouble; a player may 'beaver' (immediately re-double and retain the cube) when accepting a double." },
    { title: "Jacoby rule", body: "In money play, gammons and backgammons don't count unless the doubling cube has been used — encouraging aggressive doubles." },
    { title: "Crawford rule", body: "In match play, when one player reaches match point (one away from winning), the doubling cube is disabled for the next game — the 'Crawford game'." },
  ],
  scoring: {
    summary: "Games are worth 1 point (regular win), 2 (gammon) or 3 (backgammon), multiplied by the current cube value.",
    breakdown: [
      { action: "Regular win", points: "1", note: "Loser has borne off at least one checker." },
      { action: "Gammon", points: "2", note: "Loser has borne off no checkers." },
      { action: "Backgammon", points: "3", note: "Loser still has checkers on the bar or in the winner's home board." },
      { action: "Cube multiplier", points: "×2, ×4, ...", note: "Multiplied by the current doubling cube value." },
    ],
    winCondition: "First player to bear off all 15 checkers wins the game. Match play: first to a set point total (typically 11 or 13).",
  },

  officiating: {
    officials: ["Tournament director (major events)", "Clock operator in fast time controls"],
    summary: "Casual games are self-officiated. Tournament backgammon uses chess-style clocks and a tournament director who resolves rules disputes.",
  },
  governingBodies: [
    { name: "World Backgammon Federation", acronym: "WBGF", founded: 2011, headquarters: "Belgrade, Serbia", website: "https://worldbackgammonfederation.com" },
    { name: "United States Backgammon Federation", acronym: "USBGF", founded: 2009, headquarters: "USA", website: "https://usbgf.org" },
  ],
  majorCompetitions: [
    { name: "World Backgammon Championship", frequency: "annual", founded: 1979, region: "worldwide", note: "Held in Monte Carlo." },
    { name: "PartyGaming Premier League Backgammon", frequency: "annual", founded: 2007, region: "worldwide" },
    { name: "US Backgammon Championships", frequency: "annual", founded: 2010, region: "US" },
    { name: "Nordic Open", frequency: "annual", founded: 1978, region: "Northern Europe" },
  ],
  countriesPlayed: ["US", "GB", "TR", "IR", "GR", "IL", "DK", "DE", "MC", "IN"],
  famousAthletes: [
    "Paul Magriel",
    "Bill Robertie",
    "Nack Ballard",
    "Falafel Natanzon",
    "Mochy Mochizuki",
    "Kit Woolsey",
    "Jerry Grandell",
  ],
  records: [
    { title: "First World Backgammon Champion", holder: "Tim Holland (USA)", value: "1967 Las Vegas", year: 1967 },
    { title: "Most WBIF World Championships", holder: "Falafel Natanzon (USA)", value: "3", year: 2011 },
  ],

  variants: ["nard", "acey-deucey", "hyper-backgammon", "nackgammon"],
  relatedSports: ["chess", "go-board-game", "poker"],

  skills: ["probability calculation", "pip counting", "risk management", "cube handling", "pattern recognition"],
  strategies: [
    { title: "Running game", body: "Race to bear off — best when you're ahead in the pip count." },
    { title: "Holding game", body: "Keep an anchor deep in the opponent's home board to hit stray checkers." },
    { title: "Priming game", body: "Build a wall of consecutive points to trap opponent's back checkers." },
    { title: "Blitz", body: "Aggressive hitting to send opponents to the bar while building your inner board." },
    { title: "Back game", body: "When far behind, hold two or more anchors in the opponent's home board and wait for a shot." },
  ],

  terminology: [
    { term: "Blot", meaning: "A single checker on a point, vulnerable to being hit." },
    { term: "Anchor", meaning: "Two or more checkers held on a point in the opponent's home or outer board." },
    { term: "Bar", meaning: "The central raised strip where hit checkers wait to re-enter." },
    { term: "Bear off", meaning: "Remove checkers from the board — the winning move." },
    { term: "Pip count", meaning: "Total number of pips a player must roll to bear off all checkers." },
    { term: "Prime", meaning: "Six consecutive points blocking the opponent — an impassable wall." },
    { term: "Gammon", meaning: "Winning while opponent has borne off nothing (2× stake)." },
    { term: "Doubling cube", meaning: "Six-sided die used to raise stakes (2, 4, 8, 16, 32, 64)." },
    { term: "Take/drop", meaning: "Accepting or declining a doubling cube offer." },
    { term: "Crawford game", meaning: "The game after one player reaches match point — cube disabled." },
    { term: "Chouette", meaning: "Multi-player money variant where one 'box' plays against a team." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Setup and direction", body: "Learn the starting position and each player's direction of movement." },
      { title: "Legal moves", body: "How to play a roll — one checker twice or two checkers by each die value." },
      { title: "Hitting and the bar", body: "How to hit a blot and how to re-enter from the bar." },
      { title: "Bearing off", body: "Bring all checkers into your home board, then remove them by exact or excess rolls." },
    ] },
    { level: "intermediate", steps: [
      { title: "The doubling cube", body: "When to offer, accept and refuse the cube — the single most important skill." },
      { title: "Pip counting", body: "Add your remaining pips to know whether to race, hold, or double." },
      { title: "Opening theory", body: "Best plays for each of the 15 possible opening rolls (11, 21, 22, 31, 32...)." },
      { title: "Common tactical positions", body: "Bearoff distributions, priming positions, back-game plays." },
    ] },
    { level: "advanced", steps: [
      { title: "Match play strategy", body: "How score-affects cube decisions; the Crawford rule; post-Crawford play." },
      { title: "Bot analysis", body: "Use eXtreme Gammon, Snowie, or GNU Backgammon to review your play and quantify errors." },
      { title: "Tournament preparation", body: "Time controls, mental stamina, session management." },
    ] },
  ],
  faq: [
    { question: "Is backgammon a game of skill or luck?", answer: "Both — dice provide short-term randomness, but over hundreds of games skill dominates. Bots and top players consistently outperform beginners by a wide margin." },
    { question: "What's the pip count?", answer: "The total number of pips a player must roll to bear off all their checkers. It's the fastest way to know whether you're winning or losing the race." },
    { question: "When should I double?", answer: "Roughly when you have a 65-75% chance to win but still under 80%. Beyond 80% the opponent will drop, forfeiting the current stake." },
    { question: "What's the difference between a gammon and a backgammon?", answer: "A gammon is 2× stake — winner bears off all 15 while loser has borne off zero. A backgammon is 3× stake — the loser also has checkers on the bar or in the winner's home board." },
    { question: "Is there online backgammon?", answer: "Yes — Backgammon Galaxy, Play65 and OpenGammon are the main serious platforms, plus casual clients like Backgammon Live." },
  ],

  wikipediaTitle: "Backgammon",
  sources: [
    { label: "Wikipedia — Backgammon", url: "https://en.wikipedia.org/wiki/Backgammon", publisher: "Wikipedia" },
    { label: "US Backgammon Federation — Official Rules", url: "https://usbgf.org", publisher: "USBGF" },
    { label: "Britannica — Backgammon", url: "https://www.britannica.com/topic/backgammon", publisher: "Encyclopædia Britannica" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

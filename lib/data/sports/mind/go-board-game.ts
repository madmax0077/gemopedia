import type { Sport } from "@/lib/types";

export const goBoardGame: Sport = {
  id: "go-board-game",
  slug: "go-board-game",
  name: "Go",
  officialName: "Go",
  aliases: ["Weiqi (围棋)", "Baduk (바둑)", "I-go (囲碁)"],
  shortDescription:
    "Ancient East Asian board game — surround more territory than your opponent on a 19×19 grid of intersections.",
  longDescription:
    "Go (called Weiqi in Chinese, Baduk in Korean, and I-go in Japanese) is a two-player abstract strategy game invented in China over 2,500 years ago and now played by an estimated 40 million people worldwide. Players alternately place black and white stones on the intersections of a 19×19 grid, aiming to surround more territory than the opponent. Despite rules that fit on a postcard, Go has more possible legal positions than atoms in the observable universe; it took DeepMind's AlphaGo — a milestone in artificial intelligence — until 2016 to defeat a top human, Lee Sedol. Go is recognised as a mind sport by the IOC and the International Mind Sports Association.",

  category: "mind-sports",
  subCategory: "abstract strategy game",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "ancient",
  popularity: "global",

  countryOfOrigin: "CN",
  regionOfOrigin: "China — spread to Korea and Japan by 500 CE",
  estimatedOrigin: "c. 6th-4th century BCE (China); documented in the Zuozhuan (c. 548 BCE)",

  players: { min: 2, max: 2, note: "Head-to-head only. Team formats exist in leagues but bouts are 1v1." },
  field: {
    surfaceName: "goban",
    dimensions: "19×19 grid producing 361 intersections. Smaller 9×9 and 13×13 boards used for teaching and casual play.",
    description: "Wooden board (kaya wood traditionally), marked with 19 horizontal and 19 vertical lines. Nine handicap points (hoshi) marked with dots.",
  },
  equipment: [
    { name: "Goban (board)", description: "19×19 wooden board with 361 intersections." },
    { name: "Stones (goishi)", description: "181 black + 180 white lens-shaped stones, traditionally slate and clamshell." },
    { name: "Bowls (go ke)", description: "Wooden bowls that hold each player's stones." },
    { name: "Clock", description: "For timed games — from 10 minutes blitz to multi-hour classical." },
  ],
  duration: {
    approximateMinutes: 90,
    structure: "Blitz: 10-30 minutes total. Classical: 1-3 hours with byoyomi overtime. Historic Japanese titles used 2-day sessions.",
  },
  objective: "Control more territory (empty intersections surrounded by your stones) than your opponent, adding captured stones to your score.",
  matchStructure:
    "Black plays first; players alternate placing one stone at a time on empty intersections. Stones do not move once placed. A group of stones with no liberties (empty adjacent intersections) is captured and removed. When both players pass consecutively, the game ends. Territory is counted (dead stones removed) and komi (compensation for playing second) added to White's score. Highest score wins.",

  basicRules: [
    { title: "Placing stones", body: "Black moves first. Each turn place one stone on an empty intersection. Once placed, stones don't move (except when captured)." },
    { title: "Liberties and capture", body: "Each stone or connected group has 'liberties' — empty adjacent intersections. When a group has zero liberties, it is captured and removed from the board." },
    { title: "Suicide rule", body: "You may not play a stone that leaves your own group with zero liberties (unless the move captures enemy stones and creates a liberty)." },
    { title: "Ko rule", body: "You cannot immediately recapture a single stone that would recreate the previous board position — this prevents endless loops." },
    { title: "End of game", body: "The game ends when both players pass consecutively. Dead stones (those that cannot survive) are removed; remaining stones and their surrounded empty intersections are counted." },
    { title: "Scoring (territory vs area)", body: "Japanese/Korean rules: count empty territory + captured stones. Chinese rules: count territory + your stones on the board. Both usually yield similar results." },
    { title: "Komi", body: "White receives a compensation score for playing second — typically 6.5 (Japanese) or 7.5 (Chinese) points." },
  ],
  advancedRules: [
    { title: "Superko rule", body: "Some rulesets extend the ko rule to prevent any board position from repeating — used to prevent complex triple-ko situations." },
    { title: "Handicap games", body: "Weaker players place 2-9 stones on the hoshi points before White moves, evening out play across ranks." },
    { title: "Bent four in the corner", body: "A famous life-and-death shape officially declared dead by the Japanese Go Association without needing to be played out." },
    { title: "Seki (mutual life)", body: "Two adjacent groups that can't capture each other — neither counts as territory or captures." },
  ],
  scoring: {
    summary: "Points = territory (empty intersections surrounded) + captured stones (Japanese) or stones on board (Chinese) + komi (White).",
    breakdown: [
      { action: "Empty intersection surrounded", points: "1", note: "Territory scoring." },
      { action: "Captured stone (Japanese rules)", points: "1", note: "Only in Japanese/Korean scoring." },
      { action: "Komi (White)", points: "6.5 or 7.5", note: "Compensation for playing second." },
    ],
    winCondition: "Highest final score after both players pass and dead stones are removed. Resignation is also common at pro level once the losing player concedes.",
  },

  officiating: {
    officials: ["Referee (major tournaments)", "Recorder (professional matches)"],
    summary: "Most casual games are self-officiated. Professional and top amateur tournaments have referees to resolve rules disputes and enforce time controls.",
  },
  governingBodies: [
    { name: "International Go Federation", acronym: "IGF", founded: 1982, headquarters: "Tokyo, Japan", website: "https://intergofed.org" },
    { name: "Nihon Ki-in", founded: 1924, headquarters: "Tokyo, Japan", website: "https://www.nihonkiin.or.jp" },
    { name: "Chinese Weiqi Association", founded: 1962, headquarters: "Beijing, China" },
    { name: "Korea Baduk Association", founded: 1954, headquarters: "Seoul, South Korea", website: "https://www.baduk.or.kr" },
  ],
  majorCompetitions: [
    { name: "Ing Cup", frequency: "quadrennial", founded: 1988, region: "worldwide", note: "First truly international pro tournament." },
    { name: "LG Cup", frequency: "annual", founded: 1996, region: "worldwide" },
    { name: "Samsung Cup", frequency: "annual", founded: 1996, region: "worldwide" },
    { name: "World Amateur Go Championship", frequency: "annual", founded: 1979, region: "worldwide" },
    { name: "Japanese Seven Major Titles (Kisei, Meijin, Honinbo, etc.)", frequency: "annual", region: "Japan" },
    { name: "World Mind Sports Games", frequency: "quadrennial", founded: 2008, region: "worldwide" },
  ],
  countriesPlayed: ["CN", "KR", "JP", "TW", "US", "DE", "FR", "RU", "GB", "HU", "VN"],
  famousAthletes: [
    "Go Seigen (Wu Qingyuan)",
    "Cho Chikun",
    "Lee Chang-ho",
    "Lee Sedol",
    "Ke Jie",
    "Iyama Yuta",
    "Shin Jinseo",
    "Nie Weiping",
    "Fujisawa Shuko",
  ],
  records: [
    { title: "Youngest world Go champion", holder: "Shin Jinseo (KOR)", value: "16 y 10 m — Chunlan Cup 2016", year: 2016 },
    { title: "Most Nihon Ki-in Kisei titles", holder: "Cho Chikun", value: "8 consecutive", year: 1994 },
    { title: "AlphaGo defeats Lee Sedol", holder: "AlphaGo (DeepMind)", value: "4-1 in a 5-game match", year: 2016 },
  ],

  variants: ["gomoku", "renju", "atari-go"],
  relatedSports: ["chess", "xiangqi", "shogi", "backgammon"],

  skills: ["pattern recognition", "reading (calculation)", "positional judgment", "endgame precision", "psychological resilience"],
  strategies: [
    { title: "Fuseki (opening)", body: "Establish influence in the corners and sides — 4-4, 3-4, and 3-3 openings each have deep theory." },
    { title: "Joseki (corner sequences)", body: "Learn common corner sequences — the standard 'book moves' from centuries of play." },
    { title: "Middlegame fighting", body: "Attack weak groups; use forcing moves (sente) before defending own weaknesses." },
    { title: "Endgame (yose)", body: "Count value of each remaining move; play highest-value moves first — precise counting decides most close games." },
    { title: "Life and death (tsumego)", body: "Reading skill is trained by solving daily life-and-death problems — the single most important improvement drill." },
  ],

  terminology: [
    { term: "Liberty", meaning: "Empty intersection adjacent to a stone or group — required for a group to stay on the board." },
    { term: "Atari", meaning: "A group with exactly one liberty left — one move from capture." },
    { term: "Sente / gote", meaning: "The initiative — moves that force reply (sente) vs. those that end your turn passive (gote)." },
    { term: "Joseki", meaning: "A recognised corner sequence — the 'book' openings of Go." },
    { term: "Fuseki", meaning: "The opening phase — establishing framework across the whole board." },
    { term: "Yose", meaning: "The endgame — precise territorial reduction." },
    { term: "Tsumego", meaning: "Life-and-death problems — corner or edge puzzles trained daily." },
    { term: "Ko", meaning: "A repeating single-stone capture — governed by the ko rule." },
    { term: "Komi", meaning: "Compensation score for White (6.5 or 7.5) for playing second." },
    { term: "Seki", meaning: "Mutual life — two adjacent groups that neither can capture." },
    { term: "Hane", meaning: "A diagonal move that wraps around an enemy stone — a fundamental shape." },
    { term: "Dan / kyu", meaning: "Amateur ranks (30 kyu → 1 kyu → 1 dan → 7 dan) and pro ranks (1 dan → 9 dan)." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Rules (5 minutes)", body: "Place stones; capture by removing liberties; ko rule; count territory. That's it." },
      { title: "First game on 9×9", body: "Play a full game on the smaller board to get comfortable with capture and territory." },
      { title: "Basic shapes", body: "Empty triangle (bad), bamboo joint (good), tiger's mouth (good), one-space jump (efficient)." },
      { title: "First tsumego", body: "Solve 10-20 simple life-and-death problems per day — this is how everyone improves." },
    ] },
    { level: "intermediate", steps: [
      { title: "13×13 games", body: "Bridge the gap to full 19×19 — introduces multi-corner strategy." },
      { title: "Basic joseki", body: "Learn 3-4 corner sequences per opening (4-4, 3-4) — do not memorise, understand." },
      { title: "Endgame counting", body: "Compare move values to prioritise correctly in yose." },
      { title: "Reviewing games", body: "Analyse your losses with a stronger player or AI — the single fastest improvement source." },
    ] },
    { level: "advanced", steps: [
      { title: "Whole-board direction", body: "Think about which side of the board each stone favours." },
      { title: "Fighting spirit", body: "Learn when to attack, when to sacrifice, when to defend." },
      { title: "Studying pro games", body: "Replay master games move by move; guess the next move to sharpen intuition." },
      { title: "Using AI review", body: "KataGo, Leela Zero and Go pro analysis engines give per-move evaluations." },
    ] },
  ],
  faq: [
    { question: "Is Go harder than chess?", answer: "By some measures, yes: Go has ~10^170 legal positions vs. chess's ~10^47, and computers only surpassed top humans in 2016 (DeepMind's AlphaGo) — 19 years after Deep Blue beat Kasparov at chess." },
    { question: "How long does it take to learn Go?", answer: "You can learn the rules in five minutes and be playing on 9×9 by evening one. Reaching a strong amateur level (say 5 kyu) usually takes 1-3 years of regular play." },
    { question: "What's the difference between Chinese and Japanese rules?", answer: "Chinese rules count area (territory + your own stones); Japanese rules count territory + captured stones. Both usually give the same winner but score differently. Japanese komi is 6.5, Chinese 7.5." },
    { question: "Where can I play Go online?", answer: "Online Go Server (OGS), KGS, Fox Weiqi (China), Tygem (Korea), Pandanet-IGS (Japan) are the main servers. AI opponents like KataGo, Leela Zero and Sabaki are open-source." },
  ],

  wikipediaTitle: "Go (game)",
  sources: [
    { label: "Wikipedia — Go (game)", url: "https://en.wikipedia.org/wiki/Go_(game)", publisher: "Wikipedia" },
    { label: "International Go Federation", url: "https://intergofed.org", publisher: "IGF" },
    { label: "Sensei's Library — Go rules", url: "https://senseis.xmp.net/?RulesOfGo", publisher: "Sensei's Library" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

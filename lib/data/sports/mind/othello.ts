import type { Sport } from "@/lib/types";

export const othello: Sport = {
  id: "othello",
  slug: "othello",
  name: "Othello",
  officialName: "Othello (World Othello Federation)",
  aliases: ["Reversi", "Reversi (historic name)", "Black + White"],
  shortDescription:
    "Modern re-branding (1971, Japan) of the 1883 English game Reversi — 8×8 board with dual-color disks; place a disk to flank + flip opponent's disks; the player with the most disks when the board is full wins.",
  longDescription:
    "Othello is a two-player abstract strategy game invented in 1971 by Japanese salesman Goro Hasegawa as a commercial re-branding + rule refinement of the 1883 English game Reversi (Lewis Waterman + John W. Mollett). Named after Shakespeare's play 'Othello' (with its Black + White protagonist/enemy imagery), the game became a global phenomenon following its 1975 US release by Gabriel Industries and Japanese publisher Tsukuda Original. Played on an 8×8 board with 64 double-sided black/white disks, players take turns placing a disk of their color on the board such that it 'flanks' (traps between two of their own) at least one opposing disk in a straight line — those flanked disks flip to the player's color. Game ends when the board is full OR no legal move exists for either player. The player with the most disks wins. The World Othello Federation (WOF) has hosted the World Othello Championship annually since 1977 (Tokyo). Legendary players: Hideshi Tamenori (Japan, 6× World Champion, considered strongest human ever), Ben Seeley (US, multiple World Champion), Nicky van den Biggelaar (Netherlands, 3× World Champion). Modern Othello theory is extensively computer-analyzed — Logistello (1997) and Zebra engines exceed human ability. The game is considered SOLVED for 6×6 board (opening player forced to lose with perfect play), but 8×8 remains unsolved despite 40+ years of computer analysis.",

  category: "mind-sports",
  subCategory: "abstract strategy — territory flipping",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (1971 commercial version by Goro Hasegawa); descended from 1883 English game Reversi",
  estimatedOrigin: "Reversi invented 1883 (Waterman + Mollett, England); Othello re-branded 1971 (Goro Hasegawa, Japan); World Championship since 1977",

  players: { min: 2, max: 2, note: "1v1 abstract strategy; no team format at competitive level." },
  field: {
    surfaceName: "8×8 board",
    dimensions: "8×8 grid (64 squares); official board 25×25 cm typical",
    description: "Standard 8×8 grid, usually green felt with grid lines. Official WOF competition boards are green with black grid, black + white flipping disks.",
  },
  equipment: [
    { name: "8×8 Othello board", description: "Green felt or plastic board with grid; commercial + WOF-approved versions available." },
    { name: "64 flipping disks", description: "Black on one side, white on the other; disks flip to opposite color when captured." },
    { name: "Chess clock (competition)", description: "Standard 30-minute-per-player or byoyomi format; some events use faster time controls." },
  ],
  duration: {
    approximateMinutes: 25,
    structure: "Casual: 10–20 min. Tournament: 30 min per player + increment. World Championship rounds: 60 min per player.",
  },
  objective:
    "End the game with more disks of your color on the board than your opponent. Achieved by flipping opponent's disks through 'flanking' — placing a disk that traps opponent's line between two of your own.",
  matchStructure:
    "Starting position: 4 disks in the center (2 black + 2 white in diagonal formation). Black moves first. Players alternate placing one disk. Placed disk must flank at least one opposing disk in a straight line (horizontal, vertical, or diagonal). Flanked opposing disks flip to placer's color. If no legal flanking move exists, player must PASS. Game ends when: board is full (64 moves), or neither player has legal moves. Player with more disks wins; tie possible.",

  basicRules: [
    { title: "Starting position: 4 center disks", body: "Start with 2 black + 2 white in diagonal center formation. This is the ONLY board setup rule." },
    { title: "Black moves first", body: "Convention: Black always moves first (no advantage argued either way in modern theory)." },
    { title: "Placed disk must flank", body: "Every move must flank (trap between two of your own) at least one opposing disk in a straight line — horizontal, vertical, OR diagonal." },
    { title: "Flipped disks change color", body: "All flanked opposing disks in the line flip to the placer's color. Multiple lines may flip simultaneously." },
    { title: "Pass if no legal move", body: "If no flanking move exists, player must PASS (opponent moves again). Passing is legal; game continues until BOTH players cannot move." },
    { title: "Game ends when board full or both pass", body: "Board full (64 moves) or both pass consecutively. Player with more disks wins; ties allowed (32–32)." },
  ],
  advancedRules: [
    { title: "Corners are permanent", body: "Corner squares (a1, a8, h1, h8) can NEVER be flipped once occupied — the only permanent territory. Winning corners = usually winning game." },
    { title: "X-squares + C-squares are traps", body: "Squares diagonal-adjacent to corners (b2, b7, g2, g7 = X-squares; a2, a7, h2, h7 etc = C-squares) often give opponent corner access. Avoid early." },
    { title: "Mobility over material", body: "Counter-intuitive Othello wisdom: having FEWER disks mid-game is often better (opponent has fewer flanking targets)." },
    { title: "Parity theory", body: "Number of open squares determines who gets last move in a region; last move often maximally profitable. Advanced theory topic." },
    { title: "Edge control", body: "Edge squares (2nd rank/file from edge) are structurally important; wall structures control middle-to-endgame flow." },
    { title: "Solved for 6×6 (Second player wins)", body: "Computer proof: on a 6×6 board with perfect play, second player wins. 8×8 remains unsolved despite exhaustive computer analysis." },
  ],
  scoring: {
    summary: "Final disk count. Higher-count player wins by (own_disks – opponent_disks) margin. Ties are draws.",
    winCondition: "More disks of own color when game ends. Ties (32–32) count as draws.",
    breakdown: [
      { action: "Win by disk count", points: "Margin = own_disks – opponent_disks" },
      { action: "Sweep (opponent has 0 disks)", points: "Automatic win at any move count — very rare at top level" },
      { action: "Tie (32–32)", points: "1/2 point each in tournament scoring" },
      { action: "Opponent runs out of legal moves", points: "Game may end early with material advantage" },
    ],
  },
  penalties: [
    { title: "Illegal move", body: "Rare in Othello — either flanks or doesn't. Move retracted; clock start = warning; second illegal = forfeit." },
    { title: "Time forfeit", body: "Standard tournament rule; opponent wins by remaining time or default." },
  ],

  positions: [
    { name: "Black (moves first)", role: "First player.", count: 1 },
    { name: "White (moves second)", role: "Second player.", count: 1 },
  ],
  officiating: {
    officials: ["Match arbiter (professional games)", "Time-keeper", "Tournament director"],
    summary: "Casual play: none. WOF-sanctioned events use tournament arbiters familiar with pass rules + parity disputes.",
  },

  governingBodies: [
    { name: "World Othello Federation (WOF)", founded: 1979, headquarters: "Sweden (rotating board)", website: "https://www.worldothello.org" },
    { name: "United States Othello Association (USOA)", founded: 1970, headquarters: "USA", website: "https://usothello.com" },
    { name: "Japan Othello Association", founded: 1973, headquarters: "Tokyo, Japan" },
  ],
  majorCompetitions: [
    { name: "World Othello Championship (WOC)", frequency: "annual", founded: 1977, region: "rotating (typically Japan, Europe, USA)" },
    { name: "European Grand Prix", frequency: "annual", founded: 1980, region: "Europe (multiple events)" },
    { name: "US National Othello Championship", frequency: "annual", founded: 1978, region: "USA" },
    { name: "Japan National Championships", frequency: "annual", founded: 1973, region: "Japan" },
  ],
  countriesPlayed: ["JP", "US", "SE", "FR", "GB", "NL", "IT", "TH", "SG", "CN", "TW", "AU", "DE", "PL"],
  famousAthletes: [
    "Hideshi Tamenori (JP, 6× World Champion — considered strongest human ever)",
    "Takeshi Murakami (JP, 3× World Champion 1994, 1997, 1998)",
    "Ben Seeley (US, 2× World Champion 2003 + 2007)",
    "Nicky van den Biggelaar (NL, 3× World Champion 2013, 2015, 2019)",
    "Piyanat Aunchulee (TH, 2019 World Championship)",
    "Kazuki Okamoto (JP, 2020s dominant player)",
    "Yusuke Takanashi (JP, 2018 World Champion)",
  ],
  records: [
    { title: "Most World Championship titles (individual)", holder: "Hideshi Tamenori (JP)", value: "6 titles: 1993, 1995, 1996, 2001, 2003, 2004", year: 2004 },
    { title: "Youngest World Champion", holder: "Various", value: "Kazuki Okamoto (JP, age 22 at 2020 title)", year: 2020 },
    { title: "Computer perfect play proof (6×6)", holder: "Joel Feinstein + others", value: "Proved 1993 that 6×6 board is a second-player win with perfect play", year: 1993 },
    { title: "Strongest Othello engine (est.)", holder: "Zebra (contemporary)", value: "Estimated 3000+ Elo rating, beyond any human", year: 2010 },
  ],

  variants: ["othello-standard-8x8", "reversi-original-1883", "6x6-solved-variant", "10x10-large-board", "3d-othello-experimental"],
  relatedSports: ["chess", "checkers", "go-board-game", "abalone", "connect-four"],

  skills: [
    "long-range calculation (multi-move sequences)",
    "positional evaluation (mobility vs. material)",
    "opening theory memorization (extensive)",
    "endgame parity calculation",
    "corner + edge tactics",
    "psychological pressure (opponent's blunder invitation)",
  ],
  strategies: [
    { title: "Prioritize mobility over material", body: "Counter-intuitive: more disks mid-game = fewer flanking options for opponent = STRONGER position. Give up material early to gain flanking flexibility." },
    { title: "Corners are king", body: "4 corners are permanent territory. Playing X-squares (b2 etc) early risks giving opponent corners. Avoid corner-adjacent squares until safe." },
    { title: "Study opening theory", body: "Modern Othello has memorized opening lines (Diagonal Opening, Perpendicular Opening, Parallel Opening). Top players know 20+ moves deep." },
    { title: "Endgame parity", body: "Advanced concept: count open squares in each region; the player forced to move first often loses that region. Master parity to plan endgames." },
    { title: "Force pass on opponent", body: "If opponent must pass, you get an extra move — decisive advantage. Set up positions where opponent has NO legal moves." },
    { title: "Study engine games", body: "Zebra + WZebra engines dominate humans; studying engine analysis of past championships builds opening depth + endgame precision." },
  ],

  terminology: [
    { term: "Othello", meaning: "The 1971 branded name (Shakespeare reference — Black vs. White)." },
    { term: "Reversi", meaning: "The original 1883 English name; still used in some contexts + open-source software." },
    { term: "Corner", meaning: "The 4 permanent squares (a1, a8, h1, h8) — cannot be flipped once occupied." },
    { term: "X-square", meaning: "Squares diagonally adjacent to corners (b2, b7, g2, g7) — often trap-giving-opponent-corners." },
    { term: "C-square", meaning: "Squares orthogonally adjacent to corners (a2, a7, h2, h7 etc) — often risky." },
    { term: "Mobility", meaning: "Number of legal flanking moves available; more mobility = usually better position." },
    { term: "Parity", meaning: "Whether an even or odd number of open squares remains in a region — determines last-move advantage." },
    { term: "Pass", meaning: "When no legal flanking move exists, player must skip turn; opponent moves again." },
    { term: "Sweep", meaning: "Winning with opponent having 0 disks — extremely rare at top level." },
    { term: "Diagonal Opening", meaning: "Common opening starting on the diagonal — one of 3 main opening families." },
    { term: "WZebra", meaning: "Modern top Othello analysis engine + database." },
    { term: "Solved for 6×6", meaning: "Computer proof (1993) that 6×6 Othello is a second-player win with perfect play." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Learn basic rules + play online", body: "Playok.com, othello.online, WOF-affiliated sites offer free play. 10-min games teach basics quickly." },
        { title: "Understand corners + edges", body: "Corners are the game's key structural feature. Play defensive Othello first — deny opponent corners." },
        { title: "Beat beginner AI consistently", body: "Free apps offer AI difficulty levels. Consistently beat beginner AI before moving to intermediate." },
      ],
    },
    {
      level: "intermediate",
      steps: [
        { title: "Study opening theory", body: "Learn 3 main opening families (Diagonal, Perpendicular, Parallel). WOF publishes opening books + online databases." },
        { title: "Play WZebra + analyze losses", body: "WZebra engine offers position analysis. Play games; analyze mistakes; internalize patterns." },
        { title: "Join national federation + tournaments", body: "US: USOA. Japan: JOA. Europe: national federations. Start attending local + regional tournaments." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Compete at World Championship qualifiers", body: "National championship winners typically qualify for World Championships." },
        { title: "Study Tamenori + Ben Seeley game collections", body: "Master strongest human games; internalize positional judgment." },
        { title: "Endgame parity + tempo mastery", body: "Advanced Othello is about last-move calculation. Master parity + you compete at world level." },
      ],
    },
  ],

  faq: [
    { question: "What is Othello / Reversi?", answer: "An abstract strategy game on an 8×8 board where players place double-sided black/white disks. Placing a disk that flanks (traps between two of your own) opponent's disks flips those disks to your color. Player with more disks at game end wins. Originally invented as 'Reversi' in England 1883; re-branded as 'Othello' in Japan 1971 (Shakespeare reference — Black vs. White). Sold 40+ million copies worldwide; World Championships since 1977." },
    { question: "Is Othello the same as Reversi?", answer: "Very similar but not identical. Reversi (1883) had some minor rule variations (no fixed starting position — players chose where to place initial disks; different endgame rules). Othello (1971) standardized: fixed starting position (4 disks in center diagonal), passing when no move exists, current tournament rules. The MERC (Modern Emergent Reversi Community) still plays classical Reversi rules; WOF plays Othello rules. In practice: the games are essentially the same modern game." },
    { question: "How long does an Othello game take?", answer: "Casual: 10–20 minutes. Tournament: 30–60 minutes per player. World Championship rounds: 60 min per player + increment. Blitz variants: 5–10 minutes. Games always end within 60 moves (board is 64 squares; game rarely reaches full board). Speed of play depends more on player analysis time than any physical constraint." },
    { question: "Who is the greatest Othello player?", answer: "Consensus GOAT: Hideshi Tamenori (JP) — 6× World Champion (1993, 1995, 1996, 2001, 2003, 2004). Dominant across two decades of top-level play; his positional intuition considered peerless. Modern era: Nicky van den Biggelaar (NL, 3× World Champion 2013, 2015, 2019) and Kazuki Okamoto (JP, current dominant player). Computers (WZebra, Edax) are far stronger than any human." },
    { question: "Is Othello solved?", answer: "6×6 Othello is SOLVED — proven 1993 that second player wins with perfect play. 8×8 (standard) is UNSOLVED despite 40+ years of intense computer analysis. Best guess based on WZebra engine play: 8×8 is likely a DRAW with perfect play. This makes Othello more strategically rich than 'solved' games like Tic-Tac-Toe. Human vs. human games remain deeply competitive." },
    { question: "Can I play Othello on the computer?", answer: "Yes — many options. Free web + apps: playok.com, othelloonline.com, WZebra engine (free download). Mobile apps: Reversi + Othello (Google Play + App Store). Serious analysis: WZebra + Edax + NTest engines dominate humans; used for game analysis + opening study by top players. Google search 'WZebra' to download the standard research engine." },
  ],

  wikipediaTitle: "Reversi",
  sources: [
    { label: "World Othello Federation (WOF)", url: "https://www.worldothello.org", publisher: "WOF" },
    { label: "Wikipedia — Reversi", url: "https://en.wikipedia.org/wiki/Reversi", publisher: "Wikipedia" },
    { label: "WZebra (top Othello analysis engine)", url: "https://radagast.se/othello/zebra.html", publisher: "Gunnar Andersson" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const janggi: Sport = {
  id: "janggi",
  slug: "janggi",
  name: "Janggi",
  officialName: "Janggi (장기) — Korean Chess",
  aliases: ["Korean Chess", "장기", "Jang-Gi"],
  shortDescription:
    "Korean strategy game descended from Chinese Xiangqi via the Silk Road — 9×10 board with distinctive octagonal pieces, no river, uniquely powerful Cannon (Po) that must 'jump' another piece to capture; contested professionally in Korea with televised events.",
  longDescription:
    "Janggi (장기, 將棋) is the Korean national board game of the chess family, descended from Chinese Xiangqi (象棋) which spread across East Asia via the Silk Road around the 7th century AD. Played on a 9×10 grid (like Xiangqi but WITHOUT the central 'river'), Janggi uses distinctive octagonal + circular wooden pieces marked with Chinese characters (some traditional, some simplified). The two kings (King/General 왕 wang or 궁 gung) sit in fortresses (palaces) at each end. Janggi differs from Xiangqi in critical ways: (1) no river between armies; (2) the Cannon (포 Po) MUST jump an intervening piece to move OR capture (Xiangqi Cannons only jump to capture); (3) Cannons cannot jump other Cannons; (4) the Elephant (象 Sang) has different movement rules; (5) the Guards (士 Sa) move differently; (6) the King can pass its turn (called 'bit-jang'), which affects endgame strategy dramatically. Professional Janggi has televised competitions in South Korea; the Korea Janggi Association (KJA) governs the sport with a professional dan-ranking system. The strongest Janggi player of all time is Seon-Duk Byeon (변선덕, 9-dan) — Korea's Kasparov-equivalent.",

  category: "mind-sports",
  subCategory: "chess family — Korean abstract strategy",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "medieval",
  popularity: "regional",

  countryOfOrigin: "KR",
  regionOfOrigin: "Korea (national); descended from Chinese Xiangqi via medieval Silk Road transmission",
  estimatedOrigin: "Descended from Xiangqi ~7th century AD; Korean variant codified ~11th–13th century Goryeo dynasty; modern KJA founded 1956",

  players: { min: 2, max: 2, note: "1v1; team + national championship formats exist." },
  field: {
    surfaceName: "9×10 wooden or paper board",
    dimensions: "9 files × 10 ranks; grid lines with two 3×3 'palace' fortresses at each end",
    description: "Standard board: 9×10 grid painted on wood or paper. Distinctive Korean-style board with palaces marked as 3×3 grids at both ends. Traditional handcrafted boards inlaid with mother-of-pearl.",
  },
  equipment: [
    { name: "Janggi board", description: "9×10 grid with two 3×3 palace fortresses marked. Traditional Korean handcrafted boards feature Korean lacquerware + mother-of-pearl." },
    { name: "Janggi pieces", description: "16 pieces per side (32 total) — octagonal Kings/Guards, circular pieces for Chariots/Horses/Elephants/Cannons/Pawns. Marked with Chinese characters." },
    { name: "Piece colors", description: "Red side (Han, 한 — Han dynasty China) vs. Blue side (Cho, 초 — Chu kingdom China) — echo of historic Han-Chu Contention 206–202 BC." },
    { name: "Chess clock (competition)", description: "Byoyomi-style Japanese/Korean clock used in professional events; 30-minute main time + 30-second countdown per move." },
  ],
  duration: {
    approximateMinutes: 45,
    structure: "Casual: 15–60 min. Professional: 90–180 min per game with clock; top-flight events use 45min + 30-sec byo-yomi per move.",
  },
  objective:
    "Checkmate the opponent's King (or force stalemate that's counted as loss in some Korean traditions; unusual — see FAQ). Alternate move captures + tactical checks used to force positions.",
  matchStructure:
    "Standard opening: both players' pieces placed identically. Blue (Cho) traditionally moves first (opposite of Xiangqi where Red moves first). Players alternate moves. Game ends with: checkmate (King captured or unable to escape), resignation, time forfeit, or (in some Korean events) declared draw after 100+ moves.",

  basicRules: [
    { title: "King (Wang / Gung 왕/궁)", body: "Confined to the 3×3 palace. Moves 1 point orthogonally OR along the palace's diagonal lines. Cannot leave palace." },
    { title: "Guard (Sa 사)", body: "Also palace-bound; moves 1 point along palace grid + diagonal lines. Guards protect King close-range." },
    { title: "Elephant (Sang 상)", body: "Moves 1 step diagonally + 2 steps orthogonally (like a longer knight); BLOCKED by any piece in the way. Different from Xiangqi Elephant." },
    { title: "Horse (Ma 마)", body: "Moves 1 step orthogonally + 1 step diagonally outward (like Xiangqi); BLOCKED by piece adjacent orthogonally." },
    { title: "Chariot (Cha 차)", body: "Moves any number of steps orthogonally (like Rook). MOST powerful piece — approximately 15 points in value." },
    { title: "Cannon (Po 포)", body: "Must JUMP one other piece (any color) to move OR capture. CANNOT jump over other Cannons. Cannot be captured by another Cannon jumping over it (in Korean rules)." },
    { title: "Pawn (Byung 병 / Jol 졸)", body: "Moves 1 step forward or sideways (never backward). Reaches other side + retains movement (no promotion like Western chess)." },
    { title: "Blue (Cho) moves first", body: "Traditional Korean convention: Blue side (Cho) makes the first move — opposite of Xiangqi." },
    { title: "Palace + Cannon rules define Janggi", body: "The palace lines + Cannon-must-jump-to-move are Janggi's signature differentiators from Xiangqi." },
  ],
  advancedRules: [
    { title: "Bit-jang (King's pass)", body: "The King may pass its turn (uniquely in Janggi among chess variants). Critical in endgame + timing traps." },
    { title: "No 'perpetual check' rule", body: "Perpetual checks or repeats cause the aggressor to LOSE in Korean rules (unlike Xiangqi which draws)." },
    { title: "Bikjang (King facing King)", body: "Kings on the same file with clear line between = 'bikjang' — must not happen; illegal for player to move into it." },
    { title: "Point values (professional theory)", body: "Chariot ~15, Cannon ~7, Horse ~5, Elephant ~3, Guard ~3, Pawn ~2. Point-count opening theory (like poker chip count) unique to Janggi." },
    { title: "Draws via game length", body: "Modern KJA rules: 100+ moves without capture = draw; some professional rules count material + points for tiebreaker." },
    { title: "Han-side Cho-side asymmetric opening", body: "Modern KJA allows either side; historically Cho moves first (Chu kingdom). Piece names (Han/Cho) reflect historic Chinese Han-Chu Contention." },
    { title: "Dan ranking system", body: "Similar to Go — amateur 1-9 dan; professional 1-9 dan. Highest active players around 9-dan professional." },
  ],
  scoring: {
    summary: "Not points-based like Western chess — Janggi ends via checkmate, resignation, or agreed draw. Modern professional events add point-count draw arbitration.",
    winCondition: "Checkmate (King captured or unable to escape) — automatic win. Resignation, time-out, or violation = loss.",
    breakdown: [
      { action: "Checkmate", points: "Automatic win" },
      { action: "Opponent runs out of time", points: "Automatic win" },
      { action: "Perpetual check (aggressor)", points: "Automatic loss" },
      { action: "Draw (100+ moves no capture)", points: "1/2 point each in tournament scoring" },
      { action: "Point-count tiebreaker", points: "Higher material point score wins" },
    ],
  },
  penalties: [
    { title: "Illegal move (not undoable)", body: "In tournament: illegal move + clock start = 1 warning; second illegal move = forfeit." },
    { title: "Bikjang (facing kings)", body: "Illegal position; player who created it loses." },
    { title: "Perpetual check", body: "Automatic loss for the checking side (Korean rule; opposite of some Xiangqi conventions)." },
    { title: "Illegal Cannon move (no piece to jump)", body: "Move must be retracted; if clock ran = warning + forfeit if repeated." },
  ],

  positions: [
    { name: "Player (Cho / Blue)", role: "Traditionally moves first.", count: 1 },
    { name: "Player (Han / Red)", role: "Responds; traditionally 2nd move.", count: 1 },
  ],
  officiating: {
    officials: ["Match arbiter (professional games)", "Time-keeper", "Tournament director"],
    summary: "Casual play: none. Professional KJA events use arbiters familiar with all Janggi-specific rules (bikjang, perpetual check, point-count draws).",
  },

  governingBodies: [
    { name: "Korea Janggi Association (KJA)", founded: 1956, headquarters: "Seoul, South Korea", website: "https://www.janggi.co.kr" },
    { name: "World Janggi Federation (in development)", founded: 2000, headquarters: "Seoul (international expansion attempts)" },
  ],
  majorCompetitions: [
    { name: "KJA Korea Janggi National Championship", frequency: "annual", founded: 1956, region: "South Korea" },
    { name: "KBS Baduk (broadcast) Championships (Janggi + Go)", frequency: "annual", founded: 1979, region: "South Korea (KBS TV)" },
    { name: "Korea Cup (top individual event)", frequency: "annual", founded: 1985, region: "South Korea" },
    { name: "Amateur regional championships", frequency: "monthly", founded: 1970, region: "Korean cities + Korean diaspora" },
  ],
  countriesPlayed: ["KR", "KP", "US", "CN", "JP", "AU", "CA"],
  famousAthletes: [
    "Seon-Duk Byeon (변선덕, 9-dan) — considered greatest ever Janggi player",
    "Yong-Sun Jang (장용선, 9-dan) — dominant 1980s–90s player",
    "Bong-Hun Kim (김봉헌, 9-dan) — multiple Korea Cup champion",
    "Chang-Ho Kim (김창호, 9-dan) — modern era top player",
    "Yun-Chan Cho (조윤찬) — young rising star 2020s",
  ],
  records: [
    { title: "Highest Janggi rating (rough estimate)", holder: "Seon-Duk Byeon", value: "Consensus GOAT — dominated 1970s–80s", year: 1985 },
    { title: "Most KJA titles", holder: "Various top players", value: "Multiple 10+ title winners across decades", year: 2020 },
    { title: "Longest professional match", holder: "Various tournament games", value: "5+ hour games recorded at KJA National Championship", year: 2015 },
    { title: "KBS Janggi broadcast history", holder: "KBS TV Korea", value: "Continuous televised Janggi coverage since 1979", year: 1979 },
  ],

  variants: ["janggi-standard-kja", "yakjik-janggi-simplified-junior", "hwan-janggi-8x8-variant"],
  relatedSports: ["chess", "xiangqi", "shogi", "makruk", "go-board-game"],

  skills: [
    "positional evaluation (palace defense)",
    "tactical calculation (multi-move sequences)",
    "opening theory (Cho vs. Han asymmetric setups)",
    "endgame technique (bit-jang timing)",
    "point-count evaluation (material vs. position)",
    "psychological endurance (long games)",
  ],
  strategies: [
    { title: "Master Cannon (Po) placement", body: "Cannons need pieces to jump; positioning them behind own pieces or enemy structures is critical. Superior Cannon play = superior Janggi." },
    { title: "Palace defense first", body: "Guards + Elephant + King form 'palace fortress'. Losing palace integrity = usually losing game. Never over-extend defenders." },
    { title: "Chariot mobility = victory", body: "Chariot is Janggi's most powerful piece (~15 pts). Get Chariot active early — open files, exchange lesser pieces for Chariot activity." },
    { title: "Time the bit-jang", body: "King's-pass move can trap opponent into tempo problems. Master when to use — usually endgame, sometimes middlegame." },
    { title: "Perpetual check avoidance", body: "Unlike Western chess, perpetual check = automatic LOSS in Janggi. NEVER give perpetual check unless it's actually a checkmate." },
    { title: "Study opening theory", body: "Modern Janggi has developed opening theory (like Western chess) — Won-Angma, Han-side setups, etc. KJA books + Korean Janggi apps train these." },
    { title: "Point-count material analysis", body: "Janggi masters count point-values continuously: Chariot 15, Cannon 7, Horse 5, Elephant 3, Guard 3, Pawn 2. Material advantage = winning technique application." },
  ],

  terminology: [
    { term: "Janggi (장기)", meaning: "The game itself — literally 'general's game' (將棋)." },
    { term: "Cho (초)", meaning: "Blue side — Chu kingdom in ancient Chinese history." },
    { term: "Han (한)", meaning: "Red side — Han dynasty China." },
    { term: "Wang (왕) / Gung (궁)", meaning: "King — confined to 3×3 palace." },
    { term: "Sa (사)", meaning: "Guard — palace-bound, protects King." },
    { term: "Sang (상)", meaning: "Elephant — 1-diag + 2-orthogonal movement." },
    { term: "Ma (마)", meaning: "Horse — 1-orthogonal + 1-diagonal outward; can be blocked." },
    { term: "Cha (차)", meaning: "Chariot — moves like a Rook; most powerful piece." },
    { term: "Po (포)", meaning: "Cannon — must jump another piece to move OR capture." },
    { term: "Byung (병) / Jol (졸)", meaning: "Pawn — moves 1 step forward or sideways." },
    { term: "Bit-jang", meaning: "King's-pass move — unique to Janggi." },
    { term: "Bikjang", meaning: "Kings-facing-Kings position — illegal; player who caused loses." },
    { term: "Han-Cho Contention", meaning: "Historic Chinese conflict (206–202 BC) — Janggi's cultural backdrop." },
    { term: "KJA", meaning: "Korea Janggi Association — governing body (founded 1956)." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Learn piece movements", body: "Master Chariot, Horse, Elephant, Cannon movements first. Cannon (must-jump) is most confusing for newcomers." },
        { title: "Play against beginner AI", body: "Free apps: Naver Janggi, Kakao Janggi, and PC engine Janggi 20 offer graduated AI opponents." },
        { title: "Study opening tactics", body: "First 10 moves define the game. Learn 2–3 standard opening setups per side (Won-Angma, Cheol-Ma etc.)." },
      ],
    },
    {
      level: "intermediate",
      steps: [
        { title: "Attend Korean Janggi club", body: "In Korea: local Janggi clubs common in every city. Diaspora: Korean communities in NYC, LA, Toronto have clubs." },
        { title: "Master Cannon tactics", body: "Cannon coordination + Cannon-Horse batteries are Janggi's tactical heart. Study 100+ tactical puzzles." },
        { title: "Learn endgame theory", body: "K+P vs. K endings; Chariot endgames; bit-jang timing. Endgame technique separates good from great." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Register with KJA + earn dan rank", body: "Take KJA amateur dan test (1-dan → 7-dan). Regular tournament competition builds ranking." },
        { title: "Study KJA titleholder games", body: "Byeon, Jang, Kim game collections available in Korean bookstores + online. Analyze pro moves." },
        { title: "Compete at Korea Cup + KJA Nationals", body: "Top-flight competition; qualifying via regional tournaments + previous placement." },
      ],
    },
  ],

  faq: [
    { question: "What is Janggi?", answer: "Janggi (장기) is Korean Chess — a strategy board game of the chess family descended from Chinese Xiangqi. Played on a 9×10 board with 32 distinctive pieces marked with Chinese characters. The two sides are called 'Cho' (Blue — Chu kingdom) and 'Han' (Red — Han dynasty), referencing the ancient Chinese Han-Chu Contention (206–202 BC). Korea's national mind sport." },
    { question: "How is Janggi different from Chinese Chess (Xiangqi)?", answer: "Multiple key differences: (1) NO RIVER in the middle (Xiangqi has one). (2) CANNON must JUMP another piece to MOVE (not just capture) — big rule change from Xiangqi. (3) King can PASS turn (bit-jang) — unique to Janggi. (4) PERPETUAL CHECK loses the game (draws in Xiangqi). (5) Blue moves first (Red moves first in Xiangqi). (6) Different Elephant + Guard movement rules. Same family, different game." },
    { question: "How is Janggi different from Western chess?", answer: "Very different despite shared 'chess family' name. (1) 9×10 board (not 8×8). (2) Palace fortresses constrain King + Guards. (3) Cannons + Elephants have unique movements. (4) No pawn promotion. (5) King can pass. (6) Perpetual check loses. (7) Piece values completely different (Chariot ~15, Pawn ~2). Learning Janggi from scratch takes similar effort to learning Chess." },
    { question: "Is Janggi popular?", answer: "In South Korea: extremely — Korea's second-most-played mind sport (behind Baduk/Go). Televised professional events on KBS TV since 1979. In North Korea: also popular (with slightly different piece names). Small but growing internationally in Korean diaspora + serious mind-sport enthusiasts. Not near Xiangqi's Chinese scale (~500 million Xiangqi players)." },
    { question: "Who is the greatest Janggi player?", answer: "Consensus GOAT: Seon-Duk Byeon (변선덕, 9-dan) — dominant player from 1970s–80s. Multiple KJA titles + long unbeaten streaks. Modern era top players include Yong-Sun Jang, Bong-Hun Kim, Chang-Ho Kim. Young rising star Yun-Chan Cho represents modern generation." },
    { question: "Can I play Janggi online?", answer: "Yes — many options. Free Korean apps: Naver Janggi, Kakao Janggi (largest player base). Web: janggi.co.kr, playok.com. Desktop engine: Janggi 20. AI level ranges from beginner-friendly to elite (top engine estimated stronger than most human 9-dans). English documentation improving but still limited." },
  ],

  wikipediaTitle: "Janggi",
  sources: [
    { label: "Korea Janggi Association (KJA)", url: "https://www.janggi.co.kr", publisher: "KJA" },
    { label: "Wikipedia — Janggi", url: "https://en.wikipedia.org/wiki/Janggi", publisher: "Wikipedia" },
    { label: "Naver Janggi (largest online platform)", url: "https://janggi.games.naver.com", publisher: "Naver" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

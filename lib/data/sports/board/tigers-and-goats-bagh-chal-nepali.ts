import type { Sport } from "@/lib/types";

export const tigersAndGoatsBaghChalNepali: Sport = {
  id: "tigers-and-goats-bagh-chal-nepali",
  slug: "tigers-and-goats-bagh-chal-nepali",
  name: "Bagh Chal (Nepali Tigers & Goats)",
  officialName: "Bagh Chal — Nepal National Board Game (informal — no formal international federation)",
  aliases: ["बाघचाल", "Tigers and Goats", "Baghchal", "Bagh Bakri"],
  shortDescription:
    "Ancient Nepali asymmetric strategy board game — 4 tigers hunt 20 goats on 5×5 crossed-line grid; tigers win by capturing 5 goats, goats win by immobilizing all tigers; centuries-old Nepal heritage game; solved computationally (drawn game with perfect play); national board game of Nepal.",
  longDescription:
    "Bagh Chal (Nepali: बाघचाल, 'move of the tiger') is Nepal's national board game — an ancient asymmetric hunt-type strategy game played on a 5×5 grid of points connected by lines + diagonals. Origins traced to at least 300+ years ago in Nepal + Himalayan region (Tibet, Bhutan, Sikkim); common in villages + city cafés across Nepal; often played on stone carvings in Hindu temples in Kathmandu Valley. Asymmetric gameplay: (1) Player 1 = 4 tigers (Bagh) placed at 4 corners of board; win condition = capture 5 goats by 'jumping'; (2) Player 2 = 20 goats (Bakri) starting off-board; win condition = block all 4 tigers so none can legally move. Game has 3 phases: (i) Placement phase — goats placed one-at-a-time on empty intersections (never moved until all 20 placed); tigers move between placements; (ii) Movement phase — after all goats placed, goats move + tigers continue moving; (iii) Endgame — one side achieves win condition. Movement rules: (a) Both pieces move one line-connection at a time (not diagonal unless line drawn); (b) Tigers may 'jump' over adjacent goat to empty intersection beyond (capturing goat like checkers) — but jump requires empty landing spot on same straight line as jumper + adjacent goat; (c) Goats cannot jump or capture. Deep strategic tension: (i) Early game favors tigers (must not be blocked); (ii) Mid game favors goats (accumulate positional pressure); (iii) Endgame technically drawn with perfect play (computationally proven). Cultural depth: (a) Traditional boards carved into stones at Nepal Hindu temples + palace courtyards (Kathmandu Durbar Square 300+ year old board); (b) Popular pastime among elder generations + café gatherings; (c) Taught to children as first strategic board game; (d) Featured in Nepali tourism promotion + cultural heritage exhibits; (e) Similar hunt-type games found across Asia: Tibetan 'Gundru' (very similar), Indian 'Adu Puli Attam' (goats + tigers, Tamil Nadu, 3×3 board), Sinhalese 'Sri Lankan Panchi Keliya' (leopards + goats), Chinese 'Fox and Geese' variants. Modern competitive scene: (1) Nepal Bagh Chal Federation informal (Kathmandu); (2) National tournaments organized by cultural preservation groups; (3) Digital versions (mobile apps) allow global play; (4) Computer solved 2000s — with perfect play, game ends in DRAW (neither side has winning strategy). No formal international federation; primarily preserved as cultural heritage rather than competitive sport. Notable players + preservers include Krishna Rai (Kathmandu senior champion), various regional master players in remote Nepal villages.",
  category: "board-games",
  subCategory: "Nepali asymmetric hunt-type strategy board game",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "NP",
  regionOfOrigin: "Nepal + Himalayan region (Tibet, Bhutan, Sikkim); centuries-old",
  estimatedOrigin: "At least 300+ years old in Nepal + Himalayan region; documented on stone carvings in Nepal Hindu temples 17-18th century Kathmandu Durbar Square",
  players: { min: 2, max: 2, note: "Exactly 2 players — one plays tigers, one plays goats." },
  equipment: [{ name: "5×5 line-connected grid board", description: "5×5 grid of 25 intersection points connected by orthogonal + diagonal lines; traditionally carved in stone or drawn on cloth." }, { name: "4 Tiger pieces (Bagh)", description: "4 tiger tokens placed at 4 corners of board at game start." }, { name: "20 Goat pieces (Bakri)", description: "20 goat tokens starting off-board; placed one-at-a-time during placement phase." }],
  duration: { approximateMinutes: 20, structure: "Casual game 15-30 min; competitive game with clock 20-45 min." },
  objective: "Tigers: capture 5 goats by jumping them. Goats: block all 4 tigers so no tiger has legal move.",
  matchStructure: "Placement phase (goats placed one-at-a-time between tiger moves) + movement phase (both sides move) until win condition met OR drawn if repetition.",
  basicRules: [
    { title: "Tigers start at 4 corners; goats start off-board", body: "4 tigers begin at 4 corner intersections of 5×5 grid; 20 goats start off-board + are placed one-at-a-time during placement phase." },
    { title: "Goats placed one per turn before any goat may move", body: "Placement phase: each turn goat player places 1 new goat on empty intersection; tigers move each turn between placements; goats cannot move until all 20 placed." },
    { title: "Tigers may jump adjacent goats (checkers-style)", body: "Tigers may jump over adjacent goat to empty intersection beyond on same straight line (orthogonal or diagonal if line drawn); captures goat." },
    { title: "Both pieces move only along drawn lines (not through diagonals unless line exists)", body: "All movement follows lines drawn between intersections; some intersections are diagonally connected (marked by drawn diagonals) — movement restricted to line-connected intersections." },
    { title: "Tigers win by capturing 5 goats; goats win by blocking all tigers", body: "Tiger win condition: capture 5 goats total. Goat win condition: block all 4 tigers so none can legally move (no jumps + no adjacent moves)." },
  ],
  scoring: { summary: "Binary win — no point system; tigers capture 5 goats OR goats block all tigers.", winCondition: "Tigers: 5 goats captured. Goats: all 4 tigers blocked from legal moves." },
  positions: [{ name: "Tiger player (Bagh)", role: "Controls 4 tigers; must capture 5 goats.", count: 1 }, { name: "Goat player (Bakri)", role: "Controls 20 goats; must block all tigers.", count: 1 }],
  officiating: { officials: ["Cultural Elder or Casual", "Tournament Arbiter (rare formal events)"], summary: "Casual play self-officiated; occasional national tournaments run by Nepal cultural groups." },
  governingBodies: [{ name: "Nepal Bagh Chal cultural community (informal)", founded: 1900, headquarters: "Kathmandu, Nepal" }, { name: "No formal international federation", founded: 1900, headquarters: "Nepal" }],
  majorCompetitions: [{ name: "Nepal National Bagh Chal Championship (informal)", frequency: "irregular", founded: 1990, region: "Kathmandu, Nepal" }, { name: "Nepal Cultural Heritage Board Game Festivals", frequency: "occasional", founded: 2000, region: "Kathmandu Valley" }, { name: "Digital tournaments (mobile apps)", frequency: "ongoing", founded: 2015, region: "worldwide online" }],
  countriesPlayed: ["NPL (national game)", "IND (northern regions)", "BTN (Bhutan)", "TIB (Tibet region)", "worldwide Nepali diaspora"],
  famousAthletes: ["Krishna Rai (Kathmandu senior champion)", "Various regional master players in remote Nepal villages"],
  records: [
    { title: "300+ years old carved on Nepal Hindu temples", holder: "Nepali cultural heritage", value: "Bagh Chal boards documented on stone carvings in Kathmandu Durbar Square Hindu temples dating to 17-18th century — 300+ year cultural heritage in Nepal", year: 1700 },
    { title: "Nepal's national board game", holder: "Nepal cultural tradition", value: "Bagh Chal recognized as Nepal's national board game; central to Nepali cultural identity + featured in tourism promotion + heritage exhibits", year: 2024 },
    { title: "Computationally solved — drawn with perfect play (2000s)", holder: "Board game computer analysis", value: "Bagh Chal solved by computer analysis in 2000s — with perfect play from both sides, game ends in DRAW (neither tigers nor goats have winning strategy)", year: 2005 },
  ],
  variants: ["bagh-chal-standard-5x5-nepal", "adu-puli-attam-tamil-nadu-3x3", "gundru-tibetan-variant", "sri-lankan-panchi-keliya-leopards-goats", "chinese-hunt-game-variants"],
  relatedSports: ["chess-classical", "checkers-draughts", "fox-and-geese", "surakarta-indonesian"],
  skills: ["asymmetric position evaluation", "goat placement blockade planning", "tiger jump-threat forcing", "endgame draw-recognition technique"],
  wikipediaTitle: "Bagh-Chal",
  sources: [{ label: "Wikipedia — Bagh-Chal", url: "https://en.wikipedia.org/wiki/Bagh-Chal", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default tigersAndGoatsBaghChalNepali;

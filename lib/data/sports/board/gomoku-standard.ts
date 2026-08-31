import type { Sport } from "@/lib/types";

export const gomokuStandard: Sport = {
  id: "gomoku-standard",
  slug: "gomoku-standard",
  name: "Gomoku (Five in a Row)",
  officialName: "Gomoku (Standard Rules) / Renju International Federation (RIF)",
  aliases: ["Five in a Row", "五目並べ (Japanese)", "五子棋 (Chinese, Wuziqi)"],
  shortDescription:
    "Ancient East Asian abstract strategy game — 2 players alternate placing black + white stones on Go-style 15×15 (or 19×19) grid; first to line up 5 stones consecutively (horizontal/vertical/diagonal) wins; Renju is competitive tournament variant with balancing rules.",
  longDescription:
    "Gomoku (Japanese: 五目並べ Gomokunarabe, 'five points in a row'; Chinese: 五子棋 Wuziqi) is an ancient East Asian abstract strategy game where 2 players (Black + White) alternately place stones on a Go-style 15×15 or 19×19 grid intersection, with the goal of forming an unbroken row of 5 stones horizontally, vertically, or diagonally. Traces to ancient China (Han Dynasty ~200 BCE-200 CE); spread to Japan by Nara Period (~700 CE); modern Renju rules developed Japan Meiji era 1899. Standard Gomoku (Freestyle) is trivially winning for Black (first player) with correct play — proved 1993 by Victor Allis + Louis Victor van den Herik (PhD dissertation). To balance the game, several handicap rule variants exist: (1) Renju — most popular competitive rule; forbids Black from making 3-3 fork, 4-4 fork, or 6+ overline; Renju International Federation (RIF, founded 1988, Sweden) governs; World Championship since 1989; Chinese + Japanese + Russian + Estonian dominant. (2) Standard Gomoku (Freestyle) — casual play. (3) Swap2/Yamaguchi rules — modern tournament handicapping. Deep strategic + tactical depth despite simple rules; considered abstract strategy game of comparable depth to Go's tactical subset. Computer solved as White win with Renju rules (2001). Extremely popular in China (~50M+ casual players), Japan (Renju), Russia (Renju tradition), Estonia (world championship venue). World Renju Championship biennial since 1989. Notable computer engines: Yixin (world's strongest, based on AlphaZero-adjacent tech).",
  category: "board-games",
  subCategory: "East Asian 5-in-a-row abstract strategy",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "CN",
  regionOfOrigin: "China (Han Dynasty ~200 BCE-200 CE); Japan (Meiji Renju formalization 1899)",
  estimatedOrigin: "Ancient Chinese origins ~200 BCE-200 CE; Japan Nara period ~700 CE; modern Renju 1899; RIF founded 1988",
  players: { min: 2, max: 2 },
  equipment: [{ name: "Gomoku board (15×15 intersections; some 19×19 Go boards)", description: "15×15 standard; Go 19×19 board also compatible." }, { name: "Black + White stones (Go stones)", description: "Standard Go stones or glass/plastic equivalents." }, { name: "Game clock (competitive)", description: "Renju tournaments use chess-clock; standard 60min + 30s per move." }],
  duration: { approximateMinutes: 30, structure: "Casual: 5-15 min per game; Competitive: 30-90 min per game with clock." },
  objective: "Form unbroken row of exactly 5 stones (Renju) or 5+ (Freestyle) — horizontal, vertical, or diagonal.",
  matchStructure: "1v1 games; tournament: Swiss + finals.",
  basicRules: [
    { title: "Alternate placement — Black first", body: "Black plays first, then alternate; stones placed on empty intersections; cannot move existing stones." },
    { title: "Freestyle: 5+ stones in row = win", body: "Standard Gomoku: any unbroken row of 5+ stones wins." },
    { title: "Renju: Black forbidden 3-3 fork, 4-4 fork, 6+ overline", body: "To balance Black's first-move advantage; White has no restrictions." },
    { title: "Draw if board fills without 5-row", body: "15×15 draws rare (~5% expert; more common at higher levels)." },
  ],
  advancedRules: [
    { title: "Swap2 opening (Yamaguchi rule)", body: "Modern tournament: first 3 stones placed by one player; second player chooses which side to play (or swap-back)." },
    { title: "Renju 'Threats' (Vcf) — Victory by Continuous Forcing", body: "Chain of threats forcing opponent responses until winning." },
    { title: "'Five-in-a-row' but not 'six-in-a-row' (Renju overline rule)", body: "Renju: Black may NOT win with 6+ overline; must be exactly 5." },
    { title: "Time control + increment (competitive)", body: "Standard Renju: 60min + 30s/move increment." },
  ],
  scoring: { summary: "Win / Draw / Loss (1 / 0.5 / 0).", winCondition: "Form 5-in-a-row per rule set OR opponent resigns / times out." },
  positions: [{ name: "Gomoku / Renju player", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Chief Arbiter", "Table Arbiters"], summary: "RIF certified arbiters at major tournaments." },
  governingBodies: [{ name: "Renju International Federation (RIF)", founded: 1988, headquarters: "Stockholm, Sweden" }, { name: "Nihon Renju-sha (Japan Renju Association)", founded: 1936, headquarters: "Tokyo, Japan" }, { name: "China Weiqi + Wuziqi Association", founded: 1962, headquarters: "Beijing, China" }],
  majorCompetitions: [{ name: "Renju World Championship (RIF)", frequency: "biennial", founded: 1989, region: "rotating (Tallinn Estonia, Beijing China, Tokyo Japan)" }, { name: "Team World Championship (Renju)", frequency: "biennial", founded: 1996, region: "rotating" }, { name: "Chinese Wuziqi Championship", frequency: "annual", founded: 1988, region: "China" }, { name: "Japanese Renju Meijin", frequency: "annual", founded: 1936, region: "Japan" }],
  countriesPlayed: ["CHN (dominant scale ~50M+ players)", "JPN", "RUS", "EST", "SWE", "KOR", "MNG", "worldwide via online"],
  famousAthletes: ["Kōji Nakamura (JPN — early modern Renju Meijin)", "Ando Meiwa (JPN)", "Ando Sadao (JPN — 2003 WC)", "Alexey Sokolsky (RUS)", "Peep Sõbolev (EST — multi-time WC finalist)", "Rudolf Dubrovsky (BLR)"],
  records: [
    { title: "Standard Gomoku solved as Black win 1993", holder: "Victor Allis + Louis Victor van den Herik", value: "Standard Gomoku (Freestyle) proved to be a Black (first player) win with perfect play — Victor Allis PhD dissertation 1993", year: 1993 },
    { title: "Renju solved as White win 2001", holder: "János Wágner + Gábor Virág", value: "Renju rules proven solved as White win with perfect play — 2001 computer proof; balancing rules imperfect", year: 2001 },
    { title: "China 50M+ casual Wuziqi players", holder: "China Wuziqi Association", value: "Estimated 50+ million casual Wuziqi players in China — one of most-played board games nationally", year: 2024 },
  ],
  variants: ["freestyle-gomoku-standard-simple-rules", "renju-competitive-with-restrictions", "swap2-yamaguchi-tournament-modern", "connect6-6-in-a-row-modern-variant", "pente-gomoku-with-captures-usa-1977"],
  relatedSports: ["go-igo-baduk", "connect-four", "pente", "reversi-othello"],
  skills: ["opening theory (Renju)", "threat + fork recognition", "endgame tactical calculation", "clock management (competitive)"],
  strategies: [
    { title: "Central control opening", body: "Both Renju + Freestyle: control of center intersections critical for early positioning." },
    { title: "VCF (Victory by Continuous Forcing) sequences", body: "Elite Renju: chain of forced-threats leading to unstoppable 5-row." },
  ],
  wikipediaTitle: "Gomoku",
  sources: [{ label: "Wikipedia — Gomoku", url: "https://en.wikipedia.org/wiki/Gomoku", publisher: "Wikipedia" }, { label: "Renju International Federation", url: "http://www.renju.net", publisher: "RIF" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default gomokuStandard;

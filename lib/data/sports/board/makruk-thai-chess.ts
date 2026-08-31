import type { Sport } from "@/lib/types";

export const makrukThaiChess: Sport = {
  id: "makruk-thai-chess",
  slug: "makruk-thai-chess",
  name: "Makruk (Thai Chess)",
  officialName: "Thailand Makruk Association — สมาคมหมากรุกไทย",
  aliases: ["หมากรุกไทย", "Thai Chess", "Sittuyin Cousin"],
  shortDescription:
    "Thai national chess variant descended from Indian chaturanga ~9th century; 8×8 board with pieces on squares (not lines); most conservative living descendant of proto-chess — preserves oldest movement patterns; queen (Met/Bia) moves like ferz (1 diagonal); bishop (Khon) moves like alfil variant; ~2 million players in Thailand.",
  longDescription:
    "Makruk (หมากรุกไทย, 'Thai chess') is Thailand's national chess variant — the most conservative living descendant of the original Indian chaturanga (~6th century). Diverged from proto-chess ~9th-10th century when it spread from India through Southeast Asia; Thailand + Cambodia + Myanmar preserved the original ferz/alfil piece movements while European chess evolved queen + bishop to their modern powerful long-range forms. Board: standard 8×8 with pieces on squares (like Western chess, unlike xiangqi/janggi on intersections). Starting setup differs from Western chess: (1) pawns (Bia) on rank 3 not rank 2 (already advanced one square); (2) queen (Met, 'seed') starts on same colored square as king (not opposite); (3) no castling. Pieces + moves: (a) King (Khun) — 1 square any direction (same as Western king); (b) Queen (Met) — moves 1 square diagonally only (like historic ferz — extremely weak by Western standards); (c) Bishop (Khon, elephant) — 1 square diagonally OR 1 square straight forward (5-direction restricted move; NOT the long-range bishop of Western chess); (d) Knight (Ma, horse) — L-shape like Western knight; (e) Rook (Ruea, boat) — straight lines any distance like Western rook; (f) Pawn (Bia, cowrie shell) — 1 square forward, captures 1 square diagonally; promotes to Met (queen) when reaching rank 6 (opponent's 3rd rank). Promotion is auto-flip of pawn piece (physical pieces literally flip over to show queen face). Special counting rule for endgames without pawns — 'counting' begins with fixed max-move-count depending on remaining pieces; game must end within count or drawn. Grandmaster-level rating scene; Thai FIDE-affiliated Makruk Association governs. Notable Thai chess crossover: Wisuwat Teerapabpaisit + others also play international chess. Cambodian relative 'Ouk Chatrang' nearly identical rules. Estimated 2 million+ players in Thailand.",
  category: "board-games",
  subCategory: "Thai chess — conservative chaturanga descendant",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "medieval", popularity: "regional",
  countryOfOrigin: "TH",
  regionOfOrigin: "Thailand (evolved from Indian chaturanga via Southeast Asia; parallel to Cambodian Ouk Chatrang)",
  estimatedOrigin: "Chaturanga spread to Southeast Asia ~9th-10th century; distinct Thai form preserved original ferz/alfil moves; Thailand Makruk Association founded ~1970s",
  players: { min: 2, max: 2 },
  equipment: [{ name: "Makruk board (8×8 squares)", description: "Standard 8×8 board (uncolored squares traditional; modern boards use light/dark)." }, { name: "32 pieces per side (traditional flat cylindrical)", description: "Traditional wooden flat cylindrical pieces; pawns are cowrie shells (bia); modern sets use Staunton-like pieces." }, { name: "Chess clock (tournament)", description: "Modern professional matches use FIDE-style clocks; typical 60 min + increment." }],
  duration: { approximateMinutes: 45, structure: "Casual game 20-45 min; tournament game 60-120 min with clock." },
  objective: "Checkmate opponent's King (Khun).",
  matchStructure: "Single game; tournament formats Swiss + knockout.",
  basicRules: [
    { title: "Queen (Met) moves 1 diagonal only", body: "Met (queen) moves exactly 1 square diagonally per turn — extremely weak by Western standards; preserved from original chaturanga ferz." },
    { title: "Bishop (Khon) moves 1 diagonal or 1 forward", body: "Khon (elephant/bishop) moves 1 square diagonally in any direction OR 1 square straight forward; 5-direction restricted piece." },
    { title: "Pawns promote at rank 6 to Met only", body: "Bia (pawn) reaching rank 6 (opponent's third rank) automatically promotes to Met (queen) — only promotion piece available." },
    { title: "No castling, no en passant, no 2-square pawn move", body: "Modern chess innovations absent from Makruk — game preserves oldest chaturanga rules." },
    { title: "Endgame counting rule (Nom Nawn Krob)", body: "In pawnless endgames, side with material advantage must checkmate within fixed count (varies 64→8 based on remaining pieces) or game drawn." },
  ],
  scoring: { summary: "Checkmate = win; stalemate = draw; endgame counting rule limits time to checkmate in pawnless endgames.", winCondition: "Checkmate opponent's King (Khun) or opponent resigns/times out." },
  positions: [{ name: "Khun (King)", role: "Moves 1 square any direction; must be checkmated.", count: 1 }, { name: "Met (Queen)", role: "Moves 1 square diagonally only; weak piece.", count: 1 }, { name: "Khon (Bishop/Elephant)", role: "Moves 1 diagonal or 1 forward straight.", count: 2 }, { name: "Ma (Knight/Horse)", role: "L-shape move like Western knight.", count: 2 }, { name: "Ruea (Rook/Boat)", role: "Any distance straight lines like Western rook.", count: 2 }, { name: "Bia (Pawn/Cowrie)", role: "1 forward move, captures diagonally 1; promotes to Met at rank 6.", count: 8 }],
  officiating: { officials: ["Tournament Arbiter", "Chief Referee"], summary: "Thailand Makruk Association certified arbiters." },
  governingBodies: [{ name: "Thailand Makruk Association", founded: 1974, headquarters: "Bangkok, Thailand" }],
  majorCompetitions: [{ name: "Thailand National Makruk Championship", frequency: "annual", founded: 1975, region: "Thailand" }, { name: "SEA Games Makruk (occasional)", frequency: "biennial", founded: 1993, region: "Southeast Asia" }, { name: "World Makruk Championship", frequency: "occasional", founded: 2010, region: "Bangkok, Thailand" }],
  countriesPlayed: ["THA (dominant)", "KHM (Ouk Chatrang cousin)", "MMR (Sittuyin cousin)", "LAO", "Thai diaspora — USA + AUS"],
  famousAthletes: ["Wisuwat Teerapabpaisit (Thai chess + Makruk crossover champion)", "Prakit Prakoontham (National Makruk champion)", "Multi-time Thailand National Champions (limited English-language records)"],
  records: [
    { title: "Most conservative chaturanga descendant", holder: "Makruk (Thai Chess)", value: "Makruk preserves most original chaturanga piece movements (ferz queen, alfil bishop, pawn on rank 2) — considered most historically conservative living chess variant", year: 2024 },
    { title: "Estimated 2 million+ players Thailand", holder: "Thailand Makruk community", value: "Estimated 2 million+ Makruk players in Thailand — Thailand's most popular traditional board game", year: 2024 },
    { title: "Thailand Makruk Association since 1974", holder: "Thailand Makruk Association", value: "Thailand Makruk Association founded 1974 in Bangkok — official national governing body", year: 1974 },
  ],
  variants: ["standard-makruk-thai", "cambodian-ouk-chatrang-cousin", "myanmar-sittuyin-close-cousin"],
  relatedSports: ["chess-classical", "xiangqi-chinese-chess", "shogi-japanese-chess", "janggi-korean-chess"],
  skills: ["endgame counting technique", "opening piece coordination (weak Met + Khon)", "pawn-structure preservation", "knight + rook tactical dominance"],
  wikipediaTitle: "Makruk",
  sources: [{ label: "Wikipedia — Makruk", url: "https://en.wikipedia.org/wiki/Makruk", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default makrukThaiChess;

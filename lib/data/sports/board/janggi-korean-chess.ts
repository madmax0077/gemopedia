import type { Sport } from "@/lib/types";

export const janggiKoreanChess: Sport = {
  id: "janggi-korean-chess",
  slug: "janggi-korean-chess",
  name: "Janggi (Korean Chess)",
  officialName: "Korean Janggi Association (KJA) — 대한장기협회",
  aliases: ["장기", "Korean Chess", "Changgi"],
  shortDescription:
    "Korean strategic chess variant played on 9×10 board with pieces placed on line intersections; descends from Chinese xiangqi ~9th century; 32 pieces per side; unique features: no river, cannons jump one piece, elephants move differently from Chinese elephants; Korea's most popular traditional board game; professional Korean players compete for KRW 100 million+ prizes.",
  longDescription:
    "Janggi (장기, 將棋) is the Korean strategic chess variant descended from Chinese xiangqi (arrived Korean peninsula circa 9th century), evolved into distinctly Korean form over centuries. Played on 9×10 board (unlike xiangqi's 9×10 with river separating halves — janggi has NO river dividing board, a key difference). Pieces placed on line intersections (not squares like Western chess). 32 pieces per side split between General (King), Guards (2), Elephants (2 — but move differently than xiangqi elephants), Horses (2), Chariots (Rooks, 2), Cannons (2 — jump exactly one piece to move/capture, another key feature), Soldiers (Pawns, 5 — move sideways too, unlike xiangqi pawns). Each general confined to 3×3 palace with diagonal lines allowing movement along palace diagonals. Special janggi rule 'Bikjang' — bare king vs bare king facing each other on same file with no pieces between = automatic draw offer (feature not in xiangqi). Modern professional scene: Korea Baduk Association + Korean Janggi Association manage professional janggi tournaments; top players compete for prizes up to KRW 100 million ($75,000+); Master (7-9 dan) system parallels go/baduk professional ranks. Notable pros: Kim Dong-hyun (multi-time champion), Yoo Ha-cheol (2020s dominant player), Byun Jong-cheol (all-time legend). Popular pastime among Korean elderly (played in park pavilions across South Korea + North Korea); estimated 5-10 million casual players in Korea + Korean diaspora. Online play surged 2010s-2020s via mobile apps + KakaoTalk games. World Janggi Championships held annually since 2004 (Korean diaspora + growing international interest — China, Japan, Mongolia, USA).",
  category: "board-games",
  subCategory: "Korean strategic abstract chess variant",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "medieval", popularity: "regional",
  countryOfOrigin: "KR",
  regionOfOrigin: "Korean Peninsula (evolved from Chinese xiangqi ~9th century into distinct Korean form)",
  estimatedOrigin: "Chinese xiangqi arrived Korea circa 9th century; distinct Janggi rules crystallized ~15th century; Korean Janggi Association founded 1955",
  players: { min: 2, max: 2 },
  equipment: [{ name: "Janggi board (9×10 lines)", description: "Board with 9 vertical + 10 horizontal lines forming 8×9 intersection grid; palace 3×3 marked at each end with diagonal lines." }, { name: "32 octagonal pieces per side", description: "Wooden octagonal pieces with Chinese characters; two piece-color styles — green (초/楚) + red/blue (한/漢)." }, { name: "Chess clock (professional play)", description: "Professional matches use chess clocks; typical 30 min + increment." }],
  duration: { approximateMinutes: 60, structure: "Casual game 20-40 min; professional tournament game 60-120 min with clock." },
  objective: "Checkmate opponent's General (King) — General cannot move without being captured.",
  matchStructure: "Single game; tournament formats use best-of-3 or Swiss + knockout.",
  basicRules: [
    { title: "General confined to 3×3 palace", body: "Each General may only move within its 3×3 palace including diagonal palace lines." },
    { title: "Cannons must jump exactly one piece to move/capture", body: "Cannons cannot move without jumping over exactly one piece; cannot jump over another cannon." },
    { title: "No river dividing board (unlike xiangqi)", body: "Janggi board has no river — pieces have unrestricted movement across board (elephants + pawns still have their own restrictions)." },
    { title: "Bikjang rule — bare kings facing = draw offer", body: "If both generals face each other on same file with no pieces between + no legal move avoids continued facing = automatic draw offer." },
    { title: "Elephants move differently from xiangqi elephants", body: "Janggi elephants make 1-step orthogonal + 2-step diagonal (like knight+bishop hybrid); different from xiangqi elephants that move 2×2 diagonally with block point." },
  ],
  scoring: { summary: "Checkmate = win; stalemate = loss (for stalemated player, unlike Western chess draw); Bikjang = draw offer; if neither wins, piece-value tally decides (green player gets 1.5 point handicap for material tie).", winCondition: "Checkmate opponent's General." },
  positions: [{ name: "General (King)", role: "Confined to 3×3 palace + diagonals; primary target.", count: 1 }, { name: "Guards (Advisors)", role: "Confined to palace + diagonals; move 1 step.", count: 2 }, { name: "Elephants", role: "Move 1 orthogonal + 2 diagonal (hybrid knight-bishop pattern).", count: 2 }, { name: "Horses (Knights)", role: "Move 1 orthogonal + 1 diagonal (like Western knight but blockable).", count: 2 }, { name: "Chariots (Rooks)", role: "Slide any distance orthogonally + along palace diagonals.", count: 2 }, { name: "Cannons", role: "Move + capture only by jumping exactly one piece (that piece cannot be another cannon).", count: 2 }, { name: "Soldiers (Pawns)", role: "Move 1 step forward or sideways; upon entering enemy palace can also move diagonally forward.", count: 5 }],
  officiating: { officials: ["Tournament Director", "Rules Arbiter"], summary: "KJA certified arbiters at professional tournaments." },
  governingBodies: [{ name: "Korean Janggi Association (대한장기협회)", founded: 1955, headquarters: "Seoul, South Korea" }, { name: "World Janggi Federation", founded: 2004, headquarters: "Seoul, South Korea" }],
  majorCompetitions: [{ name: "KB Kookmin Cup Janggi Championship", frequency: "annual", founded: 1997, region: "South Korea — KRW 100 million+ prize" }, { name: "Samsung Fire Cup Janggi", frequency: "annual", founded: 2002, region: "South Korea" }, { name: "World Janggi Championship", frequency: "annual", founded: 2004, region: "Seoul, South Korea + rotating" }],
  countriesPlayed: ["KOR (dominant)", "PRK (widely played)", "Korean diaspora — USA, JPN, CHN"],
  famousAthletes: ["Byun Jong-cheol (all-time legend; 1970s-2000s multi-time champion)", "Kim Dong-hyun (multi-time modern champion 1990s-2010s)", "Yoo Ha-cheol (2020s dominant player)", "Lee Chang-hwan (2010s champion)"],
  records: [
    { title: "Korean Janggi Association since 1955", holder: "Korean Janggi Association", value: "Korean Janggi Association founded 1955 in Seoul — official governing body for professional Korean janggi", year: 1955 },
    { title: "KRW 100 million+ prize professional janggi", holder: "KB Kookmin Cup", value: "Professional janggi championships award KRW 100 million+ ($75,000+) prizes — Korea's most lucrative traditional board game professional scene", year: 2024 },
    { title: "5-10 million casual players in Korea", holder: "Estimated Korean population", value: "Approximately 5-10 million casual Janggi players in South + North Korea + diaspora — Korea's most popular traditional board game", year: 2024 },
  ],
  variants: ["standard-janggi", "chit-janggi-hidden-pieces-variant", "solo-janggi-puzzles"],
  relatedSports: ["chess-classical", "xiangqi-chinese-chess", "shogi-japanese-chess", "go-baduk"],
  skills: ["opening theory (janggi-specific)", "cannon coordination", "palace defense/attack", "endgame technique with limited pieces"],
  wikipediaTitle: "Janggi",
  sources: [{ label: "Wikipedia — Janggi", url: "https://en.wikipedia.org/wiki/Janggi", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default janggiKoreanChess;

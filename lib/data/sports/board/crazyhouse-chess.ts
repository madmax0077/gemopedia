import type { Sport } from "@/lib/types";

export const crazyhouseChess: Sport = {
  id: "crazyhouse-chess",
  slug: "crazyhouse-chess",
  name: "Crazyhouse Chess",
  officialName: "Crazyhouse Chess (Single-Player Drop Variant)",
  aliases: ["Crazy House", "ZH", "Drop Chess"],
  shortDescription:
    "Single-player chess variant where captured pieces are held in reserve + can be dropped back onto the board on any empty square instead of a normal move — signature 'drop' mechanic. Extremely tactical + fast-paced. Popular blitz/bullet variant on Lichess + Chess.com.",
  longDescription:
    "Crazyhouse Chess (abbreviated 'ZH' after German 'Zerreißen des Hauses' = 'tearing of the house') is a single-player chess variant with the signature drop mechanic — when you capture an opponent's piece, it enters your reserve pool + you may later 'drop' it onto any empty square on your board as your move (with pawn restrictions: not on 1st/8th rank; promoted pieces revert to pawns when captured + re-dropped). Dropped pieces can immediately give check but cannot give checkmate directly with a pawn drop (variant-dependent). Fast, extremely tactical variant — considered the 1v1 sibling to Bughouse chess (which is 2v2 team). Time controls typically fast (1+0, 3+0, 3+2, 5+0 bullet/blitz). Massive online scene led by Hikaru Nakamura (USA — considered greatest crazyhouse player ever; former online champion), Fabiano Caruana, Baskaran Adhiban (IND), Bunker (Alexei Chumakov). World Crazyhouse Championship first held online 2015; annual events on Lichess. FIDE does not officially sanction, but strong online + local tournament scene. Rules variants: some allow pawn-drop checkmate; some restrict drops in check; standard modern rules follow Lichess/Chess.com implementations. Considered top-3 most-popular chess variant globally alongside Fischer Random (Chess960) + Bughouse.",
  category: "board-games",
  subCategory: "chess variant (single-player drop chess)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "DE",
  regionOfOrigin: "Germany + USA (~1960s-70s German chess-club variant; online popularization 1990s+)",
  estimatedOrigin: "Emerged as German chess-club variant ~1960s-70s; explosion online 2000s+",
  players: { min: 2, max: 2 },
  equipment: [{ name: "Standard chess set + board", description: "Standard set; reserve pieces held physically or shown next to board." }, { name: "Chess clock (typically 1+0 to 5+0)", description: "Fast time control critical; bullet + blitz preferred." }, { name: "Reserve display (physical or online)", description: "Player's held pieces displayed for opponent to see." }],
  duration: { approximateMinutes: 5, structure: "Match: 3-5 min game typically; tournament 4-8 hours across bracket." },
  objective: "Checkmate opponent's king (with normal moves or drops).",
  matchStructure: "1v1 game; tournament typically Swiss + arena or knockout brackets.",
  basicRules: [
    { title: "Captured pieces held in reserve", body: "Capture opponent's piece → enters your reserve pool." },
    { title: "Drop = place held piece on any empty square", body: "Drops count as a move; alternative to normal chess move." },
    { title: "Pawn drop restrictions", body: "Pawns cannot be dropped on 1st/8th rank; some variants also forbid pawn-drop checkmate." },
    { title: "Promoted pieces revert to pawns", body: "If a promoted queen is captured, opponent gets a pawn in reserve." },
    { title: "Standard chess rules otherwise apply", body: "Standard checkmate, stalemate, threefold repetition, 50-move rule." },
  ],
  scoring: { summary: "Standard chess win/loss/draw scoring (1-0, ½-½, 0-1).", winCondition: "Checkmate opponent OR opponent runs out of time OR resignation." },
  positions: [{ name: "Chess player", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Arbiter (major events)", "Tournament Director"], summary: "Chess arbiter panel at major events; online games are self-refereed via engine." },
  governingBodies: [{ name: "Lichess (community body)", founded: 2010, headquarters: "worldwide (open-source)" }, { name: "Chess.com (hosts crazyhouse events)", founded: 2007, headquarters: "USA" }, { name: "FIDE (does not officially sanction)", founded: 1924, headquarters: "Lausanne, Switzerland" }],
  majorCompetitions: [{ name: "Lichess Crazyhouse World Championship", frequency: "annual", founded: 2015, region: "worldwide (online)" }, { name: "Chess.com Crazyhouse Arena Championship", frequency: "monthly", founded: 2016, region: "worldwide (online)" }],
  countriesPlayed: ["USA", "IND", "GER", "RUS", "NOR", "worldwide via online"],
  famousAthletes: ["Hikaru Nakamura (USA — considered greatest crazyhouse player ever)", "Fabiano Caruana (USA)", "Baskaran Adhiban (IND)", "Alexei Chumakov 'Bunker' (RUS)"],
  records: [
    { title: "Hikaru Nakamura crazyhouse GOAT", holder: "Hikaru Nakamura (USA)", value: "Widely considered greatest crazyhouse player in history; multi-time online + Lichess Crazyhouse World Champion", year: 2020 },
    { title: "First Lichess Crazyhouse WC 2015", holder: "Lichess", value: "First formal online Crazyhouse World Championship held on Lichess 2015", year: 2015 },
  ],
  variants: ["standard-crazyhouse-modern", "bughouse-2v2-team-variant", "crazyhouse-960-with-fischer-random-start"],
  relatedSports: ["chess", "bughouse-chess", "blitz-chess", "bullet-chess", "atomic-chess"],
  skills: ["drop tactical vision", "fast pattern recognition", "clock management (bullet)", "reserve piece bank calculation"],
  wikipediaTitle: "Crazyhouse",
  sources: [{ label: "Wikipedia — Crazyhouse", url: "https://en.wikipedia.org/wiki/Crazyhouse", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default crazyhouseChess;

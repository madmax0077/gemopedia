import type { Sport } from "@/lib/types";

export const kingOfTheHillChess: Sport = {
  id: "king-of-the-hill-chess",
  slug: "king-of-the-hill-chess",
  name: "King of the Hill Chess",
  officialName: "King of the Hill (KOTH) Chess Variant",
  aliases: ["KOTH Chess", "King of the Hill"],
  shortDescription:
    "Chess variant where getting your king to any of the 4 central 'hill' squares (d4/e4/d5/e5) is an alternate win condition alongside checkmate. Encourages aggressive central king play + fast-paced tactical games.",
  longDescription:
    "King of the Hill (KOTH) is a chess variant where getting your king to any of the 4 central 'hill' squares (d4, e4, d5, e5) is an alternate win condition alongside standard checkmate. All standard chess rules apply — same pieces, same starting position, same castling + en passant + promotion + threefold repetition + 50-move rules — but adding this second win condition changes strategy dramatically. Kings are encouraged to march toward the center once safe rather than staying tucked behind pawns. Popular Lichess + Chess.com variant. Extremely fast + tactical because the central-king race adds huge new dimension. Standard opening theory partially applies but middlegame + endgame planning must account for king-central marching. Notable adoptions: featured in Chess.com PogChamps events + Speed Chess Championship arena rotations. Simple to learn (rule addition trivial) but strategic depth is significant. Common in bullet + blitz online events.",
  category: "board-games",
  subCategory: "chess variant (central-king win condition)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "niche",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Chess.com + Lichess variant era ~2010s)",
  estimatedOrigin: "Modern variant era ~2010s; codified as standard variant on Lichess + Chess.com",
  players: { min: 2, max: 2 },
  equipment: [{ name: "Standard chess set + board", description: "Standard chess set + board; central 4 squares marked as 'hill' at some events." }, { name: "Chess clock (bullet/blitz typical)", description: "Fast time control; 3+0 to 5+0 common." }],
  duration: { approximateMinutes: 5, structure: "Match: 3-5 min game typical." },
  objective: "Checkmate opponent's king OR move your king to any of the 4 central hill squares (d4/e4/d5/e5).",
  matchStructure: "1v1; tournament format Swiss/arena/knockout on Lichess/Chess.com.",
  basicRules: [
    { title: "Standard chess rules apply", body: "All standard chess movement + capture rules unchanged." },
    { title: "Alternate win: king on d4/e4/d5/e5", body: "Move your king to any of the 4 central squares = win." },
    { title: "Must not be in check when reaching hill", body: "King cannot 'move into check' to reach hill (still standard rule)." },
    { title: "Standard castling/en passant/promotion/50-move rule", body: "All standard non-check rules preserved." },
  ],
  scoring: { summary: "Standard chess win/loss/draw scoring (1-0, ½-½, 0-1).", winCondition: "Checkmate OR king reaches d4/e4/d5/e5 OR opponent runs out of time OR resignation." },
  positions: [{ name: "KOTH chess player", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Online arbiter (Lichess)", "Tournament Director"], summary: "Games self-refereed via engine." },
  governingBodies: [{ name: "Lichess (community body)", founded: 2010, headquarters: "worldwide" }, { name: "Chess.com", founded: 2007, headquarters: "USA" }],
  majorCompetitions: [{ name: "Lichess KOTH Championship", frequency: "annual", founded: 2015, region: "worldwide (online)" }, { name: "Chess.com PogChamps KOTH events (occasional)", frequency: "sporadic", founded: 2020, region: "worldwide (online)" }],
  countriesPlayed: ["USA", "GER", "RUS", "IND", "worldwide via online"],
  famousAthletes: ["Various Lichess KOTH Champions (online handles)", "Hikaru Nakamura + Magnus Carlsen occasional KOTH streams"],
  records: [
    { title: "Standard variant on Lichess since ~2015", holder: "Lichess", value: "King of the Hill included as standard variant on Lichess from platform's early variant support ~2015", year: 2015 },
  ],
  variants: ["standard-koth-4-central-squares", "koth-960-fischer-random-start", "extended-koth-9-central-squares-experimental"],
  relatedSports: ["chess", "atomic-chess", "three-check-chess", "crazyhouse-chess"],
  skills: ["central king marching timing", "opening theory (still standard-adjacent)", "tactical vision (king-race tension)", "endgame king-run technique"],
  strategies: [
    { title: "King march after safe queen exchange", body: "Standard KOTH plan: neutralize opponent's queen + minor pieces, then march king centrally under cover." },
    { title: "Prevent opponent's king-race", body: "Central pawn control critical to block opponent king from reaching hill." },
  ],
  wikipediaTitle: "King of the Hill (chess variant)",
  sources: [{ label: "Lichess KOTH", url: "https://lichess.org/variant/kingOfTheHill", publisher: "Lichess" }, { label: "Chess.com King of the Hill", url: "https://www.chess.com/terms/king-of-the-hill-chess", publisher: "Chess.com" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default kingOfTheHillChess;

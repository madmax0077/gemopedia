import type { Sport } from "@/lib/types";

export const threeCheckChess: Sport = {
  id: "three-check-chess",
  slug: "three-check-chess",
  name: "Three-Check Chess",
  officialName: "Three-Check Chess (3-Check Variant)",
  aliases: ["3-Check", "Three Check"],
  shortDescription:
    "Chess variant where checking your opponent's king 3 times wins the game (in addition to standard checkmate). Encourages aggressive attacking play — sacrifices for checks become powerful. Popular Lichess/Chess.com variant.",
  longDescription:
    "Three-Check Chess (3-Check) is a chess variant where the game ends when either player checks their opponent's king 3 times — in addition to the standard win condition of checkmate. All other chess rules apply: same pieces, same starting position, same castling + en passant + promotion + threefold repetition + 50-move rules. Signature strategic shift: checks become extremely valuable — sacrifices for tempo-checks are frequently profitable; discovered checks + double-checks are game-winning. Players must guard against being checked as much as being mated. Attacking strategies emphasize tempo + king exposure over material. Popular Lichess + Chess.com variant, particularly at bullet + blitz time controls. Notable: mating attacks become almost incidental — many games decided by 3rd-check rather than by checkmate. Chess.com PogChamps + Lichess 3-Check Championship annual events. Simple rule to learn but strategic depth is meaningful — well-known 3-Check openings include Vienna Game (Nc3-based attack), King's Gambit (aggressive early check pressure), and King's Indian setups with delayed check-generation.",
  category: "board-games",
  subCategory: "chess variant (3-checks-to-win)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "niche",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Internet Chess Club era ~1990s; Lichess/Chess.com ~2010s)",
  estimatedOrigin: "Emerged as online variant ~1990s; codified as standard variant on Lichess ~2010",
  players: { min: 2, max: 2 },
  equipment: [{ name: "Standard chess set + board", description: "Standard chess set + board." }, { name: "Check counter tracker", description: "Track number of checks delivered (usually onscreen in online variants; manual in physical)." }, { name: "Chess clock (bullet/blitz typical)", description: "Fast time control preferred; 3+0 to 5+0 common." }],
  duration: { approximateMinutes: 4, structure: "Match: 3-5 min game typical; games often end via 3rd check rather than mate." },
  objective: "Deliver 3 checks to opponent's king OR standard checkmate.",
  matchStructure: "1v1; tournament format Swiss/arena/knockout on Lichess/Chess.com.",
  basicRules: [
    { title: "Standard chess rules apply", body: "All standard chess movement + capture rules unchanged." },
    { title: "Alternate win: 3 checks delivered", body: "Delivering your 3rd check to opponent's king = win." },
    { title: "Check counter tracked", body: "Each side maintains check count; visible in online interface." },
    { title: "Standard castling/en passant/promotion", body: "All standard non-check rules preserved." },
  ],
  scoring: { summary: "Standard chess win/loss/draw scoring (1-0, ½-½, 0-1).", winCondition: "Checkmate OR 3 checks delivered OR opponent runs out of time OR resignation." },
  positions: [{ name: "3-Check chess player", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Online arbiter (Lichess)", "Tournament Director"], summary: "Games self-refereed via engine." },
  governingBodies: [{ name: "Lichess (community body)", founded: 2010, headquarters: "worldwide" }, { name: "Chess.com", founded: 2007, headquarters: "USA" }],
  majorCompetitions: [{ name: "Lichess 3-Check Championship", frequency: "annual", founded: 2015, region: "worldwide (online)" }, { name: "Chess.com 3-Check Arena events (occasional)", frequency: "sporadic", founded: 2016, region: "worldwide (online)" }],
  countriesPlayed: ["USA", "GER", "RUS", "IND", "worldwide via online"],
  famousAthletes: ["Various Lichess 3-Check Champions (online handles)"],
  records: [
    { title: "Standard variant on Lichess since ~2015", holder: "Lichess", value: "3-Check included as standard variant on Lichess since ~2015", year: 2015 },
  ],
  variants: ["standard-3-check", "5-check-experimental", "3-check-960-fischer-random-start"],
  relatedSports: ["chess", "atomic-chess", "king-of-the-hill-chess", "crazyhouse-chess"],
  skills: ["check-generating tactical vision", "tempo sacrifice valuation", "king safety under constant check pressure", "opening theory (aggressive lines favored)"],
  strategies: [
    { title: "Sacrifice material for tempo checks", body: "Material investments to force check sequences are frequently game-winning." },
    { title: "Avoid king exposure early", body: "Long castling less appealing — queenside pawns harder to defend." },
  ],
  wikipediaTitle: "Three-check chess",
  sources: [{ label: "Lichess 3-check", url: "https://lichess.org/variant/threeCheck", publisher: "Lichess" }, { label: "Chess.com Three-Check", url: "https://www.chess.com/terms/3-check-chess", publisher: "Chess.com" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default threeCheckChess;

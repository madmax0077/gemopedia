import type { Sport } from "@/lib/types";

export const atomicChess: Sport = {
  id: "atomic-chess",
  slug: "atomic-chess",
  name: "Atomic Chess",
  officialName: "Atomic Chess (FICS + Lichess Variant)",
  aliases: ["Atom Chess", "Nuclear Chess", "Explosive Chess"],
  shortDescription:
    "Chess variant where every capture triggers an 'explosion' destroying the capturing piece + all 8 surrounding pieces (except pawns unaffected on explosion). Extremely tactical + fast-paced; popular Lichess variant.",
  longDescription:
    "Atomic Chess is a chess variant where every capture triggers an 'explosion' that destroys not only the captured piece but also the capturing piece + all pieces on the 8 surrounding squares (with important exceptions: pawns are IMMUNE to explosions unless directly captured; only pieces removed). Signature effect: captures are extremely costly + often self-destructive. Rules: (1) Making a capture destroys capturer + captured + all surrounding non-pawn pieces on adjacent 8 squares; (2) Pawn captures still cause explosion but pawns on adjacent squares are immune (only pieces destroyed); (3) A player may NOT make a move that would destroy their own king (protected king rule) — including cannot make explosion move that would blow up own king; (4) Wins by: checkmate OR blowing up opponent's king (via detonating adjacent capture). Kings CAN move adjacent to each other (opposite of normal chess — because they can't capture without dying themselves). Extremely tactical + strategic — every capture must be calculated. Popular Lichess variant with millions of games played annually. World Atomic Chess Champion honors held rotationally on Lichess. Notable top players: various online-only handles as no OTB circuit exists.",
  category: "board-games",
  subCategory: "chess variant (explosion mechanic)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "niche",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Internet Chess Club / FICS ~1990s)",
  estimatedOrigin: "Emerged on Internet Chess Club (ICC) + FICS ~1990s; popularized on Lichess 2010s",
  players: { min: 2, max: 2 },
  equipment: [{ name: "Standard chess set + board", description: "Standard chess set + board — usually played online only (physical requires tracking explosions manually)." }, { name: "Chess clock (fast time control typical)", description: "Bullet + blitz preferred; 1+0 to 5+0 common." }],
  duration: { approximateMinutes: 5, structure: "Match: 3-5 min game typical; explosive tactics lead to fast decisive games." },
  objective: "Checkmate opponent's king OR blow up opponent's king via explosion of adjacent capture.",
  matchStructure: "1v1; tournament typically Swiss + arena or knockout brackets on Lichess.",
  basicRules: [
    { title: "Every capture triggers explosion", body: "Capture destroys capturer + captured + all pieces on 8 surrounding squares." },
    { title: "Pawns immune to explosions (except direct capture)", body: "Only pieces (N/B/R/Q/K) are destroyed by adjacent explosion — pawns on adjacent squares survive." },
    { title: "Cannot detonate own king", body: "Move that would blow up own king is illegal (equivalent to moving into check)." },
    { title: "Kings can be adjacent (unlike standard chess)", body: "Kings CAN move adjacent — they can't capture each other without dying." },
    { title: "Win by checkmate OR king-explosion", body: "Two win conditions: standard checkmate OR blow up opponent's king via adjacent capture." },
  ],
  scoring: { summary: "Standard chess win/loss/draw scoring (1-0, ½-½, 0-1).", winCondition: "Checkmate OR blow up opponent's king OR opponent runs out of time OR resignation." },
  positions: [{ name: "Atomic chess player", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Online arbiter (Lichess)", "Tournament Director"], summary: "Games self-refereed via engine; major events use TD." },
  governingBodies: [{ name: "Lichess (community body)", founded: 2010, headquarters: "worldwide (open-source)" }, { name: "Chess.com (also hosts atomic events)", founded: 2007, headquarters: "USA" }],
  majorCompetitions: [{ name: "Lichess Atomic Chess Championship", frequency: "annual", founded: 2015, region: "worldwide (online)" }, { name: "Lichess Weekly Atomic Arena", frequency: "weekly", founded: 2013, region: "worldwide (online)" }],
  countriesPlayed: ["USA", "GER", "RUS", "IND", "worldwide via online"],
  famousAthletes: ["Various Lichess Atomic Champions (online handles)"],
  records: [
    { title: "Lichess Atomic among top-3 variants", holder: "Lichess", value: "Atomic Chess consistently in top-3 played variants on Lichess (with Crazyhouse + Chess960)", year: 2024 },
    { title: "1-move theoretical loss for White", holder: "chess theorists", value: "Some openings (1.Nc3?) are theoretically losing due to fast explosion tactics — deep opening theory exists", year: 2020 },
  ],
  variants: ["standard-atomic-8-square-explosion", "atomic-960-fischer-random-start", "double-atomic-2-square-radius-experimental"],
  relatedSports: ["chess", "crazyhouse-chess", "bughouse-chess", "king-of-the-hill-chess", "three-check-chess"],
  skills: ["explosion-radius calculation", "opening theory (specific)", "king safety in unusual positions", "tactical vision (unique patterns)"],
  strategies: [
    { title: "King safety changes drastically", body: "Because kings can be adjacent + captures self-destruct, king safety strategy differs radically from standard chess." },
    { title: "Sacrifice for explosive kill-radius", body: "Sometimes profitable to sacrifice piece for a capture whose explosion destroys multiple opposing pieces." },
  ],
  wikipediaTitle: "Atomic chess",
  sources: [{ label: "Wikipedia — Atomic chess", url: "https://en.wikipedia.org/wiki/Atomic_chess", publisher: "Wikipedia" }, { label: "Lichess Atomic", url: "https://lichess.org/variant/atomic", publisher: "Lichess" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default atomicChess;

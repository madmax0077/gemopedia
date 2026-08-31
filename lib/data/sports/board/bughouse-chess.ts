import type { Sport } from "@/lib/types";

export const bughouseChess: Sport = {
  id: "bughouse-chess",
  slug: "bughouse-chess",
  name: "Bughouse Chess",
  officialName: "Bughouse Chess (Team 2v2 Variant)",
  aliases: ["Siamese Chess", "Tandem Chess", "Exchange Chess"],
  shortDescription:
    "4-player 2v2 team chess variant where 2 games played simultaneously on 2 boards, teammate colors flipped — pieces captured are passed to teammate who may drop them onto their board on any legal square. Extreme speed + coordination.",
  longDescription:
    "Bughouse Chess (also called Siamese, Tandem, or Exchange Chess) is a 4-player team chess variant played on two boards simultaneously, considered by many the most exciting fast chess variant. Two teams of 2 players each; teammate colors are opposite (Team A: Player 1 White + Player 2 Black; Team B: Player 3 Black + Player 4 White). Signature mechanic: pieces captured on your board go to your teammate, who may (on their turn) choose to 'drop' any held piece onto their own board on any empty square (with pawn restrictions: not on 1st/8th rank; not adjacent to teammate king if it creates check) instead of making a normal move. First team where either player checkmates OR runs out of time OR opponent resigns wins the match; typically played at 3-minute or 5-minute time controls per player. Requires extreme coordination + communication with partner (verbal 'no more knights!' or 'sit on your queen!' are common). Popular at chess clubs, online (Lichess + Chess.com both host Bughouse), and at major chess events as unofficial after-hours entertainment. World Bughouse Championship (Skittles.com + Bughouse Nationals) since 2003; strong online scene led by top players like Alexander Grischuk (RUS — bughouse legend), Fabiano Caruana + Hikaru Nakamura (USA — both play in online events). Simple 1v1 variant is Crazyhouse chess (uses drops but no teammate).",
  category: "board-games",
  subCategory: "chess variant (2v2 team drop-chess)",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (invented ~1960s NYC chess clubs)",
  estimatedOrigin: "Invented ~1960s in New York City chess clubs; formal tournaments 1980s+; online popular 2000s+",
  players: { min: 4, max: 4, note: "2v2 teams; 4 players total across 2 boards." },
  equipment: [{ name: "Two standard chess sets + boards", description: "Placed side-by-side; captured pieces passed between." }, { name: "Two chess clocks (typically 3-min or 5-min)", description: "Fast time control critical; each player has own clock." }, { name: "Verbal communication (or online chat)", description: "Teammates communicate strategy in real-time." }],
  duration: { approximateMinutes: 10, structure: "Match ~5-10 min per game (3+2 or 5+0 time control typical); event ~2-4 hours across bracket." },
  objective: "Either teammate wins their board (checkmate/timeout/resignation) → team wins match.",
  matchStructure: "Round-robin group play → single-elimination bracket at major events.",
  basicRules: [
    { title: "2v2 team format, 2 boards", body: "Team A: Player 1 White + Player 2 Black; Team B: Player 3 Black + Player 4 White." },
    { title: "Captured pieces passed to teammate", body: "Capture opponent's piece → give to your teammate who may drop it later." },
    { title: "Drop = place held piece on any empty square as move", body: "Drops count as move instead of normal move; pawn restrictions apply." },
    { title: "First win/timeout/resign on either board wins match", body: "Team is defeated when either player is defeated." },
    { title: "Verbal + digital communication allowed", body: "Teammates can (and MUST) communicate throughout." },
  ],
  scoring: { summary: "Match win/loss; some events use overall win-loss aggregate scoring across multiple matches.", winCondition: "One team member wins their board; teammate must survive until then." },
  positions: [{ name: "Team member (Board 1 or Board 2)", role: "One player per board per team.", count: 2 }],
  officiating: { officials: ["Tournament Director", "Arbiter"], summary: "Chess arbiter panel at major events." },
  governingBodies: [{ name: "Bughouse.com (community body)", founded: 2003, headquarters: "worldwide (online)" }, { name: "US Chess Federation (recognizes bughouse events)", founded: 1939, headquarters: "USA" }, { name: "FIDE (does not officially sanction bughouse)", founded: 1924, headquarters: "Lausanne, Switzerland" }],
  majorCompetitions: [{ name: "Bughouse Nationals (US Chess)", frequency: "annual", founded: 2003, region: "USA (rotating)" }, { name: "Lichess Bughouse Tournaments", frequency: "weekly", founded: 2016, region: "worldwide (online)" }, { name: "Bughouse World Championship (Skittles.com)", frequency: "annual", founded: 2003, region: "USA / online" }],
  countriesPlayed: ["USA (birthplace)", "RUS", "GER", "NLD", "IND", "CHN", "worldwide via online"],
  famousAthletes: ["Alexander Grischuk (RUS — bughouse legend)", "Hikaru Nakamura (USA)", "Fabiano Caruana (USA)", "Larry Christiansen (USA)"],
  records: [
    { title: "Online scene explosion 2000s", holder: "Lichess + Chess.com", value: "Online bughouse exploded 2000s-2010s via ICC + Lichess + Chess.com; now largest global bughouse community", year: 2020 },
    { title: "First formal US Bughouse Nationals 2003", holder: "US Chess Federation", value: "First formal US Bughouse Nationals 2003 as part of national junior chess events", year: 2003 },
  ],
  variants: ["standard-bughouse-drop-rules", "crazyhouse-1v1-variant", "double-bughouse-teammate-swap"],
  relatedSports: ["chess", "crazyhouse-chess", "blitz-chess", "bullet-chess"],
  skills: ["fast pattern recognition", "teammate communication real-time", "drop-piece tactical vision", "clock management under time pressure"],
  strategies: [
    { title: "Sit on pieces to starve opponent", body: "Delaying moves waits for teammate to capture more material for you." },
    { title: "Communication is 50% of the game", body: "'No more knights!' + 'Sit on your Q!' are game-defining calls." },
  ],
  wikipediaTitle: "Bughouse chess",
  sources: [{ label: "Wikipedia — Bughouse chess", url: "https://en.wikipedia.org/wiki/Bughouse_chess", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default bughouseChess;

import type { Sport } from "@/lib/types";

export const quoridorAbstract: Sport = {
  id: "quoridor-abstract",
  slug: "quoridor-abstract",
  name: "Quoridor (Abstract Strategy)",
  officialName: "Quoridor — Gigamic (Mirko Marchesi 1997)",
  aliases: ["Quoridor"],
  shortDescription:
    "Award-winning abstract strategy board game (1997) by Mirko Marchesi + Gigamic — 2 or 4 players race pawns across 9×9 grid while placing walls to block opponents; won 8+ major game awards including Mensa Select 1997 + Game of the Year Sweden; distills into simple mathematical elegance in ~10 minutes.",
  longDescription:
    "Quoridor is an award-winning abstract strategy board game designed 1997 by Italian designer Mirko Marchesi + published by French publisher Gigamic. Considered one of the most elegant modern abstract games — combining chess-like strategic depth with go-like simple rules that fit on a single card. Players (2 or 4) each control a pawn starting at one edge of a 9×9 grid; each player has a stash of walls (10 walls in 2-player game, 5 walls each in 4-player game). Objective: be first to move your pawn to opposite edge. On your turn choose exactly one: (a) Move pawn one square orthogonally (may jump over adjacent opponent pawn to square behind); OR (b) Place one of your walls on any grid edge between squares — walls are 2 squares long + must not fully block any player's path to their goal edge. Wall placement creates maze-like restrictions on movement. Critical rule: walls cannot completely wall off a player — pathfinding check required after each wall placement to ensure all players still have SOME path to their goal. Won 8+ major game awards: (1) Mensa Select 1997; (2) Game of the Year Sweden 1997; (3) Game of the Year France 1997; (4) Games Magazine 100 Best Games 1998; (5) Golden Award Cannes 1998. Deep game theory analysis: solved for 3×3, 5×5 boards; 9×9 mathematically undetermined but competitively viable. Notable computational work: (a) Lisa's Quoridor tournament (annual Cambridge University), (b) AlphaZero-style Quoridor AI research 2020s. Modern online play: quoridor.io + Board Game Arena. Continues to sell strong 25+ years after release; multiple physical editions including deluxe wooden, travel edition, mini. Sequel/variants: Quoridor Mini (7×7 grid), Quoridor Kids (simpler ruleset).",
  category: "board-games",
  subCategory: "modern abstract strategy — pawn race + wall placement",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (Gigamic publisher) — Italian designer Mirko Marchesi",
  estimatedOrigin: "Published 1997 by Gigamic France; won Mensa Select + Game of the Year Sweden + France 1997",
  players: { min: 2, max: 4, note: "2 or 4 players standard; 3-player unofficial variants exist." },
  equipment: [{ name: "Quoridor board (9×9 grid)", description: "Wooden board with 9×9 grid of squares; premium editions include grooves for walls." }, { name: "Pawns (2 or 4)", description: "One pawn per player starting at edge; 2-player: opposite edges; 4-player: all 4 edges." }, { name: "Wooden walls (10 per player 2P; 5 per player 4P)", description: "2-square-wide wooden walls that place on grid edges between squares to block movement." }],
  duration: { approximateMinutes: 15, structure: "Casual game 10-20 min; competitive tournament game 20-40 min with clock." },
  objective: "First player to move pawn to opposite edge of board wins.",
  matchStructure: "Single game; tournament formats Swiss or knockout; some tournaments use match play (best-of-3).",
  basicRules: [
    { title: "Turn = move pawn 1 square OR place 1 wall", body: "Each turn choose exactly one action: move own pawn one square orthogonally, OR place one wall on grid edge." },
    { title: "Pawn may jump over adjacent opponent pawn", body: "When your pawn is orthogonally adjacent to opponent's pawn, you may jump over it to square behind (or diagonally if wall blocks straight jump)." },
    { title: "Walls are 2 squares long, placed on grid edges", body: "Walls occupy 2 adjacent grid edges (2 squares long); cannot overlap other walls or extend beyond board." },
    { title: "Walls cannot completely block any player's path", body: "After each wall placement, must verify all players still have at least one path to their goal edge; blocking any player's only path = illegal." },
    { title: "Limited walls per player (10 in 2P, 5 in 4P)", body: "Each player has fixed wall stash; may not place more once exhausted; use walls strategically." },
  ],
  scoring: { summary: "Binary win by moving pawn to opposite edge; no points system.", winCondition: "First player to reach opposite edge of board." },
  positions: [{ name: "Quoridor player", role: "One pawn + limited wall stash.", count: 4 }],
  officiating: { officials: ["Tournament Arbiter"], summary: "Community tournaments + Board Game Arena online; no formal international governing body." },
  governingBodies: [{ name: "Gigamic (publisher)", founded: 1990, headquarters: "Wattignies, France" }, { name: "Mirko Marchesi (designer)", founded: 1997, headquarters: "Italy" }],
  majorCompetitions: [{ name: "Board Game Arena Quoridor Championship", frequency: "ongoing", founded: 2010, region: "worldwide online" }, { name: "quoridor.io Tournaments", frequency: "ongoing", founded: 2015, region: "worldwide online" }, { name: "Games Magazine Best Games 1998", frequency: "one-time award", founded: 1998, region: "USA" }],
  countriesPlayed: ["FRA", "ITA", "USA", "GBR", "DEU", "JPN", "worldwide via Board Game Arena + quoridor.io"],
  famousAthletes: ["Mirko Marchesi (designer)", "Top-rated Board Game Arena Quoridor players", "Various Lisa's Quoridor Cambridge University champions"],
  records: [
    { title: "Mensa Select Award 1997", holder: "Quoridor — Gigamic + Mirko Marchesi", value: "Quoridor won Mensa Select Award 1997 in first year of release — recognizing exceptional game design meeting Mensa's rigorous criteria", year: 1997 },
    { title: "3+ Game of the Year Awards 1997-1998", holder: "Quoridor — Gigamic", value: "Quoridor won Game of the Year awards from Sweden (1997), France (1997), and multiple others 1997-1998 including Games Magazine 100 Best Games 1998", year: 1998 },
    { title: "9×9 board strategically undetermined", holder: "Game theory analysis", value: "Quoridor solved computationally for 3×3 (first player wins) + 5×5 (first player wins with perfect play) boards; 9×9 tournament board remains mathematically undetermined + competitively deep", year: 2020 },
  ],
  variants: ["quoridor-standard-9x9-2-or-4-player", "quoridor-mini-7x7-shorter", "quoridor-kids-simpler-ruleset", "quoridor-online-quoridor-io", "quoridor-tournament-clock-formats"],
  relatedSports: ["chess-classical", "checkers-draughts", "go-baduk", "abalone-abstract"],
  skills: ["path-planning under wall constraints", "wall-placement strategy (offensive vs defensive)", "counting turns to goal", "endgame tempo optimization"],
  wikipediaTitle: "Quoridor",
  sources: [{ label: "Wikipedia — Quoridor", url: "https://en.wikipedia.org/wiki/Quoridor", publisher: "Wikipedia" }, { label: "Gigamic Quoridor", url: "https://www.gigamic.com/quoridor", publisher: "Gigamic" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default quoridorAbstract;

import type { Sport } from "@/lib/types";

export const hex2Player: Sport = {
  id: "hex-2-player",
  slug: "hex-2-player",
  name: "Hex (Piet Hein Connection Game)",
  officialName: "Hex — 2-Player Connection Board Game",
  aliases: ["Nash", "John (Bell Labs original name)", "Con-Tac-Tix (Parker Brothers 1952)"],
  shortDescription:
    "Abstract 2-player connection board game invented independently by Piet Hein (Denmark 1942) + John Nash (USA 1948 at Princeton) — players alternate placing hexagonal stones aiming to connect their 2 opposite board edges; provably a first-player win via strategy-stealing; deep strategic game featured in AI research.",
  longDescription:
    "Hex is an abstract 2-player connection board game invented independently by Danish poet + engineer Piet Hein at the Niels Bohr Institute in Copenhagen (1942, published in Politiken newspaper) AND by American mathematician John Nash at Princeton (1948, called simply 'Nash' or 'John' after bathroom tile patterns at Princeton where he first sketched it — Nash later credited co-invention when learning of Hein's earlier work). Played on a rhombus-shaped board of hexagonal cells (typical sizes: 11×11 competitive standard; 13×13 or 19×19 also used). Two players (Red + Blue, or Black + White) alternate placing stones on empty hexes; each has 2 opposite board edges assigned to their color; player who connects their 2 edges with an unbroken chain of their own stones wins. First-player-wins proof (John Nash 1948 strategy-stealing argument) — but no constructive winning strategy known for boards larger than 9×9. To balance, competitive Hex uses the 'swap rule' or 'pie rule': first player places opening stone, second player may swap sides + play that stone. Considered one of the deepest 2-player connection games — strategic + tactical depth on par with Go but on smaller board. Sold commercially as 'Con-Tac-Tix' by Parker Brothers (USA, 1952). Solved computationally: 9×9 solved 2001 (White wins with 2b, 3d, 4e); 11×11 unsolved. Featured extensively in AI research (Mohex, Wolve, deep-learning Hex engines). Governing body: International Hex Federation (informal community body); annual events include Hex World Championship (biennial since 2000, held with the Mind Sports Olympiad). Notable Hex researcher: Ryan Hayward (Univ. Alberta, wrote definitive book 'Hex: A Playable Theory of Games').",
  category: "board-games",
  subCategory: "connection game (2-player abstract)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "niche",
  countryOfOrigin: "DK",
  regionOfOrigin: "Denmark (Piet Hein 1942 Copenhagen) + USA (John Nash 1948 Princeton — independent invention)",
  estimatedOrigin: "Independent inventions: Piet Hein 1942 (Copenhagen); John Nash 1948 (Princeton); Parker Brothers Con-Tac-Tix 1952",
  players: { min: 2, max: 2 },
  equipment: [{ name: "Hex board (rhombus of hexagons, 11×11 competitive)", description: "Diamond-shaped grid of hexagons; edges colored by player." }, { name: "Colored stones (Red/Blue or Black/White)", description: "Two colors, one per player; enough for full board fill." }, { name: "Game clock (competitive)", description: "Chess-clock; 30-90 min per side typical." }],
  duration: { approximateMinutes: 30, structure: "Casual: 10-20 min; Competitive with clock: 30-90 min." },
  objective: "Connect your assigned 2 opposite board edges with unbroken chain of your color's stones.",
  matchStructure: "1v1 games; tournament: Swiss + finals.",
  basicRules: [
    { title: "Alternate stone placement", body: "Players alternate placing one stone per turn on empty hex; stones cannot move." },
    { title: "Connect your 2 opposite edges", body: "Each player has 2 opposite board edges of their color; win = unbroken chain connecting them." },
    { title: "Swap Rule (pie rule) to balance first-move advantage", body: "After first stone placed, second player may swap colors — balances first-move advantage." },
    { title: "No draws possible", body: "Provably no draws — every filled board has one connected player (Hex theorem)." },
  ],
  scoring: { summary: "Binary win/loss; no draws.", winCondition: "Connect your 2 opposite edges first OR opponent resigns / times out." },
  positions: [{ name: "Hex player", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Chief Arbiter", "Table Arbiters"], summary: "Community + Mind Sports Olympiad arbiters." },
  governingBodies: [{ name: "International Hex Federation (community body)", founded: 2000, headquarters: "worldwide" }, { name: "Mind Sports Olympiad (hosts Hex championships)", founded: 1997, headquarters: "London, UK" }],
  majorCompetitions: [{ name: "Hex World Championship (Mind Sports Olympiad)", frequency: "biennial", founded: 2000, region: "rotating (London, Prague, Manchester)" }, { name: "Playtak.com + Little Golem Hex Championships (online)", frequency: "ongoing", founded: 2005, region: "worldwide (online)" }, { name: "Computer Olympiad — Hex", frequency: "annual", founded: 1989, region: "rotating" }],
  countriesPlayed: ["DEU", "USA", "GBR", "CZE", "CAN (Alberta computer Hex research)", "worldwide via online"],
  famousAthletes: ["Piet Hein (DEN — inventor 1942)", "John Nash (USA — inventor 1948; Nobel Laureate Economics 1994)", "Ryan Hayward (CAN — Hex researcher + author)", "David Ploog (GER — multi-time Hex World Champion)"],
  records: [
    { title: "9×9 Hex solved 2001 as White win", holder: "Jing Yang + Simon Liao + Mirek Pawlak", value: "Standard 9×9 Hex proven solved as White (first player) win with opening 2b/3d/4e (2001)", year: 2001 },
    { title: "First-player wins proven by John Nash 1948 (strategy-stealing)", holder: "John Nash (USA)", value: "First-player wins Hex on any board proven by John Nash 1948 strategy-stealing argument — but constructive strategy unknown for boards >9×9", year: 1948 },
    { title: "Parker Brothers commercialized 1952", holder: "Parker Brothers", value: "Con-Tac-Tix commercialized by Parker Brothers 1952 in USA — introduced Hex to mainstream board game market", year: 1952 },
  ],
  variants: ["standard-hex-11x11-competitive", "hex-13x13-larger-strategic", "hex-19x19-marathon-size", "y-connection-game-triangular-variant", "havannah-connection-game-longer-variant"],
  relatedSports: ["go-igo-baduk", "twixt", "havannah", "connect-four"],
  skills: ["chain-connection tactical vision", "strategic long-diagonal planning", "swap rule opening theory", "endgame parity calculation"],
  strategies: [
    { title: "Play near center + short-diagonal (2-bridges)", body: "Central hexes offer more connectivity; 2-bridge (two hexes with 2 empty connectors) is core tactical unit." },
    { title: "Swap-rule opening ~ 3d/2b typical", body: "First player plays close-to-center opening; second player swaps if strong enough." },
  ],
  wikipediaTitle: "Hex (board game)",
  sources: [{ label: "Wikipedia — Hex (board game)", url: "https://en.wikipedia.org/wiki/Hex_(board_game)", publisher: "Wikipedia" }, { label: "Ryan Hayward — Hex research (Univ. Alberta)", url: "http://webdocs.cs.ualberta.ca/~hayward", publisher: "University of Alberta" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default hex2Player;

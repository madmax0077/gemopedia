import type { Sport } from "@/lib/types";

export const hnefataflViking: Sport = {
  id: "hnefatafl-viking",
  slug: "hnefatafl-viking",
  name: "Hnefatafl (Viking Chess)",
  officialName: "World Tafl Federation (WTF)",
  aliases: ["Viking Chess", "Tafl", "Tablut (Sami variant)", "Alea Evangelii"],
  shortDescription:
    "Ancient Norse strategic board game — asymmetric 'king vs attackers' setup on odd-sized checkered board (11×11 typical); King + Defenders (12) attempt to escape to corner; Attackers (24) surround + capture; played across Viking world 400-1500 CE; revived + modernized 1930s from Sami tablut variant; ~5,000 active competitive players in modern revival scene.",
  longDescription:
    "Hnefatafl (Old Norse: 'fist-table'; often called Viking Chess) is the family of asymmetric strategic board games played across Viking Age northern Europe from ~400 to 1500 CE. Multiple regional variants: (1) Hnefatafl 11×11 (Nordic mainstream); (2) Tablut 9×9 (Sami / Finnish Sápmi variant — the version Linnaeus documented 1732 that enabled modern reconstruction); (3) Tawlbwrdd 11×11 (Welsh); (4) Brandubh 7×7 (Irish, smaller variant); (5) Alea Evangelii 19×19 (Anglo-Saxon, largest variant); (6) Ard Rí 7×7 (Scottish). All variants share core mechanics: asymmetric 'unequal force' setup where a King + smaller defending force (typically 12 warriors) start in the center trying to escape to marked exit squares (usually 4 corners), while a larger attacking force (typically 24 warriors) surrounds the center trying to capture the King before escape. Movement: all pieces move like Western rook (any distance orthogonally); no jumping; may not land on 'restricted' squares (center throne + corner escapes reserved for King only in most variants). Capture: piece is captured when opponent flanks it on two opposite orthogonal sides with own pieces (like Go capture logic — 'sandwich' capture); King must be surrounded on all 4 orthogonal sides (or 3 sides + edge) to be captured. King wins by reaching corner square; attackers win by capturing King. Historical evidence: (a) Grave finds — Viking-era hnefatafl boards + pieces found in burial mounds across Denmark, Sweden, Norway, Iceland, Britain, Ireland; (b) Icelandic sagas mention gameplay + suggest cultural prominence; (c) Board fragments in early medieval Christian contexts (Anglo-Saxon Alea Evangelii on manuscript page). Displaced by chess arrival in northern Europe ~1000-1200 CE; effectively extinct by 1500. Modern revival: (1) Linnaeus's 1732 Tablut documentation among Sami preserved rules; (2) 1930s Swedish + Danish scholars reconstructed; (3) 1980s-90s modern manufacturers began producing sets; (4) 2000s internet + Aage Nielsen's tafl.dk enabled global competitive scene; (5) World Tafl Federation (WTF) founded 2011; World Championships annual since 2013 (Fetlar Shetland Isles). Notable modern champions: Aage Nielsen (Denmark), Adam Bartley (USA), Tim Millar, Andreas Fischer. Bruised again 2010s-2020s by History Channel 'Vikings' series + Assassin's Creed Valhalla including hnefatafl mini-game (introducing millions to the game).",
  category: "traditional-cultural-sports",
  subCategory: "Norse asymmetric strategic board game",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "medieval", popularity: "niche",
  countryOfOrigin: "IS",
  regionOfOrigin: "Viking Age Nordic + Sami peoples (Iceland, Denmark, Sweden, Norway, Sápmi, British Isles)",
  estimatedOrigin: "Played across Viking world ~400-1500 CE; documented by Linnaeus 1732 (Tablut); modern reconstruction 1930s; World Tafl Federation founded 2011",
  players: { min: 2, max: 2 },
  equipment: [{ name: "Tafl board (7×7, 9×9, 11×11, or 19×19 depending on variant)", description: "Odd-sized checkered board with marked center throne square + 4 marked corner escape squares." }, { name: "King piece (1)", description: "Larger distinctive piece representing the King; only piece that can occupy throne + corner squares." }, { name: "Defenders (typically 12)", description: "Smaller pieces defending King; try to help King reach corner escape." }, { name: "Attackers (typically 24, twice as many)", description: "Twice as many pieces as defenders; try to surround + capture King." }, { name: "Chess clock (competitive)", description: "Modern competitive matches use chess clocks; typical 30 min per player + increment." }],
  duration: { approximateMinutes: 45, structure: "Casual game 20-45 min; competitive game 60-120 min with clock." },
  objective: "King team wins by moving King to any corner escape square. Attacker team wins by capturing King (surrounding on all sides).",
  matchStructure: "Single game or match play (2 games alternating sides for balance); tournament formats Swiss + knockout.",
  basicRules: [
    { title: "All pieces move like rook (any distance orthogonally)", body: "All pieces move any number of squares horizontally or vertically; no jumping; no diagonal movement." },
    { title: "Capture = sandwich piece between two enemies orthogonally", body: "Piece captured when opponent moves piece to opposite orthogonal side while your piece already on other side (sandwich); passive capture only, moving piece into sandwich = safe." },
    { title: "King captured only when surrounded on all 4 orthogonal sides", body: "King requires surround on all 4 orthogonal sides (or 3 sides + board edge in some variants) to capture." },
    { title: "King wins by reaching any corner escape square", body: "King team wins immediately upon moving King to any of 4 marked corner squares." },
    { title: "Throne + corner squares restricted to King only", body: "Only King may occupy center throne square + corner escape squares; other pieces may pass through center but not land." },
  ],
  scoring: { summary: "Binary win/loss per game; tournament match play alternates sides to balance asymmetry.", winCondition: "King reaches corner = King team wins; King captured = Attacker team wins." },
  positions: [{ name: "King (Konungr)", role: "Sole royal piece; must escape to corner square to win.", count: 1 }, { name: "Defenders (Warriors)", role: "12 protective warriors around King; help escape to corner.", count: 12 }, { name: "Attackers (Besiegers)", role: "24 attacking warriors surrounding center; try to capture King.", count: 24 }],
  officiating: { officials: ["Tournament Arbiter"], summary: "World Tafl Federation certified arbiters at World Championships; online play on tafl.dk uses computer arbitration." },
  governingBodies: [{ name: "World Tafl Federation (WTF)", founded: 2011, headquarters: "Copenhagen, Denmark" }],
  majorCompetitions: [{ name: "World Tafl Championships (Fetlar Hnefatafl Tournament)", frequency: "annual (August)", founded: 2013, region: "Fetlar, Shetland Isles, Scotland" }, { name: "WTF World Online Championships", frequency: "annual", founded: 2011, region: "worldwide online via tafl.dk" }, { name: "History Iceland Hnefatafl Championship", frequency: "annual", founded: 2012, region: "Iceland" }],
  countriesPlayed: ["DNK (WTF hq)", "USA (large diaspora scene)", "GBR (Fetlar host)", "NOR", "SWE", "ISL", "DEU", "FIN (Sami origin)", "worldwide via tafl.dk online"],
  famousAthletes: ["Aage Nielsen (Denmark — WTF founder + multi-time champion)", "Adam Bartley (USA — 2010s multi-time World Champion)", "Tim Millar (UK — Fetlar champion)", "Andreas Fischer (Germany)"],
  records: [
    { title: "Linnaeus documented Tablut 1732 preserving rules", holder: "Carl Linnaeus", value: "Carl Linnaeus documented Sami Tablut rules 1732 in Lapland expedition journal — critical primary source enabling modern rule reconstruction after gap of centuries", year: 1732 },
    { title: "World Tafl Federation founded 2011", holder: "Aage Nielsen (Denmark)", value: "World Tafl Federation founded 2011 by Aage Nielsen (Denmark) — first international governing body for revived hnefatafl", year: 2011 },
    { title: "Assassin's Creed Valhalla popularized 2020", holder: "Ubisoft video game", value: "Assassin's Creed Valhalla (2020) featured hnefatafl mini-game called 'Orlog' + full tafl games — introduced game to millions of new players", year: 2020 },
  ],
  variants: ["hnefatafl-11x11-nordic-mainstream", "tablut-9x9-sami-linnaeus", "tawlbwrdd-11x11-welsh", "brandubh-7x7-irish", "alea-evangelii-19x19-anglo-saxon", "ard-ri-7x7-scottish", "copenhagen-hnefatafl-modern-tournament"],
  relatedSports: ["chess-classical", "go-baduk", "morris-nine-mens-morris", "shogi-japanese-chess"],
  skills: ["asymmetric strategy (playing both sides)", "sandwich capture technique", "King escape path planning", "attacker encirclement patience"],
  wikipediaTitle: "Tafl games",
  sources: [{ label: "Wikipedia — Tafl games", url: "https://en.wikipedia.org/wiki/Tafl_games", publisher: "Wikipedia" }, { label: "Aage Nielsen tafl.dk", url: "https://aagenielsen.dk", publisher: "World Tafl Federation" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default hnefataflViking;

import type { Sport } from "@/lib/types";

export const gaelicHandball: Sport = {
  id: "gaelic-handball",
  slug: "gaelic-handball",
  name: "Gaelic Handball (GAA)",
  officialName: "GAA Handball / Irish Handball Council",
  aliases: ["Irish Handball", "Wall Ball (GAA)", "Ball Alley"],
  shortDescription:
    "Irish national wall-ball sport (~17th century origins) — striking small ball against wall/court with hand; part of the Gaelic Athletic Association's 4 native games (with Gaelic football + hurling + camogie); ~50,000 active players in Ireland + diaspora; annual GAA Handball All-Ireland Championships.",
  longDescription:
    "Gaelic Handball is one of the 4 native games of the Gaelic Athletic Association (GAA), Ireland's national governing body for indigenous sports (alongside Gaelic football, hurling, camogie). Traces to at least the 17th century in Ireland — reference to 'ball court' in Galway 1527 + 'ballcourt' in Dublin 1740s. Modern rules codified 1884 alongside the founding of the GAA. Played by striking a small hard ball against a wall or court with the hand (protected by a leather glove), attempting to make it bounce beyond opponent's reach. Four modern disciplines: (1) One-Wall (also called Wallball) — front wall only, 20ft wide × 16ft tall — international standard; global growth via International Wall Ball Association; (2) Three-Wall — front + 2 side walls, US-influenced; (3) Four-Wall — front + 2 side + back walls, enclosed room; classical Irish + American 4-wall version; (4) Small-Alley (40x20 ft) + Big-Alley (60x30 ft) traditional Irish formats. Ball: hollow rubber core ~1.9 oz; scored to 21 or 25 depending on format. Governed by Irish Handball Council (founded 1929, GAA affiliate). Also popular via Basque Pelota (Jai Alai) + American Handball (US 4-wall). USA has huge Latino + Irish diaspora scene. GAA Handball All-Ireland Championships since 1925; World Handball Championships (WHC) since 1964 (dominated by Ireland + USA); 2024 World Championships held in Minnesota. Legendary players: John Doyle (IRL — considered greatest ever, dominated 1950s-60s), Michael Walsh, Eoin Kennedy (IRL — 6-time Irish Senior Softball champion), Paul Brady (IRL — 4x World Champion 2003-2015), David Chapman (USA — 4x World).",
  category: "traditional-cultural-sports",
  subCategory: "Irish native wall-ball sport (GAA)",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "medieval", popularity: "regional",
  countryOfOrigin: "IE",
  regionOfOrigin: "Ireland (17th century origins; GAA codified 1884; Irish Handball Council 1929)",
  estimatedOrigin: "17th century Irish ball courts (references to Galway 1527 + Dublin 1740s); GAA 1884; Irish Handball Council 1929",
  players: { min: 1, max: 4, note: "Singles (1v1) or Doubles (2v2)." },
  equipment: [{ name: "Handball (hollow rubber ~1.9 oz)", description: "Ace or O'Neills brand common in Ireland; Sky Blue in US 4-wall." }, { name: "Leather gloves (padded)", description: "Padded striking glove protecting hand." }, { name: "Court (One-Wall/Four-Wall/Small-Alley/Big-Alley)", description: "Varies by discipline; from 20×16 ft One-Wall to 60×30 ft Big-Alley." }, { name: "Eye protection (mandatory)", description: "GAA mandates eye protection." }],
  duration: { approximateMinutes: 30, structure: "Match: best-of-3 games to 21 points; ~30-60 min." },
  objective: "Score more points than opponent by striking ball off wall so opponent cannot legally return.",
  matchStructure: "Best-of-3 games; game to 21 (some formats 25); win by 2 games.",
  basicRules: [
    { title: "Alternate serves; must clear short line", body: "Server alternates; serve must clear short line (usually 20 ft from front wall) on bounce." },
    { title: "Ball must hit front wall on every shot", body: "Every shot must strike front wall (in 4-wall + 1-wall; 3-wall variations)." },
    { title: "One bounce max between shots", body: "Ball may bounce once on floor before return; hitting on the fly or after one bounce legal." },
    { title: "Server scores only (traditional scoring)", body: "Only server can score in traditional handball; win rally as receiver = side-out (serve changes)." },
  ],
  scoring: {
    summary: "Server-only scoring; game to 21 (some 15 or 25).",
    winCondition: "Win 2 of 3 games; game = 21 points (win by 2).",
  },
  positions: [{ name: "Handball player", role: "Sole competitor (singles) or team of 2.", count: 1 }],
  officiating: { officials: ["Referee", "Line Judges", "Score Keeper"], summary: "GAA / Irish Handball Council certified officials." },
  governingBodies: [{ name: "GAA Handball / Irish Handball Council", founded: 1929, headquarters: "Croke Park, Dublin, Ireland" }, { name: "World Handball Council (WHC)", founded: 1964, headquarters: "Dublin, Ireland" }, { name: "US Handball Association (USHA — 4-wall)", founded: 1951, headquarters: "Tucson, Arizona, USA" }, { name: "International Wall Ball Association (IWBA — one-wall)", founded: 2001, headquarters: "New York" }],
  majorCompetitions: [{ name: "World Handball Championships", frequency: "3 years", founded: 1964, region: "rotating (Ireland/USA/Canada); 2024 Minnesota" }, { name: "GAA Handball All-Ireland Championships", frequency: "annual", founded: 1925, region: "Ireland" }, { name: "US Handball Association National Championships", frequency: "annual", founded: 1951, region: "USA (rotating)" }, { name: "New York One-Wall Championships (Coney Island)", frequency: "annual", founded: 1970, region: "New York, USA" }],
  countriesPlayed: ["IRL (birthplace)", "USA", "CAN", "AUS (Irish diaspora)", "MEX (US 4-wall link)", "ESP (Basque Pelota link)"],
  famousAthletes: ["Paul Brady (IRL — 4x World Champion 2003-2015)", "David Chapman (USA — 4x World Champion)", "John Doyle (IRL — considered GOAT, 1950s-60s dominance)", "Eoin Kennedy (IRL — 6-time Irish Softball champion)", "Michael Walsh (IRL)"],
  records: [
    { title: "Paul Brady 4x World Champion", holder: "Paul Brady (IRL)", value: "Won 4 World Handball Championships (2003, 2006, 2009, 2015) — most world titles in modern era", year: 2015 },
    { title: "First World Championship 1964", holder: "World Handball Council", value: "First World Handball Championship held 1964 in New York City", year: 1964 },
    { title: "GAA Handball part of Gaelic games since 1884", holder: "Gaelic Athletic Association", value: "Handball recognized as one of GAA's 4 native games since founding of GAA in 1884 (Michael Cusack + Maurice Davin)", year: 1884 },
  ],
  variants: ["one-wall-international", "four-wall-classical-irish-us", "three-wall-us-influenced", "small-alley-40x20-traditional", "big-alley-60x30-traditional"],
  relatedSports: ["american-handball", "basque-pelota", "squash", "racquetball", "hurling"],
  skills: ["ambidexterity (must hit with both hands)", "wall-angle reading", "serve variety", "hand-eye coordination", "court positioning"],
  wikipediaTitle: "Gaelic handball",
  sources: [{ label: "Wikipedia — Gaelic handball", url: "https://en.wikipedia.org/wiki/Gaelic_handball", publisher: "Wikipedia" }, { label: "GAA Handball official", url: "https://www.gaahandball.ie", publisher: "GAA Handball / Irish Handball Council" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default gaelicHandball;

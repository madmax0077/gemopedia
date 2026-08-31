import type { Sport } from "@/lib/types";

export const broomballCanada: Sport = {
  id: "broomball-canada",
  slug: "broomball-canada",
  name: "Broomball (Canadian Ice Sport)",
  officialName: "International Federation of Broomball Associations (IFBA)",
  aliases: ["Broomball", "Balai-ballon (French Canada)"],
  shortDescription:
    "Canadian team ice sport — like hockey but played in special rubber-soled shoes (no skates) on ice with brooms and a ball; 6 vs 6 including goalie; codified 1910s Canada; World Broomball Championships biennial since 1991; strongest scenes Canada + USA + Australia + Italy + Japan.",
  longDescription:
    "Broomball is a Canadian team sport played on an ice rink using brooms + a ball — essentially ice hockey played WITHOUT skates (players wear special rubber-soled broomball shoes for grip) and using brooms instead of hockey sticks. Two teams of 6 (5 field players + 1 goalie) play on a standard hockey rink attempting to score by using their broom to strike a small orange rubber ball into the opponent's hockey-sized goal. Origins: (1) Early 1900s Canadian streetcar operators played impromptu games during rest breaks in Ontario + Quebec using corn brooms on frozen streets; (2) Codified as organized sport ~1910s Manitoba + Ontario; (3) First national tournament 1965 (Canadian Broomball Championships); (4) International Federation of Broomball Associations (IFBA) founded 1985; (5) First World Broomball Championships 1991 Toronto. Standard rink: normal ice hockey rink (200 × 85 ft); some countries use unrefrigerated outdoor ice or 'broomball ice' (slightly rougher texture for grip). Equipment: (a) Broomball shoes — special rubber-soled shoes with wide sole + traction pattern; (b) Broomball broom — molded plastic or fiberglass broom head on wooden shaft (evolved from actual corn brooms); (c) Orange rubber broomball ball (~6 inches diameter, lighter than hockey puck); (d) Goalie pads similar to hockey goalie. Rules: 3×20 min periods (senior); face-offs at center + face-off circles like hockey; no offside line (some regions); minor penalties (2 min in box) + major penalties (5 min); no body checking allowed (broomball is a non-contact sport). Play strongholds: Canada (national origin sport with ~50,000+ players), USA (Minnesota + Michigan + Wisconsin strongest), Australia (huge scene relative to population), Italy (Bardonecchia Piedmont hub), Japan (national team), Switzerland, Germany, Sweden, Denmark. World Broomball Championships biennial since 1991 with junior + senior + masters categories + men + women + mixed. Canadian national teams typically dominant along with Australia + USA.",
  category: "winter-sports",
  subCategory: "ice team sport with brooms (hockey without skates)",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "winter", era: "20th-century", popularity: "regional",
  countryOfOrigin: "CA",
  regionOfOrigin: "Canada (Ontario + Manitoba + Quebec — streetcar operators + workers early 1900s)",
  estimatedOrigin: "Origin early 1900s Canadian workers on frozen streets; codified 1910s Manitoba + Ontario; first Canadian Championships 1965; IFBA founded 1985; World Championships since 1991",
  players: { min: 6, max: 6, note: "6 vs 6 (5 field + 1 goalie); rosters 12-15 players." },
  equipment: [{ name: "Broomball shoes (rubber-soled)", description: "Specialized rubber-soled shoes with wide sole + traction pattern for grip on ice; NOT skates." }, { name: "Broomball broom", description: "Molded plastic or fiberglass broom head on wooden/composite shaft; evolved from original corn brooms; ~120-140cm long." }, { name: "Orange rubber ball (~6 in diameter)", description: "Solid rubber ball, orange color for visibility on ice, ~15cm diameter, lighter + larger than hockey puck." }, { name: "Ice hockey rink (200 × 85 ft)", description: "Standard hockey rink with hockey-sized goals; some regions use outdoor ice or broomball-specific ice." }, { name: "Goalie equipment (helmet + chest + pads + gloves)", description: "Goalie wears hockey-goalie style protective equipment; catcher mitt + blocker glove; leg pads." }],
  duration: { approximateMinutes: 60, structure: "Senior: 3×20 min periods; junior: 3×15 min; running clock or stopped clock varies by league; overtime + shootout if tied in playoffs." },
  objective: "Score more goals than opponent by using broom to strike orange rubber ball into opponent's goal.",
  matchStructure: "Three periods with face-offs at center to start + after goals; substitutions on the fly like hockey.",
  basicRules: [
    { title: "No skates — rubber-soled broomball shoes only", body: "Players wear special rubber-soled shoes providing grip on ice; skates strictly prohibited." },
    { title: "No body checking (non-contact sport)", body: "Body checking + boarding prohibited; incidental contact allowed but no aggressive checks." },
    { title: "Broom head must strike ball (no kicking to goal)", body: "Ball must be struck by broom head to score legal goal; kicked or hand-directed shots invalidated." },
    { title: "Minor penalty (2 min box), Major (5 min)", body: "Rule violations penalized like hockey — minor 2 min in penalty box (team plays shorthanded), major 5 min for serious infractions." },
    { title: "Goalie can play ball with hands within crease", body: "Goaltender may catch + throw ball within crease area; outside crease treated like field player." },
  ],
  scoring: { summary: "1 point per goal (ball fully across goal line + under crossbar).", winCondition: "Most goals at end of regulation; overtime + shootout in playoffs if tied." },
  positions: [{ name: "Goaltender (Goalie)", role: "Defends goal; wears hockey-goalie protective gear.", count: 1 }, { name: "Defenders (2)", role: "Two defensive players near own goal.", count: 2 }, { name: "Center", role: "Middle field player, takes face-offs.", count: 1 }, { name: "Wingers (2)", role: "Left + right forwards.", count: 2 }],
  officiating: { officials: ["Referee (2 on ice)", "Linespersons (optional at top levels)", "Timekeeper", "Scorekeeper", "Penalty Box Attendant"], summary: "IFBA-certified referees at World Championships; national federation referees at domestic tournaments." },
  governingBodies: [{ name: "International Federation of Broomball Associations (IFBA)", founded: 1985, headquarters: "Ottawa, Canada" }, { name: "Broomball Canada", founded: 1963, headquarters: "Ottawa, Canada" }, { name: "USA Broomball", founded: 1990, headquarters: "Minnesota, USA" }],
  majorCompetitions: [{ name: "World Broomball Championships", frequency: "biennial", founded: 1991, region: "rotating (Canada, USA, Italy, Australia, Japan)" }, { name: "Canadian National Broomball Championships", frequency: "annual", founded: 1965, region: "Canada" }, { name: "USA Broomball National Championships", frequency: "annual", founded: 1990, region: "USA" }, { name: "Coppa Italia Broomball (Italian Cup)", frequency: "annual", founded: 1980, region: "Bardonecchia, Italy" }],
  countriesPlayed: ["CAN (origin + dominant)", "USA (Minnesota, Michigan, Wisconsin strongholds)", "AUS (major scene)", "ITA (Bardonecchia hub)", "JPN", "CHE", "DEU", "SWE", "DNK", "GBR", "FRA"],
  famousAthletes: ["Various multi-time World Champion Canadian players", "Team Canada + Team Australia + Team Italy senior teams", "Various Broomball Hall of Fame Canada inductees"],
  records: [
    { title: "Canada dominant broomball nation (~50K+ players)", holder: "Broomball Canada", value: "Canada has ~50,000+ registered broomball players + most World Championship medals as birthplace of sport", year: 2024 },
    { title: "First World Championships 1991 Toronto", holder: "International Federation of Broomball Associations", value: "First IFBA World Broomball Championships held 1991 in Toronto, Canada — origin nation as inaugural host", year: 1991 },
    { title: "Australia disproportionate strength (Aussie Rules parallel)", holder: "Broomball Australia", value: "Australia has produced multiple World Champion senior teams despite tropical climate — indoor rink scene + strong national program", year: 2020 },
  ],
  variants: ["broomball-ice-6v6-standard", "broomball-street-summer-variant-no-ice", "broomball-4v4-half-ice-recreational"],
  relatedSports: ["ice-hockey", "field-hockey", "floorball-innebandy", "bandy"],
  skills: ["broom stickhandling", "shooting technique (wrist shot + slap shot with broom)", "ice-shoe balance + stopping", "positional awareness (like hockey)"],
  wikipediaTitle: "Broomball",
  sources: [{ label: "Wikipedia — Broomball", url: "https://en.wikipedia.org/wiki/Broomball", publisher: "Wikipedia" }, { label: "Broomball Canada", url: "https://www.broomball.ca", publisher: "Broomball Canada" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default broomballCanada;

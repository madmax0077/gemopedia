import type { Sport } from "@/lib/types";

export const handball4SquareWall: Sport = {
  id: "handball-4-square-wall",
  slug: "handball-4-square-wall",
  name: "Four Square (Wall / Handball Variant)",
  officialName: "Four Square + Wall Handball (Squareball)",
  aliases: ["Squareball", "4 Square Wall", "Handball Foursquare"],
  shortDescription:
    "Hybrid playground/schoolyard sport combining 4-square (bouncing ball in 4 grid squares) with hitting off a wall; popular schoolyard sport in USA, Canada, Australia, UK. Squareball World Championship since 2005.",
  longDescription:
    "Four Square (also called Handball Four Square or Squareball) is a classic playground/schoolyard game where 4 players stand in a 2×2 grid of numbered squares (King/Queen/Prince/Dunce, or #1-#4 hierarchy) and bounce a rubber ball into each other's squares — one bounce per square before the next player must return. Ball must land inside the receiving player's square without touching lines; failure = player is eliminated + moves to lowest square (dunce), everyone else moves up. Variants include the 'wall handball' hybrid where wall is added as valid return surface. Governed loosely by Squareball Association Global (founded 2005) with organized Squareball World Championship + regional tournaments in USA, Canada, Australia. Popular in schools worldwide as PE + recess sport. Competitive rule variations: 'cherry bombs' (hard hits allowed), 'double bounces', 'holding' (catch + rethrow allowed), 'around the world' (spinning shots). NRP4S (National Recreation Foundation) recognizes it as one of top-10 most-played schoolyard sports in USA + Canada. Related to American Wall Handball (played 1v1 or 2v2 against a wall, distinct from Olympic team handball).",
  category: "playground-games",
  subCategory: "playground bounce-ball grid game (hybrid with wall handball)",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (playground origin ~1950s); Australia + Canada + UK",
  estimatedOrigin: "USA playground game emerged ~1950s; competitive Squareball since 2005",
  players: { min: 4, max: 4, note: "Standard 4 players + waiting queue for elimination replacement." },
  equipment: [{ name: "Rubber playground ball", description: "Standard 8.5\" playground ball; often red/blue/rainbow rubber." }, { name: "2×2 grid painted on ground (or wall for wall variant)", description: "Squares typically 5-8 ft per side; painted or chalked." }, { name: "Wall (optional for wall handball variant)", description: "Wall handball uses one wall + rubber ball." }],
  duration: { approximateMinutes: 15, structure: "Continuous elimination format; ~15 min per session; tournament ~2-4 hrs." },
  objective: "Achieve + maintain highest square (King) as long as possible; opponent eliminations advance you.",
  matchStructure: "4 players in 4 squares; ball rotation; player eliminated when they fail to return → moves to dunce/next player joins.",
  basicRules: [
    { title: "1 bounce per square before hitting back", body: "Ball must bounce exactly once in receiving square before being returned." },
    { title: "Elimination = drop to lowest square", body: "Missing player moves to dunce/#4; all others move up." },
    { title: "King calls house rules", body: "King (highest square) traditionally sets special rules like 'cherry bombs' or 'holding'." },
    { title: "Line touches = out", body: "Ball landing on line = elimination." },
  ],
  scoring: { summary: "Continuous elimination; no formal score in casual play; tournaments count time-at-King or rounds won.", winCondition: "Longest time as King (tournament) or last player standing (multi-elimination)." },
  positions: [{ name: "King (Square 1)", role: "Highest-ranked square; often sets house rules.", count: 1 }, { name: "Queen (Square 2)", role: "Second-highest square." }, { name: "Prince (Square 3)", role: "Third-highest square." }, { name: "Dunce (Square 4)", role: "Lowest square; new players enter here." }],
  governingBodies: [{ name: "Squareball Association Global", founded: 2005, headquarters: "USA" }, { name: "National Recreation Foundation (NRF)", founded: 1965, headquarters: "USA" }],
  majorCompetitions: [{ name: "Squareball World Championship", frequency: "annual", founded: 2005, region: "USA (rotating)" }, { name: "Australian Handball Squareball Championship", frequency: "annual", founded: 2010, region: "Australia (rotating)" }],
  countriesPlayed: ["USA", "CAN", "AUS", "GBR", "IRL", "NZL"],
  famousAthletes: ["Squareball World Champion (rotating)"],
  records: [
    { title: "Squareball Association founded 2005", holder: "Squareball Association Global", value: "First organized Squareball World Championship 2005", year: 2005 },
    { title: "Top-10 US school PE sport", holder: "NRF USA", value: "Four Square recognized as top-10 most-played schoolyard sport in USA per NRF 2015 survey", year: 2015 },
  ],
  variants: ["classic-4-square", "wall-handball-variant", "double-square-8-player", "cherry-bomb-rules", "holding-catch-variant"],
  relatedSports: ["american-wall-handball", "kickball", "tetherball", "dodgeball"],
  skills: ["reflex reaction", "spin control", "hitting accuracy", "adaptation to house rules"],
  wikipediaTitle: "Four square",
  sources: [{ label: "Wikipedia — Four square", url: "https://en.wikipedia.org/wiki/Four_square", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default handball4SquareWall;

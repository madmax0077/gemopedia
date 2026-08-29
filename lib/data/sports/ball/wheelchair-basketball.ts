import type { Sport } from "@/lib/types";

export const wheelchairBasketball: Sport = {
  id: "wheelchair-basketball",
  slug: "wheelchair-basketball",
  name: "Wheelchair Basketball",
  officialName: "Wheelchair Basketball (International Wheelchair Basketball Federation - IWBF)",
  aliases: ["WBB", "Para Basketball"],
  shortDescription:
    "Paralympic team sport — 5v5 basketball played in specialized sport wheelchairs; contested at every Summer Paralympics since Rome 1960 (sport's inaugural Games); IWBF governs since 1993.",
  longDescription:
    "Wheelchair Basketball is a Paralympic team sport — 5v5 basketball played in specialized sport wheelchairs on a standard basketball court with standard hoop height (3.05m). Emerged in USA in 1946 as rehabilitation therapy for WWII veterans; became a founding sport of the Paralympic Games in Rome 1960. IWBF has governed since 1993. Two Paralympic gold medal events (men's + women's). Players classified 1-4.5 by physical function; a team's on-court total (5 players) cannot exceed 14 classification points — encouraging inclusion of players with more severe impairments. USA + Canada + Germany + Australia + Netherlands + Australia dominate historically. Legendary players: David Kiley (US — Hall of Fame + 5× Paralympic gold), Craig Friedberg (US — multi-time Paralympic gold), Steve Serio (US — Hall of Fame + coaching), Patrick Anderson (Canada — 3× Paralympic gold), Rollon Barker (Australia — women's dominant). Team includes wheelchair specialists + collaborators of any able-bodied playing background.",

  category: "ball-sports",
  subCategory: "paralympic team sport — basketball in wheelchairs",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: true,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "United States (1946 WWII veteran rehabilitation); Paralympic Games since Rome 1960; IWBF founded 1993",
  estimatedOrigin: "USA 1946 as WWII veteran rehabilitation; National Wheelchair Basketball Association 1948; Paralympic debut Rome 1960; IWBF 1993",

  players: { perTeam: 5, min: 5, max: 5, substitutes: 7, note: "5v5; 12-person roster; classification points system limits team total to 14 points across on-court 5." },
  field: {
    surfaceName: "Standard basketball court",
    dimensions: "FIBA regulation: 28m × 15m; 3.05m hoop height",
    description: "Same court dimensions + hoop height as able-bodied basketball. Standard basketball court configuration.",
  },
  equipment: [
    { name: "Sport wheelchair", description: "Purpose-built rigid frame wheelchair; low seating position; slanted rear wheels for turning + stability; cost $3,000-$10,000." },
    { name: "Basketball (size 7 men + 6 women)", description: "Standard FIBA basketball; same as able-bodied game." },
    { name: "Athletic apparel", description: "Standard sport gear; players may wear knee + ankle braces." },
    { name: "Anti-tip devices", description: "Small rear-wheel extensions preventing backward tips." },
  ],
  duration: { approximateMinutes: 40, structure: "4 × 10-min quarters; standard FIBA basketball timing." },
  objective: "Score more baskets than opposing team.",
  matchStructure: "4 quarters × 10 min; standard basketball structure. Overtime periods if tied.",

  basicRules: [
    { title: "5 vs 5", body: "5 players per side; 7-person bench for substitutions." },
    { title: "Classification points limit", body: "On-court 5 players' total classification cannot exceed 14 points (out of possible max ~22.5)." },
    { title: "Ball must be dribbled or passed every 2 pushes", body: "After 2 pushes on wheelchair wheels, ball must be dribbled or passed to teammate." },
    { title: "Standard basketball scoring", body: "2-point field goal (inside arc); 3-point (outside arc); 1-point free throw." },
    { title: "Wheelchair is part of body", body: "Contact with wheelchair = same as contact with body; fouled if illegal contact." },
    { title: "Standard 3-second lane rule + 24-second shot clock", body: "Same restrictions as able-bodied basketball." },
  ],
  scoring: {
    summary: "Standard basketball: 2-point field goal, 3-point, 1-point free throw. Higher score wins.",
    winCondition: "Higher score at end of regulation; overtime for tied games.",
    breakdown: [
      { action: "Field goal (inside arc)", points: "2" },
      { action: "3-point field goal (outside arc)", points: "3" },
      { action: "Free throw", points: "1" },
    ],
  },

  positions: [
    { name: "Center", role: "Post player; typically higher classification.", count: 1 },
    { name: "Forwards (2)", role: "Scoring + rebounding.", count: 2 },
    { name: "Guards (2)", role: "Ball handling + facilitation.", count: 2 },
  ],
  officiating: {
    officials: ["2 Referees (on-court)", "Scorer + Timekeeper", "24-second operator"],
    summary: "3-4 officials per game; IWBF-certified for international events.",
  },

  governingBodies: [
    { name: "International Wheelchair Basketball Federation (IWBF)", founded: 1993, headquarters: "Winnipeg, Canada", website: "https://iwbf.org" },
    { name: "National Wheelchair Basketball Association (NWBA)", founded: 1948, headquarters: "USA" },
    { name: "European Wheelchair Basketball Federation", founded: 1974, headquarters: "Europe" },
  ],
  majorCompetitions: [
    { name: "Summer Paralympic Games (Wheelchair Basketball)", frequency: "quadrennial", founded: 1960, region: "worldwide" },
    { name: "IWBF World Championships", frequency: "quadrennial (opposite Paralympic)", founded: 1973, region: "worldwide" },
    { name: "IWBF Zone Championships (regional qualifiers)", frequency: "biennial", founded: 1972, region: "regional" },
    { name: "European Championship (Men + Women)", frequency: "biennial", founded: 1974, region: "Europe" },
  ],
  countriesPlayed: ["US", "CA", "DE", "AU", "NL", "GB", "ES", "IT", "JP", "IR", "BR", "TR", "PL", "AR"],
  famousAthletes: [
    "Patrick Anderson (Canada — 3× Paralympic gold; considered greatest ever)",
    "David Kiley (US — Paralympic + WBBA Hall of Fame)",
    "Steve Serio (US — Paralympic gold + long career)",
    "Craig Friedberg (US — multi-time Paralympic gold)",
    "Rollon Barker (Australia — women's dominant)",
    "Kate Sarner Weyandt (Germany — women's Paralympic gold)",
    "Christofer Anthony (US — modern star)",
    "Louis Laughlin (Canada — modern Paralympic contender)",
    "Melissa Tapper (Australia — dual Olympic/Paralympic athlete)",
  ],
  records: [
    { title: "Most Paralympic wheelchair basketball gold (men)", holder: "USA", value: "Multiple Paralympic golds since 1960; sport's founding + dominant nation", year: 2021 },
    { title: "Most Paralympic wheelchair basketball gold (women)", holder: "USA + Canada + Germany", value: "Multiple across nations; competitive women's field", year: 2021 },
    { title: "Longest-serving Paralympic sport", holder: "Wheelchair Basketball", value: "Contested at every Paralympic Games since 1960 inaugural", year: 2024 },
    { title: "Patrick Anderson dominance", holder: "Patrick Anderson (Canada)", value: "3× Paralympic gold + 4× World Championship gold; considered greatest ever wheelchair basketball player", year: 2016 },
  ],

  variants: ["iwbf-standard-5v5", "3x3-wheelchair-basketball", "junior-wheelchair-basketball", "national-championships"],
  relatedSports: ["basketball", "wheelchair-rugby", "wheelchair-tennis", "3x3-basketball"],

  skills: ["wheelchair mobility + speed", "one-handed dribbling + shooting", "physical strength (chair propulsion)", "positional play + spacing", "team system + coordination"],

  terminology: [
    { term: "Wheelchair Basketball", meaning: "5v5 basketball played in specialized sport wheelchairs." },
    { term: "IWBF", meaning: "International Wheelchair Basketball Federation." },
    { term: "Classification", meaning: "Player rating 1-4.5 by physical function; on-court total limited to 14 points." },
    { term: "Two-push rule", meaning: "After 2 pushes, ball must be dribbled or passed." },
    { term: "Sport wheelchair", meaning: "Purpose-built rigid frame chair; slanted rear wheels for speed + turning." },
    { term: "Anti-tip", meaning: "Rear-wheel extensions preventing backward tips." },
    { term: "NWBA", meaning: "National Wheelchair Basketball Association (US); founded 1948." },
    { term: "Patrick Anderson", meaning: "Canadian; considered greatest wheelchair basketball player ever." },
  ],

  faq: [
    { question: "What is Wheelchair Basketball?", answer: "A Paralympic team sport — 5v5 basketball played in specialized sport wheelchairs on a standard basketball court with standard hoop height (3.05m). Emerged in USA 1946 as rehabilitation therapy for WWII veterans. Contested at every Summer Paralympics since Rome 1960 (sport's inaugural Games). Players classified 1-4.5 by physical function; on-court total limited to 14 points across 5 players — encouraging inclusion." },
    { question: "How is Wheelchair Basketball different from Wheelchair Rugby?", answer: "Wheelchair Basketball: 5v5 basketball in wheelchairs; standard hoop + court; ball passed with hands. Wheelchair Rugby (Murderball): 4v4 hybrid rugby-basketball-handball with volleyball; try line scoring; contact-heavy including deliberate wheelchair collisions. Different rules + physicality despite similar wheelchairs." },
    { question: "Who is the greatest wheelchair basketball player?", answer: "Patrick Anderson (Canada) — considered greatest ever. 3× Paralympic gold + 4× World Championship gold. Others: David Kiley (US Hall of Fame + 5× Paralympic gold), Steve Serio (US + long career), Craig Friedberg (US + multi-time Paralympic gold)." },
    { question: "Is Wheelchair Basketball in the Olympics?", answer: "No, but at every Summer Paralympics since Rome 1960 (sport's inaugural Games). Two Paralympic gold medal events (men's + women's). Paralympic Games run alongside Olympic Games in same host city." },
  ],

  wikipediaTitle: "Wheelchair basketball",
  sources: [{ label: "IWBF", url: "https://iwbf.org", publisher: "IWBF" }, { label: "Wikipedia — Wheelchair basketball", url: "https://en.wikipedia.org/wiki/Wheelchair_basketball", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

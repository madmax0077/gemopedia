import type { Sport } from "@/lib/types";

export const oneCushionBilliards: Sport = {
  id: "one-cushion-billiards",
  slug: "one-cushion-billiards",
  name: "One-Cushion Billiards",
  officialName: "One-Cushion Carom Billiards (UMB)",
  aliases: ["1-cushion", "One-Cushion Carom", "Simple Cushion"],
  shortDescription:
    "Carom billiards discipline where the cue ball must strike at least one cushion between contacting the two object balls — foundational carom skill and stepping stone from balkline to three-cushion; UMB championships since 1936.",
  longDescription:
    "One-Cushion Billiards is a carom (pocketless) billiards discipline played on a 2.84m × 1.42m carom table with three balls (2 cues + 1 red). To score a point, the cue ball must contact BOTH object balls AND touch at least ONE cushion at some point during the shot. Simpler than three-cushion (which requires 3 cushion contacts) but harder than straight carom (no cushion requirement), one-cushion serves as a foundational training discipline for carom players progressing to the elite three-cushion level. The UMB (Union Mondiale de Billard) has governed international carom billiards including one-cushion since 1959, with the World One-Cushion Championship held periodically since 1936. Historically most popular in Belgium, Netherlands, Sweden, Germany, and South Korea, one-cushion is a technique-rich variant emphasizing angles, cushion physics, and cue ball control. Modern top players: Marco Zanetti (Italy), Torbjörn Blomdahl (Sweden), Dick Jaspers (Netherlands), Frédéric Caudron (Belgium).",

  category: "precision-sports",
  subCategory: "carom billiards (1-cushion)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "FR",
  regionOfOrigin: "France + Belgium (mid-19th century codification); UMB governance since 1959",
  estimatedOrigin: "Mid-19th century France + Belgium; UMB founded 1959; World Championship 1936 (irregular editions)",

  players: { min: 2, max: 2, note: "1v1 competitive; occasionally doubles." },
  field: {
    surfaceName: "Carom billiards table (2.84m × 1.42m; pocketless)",
    dimensions: "2.84m × 1.42m playing surface; no pockets; cushioned rails only",
    description: "Full-size carom table; smaller and pocketless compared to English/American pool tables. Match table temperature usually heated to 25°C for consistent play." ,
  },
  equipment: [
    { name: "3 carom balls (2 cues + 1 red)", description: "61.5mm diameter phenolic resin balls (larger + heavier than pool balls)." },
    { name: "Cue stick", description: "Carom cue ~140cm; smaller tip than pool cues for precision spin." },
    { name: "Chalk", description: "Applied to cue tip for grip on cue ball." },
  ],
  duration: { approximateMinutes: 60, structure: "Race to fixed score (typically 100 or 150 points); match length 30-90 min." },
  objective: "Score more points than opponent by executing legal one-cushion caroms (cue ball contacts both object balls with ≥1 cushion touch).",
  matchStructure: "Race to target points (100-150 typical). Player continues break while scoring; miss = opponent's turn.",

  basicRules: [
    { title: "Contact both object balls", body: "Cue ball must contact both other balls during shot." },
    { title: "Minimum 1 cushion contact", body: "Cue ball must touch at least one cushion at some point (before contacting second ball, most commonly)." },
    { title: "Continue break while scoring", body: "Each legal carom = 1 point + continued turn." },
    { title: "Miss / foul = opponent's turn", body: "Fail to make legal carom = opponent's inning." },
  ],
  advancedRules: [
    { title: "Cushion-first strategies", body: "Advanced players intentionally send cue ball to cushion first (long angle to first ball) rather than contact-then-cushion approach." },
    { title: "Angle geometry drills", body: "Table has ~1200 practical angle combinations; pros memorize hundreds via visualization + practice." },
    { title: "Position play", body: "Every carom sets up next; break-builders string 5-20 consecutive caroms." },
    { title: "Balk-line/balk-space rules", body: "None in one-cushion (unlike balkline discipline); freedom to gather balls anywhere on table." },
  ],
  scoring: {
    summary: "1 point per legal one-cushion carom. Race to target.",
    winCondition: "First to target score (typically 100 or 150) wins match.",
    breakdown: [
      { action: "Legal one-cushion carom", points: "1" },
      { action: "Foul / miss", points: "Loss of turn (no points to opponent, unlike English billiards)" },
    ],
  },
  penalties: [
    { title: "No cushion contact", body: "Failed carom — loss of turn (no points transferred)." },
    { title: "Object ball jumped off table", body: "Foul — ball replaced, opponent's turn." },
    { title: "Push shot / double hit", body: "Foul — opponent's turn." },
  ],

  positions: [
    { name: "Player 1", role: "First break; alternates on miss.", count: 1 },
    { name: "Player 2", role: "Alternates with Player 1.", count: 1 },
  ],
  officiating: {
    officials: ["Referee (1)", "Scorekeeper"],
    summary: "Referee + scorekeeper at UMB events; casual play self-refereed.",
  },

  governingBodies: [
    { name: "Union Mondiale de Billard (UMB)", founded: 1959, headquarters: "Sint-Martens-Latem, Belgium", website: "https://www.umb-carom.org" },
    { name: "Confédération Européenne de Billard (CEB)", founded: 1958, headquarters: "Belgium" },
  ],
  majorCompetitions: [
    { name: "UMB World One-Cushion Championship", frequency: "irregular (2-4 year intervals)", founded: 1936, region: "worldwide (rotating hosts)" },
    { name: "European One-Cushion Championship", frequency: "biennial", founded: 1970, region: "Europe" },
    { name: "National championships (Netherlands, Belgium, Sweden, Korea, Germany)", frequency: "annual", founded: 1920, region: "national (various since early 1900s)" },
  ],
  countriesPlayed: ["BE", "NL", "SE", "FR", "IT", "TR", "DE", "KR", "JP", "VN", "DK", "US"],
  famousAthletes: [
    "Torbjörn Blomdahl (Sweden — carom legend; one-cushion + three-cushion champion)",
    "Dick Jaspers (Netherlands — multiple UMB champion across formats)",
    "Frédéric Caudron (Belgium — carom versatile champion)",
    "Marco Zanetti (Italy — carom multi-discipline champion)",
    "Raymond Ceulemans (Belgium — historic carom GOAT; one-cushion + three-cushion multi-title)",
    "Kim Byung-Ho (Korea — Asian carom star)",
  ],
  records: [
    { title: "Historic highest average", holder: "Various UMB pros", value: "Modern one-cushion averages exceed 5.0 per inning at world-class level (5+ points per turn on average)", year: 2020 },
    { title: "Longest UMB history discipline", holder: "One-Cushion Championship", value: "First contested 1936 — one of longest-running UMB events", year: 2023 },
  ],

  variants: ["standard-one-cushion-race-to-100", "team-one-cushion-national-teams", "asian-format-shorter-race"],
  relatedSports: ["three-cushion-billiards", "carom-billiards", "balkline", "artistic-billiards", "english-billiards"],

  skills: ["cushion angle geometry", "cue ball spin control (english + draw + follow)", "position play for consecutive caroms", "long-shot power control", "mental focus over race-to-100"],
  strategies: [
    { title: "Contact-cushion-contact vs. cushion-first", body: "Two-way route to legal carom; choose based on ball geometry." },
    { title: "Gather balls together", body: "Cluster balls in one table quadrant for easier consecutive caroms; unlike balkline, no restrictions on gathering." },
    { title: "Position play emphasis", body: "Every carom aims to leave next ball geometry favorable; break-building is fundamental skill." },
    { title: "Safety when snookered", body: "Rare in one-cushion (no pockets) but leave cue ball far from red for opponent difficulty." },
  ],

  terminology: [
    { term: "Carom", meaning: "Legal scoring shot — cue contacts both other balls." },
    { term: "Inning", meaning: "Player's turn at table (until miss)." },
    { term: "Break", meaning: "Consecutive scoring caroms by one player." },
    { term: "Cushion", meaning: "Rubberized rail; cue ball must touch ≥1 for point." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn straight carom (no cushion required) first", body: "Foundation for angle understanding before adding cushion complexity." },
      { title: "Join a carom club (Europe or Korea)", body: "Belgium, Netherlands, France, Germany, Sweden, Korea have dedicated carom clubs." },
      { title: "Practice cushion physics daily", body: "Understanding how cue ball responds to cushion at different speeds + angles takes months." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at national + European championships", body: "European federation + national bodies host annual championships." },
      { title: "UMB World One-Cushion Championship qualification", body: "Via UMB continental federation qualifier." },
    ]},
  ],

  faq: [
    { question: "Is one-cushion easier than three-cushion?", answer: "Yes — one-cushion requires only 1 cushion contact (vs. 3 in three-cushion), making it significantly easier. It serves as intermediate training between straight carom (no cushion) and three-cushion (elite discipline). Top players play all three but focus most on three-cushion at world level." },
    { question: "Why is one-cushion so popular in Belgium and Korea?", answer: "Belgium is the historical carom powerhouse (Ceulemans, Caudron) with dedicated club culture. Korea developed a massive carom scene in the 1990s-2010s driven by TV broadcasts + academies + national investment. Together with Netherlands + Sweden, they dominate carom disciplines including one-cushion." },
    { question: "Is one-cushion Olympic?", answer: "No — carom billiards has been proposed for Olympic inclusion multiple times but has never been accepted. Contested at the World Games and UMB championships." },
  ],

  wikipediaTitle: "Cushion carom",
  sources: [
    { label: "UMB", url: "https://www.umb-carom.org", publisher: "Union Mondiale de Billard" },
    { label: "Wikipedia — Cushion carom", url: "https://en.wikipedia.org/wiki/Cushion_carom", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

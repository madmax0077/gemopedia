import type { Sport } from "@/lib/types";

export const basketball: Sport = {
  id: "basketball",
  slug: "basketball",
  name: "Basketball",
  officialName: "Basketball",
  aliases: ["Hoops", "Ball"],
  shortDescription:
    "A five-a-side team sport in which players score by throwing an inflated ball through a 10-foot-high hoop.",
  longDescription:
    "Invented by Dr James Naismith in Springfield, Massachusetts in 1891 as an indoor winter game, basketball is now the second-most-watched sport in the world. Two teams of five score by shooting the ball through the opposing team's basket, mounted on a backboard 3.05 m (10 feet) above the floor. The NBA (United States) is the world's premier league; FIBA governs international play.",

  category: "ball-sports",
  subCategory: "goal-sport (basket)",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Springfield, Massachusetts",
  estimatedOrigin: "December 1891 (invented by Dr James Naismith)",

  players: { perTeam: 5, min: 5, max: 5, substitutes: 7 },
  field: {
    surfaceName: "court",
    dimensions: "FIBA: 28 m × 15 m. NBA: 28.65 m × 15.24 m. Hoop 3.05 m high.",
    description:
      "Rectangular indoor hardwood court. A three-point arc (FIBA 6.75 m, NBA 7.24 m) frames the paint (key), with a free-throw line 4.60 m from the backboard.",
  },
  equipment: [
    { name: "Basketball", description: "Inflated rubber-lined leather ball, 29.5 inches (75 cm) circumference for men, 28.5 inches for women." },
    { name: "Hoop & backboard", description: "10-foot-high hoop with a 45 cm diameter, attached to a rectangular backboard." },
  ],
  duration: {
    approximateMinutes: 48,
    structure: "FIBA: 4 quarters × 10 min. NBA: 4 quarters × 12 min. College: 2 halves × 20 min.",
    note: "Overtime periods of 5 min until a winner is decided; there are no ties.",
  },
  objective: "Score more points than the opposition by shooting the ball through the opposing team's basket.",
  matchStructure:
    "Each quarter begins with a jump ball (or possession arrow after the initial jump). The game is timed with a running clock that stops for fouls, timeouts and out-of-bounds. Each possession is limited by a shot clock (24 s FIBA/NBA, 30 s NCAA women, 30 s NCAA men).",

  basicRules: [
    { title: "Dribbling", body: "You must bounce (dribble) the ball while moving. Picking up your dribble and starting again is 'double dribble', a turnover." },
    { title: "Travelling", body: "Taking too many steps (more than 2 after gathering the ball, per current NBA/FIBA interpretation) is a turnover." },
    { title: "Shot clock", body: "The offence must attempt a shot that hits the rim within 24 seconds (FIBA/NBA)." },
    { title: "3-second violation", body: "An offensive player cannot stay in the paint (key) for more than 3 seconds." },
    { title: "Fouls", body: "Personal fouls limit each player to 5 (FIBA) or 6 (NBA) before being fouled out." },
  ],
  advancedRules: [
    { title: "Team fouls & bonus", body: "After a team accumulates 4 fouls in a quarter, subsequent fouls send the opposing team to the free-throw line." },
    { title: "Backcourt violation", body: "Once the ball crosses the halfcourt line, the offence cannot retreat with it into their own half." },
    { title: "Goaltending", body: "Blocking a shot on its downward arc, or after it has touched the backboard above the rim, is illegal — the basket counts." },
  ],
  scoring: {
    summary: "2 points from inside the arc, 3 from beyond, 1 for a free throw.",
    breakdown: [
      { action: "Field goal inside the arc", points: "2 points" },
      { action: "Field goal beyond the arc", points: "3 points" },
      { action: "Free throw", points: "1 point per made shot" },
    ],
    winCondition: "Higher score at the end of regulation (or overtime) wins.",
  },
  penalties: [
    { title: "Personal foul", body: "Illegal contact — free throws awarded if the fouled team is in the bonus, or if the player was in the act of shooting." },
    { title: "Technical foul", body: "Behaviour / dead-ball violations — one free throw awarded to the opposition." },
    { title: "Flagrant foul", body: "Excessive contact — free throws + possession, with possible ejection." },
  ],
  fouls: [
    { title: "Blocking", body: "Illegal defence — obstructing an offensive player's movement without established position." },
    { title: "Charging", body: "Offensive foul — plowing into a defender who has established legal position." },
    { title: "Reach-in", body: "Slapping across the shooter's arms while defending — usually called for hand contact." },
  ],
  winningConditions: ["Highest score at the end of regulation.", "Overtime periods until a winner is found — there are no ties."],

  positions: [
    { name: "Point guard (PG)", role: "The primary ball handler and playmaker.", count: 1 },
    { name: "Shooting guard (SG)", role: "The primary perimeter scorer.", count: 1 },
    { name: "Small forward (SF)", role: "A versatile wing who can score inside and outside.", count: 1 },
    { name: "Power forward (PF)", role: "A strong post presence and rebounder.", count: 1 },
    { name: "Center (C)", role: "The tallest player — dominates the paint on both ends.", count: 1 },
  ],
  officiating: {
    officials: ["FIBA: 3 referees", "NBA: 3 referees", "Table officials (scorer, timekeeper, shot-clock)"],
    summary: "Three referees rotate around the court. The table officials manage the game clock, shot clock, scores, fouls and possession arrow.",
  },

  governingBodies: [
    { name: "Fédération Internationale de Basketball", acronym: "FIBA", founded: 1932, headquarters: "Mies, Switzerland", website: "https://www.fiba.basketball" },
    { name: "National Basketball Association", acronym: "NBA", founded: 1946, headquarters: "New York, USA", website: "https://www.nba.com" },
  ],
  majorCompetitions: [
    { name: "NBA Finals", frequency: "annual", founded: 1947, region: "USA" },
    { name: "FIBA Basketball World Cup", frequency: "quadrennial", founded: 1950, region: "worldwide" },
    { name: "Olympic Basketball Tournament", frequency: "quadrennial", founded: 1936, region: "worldwide" },
    { name: "EuroLeague", frequency: "annual", founded: 1958, region: "Europe" },
  ],
  countriesPlayed: ["US", "CA", "MX", "BR", "AR", "ES", "FR", "GR", "SN", "IN", "JP", "CN", "AU"],
  famousAthletes: ["Michael Jordan", "Kareem Abdul-Jabbar", "Kobe Bryant", "LeBron James", "Bill Russell", "Diana Taurasi", "Lisa Leslie"],
  records: [
    { title: "Most NBA championships (player)", holder: "Bill Russell", value: "11 rings", year: 1969 },
    { title: "Most points in an NBA game", holder: "Wilt Chamberlain", value: "100 points", year: 1962 },
    { title: "Most Olympic gold medals (basketball)", holder: "USA", value: "16 golds", year: 2024 },
  ],

  variants: ["3x3-basketball", "wheelchair-basketball", "streetball"],
  relatedSports: ["netball", "handball"],

  skills: ["ball-handling", "shooting", "spatial awareness", "vertical leap", "endurance"],

  terminology: [
    { term: "Layup", meaning: "A close-range shot released while running toward the basket." },
    { term: "Dunk", meaning: "Slamming the ball through the hoop from above." },
    { term: "Assist", meaning: "A pass that directly leads to a teammate scoring." },
    { term: "Rebound", meaning: "Recovering the ball after a missed shot." },
    { term: "Pick and roll", meaning: "The most common offensive play — a screen followed by a cut to the basket." },
    { term: "And-1", meaning: "A basket scored while being fouled — worth the field goal + one free throw." },
    { term: "Airball", meaning: "A shot that misses the entire rim and backboard." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "What is basketball?", body: "Two teams of 5 try to score by putting a ball through the opponent's 10-foot hoop.", anchor: "hero" },
      { title: "Scoring", body: "2 points inside the arc, 3 points from beyond, 1 for a free throw.", anchor: "scoring" },
      { title: "Dribbling & travelling", body: "You must bounce the ball while moving; a max of 2 steps after picking it up.", anchor: "rules" },
      { title: "Fouls & free throws", body: "Illegal contact gives the opponent free throws.", anchor: "penalties" },
    ] },
  ],
  diagrams: [
    {
      id: "basketball-court",
      title: "The court",
      component: "basketball-court",
      slot: "playing-area",
    },
  ],
  faq: [
    { question: "How many players on the court?", answer: "Five per side; a full team roster is usually 12 with 7 on the bench." },
    { question: "How long is an NBA game?", answer: "48 minutes of game time in four 12-minute quarters — clock stoppages take real elapsed time to around 2h 15m." },
    { question: "Who invented basketball?", answer: "Dr James Naismith, in December 1891, as an indoor winter alternative to outdoor sports." },
  ],

  sources: [
    { label: "FIBA Official Rules 2023", publisher: "FIBA", url: "https://www.fiba.basketball/documents" },
    { label: "NBA Rulebook", publisher: "NBA", url: "https://official.nba.com/rulebook/" },
  ],
  lastVerified: "2026-08-20",
  confidence: "verified",
};

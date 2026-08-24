import type { Sport } from "@/lib/types";

export const softball: Sport = {
  id: "softball",
  slug: "softball",
  name: "Softball",
  officialName: "Softball",
  aliases: ["Fastpitch", "Slowpitch"],
  shortDescription:
    "Bat-and-ball team sport related to baseball — played with a larger ball, an underhand pitch and a smaller diamond over seven innings.",
  longDescription:
    "Softball is a team sport derived from baseball, invented in Chicago in 1887 as an indoor version and now played worldwide outdoors. Two nine-player teams (ten in slowpitch) alternate offence and defence over seven innings on a smaller diamond, pitching a larger ball underhand. The two dominant codes are fastpitch — the discipline played at the Olympics, in college and internationally — and slowpitch, popular for recreational and adult league play. Rule differences from baseball include mandatory underhand pitching, a shorter pitching distance (43 ft in women's fastpitch), a larger ball (11-12 in circumference), seven-inning games, and pitchers whose motion drives their momentum toward the plate rather than off a raised mound.",

  category: "ball-sports",
  subCategory: "bat-and-ball",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isProfessional: true,
  season: "summer",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Chicago, USA",
  estimatedOrigin: "1887 (invented by George Hancock as an indoor game); outdoor fastpitch 1900s; slowpitch 1930s",

  players: { perTeam: 9, min: 9, max: 10, substitutes: 9, note: "9 players in fastpitch (with optional DP/FLEX rule adding a batter), 10 in slowpitch (adds a rover in the outfield)." },
  field: {
    surfaceName: "diamond",
    dimensions: "60 ft baselines (18.3 m); pitching distance 43 ft (13.1 m) women's fastpitch, 46 ft (14.0 m) men's; outfield fence 200-250 ft (61-76 m).",
    description: "Smaller diamond than baseball with a flat pitching circle (no raised mound). Fair territory extends between the two foul lines from home plate.",
  },
  equipment: [
    { name: "Softball", description: "11-12 inch circumference (larger than baseball); typically bright yellow with red stitching for visibility." },
    { name: "Bat", description: "Aluminium or composite in most codes (wood allowed); shorter and lighter than baseball bats." },
    { name: "Glove", description: "Fielding glove larger than baseball's, sized for the bigger ball." },
    { name: "Batting helmet", description: "Required in fastpitch; typically has a face mask/cage." },
    { name: "Catcher's gear", description: "Mask with throat guard, chest protector, shin guards." },
    { name: "Cleats", description: "Rubber or metal (metal cleats banned in some age groups)." },
  ],
  duration: {
    approximateMinutes: 100,
    structure: "Seven innings; if tied, extra innings played with an International Tie-Breaker Rule that puts the last-out batter on second base to speed the game.",
    note: "Mercy rule in most leagues: game ends if a team leads by 15+ after 3 innings, 10 after 4, 8 after 5.",
  },
  objective: "Score more runs than the opposing team over seven innings by batting and rounding the bases before three outs per half-inning.",
  matchStructure:
    "The visitors bat in the top of each inning, the home team in the bottom. Three outs end the half-inning; teams switch. Runs are scored the same way as baseball — round all four bases before three outs. After seven innings, the team with more runs wins. Extra innings use the tiebreaker in most codes.",

  basicRules: [
    { title: "Underhand pitch", body: "Pitcher must deliver the ball underhand with a straight, whip-like motion — no overhead throwing." },
    { title: "Windmill motion", body: "Modern fastpitch pitchers rotate the arm in a full circle at the hip, releasing near the front foot at high velocity (70+ mph elite women)." },
    { title: "No leadoff (fastpitch)", body: "Runners may not leave the base until the pitcher releases the ball; leaving early is an out." },
    { title: "Slowpitch arc", body: "In slowpitch, the pitch must travel with a legal arc (6-12 ft above the ground); flat pitches are called illegal." },
    { title: "Seven innings", body: "A regulation game is 7 innings, not 9." },
    { title: "Bunts", body: "Allowed in fastpitch; illegal in most slowpitch codes." },
    { title: "Foul balls", body: "Same as baseball — strike unless already at strike 2, when it stays a ball unless caught for an out." },
  ],
  advancedRules: [
    { title: "DP/FLEX rule (fastpitch)", body: "Designated player bats for a defensive-only 'flex' player; allows a strong hitter and a strong defender to share one lineup slot." },
    { title: "Re-entry", body: "Starting players who are substituted out may re-enter once, in their original spot." },
    { title: "Intentional walk", body: "Coach may signal an intentional walk without pitching (like modern MLB)." },
    { title: "Look-back rule (fastpitch)", body: "Once the pitcher has the ball in the pitching circle, runners not committed to a base must stop and either return or advance immediately — no bouncing off." },
  ],
  scoring: {
    summary: "Runs are the only scoring unit — same as baseball.",
    breakdown: [
      { action: "Single / double / triple / home run", points: "1 base / 2 bases / 3 bases / all four", note: "Grand slam scores 4 runs with bases loaded." },
      { action: "Walk / HBP", points: "batter to 1B" },
      { action: "Sacrifice fly", points: "runner scores from 3B" },
    ],
    winCondition: "Higher score after 7 innings; extra innings with tiebreaker if tied.",
  },

  positions: [
    { name: "Pitcher (P)", role: "Underhand pitcher; often the highest-impact player.", count: 1 },
    { name: "Catcher (C)", role: "Behind home plate, receives pitches, blocks the plate.", count: 1 },
    { name: "First baseman (1B)", role: "Fields at first, receives throws for outs.", count: 1 },
    { name: "Second baseman (2B)", role: "Right of second base; short throws.", count: 1 },
    { name: "Third baseman (3B)", role: "Reactive infielder against bunts and slaps.", count: 1 },
    { name: "Shortstop (SS)", role: "Between 2B and 3B; often the best athletic infielder.", count: 1 },
    { name: "Outfielders (LF/CF/RF)", role: "Cover the outfield; slowpitch adds a fourth 'rover' outfielder.", count: 3 },
  ],
  officiating: {
    officials: ["Home-plate umpire", "1-2 base umpires"],
    summary: "Home-plate umpire calls balls, strikes, and plate plays. Base umpires cover safe/out on force and tag plays.",
  },

  governingBodies: [
    { name: "World Baseball Softball Confederation", acronym: "WBSC", founded: 2013, headquarters: "Lausanne, Switzerland", website: "https://www.wbsc.org" },
    { name: "USA Softball", founded: 1933, headquarters: "Oklahoma City, USA", website: "https://www.teamusa.org/usa-softball" },
    { name: "National Pro Fastpitch (Athletes Unlimited)", founded: 1976, headquarters: "United States" },
  ],
  majorCompetitions: [
    { name: "WBSC Softball World Cup (women)", frequency: "quadrennial", founded: 1965, region: "worldwide" },
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 1996, region: "worldwide", note: "Women's fastpitch; in-out sport (1996-2008, 2020, 2028)." },
    { name: "NCAA Women's College World Series", frequency: "annual", founded: 1969, region: "USA" },
    { name: "Japan Softball League", frequency: "annual", founded: 1968, region: "Japan" },
  ],
  countriesPlayed: ["US", "JP", "CN", "AU", "CA", "MX", "PR", "IT", "NL", "TW", "PH", "NZ", "VE"],
  famousAthletes: [
    "Cat Osterman",
    "Jennie Finch",
    "Lisa Fernandez",
    "Yukiko Ueno",
    "Monica Abbott",
    "Michele Smith",
    "Dorothy 'Dot' Richardson",
    "Natasha Watley",
  ],
  records: [
    { title: "Most consecutive Olympic gold medals (women)", holder: "USA", value: "3 (1996-2004)", year: 2004 },
    { title: "Fastest recorded fastpitch pitch", holder: "Monica Abbott", value: "77 mph (124 km/h)", year: 2016 },
    { title: "Most NCAA D-I softball titles", holder: "UCLA", value: "12", year: 2019 },
  ],

  variants: ["fastpitch", "slowpitch", "modified-pitch", "baseball5"],
  relatedSports: ["baseball", "kickball", "rounders", "baseball5"],
  parentSlug: "baseball",

  skills: [
    "underhand pitching mechanics",
    "quick reactions (small diamond)",
    "hand-eye coordination",
    "bunting and slap-hitting",
    "throwing accuracy",
    "situational base-running",
  ],
  strategies: [
    { title: "Slap hitting", body: "Left-handed hitters slap-hit while running toward first, using speed to beat throws." },
    { title: "Small ball", body: "Bunts and steals matter more than in baseball because of shorter basepaths." },
    { title: "Rise-ball / drop-ball", body: "Elite pitchers make the ball rise, drop, or curve within the strike zone." },
    { title: "Defensive shifts", body: "Reading batter tendencies to position infielders and outfielders." },
  ],

  terminology: [
    { term: "Fastpitch", meaning: "Discipline with fast underhand windmill pitching; the international / Olympic form." },
    { term: "Slowpitch", meaning: "Recreational discipline with mandatory pitch arc; common in adult leagues." },
    { term: "Rise ball", meaning: "Fastpitch pitch that appears to rise as it approaches the plate — a top pitch." },
    { term: "Slap hit", meaning: "A left-handed swing while running toward first base to leg out infield hits." },
    { term: "Drop ball", meaning: "Fastpitch pitch that dives sharply just before the plate." },
    { term: "Change-up", meaning: "Slower pitch thrown with the same motion as a fastball to disrupt timing." },
    { term: "Sacrifice bunt", meaning: "Bunt intended to advance a runner at the cost of an out." },
    { term: "Tie-breaker rule", meaning: "Extra-inning rule placing the previous inning's last-out batter on 2B to speed the game." },
    { term: "Circle rule", meaning: "Fastpitch rule requiring runners to commit or return once the pitcher holds the ball in the circle." },
    { term: "Mercy rule", meaning: "Games are called early when one team leads by a large margin after a set number of innings." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Underhand throwing", body: "Practise a smooth arm circle at the hip and release near the front foot.", anchor: "basicRules" },
      { title: "The bat-strike zone", body: "Softball zone is armpit to knee — similar to baseball.", anchor: "scoring" },
      { title: "Base-running rules", body: "No leading off in fastpitch; wait for the release.", anchor: "advancedRules" },
      { title: "Catch and throw drills", body: "The larger ball changes hand positioning — practise with a size-appropriate glove." },
    ] },
    { level: "intermediate", steps: [
      { title: "Windmill mechanics", body: "Full arm-circle motion; explosive hip drive off the back foot." },
      { title: "Slap-hitting basics", body: "Cross-over step at contact; run-through the box toward first base." },
      { title: "Bunt defence", body: "Third baseman and pitcher chargeing on any bunt attempt." },
      { title: "Situational hitting", body: "Move the runner, sacrifice, hit-and-run tactics." },
    ] },
    { level: "advanced", steps: [
      { title: "Pitch arsenal", body: "Add rise ball, drop, curve, screw and change-up to compete at elite level." },
      { title: "Reading the catcher", body: "Understand pitch calls and set-up sequences." },
      { title: "Analytics & scouting", body: "Spray charts, count tendencies, umpire-zone maps at the pro level." },
    ] },
  ],
  faq: [
    { question: "Is softball the same as baseball?", answer: "No — softball uses a larger ball, underhand pitching, a smaller field, 7 innings, and slightly different rules (no leadoffs in fastpitch, mercy rule, tie-breaker)." },
    { question: "Why is the ball called 'soft'?", answer: "Original 1887 balls were soft (a boxing glove tied with rope). Modern balls are firm — the name stuck from tradition." },
    { question: "What is the difference between fastpitch and slowpitch?", answer: "Fastpitch has fast, flat pitches; slowpitch requires a legal arc, with 10 players per side and typically no bunts or stealing." },
    { question: "Do men play international softball?", answer: "Yes — men's fastpitch has its own WBSC World Cup, but the Olympic version has been women-only since 1996." },
    { question: "Is softball at the Olympics?", answer: "Women's fastpitch was an Olympic sport 1996-2008, returned for Tokyo 2020, and is back for Los Angeles 2028." },
  ],

  wikipediaTitle: "Softball",
  sources: [
    { label: "Wikipedia — Softball", url: "https://en.wikipedia.org/wiki/Softball", publisher: "Wikipedia" },
    { label: "WBSC Softball Rulebook", url: "https://www.wbsc.org/en/softball/rules", publisher: "World Baseball Softball Confederation" },
    { label: "USA Softball", url: "https://www.teamusa.org/usa-softball", publisher: "USA Softball" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

import type { Sport } from "@/lib/types";

export const americanFootball: Sport = {
  id: "american-football",
  slug: "american-football",
  name: "American Football",
  officialName: "Football (American gridiron football)",
  aliases: ["Gridiron", "NFL football", "Tackle football"],
  shortDescription:
    "11-a-side gridiron sport where the offence advances an oval ball toward the opponent's end zone through carries and passes to score touchdowns and field goals.",
  longDescription:
    "American football is a team sport played on a 120-yard rectangular gridiron between two 11-player squads. The offence uses a series of plays — called by a coach or the quarterback — to advance an oval, pointed ball toward the opponent's end zone. A team must gain 10 yards within four attempts (downs) to keep possession; failure surrenders the ball. Touchdowns are worth 6 points, field goals 3, and safeties 2. The modern code descends from rugby football, formalised at Ivy League colleges in the 1870s-80s under Walter Camp, who introduced the line of scrimmage, downs, and the snap. It is the most-watched sport in the United States, with the annual Super Bowl consistently ranking among the world's most-viewed single sporting events.",

  category: "ball-sports",
  subCategory: "gridiron football",
  sportType: "team",
  indoorOutdoor: "both",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "United States (Ivy League colleges)",
  estimatedOrigin: "1869 (first intercollegiate game); modern rules formalised 1876-1906",

  players: { perTeam: 11, min: 11, max: 11, substitutes: 42, note: "Unlimited substitutions between plays; NFL rosters carry 53 players." },
  field: {
    surfaceName: "gridiron",
    dimensions: "120 yards long × 53⅓ yards wide (109.7 × 48.8 m); 100-yard field of play plus two 10-yard end zones. Yard lines marked every 5 yards.",
    description: "Rectangular grass or artificial-turf field with hash marks every yard, goal posts (18.5 ft wide, 10 ft crossbar) centred at the back of each end zone.",
  },
  equipment: [
    { name: "Football (prolate spheroid)", description: "Leather ball, ~11 in long, weight ~14-15 oz, 21-inch long circumference." },
    { name: "Helmet with face mask", description: "Hard shell with padded interior and metal cage; mandatory at all levels." },
    { name: "Shoulder pads", description: "Foam-and-plastic pads over the shoulders and chest." },
    { name: "Mouthguard", description: "Required by rule in most leagues." },
    { name: "Cleats", description: "Studded footwear for grip on grass or turf." },
    { name: "Hip / thigh / knee pads", description: "Padding worn inside the uniform pants." },
  ],
  duration: {
    approximateMinutes: 200,
    structure: "Four 15-minute quarters (12 min in high school) with a 12-15 min halftime; game clock stops on incomplete passes, out-of-bounds, and timeouts.",
    note: "NFL games average ~3 hr 12 min real time; sudden-death overtime up to 10 min in regular season, unlimited in playoffs.",
  },
  objective: "Advance the ball into the opponent's end zone to score touchdowns (6 pts) or kick field goals (3 pts); outscore the opponent within regulation and any overtime.",
  matchStructure:
    "Play begins with a kickoff. The receiving team's offence gets 4 downs to advance the ball 10 yards; success resets the down count. If the offence stalls it usually punts on 4th down. Scoring plays are followed by an extra-point attempt (kick for 1, or two-point conversion from the 2-yard line for 2) and a kickoff. Teams alternate possession until the clock runs out; the higher score wins.",

  basicRules: [
    { title: "Line of scrimmage", body: "Each play starts with the ball on an imaginary yard line; offence lines up on their side, defence on theirs — no one may cross before the snap." },
    { title: "Downs system", body: "The offence has 4 attempts (downs) to gain 10 yards. Gaining 10 yards resets to '1st and 10'; failing to advance turns the ball over at that spot." },
    { title: "The snap", body: "Center snaps the ball backward through the legs to the quarterback (or holder/punter) to begin the play." },
    { title: "Passes", body: "Only one forward pass per play, thrown from behind the line of scrimmage; unlimited backward or lateral passes." },
    { title: "Tackling", body: "A ball carrier is down when any part of their body other than hands or feet touches the ground while in the defender's grasp." },
    { title: "Fumbles and interceptions", body: "A dropped ball not in the passer's hand is a live fumble; either team can recover. A caught defensive pass is an interception — possession changes immediately." },
    { title: "First down markers", body: "Chain crews measure the 10 yards; the ball must reach or cross the line-to-gain before 4th down ends." },
  ],
  advancedRules: [
    { title: "Pass interference", body: "Illegal contact with an eligible receiver that prevents a catch; automatic first down and spot foul (NFL) or 15-yard penalty (college)." },
    { title: "Roughing the passer", body: "Late or dangerous hits on the quarterback after release; automatic 15-yard penalty and first down." },
    { title: "Ineligible receiver downfield", body: "Only certain positions may catch a forward pass; linemen more than 1 yard beyond the line before the throw draws a penalty." },
    { title: "Two-minute warning", body: "Automatic timeout at 2:00 remaining in each half in the NFL." },
    { title: "Replay review", body: "Coaches may challenge questionable rulings; scoring plays and turnovers are automatically reviewed." },
  ],
  scoring: {
    summary: "Touchdown 6, extra-point kick 1, two-point conversion 2, field goal 3, safety 2.",
    breakdown: [
      { action: "Touchdown", points: "6", note: "Ball breaks the plane of the goal line in possession." },
      { action: "Extra-point kick", points: "1", note: "From the 15-yard line (NFL)." },
      { action: "Two-point conversion", points: "2", note: "Run or pass from the 2-yard line (NFL)." },
      { action: "Field goal", points: "3", note: "Kick through the uprights on any down." },
      { action: "Safety", points: "2", note: "Ball carrier tackled in own end zone." },
    ],
    winCondition: "Team with the higher score at end of regulation wins; if tied, one 10-minute overtime period (regular season) or sudden-death continuation (playoffs) decides the game.",
  },
  penalties: [
    { title: "5-yard fouls", body: "False start, offside, encroachment, delay of game, illegal motion." },
    { title: "10-yard fouls", body: "Holding, illegal use of hands, illegal block in the back." },
    { title: "15-yard fouls", body: "Personal foul, unnecessary roughness, roughing the passer/kicker, targeting, unsportsmanlike conduct." },
    { title: "Loss of down", body: "Some fouls (intentional grounding) cost the down as well as yardage." },
  ],

  positions: [
    { name: "Quarterback (QB)", role: "Calls plays, takes snaps, throws passes and hands off.", count: 1 },
    { name: "Running back (RB/HB/FB)", role: "Runs with the ball, catches short passes, blocks.", count: 1 },
    { name: "Wide receiver (WR)", role: "Runs pass routes to catch throws from the QB.", count: 2 },
    { name: "Tight end (TE)", role: "Hybrid receiver / lineman.", count: 1 },
    { name: "Offensive line", role: "Center, guards, tackles — protect the QB and open running lanes.", count: 5 },
    { name: "Defensive line", role: "Rush the QB and stop runs; tackles and ends.", count: 4 },
    { name: "Linebackers (LB)", role: "Second-level defenders — tackle runners, cover receivers, blitz.", count: 3 },
    { name: "Cornerbacks (CB)", role: "Cover wide receivers on pass plays.", count: 2 },
    { name: "Safeties (S)", role: "Deep defenders — last line of defence against long passes and runs.", count: 2 },
    { name: "Kicker / Punter / Long snapper", role: "Special-teams specialists for field goals, punts and snaps.", count: 3 },
  ],
  officiating: {
    officials: ["Referee (crew chief)", "Umpire", "Head linesman / Down judge", "Line judge", "Field judge", "Side judge", "Back judge (7-official crew in NFL)"],
    summary: "The referee has final authority and announces penalties. Each official watches a specific area; flags are thrown for infractions and the referee assesses the yardage penalty.",
  },

  governingBodies: [
    { name: "National Football League", acronym: "NFL", founded: 1920, headquarters: "New York City, USA", website: "https://www.nfl.com" },
    { name: "NCAA Football", founded: 1906, headquarters: "Indianapolis, USA", website: "https://www.ncaa.com/sports/football" },
    { name: "International Federation of American Football", acronym: "IFAF", founded: 1998, headquarters: "New Braunfels, USA", website: "https://ifaf.org" },
    { name: "Canadian Football League", acronym: "CFL", founded: 1958, headquarters: "Toronto, Canada", website: "https://www.cfl.ca" },
  ],
  majorCompetitions: [
    { name: "Super Bowl", frequency: "annual", founded: 1967, region: "USA", note: "NFL championship game; among the most-watched TV broadcasts worldwide." },
    { name: "College Football Playoff", frequency: "annual", founded: 2014, region: "USA (NCAA FBS)" },
    { name: "IFAF World Championship", frequency: "quadrennial", founded: 1999, region: "worldwide" },
    { name: "Grey Cup", frequency: "annual", founded: 1909, region: "Canada (CFL)" },
  ],
  countriesPlayed: ["US", "CA", "MX", "JP", "DE", "GB", "AU", "BR", "AT", "FR", "IT"],
  famousAthletes: [
    "Tom Brady",
    "Jerry Rice",
    "Jim Brown",
    "Peyton Manning",
    "Joe Montana",
    "Lawrence Taylor",
    "Walter Payton",
    "Reggie White",
    "Barry Sanders",
    "Patrick Mahomes",
    "Aaron Donald",
  ],
  records: [
    { title: "Most career passing yards (NFL)", holder: "Tom Brady", value: "89,214", year: 2022 },
    { title: "Most rushing yards in a season (NFL)", holder: "Eric Dickerson", value: "2,105", year: 1984 },
    { title: "Most Super Bowl wins (player)", holder: "Tom Brady", value: "7", year: 2021 },
    { title: "Longest field goal (NFL)", holder: "Justin Tucker", value: "66 yards", year: 2021 },
  ],

  variants: ["arena-football", "flag-football", "touch-football", "canadian-football", "australian-rules-football"],
  relatedSports: ["rugby-union", "rugby-league", "canadian-football", "flag-football"],

  skills: [
    "throwing accuracy",
    "hand-eye coordination",
    "speed and agility",
    "strength and power",
    "route running",
    "tackling technique",
    "pattern recognition",
    "playbook memorisation",
  ],
  strategies: [
    { title: "West Coast offence", body: "Short, precise passes to stretch defences horizontally; developed by Bill Walsh with the 49ers." },
    { title: "Air Coyote / Air Raid", body: "Spread formations with vertical passing concepts; associated with Hal Mumme and Mike Leach." },
    { title: "Cover 2 defence", body: "Two deep safeties split the deep field between them; corners jam the receivers underneath." },
    { title: "Blitz packages", body: "Sending linebackers or defensive backs to rush the QB, sacrificing coverage for pressure." },
  ],

  terminology: [
    { term: "Snap", meaning: "The center's exchange of the ball to the quarterback (or holder) that starts every play." },
    { term: "Down", meaning: "One offensive play; the offence has 4 downs to gain 10 yards." },
    { term: "First down", meaning: "A fresh set of 4 downs, awarded when the offence advances 10 yards or via penalty." },
    { term: "Turnover", meaning: "Change of possession via fumble, interception, or failed 4th-down conversion." },
    { term: "Sack", meaning: "Tackling the quarterback behind the line of scrimmage before he releases the ball." },
    { term: "Blitz", meaning: "Sending extra defenders to rush the passer." },
    { term: "Pocket", meaning: "The protected area behind the offensive line where the quarterback throws from." },
    { term: "Play action", meaning: "Fake handoff intended to freeze linebackers so receivers can get open." },
    { term: "Red zone", meaning: "The area between the 20-yard line and goal line — where scoring becomes likely." },
    { term: "Two-minute drill", meaning: "Hurry-up offence designed to move the ball quickly before halftime or the end of the game." },
    { term: "Special teams", meaning: "Units on the field for kicks, punts and returns." },
    { term: "Hail Mary", meaning: "Desperation long pass thrown toward the end zone at the end of a half." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "The field and scoring", body: "Learn the 100-yard field, end zones, goalposts, and how touchdowns, field goals, safeties and extra points work.", anchor: "scoring" },
      { title: "The four downs", body: "Understand why the offence has four attempts to gain 10 yards.", anchor: "rules" },
      { title: "Offence vs defence", body: "Identify the QB, ball carrier, and blockers; and the defenders trying to stop them.", anchor: "positions" },
      { title: "Watch a game with a friend", body: "Have someone explain the down-and-distance and penalties as they happen." },
    ] },
    { level: "intermediate", steps: [
      { title: "Formations", body: "Learn shotgun, pistol, I-formation, spread, and how each affects run/pass balance." },
      { title: "Reading the defence", body: "Recognise Cover 2, Cover 3, Man vs Zone, and blitzes pre-snap." },
      { title: "Clock management", body: "How teams use timeouts, spikes, and the 2-minute warning to control possession." },
      { title: "Special-teams strategy", body: "Onside kicks, fake punts, coffin-corner kicks — the third phase of the game." },
    ] },
    { level: "advanced", steps: [
      { title: "Route trees", body: "Slants, posts, corners, comebacks — how receivers combine routes to attack coverages." },
      { title: "Protection schemes", body: "Zone vs man blocking, sliding protections, hot reads for blitz answers." },
      { title: "Analytics", body: "Expected points, win probability, 4th-down decision models used by modern coaches." },
    ] },
  ],
  faq: [
    { question: "How is American football different from rugby?", answer: "Football uses forward passes, downs, unlimited substitutions and heavy protective equipment, while rugby has continuous play, lateral-only passes, no huddles and minimal padding." },
    { question: "How many players are on the field per team?", answer: "11 per team on the field at once. Rosters are much larger (53 in the NFL) with unlimited substitution between plays." },
    { question: "What is 'targeting' in college football?", answer: "A dangerous hit above the shoulders on a defenceless player; results in a 15-yard penalty and automatic ejection." },
    { question: "How long is an NFL season?", answer: "18 weeks of a 17-game regular season, followed by 3 rounds of playoffs, conference championships, and the Super Bowl." },
    { question: "What is the salary cap?", answer: "An annual limit on total player salaries per team designed to keep competitive balance; ~$255M per NFL team in 2024." },
  ],

  wikipediaTitle: "American football",
  sources: [
    { label: "Wikipedia — American football", url: "https://en.wikipedia.org/wiki/American_football", publisher: "Wikipedia" },
    { label: "NFL Rulebook", url: "https://operations.nfl.com/the-rules/", publisher: "National Football League" },
    { label: "NCAA Football Playing Rules", url: "https://www.ncaapublications.com", publisher: "NCAA" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

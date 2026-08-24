import type { Sport } from "@/lib/types";

export const cricket: Sport = {
  id: "cricket",
  slug: "cricket",
  name: "Cricket",
  officialName: "Cricket",
  aliases: ["The gentleman's game"],
  shortDescription:
    "A bat-and-ball team sport where two teams take turns batting and fielding, scoring runs by running between wickets or hitting boundaries.",
  longDescription:
    "Cricket is played between two teams of eleven on a large oval field with a rectangular 22-yard pitch at its centre. One team bats — trying to score runs — while the other bowls and fields, trying to dismiss the batters. Innings can last from a few overs (a limited-overs match) to five days (Test cricket). Its blend of individual skill, team tactics and long strategic arcs has made it the second-most-followed sport in the world after football, and the flagship sport of the Indian subcontinent, the UK, Australia, South Africa, the West Indies and New Zealand.",

  category: "ball-sports",
  subCategory: "bat-and-ball",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: true, // reintroduced for LA 2028 (T20 format)
  isProfessional: true,
  season: "summer",
  era: "medieval",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "South-east England",
  estimatedOrigin: "c. 16th century",

  players: { perTeam: 11, min: 11, max: 11, substitutes: 1, note: "12th player fields only; cannot bat or bowl." },
  field: {
    surfaceName: "cricket ground",
    dimensions: "Oval field, roughly 137–150 m across; 22-yard (20.12 m) pitch at the centre.",
    description:
      "A large grassy oval with a hard rectangular pitch in the middle. Boundaries are marked by a rope; fielding positions are arranged in an arc around the batter.",
  },
  equipment: [
    { name: "Cricket ball", description: "Hard leather ball weighing 155.9–163 g." },
    { name: "Cricket bat", description: "Flat willow blade with a cane handle; max 96.5 cm long, 10.8 cm wide." },
    { name: "Wickets", description: "Three wooden stumps with two bails on top, one set at each end of the pitch." },
    { name: "Pads, gloves, helmet", description: "Batters and wicket-keeper wear protective gear." },
  ],
  duration: {
    approximateMinutes: 200,
    structure: "One or two innings per side; format determines length.",
    note: "T20 ≈ 3 h · ODI ≈ 8 h · Test ≈ 5 days (max 90 overs/day).",
  },
  objective:
    "Score more runs than the opposition before losing your wickets — or by bowling them out for fewer runs in the overs available.",
  matchStructure:
    "The team winning the toss chooses to bat or bowl. Batters bat in pairs; the bowler delivers 6 legal balls to form an over, then a new bowler bowls from the other end. When ten wickets fall, the innings ends. In limited-overs formats an over limit ends the innings sooner.",

  basicRules: [
    { title: "The over", body: "A bowler delivers six legal balls from one end. Another bowler then bowls from the opposite end. Bowlers cannot bowl two overs in a row." },
    { title: "Scoring runs", body: "Batters can score by running between the wickets after hitting the ball, or by hitting boundaries — four runs along the ground, six over the rope on the full." },
    { title: "Dismissals", body: "The 10 most common ways to be out are: bowled, caught, LBW, run out, stumped, hit wicket, obstructing the field, handled the ball, timed out and hit the ball twice." },
    { title: "Innings end", body: "An innings ends when 10 batters are out, the over limit is reached, the batting side declares (Tests only), or a target is chased down." },
  ],
  advancedRules: [
    { title: "LBW (Leg Before Wicket)", body: "If the ball would have hit the stumps but was intercepted by the batter's pad (not the bat), the batter is out — subject to conditions on where the ball pitched and made contact." },
    { title: "No-ball & free hit", body: "A no-ball (over-stepping, height, throwing) awards one run and — in limited-overs cricket — the next delivery is a free hit on which the batter can only be run-out." },
    { title: "Powerplay", body: "In ODIs the first 10 overs restrict fielders outside the 30-yard circle; T20 uses a 6-over powerplay. This encourages aggressive early scoring." },
    { title: "DRS", body: "The Decision Review System lets each side challenge a limited number of on-field decisions using ball-tracking (Hawk-Eye), UltraEdge and Snickometer." },
  ],
  scoring: {
    summary:
      "Runs are scored by running between the wickets or by boundaries. Wickets fall when a batter is dismissed. The team with more runs at the end wins.",
    breakdown: [
      { action: "Running between wickets", points: "1 run per completed run" },
      { action: "Boundary (ground)", points: "4 runs" },
      { action: "Boundary (over the rope)", points: "6 runs" },
      { action: "Wide / no-ball", points: "1 run + delivery re-bowled" },
      { action: "Bye / leg-bye", points: "Runs completed while the ball passes the batter without being hit" },
    ],
    winCondition:
      "In limited-overs cricket, the side chasing wins the moment they exceed the target; the side defending wins if the target is not reached in the overs available. Tests can be drawn if neither side takes 20 wickets in time.",
  },
  penalties: [
    { title: "Wide ball", body: "A delivery outside the batter's reach — 1 penalty run to the batting side and the ball is re-bowled." },
    { title: "No-ball", body: "Illegal delivery (front-foot over the line, over-height, throwing) — 1 penalty run, next ball is a free hit in white-ball cricket." },
    { title: "Slow over rate", body: "Fielding side is penalised runs and fined; captain may be suspended for repeat offences." },
  ],
  fouls: [
    { title: "Obstructing the field", body: "A batter is out if they wilfully obstruct or distract the fielding side." },
    { title: "Ball tampering", body: "Altering the condition of the ball unfairly is a Level 3 offence — five penalty runs, ball changed, sanction against the player." },
  ],
  winningConditions: [
    "Score more runs than the opposition in the allotted overs.",
    "Bowl the opposition out for fewer runs than you have already scored.",
    "In a Test: force a result within five days — otherwise the match is drawn.",
  ],

  positions: [
    { name: "Batter", role: "Scores runs by hitting the ball delivered by the bowler.", count: 2 },
    { name: "Bowler", role: "Delivers the ball to try to take wickets and restrict runs.", count: 1 },
    { name: "Wicket-keeper", role: "Fielder behind the stumps; catches, stumps and takes byes.", count: 1 },
    { name: "Slip cordon", role: "Fielders next to the keeper, positioned for edges.", count: 2 },
    { name: "Fielders (various)", role: "Positioned around the field to save runs and take catches.", count: 9 },
  ],
  officiating: {
    officials: ["Two on-field umpires", "Third umpire (video review)", "Match referee", "TV / broadcast umpire"],
    summary:
      "Two on-field umpires make live decisions; a third umpire reviews close calls via replay, ball-tracking and edge detection. The match referee oversees conduct and playing conditions.",
    signals: [
      { name: "Out", description: "Umpire raises the index finger above the head." },
      { name: "Four", description: "Umpire waves the arm across the body." },
      { name: "Six", description: "Both arms raised straight up." },
      { name: "No-ball", description: "One arm extended horizontally to the side." },
      { name: "Wide", description: "Both arms extended horizontally." },
    ],
  },

  governingBodies: [
    { name: "International Cricket Council", acronym: "ICC", founded: 1909, headquarters: "Dubai, UAE", website: "https://www.icc-cricket.com" },
    { name: "Board of Control for Cricket in India", acronym: "BCCI", founded: 1928, headquarters: "Mumbai, India" },
    { name: "England and Wales Cricket Board", acronym: "ECB", founded: 1997, headquarters: "London, UK" },
    { name: "Cricket Australia", acronym: "CA", founded: 1905, headquarters: "Melbourne, Australia" },
  ],
  majorCompetitions: [
    { name: "ICC Cricket World Cup", frequency: "quadrennial", founded: 1975, region: "worldwide" },
    { name: "ICC T20 World Cup", frequency: "biennial", founded: 2007, region: "worldwide" },
    { name: "ICC World Test Championship", frequency: "biennial", founded: 2019, region: "worldwide" },
    { name: "Indian Premier League (IPL)", frequency: "annual", founded: 2008, region: "India" },
    { name: "The Ashes", frequency: "biennial", founded: 1882, region: "England vs Australia" },
  ],
  countriesPlayed: ["IN", "PK", "BD", "LK", "AF", "GB", "AU", "NZ", "ZA", "US"],
  famousAthletes: ["Sachin Tendulkar", "Sir Don Bradman", "Sir Vivian Richards", "Virat Kohli", "Shane Warne", "Sir Garfield Sobers", "Wasim Akram"],
  records: [
    { title: "Most international runs", holder: "Sachin Tendulkar", value: "34,357 runs", year: 2013 },
    { title: "Highest Test score by a batter", holder: "Brian Lara", value: "400*", year: 2004 },
    { title: "Highest ODI innings", holder: "Rohit Sharma", value: "264 runs", year: 2014 },
  ],

  variants: ["test-cricket", "one-day-international", "twenty20-cricket"],
  relatedSports: ["baseball", "hurling"],

  skills: ["hand-eye coordination", "hand technique", "strategic thinking", "endurance", "reflexes"],

  terminology: [
    { term: "Over", meaning: "Six legal balls bowled from one end." },
    { term: "Wicket", meaning: "The three-stump target — also the dismissal of a batter." },
    { term: "Maiden over", meaning: "An over in which no runs are scored off the bat." },
    { term: "Duck", meaning: "A batter being dismissed for zero." },
    { term: "Century", meaning: "An individual score of 100 runs." },
    { term: "Yorker", meaning: "A ball pitched right at the batter's toes." },
    { term: "Bouncer", meaning: "A short-pitched ball that rises to the batter's shoulders or above." },
    { term: "Googly", meaning: "A wrist-spinner's disguised delivery that turns the opposite way to a leg-break." },
    { term: "Silly point", meaning: "A close-in fielding position on the off side just in front of the batter." },
    { term: "Powerplay", meaning: "Overs during which fielding restrictions apply." },
  ],
  strategies: [
    { title: "Field settings", body: "Captains set attacking (close catchers) or defensive (deep boundary riders) fields depending on match situation." },
    { title: "Bowling changes", body: "Rotating pace and spin bowlers to keep batters guessing and to attack specific weaknesses." },
    { title: "Pace of the innings", body: "In limited-overs cricket, batters build a base then accelerate; setting a par score often outweighs individual milestones." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "What is cricket?", body: "A two-team bat-and-ball sport played on a large oval. One team bats, the other bowls; roles swap after an innings.", anchor: "hero" },
        { title: "The pitch and the field", body: "A 22-yard hard strip in the centre of a grass oval — bowler at one end, batter at the other.", anchor: "playing-area" },
        { title: "How runs are scored", body: "Batters run between the wickets after hitting the ball; boundaries score 4 or 6 without needing to run.", anchor: "scoring" },
        { title: "How you get out", body: "Bowled, caught, LBW, run out, stumped are the five most common dismissals.", anchor: "rules" },
        { title: "Match formats", body: "T20 (3 hours), ODI (a full day), Test (up to 5 days). Rules are the same; the length differs.", anchor: "match-structure" },
        { title: "See the pitch & fielding map", body: "The 22-yard strip and every fielding position, drawn to scale.", anchor: "diagrams" },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "The LBW law", body: "Complex intersection of where the ball pitched, where it hit the batter, and whether it would have hit the stumps.", anchor: "rules" },
        { title: "Powerplays and fielding restrictions", body: "How captains attack or defend in specific overs of a limited-overs innings.", anchor: "rules" },
        { title: "Spin vs pace", body: "Different tactical roles — spinners strangle, pacers strike.", anchor: "strategies" },
      ],
    },
  ],
  faq: [
    { question: "How long does a cricket match last?", answer: "T20 matches finish in about 3 hours, ODIs take a full day, and Test matches can go on for up to 5 days." },
    { question: "What is LBW?", answer: "Leg Before Wicket — the batter is out if the ball would have hit the stumps but was stopped by their pad (subject to strict interception rules)." },
    { question: "Is cricket in the Olympics?", answer: "Yes, cricket returns to the Olympics at LA 2028 in the T20 format after a 128-year absence." },
    { question: "How is cricket different from baseball?", answer: "Cricket is played on a round field, uses a flat bat, has two batters simultaneously and can last five days; baseball uses a diamond field, a round bat and finishes in 3–4 hours." },
  ],

  animations: [
    { id: "lbw", title: "How LBW works", component: "CricketLBW", description: "See how the ball's pitch, impact and projected path decide an LBW appeal." },
  ],

  diagrams: [
    {
      id: "cricket-pitch",
      title: "The pitch",
      component: "cricket-pitch",
      slot: "playing-area",
    },
    {
      id: "cricket-fielding-positions",
      title: "Fielding positions",
      component: "cricket-fielding-positions",
      slot: "positions",
    },
  ],

  sources: [
    { label: "Laws of Cricket (MCC, 2017 Code, 3rd Edition 2022)", publisher: "Marylebone Cricket Club", url: "https://www.lords.org/mcc/the-laws-of-cricket" },
    { label: "ICC Playing Conditions", publisher: "International Cricket Council", url: "https://www.icc-cricket.com/about/cricket/rules-and-regulations" },
    { label: "Britannica — Cricket", publisher: "Encyclopaedia Britannica", url: "https://www.britannica.com/sports/cricket-sport" },
  ],
  lastVerified: "2026-08-20",
  confidence: "verified",
};

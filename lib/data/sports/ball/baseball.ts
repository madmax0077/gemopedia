import type { Sport } from "@/lib/types";

export const baseball: Sport = {
  id: "baseball",
  slug: "baseball",
  name: "Baseball",
  officialName: "Baseball",
  aliases: ["Hardball", "The National Pastime (US)", "Yakyū (Japan)"],
  shortDescription:
    "9-a-side bat-and-ball sport played on a diamond — the batter tries to hit a pitched ball into fair territory and circle the bases; the team with the most runs after 9 innings wins.",
  longDescription:
    "Baseball is a bat-and-ball team sport played on a fan-shaped field between two nine-player squads that alternate offence (batting) and defence (fielding). Each half-inning ends when the fielding side records three outs; a full inning is one half from each team and a regulation game is nine innings, extra innings played if tied. The batter tries to hit a pitched ball into fair territory and complete a circuit of four bases (first, second, third, home) to score a run. The modern game codified rules first published in 1845 in New York by Alexander Cartwright and grew from earlier bat-and-ball games such as rounders. It is the most popular team sport in the United States (Major League Baseball), Japan (Nippon Professional Baseball), South Korea (KBO), and much of Latin America (Cuba, Dominican Republic, Venezuela).",

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
  regionOfOrigin: "United States (New York)",
  estimatedOrigin: "Modern rules 1845 (Knickerbocker Rules); earlier roots in rounders and cricket",

  players: { perTeam: 9, min: 9, max: 9, substitutes: 17, note: "MLB rosters carry 26 active players; once a player is substituted, they cannot re-enter." },
  field: {
    surfaceName: "diamond",
    dimensions: "90-ft (27.4 m) baseline square; pitching rubber 60 ft 6 in (18.44 m) from home plate; outfield fence 300-410 ft (91-125 m) from home plate depending on ballpark.",
    description: "A fan-shaped field with a 90-ft square infield (the 'diamond'), a pitcher's mound in the middle, and an outfield beyond. Foul lines from home plate through first and third bases define fair territory.",
  },
  equipment: [
    { name: "Baseball", description: "Cork-and-rubber core wound with yarn and covered in cowhide leather; 5-5¼ oz (142-149 g), circumference 9-9¼ in." },
    { name: "Wooden bat", description: "Solid wood (ash, maple, birch) — MLB requires wood; college and amateur allow metal alloys." },
    { name: "Fielding glove", description: "Leather glove worn on the non-throwing hand; position-specific designs (catcher's mitt, first baseman's mitt, infielder's, outfielder's)." },
    { name: "Batting helmet", description: "Mandatory for batters and base runners." },
    { name: "Catcher's gear", description: "Mask, chest protector, shin guards — required for the catcher." },
    { name: "Cleats", description: "Metal or moulded studs for grip on grass and dirt." },
  ],
  duration: {
    approximateMinutes: 180,
    structure: "Nine innings (top and bottom); no game clock. Extra innings played if tied — in MLB regular-season games since 2020, each extra inning starts with a runner on second.",
    note: "MLB games average ~2 hr 40 min after the 2023 pitch clock; historical average was over 3 hours.",
  },
  objective: "Score more runs than the opposing team over nine innings by hitting the ball into fair territory and rounding the four bases without being put out.",
  matchStructure:
    "Home team plays defence (fielding) in the top of each inning, offence (batting) in the bottom. The pitcher throws to the batter until the batter (a) hits the ball in play, (b) strikes out on three strikes, or (c) walks on four balls. Base runners try to advance from base to base as their teammates hit; a completed circuit is a run. The half-inning ends after three outs, and teams switch roles.",

  basicRules: [
    { title: "Strike zone", body: "Rectangle above home plate from the batter's knees to the midpoint of shoulders and hips. Pitches inside are strikes if not swung at; outside are balls." },
    { title: "Three strikes, three outs", body: "A batter is out after three strikes (or a caught foul tip on strike three). The offence keeps batting until three outs are recorded, then teams swap." },
    { title: "Four balls, walk", body: "If the batter takes four pitches outside the strike zone without swinging, they walk (advance freely) to first base." },
    { title: "Hitting the ball", body: "A batted ball landing in fair territory is 'live' — fielders try to catch it in the air (an out) or throw it to a base before the runner arrives." },
    { title: "Base running", body: "Runners must touch each base in order; passing another runner or being tagged while off a base is out." },
    { title: "Home run", body: "A ball hit over the outfield fence in fair territory scores the batter and every runner on base." },
    { title: "Force out vs tag out", body: "Runners forced to advance (e.g., another runner behind them) are out if a fielder holds the ball on the base; otherwise, the runner must be tagged with the ball." },
  ],
  advancedRules: [
    { title: "Infield fly rule", body: "With fewer than 2 outs and runners on 1st and 2nd (or bases loaded), a fair fly ball that an infielder can catch with ordinary effort is automatically an out — prevents cheap double plays." },
    { title: "Balk", body: "A pitching motion started with runners on base that is deceptive or interrupted; all base runners advance one base." },
    { title: "Designated hitter (DH)", body: "A non-fielding batter who hits in place of the pitcher; used in all of MLB since 2022, and in most amateur and international play." },
    { title: "Pitch clock (MLB, 2023-)", body: "15 s between pitches with bases empty, 20 s with runners; batter must be in the box by 8 s; violations = ball or strike." },
    { title: "Ghost runner", body: "Starting in the 2020 MLB regular season, extra innings begin with a runner already on second base to speed up games." },
  ],
  scoring: {
    summary: "Runs are the only scoring unit — recorded each time a runner completes the circuit of bases legally.",
    breakdown: [
      { action: "Single", points: "batter to 1B", note: "Advances other runners." },
      { action: "Double", points: "batter to 2B" },
      { action: "Triple", points: "batter to 3B", note: "Rare — requires speed or a mishit." },
      { action: "Home run", points: "1 run per runner + batter", note: "Grand slam = home run with bases loaded (4 runs)." },
      { action: "Walk / HBP", points: "batter to 1B", note: "Free base; other runners advance only if forced." },
      { action: "Sacrifice fly", points: "runner scores from 3B", note: "Batter out but the run counts." },
    ],
    winCondition: "Team with more runs after 9 innings wins. If tied, extra innings are played until one team leads at the end of a complete inning.",
  },
  penalties: [
    { title: "Ejection", body: "Umpire may eject players or coaches for arguing balls-and-strikes, throwing at batters, or unsportsmanlike conduct." },
    { title: "Suspension", body: "MLB issues multi-game suspensions for intentional beanballs, PED violations, brawls." },
    { title: "Interference / obstruction", body: "Runner or fielder impeding the play; awards bases or calls outs at umpire's discretion." },
  ],

  positions: [
    { name: "Pitcher (P)", role: "Throws pitches to the batter from the mound.", count: 1 },
    { name: "Catcher (C)", role: "Squats behind home plate, receives pitches, calls the game.", count: 1 },
    { name: "First baseman (1B)", role: "Fields at first base; receives throws for putouts.", count: 1 },
    { name: "Second baseman (2B)", role: "Fields right of second base; turns double plays.", count: 1 },
    { name: "Third baseman (3B)", role: "Fields at third base; strong throwing arm.", count: 1 },
    { name: "Shortstop (SS)", role: "Fields between 2B and 3B; the athletic anchor of the infield.", count: 1 },
    { name: "Left / Center / Right fielder (LF/CF/RF)", role: "Outfielders — catch fly balls and back up throws.", count: 3 },
    { name: "Designated hitter (DH)", role: "Bats for the pitcher (or another position); does not field.", count: 1 },
  ],
  officiating: {
    officials: ["Home-plate umpire", "First-base umpire", "Second-base umpire", "Third-base umpire", "(Postseason: LF & RF line umpires)"],
    summary: "The home-plate umpire calls balls and strikes and rules on plays at home; base umpires call safe/out on force and tag plays. MLB uses instant replay review for most calls except balls and strikes.",
  },

  governingBodies: [
    { name: "Major League Baseball", acronym: "MLB", founded: 1903, headquarters: "New York City, USA", website: "https://www.mlb.com" },
    { name: "World Baseball Softball Confederation", acronym: "WBSC", founded: 2013, headquarters: "Lausanne, Switzerland", website: "https://www.wbsc.org" },
    { name: "Nippon Professional Baseball", acronym: "NPB", founded: 1936, headquarters: "Tokyo, Japan", website: "https://npb.jp" },
    { name: "Korean Baseball Organization", acronym: "KBO", founded: 1982, headquarters: "Seoul, South Korea" },
  ],
  majorCompetitions: [
    { name: "MLB World Series", frequency: "annual", founded: 1903, region: "USA/Canada" },
    { name: "World Baseball Classic", frequency: "quadrennial", founded: 2006, region: "worldwide" },
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 1992, region: "worldwide", note: "In-out sport; returned in Tokyo 2020, dropped for Paris 2024, back for LA 2028." },
    { name: "Nippon Series", frequency: "annual", founded: 1950, region: "Japan (NPB)" },
    { name: "Korean Series", frequency: "annual", founded: 1982, region: "South Korea (KBO)" },
    { name: "Caribbean Series", frequency: "annual", founded: 1949, region: "Caribbean" },
  ],
  countriesPlayed: ["US", "JP", "KR", "TW", "CU", "DO", "VE", "MX", "PR", "CA", "NL", "IT", "AU", "NI", "PA"],
  famousAthletes: [
    "Babe Ruth",
    "Willie Mays",
    "Hank Aaron",
    "Ted Williams",
    "Roberto Clemente",
    "Jackie Robinson",
    "Sadaharu Oh",
    "Ichiro Suzuki",
    "Barry Bonds",
    "Shohei Ohtani",
    "Mike Trout",
    "Derek Jeter",
  ],
  records: [
    { title: "Most career home runs (MLB)", holder: "Barry Bonds", value: "762", year: 2007 },
    { title: "Most career hits (MLB)", holder: "Pete Rose", value: "4,256", year: 1986 },
    { title: "Most career home runs (world professional)", holder: "Sadaharu Oh (NPB)", value: "868", year: 1980 },
    { title: "Highest career batting average (MLB, 3,000+ AB)", holder: "Ty Cobb", value: ".366", year: 1928 },
    { title: "Longest hitting streak (MLB)", holder: "Joe DiMaggio", value: "56 games", year: 1941 },
  ],

  variants: ["softball", "baseball5", "wiffle-ball", "kickball", "stickball", "rounders", "pesapallo"],
  relatedSports: ["softball", "cricket", "rounders", "kickball"],

  skills: [
    "hand-eye coordination",
    "pitching mechanics",
    "throwing accuracy",
    "hitting for average / power",
    "base-running speed",
    "situational awareness",
    "reading fly balls",
  ],
  strategies: [
    { title: "Small ball", body: "Bunts, hit-and-runs, sacrifice flies — manufacture one run at a time." },
    { title: "Launch angle / three true outcomes", body: "Modern MLB emphasis on home runs, walks and strikeouts driven by Statcast analytics." },
    { title: "Shifting", body: "Positioning fielders based on batter tendencies; MLB limited infield shifts in 2023 (2 infielders per side of 2B)." },
    { title: "Bullpen management", body: "Using relief pitchers matched to specific batter platoons; openers and 'follower' rotations." },
  ],

  terminology: [
    { term: "Strike", meaning: "A pitch in the strike zone not swung at, or any pitch swung at and missed or fouled (foul balls only strike 1 and 2)." },
    { term: "Ball", meaning: "A pitch outside the strike zone not swung at." },
    { term: "Walk (BB)", meaning: "Four balls — the batter takes first base free." },
    { term: "Strikeout (K)", meaning: "Three strikes recorded on the batter." },
    { term: "RBI", meaning: "Run batted in — credit given to the batter for a run scored on their at-bat." },
    { term: "ERA", meaning: "Earned run average — average earned runs a pitcher allows per 9 innings." },
    { term: "OPS", meaning: "On-base plus slugging — sum of a batter's on-base and slugging percentages." },
    { term: "Bullpen", meaning: "Area where relief pitchers warm up; also refers to the relievers themselves." },
    { term: "Double play", meaning: "One continuous play in which two runners are put out." },
    { term: "Grand slam", meaning: "A home run with all three bases occupied — scores 4 runs." },
    { term: "Perfect game", meaning: "A pitcher retires all 27 batters without any reaching base — extremely rare (24 in MLB history)." },
    { term: "Cycle", meaning: "A batter hitting a single, double, triple, and home run in the same game." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Field layout", body: "Learn the diamond, the four bases and foul lines.", anchor: "playing-area" },
      { title: "Innings and outs", body: "Understand three outs per half-inning and nine innings per game.", anchor: "matchStructure" },
      { title: "How runs score", body: "Follow a runner around the bases; understand hits, walks, and home runs.", anchor: "scoring" },
      { title: "Watch a game", body: "Follow the scoreboard's balls-strikes-outs and inning display." },
    ] },
    { level: "intermediate", steps: [
      { title: "Pitching arsenal", body: "Fastball, curveball, slider, change-up, cutter, sinker — recognise each and how they move." },
      { title: "Reading the count", body: "Understand how pitcher and batter approaches change at 0-2, 3-1, or 3-2 counts." },
      { title: "Advanced stats", body: "OPS, WAR, wRC+, FIP — modern player valuation beyond batting average." },
      { title: "Managing situations", body: "Sacrifice bunts, intentional walks, double switches, pinch hitters — when and why." },
    ] },
    { level: "advanced", steps: [
      { title: "Pitch sequencing", body: "How catchers set up hitters by mixing pitch types, locations and speeds across at-bats." },
      { title: "Defensive positioning", body: "Reading batter spray charts to position defenders (within the 2023 shift limits)." },
      { title: "Sabermetrics", body: "Baseball's data-driven revolution — Bill James, Moneyball, PECOTA, Statcast." },
    ] },
  ],
  faq: [
    { question: "Why nine innings?", answer: "The Knickerbocker Rules (1845) used a system where the first team to 21 runs won; nine innings was standardised in 1857 to fit a game into a reasonable time." },
    { question: "How is baseball scored on TV?", answer: "The scoreboard shows runs per inning, plus a linescore with total Runs, Hits and Errors for each team." },
    { question: "What is a 'shutout'?", answer: "A game in which one team is prevented from scoring any runs." },
    { question: "How many pitches can a starter throw?", answer: "No formal limit, but modern pitchers rarely exceed 100-110 pitches before being relieved to protect the arm." },
    { question: "Is baseball an Olympic sport?", answer: "Yes on-and-off — dropped after 2008, returned for Tokyo 2020, dropped for Paris 2024, and confirmed for Los Angeles 2028." },
  ],

  wikipediaTitle: "Baseball",
  sources: [
    { label: "Wikipedia — Baseball", url: "https://en.wikipedia.org/wiki/Baseball", publisher: "Wikipedia" },
    { label: "Official Baseball Rules (MLB)", url: "https://www.mlb.com/official-information/umpires/rules-interpretations", publisher: "Major League Baseball" },
    { label: "World Baseball Softball Confederation", url: "https://www.wbsc.org", publisher: "WBSC" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

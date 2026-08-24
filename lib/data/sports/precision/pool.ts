import type { Sport } from "@/lib/types";

export const pool: Sport = {
  id: "pool",
  slug: "pool",
  name: "Pool",
  officialName: "Pocket Billiards (Pool)",
  aliases: ["Pocket Billiards", "American Pool", "Eight-Ball", "Nine-Ball"],
  shortDescription:
    "Cue sport played on a 7-9 ft pocketed table with 15 numbered object balls and a white cue ball; primary variants are 8-Ball (stripes vs solids) and 9-Ball (lowest to highest).",
  longDescription:
    "Pool (pocket billiards) is a family of cue sports played on a rectangular table with six pockets — one at each corner and one in the middle of each long side. Players use a cue stick to strike a white cue ball, which then hits numbered object balls that must be pocketed according to the rules of the specific variant. The two most-played variants are 8-Ball (fifteen numbered balls: 1-7 solids, 8-ball black, 9-15 stripes — one player pockets solids, the other stripes, then the 8-ball wins) and 9-Ball (rack of 1-9; players must hit the lowest-numbered ball first; the 9-ball wins). Pool emerged from lawn billiards moved indoors in 15th-century Europe, and modernised in 19th-century America. Modern pool tables are 7 ft (bar/tavern), 8 ft (home), or 9 ft (professional).",

  category: "precision-sports",
  subCategory: "cue sport / pocket billiards",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "USA (adapted from British and French billiards)",
  estimatedOrigin: "15th-century lawn billiards moved indoors; American 'pocket billiards' codified late 1800s; 8-Ball c. 1900; 9-Ball c. 1920",

  players: { min: 2, max: 4, note: "Typically singles (1v1) or doubles (2v2)." },
  field: {
    surfaceName: "pool table",
    dimensions: "7 ft / 8 ft / 9 ft models (playing surface 3.5-4.5 m × 1.75-2.25 m); slate bed covered with felted cloth.",
    description: "Rectangular table with 6 pockets (4 corner, 2 middle side). Playing surface bounded by rubber cushions. Standard cloth is worsted wool (Simonis, Hainsworth).",
  },
  equipment: [
    { name: "Cue stick", description: "58-in wooden or graphite cue with leather tip; 18-21 oz." },
    { name: "Cue ball", description: "White ball, 2.25 in (57 mm) diameter, 6 oz (170 g)." },
    { name: "Object balls", description: "15 numbered balls: 1-7 solids (yellow, blue, red, purple, orange, green, maroon), 8 (black), 9-15 stripes." },
    { name: "Chalk", description: "Applied to cue tip to prevent miscues." },
    { name: "Rack (triangle)", description: "Used to rack 15 balls in a triangle for 8-Ball; diamond rack for 9-Ball." },
    { name: "Bridge / rest", description: "Support for the cue when the shot is out of hand-reach." },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "Individual match: 15-45 minutes; race-to-N format in tournaments (e.g., race to 7 = first to win 7 games).",
    note: "Professional 9-Ball matches: race to 10 or 11 across ~2 hours.",
  },
  objective: "Pocket the target balls according to the variant's rules (8-Ball: your group then 8-ball; 9-Ball: legally pocket the 9-ball).",
  matchStructure:
    "In 8-Ball: rack 15 balls; break; the first legally-pocketed ball determines your group (solids or stripes); pocket all your group before the 8-ball; call the pocket for the 8-ball. In 9-Ball: rack 1-9 in diamond with 1 at front and 9 in middle; always hit the lowest-numbered ball first; whoever legally pockets the 9-ball wins the rack. Race-to-N format: first player to win N racks wins the match.",

  basicRules: [
    { title: "The break", body: "The opening shot; cue ball hits the rack. In 9-Ball, 3+ balls must reach a cushion. In 8-Ball, 4+ balls must hit cushions unless a ball is pocketed." },
    { title: "Call your shot (8-Ball)", body: "APA and BCA rules require calling the ball and pocket for the 8-ball (most non-8 shots are not called)." },
    { title: "Legal hit", body: "Cue ball must first hit the lowest-numbered ball (9-Ball) or your own group (8-Ball); one of your balls must be pocketed or a ball must reach a cushion." },
    { title: "Scratch", body: "Cue ball is pocketed or jumps off the table — opponent gets ball in hand (place cue anywhere)." },
    { title: "Winning 8-Ball", body: "After pocketing all your group, call the pocket and legally pocket the 8-ball." },
    { title: "Losing 8-Ball instantly", body: "Pocketing the 8-ball before your group, scratching on the 8, or knocking 8-ball off the table = immediate loss." },
    { title: "Winning 9-Ball", body: "Legally pocket the 9-ball at any time — whether as the first target or via combo/carom shot." },
  ],
  advancedRules: [
    { title: "Push out (9-Ball)", body: "After the break, the shooter may push the cue ball to any position without hitting a ball. Opponent then chooses to shoot or pass." },
    { title: "Ball in hand", body: "After any foul, opponent places the cue ball anywhere on the table. Massive advantage — nearly always wins the rack for a pro." },
    { title: "Safety play", body: "Deliberately leaving the cue ball where opponent has no shot — key tactic at high level." },
    { title: "Jump shot", body: "Legal in most variants; use a shorter jump cue to leap over an obstructing ball. Requires downward angle." },
    { title: "Masse shot", body: "Extreme curve created by hitting down on the cue ball. Impressive but rarely optimal." },
    { title: "Combination and carom shots", body: "Advanced planning that pockets a ball using another ball or a cushion rebound." },
  ],
  scoring: {
    summary: "Games are 'races' — first to N racks wins the match. In-rack scoring is binary: win the rack or don't.",
    breakdown: [
      { action: "Legally pocketing 8-ball (8-Ball)", points: "Rack won" },
      { action: "Legally pocketing 9-ball (9-Ball)", points: "Rack won" },
      { action: "Scratch on 8-ball", points: "Rack lost" },
      { action: "Cue ball off table", points: "Opponent has ball in hand" },
      { action: "Failure to hit lowest ball (9-Ball)", points: "Foul, opponent has ball in hand" },
    ],
    winCondition: "First player to reach the agreed race-to-N total wins the match.",
  },

  officiating: {
    officials: ["Referee", "Chief Referee", "Statistician"],
    summary: "Professional matches (Mosconi Cup, World Championships) have a referee at each table to call fouls, place balls, and manage ball-in-hand.",
  },
  governingBodies: [
    { name: "World Pool-Billiard Association", acronym: "WPA", founded: 1987, headquarters: "Lausanne, Switzerland", website: "https://wpapool.com/" },
    { name: "Billiard Congress of America", acronym: "BCA", founded: 1948, headquarters: "Broomfield, USA", website: "https://home.bca-pool.com/" },
    { name: "Matchroom Multi Sport (pro tour)", founded: 1982, headquarters: "Brentwood, UK", website: "https://matchroom.com/" },
  ],
  majorCompetitions: [
    { name: "Mosconi Cup (USA vs Europe, 9-Ball)", frequency: "annual", founded: 1994, region: "USA / Europe alternating" },
    { name: "WPA World Nine-ball Championship", frequency: "annual", founded: 1990, region: "worldwide" },
    { name: "WPA World Ten-ball Championship", frequency: "annual", founded: 2008, region: "worldwide" },
    { name: "US Open Nine-ball Championship", frequency: "annual", founded: 1976, region: "USA" },
    { name: "World Cup of Pool (doubles)", frequency: "annual", founded: 2006, region: "worldwide" },
  ],
  countriesPlayed: ["US", "GB", "DE", "AT", "NL", "PH", "TW", "JP", "KR", "AU", "CN", "PL", "IT", "ES", "MX", "CA"],
  famousAthletes: [
    "Efren 'Bata' Reyes (Philippines) — 'The Magician'; multiple world champion, greatest all-round pool player",
    "Willie Mosconi (USA) — 15× BCA world champion (straight pool), 526-ball run record",
    "Ronnie O'Sullivan — technically snooker, but crosses over",
    "Earl Strickland (USA) — 3× World 9-Ball Champion",
    "Francisco 'Django' Sanchez Ruiz (Spain) — 2022 World 9-Ball Champion",
    "Shane Van Boening (USA) — 5× US Open 9-Ball Champion",
    "Kelly Fisher (UK) — women's world champion",
    "Alison Fisher (UK) — 11× WPBA World 9-Ball Championship winner",
  ],
  records: [
    { title: "Longest continuous straight-pool run", holder: "Willie Mosconi", value: "526 balls (14.1 continuous) — 1954, unmatched", year: 1954 },
    { title: "Most Mosconi Cup MVPs", holder: "Shane Van Boening", value: "3 (2016, 2019, 2022)", year: 2022 },
    { title: "Fastest 9-ball rack (pro exhibition)", holder: "Various", value: "Under 15 seconds" },
    { title: "Best-of-11 winning streak (Mosconi Cup format)", holder: "Team Europe 2010s dynasty", value: "9 consecutive Mosconi Cups (2010-2018)", year: 2018 },
  ],

  variants: ["eight-ball", "nine-ball", "ten-ball", "straight-pool", "one-pocket", "bank-pool", "cutthroat", "chinese-eight-ball"],
  relatedSports: ["snooker", "carom-billiards", "english-billiards", "russian-pyramid"],

  skills: [
    "cue-ball control",
    "spatial and angular reasoning",
    "position play (leaving the cue ball for the next shot)",
    "cue-tip accuracy",
    "safety and defensive play",
    "mental focus and match management",
  ],
  strategies: [
    { title: "Position over pocketing", body: "Elite players think 2-3 shots ahead — pocketing the current ball while positioning cue for the next." },
    { title: "Safety play", body: "If a run-out isn't possible, deliberately hide the cue ball behind another ball to leave opponent snookered." },
    { title: "English (spin)", body: "Add left/right/top/bottom spin to control the cue ball after contact — essential for position play." },
    { title: "Break with intent (9-Ball)", body: "Aim to pocket the 1-ball on the break and leave the cue ball centre-table with a clear shot." },
    { title: "Two-way shots", body: "Attempt a shot that either pockets the ball or leaves a safety — hedging risk." },
  ],

  terminology: [
    { term: "Rack", meaning: "Both the triangle (or diamond) that arranges the balls, and one complete game." },
    { term: "Break", meaning: "The opening shot of a rack." },
    { term: "Scratch", meaning: "Pocketing the cue ball or knocking it off the table — a foul." },
    { term: "Ball in hand", meaning: "Placement of the cue ball anywhere after opponent's foul." },
    { term: "Safety", meaning: "Deliberate defensive shot leaving opponent no clear pot." },
    { term: "English", meaning: "Sidespin applied to the cue ball." },
    { term: "Draw", meaning: "Backspin — cue ball travels backward after contact." },
    { term: "Follow", meaning: "Topspin — cue ball follows the object ball forward after contact." },
    { term: "Combination", meaning: "A shot in which the cue hits ball A which then pockets ball B." },
    { term: "Kick shot", meaning: "Cue ball rebounds off one or more cushions before hitting the object ball." },
    { term: "Bank shot", meaning: "Object ball is hit into a cushion before going into the pocket." },
    { term: "Run out", meaning: "Winning a rack in one visit at the table." },
    { term: "Snooker", meaning: "State where cue ball has no direct line to any legal object ball." },
    { term: "Bridge", meaning: "The hand position that supports the cue during a shot; also a mechanical support." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Grip and bridge", body: "Grip the cue lightly with the back hand; form a stable bridge with the front hand — closed, open, or rail bridge." },
      { title: "Stance", body: "Feet shoulder-width; dominant eye over the cue; steady body position." },
      { title: "Straight stroke", body: "Practice a smooth, straight cue delivery hitting the cue ball's centre." },
      { title: "Simple potting", body: "Aim for the pocket via the 'ghost ball' method — imagine where the cue must strike the object ball." },
    ] },
    { level: "intermediate", steps: [
      { title: "Cue ball spin (English)", body: "Learn to apply top, bottom, left, and right spin — and how it affects cue-ball direction after contact." },
      { title: "Position play", body: "Pot the ball AND leave the cue ball in a good spot for the next shot." },
      { title: "Basic safeties", body: "Learn to hide the cue behind a ball when a run-out isn't on." },
      { title: "8-Ball match strategy", body: "Choose your group carefully; keep your key balls close to their pockets." },
    ] },
    { level: "advanced", steps: [
      { title: "Break optimisation", body: "9-Ball break: cut angle, cue ball placement, controlled speed to pocket the 1 and stay centre." },
      { title: "Pattern play", body: "Plan a full run-out from break; choose sequences that minimise cue-ball travel." },
      { title: "Advanced kick and jump shots", body: "Escape safeties with kick shots off cushions or legal jump shots." },
      { title: "Mental game", body: "Maintain concentration through 100+ racks in tournament play; develop pre-shot routine." },
    ] },
  ],
  faq: [
    { question: "Is pool the same as billiards?", answer: "Billiards is the umbrella term. Pool = pocket billiards (with pockets). Carom billiards = pocketless. Snooker is a distinct pocketed variant with 22 balls." },
    { question: "What's the difference between 8-Ball and 9-Ball?", answer: "8-Ball uses 15 balls split into solids/stripes; the 8-ball must be pocketed last. 9-Ball uses balls 1-9; you must always hit the lowest ball first, and legally pocketing the 9 wins." },
    { question: "What is 'ball in hand'?", answer: "After any foul, the incoming player places the cue ball anywhere on the table before shooting. At professional level this is nearly always converted to winning the rack." },
    { question: "What size is a pool table?", answer: "Standard sizes: 7 ft (bar/tavern), 8 ft (home), 9 ft (professional). WPA world championships use 9 ft tables." },
    { question: "Can you jump the cue ball?", answer: "Yes — legal jump shots use a downward stroke into the cue ball to leap over blockers. Illegal jumps (scooping under) are fouls." },
    { question: "Who is the greatest pool player ever?", answer: "Consensus picks are Efren Reyes (versatility, imagination) and Willie Mosconi (dominance in straight pool). Modern era: Shane Van Boening or Fedor Gorst." },
  ],

  wikipediaTitle: "Pool (cue sports)",
  sources: [
    { label: "Wikipedia — Pool (cue sports)", url: "https://en.wikipedia.org/wiki/Pool_(cue_sports)", publisher: "Wikipedia" },
    { label: "World Pool-Billiard Association (WPA)", url: "https://wpapool.com/", publisher: "WPA" },
    { label: "Matchroom Pool", url: "https://matchroom.com/pool/", publisher: "Matchroom" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

import type { Sport } from "@/lib/types";

export const eightBall: Sport = {
  id: "eight-ball",
  slug: "eight-ball",
  name: "Eight-Ball Pool",
  officialName: "Eight-Ball (WPA World Rules)",
  aliases: ["8-Ball", "Eightball"],
  shortDescription:
    "The world's most-played cue sport — pocket your assigned seven balls (stripes or solids) then legally pot the 8-ball before your opponent does.",
  longDescription:
    "Eight-ball originated in the USA around 1900 from the Continuous Pool 15-ball game. It became the standard bar-room game globally and has WPA (World Pool-Billiards Association) championship status. British 8-ball (played on smaller 7-ft tables with red + yellow balls) is a distinct discipline. In the American 8-ball, matches are typically races to 5-7 racks in tournament play. Efren Reyes (PHI), Shane van Boening (US), and Jayson Shaw (SCO) dominate the modern circuit.",

  category: "precision-sports",
  subCategory: "cue sport (billiards family)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "USA (evolved from 15-ball continuous pool around 1900)",
  estimatedOrigin: "Codified in USA c. 1900; WPA standardized world rules 1990",

  players: { min: 2, max: 2, note: "1v1 standard; team formats (APA, BCA) for league play." },
  field: {
    surfaceName: "Pool table",
    dimensions: "9-foot pro table (2.54 × 1.27 m); 8-ft American; 7-ft bar-box",
    description: "Green baize cloth; 6 pockets (4 corners + 2 side); brought to level by leveling on-site." },
  equipment: [
    { name: "Cue stick", description: "Wooden or fiberglass; 57-58 inches; 18-21 oz." },
    { name: "Cue ball + 15 object balls", description: "1-7 solids, 9-15 stripes, black 8-ball, white cue ball (2 3/8 in)." },
    { name: "Rack (triangle)", description: "Wooden or plastic triangle; 8-ball at center, 1 + 15 in back corners." },
    { name: "Chalk + tip tool", description: "Master Chalk cube + burnisher for cue tip." },
    { name: "Bridge / rest", description: "For hard-to-reach shots." },
  ],
  duration: {
    approximateMinutes: 8,
    structure: "Casual rack: 5-15 min. Tournament match: 60-90 min (race to 7). League session: 3-4 hours." },

  objective:
    "Legally pocket all 7 balls of your assigned group (solids or stripes), then legally pocket the 8-ball to win the rack.",
  matchStructure:
    "Break → open table until first legal pot claims group → clear your 7 → call + pot the 8-ball. Match = race to N racks (typically 5, 7, or 9).",

  basicRules: [
    { title: "Break", body: "Cue ball behind head string; at least 4 balls to rail OR pocketed = legal break." },
    { title: "Open table", body: "After break, table is 'open' until first legal shot claims a group (solids/stripes)." },
    { title: "Call the pocket (many rules)", body: "In tournament World Rules, all shots called except 8-ball; APA has different call rules." },
    { title: "Scratches", body: "Cue ball pocketed = ball-in-hand for opponent (anywhere on table)." },
    { title: "8-ball rules", body: "Pot 8-ball early = loss. Scratch on 8-ball = loss. Pocket 8-ball in wrong called pocket = loss." },
  ],
  advancedRules: [
    { title: "Push-out (some rules)", body: "After break, current player may push cue ball anywhere without hitting rail; opponent gets choice to accept or reshoot." },
    { title: "Ball-in-hand", body: "After foul, opponent places cue ball anywhere on table." },
    { title: "Combinations + carom", body: "Legal if first ball hit is your group; combos on 8-ball legal if 8-ball not first hit." },
    { title: "Safety play", body: "Intentional defensive shot to leave opponent no good shot; legal if a rail contacted after object ball." },
  ],
  scoring: {
    summary: "Rack won by legally potting 8-ball after clearing your group. Match won by first to reach set rack total.",
    winCondition: "Win the required number of racks (races to 5, 7, 9 in tournaments).",
    breakdown: [
      { action: "Rack won", points: "1 game" },
      { action: "Race to 7", points: "First to 7 racks wins match" },
    ],
  },
  penalties: [
    { title: "Cue ball scratch", body: "Ball-in-hand for opponent." },
    { title: "8-ball scratch or pot early", body: "Automatic loss of rack." },
    { title: "Wrong ball first", body: "Ball-in-hand for opponent." },
    { title: "No rail after contact", body: "Foul: ball-in-hand for opponent." },
  ],

  positions: [
    { name: "Shooter", role: "Active player at table.", count: 1 },
    { name: "Opponent", role: "Watches from chair; can enforce rules if referee absent." },
  ],
  officiating: {
    officials: ["Referee (professional matches)"],
    summary: "WPA tournaments have referees; APA/BCA league nights use players themselves + captains as arbiters.",
  },

  governingBodies: [
    { name: "World Pool-Billiard Association (WPA)", founded: 1987, headquarters: "Sanford, Florida, USA", website: "https://wpapool.com" },
    { name: "Billiard Congress of America (BCA)", founded: 1948, headquarters: "Broomfield, Colorado, USA", website: "https://bca-pool.com" },
    { name: "American Poolplayers Association (APA)", founded: 1979, headquarters: "St. Louis, USA", website: "https://poolplayers.com" },
  ],
  majorCompetitions: [
    { name: "WPA World 8-Ball Championship", frequency: "annual", founded: 2004, region: "rotating" },
    { name: "US Open 8-Ball Championship", frequency: "annual", founded: 1976, region: "USA" },
    { name: "APA World Pool Championships", frequency: "annual", founded: 1979, region: "Las Vegas, USA" },
  ],
  countriesPlayed: ["US", "PH", "TW", "GB", "DE", "ES", "MX", "BR", "AU", "JP", "IT"],
  famousAthletes: [
    "Efren 'Bata' Reyes (PHI, greatest pool player ever)",
    "Shane van Boening (US, US Open champion multiple times)",
    "Jayson Shaw (SCO, WPA 8-Ball world champion)",
    "Earl Strickland (US, 3× US Open champion)",
    "Karen Corr (NIR, Irish 8-Ball legend)",
  ],
  records: [
    { title: "Fastest race to 7 in 8-ball", holder: "Efren Reyes vs. Earl Strickland", value: "Race to 120 legendary match, 1996", year: 1996 },
    { title: "APA World Championship prize pool", holder: "APA Worlds Vegas", value: "$1 M+ total prize pool", year: 2023 },
    { title: "Longest continuous run", holder: "Willie Mosconi", value: "526-ball run in straight pool exhibition", year: 1954 },
  ],

  variants: ["nine-ball", "one-pocket", "straight-pool", "british-8-ball", "blackball"],
  relatedSports: ["nine-ball", "snooker", "carom-billiards", "russian-pyramid"],

  skills: [
    "cue ball control (position play)",
    "aim + stroke consistency",
    "safety + defensive planning",
    "pattern recognition (out planning)",
    "mental pressure management",
  ],
  strategies: [
    { title: "Plan 3 balls ahead", body: "Every shot should leave cue ball on the next ball's line — position play beats potting ability." },
    { title: "Break with intent", body: "Cue-ball control on the break matters more than power; aim for 1-2 balls pocketed + cue ball in center." },
    { title: "Play safe when unsure", body: "If no clean run available, tuck opponent behind your balls." },
    { title: "Consider run-out order", body: "Identify all 7 balls' pockets + cue-ball path before starting your run." },
  ],

  terminology: [
    { term: "Break", meaning: "Opening shot with cue ball hitting racked balls." },
    { term: "Solids / stripes", meaning: "Ball groups: 1-7 (solid color) vs. 9-15 (stripes)." },
    { term: "Ball-in-hand", meaning: "Placing cue ball anywhere on table after opponent's foul." },
    { term: "Safety", meaning: "Defensive shot that leaves opponent no good option." },
    { term: "Run out", meaning: "Clearing all remaining balls of your group + 8-ball in one turn." },
    { term: "Bridge", meaning: "Hand position supporting the cue OR the mechanical rest." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Learn 3 fundamental strokes", body: "Straight, follow, draw — foundation of every shot." },
        { title: "Play 100 racks", body: "Focus on making the ball first; position play comes later." },
        { title: "Join a bar league (APA/BCA)", body: "Weekly leagues create social + competitive foundation." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Study Dr. Dave / Bob Jewett", body: "YouTube + Billiards Digest resources for position play + safeties." },
        { title: "Play in APA World Championships qualifier", body: "APA World Vegas is the world's largest amateur pool event ($1M+ prize)." },
        { title: "Turn pro via WPA Q-School", body: "Regional qualifying → US Open / WPA Worlds prize money circuit." },
      ],
    },
  ],

  faq: [
    { question: "American 8-ball vs. British 8-ball?", answer: "American: 9-ft table, standard pool balls, WPA rules. British: 7-ft, red/yellow balls, distinct World Eightball Pool Federation rules." },
    { question: "Do I have to call every pocket?", answer: "WPA World Rules: yes, all shots called. APA: only 8-ball called. Bar rules vary." },
    { question: "What if I scratch on the break?", answer: "Ball-in-hand for opponent behind the head string; break not re-taken." },
    { question: "Best cue for a beginner?", answer: "Any $50-$150 two-piece cue (McDermott, Meucci, Predator) — technique matters more than equipment for years." },
  ],

  sources: [
    { label: "Wikipedia — Eight-ball", url: "https://en.wikipedia.org/wiki/Eight-ball", publisher: "Wikipedia" },
    { label: "WPA World Rules", url: "https://wpapool.com/rules-of-play/", publisher: "WPA" },
    { label: "Dr. Dave Billiards", url: "https://billiards.colostate.edu", publisher: "Dr. David Alciatore" },
  ],
  wikipediaTitle: "Eight-ball",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const poolBilliards: Sport = {
  id: "pool-billiards",
  slug: "pool-billiards",
  name: "Pool (Billiards)",
  officialName: "Pocket Billiards / Pool",
  aliases: ["Pool", "Pocket Billiards"],
  shortDescription:
    "Umbrella term for cue sports played on a pocketed table — includes 8-ball, 9-ball, 10-ball, one-pocket, straight pool, and dozens of regional variants — with 300+ million recreational players globally.",
  longDescription:
    "Pool (or 'pocket billiards' as distinct from carom billiards) originated in Europe as an outdoor lawn game, moving indoors to felt-covered tables by the 1500s. The USA became the dominant cue sport nation from the late 1800s. Modern pool includes six major disciplines: 8-ball (most popular casually), 9-ball (most popular professionally), 10-ball, one-pocket, straight pool (14.1 continuous), and rotation. The WPA governs internationally; Matchroom Sport drives professional coverage. Willie Mosconi, Efren Reyes, and Shane van Boening are recognized as the sport's all-time greats.",

  category: "precision-sports",
  subCategory: "cue sport umbrella category",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "USA (pool as we know it evolved from European billiards 1800s)",
  estimatedOrigin: "Pool tables 1500s Europe; American pool 1800s; WPA founded 1987",

  players: { min: 2, max: 2, note: "1v1 standard; team formats (APA, BCA) for league play. Some variants support 3-4 players." },
  field: {
    surfaceName: "Pool table",
    dimensions: "Bar 7-ft (2.13 × 1.07 m); American 8-ft; Pro 9-ft (2.54 × 1.27 m)",
    description: "Slate bed + green baize cloth; 6 pockets (4 corners + 2 side)." },
  equipment: [
    { name: "Cue stick", description: "Wooden or fiberglass 57-58 in, 18-21 oz." },
    { name: "Cue ball + object balls", description: "Cue ball (2 3/8 in white) + 15 object balls (1-15) for most variants." },
    { name: "Rack (triangle or diamond)", description: "Triangle for 8-ball; diamond for 9-ball/10-ball." },
    { name: "Chalk + tip tools", description: "Cube chalk applied to cue tip between shots." },
    { name: "Bridge / rest", description: "Long-reach aids for hard-to-reach shots." },
  ],
  duration: {
    approximateMinutes: 10,
    structure: "Casual rack: 5-15 min. Tournament match: 45-90 min. League session: 3-4 hours." },

  objective:
    "Varies by discipline: pot your group + 8-ball (8-ball); pot 1-9 in order + 9-ball (9-ball); reach 150 points (straight pool); pot balls only in your assigned pocket (one-pocket).",
  matchStructure:
    "Break → alternate innings until win condition met per discipline. Match format: race to N racks (8/9-ball) or first to N points (straight pool).",

  basicRules: [
    { title: "Break shot", body: "Cue ball behind head string; rules on 'legal break' vary by discipline (typically 4 balls to rail or ball pocketed)." },
    { title: "Legal contact", body: "First ball hit must be from your group (8-ball) or lowest ball (9/10-ball)." },
    { title: "Rail contact rule", body: "After legal contact, at least one ball must contact rail OR be pocketed (in most rulesets)." },
    { title: "Scratches", body: "Cue-ball pocketed = ball-in-hand for opponent (in most modern rulesets)." },
    { title: "Called shots (variant-dependent)", body: "Some rulesets require calling every pot; others reward luck rolls." },
  ],
  advancedRules: [
    { title: "Ball-in-hand", body: "After foul, opponent places cue ball anywhere on table (standard in modern rules)." },
    { title: "3-foul rule (9-ball)", body: "3 consecutive fouls in one turn = loss of rack (some rulesets)." },
    { title: "Push-out (9-ball)", body: "After break, current player may play any shot without hitting lowest ball; opponent chooses to accept." },
    { title: "One-pocket (specialty)", body: "Each player assigned one corner pocket; only balls in that pocket count." },
  ],
  scoring: {
    summary: "Varies by discipline — race to N racks (8/9-ball) or first to points (straight pool).",
    winCondition: "Legal completion of discipline objective (win rack or reach points).",
    breakdown: [
      { action: "Rack win (8/9-ball)", points: "1 game" },
      { action: "Ball pot (straight pool)", points: "1 pt" },
      { action: "Foul (straight pool)", points: "-1 pt" },
    ],
  },
  penalties: [
    { title: "Scratch cue ball", body: "Ball-in-hand for opponent." },
    { title: "Not hitting legal ball first", body: "Ball-in-hand for opponent." },
    { title: "3 consecutive fouls (9-ball)", body: "Loss of rack." },
  ],

  positions: [
    { name: "Shooter", role: "Active player at table.", count: 1 },
    { name: "Opponent", role: "Sits in chair between innings." },
  ],
  officiating: {
    officials: ["Referee (professional matches)"],
    summary: "WPA + Matchroom pro events use referees; league/bar play relies on players + rule sheets.",
  },

  governingBodies: [
    { name: "World Pool-Billiard Association (WPA)", founded: 1987, headquarters: "Sanford, Florida, USA", website: "https://wpapool.com" },
    { name: "Billiard Congress of America (BCA)", founded: 1948, headquarters: "Broomfield, Colorado, USA", website: "https://bca-pool.com" },
    { name: "American Poolplayers Association (APA)", founded: 1979, headquarters: "St. Louis, USA", website: "https://poolplayers.com" },
  ],
  majorCompetitions: [
    { name: "WPA World Championships (9/10-ball)", frequency: "annual", founded: 1990, region: "rotating" },
    { name: "US Open (9-Ball, 8-Ball, Straight Pool)", frequency: "annual per discipline", founded: 1976, region: "USA" },
    { name: "Mosconi Cup", frequency: "annual (December)", founded: 1994, region: "Las Vegas rotating" },
    { name: "APA World Championships", frequency: "annual (Vegas)", founded: 1979, region: "Las Vegas" },
    { name: "Matchroom Premier League", frequency: "annual", founded: 2000, region: "European tour" },
  ],
  countriesPlayed: ["US", "PH", "TW", "GB", "DE", "ES", "MX", "PL", "AU", "JP", "IT", "BR"],
  famousAthletes: [
    "Willie Mosconi (US, 15× world straight pool champion 1941-57)",
    "Efren 'Bata' Reyes (PHI, greatest all-around player ever)",
    "Shane van Boening (US, dominant 21st-century player)",
    "Earl 'The Pearl' Strickland (US, 3× US Open champion)",
    "Fedor Gorst (RU, WPA + US Open champion)",
  ],
  records: [
    { title: "Longest straight pool run", holder: "Willie Mosconi", value: "526 balls in exhibition (1954)", year: 1954 },
    { title: "Highest single-tournament prize", holder: "APA World Championships", value: "$1M+ total prize pool", year: 2023 },
    { title: "Youngest world champion", holder: "Wu Jia-qing (TW)", value: "16 years old, 2005 WPA 9-Ball", year: 2005 },
  ],

  variants: ["eight-ball", "nine-ball", "ten-ball", "straight-pool", "one-pocket", "russian-pyramid", "snooker"],
  relatedSports: ["snooker", "carom-billiards", "russian-pyramid", "chinese-eight-ball"],

  skills: [
    "cue ball control (position play)",
    "aim + stroke consistency",
    "safety + defensive planning",
    "shot pattern recognition",
    "focus + pressure management",
  ],
  strategies: [
    { title: "Position play > potting", body: "Plan 3 balls ahead — every shot should set up the next." },
    { title: "Consistent bridge", body: "Same bridge hand position + closed loop for every shot builds accuracy." },
    { title: "Safety when unsure", body: "If no clear run, hide cue ball behind your balls to force opponent's mistake." },
    { title: "Master follow / draw / stop", body: "Three fundamental cue-ball strokes cover 80% of position needs." },
  ],

  terminology: [
    { term: "Break", meaning: "Opening shot; cue ball hits racked balls to start rack." },
    { term: "Rack", meaning: "The triangular/diamond formation of balls at start OR one complete game." },
    { term: "Ball-in-hand", meaning: "Placing cue ball anywhere on table after opponent's foul." },
    { term: "Safety", meaning: "Defensive shot leaving opponent no good option." },
    { term: "Run out", meaning: "Clearing all remaining balls without missing." },
    { term: "Scratch", meaning: "Pocketing cue ball; also called 'in the pocket'." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Learn the fundamentals", body: "Grip, stance, bridge, stroke — 5 lessons with a certified BCA instructor." },
        { title: "Play 8-ball at your local bar", body: "Casual 8-ball leagues (APA) teach basic strategy socially." },
        { title: "Practice straight-in shots + stop-shots", body: "Master these two before attempting position play." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Choose your discipline", body: "9-ball for pro path; straight pool for 'thinking man's' game." },
        { title: "Study top-100 matches", body: "YouTube archives of Mosconi Cup, WPA Worlds are free master classes." },
        { title: "Enter WPA + APA amateur championships", body: "APA World Vegas + WPA Q-School are entry points to prize purses." },
      ],
    },
  ],

  faq: [
    { question: "Is 'pool' the same as 'billiards'?", answer: "Pool = pocketed table with 15 numbered balls. Billiards = carom (French) games on pocketless tables. Both are 'cue sports'." },
    { question: "Which pool discipline is most popular?", answer: "8-ball (casual bar-play). 9-ball (professional tournaments). Straight pool (traditional 'thinking man' variant)." },
    { question: "How much for a decent home pool table?", answer: "$1500-$4000 for slate 8-ft table; $500-$1500 for lower-quality. Delivery + installation + refelting add $500+." },
    { question: "What's the best pool cue for a beginner?", answer: "Any $50-$150 two-piece cue with a leather tip (McDermott, Meucci, Predator's cheaper cues). Technique matters more than gear for the first 5 years." },
  ],

  sources: [
    { label: "Wikipedia — Pool (cue sports)", url: "https://en.wikipedia.org/wiki/Pool_(cue_sports)", publisher: "Wikipedia" },
    { label: "WPA official", url: "https://wpapool.com", publisher: "WPA" },
    { label: "AzBilliards", url: "https://www.azbilliards.com", publisher: "AzBilliards" },
  ],
  wikipediaTitle: "Pool (cue sports)",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const stoolball: Sport = {
  id: "stoolball",
  slug: "stoolball",
  name: "Stoolball",
  officialName: "Stoolball (Stoolball England)",
  aliases: ["Cricket-in-the-air"],
  shortDescription:
    "Ancestor sport of cricket and baseball, still played competitively in Sussex, Kent, and Surrey — 11-a-side bat-and-ball game using two elevated wooden stools as wickets; mentioned in English literature as early as 1450.",
  longDescription:
    "Stoolball is a bat-and-ball team sport played 11-a-side, believed to be an ancestor of both cricket and baseball. Two teams face off across a pitch with two 30 cm × 30 cm wooden 'wickets' (originally milking stools) mounted 4 ft 8 in high on posts, 16 yards apart. The bowler bowls underarm from behind one wicket at the batter, who defends the other. Recorded in England since the 15th century (mentioned by Chaucer and in the Domesday chronicles' era), stoolball remained a rural summer pastime and was revived nationally in the 1900s. Today it is governed by Stoolball England (founded 2008), with strongholds in Sussex, Kent, and Surrey. Two national leagues (mixed and women's) crown champions annually. It is registered as a traditional English sport with Sport England.",

  category: "ball-sports",
  subCategory: "bat-and-ball ancestor sport",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "summer",
  era: "medieval",
  popularity: "regional",
  countryOfOrigin: "GB",
  regionOfOrigin: "Southern England (Sussex, Kent, Surrey); recorded since 15th century; formal rules published 1881; Stoolball England founded 2008",
  estimatedOrigin: "Rural Sussex/Kent by 1450; formal rules 1881; Stoolball England founded 2008",

  players: { perTeam: 11, min: 8, max: 11, substitutes: 3, note: "11-a-side traditional; mixed and women's league formats." },
  field: {
    surfaceName: "Grass pitch",
    dimensions: "16 yards (14.6m) between wickets; 90-yard fielding boundary (varies by club)",
    description: "Grass field with two elevated wooden wickets (30cm square) mounted at 4 ft 8 in on posts, 16 yards apart. No pitch strip — bowler bowls from behind wicket, no 'crease' in modern cricket sense.",
  },
  equipment: [
    { name: "Stoolball bat", description: "Round-headed wooden bat, ~46cm long — resembles a paddle or 'frying pan'; club-specific weight." },
    { name: "Stoolball ball", description: "Hard cork core wrapped in leather, ~7oz (200g), similar to a cricket ball but slightly smaller." },
    { name: "Wickets (2)", description: "30cm × 30cm wooden squares mounted at 4 ft 8 in on posts (approx. shoulder height for average adult)." },
    { name: "Fielding pads/gloves", description: "Optional; wicket-keeper often wears cricket-style gloves." },
  ],
  duration: { approximateMinutes: 180, structure: "Two innings per side, or single-innings limited-overs format (typically 15 overs per side)." },
  objective: "Score more runs than the opposition. Runs are scored by hitting the ball and running between the two wickets (or hitting boundaries).",
  matchStructure: "Limited-overs (15 overs each) or two-innings match. Bowler bowls underarm 8 balls per over (or 6, league-dependent).",

  basicRules: [
    { title: "Underarm bowling only", body: "Bowler must deliver ball underarm from behind own wicket; no round-arm or overarm." },
    { title: "Hit the wicket = out", body: "If bowled ball hits batter's wicket, the batter is out." },
    { title: "Caught = out", body: "Fielded on the full (no bounce) = out." },
    { title: "Run scoring", body: "Batter runs between wickets after hitting the ball; 1 run per completed round-trip." },
    { title: "Boundaries", body: "Ball crossing boundary on ground = 4 runs; on the full = 6 runs (club-dependent)." },
    { title: "Body-before-wicket (BBW)", body: "Similar to LBW in cricket — leg blocking a ball that would have hit wicket = out." },
  ],
  advancedRules: [
    { title: "8-ball over (traditional)", body: "Bowler bowls 8 legal deliveries per over (some leagues use 6)." },
    { title: "No 'no-ball' for round-arm", body: "Only underarm is legal — round-arm is an automatic no-ball + free hit." },
    { title: "Wicket-keeper", body: "Wicket-keeper stands behind batter's wicket, similar to cricket." },
    { title: "Wides + no-balls", body: "Judged by umpire; batter cannot be out from a wide or no-ball delivery." },
  ],
  scoring: {
    summary: "Runs scored by running between wickets or by boundaries; ten wickets or overs bowled ends innings.",
    winCondition: "Team with higher run total across both innings (or single innings) wins.",
    breakdown: [
      { action: "Run (between wickets)", points: "1 per completed exchange" },
      { action: "Boundary along ground", points: "4" },
      { action: "Boundary on the full", points: "6" },
      { action: "Wide / no-ball", points: "1 (extras)" },
    ],
  },
  penalties: [
    { title: "No-ball", body: "Illegal delivery (round-arm, above shoulder, out of crease) — extra run + free hit." },
    { title: "Wide", body: "Ball out of batter's reach — extra run." },
    { title: "Warning / dismissal", body: "For unsportsmanlike conduct; umpire's discretion." },
  ],

  positions: [
    { name: "Batter (2 at crease)", role: "Two batters stand at each wicket; only 1 faces bowler.", count: 2 },
    { name: "Bowler", role: "Bowls underarm from behind wicket.", count: 1 },
    { name: "Wicket-keeper", role: "Stands behind batter's wicket to catch/stump.", count: 1 },
    { name: "Fielders (9)", role: "Positioned around pitch to catch and stop ball; classic cricket field positions (mid-on, mid-off, slip, cover, etc.).", count: 9 },
  ],
  officiating: {
    officials: ["Umpires (2)", "Scorer"],
    summary: "Two on-field umpires plus scorer; typical of cricket-family sports.",
  },

  governingBodies: [
    { name: "Stoolball England", founded: 2008, headquarters: "Sussex, England", website: "https://www.stoolball.org.uk" },
    { name: "National Stoolball Association (predecessor)", founded: 1927, headquarters: "England" },
  ],
  majorCompetitions: [
    { name: "Stoolball England Mixed National Championship", frequency: "annual (August)", founded: 1979, region: "England" },
    { name: "Stoolball England Ladies National Championship", frequency: "annual", founded: 1927, region: "England" },
    { name: "Sussex County Championship", frequency: "annual", founded: 1928, region: "Sussex, England" },
    { name: "Kent Stoolball League", frequency: "annual", founded: 1935, region: "Kent, England" },
  ],
  countriesPlayed: ["GB"],
  famousAthletes: [
    "William Wilson Grantham (revived stoolball in 1900s Sussex; codified modern rules)",
    "Roy Fry (long-serving Sussex stoolball administrator + player)",
    "Kay Menzies (long-time Stoolball England chair + player)",
  ],
  records: [
    { title: "Earliest literary reference", holder: "Stoolball", value: "Referenced in English texts before 1450 (Chaucer era); one of the oldest recorded bat-and-ball games", year: 1450 },
    { title: "Longest continuous women's championship", holder: "Stoolball England Ladies", value: "Since 1927 (with WWII break) — one of the oldest women's team sport championships", year: 2023 },
    { title: "Ancestor of cricket + baseball", holder: "Stoolball", value: "Widely cited by sports historians as antecedent of both cricket and baseball", year: 1850 },
  ],

  variants: ["mixed-11-a-side", "ladies-11-a-side", "school-mini-8-a-side", "single-wicket-format"],
  relatedSports: ["cricket", "rounders", "baseball", "softball", "kilikiti"],

  skills: ["underarm bowling accuracy", "flat-bat swing (paddle bat)", "wicket-keeping reflexes", "run-between-wickets communication", "field placement (cricket sense)", "reading pitch and weather"],
  strategies: [
    { title: "Attack the wicket line", body: "Bowler targets the small (30cm square) wicket at shoulder height — accurate bowling wins games." },
    { title: "Use the flat bat", body: "Round-headed bat rewards flat, level swings across the line — cricket cut/pull shots translate poorly." },
    { title: "Field close on new batter", body: "Ring field close in for the first few balls; spread out once batter is set." },
    { title: "Time-manage limited overs", body: "15-over league games reward early wickets + boundary-hitting; conserve bowlers for last 5 overs." },
  ],

  terminology: [
    { term: "Wicket", meaning: "The 30cm-square wooden target mounted on a post — batter must defend theirs." },
    { term: "Over", meaning: "8-ball (or 6-ball) sequence from one bowler." },
    { term: "BBW", meaning: "Body-Before-Wicket — stoolball's equivalent of LBW." },
    { term: "Stump-out", meaning: "Wicket-keeper hits batter's wicket while batter is out of ground." },
    { term: "Sussex delivery", meaning: "Traditional flat, low underarm bowl favored in Sussex leagues." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Watch a local Sussex club match", body: "Sussex has 100+ stoolball clubs — Saturdays through summer." },
      { title: "Join a club (adults & juniors welcome)", body: "Most clubs run women's, mixed, and youth teams; no cricket background needed." },
      { title: "Practice underarm bowling first", body: "Accuracy + line to the wicket is the core skill — daily net practice pays off." },
    ]},
    { level: "advanced", steps: [
      { title: "County selection (Sussex / Kent / Surrey)", body: "Top club players selected for county championships." },
      { title: "National championship finals (August)", body: "Held annually — women's since 1927, mixed since 1979." },
    ]},
  ],

  faq: [
    { question: "Is stoolball really older than cricket?", answer: "Yes — recorded references to stoolball predate cricket by 100-150 years, with mentions in English literature and church records from the 15th century. Historians widely credit stoolball as a direct ancestor of both cricket and baseball." },
    { question: "Why are the wickets so high?", answer: "Traditional wickets were milking stools carried by dairymaids to games in Sussex villages, so they sat at natural shoulder height. Modern wickets kept the ~4 ft 8 in height for tradition; this makes underarm bowling and defensive batting distinct from cricket." },
    { question: "Is stoolball played outside England?", answer: "It is almost exclusively played in Sussex, Kent, and Surrey. Occasional social clubs exist in other English counties and in expatriate circles, but competitive stoolball remains an English regional sport." },
  ],

  wikipediaTitle: "Stoolball",
  sources: [
    { label: "Stoolball England", url: "https://www.stoolball.org.uk", publisher: "Stoolball England" },
    { label: "Wikipedia — Stoolball", url: "https://en.wikipedia.org/wiki/Stoolball", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

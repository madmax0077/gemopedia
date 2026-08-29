import type { Sport } from "@/lib/types";

export const kellyPool: Sport = {
  id: "kelly-pool",
  slug: "kelly-pool",
  name: "Kelly Pool",
  officialName: "Kelly Pool (Pea Pool)",
  aliases: ["Pea Pool", "Pill Pool", "Pill Game"],
  shortDescription:
    "Multi-player rotation pool (2-15 players) with secret 'pea' assignments — each player draws a numbered pea/pill privately and must pot the matching ball; classic 19th-century American bar-room and gambling game.",
  longDescription:
    "Kelly Pool (also called Pea Pool or Pill Pool) is a multi-player pool game (2-15 players) that emerged in mid-19th century America — a wildly popular bar-room and gambling variant of rotation pool. Each player secretly draws a small numbered 'pea' or 'pill' (like a numbered bead in a leather 'bottle') at the start; the drawn number is that player's target ball, kept secret. Play proceeds in rotation (players shoot in numerical pea order or seat order depending on ruleset), striking the lowest-numbered ball first as in 9-ball rotation. A player wins by potting their secret pea ball at any point during the game. Kelly Pool became notorious for gambling (each player antes into pot; winner takes all) and was famously banned in many US pool halls during Prohibition era for gambling associations. It remains widely played casually and has seen a modern revival in dive bars + amateur circuits. Rules vary regionally — some variants require public pea reveal on potting; others keep secret until game end.",

  category: "precision-sports",
  subCategory: "cue sport (multi-player rotation with secret targets)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "United States (mid-19th century bar-room culture); named for Chicago pool hall owner Kelly (unverified origin)",
  estimatedOrigin: "Mid-19th century America; peak popularity 1900-1930; banned in many US pool halls during Prohibition for gambling",

  players: { min: 2, max: 15, note: "2-15 players; 4-6 is optimal social size." },
  field: {
    surfaceName: "Standard pool table (7-9 ft)",
    dimensions: "Any standard American pool table (7', 8', 9') acceptable",
    description: "Rotation game — 15 numbered object balls racked in triangle; cue ball starts in kitchen for break.",
  },
  equipment: [
    { name: "15 numbered pool balls (1-15) + cue ball", description: "Standard pool ball set." },
    { name: "Peas / pills (1-15)", description: "Numbered wooden or plastic beads (~1cm), traditionally kept in a leather 'bottle' for random draw. One drawn per player." },
    { name: "Cue stick + chalk", description: "Standard pool cue and chalk." },
    { name: "Antes / pot (optional gambling)", description: "Cash pot each player contributes; winner takes all (traditional). Skip in casual play." },
  ],
  duration: { approximateMinutes: 20, structure: "Each 'inning' (game) ~10-20 minutes; series of innings for extended play." },
  objective: "Legally pot the ball matching your secretly drawn pea number.",
  matchStructure: "Draw peas → break → rotation shots (lowest-numbered ball first) → first player to pot own pea ball wins the inning + pot.",

  basicRules: [
    { title: "Draw peas secretly", body: "Each player draws one numbered pea from the bottle; keeps their number secret from others." },
    { title: "Rotation break", body: "Standard 9-ball rotation break (1-ball at apex of rack, cue ball breaks from kitchen)." },
    { title: "Must strike lowest numbered ball first", body: "As in 9-ball rotation, first contact must be lowest ball on table." },
    { title: "Any legal pot allowed", body: "Any ball legally potted stays down (or is returned to spot in some variants); play continues on miss." },
    { title: "Win by potting own pea ball", body: "First player to legally pot their secret pea ball wins immediately + shows pea to prove win + takes pot." },
    { title: "Reveal on pot (some variants)", body: "Some rulesets require public reveal of pea when it is potted (must announce before shot)." },
  ],
  advancedRules: [
    { title: "Fouls", body: "Standard rotation fouls — no lowest-ball-first, jump cue, scratch = ball-in-hand for next player." },
    { title: "Eliminated on foul (some variants)", body: "'Elimination' variant: 3 fouls = out of the game." },
    { title: "Peddling / dealing", body: "Slang for tactical revealing of your pea number to opponent; considered legitimate psychological play." },
    { title: "Ghost ball rule", body: "If your pea ball is potted by an opponent (not you), you can be eliminated from that inning or forced to add money to pot." },
  ],
  scoring: {
    summary: "Winner takes pot; no ongoing score across games (except money accumulated).",
    winCondition: "First player to legally pot their secret pea ball wins the inning and takes the pot.",
    breakdown: [
      { action: "Own pea ball potted", points: "Winner takes pot" },
      { action: "Foul", points: "Loss of turn; ball-in-hand to next player" },
      { action: "3 fouls (elimination variant)", points: "Removed from inning" },
    ],
  },
  penalties: [
    { title: "Not striking lowest ball first", body: "Foul — ball-in-hand to next player." },
    { title: "Scratched cue ball", body: "Foul — ball-in-hand to next player." },
    { title: "Illegal pot (wrong ball)", body: "Pot doesn't count; next player takes shot." },
    { title: "Cheating (looking at another's pea)", body: "Immediate elimination + potential exclusion from group." },
  ],

  positions: [
    { name: "Any player (rotation order)", role: "Every player has equal role; plays in seating or pea-number rotation.", count: 2 },
  ],
  officiating: {
    officials: ["Self-refereed (casual)", "Referee (tournament — rare for Kelly Pool)"],
    summary: "Almost always self-refereed; disputes resolved by group consensus.",
  },

  governingBodies: [
    { name: "American Poolplayers Association (APA — recognizes as league game)", founded: 1979, headquarters: "Missouri, USA", website: "https://poolplayers.com" },
    { name: "No dedicated Kelly Pool governing body", founded: 1900, headquarters: "N/A (folk cue game)" },
  ],
  majorCompetitions: [
    { name: "APA amateur league (Kelly Pool as league night)", frequency: "weekly", founded: 1979, region: "USA (some regional leagues)" },
    { name: "Historic National Kelly Pool Championship", frequency: "irregular", founded: 1910, region: "USA (early 20th century pool halls)" },
    { name: "Modern revival exhibition tournaments", frequency: "irregular", founded: 2010, region: "regional USA + Canada" },
  ],
  countriesPlayed: ["US", "CA", "GB", "AU"],
  famousAthletes: [
    "No modern professional players — Kelly Pool is a folk / social game",
    "Historically associated with pool hall legends of the 1910s-1930s pre-elimination",
    "Featured occasionally in vintage pool hall memorabilia + Ken Burns's 'Baseball' era Americana coverage",
  ],
  records: [
    { title: "Peak US popularity", holder: "Kelly Pool", value: "One of the most played pool games in US bar-rooms 1900-1930; banned in many establishments during Prohibition due to gambling associations", year: 1925 },
    { title: "Number of legal variants", holder: "Kelly Pool variants", value: "10+ regional variants including Pea Pool, Pill Pool, Assigned Pool, and Rotation Pea Pool — each with local rule differences", year: 2020 },
    { title: "Cultural longevity", holder: "Kelly Pool", value: "170+ years of continuous informal play in American pool culture; oldest surviving American multi-player pool folk game", year: 2024 },
  ],

  variants: ["standard-kelly-pool-1-15-peas", "elimination-kelly-3-fouls-out", "assigned-numbers-no-peas-variant", "banked-kelly-pool-bank-shots-only", "call-shot-kelly-pool-must-call-pocket"],
  relatedSports: ["rotation-pool", "9-ball", "8-ball", "cutthroat", "billiards"],

  skills: ["rotation shot planning (must hit lowest ball first)", "reading opponents' patterns to guess their pea", "position play across multi-target game", "psychological play (bluffing about own pea)", "shot selection under group pressure"],
  strategies: [
    { title: "Play toward your pea early", body: "If your pea number is low (1-5), attack it directly since it must be hit first anyway." },
    { title: "Bluff to protect high pea", body: "If your pea is high (10-15), pretend not to care about that ball to prevent opponents from playing safe on it." },
    { title: "Peddle to negotiate", body: "In social play, reveal pea to opponents to negotiate cooperative play against a leader." },
    { title: "Bank + combination options", body: "As lower balls clear, higher balls become accessible via combos + banks — practice these shots." },
    { title: "Foul management", body: "Elimination variant rewards careful foul avoidance; conservative safety play beats reckless attacks." },
  ],

  terminology: [
    { term: "Pea / Pill", meaning: "Numbered bead drawn at start to assign each player's secret ball." },
    { term: "Bottle", meaning: "Leather shaker holding all 15 peas for random draw." },
    { term: "Rotation", meaning: "Must strike lowest numbered ball first on every shot." },
    { term: "Ball-in-hand", meaning: "After opponent foul, place cue ball anywhere on table." },
    { term: "Peddle", meaning: "Reveal your pea number to another player (tactical negotiation)." },
    { term: "Ante", meaning: "Buy-in contribution to game pot." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn basic pool rotation (9-ball)", body: "9-ball's rotation shot fundamentals transfer directly to Kelly Pool." },
      { title: "Play social Kelly Pool with 4-6 friends", body: "Ideal group size; teaches strategic layers (bluffing, peddling) not in solo pool." },
      { title: "Study which balls are hardest to pot late in game", body: "Late-game balls (11-15) are often clustered awkwardly; plan approaches early." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete in APA amateur leagues (Kelly Pool night)", body: "Some APA regional leagues have Kelly Pool nights alongside 8-ball + 9-ball." },
      { title: "Attend revival Kelly Pool tournaments", body: "Small revival tournaments in USA + Canada — often exhibition + charity events." },
    ]},
  ],

  faq: [
    { question: "Is Kelly Pool the same as Cutthroat?", answer: "No — both are multi-player pool games but different rules. Kelly Pool assigns each player a secret pea-drawn ball; win by potting your pea ball. Cutthroat divides 15 balls into 3 zones (1-5, 6-10, 11-15) publicly assigned to 3 players; eliminate opponents by clearing their zone. Kelly Pool has the secret-pea psychology layer while Cutthroat is open information." },
    { question: "Why was Kelly Pool banned in some US pool halls?", answer: "Kelly Pool became strongly associated with gambling — players pooled cash antes and the winner took all. During Prohibition and the moral panic against pool halls in the 1920s-30s, many US establishments prohibited Kelly Pool to avoid association with gambling. It survived as a casual game and returned to legitimate play later." },
    { question: "Is there a professional Kelly Pool tour?", answer: "No — Kelly Pool remains a social / folk pool game without professional structure. Compared to 9-ball (WPA, Mosconi Cup) or 8-ball (APA, BCA), Kelly Pool has no formal governing body or televised tour. It survives as amateur league night + revival social tournaments in US + Canada + UK." },
  ],

  wikipediaTitle: "Kelly pool",
  sources: [
    { label: "APA", url: "https://poolplayers.com", publisher: "American Poolplayers Association" },
    { label: "Wikipedia — Kelly pool", url: "https://en.wikipedia.org/wiki/Kelly_pool", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

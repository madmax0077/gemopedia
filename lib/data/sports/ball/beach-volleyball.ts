import type { Sport } from "@/lib/types";

export const beachVolleyball: Sport = {
  id: "beach-volleyball",
  slug: "beach-volleyball",
  name: "Beach Volleyball",
  officialName: "Beach Volleyball",
  aliases: ["Sand volleyball", "Two-a-side volleyball"],
  shortDescription:
    "Two-a-side variant of volleyball played barefoot on sand — the smaller court and no substitutes make endurance, all-round skill, and reading the wind essential.",
  longDescription:
    "Beach volleyball is a variant of volleyball played on sand between two teams of two players separated by a high net. There are no positional specialists — both partners must serve, set, attack, block, and defend. Matches are played best-of-three sets: the first two sets to 21 points, the deciding set to 15 (all win-by-two). The game originated on Santa Monica beaches in the 1920s, went pro in the 1980s with the AVP tour, and joined the Olympic programme in Atlanta 1996. Elite tournaments run on the FIVB Beach Volleyball Pro Tour with title events across Europe, the Americas, Asia and Oceania.",

  category: "ball-sports",
  subCategory: "net sport",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isProfessional: true,
  season: "summer",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Santa Monica, California",
  estimatedOrigin: "1920s (first documented in Santa Monica); Olympic 1996",

  players: { perTeam: 2, min: 2, max: 2, substitutes: 0, note: "No substitutes in a match — a partner cannot be replaced." },
  field: {
    surfaceName: "sand court",
    dimensions: "16 m × 8 m court (smaller than indoor); net height same as indoor (2.43 m men / 2.24 m women).",
    description: "Level sand court surrounded by a free zone. No attack line — any player may attack the ball from anywhere on their side.",
  },
  equipment: [
    { name: "Beach volleyball", description: "Slightly larger and softer than the indoor ball; brighter colours for visibility outdoors." },
    { name: "Net & posts", description: "Same as indoor volleyball — 1 m deep, spanning the width of the court." },
    { name: "Antennae", description: "Flexible rods on both ends of the net marking the vertical passage limit." },
    { name: "Sunglasses / visor", description: "Common for outdoor glare and sun in the eyes.", optional: true },
    { name: "Sun protection", description: "Sunscreen and often taping — long matches on hot sand.", optional: true },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "Best-of-3 sets. Sets 1-2 to 21 points (win by 2); deciding 3rd set to 15 (win by 2).",
    note: "Elite matches typically run 45-90 minutes.",
  },
  objective: "Ground the ball on the opponent's court or force an error to win rallies; win 2 sets to take the match.",
  matchStructure:
    "Same rally-scoring structure as indoor volleyball, but with only two players per side, no rotation (partners take turns serving), and no positional specialists. Teams switch ends every 7 points (sets 1-2) or every 5 points (deciding set) to equalise sun and wind.",

  basicRules: [
    { title: "Two players, three touches", body: "Same maximum of three team touches per side; no player may touch the ball twice in succession." },
    { title: "Alternating serve", body: "Partners alternate serving throughout the set. When your team wins a rally on the opponent's serve, you get the serve back." },
    { title: "Hand-setting restrictions", body: "Setting the ball to your partner is stricter than indoor — the ball must leave the hands cleanly (no spin) and travel perpendicular to the shoulders." },
    { title: "Block counts as a touch", body: "Unlike indoor volleyball, a block contact counts as one of the team's three touches." },
    { title: "Open-hand tips", body: "Tipping the ball over the net with fingertips or an open hand is illegal; use a knuckle or cobra." },
    { title: "Switch ends", body: "Teams switch ends every 7 points (sets 1-2) or 5 points (deciding set) to neutralise sun / wind advantages." },
    { title: "No footwear", body: "Play is barefoot; ankle braces or socks allowed if approved by the referee." },
  ],
  advancedRules: [
    { title: "Time-outs", body: "One 30-second timeout per team per set; also one 30-second 'technical timeout' when the sum of the score reaches 21 (sets 1-2)." },
    { title: "Wind allowances", body: "Retosses on the serve are allowed if wind blows the toss away; only two per server per match." },
    { title: "Screening", body: "Server's partner may not intentionally block the receiver's view of the serve." },
    { title: "Video challenge", body: "One video challenge per set at FIVB level; retained if successful." },
  ],
  scoring: {
    summary: "Rally-point scoring; every rally awards a point to the winning side.",
    breakdown: [
      { action: "Ball grounded on opponent's court", points: "1" },
      { action: "Opponent hits ball out or into the net", points: "1" },
      { action: "Opponent commits a fault", points: "1" },
      { action: "Ace serve", points: "1" },
    ],
    winCondition: "Best-of-3 sets: 21-21-15 target; win by 2. First team to 2 sets wins the match.",
  },

  officiating: {
    officials: ["First referee (on stand)", "Second referee (opposite side)", "Scorer", "Line judges (2 or 4)"],
    summary: "Same crew as indoor volleyball but with more emphasis on set-cleanliness and wind rulings.",
  },
  governingBodies: [
    { name: "Fédération Internationale de Volleyball", acronym: "FIVB", founded: 1947, headquarters: "Lausanne, Switzerland", website: "https://www.fivb.com/en/beachvolleyball" },
    { name: "AVP Pro Beach Volleyball Tour", founded: 1983, headquarters: "Los Angeles, USA", website: "https://avp.com" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 1996, region: "worldwide" },
    { name: "FIVB Beach Volleyball World Championship", frequency: "biennial", founded: 1997, region: "worldwide" },
    { name: "FIVB Beach Pro Tour Finals", frequency: "annual", founded: 2022, region: "worldwide" },
    { name: "AVP Pro Beach Volleyball Tour", frequency: "annual", founded: 1983, region: "United States" },
  ],
  countriesPlayed: ["BR", "US", "NO", "NL", "AU", "CH", "DE", "AT", "IT", "CN", "JP", "LV", "CA"],
  famousAthletes: [
    "Karch Kiraly",
    "Kerri Walsh Jennings",
    "Misty May-Treanor",
    "Emanuel Rego",
    "Ricardo Santos",
    "Alison Cerutti",
    "Bruno Schmidt",
    "Anders Mol",
    "Christian Sørum",
    "April Ross",
    "Talita Antunes",
  ],
  records: [
    { title: "Most Olympic gold medals (individual)", holder: "Kerri Walsh Jennings & Misty May-Treanor", value: "3", year: 2012 },
    { title: "Most FIVB World Championship titles (men)", holder: "Emanuel Rego (BRA)", value: "3", year: 2011 },
    { title: "Longest winning streak (women, Olympic)", holder: "Kerri Walsh Jennings & Misty May-Treanor", value: "21 consecutive Olympic-tournament matches", year: 2012 },
  ],

  parentSlug: "volleyball",
  variants: ["snow-volleyball", "footvolley", "four-a-side-beach"],
  relatedSports: ["volleyball", "footvolley", "sepak-takraw"],

  skills: [
    "reading wind",
    "vertical jump",
    "endurance in sand",
    "all-round skill (serve, pass, set, hit, block, dig)",
    "communication with your only partner",
    "sun / glare adaptation",
    "shot placement",
  ],
  strategies: [
    { title: "Serving the weaker passer", body: "Team scouts and hammers the receiver who is more error-prone in wind or under pressure." },
    { title: "Line vs cross-court shots", body: "Attackers vary between straight-down-the-line and diagonal cross-court hits to beat a single blocker." },
    { title: "Cut shot & pokey", body: "Off-speed shots (cut, jumbo, poke) exploit gaps left by a committed defender." },
    { title: "Serving to the sun", body: "In late afternoon, servers target zones where the receiver looks into the sun." },
  ],

  terminology: [
    { term: "Sideout", meaning: "Winning the rally while receiving serve — earning the serve back." },
    { term: "Cut shot", meaning: "Sharply-angled hit that lands just over the net near the sideline." },
    { term: "Pokey (knuckler)", meaning: "Legal fingertip contact using a curled knuckle to place the ball softly." },
    { term: "Dig", meaning: "Defensive contact that keeps a spiked ball in play." },
    { term: "Peel", meaning: "Blocker retreating from the net to play defence instead of blocking." },
    { term: "Chicken wing", meaning: "Defensive save with elbow tucked to redirect a low ball with the arm." },
    { term: "Line ball / Cross-court ball", meaning: "Attack down the sideline vs across the diagonal." },
    { term: "Jumbo", meaning: "Two-handed overhead push shot used as a placement attack." },
    { term: "Skyball", meaning: "Extremely high serve used to make the receive difficult in wind." },
    { term: "Switch", meaning: "Partners swap sides of the court based on who's serving or receiving." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Sand footwork", body: "Adapt to running, jumping and landing in soft sand — different from hard court.", anchor: "skills" },
      { title: "Bump-set-hit", body: "The standard three-touch flow with only one partner.", anchor: "basicRules" },
      { title: "Underhand serve", body: "Reliable outdoor serve to start." },
      { title: "Communication", body: "Constant calls of 'mine!', 'yours!', 'up!' with your only partner." },
    ] },
    { level: "intermediate", steps: [
      { title: "Legal setting", body: "Practice clean two-handed sets that meet beach standards (no rotation of the ball)." },
      { title: "Approach and swing", body: "Two-step or three-step approach and full arm swing." },
      { title: "Reading the wind", body: "Adjust toss height on serves, set apex closer to the net when wind is at your back." },
      { title: "One-blocker defence", body: "Blocker takes line; defender covers cross-court — most common two-player scheme." },
    ] },
    { level: "advanced", steps: [
      { title: "Serving strategy", body: "Vary jump-topspin, jump-float, skyball; target weakest passer under sun/wind." },
      { title: "Blocking hand signals", body: "Behind-the-back signals from blocker to defender indicating serve target and block/pull strategy." },
      { title: "Match management", body: "Timeout usage, side changes, momentum shifts — mental toughness with no substitutions." },
    ] },
  ],
  faq: [
    { question: "How is beach volleyball different from indoor?", answer: "Two players per side vs six, no substitutes, smaller court (16×8 m vs 18×9 m), sets to 21 (not 25), stricter setting rules, block counts as a touch, no shoes." },
    { question: "Why do teams switch sides?", answer: "To equalise sun, wind and any court-slope advantages — every 7 points in sets 1-2, every 5 in the deciding set." },
    { question: "Is beach volleyball at the Olympics?", answer: "Yes — since Atlanta 1996 for both men and women." },
    { question: "Do the same players play offence and defence?", answer: "Yes — both partners must serve, pass, set, attack, block and dig. There are no specialists." },
    { question: "What are the hand signals behind the blocker's back?", answer: "They communicate the blocking plan and where the server is aiming — before the serve, the blocker signals with fingers which zone will be attacked and which side will be blocked." },
  ],

  wikipediaTitle: "Beach volleyball",
  sources: [
    { label: "Wikipedia — Beach volleyball", url: "https://en.wikipedia.org/wiki/Beach_volleyball", publisher: "Wikipedia" },
    { label: "FIVB Official Beach Volleyball Rules", url: "https://www.fivb.com/en/beachvolleyball", publisher: "FIVB" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

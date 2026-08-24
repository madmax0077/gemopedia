import type { Sport } from "@/lib/types";

export const hurling: Sport = {
  id: "hurling",
  slug: "hurling",
  name: "Hurling",
  officialName: "Iomáint",
  aliases: ["Camán"],
  shortDescription:
    "Ireland's ancient national sport — 15 vs 15 played with a wooden hurley and a small leather sliotar, described by some as 'the fastest field game in the world'.",
  longDescription:
    "Hurling is a Gaelic sport of Celtic origin, arguably the oldest continuously-played field sport on Earth (references pre-date St Patrick). Fifteen a side use a broad-bladed ash stick called a hurley to strike a leather ball (sliotar) either on the ground or through the air. Because you can catch, carry (for four steps), balance on the stick, and strike at speed, hurling combines the pace of hockey with the aerial catching of Australian Rules football. Governed by the amateur Gaelic Athletic Association (GAA); the All-Ireland Senior Hurling Championship, held every summer, is one of the world's oldest continuous team-sport tournaments.",

  category: "traditional-cultural-sports",
  subCategory: "stick-and-ball",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  season: "summer",
  era: "ancient",
  popularity: "regional",

  countryOfOrigin: "IE",
  regionOfOrigin: "Ireland",
  estimatedOrigin: "pre-5th century (Táin Bó Cúailnge references)",

  players: { perTeam: 15, min: 13, max: 15, substitutes: 5 },
  field: {
    surfaceName: "pitch",
    dimensions: "130–145 m long × 80–90 m wide — larger than a football pitch.",
    description:
      "Rectangular grass pitch with two H-shaped goals; a goal beneath the crossbar (worth 3 points) and points above the crossbar between the two uprights (1 point each). A goalkeeper defends a small rectangle in front of the goal.",
  },
  equipment: [
    { name: "Hurley (camán)", description: "A flat-bladed ash stick 60–100 cm long — the 'boss' at the end is used to catch, strike and balance the sliotar." },
    { name: "Sliotar", description: "A hard leather-covered ball with raised ridges, 69–72 mm in diameter." },
    { name: "Helmet", description: "Mandatory since 2010 — a facemask helmet must be worn at all levels." },
  ],
  duration: {
    approximateMinutes: 70,
    structure: "Two halves of 35 minutes at senior inter-county level.",
  },
  objective:
    "Score more than the opposition by shooting the sliotar into the goal (3 points) or over the crossbar between the posts (1 point).",
  matchStructure:
    "Play is continuous. The sliotar can be struck on the ground or in the air, caught in the hand, balanced on the hurley while running, or passed by hand ('handpass'). A player carrying the sliotar must strike or handpass it after 4 steps.",

  basicRules: [
    { title: "Scoring", body: "Sliotar under the crossbar into the net = 3 points (a goal, or 'green flag'). Over the bar between the posts = 1 point ('white flag')." },
    { title: "Handling the ball", body: "You may catch the sliotar in the air. On the ground you may lift it onto the hurley with the toes or the boss — but not pick it up with the hand from a stationary position." },
    { title: "Carrying", body: "You may run with the sliotar balanced on the boss ('solo') or bounce it on the hurley. You may hold it in the hand for a maximum of four steps." },
    { title: "Frees", body: "Fouls are punished with a free from the point of the infraction." },
  ],
  advancedRules: [
    { title: "The '65'", body: "If the defence puts the sliotar behind their own end-line, a free is taken from the 65 m line — hurling's equivalent of a corner kick." },
    { title: "Handpass goal", body: "A goal cannot be scored directly from a handpass — the ball must be struck by the hurley." },
    { title: "Advantage", body: "The referee may play advantage rather than blowing for a foul." },
  ],
  scoring: {
    summary: "Scores are written 'goals-points' — e.g. 2-15 means 2 goals + 15 points = 21 aggregate.",
    breakdown: [
      { action: "Goal (under the bar)", points: "3 points (worth one 'goal')" },
      { action: "Point (over the bar)", points: "1 point" },
    ],
    winCondition: "Highest aggregate at full time wins.",
  },
  penalties: [
    { title: "Yellow card", body: "Booking — repeat offences lead to a black card (sin bin) or red." },
    { title: "Black card", body: "10-minute sin bin for cynical fouls." },
    { title: "Red card", body: "Straight red for serious foul play — the team plays down a player." },
  ],
  fouls: [
    { title: "Frontal charge", body: "Shoulder-to-shoulder contact is legal; frontal charges are fouls." },
    { title: "Third-man tackle", body: "Impact on a player not contesting the sliotar is illegal." },
    { title: "Chopping / pulling on the hurley", body: "Slashing an opponent's hurley when not making a legal challenge is a foul." },
  ],
  winningConditions: ["Highest total points at full time.", "Championship ties may go to a replay or extra time (2×10 min) depending on stage."],

  positions: [
    { name: "Goalkeeper", role: "Defends the goal; often the team's long-range free-taker.", count: 1 },
    { name: "Full-back line", role: "Three defenders in front of the goal.", count: 3 },
    { name: "Half-back line", role: "Three defenders between the full-back line and midfield.", count: 3 },
    { name: "Midfielders", role: "Two — the link between defence and attack.", count: 2 },
    { name: "Half-forward line", role: "Three attackers who feed the full-forwards.", count: 3 },
    { name: "Full-forward line", role: "Three attackers close to the goal.", count: 3 },
  ],
  officiating: {
    officials: ["Referee", "2 linespeople", "4 umpires (two per goal — flag scores)", "'Hawk-Eye' video review at Croke Park & Semple Stadium"],
    summary: "The referee is the sole timekeeper. Four umpires (two behind each goal) wave a green flag for a goal and a white flag for a point.",
  },

  governingBodies: [
    { name: "Gaelic Athletic Association", acronym: "GAA", founded: 1884, headquarters: "Croke Park, Dublin, Ireland", website: "https://www.gaa.ie" },
  ],
  majorCompetitions: [
    { name: "All-Ireland Senior Hurling Championship", frequency: "annual", founded: 1887, region: "Ireland" },
    { name: "National Hurling League", frequency: "annual", founded: 1925, region: "Ireland" },
    { name: "Munster Hurling Championship", frequency: "annual", founded: 1888, region: "Ireland (Munster)" },
  ],
  countriesPlayed: ["IE", "GB", "US", "AU", "AR"],
  famousAthletes: ["Christy Ring", "DJ Carey", "Nicky Rackard", "Henry Shefflin", "TJ Reid"],
  records: [
    { title: "Most All-Ireland titles won as player", holder: "Henry Shefflin (Kilkenny)", value: "10 titles", year: 2015 },
    { title: "Highest attendance", holder: "1954 All-Ireland Final (Cork vs Wexford)", value: "84,856", year: 1954 },
  ],

  variants: ["camogie", "shinty", "hurling-on-the-green"],
  relatedSports: ["gaelic-football", "shinty", "field-hockey"],

  skills: ["hand-eye coordination", "stick control", "sprinting", "aerial catching", "spatial awareness"],

  terminology: [
    { term: "Sliotar", meaning: "The small hard leather-covered ball used in hurling." },
    { term: "Hurley", meaning: "The wooden ash stick used to strike the sliotar." },
    { term: "Solo", meaning: "Running while balancing the sliotar on the boss of the hurley." },
    { term: "Puck-out", meaning: "The goalkeeper's restart after a wide or a score." },
    { term: "65", meaning: "A free-strike from the 65 m line — awarded when the defence puts the sliotar behind their own line." },
    { term: "Camogie", meaning: "The women's version of hurling — same rules, minor size adjustments." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "What is hurling?", body: "A 15-a-side Gaelic sport played with a wooden stick and a leather ball.", anchor: "hero" },
      { title: "The pitch and goals", body: "H-shaped goals — under the bar for a goal (3 points), over the bar for a point (1).", anchor: "playing-area" },
      { title: "Scoring 'goals-points'", body: "Understand how a scoreline like 2-15 translates to 21 aggregate.", anchor: "scoring" },
      { title: "How you can move the sliotar", body: "Catch, solo, handpass or strike — with the 4-step rule.", anchor: "rules" },
    ] },
  ],
  diagrams: [
    {
      id: "hurling-goals",
      title: "Goal vs point",
      component: "hurling-goals",
      slot: "scoring",
    },
  ],
  faq: [
    { question: "Is hurling the same as camogie?", answer: "Camogie is the women's version — same core rules, slightly smaller pitch and softer sliotar." },
    { question: "How does 'goals-points' scoring work?", answer: "A goal is 3 points, and points and goals are listed separately — 2-15 means 2 goals and 15 points, or 21 aggregate." },
    { question: "How fast does the sliotar travel?", answer: "Puck-outs are regularly measured at 150 km/h — hurling is often called the fastest field game in the world." },
  ],

  sources: [
    { label: "GAA Official Guide — Playing Rules of Hurling", publisher: "Gaelic Athletic Association", url: "https://www.gaa.ie" },
    { label: "Britannica — Hurling", publisher: "Encyclopaedia Britannica", url: "https://www.britannica.com/sports/hurling" },
  ],
  lastVerified: "2026-08-20",
  confidence: "verified",
};

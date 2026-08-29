import type { Sport } from "@/lib/types";

export const gaelicHandball: Sport = {
  id: "gaelic-handball",
  slug: "gaelic-handball",
  name: "Gaelic Handball",
  officialName: "GAA Handball (Liathróid Láimhe)",
  aliases: ["Irish Handball", "Alley Handball", "Liathróid Láimhe"],
  shortDescription:
    "Ancient Irish wall-ball sport where players strike a small hard ball against a court wall with hand or glove — one of Ireland's four GAA sports; contested at the World Handball Championships every 3 years since 1964.",
  longDescription:
    "Gaelic Handball (Liathróid Láimhe) is one of the four sports governed by the Gaelic Athletic Association (GAA) in Ireland, alongside Gaelic football, hurling, and camogie. Two players (singles) or teams of two (doubles) alternate striking a small hard ball against the front wall of an enclosed alley court using their gloved hand. Codified in Ireland since at least the 15th century (mentioned in the 1527 Statutes of Galway), Gaelic handball preserves a direct link to the wider handball family that produced Basque pelota, American handball, and Filipino sipa. The GAA formalized the sport in 1884 and it is now played in four codes: 40x20 (small-alley singles/doubles), 60x30 (big-alley), one-wall (played on a single wall in urban parks — the Olympic 2028 candidate 'wallball' code), and hard-ball (using a traditional hard leather ball). World Championships are hosted every 3 years by the World Handball Council since 1964.",

  category: "ball-sports",
  subCategory: "wall-and-court hand sport (Irish)",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "winter",
  era: "medieval",
  popularity: "regional",
  countryOfOrigin: "IE",
  regionOfOrigin: "Ireland (recorded since 15th century Galway; GAA codification 1884; World Handball Council founded 1964)",
  estimatedOrigin: "Medieval Ireland (pre-1450); GAA formal code 1884; World Handball Council 1964",

  players: { perTeam: 1, min: 1, max: 2, substitutes: 0, note: "Singles (1v1) or doubles (2v2)." },
  field: {
    surfaceName: "Handball alley (40x20 ft or 60x30 ft or one-wall)",
    dimensions: "40 ft × 20 ft × 20 ft high (small alley); 60 ft × 30 ft (big alley); 34 ft × 20 ft (one-wall)",
    description: "Enclosed concrete court with painted service and short lines; front, side, and back walls in enclosed courts; single wall in one-wall variant.",
  },
  equipment: [
    { name: "Handball", description: "Small hard rubber ball (~48mm diameter, ~60g); slightly softer for beginners; 'hard-ball' code uses traditional leather core." },
    { name: "Handball gloves (2)", description: "Padded leather gloves worn on both hands to protect against ball impact." },
    { name: "Court shoes", description: "Indoor non-marking court shoes for grip on concrete." },
    { name: "Protective eyewear", description: "Highly recommended; mandatory in international events." },
  ],
  duration: { approximateMinutes: 45, structure: "Best-of-3 games; games to 21 points (40x20) or 15 points (60x30, one-wall); must win by 2 (cap 25/17)." },
  objective: "Strike ball to front wall on your turn such that opponent cannot legally return it before it bounces twice on the floor.",
  matchStructure: "Best-of-3 games; games to 21 pts (40x20) or 15 pts (60x30/one-wall); must win by 2, cap at 25/17.",

  basicRules: [
    { title: "Ball must hit front wall", body: "Every strike must reach the front wall (on the fly or off a side wall) before bouncing on the floor." },
    { title: "One bounce return", body: "Opponent must return the ball after no more than one bounce on the floor." },
    { title: "Hand only", body: "Only gloved hand (fist, open palm, back of hand) may strike the ball — no other body part." },
    { title: "Server retains service while winning", body: "Only server scores (traditional); modern rally scoring variants also used." },
    { title: "Service must clear short line", body: "Serve must hit front wall and bounce beyond the short line without hitting side wall first." },
  ],
  advancedRules: [
    { title: "Kill shot", body: "Ball struck low on front wall so it dies immediately after bouncing — un-returnable winner." },
    { title: "Fly kill", body: "Ball struck on the fly (before bounce) as an offensive winner — advanced technique." },
    { title: "Hinder", body: "Point replayed if server or receiver's swing was obstructed by opponent." },
    { title: "Screen serve", body: "Serve blocking opponent's view = illegal, re-serve or point loss." },
    { title: "Doubles rotation", body: "In doubles, either partner may return; front court and back court divide coverage." },
  ],
  scoring: {
    summary: "Point-per-rally (or point-only-on-serve, traditional); games to 21 or 15 depending on court size.",
    winCondition: "Best-of-3 games. Games to 21 (40x20) or 15 (60x30, one-wall); must win by 2.",
    breakdown: [
      { action: "Rally won on own serve", points: "1" },
      { action: "Rally won on opponent's serve", points: "1 (rally scoring) or side-out (traditional)" },
    ],
  },
  penalties: [
    { title: "Fault (illegal serve)", body: "Illegal serve = re-serve; two consecutive illegal serves = side-out." },
    { title: "Hinder violation", body: "Deliberate hinder = point loss." },
    { title: "Warning + red card", body: "For unsportsmanlike conduct; ejection possible in repeat cases." },
  ],

  positions: [
    { name: "Singles player", role: "Covers entire alley alone.", count: 1 },
    { name: "Doubles front-court", role: "Handles balls near front wall + short line; often left-hand-dominant partner.", count: 1 },
    { name: "Doubles back-court", role: "Handles deep returns + backwall play; often right-hand-dominant partner.", count: 1 },
  ],
  officiating: {
    officials: ["Referee (1)", "Line judges (2)", "Scorekeeper"],
    summary: "Referee stands at back of court; line judges call in/out; scorekeeper on side.",
  },

  governingBodies: [
    { name: "GAA Handball (Ireland)", founded: 1884, headquarters: "Croke Park, Dublin, Ireland", website: "https://www.gaahandball.ie" },
    { name: "World Handball Council (WHC)", founded: 1964, headquarters: "Dublin, Ireland" },
    { name: "USHA (United States Handball Association)", founded: 1951, headquarters: "Tucson, USA" },
  ],
  majorCompetitions: [
    { name: "World Handball Championships (WHC)", frequency: "triennial", founded: 1964, region: "worldwide" },
    { name: "All-Ireland Handball Championships (GAA)", frequency: "annual", founded: 1925, region: "Ireland (four codes)" },
    { name: "USHA National 4-Wall Championships", frequency: "annual", founded: 1951, region: "USA" },
    { name: "European Handball Championships", frequency: "biennial", founded: 2003, region: "Europe" },
  ],
  countriesPlayed: ["IE", "US", "CA", "GB", "AU", "MX", "ES", "IT", "DE", "NL", "PH", "AR"],
  famousAthletes: [
    "Paul Brady (Ireland — 6× World Champion 40x20; considered greatest ever)",
    "Michael 'Ducksy' Walsh (Ireland — 12× All-Ireland Champion)",
    "Killian Carroll (Ireland — multiple World + All-Ireland titles)",
    "Fiona Shannon (Ireland — women's All-Ireland + World Champion)",
    "David Chapman (USA — multiple USHA + WHC titles)",
    "Naty Alvarado Jr. (USA — dominant American 4-wall player)",
  ],
  records: [
    { title: "Most 40x20 World Championships (open)", holder: "Paul Brady (Ireland)", value: "6 titles (2003, 2006, 2009, 2012, 2015, 2018)", year: 2018 },
    { title: "Most All-Ireland Senior 40x20 titles", holder: "Michael 'Ducksy' Walsh (Ireland)", value: "12 titles 1988-2001", year: 2001 },
    { title: "Oldest continuously played wall-ball sport", holder: "Gaelic Handball", value: "Referenced in Statutes of Galway 1527; earliest court remnants 16th century", year: 1527 },
  ],

  variants: ["40x20-small-alley-standard", "60x30-big-alley-traditional-irish", "one-wall-outdoor-urban-wallball", "hard-ball-traditional-leather-ball", "juvenile-mini-alley"],
  relatedSports: ["basque-pelota", "american-handball", "wallball", "frontenis", "fives"],

  skills: ["ambidextrous striking (both hands equally strong)", "wall-angle geometry reading", "kill-shot low placement", "explosive lateral footwork", "serve variety (drive/lob/reverse)", "hand-eye tracking of small hard ball"],
  strategies: [
    { title: "Serve to opponent's weak hand", body: "Nearly all beginners have a weak hand — attack it relentlessly with drive serves." },
    { title: "Own the front-court in doubles", body: "Front-court partner cuts off short returns for winners; back-court partner drives deep." },
    { title: "Kill shots as finishers", body: "Low, hard shots to the base of the front wall die immediately after bouncing — the sport's premier winner." },
    { title: "Vary serve type", body: "Alternate hard drives, lobs, and reverse serves to break opponent's rhythm." },
  ],

  terminology: [
    { term: "Alley", meaning: "The enclosed handball court (40x20 or 60x30)." },
    { term: "Kill", meaning: "Shot low on front wall that dies after bouncing — unreturnable." },
    { term: "Ace", meaning: "Serve winner — opponent cannot touch return." },
    { term: "Short line", meaning: "Line 20 ft from front wall; serve must bounce beyond it." },
    { term: "Hinder", meaning: "Interference where point is replayed." },
    { term: "Side-out", meaning: "Loss of serve to opponent (traditional scoring)." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Find a GAA handball alley", body: "Ireland has 200+ alleys; USA (YMCA + JCC + USHA), Canada, Australia, and UK also have facilities." },
      { title: "Learn ambidextrous striking early", body: "Weak-hand development is the fastest way to improve; drill wall-bounce with weak hand daily." },
      { title: "Wear gloves + eye protection from day 1", body: "Hard rubber ball causes bruises and eye injuries; safety kit is non-negotiable." },
    ]},
    { level: "advanced", steps: [
      { title: "GAA All-Ireland Championships (Ireland)", body: "Contest county → provincial → All-Ireland final at Croke Park; annual glory event." },
      { title: "World Handball Championships (triennial)", body: "Represent nation at WHC; Ireland + USA + Canada dominant." },
      { title: "Compete in USHA / Canadian pro tour", body: "Cash-prize pro tour on 4-wall in North America." },
    ]},
  ],

  faq: [
    { question: "How is Gaelic handball different from Olympic handball?", answer: "They are entirely different sports. Olympic (team) handball is a 7v7 court sport with a goal, like a mix of basketball and soccer. Gaelic handball is a wall-and-ball sport where 1-2 players strike a hard ball against a wall with gloved hand. Gaelic handball is closer to squash, racquetball, or Basque pelota." },
    { question: "Is Gaelic handball played outside Ireland?", answer: "Yes — significant scenes exist in USA (USHA governs American 4-wall handball, which is the same sport under a different name), Canada, UK, Australia, Mexico, Philippines, and Spain. The World Handball Council unites these federations for triennial World Championships." },
    { question: "Which code should a beginner start with?", answer: "40x20 (small alley) is the most common international competition code and is played in every GAA club and USHA facility. One-wall handball is growing fastest in urban parks and is a candidate for 2028 LA Olympics inclusion under the 'wallball' banner." },
  ],

  wikipediaTitle: "Gaelic handball",
  sources: [
    { label: "GAA Handball", url: "https://www.gaahandball.ie", publisher: "GAA Handball" },
    { label: "Wikipedia — Gaelic handball", url: "https://en.wikipedia.org/wiki/Gaelic_handball", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const chinese8Ball: Sport = {
  id: "chinese-8-ball",
  slug: "chinese-8-ball",
  name: "Chinese 8-Ball",
  officialName: "Chinese 8-Ball (WPA / CBSA)",
  aliases: ["Chinese Eight Ball", "Heyball (黑八)", "China 8"],
  shortDescription:
    "Hybrid cue sport combining 8-ball rules with snooker-style pockets — China's dominant pool discipline; Chinese 8-Ball World Championship (Kielce/Yushan) is world's richest pool event with $1M+ prize pools attracting Ronnie O'Sullivan + top snooker + pool pros.",
  longDescription:
    "Chinese 8-Ball (中式八球, 'Zhōngshì Bāqiú') is a hybrid cue sport that combines American 8-ball rules with snooker-style rounded pockets and a heavier ball set. Developed in China in the 1990s-2000s from a fusion of Western pool + traditional Chinese snooker culture, Chinese 8-Ball has exploded in popularity: 100M+ Chinese players + national federation (CBSA), and the Chinese 8-Ball World Championship (Yushan Open, held annually since 2015) offers $1M+ total prize pool — the largest in the pool world. The event famously attracts top American 9-ball pros (Shane Van Boening, Fedor Gorst), snooker legends (Ronnie O'Sullivan appeared 2019), and Chinese national heroes (Ding Junhui, Yang Fan). Rules: same 15-ball 8-ball structure as American 8-ball (7 solids, 7 stripes, 1 8-ball, 1 cue), but pockets are rounded snooker-style (harder to make) and balls are slightly larger + heavier. Match format: race-to-N frames (typically race-to-11 in majors).",

  category: "precision-sports",
  subCategory: "cue sport (8-ball with snooker pockets)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "CN",
  regionOfOrigin: "China (developed 1990s-2000s from Western 8-ball + Chinese snooker culture); CBSA + Yushan International Cup 2015+",
  estimatedOrigin: "1990s-2000s China; standardized by CBSA (Chinese Billiards & Snooker Association); Yushan International Cup launched 2015",

  players: { min: 2, max: 2, note: "1v1 competitive; doubles occasionally in exhibition." },
  field: {
    surfaceName: "Chinese 8-Ball table (9 ft, snooker-style pockets)",
    dimensions: "2.85m × 1.42m playing surface; snooker-style rounded pockets (harder than American pool)",
    description: "9-foot table with rounded pockets; identical playing area to American 9-ball but pocket geometry harder — creates snooker-like precision demand.",
  },
  equipment: [
    { name: "16 balls (7 solids, 7 stripes, 1 8-ball, 1 cue)", description: "Slightly heavier than American pool balls; 57.2mm dia." },
    { name: "Cue stick", description: "Standard pool cue; some players use snooker cues (thinner tip) for extra precision." },
    { name: "Chalk", description: "Applied to cue tip." },
    { name: "Bridge / rest", description: "For long shots." },
  ],
  duration: { approximateMinutes: 120, structure: "Race-to-N frames format — typically race-to-11 in majors, race-to-13 in semis/finals. Total match 2-4 hours." },
  objective: "Pot all 7 of your assigned suit (solids or stripes) then legally pot the 8-ball to win frame.",
  matchStructure: "Best-of-series (race-to-N frames). Each frame: break, assign suits, alternate shots on miss, first to clear suit + pot 8-ball wins frame.",

  basicRules: [
    { title: "Break shot", body: "Cue ball placed in kitchen; break scatters 15 racked balls (1-ball at apex; 8-ball in center; alternate solids/stripes)." },
    { title: "Assign suits by first pot", body: "First ball legally potted after break assigns suits — solid or stripe stays with player." },
    { title: "Continue while scoring", body: "Player continues while legally potting; miss = opponent's turn." },
    { title: "Legal shot required", body: "Must contact own suit first + drive a ball to pocket or cushion after contact." },
    { title: "8-ball last", body: "Once suit cleared, call pocket for 8-ball; wrong pocket or foul on 8-ball = loss of game." },
  ],
  advancedRules: [
    { title: "Snooker-style pocket precision", body: "Rounded pockets require centered pot; a ball hitting jaw of pocket often rattles out." },
    { title: "Push-out (following break, some formats)", body: "Player following break may push cue ball anywhere on table (once); opponent chooses to accept or hand back." },
    { title: "Foul + ball-in-hand", body: "Foul gives opponent ball-in-hand — place cue ball anywhere on table for next shot." },
    { title: "Safety play", body: "Leaving opponent snookered (no direct shot on own suit) is legitimate strategy." },
    { title: "Combination + bank shots allowed", body: "Non-standard pots via combinations / banks legal as long as own suit contacted first." },
  ],
  scoring: {
    summary: "Frame-per-win. Best-of-N frames per match.",
    winCondition: "Win required frame count in race-to-N format (11, 13, 17 for majors).",
    breakdown: [
      { action: "Frame won (all suit potted + 8-ball called + potted)", points: "1 frame" },
      { action: "Opponent foul on 8-ball", points: "1 frame (auto-win)" },
      { action: "Break-and-run (rare)", points: "1 frame (impressive)" },
    ],
  },
  penalties: [
    { title: "Foul (ball-in-hand to opponent)", body: "Miscue, no contact, wrong-suit-first, cue ball scratched." },
    { title: "8-ball early pot", body: "Loss of frame." },
    { title: "8-ball wrong pocket", body: "Loss of frame." },
    { title: "Slow play (tournament)", body: "Shot clock enforced (30-45 sec) at major events." },
  ],

  positions: [
    { name: "Player 1", role: "Alternates with Player 2; each frame starts with break by winner of lag or previous frame loser.", count: 1 },
    { name: "Player 2", role: "Same as Player 1.", count: 1 },
  ],
  officiating: {
    officials: ["Referee (1)", "Scorekeeper", "Shot clock operator (majors)"],
    summary: "Single referee at televised majors; shot clock operator supports at Yushan International Cup.",
  },

  governingBodies: [
    { name: "Chinese Billiards & Snooker Association (CBSA)", founded: 1986, headquarters: "Beijing, China" },
    { name: "World Pool-Billiard Association (WPA — sanctions Chinese 8-Ball World)", founded: 1987, headquarters: "Lausanne, Switzerland" },
    { name: "Chinese Ministry of General Administration of Sport (national body)", founded: 1952, headquarters: "Beijing, China" },
  ],
  majorCompetitions: [
    { name: "Chinese 8-Ball World Championship (Yushan International Cup)", frequency: "annual", founded: 2015, region: "Yushan / Kielce (rotating with pool international)" },
    { name: "China National Chinese 8-Ball Championship (CBSA)", frequency: "annual", founded: 2000, region: "China (Beijing / rotating provinces)" },
    { name: "Chinese 8-Ball Masters (Joy Cup)", frequency: "annual", founded: 2014, region: "China" },
  ],
  countriesPlayed: ["CN", "GB", "US", "TW", "MY", "SG", "TH", "PH", "AU", "PL", "DE", "PK"],
  famousAthletes: [
    "Yang Fan (China — multiple Chinese 8-Ball World Champion; national hero)",
    "Zheng Yubo (China — CBSA Grand Prix multi-champion)",
    "Ronnie O'Sullivan (England — snooker GOAT; competed at Yushan 2019, drew massive attention)",
    "Shane Van Boening (USA — 9-ball star; Yushan competitor)",
    "Fedor Gorst (Russia/USA — 9-ball champion; Chinese 8-Ball world quarter-finalist)",
    "Ding Junhui (China — snooker star; competes recreationally in Chinese 8-Ball)",
    "Kaci Tinsley (USA — women's competitor)",
  ],
  records: [
    { title: "Largest prize pool in pool history", holder: "Chinese 8-Ball World Championship Yushan International Cup", value: "$1M+ total prize pool (2018+); largest in pool globally", year: 2019 },
    { title: "Estimated Chinese players", holder: "Chinese 8-Ball in China", value: "100M+ Chinese players; largest single-sport cue-sport population in the world", year: 2023 },
    { title: "Highest broadcast viewership (any pool event)", holder: "Yushan International Cup", value: "50M+ viewers on Chinese state television; larger than any other pool tournament worldwide", year: 2019 },
  ],

  variants: ["chinese-8-ball-standard", "chinese-8-ball-doubles-exhibition", "9-ft-table-tournament-standard", "9-ball-chinese-hybrid-experimental"],
  relatedSports: ["american-8-ball", "9-ball", "snooker", "english-billiards", "russian-pyramid"],

  skills: ["snooker-style precision potting (rounded pockets)", "position play (cue ball control for next shot)", "safety play (leaving opponent snookered)", "break shot power + spread", "combination + bank shot calculation", "mental endurance over race-to-13 matches"],
  strategies: [
    { title: "Power break with position", body: "Standard break aims to pot 1-2 balls + spread rack; over-power breaks scatter without pots." },
    { title: "Suit selection", body: "After break-scatter, choose suit with better runnable pattern + fewer clusters." },
    { title: "Position play emphasis", body: "Snooker-style pockets punish poor cue-ball position; every pot considers next 2-3 shots." },
    { title: "Safety when in trouble", body: "If suit is blocked by clusters, play safe — hide cue ball behind own suit, force opponent difficult next shot." },
    { title: "8-ball approach", body: "Save easy 8-ball pocket for last suit clearance; avoid painting yourself into corner." },
  ],

  terminology: [
    { term: "Rack", meaning: "Triangle of 15 balls set up at foot spot for break." },
    { term: "Break", meaning: "Opening scattering shot of the frame." },
    { term: "Safety", meaning: "Defensive shot leaving opponent no direct shot." },
    { term: "Snookered", meaning: "No direct shot on own suit (blocked by opponent's balls)." },
    { term: "Ball-in-hand", meaning: "After foul, opponent may place cue ball anywhere." },
    { term: "Kitchen", meaning: "Area behind head string where cue ball starts break." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn on a snooker table if possible", body: "Rounded pockets teach precision; American pool tables have wider pockets that don't punish poor position." },
      { title: "Play American 8-ball rules first", body: "Chinese 8-Ball rules are identical to American 8-ball except pocket geometry — learn 8-ball fundamentals first." },
      { title: "Practice position play drills", body: "Practice 'stop shot' + 'follow' + 'draw' cue-ball control drills 30 min/day for 3 months." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete in CBSA regional Chinese championships", body: "China's regional pyramid feeds into national championship + Yushan qualifier." },
      { title: "Qualify for Yushan International Cup Chinese 8-Ball World Championship", body: "Annual world championship; open qualifiers for non-Chinese international players." },
      { title: "Chinese 8-Ball Masters Grand Prix", body: "CBSA-run tour with cash prize events across major Chinese cities." },
    ]},
  ],

  faq: [
    { question: "How is Chinese 8-Ball different from American 8-ball?", answer: "Rules are essentially identical to American 8-ball, but the table has snooker-style rounded pockets (much harder to pot into) and slightly heavier + larger balls. This creates a snooker-like precision demand — pockets are far less forgiving than American pool tables. As a result, top players are often snooker crossover players (Ronnie O'Sullivan) as well as pool players." },
    { question: "Why is Chinese 8-Ball so lucrative?", answer: "Chinese state investment in the sport + CBSA + massive Chinese amateur base (100M+ players) means major sponsorship revenue + government support. The Yushan International Cup Chinese 8-Ball World Championship regularly offers $1M+ total prize pool — larger than any American pool event or snooker world championship for that matter. Broadcast on Chinese state TV reaches 50M+ viewers per event." },
    { question: "Can American 9-ball players do well at Chinese 8-Ball?", answer: "Yes — top American pros (Shane Van Boening, Fedor Gorst, Skyler Woodward, Corey Deuel) regularly compete at Yushan and have won matches, but haven't yet won the world championship. Their power breaks + potting are strong but the snooker-style pockets require adaptation. Snooker crossovers (Ronnie O'Sullivan) have also struggled somewhat because Chinese 8-Ball requires break shot power different from snooker." },
  ],

  wikipediaTitle: "Chinese eight-ball",
  sources: [
    { label: "CBSA (Chinese Billiards & Snooker Association)", url: "http://www.cbsa.com.cn", publisher: "CBSA" },
    { label: "Wikipedia — Chinese eight-ball", url: "https://en.wikipedia.org/wiki/Chinese_eight-ball", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const baseball5: Sport = {
  id: "baseball5",
  slug: "baseball5",
  name: "Baseball5",
  officialName: "Baseball5 (WBSC)",
  aliases: ["B5", "Street Baseball"],
  shortDescription:
    "Fast urban 5-a-side baseball/softball variant with no bats, gloves, or pitchers — batter strikes a rubber ball with bare hand; created by WBSC in 2017 for accessibility; debut at Youth Olympic Games Dakar 2026.",
  longDescription:
    "Baseball5 is a modern street-baseball variant created by the World Baseball Softball Confederation (WBSC) in 2017 to expand baseball participation globally. Rules strip down traditional baseball: 5-a-side, no bats (batter strikes rubber ball with bare hand), no gloves, no pitchers (batter self-tosses or hits off a pitching stand), 21×21 m playing area, 5 innings. Games last 20-30 minutes making it ideal for urban + school + community play. Baseball5 is WBSC's flagship growth product — targeting youth participation in countries without traditional baseball infrastructure. Recognized by IOC; debut at Dakar 2026 Youth Olympic Games. First World Cup held 2022 (Mexico City); Cuba won inaugural title. WBSC has federated 100+ nations for Baseball5.",

  category: "ball-sports",
  subCategory: "baseball/softball variant — hand-batting street game",
  sportType: "team",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "SW",
  regionOfOrigin: "Created by World Baseball Softball Confederation (WBSC, Lausanne HQ) 2017; global rollout via national federations",
  estimatedOrigin: "Created 2017 by WBSC; first World Cup Mexico City 2022; Youth Olympic debut Dakar 2026",

  players: { perTeam: 5, min: 5, max: 5, substitutes: 5, note: "5-a-side; 10-person roster; mixed-gender permitted." },
  field: {
    surfaceName: "Square playing area — hard surface or dirt",
    dimensions: "21m × 21m playing area (approximately); 4 bases at corners of 13m diamond",
    description: "Small square playing field; standardized dimensions allow urban + indoor + rooftop use. Cones + flat markers instead of permanent bases in casual play.",
  },
  equipment: [
    { name: "Rubber Baseball5 ball", description: "Slightly larger than a tennis ball; sponge-rubber compound; safe for bare-hand striking. Standard weight 155g." },
    { name: "Bare hands only", description: "No bats, no gloves. Batter strikes ball with hand; fielders catch bare-handed." },
    { name: "Team uniforms", description: "Minimal — jersey + shorts; standard sport attire." },
    { name: "Cones / bases", description: "4 bases at corners of 13m diamond; cones or flat mats for portable setup." },
  ],
  duration: { approximateMinutes: 25, structure: "5 innings × ~3-4 min per inning; total 20-30 min per game." },
  objective: "Score more runs than opposition over 5 innings by hitting ball + advancing runners around bases.",
  matchStructure: "5 innings; each team bats + fields per inning. 3 outs per half-inning. Standard baseball run scoring: batter + baserunners cross home plate = 1 run each.",

  basicRules: [
    { title: "5 vs 5", body: "5 players per side; 1 batter + baserunners + fielders." },
    { title: "No bats, gloves, pitcher", body: "Batter self-tosses ball + strikes with bare hand into fair territory." },
    { title: "3 outs per half-inning", body: "Standard baseball out mechanics: fly-out, force-out, tag-out." },
    { title: "Score by circling bases", body: "Runner crosses home plate = 1 run. Standard base-running." },
    { title: "5 innings total", body: "Compressed baseball structure; games conclude in 25-30 min." },
    { title: "Mixed-gender permitted (competition dependent)", body: "Rules do not restrict gender composition; WBSC youth events include mixed-gender divisions." },
  ],
  advancedRules: [
    { title: "Self-toss batting", body: "Batter tosses ball into air + hits with bare hand; must strike within 3 seconds of toss." },
    { title: "Force play + tag rules", body: "Standard baseball; no bunts (all hits are batted balls)." },
    { title: "Fair territory 21×21m", body: "Ball must land within 21m square boundary; foul balls = strike." },
    { title: "3 strikes = out", body: "Standard strike-out mechanics; missed swings + foul balls count as strikes." },
    { title: "Mercy rule", body: "Some events implement 15-run mercy rule after 3 innings." },
    { title: "Extra innings tie-break", body: "Runner placed on 2nd base to accelerate scoring in tie games." },
  ],
  scoring: {
    summary: "1 run per baserunner crossing home plate. Higher total after 5 innings wins.",
    winCondition: "Higher run total after 5 innings; extra innings if tied.",
    breakdown: [
      { action: "Runner crosses home plate", points: "1 run" },
      { action: "Home run (ball hit over boundary)", points: "1 + runners scored" },
      { action: "Mercy rule application", points: "Automatic win if lead exceeds 15 runs after 3 innings" },
    ],
  },
  penalties: [
    { title: "Illegal toss (over 3 sec)", body: "Strike called; batter may re-toss." },
    { title: "Runner interference", body: "Automatic out." },
    { title: "Fielder obstruction", body: "Base awarded to runner." },
    { title: "Delay of game", body: "Warning; runner returned to previous base." },
    { title: "Unsportsmanlike conduct", body: "Warning; DQ for repeated." },
  ],

  positions: [
    { name: "Batter", role: "Self-tosses + hits ball; becomes baserunner if successful.", count: 1 },
    { name: "Fielders (4)", role: "Distributed around 21×21m area; bare-handed catches.", count: 4 },
    { name: "Batter's team on-deck", role: "Waiting to bat; 5 positions in rotation.", count: 4 },
  ],
  officiating: {
    officials: ["Home umpire", "Base umpire", "Scorekeeper"],
    summary: "3-official system for competitive games; casual play uses 1 umpire.",
  },

  governingBodies: [
    { name: "World Baseball Softball Confederation (WBSC)", founded: 2013, headquarters: "Lausanne, Switzerland", website: "https://wbsc.org" },
    { name: "National baseball / softball federations (via WBSC affiliation)", founded: 2018, headquarters: "worldwide" },
  ],
  majorCompetitions: [
    { name: "Baseball5 World Cup", frequency: "biennial", founded: 2022, region: "worldwide (first Mexico City)" },
    { name: "Youth Olympic Games — Baseball5", frequency: "quadrennial", founded: 2026, region: "worldwide (Dakar 2026 debut)" },
    { name: "Baseball5 Continental Championships", frequency: "biennial", founded: 2019, region: "regional (Americas, Europe, Asia-Oceania, Africa)" },
  ],
  countriesPlayed: ["CU", "MX", "VE", "US", "TW", "JP", "KR", "IT", "ES", "FR", "CZ", "CN", "AU", "ZW", "ZA", "NG", "PH", "IN"],
  famousAthletes: [
    "Cuban Baseball5 team members — 2022 World Cup champions",
    "Mexican youth stars — hosts of 2022 World Cup",
    "Riccardo Fraccari (Italy — WBSC President, sport's promoter)",
  ],
  records: [
    { title: "First Baseball5 World Cup", holder: "Cuba", value: "Won inaugural 2022 World Cup in Mexico City", year: 2022 },
    { title: "Youth Olympic debut", holder: "IOC", value: "Baseball5 debut at Dakar 2026 Youth Olympic Games", year: 2026 },
    { title: "Rapid federation growth", holder: "WBSC", value: "100+ national federations offering Baseball5 by 2024", year: 2024 },
  ],

  variants: ["wbsc-standard-baseball5", "urban-street-baseball5", "school-modified-baseball5", "mixed-gender-baseball5"],
  relatedSports: ["baseball", "softball", "cricket", "kickball", "wiffle-ball", "pesäpallo"],

  skills: ["hand-eye coordination (bare-hand batting)", "quick base-running", "bare-handed catching + throwing", "spatial awareness (small field)", "team play + communication"],
  strategies: [
    { title: "Consistent contact over power", body: "Bare-hand batting limits power; focus on contact + placing ball in gaps." },
    { title: "Aggressive base-running", body: "Small field + fast pace rewards aggressive advancement; steal bases on ball movement." },
    { title: "Field positioning", body: "4 fielders must cover 21×21m; shift based on batter tendencies." },
    { title: "Force-out defense", body: "Small field favors force plays at 2nd + 3rd; practice quick relays." },
    { title: "Pitch selection (self-toss)", body: "Batter controls toss timing + placement; deceptive tosses can catch fielders off-guard." },
  ],

  terminology: [
    { term: "Baseball5", meaning: "The official sport name; WBSC standardized branding." },
    { term: "Self-toss", meaning: "Batter tosses ball into air + hits with bare hand." },
    { term: "WBSC", meaning: "World Baseball Softball Confederation; sport's creator + governing body." },
    { term: "Home run", meaning: "Ball hit beyond 21m boundary; automatic run." },
    { term: "Force out", meaning: "Baserunner out at base they must advance to." },
    { term: "Mercy rule", meaning: "Automatic win if lead exceeds 15 runs after 3 innings." },
    { term: "Inning", meaning: "One team's turn at bat; 5 innings per game." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn baseball fundamentals", body: "Basic base-running + fielding + batting mechanics transfer directly." },
      { title: "Join school or community league", body: "WBSC-federated leagues in 100+ countries; entry level accessible to all ages." },
      { title: "Play informal pickup games", body: "Sport designed for street/urban play; 5v5 with rubber ball on any hard surface." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at national + continental championships", body: "WBSC-federated national championships + continental championships." },
      { title: "National team selection for World Cup + Youth Olympics", body: "Open tryouts for World Cup + Dakar 2026 Youth Olympic team selection." },
    ]},
  ],

  faq: [
    { question: "What is Baseball5?", answer: "A modern street-baseball variant created by WBSC in 2017. 5-a-side, no bats/gloves/pitchers, 21×21m playing area, 5 innings, 20-30 min game length. Designed for global accessibility — playable in any small urban space with minimal equipment (just a rubber ball). Youth Olympic debut Dakar 2026." },
    { question: "Why did WBSC create Baseball5?", answer: "To grow baseball/softball participation globally. Traditional baseball requires expensive equipment + large fields + specialized skills; Baseball5 requires only a ball + open space. Targets countries without traditional baseball infrastructure. Since 2018 launch: 100+ national federations offering it." },
    { question: "Is Baseball5 in the Olympics?", answer: "Youth Olympic debut at Dakar 2026. Full Olympic inclusion not yet — WBSC pursuing for future Games. Baseball5's compact format + small facility requirements make it attractive to future Olympic hosts + IOC." },
    { question: "Who won the first Baseball5 World Cup?", answer: "Cuba won the inaugural Baseball5 World Cup in Mexico City 2022. Cuba's traditional baseball dominance transfers naturally to the compact 5-a-side format. Second World Cup planned biennial pattern." },
  ],

  wikipediaTitle: "Baseball5",
  sources: [{ label: "WBSC — Baseball5", url: "https://wbsc.org/en/baseball5", publisher: "WBSC" }, { label: "Wikipedia — Baseball5", url: "https://en.wikipedia.org/wiki/Baseball5", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

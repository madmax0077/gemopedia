import type { Sport } from "@/lib/types";

export const boxLacrosse: Sport = {
  id: "box-lacrosse",
  slug: "box-lacrosse",
  name: "Box Lacrosse",
  officialName: "Box Lacrosse (Canadian Lacrosse Association / NLL / World Lacrosse)",
  aliases: ["Boxla", "Indoor Lacrosse", "Box", "NLL Lacrosse"],
  shortDescription:
    "Indoor 6-a-side lacrosse variant played in hockey rinks — faster, more physical, and higher-scoring than field lacrosse; Canada's national summer sport (co-designated 1994); professionally organized as the National Lacrosse League (NLL).",
  longDescription:
    "Box Lacrosse is an indoor 6-a-side variant of lacrosse invented in Canada in the 1930s as a way for ice hockey rinks to generate revenue during summer months. Played in enclosed hockey rinks with boards, it is faster and more physical than field lacrosse. Canada designated box lacrosse as its official summer national sport in 1994 (co-official with ice hockey year-round). The professional National Lacrosse League (NLL, founded 1986) is North America's top pro box lacrosse league with 15 teams across US + Canada. The Mann Cup is the national championship of Canadian senior box lacrosse (est. 1910 — one of oldest continuous North American sporting trophies). World Lacrosse Box Championships held every 4 years since 2003 — Canada has won every title.",

  category: "ball-sports",
  subCategory: "lacrosse variant — indoor 6-a-side",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "summer",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "CA",
  regionOfOrigin: "Canada (Ontario + Quebec 1930s); NLL founded 1986; Canada's official summer national sport (1994)",
  estimatedOrigin: "Invented 1930s Canada for summer hockey rink use; formalized rules 1940s; NLL 1986; World Championships from 2003",

  players: { perTeam: 6, min: 6, max: 6, substitutes: 14, note: "6 per side (5 runners + goalie); NLL rosters 20." },
  field: {
    surfaceName: "Indoor hockey rink with turf/wood surface",
    dimensions: "Standard NHL rink (60m × 26m) or slightly modified; goals 4×4 feet",
    description: "Enclosed hockey rink surface — hockey boards + glass; smaller goals than field lacrosse (4×4 ft vs. 6×6 ft) placed close to end boards.",
  },
  equipment: [
    { name: "Box lacrosse stick", description: "Shorter than field stick (typical 40-46 inches); deeper pocket + tighter mesh for ball control in tight spaces." },
    { name: "Rubber lacrosse ball", description: "Standard lacrosse ball; solid rubber; harder + slower than field ball due to controlled indoor conditions." },
    { name: "Goalie equipment", description: "Massive chest + arm protection; larger stick head; specialized helmet with cage." },
    { name: "Helmet + facemask (mandatory)", description: "NLL requires full facemask; ISCA international events same." },
    { name: "Shoulder pads + elbow pads + gloves", description: "More padding than field lacrosse due to high physical contact." },
  ],
  duration: { approximateMinutes: 60, structure: "4 × 15-min quarters (NLL); international 3 × 20-min periods; overtime + shootout to resolve ties." },
  objective: "Score more goals than opposition by shooting ball into opposing net using lacrosse stick.",
  matchStructure: "Quarters/periods; 30-second shot clock forces continuous action; power plays for penalties; overtime + shootout for tied games.",

  basicRules: [
    { title: "6v6 (5 runners + goalie)", body: "6 per side; rolling substitutions." },
    { title: "30-second shot clock", body: "Attacking team must attempt shot within 30 seconds; violation = turnover." },
    { title: "Body checks legal", body: "Hip + shoulder checks legal; boarding + head hits penalized." },
    { title: "Power plays for penalties", body: "Similar to hockey; team plays short-handed during minor penalties." },
    { title: "No off-sides", body: "Unlike hockey; free flow across zones." },
    { title: "Crease violation", body: "Attackers may not enter goalie's crease; violations negate goals." },
  ],
  advancedRules: [
    { title: "Two-line pass allowed", body: "Passing across multiple lines legal (differs from hockey rules)." },
    { title: "5-on-5 shootout after overtime", body: "NLL: 3-round shootout after overtime; sudden death if tied." },
    { title: "Fighting penalties", body: "5-min major + game misconduct; less common than ice hockey but permitted with penalties." },
    { title: "Goalie may run out", body: "Goalie may leave crease to play ball; less common than field lacrosse due to indoor pace." },
    { title: "Iron Cross defensive alignment", body: "Standard defensive positioning around own goal." },
  ],
  scoring: {
    summary: "1 point per goal. Higher goal count wins.",
    winCondition: "Higher goal count; overtime + shootout resolve ties. Standard scores: 10-20 goals per team per game.",
    breakdown: [
      { action: "Regulation goal", points: "1" },
      { action: "Overtime goal", points: "1 (sudden death win)" },
      { action: "Power play goal", points: "1 (counted separately for stats)" },
      { action: "Short-handed goal", points: "1 (rare + valuable)" },
    ],
  },
  penalties: [
    { title: "Minor (2 minutes)", body: "Slashing, tripping, cross-checking, holding." },
    { title: "Major (5 minutes)", body: "Fighting, boarding, dangerous plays." },
    { title: "Misconduct (10 minutes)", body: "Unsportsmanlike conduct." },
    { title: "Match penalty / Ejection", body: "Deliberate injury attempts." },
  ],

  positions: [
    { name: "Goalie", role: "Defends 4×4 goal; larger equipment than field.", count: 1 },
    { name: "Defensemen (2)", role: "Physical + shutdown role; break-out passing.", count: 2 },
    { name: "Transition (2)", role: "Two-way players; both offense + defense.", count: 2 },
    { name: "Forwards (2)", role: "Primary scorers; work near opposing crease.", count: 2 },
  ],
  officiating: {
    officials: ["Referee", "Umpire", "Linesman", "Timekeeper", "Scorer"],
    summary: "4-5 officials per NLL/international game; video review for close goals.",
  },

  governingBodies: [
    { name: "World Lacrosse", founded: 1974, headquarters: "Colorado Springs, USA", website: "https://worldlacrosse.sport" },
    { name: "National Lacrosse League (NLL)", founded: 1986, headquarters: "Philadelphia, USA", website: "https://nll.com" },
    { name: "Canadian Lacrosse Association (CLA)", founded: 1867, headquarters: "Ottawa, Canada" },
    { name: "US Lacrosse", founded: 1998, headquarters: "Sparks, USA" },
  ],
  majorCompetitions: [
    { name: "World Lacrosse Box Championship", frequency: "quadrennial", founded: 2003, region: "worldwide" },
    { name: "NLL Championship (Champion's Cup)", frequency: "annual", founded: 1988, region: "USA + Canada" },
    { name: "Mann Cup (Canadian senior)", frequency: "annual", founded: 1910, region: "Canada" },
    { name: "Minto Cup (Canadian junior)", frequency: "annual", founded: 1937, region: "Canada" },
  ],
  countriesPlayed: ["CA", "US", "IE", "IL", "CZ", "SK", "GB", "AU", "GE", "AT"],
  famousAthletes: [
    "John Tavares (Canada — NLL all-time scoring leader; not the NHL John Tavares)",
    "Gary Gait (Canada — considered greatest field + box lacrosse player)",
    "Colin Doyle (Canada — 4× NLL MVP)",
    "Dan Dawson (Canada — long NLL career; multiple championships)",
    "Curtis Dickson (Canada — modern NLL scoring leader)",
  ],
  records: [
    { title: "Most World Lacrosse Box Championships", holder: "Canada", value: "Won every World Box Championship since 2003", year: 2023 },
    { title: "NLL all-time scoring leader", holder: "John Tavares (Canada)", value: "815 goals + 1,749 assists (20-season career)", year: 2015 },
    { title: "Mann Cup longevity", holder: "Mann Cup", value: "Contested continuously since 1910 — one of oldest North American sports trophies", year: 1910 },
  ],

  variants: ["nll-professional-box-lacrosse", "senior-box-mann-cup", "junior-a-minto-cup", "international-6v6-world-lacrosse", "box-lacrosse-indoor-recreational"],
  relatedSports: ["field-lacrosse", "roller-hockey", "ice-hockey", "traditional-lacrosse", "sixes-lacrosse"],

  skills: ["tight-space stick handling", "physical body-checking", "quick release shots", "goalie reactions (small goal)", "system defense (indoor packs)", "conditioning (30-sec shot clock relentless)"],
  strategies: [
    { title: "5-on-5 possession", body: "Cycle ball around perimeter; wait for defensive breakdown then attack crease." },
    { title: "Power play efficiency", body: "5v4 opportunities are decisive; box teams practice set plays extensively." },
    { title: "Physical intimidation", body: "Early body checks establish physical tone; disrupts opposing rhythm." },
    { title: "Fast breaks off turnovers", body: "Convert defensive stops to instant offense; 30-sec clock rewards transition." },
    { title: "Crease attacks", body: "Attackers try to get open around 4×4 goal; small target requires precision." },
  ],

  terminology: [
    { term: "Box", meaning: "The rink itself; also term for the sport." },
    { term: "NLL", meaning: "National Lacrosse League; top pro box lacrosse." },
    { term: "Mann Cup", meaning: "Canadian senior box lacrosse championship (since 1910)." },
    { term: "Minto Cup", meaning: "Canadian Junior A championship (since 1937)." },
    { term: "Crease", meaning: "Semicircle around goal; attackers may not enter." },
    { term: "Shot clock", meaning: "30 seconds to attempt shot; forces action." },
    { term: "Iron Cross", meaning: "Defensive alignment around own goal." },
    { term: "Off-ball movement", meaning: "Players without ball creating scoring positions." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play field lacrosse first", body: "Field lacrosse fundamentals transfer to box; smaller learning curve." },
      { title: "Join box league in Canada or Northeast US", body: "CLA-affiliated leagues in every Canadian province + Northeast US programs." },
      { title: "Buy box-specific stick + equipment", body: "Shorter stick + deeper pocket + more padding than field lacrosse." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at CLA senior level", body: "Progress through Junior A → Senior box lacrosse; Mann Cup is pinnacle." },
      { title: "NLL Draft eligibility", body: "College field lacrosse + Junior A box players eligible; annual draft process." },
      { title: "National team tryouts", body: "Team Canada + Team USA tryouts before World Box Championships." },
    ]},
  ],

  faq: [
    { question: "How is box lacrosse different from field lacrosse?", answer: "Box: 6v6 indoors on hockey rink surface with smaller 4×4 goals; higher physical contact; 30-sec shot clock; faster pace. Field: 10v10 outdoors on 110×60 yd field with 6×6 goals; more finesse-focused; longer possessions. Box is Canada's summer national sport; field is US-dominant." },
    { question: "Is box lacrosse Olympic?", answer: "No. Field lacrosse Sixes will debut at LA 2028 Olympics; box lacrosse not currently pursued. Box has its own World Championships every 4 years (all won by Canada)." },
    { question: "Who is the greatest box lacrosse player?", answer: "Gary Gait (Canada) — considered greatest ever across both field + box. John Tavares (Canada, not NHL player) — NLL all-time scoring leader with 815 goals + 1,749 assists across 20 seasons." },
    { question: "What is the NLL?", answer: "National Lacrosse League — top professional box lacrosse league in North America. 15 teams across US + Canada; season December-June. Playoffs conclude with Champion's Cup. Founded 1986; typical arena attendance 8,000-15,000." },
  ],

  wikipediaTitle: "Box lacrosse",
  sources: [{ label: "NLL", url: "https://nll.com", publisher: "NLL" }, { label: "Wikipedia — Box lacrosse", url: "https://en.wikipedia.org/wiki/Box_lacrosse", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

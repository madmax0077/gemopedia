import type { Sport } from "@/lib/types";

export const ballHockey: Sport = {
  id: "ball-hockey",
  slug: "ball-hockey",
  name: "Ball Hockey",
  officialName: "Ball Hockey (International Street & Ball Hockey Federation)",
  aliases: ["Dek Hockey", "Street Hockey", "Road Hockey"],
  shortDescription:
    "Indoor / outdoor stick-and-ball sport played on a hard surface with a light ball instead of a puck — Canada's second-largest hockey discipline; contested at ISBHF World Championships since 1996.",
  longDescription:
    "Ball Hockey (Dek Hockey in Quebec, Street Hockey when played on roads) is a variant of ice hockey played on a hard surface (asphalt, concrete, sport tile) using a hollow orange ball instead of a puck. Players wear running shoes not skates. Founded formally by the ISBHF in 1993 (World Championships from 1996), the sport is Canada's second-largest hockey discipline with 500,000+ registered players. Slovakia, Czech Republic, and Canada dominate at world level. Two variants: 4-on-4 dek hockey (smaller rinks) and 5-on-5 ball hockey (full rink); games use standard hockey structure with periods, offsides, and penalties.",

  category: "ball-sports",
  subCategory: "hockey variant — hard surface + ball",
  sportType: "team",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "CA",
  regionOfOrigin: "Canada (evolved from street hockey mid-20th century); formalized 1990s via ISBHF",
  estimatedOrigin: "Canadian street hockey mid-20th century; ISBHF founded 1993; first World Championships 1996",

  players: { perTeam: 5, min: 4, max: 5, substitutes: 10, note: "4v4 dek or 5v5 ball hockey; rolling substitutions." },
  field: {
    surfaceName: "Hockey rink — hard surface (asphalt / sport tile / concrete)",
    dimensions: "60m × 30m (full); 40m × 20m (dek); ISBHF-standard rink specifications",
    description: "Enclosed rink with dasher boards; goal creases; center line + face-off dots. Surface must be smooth + non-slip.",
  },
  equipment: [
    { name: "Ball hockey stick", description: "Straight-blade composite / wood stick; blade curve regulated." },
    { name: "Orange hockey ball", description: "Hollow plastic ball; weighted for temperature ranges (cold-weather + warm-weather versions)." },
    { name: "Goalie pads + mask + blocker + catcher", description: "Similar to ice hockey goalie kit but lighter." },
    { name: "Running shoes", description: "Court-specific non-marking; no skates." },
    { name: "Helmet + facemask", description: "Mandatory in competition (ISBHF)." },
    { name: "Shin + elbow pads + gloves", description: "Standard hockey protective equipment." },
  ],
  duration: { approximateMinutes: 60, structure: "3 × 15-min periods (ISBHF); some formats 2 × 20 or 4 × 12; short intermissions." },
  objective: "Score more goals than opposition by shooting ball into opposing net using stick.",
  matchStructure: "3 periods × 15 min; face-off at center to start. Continuous play with stoppages for goals + penalties + off-sides. Tied games: overtime (3v3) then shootout.",

  basicRules: [
    { title: "5v5 (or 4v4)", body: "5 players + goalie per side (5v5); some formats 4v4." },
    { title: "Stick + ball only", body: "Ball must be played with stick; no kicking (some formats allow limited foot passes to a stick)." },
    { title: "Off-sides + icing rules", body: "Similar to ice hockey; ball may not cross opposing blue line ahead of attackers." },
    { title: "Standard penalties", body: "2-min minor, 5-min major, 10-min misconduct, ejection. Team plays short-handed during minor penalties." },
    { title: "No high-sticking", body: "Ball played above shoulder height = penalty." },
    { title: "Face-off restarts", body: "After goals + certain stoppages." },
  ],
  advancedRules: [
    { title: "Cold-weather ball rotation", body: "Balls rotated periodically to maintain optimal bounce in cold conditions." },
    { title: "Body-checking rules", body: "Some formats allow body checking; ISBHF senior men's allows; women's + youth typically prohibit." },
    { title: "Shootout format", body: "3-round alternating shootout after overtime; sudden death if tied." },
    { title: "Goalie substitution during play", body: "6th-attacker rule as in ice hockey; pulling goalie for extra skater in late-game situations." },
  ],
  scoring: {
    summary: "1 point per goal. Higher goal count wins.",
    winCondition: "Higher goal count at end of regulation; overtime + shootout resolve ties.",
    breakdown: [
      { action: "Regulation goal", points: "1" },
      { action: "Overtime goal", points: "1 (sudden death win)" },
      { action: "Shootout goal", points: "Contributes to shootout total" },
    ],
  },
  penalties: [
    { title: "Minor (2 minutes)", body: "Hooking, holding, tripping, interference, high-sticking." },
    { title: "Major (5 minutes)", body: "Fighting, boarding, dangerous plays." },
    { title: "Misconduct (10 minutes)", body: "Unsportsmanlike conduct; personal penalty." },
    { title: "Match penalty / Ejection", body: "Deliberate injury attempts, abuse of officials." },
  ],

  positions: [
    { name: "Goalie", role: "Defends net; only player who may cover ball with body.", count: 1 },
    { name: "Defensemen", role: "2 players; defensive zone coverage + break-outs.", count: 2 },
    { name: "Forwards (Center + Wings)", role: "3 attacking players; forecheck + scoring.", count: 3 },
  ],
  officiating: {
    officials: ["Referee (1-2)", "Linesmen (2)", "Timekeeper", "Scorekeeper"],
    summary: "4-6 officials per game; ISBHF international events use full crew.",
  },

  governingBodies: [
    { name: "International Street & Ball Hockey Federation (ISBHF)", founded: 1993, headquarters: "Bratislava, Slovakia", website: "https://isbhf.com" },
    { name: "Canadian Ball Hockey Association (CBHA)", founded: 1978, headquarters: "Ottawa, Canada" },
    { name: "USA Ball Hockey", founded: 1995, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "ISBHF Ball Hockey World Championships", frequency: "biennial", founded: 1996, region: "worldwide" },
    { name: "Canadian Ball Hockey Championships", frequency: "annual", founded: 1978, region: "Canada" },
    { name: "European Ball Hockey Championships", frequency: "biennial", founded: 2000, region: "Europe" },
  ],
  countriesPlayed: ["CA", "SK", "CZ", "US", "BM", "HK", "IT", "GB", "IN", "PT", "AU", "TR"],
  famousAthletes: [
    "Peter Bondra Jr. (Slovakia — multiple World Championship gold)",
    "Dominic Roussel (Canada — World Championship stars)",
    "Zuzana Tomcikova (Slovakia — women's international star)",
  ],
  records: [
    { title: "Most ISBHF World Championships (men)", holder: "Canada + Slovakia + Czechia", value: "Multiple titles each since 1996", year: 2020 },
    { title: "Largest national program", holder: "Canada", value: "500,000+ registered players (CBHA)", year: 2020 },
  ],

  variants: ["isbhf-5v5-ball-hockey", "dek-hockey-4v4", "street-hockey-informal", "ball-hockey-para-adaptive"],
  relatedSports: ["ice-hockey", "field-hockey", "roller-hockey", "floorball", "lacrosse"],

  skills: ["stickhandling on hard surfaces", "shooting accuracy + power", "positional hockey sense", "ball control (lighter than puck)", "goalie reflexes", "team system play"],
  strategies: [
    { title: "System play like ice hockey", body: "Same forechecks + neutral-zone traps + power-play formations apply." },
    { title: "Ball behavior differs from puck", body: "Ball bounces + rolls unpredictably; adapt passing + shot selection." },
    { title: "Rolling subs energy management", body: "45-60 sec shifts standard; conserve legs across periods." },
    { title: "Power play emphasis", body: "5v4 opportunities are decisive; practice set plays." },
  ],

  terminology: [
    { term: "Dek", meaning: "Sport tile surface used for indoor ball hockey; 'dek hockey' term." },
    { term: "Ball", meaning: "Hollow orange plastic sphere replacing puck." },
    { term: "ISBHF", meaning: "International Street & Ball Hockey Federation." },
    { term: "Off-side", meaning: "Attacker over blue line ahead of ball; same as ice hockey." },
    { term: "Icing", meaning: "Ball shot from own half over opposing goal line; same as ice hockey." },
    { term: "Power play", meaning: "5v4 numerical advantage from opponent penalty." },
    { term: "Face-off", meaning: "Restart with two centers contesting dropped ball." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play informal street hockey", body: "Grab a stick + ball + friends; no equipment barrier." },
      { title: "Join dek league", body: "Sport tile facilities in most Canadian + Northeast US + European cities." },
      { title: "Buy basic protective kit", body: "Helmet + shin pads + gloves + running shoes. Under $200 to start." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete in national championships", body: "CBHA + ISBHF affiliate championships across Canada, Europe, Asia." },
      { title: "National team selection", body: "Open tryouts before World Championships; qualifying via national league performance." },
    ]},
  ],

  faq: [
    { question: "How is ball hockey different from ice hockey?", answer: "Same rules structure but played on hard surface (asphalt, tile, concrete) with running shoes and a hollow orange ball instead of a puck. Slower pace but similar strategy + positioning + team system. Contact-limited in most formats; less injury risk than ice hockey." },
    { question: "Where is ball hockey most popular?", answer: "Canada (500,000+ players), Slovakia (national obsession), Czech Republic, Northeast US, Bermuda, Hong Kong. ISBHF has 30+ member nations." },
    { question: "Is ball hockey Olympic?", answer: "No. World Championships every 2 years but no Olympic pathway. Contested at World Games and regional multi-sport events." },
  ],

  wikipediaTitle: "Ball hockey",
  sources: [{ label: "ISBHF", url: "https://isbhf.com", publisher: "ISBHF" }, { label: "Wikipedia — Ball hockey", url: "https://en.wikipedia.org/wiki/Ball_hockey", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

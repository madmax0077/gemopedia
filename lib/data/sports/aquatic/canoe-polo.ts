import type { Sport } from "@/lib/types";

export const canoePolo: Sport = {
  id: "canoe-polo",
  slug: "canoe-polo",
  name: "Canoe Polo",
  officialName: "Canoe Polo (International Canoe Federation)",
  aliases: ["Kayak Polo", "K-Polo", "Water Polo Kayak"],
  shortDescription:
    "Fast 5-a-side team sport played in specialized kayaks — teams pass ball with hands or paddles + score in overhead goal; contested at ICF Canoe Polo World Championships since 1994.",
  longDescription:
    "Canoe Polo (or Kayak Polo) is a team sport where 5 paddlers per side compete in specialized short kayaks on a rectangular water court, aiming to shoot a ball into a suspended overhead goal (1×1.5m frame 2m above water). Ball is thrown with hands or hit with paddle. Physical contact allowed — 'ramming' opposing kayaks + hand-to-hand challenges are core to the sport. Emerged in UK in the 1970s from casual water polo variants; ICF adopted 1990; first Canoe Polo World Championships 1994 (Sheffield). Games: 2 × 10-min halves. Popular in UK, France, Germany, Netherlands, Australia, Italy. Not Olympic (proposed multiple times). World Championships held every 2-4 years. Legendary athletes: European club circuit + national teams (UK's Ambleside Club has multiple international champions; French clubs dominate ECA Champions Cup).",

  category: "aquatic-sports",
  subCategory: "team water sport — 5v5 in kayaks with overhead goal",
  sportType: "team",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "GB",
  regionOfOrigin: "United Kingdom (1970s emerging); ICF-adopted 1990; first Canoe Polo World Championships 1994 (Sheffield)",
  estimatedOrigin: "UK 1970s from water polo variants; ICF adopted 1990; first World Championships Sheffield 1994; quadrennial since",

  players: { perTeam: 5, min: 5, max: 5, substitutes: 3, note: "5 per side on water; 3-person bench for rolling substitutions." },
  field: {
    surfaceName: "Rectangular water court (pool or lake)",
    dimensions: "35m × 23m; 2 goals suspended 2m above water at each end (1m × 1.5m frame)",
    description: "Standardized rectangular water area; courts marked with buoys or floating lane lines. Indoor + outdoor pools both used. Deep water throughout (2m+ minimum).",
  },
  equipment: [
    { name: "Polo kayak", description: "Specialized short kayak (typically 3m long); wider than slalom kayak for stability during ramming. Rigid polyethylene." },
    { name: "Kayak paddle", description: "Double-bladed paddle; used for propulsion + shooting + defensive plays." },
    { name: "Ball (size 5 water polo ball)", description: "Waterproof ball; slightly larger + heavier than volleyball; grippy surface." },
    { name: "Helmet + face guard (mandatory)", description: "Impact protection; ICF-approved with metal face grille." },
    { name: "Life vest / floatation (mandatory)", description: "PFD; ICF-approved with impact padding." },
    { name: "Spray skirt", description: "Neoprene skirt sealing paddler in cockpit." },
    { name: "Wetsuit / rash guard", description: "Water-temperature-dependent; cold-water games require thicker suits." },
  ],
  duration: { approximateMinutes: 20, structure: "2 × 10-min halves with 3-min break; short overtimes if tied." },
  objective: "Score more goals than opposing team by throwing ball into overhead goal (with hand or paddle).",
  matchStructure: "2 halves × 10 min; kick-off from center. Continuous play; possession changes on turnover; team scoring restarts at center.",

  basicRules: [
    { title: "5 vs 5", body: "5 paddlers per side; unlimited flying substitutions from 3-person bench." },
    { title: "Ball played with hand or paddle", body: "Throw with hand; hit or lob with paddle blade; catch with hand or paddle." },
    { title: "Overhead goal (2m above water)", body: "Goal frame 1×1.5m suspended 2m above water surface; ball must fully enter goal." },
    { title: "Physical contact allowed", body: "Kayak-to-kayak ramming + hand contact permitted; dangerous contact = penalty." },
    { title: "5-second possession rule", body: "Paddler holding ball must pass or shoot within 5 seconds; violation = turnover." },
    { title: "60-second possession rule", body: "Team must attempt shot within 60 seconds; violation = turnover." },
  ],
  advancedRules: [
    { title: "5-metre penalty area (goalkeeper zone)", body: "Only defenders (1 goalkeeper equivalent) may position within 5m of own goal for extended periods." },
    { title: "Physical contact rules", body: "Hand-to-hand challenges legal; capsize attempts illegal; head hits = penalty." },
    { title: "Free throw + penalty shot", body: "Fouls result in free throw from spot; major fouls = penalty shot (from 5m mark)." },
    { title: "Player suspensions", body: "Yellow card = warning; multiple yellows = 2-minute exclusion; red = ejection." },
    { title: "Overtime + shootout", body: "Tied games: 5-min overtime; then 5-round penalty shootout." },
    { title: "Roll technique advantage", body: "Paddlers who can eskimo roll quickly after capsize = major advantage in physical play." },
  ],
  scoring: {
    summary: "1 point per goal (ball into overhead goal). Higher goal count wins.",
    winCondition: "Higher goal count at end of regulation; overtime + shootout for tied games.",
    breakdown: [
      { action: "Regulation goal", points: "1" },
      { action: "Penalty shot goal", points: "1" },
      { action: "Overtime goal", points: "1 (may end sudden death)" },
      { action: "Shootout goal", points: "Contributes to shootout total" },
    ],
  },
  penalties: [
    { title: "5-sec or 60-sec possession violation", body: "Turnover; opponent free throw." },
    { title: "Illegal contact (capsize attempt, head hits)", body: "Free throw + potential yellow card." },
    { title: "Yellow card", body: "Warning; 2 in match = 2-minute exclusion." },
    { title: "Red card", body: "Player ejected; team plays down." },
    { title: "Delay of game", body: "Turnover." },
  ],

  positions: [
    { name: "Goalkeeper", role: "Defender near own goal; may use paddle for blocking.", count: 1 },
    { name: "Defenders (2)", role: "Physical defensive presence; block attackers.", count: 2 },
    { name: "Attackers (2)", role: "Primary scorers; work near opposing goal.", count: 2 },
  ],
  officiating: {
    officials: ["2 Referees (poolside)", "Timekeeper", "Scorer", "Secretary"],
    summary: "2 referees at opposite ends of court; timekeeper + scorer + secretary complete officiating team.",
  },

  governingBodies: [
    { name: "International Canoe Federation (ICF)", founded: 1946, headquarters: "Lausanne, Switzerland", website: "https://canoeicf.com" },
    { name: "European Canoe Association (ECA)", founded: 1993, headquarters: "Serbia" },
    { name: "British Canoeing — Canoe Polo", founded: 1936, headquarters: "Nottingham, UK" },
  ],
  majorCompetitions: [
    { name: "ICF Canoe Polo World Championships", frequency: "biennial", founded: 1994, region: "worldwide" },
    { name: "ECA Canoe Polo European Championships", frequency: "biennial", founded: 1993, region: "Europe" },
    { name: "World Games (Canoe Polo)", frequency: "quadrennial", founded: 2005, region: "worldwide" },
    { name: "European Champions Cup", frequency: "annual", founded: 1990, region: "Europe (club competition)" },
    { name: "Trophée des Villes (France)", frequency: "annual", founded: 1988, region: "France" },
  ],
  countriesPlayed: ["GB", "FR", "DE", "NL", "AU", "IT", "ES", "NZ", "JP", "SG", "CZ", "PT", "IE", "US", "CA"],
  famousAthletes: [
    "European club circuit produces most stars (French Nantes Atlantique + UK Ambleside dominant)",
    "France national team — multi-time World Championship winner",
    "Australia national team — Pacific power",
    "Netherlands national women's team — multiple World Championship medals",
    "Germany national team — European Championship regular",
  ],
  records: [
    { title: "Most Canoe Polo World Championships (men)", holder: "France + Australia + Italy (tied leaders)", value: "Multiple titles each; competitive across nations", year: 2022 },
    { title: "First Canoe Polo World Championships", holder: "Sheffield UK 1994", value: "First official World Championships; biennial since", year: 1994 },
    { title: "ICF adoption year", holder: "ICF", value: "Canoe Polo formally adopted as ICF discipline 1990", year: 1990 },
    { title: "Sport growth", holder: "ICF", value: "60+ member nations by 2023", year: 2023 },
  ],

  variants: ["icf-standard-5v5-canoe-polo", "youth-canoe-polo-modified-goal-height", "recreational-3v3-in-shallow-water"],
  relatedSports: ["water-polo", "kayaking", "canoe-slalom", "sea-kayaking"],

  skills: ["kayak boat control (fast turning + acceleration)", "eskimo roll (recover from capsize)", "ball handling (hand + paddle)", "physical contact tolerance", "team system play + positioning", "cardio + explosive power"],
  strategies: [
    { title: "Fast turnover offense", body: "Small court + 5-sec possession rule reward transition attacks. Convert defensive stops to instant offense." },
    { title: "Physical intimidation", body: "Legal contact + ramming establishes physical tone. Elite teams use kayak ramming strategically." },
    { title: "Overhead goal + shot angle", body: "Ball must arc to enter overhead goal; requires practiced shot angles + lob technique." },
    { title: "Roll mastery for possession", body: "Fast roll recovery = major advantage in physical play. Elite paddlers roll in 1-2 seconds after capsize." },
    { title: "Team coordination", body: "5-person coordination critical in small court; practiced set plays + defensive rotations." },
    { title: "Bench management", body: "Rolling substitutions every 60-90 sec keep intensity high; manage energy across game." },
  ],

  terminology: [
    { term: "Canoe Polo", meaning: "Sport's official name; also 'Kayak Polo' colloquially." },
    { term: "Goal", meaning: "Overhead 1×1.5m frame suspended 2m above water at each end of court." },
    { term: "Rolling", meaning: "Eskimo roll — recovering upright from capsize without exit." },
    { term: "Ramming", meaning: "Legal boat-to-boat physical contact for positioning." },
    { term: "5-second rule", meaning: "Individual possession time limit before pass/shot." },
    { term: "60-second rule", meaning: "Team possession time limit for shot attempt." },
    { term: "5m mark", meaning: "Penalty shot distance from goal." },
    { term: "ICF", meaning: "International Canoe Federation." },
    { term: "European Champions Cup", meaning: "Annual European club competition since 1990." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn kayaking basics + eskimo roll", body: "Roll mastery essential; can't play polo effectively without reliable roll." },
      { title: "Join local canoe polo club", body: "UK + France + Germany + Netherlands + Australia have club networks; entry from age 12." },
      { title: "Learn 5v5 team fundamentals", body: "Basic positioning + passing + shot technique. Weekly training sessions build competence." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at national + European club level", body: "Elite European clubs (Nantes, Toulouse, Ambleside) recruit top athletes from national leagues." },
      { title: "National team selection", body: "Open tryouts before World Championships; national federation coaching + selection process." },
      { title: "Cross-train with other kayak disciplines", body: "Slalom + freestyle skills complement polo; some athletes multi-discipline." },
    ]},
  ],

  faq: [
    { question: "How is Canoe Polo different from Water Polo?", answer: "Water Polo: swimmers in pool; ball thrown with hand into flat goal in wall. Canoe Polo: paddlers in kayaks; ball thrown into OVERHEAD goal suspended 2m above water. Different boats, different goal, different physical dynamics. Canoe polo allows more physical contact (kayak ramming); water polo has more swimming endurance requirement. Both 5-a-side + fast-paced but distinct sports." },
    { question: "Is Canoe Polo in the Olympics?", answer: "No. ICF has proposed Olympic inclusion multiple times but IOC not accepted. Contested at World Games (multi-sport event every 4 years). World Championships every 2 years. Might see Olympic pathway in future given global growth + spectacle." },
    { question: "Where is Canoe Polo most popular?", answer: "UK (largest national program with 5,000+ registered players), France (dominant international team + club circuit), Germany, Netherlands, Australia, Italy. Sport is heavily European-based with growing Pacific + Asian presence." },
    { question: "How physical is Canoe Polo?", answer: "Very physical. Kayak-to-kayak ramming legal; hand-to-hand challenges permitted. Only capsize attempts + head hits penalized. Common injuries: shoulder + wrist sprains from ball battles; head impacts (why face guards mandatory); occasional finger dislocations. Physical + technical + tactical sport rewards multi-skilled athletes." },
    { question: "How do you shoot into an overhead goal?", answer: "Ball must arc into 1×1.5m goal suspended 2m above water. Techniques: (1) One-arm overhand throw (like water polo shot but higher arc). (2) Paddle-blade shot (hit ball with flat blade). (3) Chip shot (lofted paddle push). Ball must fully enter goal frame. Requires practiced arm strength + shot angles." },
  ],

  wikipediaTitle: "Canoe polo",
  sources: [{ label: "ICF — Canoe Polo", url: "https://canoeicf.com/disciplines/canoe-polo", publisher: "ICF" }, { label: "Wikipedia — Canoe polo", url: "https://en.wikipedia.org/wiki/Canoe_polo", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

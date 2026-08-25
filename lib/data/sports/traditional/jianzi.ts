import type { Sport } from "@/lib/types";

export const jianzi: Sport = {
  id: "jianzi",
  slug: "jianzi",
  name: "Jianzi",
  officialName: "Jianzi (毽子)",
  aliases: ["Chinese Shuttlecock Kicking", "Jian Zi", "Chapteh (Malaysia)", "Da Cau (Vietnam)"],
  shortDescription:
    "Chinese traditional sport of kicking a heavy shuttlecock (jianzi) with feet + body. Origins Han Dynasty (206 BCE-220 CE). Individual freestyle or team net games (like volleyball with feet). International Shuttlecock Federation (ISF) formed 1999. Popular in China + SE Asia + international competition.",
  longDescription:
    "Jianzi (毽子, 'small shuttlecock') is CHINESE TRADITIONAL SPORT of KICKING HEAVY SHUTTLECOCK using FEET + BODY (never hands). Origins in HAN DYNASTY (206 BCE-220 CE); ancient Chinese exercise + street game. Also popular VIETNAM (DA CAU — national sport), MALAYSIA (CHAPTEH), THAILAND, INDONESIA, SINGAPORE. JIANZI (shuttlecock) is 5-6cm feathered weight (~15g); modern rubber-based; heavier than badminton shuttlecock. FORMATS: (1) INDIVIDUAL FREESTYLE — perform tricks, catches, aerials solo (community + street). (2) CIRCLE PLAY — group passes jianzi keeping airborne. (3) NET GAMES — 2 vs 2 or 4 vs 4 across net (like volleyball); modern competitive form. TECHNIQUES: INSIDE KICK (kwaikou), OUTSIDE KICK (waikou), BEHIND-BACK KICK, HEEL KICK, HEAD PASSES, KNEE PASSES. INTERNATIONAL SHUTTLECOCK FEDERATION (ISF) founded 1999 in Beijing; formal net rules. Competitive scene VIETNAM strongest (national sport), CHINA, GERMANY (large expat + adopter community). WORLD CHAMPIONSHIP biennial. Also OLYMPIC-STYLE INVITATIONALS at Asian Games. Related to: SEPAK TAKRAW (Southeast Asian volleyball-with-feet, uses rattan ball). Considered EXCELLENT ATHLETIC + COORDINATION exercise.",
  category: "traditional-cultural-sports",
  subCategory: "traditional Chinese/SE Asian foot shuttlecock sport",
  sportType: "team",
  indoorOutdoor: "both",
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "regional",
  countryOfOrigin: "CN",
  regionOfOrigin: "China (Han Dynasty origins); spread across SE Asia",
  estimatedOrigin: "Han Dynasty China (206 BCE-220 CE); formalized as competitive sport 1930s China; International Shuttlecock Federation (ISF) 1999",
  players: { min: 1, max: 8, note: "Freestyle individual; circle 4-8 players; net game 2v2 or 4v4." },
  field: { surfaceName: "court with net (competitive) OR any open space", dimensions: "Net court: 11.88m × 6.10m (like badminton doubles); net 1.6m high", description: "Similar dimensions to badminton court; jianzi crosses net." },
  equipment: [
    { name: "Jianzi (shuttlecock)", description: "€3-15; feathers on rubber/leather weight; ~15g" },
    { name: "Athletic shoes with good grip", description: "Non-slip essential for kicking" },
    { name: "Net (competitive)", description: "1.6m high; badminton net can substitute" },
    { name: "Court markings (competitive)", description: "Badminton court works" },
  ],
  duration: { approximateMinutes: 30, structure: "Freestyle sessions 15-60 min; competitive net matches best of 3 games to 21 pts." },
  objective: "Freestyle: perform tricks / keep airborne. Net: score points by grounding jianzi in opponent court.",
  basicRules: [
    { title: "Never use hands", body: "Kick with feet or contact with body (chest, head, knee, shoulder)." },
    { title: "Net game: 2v2 or 4v4 across 1.6m net", body: "Similar to volleyball but with feet." },
    { title: "3 touches per side to return jianzi", body: "Like volleyball rule." },
    { title: "Score point when opponent fails to return", body: "Best of 3 games to 21 points." },
    { title: "Freestyle: personal tricks + community circle play", body: "Non-competitive social variant." },
  ],
  scoring: {
    summary: "Net game: 21-point rally scoring; best of 3 games. Freestyle: personal skill demonstration.",
    breakdown: [
      { action: "Ground jianzi in opponent court", points: "1 pt" },
      { action: "Opponent fault (touches ground own side, uses hands, etc.)", points: "1 pt" },
      { action: "Game to 21 pts", points: "Must win by 2" },
      { action: "Match: best of 3 games", points: "Win 2 of 3" },
    ],
    winCondition: "Best of 3 games in competitive; personal skill in freestyle.",
  },
  governingBodies: [
    { name: "International Shuttlecock Federation (ISF)", founded: 1999, headquarters: "Beijing, China", website: "https://www.federation-shuttlecock-isf.org/" },
    { name: "Vietnam Da Cau Federation", founded: 1985, headquarters: "Vietnam" },
    { name: "Chinese Jianzi Federation", founded: 1961, headquarters: "China" },
  ],
  majorCompetitions: [
    { name: "World Jianzi/Shuttlecock Championship", frequency: "biennial", founded: 2000, region: "worldwide" },
    { name: "Asian Games Jianzi (invitational)", frequency: "quadrennial", founded: 2003, region: "Asia" },
    { name: "Vietnam Da Cau National Championship", frequency: "annual", founded: 1985, region: "Vietnam" },
    { name: "European Shuttlecock Championship", frequency: "biennial", founded: 2003, region: "Europe" },
  ],
  countriesPlayed: ["CN", "VN", "MY", "TH", "ID", "SG", "DE", "FR", "HU", "US"],
  famousAthletes: [
    "Vietnamese national da cau players (regional champions)",
    "Chinese jianzi masters (community + national)",
  ],
  variants: [
    "freestyle-jianzi-individual-tricks",
    "circle-play-community-passing",
    "net-game-competitive-2v2-4v4",
    "da-cau-Vietnamese-variant-national-sport",
    "chapteh-Malaysian-variant",
    "sepak-takraw-related-rattan-ball-SE-Asian-volleyball",
  ],
  relatedSports: ["sepak-takraw", "hacky-sack", "footbag", "badminton"],
  skills: ["foot dexterity", "hand-eye coordination (foot-eye)", "spatial awareness", "flexibility"],
  strategies: [
    { title: "Master inside + outside kick before advanced tricks", body: "Foundation techniques." },
    { title: "Net game: back player controls; front attacks", body: "Similar volleyball positioning." },
    { title: "Vietnamese team style is fast + spiking-heavy", body: "Best national style to emulate." },
  ],
  terminology: [
    { term: "Jianzi (毽子)", meaning: "Chinese shuttlecock." },
    { term: "Da Cau", meaning: "Vietnamese term (national sport)." },
    { term: "Chapteh", meaning: "Malaysian term." },
    { term: "Kwaikou (內側)", meaning: "Inside kick technique." },
    { term: "Waikou (外側)", meaning: "Outside kick technique." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy basic jianzi ($5-10) — Chinese grocery stores or online", body: "Any feathered weight ~15g works." },
      { title: "Practice inside + outside kicks solo", body: "Foundation techniques." },
    ]},
    { level: "intermediate", steps: [
      { title: "Circle play with friends", body: "Community + passing skills." },
      { title: "Try net game with badminton court + net", body: "Learn competitive form." },
    ]},
    { level: "advanced", steps: [
      { title: "European Shuttlecock Championship (accessible entry)", body: "Growing scene Germany + Hungary + France." },
    ]},
  ],
  faq: [
    { question: "What is Jianzi?", answer: "CHINESE TRADITIONAL SPORT of kicking heavy shuttlecock (jianzi) using FEET + BODY (never hands). Origins Han Dynasty (206 BCE-220 CE). 3 formats: FREESTYLE (individual tricks), CIRCLE PLAY (community passing), NET GAMES (competitive 2v2/4v4 across 1.6m net). Also popular Vietnam (DA CAU — national sport), Malaysia (CHAPTEH). International Shuttlecock Federation (ISF) founded 1999 Beijing; World Championship biennial. Excellent athletic + coordination exercise." },
    { question: "How is Jianzi different from Sepak Takraw?", answer: "BOTH are SOUTHEAST ASIAN foot-volleyball games. JIANZI uses FEATHERED SHUTTLECOCK (~15g, feathered). SEPAK TAKRAW uses RATTAN BALL (larger, ~150-180g). Sepak Takraw more established internationally (Asian Games official since 1990); Jianzi still growing. Both similar rules (feet + body, no hands, over net). Sepak Takraw more spectacular acrobatic (larger ball allows aerial spikes). Jianzi more finesse (smaller shuttlecock)." },
    { question: "Is Jianzi in the Olympics?", answer: "NOT YET. Growing recognition; INTERNATIONAL SHUTTLECOCK FEDERATION seeks Olympic inclusion. Featured as DEMONSTRATION at Asian Games. WORLD CHAMPIONSHIPS biennial since 2000. Vietnam DA CAU is NATIONAL SPORT + heavily promoted. Not yet reached IOC recognition threshold. Considered candidate 10-20 year timeline for Olympic status." },
  ],
  wikipediaTitle: "Jianzi",
  sources: [
    { label: "Wikipedia — Jianzi", url: "https://en.wikipedia.org/wiki/Jianzi", publisher: "Wikipedia" },
    { label: "International Shuttlecock Federation", url: "https://www.federation-shuttlecock-isf.org/", publisher: "ISF" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};

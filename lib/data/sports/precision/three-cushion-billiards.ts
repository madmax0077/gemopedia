import type { Sport } from "@/lib/types";

export const threeCushionBilliards: Sport = {
  id: "three-cushion-billiards",
  slug: "three-cushion-billiards",
  name: "Three-Cushion Billiards",
  officialName: "Three-Cushion Billiards (Union Mondiale de Billard - UMB)",
  aliases: ["3-Cushion", "Trois-Bandes", "Carom Three-Cushion"],
  shortDescription:
    "Carom billiards discipline where cue ball must contact 3 or more rail cushions before contacting second object ball — precision + geometry mastery required; UMB World Championship annually since 1928.",
  longDescription:
    "Three-Cushion Billiards is a carom billiards discipline played on a pocket-less table with 3 balls (cue ball + 2 object balls). To score 1 point, cue ball must contact 3 or more rail cushions between striking cue ball and 2nd object ball. Table dimensions: 2.84m × 1.42m (larger than standard pool). Considered the most difficult precision sport — requires mastery of geometry, spin, speed, and cushion physics. UMB (Union Mondiale de Billard) governs since 1959; UMB World Championship annually since 1928. Belgian dominance historically: Raymond Ceulemans (Belgium — 21× World Champion; considered greatest ever); modern era: Torbjörn Blomdahl (Sweden — 11× World Champion), Frédéric Caudron (Belgium — 6× World Champion), Dick Jaspers (Netherlands — 10× World Champion), Semih Saygıner (Turkey — 6× World Champion), Marco Zanetti (Italy — 4× World Champion). Not Olympic; contested at World Games. Popular in Belgium, Netherlands, France, Turkey, Vietnam, Korea, Sweden.",

  category: "precision-sports",
  subCategory: "carom billiards — 3-cushion discipline",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "major",
  countryOfOrigin: "FR",
  regionOfOrigin: "France + Belgium (19th-century carom billiards); UMB founded 1959; UMB World Championship 1928",
  estimatedOrigin: "19th-century French + Belgian carom billiards; formalized as separate discipline early 20th century; UMB World Championship 1928",

  players: { min: 1, max: 1, note: "Individual competition; team events at some championships (3-4 person national teams)." },
  field: {
    surfaceName: "Carom billiards table (no pockets)",
    dimensions: "Match table: 2.84m × 1.42m (larger than standard pool)",
    description: "Pocket-less table; heated slate bed (typically) for consistent play; 3 balls: cue ball + 2 object balls.",
  },
  equipment: [
    { name: "Carom billiard table (pocketless)", description: "2.84m × 1.42m dimensions; heated slate bed for consistent ball behavior. Cost $10K-$30K." },
    { name: "3 balls (cue ball + 2 object balls)", description: "Standard carom balls: 61-61.5mm diameter; slightly larger than pool balls." },
    { name: "Cue stick", description: "Standard billiard cue; carom-specific tapers; length 145-150cm typical." },
    { name: "Chalk", description: "Applied to cue tip for spin + friction control." },
    { name: "Table light", description: "Overhead lighting critical for shot vision." },
  ],
  duration: { approximateMinutes: 90, structure: "Match: race to 40 points typical; games can extend 60-120 min per match." },
  objective: "Score 40 points before opponent by executing 3-cushion shots.",
  matchStructure: "Race to 40 points (most common format). Each turn: player shoots until fails to make 3-cushion shot; then opponent turns. Match may extend until fixed point total.",

  basicRules: [
    { title: "Score 1 point per 3-cushion shot", body: "Cue ball must contact 3+ rail cushions before contacting 2nd object ball." },
    { title: "Cushions must be different or same (3 minimum)", body: "3 or more cushion contacts required; can be 3 different or hit same cushion multiple times counting each." },
    { title: "Cue ball must contact both object balls", body: "Cue ball must eventually contact both object balls in the sequence." },
    { title: "Failed shot = turn ends", body: "Player fails to score → opponent's turn." },
    { title: "Race to fixed point total", body: "Match ends when player reaches 40 points (most common) or 50/60 points (some formats)." },
    { title: "Innings tracked", body: "Each turn is an inning; efficiency metric = points per inning." },
  ],
  scoring: {
    summary: "1 point per 3-cushion shot. First to fixed total (typically 40) wins.",
    winCondition: "First to reach 40 points wins.",
    breakdown: [
      { action: "3-cushion shot", points: "1 point" },
      { action: "Elite average", points: "1.5-2.5 points per inning (world-class)" },
      { action: "Match win", points: "First to 40 points (typical)" },
      { action: "World Championship match", points: "Race to 40-60 depending on stage" },
    ],
  },

  positions: [
    { name: "Player", role: "Solo competitor.", count: 1 },
    { name: "Team member (team event)", role: "1 of 3-4 in national team.", count: 4 },
    { name: "Referee", role: "Verifies 3-cushion shots + tracks score.", count: 1 },
  ],
  officiating: {
    officials: ["Referee", "Scorekeeper", "Timekeeper"],
    summary: "UMB-certified officials; referee verifies each shot; scoring recorded meticulously.",
  },

  governingBodies: [
    { name: "Union Mondiale de Billard (UMB)", founded: 1959, headquarters: "Lausanne, Switzerland", website: "https://umb-carom.org" },
    { name: "Confédération Européenne de Billard (CEB)", founded: 1954, headquarters: "Europe" },
    { name: "American Billiard Congress + Billiard Congress of America", founded: 1948, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "UMB World Championship 3-Cushion", frequency: "annual (October-November)", founded: 1928, region: "worldwide (rotating hosts)" },
    { name: "UMB World Cup 3-Cushion", frequency: "annual (multi-round series)", founded: 1986, region: "worldwide" },
    { name: "European Championship 3-Cushion", frequency: "annual", founded: 1954, region: "Europe" },
    { name: "Asian Championship 3-Cushion", frequency: "annual", founded: 2000, region: "Asia" },
    { name: "World Games (3-Cushion)", frequency: "quadrennial", founded: 1997, region: "worldwide" },
  ],
  countriesPlayed: ["BE", "NL", "SE", "FR", "TR", "IT", "VN", "KR", "JP", "DE", "AT", "DK", "MX", "US"],
  famousAthletes: [
    "Raymond Ceulemans (Belgium — 21× World Champion; considered greatest ever)",
    "Torbjörn Blomdahl (Sweden — 11× World Champion)",
    "Dick Jaspers (Netherlands — 10× World Champion)",
    "Frédéric Caudron (Belgium — 6× World Champion)",
    "Semih Saygıner (Turkey — 6× World Champion)",
    "Marco Zanetti (Italy — 4× World Champion)",
    "Kim Byung-Ho (Korea — Asian dominant + World Championship)",
    "Ma Xuan (Vietnam — World Championship contender)",
    "Torbjörn Blomdahl (Sweden — modern legend + long career)",
  ],
  records: [
    { title: "Most 3-Cushion World Championships", holder: "Raymond Ceulemans (Belgium)", value: "21× World Champion (1963-1980); unmatched record; considered greatest carom billiards player ever", year: 1980 },
    { title: "Longest World Championship dominance", holder: "Raymond Ceulemans (Belgium)", value: "17 consecutive World Championships 1963-1979", year: 1979 },
    { title: "UMB World Championship longevity", holder: "UMB", value: "Continuous since 1928; sport's peak international event", year: 2024 },
    { title: "Highest single-inning score world record", holder: "Various", value: "Historic records around 25-30 point runs in single inning", year: 2005 },
    { title: "Belgium + Netherlands + Sweden dominance", holder: "Belgium + Netherlands + Sweden + Turkey", value: "Nearly every World Championship since 1970 to one of these four nations", year: 2023 },
  ],

  variants: ["3-cushion-standard-race-to-40", "team-3-cushion-national-teams", "artistic-billiards-related-carom-discipline", "5-pin-italian-billiards-related"],
  relatedSports: ["carom-billiards", "artistic-billiards", "one-cushion-billiards", "snooker", "pool"],

  skills: ["cue ball spin + speed control", "geometry + shot visualization", "cushion physics prediction", "cue technique + stroke consistency", "mental focus over long matches"],

  terminology: [
    { term: "3-Cushion", meaning: "Carom billiards discipline requiring 3 cushion contacts." },
    { term: "Carom", meaning: "Pocket-less billiards; scoring via ball contacts." },
    { term: "UMB", meaning: "Union Mondiale de Billard; world governing body." },
    { term: "Rail", meaning: "Edge cushion of billiard table." },
    { term: "Inning", meaning: "Player's turn until failure." },
    { term: "Break", meaning: "Consecutive points scored in single inning." },
    { term: "Points per inning", meaning: "Efficiency metric; elite = 1.5-2.5." },
    { term: "Raymond Ceulemans", meaning: "Belgian legend; 21× World Champion; sport's GOAT." },
    { term: "Torbjörn Blomdahl", meaning: "Swedish; 11× World Champion; modern legend." },
  ],

  faq: [
    { question: "What is Three-Cushion Billiards?", answer: "A carom billiards discipline played on a pocket-less table with 3 balls (cue ball + 2 object balls). To score 1 point, cue ball must contact 3 or more rail cushions between striking cue ball and 2nd object ball. Considered the most difficult precision sport — requires mastery of geometry, spin, speed, and cushion physics. UMB World Championship annually since 1928." },
    { question: "How is 3-Cushion different from Pool?", answer: "Pool: pocket table; goal is to sink object balls into 6 pockets. 3-Cushion: pocket-less table; goal is to make cue ball contact 3+ rail cushions between object balls. Different tables + rules + strategy + techniques. 3-Cushion considered more difficult precision-wise; pool has broader competitive circuit." },
    { question: "Who is the greatest 3-Cushion player?", answer: "Raymond Ceulemans (Belgium) — 21× World Champion (1963-1980); unmatched record. Won 17 consecutive World Championships 1963-1979. Considered greatest carom billiards player ever. Modern: Torbjörn Blomdahl (Sweden — 11× World Champion), Dick Jaspers (Netherlands — 10× World Champion), Frédéric Caudron (Belgium — 6× World Champion)." },
    { question: "Is 3-Cushion in the Olympics?", answer: "No. Contested at World Games (quadrennial multi-sport event). Cue sports (pool, snooker, 3-cushion) have lobbied for Olympic inclusion multiple times but IOC has not accepted. 3-Cushion remains prestigious via UMB World Championship annually." },
    { question: "Where is 3-Cushion popular?", answer: "Belgium + Netherlands + Sweden (sport's dominant nations), France, Turkey, Vietnam, Korea, Italy, Japan. Belgium considered spiritual home; billiard cafés + club scene widespread. Vietnam + Korea developing strong programs." },
  ],

  wikipediaTitle: "Three-cushion billiards",
  sources: [{ label: "UMB", url: "https://umb-carom.org", publisher: "UMB" }, { label: "Wikipedia — Three-cushion billiards", url: "https://en.wikipedia.org/wiki/Three-cushion_billiards", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

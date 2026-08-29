import type { Sport } from "@/lib/types";

export const caromBilliards: Sport = {
  id: "carom-billiards",
  slug: "carom-billiards",
  name: "Carom Billiards",
  officialName: "Carom Billiards (Union Mondiale de Billard - UMB)",
  aliases: ["Carambole", "Français", "Billiards"],
  shortDescription:
    "Umbrella term for pocket-less billiards disciplines including 3-Cushion, One-Cushion, Straight Rail, Artistic Billiards, and Balkline — the historic pool sport of France, Belgium, and Central Europe; UMB governs since 1959.",
  longDescription:
    "Carom Billiards is the umbrella term for pocket-less billiards disciplines played on a heated slate table with 3 balls (cue ball + 2 object balls). Multiple sub-disciplines: (1) Three-Cushion Billiards (most popular; cue ball must hit 3+ cushions between object balls); (2) One-Cushion Billiards (cue ball must hit 1+ cushion); (3) Straight Rail (no cushion requirement — historic discipline); (4) Balkline (restrictive areas prevent monotonous shot repetition); (5) Artistic Billiards (execution of predetermined technical shots for score). Table dimensions: 2.84m × 1.42m (larger than standard pool). UMB (Union Mondiale de Billard) governs since 1959. Sport traditional to France, Belgium, Netherlands, Sweden, Turkey, Vietnam, Korea. Ranked as most technically demanding cue sport by many billiards experts. Legendary players spanning disciplines: Willie Hoppe (US — dominant 1900s-1920s), Raymond Ceulemans (Belgium — 21× 3-Cushion World Champion), Xavier Fonellosa (Belgium — 5× 3-Cushion), Walter Lindrum (Australia — snooker + billiards crossover). Not Olympic.",

  category: "precision-sports",
  subCategory: "cue sport — pocket-less billiards umbrella",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "early-modern",
  popularity: "major",
  countryOfOrigin: "FR",
  regionOfOrigin: "France + Belgium (15th-century origins); UMB founded 1959; formalized disciplines 19th-20th centuries",
  estimatedOrigin: "15th-century France; formalized modern disciplines 19th-20th centuries; UMB 1959",

  players: { min: 1, max: 1, note: "Individual competition; team events at some championships." },
  field: {
    surfaceName: "Carom billiards table (pocketless)",
    dimensions: "2.84m × 1.42m (larger than standard pool)",
    description: "Heated slate bed for consistent ball behavior; no pockets; typically felt covering. 3 balls: cue ball + 2 object balls.",
  },
  equipment: [
    { name: "Carom billiard table (pocketless)", description: "Heated slate bed 2.84m × 1.42m; consistent felt covering. Cost $10K-$30K." },
    { name: "3 balls (cue ball + 2 object balls)", description: "Standard carom balls: 61-61.5mm diameter; slightly larger than pool balls." },
    { name: "Cue stick", description: "Standard billiard cue; length 145-150cm typical." },
    { name: "Chalk", description: "Applied to cue tip for spin + friction control." },
    { name: "Table lighting", description: "Overhead lighting critical for shot vision." },
  ],
  duration: { approximateMinutes: 90, structure: "Match: race to fixed points (varies by discipline). 60-120 min per match typical." },
  objective: "Score more points than opponent by executing discipline-specific shots.",
  matchStructure: "Race to fixed point total (varies: 3-Cushion = 40; other disciplines have different totals). Player continues until failure; opponent turns.",

  basicRules: [
    { title: "Discipline-specific shot requirements", body: "3-Cushion = 3+ cushions; One-Cushion = 1+ cushion; Straight Rail = no cushion; Balkline = restrictive areas prevent monotonous shots." },
    { title: "1 point per successful shot", body: "Successful shot per discipline rules = 1 point." },
    { title: "Failed shot = turn ends", body: "Player fails → opponent's turn." },
    { title: "Race to fixed total", body: "Match ends when player reaches discipline-specific point total." },
    { title: "Cue ball + 2 object balls", body: "Standard carom setup: 3 balls including cue ball." },
  ],
  scoring: {
    summary: "1 point per successful shot per discipline rules. Race to fixed total wins.",
    winCondition: "First to reach discipline-specific point total wins.",
    breakdown: [
      { action: "Successful shot", points: "1 point" },
      { action: "Match win", points: "First to fixed total (varies by discipline)" },
      { action: "Elite match", points: "Historical achievements measured by run length + average" },
    ],
  },

  positions: [
    { name: "Player", role: "Solo competitor.", count: 1 },
    { name: "Referee", role: "Verifies successful shots + tracks score.", count: 1 },
  ],
  officiating: {
    officials: ["Referee", "Scorekeeper", "Timekeeper"],
    summary: "UMB-certified officials; referee verifies each shot per discipline rules.",
  },

  governingBodies: [
    { name: "Union Mondiale de Billard (UMB)", founded: 1959, headquarters: "Lausanne, Switzerland", website: "https://umb-carom.org" },
    { name: "Confédération Européenne de Billard (CEB)", founded: 1954, headquarters: "Europe" },
    { name: "American Billiard Congress + Billiard Congress of America", founded: 1948, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "UMB World Championship 3-Cushion", frequency: "annual", founded: 1928, region: "worldwide (3-cushion is umbrella event)" },
    { name: "UMB World Cup Series (3-Cushion)", frequency: "annual (multi-round)", founded: 1986, region: "worldwide" },
    { name: "UMB Straight Rail World Championship (historic)", frequency: "annual (declining)", founded: 1873, region: "worldwide" },
    { name: "UMB Balkline World Championship", frequency: "biennial", founded: 1903, region: "worldwide" },
    { name: "European Championship (per discipline)", frequency: "annual", founded: 1954, region: "Europe" },
    { name: "World Games (Carom)", frequency: "quadrennial", founded: 1997, region: "worldwide" },
  ],
  countriesPlayed: ["BE", "NL", "SE", "FR", "TR", "IT", "VN", "KR", "JP", "DE", "AT", "DK"],
  famousAthletes: [
    "Raymond Ceulemans (Belgium — 21× 3-Cushion World Champion; considered greatest ever carom player)",
    "Willie Hoppe (US — dominant 1900s-1920s; multi-discipline)",
    "Torbjörn Blomdahl (Sweden — 11× 3-Cushion World Champion)",
    "Dick Jaspers (Netherlands — 10× 3-Cushion World Champion)",
    "Frédéric Caudron (Belgium — 6× 3-Cushion World Champion)",
    "Semih Saygıner (Turkey — 6× 3-Cushion World Champion)",
    "Marco Zanetti (Italy — 4× 3-Cushion World Champion)",
    "Xavier Fonellosa (Belgium — 5× 3-Cushion)",
    "Walter Lindrum (Australia — snooker + billiards crossover; historic multiple discipline mastery)",
  ],
  records: [
    { title: "Most 3-Cushion World Championships", holder: "Raymond Ceulemans (Belgium)", value: "21× 3-Cushion World Champion 1963-1980; considered greatest ever carom billiards player", year: 1980 },
    { title: "Willie Hoppe's dominance", holder: "Willie Hoppe (US)", value: "Multi-discipline dominance 1906-1952; considered greatest all-time US carom player", year: 1952 },
    { title: "Carom Billiards heritage", holder: "France + Belgium", value: "Origin countries; cultural + historical center of the discipline", year: 2024 },
  ],

  variants: ["3-cushion-most-popular", "one-cushion-simpler-variant", "straight-rail-historic", "balkline-restrictive-areas", "artistic-billiards-technical-shots"],
  relatedSports: ["three-cushion-billiards", "artistic-billiards", "snooker", "pool", "russian-pyramid"],

  skills: ["cue ball spin + speed control", "geometry + shot visualization", "cushion physics prediction", "cue technique + stroke consistency", "mental focus over long matches"],

  terminology: [
    { term: "Carom", meaning: "Pocket-less billiards; scoring via ball contacts." },
    { term: "3-Cushion", meaning: "Most popular carom discipline; 3+ cushion requirement." },
    { term: "Straight Rail", meaning: "Historic carom discipline; no cushion requirement; allowed dominant repetitive shots." },
    { term: "Balkline", meaning: "Restrictive areas prevent monotonous shot repetition; modern successor to Straight Rail." },
    { term: "One-Cushion", meaning: "Simpler variant; 1+ cushion requirement." },
    { term: "Artistic Billiards", meaning: "Discipline where players execute predetermined technical shots for score." },
    { term: "UMB", meaning: "Union Mondiale de Billard; world governing body." },
    { term: "Willie Hoppe", meaning: "American; dominant multi-discipline carom player 1900s-1950s." },
    { term: "Raymond Ceulemans", meaning: "Belgian; 21× 3-Cushion World Champion; sport's GOAT." },
  ],

  faq: [
    { question: "What is Carom Billiards?", answer: "The umbrella term for pocket-less billiards disciplines played on a heated slate table with 3 balls (cue ball + 2 object balls). Multiple sub-disciplines: 3-Cushion (most popular), One-Cushion, Straight Rail (historic), Balkline, and Artistic Billiards. Traditional to France, Belgium, Netherlands, Sweden, Turkey, Vietnam, Korea." },
    { question: "How is Carom different from Pool + Snooker?", answer: "Carom: pocket-less table; goal is to make cue ball contact object balls in specific patterns (with/without cushion contact per discipline). Pool: pocket table (6 pockets); goal is to sink object balls. Snooker: pocket table with 22 balls including special-colored balls. All are cue sports but with fundamentally different tables + rules." },
    { question: "What are the sub-disciplines of Carom?", answer: "(1) Three-Cushion Billiards — most popular; 3+ cushion contacts required. (2) One-Cushion Billiards — 1+ cushion. (3) Straight Rail — historic; no cushion (allowed repetitive shots). (4) Balkline — modern successor to Straight Rail with restrictive areas. (5) Artistic Billiards — predetermined technical shots for score. All governed by UMB." },
    { question: "Who is the greatest carom billiards player?", answer: "Multiple candidates: (1) Raymond Ceulemans (Belgium) — 21× 3-Cushion World Champion 1963-1980; considered greatest ever. (2) Willie Hoppe (US) — dominant 1900s-1950s; multi-discipline mastery. (3) Torbjörn Blomdahl (Sweden) — 11× 3-Cushion World Champion. Different eras + disciplines produce different answers." },
    { question: "Is Carom Billiards in the Olympics?", answer: "No. Contested at World Games (quadrennial multi-sport event). Cue sports have lobbied for Olympic inclusion multiple times but IOC has not accepted. Carom Billiards remains prestigious via UMB World Championships." },
  ],

  wikipediaTitle: "Carom billiards",
  sources: [{ label: "UMB", url: "https://umb-carom.org", publisher: "UMB" }, { label: "Wikipedia — Carom billiards", url: "https://en.wikipedia.org/wiki/Carom_billiards", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const formula3: Sport = {
  id: "formula-3",
  slug: "formula-3",
  name: "FIA Formula 3",
  officialName: "FIA Formula 3 Championship",
  aliases: ["F3", "FIA F3", "GP3 (predecessor)"],
  shortDescription:
    "FIA single-seater open-wheel category — 3rd tier of the FIA single-seater ladder (F1 → F2 → F3) supporting Formula 1 race weekends; ~380 HP; introduced in current format 2019 (unified from GP3 + European F3).",
  longDescription:
    "FIA Formula 3 is the third tier of the FIA single-seater ladder (F1 → F2 → F3), created in 2019 by unifying the FIA Formula 3 European Championship + GP3 Series. Cars: Dallara F3 2019 chassis with 3.4L V6 380 HP Mecachrome engine + Pirelli tires. Races at 10 rounds annually alongside Formula 1 Grand Prix support races + Formula 2. Series serves as key career step from junior formulas to Formula 2 to Formula 1. Championship winners often reach F1 within 2-3 years. Legendary graduates: Robert Shwartzman, Oscar Piastri (McLaren F1 driver), Théo Pourchaire, Frederik Vesti, Prema Racing dominant team. FIA F3 has direct feeder relationship — champion typically graduates to F2 → F1.",

  category: "motor-sports",
  subCategory: "single-seater open-wheel — FIA F3 championship",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "IT",
  regionOfOrigin: "FIA-sanctioned; supports F1 Grand Prix weekends worldwide; unified 2019 from GP3 + European F3",
  estimatedOrigin: "Various F3 series historically; unified as FIA Formula 3 Championship 2019 with current spec car",

  players: { min: 1, max: 1, note: "Individual driver per car; ~30 drivers across ~10 teams." },
  field: {
    surfaceName: "F1 Grand Prix circuits (support races)",
    dimensions: "F1 tracks worldwide: 3-7 km typical; race distance 100-150 km",
    description: "Same F1 tracks as F1 races (Silverstone, Monza, Barcelona, Zandvoort, Monaco). Support races on same weekend.",
  },
  equipment: [
    { name: "Dallara F3 2019 chassis", description: "Standardized Dallara chassis; all teams use identical car. Costs $200,000-$300,000 per season for lease + engineering." },
    { name: "3.4L V6 380 HP Mecachrome engine", description: "Standardized engine; identical across all teams." },
    { name: "Pirelli tires", description: "Standardized tire supply; strategic choice each race." },
    { name: "FIA-approved safety cage + Halo", description: "Cockpit protection; Halo device introduced 2018." },
    { name: "Fireproof suit + helmet + HANS", description: "Standard motorsport safety." },
  ],
  duration: { approximateMinutes: 40, structure: "Race 1: ~35 min; Race 2: ~30 min per weekend. Season: 10 rounds." },
  objective: "Cross finish line first (position-based points); season champion = highest cumulative points across all rounds.",
  matchStructure: "Weekend: Practice (Friday) → Qualifying (Friday-Saturday) → Race 1 (Saturday, reversed-grid) → Race 2 (Sunday, straight-grid).",

  basicRules: [
    { title: "Grid position from qualifying", body: "Fastest qualifying lap = pole position for Race 2; Race 1 uses reverse-grid top 12." },
    { title: "First across finish line wins", body: "Race position at finish = points awarded per FIA scheme." },
    { title: "Mandatory pit stop (some races)", body: "Sunday feature race often requires 1 pit stop." },
    { title: "Yellow + red flags + safety car", body: "Standard motorsport safety infrastructure." },
    { title: "Points to top 10", body: "25-18-15-12-10-8-6-4-2-1 for top 10." },
  ],
  scoring: {
    summary: "Points per race based on finish position; season champion = highest cumulative points.",
    winCondition: "Season championship + race wins.",
    breakdown: [
      { action: "Race win", points: "25 pts" },
      { action: "Race 2nd", points: "18 pts" },
      { action: "Pole position", points: "2 pts" },
      { action: "Fastest lap (in top 10)", points: "1 pt" },
    ],
  },

  positions: [
    { name: "Driver", role: "Solo racer per car.", count: 1 },
    { name: "Team engineer + strategist", role: "Setup + race strategy + telemetry." },
  ],
  officiating: {
    officials: ["FIA Race Director", "Stewards (3)", "Marshals", "Timing officials"],
    summary: "FIA-certified officials; consistent with F1 + F2 officiating standards.",
  },

  governingBodies: [
    { name: "Fédération Internationale de l'Automobile (FIA)", founded: 1904, headquarters: "Paris, France", website: "https://fia.com" },
  ],
  majorCompetitions: [
    { name: "FIA Formula 3 Championship", frequency: "annual (10 rounds)", founded: 2019, region: "worldwide (F1 support)" },
  ],
  countriesPlayed: ["IT", "FR", "GB", "AU", "NL", "DE", "ES", "US", "BR", "AR", "MX", "JP", "CN"],
  famousAthletes: [
    "Oscar Piastri (Australia — 2020 FIA F3 champion; now McLaren F1 driver)",
    "Frederik Vesti (Denmark — 2022 FIA F3 champion)",
    "Théo Pourchaire (France — 2021 FIA F3 champion; F1 reserve driver)",
    "Robert Shwartzman (Israel — 2019 FIA F3 champion)",
    "Dennis Hauger (Norway — 2021 FIA F3 champion)",
  ],
  records: [
    { title: "First FIA Formula 3 Champion", holder: "Robert Shwartzman (Israel)", value: "2019 inaugural FIA F3 champion", year: 2019 },
    { title: "F3 to F1 pipeline", holder: "Various", value: "Multiple F3 champions reach F1 within 2-3 years; Oscar Piastri exemplar", year: 2022 },
    { title: "Most successful F3 team", holder: "Prema Racing", value: "Dominant team since 2019 launch; multiple Constructors' championships", year: 2023 },
  ],

  variants: ["fia-formula-3-championship", "regional-f3-series", "historic-european-f3-2005-2018"],
  relatedSports: ["formula-1", "formula-2", "formula-4", "gt-racing"],

  skills: ["single-seater open-wheel racing", "consistent lap times", "wheel-to-wheel racecraft", "physical fitness (30-40 min races with G-forces)", "media + commercial skills"],

  terminology: [
    { term: "F3", meaning: "Formula 3 — third tier of FIA single-seater ladder." },
    { term: "FIA F3", meaning: "Current FIA Formula 3 Championship (since 2019)." },
    { term: "Dallara F3 2019", meaning: "Standardized chassis used in FIA F3." },
    { term: "Feeder series", meaning: "Series feeding drivers upward to F2 + F1." },
    { term: "Reverse grid", meaning: "Race 1 grid: top 12 reversed from qualifying." },
    { term: "F1 support", meaning: "F3 races on same weekend as F1 Grand Prix." },
  ],

  faq: [
    { question: "What is FIA Formula 3?", answer: "The third tier of the FIA single-seater ladder (F1 → F2 → F3). Unified from GP3 + European F3 in 2019. Standardized Dallara chassis + Mecachrome V6 380 HP engine + Pirelli tires. 10 rounds per season worldwide alongside F1 Grand Prix support races. Serves as key career step to Formula 2 and Formula 1." },
    { question: "How is FIA F3 different from Formula 2?", answer: "F3: 380 HP Mecachrome V6 + smaller car + less downforce; entry-tier for FIA single-seater ladder. F2: 620 HP Mecachrome V6 + larger car + more downforce; direct F1 feeder. F3 champions typically progress to F2 then F1." },
    { question: "Who is the greatest F3 driver?", answer: "Multiple candidates: Oscar Piastri (Australia — 2020 champion, now McLaren F1). Robert Shwartzman (Israel — inaugural 2019 champion). Théo Pourchaire (France — 2021 champion). Dennis Hauger (Norway — 2021 champion). Series is young; alumni ranked by F1 success rate." },
    { question: "Is FIA F3 in the Olympics?", answer: "No. Motorsports as a whole not Olympic due to environmental concerns + narrow accessibility. F3 is prestigious feeder series to F1 with own championship recognition." },
  ],

  wikipediaTitle: "FIA Formula 3 Championship",
  sources: [{ label: "FIA Formula 3", url: "https://fiaformula3.com", publisher: "FIA" }, { label: "Wikipedia — FIA Formula 3", url: "https://en.wikipedia.org/wiki/FIA_Formula_3_Championship", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

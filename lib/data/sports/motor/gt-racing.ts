import type { Sport } from "@/lib/types";

export const gtRacing: Sport = {
  id: "gt-racing",
  slug: "gt-racing",
  name: "GT Racing",
  officialName: "GT Racing (SRO Motorsports Group / FIA GT / IMSA GTP-GTD)",
  aliases: ["GT", "Sports Car Racing", "GT3", "GT World Challenge"],
  shortDescription:
    "Motorsport with high-performance production-based sports cars — Ferrari 296 GT3, Porsche 911 GT3 R, Mercedes-AMG GT3, Lamborghini Huracán GT3 — competing in sprint + endurance races; iconic Le Mans, Nürburgring 24, Spa 24 hours races.",
  longDescription:
    "GT Racing is motorsport featuring high-performance sports cars derived from road models but heavily modified for racing. Categories: (1) GT3 — most popular globally; ~500-550 HP; balanced performance across manufacturers via Balance of Performance (BoP); ~30 different manufacturer models compete. (2) GTE (World Endurance Championship — being phased out 2024). (3) GT4 — junior category; ~350-400 HP. (4) GTP/LMDh (top prototype class for 24 Hours of Le Mans + IMSA WeatherTech Championship). Iconic manufacturers: Ferrari 296 GT3, Porsche 911 GT3 R, Mercedes-AMG GT3, Lamborghini Huracán GT3, McLaren 720S GT3, Aston Martin Vantage GT3, BMW M4 GT3, Audi R8 LMS. Major series: FIA World Endurance Championship (24 Hours of Le Mans headline), IMSA WeatherTech Championship (US), GT World Challenge (SRO), Nürburgring 24 Hours + Spa 24 Hours (crown jewels). Legendary drivers: Fernando Alonso (Spain — 2× Le Mans winner 2018+2019), Timo Bernhard (Germany — 2× Le Mans winner + multi-time endurance), Sébastien Loeb (France — WEC crossover), Tom Kristensen (Denmark — 9× Le Mans winner; record holder).",

  category: "motor-sports",
  subCategory: "motorsport — high-performance sports car racing",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (24 Hours of Le Mans 1923) + Italy + Germany + UK + international",
  estimatedOrigin: "24 Hours of Le Mans since 1923 (Le Mans, France); GT3 regulations 2005; IMSA GTP 1980s → GTP/LMDh 2023",

  players: { min: 1, max: 4, note: "Sprint races: 1 driver. Endurance events: 2-3 drivers per car sharing." },
  field: {
    surfaceName: "Road courses — traditional circuits + street circuits",
    dimensions: "3-14 km typical (Le Mans 13.6 km, Nürburgring Nordschleife 20.8 km); most 3-7 km",
    description: "Traditional road racing circuits (Silverstone, Spa-Francorchamps, Le Mans, Nürburgring Nordschleife) + street circuits + Daytona International Speedway (US endurance).",
  },
  equipment: [
    { name: "GT3 sports car (typical)", description: "500-550 HP racing sports car; ~1,300 kg; V8/V10/twin-turbo V6 engines. Cost $500K-$800K per car." },
    { name: "Full FIA safety cage + fire suit + helmet + HANS", description: "Standard motorsport safety equipment; roll cage, 6-point harness, fireproof suit, HANS." },
    { name: "Slick + wet tires", description: "Michelin + Pirelli specify tire ranges; strategic choice per session." },
    { name: "Fuel + refueling equipment", description: "Modern GT racing requires refueling; strategic pit timing critical." },
    { name: "Data logging + telemetry", description: "Advanced systems monitor 100+ parameters; team engineers analyze in real time." },
    { name: "Driver comms + cooling systems", description: "Radio comms + air cooling essential for hot races (Le Mans 24 hours)." },
  ],
  duration: {
    approximateMinutes: 180,
    structure: "Sprint races: 60-90 min. Long endurance: 6-24 hours. Season: 8-12 rounds depending on series.",
  },
  objective: "Complete race in minimum time (endurance) or cross finish first (sprint); season points award season champion.",
  matchStructure: "Sprint format: qualifying → race. Endurance format: qualifying → race (2-24 hours) with mandatory pit stops + driver changes. Season points across all rounds decide championship.",

  basicRules: [
    { title: "First across finish line wins", body: "Position at end of race determines points." },
    { title: "Multi-driver endurance", body: "Le Mans + Daytona + Nürburgring 24: 2-3 drivers per car sharing driving over 24 hours." },
    { title: "Pit stops mandatory (endurance)", body: "Tire changes + refueling + driver changes = strategic timing." },
    { title: "Balance of Performance (BoP)", body: "Weight/power adjustments equalize different manufacturer models in GT3." },
    { title: "Contact tolerated", body: "Legal side-by-side contact; illegal punting or dangerous driving = penalties." },
    { title: "Yellow + safety car deployments", body: "After incidents; strategy affected by full-course yellows + safety cars." },
  ],
  advancedRules: [
    { title: "Balance of Performance (BoP)", body: "SRO + FIA adjust each GT3 model's weight + power + ride height + boost to equalize competition. Reassessed periodically." },
    { title: "Driver ratings (Bronze/Silver/Gold/Platinum)", body: "FIA classifies drivers by skill; endurance races require mixed-rating teams (e.g. 1 Platinum + 2 Silver)." },
    { title: "Success handicap", body: "Winning cars carry weight/power reduction to next race (some series)." },
    { title: "Refueling regulations", body: "Refuel time limits + strategy; can't overlap tire changes." },
    { title: "24-hour driver limits", body: "Regulations on max continuous driving hours + total driver time in endurance races." },
    { title: "Full-course yellows + safety cars", body: "Bunches field; strategy shifts around timing of caution periods." },
  ],
  scoring: {
    summary: "Points per race based on finish position; season champion = highest cumulative points.",
    winCondition: "Race win + season championship. Season champion = highest cumulative points across all rounds.",
    breakdown: [
      { action: "Race win", points: "25-38 pts (varies by series)" },
      { action: "Le Mans class win", points: "38 pts (highest single-race in WEC)" },
      { action: "Pole position", points: "1-3 bonus pts" },
      { action: "Fastest lap", points: "1 bonus pt" },
      { action: "Season championship", points: "Sum of all round points" },
      { action: "Le Mans overall win", points: "Career-defining achievement" },
    ],
  },
  penalties: [
    { title: "Track limits violation", body: "Warning; multiple = time penalty." },
    { title: "Contact causing collision", body: "Time penalty (5-30 sec) if judged at fault." },
    { title: "Pit lane speed violation", body: "Drive-through penalty." },
    { title: "Illegal equipment / tech infringement", body: "DQ from event + potential season penalty." },
    { title: "Dangerous driving", body: "Race ban + fines." },
    { title: "Balance of Performance violation", body: "Cars tested pre-event + post-event; BoP breach = DQ." },
  ],

  positions: [
    { name: "Driver", role: "1 per sprint car; 2-3 per endurance car sharing.", count: 1 },
    { name: "Endurance teammate", role: "Rotating driver during 6-24 hour races.", count: 2 },
    { name: "Team engineer + strategist", role: "Race strategy + pit stops + telemetry analysis." },
    { name: "Pit crew", role: "Tire changes + refueling in <15 seconds." },
  ],
  officiating: {
    officials: ["Race Director", "Stewards (3-5)", "Marshals (per corner)", "Timing officials", "Technical scrutineer", "Medical + safety teams"],
    summary: "FIA / SRO / IMSA officials; stewards adjudicate incidents; extensive technical scrutiny + tire monitoring.",
  },

  governingBodies: [
    { name: "Fédération Internationale de l'Automobile (FIA)", founded: 1904, headquarters: "Paris, France", website: "https://fia.com" },
    { name: "SRO Motorsports Group (GT3 governance)", founded: 1992, headquarters: "Brussels, Belgium", website: "https://sro-motorsports.com" },
    { name: "International Motor Sports Association (IMSA)", founded: 1969, headquarters: "Daytona Beach, USA", website: "https://imsa.com" },
    { name: "Automobile Club de l'Ouest (ACO — Le Mans)", founded: 1906, headquarters: "Le Mans, France" },
  ],
  majorCompetitions: [
    { name: "24 Hours of Le Mans", frequency: "annual (June)", founded: 1923, region: "Le Mans, France" },
    { name: "FIA World Endurance Championship", frequency: "annual (7-8 rounds)", founded: 2012, region: "worldwide" },
    { name: "IMSA WeatherTech Championship", frequency: "annual", founded: 2014, region: "USA" },
    { name: "24 Hours of Daytona (Rolex 24)", frequency: "annual (January)", founded: 1962, region: "Daytona, USA" },
    { name: "24 Hours of Nürburgring", frequency: "annual (May-June)", founded: 1970, region: "Nürburgring, Germany" },
    { name: "24 Hours of Spa", frequency: "annual (July)", founded: 1924, region: "Spa-Francorchamps, Belgium" },
    { name: "GT World Challenge Europe / Asia / America", frequency: "annual (SRO)", founded: 2013, region: "worldwide" },
  ],
  countriesPlayed: ["FR", "DE", "IT", "GB", "US", "JP", "BE", "ES", "AU", "CH", "AT", "NL", "DK", "CA", "CN"],
  famousAthletes: [
    "Tom Kristensen (Denmark — 9× Le Mans winner; record holder)",
    "Fernando Alonso (Spain — 2× Le Mans winner 2018+2019 + F1 legend)",
    "Timo Bernhard (Germany — 2× Le Mans winner + multi-time endurance)",
    "Sébastien Loeb (France — WEC + rally crossover)",
    "Jörg Bergmeister (Germany — multi-time Porsche factory driver)",
    "Kamui Kobayashi (Japan — Le Mans winner + F1/WEC crossover)",
    "Sébastien Buemi (Switzerland — 3× Le Mans winner + Formula E champion)",
    "André Lotterer (Germany — 3× Le Mans winner + long career)",
    "Marc Lieb (Germany — 1× Le Mans winner + Porsche factory)",
    "Emanuele Pirro (Italy — 5× Le Mans winner)",
  ],
  records: [
    { title: "Most Le Mans wins", holder: "Tom Kristensen (Denmark)", value: "9× Le Mans winner (1997-2013); record; nicknamed 'Mr. Le Mans'", year: 2013 },
    { title: "Oldest continuous 24-hour race", holder: "24 Hours of Le Mans", value: "Since 1923; 100+ years continuous (only WW2 gap)", year: 2023 },
    { title: "Most WEC Manufacturers' titles", holder: "Toyota", value: "5× WEC Manufacturers' champion 2018-2022; longest streak", year: 2022 },
    { title: "GT3 regulation birth", holder: "SRO Motorsports Group", value: "GT3 category launched 2005; became world's dominant GT class", year: 2005 },
    { title: "Le Mans race distance record", holder: "Various", value: "Ferrari 499P (2023) + Audi R18 (2010s) held distance records: ~5,400 km in 24 hours = ~225 km/h average", year: 2023 },
  ],

  variants: ["gt3-global-standard", "gt4-junior-category", "gte-world-endurance-phased-out-2024", "gtp-lmdh-top-prototype-le-mans-imsa-2023", "gt-world-challenge-sro"],
  relatedSports: ["formula-1", "touring-car-racing", "rallying", "endurance-racing", "sports-car-racing"],

  skills: ["high-speed car control (200+ mph capability)", "endurance racing management (long races)", "team pit stop coordination", "consistent lap times", "physical fitness (30+ min stints)", "mental focus (2-24 hour concentration)"],
  strategies: [
    { title: "Race pace vs. qualifying pace", body: "GT racing rewards consistent race pace over qualifying peak. Tire + fuel management critical." },
    { title: "Pit stop timing", body: "Fuel + tire strategy determines endurance race winners more than raw pace. Study strategy models." },
    { title: "Driver stint length", body: "Endurance: manage stint fatigue + car wear. Elite drivers can push consistently for 2+ hours." },
    { title: "Full-course yellow gambling", body: "Timing pit stops around expected caution periods can save 30+ seconds; risk if timing wrong." },
    { title: "BoP awareness", body: "Understanding own car's Balance of Performance vs. rivals; race strategy adapts to relative strengths." },
    { title: "Driver ratings management", body: "Endurance teams optimize driver ratings; Bronze drivers do stints during safe periods." },
  ],

  terminology: [
    { term: "GT", meaning: "Grand Tourer; production-based sports car category." },
    { term: "GT3", meaning: "Global GT category since 2005; ~500-550 HP; balanced across manufacturers via BoP." },
    { term: "GT4", meaning: "Junior GT category; ~350-400 HP; entry-level." },
    { term: "GTE", meaning: "World Endurance Championship GT class (2011-2024, being phased out)." },
    { term: "GTP / LMDh", meaning: "Top prototype class for 24 Hours of Le Mans + IMSA (introduced 2023)." },
    { term: "Balance of Performance (BoP)", meaning: "Regulations equalizing different GT3 manufacturer models." },
    { term: "Driver rating", meaning: "FIA classification (Bronze/Silver/Gold/Platinum); mixed-rating teams required for endurance." },
    { term: "Success handicap", meaning: "Winning cars carry weight/power reduction next race." },
    { term: "24 Hours of Le Mans", meaning: "Iconic French endurance race; sport's most prestigious event since 1923." },
    { term: "SRO", meaning: "SRO Motorsports Group; GT3 category creator + global governance." },
    { term: "IMSA", meaning: "International Motor Sports Association; US endurance championship." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Karting + car control courses", body: "Karting for base racecraft. Advanced car control clinics build sports car foundation." },
      { title: "Track days + open-lapping days", body: "Track time in own sports car develops confidence + fitness." },
      { title: "SCCA + club racing entry-level series", body: "US: SCCA classes in sports car categories. Europe: club-level GT4 or Cup series." },
    ]},
    { level: "intermediate", steps: [
      { title: "Enter GT4 or GT3 Cup series", body: "GT4 = affordable entry ($200K-$500K annual). GT3 Cup = higher level ($500K+ annual)." },
      { title: "Build a competitive car + team", body: "GT3 team costs $1M-$3M annually for competitive campaign. Investors + sponsors essential." },
      { title: "Compete at national GT championships", body: "National GT3 championships in every major region; build ranking + reputation." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at FIA WEC / IMSA / GT World Challenge", body: "Top-tier world series; requires seat purchase or manufacturer contract." },
      { title: "Manufacturer contract (Porsche, Ferrari, Mercedes)", body: "Elite drivers become factory drivers; contracts $500K-$3M annually + full support." },
      { title: "Target 24 Hours of Le Mans", body: "Career-defining event; qualifying via WEC or invitation. Le Mans win = motor racing pantheon." },
    ]},
  ],

  faq: [
    { question: "What is GT Racing?", answer: "Motorsport featuring high-performance production-based sports cars — Ferrari 296 GT3, Porsche 911 GT3 R, Mercedes-AMG GT3, Lamborghini Huracán GT3, McLaren 720S GT3, Aston Martin Vantage GT3, BMW M4 GT3, Audi R8 LMS. Sprint races (60-90 min) + endurance races (24 Hours of Le Mans, Daytona, Nürburgring, Spa). GT3 category (since 2005) is world's dominant with 30+ manufacturer models compete via Balance of Performance." },
    { question: "What is Balance of Performance (BoP)?", answer: "Regulations equalizing different GT3 manufacturer models. SRO + FIA adjust each car's weight + power + ride height + boost pressure so that Ferrari 296 GT3 vs. Porsche 911 GT3 R vs. Mercedes-AMG GT3 have similar competitive performance. Reassessed periodically. Ensures manufacturer diversity + fair racing." },
    { question: "What is the 24 Hours of Le Mans?", answer: "The world's most prestigious motor race. Held annually in June since 1923 (with WW2 gap) in Le Mans, France on the 13.6 km Circuit de la Sarthe. 24 hours continuous racing with 2-3 driver teams sharing each car. Distance covered ~5,400 km at ~225 km/h average. Categories: LMH/LMDh (prototypes, overall winner) + LMP2 + GT3. Tom Kristensen (Denmark) holds record with 9 wins ('Mr. Le Mans'). Career-defining achievement for any driver." },
    { question: "Who is the greatest GT racer?", answer: "Multiple candidates: (1) Tom Kristensen (Denmark) — 9× Le Mans winner (record); nicknamed 'Mr. Le Mans'. (2) Fernando Alonso (Spain) — 2× Le Mans winner 2018+2019 + F1 legend. (3) Timo Bernhard (Germany) — 2× Le Mans winner + multi-time endurance. (4) Sébastien Buemi (Switzerland) — 3× Le Mans winner + Formula E champion. Different eras + criteria produce different answers." },
    { question: "Is GT Racing in the Olympics?", answer: "No. Motorsports as a whole not Olympic due to environmental concerns + narrow accessibility. GT racing continues as one of world's most prestigious motor racing categories with 24 Hours of Le Mans + Daytona + Nürburgring + Spa as annual highlights." },
  ],

  wikipediaTitle: "Grand tourer",
  sources: [{ label: "SRO Motorsports Group", url: "https://sro-motorsports.com", publisher: "SRO" }, { label: "24 Hours of Le Mans", url: "https://24h-lemans.com", publisher: "ACO" }, { label: "Wikipedia — GT racing", url: "https://en.wikipedia.org/wiki/Grand_tourer", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const enduranceRacing: Sport = {
  id: "endurance-racing",
  slug: "endurance-racing",
  name: "Endurance Racing",
  officialName: "Endurance Racing (FIA World Endurance Championship + IMSA)",
  aliases: ["WEC", "IMSA", "Le Mans", "Sports Car Racing"],
  shortDescription:
    "Multi-hour motorsport where teams of 2-3 drivers share a prototype or GT car for races lasting 6, 8, 12, or 24 hours — testing car reliability, driver stamina, and pit strategy across day-and-night stints.",
  longDescription:
    "Endurance racing dates to the first 24 Hours of Le Mans in 1923, and has become the most storied test of automotive engineering + human endurance. The modern era features the FIA World Endurance Championship (WEC, 2012+) with Hypercar (LMH/LMDh) top class and LMP2/LMGT3 categories, plus North America's IMSA WeatherTech SportsCar Championship. The 24 Hours of Le Mans, Rolex 24 at Daytona, Sebring 12h, and Petit Le Mans form the pinnacle. Manufacturer battles between Ferrari, Toyota, Porsche, Cadillac, BMW, Peugeot, and Lamborghini drive massive investment.",

  category: "motor-sports",
  subCategory: "multi-hour prototype + GT motorsport",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "FR",
  regionOfOrigin: "Le Mans, France (Automobile Club de l'Ouest, first 24H race 1923)",
  estimatedOrigin: "First 24 Hours of Le Mans 1923; FIA World Endurance Championship established 2012",

  players: { min: 2, max: 4, note: "2-3 drivers per car standard for 24h; 4-driver teams in Le Mans." },
  field: {
    surfaceName: "International racing circuit",
    dimensions: "Circuit de la Sarthe (Le Mans) 13.626 km; Daytona 5.7 km road course",
    description: "Mix of purpose-built circuits + street sections (Le Mans uses public roads for straights)." },
  equipment: [
    { name: "Hypercar (LMH/LMDh)", description: "Top-class ~700 hp hybrid prototype; ~1030 kg; $3-5M cost." },
    { name: "LMP2 Oreca / Ligier / Multimatic", description: "Second-tier 550 hp non-hybrid prototype; $500K cost." },
    { name: "LMGT3 car", description: "GT3-based homologated production cars (Porsche 911, Ferrari 296, McLaren 720S)." },
    { name: "FIA-mandated safety cell", description: "Carbon-fiber monocoque + HANS device + 6-point harness + Halo (Hypercars 2027+)." },
    { name: "Pit + fuel equipment", description: "Refueling rig, tire change equipment, telemetry data station." },
    { name: "Driver kit", description: "Fireproof suit (Nomex), helmet (FIA 8860-2018), gloves, boots." },
  ],
  duration: {
    approximateMinutes: 1440,
    structure: "6-hour, 8-hour, 12-hour, 24-hour formats. Le Mans 24H is the classic; WEC season has one 24-hour + five 6-hour rounds." },

  objective:
    "Complete the maximum distance within the race duration (time-based) OR reach a set distance first (distance-based). Class winners rank within their category (Hypercar/LMP2/LMGT3).",
  matchStructure:
    "Formation lap → race start (rolling or standing) → alternating 60-90 min driver stints with 4-8 pit stops. Full-course yellows + safety cars for incidents. Chequered flag at time (24h).",

  basicRules: [
    { title: "Multi-class racing", body: "Faster Hypercars share track with slower LMP2 + LMGT3 cars; blue-flag rules apply." },
    { title: "Driver stints", body: "Max 4-hour continuous drive time; max 14 hours per driver over 24 hours." },
    { title: "Pit stops", body: "Refuel + tire change + driver swap done sequentially, not parallel; pit lane speed 60 km/h." },
    { title: "Balance of Performance (BoP)", body: "Rulesmaker adjusts weight/power to equalize different chassis/engine combinations." },
    { title: "Safety car / Full-course yellow (FCY)", body: "Neutralizes race for incidents; SC bunches field, FCY holds speeds at 80 km/h." },
  ],
  advancedRules: [
    { title: "Slow zones", body: "Le Mans-specific: local speed limits (60-80 km/h) in incident areas without full SC." },
    { title: "Elite Pro / Pro-Am / Am classifications", body: "IMSA classifies GT drivers as Platinum/Gold/Silver/Bronze; teams must run required mix." },
    { title: "Fuel flow limit", body: "Hypercars restricted to 2 MJ energy per lap via BoP fuel flow rate." },
    { title: "Reference to hypercar tests", body: "In-season testing quotas restricted; simulator use unlimited." },
  ],
  scoring: {
    summary: "Points per race position per class (25 for 1st, decreasing). Le Mans double points. Season champion = highest total.",
    winCondition: "Overall winner = most distance covered (or first to finish set distance). Class winners ranked within Hypercar/LMP2/LMGT3.",
    breakdown: [
      { action: "Class win", points: "25 points" },
      { action: "Class 2nd", points: "18 pts" },
      { action: "Le Mans class win", points: "50 pts (double)" },
      { action: "Pole position", points: "1 pt" },
    ],
  },
  penalties: [
    { title: "Speeding in pit lane", body: "Stop-and-go penalty or drive-through." },
    { title: "Track-limits violation", body: "Warning + eventual drive-through after 3 violations." },
    { title: "Unsafe pit release", body: "Drive-through + fine." },
  ],

  positions: [
    { name: "Lead driver", role: "Fastest team member; qualifies + starts race.", count: 1 },
    { name: "Bronze/silver driver (IMSA GTD)", role: "Am/pro balance required in class regulations." },
    { name: "Team engineer", role: "Strategy calls + telemetry from pit wall." },
    { name: "Team manager", role: "Race director for the team; coordinates pit crew + drivers." },
  ],
  officiating: {
    officials: ["FIA Race Director", "Stewards", "Timekeeping officials"],
    summary: "FIA stewards enforce sporting regulations; teams file protests within 30 min of race end. Ross Brawn Chief Steward (WEC 2024+).",
  },

  governingBodies: [
    { name: "Fédération Internationale de l'Automobile (FIA)", founded: 1904, headquarters: "Paris, France", website: "https://www.fia.com" },
    { name: "Automobile Club de l'Ouest (ACO, Le Mans organizer)", founded: 1906, headquarters: "Le Mans, France", website: "https://www.lemans.org" },
    { name: "International Motor Sports Association (IMSA)", founded: 1969, headquarters: "Daytona Beach, USA", website: "https://www.imsa.com" },
  ],
  majorCompetitions: [
    { name: "24 Hours of Le Mans", frequency: "annual (June)", founded: 1923, region: "Le Mans, France" },
    { name: "FIA World Endurance Championship (WEC)", frequency: "annual (7-8 rounds)", founded: 2012, region: "global" },
    { name: "IMSA WeatherTech SportsCar Championship", frequency: "annual (11 rounds)", founded: 1969, region: "North America" },
    { name: "Rolex 24 at Daytona", frequency: "annual (Jan)", founded: 1962, region: "Daytona, USA" },
    { name: "12 Hours of Sebring", frequency: "annual (Mar)", founded: 1952, region: "Sebring, USA" },
  ],
  countriesPlayed: ["FR", "IT", "DE", "US", "GB", "JP", "BE", "PT", "ES", "CH", "AU"],
  famousAthletes: [
    "Tom Kristensen (DK, 9× Le Mans winner)",
    "Jacky Ickx (BE, 6× Le Mans winner)",
    "Sébastien Buemi (CH, WEC + Le Mans multiple winner)",
    "Kamui Kobayashi (JP, WEC champion + Le Mans winner 2021)",
    "Alessandro Pier Guidi (IT, Le Mans 2023 winner Ferrari)",
  ],
  records: [
    { title: "Most Le Mans overall wins", holder: "Tom Kristensen", value: "9 wins", year: 2013 },
    { title: "Highest average speed Le Mans", holder: "Audi R18 e-tron quattro", value: "251.882 km/h (2010 record 397 laps)", year: 2010 },
    { title: "Highest single-race prize (WEC)", holder: "Le Mans winner", value: "€250,000 team purse", year: 2024 },
  ],

  variants: ["nurburgring-24h", "spa-24h", "gt-world-challenge", "asian-le-mans-series", "european-le-mans-series"],
  relatedSports: ["formula-1", "wec", "imsa", "nurburgring-24-hours"],

  skills: [
    "consistency at 4-hour stint length",
    "traffic navigation (multi-class racing)",
    "fuel + tire management",
    "day-to-night visual adjustment",
    "pit-stop precision + team communication",
  ],
  strategies: [
    { title: "Consistency over pace", body: "24h races won by 0.5-second-slower-per-lap consistency + zero mistakes vs. flashy fast laps." },
    { title: "Save the car early", body: "First 6 hours: build safety margin; second half: push if leaders make mistakes." },
    { title: "Wet-weather double stint", body: "Extending stints in the wet on same tires can leapfrog competitors avoiding pit-stops." },
    { title: "Night traffic", body: "Passing GT cars in the dark requires careful timing + light signals; more accidents overnight." },
  ],

  terminology: [
    { term: "Hypercar (LMH/LMDh)", meaning: "Top-class prototype since 2021; ~700hp hybrid AWD." },
    { term: "LMP2", meaning: "Second-tier prototype — Oreca 07 chassis with Gibson 4.2L V8, ~550hp." },
    { term: "LMGT3", meaning: "GT3-based production cars — Porsche 911, Ferrari 296 GT3, Lamborghini Huracán." },
    { term: "BoP", meaning: "Balance of Performance — regulator adjustments to equalize chassis." },
    { term: "Slow zone", meaning: "Le Mans-specific local speed limits during incident recovery." },
    { term: "Full-course yellow (FCY)", meaning: "80 km/h speed cap without safety car deployment." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Watch full Le Mans 24h", body: "Motorsport.tv or Peacock TV streams the full 24-hour race yearly in June." },
        { title: "Race sim GT3 online", body: "iRacing + Assetto Corsa Competizione are the pipeline for real GT3 racing careers." },
        { title: "Attend a track day", body: "HPDE + club racing schools teach the fundamentals of endurance driving." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Get a national racing license", body: "FIA/SCCA graded license progression: E → D → C → B → A required for WEC." },
        { title: "Race in ELMS or Asian LMS", body: "Feeder series to WEC + Le Mans; LMP3 class costs ~$500K/season." },
        { title: "Enter Le Mans with a private team", body: "GT3 entry costs ~€2M; auto-invite spots via WEC + IMSA points." },
      ],
    },
  ],

  faq: [
    { question: "How long is Le Mans really?", answer: "24 hours continuous — race starts Saturday 4pm local, ends Sunday 4pm. Cars run 4500-5500 km." },
    { question: "How many drivers per car?", answer: "3 per Hypercar for Le Mans; 2 minimum for 6-hour WEC rounds. IMSA GT3 requires bronze-rated driver." },
    { question: "How much does an endurance car cost?", answer: "Hypercar factory program: $50-100M/year. LMP2 privateer season: $3-5M. GT3 season: $2M." },
    { question: "Is endurance racing safer than F1?", answer: "Similar safety standards. Le Mans introduced the Halo to prototypes for 2027. Historical Le Mans has had fatal accidents (1955 disaster). Modern era is very safe." },
  ],

  sources: [
    { label: "Wikipedia — 24 Hours of Le Mans", url: "https://en.wikipedia.org/wiki/24_Hours_of_Le_Mans", publisher: "Wikipedia" },
    { label: "FIA WEC official", url: "https://www.fiawec.com", publisher: "FIA" },
    { label: "IMSA official", url: "https://www.imsa.com", publisher: "IMSA" },
  ],
  wikipediaTitle: "24 Hours of Le Mans",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

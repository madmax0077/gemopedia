import type { Sport } from "@/lib/types";

export const rallyRaid: Sport = {
  id: "rally-raid",
  slug: "rally-raid",
  name: "Rally Raid",
  officialName: "Rally Raid / Cross-Country Rally (FIA + FIM)",
  aliases: ["Cross-Country Rally", "Dakar Rally", "Rally Raid Championship"],
  shortDescription:
    "Multi-day off-road rally racing across deserts + varied terrain — spanning up to 15 days + 8,000-9,000 km — competing in cars, trucks, motorcycles, quads; iconic Dakar Rally in Saudi Arabia; FIA World Rally-Raid Championship annual.",
  longDescription:
    "Rally Raid (Cross-Country Rally) is a multi-day off-road rally racing discipline where competitors traverse deserts + varied terrain over 5-15 days + 3,000-9,000 km. Distinct from World Rally Championship (WRC — shorter stages on maintained tracks), Rally Raid features extreme distances + navigation across open terrain. Iconic event: Dakar Rally (annually since 1979, held in Saudi Arabia since 2020 after prior years in Africa + South America). Also World Rally-Raid Championship (FIA + FIM sanctioned since 2022 — 5-round global calendar). Categories: (1) Cars (T1 + T2 categories); (2) Trucks (T5); (3) Motorcycles (Rally GP); (4) Quads (SSV Side-by-Side + Quad); (5) Classic vehicles + Original by Motul (unassisted). Legendary competitors: Stéphane Peterhansel (France — 8× Dakar cars + 6× motorcycles; 14 total wins — 'Mr. Dakar'), Nasser Al-Attiyah (Qatar — 5× Dakar cars champion), Cyril Despres (France — 5× Dakar motorcycles), Marc Coma (Spain — 5× Dakar motorcycles), Sam Sunderland (UK — 2× Dakar motorcycles).",

  category: "motor-sports",
  subCategory: "off-road rally — multi-day cross-country",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (Thierry Sabine's 1979 Paris-Dakar Rally); FIA + FIM governance",
  estimatedOrigin: "Paris-Dakar Rally founded 1979 by Thierry Sabine (France); FIA Cross-Country Rally World Cup 1993; FIA World Rally-Raid Championship 2022",

  players: { min: 1, max: 2, note: "Motorcycles + quads: 1 rider. Cars + trucks: 2 (driver + navigator/co-driver)." },
  field: {
    surfaceName: "Deserts + varied off-road terrain",
    dimensions: "5-15 day events; 3,000-9,000 km total distance; individual stages 200-800 km each",
    description: "Dakar: Saudi Arabian deserts + dunes since 2020 (was Africa 1979-2007 and South America 2009-2019). World Rally-Raid Championship: Abu Dhabi, Morocco, Portugal, Chile.",
  },
  equipment: [
    { name: "Rally cars (T1)", description: "Purpose-built desert prototypes; 4WD; 500-800 HP; specialized suspension. Cost $1M-$3M." },
    { name: "Rally trucks (T5)", description: "Massive Kamaz trucks + Iveco + Renault; 1,000+ HP for extreme terrain." },
    { name: "Rally motorcycles (Rally GP)", description: "Purpose-built 450cc-750cc; extended fuel range; navigation tower with roadbook." },
    { name: "Rally quads + SSV", description: "Quad ATVs + Side-by-Side buggies (SSV); popular Dakar categories." },
    { name: "Navigation equipment", description: "Roadbook + GPS + WPT (way points); modern GPS with limited satellites." },
    { name: "Full safety equipment", description: "Roll cage + fireproof suit + helmet + HANS device + medical + survival kit." },
  ],
  duration: {
    approximateMinutes: 480,
    structure: "Individual stages: 4-10 hours. Full event: 5-15 days total. Dakar: 12-15 days, 8,000-9,000 km.",
  },
  objective: "Complete rally in fastest cumulative time; category-based rankings.",
  matchStructure: "Multi-day format: prologue + 10-13 stages. Each stage timed individually; cumulative times decide category winner. Rest days between stages.",

  basicRules: [
    { title: "Complete each stage in cumulative time", body: "All stages must be completed; cumulative time = final ranking." },
    { title: "Time penalties", body: "Missing waypoint, going off route, mechanical assistance = time penalties." },
    { title: "Category-based winners", body: "Cars + Trucks + Motorcycles + Quads + SSV each have separate category champions." },
    { title: "Navigation critical", body: "Roadbook + GPS navigation; deviations from marked route = time penalties." },
    { title: "Safety infrastructure", body: "Medical + rescue helicopters; satellite tracking of all competitors; emergency protocols." },
    { title: "Rest days between stages", body: "1-2 rest days during multi-day events for repairs + recovery." },
  ],
  scoring: {
    summary: "Fastest cumulative time wins category. World Rally-Raid Championship: cumulative points across all rounds.",
    winCondition: "Fastest cumulative time in category. Season championship: cumulative points across all rounds.",
    breakdown: [
      { action: "Stage win", points: "Individual stage time" },
      { action: "Category overall win", points: "Cumulative rally time" },
      { action: "Championship round", points: "Points scale for category ranking" },
    ],
  },

  positions: [
    { name: "Driver (cars/trucks)", role: "Primary competitor.", count: 1 },
    { name: "Navigator/Co-driver", role: "Reads roadbook + manages navigation.", count: 1 },
    { name: "Rider (motorcycles/quads)", role: "Solo competitor.", count: 1 },
    { name: "Team support crew", role: "Repairs + logistics + strategy." },
  ],
  officiating: {
    officials: ["Race Director", "Stewards", "Timing officials", "Medical + rescue teams"],
    summary: "FIA / FIM officials; extensive medical + rescue infrastructure due to remote terrain + long distances.",
  },

  governingBodies: [
    { name: "Fédération Internationale de l'Automobile (FIA)", founded: 1904, headquarters: "Paris, France" },
    { name: "Fédération Internationale de Motocyclisme (FIM)", founded: 1904, headquarters: "Mies, Switzerland" },
    { name: "Amaury Sport Organisation (ASO — Dakar organizer)", founded: 1993, headquarters: "Paris, France", website: "https://dakar.com" },
  ],
  majorCompetitions: [
    { name: "Dakar Rally", frequency: "annual (January)", founded: 1979, region: "Saudi Arabia (since 2020); previously Africa + South America" },
    { name: "FIA World Rally-Raid Championship", frequency: "annual (5 rounds)", founded: 2022, region: "worldwide" },
    { name: "Abu Dhabi Desert Challenge", frequency: "annual (March)", founded: 1991, region: "UAE" },
    { name: "Morocco Rally", frequency: "annual", founded: 1999, region: "Morocco" },
    { name: "Rally Raid Portugal", frequency: "annual", founded: 2022, region: "Portugal" },
  ],
  countriesPlayed: ["FR", "ES", "QA", "SA", "AE", "PT", "MA", "AR", "PE", "CL", "IT", "GB", "US", "PL", "CZ"],
  famousAthletes: [
    "Stéphane Peterhansel (France — 8× Dakar cars + 6× motorcycles; 14 total wins; 'Mr. Dakar')",
    "Nasser Al-Attiyah (Qatar — 5× Dakar cars champion + Olympic skeet shooter)",
    "Cyril Despres (France — 5× Dakar motorcycles)",
    "Marc Coma (Spain — 5× Dakar motorcycles)",
    "Sam Sunderland (UK — 2× Dakar motorcycles)",
    "Carlos Sainz Sr. (Spain — 3× Dakar cars champion + WRC legend)",
    "Peter Hansen (Netherlands — multiple Dakar SSV wins)",
    "Kees Koolen (Netherlands — Dakar SSV champion)",
    "Sébastien Loeb (France — 9× WRC champion + Dakar contender)",
    "Toby Price (Australia — 2× Dakar motorcycles)",
  ],
  records: [
    { title: "Most Dakar wins (all categories)", holder: "Stéphane Peterhansel (France)", value: "14 total wins (8 cars + 6 motorcycles); nicknamed 'Mr. Dakar'; unmatched record", year: 2023 },
    { title: "Most Dakar cars wins", holder: "Stéphane Peterhansel + Nasser Al-Attiyah", value: "Multiple; Peterhansel 8; Al-Attiyah 5", year: 2023 },
    { title: "Dakar Rally longevity", holder: "Dakar Rally", value: "Continuous since 1979; iconic multi-day desert rally", year: 2024 },
    { title: "Saudi Arabia migration", holder: "Dakar", value: "Moved from South America to Saudi Arabia 2020; contested there since", year: 2024 },
  ],

  variants: ["dakar-rally-15-day-8000km", "world-rally-raid-championship-5-rounds", "cross-country-rally-national-championships", "abu-dhabi-desert-challenge", "morocco-rally"],
  relatedSports: ["world-rally-championship", "off-road-racing", "rally-cross", "endure"],

  skills: ["extreme endurance driving", "desert navigation + roadbook reading", "vehicle repair on remote terrain", "physical + mental resilience over 15 days", "co-driver / navigator communication"],

  terminology: [
    { term: "Rally Raid", meaning: "Multi-day off-road cross-country rally racing." },
    { term: "Dakar Rally", meaning: "Iconic Rally Raid event; annually since 1979; Saudi Arabia since 2020." },
    { term: "Cross-Country Rally", meaning: "Alternative name for Rally Raid." },
    { term: "Roadbook", meaning: "Navigation instructions given to co-driver/navigator." },
    { term: "Waypoint (WPT)", meaning: "GPS check-point that competitors must pass through." },
    { term: "T1 / T2 / T5", meaning: "FIA vehicle categories: T1 prototypes, T2 series production, T5 trucks." },
    { term: "Rally GP", meaning: "Premier motorcycle class in Rally Raid." },
    { term: "SSV", meaning: "Side-by-Side vehicle; buggy category popular at Dakar." },
    { term: "Stéphane Peterhansel", meaning: "French driver; 14× Dakar winner; nicknamed 'Mr. Dakar'." },
  ],

  faq: [
    { question: "What is Rally Raid?", answer: "Multi-day off-road rally racing across deserts + varied terrain. Spans 5-15 days + 3,000-9,000 km. Competitors race in cars, trucks, motorcycles, quads, and SSV buggies. Distinct from World Rally Championship (shorter stages on maintained tracks). Iconic event: Dakar Rally (annually since 1979, held in Saudi Arabia since 2020). FIA World Rally-Raid Championship 5-round series annual." },
    { question: "What is the Dakar Rally?", answer: "The world's most famous Rally Raid event. Started 1979 by Thierry Sabine as Paris-Dakar Rally in Africa. Moved to South America 2009 due to terrorism threat. Moved to Saudi Arabia 2020. Held annually in January; 12-15 days; 8,000-9,000 km through Saudi deserts. Categories: Cars + Trucks + Motorcycles + Quads + SSV. Considered career-defining for any motorsport driver." },
    { question: "Who is the greatest Rally Raid competitor?", answer: "Stéphane Peterhansel (France) — 14× Dakar winner (8 cars + 6 motorcycles); nicknamed 'Mr. Dakar'. Undisputed GOAT with unmatched multi-discipline record. Others: Cyril Despres + Marc Coma (5× Dakar motorcycles each); Nasser Al-Attiyah (5× Dakar cars + Olympic skeet shooter — unique multi-sport career)." },
    { question: "Is Rally Raid in the Olympics?", answer: "No. Motorsports as a whole not Olympic. Rally Raid maintains prestigious status through Dakar Rally + World Rally-Raid Championship with global audience." },
  ],

  wikipediaTitle: "Rally raid",
  sources: [{ label: "Dakar Rally", url: "https://dakar.com", publisher: "ASO" }, { label: "FIA Rally-Raid", url: "https://fia.com/", publisher: "FIA" }, { label: "Wikipedia — Rally raid", url: "https://en.wikipedia.org/wiki/Rally_raid", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

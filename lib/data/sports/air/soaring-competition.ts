import type { Sport } from "@/lib/types";

export const soaringCompetition: Sport = {
  id: "soaring-competition",
  slug: "soaring-competition",
  name: "Competitive Soaring (Glider Racing)",
  officialName: "FAI World Gliding Championships",
  aliases: ["Gliding Competition", "Sailplane Racing", "Cross-Country Soaring"],
  shortDescription:
    "Motorless glider (sailplane) racing across pre-designated task routes using rising thermals + ridge lift, scored by speed + distance; FAI World Gliding Championships since 1937 across 5 classes (Open, 18-Meter, 15-Meter, Standard, Club).",
  longDescription:
    "Competitive soaring (also gliding competition or sailplane racing) is the aerial sport of racing motorless gliders across pre-designated cross-country task routes using natural rising air (thermals, ridge lift, wave lift) for altitude. Governed by the Fédération Aéronautique Internationale (FAI) since 1937. Modern World Gliding Championships (WGC) contested biennially across 5 classes: Open Class (no wingspan limit — Nimbus, ASH 30 Mi, EB29), 18-Meter (~18 m span — Ventus, ASG 29, Discus-2), 15-Meter (LS8, Discus, ASW 27), Standard Class (15 m, no flaps — LS8-s), Club Class (older/economy gliders, handicap-scored). Tasks: assigned area task (AAT), racing task (RT), or fixed circuit. Scored by speed if all pilots complete task, else distance-based. Modern gliders exceed 300 km/h in cruise; day-tasks routinely cover 500-1000 km. Notable pilots: Sebastian Kawa (POL, most WGC titles ever — 17+), Michael Sommer (GER, 5x Open Class world champion), Klaus Ohlmann (world distance records — 3,000+ km wave flights). Aotearoa New Zealand + Argentine Patagonia + Namibia are premier venues for wave soaring records.",
  category: "air-sports",
  subCategory: "gliding / sailplane racing",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "summer", era: "20th-century", popularity: "regional",
  countryOfOrigin: "DE",
  regionOfOrigin: "Germany (Rhön Mountains 1920s); global sport",
  estimatedOrigin: "Modern soaring began 1920s (Wasserkuppe, Rhön); FAI Championships 1937",
  players: { min: 1, max: 1, note: "Individual pilot; some 2-seat glider championships exist." },
  equipment: [{ name: "Sailplane (glider)", description: "Motorless aircraft; typical L/D (glide ratio) 40:1 to 60:1." }, { name: "GPS flight logger", description: "Verifies task completion, altitude, turnpoints." }, { name: "Oxygen system", description: "Required above 10,000 ft (3,000 m)." }, { name: "Variometer + flight computer", description: "Real-time climb/sink display + optimal glide path." }],
  duration: { approximateMinutes: 300, structure: "Individual tasks typically 3-6 hours; multi-day championship 8-14 days." },
  objective: "Complete assigned cross-country task fastest (or farthest if none complete).",
  matchStructure: "Pilots launched via tow-plane; race around designated turnpoints; land at finish airfield.",
  basicRules: [
    { title: "Task defined pre-flight", body: "Turnpoints + finish specified; ~200-800 km typical." },
    { title: "Motorless flight (motor use = penalty/DQ)", body: "Self-launch/sustainer gliders allowed but motor use = task DQ in most classes." },
    { title: "GPS logger required", body: "Continuous flight trace verifies turnpoint compliance + altitude." },
    { title: "Airspace rules strict", body: "Controlled airspace violation = penalty/DQ." },
  ],
  scoring: { summary: "Speed if all finish (fastest = 1000 pts); distance if incomplete; class handicap for Club Class.", winCondition: "Championship = highest cumulative points across all daily tasks." },
  positions: [{ name: "Pilot", role: "Sole occupant.", count: 1 }, { name: "Crew (ground)", role: "Tow release, retrieve if land-out, logistics.", count: 3 }],
  governingBodies: [{ name: "FAI (Fédération Aéronautique Internationale)", founded: 1905, headquarters: "Lausanne, Switzerland" }, { name: "IGC (International Gliding Commission of FAI)", founded: 1937, headquarters: "Lausanne, Switzerland" }],
  majorCompetitions: [{ name: "FAI World Gliding Championships (WGC)", frequency: "biennial", founded: 1937, region: "rotating venues worldwide" }, { name: "Sailplane Grand Prix (World Final)", frequency: "biennial", founded: 2001, region: "rotating (Andes, Australia)" }],
  countriesPlayed: ["DEU", "POL", "AUS", "USA", "FRA", "CZE", "NZL", "ARG", "GBR", "ITA"],
  famousAthletes: ["Sebastian Kawa (POL — 17+ WGC titles record)", "Michael Sommer (GER — 5x Open Class champion)", "Klaus Ohlmann (GER — distance records)", "Ingo Renner (AUS — 4x world champion)", "George Moffat (USA — 2x Open Class 1970+1974)"],
  records: [
    { title: "Klaus Ohlmann 3,009 km straight-line", holder: "Klaus Ohlmann (GER)", value: "3,009 km straight-line record (Argentina Andes wave, 21 Jan 2003) — longest sailplane free distance", year: 2003 },
    { title: "Sebastian Kawa most WGC titles", holder: "Sebastian Kawa (POL)", value: "17+ FAI World Gliding Championship titles — most all-time", year: 2024 },
    { title: "Altitude record 76,124 ft (Perlan 2)", holder: "Jim Payne + Tim Gardner (USA/NZ Perlan Project)", value: "76,124 ft (23,203 m) — sailplane absolute altitude record, El Calafate, Argentina, 2 Sep 2018", year: 2018 },
  ],
  variants: ["wave-soaring", "ridge-soaring", "thermal-soaring"],
  relatedSports: ["hang-gliding", "paragliding", "aerobatic-flying"],
  skills: ["thermal reading + centering", "airspace navigation", "cross-country route planning", "risk management (land-out)"],
  wikipediaTitle: "Gliding",
  sources: [{ label: "Wikipedia — Gliding competitions", url: "https://en.wikipedia.org/wiki/Competitive_gliding", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default soaringCompetition;

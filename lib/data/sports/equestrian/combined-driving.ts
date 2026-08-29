import type { Sport } from "@/lib/types";

export const combinedDriving: Sport = {
  id: "combined-driving",
  slug: "combined-driving",
  name: "Combined Driving",
  officialName: "Combined Driving (Fédération Équestre Internationale - FEI)",
  aliases: ["Carriage Driving", "Horse Driving", "FEI Driving"],
  shortDescription:
    "Equestrian sport where drivers guide 1-4 horses harnessed to carriage through 3 phases: dressage + marathon (cross-country) + cone driving — FEI World Championships since 1972; not Olympic.",
  longDescription:
    "Combined Driving is an equestrian sport where drivers guide 1-4 horses harnessed to a carriage through 3 phases: (1) Dressage (obedience + collection test on flat arena); (2) Marathon (cross-country obstacle course over natural terrain with multiple hazards); (3) Cone Driving (precision driving through narrow cones without knocking any). Cumulative penalty across 3 phases decides winner. Categories: single horse + pair + tandem (2 horses in line) + four-in-hand (4 horses harnessed together — most prestigious). FEI World Championships biennially since 1972. Legendary drivers: George Bowman (UK — multi-time World Championship medalist), IJsbrand Chardon (Netherlands — 4× Four-in-Hand World Champion), Boyd Exell (Australia — 6× indoor + multiple outdoor World Championships), Chester Weber (US — multiple World Championship medals). Sport is not Olympic despite established FEI presence; requires enormous investment (4 top-level horses + specialized carriage + team).",

  category: "equestrian-sports",
  subCategory: "equestrian — horse-drawn carriage 3-phase competition",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isProfessional: true,
  season: "summer",
  era: "19th-century",
  popularity: "major",
  countryOfOrigin: "GB",
  regionOfOrigin: "United Kingdom (19th-century carriage traditions); FEI adopted 1970; first World Championships 1972",
  estimatedOrigin: "British carriage tradition 19th century; formalized by FEI 1970; FEI World Championships 1972; biennial since",

  players: { min: 1, max: 4, note: "Individual driver competing with 1-4 horse team; support crew for horses + carriage." },
  field: {
    surfaceName: "Multiple venues: dressage arena + marathon course + cones arena",
    dimensions: "Dressage: 40m × 100m arena. Marathon: 6-12 km cross-country course. Cones: 300m arena with 20 numbered cone pairs.",
    description: "Purpose-built equestrian venues; marathon phase features 6-8 hazards (obstacle groups) with technical driving challenges.",
  },
  equipment: [
    { name: "Purpose-built driving horses", description: "Warmbloods most common (Dutch, Belgian, KWPN); trained specifically for driving. Cost $50K-$500K per horse." },
    { name: "Driving harness", description: "Full leather harness system; individual per horse; specialized fittings." },
    { name: "Sport-driving carriage", description: "Marathon carriage (rugged for cross-country) + dressage carriage (elegant for arena). Cost $30K-$150K per carriage." },
    { name: "Driver's whip", description: "Standard driving whip; regulated dimensions." },
    { name: "Groom + navigator (marathon)", description: "Team members balance carriage during marathon + relay information." },
  ],
  duration: {
    approximateMinutes: 180,
    structure: "Dressage: 15-25 min per driver. Marathon: 1-2 hours. Cones: 5-10 min per driver. Full event: 3-day format.",
  },
  objective: "Complete 3 phases with minimum cumulative penalty score.",
  matchStructure: "3-day format: Day 1 dressage + Day 2 marathon + Day 3 cones. Cumulative penalty across 3 phases = final score. Lowest wins.",

  basicRules: [
    { title: "Complete all 3 phases", body: "Dressage + marathon + cones must all be completed; scoring cumulative." },
    { title: "Dressage: judged 0-100 (converted to penalty)", body: "5 judges score 0-10 on individual movements; total converted to penalty score." },
    { title: "Marathon: time + obstacle penalties", body: "Time within optimum = 0 penalty; over optimum = time penalty. Hazard obstacle penalties per touch/knock." },
    { title: "Cones: time + knockdown penalties", body: "Complete 20 numbered cone gates without knocking; time within optimum; knockdown = 3 penalty each." },
    { title: "Lowest total penalty wins", body: "Sum penalty from 3 phases = final score. Winner has fewest penalty points." },
  ],
  scoring: {
    summary: "Cumulative penalty from 3 phases: dressage + marathon + cones. Lowest = winner.",
    winCondition: "Lowest total penalty score across all 3 phases.",
    breakdown: [
      { action: "Perfect dressage", points: "0-30 penalty (excellent)" },
      { action: "Marathon time within optimum", points: "0 penalty" },
      { action: "Marathon obstacle knockdown", points: "10 penalty per obstacle" },
      { action: "Cone knockdown", points: "3 penalty per cone" },
      { action: "Elite total penalty (major event)", points: "50-100 total penalty; lower = winner" },
    ],
  },

  positions: [
    { name: "Driver", role: "Primary competitor.", count: 1 },
    { name: "Groom (marathon)", role: "Balances carriage during obstacle sections.", count: 1 },
    { name: "Navigator (marathon)", role: "Reads course + calls hazards.", count: 1 },
    { name: "Team of horses (1-4)", role: "The equine athletes." },
  ],
  officiating: {
    officials: ["Ground Jury (3 judges)", "Course Designer", "Technical Delegate", "Timekeeper", "Steward"],
    summary: "FEI-certified officials; ground jury judges dressage; course designer sets marathon + cones. Independent scoring per phase.",
  },

  governingBodies: [
    { name: "Fédération Équestre Internationale (FEI)", founded: 1921, headquarters: "Lausanne, Switzerland", website: "https://fei.org" },
    { name: "American Driving Society (ADS)", founded: 1974, headquarters: "USA" },
    { name: "British Horse Driving Trials Association", founded: 1970, headquarters: "UK" },
  ],
  majorCompetitions: [
    { name: "FEI World Championships Combined Driving", frequency: "biennial (odd years)", founded: 1972, region: "worldwide" },
    { name: "FEI World Cup Combined Driving (Four-in-Hand)", frequency: "annual", founded: 2001, region: "worldwide winter circuit" },
    { name: "FEI European Championships Combined Driving", frequency: "biennial (even years)", founded: 1975, region: "Europe" },
    { name: "CAI-A World Championships (single, pair, four-in-hand)", frequency: "biennial", founded: 1972, region: "worldwide" },
    { name: "World Equestrian Games (Combined Driving)", frequency: "quadrennial", founded: 1990, region: "worldwide" },
  ],
  countriesPlayed: ["NL", "GB", "US", "AU", "DE", "SE", "AT", "HU", "BE", "FR", "IT", "CH", "DK", "CA"],
  famousAthletes: [
    "IJsbrand Chardon (Netherlands — 4× Four-in-Hand World Champion; multi-time World Cup)",
    "Boyd Exell (Australia — 6× Indoor + multiple outdoor World Championships)",
    "George Bowman (UK — multi-time World Championship medalist)",
    "Chester Weber (US — multiple World Championship medals; Four-in-Hand)",
    "Michael Freund (Germany — Four-in-Hand World Champion)",
    "Vilmos Lázár (Hungary — Four-in-Hand World Champion)",
    "Bram Chardon (Netherlands — IJsbrand's son; modern Four-in-Hand contender)",
    "Josef Middendorf (Germany — Four-in-Hand World Champion)",
    "Théo Timmerman (Netherlands — Four-in-Hand World Championship medalist)",
  ],
  records: [
    { title: "Most FEI Four-in-Hand World Championships", holder: "IJsbrand Chardon (Netherlands)", value: "4× Four-in-Hand World Champion; Dutch driving dynasty", year: 2019 },
    { title: "Most FEI World Cup Combined Driving titles (indoor)", holder: "Boyd Exell (Australia)", value: "6× Indoor World Championships", year: 2023 },
    { title: "First Combined Driving World Championships", holder: "FEI", value: "First held 1972; biennial since", year: 1972 },
    { title: "Four-in-Hand pinnacle", holder: "Four-in-Hand category", value: "Most prestigious category — 4 horses harnessed together = highest technical skill", year: 2024 },
  ],

  variants: ["single-horse-driving", "pair-driving-2-horses-side-by-side", "tandem-driving-2-horses-in-line", "four-in-hand-4-horses", "horse-power-classes-based-on-horse-size"],
  relatedSports: ["dressage", "eventing", "endurance-riding", "carriage-driving-recreational"],

  skills: ["horse driving technique + hand-eye", "team horse control (2-4 horses coordinated)", "carriage handling in tight spaces", "physical strength (heavy reins + long duration)", "mental focus (multi-phase 3-day event)"],

  terminology: [
    { term: "Combined Driving", meaning: "3-phase equestrian carriage competition (dressage + marathon + cones)." },
    { term: "Four-in-Hand", meaning: "Most prestigious category — 4 horses harnessed together." },
    { term: "Marathon", meaning: "Cross-country phase with obstacle hazards." },
    { term: "Cones", meaning: "Precision phase driving through numbered cone gates." },
    { term: "Dressage", meaning: "Obedience + collection test in flat arena." },
    { term: "Hazard", meaning: "Obstacle group in marathon phase; multiple obstacles per hazard." },
    { term: "Groom", meaning: "Assistant balancing carriage during marathon obstacles." },
    { term: "Navigator", meaning: "Reads course + calls hazards during marathon." },
    { term: "FEI", meaning: "Fédération Équestre Internationale; world governing body." },
    { term: "IJsbrand Chardon", meaning: "Dutch driver; 4× Four-in-Hand World Champion." },
  ],

  faq: [
    { question: "What is Combined Driving?", answer: "An equestrian sport where drivers guide 1-4 horses harnessed to a carriage through 3 phases: dressage (obedience test in flat arena), marathon (cross-country obstacle course), and cone driving (precision through narrow cones). Cumulative penalty across 3 phases decides winner. FEI World Championships biennially since 1972." },
    { question: "What is Four-in-Hand?", answer: "The most prestigious category in Combined Driving — 4 horses harnessed together (2 pairs side-by-side). Requires enormous skill + team coordination + physical strength. IJsbrand Chardon (Netherlands) is 4× Four-in-Hand World Champion. Investment: 4 top-level horses ($200K-$2M each) + specialized carriages + team + travel = multi-million dollar operation." },
    { question: "Is Combined Driving in the Olympics?", answer: "No. FEI has advocated for Olympic inclusion but IOC has not accepted. Sport requires enormous logistics (4 horses + carriage per competitor + multi-day format) that Olympics finds difficult to accommodate. Remains prestigious via FEI World Championships." },
    { question: "Who is the greatest driver?", answer: "Multiple candidates: (1) IJsbrand Chardon (Netherlands) — 4× Four-in-Hand World Champion. (2) Boyd Exell (Australia) — 6× Indoor + multiple outdoor World Championships. (3) George Bowman (UK) — multi-time World Championship medalist. (4) Chester Weber (US) — modern Four-in-Hand contender + multiple medals." },
  ],

  wikipediaTitle: "Combined driving",
  sources: [{ label: "FEI Combined Driving", url: "https://fei.org/disciplines/driving", publisher: "FEI" }, { label: "Wikipedia — Combined driving", url: "https://en.wikipedia.org/wiki/Combined_driving", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

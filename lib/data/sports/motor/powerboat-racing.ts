import type { Sport } from "@/lib/types";

export const powerboatRacing: Sport = {
  id: "powerboat-racing",
  slug: "powerboat-racing",
  name: "Powerboat Racing",
  officialName: "F1H2O (UIM Formula 1 World Championship) + F2 + Class 1 Offshore",
  aliases: ["Powerboat", "F1H2O", "Water Formula 1", "Class 1 Offshore"],
  shortDescription:
    "Motor sport with high-speed powerboats — F1H2O (single-seater tunnel-hull boats at ~250 km/h) + Class 1 Offshore (twin-hulled offshore powerboats at ~250 km/h) + inland F2 + national circuits; UIM-sanctioned since 1922.",
  longDescription:
    "Powerboat Racing includes multiple disciplines using high-speed motorized watercraft. Premier categories: (1) UIM F1H2O World Championship (single-seater tunnel-hull inshore boats; ~250 km/h; 12-14 rounds annual in stadium-water venues); (2) UIM Class 1 Offshore World Championship (twin-hulled offshore powerboats; ~250 km/h; 6-8 rounds annual); (3) UIM F2 World Championship (junior class to F1H2O); (4) UIM Aquabike (jet ski racing); (5) UIM Endurance (long-distance offshore). Season varies year-round. UIM (Union Internationale Motonautique) has been world governing body since 1922. Legendary competitors: Guido Cappellini (Italy — 10× F1H2O world champion), Steve Curtis (UK — F1H2O + Class 1 multi-time winner), Jonathan Jones (UK — Class 1 champion), Sami Seliö (Finland — F1H2O champion), Alex Carella (Italy — F1H2O champion), Shaun Torrente (US — F1H2O champion), Erik Stark (Sweden — F1H2O contender). Sport requires extreme technical skill + physical fitness + mental composure at 250 km/h on water.",

  category: "motor-sports",
  subCategory: "motor sport — powerboat racing",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "major",
  countryOfOrigin: "MC",
  regionOfOrigin: "Monaco + Italy + UK (early 1900s pioneers); UIM founded 1922 as world governing body",
  estimatedOrigin: "Early 1900s motorized boat racing; UIM founded 1922; F1H2O World Championship 1981; Class 1 Offshore 1964",

  players: { min: 1, max: 2, note: "F1H2O + F2: 1 pilot per boat. Class 1 Offshore: 2 crew (driver + navigator). Some categories: driver only." },
  field: {
    surfaceName: "Water — inshore lake / river / stadium water / offshore ocean",
    dimensions: "F1H2O: 1.5-2.5 km inshore course; Class 1 Offshore: 30-40 nautical mile offshore course",
    description: "F1H2O: stadium-style water venues (China, Vietnam, Portugal, Italy, UAE, Sardinia). Class 1: open ocean courses (Sardinia, Xiamen, Sharjah). Purpose-built spectator infrastructure.",
  },
  equipment: [
    { name: "F1H2O tunnel-hull boat", description: "Single-seater fiberglass hull; 5-6m long; 400-450 HP Mercury Racing V6 engine; ~250 km/h top speed. Cost $500K per boat." },
    { name: "Class 1 Offshore boat", description: "Twin-hull catamaran; 12-14m long; twin 1,100 HP V12 engines; ~250 km/h. Cost $1M-$3M per boat." },
    { name: "Racing helmet + full life vest", description: "Full-face helmet with air supply for potential capsize; specialized life vest with automatic inflation." },
    { name: "Fireproof racing suit", description: "Standard motorsport race suit adapted for water racing." },
    { name: "5-point harness", description: "Full body harness inside cockpit; quick-release for emergencies." },
    { name: "Modern electronics + telemetry", description: "GPS + engine management + telemetry systems." },
  ],
  duration: { approximateMinutes: 45, structure: "F1H2O race: 30-45 min. Class 1 Offshore race: 60-90 min. Season: 10-14 rounds." },
  objective: "Cross finish line first; season points award season champion.",
  matchStructure: "Practice + qualifying → race. F1H2O: mass start; 40-50 lap races. Class 1: multi-lap offshore course.",

  basicRules: [
    { title: "Grid position from qualifying", body: "Fastest qualifying time = pole position; grid based on qualifying." },
    { title: "First across finish line wins", body: "Race position at finish = points awarded." },
    { title: "Physical contact prohibited", body: "Water racing = no contact permitted; incidents heavily investigated + penalized." },
    { title: "Yellow flag + safety boat protocol", body: "Yellow flag = reduce speed; safety boat may deploy for accidents." },
    { title: "Boat + engine specification limits", body: "UIM regulations strictly limit specifications; parity important." },
  ],
  scoring: {
    summary: "Points per race position; season champion = highest cumulative points.",
    winCondition: "Season championship + race wins.",
    breakdown: [
      { action: "Race win", points: "20-30 pts (varies by series)" },
      { action: "Pole position", points: "3-5 bonus pts" },
      { action: "Season championship", points: "Cumulative round points" },
    ],
  },

  positions: [
    { name: "Pilot / Driver", role: "Solo racer.", count: 1 },
    { name: "Navigator (Class 1 Offshore)", role: "Manages navigation + engine monitoring.", count: 1 },
    { name: "Team engineer + mechanics", role: "Setup + strategy + between-race repairs." },
  ],
  officiating: {
    officials: ["Race Director", "UIM Stewards", "Course marshals (on safety boats)", "Timing officials", "Medical + rescue teams"],
    summary: "UIM-certified officials; extensive water safety + rescue infrastructure due to 250 km/h boat speeds.",
  },

  governingBodies: [
    { name: "Union Internationale Motonautique (UIM)", founded: 1922, headquarters: "Monaco", website: "https://uimpowerboating.com" },
    { name: "American Power Boat Association (APBA)", founded: 1903, headquarters: "USA" },
    { name: "Royal Yachting Association (RYA)", founded: 1875, headquarters: "UK" },
  ],
  majorCompetitions: [
    { name: "UIM F1H2O World Championship", frequency: "annual (12-14 rounds)", founded: 1981, region: "worldwide (China, Vietnam, Portugal, Italy, UAE)" },
    { name: "UIM Class 1 Offshore World Championship", frequency: "annual (6-8 rounds)", founded: 1964, region: "worldwide (Sardinia, Sharjah)" },
    { name: "UIM F2 World Championship", frequency: "annual", founded: 1979, region: "Europe (mostly)" },
    { name: "UIM Aquabike World Championship (jet ski)", frequency: "annual", founded: 1997, region: "worldwide" },
    { name: "UIM Endurance Nations Cup", frequency: "annual", founded: 1995, region: "worldwide" },
  ],
  countriesPlayed: ["IT", "GB", "US", "FI", "SE", "NO", "FR", "AE", "CN", "VN", "PT", "AU", "QA", "SA"],
  famousAthletes: [
    "Guido Cappellini (Italy — 10× F1H2O world champion; sport's GOAT)",
    "Steve Curtis (UK — F1H2O + Class 1 multi-time winner)",
    "Jonathan Jones (UK — Class 1 champion multi-time)",
    "Sami Seliö (Finland — F1H2O champion 2001+2003)",
    "Alex Carella (Italy — F1H2O champion 2010+2011+2012+2016)",
    "Shaun Torrente (US — F1H2O champion 2018+2019)",
    "Erik Stark (Sweden — F1H2O contender)",
    "Jonas Andersson (Sweden — F1H2O champion 2020+2021)",
  ],
  records: [
    { title: "Most F1H2O World Championships", holder: "Guido Cappellini (Italy)", value: "10× F1H2O world champion; considered GOAT", year: 2007 },
    { title: "F1H2O top speed", holder: "F1H2O boats", value: "~250 km/h (155 mph); extreme speed on water", year: 2020 },
    { title: "Class 1 Offshore top speed", holder: "Class 1 boats", value: "~250 km/h (155 mph) on offshore courses", year: 2020 },
    { title: "F1H2O World Championship longevity", holder: "UIM", value: "Continuous since 1981; global stadium-water racing", year: 2024 },
  ],

  variants: ["uim-f1h2o-world-championship-inshore", "uim-class-1-offshore-world-championship", "uim-f2-junior-class", "uim-aquabike-jet-ski", "uim-endurance"],
  relatedSports: ["boat-racing", "jet-ski-racing", "sailing", "hydroplane-racing"],

  skills: ["high-speed boat control on water", "reading water conditions + wakes", "physical strength (G-forces + water impact)", "mental focus (250 km/h on water)", "safety protocols + emergency procedures"],

  terminology: [
    { term: "F1H2O", meaning: "UIM's premier inshore powerboat racing world championship." },
    { term: "Class 1 Offshore", meaning: "UIM offshore powerboat racing world championship." },
    { term: "Tunnel-hull", meaning: "F1H2O boat hull design; specific to inshore racing." },
    { term: "Twin-hull", meaning: "Class 1 catamaran hull design; twin engines." },
    { term: "UIM", meaning: "Union Internationale Motonautique; world governing body since 1922." },
    { term: "Aquabike", meaning: "Jet ski racing category under UIM." },
    { term: "Guido Cappellini", meaning: "Italian pilot; 10× F1H2O champion; sport's GOAT." },
    { term: "Pole position", meaning: "Fastest qualifying = grid position 1." },
  ],

  faq: [
    { question: "What is Powerboat Racing?", answer: "Motor sport with high-speed powerboats. Premier categories: UIM F1H2O (inshore tunnel-hull boats at ~250 km/h; 12-14 rounds annual); UIM Class 1 Offshore (twin-hulled offshore powerboats at ~250 km/h; 6-8 rounds annual); UIM F2 (junior); UIM Aquabike (jet ski). UIM has governed since 1922. Sport requires extreme technical skill + physical fitness at 250 km/h on water." },
    { question: "How is F1H2O different from Class 1 Offshore?", answer: "F1H2O: single-seater tunnel-hull inshore boats; 5-6m long; 400-450 HP; 250 km/h; stadium-water venues (China, Vietnam, Portugal). Class 1 Offshore: twin-hulled catamaran boats; 12-14m long; twin 1,100 HP V12 engines; 250 km/h; open ocean courses (Sardinia, Sharjah). Different formats + boats + physics." },
    { question: "Who is the greatest powerboat racer?", answer: "Guido Cappellini (Italy) — 10× F1H2O world champion; considered GOAT with unmatched multi-year dominance. Others: Alex Carella (Italy — 4× F1H2O), Shaun Torrente (US — 2× F1H2O), Jonas Andersson (Sweden — 2× F1H2O). Class 1: Steve Curtis (UK — multi-time), Jonathan Jones (UK — multi-time)." },
    { question: "Is Powerboat Racing in the Olympics?", answer: "No. Motorsports as a whole not Olympic due to environmental concerns + narrow accessibility. UIM Powerboat racing maintains prestigious status through World Championships." },
  ],

  wikipediaTitle: "Powerboat racing",
  sources: [{ label: "UIM Powerboating", url: "https://uimpowerboating.com", publisher: "UIM" }, { label: "F1H2O", url: "https://f1h2o.com", publisher: "F1H2O" }, { label: "Wikipedia — Powerboat racing", url: "https://en.wikipedia.org/wiki/Powerboat_racing", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

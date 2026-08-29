import type { Sport } from "@/lib/types";

export const ultraDistanceCycling: Sport = {
  id: "ultra-distance-cycling",
  slug: "ultra-distance-cycling",
  name: "Ultra-Distance Cycling",
  officialName: "Ultra-Distance Cycling (Race Across America + Transcontinental Race + Paris-Brest-Paris)",
  aliases: ["Ultra-Cycling", "RAAM", "Long-Distance Cycling"],
  shortDescription:
    "Extreme endurance cycling — solo + team races covering 3,000-8,000 km over 5-25 days with minimal sleep; iconic events include Race Across America (RAAM) + Transcontinental Race + Paris-Brest-Paris; not Olympic.",
  longDescription:
    "Ultra-Distance Cycling is an extreme endurance discipline where riders complete races of 3,000-8,000 km over 5-25 days with minimal sleep. Distinct from professional Grand Tours (Tour de France, Giro d'Italia, Vuelta a España) which allow rest days + drafting + team support. Ultra events are typically self-supported + non-stop. Iconic events: (1) Race Across America (RAAM) — 4,800 km USA coast-to-coast; 7-12 days for solo; team formats faster. (2) Transcontinental Race (TCR) — self-supported ~4,000 km Europe crossing; started 2013. (3) Paris-Brest-Paris (PBP) — historic 1,200 km ride every 4 years since 1891. (4) Tour Divide — 4,400 km Continental Divide off-road route. (5) Race Across France + various National Ultra races. Legendary riders: Kristof Allegaert (Belgium — TCR multi-time winner), Fiona Kolbinger (Germany — 2019 TCR overall winner), Christoph Strasser (Austria — RAAM 5× winner), Marko Baloh (Slovenia — RAAM 3× solo winner), Jasmijn Muller (Netherlands — ultra-cycling legend), Emily Chappell (UK — Transcontinental winner). Sport requires extreme mental + physical resilience + strategic sleep management.",

  category: "adventure-extreme-sports",
  subCategory: "extreme endurance cycling — solo + team ultra-distance",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isProfessional: false,
  season: "summer",
  era: "19th-century",
  popularity: "major",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (Paris-Brest-Paris 1891); USA (RAAM 1982); Europe (Transcontinental Race 2013)",
  estimatedOrigin: "Paris-Brest-Paris founded 1891; Race Across America 1982; Transcontinental Race 2013",

  players: { min: 1, max: 8, note: "Solo + 2-person + 4-person + 8-person team formats." },
  field: {
    surfaceName: "Public roads + occasional off-road (Tour Divide)",
    dimensions: "3,000-8,000 km total distance; various routes; 5-25 days duration",
    description: "Cross-country routes over public roads; riders navigate independently via GPS + physical maps; support vehicles allowed in RAAM; self-supported in TCR + PBP.",
  },
  equipment: [
    { name: "Road bicycle (typically)", description: "Endurance-focused road bike; disc brakes + wider tires for varied surfaces; aerodynamic seating position. Cost $3K-$10K entry to competitive." },
    { name: "Extensive lighting + reflective gear", description: "Multiple headlights + tail lights + reflective clothing for night riding; safety-critical." },
    { name: "GPS + navigation", description: "Garmin/Wahoo device + phone backup; route pre-loaded." },
    { name: "Nutrition + hydration system", description: "Continuous eating + drinking; 500-800 calories per hour typical for 24+ hour effort." },
    { name: "Weather protection", description: "Rain gear + wind gear + thermal for varied conditions." },
    { name: "Bike lights + safety triangle (RAAM)", description: "RAAM requires safety triangle + lights + support vehicle." },
    { name: "Cardiovascular monitoring", description: "Heart rate + power meter for pacing." },
  ],
  duration: {
    approximateMinutes: 10080,
    structure: "Solo: 7-25 days continuous; Team: 3-8 days. Minimal sleep (2-4 hours per day) typical.",
  },
  objective: "Complete route in fastest total time; solo vs. team formats separate; individual class standings.",
  matchStructure: "Start time individual; time counts continuously until finish. Support vehicle assistance (RAAM) or self-supported (TCR/PBP). No time bonuses.",

  basicRules: [
    { title: "Complete route in fastest total time", body: "Continuous time from start to finish; sleep counts against clock." },
    { title: "GPS tracking mandatory", body: "Live GPS tracking for spectators + officials; safety infrastructure." },
    { title: "Support vs. self-supported formats", body: "RAAM allows support vehicles + crew; TCR requires self-supported (rider carries own gear + buys food)." },
    { title: "No drafting", body: "Drafting behind support vehicles or other riders = time penalty or DQ." },
    { title: "Safety infrastructure required", body: "Lights + reflective gear + safety triangle (RAAM); rider must maintain visibility." },
    { title: "Mandatory rest checks (some events)", body: "Some events have mandatory rest stops; others fully continuous." },
  ],
  scoring: {
    summary: "Fastest total time wins. Solo + team categories separate.",
    winCondition: "Fastest total time in category.",
    breakdown: [
      { action: "Solo finish (typical elite)", points: "7-12 days RAAM; 8-15 days TCR" },
      { action: "Team formats", points: "3-8 days depending on team size" },
      { action: "Course records", points: "Historic recognition; often career-defining" },
    ],
  },

  positions: [
    { name: "Rider", role: "Solo endurance athlete.", count: 1 },
    { name: "Team member (RAAM)", role: "1 of 2-8 in team relay.", count: 8 },
    { name: "Support crew (RAAM)", role: "Vehicle driving + nutrition + medical." },
  ],
  officiating: {
    officials: ["Race Director", "Course marshals (checkpoint stations)", "Timing officials", "Medical support"],
    summary: "Multi-day event officiating; GPS tracking + checkpoint verification.",
  },

  governingBodies: [
    { name: "World Ultra Cycling Association (WUCA)", founded: 2001, headquarters: "USA", website: "https://ultracycling.com" },
    { name: "Race Across America (RAAM organizer)", founded: 1982, headquarters: "USA", website: "https://raceacrossamerica.org" },
    { name: "Transcontinental Race (TCR organizer)", founded: 2013, headquarters: "UK", website: "https://transcontinental.cc" },
    { name: "Audax Club Parisien (PBP organizer)", founded: 1904, headquarters: "France" },
  ],
  majorCompetitions: [
    { name: "Race Across America (RAAM)", frequency: "annual (June)", founded: 1982, region: "USA coast-to-coast" },
    { name: "Transcontinental Race (TCR)", frequency: "annual (July-August)", founded: 2013, region: "Europe crossing" },
    { name: "Paris-Brest-Paris (PBP)", frequency: "quadrennial", founded: 1891, region: "France (1,200 km loop)" },
    { name: "Tour Divide", frequency: "annual (June)", founded: 2008, region: "Continental Divide USA + Canada" },
    { name: "Race Around Slovenia", frequency: "annual", founded: 2005, region: "Slovenia" },
    { name: "Race Around Ireland", frequency: "annual", founded: 2008, region: "Ireland" },
  ],
  countriesPlayed: ["US", "GB", "DE", "AT", "SI", "NL", "BE", "AU", "IE", "IT", "FR", "PL", "CH"],
  famousAthletes: [
    "Kristof Allegaert (Belgium — TCR multi-time winner)",
    "Fiona Kolbinger (Germany — 2019 TCR overall winner; first women's overall)",
    "Christoph Strasser (Austria — RAAM 5× winner + course record)",
    "Marko Baloh (Slovenia — RAAM 3× solo winner)",
    "Jasmijn Muller (Netherlands — ultra-cycling legend)",
    "Emily Chappell (UK — Transcontinental winner)",
    "Julian Watts (UK — TCR podium)",
    "Ulrich Bartholmoes (Germany — long-distance rider)",
  ],
  records: [
    { title: "Fastest RAAM solo (course record)", holder: "Christoph Strasser (Austria)", value: "7 days 15 hours (2014); course record for 4,800 km", year: 2014 },
    { title: "First women's TCR overall winner", holder: "Fiona Kolbinger (Germany)", value: "2019 TCR; first woman to win overall; historic gender-parity moment", year: 2019 },
    { title: "Paris-Brest-Paris longevity", holder: "PBP", value: "Quadrennial since 1891; sport's oldest continuous ride", year: 2024 },
    { title: "RAAM longevity", holder: "Race Across America", value: "Annual since 1982; iconic USA coast-to-coast ride", year: 2024 },
  ],

  variants: ["raam-race-across-america", "tcr-transcontinental-race-self-supported", "pbp-paris-brest-paris-historic", "tour-divide-off-road-continental-divide", "national-ultra-races"],
  relatedSports: ["cycling", "endurance-events", "adventure-racing", "mountain-biking-ultra"],

  skills: ["extreme cardiovascular endurance", "sleep management + strategic rest", "nutrition + hydration over 24+ hours", "route navigation + strategy", "mental resilience (multi-day suffering)"],

  terminology: [
    { term: "Ultra-Cycling", meaning: "Cycling races of 3,000-8,000 km over 5-25 days." },
    { term: "RAAM", meaning: "Race Across America; 4,800 km USA coast-to-coast." },
    { term: "TCR", meaning: "Transcontinental Race; self-supported ~4,000 km Europe crossing." },
    { term: "PBP", meaning: "Paris-Brest-Paris; historic 1,200 km ride every 4 years." },
    { term: "Self-supported", meaning: "Rider carries own gear + buys food; no support vehicles." },
    { term: "Team RAAM", meaning: "2, 4, or 8-person team relay format." },
    { term: "Bivvy", meaning: "Short sleep stop; typically 2-4 hours." },
    { term: "Course record", meaning: "Fastest time ever recorded on route." },
  ],

  faq: [
    { question: "What is Ultra-Distance Cycling?", answer: "Extreme endurance cycling discipline where riders complete races of 3,000-8,000 km over 5-25 days with minimal sleep. Distinct from professional Grand Tours (Tour de France, Giro d'Italia) which allow rest days + drafting + team support. Ultra events are typically self-supported + non-stop. Iconic events: RAAM (USA), TCR (Europe), PBP (France historic), Tour Divide (off-road)." },
    { question: "What is Race Across America (RAAM)?", answer: "The most iconic ultra-cycling event. 4,800 km USA coast-to-coast (California to Maryland). Annual since 1982 (June start). Solo class: 7-12 days for elite; team formats (2, 4, 8 riders) faster. Riders average 350-500 km per day; sleep 2-4 hours per night. Christoph Strasser (Austria) holds course record: 7 days 15 hours (2014). Physical + mental resilience challenges extreme; support crew critical." },
    { question: "How is Ultra-Cycling different from Grand Tours (Tour de France)?", answer: "Grand Tours: 21-day stage races with rest days, drafting in peloton, team support, professional structure. Ultra-Cycling: continuous multi-day events with minimal sleep, no drafting (or limited), self-supported (TCR/PBP) or supported (RAAM). Grand Tours ~3,500 km over 21 days; Ultra events 3,000-8,000 km in 5-25 days continuous. Different tactics + physiology + preparation." },
    { question: "Who is the greatest ultra-distance cyclist?", answer: "Multiple candidates: (1) Christoph Strasser (Austria) — RAAM 5× winner + course record. (2) Marko Baloh (Slovenia) — RAAM 3× solo winner. (3) Kristof Allegaert (Belgium) — TCR multi-time winner. (4) Fiona Kolbinger (Germany) — 2019 TCR overall winner (first woman overall). Different events + eras produce different answers." },
    { question: "Is Ultra-Distance Cycling in the Olympics?", answer: "No. UCI-sanctioned road cycling is Olympic but ultra-distance not. Ultra-cycling is amateur-focused sport with dedicated global community + iconic events (RAAM, TCR, PBP)." },
  ],

  wikipediaTitle: "Ultramarathon cycling",
  sources: [{ label: "RAAM", url: "https://raceacrossamerica.org", publisher: "RAAM" }, { label: "TCR", url: "https://transcontinental.cc", publisher: "TCR" }, { label: "Wikipedia — Ultramarathon cycling", url: "https://en.wikipedia.org/wiki/Ultra-distance_cycling", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

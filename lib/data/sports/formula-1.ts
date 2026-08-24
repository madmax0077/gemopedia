import type { Sport } from "@/lib/types";

export const formula1: Sport = {
  id: "formula-1",
  slug: "formula-1",
  name: "Formula 1",
  officialName: "FIA Formula One World Championship",
  aliases: ["F1", "Grand Prix racing"],
  shortDescription:
    "The pinnacle of open-wheel single-seater motor racing — 20 drivers, 10 teams, 24 grands prix, one world championship.",
  longDescription:
    "Formula 1 is the highest class of international single-seater open-wheel racing. Twenty drivers representing ten constructors compete in a season of 24 (in 2026) Grands Prix on circuits across the world, from historic venues (Monza, Silverstone) to modern street tracks (Singapore, Miami). Points from every race — plus sprint races on selected weekends — determine both the Drivers' World Championship and the Constructors' World Championship. Cars are hybrid V6 turbo prototypes reaching over 370 km/h, developed under strict aerodynamic, power-unit and cost-cap regulations.",

  category: "motor-sports",
  subCategory: "open-wheel single-seater",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "Europe",
  estimatedOrigin: "1950 (first FIA World Championship round at Silverstone)",

  players: { note: "20 drivers per race; 2 drivers per team; 10 teams per season." },
  field: {
    surfaceName: "circuit",
    dimensions: "Varies — permanent circuits 4–7 km, street circuits similar, race distance ~305 km.",
    description:
      "Purpose-built circuits, semi-permanent street circuits or hybrid layouts. Every venue has DRS (drag reduction) zones marked to allow overtaking on designated straights.",
  },
  equipment: [
    { name: "Chassis", description: "Carbon-fibre monocoque built by each constructor; strict FIA regulations on dimensions and weight (minimum 800 kg with driver, 2025)." },
    { name: "Power unit", description: "1.6 L V6 turbo hybrid producing ~1000 bhp (combustion + MGU-K + MGU-H). New regulations for 2026 shift to 50% electric." },
    { name: "Tyres", description: "Pirelli slick compounds C0–C5, plus intermediate and full-wet options. Teams must use two different compounds in every dry race." },
    { name: "Halo", description: "Titanium head protection device mandatory since 2018." },
  ],
  duration: {
    approximateMinutes: 120,
    structure: "Race distance = whichever comes first: 305 km (260 km Monaco), or 2-hour time limit (3 hours if the race is red-flagged).",
    note: "A Grand Prix weekend also includes free practice (Fri/Sat), qualifying (Sat) and — on 6 weekends per year — a shorter sprint race (Sat).",
  },
  objective: "Cross the chequered flag first (race win) and accumulate the most championship points across the season.",
  matchStructure:
    "Weekend runs Fri–Sun: free practice, qualifying (3 knockout stages: Q1/Q2/Q3), then the Grand Prix on Sunday. Points 25-18-15-12-10-8-6-4-2-1 for the top 10; +1 for the fastest lap if inside the top 10.",

  basicRules: [
    { title: "Starting grid", body: "Grid positions are set by qualifying: fastest in Q3 starts on pole. Penalties (grid drops) apply for gearbox changes, engine changes beyond the season allowance, or on-track incidents." },
    { title: "Flags", body: "Green (all clear), yellow (danger — no overtaking), red (race stopped), blue (lapped car must let leader through), black-and-white (unsporting behaviour warning), chequered (finish)." },
    { title: "Pit stops", body: "Compulsory in dry races — teams must fit at least two different tyre compounds. Modern crews can change all four wheels in under 2 seconds." },
    { title: "DRS", body: "The rear wing opens on designated straights to reduce drag, IF the driver is within 1 second of the car ahead at the DRS detection point." },
    { title: "Safety car & VSC", body: "Deployed after crashes or debris — cars must maintain gap and speed; overtaking is prohibited until the restart." },
  ],
  advancedRules: [
    { title: "Parc fermé", body: "From qualifying to the race, cars are 'locked in' — teams can only make regulation-approved changes." },
    { title: "Track limits", body: "All four wheels off-track voids a lap time; repeated abuse in the race brings a penalty (5-second, 10-second or drive-through)." },
    { title: "Cost cap", body: "Each team is limited to $135 M (2024) in car-development spend — a landmark rule to level the playing field." },
    { title: "Sprint format", body: "Six weekends have a shorter Saturday race (100 km) that awards points 8-7-6-5-4-3-2-1 for the top 8." },
  ],
  scoring: {
    summary: "Points are awarded to the top 10 finishers; +1 to the fastest-lap holder if inside the top 10.",
    breakdown: [
      { action: "Race win", points: "25 pts" },
      { action: "2nd", points: "18 pts" },
      { action: "3rd", points: "15 pts" },
      { action: "10th", points: "1 pt" },
      { action: "Fastest lap (in top 10)", points: "+1 pt" },
    ],
    winCondition: "Highest championship points total across the season wins the World Drivers' Championship; team totals decide the Constructors' Championship.",
  },
  penalties: [
    { title: "5-second / 10-second time penalty", body: "Added to the driver's race time — served at the next pit stop or added at the end of the race." },
    { title: "Drive-through / stop-and-go", body: "Serious infractions — driver must enter the pit lane and drive through / stop for 10 seconds without service." },
    { title: "Grid penalty", body: "Applied for future races — usually 5, 10 or 15 grid positions for engine / gearbox changes or on-track offences." },
  ],
  fouls: [
    { title: "Forcing another driver off track", body: "Usually a 5–10 second penalty and 2 licence points." },
    { title: "Speeding in the pit lane", body: "Automatic penalty — 5-second time penalty or drive-through." },
  ],
  winningConditions: ["Cross the chequered flag first.", "Score more championship points than every other driver over the season (WDC).", "Score more championship points than every other team (WCC)."],

  positions: [
    { name: "Driver", role: "The person behind the wheel.", count: 1 },
    { name: "Race engineer", role: "The engineer talking to the driver over the radio during the session." },
    { name: "Strategy engineer", role: "Calls pit-stop timing and tyre choices." },
    { name: "Pit crew", role: "≈20 people servicing the car during a pit stop." },
  ],
  officiating: {
    officials: ["Race director", "Stewards (rotating panel of 4)", "Marshals (hundreds trackside)", "Safety car & medical car"],
    summary: "The race director controls the session; stewards adjudicate on-track incidents and issue penalties.",
  },

  governingBodies: [
    { name: "Fédération Internationale de l'Automobile", acronym: "FIA", founded: 1904, headquarters: "Paris, France", website: "https://www.fia.com" },
    { name: "Formula One Group", acronym: "F1", founded: 1950, headquarters: "London, UK", website: "https://www.formula1.com" },
  ],
  majorCompetitions: [
    { name: "FIA Formula One World Championship", frequency: "annual", founded: 1950, region: "worldwide" },
    { name: "Monaco Grand Prix", frequency: "annual", founded: 1929, region: "Monaco", note: "The 'jewel in the crown' — a street circuit through the Monte Carlo casino district." },
    { name: "British Grand Prix", frequency: "annual", founded: 1950, region: "UK", note: "Round 1 of the very first World Championship in 1950." },
    { name: "Italian Grand Prix (Monza)", frequency: "annual", founded: 1922, region: "Italy", note: "The 'Temple of Speed'." },
  ],
  countriesPlayed: ["GB", "IT", "DE", "FR", "ES", "US", "BR", "AR", "JP", "AE", "SA", "AU", "SG"],
  famousAthletes: ["Juan Manuel Fangio", "Sir Jackie Stewart", "Ayrton Senna", "Michael Schumacher", "Lewis Hamilton", "Max Verstappen", "Niki Lauda"],
  records: [
    { title: "Most drivers' titles", holder: "Michael Schumacher & Lewis Hamilton", value: "7 titles each", year: 2020 },
    { title: "Most race wins", holder: "Lewis Hamilton", value: "104 wins", year: 2024 },
    { title: "Most pole positions", holder: "Lewis Hamilton", value: "104 poles", year: 2024 },
  ],

  variants: ["formula-2", "formula-3", "formula-e", "indycar"],
  relatedSports: ["motogp", "rally", "nascar"],

  skills: ["reaction time", "spatial awareness", "physical fitness (G-force endurance)", "mental focus", "car-setup understanding"],

  terminology: [
    { term: "Pole position", meaning: "The first place on the starting grid — earned by the fastest qualifier." },
    { term: "DRS", meaning: "Drag Reduction System — the rear wing opens on designated straights to allow overtaking." },
    { term: "Undercut", meaning: "Pitting one lap before the driver ahead to gain time on fresh tyres." },
    { term: "Formation lap", meaning: "The pre-race lap that warms up tyres and brakes before the standing start." },
    { term: "Blue flag", meaning: "Waved at a lapped car; it must let the leader through immediately." },
    { term: "Parc fermé", meaning: "The state from qualifying to the race in which teams can only make FIA-approved changes." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "What is F1?", body: "Ten teams, two drivers each, ~24 races per year for two world championships (drivers' and constructors').", anchor: "hero" },
      { title: "A Grand Prix weekend", body: "Free practice Friday, qualifying Saturday, race Sunday.", anchor: "match-structure" },
      { title: "Scoring & points", body: "25-18-15-12-10-8-6-4-2-1 for the top 10; +1 for fastest lap in the top 10.", anchor: "scoring" },
      { title: "Pit stops & tyre strategy", body: "You must use two different tyre compounds in a dry race.", anchor: "rules" },
    ] },
  ],
  diagrams: [
    {
      id: "f1-track",
      title: "Anatomy of an F1 circuit",
      component: "f1-track",
      slot: "playing-area",
    },
  ],
  faq: [
    { question: "How fast can an F1 car go?", answer: "Modern cars exceed 370 km/h on straights (record 397.36 km/h — Valtteri Bottas, Mexico 2016)." },
    { question: "Why must teams use two tyre compounds?", answer: "To force strategic pit stops and reward tyre management — this is only mandatory in dry races." },
    { question: "How much does an F1 team spend?", answer: "The cost cap in 2024 is $135 M for car development (some categories excluded)." },
  ],

  sources: [
    { label: "FIA Formula 1 Sporting Regulations", publisher: "FIA", url: "https://www.fia.com/regulation/category/110" },
    { label: "Formula1.com — Official rules", publisher: "Formula One Management", url: "https://www.formula1.com/en/racing/2025.html" },
  ],
  lastVerified: "2026-08-20",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const baja1000: Sport = {
  id: "baja-1000",
  slug: "baja-1000",
  name: "Baja 1000",
  officialName: "SCORE Baja 1000",
  aliases: ["Baja Mil", "SCORE Baja 1000", "Mexican 1000"],
  shortDescription:
    "Iconic annual off-road race down 1000+ miles of Mexico's Baja California Peninsula since 1967 — grueling desert terrain, dust storms, night stages, and mechanical carnage. Signature event of North American off-road racing; features cars, trucks, motorcycles, ATVs, UTVs.",
  longDescription:
    "The SCORE Baja 1000 is an iconic annual off-road endurance race held every November on the Baja California Peninsula, Mexico — first run 1967 (as the Mexican 1000). The race covers 800-1300+ miles depending on year's route (loop from Ensenada or point-to-point Ensenada→La Paz), traversing brutal desert terrain, mountain passes, silt beds, whoops sections, dry lake beds, cactus fields, night stages under headlights, and (in point-to-point years) full peninsula length. Multiple classes: Trophy Truck (unlimited 800hp trucks — signature class), Class 1 buggies, Class 8 stock trucks, Class 10 Baja bugs, motorcycles (multiple), ATV, UTV. Notable teams have run since 1960s (Robby Gordon, McMillin family, Herbst brothers). Overall winners typically finish 20-30+ hours; team relays allow multiple drivers. Signature stat: ~50% DNF rate — mechanical + navigational + terrain-related failures common. Cultural icon of off-road racing worldwide; Baja 1000 T-shirts + heritage merch iconic in off-road culture.",

  category: "motor-sports",
  subCategory: "off-road desert endurance race",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "MX",
  regionOfOrigin: "Baja California Peninsula, Mexico (start typically Ensenada, Baja California)",
  estimatedOrigin: "First held 1967 as the Mexican 1000; SCORE International sanctioning body took over 1974; runs annually every November since",

  players: { min: 1, max: 4, note: "Solo (Ironman) or team of 2-4 drivers relay; multiple classes." },
  equipment: [
    { name: "Off-road race vehicle (varies by class)", description: "Trophy Truck class: 800hp 4WD trophy trucks (signature class); other classes: buggies, motorcycles, ATVs, UTVs." },
    { name: "Long-range fuel system + spare tires (multiple)", description: "800+ mile race requires long-range fuel + tire redundancy." },
    { name: "GPS + Sat phone + course notes", description: "Navigation critical; GPS + satellite communication for support crew." },
    { name: "Helmet + racing safety gear + fire suppression", description: "Standard motorsport safety kit." },
    { name: "Chase truck + support crew", description: "Support team meets racer at intervals for refueling + repairs + parts." },
  ],
  duration: { approximateMinutes: 1800, structure: "20-45 hours race duration for finishers; some non-Trophy Truck classes finish 24-40+ hours." },
  objective: "Finish 800-1300 mile course fastest within class; overall winner recognized.",
  matchStructure: "Endurance race from start to finish; classes race concurrently but scored separately.",

  basicRules: [
    { title: "Course varies year to year (loop or point-to-point)", body: "Odd years (typically) = loop from Ensenada; even years = point-to-point Ensenada → La Paz (~1300 miles)." },
    { title: "Class-based competition", body: "Trophy Truck, Class 1 unlimited buggy, Class 10, Class 8, Class 1600 (VW-powered), motorcycles (Open, Under 250cc, Vintage), ATV, UTV." },
    { title: "Fastest total time wins class", body: "Total elapsed time from start to finish wins." },
    { title: "Solo or team relay", body: "Ironman (solo) or team of 2-4 drivers relay allowed; solo Ironman is huge prestige." },
    { title: "GPS trackers mandatory", body: "All entries carry GPS trackers for tracking + safety." },
  ],
  advancedRules: [
    { title: "Chase crew rules", body: "Chase trucks may meet race vehicle at designated 'pit' locations along course for refueling + repairs; no mid-course assistance outside pit locations." },
    { title: "Night stages", body: "Most races include night driving — sunset ~5pm November; race continues 24 hours through night." },
    { title: "Pre-run prep", body: "Teams typically pre-run course weeks in advance to note terrain hazards; competitive advantage for well-scouted teams." },
    { title: "Silt bed hazards", body: "Deep sand + silt trap vehicles; teams equipped with recovery boards + winches." },
    { title: "'Booby traps' warning", body: "Historical (mostly stopped 1990s+) — locals sometimes place hazards along course; SCORE + Mexican authorities now enforce course security." },
  ],
  scoring: {
    summary: "Fastest total time (start to finish) wins class + overall.",
    winCondition: "Fastest total time.",
    breakdown: [
      { action: "Total elapsed time", points: "Fastest wins" },
      { action: "Missed checkpoint / off-course", points: "Time penalty or DNF" },
    ],
  },
  penalties: [
    { title: "Missed checkpoint", body: "Time penalty; multiple = DNF." },
    { title: "Course cut", body: "Time penalty or DQ." },
    { title: "Dangerous driving (endangering spectators)", body: "Time penalty + potential DQ + future ban." },
  ],

  positions: [
    { name: "Primary driver", role: "Main driver responsible for majority of miles.", count: 1 },
    { name: "Co-driver (navigator)", role: "GPS + course notes + navigation.", count: 1 },
    { name: "Relief drivers (team format)", role: "Alternate drivers for team relay format.", count: 2 },
  ],
  officiating: {
    officials: ["Race director + course marshals", "Timekeepers (checkpoints throughout)", "SCORE tech inspection team"],
    summary: "SCORE International officiates + tech inspection + checkpoint timekeeping + safety.",
  },

  governingBodies: [
    { name: "SCORE International", founded: 1974, headquarters: "Chula Vista, California, USA", website: "https://www.score-international.com" },
    { name: "NORRA (National Off-Road Racing Association, historical)", founded: 1967, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "SCORE Baja 1000", frequency: "annual (November)", founded: 1967, region: "Baja California Peninsula, Mexico" },
    { name: "SCORE Baja 500 (June)", frequency: "annual", founded: 1969, region: "Baja California" },
    { name: "SCORE San Felipe 250 (March)", frequency: "annual", founded: 1985, region: "San Felipe, Baja California" },
    { name: "Mint 400 (Las Vegas, complementary US off-road classic)", frequency: "annual", founded: 1968, region: "Nevada, USA" },
  ],
  countriesPlayed: ["MX (host)", "US (dominant competitors + teams)", "CA", "FR", "AU", "worldwide off-road racing community"],
  famousAthletes: [
    "Ivan 'Ironman' Stewart (USA) — 3× solo Baja 1000 winner (Class 8), iconic Toyota driver",
    "Robby Gordon (USA) — multiple Baja 1000 + Baja 500 wins, NASCAR/Off-road crossover",
    "Andy McMillin (USA) — multi-generation McMillin family Baja dynasty",
    "Rob MacCachren (USA) — multiple Trophy Truck victories",
    "Bruce + Roger Mears (USA) — off-road heritage family",
    "Larry + Tim Herbst (USA) — Herbst family dynasty",
    "Rod + Rhys Millen (New Zealand/USA) — Pikes Peak crossover competitors",
  ],
  records: [
    { title: "First Baja 1000", holder: "1967 Mexican 1000", value: "Won by Vic Wilson + Ted Mangels (Class 8), Vince Bruce + Vic Wilson (Meyers Manx buggy) tied 27h38m; birth of off-road racing", year: 1967 },
    { title: "Iconic Toyota Ironman", holder: "Ivan Stewart (USA)", value: "3 solo (Ironman) Baja 1000 wins + numerous podiums in Toyota-branded truck; iconic partnership", year: 1998 },
    { title: "Continuous 55+ years", holder: "SCORE Baja 1000", value: "Continuous annual event since 1967 (only cancelled briefly during 2020 COVID) — 55+ year legacy", year: 2024 },
    { title: "DNF rate", holder: "Baja 1000", value: "Historical DNF rate ~40-60% across classes due to terrain + mechanical + navigation demands — one of most punishing motorsport events", year: 2024 },
  ],

  variants: ["baja-1000-full-length-loop-or-point-to-point", "baja-500-shorter-june-event", "san-felipe-250-shorter-early-season", "mint-400-us-equivalent-nevada"],
  relatedSports: ["dakar-rally", "rally-raid", "off-road-racing", "trophy-truck-racing", "rally-cross", "pikes-peak-hillclimb"],

  skills: ["off-road driving (all terrain types: desert, silt, whoops, mountain, dry lake)", "endurance (24+ hour focus)", "vehicle mechanical knowledge (mid-course repairs)", "navigation + GPS + course-note reading", "team coordination (chase crew + relay drivers)", "resilience under mechanical failures + navigation errors"],
  strategies: [
    { title: "Pre-running course", body: "Weeks of pre-running to note terrain hazards + fast lines gives major competitive advantage; well-scouted teams win." },
    { title: "Chase crew logistics", body: "Well-timed pit stops (refuel + tires + repairs) minimize downtime; excellent chase crew is 30% of race performance." },
    { title: "Reliability > speed for solo Ironman", body: "Solo drivers must complete race — reliability + steady pace beats fast + broken." },
    { title: "Trophy Truck aerodynamics + suspension", body: "Class-leading Trophy Trucks have massive suspension travel (30in+) + custom aero for whoops sections." },
  ],

  terminology: [
    { term: "SCORE", meaning: "Sanctioning body — Southern California Off Road Enthusiasts International." },
    { term: "Trophy Truck", meaning: "Signature class — unlimited 800hp trucks." },
    { term: "Ironman", meaning: "Solo driver completing entire race without relief." },
    { term: "Chase crew", meaning: "Support team meeting racer at pit locations for refueling + repairs." },
    { term: "Whoops", meaning: "Long sequence of dirt bumps causing violent suspension movement." },
    { term: "Silt bed", meaning: "Deep powdery sand section — vehicle trap." },
    { term: "Booby traps", meaning: "Historical hazards placed by locals (mostly eliminated 1990s+)." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Compete in US off-road amateur circuits", body: "SCORE Baja 500 or Best in the Desert Nevada events serve as pipeline." },
      { title: "Team up as chase crew or co-driver first", body: "Learn logistics + course before running as primary driver." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete Baja 1000 in Trophy Truck or similar class", body: "Multiple registration classes accommodate different budgets + vehicles." },
      { title: "Solo Ironman entry for ultimate challenge", body: "Solo completion is one of motorsport's greatest endurance achievements." },
    ]},
  ],

  faq: [
    { question: "How is Baja 1000 different from Dakar Rally?", answer: "Baja 1000 is single Mexican peninsula run (800-1300 miles) over 20-45 hours; Dakar Rally is multi-stage international rally (10,000+ km) over 2 weeks with daily bivouacs. Both are off-road endurance but different scale + structure. Dakar is more famous internationally; Baja 1000 is dominant in North American off-road culture." },
    { question: "How dangerous is Baja 1000?", answer: "Very — desert crashes at speed, silt bed rollovers, night driving into obstacles, spectator hazards (fans traditionally camp along course + occasional collisions occur). Fatalities occur (both competitors + spectators). SCORE + Mexican authorities work continuously on safety improvements. Modern racing safety equipment (roll cages, HANS, fire suppression) reduces fatality rate significantly vs. 1970s-80s era." },
    { question: "How important is Baja 1000 to off-road culture?", answer: "Iconic. Baja 1000 is arguably THE foundational off-road racing event that established modern off-road racing culture. Winning a Baja 1000 is career-defining for any off-road racer. Merchandise + heritage extends far beyond active racing community — 'I finished Baja 1000' shirts are cultural markers in US Southwest + off-road community worldwide." },
  ],

  wikipediaTitle: "Baja 1000",
  sources: [
    { label: "SCORE International", url: "https://www.score-international.com", publisher: "SCORE International" },
    { label: "Wikipedia — Baja 1000", url: "https://en.wikipedia.org/wiki/Baja_1000", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const pikesPeakHillclimb: Sport = {
  id: "pikes-peak-hillclimb",
  slug: "pikes-peak-hillclimb",
  name: "Pikes Peak International Hill Climb",
  officialName: "The Broadmoor Pikes Peak International Hill Climb",
  aliases: ["PPIHC", "Pikes Peak Hill Climb", "Race to the Clouds", "Pikes Peak"],
  shortDescription:
    "Iconic annual motorsport hillclimb up 12.42 miles + 156 turns of Pikes Peak (4302m) in Colorado since 1916 — 2nd-oldest continuous motorsport event in USA (behind Indy 500). Signature event for open-class + electric vehicles; overall record 7:57.148 (Romain Dumas, 2018).",
  longDescription:
    "The Pikes Peak International Hill Climb (PPIHC), officially 'The Broadmoor Pikes Peak International Hill Climb', is the second-oldest continuous motorsport event in the United States (behind only the Indianapolis 500), first held 1916. The race climbs the iconic 12.42-mile (19.99 km) road up Pikes Peak in Colorado, USA — a public toll road starting at 2,864m elevation + summiting at 4,302m (14,115ft), navigating 156 turns through thinning oxygen. The signature 'Race to the Clouds' features multiple classes: Unlimited (open-cockpit prototype race cars), Time Attack (production-based), motorcycles, and electric vehicles. Overall course record 7:57.148 seconds set by Romain Dumas (France, VW ID.R electric prototype) in 2018 — the first sub-8-minute run. VW ID.R also broke the electric-vehicle Nürburgring record + Goodwood Festival record — proving electric race car superiority in these hillclimb formats. Legendary drivers: Bobby Unser, Bill Vukovich, Rod Millen, Nobuhiro Tajima, Sébastien Loeb (2013 record 8:13 in Peugeot 208 T16), Romain Dumas (multiple wins).",

  category: "motor-sports",
  subCategory: "hillclimb time trial (motor)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "summer",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "Colorado, USA (Pikes Peak Highway, Manitou Springs suburb of Colorado Springs)",
  estimatedOrigin: "First held 1916 (organized by Spencer Penrose to publicize new Pikes Peak Highway); 2nd-oldest continuous US motorsport event; VW ID.R record 2018",

  players: { min: 1, max: 1, note: "Individual timed run; multiple classes but 1-driver per vehicle." },
  equipment: [
    { name: "Race vehicle (varies by class)", description: "Unlimited class: open-cockpit prototype (all-wheel drive, high-downforce, often electric). Time Attack: modified production. Motorcycles: modified sportbikes." },
    { name: "Roll cage + racing safety equipment", description: "Full FIA/NHRA-spec safety cage + racing seat + belts + fire suppression." },
    { name: "Helmet + HANS device + racing suit", description: "Standard motorsport safety gear + high-altitude oxygen supplementation for driver." },
  ],
  duration: { approximateMinutes: 10, structure: "Race day: each competitor 1 timed run up mountain, 8-15 minutes typical; race weekend runs Wed-Sun." },
  objective: "Set fastest time up 12.42-mile course from start line (2,864m) to summit (4,302m).",
  matchStructure: "Single-run time trial per competitor per class; class winners + overall fastest recognized.",

  basicRules: [
    { title: "12.42-mile (19.99 km) course up Pikes Peak Highway", body: "Start at 2,864m elevation; summit at 4,302m. 156 turns; 1,440m elevation gain." },
    { title: "One timed run per class per year", body: "Race day (last Sunday of June typically): each competitor 1 shot; no re-runs." },
    { title: "Multiple classes", body: "Unlimited (open prototype), Time Attack 1 + 2 (modified production), Pikes Peak Open (older classes), motorcycles (multiple), electric vehicles." },
    { title: "Fastest time within class + overall wins", body: "Class winners + overall fastest recognized; overall record is prestige metric." },
  ],
  advancedRules: [
    { title: "Weather-dependent (rain/snow/hail possible June)", body: "Colorado high-altitude June weather variable; races have been cancelled or affected by snow + hail." },
    { title: "Altitude engine derating", body: "Combustion engines lose ~40% power at 4,300m due to thin air — turbocharging + supercharging critical; electric vehicles unaffected (VW ID.R's competitive advantage 2018+)." },
    { title: "Pavement (fully paved since 2012)", body: "Course fully paved 2012; historically mixed pavement + gravel through 20th century." },
    { title: "Full course closure race day", body: "Public road closed to public 4am-2pm race day; competitors have full course exclusivity." },
  ],
  scoring: {
    summary: "Fastest time up mountain wins class + overall.",
    winCondition: "Fastest time.",
    breakdown: [{ action: "Total course time", points: "Fastest wins" }],
  },
  penalties: [
    { title: "Course cut (short-cutting)", body: "Time penalty or DNF." },
    { title: "Safety violation (unsafe driving)", body: "DNF + potential ban." },
  ],

  positions: [{ name: "Driver (competitor)", role: "Solo hillclimb driver managing car + course + altitude.", count: 1 }],
  officiating: {
    officials: ["Race director + course marshals (many along route)", "Timekeepers (start + finish)", "Safety crew"],
    summary: "Course marshals stationed throughout 156 turns; timekeepers at start + finish.",
  },

  governingBodies: [
    { name: "Pikes Peak International Hill Climb organization", founded: 1916, headquarters: "Colorado Springs, Colorado, USA", website: "https://www.ppihc.org" },
    { name: "USAC (US Auto Club, historical sanctioning body)", founded: 1956, headquarters: "Indianapolis, Indiana" },
  ],
  majorCompetitions: [
    { name: "The Broadmoor Pikes Peak International Hill Climb", frequency: "annual (last Sunday of June)", founded: 1916, region: "Pikes Peak, Colorado" },
  ],
  countriesPlayed: ["US", "FR", "DE", "JP", "GB", "NZ", "IT", "CA", "AT", "worldwide (international competitors annually)"],
  famousAthletes: [
    "Bobby Unser (USA) — 13 PPIHC victories, member of Unser racing dynasty",
    "Bill Vukovich Sr. + Jr. (USA) — Pikes Peak dynasty",
    "Rod Millen (New Zealand) — multiple wins in 1990s, iconic Toyota Celica",
    "Nobuhiro 'Monster' Tajima (Japan) — first sub-10 minute time (2011, 9:51 in Suzuki Escudo)",
    "Sébastien Loeb (France) — 2013 record 8:13.878 in Peugeot 208 T16 (huge margin)",
    "Romain Dumas (France) — 2018 record 7:57.148 in VW ID.R electric — first sub-8 minute",
    "Rhys Millen (USA/NZ) — multiple wins; Rod Millen's son",
  ],
  records: [
    { title: "Overall course record", holder: "Romain Dumas (France, VW ID.R)", value: "7:57.148 (June 24, 2018) — first sub-8 minute + electric vehicle dominance demonstration", year: 2018 },
    { title: "Most PPIHC wins", holder: "Bobby Unser", value: "13 wins across various classes 1956-1986; dynasty legacy", year: 1986 },
    { title: "First sub-10 minute time", holder: "Nobuhiro 'Monster' Tajima", value: "9:51.278 (2011, Suzuki Escudo) — historic barrier broken", year: 2011 },
    { title: "First sub-9 minute time", holder: "Sébastien Loeb", value: "8:13.878 (2013, Peugeot 208 T16) — massive 1:37 improvement over prior record", year: 2013 },
    { title: "Second-oldest US motorsport event", holder: "PPIHC", value: "Continuous since 1916 (only Indianapolis 500 older, since 1911)", year: 2024 },
  ],

  variants: ["unlimited-open-prototype-class", "time-attack-modified-production", "electric-vehicle-modification-class", "motorcycle-classes-multiple", "vintage-heritage-class"],
  relatedSports: ["hillclimb", "rally-racing", "time-attack", "goodwood-festival-of-speed", "nurburgring-lap-record", "rally-raid"],

  skills: ["hillclimb driving (156 turns)", "high-altitude driving (thin oxygen)", "commit-level bravery (blind corners at speed)", "vehicle setup (aerodynamics + suspension for altitude)", "class-specific expertise (open prototype vs. production)"],
  strategies: [
    { title: "Electric vehicle advantage 2018+", body: "Electric motors unaffected by altitude power derating; VW ID.R's 2018 record demonstrated dominance." },
    { title: "Aerodynamic downforce for high-speed corners", body: "Open-cockpit prototypes generate massive downforce for turn commitment." },
    { title: "Turbo/supercharger for combustion engines", body: "Forced induction compensates for altitude oxygen loss." },
    { title: "Suspension setup for pavement + elevation", body: "Ride height + damping tuned for course variation + altitude-related density changes." },
  ],

  terminology: [
    { term: "Race to the Clouds", meaning: "PPIHC's iconic nickname referencing summit at 4,300m." },
    { term: "The Peak", meaning: "Pikes Peak — the mountain (14,115 ft / 4,302m)." },
    { term: "Sector", meaning: "Segment of course; sector times used for split analysis." },
    { term: "Unlimited class", meaning: "Open-prototype class with no rules restrictions — historical dominant class." },
    { term: "Sub-8", meaning: "Sub-8-minute run — the barrier broken by Romain Dumas 2018." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Attend PPIHC as spectator or media", body: "Race weekend late June every year; spectators camp on mountain." },
      { title: "Regional US hillclimb events (SCCA)", body: "Sports Car Club of America hosts amateur hillclimbs across US serving as pipeline." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete in PPIHC (open entry)", body: "PPIHC open to registered competitors; entry fees + technical inspection required." },
      { title: "Manufacturer/factory-backed program", body: "VW + Peugeot + Suzuki + Acura + Toyota all fielded factory prototypes historically." },
    ]},
  ],

  faq: [
    { question: "Why do electric vehicles dominate Pikes Peak now?", answer: "Altitude: at 4,300m summit, air is ~40% thinner than sea level. Combustion engines lose ~40% power (turbocharging partially compensates). Electric motors are unaffected by air density — full power at any altitude. VW ID.R's 2018 record proved this decisively — 15+ second improvement over prior gas-engine record. Electric drive is fundamental structural advantage for altitude hillclimbs." },
    { question: "How dangerous is Pikes Peak?", answer: "Historically very — 156 turns + no barriers on many sections + drops off cliff edges to thousands of feet below. Fatalities have occurred (Bobby Unser Jr. survived crash 1990s + others). Course fully paved 2012 (safer than gravel era). Modern safety cages + gear reduce risk. Still one of world's most dangerous motorsport courses due to unforgiving terrain." },
    { question: "How prestigious is Pikes Peak?", answer: "Highly — second-oldest US motorsport event (1916), international manufacturer participation, historic drivers list (Unser, Loeb, Dumas). Not as globally famous as F1 races but hugely prestigious within motorsport community. Pikes Peak record represents mastery of altitude + terrain + car design all together." },
  ],

  wikipediaTitle: "Pikes Peak International Hill Climb",
  sources: [
    { label: "PPIHC Official", url: "https://www.ppihc.org", publisher: "Pikes Peak International Hill Climb" },
    { label: "Wikipedia — Pikes Peak International Hill Climb", url: "https://en.wikipedia.org/wiki/Pikes_Peak_International_Hill_Climb", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const hillclimb: Sport = {
  id: "hillclimb",
  slug: "hillclimb",
  name: "Hillclimb",
  officialName: "Hillclimb Racing (FIA European Hill Climb Championship / Pikes Peak)",
  aliases: ["Hill Climb", "Uphill Race", "Time-Trial Hillclimb"],
  shortDescription:
    "Motorsport where drivers race uphill against the clock — solo timed runs on twisting mountain roads; iconic Pikes Peak International Hill Climb (Colorado) + FIA European Hill Climb Championship + Goodwood Festival of Speed hill.",
  longDescription:
    "Hillclimb is a motorsport where drivers race solo up a twisting mountain road against the clock — fastest time wins. One of motorsport's oldest disciplines; the first Pikes Peak International Hill Climb was held in 1916 (making it 2nd oldest US motor race after Indianapolis 500). Iconic events: (1) Pikes Peak International Hill Climb ('The Race to the Clouds') — 20 km, 156 corners, 4,300m elevation gain to 4,300m altitude, held annually since 1916 in Colorado. (2) FIA European Hill Climb Championship — continental circuit spanning 8-10 rounds across Europe. (3) Goodwood Festival of Speed hillclimb — invitation-only summer event in England; historic + celebration event. Cars: nearly unlimited categories — from production sports cars to open-wheel prototypes to purpose-built electric vehicles (Volkswagen ID.R set Pikes Peak record in 2018 with electric power). Legendary drivers: Nobuhiro 'Monster' Tajima (Japan — 6× Pikes Peak overall winner), Sébastien Loeb (France — 2013 Pikes Peak record 8:13.8 in Peugeot 208 T16 Pikes Peak), Romain Dumas (France — 2018 Pikes Peak record 7:57.148 in Volkswagen ID.R electric). No Olympic pathway.",

  category: "motor-sports",
  subCategory: "motorsport — solo timed uphill racing",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "summer",
  era: "19th-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "United States (Pikes Peak 1916) + Europe (continental hill climbs from 1900s) — historic + geographically dispersed",
  estimatedOrigin: "European hill climbs from 1900s; Pikes Peak first race 1916; FIA European Hill Climb Championship 1957",

  players: { min: 1, max: 1, note: "Individual solo timed runs; no wheel-to-wheel racing." },
  field: {
    surfaceName: "Twisting mountain road",
    dimensions: "Pikes Peak: 20 km, 156 corners, 4,300m elevation gain. European hillclimbs typically 3-8 km. Race time: 2-15 min per run.",
    description: "Public mountain roads closed for race weekend; typically paved. Pikes Peak historic 156 corners; European hills feature tight technical sections. Cliff-side + no run-off areas make sport dangerous.",
  },
  equipment: [
    { name: "Various vehicles (nearly unlimited)", description: "Production sports cars, GT racers, open-wheel prototypes, rally cars, purpose-built electric vehicles. Pikes Peak categorizes by displacement + drivetrain." },
    { name: "Full FIA safety cage + fire suit + helmet + HANS", description: "Standard motorsport safety; roll cage, fireproof suit, HANS device." },
    { name: "Slick + wet tires", description: "Michelin + others; tire choice per conditions." },
    { name: "Purpose-built aero packages", description: "Elite Pikes Peak cars feature massive rear wings + front splitters; downforce critical for corner speed at altitude." },
    { name: "Data logging + telemetry", description: "Advanced systems for corner-by-corner analysis." },
  ],
  duration: {
    approximateMinutes: 5,
    structure: "Each run: 2-15 min. Full event: 2-3 days (practice + qualifying + race). Pikes Peak race day: 6-8 hours across all classes.",
  },
  objective: "Complete uphill course in fastest time. Winner has fastest single time (Pikes Peak) or best of 2-3 timed runs (European hillclimbs).",
  matchStructure: "Practice + qualifying (2 days) → race day. Pikes Peak: single timed run in class + overall. European: 2-3 timed runs; best time counted. Categories separated by vehicle type.",

  basicRules: [
    { title: "Solo timed runs", body: "One car on course at a time; no wheel-to-wheel racing." },
    { title: "Fastest time wins class + overall", body: "Overall fastest across all classes = King of the Mountain (Pikes Peak) or overall winner." },
    { title: "Multiple classes by vehicle type", body: "Class-based competition: production, GT, open-wheel, electric, motorcycle (Pikes Peak)." },
    { title: "Complete course without incident", body: "Cutting course or missing course markers = DQ." },
    { title: "Weather-dependent", body: "Rain + snow can delay or cancel; altitude weather at Pikes Peak often extreme." },
    { title: "Safety infrastructure varies", body: "Public mountain roads have minimal run-off; cliff-side crashes are catastrophic." },
  ],
  advancedRules: [
    { title: "Pikes Peak class structure", body: "Categories include Unlimited (nearly unlimited), Time Attack 1 + 2, Open Wheel, Pikes Peak Open, Exhibition, Electric, Motorcycles (multiple classes)." },
    { title: "European FIA classes", body: "Category 1 (production cars), Category 2 (sports cars), Category 3 (single-seaters); further subdivided by displacement." },
    { title: "Altitude effect on engines (Pikes Peak)", body: "Course starts at 2,862m + ends at 4,300m. Engines lose 30-40% power at summit; turbos + electric less affected." },
    { title: "Course record recognition", body: "Overall course record = 'King of the Mountain' at Pikes Peak; European Championship overall winner." },
    { title: "Practice + qualifying limits", body: "Limited practice runs per class to preserve public road + minimize environmental impact." },
    { title: "Safety measures (from historic tragedies)", body: "Deaths + serious injuries at Pikes Peak + European hillclimbs led to safety cage + protective gear + rescue infrastructure requirements." },
  ],
  scoring: {
    summary: "Fastest single time wins. European championship: cumulative points across rounds.",
    winCondition: "Fastest single time in class + overall = event champion. Season championship (European): cumulative points.",
    breakdown: [
      { action: "Class win", points: "Class trophy + FIA points" },
      { action: "Overall fastest (Pikes Peak: King of the Mountain)", points: "Overall record + $25,000-$100,000 prize" },
      { action: "Course record", points: "Historic recognition; often career-defining" },
      { action: "Season championship (European)", points: "Highest cumulative points across all rounds" },
    ],
  },
  penalties: [
    { title: "Cutting course", body: "DQ from event." },
    { title: "Missing course markers", body: "DQ if severe." },
    { title: "Illegal equipment", body: "DQ." },
    { title: "Unsafe practices in paddock", body: "Warning; DQ for repeated." },
    { title: "Weather cancellation", body: "Event postponed or moved; no penalty to drivers." },
  ],

  positions: [
    { name: "Driver", role: "Solo racer.", count: 1 },
    { name: "Team engineer + mechanics", role: "Setup + strategy + between-run tuning." },
    { name: "Course marshals + medical", role: "Safety on remote mountain course." },
  ],
  officiating: {
    officials: ["Race Director", "Timing officials", "Course marshals (per corner)", "Chief Scrutineer", "Medical + safety teams"],
    summary: "FIA / national federation officials; timing systems accurate to 1/1000 second; extensive medical + rescue infrastructure due to remote course.",
  },

  governingBodies: [
    { name: "Fédération Internationale de l'Automobile (FIA)", founded: 1904, headquarters: "Paris, France", website: "https://fia.com" },
    { name: "Pikes Peak International Hill Climb (PPIHC)", founded: 1916, headquarters: "Colorado Springs, USA", website: "https://ppihc.org" },
    { name: "Goodwood Road Racing Club (Goodwood Festival of Speed)", founded: 1993, headquarters: "West Sussex, UK" },
  ],
  majorCompetitions: [
    { name: "Pikes Peak International Hill Climb", frequency: "annual (June)", founded: 1916, region: "Colorado Springs, USA" },
    { name: "FIA European Hill Climb Championship", frequency: "annual (8-10 rounds)", founded: 1957, region: "Europe" },
    { name: "Goodwood Festival of Speed Hill", frequency: "annual (June-July)", founded: 1993, region: "West Sussex, UK" },
    { name: "Race to the Clouds (adjacent Pikes Peak)", frequency: "annual", founded: 1916, region: "Colorado" },
    { name: "Broadmoor Pikes Peak Vintage Race", frequency: "annual", founded: 1916, region: "Colorado" },
    { name: "Continental European events (Ste-Ursanne, Rechberg, Trento-Bondone)", frequency: "annual", founded: 1905, region: "Europe" },
  ],
  countriesPlayed: ["US", "CH", "IT", "FR", "AT", "DE", "GB", "CZ", "SK", "ES", "PT", "JP", "BE"],
  famousAthletes: [
    "Nobuhiro 'Monster' Tajima (Japan — 6× Pikes Peak overall winner; first sub-10-min ascent 2011)",
    "Rod Millen (New Zealand → US — Pikes Peak legend + multiple records)",
    "Sébastien Loeb (France — 2013 Pikes Peak record 8:13.8 in Peugeot 208 T16 Pikes Peak)",
    "Romain Dumas (France — 2018 Pikes Peak record 7:57.148 in Volkswagen ID.R electric)",
    "Rhys Millen (New Zealand — 2× Pikes Peak overall winner; Rod Millen's son)",
    "Bobby Regester (US — Pikes Peak longevity + multiple class wins)",
    "Simon Delor (France — European Hill Climb Championship winner)",
    "Renzo Napione (Italy — European Hill Climb multiple champion)",
    "Christian Merli (Italy — modern European Hill Climb champion)",
    "Denis Chappelier (Switzerland — European Hill Climb podium regular)",
  ],
  records: [
    { title: "Pikes Peak overall record", holder: "Romain Dumas (France) in Volkswagen ID.R Pikes Peak", value: "7:57.148 (7 min 57.148 sec) set 24 June 2018; first sub-8 minute ascent", year: 2018 },
    { title: "First Pikes Peak race", holder: "Pikes Peak International Hill Climb", value: "First run 1916; 2nd oldest US motor race after Indianapolis 500", year: 1916 },
    { title: "Most Pikes Peak overall wins", holder: "Nobuhiro 'Monster' Tajima (Japan)", value: "6× overall winner 2006-2011; first sub-10-min ascent 2011", year: 2011 },
    { title: "Loeb's iconic 2013 run", holder: "Sébastien Loeb (France)", value: "2013 Pikes Peak record 8:13.878 in Peugeot 208 T16 Pikes Peak; unmatched combustion time until 2018", year: 2013 },
    { title: "Electric revolution", holder: "Volkswagen ID.R", value: "Purpose-built electric prototype set Pikes Peak record 2018; showcased EV potential for extreme motorsport", year: 2018 },
    { title: "FIA European Hill Climb Championship longevity", holder: "FIA", value: "Continuous since 1957; longest FIA-sanctioned motorsport championship", year: 2024 },
  ],

  variants: ["pikes-peak-international-hill-climb", "fia-european-hill-climb-championship", "goodwood-festival-of-speed-hillclimb", "national-hillclimb-championships", "vintage-hillclimb-events"],
  relatedSports: ["rally-racing", "circuit-racing", "gt-racing", "autocross", "time-attack"],

  skills: ["mountain road driving (tight technical corners)", "car control at altitude (Pikes Peak thin air)", "consistent lap-time replication", "corner-by-corner memorization", "commitment on cliff-side sections", "adaptation to changing weather"],
  strategies: [
    { title: "Corner-by-corner memorization", body: "Elite hillclimbers memorize every corner + entry speed + exit line. Videos + pace notes + on-site walks essential." },
    { title: "Tire + brake temperature management", body: "Continuous uphill = brakes overheating. Corner-braking discipline critical." },
    { title: "Altitude power management (Pikes Peak)", body: "Engines lose 30-40% power by summit. Elite cars use turbos + electric to counter altitude effect." },
    { title: "Weather adaptation", body: "Rain + snow common at Pikes Peak; tire choice + brave commitment differentiate winners." },
    { title: "Aero package + downforce", body: "Purpose-built cars use massive wings for corner speed. Balance downforce vs. straight-line speed." },
    { title: "Fewest mistakes wins", body: "Solo racing rewards consistency. One error can lose 5-10 seconds; no time to recover on short course." },
  ],

  terminology: [
    { term: "Hillclimb", meaning: "Motorsport with solo timed uphill runs against clock." },
    { term: "Pikes Peak", meaning: "The 20 km hillclimb in Colorado; 'The Race to the Clouds'." },
    { term: "King of the Mountain", meaning: "Overall fastest Pikes Peak driver each year." },
    { term: "The Race to the Clouds", meaning: "Pikes Peak's iconic nickname." },
    { term: "European Hill Climb Championship", meaning: "FIA-sanctioned continental circuit; 8-10 rounds annually." },
    { term: "Goodwood Festival of Speed", meaning: "Invitation-only celebration event at Goodwood estate England." },
    { term: "Category / Class", meaning: "Vehicle-type grouping; different rules per class." },
    { term: "Time Attack", meaning: "Timed run format; each driver has separate timed attempt." },
    { term: "Cliff-side", meaning: "Course sections with no run-off; catastrophic if crashed." },
    { term: "Elevation gain", meaning: "Total meters climbed; Pikes Peak 4,300m." },
    { term: "Course record", meaning: "Fastest time ever recorded; historic recognition." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Track days + car control courses", body: "Track time in own car develops confidence + fitness. Advanced car control clinics build foundation." },
      { title: "Autocross + rallycross entry-level", body: "Amateur time-trial events build racecraft; not exact same skills but transferable." },
      { title: "Attend hillclimb events as spectator", body: "Watch Pikes Peak (June) + Goodwood (June-July) + European hillclimbs to understand the sport." },
    ]},
    { level: "intermediate", steps: [
      { title: "Enter national hillclimb championships", body: "US, UK, France, Italy, Switzerland, Austria, Germany have national hillclimb series." },
      { title: "Build a competitive vehicle", body: "Costs from $20,000 (production car) to $1M+ (purpose-built prototype). Category matters." },
      { title: "Study courses + practice", body: "Course walks + video analysis + on-site testing critical. Elite hillclimbers know courses by heart." },
    ]},
    { level: "advanced", steps: [
      { title: "Qualify for Pikes Peak", body: "Pikes Peak requires previous class experience + team qualification. Highly competitive entry." },
      { title: "Compete at FIA European Hill Climb Championship", body: "Continental championship; season champion recognized globally." },
      { title: "Consider Sebastien-Loeb-style manufacturer partnerships", body: "Elite drivers partnered with manufacturers (Peugeot, Volkswagen, Bentley) for record attempts." },
    ]},
  ],

  faq: [
    { question: "What is Hillclimb?", answer: "Motorsport where drivers race solo up a twisting mountain road against the clock. Fastest time wins. Iconic events: Pikes Peak International Hill Climb (Colorado, since 1916) — 20 km, 156 corners, 4,300m elevation gain. FIA European Hill Climb Championship — continental circuit. Goodwood Festival of Speed Hill — invitation-only celebration event." },
    { question: "What is the Pikes Peak record?", answer: "Romain Dumas (France) set the overall record on 24 June 2018 in a Volkswagen ID.R Pikes Peak (purpose-built electric prototype): 7 minutes 57.148 seconds — the first sub-8-minute ascent. Previous combustion record: Sébastien Loeb in Peugeot 208 T16 Pikes Peak — 8:13.878 (2013). Electric powertrains don't suffer from altitude power loss the way combustion engines do." },
    { question: "How is Hillclimb different from Rally?", answer: "Hillclimb: solo timed uphill runs on paved public mountain roads; one car at a time. Rally: multi-stage timed racing across varied surfaces (asphalt, gravel, snow); many cars competing over multiple days across countryside. Both use time-trial format but very different course + duration + surface + car types." },
    { question: "Who is the greatest hillclimb driver?", answer: "Multiple candidates: (1) Nobuhiro 'Monster' Tajima (Japan) — 6× Pikes Peak overall winner 2006-2011; first sub-10-min ascent. (2) Rod Millen (NZ/US) — Pikes Peak legend + multiple records. (3) Sébastien Loeb (France) — 2013 Pikes Peak record 8:13.8 in combustion. (4) Romain Dumas (France) — 2018 Pikes Peak record 7:57.148 in electric. Different eras + criteria produce different answers." },
    { question: "Is Hillclimb dangerous?", answer: "Very serious. Cliff-side course sections with minimal run-off; crashes potentially fatal. Pikes Peak has had multiple deaths + serious injuries over century of racing. Modern safety improvements (roll cages + fireproof suits + HANS devices + rescue infrastructure) reduce risk but don't eliminate. Hillclimb requires deep respect for the mountain + intense preparation + willingness to accept extreme risk." },
    { question: "Is Hillclimb in the Olympics?", answer: "No. Motorsports as a whole not Olympic due to environmental concerns + narrow accessibility. Hillclimb continues as historic + prestigious discipline with Pikes Peak + FIA European Hill Climb Championship + Goodwood as annual highlights." },
  ],

  wikipediaTitle: "Hillclimbing (motorsport)",
  sources: [{ label: "Pikes Peak International Hill Climb", url: "https://ppihc.org", publisher: "PPIHC" }, { label: "Wikipedia — Hillclimbing (motorsport)", url: "https://en.wikipedia.org/wiki/Hillclimbing_(motorsport)", publisher: "Wikipedia" }, { label: "FIA European Hill Climb Championship", url: "https://fia.com/", publisher: "FIA" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

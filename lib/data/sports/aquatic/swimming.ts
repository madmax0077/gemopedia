import type { Sport } from "@/lib/types";

export const swimming: Sport = {
  id: "swimming",
  slug: "swimming",
  name: "Swimming",
  officialName: "Competitive Swimming",
  aliases: ["Pool swimming", "Racing swimming"],
  shortDescription:
    "Aquatic racing sport contested in a pool over set distances in four legal strokes — freestyle, backstroke, breaststroke and butterfly — plus medley events.",
  longDescription:
    "Competitive swimming is an individual and team aquatic sport in which racers cover set distances in specified strokes for the fastest recorded time. World Aquatics (formerly FINA) recognises four strokes — freestyle (typically front crawl), backstroke, breaststroke and butterfly — plus individual medley (IM) events that use all four strokes, and freestyle and medley relays. Races are held in a 50-metre long-course pool (Olympic) or a 25-metre short-course pool. Swimming has been in the modern Olympic programme since 1896 for men and 1912 for women, and is the marquee sport of every Summer Games.",

  category: "aquatic-sports",
  subCategory: "pool racing",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "England (organised racing); global antiquity for the activity itself",
  estimatedOrigin: "First national swimming championships 1837 (National Swimming Society, London)",

  players: { min: 1, max: 10, note: "Individual races; relays have 4 swimmers per team. Pool lanes accommodate 8-10 swimmers per race." },
  field: {
    surfaceName: "swimming pool",
    dimensions: "Long-course: 50 m × 25 m, 2 m deep, 8-10 lanes each 2.5 m wide. Short-course: 25 m × 21 m.",
    description: "Rectangular pool with lane ropes, starting blocks, backstroke flags 5 m from each wall and touch pads at both ends for automatic timing.",
  },
  equipment: [
    { name: "Swimsuit (technical suit)", description: "Fabric-only jammer for men / knee-length suit for women; suits are FINA-approved for competition." },
    { name: "Cap", description: "Silicone or latex cap to reduce drag and keep hair from goggles." },
    { name: "Goggles", description: "Low-profile racing goggles for pool clarity and lens tint." },
    { name: "Starting blocks", description: "Angled platforms with rear kick-back plate for a powerful racing start." },
    { name: "Backstroke ledge", description: "Adjustable platform attached to the wall for backstroke starts." },
    { name: "Timing pads", description: "Electronic touch pads at each end of the pool for automatic timing to 0.01 s." },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "Individual races range from ~20 seconds (50 m sprint) to ~15 minutes (1500 m); a full session with heats and finals lasts 2-4 hours.",
    note: "Championships typically span 8 days with morning heats and evening finals.",
  },
  objective: "Complete the specified distance in the specified stroke faster than every other swimmer in the race.",
  matchStructure:
    "Heats seed swimmers into semifinals or finals based on entry times. Swimmers race in eight-lane finals; the finish is recorded to the hundredth of a second by touch pads. Relays involve four swimmers each covering an equal leg — freestyle relays (all crawl) or medley relays (back, breast, fly, free in order).",

  basicRules: [
    { title: "Legal strokes", body: "Freestyle (any stroke; universally front crawl for speed), backstroke (on the back throughout), breaststroke (simultaneous symmetric limb motion, head breaks the surface each cycle), butterfly (simultaneous arm recovery over the water, dolphin kick)." },
    { title: "Starting and finishing", body: "Freestyle, breast, fly and IM start from the block; backstroke starts in the water. Each race requires a legal touch at each wall — two-handed for breast and fly, single-hand or foot for free and back." },
    { title: "Turns", body: "Freestyle allows a tumble (flip) turn; backstroke uses a back-to-front rollover into a flip; breast and fly require simultaneous two-hand touches on turns." },
    { title: "Underwater phases", body: "Maximum 15 m underwater off starts and turns in freestyle, backstroke and butterfly." },
    { title: "False starts", body: "Any movement before the starting signal is a disqualification (single-start rule since 2001)." },
    { title: "Lane discipline", body: "Swimmers must remain in their lane; interfering with another swimmer's water is a DQ." },
    { title: "Relay changeovers", body: "The outgoing swimmer's feet must be on the block until the incoming swimmer touches — 0.03 s early = DQ." },
  ],
  advancedRules: [
    { title: "Breaststroke pull-out", body: "One arm pull to the thighs, one dolphin kick before the first breaststroke kick is allowed off the start and each turn." },
    { title: "Butterfly kick on breaststroke start", body: "Since 2005, breaststrokers may take one dolphin kick during the underwater pull-out." },
    { title: "Medley order", body: "Individual medley: butterfly → backstroke → breaststroke → freestyle. Medley relay: back → breast → fly → free." },
    { title: "Suit rules", body: "Since 2010 (post 'super-suit' era), men's suits from waist to knee, women's from shoulder to knee; non-textile suits banned." },
    { title: "Backstroke flip turn", body: "Swimmer may rotate onto the front, take one continuous arm pull into the wall, then flip — must remain on the back on push-off." },
  ],
  scoring: {
    summary: "Ranked by finishing time; first to touch the wall wins.",
    breakdown: [
      { action: "First to touch wall (final)", points: "1st place / medal", note: "Times to 0.01 seconds; ties result in dead heat and duplicate medals." },
      { action: "Team relay finish", points: "1st place team", note: "All four swimmers receive medals." },
      { action: "Point system (dual meet)", points: "9-7-6-5-4-3-2-1", note: "Places 1-8 in dual meets and NCAA competition." },
    ],
    winCondition: "Fastest recorded time wins; in championships, top 8 heat times advance to finals.",
  },
  penalties: [
    { title: "Disqualification (DQ)", body: "Illegal stroke, missed touch, false start, or interference." },
    { title: "Warning", body: "Verbal or gestural warning by the head referee before a DQ where appropriate." },
    { title: "Reprimand / bans", body: "Long-term bans for doping violations — WADA-controlled, with independent testing." },
  ],

  officiating: {
    officials: ["Meet Referee", "Starter", "Stroke and turn judges (per lane)", "Chief timekeeper", "Marshals", "Recorders"],
    summary: "The starter releases the field; stroke/turn judges monitor legality at each end; the meet referee has final authority.",
  },
  governingBodies: [
    { name: "World Aquatics", acronym: "WA", founded: 1908, headquarters: "Lausanne, Switzerland", website: "https://www.worldaquatics.com" },
    { name: "USA Swimming", founded: 1980, headquarters: "Colorado Springs, USA", website: "https://www.usaswimming.org" },
    { name: "British Swimming", founded: 1874, headquarters: "Loughborough, UK", website: "https://www.britishswimming.org" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 1896, region: "worldwide" },
    { name: "World Aquatics Championships", frequency: "biennial", founded: 1973, region: "worldwide" },
    { name: "Pan Pacific Swimming Championships", frequency: "biennial", founded: 1985, region: "Pacific Rim" },
    { name: "European Aquatics Championships", frequency: "biennial", founded: 1926, region: "Europe" },
    { name: "FINA/ISL World Cup", frequency: "annual", founded: 1988, region: "worldwide (short-course)" },
  ],
  countriesPlayed: ["US", "AU", "CN", "JP", "GB", "FR", "IT", "HU", "RU", "DE", "NL", "CA", "BR", "ZA", "KR", "SG"],
  famousAthletes: [
    "Michael Phelps",
    "Katie Ledecky",
    "Ian Thorpe",
    "Mark Spitz",
    "Ariarne Titmus",
    "Adam Peaty",
    "Caeleb Dressel",
    "Sarah Sjöström",
    "Katinka Hosszú",
    "Léon Marchand",
    "Summer McIntosh",
    "Aleksandr Popov",
  ],
  records: [
    { title: "Most Olympic gold medals (any sport)", holder: "Michael Phelps", value: "23", year: 2016 },
    { title: "Most Olympic medals (any sport)", holder: "Michael Phelps", value: "28", year: 2016 },
    { title: "Women's 400 m/800 m/1500 m freestyle WR", holder: "Katie Ledecky", value: "Multiple long-course WRs held simultaneously", year: 2023 },
    { title: "Men's 100 m breaststroke WR", holder: "Adam Peaty", value: "56.88 s", year: 2019 },
    { title: "Men's 200 m IM WR", holder: "Léon Marchand", value: "1:54.06", year: 2024 },
  ],

  variants: ["open-water-swimming", "artistic-swimming", "para-swimming", "fin-swimming", "ice-swimming"],
  relatedSports: ["water-polo", "diving", "artistic-swimming", "open-water-swimming", "triathlon"],

  skills: [
    "cardiovascular endurance",
    "muscular power",
    "streamlined body position",
    "stroke technique",
    "underwater dolphin kick",
    "race pacing",
    "explosive starts and turns",
  ],
  strategies: [
    { title: "Front-half vs back-half racing", body: "Sprinters attack the first 50; distance swimmers reserve energy for a strong finishing kick." },
    { title: "Negative split", body: "Second half faster than the first — the physiologically optimal 400 m+ pattern." },
    { title: "Underwater dominance", body: "Elite swimmers exploit the 15 m underwater limit with high-frequency dolphin kicks (Phelps, Marchand)." },
    { title: "Draft in relays", body: "Take advantage of a wide relay flip to enter smoothly and time the leg to peak arrival." },
  ],

  terminology: [
    { term: "IM", meaning: "Individual medley — one swimmer, all four strokes in order fly/back/breast/free." },
    { term: "DQ", meaning: "Disqualification for a stroke, turn, start or finish infraction." },
    { term: "PB", meaning: "Personal best — a swimmer's fastest recorded time." },
    { term: "Split", meaning: "Time recorded for a section of the race (e.g., 50-m splits in a 200 m)." },
    { term: "Sculling", meaning: "Small figure-8 hand motions for propulsion and feel of the water." },
    { term: "Catch", meaning: "The initial hand entry and grip on the water at the start of the stroke." },
    { term: "Streamline", meaning: "Hands stacked above the head, head between arms — the minimum-drag posture off starts and turns." },
    { term: "Taper", meaning: "Pre-race reduction in training load to sharpen performance." },
    { term: "Broken swim", meaning: "Repeat set at target race pace with short rests to build speed endurance." },
    { term: "Suit-up", meaning: "Wearing the technical suit for a major race to maximise compression and buoyancy." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Water comfort", body: "Breath control, floating, gliding — before any stroke work." },
      { title: "Freestyle basics", body: "Body position, bilateral breathing, straight-arm recovery.", anchor: "basicRules" },
      { title: "Backstroke basics", body: "Balanced supine position, alternating arm recovery, high-elbow catch." },
      { title: "Push-and-glide starts", body: "Off the wall streamline into 4-6 kicks before stroking." },
    ] },
    { level: "intermediate", steps: [
      { title: "Breaststroke and butterfly", body: "Two-hand touches, symmetric kick, timing of pull to breath." },
      { title: "Flip turns", body: "Freestyle tumble turn — head down, tuck, plant feet, push into streamline." },
      { title: "Race dive", body: "Track start on the block; press the wedge, explode into a shallow entry." },
      { title: "Pacing drills", body: "Descending sets — hold split under increasing effort." },
    ] },
    { level: "advanced", steps: [
      { title: "Underwater work", body: "High-speed dolphin kick, streamline through the 15-m limit." },
      { title: "Taper and race prep", body: "3-week taper, race warm-up sequence, mental race rehearsal." },
      { title: "Long-course strategy", body: "Optimise stroke count and turn quality over 50-m laps at high fatigue." },
    ] },
  ],
  faq: [
    { question: "What are the four legal strokes?", answer: "Freestyle (any stroke, universally front crawl), backstroke, breaststroke and butterfly." },
    { question: "Why is a 50 m pool called 'long course'?", answer: "It's the standard Olympic pool length. A 25 m 'short course' pool has more turns per race, so short-course times are faster." },
    { question: "How is timing so precise?", answer: "Electronic touch pads at each end record to the hundredth of a second and trigger the display." },
    { question: "Why does everyone wear a cap?", answer: "It reduces drag and keeps hair out of goggles; caps also help team identification in relays." },
    { question: "How long is the longest Olympic swim event?", answer: "1500 m freestyle (men) — often called the 'metric mile'; women contested 1500 m for the first time at Tokyo 2020." },
  ],

  wikipediaTitle: "Swimming (sport)",
  sources: [
    { label: "Wikipedia — Swimming (sport)", url: "https://en.wikipedia.org/wiki/Swimming_(sport)", publisher: "Wikipedia" },
    { label: "World Aquatics Rules", url: "https://www.worldaquatics.com/rules", publisher: "World Aquatics" },
    { label: "USA Swimming Rulebook", url: "https://www.usaswimming.org/rules", publisher: "USA Swimming" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

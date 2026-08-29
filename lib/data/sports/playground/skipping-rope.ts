import type { Sport } from "@/lib/types";

export const skippingRope: Sport = {
  id: "skipping-rope",
  slug: "skipping-rope",
  name: "Skipping Rope",
  officialName: "Rope Skipping / Jump Rope (World Jump Rope Federation)",
  aliases: ["Jump Rope", "Rope Jumping", "Skipping", "Double Dutch (variant)"],
  shortDescription:
    "Universal individual and team activity — swing a rope under your feet and over your head, jumping each time it passes; competitive Jump Rope has speed, freestyle, and Double Dutch world championships since 1997.",
  longDescription:
    "Skipping Rope (Jump Rope in the US) is one of the oldest children's activities on Earth — depicted in ancient Egyptian tomb paintings (c. 1600 BCE) and referenced across Chinese, Aboriginal, and medieval European sources. Modern competitive Rope Skipping emerged from American schoolyard 'Double Dutch' (two long ropes turned by others) in the 1970s. The International Jump Rope Union (IJRU), formed by merger in 2018, is the world governing body; the World Jump Rope Federation runs the biennial World Championships across four events (Single Rope Speed, Freestyle, Wheel, and Double Dutch). Elite speed jumpers exceed 250 jumps per minute; elite freestylers perform release-and-catch tricks, aerials, and multi-rope combinations. Rope skipping is also a foundational fitness modality — boxers, footballers, and endurance athletes use it for cardio, footwork, and rhythm training.",

  category: "playground-games",
  subCategory: "individual + team rope activity / competitive sport",
  sportType: "mixed",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "ancient",
  popularity: "global",

  countryOfOrigin: "EG",
  regionOfOrigin: "Ancient Egypt (earliest depiction); universal across cultures; competitive form USA 1970s",
  estimatedOrigin: "Depicted in Egyptian tomb paintings c. 1600 BCE; modern competitive Jump Rope emerges USA 1970s (Double Dutch); IJRU governing body founded 2018",

  players: { min: 1, max: 10, note: "Solo skipping (1); pair (2); Long Rope / Double Dutch (2 turners + up to 4 jumpers)." },
  field: {
    surfaceName: "Gymnasium, playground, mat, or bare floor",
    dimensions: "IJRU competition area: 12 × 12 m for Double Dutch freestyle; 4 × 4 m for single-rope speed",
    description: "Any smooth surface with 2.5 m clearance overhead. Sprung wooden gym floor preferred for competition. Concrete OK for casual play but harder on joints.",
  },
  equipment: [
    { name: "Speed rope (single)", description: "Steel cable or licorice rope with lightweight ball-bearing handles. 8–9 ft standard; adjusted so handles reach armpits when standing on rope centre." },
    { name: "Beaded rope", description: "Rope with plastic beads for training (audible + heavier for rhythm learning). PVC-beaded is the workhorse of learning." },
    { name: "Long rope (Long Rope + Double Dutch)", description: "10–14 ft rope for team events; two turners at ends, jumpers in middle." },
    { name: "Double Dutch ropes", description: "Two 12–14 ft ropes turned egg-beater style (alternating directions) by two turners." },
    { name: "Competition uniform", description: "IJRU regulation: team jersey + shorts; sneakers with good ankle support + cushioning." },
    { name: "Timing electronics", description: "IJRU speed events use electronic mats + timers to count jumps." },
  ],
  duration: {
    approximateMinutes: 3,
    structure: "IJRU speed event: 30-second or 3-minute events. Freestyle routines: 60–75 seconds. Casual practice sessions: 15–60 minutes.",
  },
  objective:
    "Casual: maintain rhythm, avoid tripping. Competitive: maximum jumps per unit time (speed events) OR most technically demanding routine with cleanest execution (freestyle events).",
  matchStructure:
    "IJRU competitions run 4 event categories: Single Rope Speed (30-sec + 3-min all-out), Single Rope Freestyle (75-sec choreographed routine scored on difficulty + presentation), Double Dutch Speed (30-sec team event), and Double Dutch Freestyle (75-sec team routine). Speed events judged on jump count; Freestyle events scored 0–10 by 3+ judges on difficulty, presentation, and required elements.",

  basicRules: [
    { title: "Rope length calibration", body: "Stand on rope midpoint; handles should reach armpits (speed) or lower ribs (fitness). Too long = drags; too short = catches feet." },
    { title: "Basic bounce", body: "Two-foot jumps clearing rope with each pass; land softly on balls of feet; hands close to body, rope swung from wrists not shoulders." },
    { title: "Turn from wrists", body: "Efficient rope turning uses wrist rotation, not full-arm swings. Elbows tucked, forearms parallel to ground." },
    { title: "Speed event scoring", body: "IJRU speed events count each time the rope passes under both feet (2 revolutions if double-under). 30-sec + 3-min all-out formats." },
    { title: "Freestyle scoring criteria", body: "0–10 scale: Difficulty (max 5.0) + Presentation (max 3.0) + Required Elements (max 2.0). Deductions for tripping, mistakes, out-of-time." },
    { title: "Double Dutch turning direction", body: "Two ropes turned in opposite directions ('egg-beater'); jumper enters + exits on prescribed beat." },
  ],
  advancedRules: [
    { title: "Double-under (SU)", body: "Rope passes under feet twice per jump; requires strong wrist snap and higher jump. Foundational trick." },
    { title: "Cross (CR)", body: "Arms cross in front of body while rope passes; requires wide rope loop + coordination." },
    { title: "Release moves", body: "Rope released mid-jump, caught mid-air; used in freestyle for aesthetic + difficulty." },
    { title: "Power moves", body: "Push-up in rope, cartwheel through rope, split leap over rope — freestyle showcase elements." },
    { title: "Team synchronisation (Wheel event)", body: "Multiple jumpers synchronised on one rope; scored on precision + creativity." },
    { title: "Interactive Double Dutch", body: "Multiple jumpers entering + exiting Double Dutch ropes in coordinated sequences." },
  ],
  scoring: {
    summary: "Speed: raw jump count (electronic timed). Freestyle: 10-point scale — 5 difficulty + 3 presentation + 2 required elements, minus deductions for mistakes.",
    winCondition: "Speed: highest jump count. Freestyle: highest 10-point average across 3+ judges (drops highest + lowest, averages middle).",
    breakdown: [
      { action: "Single jump (speed)", points: "1 count" },
      { action: "Difficulty score (freestyle)", points: "0–5.0 based on trick catalog" },
      { action: "Presentation score", points: "0–3.0 based on musicality + energy" },
      { action: "Required elements", points: "0–2.0 for including mandatory tricks" },
      { action: "Trip penalty (mistake)", points: "-0.5 to -1.0 deduction" },
    ],
  },

  positions: [
    { name: "Solo jumper", role: "Individual freestyle or speed competitor." },
    { name: "Turner (Long Rope + Double Dutch)", role: "Turns the rope(s) with consistent rhythm.", count: 2 },
    { name: "Team jumper", role: "Enters, jumps, exits within team routine — sync + creativity critical." },
    { name: "IJRU-certified judge", role: "Scores difficulty + presentation + counts speed jumps.", count: 3 },
  ],
  officiating: {
    officials: ["IJRU-certified judges (3+ per panel)", "Speed counters (electronic + human backup)", "Head Judge / Meet Director"],
    summary: "IJRU sanctions World Championships + national federations; certified judges required for scoring at all sanctioned events. Casual play needs no officiation.",
  },

  governingBodies: [
    { name: "International Jump Rope Union (IJRU)", founded: 2018, headquarters: "USA (merger of FISAC + WJRF)", website: "https://ijru.sport" },
    { name: "World Jump Rope Federation (WJRF, legacy)", founded: 1995, headquarters: "USA", website: "https://worldjumprope.org" },
    { name: "USA Jump Rope", founded: 1995, headquarters: "USA", website: "https://usajumprope.org" },
  ],
  majorCompetitions: [
    { name: "IJRU World Championships", frequency: "biennial", founded: 2018, region: "rotating (Colorado 2022, Ghent 2024)" },
    { name: "AAU Jump Rope Nationals (USA)", frequency: "annual", founded: 1978, region: "USA" },
    { name: "European Championships", frequency: "biennial", founded: 2000, region: "Europe" },
    { name: "Grand Prix events (IJRU circuit)", frequency: "seasonal", founded: 2019, region: "worldwide" },
  ],
  countriesPlayed: ["US", "JP", "CN", "KR", "DE", "GB", "AU", "IN", "BE", "IT", "MX", "BR", "ZA", "IE", "MY"],
  famousAthletes: [
    "Nick Woodard (US, multiple world champion + Cirque du Soleil performer)",
    "Kaylee Woodard (US, 4× World Champion Freestyle)",
    "Adrienn Bánhegyi (HU, first female triple-under in competition; Britain's Got Talent finalist)",
    "Team Sweden — Double Dutch Freestyle world champions multiple",
    "Team Netherlands 'Jump-Ex' — Double Dutch pioneers",
  ],
  records: [
    { title: "Most single-rope jumps in 30 seconds", holder: "Cen Xiaolin (CN)", value: "228 jumps in 30 sec", year: 2019 },
    { title: "Most double-unders in 1 minute", holder: "Ken Solis (US)", value: "151 double-unders", year: 1997 },
    { title: "Most consecutive quintuple-unders", holder: "Peter Nestler (US)", value: "5 quintuple-unders", year: 2010 },
    { title: "Longest continuous skipping", holder: "Joey Motsay (US)", value: "33 hours 20 min", year: 2010 },
    { title: "Most people jumping simultaneously", holder: "Wire Rope Guinness event", value: "300+ synchronised jumpers", year: 2013 },
  ],

  variants: ["single-rope-speed", "single-rope-freestyle", "double-dutch-speed", "double-dutch-freestyle", "wheel", "long-rope", "chinese-jump-rope"],
  relatedSports: ["chinese-jump-rope", "double-dutch", "hopscotch", "cheerleading", "acrobatic-gymnastics"],

  skills: [
    "cardiovascular endurance",
    "rhythm + timing (musicality)",
    "wrist rotation + hand-eye coordination",
    "footwork + ankle strength",
    "power (double-under + release moves)",
    "coordination (multi-rope + team sync)",
  ],
  strategies: [
    { title: "For speed — minimize jump height", body: "Elite speed jumpers barely leave the floor (1–2 inches). Every millimetre of height = wasted time." },
    { title: "For speed — cadence over power", body: "Metronome-like consistent rhythm beats bursts. 250+ jumps/minute demands 4+ jumps per second sustained." },
    { title: "For freestyle — plan difficulty peaks", body: "Route routine so hardest tricks (releases, power moves) fall on musical accents; easier tricks in transitions." },
    { title: "For Double Dutch — turner communication", body: "Turners must maintain identical rhythm — visual + verbal cues before entries/exits. Off-rhythm = failed routine." },
    { title: "For fitness — vary the workout", body: "Alternate 30-sec sprints with 60-sec basic bounces; 3 double-unders every 10 basics; interval + steady-state mix builds engine + technique." },
  ],

  terminology: [
    { term: "SU / Double-Under", meaning: "Rope passes under feet twice per jump." },
    { term: "TU / Triple-Under", meaning: "Three passes per jump — elite skill; often used in freestyle." },
    { term: "CR / Cross", meaning: "Arms cross in front while rope passes." },
    { term: "SEB / Side Swing", meaning: "Rope swung to one side without jumping — used as freestyle transition." },
    { term: "TS / Toad", meaning: "Rope passes under one foot only, other leg lifted — advanced release setup." },
    { term: "Release", meaning: "Rope let go mid-move and re-caught; scored highly in freestyle." },
    { term: "Long Rope", meaning: "Single long rope turned by 2 turners; jumpers enter/exit through it." },
    { term: "Double Dutch", meaning: "Two long ropes turned in opposite directions ('egg-beater')." },
    { term: "Wheel", meaning: "Team formation with multiple ropes in wheel-spoke arrangement." },
    { term: "Egg-beater", meaning: "The alternating turn direction that defines Double Dutch." },
    { term: "IJRU", meaning: "International Jump Rope Union — global governing body (founded 2018)." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Get a properly sized beaded rope", body: "Beaded rope is heavier + audible — easier for learning rhythm than lightweight speed rope. Adjust so handles reach armpits when standing on rope center." },
        { title: "Master the basic bounce", body: "Two-foot jump, land softly, turn rope from wrists. 100 continuous basic bounces = you're ready to progress." },
        { title: "Add alternating footwork", body: "Boxer's shuffle: land alternate feet; the entry to speed skipping. Then side-swing, then cross." },
      ],
    },
    {
      level: "intermediate",
      steps: [
        { title: "Learn double-under", body: "Wrist snap + slightly higher jump = rope passes twice. Foundational trick — takes 2–4 weeks to master." },
        { title: "Try Long Rope + Double Dutch", body: "Find a rope skipping club or PE program — Double Dutch requires 2+ people and teaches team rhythm." },
        { title: "Learn 5 named tricks", body: "Cross, Side-Swing, Toad, EB (Elephant), CL (Crossed Legs) — the vocabulary of freestyle." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Join IJRU-affiliated club", body: "IJRU has member federations in 50+ countries — search by nation for local clubs + coaches." },
        { title: "Compete at regional level", body: "Regional competitions qualify you for national + world championships. Speed events open to any skilled jumper." },
        { title: "Choreograph competition freestyle", body: "75-second routine to music with 5+ named tricks — the elite level of the sport." },
      ],
    },
  ],

  faq: [
    { question: "How old is Jump Rope?", answer: "Depictions of rope skipping appear in Egyptian tomb paintings from around 1600 BCE. It's one of the oldest continuously played children's activities on Earth. The modern competitive form emerged from American schoolyard Double Dutch in the 1970s; the IJRU governing body formed in 2018." },
    { question: "How many calories does jumping rope burn?", answer: "Roughly 10–15 calories per minute at moderate pace (100 jumps/min) — comparable to running. Elite speed jumpers exceed 20 cal/min. It's one of the most calorie-dense workouts per unit of equipment cost." },
    { question: "What's the world speed record?", answer: "Cen Xiaolin (China) holds the 30-second speed record at 228 jumps. That's 7.6 jumps per second — the rope is a blur." },
    { question: "Is Jump Rope in the Olympics?", answer: "Not yet. The IJRU has been pursuing IOC recognition; the sport received recognition from GAISF (Global Association of International Sports Federations) in 2020, a step toward Olympic eligibility. No inclusion confirmed for LA 2028." },
    { question: "What rope should I buy first?", answer: "Beginners: PVC beaded rope (~$10–15) — heavier and audible makes rhythm easier. Fitness/CrossFit: PVC cable speed rope (~$20). Competition speed: ball-bearing steel cable speed rope (~$30–60). Rogue Fitness, RX Smart Gear, and Buddy Lee Jump Ropes are trusted brands." },
    { question: "Is Double Dutch harder than single rope?", answer: "Yes — considerably. It requires coordinating with 2 turners on egg-beater rhythm, entering/exiting between two rotating ropes, and sync with other jumpers. Elite Double Dutch teams train for years to achieve the aerial + release moves that world-class freestyle demands." },
  ],

  wikipediaTitle: "Skipping rope",
  sources: [
    { label: "International Jump Rope Union (IJRU)", url: "https://ijru.sport", publisher: "IJRU" },
    { label: "Wikipedia — Skipping rope", url: "https://en.wikipedia.org/wiki/Skipping_rope", publisher: "Wikipedia" },
    { label: "USA Jump Rope", url: "https://usajumprope.org", publisher: "USA Jump Rope" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const rowing: Sport = {
  id: "rowing",
  slug: "rowing",
  name: "Rowing",
  officialName: "Rowing (Sport)",
  aliases: ["Crew (US)", "Sculling", "Sweep Rowing"],
  shortDescription:
    "Endurance water sport in which crews propel long, narrow shells backwards over 2,000 m using single (sculling) or double (sweep) oars, with or without a coxswain.",
  longDescription:
    "Rowing is a sport in which athletes race boats (shells) on water using oars for propulsion. It is one of the oldest Olympic sports, having been included in every modern Games since 1900 (except 1896, when the Games were cancelled at sea due to weather). Two main disciplines exist: sculling (each rower holds two oars) and sweep rowing (each rower holds one oar with both hands). Boats range from the single scull (1×) to the coxed eight (8+). Standard racing distance is 2,000 metres in flat water; the Olympic and World Championships are contested at this distance. Head races (e.g., Head of the Charles) are longer time trials of 4-7 km. Rowing demands extreme cardiovascular fitness, leg drive, and technical stroke perfection — 2 km rowing is often called the second-most physically punishing endurance event after cross-country skiing.",

  category: "aquatic-sports",
  subCategory: "endurance / crew",
  sportType: "mixed",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "summer",
  era: "ancient",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "United Kingdom (formalised as competitive sport)",
  estimatedOrigin: "Waterman races on Thames from 1716 (Doggett's Coat and Badge); first Oxford-Cambridge Boat Race 1829; Henley Royal Regatta 1839",

  players: { min: 1, max: 9, note: "1× (single), 2× (double), 4× (quad), 2- / 2+ (pair), 4- / 4+ (four), 8+ (eight) — with or without coxswain." },
  field: {
    surfaceName: "regatta course",
    dimensions: "2,000 m long × 6 lanes (13.5 m per lane wide); minimum 3 m water depth.",
    description: "Straight buoyed course on a lake, river, or canal. FISA (World Rowing) regulations require the course to be free of significant current, wind shelter, and turbulence. Iconic venues: Dorney Lake (London), Lucerne (Rotsee), Aiguebelette, Karapiro (NZ).",
  },
  equipment: [
    { name: "Shell (boat)", description: "Narrow, lightweight racing boat. Single 8 m (2.5 kg minimum weight per rower), eight 17 m (~96 kg). Carbon fibre/composite hull." },
    { name: "Sculling oars", description: "Two per rower; each ~2.9 m long, ~450 g." },
    { name: "Sweep oars", description: "One per rower; ~3.7 m long, ~1 kg." },
    { name: "Sliding seat", description: "Wheeled seat on runners inside the shell; enables leg drive." },
    { name: "Riggers", description: "Metal arms attaching the oarlocks (gates) outside the hull for leverage." },
    { name: "Cox box / speaker", description: "Amplification device for the coxswain's voice." },
    { name: "Cox seat", description: "Coxswain sits at bow or stern to steer and coach." },
    { name: "Shoes", description: "Rowing shoes bolted to the footplate; velcro or heel restraint for quick exit if capsized." },
  ],
  duration: {
    approximateMinutes: 6,
    structure: "2,000 m race: 5-8 minutes (world record M1× ~6:30; M8+ ~5:20). Sprint 500 m in ~1:30.",
    note: "Head races (Head of the Charles) run 4-7 km taking 15-30 minutes.",
  },
  objective: "Cross the 2,000 m finish line before all other crews, using efficient technique and maximum sustainable power.",
  matchStructure:
    "Crews line up at aligned pontoons (start blocks). At the 'attention... GO!' or 'red-red-red... GREEN' start light, all crews begin simultaneously. The race is a straight-line sprint over 2,000 m. Time is measured to the nearest 0.01 s. In heats/semi-finals, crews progress based on finish order (top 3 usually to A final). Rowers race side-by-side with 6 crews in most Olympic-level events.",

  basicRules: [
    { title: "Straight-line race", body: "Crews must remain in their lane throughout the 2,000 m course." },
    { title: "False start", body: "One false start = warning; second = disqualification." },
    { title: "Finish", body: "Race is over when the bow of the shell crosses the finish line." },
    { title: "Interference", body: "Crossing into another lane or interfering with another crew = warning or disqualification." },
    { title: "Lightweight vs Openweight", body: "Lightweight men max avg 70 kg (max 72.5 individual); women max avg 57 kg (max 59 individual)." },
    { title: "Cox in coxed events", body: "Coxswain must reach minimum weight (55 kg men, 50 kg women) or carry deadweight." },
  ],
  advancedRules: [
    { title: "Stroke rating", body: "Strokes per minute (SPM). Race start: 42-50 spm. Body: 32-38 spm. Sprint: 40-46 spm." },
    { title: "Head race handicaps", body: "In time-trial 'head' races, crews start at intervals; time-adjusted results across classes." },
    { title: "Regatta progression", body: "Heats → repechage (second chance) → semi-final → A/B finals. Winners of heats often direct to semis." },
    { title: "Lane assignments", body: "Better lanes (usually middle 3 of 6) are given based on heat results — inside lanes get shelter from wind." },
    { title: "Bow markers", body: "In finals, crews wear coloured bow numbers for TV identification and lane." },
  ],
  scoring: {
    summary: "Order of finish across the 2,000 m line; time recorded to 1/100 s. Fastest crew wins.",
    breakdown: [
      { action: "1st place", points: "Win" },
      { action: "Progression from heat", points: "Top 1-3 to semi-final; others to repechage" },
      { action: "Repechage (2nd chance)", points: "Top 1-3 to semi-final; others eliminated" },
      { action: "Semi-final", points: "Top 3 to A final; 4-6 to B final" },
      { action: "A final", points: "Places 1-6; Olympic medals go to 1-2-3" },
    ],
    winCondition: "First shell to cross the 2,000 m line wins; A final places 1-3 receive Olympic/Worlds medals.",
  },

  positions: [
    { name: "Stroke", role: "Rower at stern; sets rate and rhythm for the crew.", count: 1 },
    { name: "Bow", role: "Rower at bow; often has best view of steering and calls last-500 m surge.", count: 1 },
    { name: "Engine room (middle)", role: "Middle rowers in 4+ and 8+; largest, strongest rowers providing bulk of power.", count: 2 },
    { name: "Coxswain", role: "Steers, motivates, calls tactical adjustments. Small, tactical leader.", count: 1 },
  ],
  officiating: {
    officials: ["Chief Umpire", "Umpire (follows in launch)", "Starter", "Aligner", "Finish Judge", "Race Committee"],
    summary: "The chief umpire directs the race from a launch alongside the crews; a starter aligns and starts each race; a finish judge determines placings via photo-finish equipment.",
  },
  governingBodies: [
    { name: "World Rowing (formerly FISA)", acronym: "WR", founded: 1892, headquarters: "Lausanne, Switzerland", website: "https://worldrowing.com/" },
    { name: "USRowing", founded: 1872, headquarters: "Princeton, USA", website: "https://usrowing.org/" },
    { name: "British Rowing", founded: 1882, headquarters: "London, UK", website: "https://www.britishrowing.org/" },
  ],
  majorCompetitions: [
    { name: "Olympic Games Rowing", frequency: "quadrennial", founded: 1900, region: "worldwide" },
    { name: "World Rowing Championships", frequency: "annual (biennial in Olympic years)", founded: 1962, region: "worldwide" },
    { name: "World Rowing Cup (3 legs per year)", frequency: "annual", founded: 1997, region: "worldwide" },
    { name: "Henley Royal Regatta", frequency: "annual (July)", founded: 1839, region: "England (Henley-on-Thames)" },
    { name: "Head of the Charles Regatta", frequency: "annual (October)", founded: 1965, region: "Boston, USA" },
    { name: "The Boat Race (Oxford vs Cambridge)", frequency: "annual (March)", founded: 1829, region: "London, UK (Thames)" },
  ],
  countriesPlayed: ["GB", "US", "AU", "NZ", "NL", "DE", "IT", "RO", "DK", "CH", "CA", "FR", "CN", "CZ", "PL", "NO"],
  famousAthletes: [
    "Sir Steve Redgrave (GB) — 5 consecutive Olympic golds (1984-2000), greatest rower ever",
    "Sir Matthew Pinsent (GB) — 4× Olympic gold; partnered with Redgrave",
    "Elisabeta Lipă (Romania) — 5× Olympic gold, most-decorated women's rower",
    "Kim Brennan (Australia) — 2016 Olympic gold in W1×",
    "Mahé Drysdale (New Zealand) — 2× Olympic gold in M1× (2012, 2016)",
    "Emma Twigg (New Zealand) — 2020 Olympic gold W1×",
    "Xeno Müller (Switzerland/USA) — 1996 Olympic gold M1×; longtime CT icon",
    "Katherine Grainger (GB) — 4× Olympic silver, gold in 2012 W2×",
  ],
  records: [
    { title: "Most Olympic rowing golds (men)", holder: "Steve Redgrave (GB)", value: "5 consecutive Games (1984-2000)", year: 2000 },
    { title: "Most Olympic rowing golds (women)", holder: "Elisabeta Lipă (Romania)", value: "5 (1984-2004)", year: 2004 },
    { title: "M1× 2,000 m world best time", holder: "Robert Manson (New Zealand)", value: "6:30.74", year: 2017 },
    { title: "M8+ 2,000 m world best time", holder: "Netherlands crew", value: "5:19.35", year: 2021 },
    { title: "Youngest Boat Race winner (Oxford vs Cambridge)", holder: "Various", value: "typically 19-20" },
  ],

  variants: ["sweep-rowing", "sculling", "coastal-rowing", "indoor-rowing", "para-rowing", "gig-rowing", "beach-sprint-rowing", "ocean-rowing"],
  relatedSports: ["kayaking", "canoeing", "dragon-boat-racing", "punting"],

  skills: [
    "leg drive power",
    "cardiovascular endurance (2-km race is aerobic-anaerobic maximum)",
    "core stability",
    "timing and synchronisation with crew",
    "stroke technique consistency",
    "mental toughness",
    "boat-handling and balance",
  ],
  strategies: [
    { title: "Race profile", body: "Standard: fast start (500 m) → settle to base pace (1000 m) → power 500 (250 m) → sprint 500 m. Rate profile ≈ 44-36-38-42 spm." },
    { title: "Blade covering (crew technique)", body: "All blades enter and exit the water simultaneously; 'catch together, release together'." },
    { title: "Rhythm over rate", body: "Length of stroke matters more than pure rate — long, powerful strokes at 35 spm can outpace short strokes at 40+." },
    { title: "Mental splits", body: "Divide the 2,000 m into 4 × 500 m chunks; know target split times for each." },
    { title: "Steering", body: "In sweep boats without coxswain, bow rower steers using foot-controlled rudder." },
  ],

  terminology: [
    { term: "Shell", meaning: "The racing boat itself." },
    { term: "Sculling", meaning: "Each rower uses two oars (one in each hand). Boats: 1×, 2×, 4×." },
    { term: "Sweep", meaning: "Each rower uses one long oar with both hands. Boats: 2-, 2+, 4-, 4+, 8+." },
    { term: "Coxswain (cox)", meaning: "Non-rowing crew member who steers and coaches; sits at bow or stern." },
    { term: "Catch", meaning: "The moment the blade enters the water at the start of the stroke." },
    { term: "Drive", meaning: "The power phase — legs push, back opens, arms pull." },
    { term: "Finish (release)", meaning: "The end of the drive; blade squared and lifted from water." },
    { term: "Recovery", meaning: "The return phase, sliding forward to catch position; should be slower than drive." },
    { term: "Stroke rating (spm)", meaning: "Strokes per minute; race body 32-38, sprint 40-46." },
    { term: "Ergometer (erg)", meaning: "Indoor rowing machine (Concept2 is the standard) used for training and testing." },
    { term: "Split", meaning: "Time per 500 m — the standard rowing pace unit." },
    { term: "Rigging", meaning: "The metal arms holding the oarlocks; setup includes span, spread, and pitch." },
    { term: "Weigh enough", meaning: "'Stop rowing' — command called by cox to end a piece." },
    { term: "Repechage (rep)", meaning: "Second-chance race for crews that don't advance from the heat." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn to erg", body: "Master the stroke on a Concept2 ergometer before getting in a boat." },
      { title: "Novice tub-pair or wide beginner shell", body: "Learn balance and catch/drive on stable equipment." },
      { title: "Basic technique", body: "Legs first (drive), then swing back, then arms; reverse on recovery." },
      { title: "Join a club", body: "Rowing is a team sport — clubs provide boats, coaching, race entries." },
    ] },
    { level: "intermediate", steps: [
      { title: "Race a novice regatta", body: "Enter 4- or 8+ novice events at local regattas." },
      { title: "Blade work", body: "Learn to square and feather the blade cleanly." },
      { title: "Erg testing", body: "Time trial 2 km and 5 km on the erg; sub-7:00 (M) or sub-8:00 (W) is competitive open level." },
      { title: "Head race", body: "Complete 4-6 km head races (Head of the Charles, Fours Head)." },
    ] },
    { level: "advanced", steps: [
      { title: "Race calendar", body: "Regatta season Apr-Sep in Northern hemisphere; head-race season Oct-Feb." },
      { title: "Trials and selection", body: "National team pathway: club → age group → national trials → senior team." },
      { title: "Peaked training cycle", body: "16-20 week Olympic cycle: base → threshold → race pace → taper." },
      { title: "Weight management (lightweight)", body: "Careful weight management to make 70 kg (M) / 57 kg (W) crew averages." },
    ] },
  ],
  faq: [
    { question: "How long is an Olympic rowing race?", answer: "2,000 metres — a straight sprint on flat water, taking about 5:20 (fastest men's eight) to 7:30 (women's single scull)." },
    { question: "What's the difference between sculling and sweep?", answer: "Sculling: each rower has 2 oars (one per hand). Sweep: each rower has 1 large oar held with both hands. Sweep boats have an even number of rowers so both sides balance." },
    { question: "Do all boats have a coxswain?", answer: "No. Singles (1×), doubles (2×), quads (4×), pairs (2-), and coxless fours (4-) have no cox. Coxed fours (4+) and coxed eights (8+) do." },
    { question: "How fast do rowers go?", answer: "Elite men's eight (M8+) averages ~22 km/h (13.7 mph) over 2,000 m — the fastest human-powered boat in Olympic sport." },
    { question: "Is rowing hard on the body?", answer: "Extremely — 2 km rowing is one of the most cardiovascularly demanding events in sport. Elite oarsmen show VO2 max scores of 6+ litres/min, second only to cross-country skiers." },
    { question: "Why do rowers face backwards?", answer: "Rowing backwards allows for a much longer and more powerful stroke using the strongest muscles (legs, back, arms in that order) than facing forwards would allow." },
  ],

  wikipediaTitle: "Rowing (sport)",
  sources: [
    { label: "Wikipedia — Rowing (sport)", url: "https://en.wikipedia.org/wiki/Rowing_(sport)", publisher: "Wikipedia" },
    { label: "World Rowing", url: "https://worldrowing.com/", publisher: "World Rowing" },
    { label: "USRowing", url: "https://usrowing.org/", publisher: "USRowing" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

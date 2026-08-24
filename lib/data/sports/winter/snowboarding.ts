import type { Sport } from "@/lib/types";

export const snowboarding: Sport = {
  id: "snowboarding",
  slug: "snowboarding",
  name: "Snowboarding",
  officialName: "Snowboarding",
  aliases: ["Snowboard", "Snurfing (historical)"],
  shortDescription:
    "Winter sport where riders descend snow slopes on a single board with feet in fixed bindings — competed in freestyle (halfpipe, slopestyle, big air) and racing (parallel, snowboard cross) disciplines.",
  longDescription:
    "Snowboarding is a snow-sliding sport in which riders descend a slope on a single board with both feet strapped into bindings. The sport evolved from the 1965 Snurfer invented by Sherman Poppen in Michigan (a single ski for children) and matured through pioneers Jake Burton Carpenter (Burton Snowboards) and Tom Sims in the late 1970s-80s. Snowboarding entered the Winter Olympics at Nagano 1998. Elite disciplines include halfpipe (aerial tricks in a curved pipe), slopestyle (jumps and rails), big air (single huge jump), snowboard cross (four rider heats over a jump-and-turn course), and parallel giant slalom (two racers side-by-side through gates). Recreational snowboarding is one of the world's most popular winter activities, with resorts across the Alps, Rockies, and Japan drawing millions of riders each season.",

  category: "winter-sports",
  subCategory: "freestyle & racing",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "winter",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Michigan, USA (Snurfer origin); Vermont (Burton Snowboards)",
  estimatedOrigin: "1965 Snurfer; modern snowboards 1977 (Burton) / 1978 (Sims); Olympic 1998",

  players: { min: 1, max: 6, note: "Halfpipe/slopestyle/big air: individual runs. Snowboard cross: 4-6 riders per heat. Parallel racing: 2 riders head-to-head." },
  field: {
    surfaceName: "snow slope",
    dimensions: "Halfpipe 170-200 m long × 22 m wide × 7 m deep; slopestyle course 500 m+ long with 4-8 features; SBX course 750-1000 m with 20-30 features.",
    description: "Discipline-specific: halfpipe is a U-shaped snow channel; slopestyle mixes jumps, rails, boxes; snowboard cross features rollers, banked turns, tabletops.",
  },
  equipment: [
    { name: "Snowboard", description: "150-165 cm depending on rider height and discipline; camber, rocker, or hybrid profile." },
    { name: "Bindings", description: "Strap-in or step-on bindings holding both feet fixed to the board." },
    { name: "Snowboard boots", description: "Softer than ski boots for freestyle; stiffer for racing/carving." },
    { name: "Helmet", description: "Mandatory in all FIS and Olympic events." },
    { name: "Goggles", description: "Anti-fog with UV protection." },
    { name: "Back protector / impact shorts", description: "Common in halfpipe and slopestyle to reduce injury.", optional: true },
    { name: "Race suit (alpine only)", description: "Aerodynamic Lycra for parallel racing.", optional: true },
  ],
  duration: {
    approximateMinutes: 3,
    structure: "Individual runs 25-60 seconds; competition sessions run 90-180 minutes with qualifying and finals.",
    note: "Slopestyle & halfpipe: best-of-2 or best-of-3 runs. Snowboard cross: heats of 4-6 riders; top 2 advance.",
  },
  objective: "In freestyle: earn the highest judges' score for trick difficulty, execution and amplitude. In racing: cross the finish line first (SBX) or beat the head-to-head opponent (parallel).",
  matchStructure:
    "Freestyle events (halfpipe/slopestyle/big air): each rider takes 2-3 timed runs; best run counts. Six judges score 0-100 on trick variety, execution, amplitude, difficulty and progression; highest and lowest dropped and remaining scores averaged. Racing events (SBX/parallel): riders qualify through timed runs, then knockout heats.",

  basicRules: [
    { title: "Feet fixed to board", body: "Both feet in bindings during runs; only the front foot is released for lift-loading and flat-ground pushing." },
    { title: "Stance", body: "Regular (left foot forward) or goofy (right foot forward); no rule about which — pick whichever feels natural." },
    { title: "Judging criteria (freestyle)", body: "Execution, difficulty, amplitude, variety, progression (adding a never-before-landed trick)." },
    { title: "Snowboard cross heats", body: "4-6 riders race simultaneously through a course; top 2-3 advance. Contact allowed within reason; deliberate bumping is a DSQ." },
    { title: "Parallel racing", body: "Head-to-head on twin gated courses; first to the finish wins the heat." },
    { title: "Course inspection", body: "Slopestyle/SBX riders may sideslip inspect the course before qualifying and finals." },
  ],
  advancedRules: [
    { title: "Rotation naming", body: "Tricks named by rotation and grab: 900 (2.5 spins), 1080 (3 spins), 1440 (4 spins), plus grab like 'method', 'mute', 'stalefish'." },
    { title: "Amplitude bonus", body: "Judges reward air height in halfpipe and slopestyle — a big-air 1440 outscores a low 1440." },
    { title: "Second run", body: "Riders may drop-in for their second run knowing the first score; can play safe for a top-6 or go all-in for the win." },
    { title: "Video replay", body: "FIS may review tricks for grab position and rotation completion." },
    { title: "Contact rules (SBX)", body: "Incidental contact allowed; intentional hooking or grabbing another rider is a DSQ." },
  ],
  scoring: {
    summary: "Freestyle: 100-point judges' scale; racing: time or head-to-head heat wins.",
    breakdown: [
      { action: "Freestyle judged score", points: "0-100", note: "Six judges; drop high/low; average the middle four." },
      { action: "SBX heat win", points: "advance", note: "Top 2 of 4 riders advance to next round." },
      { action: "Parallel heat win", points: "advance", note: "Best-of-2 head-to-head against a paired opponent." },
      { action: "FIS World Cup points", points: "100-1", note: "Top 30 in each event score toward season globes." },
    ],
    winCondition: "Highest freestyle score or fastest race finish through the bracket.",
  },

  officiating: {
    officials: ["Head Judge", "5-6 judges (freestyle)", "Chief of Race", "Start referee", "Gate/section judges (racing)"],
    summary: "Freestyle events use 6 judges scoring 0-100 with drop-high/drop-low averaging. Racing events use gate judges plus chief of race authority.",
  },
  governingBodies: [
    { name: "International Ski and Snowboard Federation", acronym: "FIS", founded: 1924, headquarters: "Oberhofen am Thunersee, Switzerland", website: "https://www.fis-ski.com/en/snowboarding" },
    { name: "World Snowboard Federation", acronym: "WSF", founded: 2002, headquarters: "worldwide (alternative circuit)" },
    { name: "US Ski & Snowboard", founded: 1905, headquarters: "Park City, USA" },
  ],
  majorCompetitions: [
    { name: "Winter Olympic Games", frequency: "quadrennial", founded: 1998, region: "worldwide" },
    { name: "FIS Snowboard World Championships", frequency: "biennial", founded: 1996, region: "worldwide" },
    { name: "FIS Snowboard World Cup", frequency: "annual", founded: 1994, region: "worldwide" },
    { name: "X Games (Winter)", frequency: "annual", founded: 1997, region: "worldwide (invitational)" },
    { name: "Burton US Open", frequency: "annual", founded: 1982, region: "USA — oldest snowboarding competition" },
  ],
  countriesPlayed: ["US", "CA", "AT", "CH", "IT", "FR", "DE", "NO", "SE", "FI", "JP", "KR", "AU", "NZ"],
  famousAthletes: [
    "Shaun White",
    "Chloe Kim",
    "Jamie Anderson",
    "Ayumu Hirano",
    "Iouri Podladtchikov",
    "Sébastien Toutant",
    "Anna Gasser",
    "Kelly Clark",
    "Terje Håkonsen",
    "Travis Rice",
  ],
  records: [
    { title: "Most Winter Olympic halfpipe golds", holder: "Shaun White", value: "3 (2006, 2010, 2018)", year: 2018 },
    { title: "First women's halfpipe 1080 in competition", holder: "Chloe Kim", value: "back-to-back 1080s (PyeongChang)", year: 2018 },
    { title: "First triple cork 1620 (big air)", holder: "Yuki Kadono / Marcus Kleveland", value: "1620 (4.5 spins with 3 flips)", year: 2015 },
  ],

  variants: ["halfpipe", "slopestyle", "big-air", "snowboard-cross", "parallel-giant-slalom", "banked-slalom", "boardercross", "para-snowboard"],
  relatedSports: ["freestyle-skiing", "skateboarding", "surfing"],

  skills: [
    "edge control",
    "aerial awareness",
    "rotation timing (spotting the landing)",
    "amplitude off pipe / kicker walls",
    "balance on rails",
    "high-speed course reading",
    "commitment on new tricks",
  ],
  strategies: [
    { title: "Progression run", body: "First run at 80% difficulty to bank a solid score; second run go all-in for a bigger trick." },
    { title: "Grab selection", body: "Match grabs to your rotation for variety; nose grab on frontsides, tail on backsides." },
    { title: "Course line (SBX)", body: "Inside line on turns saves time; hold the fastest line off jumps to keep speed for the next feature." },
    { title: "Halfpipe amplitude", body: "Go for max air on each wall — height scores more than technical complexity when equal." },
  ],

  terminology: [
    { term: "Regular / Goofy", meaning: "Foot stance — regular leads with the left foot, goofy with the right." },
    { term: "Heelside / Toeside", meaning: "The two edges of the board and the corresponding turn directions." },
    { term: "Backside / Frontside (in the pipe)", meaning: "Backside = spin turning your back to the direction of travel; frontside = spin turning your chest forward." },
    { term: "McTwist", meaning: "540° inverted spin with a hand touch — signature trick invented by Mike McGill." },
    { term: "Method air", meaning: "Classic straight-air grab where the rider bones out the board behind them — most photographed trick in snowboarding." },
    { term: "Cork", meaning: "An off-axis rotation — cork 720 is a 720 with a flipping component." },
    { term: "Switch", meaning: "Riding with your opposite (non-natural) foot forward." },
    { term: "Butter", meaning: "Flat-ground press on nose or tail — creative flatland trick." },
    { term: "Halfpipe", meaning: "22-metre U-shaped snow structure for aerial competitions." },
    { term: "Big Air", meaning: "Single-jump event scored on one massive kicker." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Stance and strap-in", body: "Determine regular or goofy; learn to strap in seated, get up on toeside and heelside edges." },
      { title: "J-turns and traverses", body: "Practise heelside and toeside J-turns on gentle greens." },
      { title: "Linked turns", body: "Combine heelside → toeside linked S-turns down a blue run." },
      { title: "Lift use", body: "Learn to load a chairlift with the back foot free, and safely dismount." },
    ] },
    { level: "intermediate", steps: [
      { title: "Carving", body: "Set edges cleanly to leave railroad-track lines on the snow." },
      { title: "First air (ollies & 180s)", body: "Ollie off small rollers, add 180° spins on and off the snow." },
      { title: "Riding switch", body: "Practise your opposite stance until it feels ~70% as natural." },
      { title: "Small park features", body: "Small boxes, rollers and a beginner-line kicker." },
    ] },
    { level: "advanced", steps: [
      { title: "Freestyle rotations", body: "Progress from 360 → 540 → 720 → 900 with grabs." },
      { title: "Halfpipe transitions", body: "Learn to pump the walls for amplitude, drop-in cleanly, and grab air." },
      { title: "Rail tricks", body: "50-50 → boardslide → lipslide → 270 on and off; commit and stay balanced." },
    ] },
  ],
  faq: [
    { question: "When did snowboarding become Olympic?", answer: "Nagano 1998 — giant slalom and halfpipe; parallel and snowboard cross were added in later Games." },
    { question: "How is halfpipe scored?", answer: "Six judges give a single 0-100 score reflecting execution, amplitude, difficulty and variety. The high and low are dropped; the average of the middle four is the run score." },
    { question: "What is a 'triple cork'?", answer: "A trick with three off-axis flipping rotations while spinning — first landed in competition by Torstein Horgmo (2011)." },
    { question: "Are ski resorts snowboard-friendly?", answer: "Most major resorts allow snowboards; a small handful (Alta, Deer Valley, Mad River Glen) remain ski-only." },
    { question: "How do I know if I'm regular or goofy?", answer: "Slide across a wooden floor in socks — whichever foot you naturally lead with is your front foot on the board." },
  ],

  wikipediaTitle: "Snowboarding",
  sources: [
    { label: "Wikipedia — Snowboarding", url: "https://en.wikipedia.org/wiki/Snowboarding", publisher: "Wikipedia" },
    { label: "FIS Snowboard Rules", url: "https://www.fis-ski.com/en/snowboarding/snowboard-rules", publisher: "FIS" },
    { label: "US Ski & Snowboard Rulebook", url: "https://usskiandsnowboard.org", publisher: "USSA" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

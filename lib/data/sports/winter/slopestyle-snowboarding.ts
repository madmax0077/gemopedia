import type { Sport } from "@/lib/types";

export const slopestyleSnowboarding: Sport = {
  id: "slopestyle-snowboarding",
  slug: "slopestyle-snowboarding",
  name: "Slopestyle Snowboarding",
  officialName: "Snowboard Slopestyle",
  aliases: ["SBX Slope", "Snowboard Slope"],
  shortDescription:
    "FIS-sanctioned freestyle snowboard discipline scored on a downhill course of rails, boxes, jumps + kickers — judges rate difficulty + amplitude + execution + variety. Winter Olympic event since Sochi 2014; Jamie Anderson (USA) is signature two-time Olympic gold medallist.",
  longDescription:
    "Slopestyle snowboarding is a FIS-sanctioned freestyle snowboard discipline in which riders descend a purpose-built course featuring a mixture of jibbing features (rails, boxes, urban-style street features) + big-air features (jumps, kickers, hip-jumps). Judges score each rider on Overall Impression — assessing difficulty, amplitude (height/distance), execution, variety, and progression across the course. Rider drops in from the top gate, executes tricks over 2-4 rail features, then 3-5 jumps of increasing size. Scoring is by 6-judge panel; highest + lowest scores dropped, remaining 4 averaged for the run score. Two runs per rider; best of two counts (in some formats). Debuted as Winter Olympic discipline at Sochi 2014 (both men + women). Jamie Anderson (USA) won gold at Sochi 2014 + PyeongChang 2018. Sébastien Toutant (Canada) won inaugural Big Air / crossover with slopestyle 2018 Beijing 2022 saw Su Yiming (China) win men's gold. World Cup slopestyle events run annually Oct-Mar; X Games slopestyle is the marquee non-Olympic event.",
  category: "winter-sports",
  subCategory: "freestyle snowboard (rails + jumps course)",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: true, isParalympic: false, isProfessional: true,
  season: "winter", era: "20th-century", popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "USA / Canada snowboard scene",
  estimatedOrigin: "Emerged 1990s as freestyle discipline; FIS-sanctioned late 1990s; Olympic since Sochi 2014",
  players: { min: 1, max: 1, note: "Individual event; qualification heats + finals." },
  equipment: [
    { name: "Freestyle snowboard", description: "Twin-tip, softer flex, ~150-160 cm; symmetrical for switch riding." },
    { name: "Freestyle boots + bindings", description: "Softer boots for freestyle flex; standard 2-strap bindings." },
    { name: "Helmet (mandatory)", description: "FIS + Olympic events require helmet." },
    { name: "Slopestyle course", description: "Downhill run with 2-4 rail/jib features + 3-5 kickers of increasing size." },
  ],
  duration: { approximateMinutes: 45, structure: "Each run 30-45 sec; qualifying + finals across a competition day (2-3 hrs total)." },
  objective: "Execute a technically difficult + varied run across rails + jumps; score maximum from judges.",
  matchStructure: "Qualifying heats (2 runs, best counts) → Finals (2-3 runs, best counts, in some formats sum of 2 best).",
  basicRules: [
    { title: "Score is judge-averaged Overall Impression", body: "6 judges; high + low dropped; middle 4 averaged." },
    { title: "Must clear all features in order", body: "Skipping features or falling early reduces score dramatically." },
    { title: "Two runs; best score counts", body: "In standard format; some Olympic formats sum best 2 runs." },
  ],
  advancedRules: [
    { title: "Difficulty (trick + spin + grab combos)", body: "Higher rotations (720°, 900°, 1080°, 1260°+), backflips, off-axis rotations score higher." },
    { title: "Amplitude bonus (height/distance)", body: "Higher/longer jumps at kickers earn extra amplitude points." },
    { title: "Variety across features", body: "Different tricks on each feature (not repeating spins) scores higher; failing to vary is a scoring deduction." },
  ],
  scoring: {
    summary: "0-100 score per run; higher = better; two runs per round, best counts.",
    winCondition: "Highest single-run score in Finals wins (or highest sum-of-two-best in some formats).",
    breakdown: [{ action: "Full clean run with difficult tricks", points: "80-100 point range" }, { action: "Fall / bail", points: "20-50 point range" }],
  },
  penalties: [
    { title: "Fall / bail", body: "Bail = lower judge score; falls reset momentum + kill run flow." },
    { title: "Skipped feature", body: "Score deduction for not attempting all features." },
    { title: "Course conditions delay / re-run", body: "Weather-related re-runs adjudicated by chief of course." },
  ],
  positions: [{ name: "Slopestyle Rider", role: "Solo competitor executing runs on the course.", count: 1 }],
  officiating: { officials: ["6 FIS-certified freestyle judges", "Chief of Course", "Head Judge", "Video Review Judge"], summary: "6 judges score runs; head judge oversees scoring; video review resolves disputes." },
  governingBodies: [
    { name: "Fédération Internationale de Ski (FIS)", founded: 1924, headquarters: "Oberhofen, Switzerland" },
    { name: "United States Ski and Snowboard Association", founded: 1905, headquarters: "Park City, Utah" },
    { name: "Ticket To Ride / TTR (until 2013) then absorbed into FIS", founded: 2002, headquarters: "n/a" },
  ],
  majorCompetitions: [
    { name: "Winter Olympic Games — Slopestyle Snowboarding", frequency: "quadrennial", founded: 2014, region: "worldwide (Olympic)" },
    { name: "FIS Snowboard World Cup — Slopestyle", frequency: "annual (~6 events)", founded: 1994, region: "worldwide" },
    { name: "X Games Slopestyle (Aspen)", frequency: "annual", founded: 1997, region: "USA / broadcast worldwide" },
    { name: "FIS Snowboard World Championships", frequency: "biennial", founded: 1996, region: "worldwide" },
  ],
  countriesPlayed: ["US", "CA", "NO", "SE", "FI", "CH", "AT", "JP", "CN", "NZ", "AU"],
  famousAthletes: ["Jamie Anderson (USA) — 2× Olympic gold", "Sébastien Toutant (CAN)", "Su Yiming (CHN)", "Zoi Sadowski-Synnott (NZL) — 2022 Olympic gold"],
  records: [
    { title: "Olympic debut Sochi 2014", holder: "IOC", value: "Slopestyle snowboarding first contested at Sochi 2014 Winter Olympics", year: 2014 },
    { title: "Jamie Anderson 2× Olympic gold", holder: "Jamie Anderson (USA)", value: "Sochi 2014 + PyeongChang 2018 women's slopestyle gold", year: 2018 },
    { title: "Zoi Sadowski-Synnott Beijing 2022", holder: "Zoi Sadowski-Synnott (NZL)", value: "New Zealand's first Winter Olympic gold, in women's slopestyle Beijing 2022", year: 2022 },
  ],
  variants: ["slopestyle-snowboarding-olympic", "slopestyle-snowboarding-x-games"],
  relatedSports: ["big-air-snowboarding", "halfpipe-snowboarding", "slopestyle-skiing", "snowboard-cross", "freeski-slopestyle"],
  skills: ["park riding + trick vocabulary", "jib + rail balance", "spin awareness (900°/1080°/1260°)", "line-planning across features"],
  strategies: [
    { title: "Variety-first line plan", body: "Plan spins in different directions (frontside/backside/switch) across kickers; judges penalise repetition." },
    { title: "Difficulty escalation across course", body: "Save biggest trick for final feature — judges weight the final trick heavily." },
    { title: "Consistent qualifier vs. all-in final", body: "Qualifier: land clean easier run; Final: attempt hero trick." },
  ],
  terminology: [
    { term: "Jib", meaning: "Rail / box feature slid or trick-ed on" },
    { term: "Kicker", meaning: "Jump ramp" },
    { term: "Amplitude", meaning: "Height / distance of trick above/across kicker" },
    { term: "Spin (720/900/1080/1260)", meaning: "Rotation in degrees mid-air" },
    { term: "Switch", meaning: "Riding non-dominant foot forward" },
    { term: "Overall Impression", meaning: "The single 0-100 judge score encompassing difficulty + execution + variety" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Small park + 180 spins", body: "Small kickers + basic 180 spins + 50-50 grinds on boxes." }] },
    { level: "intermediate", steps: [{ title: "540/720 + boardslide rails", body: "Medium kickers + 540/720 spins + boardslide rail features." }] },
    { level: "advanced", steps: [{ title: "1080+ spins + technical rail combos", body: "Large kickers + 1080/1260 spins + technical rail combos + variety across features." }] },
  ],
  faq: [
    { question: "How is slopestyle scored?", answer: "Judged 0-100 Overall Impression by 6-judge panel; high + low dropped; middle 4 averaged. Judged on difficulty, amplitude, execution, variety, progression." },
    { question: "How does slopestyle differ from big air?", answer: "Slopestyle = course with rails + multiple jumps scored as a run. Big air = single massive jump scored as one trick. Slopestyle rewards variety across features; big air rewards single-trick difficulty." },
  ],
  wikipediaTitle: "Slopestyle",
  sources: [{ label: "Wikipedia — Slopestyle", url: "https://en.wikipedia.org/wiki/Slopestyle", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default slopestyleSnowboarding;

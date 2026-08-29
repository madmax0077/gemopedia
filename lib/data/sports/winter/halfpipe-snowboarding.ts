import type { Sport } from "@/lib/types";

export const halfpipeSnowboarding: Sport = {
  id: "halfpipe-snowboarding",
  slug: "halfpipe-snowboarding",
  name: "Halfpipe Snowboarding",
  officialName: "Snowboard Halfpipe",
  aliases: ["SBX Halfpipe", "Snowboard HP"],
  shortDescription:
    "Freestyle snowboard discipline in 22-ft superpipe — riders launch airs off both walls executing spins, grabs + flips. Winter Olympic event since Nagano 1998; Shaun White (USA) 3× Olympic gold + Ayumu Hirano (JPN) Beijing 2022 signature champion.",
  longDescription:
    "Halfpipe snowboarding is a FIS-sanctioned freestyle snowboard discipline in which riders descend a superpipe — a U-shaped snow structure with 22-ft (6.7 m) vertical walls, ~180 m long, cut into a mountain slope — executing sequences of aerial tricks off the vertical lips of both walls. Judged by 6-judge panel on Overall Impression (difficulty, amplitude/air-height, execution, variety, progression). Standard Olympic run has 4-5 hits (airs) per wall. Debuted as Winter Olympic snowboard discipline at Nagano 1998 (alongside giant slalom). Shaun White (USA) is signature figure: gold at Torino 2006, Vancouver 2010, PyeongChang 2018 (3× Olympic gold). Ayumu Hirano (JPN) won Beijing 2022 gold with the first triple cork 1440 in Olympic competition. Chloe Kim (USA) won women's gold at PyeongChang 2018 + Beijing 2022. Kelly Clark (USA) won inaugural women's gold Salt Lake 2002. Superpipe standard was 22 ft since 2006 (previously 15-18 ft). X Games Superpipe is marquee non-Olympic event. Sport requires enormous training risk — falls from 15-20+ ft airs onto pipe wall can be catastrophic.",
  category: "winter-sports",
  subCategory: "freestyle snowboard (22-ft superpipe)",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: true, isParalympic: false, isProfessional: true,
  season: "winter", era: "20th-century", popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "USA snowboard scene (Lake Tahoe, Colorado)",
  estimatedOrigin: "Emerged 1980s in USA (skateboarding-influenced); Olympic since Nagano 1998; standardised 22-ft superpipe 2006",
  players: { min: 1, max: 1, note: "Individual event; qualification heats + finals." },
  equipment: [
    { name: "Freestyle snowboard", description: "Twin-tip, medium-stiff flex, ~150-158 cm; symmetrical for switch riding." },
    { name: "Freestyle boots + bindings", description: "Moderate-flex boots; standard 2-strap bindings." },
    { name: "Helmet (mandatory)", description: "FIS + Olympic mandate helmet due to fall risk." },
    { name: "Superpipe", description: "22-ft (6.7 m) vertical walls, ~180 m long, U-shaped; cut into mountain slope." },
  ],
  duration: { approximateMinutes: 30, structure: "Each run 25-40 sec; qualifying + finals across ~2 hrs competition." },
  objective: "Execute maximum-difficulty, maximum-amplitude aerial trick sequences off both pipe walls; score maximum from judges.",
  matchStructure: "Qualifying (2 runs best) → Finals (3 runs best in Olympic format).",
  basicRules: [
    { title: "Score is judge Overall Impression (0-100)", body: "6 judges; high + low dropped; middle 4 averaged." },
    { title: "4-5 hits per wall standard run", body: "Rider drops in from top, launches airs off each wall, transitions across pipe." },
    { title: "3 runs finals; best counts", body: "Olympic + WC finals: 3 runs, best single run scores." },
  ],
  advancedRules: [
    { title: "Difficulty (rotation + flips + grabs)", body: "Higher rotations (900/1080/1260/1440), flips (frontflip/backflip), off-axis rotations (double/triple corks) score higher." },
    { title: "Amplitude (air height above pipe lip)", body: "Higher airs (15+ ft above coping) score more amplitude points." },
    { title: "Variety across hits", body: "Different spin directions + tricks on each hit; repetition reduces score." },
  ],
  scoring: {
    summary: "0-100 score per run; higher = better. 3 runs, best counts.",
    winCondition: "Highest single-run score in Finals wins.",
    breakdown: [{ action: "Clean run with 5+ different big tricks", points: "85-100" }, { action: "Fall / bail", points: "20-50" }],
  },
  penalties: [
    { title: "Fall / bail", body: "Fall on wall / flat bottom = major score deduction; often run-ending." },
    { title: "Failed rotation landing", body: "Under-rotation / over-rotation on landing scored down." },
  ],
  positions: [{ name: "Halfpipe Rider", role: "Solo competitor in the superpipe.", count: 1 }],
  officiating: { officials: ["6 FIS freestyle judges", "Head Judge", "Chief of Course", "Video Review Judge"], summary: "6 judges score; head judge oversees; video review resolves disputes." },
  governingBodies: [
    { name: "Fédération Internationale de Ski (FIS)", founded: 1924, headquarters: "Oberhofen, Switzerland" },
    { name: "United States Ski and Snowboard Association", founded: 1905, headquarters: "Park City, Utah" },
  ],
  majorCompetitions: [
    { name: "Winter Olympic Games — Snowboard Halfpipe", frequency: "quadrennial", founded: 1998, region: "worldwide (Olympic)" },
    { name: "FIS Snowboard World Cup — Halfpipe", frequency: "annual (~6 events)", founded: 1994, region: "worldwide" },
    { name: "X Games Superpipe (Aspen)", frequency: "annual", founded: 1997, region: "USA / broadcast worldwide" },
    { name: "FIS Snowboard World Championships", frequency: "biennial", founded: 1996, region: "worldwide" },
    { name: "Dew Tour Superpipe", frequency: "annual", founded: 2005, region: "USA" },
  ],
  countriesPlayed: ["US", "CA", "JP", "CH", "NO", "SE", "FI", "AT", "CN", "AU"],
  famousAthletes: ["Shaun White (USA) — 3× Olympic gold", "Ayumu Hirano (JPN) — Olympic gold Beijing 2022", "Chloe Kim (USA) — 2× Olympic gold", "Kelly Clark (USA) — 1× gold + 2× bronze", "Scotty James (AUS)"],
  records: [
    { title: "Olympic debut Nagano 1998", holder: "IOC", value: "Snowboard halfpipe first contested at Nagano 1998 Winter Olympics", year: 1998 },
    { title: "Shaun White 3× Olympic gold", holder: "Shaun White (USA)", value: "Torino 2006 + Vancouver 2010 + PyeongChang 2018 — most decorated Olympic halfpipe snowboarder", year: 2018 },
    { title: "First triple cork 1440 in Olympic halfpipe", holder: "Ayumu Hirano (JPN)", value: "Landed triple cork 1440 to win gold at Beijing 2022 Winter Olympics", year: 2022 },
    { title: "22-ft superpipe standard since 2006", holder: "FIS", value: "Standard pipe wall height increased to 22 ft (6.7 m) in 2006 (from 15-18 ft)", year: 2006 },
  ],
  variants: ["halfpipe-snowboarding-olympic", "halfpipe-snowboarding-x-games"],
  relatedSports: ["slopestyle-snowboarding", "big-air-snowboarding", "halfpipe-skiing", "vert-skateboarding"],
  skills: ["pipe transition riding", "spin awareness (900/1080/1260/1440)", "double/triple cork execution", "grab variety"],
  strategies: [
    { title: "Amplitude-first opening hits", body: "Bigger airs on first 2 hits set tone + amplitude score for the whole run." },
    { title: "Variety over spin count", body: "Judges reward different spin directions/trick types over repeated 1080s." },
    { title: "Signature trick placement (hit 3-4)", body: "Save signature triple cork or off-axis trick for hit 3-4 where amplitude has built up." },
  ],
  terminology: [
    { term: "Superpipe", meaning: "22-ft vertical-walled U-shaped snow pipe" },
    { term: "Coping", meaning: "The top edge of the pipe wall" },
    { term: "Hit", meaning: "One aerial trick off one wall" },
    { term: "Amplitude", meaning: "Air height above the coping" },
    { term: "Double / Triple Cork", meaning: "Off-axis rotation with 2/3 head-below-feet inversions" },
    { term: "Grab (Indy/Mute/Method/Stalefish)", meaning: "Hand-grab on board mid-air, adds style + score" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Small pipe + basic airs", body: "6-8 ft pipe + straight airs + basic 180 spins." }] },
    { level: "intermediate", steps: [{ title: "12-15 ft pipe + 540/720", body: "12-15 ft pipe + 540/720 spins + basic grabs." }] },
    { level: "advanced", steps: [{ title: "Superpipe + cork 900/1080 + triple cork", body: "22-ft superpipe + cork rotations + double/triple cork variations." }] },
  ],
  faq: [
    { question: "How high is a superpipe?", answer: "Modern Olympic + FIS World Cup superpipes have 22-ft (6.7 m) vertical walls, ~180 m long. Standard changed from 15-18 ft to 22 ft in 2006." },
    { question: "Who is the greatest halfpipe snowboarder?", answer: "Shaun White (USA) is widely considered the GOAT with 3 Olympic golds (Torino 2006, Vancouver 2010, PyeongChang 2018). Ayumu Hirano (JPN) is the modern era leader with the first-ever Olympic triple cork 1440 (Beijing 2022 gold)." },
  ],
  wikipediaTitle: "Halfpipe skiing",
  sources: [{ label: "Wikipedia — Snowboarding", url: "https://en.wikipedia.org/wiki/Snowboarding", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default halfpipeSnowboarding;

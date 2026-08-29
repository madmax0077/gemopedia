import type { Sport } from "@/lib/types";

export const handcycling: Sport = {
  id: "handcycling",
  slug: "handcycling",
  name: "Handcycling",
  officialName: "Handcycling (Union Cycliste Internationale - UCI + International Paralympic Committee)",
  aliases: ["Hand Cycling", "Handcycle", "Para-Cycling Handbike"],
  shortDescription:
    "Paralympic cycling discipline — 3-wheeled cycles propelled by arms + upper body; contested at Summer Paralympics since Athens 2004; UCI Para-Cycling Road World Championships annually.",
  longDescription:
    "Handcycling is a Paralympic cycling discipline for athletes with lower-limb impairments. Athletes propel 3-wheeled cycles (handbikes) using arms + upper body via hand-crank system. Cycles: (1) Recumbent (rider sits with legs extended forward); (2) Kneeling (rider kneels + leans forward — most common competitive). UCI Para-Cycling regulates competitive events. Paralympic since Athens 2004. Classifications: H1-H5 based on functional ability (H1 = most severe impairment; H5 = least). Multiple events: road race, time trial, mixed team relay. World Championships annually via UCI Para-Cycling Road World Championships. Legendary athletes: Alex Zanardi (Italy — Formula 1 driver turned Paralympic multi-medalist gold; 3× Paralympic gold), Vittorio Podestà (Italy — 3× Paralympic gold), Rafal Wilk (Poland — multi-time Paralympic medal), Alicia Dana (US — women's Paralympic silver). Sport requires enormous upper-body strength + technical bike handling.",

  category: "adventure-extreme-sports",
  subCategory: "paralympic cycling — hand-propelled 3-wheel bike",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: true,
  isProfessional: true,
  season: "summer",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "United States + Europe (1980s-1990s); UCI Para-Cycling regulations; Paralympic Athens 2004",
  estimatedOrigin: "Emerged 1980s USA + Europe as adaptation of cycling for lower-limb impaired athletes; UCI regulations formalized 1990s; Paralympic debut Athens 2004",

  players: { min: 1, max: 4, note: "Individual road race + time trial; mixed team relay (3 athletes)." },
  field: {
    surfaceName: "Road courses — paved circuits + point-to-point routes",
    dimensions: "Time trial: 20-25 km. Road race: 40-80 km. Team relay: multiple loops.",
    description: "Standard cycling road courses; often shared with Paralympic road cyclists or Olympic cyclists. UCI-sanctioned road courses; safety-optimized.",
  },
  equipment: [
    { name: "Handbike (recumbent or kneeling)", description: "3-wheeled cycle propelled by hand cranks; carbon fiber frame; cost $5,000-$15,000 entry to elite." },
    { name: "Helmet + eyewear", description: "Standard cycling helmet + wraparound eyewear." },
    { name: "Athletic apparel", description: "Cycling kit adapted for handbike position; often shortened jersey + adaptive gloves." },
    { name: "Gearing system", description: "Multi-speed hand-crank gearing; often 20-30 speeds." },
    { name: "Braking system", description: "Hand-brake levers for both front + rear wheels." },
  ],
  duration: { approximateMinutes: 90, structure: "Time trial: 20-30 min. Road race: 60-120 min. Mixed team relay: 60-90 min total." },
  objective: "Cross finish line first (road race) or complete distance in fastest time (time trial).",
  matchStructure: "Time trial: individual start intervals. Road race: mass start; first across finish wins. Mixed team relay: 3 athletes tagging.",

  basicRules: [
    { title: "Complete course as marked", body: "Course marked with signage + marshals; must stay within corridor." },
    { title: "First across finish line wins (road race)", body: "Road race: mass start; position at finish = medal + points." },
    { title: "Fastest time wins (time trial)", body: "Time trial: individual start intervals; fastest total time wins." },
    { title: "Classification-based", body: "H1-H5 classifications compete separately; medals awarded per class." },
    { title: "Standard cycling rules apply", body: "No drafting behind support vehicles or off-course riders; right-of-way rules." },
    { title: "Team relay tag zone", body: "Mixed team relay: tag zone at course transitions." },
  ],
  scoring: {
    summary: "First across finish (road race) or fastest time (time trial). Team relay: fastest combined time.",
    winCondition: "Race position (road race) or time (time trial).",
    breakdown: [
      { action: "Race win / Time trial 1st", points: "Gold medal + UCI points" },
      { action: "Podium (2nd, 3rd)", points: "Silver + bronze + points" },
      { action: "Team relay win", points: "Gold medal for full team" },
      { action: "UCI World Championship win", points: "Rainbow jersey + prestige" },
    ],
  },

  positions: [
    { name: "Rider", role: "Solo competitor.", count: 1 },
    { name: "Team relay member", role: "1 of 3 in mixed team relay.", count: 3 },
    { name: "Coach + team support", role: "Bike setup + race strategy + logistics." },
  ],
  officiating: {
    officials: ["Chief Commissaire", "Line judges", "Timekeepers", "Medical staff"],
    summary: "UCI + IPC-certified officials; classification verification + timing systems.",
  },

  governingBodies: [
    { name: "Union Cycliste Internationale (UCI)", founded: 1900, headquarters: "Aigle, Switzerland", website: "https://uci.org" },
    { name: "International Paralympic Committee (IPC)", founded: 1989, headquarters: "Bonn, Germany" },
    { name: "USA Cycling Para-Cycling", founded: 2004, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "Summer Paralympic Games (Handcycling)", frequency: "quadrennial", founded: 2004, region: "worldwide" },
    { name: "UCI Para-Cycling Road World Championships", frequency: "annual (September)", founded: 1998, region: "worldwide" },
    { name: "UCI Para-Cycling Road World Cup", frequency: "annual (5-8 rounds)", founded: 2010, region: "worldwide" },
    { name: "Cybathlon (biannual Zurich)", frequency: "biennial", founded: 2016, region: "Zurich, Switzerland" },
  ],
  countriesPlayed: ["IT", "US", "GB", "DE", "AU", "NL", "PL", "BE", "FR", "ES", "AR", "BR", "CA", "JP"],
  famousAthletes: [
    "Alex Zanardi (Italy — Formula 1 driver turned Paralympic multi-medalist; 3× Paralympic gold)",
    "Vittorio Podestà (Italy — 3× Paralympic gold)",
    "Rafal Wilk (Poland — multi-time Paralympic medal)",
    "Alicia Dana (US — women's Paralympic silver)",
    "Jetze Plat (Netherlands — Paralympic gold + Ironman World Champion)",
    "Oksana Masters (US — cross-discipline Paralympic gold: handcycling + Nordic skiing)",
    "Anna Beck (Germany — women's Paralympic medals)",
    "Sarah Storey (UK — 17× Paralympic gold cycling + track medals)",
  ],
  records: [
    { title: "Most Paralympic handcycling gold (Italy dominance)", holder: "Alex Zanardi + Vittorio Podestà", value: "Multiple Paralympic golds; Italy sport's dominant nation", year: 2016 },
    { title: "Alex Zanardi's comeback", holder: "Alex Zanardi (Italy)", value: "F1 driver lost both legs 2001; became Paralympic multi-medalist gold; iconic comeback story", year: 2016 },
    { title: "First Paralympic Games", holder: "Athens 2004", value: "Full medal event debut", year: 2004 },
    { title: "Sarah Storey Paralympic dominance", holder: "Sarah Storey (UK)", value: "17× Paralympic gold across cycling + earlier swimming events; UK's most decorated Paralympian", year: 2021 },
  ],

  variants: ["ipc-uci-paralympic-handcycling", "uci-para-cycling-road-world-championships", "recreational-handcycling"],
  relatedSports: ["cycling", "wheelchair-basketball", "wheelchair-rugby", "para-nordic-skiing"],

  skills: ["upper-body strength + endurance", "handbike technical control", "pacing on long courses", "positioning + slipstreaming (road race)", "aerodynamic body position (time trial)"],

  terminology: [
    { term: "Handcycling", meaning: "Cycling discipline propelled by arms + upper body." },
    { term: "Handbike", meaning: "3-wheeled cycle propelled by hand cranks." },
    { term: "H1-H5 classification", meaning: "Functional impairment rating; H1 = most severe, H5 = least." },
    { term: "Kneeling handbike", meaning: "Most common competitive handbike; rider kneels + leans forward." },
    { term: "Recumbent handbike", meaning: "Rider sits with legs extended forward." },
    { term: "Alex Zanardi", meaning: "Italian Formula 1 driver turned Paralympic multi-medalist; iconic comeback story." },
    { term: "Mixed team relay", meaning: "3-athlete team relay format." },
    { term: "Time trial", meaning: "Individual start intervals; fastest total time wins." },
  ],

  faq: [
    { question: "What is Handcycling?", answer: "Paralympic cycling discipline for athletes with lower-limb impairments. Athletes propel 3-wheeled cycles (handbikes) using arms + upper body via hand-crank system. Two cycle types: recumbent (legs extended forward) + kneeling (rider kneels + leans forward — most common competitive). UCI Para-Cycling regulates competitive events. Paralympic since Athens 2004." },
    { question: "Who is Alex Zanardi?", answer: "Iconic Italian athlete. Former Formula 1 driver + successful IndyCar racer. Lost both legs in devastating 2001 IndyCar crash. Returned to competitive cycling as handcyclist. Won 3× Paralympic gold + multiple World Championship gold. Comeback story is one of sport's most inspiring narratives. Sadly, suffered severe brain injury in 2020 handbike accident but survives." },
    { question: "How is Handcycling different from regular Cycling?", answer: "Handcycling: 3-wheeled bike; propulsion via hand cranks with arms/upper body; athletes typically have lower-limb impairment. Regular Cycling: 2-wheeled bike; propulsion via pedals with legs. Different physiology + equipment + racing tactics. Handcycling competitive at Paralympic level; UCI Para-Cycling World Championships annually." },
    { question: "Who is the greatest handcyclist?", answer: "Multiple candidates: (1) Alex Zanardi (Italy) — 3× Paralympic gold + iconic comeback from F1 to Paralympic multi-medalist. (2) Vittorio Podestà (Italy) — 3× Paralympic gold. (3) Rafal Wilk (Poland) — multi-time Paralympic medal. (4) Sarah Storey (UK) — 17× Paralympic gold across cycling + earlier swimming events." },
    { question: "Is Handcycling in the Olympics?", answer: "No, but at every Summer Paralympics since Athens 2004. Paralympic Games run alongside Olympic Games in same host city. UCI Para-Cycling Road World Championships annually is sport's peak international event." },
  ],

  wikipediaTitle: "Handcycle",
  sources: [{ label: "UCI Para-Cycling", url: "https://uci.org/para-cycling", publisher: "UCI" }, { label: "Wikipedia — Handcycle", url: "https://en.wikipedia.org/wiki/Handcycle", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

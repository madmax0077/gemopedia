import type { Sport } from "@/lib/types";

export const sportingClays: Sport = {
  id: "sporting-clays",
  slug: "sporting-clays",
  name: "Sporting Clays",
  officialName: "Sporting Clays (NSCA + FITASC)",
  aliases: ["Golf with a Shotgun"],
  shortDescription:
    "Field-based clay target shooting simulating real-world bird + rabbit hunts across 10-15 stations of varied target presentations — the most diverse shotgun discipline.",
  longDescription:
    "Sporting clays originated in England in the 1920s as hunter training and was refined in USA at Broken Arrow, Oklahoma in 1980. Unlike fixed-station skeet + trap, sporting clays uses 10-15 stations with unique target presentations mimicking dove, pheasant, quail, and rabbit hunting scenarios. FITASC (European) and NSCA (American) govern separate but similar rulesets. 100-target competitions common; National Sporting Clays Association (NSCA) sanctions US National Championships in San Antonio.",

  category: "precision-sports",
  subCategory: "field-based clay target shotgun discipline",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "GB",
  regionOfOrigin: "England (1920s hunter training); refined in USA (Broken Arrow, Oklahoma 1980)",
  estimatedOrigin: "Origins 1920s UK; standardized USA 1980 (Broken Arrow); NSCA founded 1989; FITASC world event 1965",

  players: { min: 1, max: 6, note: "Squads of 5-6 shooters rotate through stations." },
  field: {
    surfaceName: "Sporting clays course",
    dimensions: "10-15 stations across ~40 acres of varied terrain",
    description: "Woodland, open field, water features; each station simulates specific hunting scenario." },
  equipment: [
    { name: "Shotgun (12 or 20 gauge over-under)", description: "Longer barrels (32-34\") vs. skeet; screw-in chokes standard." },
    { name: "12 or 20 ga shells (7 1/2 shot)", description: "Range: 20-40 yard shots; 1 1/8 oz load standard." },
    { name: "Shooting vest + shell pouch", description: "Holds 25-50 shells per round." },
    { name: "Eye + hearing protection", description: "Same as other shotgun disciplines." },
    { name: "Choke tubes (Modified, Improved, Full)", description: "Screw-in tubes matched to each station's distance." },
  ],
  duration: {
    approximateMinutes: 120,
    structure: "100-target round: 2-3 hours per squad. Full competition: half-day to full day." },

  objective:
    "Break as many clay targets as possible across a 100-target course.",
  matchStructure:
    "Squad rotates through 10-15 stations; each station has 4-10 targets in specific single/double sequences unique to that station.",

  basicRules: [
    { title: "Station presentation", body: "Each station has posted rules explaining single + double target sequences." },
    { title: "Simulated hunt scenarios", body: "'Dove', 'Rabbit', 'Springing Teal', 'Chandelle' — presentation types drawn from real game." },
    { title: "'Pull' call + 3-second window", body: "Target released on call; must fire before target lands or leaves shooting window." },
    { title: "Choke selection", body: "Shooter changes chokes per station based on target distance." },
    { title: "Broken target = 1 pt", body: "Any visible piece = broken; whole target = miss." },
  ],
  advancedRules: [
    { title: "FITASC (European)", body: "Gun down / low-gun requirement; shooter starts with gun below armpit." },
    { title: "NSCA (American)", body: "Gun position free; typically pre-mounted at station." },
    { title: "Doubles + true pairs", body: "Two targets thrown simultaneously (true pair) or immediately after each other (following pair)." },
    { title: "Class ratings", body: "AAA/AA/A/B/C/D/E classes for handicap-adjusted competition." },
  ],
  scoring: {
    summary: "1 point per broken target; maximum 100 or 200 per event.",
    winCondition: "Highest score in class; overall high score winner (HOA — High Overall Award).",
    breakdown: [
      { action: "Target broken", points: "1 pt" },
      { action: "Perfect station", points: "'Straight' — bonus recognition" },
      { action: "HOA (High Overall All-gauge)", points: "Top score across gauges" },
    ],
  },
  penalties: [
    { title: "No-bird", body: "Broken or slow target; shooter can call 'no bird' and re-attempt." },
    { title: "Time-out", body: "Shooter must fire within 3 seconds of target visibility." },
    { title: "Safety violation", body: "Immediate DQ." },
  ],

  positions: [
    { name: "Shooter", role: "Squad member at station.", count: 1 },
    { name: "Squad captain", role: "Manages squad rotation + timing." },
    { name: "Puller / Scorer", role: "Operates trap machines + records hits." },
    { name: "Referee", role: "Judges disputed calls." },
  ],
  officiating: {
    officials: ["NSCA-certified referees", "FITASC officials for World events"],
    summary: "NSCA + FITASC officials for major competitions; club-level events use volunteer scorers + referees.",
  },

  governingBodies: [
    { name: "National Sporting Clays Association (NSCA)", founded: 1989, headquarters: "San Antonio, Texas, USA", website: "https://mynssa-nsca.com" },
    { name: "Fédération Internationale de Tir aux Armes Sportives de Chasse (FITASC)", founded: 1921, headquarters: "Paris, France", website: "https://fitasc.com" },
  ],
  majorCompetitions: [
    { name: "NSCA National Championships", frequency: "annual (San Antonio, TX)", founded: 1989, region: "USA" },
    { name: "FITASC World Sporting Championship", frequency: "annual", founded: 1965, region: "rotating globally" },
    { name: "US Open Sporting Clays", frequency: "annual", founded: 1993, region: "USA" },
    { name: "British Open Sporting Championship", frequency: "annual", founded: 1979, region: "UK" },
  ],
  countriesPlayed: ["US", "GB", "FR", "IT", "ES", "IE", "ZA", "AR", "AU", "CA"],
  famousAthletes: [
    "George Digweed (GB, 26× World Champion — most decorated shooter ever)",
    "Anthony Matarese Jr. (US, multi-time NSCA HOA winner)",
    "Zach Kienbaum (US, NSCA national champion multiple times)",
    "Cory Kruse (US, Krieghoff Team shooter, national high overall)",
    "Ben Husthwaite (GB, multiple British Open winner)",
  ],
  records: [
    { title: "Most World Sporting Championships", holder: "George Digweed", value: "26 world titles (1994-2019)", year: 2019 },
    { title: "Highest NSCA National Championship score", holder: "Various top shooters", value: "398-400/400 targets", year: 2023 },
    { title: "Perfect 200-target run", holder: "Several elite shooters", value: "200/200 straight in single competition", year: 2020 },
  ],

  variants: ["fitasc-sporting", "5-stand", "compak-sporting", "trap-shooting", "skeet-shooting"],
  relatedSports: ["skeet-shooting", "trap-shooting", "olympic-trap", "fitasc-hunting-sim"],

  skills: [
    "quick target acquisition + tracking",
    "adaptability across varied presentations",
    "choke + shell selection per station",
    "gun mount + swing mechanics",
    "reading terrain + wind",
  ],
  strategies: [
    { title: "Watch first shooter", body: "Observe target speed + line before your turn; adjust hold point + lead." },
    { title: "Focus on the front target", body: "In true pairs, break the leading (harder) target first — trailing target usually easier." },
    { title: "Move feet between stations", body: "Body alignment matters more than swing on crossing targets." },
    { title: "Match choke to distance", body: "Improved Cylinder for close 20-25 yd, Modified for 30 yd, Full for 40+ yd." },
  ],

  terminology: [
    { term: "Station", meaning: "Shooting position within the course; 10-15 per full round." },
    { term: "Presentation", meaning: "The specific target throw type at a station (dove, chandelle, rabbit)." },
    { term: "True pair", meaning: "Two targets thrown simultaneously." },
    { term: "Following pair", meaning: "Second target thrown immediately after first breaks or lands." },
    { term: "Report pair", meaning: "Second target released on the sound of the first shot." },
    { term: "Straight", meaning: "Breaking every target at a station without a miss." },
    { term: "HOA", meaning: "High Overall Award — top score across all gauges in competition." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Take an NSCA-certified lesson", body: "1-2 hour intro at a sporting clays course (~$100-$150 with instructor + shells)." },
        { title: "Shoot 500 rounds practice", body: "Different courses to expose yourself to varied presentations." },
        { title: "Enter local NSCA-registered shoots", body: "$25-$50 entry fees; monthly events at most clubs." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Climb NSCA class ratings", body: "AAA/AA/A/B/C/D classes; class advances with hit percentage." },
        { title: "Enter NSCA Nationals", body: "Annual event in San Antonio — 2000+ competitors, main + gauge events." },
        { title: "Qualify for FITASC World Championships", body: "National federation nomination + qualifying scores." },
      ],
    },
  ],

  faq: [
    { question: "Sporting clays vs. skeet vs. trap?", answer: "Skeet + trap = fixed stations, standardized targets. Sporting clays = varied stations, hunter-simulation targets." },
    { question: "Is sporting clays expensive?", answer: "$40-$100 per 100-target round with shells; serious competitors spend $10K+ on shotgun + $5K/year on shells + entries." },
    { question: "What gauge shotgun for sporting clays?", answer: "12 gauge dominant; 20 gauge for slighter shooters + subgauge events. Class shoots offer 28ga + .410 separately." },
    { question: "Best sporting clays gun?", answer: "Beretta 686/687, Browning Citori, Krieghoff K-80 all popular. Longer 32-34\" barrels aid swing." },
  ],

  sources: [
    { label: "Wikipedia — Sporting clays", url: "https://en.wikipedia.org/wiki/Sporting_clays", publisher: "Wikipedia" },
    { label: "NSCA official", url: "https://mynssa-nsca.com", publisher: "NSCA" },
    { label: "FITASC official", url: "https://fitasc.com", publisher: "FITASC" },
  ],
  wikipediaTitle: "Sporting clays",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

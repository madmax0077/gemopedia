import type { Sport } from "@/lib/types";

export const skeetShooting: Sport = {
  id: "skeet-shooting",
  slug: "skeet-shooting",
  name: "Skeet Shooting",
  officialName: "Skeet Shooting (ISSF Olympic + NSSA)",
  aliases: ["Skeet", "Olympic Skeet"],
  shortDescription:
    "Olympic shotgun discipline where competitors shoot clay targets launched from two houses (high and low) crossing at 8 stations arranged in a semicircle — 125 clays per event.",
  longDescription:
    "Skeet was invented in Andover, Massachusetts in 1920 by Charles Davies as 'Shooting Round the Clock' for grouse hunt training. American skeet was standardized 1926; international (Olympic) skeet followed with different rules 1968. Skeet debuted at the Olympics in 1968 (Mexico City) and joined women's events in 2000 (Sydney). Vincent Hancock (USA) has won 3 Olympic golds. NSSA governs the American variant; ISSF governs Olympic skeet.",

  category: "precision-sports",
  subCategory: "Olympic shotgun clay target shooting",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "US",
  regionOfOrigin: "Andover, Massachusetts, USA (Charles Davies, 1920)",
  estimatedOrigin: "Invented 1920; NSSA standardized 1926; Olympic debut Mexico City 1968",

  players: { min: 1, max: 6, note: "Squads of 5-6 shooters rotate through 8 stations." },
  field: {
    surfaceName: "Skeet field",
    dimensions: "Semicircle 21 m radius with 2 houses + 8 stations",
    description: "High House (left, 3m elevated) + Low House (right, 1m elevated) launching targets that cross at station 8." },
  equipment: [
    { name: "Shotgun (12 gauge over-under)", description: "Perazzi MX8, Beretta DT11, Krieghoff K-80 — $8K-$15K competition guns." },
    { name: "12ga skeet cartridges", description: "24-28g (Olympic) or 32g (American) #9 shot; standardized loads." },
    { name: "Eye + hearing protection", description: "Ballistic-rated shooting glasses + electronic ear pro." },
    { name: "Shooting vest", description: "Ammo pockets + shoulder pad for recoil." },
  ],
  duration: {
    approximateMinutes: 45,
    structure: "Round of 25 targets: 45-60 min per squad. Full 125-target competition: 3-4 hours across 5 rounds." },

  objective:
    "Break as many clay targets as possible across 125 shots (5 rounds of 25). Perfect score = 125/125.",
  matchStructure:
    "Squad of 5-6 rotates through 8 stations in fixed order. Each station has specific single/double target sequences. 25 targets per round; 5 rounds per full competition.",

  basicRules: [
    { title: "Station sequence", body: "Stations 1-7 shot in order; station 8 shot last. Squads rotate between stations." },
    { title: "Target types", body: "High House single, Low House single, or 'doubles' (both simultaneous)." },
    { title: "'Pull' call", body: "Shooter calls 'Pull' to release target; must fire within 3 seconds." },
    { title: "Broken target = 1 point", body: "Any visible piece falls = target broken (1 pt)." },
    { title: "Missed target = 0", body: "Whole target lands = miss." },
  ],
  advancedRules: [
    { title: "Olympic (ISSF) skeet", body: "3-second delay on target release; gun must be at hip until target visible." },
    { title: "American (NSSA) skeet", body: "Immediate target release when 'Pull' called; gun position not restricted." },
    { title: "Shoot-off tiebreak", body: "5-target shoot-off for tied top finishers; sudden-death after 5." },
    { title: "125-target Olympic event", body: "Qualification (125 targets over 5 rounds) → 6-shooter finals (50 targets)." },
  ],
  scoring: {
    summary: "1 point per broken target. Maximum 125 in Olympic qualification.",
    winCondition: "Highest score after all rounds; ties resolved by shoot-off.",
    breakdown: [
      { action: "Target broken", points: "1 pt" },
      { action: "Perfect round of 25", points: "'25 straight' — highly valued" },
      { action: "125/125 perfect competition", points: "Extremely rare (occasional Worlds)" },
    ],
  },
  penalties: [
    { title: "Missed target", body: "0 for that target." },
    { title: "Broken gun (mechanical)", body: "Referee may allow re-shoot on next available slot." },
    { title: "Safety violation", body: "Immediate disqualification; possible ban." },
  ],

  positions: [
    { name: "Shooter", role: "Squad member currently at station.", count: 1 },
    { name: "Squad", role: "5-6 shooters rotating through stations." },
    { name: "Puller", role: "Operates the target-release machine." },
    { name: "Referee", role: "Judges hits/misses + rule compliance." },
  ],
  officiating: {
    officials: ["Chief Referee", "Station referees", "ISSF/NSSA officials"],
    summary: "ISSF-licensed officials for Olympic + World competitions; NSSA for American skeet.",
  },

  governingBodies: [
    { name: "International Shooting Sport Federation (ISSF)", founded: 1907, headquarters: "Munich, Germany", website: "https://www.issf-sports.org" },
    { name: "National Skeet Shooting Association (NSSA)", founded: 1946, headquarters: "San Antonio, Texas, USA", website: "https://mynssa-nsca.com" },
  ],
  majorCompetitions: [
    { name: "Olympic Games (Skeet)", frequency: "every 4 years", founded: 1968, region: "rotating" },
    { name: "ISSF World Championships", frequency: "annual", founded: 1897, region: "rotating" },
    { name: "ISSF World Cup Series", frequency: "annual (6 events)", founded: 1986, region: "global" },
    { name: "NSSA World Skeet Championships", frequency: "annual (San Antonio)", founded: 1935, region: "USA" },
  ],
  countriesPlayed: ["US", "IT", "GB", "KW", "CZ", "SK", "FR", "DE", "AU", "SE", "ES"],
  famousAthletes: [
    "Vincent Hancock (US, 3× Olympic gold 2008 + 2012 + 2020)",
    "Diana Bacosi (IT, Olympic gold 2016 + 2024)",
    "Kim Rhode (US, 6× Olympic medalist across skeet + double trap)",
    "Georgios Achilleos (CY, world champion multiple times)",
    "Nasser Al-Attiya (QAT, Olympic bronze + multiple continental titles)",
  ],
  records: [
    { title: "Olympic Skeet gold record", holder: "Vincent Hancock", value: "3 Olympic golds (2008, 2012, 2020)", year: 2020 },
    { title: "Highest Olympic skeet finals score", holder: "Vincent Hancock", value: "60/60 (2020 Tokyo)", year: 2020 },
    { title: "First American Woman Skeet Olympic gold", holder: "Kim Rhode", value: "Skeet gold 2012 London", year: 2012 },
  ],

  variants: ["american-skeet-doubles", "issf-mixed-skeet", "sporting-clays", "trap-shooting"],
  relatedSports: ["trap-shooting", "sporting-clays", "double-trap", "olympic-trap"],

  skills: [
    "hand-eye coordination + fast target acquisition",
    "lead calculation (crossing shots)",
    "gun mount + shoulder swing",
    "consistent stance + rhythm",
    "mental focus (125 targets in 3+ hours)",
  ],
  strategies: [
    { title: "Consistent gun mount", body: "Same shoulder position + cheek weld every shot — precision comes from repetition." },
    { title: "Follow through swing", body: "Continue barrel movement past shot; stopping the gun causes misses." },
    { title: "Focus on the target, not the bead", body: "Lead is instinctive when eye locks on clay." },
    { title: "Rhythm across 25 targets", body: "Same tempo between calls prevents lapses of concentration." },
  ],

  terminology: [
    { term: "Pull", meaning: "Command to release the target." },
    { term: "High House", meaning: "Left-side target house (3m elevated)." },
    { term: "Low House", meaning: "Right-side target house (1m elevated)." },
    { term: "Doubles", meaning: "Both High + Low House targets launched simultaneously." },
    { term: "Perfect round", meaning: "25/25 targets broken in one round." },
    { term: "Shoot-off", meaning: "Tiebreak with 5+ targets between tied shooters." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Take an NSSA instructor lesson", body: "1-hour intro + safety session at NSSA-affiliated range (~$50)." },
        { title: "Shoot 100 rounds", body: "Build gun-mount + swing muscle memory over 4-6 sessions." },
        { title: "Join a local skeet club", body: "$500-$1500 annual dues; weekly rounds + practice." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Enter NSSA state championships", body: "Qualifier path to NSSA World Championships in San Antonio." },
        { title: "Transition to Olympic skeet", body: "ISSF rules differ (3s delay, gun mount) — 1-year transition typical." },
        { title: "Compete in ISSF World Cup", body: "Continental qualifier for Olympic quota slots." },
      ],
    },
  ],

  faq: [
    { question: "Skeet vs. Trap?", answer: "Skeet = 2 houses launching crossing targets from fixed angles. Trap = 1 house behind shooter launching angled targets rising away." },
    { question: "Olympic vs. American skeet?", answer: "Olympic (ISSF): 3-second delay, gun at hip. American (NSSA): immediate release, gun position flexible." },
    { question: "What gauge shotgun for skeet?", answer: "12 gauge Olympic; American allows 12/20/28/.410 across separate championships." },
    { question: "Cost to start skeet shooting?", answer: "Entry-level: $500 shotgun + $50 pair eye/ear pro + $8/round shells. Serious: $10K+ Perazzi/Krieghoff." },
  ],

  sources: [
    { label: "Wikipedia — Skeet shooting", url: "https://en.wikipedia.org/wiki/Skeet_shooting", publisher: "Wikipedia" },
    { label: "ISSF Skeet", url: "https://www.issf-sports.org/theissf/shooting/shotgun/skeet.ashx", publisher: "ISSF" },
    { label: "NSSA official", url: "https://mynssa-nsca.com", publisher: "NSSA" },
  ],
  wikipediaTitle: "Skeet shooting",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

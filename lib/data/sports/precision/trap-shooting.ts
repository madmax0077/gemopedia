import type { Sport } from "@/lib/types";

export const trapShooting: Sport = {
  id: "trap-shooting",
  slug: "trap-shooting",
  name: "Trap Shooting",
  officialName: "Trap Shooting (ISSF Olympic + ATA)",
  aliases: ["Olympic Trap", "American Trap"],
  shortDescription:
    "Oldest Olympic shotgun discipline — clay targets launched away from the shooter at unpredictable angles from a single trap house; the classic 'trap' event dates to 1900.",
  longDescription:
    "Trap shooting dates to the mid-1800s when live pigeons were replaced by glass balls (1866) then clay 'pigeons' (1875). It was one of the original 1900 Paris Olympic events. American trap (ATA, single 16-yard trap house) and Olympic trap (ISSF, 15-machine bunker with unpredictable angles) are the two dominant variants. USA and Italy dominate American trap; Italy, Czech Republic, and Slovakia rule Olympic trap. Massimo Fabbrizi (ITA) is a multiple World Champion.",

  category: "precision-sports",
  subCategory: "Olympic shotgun clay target discipline",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "major",

  countryOfOrigin: "GB",
  regionOfOrigin: "England (glass balls 1866; clay pigeons Fred Kimble USA 1880)",
  estimatedOrigin: "Live pigeon shooting 1830s; clay targets 1875; Olympic debut 1900 Paris; ATA founded 1900",

  players: { min: 1, max: 6, note: "Squads of 5-6 shooters rotate through 5 firing points." },
  field: {
    surfaceName: "Trap field",
    dimensions: "Trap house + 5 firing points arc'd 16 yards (ATA) or with 15-machine bunker (Olympic)",
    description: "American trap: 1 machine throwing at random angles. Olympic: 15 machines in bunker throwing pre-programmed unpredictable trajectories." },
  equipment: [
    { name: "Shotgun (12 gauge over-under)", description: "Long barrels (32-34\"); Perazzi MX8, Beretta DT11, Krieghoff K-80." },
    { name: "12ga trap loads (28g Olympic, 32g ATA)", description: "#7 1/2 or #8 shot; standardized loads." },
    { name: "Choke tubes (Modified/Full)", description: "Tighter chokes for going-away targets." },
    { name: "Shooting jacket", description: "Recoil pad + ammo pockets." },
    { name: "Eye + hearing protection", description: "Ballistic-rated glasses + electronic ear pro." },
  ],
  duration: {
    approximateMinutes: 45,
    structure: "Round of 25 targets: 45-60 min per squad. Olympic event: 125 targets across 5 rounds (3-4 hours)." },

  objective:
    "Break as many clay targets as possible across 125 shots (Olympic qualification).",
  matchStructure:
    "Squad rotates through 5 stations; 5 targets per station × 5 stations = 25 per round. 5 rounds = 125 targets in Olympic qualification. Top 6 to finals.",

  basicRules: [
    { title: "Station rotation", body: "5 firing points behind trap house; each shooter fires 5 targets before rotating." },
    { title: "Target release", body: "Target released on shooter's 'Pull' call; instantaneous (ATA) or 0-1s delay (Olympic)." },
    { title: "Gun-up start (ATA)", body: "Gun pre-mounted on shoulder when calling for target." },
    { title: "Gun-down start (Olympic)", body: "Some Olympic events require gun below waist until target visible." },
    { title: "2-shot per target (allowed)", body: "Both barrels can fire; hit counts if either shot breaks target." },
  ],
  advancedRules: [
    { title: "Handicap yards (ATA)", body: "Skilled shooters move back from 16 to 27 yards; harder target angles." },
    { title: "Olympic finals (25 targets)", body: "Top 6 shooters, sudden-death elimination format." },
    { title: "Doubles trap (variant)", body: "2 targets simultaneously; distinct Olympic event 2000-2020." },
    { title: "Cross-fire penalty", body: "Missing all shots + firing on wrong target = 0." },
  ],
  scoring: {
    summary: "1 point per broken target. Olympic max: 125 in qualification.",
    winCondition: "Highest score in qualification advances to finals; final winner takes gold.",
    breakdown: [
      { action: "Target broken", points: "1 pt" },
      { action: "Perfect round of 25", points: "'25 straight' recognition" },
      { action: "Olympic gold", points: "$50K+ USA Shooting stipend" },
    ],
  },
  penalties: [
    { title: "Missed target", body: "0 for that target." },
    { title: "No-bird", body: "Broken target on launch; re-shoot." },
    { title: "Time-out", body: "Shooter must fire before target lands (2-3 seconds after launch)." },
    { title: "Safety violation", body: "Immediate DQ." },
  ],

  positions: [
    { name: "Shooter", role: "Squad member at station.", count: 1 },
    { name: "Squad captain", role: "Manages timing + rotation." },
    { name: "Puller / Scorer", role: "Operates trap machines + records hits." },
    { name: "Referee", role: "Judges disputed hits + safety compliance." },
  ],
  officiating: {
    officials: ["ISSF Chief Referee (Olympic)", "ATA Referees (American trap)"],
    summary: "ISSF-licensed officials for Olympic + World Cup events; ATA sanctioned referees for American trap.",
  },

  governingBodies: [
    { name: "International Shooting Sport Federation (ISSF)", founded: 1907, headquarters: "Munich, Germany", website: "https://www.issf-sports.org" },
    { name: "Amateur Trapshooting Association (ATA)", founded: 1900, headquarters: "Sparta, Illinois, USA", website: "https://shootata.com" },
  ],
  majorCompetitions: [
    { name: "Olympic Games (Trap)", frequency: "every 4 years", founded: 1900, region: "rotating" },
    { name: "ISSF World Championships", frequency: "annual", founded: 1897, region: "rotating" },
    { name: "ISSF World Cup Series", frequency: "annual (6 events)", founded: 1986, region: "global" },
    { name: "ATA Grand American", frequency: "annual (Aug, Sparta IL)", founded: 1900, region: "USA — largest trap event globally" },
  ],
  countriesPlayed: ["IT", "US", "CZ", "SK", "AU", "GB", "KW", "FR", "DE", "ES"],
  famousAthletes: [
    "Massimo Fabbrizi (IT, Olympic silver 2012 + multiple worlds)",
    "Josip Glasnović (CRO, Olympic gold 2016)",
    "David Kostelecky (CZ, Olympic gold 2008)",
    "Kim Rhode (US, 6× Olympic medalist across skeet + double trap)",
    "Nathan Hales (GB, Olympic gold Paris 2024)",
  ],
  records: [
    { title: "Highest Olympic trap qualification score", holder: "Josip Glasnović", value: "125/125 (Rio 2016)", year: 2016 },
    { title: "Most Grand American entries", holder: "ATA Grand American", value: "6000+ competitors annually", year: 2023 },
    { title: "Longest ATA registered shoot", holder: "Grand American", value: "10-day event with 100K+ targets", year: 2022 },
  ],

  variants: ["olympic-trap", "american-trap", "double-trap", "down-the-line", "5-stand"],
  relatedSports: ["skeet-shooting", "sporting-clays", "olympic-skeet", "double-trap"],

  skills: [
    "quick target acquisition (targets flying away)",
    "gun swing + follow-through",
    "consistent gun mount",
    "handling recoil (125 rounds per event)",
    "mental focus + rhythm",
  ],
  strategies: [
    { title: "Consistent hold point", body: "Same gun position over trap house every shot; only body angle changes per station." },
    { title: "Swing through target", body: "Sweep gun through target + fire; don't stop swing." },
    { title: "Use both barrels", body: "Fire first barrel quickly; second barrel as backup if target still whole." },
    { title: "Anticipate angles", body: "Left-station targets angle right; right-station angle left — plan swing direction." },
  ],

  terminology: [
    { term: "Pull", meaning: "Command to release the target." },
    { term: "No-bird", meaning: "Broken or improperly released target; re-shoot." },
    { term: "Handicap", meaning: "Yards behind trap house — 16 to 27 yards per shooter skill." },
    { term: "Double trap", meaning: "2 targets launched simultaneously; separate Olympic event." },
    { term: "Grand American", meaning: "ATA's flagship 10-day event in Sparta, Illinois." },
    { term: "Straight", meaning: "Perfect round of 25 or 100 targets without miss." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Take an ATA-certified lesson", body: "1-hour intro at ATA club (~$50-$100)." },
        { title: "Shoot 500 rounds American trap", body: "Build gun-mount + swing habits from the 16-yard line." },
        { title: "Join a local trap league", body: "Weekly registered ATA shoots ($15-$40) + monthly practice." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Progress to handicap yards", body: "Class-based ATA system moves you back as skill grows." },
        { title: "Enter Grand American", body: "Annual ATA event in Illinois — 6000+ competitors + $500K purses." },
        { title: "Transition to Olympic trap", body: "ISSF rules differ (bunker, gun-down); 1-year adaptation typical." },
      ],
    },
  ],

  faq: [
    { question: "American trap vs. Olympic trap?", answer: "American: 1 trap house, random angles, gun-up start. Olympic: 15-machine bunker, harder unpredictable trajectories, gun-down (some events)." },
    { question: "Shells for trap?", answer: "12ga 2 3/4\", 28g Olympic or 32g ATA loads, #7 1/2 or #8 shot. $8-$15 per box of 25." },
    { question: "How is trap different from skeet?", answer: "Skeet = crossing targets from 2 houses; 8 stations in semicircle. Trap = away-flying targets from 1 house behind 5 stations." },
    { question: "Best trap gun?", answer: "Perazzi MX8, Beretta DT11, Krieghoff K-80 — competition guns $8K-$15K. Beretta 686 ~$2K for club level." },
  ],

  sources: [
    { label: "Wikipedia — Trap shooting", url: "https://en.wikipedia.org/wiki/Trap_shooting", publisher: "Wikipedia" },
    { label: "ISSF Trap", url: "https://www.issf-sports.org/theissf/shooting/shotgun/trap.ashx", publisher: "ISSF" },
    { label: "ATA official", url: "https://shootata.com", publisher: "ATA" },
  ],
  wikipediaTitle: "Trap shooting",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

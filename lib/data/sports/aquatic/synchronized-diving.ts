import type { Sport } from "@/lib/types";

export const synchronizedDiving: Sport = {
  id: "synchronized-diving",
  slug: "synchronized-diving",
  name: "Synchronized Diving",
  officialName: "Synchronized Diving (Olympic World Aquatics discipline)",
  aliases: ["Synchro Diving", "Sync Diving", "Pair Diving"],
  shortDescription:
    "Olympic diving event where two athletes execute identical dives simultaneously from 3m springboard or 10m platform — judged on individual execution PLUS synchronization between the pair.",
  longDescription:
    "Synchronized diving emerged as a demonstration event at the 1988 Olympic Trials and joined the Olympic program at Sydney 2000. Two divers of the same gender execute identical dives (Same Direction Sync) OR mirrored dives (Contra-Rotation) from either 3m springboard or 10m platform. Judges score individual execution (5 judges) + synchronization (4 judges) — Chinese pairs have dominated the podium since Beijing 2008. World Aquatics governs the discipline; Diving World Cup + World Championships plus Olympics form the competitive circuit.",

  category: "aquatic-sports",
  subCategory: "Olympic paired diving discipline",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "US",
  regionOfOrigin: "USA (demonstration 1988 US Olympic Trials, adopted internationally)",
  estimatedOrigin: "Demonstration 1988; official World Championship event 1994; Olympic debut Sydney 2000",

  players: { min: 2, max: 2, note: "Two same-gender athletes per team. 4 total events at Olympics: men + women × 3m + 10m." },
  field: {
    surfaceName: "Olympic diving pool",
    dimensions: "50 × 25 m pool, minimum 5 m depth. 3m springboard OR 10m platform.",
    description: "Standard World Aquatics-approved diving well with both springboard + platform." },
  equipment: [
    { name: "Springboard (3m)", description: "Duraflex flexible board 3 m above water; standard aluminum construction." },
    { name: "Platform (10m)", description: "Concrete platform 10 m above water; textured non-slip surface." },
    { name: "Chamois", description: "Small towel to dry between dives; carried by every diver." },
    { name: "Standard swimwear", description: "Jammer (men) / one-piece (women); athletic swim caps." },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "Each pair performs 5-6 dives (springboard) or 6 dives (platform). Full session: 60-90 min. Full event: half-day." },

  objective:
    "Execute identical (same-direction) or mirrored (opposite-direction) dives with maximum individual execution + synchronization between the two divers.",
  matchStructure:
    "Springboard: 5 dives (2 required + 3 optional). Platform: 6 dives (2 required + 4 optional). Cumulative scores across all dives determine placement.",

  basicRules: [
    { title: "Two divers, same gender", body: "Male + male OR female + female pairs. No mixed-gender." },
    { title: "Identical entry direction", body: "Same Direction Sync: both do the same rotation. Contra: one forward, one back." },
    { title: "Simultaneous execution", body: "Both divers leave the board within 0.5s of each other; enter water simultaneously." },
    { title: "Judged dive elements", body: "Approach → takeoff → flight → entry — all synchronization checked." },
    { title: "Required dives", body: "First 2 dives must meet specific difficulty + rotation requirements; remainder optional." },
  ],
  advancedRules: [
    { title: "Voluntary dives", body: "Higher-difficulty dives (DD 3.0+) chosen by pair; DD × execution + sync scores." },
    { title: "5+4 judging panel", body: "5 execution judges (drop high + low, keep 3) + 4 synchronization judges (drop high + low, keep 2)." },
    { title: "No physical touching mid-air", body: "Divers cannot contact each other; automatic 0 for that dive." },
    { title: "Same starting position", body: "Both divers start each dive from identical positions on board/platform." },
  ],
  scoring: {
    summary: "Per dive: (3 execution scores summed × 0.6) + (2 sync scores summed × 0.4) × DD (Degree of Difficulty). Sum across all dives.",
    winCondition: "Highest cumulative score wins.",
    breakdown: [
      { action: "Execution score", points: "3 middle judges × DD × 0.6" },
      { action: "Synchronization score", points: "2 middle judges × DD × 0.4" },
      { action: "Failure to sync (any element)", points: "-1 to -3 pts per judge" },
    ],
  },
  penalties: [
    { title: "Failed dive", body: "Any element failed = 0 for that dive." },
    { title: "Missing dive", body: "Missing dive = 0 for the entire competition." },
    { title: "Wrong dive submitted", body: "0 for that dive." },
  ],

  positions: [
    { name: "Left-lane diver", role: "One of the pair (position determined by pair choice).", count: 1 },
    { name: "Right-lane diver", role: "Second of the pair.", count: 1 },
    { name: "Coach", role: "Signals dive number + type from poolside." },
  ],
  officiating: {
    officials: ["Chief Judge", "5 Execution judges", "4 Synchronization judges", "Referee"],
    summary: "World Aquatics FINA-certified judges score each dive; drop high + low to prevent bias.",
  },

  governingBodies: [
    { name: "World Aquatics (formerly FINA)", founded: 1908, headquarters: "Lausanne, Switzerland", website: "https://worldaquatics.com" },
  ],
  majorCompetitions: [
    { name: "Olympic Games (4 sync events)", frequency: "every 4 years", founded: 2000, region: "rotating" },
    { name: "World Aquatics Championships", frequency: "biennial", founded: 1994, region: "rotating" },
    { name: "Diving World Cup", frequency: "annual", founded: 1979, region: "rotating" },
    { name: "European Championships", frequency: "annual", founded: 1926, region: "Europe" },
  ],
  countriesPlayed: ["CN", "RU", "GB", "AU", "US", "GE", "MX", "CA", "MY", "IT", "UA"],
  famousAthletes: [
    "Tom Daley + Matty Lee (GB, Olympic gold Tokyo 2020 sync 10m)",
    "Chen Ruolin + Wang Xin (CH, dominant female sync 10m team)",
    "Chen Aisen + Cao Yuan (CH, Olympic gold Rio 2016)",
    "Anthony Ervin + Bryan Wilson (US, sync 3m specialists)",
    "Yang Jinghui + Cao Yuan (CH, Paris 2024 gold 3m sync)",
  ],
  records: [
    { title: "Most Olympic Sync Diving golds (country)", holder: "China", value: "17 of 20 Olympic sync golds", year: 2024 },
    { title: "Highest individual sync score", holder: "Various Chinese pairs", value: "500+ points at Worlds", year: 2019 },
    { title: "First Olympic Sync Diving gold", holder: "Fernando Platas + Dmitry Sautin", value: "3m sync at Sydney 2000", year: 2000 },
  ],

  variants: ["individual-diving", "high-diving", "team-diving"],
  relatedSports: ["diving", "high-diving", "artistic-swimming", "trampolining"],

  skills: [
    "aerial spatial awareness",
    "twin-mirror muscle memory (matching partner)",
    "pike/tuck/straight body positions",
    "entry precision (vertical + splashless)",
    "team communication + trust",
  ],
  strategies: [
    { title: "Choose complementary partner", body: "Height + weight matching improves natural sync timing." },
    { title: "Standardize approach", body: "Same rhythm, same tempo — practice count + breath together for years." },
    { title: "Video every practice", body: "Sync errors visible only in slow-motion side-by-side review." },
    { title: "Balance DD + safety", body: "Higher DD dives easier to lose sync on — pair to their combined ability." },
  ],

  terminology: [
    { term: "DD (Degree of Difficulty)", meaning: "Rating from 1.4 to 4.8 for each dive; multiplier on execution + sync scores." },
    { term: "Sync (synchronization)", meaning: "Matching of takeoff timing, aerial position, and entry." },
    { term: "Same Direction Sync", meaning: "Both divers execute identical rotation direction." },
    { term: "Contra Sync", meaning: "One diver rotates forward, the other rotates back — 'mirror' sync." },
    { term: "Reverse dive", meaning: "Standing forward but rotating backward toward the board." },
    { term: "Pike/Tuck/Straight/Free", meaning: "Body positions during aerial phase; each has specific DD values." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Join a diving club", body: "USA Diving / Diving Australia clubs offer youth pathways; typically start age 6-10." },
        { title: "Master 5 basic dives", body: "Forward / back / inward / reverse / twisting; each in pike + tuck." },
        { title: "Find a sync partner", body: "Same age + gender + height for training compatibility." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Compete national-level", body: "USA Diving Winter Nationals or country equivalent." },
        { title: "Qualify for World Aquatics Junior Worlds", body: "Path to senior international competition." },
        { title: "Aim for Olympic quotas", body: "Nations earn quota spots via Worlds + World Cup rankings; qualifier tournaments." },
      ],
    },
  ],

  faq: [
    { question: "Why do Chinese pairs dominate?", answer: "China has invested heavily in centralized youth sports academies since the 1980s; specialized coaches + hours of daily practice create nearly perfect sync pairs." },
    { question: "How do judges score sync?", answer: "4 sync judges rate matching on takeoff, aerial position, entry, and overall harmony. Best + worst dropped; middle two averaged for the sync score." },
    { question: "What happens if one diver fails a dive?", answer: "Both scored individually; the failure drags down the pair's total. Sync score also affected if timing/position visibly differ." },
    { question: "Can any two divers pair?", answer: "Yes as long as same gender + national federation. Ideal pairs are height + weight matched for natural sync." },
  ],

  sources: [
    { label: "Wikipedia — Synchronised diving", url: "https://en.wikipedia.org/wiki/Synchronised_diving", publisher: "Wikipedia" },
    { label: "World Aquatics Diving", url: "https://worldaquatics.com/diving", publisher: "World Aquatics" },
    { label: "USA Diving official", url: "https://usadiving.org", publisher: "USA Diving" },
  ],
  wikipediaTitle: "Synchronised diving",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

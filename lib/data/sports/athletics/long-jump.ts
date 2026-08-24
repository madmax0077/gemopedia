import type { Sport } from "@/lib/types";

export const longJump: Sport = {
  id: "long-jump",
  slug: "long-jump",
  name: "Long Jump",
  officialName: "Long Jump (Horizontal Jump)",
  aliases: ["Broad jump (historical)"],
  shortDescription:
    "Track-and-field horizontal jump: sprint down a runway and jump for maximum distance from a fixed take-off board into a sand pit.",
  longDescription:
    "The long jump is a horizontal-jump athletics event in which competitors sprint down a runway and jump as far as possible from a take-off board into a sand pit. Distance is measured from the front edge of the take-off board to the nearest mark in the sand. The event has been contested at every modern Olympic Games since 1896 for men and 1948 for women. It combines pure speed on the runway with vertical impulse at the take-off board and a controlled landing. World records — Mike Powell's 8.95 m (1991) for men, and Galina Chistyakova's 7.52 m (1988) for women — have stood among the longest-lasting in athletics.",

  category: "athletics",
  subCategory: "horizontal jump",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "summer",
  era: "ancient",
  popularity: "global",

  countryOfOrigin: "GR",
  regionOfOrigin: "Ancient Greece — one of the five ancient pentathlon events",
  estimatedOrigin: "Contested at the ancient Olympics ~708 BCE; modern rules 1896",

  players: { min: 1, max: 12, note: "Individual event; a championship final typically has 8-12 jumpers." },
  field: {
    surfaceName: "runway + take-off board + pit",
    dimensions: "Runway ≥ 40 m long × 1.22 m wide; take-off board 1.22 m wide × 20 cm deep, level with the runway; sand pit ≥ 2.75 m wide × 9 m long.",
    description: "Straight synthetic-surface runway leading to a white take-off board, then a level sand pit. A plasticine indicator strip beyond the board catches over-runs.",
  },
  equipment: [
    { name: "Track spikes", description: "Sprint spikes with 4-6 spike pins in the forefoot for grip." },
    { name: "Take-off board", description: "1.22 m × 20 cm wooden board flush with the runway." },
    { name: "Plasticine indicator", description: "Soft strip beyond the take-off board that shows any foot fault." },
    { name: "Sand pit", description: "Level pit of moist, level-raked sand." },
    { name: "Marker cones", description: "Small markers for the check marks on the runway.", optional: true },
    { name: "Wind gauge", description: "Anemometer measuring tailwind; records above +2.0 m/s are wind-assisted and not eligible for records." },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "Each jumper gets 3 preliminary attempts; the best 8 advance to a further 3 attempts; longest legal jump wins.",
    note: "Championship competitions typically last 45-90 minutes.",
  },
  objective: "Jump the greatest legal distance from the take-off board into the pit.",
  matchStructure:
    "Each competitor takes their attempts in a rotating order. A judge decides a legal or foul jump (based on the plasticine indicator) and marks the closest sand imprint to the board. Distance is measured to the nearest 0.01 m. After 3 attempts, top 8 advance to 3 more attempts. Best legal jump is the result. Ties broken by second-best jump.",

  basicRules: [
    { title: "Take off from behind the board", body: "The jumper's foot must not cross the front edge of the take-off board; any mark in the plasticine is a foul." },
    { title: "Legal landing", body: "The jumper must land in the pit; sitting back into the sand at the point of landing determines the measurement mark." },
    { title: "Measurement", body: "From the front edge of the take-off board (at 90°) to the closest point where any part of the body touches the sand." },
    { title: "Time limit", body: "Each attempt must begin within 1 minute of the jumper being called (30 seconds in a jump-off)." },
    { title: "Wind assistance", body: "Tailwind exceeding +2.0 m/s makes a mark ineligible for records (but still counts for placing)." },
    { title: "Three preliminaries, three finals", body: "Everyone gets 3 attempts; top 8 advance to 3 more attempts for a total of 6." },
  ],
  advancedRules: [
    { title: "Alternative take-off zone (Wilkins rule)", body: "World Athletics 2024 trial (not yet standard): if the foot lands within a 40-cm take-off zone, the jump is measured from the actual take-off point rather than a foul." },
    { title: "Progression check", body: "In event of a tie, count of second-best legal jumps decides the winner; then third-best etc." },
    { title: "Jump-off", body: "If tied for first place, jumpers take one additional attempt to break the tie." },
    { title: "Order", body: "In finals, the last three attempts go in reverse order of first-three ranking — trailing jumpers jump last." },
  ],
  scoring: {
    summary: "Longest legal jump wins.",
    breakdown: [
      { action: "Legal jump", points: "distance in metres", note: "Recorded to 0.01 m." },
      { action: "Fouled jump", points: "no measurement", note: "Displayed as X on the scoreboard." },
      { action: "Wind-legal PB / area record", points: "recognised only if wind ≤ +2.0 m/s" },
    ],
    winCondition: "Jumper with the longest legal jump across all six attempts wins.",
  },

  officiating: {
    officials: ["Chief Field Judge", "Take-off judge", "Measurement crew", "Wind gauge operator"],
    summary: "Take-off judge signals foul or fair using a flag; measurement crew reads the tape or laser-measurement device to record distance.",
  },
  governingBodies: [
    { name: "World Athletics", founded: 1912, headquarters: "Monaco", website: "https://www.worldathletics.org" },
    { name: "USA Track & Field", acronym: "USATF", founded: 1979, headquarters: "Indianapolis, USA" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 1896, region: "worldwide", note: "Women added in London 1948." },
    { name: "World Athletics Championships", frequency: "biennial", founded: 1983, region: "worldwide" },
    { name: "World Athletics Indoor Championships", frequency: "biennial", founded: 1985, region: "worldwide" },
    { name: "Diamond League", frequency: "annual", founded: 2010, region: "worldwide (invitational circuit)" },
  ],
  countriesPlayed: ["US", "CU", "JM", "RU", "GR", "BR", "GB", "AU", "DE", "NG", "ET", "CN", "FR", "IT", "PL"],
  famousAthletes: [
    "Mike Powell",
    "Bob Beamon",
    "Carl Lewis",
    "Jesse Owens",
    "Ivan Pedroso",
    "Miltiadis Tentoglou",
    "Galina Chistyakova",
    "Jackie Joyner-Kersee",
    "Heike Drechsler",
    "Malaika Mihambo",
    "Tara Davis-Woodhall",
  ],
  records: [
    { title: "Men's world record", holder: "Mike Powell (USA)", value: "8.95 m (Tokyo)", year: 1991 },
    { title: "Women's world record", holder: "Galina Chistyakova (USSR)", value: "7.52 m (Leningrad)", year: 1988 },
    { title: "Longest Olympic jump", holder: "Bob Beamon (USA)", value: "8.90 m (Mexico City)", year: 1968 },
    { title: "Most Olympic long-jump golds", holder: "Carl Lewis (USA)", value: "4 consecutive (1984-1996)", year: 1996 },
  ],

  variants: ["triple-jump", "standing-long-jump", "para-long-jump-t11-t13"],
  relatedSports: ["triple-jump", "high-jump", "sprinting", "decathlon", "heptathlon"],

  skills: [
    "sprint acceleration",
    "explosive vertical impulse",
    "runway-to-take-off rhythm",
    "hitch-kick or hang technique in flight",
    "controlled landing",
    "precise steps to the board",
  ],
  strategies: [
    { title: "Runway progression", body: "Set check marks (usually 6 strides and take-off) so approach is repeatable at speed." },
    { title: "Penultimate step", body: "Longer second-to-last stride lowers the centre of mass to generate vertical lift at take-off." },
    { title: "In-flight technique", body: "Hitch-kick (running motion in the air), hang, or sail — used to maintain body position for optimal landing." },
    { title: "Landing extension", body: "Legs extend forward and body pikes at landing to push the mark past the heel-strike." },
  ],

  terminology: [
    { term: "Take-off board", meaning: "The 1.22 m × 20 cm wooden strip from which the jumper leaves the ground." },
    { term: "Plasticine indicator", meaning: "Soft strip beyond the board that catches any over-run as a foul mark." },
    { term: "Check marks", meaning: "Personal markers on the runway used to confirm stride pattern." },
    { term: "Hitch-kick", meaning: "Running-motion in the air to maintain rotational balance before landing." },
    { term: "Hang technique", meaning: "Alternative aerial form with arms overhead and legs extended behind before rotating forward." },
    { term: "Foul", meaning: "Any jump where the foot crosses the front edge of the board." },
    { term: "Wind-legal", meaning: "Jump measured with tailwind ≤ +2.0 m/s; required for record ratification." },
    { term: "Approach", meaning: "The measured sprint down the runway (usually 16-24 strides)." },
    { term: "Board", meaning: "Short for take-off board — 'hitting the board' means executing a clean take-off without fouling." },
    { term: "PB / SB", meaning: "Personal best / season's best." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Sprint mechanics", body: "Learn upright, drive-phase sprint form; jumpers are sprinters first.", anchor: "skills" },
      { title: "Measure your approach", body: "Start from a mark 16-18 strides out; sprint through the board and mark where your take-off foot lands." },
      { title: "Simple take-off", body: "Sail through the air with legs together; land with knees flexed." },
      { title: "Landing pit safety", body: "Sit-back landing; extend both legs and heels first." },
    ] },
    { level: "intermediate", steps: [
      { title: "Penultimate step", body: "Deliberately lengthen the second-to-last stride to load the take-off leg." },
      { title: "Refine the approach", body: "6 pre-approach + 12-14 acceleration + 4 rhythm strides." },
      { title: "Choose an in-flight technique", body: "Try hitch-kick vs hang; pick the one where your body stays balanced longest." },
      { title: "Wind and check marks", body: "Adjust check marks in a tailwind or headwind day-to-day." },
    ] },
    { level: "advanced", steps: [
      { title: "Speed at take-off", body: "Sprint work aimed at maximising velocity in the last two strides." },
      { title: "Landing extension", body: "Piking legs forward and reaching to add centimetres." },
      { title: "Competition management", body: "Bank a big jump early; adjust based on wind readings and other jumpers." },
    ] },
  ],
  faq: [
    { question: "Why has the men's world record lasted since 1991?", answer: "Mike Powell's 8.95 m required a rare combination of speed (sub-10 100 m runway speed) and vertical impulse in perfect conditions; the sport has produced many 8.7-8.9 m jumps but none over 8.95 m in ratified conditions." },
    { question: "What does 'wind-assisted' mean?", answer: "A tailwind exceeding +2.0 m/s (measured at the take-off during the jump) makes the mark ineligible for records, though it still counts for placing." },
    { question: "How is the jump measured?", answer: "From the front edge of the take-off board (at 90°) to the closest mark left in the sand by any part of the jumper's body." },
    { question: "Is a run-up mandatory?", answer: "Yes for the standard long jump; there was a 'standing long jump' event at the early Olympics but it's no longer contested." },
    { question: "Do jumpers foul often?", answer: "Yes — even elite athletes foul 1-2 of every 6 attempts because the take-off board is only 20 cm deep and full-speed sprint accuracy is difficult." },
  ],

  wikipediaTitle: "Long jump",
  sources: [
    { label: "Wikipedia — Long jump", url: "https://en.wikipedia.org/wiki/Long_jump", publisher: "Wikipedia" },
    { label: "World Athletics — Long Jump Rules", url: "https://www.worldathletics.org/disciplines/jumps/long-jump", publisher: "World Athletics" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

import type { Sport } from "@/lib/types";

export const leadClimbing: Sport = {
  id: "lead-climbing",
  slug: "lead-climbing",
  name: "Lead Climbing",
  officialName: "Lead Climbing (IFSC discipline)",
  aliases: ["Sport Climbing Lead", "Roped Sport Climbing"],
  shortDescription:
    "Olympic sport climbing discipline where athletes climb 15-metre routes clipping the rope into pre-placed quickdraws; scored by height reached before falling.",
  longDescription:
    "Lead climbing evolved as the on-sight competition format of sport climbing in the 1980s. Ropes are clipped into pre-placed bolts as the climber ascends, providing safety while allowing free progression up increasingly difficult routes graded French-scale 5a to 9c. Adam Ondra's Silence (9c, 2017) remains the world's hardest confirmed climb. Lead was one of three disciplines (with bouldering + speed) at Tokyo 2020 and Paris 2024 Olympics. IFSC World Cup runs 8-10 events yearly.",

  category: "adventure-extreme-sports",
  subCategory: "Olympic roped sport climbing discipline",
  sportType: "individual",
  indoorOutdoor: "both",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "IT",
  regionOfOrigin: "Italian Dolomites / French Verdon Gorge (roped climbing origins)",
  estimatedOrigin: "Sport climbing emerged 1970s; first World Cup lead competition 1989; Olympic debut Tokyo 2020",

  players: { min: 1, max: 1, note: "Individual competition. Team scores at Youth Olympics + Nations Cup aggregated." },
  field: {
    surfaceName: "Artificial climbing wall or natural cliff",
    dimensions: "IFSC comp wall: 15 m high Ã— 12 m wide with 3-5 m overhang",
    description: "Purpose-built wall with resin holds bolted in random patterns; route-setters design one route per athlete category." },
  equipment: [
    { name: "Climbing shoes", description: "Aggressive downturned shoes (La Sportiva Solution, Scarpa Instinct)." },
    { name: "Harness + rope", description: "UIAA-certified harness + 40-70 m dynamic single rope (8.9-9.8 mm)." },
    { name: "Chalk bag + chalk", description: "MgCO3 chalk for grip." },
    { name: "Quickdraws (comp: pre-placed)", description: "12-15 quickdraws pre-placed on wall by route-setters." },
    { name: "Belayer + belay device", description: "Grigri, ATC, or MegaJul for automatic braking." },
  ],
  duration: {
    approximateMinutes: 8,
    structure: "Each attempt: 6-minute time limit. Round: 5-8 athletes climb consecutively. Full competition: 4-6 hours across quals/semi/final." },

  objective:
    "Climb as high as possible on a route within 6 minutes, clipping the rope into each quickdraw. Highest hold reached (with clip) wins.",
  matchStructure:
    "Qualification: 2 routes, best score counts. Semi-final: 1 route flashed (on-sight, unrehearsed). Final: 1 route on-sight, highest score wins.",

  basicRules: [
    { title: "On-sight rule", body: "Athletes must not observe others climb the route; isolation zone before each round." },
    { title: "6-minute clock", body: "Timer starts when climber leaves ground; ends at fall or top." },
    { title: "Clip the rope", body: "Every quickdraw must be clipped in order; skipping = 'stopped clip' rule and score capped." },
    { title: "Highest hold counts", body: "Score = highest hold controlled (both hands, statically OR successful clip)." },
    { title: "Fall = attempt ends", body: "Once you fall, that's your score for the route." },
  ],
  advancedRules: [
    { title: "'+' score", body: "Progress from a hold (attempting next move without control) gets '+' bonus." },
    { title: "Countback", body: "Ties resolved by prior round scores; then attempt time." },
    { title: "Illegal use of tri-cams", body: "IFSC rules ban artificial-aid clips; strict inspections." },
    { title: "Route-setting standards", body: "Routes designed to differentiate top 8; graded 8b-9a+ for men, 8a-8c+ for women." },
  ],
  scoring: {
    summary: "Points equal to the highest hold reached; '+' bonus for movement toward next hold.",
    winCondition: "Highest hold reached wins the round.",
    breakdown: [
      { action: "Top the route", points: "Full points (route length in holds)" },
      { action: "Highest hold controlled", points: "Hold number" },
      { action: "'+' bonus (attempted next move)", points: "+0.5 hold" },
    ],
  },
  penalties: [
    { title: "Skipped clip", body: "Score capped at hold before skipped quickdraw." },
    { title: "Y-hang / two-hand fall", body: "Fall attempt terminated." },
    { title: "Time overrun", body: "Attempt ends at 6:00; score = highest hold reached." },
  ],

  positions: [
    { name: "Climber", role: "The competing athlete.", count: 1 },
    { name: "Belayer", role: "Manages rope + safety brake at ground level.", count: 1 },
    { name: "Route setter", role: "Designs the routes (typically ex-pro climbers)." },
    { name: "Isolation zone monitor", role: "Ensures no route info leaks to waiting climbers." },
  ],
  officiating: {
    officials: ["IFSC Chief Judge", "Route Judges", "Isolation Zone Judge", "Belayer Judge"],
    summary: "IFSC-certified officials oversee comp rules; timing computer + video review for disputed scores.",
  },

  governingBodies: [
    { name: "International Federation of Sport Climbing (IFSC)", founded: 2007, headquarters: "Turin, Italy", website: "https://www.ifsc-climbing.org" },
    { name: "USA Climbing (US federation)", founded: 2016, headquarters: "Salt Lake City, Utah, USA", website: "https://usaclimbing.org" },
  ],
  majorCompetitions: [
    { name: "Olympic Games (Sport Climbing)", frequency: "every 4 years", founded: 2020, region: "rotating" },
    { name: "IFSC Climbing World Championships", frequency: "biennial", founded: 1991, region: "rotating" },
    { name: "IFSC Climbing World Cup Series", frequency: "annual (8-10 events)", founded: 1989, region: "global" },
  ],
  countriesPlayed: ["JP", "KR", "CH", "AT", "SI", "IT", "FR", "US", "GB", "ES", "DE", "CZ"],
  famousAthletes: [
    "Adam Ondra (CZ, first ascent of 9c 'Silence')",
    "Janja Garnbret (SI, Olympic Champion Tokyo 2020, most decorated female climber)",
    "Jakob Schubert (AT, 3Ã— World Champion Lead)",
    "Chaehyun Seo (KR, IFSC Lead World Cup dominant)",
    "Sorato Anraku (JP, 2024 Olympic champion combined)",
  ],
  records: [
    { title: "Hardest confirmed climb (9c)", holder: "Adam Ondra", value: "Silence (5.15d / 9c) â€” Flatanger, Norway", year: 2017 },
    { title: "IFSC World Cup Lead titles", holder: "Adam Ondra + Jakob Schubert", value: "3 titles each", year: 2020 },
    { title: "First female ascent 9a+", holder: "Angela Eiter", value: "La Planta de Shiva (9a+/9b) â€” Villanueva del Rosario", year: 2017 },
  ],

  variants: ["outdoor-sport-climbing", "on-sight-climbing", "redpoint-climbing", "top-rope"],
  relatedSports: ["bouldering", "speed-climbing", "traditional-climbing", "mountaineering"],

  skills: [
    "endurance (forearm + full-body)",
    "route reading (memorizing beta from ground)",
    "flexibility + hip mobility",
    "grip strength (crimp + open-hand)",
    "mental composure under pump + height",
  ],
  strategies: [
    { title: "Read the route", body: "Use the ~6 minutes of observation to plan every clip + move." },
    { title: "Rest at clips", body: "Recover forearm pump by shaking out on good holds before crux sequences." },
    { title: "Clip fast + safe", body: "Practice one-hand clips both left + right; slow clips cost seconds + energy." },
    { title: "Onsight training", body: "Do 3-5 unfamiliar routes per session to build route-reading skill." },
  ],

  terminology: [
    { term: "Onsight", meaning: "Climbing a route first attempt with no prior beta." },
    { term: "Beta", meaning: "Information about how to climb a route (sequences, rest positions)." },
    { term: "Pump", meaning: "Forearm fatigue from sustained climbing â€” the primary limiter in lead." },
    { term: "Crux", meaning: "Hardest single move or sequence on a route." },
    { term: "Redpoint", meaning: "Ascending a route cleanly after rehearsing it." },
    { term: "Send", meaning: "Successfully complete a climb without falling." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Take an intro course at climbing gym", body: "Learn top-rope belaying + basic climbing (2-3 lessons)." },
        { title: "Get lead-certified", body: "Additional 2-3 lessons on lead belay + climbing technique." },
        { title: "Climb 5-10 routes weekly", body: "Progress through gym grade circuit (5a â†’ 5c â†’ 6a)." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Enter USA Climbing Local Series", body: "Regional youth + adult competitions organize national ranking." },
        { title: "Project onsight 7a+ / redpoint 8a", body: "Standard threshold for competitive amateur climber." },
        { title: "Compete at IFSC Continental Championships", body: "Path to World Cup + Olympic qualification." },
      ],
    },
  ],

  faq: [
    { question: "Is lead climbing dangerous?", answer: "Modern sport climbing has an excellent safety record. Fatal accidents are rare in gyms; outdoor climbing has more risks (loose rock, weather)." },
    { question: "What's the difference between lead and bouldering?", answer: "Lead: 15m routes with rope + belayer. Bouldering: 4m walls with pads, no rope, focused on power moves." },
    { question: "How fit do I need to be?", answer: "Fitness helps â€” but technique matters more. Most amateurs improve for years by focusing on movement + not power alone." },
    { question: "What's the highest grade?", answer: "5.15d / 9c is the current top confirmed grade â€” Adam Ondra's Silence (2017). Multiple 5.15c / 9c- climbs exist." },
  ],

  sources: [
    { label: "Wikipedia â€” Sport climbing", url: "https://en.wikipedia.org/wiki/Sport_climbing", publisher: "Wikipedia" },
    { label: "IFSC official", url: "https://www.ifsc-climbing.org", publisher: "IFSC" },
    { label: "8a.nu grading database", url: "https://www.8a.nu", publisher: "8a.nu" },
  ],
  wikipediaTitle: "Sport climbing",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const mountaineering: Sport = {
  id: "mountaineering",
  slug: "mountaineering",
  name: "Mountaineering",
  officialName: "Mountaineering (Alpine + High-Altitude Climbing)",
  aliases: ["Alpinism", "Alpine Climbing", "Expedition Climbing"],
  shortDescription:
    "The mother of all vertical sports â€” ascending mountains via technical alpine climbing, from Alps day-trips to 8000-metre Himalayan expeditions requiring weeks of acclimatization.",
  longDescription:
    "Mountaineering began with the 1786 first ascent of Mont Blanc by Balmat and Paccard. Its 240-year history has taken humans up all 14 8000-metre peaks (final: Shishapangma, 1964), K2's fatal Bottleneck, and El Cap's Dawn Wall (2015). Modern mountaineering divides into Alpine Style (fast, light, self-sufficient) and Expedition Style (fixed lines, Sherpa support, oxygen). The UIAA (Union Internationale des Associations d'Alpinisme) governs skill certifications; the Piolet d'Or annually awards the year's most notable ascents.",

  category: "adventure-extreme-sports",
  subCategory: "alpine + high-altitude mountain climbing",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "summer",
  era: "early-modern",
  popularity: "major",

  countryOfOrigin: "CH",
  regionOfOrigin: "Chamonix, France + Zermatt, Switzerland (European Alps birthplace of alpinism)",
  estimatedOrigin: "First Mont Blanc ascent August 8, 1786; UIAA founded 1932; all 14 eight-thousanders climbed by 1964",

  players: { min: 1, max: 20, note: "Solo (rare, extreme risk); typical rope teams of 2-4; large expeditions 8-20 members." },
  field: {
    surfaceName: "Alpine + high-altitude mountains",
    dimensions: "1500-8849 m elevation (Everest); routes 500-4000 m vertical",
    description: "Rock, ice, snow, and mixed terrain from valley approaches to summit ridges." },
  equipment: [
    { name: "Boots", description: "Insulated double boots (La Sportiva G2 SM, Millet Everest Summit) for 8000m; leather single boots for Alpine." },
    { name: "Crampons + ice axes", description: "Steel technical crampons + 1-2 technical ice axes." },
    { name: "Harness + rope + rack", description: "Alpine harness, 60m dynamic single rope, cams/nuts/pitons for rock, ice screws." },
    { name: "Down suit + tents", description: "800-fill down suits + expedition tents (Mountain Hardwear, Hilleberg) for high altitude." },
    { name: "Supplemental oxygen (high-altitude)", description: "3-8 bottles per climber for 8000m; regulator + mask systems." },
    { name: "Satellite phone / GPS beacon", description: "Emergency communication (Garmin inReach, satellite Iridium)." },
  ],
  duration: {
    approximateMinutes: 43200,
    structure: "Day climbs: 8-16 hours. Alpine multi-day: 2-7 days. Expedition to 8000m: 6-10 weeks (2 months for Everest)." },

  objective:
    "Reach the summit safely and return. Non-competition sport; personal + community recognition through first ascents + notable routes.",
  matchStructure:
    "Approach â†’ base camp â†’ rotation climbs for acclimatization â†’ weather window â†’ summit push â†’ descent â†’ base camp â†’ home. Weather + route conditions dictate schedule.",

  basicRules: [
    { title: "Rope up on glaciers + technical terrain", body: "Prussik cords + rope teams to prevent crevasse falls." },
    { title: "Weather + turn-around rule", body: "Preset time (e.g. 2 PM) after which team must turn around regardless of summit distance." },
    { title: "Buddy system", body: "Never solo on high-consequence terrain; partners cross-check anchors + gear." },
    { title: "Wilderness ethic", body: "Leave No Trace: pack out all trash, human waste (in high-altitude poop bags)." },
    { title: "Local permits + LO", body: "Nepal + China require expedition permits ($11K per Everest climber); trekking to base camp itself often needs conservation fees." },
  ],
  advancedRules: [
    { title: "Alpine style", body: "No fixed ropes, no camps above base â€” carry everything, climb light, no external support." },
    { title: "Expedition style", body: "Fixed lines set by Sherpas, multi-camp rotation, oxygen use â€” commercial Everest standard." },
    { title: "Fair means (Piolet d'Or)", body: "First ascents must be without fixed lines, drilled protection, or oxygen for maximum recognition." },
    { title: "Rescue insurance", body: "Global Rescue / IMG insurance recommended for altitude evacuations." },
  ],
  scoring: {
    summary: "Non-competitive; recognition via Piolet d'Or awards for boldest ascents; UIAA-graded routes.",
    winCondition: "Summit reached + descended safely â€” 'success' is objective safety not points.",
    breakdown: [
      { action: "Successful summit", points: "N/A â€” recognition-based" },
      { action: "First ascent", points: "Historical significance" },
      { action: "Piolet d'Or", points: "Annual best-ascent award" },
    ],
  },

  positions: [
    { name: "Lead climber", role: "Sets protection + fixed lines; most experienced.", count: 1 },
    { name: "Rope-mate", role: "Follows + climbs seconded; equal skill on hard routes." },
    { name: "Sherpa (expedition style)", role: "Load-carrier + high-altitude guide; typically Nepali Sherpa ethnic group." },
    { name: "Expedition leader", role: "Coordinates logistics + weather calls." },
    { name: "Base-camp manager", role: "Handles supplies, communications, and evacuation coordination." },
  ],
  officiating: {
    officials: ["Nepal Ministry of Tourism (liaison officer)", "UIAA-certified guides"],
    summary: "8000m peaks in Nepal + China require government-assigned liaison officers to verify summit + safety compliance.",
  },

  governingBodies: [
    { name: "Union Internationale des Associations d'Alpinisme (UIAA)", founded: 1932, headquarters: "Bern, Switzerland", website: "https://theuiaa.org" },
    { name: "Nepal Mountaineering Association (NMA)", founded: 1973, headquarters: "Kathmandu, Nepal", website: "https://nepalmountaineering.org" },
    { name: "American Mountain Guides Association (AMGA)", founded: 1979, headquarters: "Boulder, USA", website: "https://amga.com" },
  ],
  majorCompetitions: [
    { name: "Piolet d'Or", frequency: "annual", founded: 1991, region: "France (Grenoble)" },
    { name: "Explorers Web coverage", frequency: "year-round", founded: 2010, region: "online news" },
    { name: "Everest summit season", frequency: "annual (May)", founded: 1953, region: "Nepal + Tibet" },
  ],
  countriesPlayed: ["NP", "CH", "FR", "IT", "AT", "US", "GB", "JP", "KR", "PL", "RU"],
  famousAthletes: [
    "Reinhold Messner (IT, first to climb all 14 8000m peaks solo + no O2)",
    "Nirmal Purja 'Nimsdai' (NP, 14 peaks in 6 months 2019)",
    "Kilian Jornet (ES, Everest speed records)",
    "Ueli Steck (CH, alpine speed record legend)",
    "Krzysztof Wielicki (PL, third to complete 14 x 8000m)",
  ],
  records: [
    { title: "First Everest summit", holder: "Hillary + Norgay", value: "May 29, 1953", year: 1953 },
    { title: "First to climb all 14 8000m peaks", holder: "Reinhold Messner", value: "1970-1986; no O2", year: 1986 },
    { title: "14 peaks in shortest time", holder: "Nirmal Purja", value: "6 months 6 days (2019)", year: 2019 },
    { title: "Youngest Everest summit", holder: "Jordan Romero", value: "13 years 10 months (2010)", year: 2010 },
  ],

  variants: ["alpine-climbing", "ski-mountaineering", "big-wall-climbing", "ice-climbing", "expedition-climbing"],
  relatedSports: ["ice-climbing", "ski-mountaineering", "hiking", "rock-climbing"],

  skills: [
    "cardiovascular endurance at altitude",
    "acclimatization + hydration management",
    "rope + anchor systems",
    "crevasse rescue + self-arrest",
    "weather + avalanche assessment",
    "decision-making under fatigue",
  ],
  strategies: [
    { title: "Climb high, sleep low", body: "Acclimatization principle: ascend 500m/day, descend to sleep, rotate up-down over weeks." },
    { title: "Weather windows", body: "Wait days-weeks for jetstream to lift; premature summits kill in high winds." },
    { title: "Turn-around discipline", body: "Set summit turnaround time (e.g. 1 PM Everest) and honor it, even 50m from top." },
    { title: "Alpine style efficiency", body: "Fast + light minimizes exposure time on high-consequence terrain." },
  ],

  terminology: [
    { term: "Bergschrund", meaning: "Deep crevasse where glacier meets headwall." },
    { term: "Serac", meaning: "Unstable ice tower or block; major hazard." },
    { term: "Cornice", meaning: "Wind-blown snow ridge overhang; extremely fragile." },
    { term: "Rappel / abseil", meaning: "Controlled descent on rope using friction device." },
    { term: "Fixed line", meaning: "Rope permanently anchored for expedition climbers." },
    { term: "Death zone", meaning: "Above 8000m; oxygen so low body deteriorates faster than it recovers." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Take a mountaineering course", body: "AMGA / IFMGA-certified guides teach glacier travel + rope work (5-7 day intensive)." },
        { title: "Climb a Cascades classic", body: "Mt. Baker or Mt. Adams (10-14k ft) â€” entry-level glaciated peaks." },
        { title: "Progress to Rainier + Mt. Hood", body: "Standard test-piece for aspiring mountaineers in the Lower 48." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Alpine climb in Chamonix", body: "Multi-pitch alpine rock/ice on classic French routes (Mont Blanc, Aiguille du Midi)." },
        { title: "Climb a 6000m peak", body: "Aconcagua (Argentina, 6961m) or Mera Peak (Nepal, 6476m) as high-altitude intro." },
        { title: "Attempt an 8000m expedition", body: "Cho Oyu, Manaslu, or Everest â€” $30K-$100K commercial expedition." },
      ],
    },
  ],

  faq: [
    { question: "Is mountaineering dangerous?", answer: "Yes â€” one of the highest-mortality sports. Everest ~3% fatality rate; K2 ~25%. Alpine climbs also carry weather + rockfall risks." },
    { question: "How much does climbing Everest cost?", answer: "$45K-$100K+ for a commercial guided expedition. Includes permit ($11K), Sherpa support, oxygen, tents, food for 2 months." },
    { question: "Do I need oxygen for Everest?", answer: "No â€” Messner did it without in 1980. But most modern climbers use O2 above 7500m; ~200 have summited without." },
    { question: "How long does an Everest expedition take?", answer: "6-10 weeks including acclimatization + weather windows. Base camp arrival mid-April, summit push mid-May typically." },
  ],

  sources: [
    { label: "Wikipedia â€” Mountaineering", url: "https://en.wikipedia.org/wiki/Mountaineering", publisher: "Wikipedia" },
    { label: "UIAA", url: "https://theuiaa.org", publisher: "UIAA" },
    { label: "Alpinist Magazine", url: "https://www.alpinist.com", publisher: "Alpinist" },
  ],
  wikipediaTitle: "Mountaineering",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const trailRunning: Sport = {
  id: "trail-running",
  slug: "trail-running",
  name: "Trail Running",
  officialName: "Trail Running / Mountain Running (ITRA + WMRA)",
  aliases: ["Mountain running", "Skyrunning", "Ultra trail"],
  shortDescription:
    "Off-road running on unpaved trails through forests, mountains, and wilderness — ranging from short 10K trail runs to 100-mile+ ultramarathons at elevation.",
  longDescription:
    "Trail running exploded in popularity from 2000-2020 with the rise of events like UTMB (Ultra-Trail du Mont-Blanc, 171 km + 10,000m elevation, since 2003) and Western States 100 (1974). ITRA (International Trail Running Association, 2013) governs rankings + performance index for 300K+ athletes. Trail running spans 5K park runs to 330-km Tor des Géants. Kilian Jornet (ESP) is trail running's most famous athlete, holding FKTs on Everest, Denali, Kilimanjaro, and winning UTMB 3+ times.",

  category: "adventure-extreme-sports",
  subCategory: "off-road running discipline (5K to 300+ km)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "FR",
  regionOfOrigin: "Chamonix, France (UTMB 2003); mountain running traditions in Alps + US Rockies",
  estimatedOrigin: "Modern trail running organized from 1970s (Western States 1974); UTMB from 2003; ITRA founded 2013",

  players: { min: 1, max: 10000, note: "Elite fields of 100-200 + mass fields of 500-3000 per race." },
  field: {
    surfaceName: "Trails, mountains, forest",
    dimensions: "Race lengths: 5K to 330 km",
    description: "Marked trails through mountains, forests, deserts, jungles." },
  equipment: [
    { name: "Trail shoes", description: "Lugged outsole (4-8mm) + rock plate; brands: Salomon, Hoka, La Sportiva." },
    { name: "Hydration vest", description: "5-15L pack with soft flasks + gear pockets." },
    { name: "Mandatory kit (ultras)", description: "Waterproof jacket, headlamp, whistle, emergency blanket, phone, food." },
    { name: "Trekking poles", description: "Optional for steep climbs; used by 60%+ of UTMB finishers." },
    { name: "Nutrition", description: "300-400 cal/hour: gels, bars, real food, electrolytes." },
  ],
  duration: {
    approximateMinutes: 480,
    structure: "Short trail: 30-90 min. Ultra: 5-50+ hours. Cutoff times enforced at each aid station." },

  objective:
    "Finish the marked trail course in the shortest time (or within cutoff for ultras).",
  matchStructure:
    "Mass or wave start. Point-to-point or loop. Aid stations every 10-20 km with food + drink + drop bags.",

  basicRules: [
    { title: "Follow marked route", body: "Trail marked with flags/tape/reflectors; missing markers = DQ." },
    { title: "Mandatory gear check", body: "Ultras require waterproof jacket + headlamp + emergency kit." },
    { title: "Cutoff times", body: "Must arrive at each aid station before cutoff or you're pulled." },
    { title: "No outside aid", body: "Support only at official aid stations for elites." },
    { title: "Chip timing", body: "Timing chip records aid station splits." },
  ],
  advancedRules: [
    { title: "ITRA points", body: "Race certified with 1-6 ITRA points based on distance + elevation; needed for UTMB entry." },
    { title: "Pacers", body: "US 100-milers (Western States, Leadville) allow pacers from mile 50; European ultras don't." },
    { title: "Drop bags", body: "Runners can pre-place drop bags at major aid stations." },
    { title: "Anti-doping", body: "UTMB + ITRA test top finishers per WADA rules." },
  ],
  scoring: {
    summary: "Fastest time to complete course = winner; DNFs common in ultras.",
    winCondition: "First finisher (male + female). Age-group + team categories also awarded.",
    breakdown: [
      { action: "UTMB winner", points: "$10K + qualification for future" },
      { action: "Golden Ticket race winner", points: "Automatic Western States entry" },
      { action: "Age-group podium", points: "Recognition + trophy" },
    ],
  },
  penalties: [
    { title: "Missing marker / short course", body: "DQ." },
    { title: "Missing mandatory gear at check", body: "10-min to hour time penalty or DQ." },
    { title: "Littering on trail", body: "DQ (leave-no-trace mandatory)." },
    { title: "Doping violation", body: "Multi-year ban + result annulled." },
  ],

  positions: [
    { name: "Runner", role: "Individual competitor.", count: 1 },
    { name: "Pacer (US ultras)", role: "Accompany runner after mile 50; carry supplies + motivate." },
  ],
  officiating: {
    officials: ["Race director", "Aid station captains", "Course marshals", "Doping control team (top races)"],
    summary: "ITRA + WMRA + ITU rules for major certifications; each race can add own rules.",
  },

  governingBodies: [
    { name: "International Trail Running Association (ITRA)", founded: 2013, headquarters: "Chamonix, France", website: "https://itra.run" },
    { name: "World Mountain Running Association (WMRA)", founded: 1984, headquarters: "worldwide", website: "https://wmra.info" },
    { name: "UTMB Group (major series)", founded: 2003, headquarters: "France", website: "https://utmb.world" },
  ],
  majorCompetitions: [
    { name: "UTMB (Ultra-Trail du Mont-Blanc)", frequency: "annual (August)", founded: 2003, region: "Chamonix, France — 171km, 10,000m elev" },
    { name: "Western States 100", frequency: "annual (June)", founded: 1974, region: "California, USA — 100.2 miles" },
    { name: "Hardrock 100", frequency: "annual (July, alternating direction)", founded: 1992, region: "Colorado — 100.5 miles, 33,000ft elev" },
    { name: "Golden Trail Series", frequency: "annual (May-Oct)", founded: 2018, region: "worldwide 6-race circuit" },
    { name: "World Mountain Running Championships", frequency: "annual", founded: 1985, region: "rotating" },
  ],
  countriesPlayed: ["FR", "IT", "ES", "US", "CH", "GB", "JP", "KE", "NP", "NO"],
  famousAthletes: [
    "Kilian Jornet (ESP, GOAT — UTMB, Western States, FKTs)",
    "Courtney Dauwalter (US, UTMB, Hardrock, Western States overall wins)",
    "François D'Haene (FRA, 4x UTMB winner)",
    "Jim Walmsley (US, first American UTMB winner 2023)",
    "Ruth Croft (NZ, Western States 2022 winner)",
  ],
  records: [
    { title: "UTMB (male CR)", holder: "Kilian Jornet (ESP)", value: "19h 49m 30s (2022)", year: 2022 },
    { title: "UTMB (female CR)", holder: "Courtney Dauwalter (US)", value: "22h 30m 54s (2023)", year: 2023 },
    { title: "Western States 100 CR (male)", holder: "Jim Walmsley (US)", value: "14h 09m 28s (2019)", year: 2019 },
    { title: "Everest FKT", holder: "Kilian Jornet (ESP)", value: "26h round-trip from Rongbuk base (2017)", year: 2017 },
  ],

  variants: ["mountain-running", "sky-running", "ultra-trail", "fell-running", "trail-marathon"],
  relatedSports: ["marathon", "long-distance-running", "mountaineering", "orienteering"],

  skills: [
    "aerobic endurance (multi-hour)",
    "technical descending",
    "climbing efficiency (poles + power hike)",
    "nutrition + hydration self-management",
    "mental toughness (sleep deprivation, night running)",
  ],
  strategies: [
    { title: "Power-hike the climbs", body: "Elite ultra runners walk climbs >12% grade — more efficient than running." },
    { title: "Run the flats + gentle downs", body: "Bank easy time; save legs for late-race climbs." },
    { title: "Eat 300-400 cal/hour", body: "Under-fueling is #1 cause of ultra DNF." },
    { title: "Manage sleep (100-milers)", body: "Some elites take 10-30 min nap at mile 60-70; others push through." },
    { title: "Descend on rocky trails", body: "Quick feet + low center of gravity; fear kills speed." },
  ],

  terminology: [
    { term: "Ultramarathon", meaning: "Any race longer than a marathon (42.195 km)." },
    { term: "FKT", meaning: "Fastest Known Time on a defined route (Everest, John Muir Trail, etc)." },
    { term: "DNF", meaning: "Did Not Finish — common in ultras (30-70% DNF rate)." },
    { term: "Vert / D+", meaning: "Total elevation gain (positive) on course." },
    { term: "ITRA points", meaning: "Race classification 1-6 based on distance + elevation." },
    { term: "Bonk / Hit the wall", meaning: "Glycogen depletion causing collapse in performance." },
    { term: "Buckle", meaning: "Award at 100-mile finishes; sub-24 hr gets 'gold buckle' at some races." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Run a 10K trail race", body: "Start with local park + forest 5-10K trail races." },
        { title: "Learn trail etiquette", body: "Yield to uphill runners; call out passes; leave no trace." },
        { title: "Build to a trail marathon", body: "12+ months progression; add hill training + strength." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Finish a 50-miler", body: "Requires 50+ miles/week + weekly long run of 20-30 miles." },
        { title: "Earn a UTMB Running Stone", body: "Complete UTMB Group races to accrue Running Stones for UTMB lottery." },
        { title: "Complete UTMB or Western States", body: "Elite achievement — sub-24 for Western States 'silver buckle'." },
      ],
    },
  ],

  faq: [
    { question: "How is trail running different from road running?", answer: "Softer surface, elevation gain, technical terrain, self-supported nutrition, and much longer distances possible (up to 330+ km)." },
    { question: "Do I need trail shoes?", answer: "Yes for anything technical. Road shoes work for smooth crushed-gravel paths; trail shoes needed for roots, rocks, mud." },
    { question: "How to start ultra running?", answer: "Complete a road marathon first, then move to trail 50K, then 50-miler, then 100K, then 100-miler over 2-3 years." },
    { question: "What is UTMB?", answer: "Ultra-Trail du Mont-Blanc — the world's most prestigious trail race, 171 km around Mont Blanc massif with 10,000m elevation, held each August in Chamonix." },
    { question: "Is trail running dangerous?", answer: "Higher injury risk from falls + altitude + weather than road running. Mandatory gear + course marshals mitigate most risks." },
  ],

  sources: [
    { label: "Wikipedia — Trail running", url: "https://en.wikipedia.org/wiki/Trail_running", publisher: "Wikipedia" },
    { label: "ITRA official", url: "https://itra.run", publisher: "ITRA" },
    { label: "UTMB official", url: "https://utmb.world", publisher: "UTMB Group" },
  ],
  wikipediaTitle: "Trail running",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

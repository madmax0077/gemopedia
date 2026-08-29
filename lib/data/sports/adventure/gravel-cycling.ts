import type { Sport } from "@/lib/types";

export const gravelCycling: Sport = {
  id: "gravel-cycling",
  slug: "gravel-cycling",
  name: "Gravel Cycling",
  officialName: "Gravel Cycling (UCI Gravel World Series + independent races)",
  aliases: ["Gravel", "Gravel Riding", "Adventure Cycling"],
  shortDescription:
    "Fast-growing endurance cycling discipline on unpaved roads â€” mix of road speed and mountain-bike terrain, epitomized by the 320 km Unbound Gravel in Kansas and UCI Gravel World Championships.",
  longDescription:
    "Gravel cycling emerged in the 2010s USA as riders sought traffic-free adventure on gravel roads with drop-bar bikes running 40-50mm tires. The Dirty Kanza (now Unbound Gravel) launched in 2006 and became the discipline's spiritual home. UCI added Gravel World Championships in 2022. Gravel bikes typically feature road geometry with clearance for wider tires, disc brakes, and endurance-focused designs. The scene emphasizes camaraderie, DIY spirit, and multi-hour ultra-endurance races (100-320 km).",

  category: "adventure-extreme-sports",
  subCategory: "endurance cycling on unpaved surfaces",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "summer",
  era: "21st-century",
  popularity: "major",

  countryOfOrigin: "US",
  regionOfOrigin: "Emporia, Kansas, USA (Dirty Kanza / Unbound Gravel)",
  estimatedOrigin: "Dirty Kanza launched 2006; Grinduro 2015; UCI Gravel World Championships 2022",

  players: { min: 1, max: 3000, note: "Individual competition; mass-start events with 500-3000 riders. Team + pairs formats exist in ultra-distance." },
  field: {
    surfaceName: "Gravel road course",
    dimensions: "50 km to 350 km per event",
    description: "Dirt/gravel roads, sometimes 20-40% singletrack, occasional pavement sections + water crossings." },
  equipment: [
    { name: "Gravel bike", description: "Drop-bar bike with 40-50mm tire clearance, disc brakes, 1x or 2x drivetrain. Sample: CervÃ©lo Ãspero, Specialized Crux, Trek Checkmate." },
    { name: "Gravel tires", description: "40-50mm tubeless tires (Panaracer Gravel King, Continental Terra Trail)." },
    { name: "Helmet + kit", description: "Standard road cycling kit; hydration pack + on-bike bottles for long events." },
    { name: "Bikepacking bags", description: "Frame, seat, and handlebar bags for multi-day self-supported events." },
    { name: "Navigation (Garmin/Wahoo)", description: "GPS course files essential â€” many races unmarked." },
  ],
  duration: {
    approximateMinutes: 720,
    structure: "Sprint gravel: 2-4 hours. Ultra-endurance: 8-30+ hours (Unbound 350 = 15-30 hours). Multi-day: 3-7 days." },

  objective:
    "Finish the course as fast as possible. Ultra-endurance goal is often 'complete under X hours' rather than winning outright.",
  matchStructure:
    "Mass start at dawn â†’ race â†’ finish at course end. Support depots (aid stations) every 30-50 km with water, food, mechanical help. Course marshals at critical junctions.",

  basicRules: [
    { title: "Complete the course", body: "Follow the GPS-provided course; missed sections = disqualification." },
    { title: "Self-supported OR supported class", body: "Some races (Unbound, FixÃ©) mandate solo self-support; others allow team cars." },
    { title: "Cutoff times", body: "Aid stations close after ~10 hours in ultras; missed cutoffs = DNF." },
    { title: "Mandatory equipment", body: "Some events require flat kit, lights (night sections), rain jacket." },
    { title: "Course markings", body: "UCI events use painted arrows; grassroots use flags + GPS only." },
  ],
  advancedRules: [
    { title: "Neutralized start", body: "First few km behind lead vehicle to prevent early crashes." },
    { title: "Aero rules (UCI)", body: "TT bars banned in UCI Gravel; standard drop bars only." },
    { title: "Support crew rules", body: "In self-supported classes: no outside food/mechanical help outside designated aid zones." },
    { title: "E-bike class", body: "Separate mass-start division for pedal-assist gravel bikes." },
  ],
  scoring: {
    summary: "Time (fastest across the course). Age-group + gender categories with separate podiums.",
    winCondition: "First to cross the finish line in your category.",
    breakdown: [
      { action: "Overall Male / Female", points: "1st, 2nd, 3rd podium" },
      { action: "Age-group category (5-year buckets)", points: "Category podiums" },
      { action: "Team / Pairs", points: "Combined times or best-of-team" },
    ],
  },
  penalties: [
    { title: "Illegal support", body: "Time penalty or DQ for outside help in self-supported class." },
    { title: "Missed course", body: "DQ for skipping course sections." },
    { title: "Doping violation", body: "UCI Gravel events subject to WADA anti-doping." },
  ],

  positions: [
    { name: "Solo rider", role: "Individual competitor.", count: 1 },
    { name: "Team lead (racing team)", role: "Fastest team member; sets pace + strategy." },
    { name: "Support crew", role: "Aid station help + mechanical support (in supported class)." },
  ],
  officiating: {
    officials: ["UCI Commissaires (World Series)", "Race Director", "Timing team"],
    summary: "UCI Gravel events officiated by UCI Commissaires; grassroots events use volunteer directors + electronic chip timing.",
  },

  governingBodies: [
    { name: "Union Cycliste Internationale (UCI)", founded: 1900, headquarters: "Aigle, Switzerland", website: "https://www.uci.org" },
    { name: "USA Cycling (US federation)", founded: 1920, headquarters: "Colorado Springs, USA", website: "https://usacycling.org" },
  ],
  majorCompetitions: [
    { name: "Unbound Gravel (200 mile main event)", frequency: "annual", founded: 2006, region: "Emporia, Kansas, USA" },
    { name: "UCI Gravel World Championships", frequency: "annual", founded: 2022, region: "rotating" },
    { name: "The Traka (Spain)", frequency: "annual", founded: 2020, region: "Girona, Spain" },
    { name: "SBT GRVL", frequency: "annual", founded: 2019, region: "Steamboat Springs, USA" },
    { name: "Gravel Locos (Texas)", frequency: "annual", founded: 2020, region: "Hico, Texas, USA" },
  ],
  countriesPlayed: ["US", "ES", "NL", "GB", "DE", "FR", "IT", "AU", "CA", "BE", "CH"],
  famousAthletes: [
    "Keegan Swenson (US, dominant Life Time Grand Prix champion)",
    "Sofia Gomez VillafaÃ±e (AR, multi-year Unbound winner)",
    "Petr VakoÄ (CZ, Grand Tour rider turned gravel pro)",
    "Ivar Slik (NL, 2Ã— UCI Gravel World Champion)",
    "Lauren Stephens (US, top female gravel racer)",
  ],
  records: [
    { title: "Unbound Gravel 200-mile course record (men)", holder: "Keegan Swenson", value: "9h 51m", year: 2023 },
    { title: "Unbound Gravel 200-mile course record (women)", holder: "Sofia Gomez VillafaÃ±e", value: "11h 06m", year: 2023 },
    { title: "UCI Gravel World Champion 2024", holder: "Mathieu van der Poel (NL)", value: "1st in Belgium", year: 2024 },
  ],

  variants: ["ultra-gravel", "gravel-bikepacking", "cyclocross", "mixed-terrain-racing"],
  relatedSports: ["road-cycling", "mountain-biking", "cyclocross", "bikepacking"],

  skills: [
    "endurance + threshold pacing",
    "handling on loose surfaces",
    "nutrition + hydration strategy",
    "flat-tire repair + basic mechanicals",
    "pack + solo riding tactics",
  ],
  strategies: [
    { title: "Fuel early + often", body: "80-120g carbs/hour throughout â€” bonking mid-race ends podium hopes." },
    { title: "Tire pressure matters", body: "35-45 psi typical; too high = harsh + slower on rough; too low = pinch flats." },
    { title: "Ride with a group", body: "Drafting saves 25-30% energy; pack riding in gravel races critical." },
    { title: "Practice night riding", body: "Ultra-gravel events (Unbound 350) require competent night riding â€” practice with lights." },
  ],

  terminology: [
    { term: "Chunky gravel", meaning: "Rough gravel with baseball-sized rocks; typical of Flint Hills." },
    { term: "Sector", meaning: "Named gravel stretch, like Roubaix cobbled sectors." },
    { term: "Aid station", meaning: "Support checkpoint with water, food, mechanicals." },
    { term: "DNF", meaning: "Did Not Finish â€” abandoning the race." },
    { term: "Setup", meaning: "Tire choice, gearing, and bag config for a specific event." },
    { term: "Grinding / grinding it out", meaning: "The mental + physical grind of a long gravel effort." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Buy or rent a gravel bike", body: "Entry-level ~$1500-$2500 (Kona Rove, Specialized Diverge Base)." },
        { title: "Ride 3-4 hours weekly on gravel", body: "Build baseline before entering 100 km events." },
        { title: "Enter a 50-mile gravel event", body: "Countless grassroots events; sub-4-hour goal typical for first-timers." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Complete Unbound 100", body: "Entry-level Unbound (100 miles) â€” highly competitive but achievable in 6-9 hours." },
        { title: "Race the Life Time Grand Prix", body: "US series of 6 gravel + MTB events with elite $250K prize purse." },
        { title: "Qualify for UCI Gravel Worlds", body: "Age-group + elite spots via UCI Gravel World Series races." },
      ],
    },
  ],

  faq: [
    { question: "Do I need a gravel bike, or can I use a road bike?", answer: "Road bikes with tire clearance for 32mm+ can handle mild gravel. True chunky gravel requires a dedicated gravel bike with 40mm+ tires." },
    { question: "How is gravel different from cyclocross?", answer: "Gravel = long endurance races (100+ km) on open roads. Cyclocross = 60-min races on closed loops with barriers + off-camber turns." },
    { question: "What's Unbound Gravel?", answer: "The premier US gravel race in Emporia, Kansas â€” 200-mile main event with 300 mile + 100 mile alternatives. Registration lottery due to demand." },
    { question: "Is gravel a UCI-recognized discipline?", answer: "Yes, since 2022. UCI Gravel World Championships held annually with age-group + elite categories." },
  ],

  sources: [
    { label: "Wikipedia â€” Gravel cycling", url: "https://en.wikipedia.org/wiki/Gravel_cycling", publisher: "Wikipedia" },
    { label: "Unbound Gravel official", url: "https://unboundgravel.com", publisher: "Life Time" },
    { label: "UCI Gravel", url: "https://www.uci.org/discipline/gravel-cycling", publisher: "UCI" },
  ],
  wikipediaTitle: "Gravel cycling",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

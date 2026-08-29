import type { Sport } from "@/lib/types";

export const portalGame: Sport = {
  id: "portal-game",
  slug: "portal-game",
  name: "Portal",
  officialName: "Portal (series)",
  aliases: ["Portal 1", "Portal 2"],
  shortDescription:
    "Valve's genre-defining first-person puzzle series — shoot inter-connected portals on any white surface and solve escalating physics puzzles narrated by the murderous AI GLaDOS.",
  longDescription:
    "Portal (2007) began as a student project (Narbacular Drop) that Valve turned into a 3-hour puzzle masterpiece bundled in The Orange Box. Portal 2 (2011) expanded the formula with co-op, gels (blue = bounce, orange = speed, white = paint), and a hall-of-fame single-player narrative. The 'Aperture Science Handheld Portal Device' spawned decades of physics-puzzle imitators. Portal has a robust speedrun scene (sub-8-minute Any%), a modding community (Portal Reloaded, Portal Revolution), and is universally cited as one of the greatest puzzle games ever made.",

  category: "video-games",
  subCategory: "first-person physics puzzle",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Bellevue, Washington (Valve Corporation)",
  estimatedOrigin: "Portal released October 10, 2007 (The Orange Box); Portal 2 released April 19, 2011; Portal with RTX released 2022",

  players: { min: 1, max: 2, note: "Portal 1: single-player only. Portal 2: single-player + 2-player co-op campaign." },
  field: {
    surfaceName: "Aperture Science Enrichment Center test chambers",
    dimensions: "Room-scale puzzle chambers",
    description: "White concrete-tile surfaces accept portals; other materials reject." },
  equipment: [
    { name: "Gaming PC / console", description: "PC (Steam), PlayStation 3+, Xbox 360+, Switch (Portal Companion Collection)." },
    { name: "Mouse + keyboard or controller", description: "M+KB preferred for precise portal aim; controller comfortable for co-op couch play." },
  ],
  duration: {
    approximateMinutes: 240,
    structure: "Portal 1: 3-4 hours. Portal 2 single-player: 8-10 hours. Co-op: 6-8 hours. Speedruns: Any% 6:41 (Portal 1)." },

  objective:
    "Escape Aperture Science by solving each numbered Test Chamber; ultimately defeat GLaDOS and (Portal 2) Wheatley.",
  matchStructure:
    "Test Chambers presented sequentially. Each has an entrance, an exit, and 1-3 mechanical puzzles requiring portal placement, cube stacking, or gel routing.",

  basicRules: [
    { title: "Portal gun", body: "Left click = blue portal, right click = orange portal. Only 2 portals exist at once; new portal replaces same color." },
    { title: "Portal surfaces", body: "Only white concrete and specific tiles accept portals — dark walls, glass, and metal reject." },
    { title: "Momentum", body: "Speedy thing goes in, speedy thing comes out — momentum is preserved through portals." },
    { title: "Companion cube", body: "Weighted storage cubes for stepping on buttons, holding doors, or ballistic projectiles." },
    { title: "Turrets", body: "Neurotoxin sentries that shoot on line-of-sight. Knock over or drop off ledges." },
  ],
  advancedRules: [
    { title: "Blue gel (Repulsion)", body: "Portal 2 gel that turns surfaces into bounce pads." },
    { title: "Orange gel (Propulsion)", body: "Portal 2 gel that turns surfaces into super-speed conveyors." },
    { title: "White gel (Conversion)", body: "Portal 2 gel that turns any surface into a portal-accepting one." },
    { title: "Excursion Funnels", body: "Portal 2 tractor beams that carry cubes or players." },
    { title: "Hard Light Bridges", body: "Portal 2 photon walls that block gel and can be routed through portals." },
  ],
  scoring: {
    summary: "Speedrun leaderboards rank Any%, Glitchless, and Inbounds categories. Puzzle time is the sole metric.",
    winCondition: "Complete campaign; speedrun: fastest time.",
    breakdown: [
      { action: "Chamber complete", points: "Time recorded" },
      { action: "Optional Steam achievements", points: "Any% doesn't require them" },
    ],
  },

  officiating: {
    officials: ["speedrun.com moderators"],
    summary: "speedrun.com verifies all Portal speedrun submissions across categories.",
  },

  governingBodies: [
    { name: "Valve Corporation (developer)", founded: 1996, headquarters: "Bellevue, Washington, USA", website: "https://valvesoftware.com" },
  ],
  majorCompetitions: [
    { name: "SGDQ Portal race", frequency: "annual", founded: 2015, region: "Games Done Quick streamed" },
    { name: "Portal Speedrun Community events", frequency: "quarterly", founded: 2010, region: "online" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "SE", "FI", "RU", "AU", "BR", "JP"],
  famousAthletes: [
    "Znernicus (US, Portal 1 WR holder)",
    "Xebaz (SE, Portal 2 WR holder)",
    "Msushi (US, Portal glitchless leader)",
    "TmarTn (US, Portal 2 co-op WR)",
  ],
  records: [
    { title: "Portal 1 Any% WR", holder: "Znernicus", value: "6:41.86", year: 2023 },
    { title: "Portal 2 Any% WR", holder: "Xebaz", value: "40:36", year: 2024 },
    { title: "Portal 2 Co-op WR", holder: "Msushi + TmarTn", value: "12:18", year: 2023 },
  ],

  variants: ["portal-2", "portal-reloaded", "portal-revolution", "portal-with-rtx", "narbacular-drop"],
  relatedSports: ["the-witness", "the-talos-principle", "half-life"],

  skills: [
    "spatial reasoning + 3D projection",
    "physics intuition (momentum, gel routing)",
    "quick mouse aim for on-the-fly portals",
    "puzzle pattern recognition",
  ],
  strategies: [
    { title: "Flinging", body: "Fall through downward portal, place upward portal to convert vertical momentum into horizontal — key speedrun tech." },
    { title: "Portal juggling", body: "Rapidly swap portal placements to route momentum through complex paths." },
    { title: "Save-warp glitches", body: "Portal 1 speedruns use portal-save-warp exploits to skip chambers." },
    { title: "Save Alyx — cube on button first", body: "Standard puzzle-solving heuristic: what needs pressing? What holds it?" },
  ],

  terminology: [
    { term: "Portal fling", meaning: "Speedrun technique using falling momentum to launch horizontally." },
    { term: "Companion Cube", meaning: "Iconic weighted cube — you incinerate it at chamber 17 in Portal 1." },
    { term: "GLaDOS", meaning: "Genetic Lifeform and Disk Operating System — the antagonist AI." },
    { term: "Wheatley", meaning: "Personality Core in Portal 2, voiced by Stephen Merchant." },
    { term: "Aperture Science", meaning: "The fictional research facility where the games take place." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play Portal 1 first", body: "3-4 hours; the perfect on-ramp before Portal 2's advanced mechanics." },
        { title: "Move to Portal 2 single-player", body: "8-10 hours with gels, funnels, and Wheatley." },
        { title: "Play co-op with a friend", body: "8-hour co-op campaign with unique puzzles requiring 4 portals." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Try workshop mods", body: "Portal Reloaded + Portal Revolution add hours of high-quality content." },
        { title: "Learn flinging + save-warping", body: "Watch Znernicus tutorials to route momentum for speed." },
        { title: "Attempt sub-8-minute Portal 1", body: "The classic speedrun benchmark; requires 100 attempts of practice." },
      ],
    },
  ],

  faq: [
    { question: "Do I need to play Portal 1 first?", answer: "Recommended but not required. Portal 2 stands alone, though jokes and callbacks land better with context." },
    { question: "Is there a Portal 3?", answer: "Not announced. Valve released Portal 2 in 2011 and no sequel has been confirmed." },
    { question: "Can I play Portal 2 co-op online?", answer: "Yes — full crossplay between PC, Xbox, PlayStation, and Switch via Steam Remote Play + native online." },
    { question: "Is Portal on Switch?", answer: "Yes — Portal Companion Collection released June 2022 with both games." },
  ],

  sources: [
    { label: "Wikipedia — Portal (series)", url: "https://en.wikipedia.org/wiki/Portal_(series)", publisher: "Wikipedia" },
    { label: "Portal on Steam", url: "https://store.steampowered.com/app/400/Portal/", publisher: "Valve" },
    { label: "Portal speedrun.com", url: "https://www.speedrun.com/portal", publisher: "speedrun.com" },
  ],
  wikipediaTitle: "Portal (series)",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

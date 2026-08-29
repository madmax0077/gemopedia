import type { Sport } from "@/lib/types";

export const callOfDutyEsports: Sport = {
  id: "call-of-duty-esports",
  slug: "call-of-duty-esports",
  name: "Call of Duty Esports",
  officialName: "Call of Duty League (CDL)",
  aliases: ["CDL", "COD Esports", "MW3 Esports", "BO6 Esports"],
  shortDescription:
    "The premier professional Call of Duty 4v4 esports scene — 12 franchise teams battle across three modes (Hardpoint, Search & Destroy, Control) for the $6M+ CDL Champs crown.",
  longDescription:
    "Call of Duty esports began with Halo-scene refugees playing CoD 4: Modern Warfare (2007). The scene professionalized with MLG's CoD Championship (2011-2019) before Activision launched the city-based franchised Call of Duty League in 2020 with $25M team buy-ins. The CDL runs 5-6 Majors per year across the current CoD title (rotates annually), climaxing in Champs each summer. FaZe Clan, OpTic Texas, Atlanta FaZe, and New York Subliners dominate the meta with 4v4 tactical play across Search & Destroy, Hardpoint, and Control.",

  category: "esports",
  subCategory: "professional FPS 4v4 tournament league",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Santa Monica, California (Activision + CDL)",
  estimatedOrigin: "MLG CoD Championship 2011; Call of Duty League franchise 2020; current title Black Ops 6 (2024-25 season)",

  players: { min: 4, max: 4, note: "4v4 competitive format standard; 12 franchise teams in CDL." },
  field: {
    surfaceName: "In-game maps",
    dimensions: "Multiplayer 6v6 map cut to 4v4 competitive dimensions",
    description: "Small, symmetrical maps with defined lanes, chokepoints, and objectives." },
  equipment: [
    { name: "Console (Xbox Series X)", description: "CDL is Xbox-exclusive competitive league; standardized on Series X." },
    { name: "Controller (Scuf or standard)", description: "Pro Scuf/Battle Beaver controllers with 4 rear paddles standard." },
    { name: "Gaming headset (Astro/HyperX)", description: "Wired only in competitive; open-back for comms clarity." },
    { name: "Standardized settings", description: "CDL enforces same FoV (100), sensitivity range, HUD scale." },
  ],
  duration: {
    approximateMinutes: 90,
    structure: "Best-of-5 series: 60-120 min. Best-of-9 elimination in Majors playoffs." },

  objective:
    "Win 3 maps first in the standard best-of-5, alternating between Hardpoint, Search & Destroy, and Control across map/mode combos.",
  matchStructure:
    "Map 1: Hardpoint. Map 2: Search & Destroy. Map 3: Control. Map 4 (if needed): Hardpoint. Map 5 (if needed): Search & Destroy. First team to 3 map wins takes the series.",

  basicRules: [
    { title: "Hardpoint", body: "Rotating capture zones; team accumulates points while controlling; first to 250 wins." },
    { title: "Search & Destroy", body: "Round-based bomb plant/defuse (no respawns); first team to 6 rounds wins map." },
    { title: "Control", body: "Attackers try to capture 2 objectives with limited team lives; defenders hold with lives + time." },
    { title: "Ruleset restrictions", body: "CDL bans OP weapons, attachments, killstreaks, and perks each season via GA (Gentleman's Agreement)." },
    { title: "Map veto", body: "Coaches veto maps + modes each series to force strategic map pool." },
  ],
  advancedRules: [
    { title: "Substitutions", body: "Rosters have 5 players; 1 sub allowed between maps for role play." },
    { title: "Coach challenges", body: "Coaches can call timeouts + pause for tech issues." },
    { title: "Anti-cheat + LAN priority", body: "All CDL matches on LAN with Ricochet anti-cheat + hardware audit." },
    { title: "Sub-mode rules", body: "Hardpoint respawn delays, S&D bomb timer, Control life count all standardized." },
  ],
  scoring: {
    summary: "Map wins = 1 series point. Series wins accrue CDL Points across Majors; Champs seeds decided by season point total.",
    winCondition: "First team to 3 map wins (Bo5) or 5 map wins (Bo9). Champs winner takes home the CDL trophy.",
    breakdown: [
      { action: "Regular Series win", points: "1 series win" },
      { action: "Major event champion", points: "70 CDL Points" },
      { action: "Champs winner", points: "$2M team prize + trophy" },
    ],
  },
  penalties: [
    { title: "Cheating / stream sniping", body: "Immediate DQ + fine + potential player ban." },
    { title: "Fielding banned attachment", body: "Round or map forfeit." },
  ],

  positions: [
    { name: "Slayer (AR)", role: "Anchor damage-dealer with SVA 545/XM4 assault rifle.", count: 1 },
    { name: "Slayer (SMG 1)", role: "Aggressive frag with C9/Jackal SMG.", count: 1 },
    { name: "Objective SMG", role: "Fast-play SMG focused on Hardpoint holds + S&D pushes.", count: 1 },
    { name: "Support", role: "AR player who plays lanes + trades gunfights.", count: 1 },
  ],
  officiating: {
    officials: ["CDL League Operations", "Head Referee", "Anti-cheat compliance team"],
    summary: "Activision's League Ops team runs on-site officiating at Majors + Champs; Riot-style tournament realm anti-cheat.",
  },

  governingBodies: [
    { name: "Call of Duty League (Activision)", founded: 2020, headquarters: "Santa Monica, California, USA", website: "https://callofdutyleague.com" },
  ],
  majorCompetitions: [
    { name: "Call of Duty League Championship (Champs)", frequency: "annual", founded: 2020, region: "USA rotating" },
    { name: "CDL Majors (5-6 per year)", frequency: "5-6 per year", founded: 2020, region: "host-city rotating" },
    { name: "MLG World Championship (predecessor)", frequency: "annual (2011-2019)", founded: 2011, region: "USA" },
  ],
  countriesPlayed: ["US", "GB", "CA", "AU", "DE", "FR"],
  famousAthletes: [
    "Ian 'Crimsix' Porter (US, most CoD Champs won)",
    "Damon 'Karma' Barlow (CA, 3× Champs winner)",
    "Chris 'Simp' Lehr (US, current MVP)",
    "Kenny 'Kenny' Williams (US, 4-time Champion)",
    "Anthony 'Shotzzy' Cuevas-Castro (US, prodigy)",
  ],
  records: [
    { title: "Most CDL Champs wins (player)", holder: "Crimsix", value: "4 championships", year: 2020 },
    { title: "Highest single Champs prize", holder: "Atlanta FaZe / OpTic Texas", value: "$2 M team payout", year: 2022 },
    { title: "Largest peak viewership", holder: "Champs 2021", value: "1.5 M peak concurrent viewers", year: 2021 },
  ],

  variants: ["cdl-challengers", "warzone", "cod-mobile"],
  relatedSports: ["counter-strike-esports", "valorant-esports", "halo-esports", "warzone"],

  skills: [
    "aim + recoil control (controller)",
    "map + spawn awareness",
    "callout communication (team comms)",
    "role-specific mechanics (Slayer vs Objective)",
    "meta adaptation across CoD title rotations",
  ],
  strategies: [
    { title: "Spawn manipulation", body: "In Hardpoint, force enemy spawns by cutting off exit routes — key to preventing snipers." },
    { title: "S&D economy", body: "Save weapon attachments/perks between rounds; force-buy strats vs. eco rounds like CS." },
    { title: "Slayer rotations", body: "AR watches lane while SMG pushes short — coordinated pushes require exact timing." },
    { title: "Coach + coaching pause", body: "Time coaching pauses to reset momentum after 3-0 opening deficit." },
  ],

  terminology: [
    { term: "AR (Assault Rifle)", meaning: "Long-range weapon; typically SVA 545 or XM4 in current meta." },
    { term: "SMG (Submachine Gun)", meaning: "Close-range weapon; C9 or Jackal PDW in current meta." },
    { term: "GA (Gentleman's Agreement)", meaning: "Community-agreed bans on OP weapons/attachments — enforced by CDL rules." },
    { term: "Slayer", meaning: "Player role focused on kills + damage; usually AR or aggressive SMG." },
    { term: "Reload push", meaning: "Enemy reload window used to trigger a coordinated site push in S&D." },
    { term: "Trip", meaning: "Grenade trap placed at defensive S&D sites." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play ranked CDL ruleset", body: "Multiplayer > Ranked has CDL modes, maps, weapons — the pipeline to esports." },
        { title: "Learn 3 competitive maps", body: "Master 6 star + Rewind spawns + choke points." },
        { title: "Join a scrim team on Discord", body: "CDL Amateur / Challengers pipeline scrims nightly." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Reach Iridescent Rank", body: "Top 0.1% of Ranked — visible to CDL Challengers scouts." },
        { title: "Compete in Challengers open events", body: "CDL Challengers Elite qualifier + Cash Cups every month." },
        { title: "Enter CDL Challengers Elite", body: "Top amateur circuit; direct pipeline to CDL franchise contracts." },
      ],
    },
  ],

  faq: [
    { question: "How much do CDL pros earn?", answer: "Minimum $50K salary; top-tier stars (Simp, Shotzzy) earn $500K-$1M+ base plus team streaming + sponsorships." },
    { question: "Which CoD game does CDL play?", answer: "Rotates annually with the current title. 2024-25 season = Black Ops 6; prior year was Modern Warfare III." },
    { question: "Is CDL PC or console?", answer: "Xbox Series X exclusive on standardized consoles. No PC or PlayStation." },
    { question: "How do I go pro?", answer: "Path: high Ranked Play → CDL Challengers → CDL Challengers Elite → CDL franchise team contract. Typical age 16-25." },
  ],

  sources: [
    { label: "Wikipedia — Call of Duty League", url: "https://en.wikipedia.org/wiki/Call_of_Duty_League", publisher: "Wikipedia" },
    { label: "CDL official standings", url: "https://callofdutyleague.com/standings", publisher: "Activision" },
    { label: "Esports Charts CoD data", url: "https://escharts.com/games/cod", publisher: "Esports Charts" },
  ],
  wikipediaTitle: "Call of Duty League",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

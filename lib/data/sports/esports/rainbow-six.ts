import type { Sport } from "@/lib/types";

export const rainbowSix: Sport = {
  id: "rainbow-six",
  slug: "rainbow-six",
  name: "Rainbow Six Siege",
  officialName: "Tom Clancy's Rainbow Six Siege (Ubisoft)",
  aliases: ["R6", "R6S", "Siege", "Rainbow Six Esports (R6E)"],
  shortDescription:
    "Tactical 5v5 attack-vs-defend FPS with destructible environments and 70+ 'operators' — Ubisoft's premier esport since 2016; Six Invitational is the world championship with $3M+ prize pool.",
  longDescription:
    "Tom Clancy's Rainbow Six Siege (Ubisoft Montreal, launched December 2015) is a tactical 5v5 shooter where an attacking team of 5 counter-terrorism operators must complete an objective (hostage rescue, bomb defusal, secure area) inside a fortified location, while a defending team of 5 uses destructible walls, floors, gadgets, and traps to prevent it. Rounds are one-life, ~3 minutes, best-of-9 or best-of-11. The game features 70+ 'operators' (playable characters, each with a unique gadget) drawn from real-world counter-terror units (GIGN, SAS, GSG9, SEAL Team, SPETSNAZ, GEO, JTF-2, and many more) plus fictional units. Destructible environments (walls, floors, ceilings) create dynamic map geometry every round. R6 Siege Esports (R6E), governed by Ubisoft since 2016, runs regional leagues (BLAST R6, NAL, EUL, LATAM, APAC) feeding into the Six Invitational (Montreal, annually since 2017) with $3M+ prize pools. G2 Esports, Team Liquid, Team BDS, Ninjas in Pyjamas, and Wolves Esports are historic powerhouses.",

  category: "esports",
  subCategory: "tactical 5v5 attack-defend FPS",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "CA",
  regionOfOrigin: "Canada (Ubisoft Montreal); worldwide competitive scene since 2016 Pro League",
  estimatedOrigin: "Launched December 2015; Pro League 2016; Six Invitational 2017; 70+ operators added over 10+ years of live-service updates",

  players: { min: 5, max: 5, note: "5v5 competitive format; ranked also 5v5." },
  field: {
    surfaceName: "Map (digital 3D environment)",
    dimensions: "20+ competitive maps, each ~50m × 50m with 2-3 floors + basement",
    description: "Highly destructible interior maps — Bank, Consulate, Oregon, Villa, Kafe, Border, Chalet, Clubhouse, Skyscraper, Nighthaven, etc. Bomb/hostage/secure objective locations rotate.",
  },
  equipment: [
    { name: "Gaming PC / PS5 / Xbox Series X", description: "Cross-play limited; PC standard for competitive." },
    { name: "Mouse + Keyboard", description: "800-1600 DPI mouse; low-latency keyboard for movement + gadget deployment." },
    { name: "Headset with positional audio", description: "Critical for tracking enemy footsteps + drone sounds + wall breaches." },
    { name: "240Hz monitor + low input lag", description: "Peeker's advantage rewards fast reflexes; 240Hz is competitive standard." },
    { name: "In-game operators + loadouts", description: "70+ operators with unique gadgets; primary/secondary weapons; attachments customized per operator." },
  ],
  duration: { approximateMinutes: 45, structure: "Best-of-11 in most leagues (first to 6 wins); each round ~3 min; matches 30-60 min." },
  objective: "As attackers: complete objective (defuse bomb, secure hostage, or hold area). As defenders: prevent objective completion within the timer OR eliminate all attackers.",
  matchStructure: "Best-of-11 rounds (first to 6). Teams switch attack/defense every 3 rounds (or after 6). Overtime rules if 5-5. Bans + picks for operators before each round.",

  basicRules: [
    { title: "5v5 attack vs. defend", body: "One team attacks with drones + operator gadgets; other defends with reinforced walls + traps + cameras." },
    { title: "One life per round", body: "Death is permanent for the round; no respawn until next round." },
    { title: "Preparation phase", body: "Defenders have ~45 seconds to reinforce walls + place gadgets; attackers pilot drones to gather intel." },
    { title: "Objective locations rotate", body: "Random rotation of bomb/hostage/secure sites each round; forces adaptable strategies." },
    { title: "Operator picks/bans", body: "Teams ban 4 operators before match; picks are locked per round." },
  ],
  advancedRules: [
    { title: "Destructible environments", body: "Walls, floors, ceilings can be breached with explosives + hammers; creates unpredictable sightlines." },
    { title: "Drone + camera intel", body: "Attackers use rolling drones; defenders use fixed + mobile cameras; intel is decisive." },
    { title: "Gadget economy", body: "Each operator has 1-2 uses of their signature gadget; conserve for critical moments." },
    { title: "Roamer vs. anchor defense", body: "Roamers hunt attackers outside site; anchors hold site with utility. Balance is meta-dependent." },
    { title: "Peeker's advantage", body: "Attacker peeking a corner has slight visual advantage due to netcode; defenders pre-fire common angles." },
  ],
  scoring: {
    summary: "Round win = 1 point; first to 6 rounds wins the match (best-of-11).",
    winCondition: "6 round wins in best-of-11 format; overtime rules if 5-5 tie.",
    breakdown: [
      { action: "Round won (objective secured or all opponents eliminated)", points: "1" },
      { action: "Overtime round won", points: "1" },
    ],
  },
  penalties: [
    { title: "In-game penalty (team killing)", body: "Team-killing = loss of round + potential match suspension." },
    { title: "Cheating detected", body: "Immediate ban (BattlEye anti-cheat); tournament DQ + potential permaban." },
    { title: "Toxicity in-game", body: "Voice/text chat abuse = match penalty + report system." },
  ],

  positions: [
    { name: "Entry Fragger", role: "First through breaches; secures site with aggressive plays.", count: 1 },
    { name: "Support", role: "Provides utility (smokes, breach charges, drones); enables entry.", count: 1 },
    { name: "IGL (In-Game Leader)", role: "Calls strategy + adapts mid-round; manages ban phase.", count: 1 },
    { name: "Anchor (defense)", role: "Holds site with utility + traps; last line of defense.", count: 1 },
    { name: "Flex", role: "Fills any role based on operator pool + map pick.", count: 1 },
  ],
  officiating: {
    officials: ["Head referee", "Assistant referees (2-3)", "Anti-cheat observers"],
    summary: "Ubisoft-provided referees + independent anti-cheat monitors at major events.",
  },

  governingBodies: [
    { name: "Ubisoft (Rainbow Six Esports)", founded: 2016, headquarters: "Montreal, Canada", website: "https://www.ubisoft.com/en-us/esports/rainbow-six/siege" },
    { name: "BLAST (production partner)", founded: 2018, headquarters: "Copenhagen, Denmark" },
  ],
  majorCompetitions: [
    { name: "Six Invitational", frequency: "annual (February in Montreal)", founded: 2017, region: "worldwide (world championship)" },
    { name: "Six Major", frequency: "3× per year", founded: 2018, region: "worldwide (rotating hosts)" },
    { name: "BLAST R6 (Regional Leagues)", frequency: "year-round (2 splits)", founded: 2023, region: "worldwide (NAL, EUL, LATAM, APAC)" },
  ],
  countriesPlayed: ["CA", "US", "BR", "MX", "GB", "FR", "DE", "SE", "DK", "JP", "KR", "AU"],
  famousAthletes: [
    "Emilio 'Pengu' Molla (Denmark — R6 legend; 2× Six Invitational champion PENTA/G2)",
    "Fabian 'Fabian' Hallsten (Sweden — G2 Esports back-to-back Six Invitational)",
    "Bryan 'Merc' Wrzek (USA — Team SoloMid + Spacestation Gaming)",
    "Julio 'Julio' Giacomelli (Brazil — Team Liquid Six Invitational 2021 champion)",
    "Niclas 'Pengu' Mouritzen (Danish IGL legend)",
    "Nathan 'nesk' Bourdon (France — Team BDS Six Invitational 2023 champion)",
  ],
  records: [
    { title: "Most Six Invitational titles", holder: "G2 Esports (formerly PENTA)", value: "2 titles (2018, 2019) — first back-to-back champions", year: 2019 },
    { title: "Highest single-event prize pool", holder: "Six Invitational", value: "$3M+ (2023, 2024 editions with crowdfunded bonus)", year: 2024 },
    { title: "Longest live-service operator roster", holder: "Rainbow Six Siege", value: "70+ operators added over 10+ years; still receiving new content 2026", year: 2026 },
  ],

  variants: ["ranked-5v5-competitive", "unranked-5v5-casual", "quick-match-4v5-random", "custom-lan-5v5-tournament", "team-deathmatch-arcade"],
  relatedSports: ["counter-strike", "valorant", "call-of-duty", "overwatch"],

  skills: ["gun aim + spray control", "map knowledge (75+ maps × 3-4 sites each)", "operator gadget usage", "team communication + callouts", "drone/camera intel gathering", "peeker's-advantage timing"],
  strategies: [
    { title: "Drone before every entry", body: "Attackers who don't drone die to unseen defenders; intel is the game's currency." },
    { title: "Vertical play with destruction", body: "Break floors + ceilings to attack from above/below; forces defenders to reposition." },
    { title: "Reinforce the right walls", body: "Defenders must reinforce walls that block sightlines to objective; leaving key walls soft = instant loss." },
    { title: "Utility economy management", body: "Save flash + smoke charges for late-round pushes; wasting on early trades loses site retakes." },
    { title: "Ban phase mind games", body: "Banning opponent's best entry (Ash, Sledge, Iana) forces suboptimal picks." },
  ],

  terminology: [
    { term: "Operator", meaning: "Playable character with unique gadget; 70+ total in game." },
    { term: "Reinforcement", meaning: "Metal panel placed by defenders to make wall unbreachable by bullets." },
    { term: "Objective / Site", meaning: "Bomb/hostage/secure location defenders must protect." },
    { term: "Roamer / Anchor", meaning: "Defender play styles — roamer hunts, anchor holds site." },
    { term: "Drone", meaning: "Small rolling reconnaissance device deployed by attackers." },
    { term: "Peeker's advantage", meaning: "Slight visual edge for player emerging from cover due to netcode." },
    { term: "1v1 clutch", meaning: "Last player alive winning against equal or greater opposition." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play unranked for 50+ hours", body: "Learn 5-8 core maps + 4-5 attackers + 4-5 defenders; don't try to master everything." },
      { title: "Watch Six Invitational VODs", body: "Study pro strats + retake fundamentals — free education." },
      { title: "Join a Discord community", body: "R6 Amateur Discord + reddit for scrim partners + shot-calling coaching." },
    ]},
    { level: "advanced", steps: [
      { title: "Climb to Diamond+ in ranked", body: "Diamond = ~top 2%; visible to team scouts." },
      { title: "Join open qualifiers for Challenger League", body: "BLAST R6 open qualifiers each split; win = promotion path to pro league." },
      { title: "Six Invitational qualification", body: "Regional leagues → Six Major → Six Invitational annual world championship." },
    ]},
  ],

  faq: [
    { question: "How is Rainbow Six Siege different from CS:GO or Valorant?", answer: "R6 Siege is uniquely tactical because of destructible environments — walls, floors, and ceilings can be breached to create new sightlines every round. It also has 70+ operators with unique gadgets (not just guns), making individual operator counter-picks a huge strategic layer. CS:GO/Valorant have fixed maps and lighter utility variety." },
    { question: "How big is the R6 esports scene?", answer: "R6 Esports is Ubisoft's premier competitive title with the Six Invitational annual world championship ($3M+ prize pool), plus 4 regional leagues (BLAST R6 in North America, Europe, Latin America, and Asia-Pacific) running year-round. It's smaller than CS or LoL but larger than most non-Riot esports." },
    { question: "How many operators are in the game?", answer: "As of 2026, R6 Siege has 70+ operators, with 4 new operators added each year across 4 seasons. Each has a unique gadget and belongs to a real-world or fictional counter-terror unit (GIGN, SAS, GSG9, Nighthaven, etc.)." },
  ],

  wikipediaTitle: "Tom Clancy's Rainbow Six Siege",
  sources: [
    { label: "Rainbow Six Esports", url: "https://www.ubisoft.com/en-us/esports/rainbow-six/siege", publisher: "Ubisoft" },
    { label: "Wikipedia — Tom Clancy's Rainbow Six Siege", url: "https://en.wikipedia.org/wiki/Tom_Clancy%27s_Rainbow_Six_Siege", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

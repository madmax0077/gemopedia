import type { Sport } from "@/lib/types";

export const overwatch2: Sport = {
  id: "overwatch-2",
  slug: "overwatch-2",
  name: "Overwatch 2",
  officialName: "Overwatch 2 (Blizzard Entertainment)",
  aliases: ["OW2", "Overwatch 2 Championship Series", "OWCS"],
  shortDescription:
    "Blizzard's free-to-play 5v5 hero shooter (successor to Overwatch, launched 2022) — 40+ heroes across Tank/DPS/Support roles; Overwatch Championship Series (OWCS) succeeded the Overwatch League as top competitive circuit.",
  longDescription:
    "Overwatch 2 (Blizzard Entertainment, launched October 2022) is the free-to-play successor to Overwatch (2016), transitioning the game from 6v6 to 5v5 (one Tank per team) and unlocking a live-service model with seasonal battle passes. The game features 40+ heroes divided into three roles — Tank, Damage (DPS), and Support — each with unique abilities and ultimate weapons. Modes include Escort (payload push), Hybrid (capture + escort), Push (bidirectional robot escort — OW2 exclusive), and Control (rotating captures). After the Overwatch League (franchised city-based league) folded in late 2023, Blizzard launched the Overwatch Championship Series (OWCS) in 2024, an open-circuit format with regional stages (NA, EMEA, Asia) feeding into major LAN events and a world championship. The scene is smaller than OWL's peak but healthier as an open circuit, with $500K+ prize pools at majors.",

  category: "esports",
  subCategory: "5v5 hero shooter",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Blizzard Entertainment, Irvine California); global competitive scene since 2016",
  estimatedOrigin: "Overwatch launched May 2016; Overwatch League 2018-2023; Overwatch 2 launched October 2022; OWCS launched 2024",

  players: { min: 5, max: 5, note: "5v5 competitive (OW2 transitioned from 6v6). One Tank per team; two DPS; two Support." },
  field: {
    surfaceName: "Map (digital 3D environment)",
    dimensions: "20+ competitive maps across Escort/Hybrid/Push/Control modes; each ~200m long path",
    description: "Themed maps — King's Row, Ilios, Numbani, Route 66, Circuit Royal, Colosseo, Esperança, etc. Push mode has 3 new dedicated maps (Colosseo, Esperança, New Queen Street).",
  },
  equipment: [
    { name: "Gaming PC / PS5 / Xbox Series X / Switch", description: "Cross-play across all platforms; PC standard for competitive." },
    { name: "Mouse + Keyboard", description: "800-1600 DPI mouse; keyboard for movement + ability + ultimate keybinds." },
    { name: "Headset with positional audio", description: "Critical for tracking flanker footsteps + Tracer blinks + ultimate voice lines." },
    { name: "240Hz+ monitor", description: "OW2 rewards fast reactions especially for Widowmaker/Sombra/Tracer duels." },
    { name: "In-game heroes + role locks", description: "40+ heroes: Tank (1 per team) / DPS (2 per team) / Support (2 per team). Role lock in ranked + OWCS." },
  ],
  duration: { approximateMinutes: 30, structure: "Best-of-5 or best-of-7 maps in OWCS; each map ~10-15 min. Total match 30-90 min." },
  objective: "Complete the map objective (escort payload, capture point, push robot) before the timer expires — or prevent the enemy from doing the same on their turn.",
  matchStructure: "Best-of-5 or best-of-7 maps in OWCS finals. Each map plays through mode-specific objectives with attack/defense rotations. Overtime + map draws resolved by pass % or checkpoint count.",

  basicRules: [
    { title: "5v5 role composition", body: "Every team: 1 Tank + 2 DPS + 2 Support. Role lock enforced in ranked + esports." },
    { title: "Objective-based modes", body: "Escort (push payload from A to B), Hybrid (capture then escort), Push (bidirectional robot escort), Control (best-of-3 capture points)." },
    { title: "Respawns are permanent", body: "No round-based one-life; killed players respawn after ~10 seconds and rejoin fight." },
    { title: "Ultimate charge economy", body: "Every hero has an ultimate ability that charges over time + damage; ultimate coordination is decisive." },
  ],
  advancedRules: [
    { title: "Hero swap mid-round", body: "Any player can swap hero at spawn any time — counter-picking is a core layer of play." },
    { title: "Ultimate combos", body: "Zarya Grav + Genji Blade / Hanzo Storm Arrow are classic ult combos; teams synchronize ultimates for team-wipes." },
    { title: "Positional advantage", body: "High ground + off-angles are decisive; Tank + Support positioning enables DPS output." },
    { title: "Ban phase (OWCS 2024+)", body: "Both teams ban 1 hero per role each map at pro level; shapes hero pool decisively." },
    { title: "Overtime + tiebreak", body: "Contested payload/objective extends overtime; time-bank system in Push mode." },
  ],
  scoring: {
    summary: "Map-per-map scoring — team winning majority of maps in best-of-5/7 wins the match.",
    winCondition: "Best-of-5 maps: first to 3 map wins. Best-of-7: first to 4 map wins.",
    breakdown: [
      { action: "Map won (objective completed or opponent stopped)", points: "1 map win" },
      { action: "Series win", points: "Match victory (BO5: 3 maps; BO7: 4 maps)" },
    ],
  },
  penalties: [
    { title: "Team-killing / griefing", body: "Match report; potential competitive suspension." },
    { title: "Third-party software", body: "Immediate ban (Blizzard anti-cheat)." },
    { title: "Toxicity in voice/text", body: "Chat mute + potential ranked suspension via Blizzard's report system." },
  ],

  positions: [
    { name: "Tank (Main + Off-Tank hybrid)", role: "Only 1 Tank in OW2 — creates space + absorbs damage + engages fights. Central role.", count: 1 },
    { name: "Hitscan DPS", role: "Ashe/Cassidy/Widowmaker — precision aim heroes; carry damage output.", count: 1 },
    { name: "Projectile / Flex DPS", role: "Genji/Sombra/Junkrat/Echo — projectile aim or utility DPS.", count: 1 },
    { name: "Main Support (Heal-focused)", role: "Ana/Kiriko/Baptiste — big heal output + utility (sleep, immortality, cleanse).", count: 1 },
    { name: "Flex Support", role: "Lucio/Zenyatta/Brigitte/Lifeweaver — mobility + damage-adjacent heals + utility.", count: 1 },
  ],
  officiating: {
    officials: ["Head referee", "Assistant referees (2)", "Anti-cheat observer", "Map/mode observer"],
    summary: "Blizzard + tournament organizer provided referees at OWCS majors + LAN events.",
  },

  governingBodies: [
    { name: "Blizzard Entertainment (game developer + esports operator)", founded: 1991, headquarters: "Irvine, California, USA", website: "https://overwatch.blizzard.com/en-us/esports/" },
    { name: "ESL FACEIT Group (production partner for OWCS)", founded: 2000, headquarters: "Cologne, Germany" },
  ],
  majorCompetitions: [
    { name: "Overwatch Championship Series (OWCS)", frequency: "year-round (multi-stage regional + majors)", founded: 2024, region: "worldwide (NA + EMEA + Asia stages)" },
    { name: "Overwatch World Cup", frequency: "biennial", founded: 2016, region: "worldwide (national teams)" },
    { name: "OWCS Global Finals / World Championship", frequency: "annual (winter)", founded: 2024, region: "worldwide (rotating hosts)" },
    { name: "Overwatch League (2018-2023, defunct)", frequency: "annual", founded: 2018, region: "worldwide (was city-franchised; folded end of 2023)" },
  ],
  countriesPlayed: ["US", "KR", "CN", "GB", "SE", "FI", "DE", "FR", "CA", "AU", "JP", "TH"],
  famousAthletes: [
    "Jjonak (Bang Sung-hyeon, Korea — 2018 OWL MVP; Zenyatta legend)",
    "Fleta (Kim Byung-sun, Korea — DPS star; 2020 OWL MVP)",
    "Sinatraa (Jay Won, USA — 2019 OWL MVP; later moved to Valorant)",
    "Profit (Park Joon-yeong, Korea — 2018 OWL Grand Finals MVP with London Spitfire)",
    "carpe (Lee Jae-hyeok, Korea — Philadelphia Fusion; long-career hitscan star)",
    "Fearless (Lee Eui-seok, Korea — tank legend; Shanghai Dragons 2021 champion)",
    "ZBRA (Lucas Rizzotto, Brazil — modern OWCS star)",
  ],
  records: [
    { title: "Most Overwatch League Grand Finals wins", holder: "Shanghai Dragons + San Francisco Shock", value: "SF Shock: 2019, 2020; Shanghai Dragons: 2021, 2023; two dominant franchises of OWL era", year: 2023 },
    { title: "Most Overwatch World Cup gold medals", holder: "South Korea", value: "4 gold medals (2016, 2017, 2018, 2019) — undefeated at Overwatch World Cup", year: 2019 },
    { title: "OW2 launch peak concurrent", holder: "Overwatch 2", value: "35M+ players in first 30 days after F2P launch October 2022", year: 2022 },
  ],

  variants: ["ranked-competitive-5v5", "unranked-quick-play-5v5", "arcade-mystery-heroes-random", "custom-6v6-community-servers", "workshop-community-modes"],
  relatedSports: ["team-fortress-2", "valorant", "paladins", "apex-legends", "marvel-rivals"],

  skills: ["aim (hitscan + projectile)", "hero pool depth across all 3 roles", "ultimate tracking + timing", "positional game sense (high ground + angles)", "team communication + shot-calling", "counter-pick decision-making"],
  strategies: [
    { title: "Track enemy ultimates", body: "Winning teams call every enemy ultimate charge; commit to ultimate combos when opponents have none." },
    { title: "Bait ultimates then engage", body: "Force opponent Support to burn Ana's Nano or Kiriko's Suzu, then engage with your own combo." },
    { title: "High-ground control", body: "Every OW2 map has a decisive high-ground; Tank + Support position for it, then DPS shoot from it." },
    { title: "Swap for counter-picks", body: "Losing a fight to Pharah? Swap to Ashe or Soldier. Losing to Reinhardt? Swap Tank to Sigma. Adaptability wins matches." },
  ],

  terminology: [
    { term: "Ultimate", meaning: "Signature ability that charges over time + damage; ~15-25 sec of massive impact." },
    { term: "Tank / DPS / Support", meaning: "Three roles — 1 Tank, 2 DPS, 2 Support per team." },
    { term: "Backline", meaning: "Where Supports position — flanker heroes target the backline." },
    { term: "Frontline", meaning: "Where Tanks + DPS pressure — main damage exchange zone." },
    { term: "Comp swap", meaning: "Coordinated team hero swap between rounds to counter enemy composition." },
    { term: "Grav Blade", meaning: "Classic Zarya Grav → Genji Blade ultimate combo." },
    { term: "Nano-blade", meaning: "Ana Nano-boosted Genji Blade — game-winning DPS burst." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play unranked to learn 2 heroes per role", body: "6 heroes total (2 Tank + 2 DPS + 2 Support) gives you flex capacity for role queue." },
      { title: "Watch OWCS VODs + T500 streamers", body: "Learn positioning + rotations from top-500 players on Twitch/YouTube." },
      { title: "Do the workshop aim trainers", body: "Custom workshop codes for hitscan + projectile aim; 30 min/day improves aim measurably." },
    ]},
    { level: "advanced", steps: [
      { title: "Climb to Grandmaster / Top 500", body: "GM = top 1%, T500 = top 500 per region per role. Scouts monitor T500 leaderboards." },
      { title: "Join open OWCS Amateur qualifiers", body: "Weekly amateur online tournaments feed into OWCS regional stages." },
      { title: "OWCS Regional Stage → Major → World Championship", body: "Full open circuit path to global championship since Blizzard replaced OWL in 2024." },
    ]},
  ],

  faq: [
    { question: "What changed from Overwatch to Overwatch 2?", answer: "The biggest change was 6v6 → 5v5 (one Tank per team instead of two), which made Tanks more central and matches faster. The game also went free-to-play with a battle pass model, added the Push mode + 3 new maps, and later added over a dozen new heroes. PvE story missions were promised at launch but were cancelled in 2023, causing controversy." },
    { question: "What happened to the Overwatch League?", answer: "The Overwatch League (2018-2023) was Blizzard's city-franchised league (Boston Uprising, Seoul Dynasty, etc.). It folded after the 2023 season due to franchise economics and shifting Blizzard priorities. It was replaced by the Overwatch Championship Series (OWCS) in 2024 — an open-circuit format with regional stages feeding into a world championship." },
    { question: "Is Overwatch 2 still active as an esport?", answer: "Yes — OWCS runs year-round with regional stages in North America, EMEA, and Asia, plus 2-3 major LAN events + an annual world championship. The scene is smaller than OWL's 2018 peak but healthier as an open circuit with organic team development." },
  ],

  wikipediaTitle: "Overwatch 2",
  sources: [
    { label: "Overwatch Esports", url: "https://overwatch.blizzard.com/en-us/esports/", publisher: "Blizzard Entertainment" },
    { label: "Wikipedia — Overwatch 2", url: "https://en.wikipedia.org/wiki/Overwatch_2", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

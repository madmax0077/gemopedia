import type { Sport } from "@/lib/types";

export const fortnite: Sport = {
  id: "fortnite",
  slug: "fortnite",
  name: "Fortnite",
  officialName: "Fortnite Battle Royale",
  aliases: ["Fortnite BR", "Fortnite: Battle Royale"],
  shortDescription:
    "Free-to-play battle-royale shooter in which 100 players parachute onto a shrinking island, gather weapons and materials, build defensive structures, and fight until only one player or squad remains.",
  longDescription:
    "Fortnite Battle Royale is a free-to-play last-player-standing shooter developed by Epic Games, released in September 2017. Up to 100 players parachute onto a colourful cartoon island, scavenge weapons, ammo, healing items, and materials (wood, brick, metal); a shrinking 'storm' circle forces players toward each other until only one player (Solo), duo, trio, or squad of four remains. Fortnite's signature mechanic is real-time construction: players harvest materials and build walls, ramps, and forts as combat cover — a skill ceiling unique among shooters. Since launch, Fortnite has attracted 400+ million registered users, hosted in-game concerts (Marshmello 10 M+ concurrent, Travis Scott 27 M+, Ariana Grande), collaborations (Marvel, DC, Star Wars, LEGO), and evolved into a metaverse platform (LEGO Fortnite, Rocket Racing, Fortnite Festival). The Fortnite World Cup 2019 awarded $30 M in prizes; 16-year-old Kyle 'Bugha' Giersdorf won Solo for $3 M.",

  category: "video-games",
  subCategory: "battle royale / shooter / building",
  sportType: "mixed",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "USA (Epic Games, Cary NC)",
  estimatedOrigin: "Save the World launched July 2017; Battle Royale launched free September 26, 2017",

  players: { min: 1, max: 100, note: "Solo (1), Duo (2), Trio (3), or Squad (4); max 100 players per match." },
  field: {
    surfaceName: "Fortnite island (map)",
    dimensions: "Approximately 5.4 × 5.4 km game map; shrinks progressively during match.",
    description: "Colourful low-poly cartoon-style island with 20+ named locations (POIs). Terrain includes forests, cities, deserts, and biome variety updated each season. A shrinking 'storm' circle deals escalating damage outside its safe zone, funnelling players together.",
  },
  equipment: [
    { name: "Weapons (5 rarities)", description: "Common (grey), Uncommon (green), Rare (blue), Epic (purple), Legendary (gold) tiers of assault rifles, shotguns, SMGs, pistols, snipers, bows, and heavy weapons." },
    { name: "Building materials", description: "Wood (fast, 90 HP), Brick (medium, 150 HP), Metal (slow, 300 HP). Harvested from environment with a Harvesting Tool." },
    { name: "Harvesting Tool (Pickaxe)", description: "Melee weapon and resource harvester; every player starts with one, cosmetically customisable." },
    { name: "Healing items", description: "Medkits (75 HP), Bandages (15 HP), Shield Potions (25/50 shield HP), Chug Jugs (full heal + shield)." },
    { name: "V-Bucks", description: "In-game premium currency for buying cosmetics (skins, emotes) from the Item Shop. Battle Pass gives V-Bucks and cosmetics for ~$10." },
  ],
  duration: {
    approximateMinutes: 20,
    structure: "Battle Royale match: 15-25 min from bus jump to victory (or death); professional tournament games can be up to 30 min with slower storm circles.",
    note: "FNCS (Fortnite Champion Series) sessions: 3-4 hours across 6-10 matches for cumulative point scoring.",
  },
  objective: "Be the last player (Solo), duo, trio, or squad alive on the island. In tournaments, accumulate the most points across a session (elimination + placement points).",
  matchStructure:
    "100 players ride the Battle Bus across the island and choose where to parachute-drop. Land, loot from chests and floor spawns, and gather materials by breaking objects. A shrinking storm circle appears after ~2 minutes; damage increases as it closes. Players must move into the safe zone. Combat is a mix of gunfights and building — spectators build walls, ramps, and forts in real time. Match ends when only one player/team remains (Victory Royale).",

  basicRules: [
    { title: "Drop and loot", body: "Parachute from the Battle Bus and land in a chosen POI. Open chests, find floor loot, and stock up on weapons, ammo, mats, and heals." },
    { title: "Build to survive", body: "Harvest materials (wood, brick, metal) with your pickaxe. Build walls, ramps, and forts as instant cover in fights." },
    { title: "Storm damage", body: "Outside the storm circle, take 1-10 HP damage per tick. Stay inside the safe zone to survive." },
    { title: "Elimination", body: "Reduce enemy HP to 0. In squads, you're 'knocked' first (crawling) — teammates can revive you." },
    { title: "Victory Royale", body: "Be the last player (or squad) alive. Screen displays 'Victory Royale!' banner." },
  ],
  advancedRules: [
    { title: "Building meta", body: "Wall, ramp, floor, cone (roof) are the four basic pieces. Elite players build 90° walls, floors, and pyramids in <1 sec sequences ('90s')." },
    { title: "Editing", body: "Cut windows or doors in walls to shoot through with keyboard/controller edit shortcuts. Instant edits are a hallmark of high-skill play." },
    { title: "Zero Build mode (Nov 2022+)", body: "A separate mode with NO building — no walls, ramps, or forts. Focuses purely on gunplay and cover. Appeals to non-builders." },
    { title: "Storm surge damage", body: "If too many players are in the lobby for the current storm phase, everyone takes bonus damage until enough are eliminated — forces action." },
    { title: "Season and Chapter changes", body: "Every ~3 months the map, weapons, and mechanics rotate. Each 'Chapter' is a major redesign of the island and progression." },
    { title: "Tournament format (FNCS)", body: "Cash Cups qualify players; FNCS Grand Finals feature top duos/trios in point-based multi-match sessions." },
  ],
  scoring: {
    summary: "Casual: last player/team alive wins. Tournaments: cumulative points from placement + eliminations across a session.",
    breakdown: [
      { action: "Victory Royale (competitive)", points: "60 points (FNCS 2024)" },
      { action: "Placements 2-10", points: "sliding scale (45-3 pts)" },
      { action: "Each elimination", points: "1-2 pts (varies by season)" },
      { action: "Session total", points: "sum across 6-10 matches" },
      { action: "Storm damage", points: "Not scoring but restricts play area" },
    ],
    winCondition: "Casual: last squad standing. Tournament: highest session point total advances.",
  },

  officiating: {
    officials: ["Epic Games Competitive Team", "In-Game Anti-Cheat (Easy Anti-Cheat)", "Live Broadcast Referees (LAN events)"],
    summary: "Online tournaments are automated; Epic reviews VOD for cheating (aimbot, wallhack) and stream sniping. LAN events (FNCS Majors) have on-site referees.",
  },
  governingBodies: [
    { name: "Epic Games (developer/publisher/tournament organiser)", founded: 1991, headquarters: "Cary, USA", website: "https://www.epicgames.com/" },
  ],
  majorCompetitions: [
    { name: "Fortnite World Cup", frequency: "one-off (2019); returning 2024+", founded: 2019, region: "worldwide (Solo & Duo)" },
    { name: "FNCS (Fortnite Champion Series)", frequency: "seasonal (multiple per year)", founded: 2019, region: "regional finals worldwide" },
    { name: "Cash Cups", frequency: "weekly", founded: 2020, region: "regional" },
    { name: "DreamHack Fortnite", frequency: "multiple per year", region: "USA / Europe" },
  ],
  countriesPlayed: ["US", "GB", "FR", "DE", "BR", "CA", "AU", "JP", "KR", "MX", "IT", "ES", "AR", "SE", "PL"],
  famousAthletes: [
    "Kyle 'Bugha' Giersdorf (USA) — 2019 World Cup Solo Champion ($3M)",
    "Ninja (Tyler Blevins, USA) — most-followed Fortnite streamer at peak; drove mainstream popularity",
    "Aqua & Nyhrox — 2019 World Cup Duo Champions ($3M split)",
    "Mongraal (Kyle Jackson, UK) — long-time competitive pro, top-tier building",
    "Benjyfishy (Benjy Fish, UK) — 2019 World Cup Solo 3rd; multi-time FNCS finalist",
    "Clix (Cody Conrod, USA) — Twitch superstar and FNCS pro",
    "TaySon (Slovenia) — 2× FNCS World Cup winner",
    "Wave & Peterbot (USA) — 2024 FNCS Global Championship winners",
  ],
  records: [
    { title: "Largest Fortnite prize pool", holder: "Fortnite World Cup 2019", value: "$30 million total", year: 2019 },
    { title: "Biggest single Fortnite prize", holder: "Bugha (Kyle Giersdorf)", value: "$3 million (World Cup Solo)", year: 2019 },
    { title: "Peak concurrent players (concert)", holder: "Travis Scott 'Astronomical' event", value: "27.7 million concurrent viewers", year: 2020 },
    { title: "Total registered players", holder: "Epic Games disclosure", value: "500+ million (2023)", year: 2023 },
    { title: "Ninja peak Twitch subscribers", holder: "Ninja", value: "269,000+ concurrent subs (2018)", year: 2018 },
  ],

  variants: ["fortnite-battle-royale", "fortnite-zero-build", "fortnite-save-the-world", "fortnite-creative", "lego-fortnite", "rocket-racing", "fortnite-festival"],
  relatedSports: ["apex-legends", "pubg", "call-of-duty-warzone", "roblox", "minecraft"],

  skills: [
    "building and editing at speed",
    "aim and tracking",
    "map awareness and rotation",
    "loot prioritisation",
    "communication (squads)",
    "game-sense and inventory management",
    "mechanical execution under pressure",
  ],
  strategies: [
    { title: "Hot drop vs safe drop", body: "Hot drops (Tilted, high-loot POIs) give fast fights and gear but high early-game deaths. Safe drops (edge POIs) give more time to loot but slower to endgame position." },
    { title: "High ground advantage", body: "Building above opponents forces them to look up (harder aim) and gives you shooting angles down onto them." },
    { title: "Materials management", body: "Keep 500+ mats of each type. Wood is cheap and fast but weakest; brick and metal upgrade over time to full health." },
    { title: "Storm surge play", body: "In pro matches, take fights early to hit surge elim requirements — avoids surge damage in mid-game." },
    { title: "Endgame positioning", body: "In final 30 players, prioritise high ground and clean rotations over kills; every match placement point matters." },
  ],

  terminology: [
    { term: "POI (Point of Interest)", meaning: "Named location on the map (Tilted Towers, Retail Row, etc.)." },
    { term: "Victory Royale", meaning: "Winning a match by being the last squad standing." },
    { term: "Storm", meaning: "The shrinking damaging circle that funnels players together." },
    { term: "Mats (materials)", meaning: "Wood, brick, metal harvested from the environment for building." },
    { term: "Build fight", meaning: "Combat exchange dominated by rapid building and editing." },
    { term: "90s / 90 turbo", meaning: "Vertical building technique — placing 4 walls in 90° turns while ramping up." },
    { term: "Cranking", meaning: "Building upward as fast as possible with wall+ramp+floor combos." },
    { term: "Edit", meaning: "Modifying an existing structure piece — cutting a door, window, or angled edit." },
    { term: "Rotate", meaning: "Moving from one part of the map to another as the storm closes." },
    { term: "Third-party", meaning: "Attacking two fighting players/teams while they're distracted; opportunistic entry." },
    { term: "Bot", meaning: "AI-controlled dummy opponent added in low-lobbies to help new players." },
    { term: "Shield", meaning: "Additional 100 HP layer from Shield Potions (25/50) or Chug Jugs; recharged separately from health." },
    { term: "Loadout", meaning: "The 5 inventory slots for weapons + heals a player carries." },
    { term: "Squad wipe", meaning: "Eliminating all members of a team." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Start in Zero Build mode", body: "Removes building complexity so you can learn positioning, gunplay, and map layout first." },
      { title: "Land at edge POIs", body: "Choose calmer landing spots to survive longer and gather resources without early fights." },
      { title: "Learn 5-10 weapons well", body: "Focus on assault rifles, shotguns, and SMGs — the everyday tools of Fortnite combat." },
      { title: "Movement basics", body: "Sprint, slide, mantle, and swim; movement recharges through Superhero-style Chapter mechanics." },
    ] },
    { level: "intermediate", steps: [
      { title: "Basic building", body: "Wall, ramp, floor, cone (roof). Practice ramp-rush and box-fight scenarios in Creative mode." },
      { title: "Edit shortcuts", body: "Bind edit and reset edit to easily-reachable keys/buttons; practise cutting doors/windows in Creative maps." },
      { title: "Loadout theory", body: "Balance loadout: 1 shotgun, 1 assault rifle, 1 SMG/sniper, 1 mobility item, 1 heals stack." },
      { title: "Rotation and healing", body: "Learn when to disengage, heal to full shield/HP, and reposition before next storm phase." },
    ] },
    { level: "advanced", steps: [
      { title: "Advanced building (90s, tunnelling)", body: "Learn 90° vertical builds, box fighting, and pyramid retakes for build-mode play." },
      { title: "Cash Cup competition", body: "Enter weekly Cash Cups; qualify for FNCS via the Champions arena and tournament ladders." },
      { title: "VOD review", body: "Watch professional streamers/pros (Bugha, TaySon, Peterbot) and review your own gameplay for mistakes." },
      { title: "Ping/setup optimisation", body: "Sub-30 ms latency, 240 Hz+ monitor, mechanical keyboard and gaming mouse — significant edge at top level." },
    ] },
  ],
  faq: [
    { question: "Is Fortnite still popular in 2026?", answer: "Yes — Fortnite averaged 100+ million monthly active users through 2024-25 and hosted massive in-game concerts (Big Bang, Metallica) and metaverse experiences (LEGO Fortnite, Rocket Racing, Fortnite Festival)." },
    { question: "How much did the Fortnite World Cup pay out?", answer: "$30 million total across all events. Solo winner Bugha received $3 million; Duo pair Aqua & Nyhrox split $3 million." },
    { question: "What's the difference between Battle Royale and Zero Build?", answer: "Battle Royale (original mode) allows harvesting and building walls/ramps/floors for cover. Zero Build (Nov 2022+) removes all building — pure gunplay and natural cover." },
    { question: "Is Fortnite free-to-play?", answer: "Yes — the game and all game modes are free. Revenue comes from cosmetic skins, emotes, and the Battle Pass (~$10 per season)." },
    { question: "Which console/PC is best for Fortnite competitive?", answer: "PC has always been the competitive standard (higher FPS, aim precision, edit speed). Cross-play is supported but pro competitions separate PC and console/mobile pools." },
    { question: "Who developed Fortnite?", answer: "Epic Games (Cary, North Carolina, USA), founded by Tim Sweeney in 1991. Fortnite runs on Epic's own Unreal Engine 5." },
  ],

  wikipediaTitle: "Fortnite Battle Royale",
  sources: [
    { label: "Wikipedia — Fortnite Battle Royale", url: "https://en.wikipedia.org/wiki/Fortnite_Battle_Royale", publisher: "Wikipedia" },
    { label: "Epic Games — Fortnite official", url: "https://www.fortnite.com/", publisher: "Epic Games" },
    { label: "Fortnite Competitive rules", url: "https://www.fortnite.com/competitive", publisher: "Epic Games" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

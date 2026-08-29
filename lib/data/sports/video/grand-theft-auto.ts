import type { Sport } from "@/lib/types";

export const grandTheftAuto: Sport = {
  id: "grand-theft-auto",
  slug: "grand-theft-auto",
  name: "Grand Theft Auto",
  officialName: "Grand Theft Auto (series)",
  aliases: ["GTA", "GTA V", "GTA VI", "GTA Online"],
  shortDescription:
    "Rockstar Games' genre-defining open-world crime series — steal cars, complete heists, and cause mayhem in satirical, hyper-detailed cities modeled on the modern USA.",
  longDescription:
    "Grand Theft Auto launched in 1997 as a top-down PC game by DMA Design (later Rockstar North). GTA III (2001) reinvented the series in 3D open-world with cinematic storytelling. GTA V (2013) is the best-selling entertainment product of all time (200+ million copies), and GTA Online is a $1 B/year live service. GTA VI arrives 2026 with Vice City as the setting. The series is culturally seismic — spawning speedrun communities, roleplay servers (NoPixel), heist strategies, and endless mod scenes.",

  category: "video-games",
  subCategory: "open-world action-adventure crime sandbox",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "Edinburgh, Scotland (Rockstar North; parent Rockstar Games in New York)",
  estimatedOrigin: "First GTA released October 1997; GTA V released September 2013; GTA VI scheduled 2026",

  players: { min: 1, max: 30, note: "Single-player campaigns; GTA Online up to 30-player public lobbies + heists." },
  field: {
    surfaceName: "Open-world map",
    dimensions: "Los Santos ~127 km² (GTA V); Vice City larger (GTA VI)",
    description: "Persistent open world with cities, countryside, ocean, and airspace." },
  equipment: [
    { name: "Gaming PC / console", description: "PC (Steam, Epic, Rockstar Launcher), PS5/PS4, Xbox Series X|S/One." },
    { name: "Controller or M+KB", description: "Both supported; M+KB advantage in shootouts, controller for driving." },
    { name: "Headset", description: "Required for GTA Online voice + roleplay servers." },
  ],
  duration: {
    approximateMinutes: 5000,
    structure: "GTA V main story: 30-35 hours. Full 100%: 80+ hours. GTA Online: infinite — thousands of hours common." },

  objective:
    "Complete story missions to progress the narrative. In GTA Online: build your criminal empire via heists, businesses, and PvP.",
  matchStructure:
    "Story missions unlocked linearly; open world explorable freely between missions. GTA Online sessions in Public/Invite/Solo lobbies with heist queue.",

  basicRules: [
    { title: "Wanted level", body: "Crimes trigger 1-5 star police response; hide in Pay 'n' Spray or wait out to clear." },
    { title: "Missions", body: "Cutscene → objective (drive/shoot/steal) → completion screen with gold/silver/bronze rating." },
    { title: "Money", body: "Earned via missions, robberies, businesses (Online). Spend on cars, guns, properties, ammo." },
    { title: "Character skills", body: "Driving, Shooting, Stealth, Strength, Stamina level with use (V + Online)." },
    { title: "Health/Armor", body: "Health regenerates to 50%; armor purchasable at Ammu-Nation." },
  ],
  advancedRules: [
    { title: "Heists (Online)", body: "Cooperative 2-4 player multi-mission sequences — Cayo Perico, Diamond Casino, Doomsday Heist." },
    { title: "MC + CEO organizations", body: "Register as CEO/MC president for special work + associate payouts." },
    { title: "Nightclubs", body: "Passive money generator; hire managers to run cargo warehouses." },
    { title: "Snacks + Body Armor", body: "Inventory items to survive combat; carry max 15 armors + snack heals." },
  ],
  scoring: {
    summary: "Speedrun leaderboards (Any%, 100%). GTA Online has no formal score — rank + money are the goals.",
    winCondition: "Speedrun: fastest completion. GTA Online: highest RP rank + net worth.",
    breakdown: [
      { action: "Mission gold rating", points: "$$$ + 100% completion" },
      { action: "Heist finale", points: "$500K–$2M take" },
    ],
  },

  officiating: {
    officials: ["speedrun.com moderators", "Rockstar Support"],
    summary: "Speedrun.com moderates single-player runs; Rockstar bans hackers in GTA Online.",
  },

  governingBodies: [
    { name: "Rockstar Games (developer)", founded: 1998, headquarters: "New York, USA", website: "https://rockstargames.com" },
    { name: "Take-Two Interactive (publisher)", founded: 1993, headquarters: "New York, USA", website: "https://take2games.com" },
  ],
  majorCompetitions: [
    { name: "Rockstar Games Social Club Events", frequency: "monthly", founded: 2008, region: "GTA Online" },
    { name: "SummerGames Done Quick (SGDQ) GTA V run", frequency: "annual", founded: 2015, region: "streamed" },
    { name: "NoPixel roleplay auditions", frequency: "year-round", founded: 2016, region: "streamed roleplay server" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "BR", "MX", "PL", "TR", "IN", "AU"],
  famousAthletes: [
    "DarkViperAU (AU, GTA V speedrun WR holder)",
    "PolarFTW (US, GTA V speedrunner)",
    "PENTA (US, NoPixel roleplayer)",
    "xQc (CA, GTA RP streamer)",
    "Tyler1 (US, GTA RP)",
  ],
  records: [
    { title: "GTA V Any% WR", holder: "DarkViperAU", value: "5h 41m 34s (2024)", year: 2024 },
    { title: "GTA V best-selling entertainment product", holder: "Rockstar Games", value: "200+ million copies", year: 2024 },
    { title: "GTA Online annual revenue", holder: "Rockstar Games", value: "$1B+ per year (peak 2022)", year: 2022 },
  ],

  variants: ["gta-v", "gta-vi", "gta-online", "gta-san-andreas", "gta-vice-city", "gta-iv"],
  relatedSports: ["red-dead-redemption", "saints-row", "watch-dogs", "mafia"],

  skills: [
    "vehicle handling + drift control",
    "aim + weapon-swap accuracy",
    "route optimization for heists",
    "map memorization",
    "roleplay improv (NoPixel)",
  ],
  strategies: [
    { title: "Grind Cayo Perico solo", body: "Elite finish + hard mode gives $1.5M+ per 90-min run — best solo money in GTA Online." },
    { title: "Fast-travel via helicopter", body: "Own a Sparrow + Kosatka: fastest map traversal in GTA Online." },
    { title: "Speedrun manual save", body: "Save between missions to preserve run splits; mission failure only reverts to last save." },
    { title: "Roleplay whitelist", body: "Apply for NoPixel/other whitelisted RP servers — original character required." },
  ],

  terminology: [
    { term: "Wanted level (stars)", meaning: "Police attention scale (1-5 stars); 5 stars = FBI + helicopters." },
    { term: "Cayo Perico", meaning: "GTA Online island heist location; primary solo money source." },
    { term: "K/D", meaning: "Kill/death ratio in Freemode PvP." },
    { term: "RP", meaning: "Roleplay — third-party FiveM servers with rules for in-character play." },
    { term: "Shark Card", meaning: "Rockstar's in-game currency microtransaction." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play GTA V story mode", body: "30-40 hours; teaches all mechanics + world layout." },
        { title: "Try GTA Online tutorial", body: "Start the tutorial mission from Lester; unlocks the world." },
        { title: "Buy a Kosatka + Cayo Perico", body: "First major purchase (~$2M in-game); unlocks solo heist grinding." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Optimize Cayo Perico runs", body: "Learn scope + primary loot routes; sub-90-min solo runs possible." },
        { title: "Enter competitive races", body: "Rockstar Playlists + community leagues offer weekly race circuits." },
        { title: "Speedrun the story", body: "Sub-6-hour Any% requires memorizing every mission skip." },
      ],
    },
  ],

  faq: [
    { question: "Do I need to play GTA V before VI?", answer: "No — the stories are unconnected. GTA VI has all-new characters in Vice City." },
    { question: "Is GTA Online worth playing solo?", answer: "Yes — Cayo Perico + Kosatka enable strong solo money-making. Public lobbies are optional." },
    { question: "What's NoPixel?", answer: "The premier whitelisted GTA V roleplay server (via FiveM mod). Requires application + character backstory." },
    { question: "Will GTA VI come to PC?", answer: "Console launch first (PS5, Xbox Series) 2026; PC port likely 6-12 months later per Rockstar tradition." },
  ],

  sources: [
    { label: "Wikipedia — Grand Theft Auto", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto", publisher: "Wikipedia" },
    { label: "Rockstar Games official", url: "https://rockstargames.com/V", publisher: "Rockstar" },
    { label: "GTA speedrun.com", url: "https://www.speedrun.com/gtav", publisher: "speedrun.com" },
  ],
  wikipediaTitle: "Grand Theft Auto",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

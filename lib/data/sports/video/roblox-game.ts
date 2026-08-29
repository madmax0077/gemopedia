import type { Sport } from "@/lib/types";

export const robloxGame: Sport = {
  id: "roblox-game",
  slug: "roblox-game",
  name: "Roblox",
  officialName: "Roblox",
  aliases: ["ROBLOX"],
  shortDescription:
    "The world's largest user-generated game platform — 200 M+ monthly players create and play billions of experiences using Roblox Studio and Lua scripting.",
  longDescription:
    "Roblox launched in 2006 as a physics sandbox with a built-in Lua scripting engine (Luau). Today it hosts a $50 B/year creator economy where 90% of content is user-made. Its avatar-based, cross-platform (PC, mobile, VR, console) design makes it the most popular game platform for 8-16 year olds globally. Featured experiences include Adopt Me!, Blox Fruits, Grow a Garden, Dress to Impress, and Doors — each with hundreds of thousands of concurrent players. Roblox is a training ground for future game developers and has spawned a competitive esports scene (RDC — Roblox Developers Conference + Bloxy Awards).",

  category: "video-games",
  subCategory: "user-generated content (UGC) game platform + Lua scripting engine",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "San Mateo, California (Roblox Corporation, David Baszucki + Erik Cassel)",
  estimatedOrigin: "Released September 1, 2006; Roblox Studio (creator tool) launched simultaneously; Luau scripting engine 2019",

  players: { min: 1, max: 700, note: "Solo experiences to 700-player Battle Royale games; server sizes configurable." },
  field: {
    surfaceName: "Experience (game)",
    dimensions: "Studio place size up to 2048×2048 studs (16 km²)",
    description: "3D voxel-like world built in Roblox Studio; physics-based interactions." },
  equipment: [
    { name: "Any device", description: "PC (Windows/Mac), iOS/Android, Xbox One+, Meta Quest VR — full cross-play." },
    { name: "Roblox account", description: "Free; Robux (in-game currency) purchased separately." },
    { name: "Roblox Studio (creator)", description: "Free desktop tool for building experiences." },
  ],
  duration: {
    approximateMinutes: 20,
    structure: "Individual experiences: 5-60 minutes per session. Persistent MMO-style games: hundreds of hours." },

  objective:
    "Varies by experience — obby (obstacle course), tycoon, MMO grinder, roleplay, or PvP. Universal meta-objective: earn Robux, level up avatar.",
  matchStructure:
    "Each experience is a discrete game with its own rules, lobby, and match structure. Discovery via search, trending, or friends' recent activity.",

  basicRules: [
    { title: "Avatar customization", body: "Buy or equip clothing, hats, faces, gear via the Marketplace (Robux)." },
    { title: "Join experience", body: "Browse or search; click Play — joins available server or spawns a new one." },
    { title: "Robux economy", body: "Robux earned from experiences (Developer Exchange) or purchased ($1 ≈ 80 Robux)." },
    { title: "Friends + parties", body: "Add friends; party-up to auto-join same server." },
    { title: "Report + moderation", body: "Report inappropriate behavior; Roblox Trust & Safety reviews reports." },
  ],
  advancedRules: [
    { title: "Group + Community", body: "Create/join Groups (formerly Clans); can own experiences, share Robux payouts." },
    { title: "Premium subscription", body: "$4.99-$19.99/month for monthly Robux stipend + trading + premium payouts." },
    { title: "Developer Exchange (DevEx)", body: "Convert 100K+ earned Robux back to USD (currently ~$350/100K)." },
    { title: "UGC Items", body: "Approved creators can sell custom hats, faces, and 3D items on Marketplace." },
  ],
  scoring: {
    summary: "No universal score — each experience has its own leaderboards. Overall progression measured by avatar/Robux level.",
    winCondition: "Depends on experience: reach the end of the obby, kill the boss, accumulate the most cash, etc.",
    breakdown: [
      { action: "Experience-specific score", points: "Varies" },
      { action: "Global Robux earnings", points: "Cash-out via DevEx" },
    ],
  },

  officiating: {
    officials: ["Roblox Trust & Safety moderators"],
    summary: "Roblox employs 3000+ moderators + AI systems to enforce community standards; individual experience developers set their own rules.",
  },

  governingBodies: [
    { name: "Roblox Corporation (RBLX on NYSE)", founded: 2004, headquarters: "San Mateo, California, USA", website: "https://roblox.com" },
  ],
  majorCompetitions: [
    { name: "Bloxy Awards", frequency: "annual", founded: 2013, region: "streamed" },
    { name: "Roblox Developers Conference (RDC)", frequency: "annual", founded: 2013, region: "San Francisco" },
    { name: "Roblox Innovation Awards", frequency: "annual", founded: 2022, region: "in-experience voting" },
  ],
  countriesPlayed: ["US", "GB", "BR", "MX", "PH", "ID", "TR", "RU", "DE", "FR", "IN", "TH", "JP"],
  famousAthletes: [
    "Flamingo/AlbertsStuff (US, top Roblox YouTuber)",
    "Denis Roblox (US, family-friendly creator)",
    "Adopt Me! (Uplift Games) creators",
    "TypicalModders (Grow a Garden creators)",
    "AlvinBlox (AU, education YouTuber)",
  ],
  records: [
    { title: "Most concurrent players (single experience)", holder: "Grow a Garden", value: "20.4 M concurrent (June 2025)", year: 2025 },
    { title: "Highest developer earnings (annual)", holder: "Uplift Games (Adopt Me!)", value: "$100M+", year: 2023 },
    { title: "Most experience visits", holder: "MeepCity + Adopt Me!", value: "50 B+ each", year: 2024 },
  ],

  variants: ["adopt-me", "blox-fruits", "grow-a-garden", "doors", "dress-to-impress"],
  relatedSports: ["minecraft", "fortnite-creative", "core-game", "manticore"],

  skills: [
    "Lua/Luau scripting (creator side)",
    "3D modeling in Studio",
    "game-design + monetization strategy",
    "avatar fashion + trading",
    "player skills vary per experience",
  ],
  strategies: [
    { title: "Grind popular experiences", body: "Blox Fruits + Grow a Garden reward daily engagement with rare items." },
    { title: "Play with a Premium account", body: "Extra Robux + Premium Payouts + free trading unlocked." },
    { title: "Learn Studio to sell experiences", body: "The top 1% of Roblox devs earn $1M+ annually." },
    { title: "Trade limited items", body: "Roblox's limited-item market lets you flip UGC items for Robux profit." },
  ],

  terminology: [
    { term: "Experience", meaning: "Roblox term for a game/place; each is a discrete world." },
    { term: "Robux", meaning: "In-game currency; used to buy items and enter premium experiences." },
    { term: "DevEx", meaning: "Developer Exchange — convert Robux to USD (min 100K Robux)." },
    { term: "Obby", meaning: "Obstacle course experience genre; iconic Roblox category." },
    { term: "Beaming", meaning: "Scam/phishing attack that steals limited items from users." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play featured experiences", body: "Start with Blox Fruits, Adopt Me!, or Grow a Garden — the current top-3." },
        { title: "Customize your avatar", body: "Free items in the Marketplace + basic clothing under 50 Robux." },
        { title: "Add friends + join a group", body: "Roblox is more fun with friends; join a group for shared experiences." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Learn Luau scripting", body: "Roblox's Luau (based on Lua 5.1) — free tutorials at create.roblox.com/docs." },
        { title: "Publish your first experience", body: "Follow the 'Getting Started with Studio' guide; publish free on your profile." },
        { title: "Monetize + join Premium Payouts", body: "Add gamepasses, developer products, and 100+ player servers to earn Robux." },
      ],
    },
  ],

  faq: [
    { question: "Is Roblox free?", answer: "Yes — free to play across all platforms. Robux purchases are optional; many experiences are fully free." },
    { question: "Is Roblox safe for kids?", answer: "Age-appropriate with parental controls; issues persist with unmoderated player interactions. Set the account to under-13 for strict chat filtering." },
    { question: "Can I make money on Roblox?", answer: "Yes — top developers earn $1M+/year via DevEx. Most earn nothing; only a few hundred creators earn full-time income." },
    { question: "What's the best experience to start with?", answer: "Grow a Garden (relaxing farming), Blox Fruits (One Piece MMO), or Adopt Me! (pet trading) — the current top-3." },
  ],

  sources: [
    { label: "Wikipedia — Roblox", url: "https://en.wikipedia.org/wiki/Roblox", publisher: "Wikipedia" },
    { label: "Roblox Developer Hub", url: "https://create.roblox.com/docs", publisher: "Roblox Corp" },
    { label: "Roblox Trends (Rolimon's)", url: "https://www.rolimons.com", publisher: "Rolimon's" },
  ],
  wikipediaTitle: "Roblox",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

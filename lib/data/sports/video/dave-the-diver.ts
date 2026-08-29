import type { Sport } from "@/lib/types";

export const daveTheDiver: Sport = {
  id: "dave-the-diver",
  slug: "dave-the-diver",
  name: "Dave the Diver",
  officialName: "Dave the Diver",
  aliases: ["デイヴ・ザ・ダイバー"],
  shortDescription:
    "MintRocket + Nexon indie-hybrid daytime-diving + nighttime sushi-restaurant management game (Jun 28, 2023 PC, Oct 26, 2023 Switch, 2024 PS4/PS5) — pixel-art harpoon diving, fish-catching, running Bancho's Sushi. 4M+ units first year; The Game Awards 2023 Best Indie winner.",
  longDescription:
    "Dave the Diver is a hybrid single-player game developed by South Korean studio MintRocket (Nexon subsidiary) — released June 28, 2023 for PC (Steam), Oct 26, 2023 for Nintendo Switch, and 2024 for PS4/PS5. Genre-blending: daytime diving simulator (spear/harpoon underwater fish-hunting in the mysterious Blue Hole) + nighttime restaurant-management sim (running Bancho's Sushi restaurant, serving fish caught during dives). Player is 'Dave', chubby diving veteran roped into helping his eccentric friend Cobra Bancho run a mysterious sushi restaurant near an unusual dive site — the ever-changing Blue Hole. Distinctive pixel-art visuals (throwback SNES aesthetic), 300+ fish species to catch, dozens of sushi recipes to master, boss battles against sea creatures (Great White Shark, Kraken, Mola Mola), mini-games (staff-training rhythm game, fish-farming, weapon crafting). Deep story with plot twists involving underwater civilisations, dragon quests, cooking competitions. 4M+ units sold within first year of release; won 'Best Indie Game' at The Game Awards 2023 + 'Best Casual Game' + numerous other awards. Frequent free content updates including Godzilla collaboration + Dredge crossover.",
  category: "video-games",
  subCategory: "hybrid adventure / sim / management",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "major",
  countryOfOrigin: "KR",
  regionOfOrigin: "South Korea (MintRocket / Nexon)",
  estimatedOrigin: "Released Jun 28, 2023 (PC); Switch Oct 26, 2023; PS4/PS5 2024",
  players: { min: 1, max: 1, note: "Single-player only." },
  equipment: [
    { name: "PC (Steam), Switch, PS4/PS5", description: "Multi-platform. Also available on iOS/Android since 2024." },
    { name: "Standard controller or M+KB", description: "Full controller support; mouse works for restaurant management + M+KB for aiming underwater." },
  ],
  duration: { approximateMinutes: 30, structure: "One day-cycle = ~15-30 min (dive + restaurant); main story ~30-40 hrs; 100% ~60-80 hrs." },
  objective: "Catch fish in the Blue Hole, serve sushi at Bancho's, uncover the mystery of the Blue Hole + underwater civilisations, complete recipe collection + weapon tree.",
  matchStructure: "Single-player day-cycle loop: 2 dive slots (morning + afternoon) + 1 restaurant service (evening). Story missions + boss battles interspersed.",
  basicRules: [
    { title: "Day = Diving; Night = Restaurant", body: "Each in-game day has 2 dive slots for fish-hunting, then evening restaurant service." },
    { title: "Air + Weight limits per dive", body: "Air depletes over dive time + upon damage; weight limits how many fish/materials you can surface with." },
    { title: "Weapon variety", body: "Harpoons, guns, spear guns, tranquilliser, nets — different fish need different weapons for max quality." },
  ],
  advancedRules: [
    { title: "Restaurant staffing + upgrades", body: "Hire chefs/servers/cleaners; each has stats + special skills; upgrade restaurant seats, kitchen, decor." },
    { title: "Fish farming + Sea People trade", body: "Set up fish farm; trade with Sea People underwater civilisation for rare recipes + weapons." },
    { title: "Boss battle patterns", body: "Great White Shark, Kraken, Mola Mola have specific attack patterns + weakness windows." },
  ],
  scoring: {
    summary: "Restaurant revenue + fish collection completion + story chapter progression.",
    winCondition: "Complete main story (~10 chapters). 100% = 300+ fish caught, all recipes, all weapon crafts, all sea creatures scanned.",
    breakdown: [{ action: "Fish caught (better quality = better sushi = more revenue)", points: "Restaurant earnings" }],
  },
  penalties: [
    { title: "Dive death (air out / damage)", body: "Rescued to surface; lose all fish caught that dive." },
    { title: "Failed restaurant service", body: "Lower daily revenue; disgruntled customers reduce restaurant rating." },
  ],
  positions: [{ name: "Dave (diver-chef protagonist)", role: "Sole playable — dives underwater + manages restaurant.", count: 1 }],
  officiating: { officials: ["Speedrun.com moderators"], summary: "Single-player only." },
  governingBodies: [
    { name: "MintRocket (Nexon subsidiary)", founded: 2022, headquarters: "Seongnam, South Korea" },
    { name: "Nexon Group", founded: 1994, headquarters: "Tokyo, Japan (parent) / Seongnam, South Korea" },
  ],
  majorCompetitions: [
    { name: "The Game Awards 2023 Best Indie Game", frequency: "annual", founded: 2014, region: "global" },
    { name: "Speedrun.com Dave the Diver leaderboards", frequency: "ongoing", founded: 2023, region: "global (community)" },
  ],
  countriesPlayed: ["KR", "JP", "US", "GB", "DE", "FR", "CN", "TW", "BR"],
  famousAthletes: ["Jaeho Hwang (game director, MintRocket)"],
  records: [
    { title: "4M+ units first year", holder: "MintRocket / Nexon", value: "4 million+ units sold within first year across all platforms", year: 2024 },
    { title: "TGA 2023 Best Indie Game", holder: "MintRocket", value: "Won Best Independent Game at The Game Awards 2023", year: 2023 },
    { title: "Highest-selling Nexon self-published indie", holder: "MintRocket", value: "MintRocket's debut game became Nexon's highest-selling indie release", year: 2023 },
  ],
  variants: ["dave-the-diver-standard", "dave-the-diver-anniversary-edition"],
  relatedSports: ["stardew-valley", "spiritfarer", "moonlighter", "dredge"],
  skills: ["underwater aiming", "resource + air management", "restaurant management sim", "recipe crafting"],
  strategies: [
    { title: "Fish quality > quantity", body: "Sniper-headshot fish for gold-quality catches — higher restaurant revenue than mass low-quality catches." },
    { title: "Restaurant staff synergy", body: "Match chef skills (Speed, Sushi Skill, Special Recipe) to daily menu; hire cleaners to prevent floor-cleaning downtime." },
    { title: "Sea People trade priority", body: "Prioritise Sea People trade for rare cooking pot recipes + unique weapons that trivialise later bosses." },
  ],
  terminology: [
    { term: "Blue Hole", meaning: "Mysterious ever-changing dive site with unique biome + civilisations" },
    { term: "Bancho", meaning: "The eccentric sushi-master owner of the restaurant" },
    { term: "Sea People", meaning: "Underwater civilisation traders" },
    { term: "Cooksta", meaning: "In-game Instagram-like restaurant rating platform" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "First 3 in-game days", body: "Learn dive controls + restaurant serving basics." }] },
    { level: "intermediate", steps: [{ title: "Mid-game (Ch 3-6)", body: "Upgrade restaurant + weapon tree; complete Sea People story arc." }] },
    { level: "advanced", steps: [{ title: "100% + all DLC + Godzilla event", body: "Complete all 300+ fish + all recipes + Godzilla + Dredge crossovers." }] },
  ],
  faq: [
    { question: "Is Dave the Diver a roguelike?", answer: "Not really — dives reset visual layout of the Blue Hole but progress + inventory persist across days. Death only costs one dive's catch." },
    { question: "How long is Dave the Diver?", answer: "Main story ~30-40 hours; 100% completion including all Cooksta ratings, fish, recipes, weapons ~60-80 hours; regular free content updates add more." },
  ],
  wikipediaTitle: "Dave the Diver",
  sources: [{ label: "Wikipedia — Dave the Diver", url: "https://en.wikipedia.org/wiki/Dave_the_Diver", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default daveTheDiver;

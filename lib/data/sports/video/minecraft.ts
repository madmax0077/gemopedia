import type { Sport } from "@/lib/types";

export const minecraft: Sport = {
  id: "minecraft",
  slug: "minecraft",
  name: "Minecraft",
  officialName: "Minecraft",
  aliases: ["MC"],
  shortDescription:
    "Sandbox video game in which players explore a procedurally-generated 3D world of textured cubes, mine resources, craft items, build structures, and survive against mobs in a variety of game modes.",
  longDescription:
    "Minecraft is a sandbox video game developed by Mojang Studios (Sweden) and published by Microsoft. Originally created by Markus 'Notch' Persson in 2009 and fully released on November 18, 2011, Minecraft has become the best-selling video game of all time — over 300 million copies sold across all platforms (2023). Players inhabit a procedurally-generated 3D voxel world composed of textured cubes ('blocks'). Core gameplay involves mining resources, crafting tools and items, building structures, and surviving against hostile mobs (zombies, skeletons, creepers, Endermen). The game features several modes: Survival (gather resources, fight mobs, manage hunger), Creative (unlimited resources, flight, free building), Adventure (custom maps), Hardcore (permanent death), and Spectator. Minecraft is highly moddable and supports multiplayer servers ranging from small friend groups to global networks like Hypixel with 100,000+ concurrent users. The 'End' dimension houses the Ender Dragon — the game's traditional 'boss finale' and speedrun target.",

  category: "video-games",
  subCategory: "sandbox / survival / building",
  sportType: "mixed",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "global",

  countryOfOrigin: "SE",
  regionOfOrigin: "Sweden (Mojang Studios); acquired by Microsoft 2014",
  estimatedOrigin: "First public release May 17, 2009 (Classic); full 1.0 release November 18, 2011 (MineCon Las Vegas)",

  players: { min: 1, max: 1000, note: "Singleplayer and multiplayer supported; large servers (Hypixel) host thousands concurrently." },
  field: {
    surfaceName: "Minecraft world",
    dimensions: "Overworld: 60,000,000 × 60,000,000 blocks (effectively 'infinite' for gameplay). Nether: 1/8 scale of Overworld. End: bounded ~1000 × 1000.",
    description: "Procedurally-generated voxel world composed of 1m³ blocks. Overworld biomes include forests, deserts, oceans, jungles, plains, snowy tundra, mesa, mushroom fields. Nether is a hellish dimension; End is a floating archipelago with the Ender Dragon.",
  },
  equipment: [
    { name: "PC / Console / Mobile", description: "Java Edition (PC/Mac/Linux) is the modding platform; Bedrock Edition (Windows/Xbox/PlayStation/Switch/mobile) has cross-play and marketplace." },
    { name: "In-game tools", description: "Pickaxes (wood → stone → iron → gold → diamond → netherite), swords, axes, shovels, hoes, and enchanted variants." },
    { name: "Crafting table (3×3 grid)", description: "The core creation interface — combines items in patterns to create tools, weapons, armour, blocks." },
    { name: "Furnace / Blast Furnace / Smoker", description: "Smelts ores into ingots, cooks food, or bakes items." },
    { name: "Redstone components", description: "In-game electricity: dust, torches, pistons, comparators, hoppers — used to build automatic farms, doors, computers." },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "Casual: unlimited (survival worlds can last years). Speedrun: ~8-30 min for Any% Glitchless. Boss (Ender Dragon) fight: 5-10 min for prepared players.",
    note: "Speedrun world record (Random Seed, Glitchless) is under 6 minutes (2024 record ~5:30).",
  },
  objective: "Sandbox game — no strict objective. Traditional 'endgame' is defeating the Ender Dragon. Common goals: build structures, explore biomes, mine resources, complete achievements, or set up automated redstone systems.",
  matchStructure:
    "Player spawns in a random location with no items. Chop wood → craft tools → mine stone → find coal, iron, diamond → smelt and craft armour and weapons → build shelter → survive nights. Progress to the Nether (via portal) for advanced materials, then to the End (via strongholds and Eyes of Ender) to fight the Ender Dragon. Multiplayer adds cooperative or PvP dimensions.",

  basicRules: [
    { title: "Punch, mine, craft", body: "Punch trees to get wood; craft planks; craft crafting table; craft pickaxe; mine stone." },
    { title: "Manage hunger", body: "Kill animals, farm crops, or fish for food. Hunger bar depletes with activity; below 3 you can't sprint or regenerate." },
    { title: "Survive the night", body: "Hostile mobs spawn in darkness. Build a shelter or dig into a hillside before dark; sleep in beds to skip the night." },
    { title: "Health and armour", body: "20 HP; armour reduces damage. Craft leather, iron, gold, diamond, or netherite armour." },
    { title: "Crafting recipes", body: "Standard 3×3 grid recipes: 4 planks = crafting table, 3 planks + 2 sticks in T-shape = wooden pickaxe." },
    { title: "Enchant tools", body: "At level 30 with an enchanting table, apply enchantments (Fortune, Efficiency, Sharpness, Unbreaking, Protection)." },
  ],
  advancedRules: [
    { title: "Nether progression", body: "Craft obsidian portal (10 blocks in rectangle) → light with flint & steel → enter Nether. Find Nether Fortress for blaze rods, Bastion for Netherite scrap." },
    { title: "End portal and Ender Dragon", body: "Find strongholds (via Eye of Ender divination); fill End portal frames with Eyes; enter End; defeat Ender Dragon (destroy end crystals atop obsidian towers, then attack the dragon)." },
    { title: "Redstone circuits", body: "Use redstone dust, torches, repeaters, comparators, pistons, and observers to build logic gates and machines." },
    { title: "Villager trading", body: "Cure zombie villagers for cheap trades; farm emeralds via mending books, enchanted diamond gear, elytra repair." },
    { title: "Elytra (End City loot)", body: "Wings that enable gliding + firework-rocket boosting. Only obtainable from End Cities in the outer End islands." },
    { title: "Speedrunning categories", body: "Any% Glitchless (RSG), Set Seed (SSG), Random Seed Glitched (RSG-G). Recent WR: ~5:30 with lava-boat travel, portal precision." },
  ],
  scoring: {
    summary: "No formal score. Progress measured by achievements (~110 in Java Edition, 'Advancements') and self-set goals.",
    breakdown: [
      { action: "Defeat Ender Dragon", points: "'Free the End' + 12,000 XP dropped" },
      { action: "Defeat Wither", points: "'The Beginning?' + Nether Star (crafts Beacon)" },
      { action: "Collect all elytra", points: "'Sky's the Limit' achievement" },
      { action: "Speedrun (Any% Glitchless)", points: "Ranked leaderboard on speedrun.com; sub-6-min WR" },
    ],
    winCondition: "No forced win condition. Traditional 'completion' is beating the Ender Dragon. Achievements provide long-term goals.",
  },

  officiating: {
    officials: ["Speedrun.com moderators (for speedrun verifications)", "Mojang Studios (game updates and rules)"],
    summary: "No official refs for casual play. Speedrun leaderboards moderated by community volunteers; suspected cheats have runs invalidated after review.",
  },
  governingBodies: [
    { name: "Mojang Studios (developer)", founded: 2009, headquarters: "Stockholm, Sweden", website: "https://www.mojang.com/" },
    { name: "Microsoft (owner since 2014)", founded: 1975, headquarters: "Redmond, USA", website: "https://www.microsoft.com/" },
  ],
  majorCompetitions: [
    { name: "Minecraft Championship (MCC)", frequency: "monthly", founded: 2020, region: "worldwide (10-team invitational)" },
    { name: "Minecraft Monday (historic)", frequency: "weekly (2019-2020)", founded: 2019, region: "USA (Keemstar hosted)" },
    { name: "MinecraftCon (formerly MineCon Live)", frequency: "annual", founded: 2010, region: "worldwide" },
    { name: "Minecraft Speedrun events", frequency: "ongoing", region: "worldwide (speedrun.com)" },
  ],
  countriesPlayed: ["US", "GB", "DE", "SE", "FR", "BR", "JP", "KR", "AU", "PL", "ID", "MX", "CN", "IN"],
  famousAthletes: [
    "Markus 'Notch' Persson (Sweden) — original creator; sold Mojang to Microsoft for $2.5B in 2014",
    "Dream (Clay, USA) — YouTube 'Minecraft Manhunt' and speedrun star; controversial 1.16 speedrun disputes",
    "Technoblade (Alex, USA) — legendary PvP player and streamer; passed away 2022, community icon",
    "Georgenotfound / Sapnap — Dream Team co-stars, top MC streamers",
    "TommyInnit — UK-based MC creator; largest solo Minecraft YouTube channel (2020-22)",
    "Ph1LzA / Philza — hardcore-mode streamer; famous 5-year Hardcore run death 2019",
    "Feinberg — Any% Glitchless world record holder (2024)",
    "Yavimaya (Illumina) — long-time speedrun world record holder",
  ],
  records: [
    { title: "Best-selling video game of all time", holder: "Mojang / Microsoft", value: "300+ million copies sold (2023)", year: 2023 },
    { title: "Most-viewed Minecraft video on YouTube", holder: "Various music remixes", value: "1B+ views (Fallen Kingdom / Take Back the Night)" },
    { title: "Any% Glitchless speedrun WR (Java)", holder: "Feinberg", value: "~5:30 (2024)", year: 2024 },
    { title: "Set Seed Glitchless WR", holder: "Various", value: "~2:45 (2023)", year: 2023 },
    { title: "Largest Minecraft server (Hypixel)", holder: "Hypixel", value: "216,000+ concurrent users (2020 peak)", year: 2020 },
    { title: "Longest Hardcore mode survival", holder: "Philza (Ph1LzA)", value: "5+ years in-game before infamous 2019 death", year: 2019 },
  ],

  variants: ["minecraft-java-edition", "minecraft-bedrock-edition", "minecraft-legends", "minecraft-dungeons", "minecraft-earth", "minecraft-education-edition", "minecraft-classic"],
  relatedSports: ["terraria", "roblox", "fortnite", "no-mans-sky"],

  skills: [
    "spatial reasoning (3D building)",
    "resource management",
    "efficient mining routes",
    "combat timing (mob attacks)",
    "redstone logic (circuit design)",
    "speedrun route optimisation",
    "team coordination in multiplayer",
  ],
  strategies: [
    { title: "First-day priorities", body: "Wood → wooden tools → stone tools → food → shelter before nightfall. Aim for 3 sticks + 2 planks + 3 stone = stone pickaxe before dark." },
    { title: "Branch mining for diamonds", body: "Dig at Y=-58 (deepslate diamond ore is most common); branch-mine 2 blocks apart to cover ground efficiently." },
    { title: "Villager trading loop", body: "Set up librarians with 1 emerald + book trades; reset by breaking-lectern until you get Mending or Efficiency V for 1 emerald." },
    { title: "Nether highway", body: "1 block in Nether = 8 blocks in Overworld. Build a Nether tunnel for fast long-distance travel." },
    { title: "Speedrun theory", body: "Skip diamond entirely; get iron pickaxe + food; portal to Nether; find bastion for gold/pearls/rockets; find fortress for blaze rods; return to Overworld only to Eye-of-Ender + fight dragon." },
  ],

  terminology: [
    { term: "Block", meaning: "1m³ voxel that constitutes the world. Everything is made of blocks." },
    { term: "Mob", meaning: "'Mobile entity' — creatures in the world. Passive (cows, pigs, sheep), Neutral (Endermen, wolves), Hostile (zombies, creepers)." },
    { term: "Creeper", meaning: "Silent, exploding hostile mob that hisses before detonation — Minecraft's iconic villain." },
    { term: "Enderman", meaning: "Tall neutral mob from The End; teleports and drops Ender Pearls (used to reach End)." },
    { term: "Nether", meaning: "Hellish dimension accessed via obsidian portal — home to Netherite, Blaze Rods, Ancient Debris." },
    { term: "The End", meaning: "Void dimension with the Ender Dragon boss." },
    { term: "Netherite", meaning: "Late-game armour/tool material stronger than diamond." },
    { term: "Redstone", meaning: "In-game electricity — dust, torches, repeaters, comparators for logic circuits." },
    { term: "Enchantment", meaning: "Magical buffs applied to gear via enchanting table or anvil (Sharpness, Efficiency, Fortune, Mending)." },
    { term: "XP orbs", meaning: "Experience orbs dropped by mob kills, mining, smelting; used for enchanting/anvil." },
    { term: "Bastion / Fortress", meaning: "Nether structures — Bastions contain gold, netherite; Fortresses contain blazes (for blaze rods)." },
    { term: "Eye of Ender", meaning: "Crafted from Ender Pearl + Blaze Powder; used to find strongholds and activate End portal." },
    { term: "Elytra", meaning: "Wings from End Cities — enable gliding and firework-boosted flight." },
    { term: "Mending", meaning: "Enchantment that repairs items using collected XP orbs; the most important late-game enchant." },
    { term: "Speedrun (Any%)", meaning: "Beating the game (defeating Ender Dragon) as fast as possible; category variants: Glitchless, Set Seed, Random Seed." },
    { term: "Hardcore", meaning: "Survival mode where death is permanent and world locks after dying." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "First 10 minutes", body: "Punch a tree, craft planks, craft crafting table, craft wooden pickaxe, mine stone, craft stone pickaxe and sword." },
      { title: "Build a shelter", body: "Before the first night, wall off a small area or dig into a hill. Place a door and a bed if you have wool." },
      { title: "Find iron", body: "Mine into a mountain or descend into a cave; iron ore appears in stone. Smelt in a furnace for ingots." },
      { title: "Sleep in a bed", body: "Skips the night; also sets your respawn point." },
    ] },
    { level: "intermediate", steps: [
      { title: "Enter the Nether", body: "Craft 10-14 obsidian → build 4×5 portal → ignite with flint & steel. Bring iron gear and a shield." },
      { title: "Enchanting setup", body: "Enchanting table + 15 bookshelves for level-30 enchants." },
      { title: "Farms", body: "Auto farms for wheat, cows, iron (iron farm), and mob XP (mob grinder)." },
      { title: "Villager trading hall", body: "Build a controlled villager environment for infinite emeralds via librarian trades." },
    ] },
    { level: "advanced", steps: [
      { title: "Beat the Ender Dragon", body: "Kill blazes for rods → craft Eyes of Ender → find stronghold → activate portal → destroy end crystals → attack dragon." },
      { title: "Redstone engineering", body: "Build sorters, TNT cannons, elevators, or full working calculators." },
      { title: "Speedrunning", body: "Learn Any% Glitchless route: mine, portal, bastion trade, blaze rods, pearls, dragon." },
      { title: "Modding and servers", body: "Install Forge/Fabric mods (Java) or explore Bedrock marketplace; host or join multiplayer servers." },
    ] },
  ],
  faq: [
    { question: "How many copies of Minecraft have been sold?", answer: "Over 300 million copies as of 2023, making it the best-selling video game of all time (ahead of Grand Theft Auto V and Tetris)." },
    { question: "What's the difference between Java and Bedrock Edition?", answer: "Java (PC/Mac/Linux) is the original edition, more moddable, and has a technical player community. Bedrock (Windows/Xbox/PlayStation/Switch/mobile) supports cross-play, has a paid marketplace, and generally better performance." },
    { question: "Who created Minecraft?", answer: "Swedish developer Markus 'Notch' Persson created Minecraft, first released in 2009. He founded Mojang, which Microsoft acquired in 2014 for $2.5 billion." },
    { question: "What's the goal of Minecraft?", answer: "There's no forced goal — Minecraft is a sandbox. The traditional 'endgame' is defeating the Ender Dragon in The End dimension, which triggers the credits." },
    { question: "How do you get Netherite?", answer: "Mine Ancient Debris in the Nether at Y=15-22, smelt into Netherite Scrap, combine 4 scrap + 4 gold ingots to get 1 Netherite Ingot, then upgrade diamond gear via smithing table." },
    { question: "What is Redstone?", answer: "Minecraft's version of electricity. Redstone dust carries signals; combined with pistons, doors, repeaters, and observers, players build logic circuits, contraptions, and even functional computers." },
  ],

  wikipediaTitle: "Minecraft",
  sources: [
    { label: "Wikipedia — Minecraft", url: "https://en.wikipedia.org/wiki/Minecraft", publisher: "Wikipedia" },
    { label: "Mojang — Minecraft official", url: "https://www.minecraft.net/", publisher: "Mojang Studios" },
    { label: "Minecraft Wiki", url: "https://minecraft.wiki/", publisher: "Community" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

import type { Sport } from "@/lib/types";

export const monsterHunterWorld: Sport = {
  id: "monster-hunter-world",
  slug: "monster-hunter-world",
  name: "Monster Hunter: World",
  officialName: "Monster Hunter: World + Iceborne",
  aliases: ["MHW", "MHW:IB", "ワールド"],
  shortDescription:
    "Fifth-generation action-RPG (Capcom, Jan 26, 2018 PS4/Xbox, Aug 9, 2018 PC) — best-selling Capcom title of all time (25M+ units incl. Iceborne). Seamless open zones, 14 weapon types, hunt-craft-hunt loop; Iceborne expansion (Sep 6, 2019) adds Master Rank.",
  longDescription:
    "Monster Hunter: World is the fifth-generation action-RPG developed + published by Capcom for PS4/Xbox One (January 26, 2018) + PC (August 9, 2018). Best-selling Capcom title of all time — 25 million units sold as of March 2024 (including Iceborne expansion). First MH with seamless open zones (no zone transitions), 14 weapon types, and international simultaneous release. Iceborne expansion (September 6, 2019) added Master Rank tier, Hoarfrost Reach map, and 30+ new monsters including endgame Fatalis (October 2020) + Alatreon + Safi'jiiva. Solo or 4-player online co-op. Progression: Low Rank (LR) → High Rank (HR) → Master Rank (MR with Iceborne). No PvP — purely PvE hunt-craft-hunt loop with community speedrun scene on speedrun.com + TA-wiki (Japan).",
  category: "video-games",
  subCategory: "action-role-playing (hunt-craft loop)",
  sportType: "mixed",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Capcom Osaka)",
  estimatedOrigin: "Released Jan 26, 2018 (PS4/Xbox); PC Aug 9, 2018; Iceborne Sep 6, 2019",
  players: { min: 1, max: 4, note: "Solo or online 4-player co-op hunts." },
  equipment: [
    { name: "Gaming platform (PS4/PS5, Xbox, PC)", description: "PS4/PS5 60 FPS mode, Xbox Series X 60 FPS, PC uncapped with mods." },
    { name: "14 weapon types (in-game)", description: "Great Sword, Long Sword, Sword & Shield, Dual Blades, Hammer, Hunting Horn, Lance, Gunlance, Switch Axe, Charge Blade, Insect Glaive, Bow, Light Bowgun, Heavy Bowgun." },
    { name: "Voice chat (external)", description: "Discord/party chat recommended for endgame Fatalis + Alatreon co-op." },
  ],
  duration: { approximateMinutes: 45, structure: "30-50 min per Elder Dragon hunt; sieges longer (Kulve Taroth, Safi'jiiva)." },
  objective: "Hunt monsters solo or in party, craft gear from parts, progress to endgame Fatalis + Alatreon.",
  matchStructure: "Solo or online 4-player co-op hunts (30-50 min per Elder Dragon). Progression: LR → HR → MR (with Iceborne).",
  basicRules: [
    { title: "Choose 1 of 14 weapons", body: "Each has unique moveset, combos, and monster matchups." },
    { title: "Craft gear from monster parts", body: "Break specific parts for rare materials (horns, gems, plates)." },
    { title: "SOS flare co-op", body: "Solo hunters can send SOS flare to invite up to 3 online hunters mid-hunt." },
  ],
  advancedRules: [
    { title: "Cart limit (3 faints)", body: "3 party carts = quest failure, party returns without rewards." },
    { title: "Time limit (50 min)", body: "Most hunts have 50-minute limit; sieges vary (30-45 min per attempt)." },
    { title: "Element vs raw damage", body: "Match weapon element to monster weakness; raw builds better for universal hunts." },
  ],
  scoring: {
    summary: "Hunter Rank (HR 1-999) + Master Rank (MR 1-999) after Iceborne; no PvP.",
    winCondition: "Slay/capture target monster within time + cart limit.",
    breakdown: [
      { action: "Hunt completion", points: "Investigation rewards + HR/MR progress" },
      { action: "Part break", points: "Extra rare material rolls" },
    ],
  },
  penalties: [
    { title: "Cart (faint)", body: "3 carts = quest failure." },
    { title: "Quest timeout", body: "Fails if not completed in time limit." },
    { title: "Modding on multiplayer", body: "Anti-cheat detection can result in session bans." },
  ],
  positions: [{ name: "Hunter", role: "Wields 1 of 14 weapon types, hunts monsters solo or in 4-player party.", count: 1 }],
  officiating: { officials: ["No formal officials — speedrun.com moderators verify TA runs"], summary: "Community-driven speedrun leaderboards; no PvP tournaments." },
  governingBodies: [{ name: "Capcom Co., Ltd.", founded: 1979, headquarters: "Osaka, Japan" }],
  majorCompetitions: [
    { name: "Speedrun.com Monster Hunter World leaderboards", frequency: "ongoing", founded: 2018, region: "global (community)" },
    { name: "TA-wiki Japan speedrun leaderboards", frequency: "ongoing", founded: 2018, region: "Japan (community)" },
  ],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "IT", "KR", "AU", "BR", "TW"],
  famousAthletes: ["Various speedrun.com TA record holders (Fatalis sub-3 min solos)"],
  records: [
    { title: "Capcom's best-selling game ever", holder: "Capcom", value: "25 million units sold as of March 2024 (including Iceborne)", year: 2024 },
    { title: "Fastest-selling Capcom game", holder: "Capcom", value: "8 million units in first 3 days globally", year: 2018 },
    { title: "Fatalis TA speedrun world record", holder: "various", value: "Sub-3 minute solo runs by top speedrunners", year: 2024 },
  ],
  variants: ["monster-hunter-world-base", "monster-hunter-world-iceborne-expansion"],
  relatedSports: ["monster-hunter", "monster-hunter-wilds", "dark-souls-community-speedrun"],
  skills: ["monster pattern recognition", "weapon combos", "positioning", "team coordination"],
  strategies: [
    { title: "Element vs raw damage", body: "Match weapon element to monster weakness (ice-3 vs Nergigante); raw for universal builds." },
    { title: "Slinger burst combo", body: "Fire rocksteady/paralysis ammo during monster attack windows for stagger + DPS window." },
    { title: "Clutch claw + wallbang (Iceborne)", body: "Clutch onto monster's head, soften, then flinch shot into wall for hardknockdown." },
  ],
  terminology: [
    { term: "HR", meaning: "Hunter Rank (Low + High)" },
    { term: "MR", meaning: "Master Rank (Iceborne)" },
    { term: "Cart", meaning: "Faint (KO) — sent back to camp" },
    { term: "TA", meaning: "Time Attack — speedrun ruleset (no cart, no consumables)" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Basic hunt loop", body: "Pick weapon, learn moveset, first monsters, craft-upgrade path." }] },
    { level: "intermediate", steps: [{ title: "Elder Dragon + Tempered", body: "Elder Dragons + Tempered variants HR 30+, meta armour skills." }] },
    { level: "advanced", steps: [{ title: "Iceborne Master Rank + speedrun", body: "Fatalis, Alatreon, Safi'jiiva, TA-wiki speedrun rules." }] },
  ],
  faq: [
    { question: "Which weapon should I start with?", answer: "Sword and Shield (versatile), Insect Glaive (mobile aerial), or Longsword (spirit gauge + parry) are common beginner picks." },
    { question: "Do I need Iceborne to play with friends?", answer: "No — base game supports co-op standalone. Iceborne is DLC; both players need it to hunt MR monsters together." },
  ],
  wikipediaTitle: "Monster Hunter: World",
  sources: [{ label: "Wikipedia — Monster Hunter: World", url: "https://en.wikipedia.org/wiki/Monster_Hunter:_World", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default monsterHunterWorld;

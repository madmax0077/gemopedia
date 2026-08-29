import type { Sport } from "@/lib/types";

export const finalFantasy16: Sport = {
  id: "final-fantasy-16",
  slug: "final-fantasy-16",
  name: "Final Fantasy XVI",
  officialName: "Final Fantasy XVI",
  aliases: ["FFXVI", "FF16", "ファイナルファンタジーXVI"],
  shortDescription:
    "Square Enix real-time action-RPG (Jun 22, 2023 PS5; Sep 17, 2024 PC; Mar 27, 2025 Xbox) directed by Hiroshi Takai + produced by Naoki Yoshida — dark-fantasy Valisthea setting with Eikon (summon) combat. First fully action-oriented mainline FF; ~35-45hr story; 3M+ units first week.",
  longDescription:
    "Final Fantasy XVI is a real-time action-RPG developed by Square Enix's Creative Business Unit III (led by Naoki Yoshida of FFXIV fame) — 16th mainline Final Fantasy entry. Released June 22, 2023 exclusively for PS5 (PC/Steam Sep 17, 2024; Xbox Series X/S Mar 27, 2025). Directed by Hiroshi Takai, produced by Naoki Yoshida, combat design by Ryota Suzuki (Devil May Cry 5 combat director). Story: player controls Clive Rosfield, sworn shield of Rosaria's crown prince Joshua, on decades-spanning revenge + political-fantasy arc in Valisthea — twin continents where warring nations vie for Mothercrystals. Six Dominants each host a summonable Eikon (Ifrit, Phoenix, Titan, Ramuh, Shiva, Odin, Bahamut, Garuda, Leviathan). Fully action combat — no ATB, no random encounters, no party control. Eikonic Abilities let Clive swap in different Eikon powers on the fly. Two major DLC: 'Echoes of the Fallen' + 'The Rising Tide'. Departs from JRPG turn-based tradition + received praise for cinematic spectacle, criticism for linear pacing + light RPG mechanics. 3M+ units shipped in first week; 3.5M+ within a month.",
  category: "video-games",
  subCategory: "action-RPG",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Square Enix CBU III, Tokyo)",
  estimatedOrigin: "Released Jun 22, 2023 PS5; PC Sep 17, 2024; Xbox Mar 27, 2025",
  players: { min: 1, max: 1, note: "Single-player only." },
  equipment: [
    { name: "PS5 / PC / Xbox Series X/S", description: "Multi-platform; PS5 was launch-exclusive for 15 months." },
    { name: "Standard controller (DualSense recommended)", description: "Uses adaptive triggers + haptics on PS5." },
  ],
  duration: { approximateMinutes: 60, structure: "Main story ~35-40 hrs; 100% + DLC ~70-85 hrs." },
  objective: "Follow Clive Rosfield's revenge + political-liberation arc across Valisthea; defeat Ultima; liberate mankind from Mothercrystal dependence.",
  matchStructure: "Single-player linear action-RPG with hub-and-spoke area progression; two paid DLC add zones + Eikons.",
  basicRules: [
    { title: "Real-time action combat", body: "Combos, dodges, parries, Eikonic Abilities — no ATB/turn-based system." },
    { title: "Eikonic Abilities swap on the fly", body: "Equip up to 3 Eikons; each provides 3 unique Abilities on cooldown." },
    { title: "Torgal companion controls", body: "Only party member; commanded via directional inputs (Sic, Ravage, Heal)." },
  ],
  advancedRules: [
    { title: "Story Focused vs Action Focused mode", body: "Assist Rings (Ring of Timely Assistance, Timely Evasion, etc.) reduce difficulty for story-first players." },
    { title: "Final Fantasy Mode NG+", body: "New Game+ unlocks higher-level enemies, harder bosses, extra gear tier." },
    { title: "Hunt Board + Chronoliths + Notorious Marks", body: "Optional endgame content — hunts, arcade time-attack combat trials, unique bosses." },
  ],
  scoring: {
    summary: "Story completion + optional side content + Ultimaniac trials.",
    winCondition: "Complete main story (defeat Ultima); 100% = all hunts + all side quests + all Chronoliths + Arcade Mode.",
    breakdown: [{ action: "Story progression", points: "Main quest chapter completion" }],
  },
  penalties: [
    { title: "Combat death", body: "Reload latest autosave; no permadeath." },
    { title: "Failed dodge/parry", body: "Take damage; boss punish combos reduce Will Gauge slower." },
  ],
  positions: [{ name: "Clive Rosfield (protagonist)", role: "Dominant of Ifrit + former shield of Rosaria; player character throughout.", count: 1 }],
  officiating: { officials: ["Speedrun.com moderators"], summary: "Single-player only." },
  governingBodies: [
    { name: "Square Enix Holdings", founded: 2003, headquarters: "Tokyo, Japan" },
    { name: "Creative Business Unit III (Yoshi-P/Yoshida)", founded: 2012, headquarters: "Tokyo, Japan" },
  ],
  majorCompetitions: [
    { name: "Speedrun.com FFXVI leaderboards", frequency: "ongoing", founded: 2023, region: "global (community)" },
  ],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "IT", "KR", "CN", "AU", "BR"],
  famousAthletes: ["Naoki Yoshida (producer)", "Hiroshi Takai (director)", "Ryota Suzuki (combat director)", "Masayoshi Soken (composer)"],
  records: [
    { title: "3M+ units first week", holder: "Square Enix", value: "3 million+ units shipped + digitally sold in first week", year: 2023 },
    { title: "Multi-platform release", holder: "Square Enix", value: "PS5-exclusive 15 months then PC (2024) + Xbox Series (2025)", year: 2025 },
  ],
  variants: ["ffxvi-standard", "ffxvi-deluxe", "ffxvi-complete-edition"],
  relatedSports: ["final-fantasy-xiv", "final-fantasy-vii-remake", "devil-may-cry-5", "dragon-age-veilguard"],
  skills: ["real-time combat timing", "eikonic ability rotation", "boss pattern recognition", "narrative RPG engagement"],
  strategies: [
    { title: "Stagger management", body: "Attack enemy Will Gauge to Stagger — Stagger window is 1.5x damage; save biggest Eikonic Abilities for Stagger." },
    { title: "Eikonic Ability loadout building", body: "Mix + match 9 abilities from 3 equipped Eikons; craft complementary combos (e.g., Titanic Block + Gigaflare + Diamond Dust)." },
    { title: "Torgal command combos", body: "Time Torgal 'Ravage' with your launcher for extended aerial juggle." },
  ],
  terminology: [
    { term: "Eikon", meaning: "Massive summoned creature bound to a Dominant" },
    { term: "Dominant", meaning: "Human who can channel + become an Eikon" },
    { term: "Bearer", meaning: "Human who can use magic without a crystal" },
    { term: "Mothercrystal", meaning: "Massive continental crystal fueling civilisation" },
    { term: "Will Gauge", meaning: "Enemy stagger meter — drain to Stagger" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Prologue + Rosaria arc", body: "Learn combat basics + Ifrit/Phoenix Eikonic Abilities." }] },
    { level: "intermediate", steps: [{ title: "Mid-game (Titan → Bahamut)", body: "Unlock more Eikons; experiment with ability loadouts." }] },
    { level: "advanced", steps: [{ title: "Final Fantasy Mode + Ultimaniac Arcade", body: "NG+ higher difficulty; time-attack Arcade Mode S+ ranks." }] },
  ],
  faq: [
    { question: "Is FFXVI turn-based like older Final Fantasy games?", answer: "No — FFXVI is fully real-time action combat, closer to Devil May Cry than classic Final Fantasy. No ATB, no random encounters, no party control." },
    { question: "How does FFXVI relate to FFXIV?", answer: "No direct story connection. FFXVI is developed by Naoki Yoshida's CBU III team (also responsible for FFXIV). Standalone entry with its own world (Valisthea) + characters." },
  ],
  wikipediaTitle: "Final Fantasy XVI",
  sources: [{ label: "Wikipedia — Final Fantasy XVI", url: "https://en.wikipedia.org/wiki/Final_Fantasy_XVI", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default finalFantasy16;

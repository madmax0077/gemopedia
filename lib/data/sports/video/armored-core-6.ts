import type { Sport } from "@/lib/types";

export const armoredCore6: Sport = {
  id: "armored-core-6",
  slug: "armored-core-6",
  name: "Armored Core VI: Fires of Rubicon",
  officialName: "Armored Core VI: Fires of Rubicon",
  aliases: ["AC6", "ACVI", "Fires of Rubicon"],
  shortDescription:
    "FromSoftware mech action game (Aug 25, 2023 PS4/PS5/Xbox/PC) — first mainline Armored Core in ~10 years. Player is Raven C4-621 executing paramilitary contracts on Rubicon 3. Deep mech customisation + fast arena-boss combat. 3M+ units first month; Peak 200k concurrent Steam.",
  longDescription:
    "Armored Core VI: Fires of Rubicon is a mech-action game developed by FromSoftware + published by Bandai Namco, released August 25, 2023 for PS4, PS5, Xbox One, Xbox Series X/S, and PC (Steam). First mainline Armored Core entry since 2013's Verdict Day — a return to FromSoftware's roots after the Souls/Elden Ring dynasty. Player is Raven C4-621, an unregistered augmented human piloting AC (Armored Core) mechs, hired by handler Walter to execute paramilitary contracts on Rubicon 3 — a planet devastated by the mysterious 'Fires of Ibis' + rich in resource 'Coral'. Corporate factions (Balam, Arquebus, RaD, PCA, Rubicon Liberation Front) vie for control. Three routes / three endings based on faction choices. Combat: fast, high-mobility 3D mech battles with dual-wield weapons (blades, rifles, grenade launchers, kinetic + energy weapons) + booster/quick-boost/assault-boost movement. Deep mech customisation — legs, core, head, arms, boosters, generators, weapons, coatings. Missions structured as contracts + arena PvP-mock battles + boss encounters. Multiplayer 1v1/3v3 PvP. 3M+ units first month; Peak 200,000+ concurrent Steam players. Praised for combat + customisation depth; some criticism for mission-based (vs. open) structure.",
  category: "video-games",
  subCategory: "mech action",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "major",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (FromSoftware, Tokyo)",
  estimatedOrigin: "Released Aug 25, 2023 for PS4/PS5/Xbox/PC — first mainline AC since 2013",
  players: { min: 1, max: 6, note: "Single-player campaign + 1v1/3v3 online PvP." },
  equipment: [
    { name: "PS4/PS5, Xbox One, Xbox Series, PC", description: "Multi-platform launch." },
    { name: "Standard controller (recommended)", description: "Mouse+keyboard supported on PC." },
  ],
  duration: { approximateMinutes: 60, structure: "Main story ~30-40 hrs per route; NG+/NG++ for full 3-ending unlock adds 20-30 hrs." },
  objective: "Complete Rubicon 3 contract missions; choose faction alignment; achieve all 3 endings across NG+/NG++.",
  matchStructure: "Single-player 3-route campaign with contract-based missions + arena battles + boss encounters + online PvP.",
  basicRules: [
    { title: "AP (Armor Points) + posture", body: "AP is your HP; boss/enemy Stagger meter fills from hits, then Stagger doubles damage until it recovers." },
    { title: "Boost + QB + AB movement", body: "Boost forward, Quick Boost dodge (dashes), Assault Boost long-range charge." },
    { title: "Dual-wield weapons", body: "2 arm weapons + 2 shoulder weapons; melee blade + kinetic + energy + missile variety." },
  ],
  advancedRules: [
    { title: "Mech customisation deep-dive", body: "Legs (biped/reverse-jointed/tank/tetrapod) determine mobility; core determines EN; head has scan/aiming stats." },
    { title: "Three ending routes across NG+/NG++", body: "Faction choices in Chapters 3-5 lock ending route; must play NG+ + NG++ to unlock all three." },
    { title: "Coral (fuel source) narrative arc", body: "Coral discovery drives all faction motivations + is central to story choices." },
  ],
  scoring: {
    summary: "Mission rank (S/A/B/C/D) + COAM (currency) earned + Battle Log parts unlocked.",
    winCondition: "Complete all missions in a route + final boss = one ending. All 3 endings = 100% story.",
    breakdown: [{ action: "Mission S-rank", points: "Max COAM + Battle Log parts + special decal" }],
  },
  penalties: [
    { title: "AP depletion (death)", body: "Retry from mission checkpoint; no permadeath." },
    { title: "Failed extraction / mission timeout", body: "Some missions have timers — failure means restart." },
  ],
  positions: [{ name: "Raven C4-621 (player mech pilot)", role: "Sole playable — pilots customisable Armored Core mech.", count: 1 }],
  officiating: { officials: ["Ranked-arena matchmaking; Speedrun.com moderators"], summary: "Automated PvP matchmaking." },
  governingBodies: [
    { name: "FromSoftware", founded: 1986, headquarters: "Tokyo, Japan" },
    { name: "Bandai Namco Entertainment", founded: 2006, headquarters: "Tokyo, Japan" },
  ],
  majorCompetitions: [
    { name: "In-game Ranked Arena PvP (Rated 3v3 + 1v1)", frequency: "ongoing", founded: 2023, region: "global" },
    { name: "Speedrun.com AC6 leaderboards", frequency: "ongoing", founded: 2023, region: "global (community)" },
  ],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "IT", "KR", "CN", "AU"],
  famousAthletes: ["Masaru Yamamura (director)", "Hidetaka Miyazaki (producer)", "Kota Hoshino (composer)"],
  records: [
    { title: "3M+ units first month", holder: "Bandai Namco / FromSoftware", value: "3 million+ units shipped in first month", year: 2023 },
    { title: "Peak 200k+ concurrent Steam", holder: "FromSoftware", value: "Peaked 200,000+ concurrent Steam players — highest for non-Souls FromSoft title", year: 2023 },
    { title: "First mainline AC in ~10 years", holder: "FromSoftware", value: "First mainline Armored Core since Verdict Day (2013)", year: 2023 },
  ],
  variants: ["ac6-standard", "ac6-deluxe"],
  relatedSports: ["armored-core-4", "daemon-x-machina", "mechwarrior-5", "titanfall-2"],
  skills: ["mech customisation", "boost + QB timing", "boss stagger management", "PvP loadout meta reading"],
  strategies: [
    { title: "Stagger-then-burst", body: "Load Stun + kinetic combo to Stagger boss quickly, then dump missile/energy DPS during Stagger window." },
    { title: "Reverse-jointed legs + high-agility build", body: "For dodge-heavy players; enables long-jump + safe repositioning." },
    { title: "Tank-tread + shoulder-cannon build", body: "For DPS-focused players; sacrifices mobility for enormous damage output." },
  ],
  terminology: [
    { term: "AC", meaning: "Armored Core — the customisable mech" },
    { term: "AP", meaning: "Armor Points (mech HP)" },
    { term: "EN", meaning: "Energy — powers boost + energy weapons" },
    { term: "Stagger", meaning: "Posture-broken state where damage is doubled" },
    { term: "QB", meaning: "Quick Boost (dash)" },
    { term: "Coral", meaning: "Rubicon 3's resource — central story driver" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Chapter 1 + tutorial missions", body: "Learn AP/EN + QB + basic loadout." }] },
    { level: "intermediate", steps: [{ title: "First route ending + PvP intro", body: "Build custom mech; try Ranked Arena 1v1." }] },
    { level: "advanced", steps: [{ title: "NG+ / NG++ all endings + high-rank PvP", body: "Unlock all 3 endings; climb Ranked Arena tiers." }] },
  ],
  faq: [
    { question: "Is AC6 a Souls game?", answer: "No. Shares FromSoftware DNA (boss-focused, tight combat) but is fully mech-action, mission-based, with unlimited retries + no bonfire/estus system. Very different pacing." },
    { question: "Do I need to play previous Armored Core games?", answer: "No — AC6 is a fresh entry with new setting (Rubicon 3), new characters, and no story connections to previous AC games." },
  ],
  wikipediaTitle: "Armored Core VI: Fires of Rubicon",
  sources: [{ label: "Wikipedia — Armored Core VI: Fires of Rubicon", url: "https://en.wikipedia.org/wiki/Armored_Core_VI:_Fires_of_Rubicon", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default armoredCore6;

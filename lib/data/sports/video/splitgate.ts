import type { Sport } from "@/lib/types";

export const splitgate: Sport = {
  id: "splitgate",
  slug: "splitgate",
  name: "Splitgate",
  officialName: "Splitgate: Arena Warfare (2019) / Splitgate 2 (2025)",
  aliases: ["Splitgate 1", "Splitgate 2"],
  shortDescription:
    "1047 Games arena FPS with portals (Halo × Portal fusion) — Splitgate (2019) F2P beta; Splitgate 2 launched May 22, 2025 PS5/Xbox/PC. Signature portal-shooting movement + arena combat. 15M+ players S1 peak; TGA 2025 nominee.",
  longDescription:
    "Splitgate is a portal-shooting arena FPS franchise developed + published by 1047 Games (Redwood City, California, founded by Ian Proulx + Nicholas Bagamian). Original Splitgate (July 2019, initially named 'Splitgate: Arena Warfare') was F2P beta on Steam. Signature concept: Halo-like arena combat + portal-gun (Portal-style) allowing 2 simultaneously-placed portals per player for flanking + escape + repositioning. Massive viral moment July 2021 — went from ~500 concurrent players to 100k+ concurrent on Steam within 2 weeks — server infrastructure temporarily overwhelmed. Original beta was ended January 2024 by 1047 to redirect all resources to Splitgate 2 development. Splitgate 2 launched May 22, 2025 for PS5, Xbox Series X/S, PC (Steam + Epic) — F2P with revamped engine (Unreal Engine 5), 3 Factions (Aeros, Meridian, Sabrask) with unique abilities, cross-play, ranked + casual modes, Battle Pass. Received mixed launch reception — praise for portal + shooting gameplay + F2P access, criticism for launch stability + Faction meta imbalances. TGA 2025 Best Multiplayer nominee. Ongoing seasonal content.",
  category: "video-games",
  subCategory: "arena FPS with portal gun",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (1047 Games, Redwood City, California)",
  estimatedOrigin: "Splitgate (2019) beta; viral Jul 2021; original ended Jan 2024; Splitgate 2 launched May 22, 2025",
  players: { min: 4, max: 8, note: "4v4 primary; various team modes." },
  equipment: [
    { name: "PS5, Xbox Series X/S, PC (Steam + Epic)", description: "Cross-play across all platforms." },
    { name: "Standard controller or M+KB", description: "PC has M+KB advantage; cross-play input-matched." },
  ],
  duration: { approximateMinutes: 10, structure: "Match ~8-12 min; competitive set 15-30 min." },
  objective: "Win match by objective completion (Domination, Team Deathmatch, King of the Hill, Ranked) or elimination.",
  matchStructure: "4v4 primary competitive; various casual FFA modes.",
  basicRules: [
    { title: "Portal gun (2 simultaneous portals)", body: "Place 2 portals on any 'portalable' surface; travel between + shoot through portals." },
    { title: "Standard arena FPS movement", body: "Sprint, jump, crouch — Halo-inspired arena movement with fast projectiles + hitscan mix." },
    { title: "Faction abilities (SG2)", body: "SG2 adds 3 Factions with unique passive/active/ultimate abilities (Aeros speed, Meridian shielding, Sabrask tech)." },
  ],
  advancedRules: [
    { title: "Portal-plane tactical use", body: "Portal placement for flank routes + escape + repositioning + surprise angles." },
    { title: "Faction synergies (SG2)", body: "Team composition matters — Aeros + Meridian + Sabrask synergies vs single-Faction spam." },
    { title: "Weapon loadout customisation", body: "SG2 has expanded loadout customisation + attachments." },
  ],
  scoring: {
    summary: "Mode-specific: elimination count, objective control time, kills, etc.",
    winCondition: "Team-mode-specific — points, elimination, objective control.",
    breakdown: [{ action: "Kill / assist", points: "Match variable" }, { action: "Objective secured", points: "Mode variable" }],
  },
  penalties: [
    { title: "Self-death via portal falls", body: "Falling through portal into void = death; punish for bad portal placement." },
    { title: "Team-kill / griefing", body: "Report + ban tiers per 1047 policy." },
  ],
  positions: [{ name: "Player (SG1) / Faction (SG2)", role: "Solo player in 4v4 team; Faction pick in SG2.", count: 4 }],
  officiating: { officials: ["Anti-cheat + report system"], summary: "Automated moderation." },
  governingBodies: [
    { name: "1047 Games", founded: 2016, headquarters: "Redwood City, California" },
  ],
  majorCompetitions: [
    { name: "In-game Ranked seasons", frequency: "ongoing seasonal", founded: 2019, region: "global" },
    { name: "Community-organised tournaments", frequency: "ongoing", founded: 2020, region: "worldwide (community)" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "JP", "KR", "BR", "AU"],
  famousAthletes: ["Top-Ranked players + content creators from SG1 + SG2"],
  records: [
    { title: "15M+ players SG1 launch peak", holder: "1047 Games", value: "Splitgate 1 registered 15M+ players in beta lifespan; peak 100k+ concurrent Steam Jul 2021", year: 2021 },
    { title: "Splitgate 2 launched May 22, 2025", holder: "1047 Games", value: "Splitgate 2 (Unreal Engine 5) launched May 22, 2025 as F2P sequel", year: 2025 },
    { title: "TGA 2025 Best Multiplayer nominee", holder: "1047 Games", value: "Splitgate 2 nominated Best Multiplayer at The Game Awards 2025", year: 2025 },
  ],
  variants: ["splitgate-1-original", "splitgate-2-launch"],
  relatedSports: ["halo-infinite", "portal-2", "the-finals", "titanfall-2"],
  skills: ["portal placement + spatial planning", "arena FPS movement + aim", "Faction synergy building (SG2)", "map + portal-surface knowledge"],
  strategies: [
    { title: "Portal-plane escape routes", body: "Always maintain escape portal for retreat under fire; portal-cycle to disorient opponents." },
    { title: "Aggressive portal flanking", body: "Place portals for surprise flank angles behind enemy team; punish over-extension." },
    { title: "Faction team composition (SG2)", body: "Balance Aeros/Meridian/Sabrask picks for team synergy — avoid single-Faction stacking." },
  ],
  terminology: [
    { term: "Portal (2 simultaneous)", meaning: "Portal-gun-placed teleport wormholes" },
    { term: "Portalable surface", meaning: "Wall/floor eligible for portal placement (some surfaces reject portals)" },
    { term: "Faction (SG2)", meaning: "Aeros / Meridian / Sabrask ability character group" },
    { term: "1047 Games", meaning: "Studio developer + publisher" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "SG2 Casual playlists + Faction unlock", body: "Learn portal + FPS basics; try all 3 Factions." }] },
    { level: "intermediate", steps: [{ title: "Ranked climb to Diamond", body: "Ranked queue climb; team synergy focus." }] },
    { level: "advanced", steps: [{ title: "Community tournaments + high-Ranked", body: "Compete in community Ranked tournaments." }] },
  ],
  faq: [
    { question: "What happened to original Splitgate (2019)?", answer: "1047 Games ended original Splitgate service January 2024 to redirect all development resources to Splitgate 2. Original beta had run ~5 years." },
    { question: "How is Splitgate 2 different from original?", answer: "SG2 rebuilds on Unreal Engine 5, adds 3 Factions with unique abilities (SG1 had no Factions — pure arena FPS with portals), improved graphics + physics, F2P with Battle Pass + Faction unlocks. Portal mechanic core is same but with expanded modes + progression." },
  ],
  wikipediaTitle: "Splitgate",
  sources: [{ label: "Wikipedia — Splitgate", url: "https://en.wikipedia.org/wiki/Splitgate", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default splitgate;

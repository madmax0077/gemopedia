import type { Sport } from "@/lib/types";

export const theFinals: Sport = {
  id: "the-finals",
  slug: "the-finals",
  name: "The Finals",
  officialName: "THE FINALS",
  aliases: ["Finals"],
  shortDescription:
    "Embark Studios free-to-play team-based FPS (Dec 7, 2023 PS5/Xbox/PC) — 3v3v3v3 cash-grab game show with destructible environments. Set in virtual reality game show. 500k+ peak Steam concurrent; ESL World Tour esports circuit 2024.",
  longDescription:
    "The Finals is a free-to-play team-based first-person shooter developed by Swedish studio Embark Studios (founded by former DICE Battlefield veterans) — published by Embark itself, released December 7, 2023 for PS5, Xbox Series X/S, and PC (Steam). Set in a near-future virtual reality game show where contestants compete for cash prizes. Signature gameplay: 3v3v3v3 (four teams of three) or 3v3 modes on destructible environments using Embark's proprietary Ghost engine — walls, floors, ceilings, entire buildings can be blown apart. Objective modes: Cashout (steal + defend cash vaults), Bank It (collect coins), Power Shift, World Tour. Three character 'Contestant' classes: Light (fast, low-HP, cloaking), Medium (balanced, healing gadgets), Heavy (slow tank, big weapons, shields). Loadout customisation with class-specific weapons + gadgets. Peaked 500,000+ concurrent Steam players in launch week; ESL World Tour esports circuit 2024. Praised for destruction physics + team-strategy depth; criticism for matchmaking + balance issues at launch. Ongoing seasonal content (Season 5+).",
  category: "esports",
  subCategory: "team-based FPS (destructible environments)",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "21st-century", popularity: "major",
  countryOfOrigin: "SE",
  regionOfOrigin: "Sweden (Embark Studios, Stockholm)",
  estimatedOrigin: "Released Dec 7, 2023 for PS5/Xbox Series/PC by Embark Studios",
  players: { min: 6, max: 12, note: "3v3 (2 teams) or 3v3v3v3 (4 teams) modes; ranked + casual queues." },
  equipment: [
    { name: "PS5, Xbox Series X/S, PC", description: "Cross-play across all platforms; PC has M+KB advantage but heavily cross-play balanced." },
    { name: "Standard controller or M+KB", description: "PC dominates competitive; console cross-play supported with input matchmaking." },
  ],
  duration: { approximateMinutes: 15, structure: "Cashout match ~15 min; Tournament bracket 45-60 min; ESL match series 60-90 min." },
  objective: "Steal + secure cashout vaults (Cashout mode) or coin-total mode; last team standing / most cash wins.",
  matchStructure: "3v3v3v3 (4 teams) Cashout Tournament: 3-round bracket. Or 3v3 Ranked Tournament. Or non-tournament World Tour + Bank It + Power Shift.",
  basicRules: [
    { title: "Steal cash from vaults, hold cashout station", body: "Break vault → carry cashbox → deposit at random cashout station → defend for full duration." },
    { title: "Destructible environments", body: "Buildings, walls, floors — everything can be destroyed; creates new sightlines + routes." },
    { title: "3 classes: Light / Medium / Heavy", body: "Each class has distinct HP, mobility, and gadget options." },
  ],
  advancedRules: [
    { title: "Rez pads + coin respawn", body: "Killed teammates respawn if pickup up their coin token in time OR by Rez pad." },
    { title: "Cashout station timer + steal window", body: "Attacking team can steal in-progress cashout in final 30 sec." },
    { title: "Ranked Tournament format", body: "4-team bracket per round; top 2 advance; final 1v1 for round win." },
  ],
  scoring: {
    summary: "Cash + coins collected + banked wins round.",
    winCondition: "Team with most cashouts secured (or coins banked) wins round; tournament bracket eliminates losers.",
    breakdown: [{ action: "Cashout secured", points: "$10,000" }, { action: "Coin banked", points: "Coin value" }],
  },
  penalties: [
    { title: "Team wipe", body: "Team eliminated for the round until respawn timer + coin pickup." },
    { title: "Griefing / stream sniping", body: "Reportable; ban tiers per Embark policy." },
  ],
  positions: [{ name: "Light / Medium / Heavy Contestant", role: "Class-based loadouts within 3-player squad.", count: 3 }],
  officiating: { officials: ["Anti-cheat + report system"], summary: "Automated matchmaking + report-based moderation." },
  governingBodies: [
    { name: "Embark Studios", founded: 2018, headquarters: "Stockholm, Sweden" },
    { name: "ESL Gaming (World Tour)", founded: 2000, headquarters: "Cologne, Germany" },
  ],
  majorCompetitions: [
    { name: "ESL The Finals World Tour", frequency: "annual (multi-stop tour)", founded: 2024, region: "worldwide" },
    { name: "In-game Ranked Tournament seasons", frequency: "ongoing seasonal", founded: 2023, region: "global" },
  ],
  countriesPlayed: ["SE", "US", "GB", "DE", "FR", "JP", "KR", "BR", "AU"],
  famousAthletes: ["ESL The Finals World Tour teams + top ranked players from Season 1-5"],
  records: [
    { title: "500k+ peak Steam concurrent", holder: "Embark Studios", value: "Peaked 500,000+ concurrent Steam players in launch week Dec 2023", year: 2023 },
    { title: "ESL World Tour 2024 launch", holder: "ESL", value: "ESL launched official The Finals World Tour esports circuit in 2024", year: 2024 },
    { title: "Embark ex-DICE Battlefield veterans", holder: "Embark Studios", value: "Founded by Patrick Söderlund + core Battlefield DICE veterans — first game from the studio", year: 2023 },
  ],
  variants: ["the-finals-cashout", "the-finals-ranked-tournament", "the-finals-world-tour"],
  relatedSports: ["counter-strike-2", "valorant", "battlefield", "call-of-duty"],
  skills: ["destructible environment awareness", "class synergy building", "vertical + horizontal map traversal", "cashout defence rotation"],
  strategies: [
    { title: "Class synergy: Light + Medium + Heavy", body: "Standard meta squad: 1 Light (roam/flank), 1 Medium (heal/support), 1 Heavy (siege/tank)." },
    { title: "Destructible cashout defence", body: "Blow floors + walls around cashout to create funnel kill zones; deny enemy vertical assault." },
    { title: "Steal window opportunism", body: "Wait until enemy is 90% through cashout, then aggressive steal push in final 15 sec." },
  ],
  terminology: [
    { term: "Cashout", meaning: "Objective vault-stealing + deposit game mode" },
    { term: "Vault", meaning: "Cash storage to break open" },
    { term: "Cashout station", meaning: "Deposit location to score cash" },
    { term: "Contestant", meaning: "Player-character avatar in virtual game show" },
    { term: "Light/Medium/Heavy", meaning: "3 character classes with distinct HP + mobility" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Bank It + Power Shift casual modes", body: "Learn shooting + movement fundamentals." }] },
    { level: "intermediate", steps: [{ title: "Cashout Ranked queue", body: "Learn Cashout objective play + class synergy." }] },
    { level: "advanced", steps: [{ title: "World Tour + Ranked Tournament climb", body: "Compete in ESL World Tour or high-Ranked Tournament brackets." }] },
  ],
  faq: [
    { question: "Is The Finals free to play?", answer: "Yes — fully free-to-play with cosmetic monetisation (battle pass + skin store). All gameplay content, weapons, and modes are free." },
    { question: "How does destruction work in The Finals?", answer: "Embark's proprietary Ghost engine allows near-total destruction of buildings — walls, floors, ceilings, entire structures can be blown apart. This creates dynamic sightlines + new routes mid-match, distinguishing it from static-map shooters like Counter-Strike or Valorant." },
  ],
  wikipediaTitle: "The Finals",
  sources: [{ label: "Wikipedia — The Finals", url: "https://en.wikipedia.org/wiki/The_Finals", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default theFinals;

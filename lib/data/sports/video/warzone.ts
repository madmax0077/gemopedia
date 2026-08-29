import type { Sport } from "@/lib/types";

export const warzone: Sport = {
  id: "warzone",
  slug: "warzone",
  name: "Call of Duty: Warzone",
  officialName: "Call of Duty: Warzone (2022 relaunch)",
  aliases: ["Warzone 2.0", "COD Warzone", "Warzone Pacific"],
  shortDescription:
    "Free-to-play 150-player battle-royale FPS from Activision — drop into Verdansk/Al Mazrah, loot weapons, and survive the shrinking gas circle to win the last-squad-standing crown.",
  longDescription:
    "Warzone launched in March 2020 as a free tie-in to Modern Warfare (2019) and rapidly became the largest battle-royale on console, peaking at 100 million players by April 2021. The 2022 relaunch (Warzone 2.0, later rebranded back to 'Warzone') introduced the Al Mazrah map, water combat, and the DMZ extraction mode. Its Gulag redeploy system, contract-based looting, and fast time-to-kill (TTK) differentiate it from Fortnite and Apex Legends. Warzone has been a staple of the Call of Duty League ecosystem via Warzone Championship Series (WSOW) with $2M+ prize pools.",

  category: "video-games",
  subCategory: "free-to-play battle-royale FPS",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Los Angeles, California (Raven Software / Infinity Ward / Activision)",
  estimatedOrigin: "Released March 10, 2020; Warzone 2.0 relaunched November 16, 2022",

  players: { min: 1, max: 150, note: "Solos, Duos, Trios, Quads. Standard BR lobby is 150 players; Resurgence 45-90." },
  field: {
    surfaceName: "Battle-royale map",
    dimensions: "8 km × 8 km (Al Mazrah); 6 × 6 km (Verdansk)",
    description: "Large open-world map with named POIs (Airport, Downtown, Zaya Observatory) plus a shrinking safe circle every 90-180 seconds.",
  },
  equipment: [
    { name: "Gaming PC / console", description: "PC (Steam/Battle.net), PlayStation 5/4, Xbox Series X|S/One." },
    { name: "Controller or M+KB", description: "Cross-play enabled; controller has aim-assist advantage on PC." },
    { name: "Headset with mic", description: "Required for competitive squad communication." },
    { name: "Stable internet", description: "60+ Mbps recommended; low ping (<40 ms) crucial for gunfights." },
  ],
  duration: {
    approximateMinutes: 25,
    structure: "Standard BR match: 20-30 minutes. Resurgence: 12-15 minutes. Tournament formats: 4-6 matches per lobby.",
  },

  objective:
    "Be the last player or squad alive as the poisonous gas circle shrinks — through combat, looting, contracts, and buyback mechanics via the Gulag.",
  matchStructure:
    "150 players parachute onto the map. Loot floor-drops and supply boxes for weapons, armor, cash. Every 90-180s the gas circle shrinks. Killed players enter the Gulag for a 1v1 respawn duel. Alive players earn cash from contracts, kills, and loot to buy back teammates at Buy Stations. Match ends when one squad remains.",

  basicRules: [
    { title: "Parachute", body: "All players drop from a plane. Choose your landing POI — high-loot zones (Airport, Downtown) are hot, low-tier zones (edges) are safer." },
    { title: "Loot", body: "Weapons drop with random attachments and rarities (grey → gold). Armor plates absorb bullet damage; carry up to 3 stacks of 5 plates." },
    { title: "Circle", body: "Poison gas closes every 90-180s, forcing players inward. Damage over time outside the circle scales with each stage." },
    { title: "Gulag", body: "First death sends you to a 1v1 (Duos/Trios: 2v2) arena. Win to redeploy; lose stays dead until a squadmate buys you back." },
    { title: "Buy Stations", body: "Buy Self Revive ($1500), UAV ($4000), Loadout Drop ($10000), Squad Buyback ($5000/teammate)." },
    { title: "Contracts", body: "Optional side missions (Bounty, Scavenger, Recon) that reward cash and XP." },
  ],
  advancedRules: [
    { title: "Loadout Drops", body: "Bring your custom Gunsmith build via a Loadout Drop marker at Buy Stations ($10K) or free drops mid-match." },
    { title: "Redeploy Tokens", body: "In Resurgence mode, dead players auto-redeploy every 30-45s unless the whole squad is dead simultaneously." },
    { title: "Streaks", body: "In-match killstreaks (Precision Airstrike, UAV, Cluster Strike) purchasable at Buy Stations." },
  ],
  scoring: {
    summary: "Placement + kills + WSOW event points. Tournament format: cumulative kill points across N matches with win bonus.",
    winCondition: "Last squad alive wins the match. Tournament: highest cumulative points across matches.",
    breakdown: [
      { action: "Match win (Victory Royale)", points: "20-30 pts (tournament)" },
      { action: "Elimination", points: "1 pt each" },
      { action: "Placement top 5", points: "5-15 pts (tournament)" },
    ],
  },

  officiating: {
    officials: ["League operations staff", "Tournament admins"],
    summary: "Call of Duty League + WSOW use Activision-run tournament admins. Games are server-side authoritative with in-match anti-cheat (Ricochet).",
  },

  governingBodies: [
    { name: "Activision Publishing (via Call of Duty Endowment)", founded: 1979, headquarters: "Santa Monica, USA", website: "https://callofduty.com" },
  ],
  majorCompetitions: [
    { name: "Warzone World Series of Warzone (WSOW)", frequency: "annual", founded: 2022, region: "global; NA/EU/APAC/LATAM regionals", note: "$3M+ prize pool 2024" },
    { name: "Call of Duty League Warzone events (Kickoff Classic)", frequency: "annual (Feb)", founded: 2022, region: "USA" },
    { name: "Twitch Rivals Warzone Slam", frequency: "quarterly", founded: 2020, region: "streamed" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "CA", "AU", "BR", "MX", "SA", "AR", "JP", "KR", "PL"],
  famousAthletes: [
    "Aydan Conrad (US, first WSOW winner)",
    "Jukeyz (GB, KD leader)",
    "Rated (US, Twitch phenom)",
    "Metaphor (GB, WSOW champion)",
    "Newbz (US, Faze member)",
  ],
  records: [
    { title: "Peak concurrent players", holder: "Warzone", value: "100 million players by April 2021", year: 2021 },
    { title: "WSOW Global Finals prize pool", holder: "WSOW 2024", value: "$1.8 M USD", year: 2024 },
    { title: "Solo kill record", holder: "Aydan Conrad", value: "45 kills in one solo match", year: 2020 },
  ],

  variants: ["warzone-resurgence", "warzone-plunder", "dmz-mode", "warzone-mobile"],
  relatedSports: ["fortnite", "apex-legends", "pubg", "call-of-duty-esports"],

  skills: [
    "aim accuracy and recoil control",
    "map awareness + rotation planning",
    "resource management (cash, plates, ammo)",
    "squad communication + callouts",
    "gunsmith / weapon-tuning knowledge",
  ],
  strategies: [
    { title: "Rotate with the circle", body: "Anticipate the next circle center rather than chasing kills; late-game position determines wins." },
    { title: "Bank cash for loadouts", body: "Get a Loadout Drop ASAP — your custom weapons vastly outperform floor loot." },
    { title: "Contract cash trains", body: "Chain Bounty → Scavenger → Bounty to accumulate $30K+ in 5 minutes." },
    { title: "Prefire common angles", body: "Learn head-glitch spots at each POI — pre-aiming saves crucial ms in gunfights." },
  ],

  terminology: [
    { term: "Gulag", meaning: "1v1 (or 2v2) respawn arena where first-death players earn redeploy." },
    { term: "TTK", meaning: "Time-to-kill — Warzone has faster TTK than most BR games (200-400ms with meta weapons)." },
    { term: "Rebuy", meaning: "Squad Buyback at a Buy Station for $5000 per teammate." },
    { term: "Rotation", meaning: "Moving to stay ahead of the closing circle." },
    { term: "Beamed", meaning: "Getting killed extremely fast by an accurate long-range weapon." },
    { term: "Sweaty lobby", meaning: "SBMM-created lobby full of high-KD players; feels like a tournament." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play Resurgence first", body: "45-player Rebirth Island / Ashika Island maps have faster respawns and shorter matches — perfect for learning gunplay.", anchor: "variants" },
        { title: "Set custom keybinds/aim-assist", body: "Slide-cancel bind + drop-shot + tactical-crouch bindings are meta essentials." },
        { title: "Learn 3 loadout builds", body: "SMG + AR (close/mid), AR + Sniper (long-range), meta pick from wzhub.gg tier list." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Master rotations + wall-bangs", body: "Study top-100 leaderboard players' rotation footage on YouTube (JGOD, WhosImmortal)." },
        { title: "Enter WSOW opens", body: "Free-to-enter quarterly opens — 3-tournament climb qualifies you for LAN finals." },
        { title: "Optimize Gunsmith", body: "Follow TrueGameData for weapon comparisons; recoil curve + damage profile matter more than aesthetics." },
      ],
    },
  ],

  faq: [
    { question: "Is Warzone free-to-play?", answer: "Yes — Warzone is fully free across PC, PlayStation, and Xbox. Modern Warfare III / Black Ops 6 owners get bonus content." },
    { question: "How large is Warzone competitive scene?", answer: "$3M+ annual prize pool via WSOW, plus $1M+ Twitch Rivals events. Smaller than League of Legends or CS but among top 5 shooters." },
    { question: "Cross-play?", answer: "Yes — full cross-play across PC, PlayStation, and Xbox. PC/console cross-input crossplay optional." },
    { question: "How do I improve fastest?", answer: "Play Rebirth Island (fast respawn), aim-train in Aim Lab/Kovaak's daily, and watch pros' first-person POVs." },
  ],

  sources: [
    { label: "Wikipedia — Call of Duty: Warzone", url: "https://en.wikipedia.org/wiki/Call_of_Duty:_Warzone", publisher: "Wikipedia" },
    { label: "WSOW official rules", url: "https://www.callofduty.com/wsow", publisher: "Activision" },
    { label: "WZ Ranked ladder", url: "https://www.callofduty.com/warzone/ranked-play", publisher: "Activision" },
  ],
  wikipediaTitle: "Call of Duty: Warzone",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

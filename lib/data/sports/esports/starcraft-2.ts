import type { Sport } from "@/lib/types";

export const starcraft2: Sport = {
  id: "starcraft-2",
  slug: "starcraft-2",
  name: "StarCraft II",
  officialName: "StarCraft II: Wings of Liberty / Heart of the Swarm / Legacy of the Void",
  aliases: ["SC2", "StarCraft 2"],
  shortDescription:
    "Blizzard's premier real-time strategy game — 1v1 competitive battles between Terran, Zerg, and Protoss races on ladder + tournament stages, the historical spiritual home of professional esports.",
  longDescription:
    "StarCraft II launched July 2010 as the sequel to Brood War (1998), which effectively founded Korean esports. The three-race asymmetric design, ~300 APM decision-making, and 15-minute average match time make it a masterpiece of competitive design. Blizzard ended active balance updates in 2020, transferring the community-run tournament scene to ESL/ESL Pro Tour with Global StarCraft II League (GSL) in Korea and Katowice Majors + IEM European Championship globally. Prize pools have shrunk from $2M+ peaks (2013) but the Korean scene remains fiercely competitive.",

  category: "esports",
  subCategory: "real-time strategy (RTS) 1v1 competitive esports",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "major",

  countryOfOrigin: "US",
  regionOfOrigin: "Irvine, California (Blizzard Entertainment)",
  estimatedOrigin: "StarCraft II: Wings of Liberty released July 27, 2010; competitive scene founded immediately",

  players: { min: 2, max: 8, note: "1v1 competitive; 2v2, 3v3, 4v4, 8-player Archon Mode also on ladder." },
  field: {
    surfaceName: "1v1 ladder maps",
    dimensions: "128×128 to 176×176 grid",
    description: "Symmetrical maps with 2 main bases, expansions, Xel'Naga watchtowers, and rich mineral fields." },
  equipment: [
    { name: "Gaming PC", description: "Windows or macOS; free-to-play via Battle.net." },
    { name: "High-DPI mouse + mechanical keyboard", description: "300+ APM demands crisp inputs; Logitech G Pro Superlight + Ducky One 2 keyboards standard." },
    { name: "Multi-monitor setup (optional)", description: "Secondary monitor for opponent's VOD/tournament stream." },
  ],
  duration: {
    approximateMinutes: 15,
    structure: "Average match: 8-20 minutes. Best-of-5 series: 45-90 min. Best-of-7 finals: 60-120 min." },

  objective:
    "Destroy all opponent structures. Progress from Copper → Bronze → Silver → Gold → Platinum → Diamond → Master → Grandmaster league on ranked ladder.",
  matchStructure:
    "Race pick (Terran, Zerg, Protoss, or Random) → map → 15-min average game → post-game ladder MMR adjustment. Tournament: bracket of Bo3/Bo5.",

  basicRules: [
    { title: "Resources", body: "Mine minerals + gas via workers; construct buildings + units in real time." },
    { title: "Three races", body: "Terran (mobile, versatile), Zerg (mass production, mobility), Protoss (expensive, powerful). Symmetric strengths." },
    { title: "Base building", body: "Command Centers / Hatcheries / Nexuses produce workers + macro backbone." },
    { title: "Army composition", body: "Match unit counters — Immortals beat armored, Vikings beat air, Zerglings beat masses." },
    { title: "Fog of war", body: "Enemy movements hidden until scouted; scouting drives every decision." },
  ],
  advancedRules: [
    { title: "APM (Actions Per Minute)", body: "Pros routinely hit 250-400 APM in complex battles. Effective APM (eAPM) more important." },
    { title: "Build orders", body: "Optimized opening sequences (14-hatch, 3-Gate expand, 1-1-1 push) — memorized to the second." },
    { title: "Macro vs micro", body: "Macro = economy + army production; micro = unit-level control in fights." },
    { title: "Timing attacks", body: "Precisely-timed pushes exploit opponent's economic transitions." },
  ],
  scoring: {
    summary: "Ladder MMR adjusts per game; tournament format is bracket-based match wins.",
    winCondition: "Destroy all opponent structures; opponent surrenders (GG) if position is unrecoverable.",
    breakdown: [
      { action: "Ladder win", points: "+15-30 MMR" },
      { action: "Tournament series win", points: "Bracket advancement + prize" },
    ],
  },

  positions: [
    { name: "Player", role: "Solo controller of race + army; no roles.", count: 1 },
  ],
  officiating: {
    officials: ["Tournament admins (ESL, GSL, Blizzard, Katowice)"],
    summary: "Blizzard + ESL run in-game tournament realms with anti-cheat. Korean scene via AfreecaTV/OGN oversight.",
  },

  governingBodies: [
    { name: "Blizzard Entertainment", founded: 1991, headquarters: "Irvine, California, USA", website: "https://starcraft2.com" },
    { name: "ESL Pro Tour (tournament organizer)", founded: 2000, headquarters: "Cologne, Germany", website: "https://pro.eslgaming.com" },
  ],
  majorCompetitions: [
    { name: "IEM Katowice StarCraft II", frequency: "annual", founded: 2012, region: "Katowice, Poland" },
    { name: "GSL (Global StarCraft II League)", frequency: "3 seasons per year", founded: 2010, region: "Seoul, Korea" },
    { name: "ESL Pro Tour DreamHack Masters", frequency: "quarterly", founded: 2020, region: "global" },
    { name: "StarCraft II World Championship (retired)", frequency: "annual 2011-2019", founded: 2011, region: "BlizzCon" },
  ],
  countriesPlayed: ["KR", "US", "DE", "FI", "CA", "FR", "SE", "CN", "PL", "RU"],
  famousAthletes: [
    "Lee 'Serral' Sasaki (FI, first non-Korean world champion 2018)",
    "Cho 'Maru' Seong-Ju (KR, 4x GSL Champion Terran)",
    "Kim 'Stats' Dae-Yeob (KR, Protoss legend)",
    "Alex 'Reynor' Adornetto (IT, youngest Katowice winner)",
    "Kim 'Classic' Doh-Woo (KR, 2 Katowice titles)",
  ],
  records: [
    { title: "Highest single-tournament prize", holder: "SC2 WCS Global Finals 2013", value: "$250K to Sasha 'Scarlett' Hostyn (first female esports major winner)", year: 2013 },
    { title: "Serral's Katowice hat trick", holder: "Serral", value: "3 IEM Katowice titles + WCS Global Champion 2018", year: 2018 },
    { title: "Peak APM record", holder: "Innovation (KR)", value: "1200 APM burst", year: 2013 },
  ],

  variants: ["starcraft-brood-war", "warcraft-3-reforged", "age-of-empires-4"],
  relatedSports: ["age-of-empires-4", "warcraft-3", "supreme-commander"],

  skills: [
    "APM (mouse + keyboard speed)",
    "build-order memorization",
    "macro (economy) + micro (unit control) balance",
    "map awareness + scouting",
    "read + adaptation vs. opponent style",
  ],
  strategies: [
    { title: "Follow a solid build order", body: "Pick 1 build per matchup (TvZ, ZvP, etc.) — muscle memory beats improvisation for 90% of games." },
    { title: "Scout early + often", body: "12-worker overlord scout / SCV scout in every game — reactive builds beat blind cheeses." },
    { title: "Macro over cheese", body: "Long-term standard macro play beats one-off all-ins in higher leagues." },
    { title: "Learn from replays", body: "Every ladder game is auto-recorded; watch losses to identify decision failures." },
  ],

  terminology: [
    { term: "APM", meaning: "Actions Per Minute — mouse + keyboard input rate. Pros: 250-400." },
    { term: "Macro", meaning: "Economy + production management (base building)." },
    { term: "Micro", meaning: "Unit-level control (spellcasting, focus fire, positioning)." },
    { term: "GG", meaning: "'Good Game' — traditional surrender + handshake in RTS/CS." },
    { term: "Cheese", meaning: "All-in strategy that risks the game on a specific early attack." },
    { term: "Timing push", meaning: "Precisely-timed attack when your economy peaks and enemy's transitions." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play the free single-player campaign", body: "Wings of Liberty campaign teaches basic Terran mechanics + storytelling." },
        { title: "Pick one race for ladder", body: "Zerg (easier macro), Protoss (forgiving units), or Terran (technical) — stick with one for 100 games." },
        { title: "Learn 1 build per matchup", body: "Follow WinterStarcraft or LowkoTV YouTube — beginner-friendly builds." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Reach Master League", body: "Top 2% of ladder; require 200+ APM + refined build orders + game sense." },
        { title: "Enter WardiTV / TeamLiquid weeklies", body: "Small online cash tournaments open to all — great practice vs. pros." },
        { title: "Follow the Korean scene", body: "GSL VODs on YouTube are the highest-quality SC2 content ever made." },
      ],
    },
  ],

  faq: [
    { question: "Is StarCraft II free?", answer: "Yes — free-to-play since 2017 for Wings of Liberty campaign + full multiplayer. Heart of the Swarm + Legacy of the Void campaigns cost extra ($15 each)." },
    { question: "Is SC2 still active?", answer: "Yes — GSL still runs 3 seasons/year in Korea; IEM Katowice + ESL Pro Tour tournaments have $500K+ prize pools globally." },
    { question: "Which race is easiest?", answer: "Zerg (mass production simplifies macro), then Protoss (forgiving unit compositions), then Terran (technical multi-unit control)." },
    { question: "Do I need 300 APM to play?", answer: "No — Diamond league (top 20%) is achievable at 100-150 APM. Master requires 200+. Grandmaster / Pro requires 300+." },
  ],

  sources: [
    { label: "Wikipedia — StarCraft II", url: "https://en.wikipedia.org/wiki/StarCraft_II", publisher: "Wikipedia" },
    { label: "Liquipedia SC2 wiki", url: "https://liquipedia.net/starcraft2", publisher: "Liquipedia" },
    { label: "StarCraft II official", url: "https://starcraft2.blizzard.com", publisher: "Blizzard" },
  ],
  wikipediaTitle: "StarCraft II",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

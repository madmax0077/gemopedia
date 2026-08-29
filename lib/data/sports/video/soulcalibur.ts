import type { Sport } from "@/lib/types";

export const soulcalibur: Sport = {
  id: "soulcalibur",
  slug: "soulcalibur",
  name: "Soulcalibur",
  officialName: "Soulcalibur VI (Bandai Namco)",
  aliases: ["SC", "SC6", "SoulCalibur", "Soul Calibur", "Soul Edge (predecessor)"],
  shortDescription:
    "Bandai Namco's 3D weapon-based fighting series (since 1996, evolved from Soul Edge) — 8-way run 3D movement, ring-out KOs, iconic character weapons; Soulcalibur VI (2018) is EVO staple with 15-year competitive lineage.",
  longDescription:
    "Soulcalibur (Bandai Namco, first release 1996 as Soul Edge / Soul Blade) is a 3D weapon-based fighting game series where all combatants wield unique weapons (swords, spears, hammers, whips, nunchaku, fans, etc.). Distinguished by 8-way run 3D movement (walk in any direction), ring-out KOs (push opponent off stage edge = instant KO), and defensive Guard Impact parry system. Soulcalibur II (2003) is the series peak in cultural impact — featuring guest characters Link (Zelda), Heihachi (Tekken), and Spawn on different platforms. Soulcalibur VI (October 2018) is the current esports entry, running on rollback netcode with a Reversal Edge counter mechanic and Critical Edge cinematic supers. Steady EVO presence since Soulcalibur II 2003, EVO 2019 return of Soulcalibur as main stage confirmed the scene's health. Top players: Kayane (France — first female EVO fighting game champion), Woahhzz (USA), Skyll (France), Party Wolf (USA), Lolo (France), Keev (France), and Xephukai (Japan).",

  category: "video-games",
  subCategory: "3D weapon-based fighting game",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Bandai Namco — formerly Namco); series designed by Hiroaki Yotoriyama + Katsuhiro Harada team",
  estimatedOrigin: "Soul Edge / Soul Blade released December 1996 (arcade + PlayStation); Soulcalibur (SC1) Dreamcast 1998; Soulcalibur II 2003 GameCube + Xbox + PS2; Soulcalibur VI October 2018",

  players: { min: 2, max: 2, note: "1v1 competitive; team tournament formats used at some events." },
  field: {
    surfaceName: "3D fighting stage (digital arena)",
    dimensions: "Circular or square stages with edges; ring-out possible on most stages except walled 'ringout-off' variants",
    description: "20+ stages — Water Labyrinth, Astral Chaos, Kunpaetku Shrine, Palgaea Shrine, etc. Stage edges enable ring-out KOs; some stages are walled ('ringout off')." ,
  },
  equipment: [
    { name: "Gaming PC / PS5 / PS4 / Xbox Series X", description: "Cross-play PC + Xbox in SC6; rollback netcode added 2021 significantly improved online." },
    { name: "Arcade stick / Hitbox / Standard controller", description: "All 3 viable at pro level; 8-way run particularly favors joystick or leverless." },
    { name: "In-game characters + weapons + custom characters", description: "20+ characters in SC6: Mitsurugi, Sophitia, Ivy, Nightmare, Kilik, Xianghua, Voldo, Taki, Cassandra, Astaroth, Yoshimitsu, Talim, Maxi, Siegfried, Raphael, Amy, Groh, Azwel + guest characters (Geralt, 2B, Haohmaru)." },
    { name: "Custom character creator", description: "Series signature — create custom fighters using moveset base of any existing character; allowed in tournament ranked play." },
  ],
  duration: { approximateMinutes: 5, structure: "Best-of-3 rounds per match; tournament sets first-to-2 or first-to-3." },
  objective: "Deplete opponent HP to zero OR force opponent out of stage bounds (ring-out) within round timer.",
  matchStructure: "Tournament: double-elimination with first-to-2 sets in bracket, first-to-3 in top-8. Each set best-of-3 rounds.",

  basicRules: [
    { title: "3D movement (8-way run)", body: "Move in any of 8 directions on 3D plane; sidestep + weave weapon attacks." },
    { title: "Vertical vs. horizontal attacks", body: "Vertical attacks hit stepping opponents; horizontal attacks hit crouching. Fundamental mixup layer." },
    { title: "Ring-out KO", body: "Pushed off stage edge = instant round loss regardless of HP." },
    { title: "Guard button", body: "Dedicated Guard button (G) for blocking; distinct from Attack buttons." },
    { title: "Soul Charge + Critical Edge", body: "Soul Charge activates temporary powerup (adds moveset extensions); Critical Edge is cinematic super costing full meter." },
  ],
  advancedRules: [
    { title: "Guard Impact", body: "Precisely-timed Guard Impact parries opponent's attack + creates massive punish window; core defensive skill." },
    { title: "Reversal Edge (SC6)", body: "Rock-paper-scissors counter mechanic — activated to negate opponent attack + trigger scripted counter minigame." },
    { title: "Wall combos", body: "Enclosed stages (walled) enable wall bounces + extended combos; open stages enable ring-outs instead." },
    { title: "8-way run mixup", body: "Sidestep or run around opponent's attack for a 3D angle advantage; punish with rotation-side attack." },
    { title: "Break attacks", body: "Guard-crush moves (usually slow, telegraphed) break opponent's block for combo start." },
  ],
  scoring: {
    summary: "Best-of-3 rounds per set; higher round count wins set.",
    winCondition: "First to 2 rounds wins set; first to required set count wins tournament match.",
    breakdown: [
      { action: "Round won (HP depletion, ring-out, or timeout HP lead)", points: "1 round" },
      { action: "Ring-out KO", points: "1 round (regardless of HP)" },
      { action: "Perfect (no damage taken)", points: "Bragging rights" },
    ],
  },
  penalties: [
    { title: "Cheating / third-party mods", body: "Tournament DQ + Bandai Namco ban." },
    { title: "Custom characters banned at some events", body: "Tournament TOs may restrict to canon characters only." },
    { title: "Unsportsmanlike conduct at LAN", body: "Warning → DQ; enforced by EVO officials or event TOs." },
  ],

  positions: [
    { name: "Player 1", role: "1P side stage position; sides swap by round.", count: 1 },
    { name: "Player 2", role: "2P side stage position; sides swap by round.", count: 1 },
  ],
  officiating: {
    officials: ["Head referee / TO (tournament organizer)", "Bracket runners", "Streamer/observer at featured matches"],
    summary: "Tournament format — TO adjudicates disputes.",
  },

  governingBodies: [
    { name: "Bandai Namco Entertainment (game developer)", founded: 2005, headquarters: "Tokyo, Japan", website: "https://soulcalibur6.bandainamcoent.com" },
    { name: "EVO Championship Series", founded: 1996, headquarters: "USA (Sony/RTS-owned)" },
  ],
  majorCompetitions: [
    { name: "EVO Championship Series (Las Vegas — SC6 main stage 2019, 2022, side event other years)", frequency: "annual", founded: 1996, region: "worldwide" },
    { name: "Combo Breaker (Chicago)", frequency: "annual (May)", founded: 2015, region: "USA" },
    { name: "Ultimate Fighting Arena (Paris)", frequency: "annual (November)", founded: 2014, region: "Europe" },
    { name: "OGRE Battle Tournament (community European circuit)", frequency: "quarterly", founded: 2019, region: "Europe" },
  ],
  countriesPlayed: ["JP", "FR", "US", "GB", "DE", "IT", "ES", "MX", "BR", "KR", "TW", "CA"],
  famousAthletes: [
    "Kayane (Marie-Laure Norindr, France — first female EVO fighting game champion 2013 Soulcalibur V)",
    "Woahhzz (USA — 3× EVO SC6 champion 2018-2022)",
    "Skyll (France — EVO 2019 SC6 champion)",
    "Party Wolf (USA — multiple EVO top-8)",
    "Lolo (France — EU circuit dominant)",
    "Keev (France — multiple UFA champion)",
    "Xephukai (Japan — Japanese SC6 top competitor)",
  ],
  records: [
    { title: "First female EVO fighting game champion", holder: "Kayane (France) at EVO 2013 Soulcalibur V", value: "First-ever female EVO champion in a solo fighting game category — historic milestone", year: 2013 },
    { title: "Most EVO SC6 wins", holder: "Woahhzz (USA)", value: "3 EVO Soulcalibur VI titles 2018-2022 — most dominant SC6 competitor", year: 2022 },
    { title: "Longest-running 3D weapon fighter", holder: "Soulcalibur series", value: "Continuous releases from 1996 Soul Edge to Soulcalibur VI 2018 — 25+ year franchise", year: 2023 },
  ],

  variants: ["soulcalibur-vi-2018-current", "soulcalibur-v-2012-classic-esport", "soulcalibur-ii-2003-cultural-peak-with-guest-chars", "soulcalibur-iv-2008-star-wars-guest-chars"],
  relatedSports: ["tekken", "virtua-fighter", "dead-or-alive", "bushido-blade", "dragon-ball-z-budokai"],

  skills: ["8-way run 3D spatial awareness", "vertical/horizontal attack mixup literacy", "Guard Impact parry timing (frame-perfect)", "stage edge awareness (ring-out defense)", "matchup depth across 20+ characters", "weapon range + hitbox memorization"],
  strategies: [
    { title: "Ring-out win condition", body: "On open stages, push opponent toward edge with launchers + horizontal attacks; a ring-out is worth a full HP bar." },
    { title: "Guard Impact for turn-take", body: "Master GI timing to shut down opponent's pressure; forces respect + creates offensive opportunity." },
    { title: "Vertical vs. horizontal mixups", body: "Fake horizontal → interrupt with vertical when opponent sidesteps; core 3D fighter mind game." },
    { title: "Bait Critical Edge", body: "Opponent's cinematic super has huge whiff punish window; bait it out on block then hard-punish." },
    { title: "Character matchup study", body: "Weapon range varies wildly — Nightmare's zweihander outranges Talim's arm blades by 2x; adjust spacing per matchup." },
  ],

  terminology: [
    { term: "GI (Guard Impact)", meaning: "Parry mechanic — precise timing negates opponent attack + opens punish window." },
    { term: "8-way run", meaning: "Signature 3D movement — walk in any of 8 directions on the stage plane." },
    { term: "Ring-out (RO)", meaning: "Force opponent off stage edge = instant round win." },
    { term: "Soul Charge", meaning: "Temporary powerup mode with extended moveset; costs full meter." },
    { term: "Critical Edge (CE)", meaning: "Cinematic super attack costing full meter." },
    { term: "Reversal Edge (RE)", meaning: "Rock-paper-scissors counter mechanic unique to SC6." },
    { term: "8W", meaning: "Shorthand for 8-way run inputs." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Complete SC6 tutorial + Libra of Souls story mode", body: "Story mode teaches character matchups + basic strategy over ~15-20 hours." },
      { title: "Pick 1 character + learn 5 combos", body: "Start with Sophitia, Mitsurugi, or Xianghua — all balanced entry-level characters." },
      { title: "Play online ranked to Champion+ rank", body: "SC6 ranked has 5 tiers; climb to Champion (top 10%) for competitive matches." },
    ]},
    { level: "advanced", steps: [
      { title: "Attend regional weeklies + monthlies", body: "USA (Woahhzz's stream, NLBC in NYC), France (Paris circuit + Ultimate Fighting Arena), Japan (Xephukai's community) develop pro-level competitors." },
      { title: "Compete at Combo Breaker + UFA + EVO", body: "3 major LAN circuit stops per year — top-16 finishers become international known." },
      { title: "EVO main stage (when SC6 is main)", body: "SC6 has been EVO main stage 2018, 2019, 2022; Sunday finals at Michelob Ultra Arena Las Vegas." },
    ]},
  ],

  faq: [
    { question: "How is Soulcalibur different from Tekken or Street Fighter?", answer: "Soulcalibur is the only major fighting game series where all characters wield unique weapons (swords, spears, hammers, whips, fans). This makes range + hitbox reading fundamentally different from unarmed fighters. Its 8-way run 3D movement + ring-out KOs also distinguish it — Tekken has 3D movement but no ring-outs, while Street Fighter is 2D-only." },
    { question: "Is Soulcalibur still active as an esport?", answer: "Yes — Soulcalibur VI (2018) remains active on EVO main stage rotations (main 2018, 2019, 2022) plus dedicated majors like Combo Breaker + Ultimate Fighting Arena. Rollback netcode was added in 2021 revitalizing online play. Scene is smaller than Street Fighter or Tekken but has passionate global community especially in France + USA + Japan." },
    { question: "Is Soulcalibur VII coming?", answer: "As of 2026 Bandai Namco has not officially announced Soulcalibur VII. The last major title, Soulcalibur VI (2018), continues to receive occasional balance patches. Community expectation is that a next entry will eventually arrive but no confirmed timeline exists." },
  ],

  wikipediaTitle: "Soulcalibur",
  sources: [
    { label: "Soulcalibur VI", url: "https://soulcalibur6.bandainamcoent.com", publisher: "Bandai Namco" },
    { label: "Wikipedia — Soulcalibur", url: "https://en.wikipedia.org/wiki/Soulcalibur", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const virtuaFighter: Sport = {
  id: "virtua-fighter",
  slug: "virtua-fighter",
  name: "Virtua Fighter",
  officialName: "Virtua Fighter 5 R.E.V.O. (SEGA)",
  aliases: ["VF", "VF5", "Virtua Fighter 5 Ultimate Showdown", "VF5US", "Virtua Fighter 5 R.E.V.O."],
  shortDescription:
    "SEGA's foundational 3D fighting game series (since 1993, first-ever polygonal 3D fighter) — deep martial-arts-based system with no super moves, no fireballs, and pure mechanical mastery; VF5 R.E.V.O. (2024) revived the series after a decade dormancy.",
  longDescription:
    "Virtua Fighter (SEGA AM2, first release 1993) is historically important as the FIRST 3D polygonal fighting game — inventing an entire genre that spawned Tekken, Soulcalibur, and Dead or Alive. Designed by Yu Suzuki, the series is unique for its strict adherence to real-world martial arts (karate, judo, sumo, taijiquan, pankration, muay thai) and its DEEP mechanical complexity without any super meters, fireballs, or cinematic finishers — pure fighting fundamentals. Virtua Fighter 2 (1994) sold Saturn hardware in Japan. Virtua Fighter 4 Evolution (2003) is widely considered the greatest fighting game ever by top players (Daigo, Jwong). After VF5 Final Showdown (2010), the series went dormant for a decade before returning with Virtua Fighter 5 Ultimate Showdown (2021 remaster) and Virtua Fighter 5 R.E.V.O. (January 2024 — rollback netcode + gameplay refinements, the current esports entry). VF is a Japan-dominant scene with pro leagues (VF eSports Cup + Beat Tribe Cup) drawing legendary players Chibita (Lion specialist), Tsuwamono, Chief Flash Metroid (USA), Fujin, and Bunbunmaru.",

  category: "video-games",
  subCategory: "3D fighting game (martial arts)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (SEGA AM2, Tokyo); designed by Yu Suzuki — pioneer of 3D game design",
  estimatedOrigin: "Virtua Fighter (VF1) October 1993 arcade — first 3D polygonal fighting game ever; VF5 Final Showdown 2010; VF5 Ultimate Showdown June 2021; VF5 R.E.V.O. January 2024",

  players: { min: 2, max: 2, note: "1v1 competitive." },
  field: {
    surfaceName: "3D fighting stage (digital arena)",
    dimensions: "Circular or square stages ~5m diameter; ring-out possible on most stages except walled variants",
    description: "20+ stages including SEGA-signature palaces + dojos. Stage edges enable ring-out KOs; walled stages allow wall combos instead." ,
  },
  equipment: [
    { name: "Gaming PC / PS5 / Xbox Series X", description: "Cross-play in VF5 R.E.V.O.; rollback netcode added 2024 major improvement." },
    { name: "Arcade stick / Hitbox / Standard controller", description: "All viable — VF has always been played with arcade sticks + increasingly Hitbox at high level." },
    { name: "In-game characters (19 in VF5)", description: "19 characters each based on real martial art: Akira (bajiquan), Sarah (jeet kune do), Wolf (pro wrestling), Jeffry (pankration), Kage (basara ninjutsu), Lau (koken tori-ken), Pai (mizongyi), Jacky (jeet kune do), Lion (praying mantis kung fu), Aoi (aikijutsu), Vanessa (Vale Tudo), Shun (drunken boxing), Lei-Fei (shaolin), Eileen (monkey kung fu), Brad (muay thai), Goh (judo), El Blaze (lucha libre), Jean (karate)." },
  ],
  duration: { approximateMinutes: 3, structure: "Best-of-3 or best-of-5 rounds per match; tournament sets typically first-to-3 rounds (single game) or first-to-2 games in top-8." },
  objective: "Deplete opponent HP to zero OR force opponent out of stage bounds (ring-out) within round timer.",
  matchStructure: "Tournament: single-game first-to-3 rounds in bracket; first-to-2 games (each best-of-5 rounds) in top-8. Grand finals typically first-to-3 games.",

  basicRules: [
    { title: "3-button system", body: "Punch (P), Kick (K), Guard (G) + directional inputs create every move. Simplest button layout in major fighting games." },
    { title: "Throw + throw escape system", body: "Throws are unblockable but escapable with correct input; deep throw mixup game core to VF." },
    { title: "Ring-out KO", body: "Push opponent off stage edge = instant round win regardless of HP." },
    { title: "No super meter, no fireballs, no cinematic super", body: "Pure martial arts-based system; every move is a fighting technique with realistic recovery + hit properties." },
    { title: "Sidestep (3D dodge)", body: "Universal sidestep evades linear attacks; core 3D movement layer." },
  ],
  advancedRules: [
    { title: "Frame data literacy", body: "VF frame data is deep + strict — every move has precise startup / active / recovery / on-hit / on-block frames; top players memorize hundreds." },
    { title: "Struggle / OM (Offensive Movement)", body: "Cancel recovery frames of certain moves into sidestep for advanced pressure. Core high-level tech." },
    { title: "Throw escape (TE)", body: "Simultaneous same-input throw input escapes opponent throw; 2-way + 3-way TE mixups define close-range." },
    { title: "Just Frame moves", body: "Some character moves have 'Just Frame' inputs requiring frame-perfect timing for extra damage." },
    { title: "Wall combos vs. ring-outs", body: "On walled stages, drive opponent to wall for guaranteed combo; on open stages, push toward edge for ring-out." },
  ],
  scoring: {
    summary: "Best-of-3 or best-of-5 rounds per set; higher round count wins set.",
    winCondition: "First to majority of rounds wins set; first to required set count wins tournament match.",
    breakdown: [
      { action: "Round won (HP depletion, ring-out, or timeout HP lead)", points: "1 round" },
      { action: "Ring-out KO", points: "1 round (regardless of HP)" },
      { action: "Perfect (no damage taken)", points: "Bragging rights + potentially damage buff in some VF entries" },
    ],
  },
  penalties: [
    { title: "Cheating / third-party mods", body: "Tournament DQ + SEGA ban." },
    { title: "Unsportsmanlike conduct at LAN", body: "Warning → DQ; enforced by EVO / Beat Tribe Cup officials." },
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
    { name: "SEGA (game developer)", founded: 1960, headquarters: "Tokyo, Japan", website: "https://virtua-fighter.sega.com" },
    { name: "EVO Championship Series", founded: 1996, headquarters: "USA (Sony/RTS-owned)" },
  ],
  majorCompetitions: [
    { name: "Virtua Fighter eSports Cup (Japan)", frequency: "annual", founded: 2021, region: "Japan (SEGA-run)" },
    { name: "Beat Tribe Cup (Japan community circuit)", frequency: "annual", founded: 2003, region: "Japan (community-run — historic Tokyo circuit since VF4)" },
    { name: "EVO Championship Series (VF as side event or main stage)", frequency: "annual", founded: 1996, region: "worldwide (VF5 R.E.V.O. side event at EVO 2024)" },
    { name: "Combo Breaker (Chicago)", frequency: "annual (May)", founded: 2015, region: "USA" },
  ],
  countriesPlayed: ["JP", "US", "GB", "SE", "FR", "IT", "DE", "TW", "KR", "CA", "AU", "MX"],
  famousAthletes: [
    "Chibita (Ryota Fushimi, Japan — Lion specialist; Beat Tribe Cup + national champion multiple times)",
    "Tsuwamono (Japan — Sarah specialist; VF esports Cup 2022 champion)",
    "Fujin (Kim Jong-hoon, Korea — Akira specialist; international top-8)",
    "Bunbunmaru (Japan — Wolf specialist; multiple national titles)",
    "Chief Flash Metroid (Terrance Ellison, USA — VF ambassador in USA; multi-decade competitor)",
    "Daigo Umehara (Japan — Street Fighter GOAT + notable VF player; Akira main)",
  ],
  records: [
    { title: "First 3D polygonal fighting game ever", holder: "Virtua Fighter", value: "October 1993 arcade release — invented the 3D fighter genre; Museum of Modern Art (NYC) permanent collection since 2013", year: 1993 },
    { title: "Longest single-format competitive lineage", holder: "VF4 Evolution + VF5 Final Showdown", value: "Ran continuous competitive tournaments 2003-2020 without major game changes — unique fighting game longevity", year: 2020 },
    { title: "MoMA permanent collection", holder: "Virtua Fighter", value: "One of only 14 video games in Museum of Modern Art permanent collection (accessioned 2013)", year: 2013 },
  ],

  variants: ["vf5-revo-2024-current", "vf5-ultimate-showdown-2021-remaster", "vf5-final-showdown-2010-classic-competitive-goat", "vf4-evolution-2003-arcade-era-classic", "vf3tb-1996-team-battle"],
  relatedSports: ["tekken", "soulcalibur", "dead-or-alive", "fighting-vipers", "shenmue-arcade-mini-games"],

  skills: ["frame data memorization (hundreds of moves)", "throw + throw escape mind game", "sidestep mixup game", "stage awareness (ring-out defense + wall punish)", "matchup depth across 19 characters", "long-set psychology (10+ round matches)"],
  strategies: [
    { title: "Fuzzy guard defense", body: "Universal defensive technique — automatically block both mid + low mixups with correct input timing; core defensive skill." },
    { title: "OM (Offensive Movement) pressure", body: "Cancel move recovery into sidestep to evade opponent's counter + create fresh pressure; advanced tech." },
    { title: "Throw mixup pressure", body: "Close-range game is throw (unblockable, escapable) vs. strike (blockable, un-escapable); guess right = win the round." },
    { title: "Ring-out setups", body: "Drive opponent to stage edge with launchers + rising kicks; a ring-out is worth full HP." },
    { title: "Frame trap discipline", body: "After blocked normals with advantage frames, interrupt opponent's next move with fastest strike — creates guaranteed damage." },
  ],

  terminology: [
    { term: "PKG", meaning: "The 3 buttons — Punch, Kick, Guard." },
    { term: "OM (Offensive Movement)", meaning: "Cancel move recovery into sidestep; advanced VF technique." },
    { term: "TE (Throw Escape)", meaning: "Simultaneous throw input to escape opponent throw; 2-way + 3-way mixups." },
    { term: "Struggle", meaning: "Rapid button-mash to escape stun-like states or reduce their duration." },
    { term: "Fuzzy guard", meaning: "Blocking input pattern that auto-defends mid + low mixups." },
    { term: "RO (Ring-Out)", meaning: "Push opponent off stage edge = instant round win." },
    { term: "Just Frame", meaning: "Frame-perfect input timing that unlocks enhanced move damage or properties." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Complete VF5 R.E.V.O. tutorial + Character School", body: "In-game character-specific schools teach fundamentals over ~5-10 hours per character." },
      { title: "Pick 1 easy character (Akira, Sarah, or Wolf)", body: "Akira is series poster boy + balanced learning tool; Sarah is speedy technical; Wolf is grappler baseline." },
      { title: "Study frame data via Homestead Guide + Virtua Fighter Wiki", body: "Frame data literacy is more important in VF than any other fighting game — study it early." },
    ]},
    { level: "advanced", steps: [
      { title: "Play online rank matches on VF5 R.E.V.O. rollback", body: "Rollback netcode since 2024 finally makes online VF viable; climb to Master+ rank." },
      { title: "Attend Beat Tribe Cup (Tokyo) or SEGA eSports Cup", body: "Japan is the world's dominant VF region; Tokyo weekly tournaments (Ikebukuro GiGO, Shinjuku Sportsland) develop world-class competitors." },
      { title: "Compete at Combo Breaker + EVO VF side events", body: "USA circuit for Western top play — smaller but organized around Chief Flash Metroid + rising community." },
    ]},
  ],

  faq: [
    { question: "How is Virtua Fighter different from Tekken?", answer: "VF is significantly deeper mechanically but uses fewer buttons (3 vs. Tekken's 4). VF has stricter frame data literacy requirements, more precise throw/throw-escape mixups, and no character has fireballs or cinematic supers — pure fighting fundamentals. Tekken has 3D sidestep + juggle combos, whereas VF's ground game is more decisive. Many pro players consider VF the deepest fighting game system ever designed." },
    { question: "Why did Virtua Fighter go dormant for so long?", answer: "After VF5 Final Showdown (2010), SEGA shifted priorities and no new mainline entry appeared for over a decade. The 2021 remaster (VF5 Ultimate Showdown) and 2024 refinement (VF5 R.E.V.O.) marked SEGA's official return to supporting VF as a competitive game, driven by community demand and successful esports revivals from other classic titles." },
    { question: "Is VF playable competitively today?", answer: "Yes — Virtua Fighter 5 R.E.V.O. (January 2024) has rollback netcode + refined balance + cross-play, and is actively supported by SEGA's official Virtua Fighter eSports Cup. Japanese Beat Tribe Cup remains the peak competitive circuit. VF5 R.E.V.O. was an EVO 2024 side event; broader tournament revival is underway." },
  ],

  wikipediaTitle: "Virtua Fighter",
  sources: [
    { label: "Virtua Fighter", url: "https://virtua-fighter.sega.com", publisher: "SEGA" },
    { label: "Wikipedia — Virtua Fighter", url: "https://en.wikipedia.org/wiki/Virtua_Fighter", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

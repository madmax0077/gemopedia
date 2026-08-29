import type { Sport } from "@/lib/types";

export const guiltyGear: Sport = {
  id: "guilty-gear",
  slug: "guilty-gear",
  name: "Guilty Gear",
  officialName: "Guilty Gear Strive (Arc System Works)",
  aliases: ["GG", "GGST", "Guilty Gear Strive", "Guilty Gear Xrd", "Guilty Gear -Strive-"],
  shortDescription:
    "Arc System Works' anime-style 2D fighting game series (since 1998) with the fastest offense in fighting games — Roman Cancel mechanics, wall-break stages, and heavy metal soundtrack; Strive (2021) is EVO staple and biggest anime fighter esport.",
  longDescription:
    "Guilty Gear (Arc System Works, first release 1998) is an anime-style 2D fighting game series designed by Daisuke Ishiwatari with a heavy metal soundtrack and one of the most complex offensive systems in fighting games. The Roman Cancel mechanic (canceling any move into another for 25-50% Tension meter) enables extended combos, mixups, and unique defensive escapes. Guilty Gear Strive (June 2021) is the current esports tent-pole — it streamlined the notoriously deep mechanics for accessibility while preserving depth, added wall-break stage transitions, and expanded the roster to 30+ characters. Strive is a permanent EVO main-stage title with $50K+ prize pools; Arc World Tour (Arc System Works' official circuit) runs since 2019 with EVO Japan + EVO Las Vegas + regional majors culminating in ARC World Tour Finals. Top players: Daru (Japan), Nakamura Takumi (Japan), TempestNYC (USA), Zando (USA), Leffen (Sweden), Machaboo (Japan).",

  category: "video-games",
  subCategory: "2D fighting game (anime style)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Arc System Works, Yokohama); Daisuke Ishiwatari lead designer",
  estimatedOrigin: "Guilty Gear (original) May 1998 PlayStation; Guilty Gear X 2000; Guilty Gear Xrd 2014; Guilty Gear Strive June 2021",

  players: { min: 2, max: 2, note: "1v1 competitive; also 2v2 team modes in some entries." },
  field: {
    surfaceName: "2D stage (digital arena)",
    dimensions: "Standard 2D fighting stage — ~4 character-widths across; wall-break extends stage in Strive",
    description: "20+ stages with themed backgrounds; Strive introduced wall-break — pushing opponent to the wall + dealing enough damage transitions to an extended-length stage.",
  },
  equipment: [
    { name: "Gaming PC / PS5 / PS4 / Xbox Series X", description: "Cross-platform play. PC + PS5 standard for competitive; rollback netcode since Strive." },
    { name: "Arcade Stick (HORI, Qanba, Razer Panthera)", description: "Traditional fighting game control — 6-button layout + joystick." },
    { name: "Hitbox / Leverless controller", description: "All-button leverless controllers (Hitbox, Snackbox Micro) growing in fighting game community." },
    { name: "Standard controller", description: "PS5 DualSense or Xbox pad + 6-button pad (retro) also viable at pro level." },
    { name: "In-game characters + movesets", description: "30+ characters in Strive — Sol Badguy, Ky Kiske, May, Chipp, Faust, Millia, Zato-1, Ramlethal, Leo, Nagoriyuki, Giovanna, Anji Mito, I-No, Goldlewis, Jack-O, Happy Chaos, Baiken, Testament, Bridget, Sin, Bedman?, Asuka R., Johnny, Elphelt, A.B.A." },
  ],
  duration: { approximateMinutes: 5, structure: "Best-of-3 rounds per match; each round ~90 seconds; matches in tournament first-to-2 or first-to-3 sets." },
  objective: "Deplete opponent's health bar to zero using normals, specials, super moves, and Roman Cancel combos.",
  matchStructure: "Tournament: double-elimination bracket with first-to-2 sets in early rounds, first-to-3 sets in top-8, first-to-3 grand finals. Each set is best-of-3 (or 5) rounds.",

  basicRules: [
    { title: "2D 6-button fighter", body: "Punch (P), Kick (K), Slash (S), Heavy Slash (H), Dust (D — universal overhead) + Special buttons." },
    { title: "Best-of-3 rounds", body: "Each match is best-of-3 rounds; deplete opponent HP to zero wins round." },
    { title: "Tension gauge", body: "Builds via aggression + attack input; fuels Roman Cancels + supers. Max 100 Tension." },
    { title: "Burst gauge", body: "Universal defensive escape once per round; interrupts opponent's combo (unless blocked)." },
    { title: "Wall-break", body: "Pushing opponent to wall + dealing threshold damage transitions stage + gives positional reset (Strive)." },
  ],
  advancedRules: [
    { title: "Roman Cancel (RC)", body: "Cancel any move into another for 25-50% Tension. Red RC (on hit), Yellow RC (whiff), Blue RC (block), Purple RC (recovery)." },
    { title: "Faultless Defense", body: "Hold two buttons while blocking to negate chip damage + push opponent back. Costs Tension." },
    { title: "Instant Kill (IK) mode", body: "Universal 1-hit-KO super — burns full Tension + puts you in IK mode; risky, rare in top-play." },
    { title: "Positive Bonus / Negative Penalty", body: "Aggressive play awards Positive Bonus (extra Tension gain); defensive/turtling triggers Negative Penalty (Tension loss)." },
    { title: "Overdrive supers", body: "50% Tension super moves; character-specific." },
  ],
  scoring: {
    summary: "Round scoring: 2 rounds won = set win; sets required per tournament round.",
    winCondition: "Win 2 of 3 rounds to take a set; win required number of sets to advance in tournament.",
    breakdown: [
      { action: "Round won (HP to zero or timeout ahead on HP)", points: "1 round" },
      { action: "Set won (2 rounds)", points: "1 set win" },
      { action: "Perfect (0 damage taken)", points: "Bragging rights + Guts damage buff" },
    ],
  },
  penalties: [
    { title: "Ring-out (some stages)", body: "Not applicable in Guilty Gear (no ring-out mechanic)." },
    { title: "In-game exploit / mod usage", body: "Tournament DQ + Arc System Works ban." },
    { title: "Unsportsmanlike conduct at LAN", body: "Warning → DQ; enforced by EVO / ARC World Tour officials." },
  ],

  positions: [
    { name: "Player 1", role: "Left-side player on stage; alternates side by round.", count: 1 },
    { name: "Player 2", role: "Right-side player on stage; alternates side by round.", count: 1 },
  ],
  officiating: {
    officials: ["Head referee / TO (tournament organizer)", "Bracket runners", "Streamer/observer at featured matches"],
    summary: "Tournament format — TO adjudicates disputes; no real-time on-screen referee needed.",
  },

  governingBodies: [
    { name: "Arc System Works (game developer + esports operator)", founded: 1988, headquarters: "Yokohama, Japan", website: "https://www.arcsystemworks.com" },
    { name: "EVO Championship Series (independent tournament organizer)", founded: 1996, headquarters: "USA (Sony/RTS-owned since 2021)" },
  ],
  majorCompetitions: [
    { name: "EVO Championship Series (Las Vegas)", frequency: "annual (August)", founded: 1996, region: "worldwide" },
    { name: "EVO Japan", frequency: "annual (April)", founded: 2018, region: "Japan" },
    { name: "ARC World Tour (Arc System Works official circuit)", frequency: "year-round", founded: 2019, region: "worldwide" },
    { name: "ARC World Tour Finals", frequency: "annual (February)", founded: 2019, region: "rotating hosts (Tokyo, Los Angeles)" },
    { name: "Combo Breaker (Chicago)", frequency: "annual (May)", founded: 2015, region: "USA" },
  ],
  countriesPlayed: ["JP", "US", "KR", "TW", "SE", "FR", "DE", "GB", "BR", "MX", "CA", "AU"],
  famousAthletes: [
    "Daru Nakamura (Japan — Xrd + Strive legend; multiple EVO Japan)",
    "TempestNYC (USA — Nagoriyuki specialist; EVO 2022 champion)",
    "Zando (USA — Ramlethal player; top-8 EVO Strive multiple times)",
    "Leffen (William Hjelte, Sweden — Melee legend + Guilty Gear crossover competitor)",
    "Machaboo (Japan — Millia specialist)",
    "Kizzie Kay (USA — May specialist, EVO 2019 Xrd champion)",
    "Ogawa (Japan — Zato-1 world champion)",
  ],
  records: [
    { title: "First non-Japanese ARC World Tour Champion", holder: "TempestNYC (USA)", value: "First American to win ARC WT Finals in Strive era (2022)", year: 2022 },
    { title: "Largest Guilty Gear EVO field", holder: "Guilty Gear Strive at EVO 2022", value: "2,400+ entrants — largest anime fighter EVO field in history", year: 2022 },
    { title: "Longest-running fighting game franchise (from Japan)", holder: "Guilty Gear", value: "Continuous releases from 1998 to present — 25+ years of series updates", year: 2025 },
  ],

  variants: ["guilty-gear-strive-2021-current", "guilty-gear-xrd-2014-classic", "guilty-gear-x2-2002-arcade-era", "guilty-gear-xx-accent-core-plus-r"],
  relatedSports: ["street-fighter", "tekken", "blazblue", "dragon-ball-fighterz", "granblue-fantasy-versus", "under-night-in-birth"],

  skills: ["frame data memorization (10+ hours per character)", "Roman Cancel resource management", "matchup knowledge (30+ characters)", "adaptation mid-set", "execution under pressure", "input precision (frame-tight combos)"],
  strategies: [
    { title: "Roman Cancel to extend combos", body: "Red RC after connecting hits = 4-6x damage output; core Strive optimization." },
    { title: "Wall-break resource management", body: "Push opponent to wall for stage-transition damage + positional reset; conserve Tension for wall-break combo." },
    { title: "Burst awareness", body: "Save your Burst for critical defensive escape; bait opponent's Burst by feinting combo into safe blockstring." },
    { title: "Character matchup study", body: "Each of Strive's 25+ characters has 10-15 matchup-specific tactics; top players study VODs for every matchup." },
    { title: "Frame trap + throw mixups", body: "Advantage frames after blocked normals set up frame traps + tick throws — core offensive vocabulary." },
  ],

  terminology: [
    { term: "RC (Roman Cancel)", meaning: "Universal cancel mechanic; Red RC on hit, Yellow on whiff, Blue on block, Purple on recovery." },
    { term: "Burst", meaning: "Universal defensive combo-escape ability; one per round." },
    { term: "Tension", meaning: "Meter that fuels RC + supers + Faultless Defense." },
    { term: "Overdrive", meaning: "Super attack (50% Tension); character-specific." },
    { term: "Instant Kill (IK)", meaning: "1-hit-KO super requiring IK Mode activation; rarely seen in top play." },
    { term: "FD (Faultless Defense)", meaning: "Blocking with two buttons held — negates chip damage + pushes opponent back." },
    { term: "Wall-break", meaning: "Stage transition when opponent is wall-splatted and damage threshold is met." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Complete Strive's tutorial mode", body: "Extensive tutorial teaches Roman Cancel + Faultless Defense + character basics — ~2 hours." },
      { title: "Pick 1 easy character (Ky, Sol, Anji, or Nagoriyuki)", body: "Master 1 character deeply before flexing; execution basics transfer across roster." },
      { title: "Play online ranked to Ceruleon+ tier", body: "Strive's Floor system caps beginners together; climb to Floor 10 (Celestial) for competitive play." },
    ]},
    { level: "advanced", steps: [
      { title: "Attend regional weeklies + monthlies", body: "Regular local tournaments (Next Level Battle Circuit NYC, Wednesday Night Fights LA, Cologne Combo Breaker) develop pro-level play." },
      { title: "Qualify for ARC World Tour Finals", body: "Points earned at premier events (EVO, Combo Breaker, EVO Japan) earn ARC WT Finals invitation." },
      { title: "EVO / EVO Japan main stage", body: "Guilty Gear Strive main-stage EVO title since 2022 — Sunday finals at Michelob Ultra Arena Las Vegas." },
    ]},
  ],

  faq: [
    { question: "Is Guilty Gear beginner-friendly?", answer: "Guilty Gear Strive (2021) was specifically designed to be more approachable than its infamously deep predecessors (Xrd, Accent Core). Roman Cancels are more forgiving, combos are shorter, and the Floor system matches beginners with other beginners. It's still one of the deepest anime fighters, but Strive is the most beginner-friendly Guilty Gear ever." },
    { question: "How is Guilty Gear different from Street Fighter or Tekken?", answer: "Guilty Gear is a 2D anime fighter (like BlazBlue, Dragon Ball FighterZ, or Under Night In-Birth), whereas Street Fighter is a slower 2D non-anime fighter and Tekken is a 3D fighter. Guilty Gear's Roman Cancel system is unique — enabling extended combos and unique defensive tools not found in other franchises. Its rock/heavy metal soundtrack and pace also distinguish it." },
    { question: "How big is Guilty Gear's esports scene?", answer: "Guilty Gear Strive is the largest anime fighter esport — a permanent EVO main-stage title with 2,400+ EVO entrants, $50K-100K prize pools at majors, and an official developer-run ARC World Tour circuit. It's smaller than Street Fighter or Tekken (which draw 3-5K entrants) but comparable to Mortal Kombat in scale and momentum." },
  ],

  wikipediaTitle: "Guilty Gear",
  sources: [
    { label: "Arc System Works", url: "https://www.arcsystemworks.com", publisher: "Arc System Works" },
    { label: "Wikipedia — Guilty Gear", url: "https://en.wikipedia.org/wiki/Guilty_Gear", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

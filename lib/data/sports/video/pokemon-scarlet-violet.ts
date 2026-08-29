import type { Sport } from "@/lib/types";

export const pokemonScarletViolet: Sport = {
  id: "pokemon-scarlet-violet",
  slug: "pokemon-scarlet-violet",
  name: "Pokémon Scarlet and Violet",
  officialName: "Pokémon Scarlet / Pokémon Violet",
  aliases: ["Gen 9 Pokémon", "SV", "ポケットモンスター スカーレット・バイオレット"],
  shortDescription:
    "Ninth-generation open-world Pokémon RPG (Game Freak / Nintendo, Nov 18, 2022, Switch) set in the Paldea region — first fully open-world mainline entry featuring three storylines (Victory Road gym challenge, Path of Legends Titan Pokémon, Starfall Street rebel squad) and 400+ Pokémon. Terastal battle mechanic + Hidden Treasure of Area Zero DLC (2023-2024).",
  longDescription:
    "Pokémon Scarlet and Violet is the ninth-generation open-world mainline Pokémon RPG developed by Game Freak + published by Nintendo/The Pokémon Company for Nintendo Switch (November 18, 2022). Set in the Paldea region, it is the first fully open-world mainline entry — three intersecting storylines (Victory Road gym challenge, Path of Legends Titan Pokémon, Starfall Street rebel squad) can be tackled in any order + culminate in the Way Home postgame. Introduces the Terastal battle mechanic (Pokémon once-per-battle transformation into their Tera Type, changing STAB + defensive typing). Post-launch content: The Hidden Treasure of Area Zero DLC — Part 1 'The Teal Mask' (Sep 13, 2023, Kitakami region) + Part 2 'The Indigo Disk' (Dec 14, 2023, Blueberry Academy) + 'Mochi Mayhem' epilogue (Jan 11, 2024). Competitive VGC ruleset is 4-of-6 double battles with 3-min turn clock; Tera Type strategy central to modern meta. Fastest-selling Nintendo game launch ever (10M+ units in 3 days) and 26M+ lifetime sales as of 2024.",
  category: "video-games",
  subCategory: "role-playing (Pokémon mainline gen 9)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Game Freak Tokyo)",
  estimatedOrigin: "Released Nov 18, 2022; Hidden Treasure DLC Sep 2023 + Dec 2023 + Jan 2024",
  players: { min: 1, max: 2, note: "Single-player campaign; 2v2 doubles in competitive VGC + 4-player co-op raids." },
  equipment: [
    { name: "Nintendo Switch (OLED/regular/Lite)", description: "Sole platform — cartridge or digital. Runs 30 FPS docked or handheld." },
    { name: "Pokémon Home subscription", description: "Cloud storage + team-transfer between titles ($16/year Premium)." },
    { name: "Pro Controller (competitive)", description: "Preferred for VGC events over Joy-Con for reliability." },
  ],
  duration: { approximateMinutes: 30, structure: "Main story 30-40 hrs; 100% + DLC 100+ hrs; competitive VGC match 15-45 min." },
  objective: "Complete story campaign; competitive VGC — win 4v4 double battles under 3-min turn clock in Bo3 tournament format.",
  matchStructure: "Single-player 30-60 hr campaign + post-game DLC; competitive VGC is 4-of-6 double battles at 3-min turn clock.",
  basicRules: [
    { title: "6-Pokémon team, 4 brought to match", body: "Competitive VGC allows 6 Pokémon in team-sheet, 4 selected per match after team-preview." },
    { title: "Terastal once per battle", body: "Each player may Terastallize one Pokémon per battle." },
    { title: "Doubles format (VGC)", body: "2v2 on-field simultaneously; positioning + speed control critical." },
  ],
  advancedRules: [
    { title: "Held item restrictions", body: "One of each item per team; species clause + no cloneable-legendary rules per season." },
    { title: "Turn timer + team clock", body: "Turn 45 sec; each player has a 7-min team clock across the battle." },
  ],
  scoring: {
    summary: "Story: Elite Four + champion + credits + Area Zero postgame. Competitive: Bo3 double battles with ELO tracking on Battle Stadium + Pokémon Home.",
    winCondition: "Story completion; competitive — reduce opponent's team to 0 HP or force forfeit on time.",
    breakdown: [
      { action: "KO opposing Pokémon", points: "1 KO per Pokémon fainted" },
      { action: "Best-of-3 series (tournament)", points: "First to 2 game wins" },
    ],
  },
  penalties: [
    { title: "Cheating (mods/exploits)", body: "Immediate ban from Battle Stadium + tournament DQ + Pokémon Home restrictions." },
    { title: "Team submission errors", body: "Auto-loss at VGC events for wrong team-sheet or missing signatures." },
    { title: "Time/clock loss", body: "Auto-loss when turn or team clock reaches zero." },
  ],
  positions: [{ name: "Trainer", role: "Builds/plays team of 6 Pokémon; brings 4 to double-battle match.", count: 1 }],
  officiating: {
    officials: ["Tournament Organizer (TO)", "Head Judge (regional/international)", "Floor Judges", "Sanctioned Referees (VGC)"],
    summary: "Play! Pokémon program governs VGC tournaments; regionals → internationals → Worlds championship.",
  },
  governingBodies: [
    { name: "The Pokémon Company International (TPCi)", founded: 1998, headquarters: "Bellevue, Washington, USA / Tokyo, Japan" },
    { name: "Play! Pokémon", founded: 2003, headquarters: "Bellevue, Washington, USA" },
  ],
  majorCompetitions: [
    { name: "Pokémon World Championships", frequency: "annual", founded: 2004, region: "global (Honolulu 2024, Anaheim 2025)" },
    { name: "Regional Championships", frequency: "monthly", founded: 2010, region: "North America, EU, Latin America, Oceania" },
    { name: "International Championships (NAIC, EUIC, OCIC, LAIC)", frequency: "annual", founded: 2011, region: "four continental events" },
  ],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "IT", "ES", "AU", "KR", "BR"],
  famousAthletes: [
    "Shohei Kimura (Japan) — 2023 VGC World Champion (Yokohama)",
    "Wolfe Glick (USA) — multi-year VGC circuit standout",
    "Various Japan + Latin America WC regulars",
  ],
  records: [
    { title: "Fastest-selling Nintendo game", holder: "Pokémon Scarlet + Violet", value: "10 million+ units in first 3 days — fastest Nintendo launch ever", year: 2022 },
    { title: "Sales as of 2024", holder: "Game Freak / Nintendo", value: "26+ million units sold worldwide", year: 2024 },
    { title: "2023 VGC World Champion", holder: "Shohei Kimura (Japan)", value: "Won Yokohama World Championships", year: 2023 },
  ],
  variants: ["pokemon-scarlet-teal-mask-dlc", "pokemon-violet-indigo-disk-dlc"],
  relatedSports: ["pokemon-unite", "pokemon-tcg", "pokemon-video-games", "pokken-tournament"],
  skills: ["team-building", "EV/IV optimisation", "turn prediction", "tera-type strategy"],
  strategies: [
    { title: "Terastal preservation", body: "Save your team's single tera until your win-condition needs a defensive shift or offensive STAB boost." },
    { title: "Tailwind + Trick Room hybrid", body: "Bring both speed control options — tailwind vs fast teams, trick room vs balance/slow teams." },
    { title: "Redirect + boost core", body: "Pair Follow Me user (Clefairy, Amoonguss) with sweeper (Flutter Mane, Iron Bundle) to guarantee setup." },
  ],
  terminology: [
    { term: "Terastal", meaning: "Once-per-battle type transformation" },
    { term: "VGC", meaning: "Video Game Championships — official competitive format" },
    { term: "EV/IV", meaning: "Effort Values (trained) + Individual Values (innate stat genes)" },
    { term: "STAB", meaning: "Same-Type Attack Bonus (1.5× damage)" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Story campaign", body: "Learn type chart, movepools, ability interactions, EV/IV basics." }] },
    { level: "intermediate", steps: [{ title: "Ranked Battle Stadium", body: "Team-building for VGC ruleset, EV spreads, tera-type strategy, meta threats." }] },
    { level: "advanced", steps: [{ title: "VGC Regional/International", body: "Meta prediction, 6→4 selection, mind-games with opponent's tera." }] },
  ],
  faq: [
    { question: "What's the Terastal mechanic?", answer: "Terastallizing (once per battle) transforms a Pokémon into its Tera Type — can be same as original or different — changing STAB + defensive typing. Central to Scarlet/Violet competitive meta." },
    { question: "Are Scarlet and Violet the same game?", answer: "Nearly identical with version-exclusive Pokémon and legendaries (Koraidon for Scarlet, Miraidon for Violet) + different academy uniforms + professor characters." },
  ],
  wikipediaTitle: "Pokémon Scarlet and Violet",
  sources: [{ label: "Wikipedia — Pokémon Scarlet and Violet", url: "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_and_Violet", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default pokemonScarletViolet;

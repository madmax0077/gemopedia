import type { Sport } from "@/lib/types";

export const hogwartsLegacy: Sport = {
  id: "hogwarts-legacy",
  slug: "hogwarts-legacy",
  name: "Hogwarts Legacy",
  officialName: "Hogwarts Legacy",
  aliases: ["Hogwarts", "Wizarding World open-world"],
  shortDescription:
    "Open-world action RPG set in the Wizarding World (Avalanche Software + Warner Bros. Games, Feb 10, 2023 PS5/Xbox/PC; Nov 2023 Switch/last-gen) — 1890s Hogwarts + Highlands + Hogsmeade. Fifth-year student customises house, learns spells, discovers ancient magic. Best-selling game of 2023 (~24M units).",
  longDescription:
    "Hogwarts Legacy is the open-world action-RPG set in the Wizarding World of J.K. Rowling — developed by Avalanche Software + published by Warner Bros. Games. Released February 10, 2023 for PS5, Xbox Series X|S, and PC; delayed release on Nintendo Switch + PS4/Xbox One in November 2023. Set in the 1890s (a century before Harry Potter novels), player creates fifth-year Hogwarts student who discovers ancient magic + investigates goblin rebellion led by Ranrok. Full 4-house choice (Gryffindor, Slytherin, Ravenclaw, Hufflepuff) with unique common rooms + house-exclusive quests. Combat features 20+ spells across four colour-coded categories (control yellow / force red / damage purple / transfiguration green) + potion + plant + Ancient Magic finishers. Best-selling game of 2023 with ~24M units sold worldwide; strong critical reception for open-world design + Wizarding World authenticity. Discourse around J.K. Rowling controversy present in press coverage.",
  category: "video-games",
  subCategory: "open-world action-RPG (licensed)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Avalanche Software Salt Lake City + Warner Bros. Games)",
  estimatedOrigin: "Released Feb 10, 2023 for current-gen; Nov 2023 for last-gen + Switch",
  players: { min: 1, max: 1, note: "Single-player only." },
  equipment: [
    { name: "PS5 / Xbox Series X|S / PC / PS4 / Xbox One / Switch", description: "Multi-platform; current-gen highest fidelity (4K 60 FPS)." },
    { name: "DualSense (PS5) adaptive triggers", description: "Spell-casting rhythm reflected in adaptive trigger resistance." },
  ],
  duration: { approximateMinutes: 30, structure: "Main quest 30-40 hrs; 100% completionist 80-100 hrs." },
  objective: "Investigate goblin rebellion + discover ancient magic secrets; graduate as a wizard.",
  matchStructure: "Single-player open-world quest + faction storylines + house-specific content.",
  basicRules: [
    { title: "4-house selection at start", body: "Sorting Hat quiz + player override; house determines dorm, common room, and 1 quest chain." },
    { title: "20+ spells in 4 categories", body: "Control (yellow/levioso/glacius), Force (red/depulso/expelliarmus), Damage (purple/confringo/incendio), Transfiguration (green/transformation)." },
    { title: "Companion side quests", body: "3 main student companions (Poppy, Sebastian, Natsai) with dedicated side-quest chains." },
  ],
  advancedRules: [
    { title: "Ancient Magic finishers", body: "Build meter through combat; unleash cinematic Ancient Magic attack for area burst." },
    { title: "Restricted Section spells", body: "Unforgivable Curses (Crucio, Imperio, Avada Kedavra) unlockable through Sebastian storyline (optional)." },
  ],
  scoring: {
    summary: "Main quest progression + Field Guide completion + Merlin Trial completion + house cup + ancient magic knowledge.",
    winCondition: "Complete story + optional 100% (all trials, chests, collectibles).",
    breakdown: [{ action: "Main quest completion", points: "Story credits" }],
  },
  penalties: [
    { title: "Death (Game Over)", body: "Reload autosave; no permanent loss." },
    { title: "Detention (missable optional)", body: "Some late-night activities trigger detention consequences; not permanent." },
  ],
  positions: [{ name: "Player (Custom fifth-year student)", role: "Hogwarts student wizard.", count: 1 }],
  officiating: { officials: ["Speedrun.com moderators"], summary: "Single-player only." },
  governingBodies: [
    { name: "Warner Bros. Games", founded: 2004, headquarters: "Burbank, California, USA" },
    { name: "Avalanche Software", founded: 1995, headquarters: "Salt Lake City, Utah, USA" },
  ],
  majorCompetitions: [
    { name: "Speedrun.com Hogwarts Legacy leaderboards", frequency: "ongoing", founded: 2023, region: "global (community)" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "IT", "ES", "AU", "JP", "BR"],
  famousAthletes: ["Community speedrunners establishing 2023 Any% + 100% leaderboards"],
  records: [
    { title: "Best-selling game of 2023", holder: "Warner Bros. Games", value: "~24 million units sold in 2023 alone (per Circana + market analysts)", year: 2023 },
    { title: "First-day sales record", holder: "Warner Bros. Games", value: "Highest-grossing single-player launch of 2023", year: 2023 },
  ],
  variants: ["hogwarts-legacy-standard", "hogwarts-legacy-deluxe-onyx-hippogriff"],
  relatedSports: ["harry-potter-quidditch-champions", "harry-potter-magic-awakened", "elden-ring", "zelda-tears-of-the-kingdom"],
  skills: ["spell rotation", "combat combos", "Field Guide collection", "Merlin trial puzzles"],
  strategies: [
    { title: "Spell colour-cycling", body: "Match spell colour to enemy shield colour to break through defenses." },
    { title: "Ancient Magic burst timing", body: "Save Ancient Magic burst for surrounded encounters or high-HP enemies." },
    { title: "Broomstick fast-travel + Floo Flame chain", body: "Combine broom flight + unlocked Floo Flames for efficient traversal." },
  ],
  terminology: [
    { term: "Ancient Magic", meaning: "Special player-only magic separate from standard spells" },
    { term: "Merlin Trial", meaning: "Open-world puzzle activation" },
    { term: "Field Guide", meaning: "In-game encyclopedia + collectible tracker" },
    { term: "Floo Flame", meaning: "Fast-travel points across Hogwarts + Highlands" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Hogwarts intro + first spells", body: "Sorting Hat, common room, first class (Charms/Transfiguration/Defense)." }] },
    { level: "intermediate", steps: [{ title: "House quest + companion storylines", body: "House-specific quest, 3 companion quest chains, Room of Requirement." }] },
    { level: "advanced", steps: [{ title: "100% completion + speedrun", body: "All Merlin Trials + Field Guide + Ancient Magic mastery." }] },
  ],
  faq: [
    { question: "Does the game include the Unforgivable Curses?", answer: "Yes — through Sebastian's storyline you can learn Crucio, Imperio, and Avada Kedavra. Optional and doesn't affect main story." },
    { question: "Is it multiplayer?", answer: "No — Hogwarts Legacy is single-player only. Warner Bros. released Quidditch Champions separately as multiplayer companion." },
  ],
  wikipediaTitle: "Hogwarts Legacy",
  sources: [{ label: "Wikipedia — Hogwarts Legacy", url: "https://en.wikipedia.org/wiki/Hogwarts_Legacy", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default hogwartsLegacy;

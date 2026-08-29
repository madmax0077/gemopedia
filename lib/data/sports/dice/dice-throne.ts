import type { Sport } from "@/lib/types";

export const diceThrone: Sport = {
  id: "dice-throne",
  slug: "dice-throne",
  name: "Dice Throne",
  officialName: "Dice Throne (Roxley Games)",
  aliases: ["Dice Throne S1", "Dice Throne S2"],
  shortDescription:
    "Roxley Games 2-6 player asymmetric dice-combat game (Manny Trembley + Nate Chatellier, 2018) — 24+ character heroes each with unique dice + Yahtzee-style rolling + card upgrades. Simple turn: roll dice, activate abilities, attack. Massively backed on Kickstarter.",
  longDescription:
    "Dice Throne is a fast-paced 2-6 player asymmetric dice-combat card game designed by Manny Trembley + Nate Chatellier + published by Roxley Games (Canada). Kickstarted 2018 (Season 1) + 2019 (Season 2) — raised $2M+ combined. Each player picks 1 of 24+ character heroes (Monk, Barbarian, Pyromancer, Shadow Thief, Cursed Pirate, Samurai, Vampire Lord, etc.) — each with unique dice, hero mat, ability cards, and 5+ signature attack abilities. Combat: roll 5 dice Yahtzee-style (up to 3 rolls with reroll), activate matching-face ability from hero card, resolve damage. HP starts at 50; reduce opponent to 0 = win. Card play + upgrades between rounds add strategy layers. Play formats: 1v1 (best-of-3), 2v2, 3v3, free-for-all. Extremely popular in casual + light-strategy scene; Season 1 heroes (8 characters) + Season 2 (16 characters + expansions) + crossover expansions (Marvel Dice Throne 2022 with Iron Man, Black Panther, Loki, Scarlet Witch). Wildly popular gateway asymmetric game — comparable in market space to Root, but faster + more accessible.",
  category: "dice-games",
  subCategory: "asymmetric dice combat (hero brawler)",
  sportType: "mixed", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "CA",
  regionOfOrigin: "Canada (Roxley Games, Calgary)",
  estimatedOrigin: "Season 1 Kickstarted 2018; Season 2 2019; Marvel Dice Throne 2022",
  players: { min: 2, max: 6, note: "1v1 (best) + 2v2 + 3v3 + FFA modes." },
  equipment: [
    { name: "24+ character hero decks + dice", description: "Each hero has custom dice + card deck + hero mat." },
    { name: "Hero mat + HP tracker", description: "Individual player mat with 50 HP tracker + ability slots." },
    { name: "Combat point tokens", description: "Currency between rounds for upgrades." },
  ],
  duration: { approximateMinutes: 30, structure: "1v1 round ~20-30 min; 2v2 team round ~45-60 min." },
  objective: "Reduce opponent HP from 50 to 0 by rolling matching-ability dice combos.",
  matchStructure: "Round-based: each round players roll dice (up to 3 rerolls), activate matching-face abilities, resolve damage.",
  basicRules: [
    { title: "Roll 5 dice, up to 3 times (Yahtzee-style)", body: "Roll all 5 dice, then hold + reroll up to 2 more times." },
    { title: "Match dice to hero ability card", body: "Ability activates based on dice combination (pair, triple, straight, etc.)." },
    { title: "Reduce opponent HP to 0", body: "First player to bring opponent from 50 to 0 HP wins." },
  ],
  advancedRules: [
    { title: "Card play + upgrades between rounds", body: "Between rounds, spend combat points to upgrade abilities + play tactical cards." },
    { title: "Hero-specific mechanics", body: "Each hero has unique passive + active mechanics (Pyromancer's Elementary Combustion chains, Monk's Meditation for extra dice)." },
    { title: "Team formats (2v2, 3v3)", body: "Team formats add cross-turn ability interactions + support-role heroes." },
  ],
  scoring: {
    summary: "First to reduce opponent HP to 0 wins.",
    winCondition: "Opponent HP reaches 0.",
    breakdown: [{ action: "Attack damage", points: "Ability-specific damage" }],
  },
  penalties: [
    { title: "Missed roll (no matching ability)", body: "Turn passed with minimal action." },
    { title: "Wasted rerolls", body: "Roll all 3 times without landing viable combo = wasted turn." },
  ],
  positions: [{ name: "Hero (24+ characters)", role: "Solo player picking hero for combat.", count: 1 }],
  officiating: { officials: ["Group consensus"], summary: "No formal officials." },
  governingBodies: [
    { name: "Roxley Games", founded: 2014, headquarters: "Calgary, Alberta, Canada" },
  ],
  majorCompetitions: [
    { name: "Community tournaments (BGG, Reddit)", frequency: "ongoing (community-run)", founded: 2019, region: "worldwide (community)" },
  ],
  countriesPlayed: ["CA", "US", "GB", "DE", "AU", "FR", "IT", "ES", "BR"],
  famousAthletes: ["Manny Trembley (designer)", "Nate Chatellier (designer)"],
  records: [
    { title: "$2M+ Kickstarter", holder: "Roxley Games", value: "Season 1 + Season 2 combined Kickstarter raised $2M+ USD", year: 2019 },
    { title: "Marvel Dice Throne 2022", holder: "Roxley + Marvel", value: "Marvel Dice Throne (2022) crossover expansion with Iron Man, Black Panther, Loki, Scarlet Witch — mainstream awareness boost", year: 2022 },
  ],
  variants: ["dice-throne-s1", "dice-throne-s2", "marvel-dice-throne", "dice-throne-adventures-cooperative"],
  relatedSports: ["king-of-tokyo", "sagrada", "roll-through-the-ages", "elder-sign"],
  skills: ["Yahtzee dice-probability reading", "hero-ability matchup knowledge", "reroll decision-making", "asymmetric hero mastery"],
  strategies: [
    { title: "Hero-matchup adaptation", body: "Certain heroes counter others — read opponent hero + adapt strategy accordingly." },
    { title: "Reroll for highest-damage ability", body: "Sometimes better to skip low-damage ability + reroll for signature high-damage combo." },
    { title: "Combat point saving vs spending", body: "Save combat points for game-defining upgrades vs. spend immediately for tempo advantage." },
  ],
  terminology: [
    { term: "Hero", meaning: "Character selected for combat" },
    { term: "Ability card", meaning: "Attack/utility abilities triggered by matching dice" },
    { term: "Combat points", meaning: "Currency for upgrades between rounds" },
    { term: "Yahtzee-style rerolls", meaning: "Roll 5 dice, hold some, reroll rest up to 2 more times" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Season 1 Monk vs Barbarian intro", body: "Simplest heroes for learning core mechanics." }] },
    { level: "intermediate", steps: [{ title: "All Season 1 + Season 2 heroes", body: "Master matchups across 24 heroes." }] },
    { level: "advanced", steps: [{ title: "2v2 team + tournament strategy", body: "Team formats + community tournament competitions." }] },
  ],
  faq: [
    { question: "How does Dice Throne compare to King of Tokyo?", answer: "Both are dice-rolling combat games. King of Tokyo is simpler (5-6 players, monster theme, ~30 min). Dice Throne has deeper asymmetric hero mechanics + more variety + longer play time, closer to a light-CCG feel." },
    { question: "Is Dice Throne cooperative?", answer: "Primarily competitive (PvP hero brawler). Dice Throne Adventures (2022+) added cooperative campaign mode with 5-mission story arcs for 1-4 players vs. AI bosses." },
  ],
  wikipediaTitle: "Dice Throne",
  sources: [{ label: "BoardGameGeek — Dice Throne", url: "https://boardgamegeek.com/boardgame/216734/dice-throne", publisher: "BoardGameGeek" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default diceThrone;

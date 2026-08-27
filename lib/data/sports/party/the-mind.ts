import type { Sport } from "@/lib/types";

export const theMind: Sport = {
  id: "the-mind",
  slug: "the-mind",
  name: "The Mind",
  officialName: "The Mind",
  aliases: ["The Mind"],
  shortDescription:
    "REVOLUTIONARY COOPERATIVE CARD GAME (2018) by WOLFGANG WARSCH, published by NÜRNBERGER-SPIELKARTEN-VERLAG (NSV) / PANDASAURUS GAMES. 2-4 players cooperatively play cards in ASCENDING ORDER from 1-100 WITHOUT COMMUNICATING (no words, no gestures, no signals). Somehow it works via 'mental sync' + timing. Spiel des Jahres 2018 NOMINEE (game of year). Widely considered one of THE MOST INNOVATIVE PARTY GAMES OF THE 2010s. Held BGG top-100 party. 15-20 min. Simple, magical, unforgettable.",
  longDescription:
    "THE MIND is a REVOLUTIONARY COOPERATIVE CARD GAME (2018) designed by WOLFGANG WARSCH (Austria, also Wavelength + The Quacks of Quedlinburg), published by NÜRNBERGER-SPIELKARTEN-VERLAG (NSV, Germany) + PANDASAURUS GAMES (USA distribution). 2-4 PLAYERS cooperatively play cards in ASCENDING ORDER from 1-100 WITHOUT COMMUNICATING — no words, no gestures, no signals, no eye contact conventions (though eye contact allowed). Somehow it works via 'MENTAL SYNC' + shared TIMING intuition. Considered one of THE MOST INNOVATIVE + POLARIZING party games of the 2010s — LOVE IT (magical) or HATE IT (arbitrary). SPIEL DES JAHRES 2018 NOMINEE (German mainstream Game of Year). HELD BGG TOP-100 PARTY. 15-20 MIN PER GAME. GAMEPLAY: Deck of 100 cards numbered 1-100. Play through LEVELS: Level 1 = each player dealt 1 card; Level 2 = 2 cards each; up to Level 8-12 depending on player count. GOAL: Play all cards in ASCENDING ORDER without communicating. When you feel your card is next-smallest played, place it down. If any player has a lower card in hand, LOSE A LIFE. Team starts with 3 LIVES + 3 SHURIKENS (throw shuriken = everyone reveals their lowest card = discarded safely). Additional life at level 3, 6, 9; additional shuriken at level 2, 5, 8. Complete all levels for VICTORY. RECEPTION: Spiel des Jahres 2018 NOMINEE (huge honor); Kennerspiel des Jahres 2018 recommended; BGG top-100 party consistently; widely polarizing but LOVED by cooperative gamers; considered one of the MOST UNUSUAL + MEMORABLE PARTY GAMES EVER.",
  category: "party-games",
  subCategory: "cooperative card game / silent communication / party / experimental / Warsch",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "AT",
  regionOfOrigin: "Austria (Wolfgang Warsch designer) / Germany (NSV publisher)",
  estimatedOrigin: "Designed 2016-2018 Wolfgang Warsch; released 2018 NSV; sequel The Mind Extreme 2019",
  players: { min: 2, max: 4, note: "2-4 players; BEST AT 3-4 for full experience. 2p is different + easier." },
  field: {
    surfaceName: "Table for card play",
    dimensions: "~60×60cm",
    description: "Central discard pile (played cards) + life + shuriken tracker. Each player has small hand of cards.",
  },
  equipment: [
    { name: "The Mind base box", description: "$15 USD; 100 cards + life/shuriken cards" },
    { name: "The Mind Extreme (2019 sequel)", description: "$15; 2 decks (ascending + descending)" },
    { name: "100-card deck (numbered 1-100)", description: "Core content" },
    { name: "Life + shuriken tracker cards", description: "Track team resources" },
  ],
  duration: { approximateMinutes: 20, structure: "15-25 min per full playthrough of 8-12 levels." },
  objective: "Cooperatively complete all levels by playing cards 1-100 in ASCENDING order without communicating. Lose all lives = defeat.",
  basicRules: [
    { title: "100-card deck numbered 1-100; players cooperatively play in ascending order", body: "No communication allowed." },
    { title: "Levels: Level 1 = 1 card each; Level 2 = 2 cards each; up to Level 8-12", body: "Cards per hand increase per level." },
    { title: "When you feel your card is next-smallest, play it", body: "Silent timing sync." },
    { title: "If someone plays wrong card (lower card in someone's hand), LOSE A LIFE", body: "3 lives to start." },
    { title: "Shuriken (throw = everyone reveals lowest card + discards safely)", body: "3 shurikens to start; add per level." },
    { title: "Complete all levels = victory", body: "Level 8-12 depending on player count." },
  ],
  scoring: {
    summary: "Cooperative: complete all levels = victory; lose all lives = defeat.",
    breakdown: [
      { action: "Card played correctly", points: "Progress to next" },
      { action: "Wrong card (missed lower)", points: "Lose 1 life" },
      { action: "Shuriken thrown", points: "Everyone reveals lowest; safe discard" },
      { action: "Complete final level", points: "VICTORY" },
    ],
    winCondition: "Complete all levels without running out of lives.",
  },
  governingBodies: [
    { name: "Nürnberger-Spielkarten-Verlag (NSV, publisher)", founded: 1948, headquarters: "Germany" },
    { name: "Pandasaurus Games (US distribution)", founded: 2015, headquarters: "USA" },
    { name: "Wolfgang Warsch (designer)", founded: 1976, headquarters: "Austria" },
  ],
  majorCompetitions: [
    { name: "Spiel des Jahres 2018 NOMINEE", frequency: "annual", founded: 1978, region: "Germany" },
    { name: "Kennerspiel des Jahres 2018 recommended", frequency: "annual", founded: 2011, region: "Germany" },
    { name: "BGG top-100 party consistently", frequency: "ongoing", founded: 2018, region: "worldwide" },
  ],
  countriesPlayed: ["DE", "AT", "US", "GB", "FR", "IT", "ES", "PL", "AU", "CA", "SE", "NL", "JP"],
  famousAthletes: [
    "Wolfgang Warsch (Austria) — Designer; also Wavelength, The Quacks of Quedlinburg (Kennerspiel 2018)",
    "Oliver Freudenreich (Germany) — Illustrator",
  ],
  variants: [
    "the-mind-base-2018",
    "the-mind-extreme-2019-sequel-ascending-plus-descending-decks",
    "the-mind-house-rule-narration-variant",
  ],
  relatedSports: ["the-crew", "hanabi", "just-one", "codenames", "wavelength"],
  skills: ["silent timing intuition", "reading opponents' body language", "mental synchronization", "risk assessment"],
  strategies: [
    { title: "Trust the process", body: "Don't overthink; timing sync develops through games." },
    { title: "Small cards = play fast; big cards = wait", body: "Card 3 plays within seconds; card 87 waits." },
    { title: "Shuriken timing", body: "Save for confusing hands (e.g. clustered mid-range cards)." },
    { title: "Match player breathing rhythm", body: "Sync develops physiologically." },
    { title: "Don't quit early", body: "Level 3 is a threshold — bonus life makes 4+ possible." },
  ],
  terminology: [
    { term: "Level", meaning: "Round; cards per hand = level number." },
    { term: "Life", meaning: "3 starting; lose one per mistake; add at level 3, 6, 9." },
    { term: "Shuriken", meaning: "3 starting; throw = everyone discards lowest card safely; add at level 2, 5, 8." },
    { term: "Silent play", meaning: "No verbal or gestural communication allowed." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy The Mind ($15)", body: "Cheap + fast learning." },
      { title: "Play 3-4 levels first time", body: "Sync develops slowly." },
    ]},
  ],
  faq: [
    { question: "What is The Mind?", answer: "REVOLUTIONARY COOPERATIVE CARD GAME (2018) by Wolfgang Warsch. 2-4 players cooperatively play cards 1-100 in ASCENDING order WITHOUT COMMUNICATING. Somehow works via mental sync + timing. Spiel des Jahres 2018 NOMINEE. Widely considered one of THE MOST INNOVATIVE + POLARIZING party games of the 2010s. 15-20 min. Simple + magical + unforgettable." },
    { question: "Does The Mind actually work?", answer: "SURPRISINGLY YES — but polarizing. Some groups develop UNCANNY sync + succeed at levels 8-12. Other groups feel it's arbitrary + luck-driven. TRUST the process; sync develops through 3-5 games. WORKS BEST with people you know well + can read body language. If you love cooperative games + can embrace subtle intuition, LOVE IT. If you prefer logic-driven games, HATE IT. Polarizing but memorable." },
  ],
  wikipediaTitle: "The Mind (card game)",
  sources: [
    { label: "NSV — The Mind", url: "https://www.nsv.de/en/product/the-mind/", publisher: "NSV" },
    { label: "BoardGameGeek — The Mind", url: "https://boardgamegeek.com/boardgame/244992/mind", publisher: "BGG" },
    { label: "Wikipedia — The Mind", url: "https://en.wikipedia.org/wiki/The_Mind_(card_game)", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-27",
  confidence: "verified",
};

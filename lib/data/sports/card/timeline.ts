import type { Sport } from "@/lib/types";

export const timeline: Sport = {
  id: "timeline",
  slug: "timeline",
  name: "Timeline",
  officialName: "Timeline (card game series)",
  aliases: ["Timeline Classic", "Timeline Inventions", "Timeline Diversity"],
  shortDescription:
    "SIMPLE + BRILLIANT HISTORY TRIVIA CARD GAME by FRÉDÉRIC HENRY + published by ASMODEE + BOMBYX (France, 2010). Each card has an EVENT/INVENTION/DISCOVERY on one side (with picture + name) + the YEAR IT HAPPENED on the reverse. Players place cards in chronological order on the shared TIMELINE without seeing the year first. Guess wrong → discard. First to empty hand wins. 15+ THEMED SETS (Inventions, Historical Events, Discoveries, Music & Cinema, Diversity, Star Wars, Titanic, Dinosaurs, Sports, Africa, etc.). MIX + MATCH sets. FAMILY-FRIENDLY 15-min games. 5M+ COPIES sold across all editions.",
  longDescription:
    "TIMELINE is a SIMPLE + BRILLIANT HISTORY TRIVIA CARD GAME designed by FRÉDÉRIC HENRY + published by ASMODEE (France, 2010) — originally under BOMBYX imprint. Each of ~110 CARDS per set has an EVENT/INVENTION/DISCOVERY on ONE SIDE (with picture + short name/description) + the YEAR IT HAPPENED on the REVERSE SIDE. Players are dealt 4-6 cards face-up (event side); a card is placed face-up on the table (both sides revealed) as SEED. On your turn: play 1 card from your hand into the TIMELINE — place it BEFORE, AFTER, or BETWEEN existing cards in what you think is chronological order. Flip your card to reveal year: if CORRECT → card stays; if WRONG → discard, and draw new. First to EMPTY HAND wins. Beautiful simplicity + educational (learn history via play). 15+ THEMED SETS: TIMELINE CLASSIC (mixed events), TIMELINE INVENTIONS (technology), TIMELINE HISTORICAL EVENTS (major world events), TIMELINE DISCOVERIES (scientific + cultural), TIMELINE MUSIC & CINEMA (pop culture), TIMELINE DIVERSITY (broadest events), TIMELINE STAR WARS (fictional universe timeline), TIMELINE TITANIC (specific event), TIMELINE DINOSAURS + PREHISTORY, TIMELINE SPORTS, TIMELINE AFRICA, TIMELINE AMERICAN HISTORY, TIMELINE FRENCH HISTORY (regional), plus TIMELINE TWIST (2020 variant with modifier cards), TIMELINE CHALLENGE (2016 party variant). SETS ARE MIX + MATCH — combine multiple sets for expanded card pool. FAMILY-FRIENDLY 15-min games. Perfect for 2-8 players + any age (kids learn history; adults enjoy trivia). 5M+ copies sold across all editions worldwide.",
  category: "card-games",
  subCategory: "trivia / history / educational / party / family / Asmodee / Bombyx",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (Bombyx/Asmodee)",
  estimatedOrigin: "2010 first Timeline set; 15+ themed sets since",
  players: { min: 2, max: 8, note: "2-8 players; family-friendly for all ages 8+." },
  field: {
    surfaceName: "Small tabletop",
    dimensions: "Small tabletop or coffee table (~40cm × 50cm)",
    description: "Home tabletop or portable; small tin holds cards.",
  },
  equipment: [
    { name: "Timeline Classic ($15 USD)", description: "Base game; 110 cards in metal tin" },
    { name: "Timeline Inventions / Discoveries / Historical Events / Diversity ($15 each)", description: "Themed sets; combine with base" },
    { name: "Timeline Star Wars / Dinosaurs / Titanic ($15 each)", description: "Themed sets" },
    { name: "Timeline Challenge / Twist ($20-30)", description: "Party + variant versions" },
  ],
  duration: { approximateMinutes: 15, structure: "10-20 minutes per game. Fast + resetable." },
  objective: "Be first player to correctly place all your cards into the shared chronological timeline.",
  basicRules: [
    { title: "Deal each player 4-6 cards face-up (event side)", body: "See event, not year." },
    { title: "1 seed card placed face-up on table with both sides visible", body: "Starting timeline anchor." },
    { title: "On your turn: place 1 card from hand into timeline (before/after/between existing cards)", body: "Guess chronological order." },
    { title: "Flip your card: if year is correctly placed → stays; if wrong → discard + draw new", body: "Correct guessing eliminates card." },
    { title: "First to empty hand wins", body: "Race to knowledge + luck." },
  ],
  scoring: {
    summary: "First to empty hand wins.",
    breakdown: [
      { action: "Card correctly placed in timeline", points: "Card stays; one less in hand" },
      { action: "Card wrongly placed", points: "Discard; draw replacement" },
      { action: "Empty hand", points: "Win game" },
    ],
    winCondition: "First player to correctly place all cards.",
  },
  governingBodies: [
    { name: "Asmodee (publisher)", founded: 1995, headquarters: "Paris, France" },
    { name: "Bombyx (Asmodee imprint)", founded: 2010, headquarters: "France" },
  ],
  majorCompetitions: [
    { name: "Casual + family game; no formal competitions", frequency: "N/A", founded: 2010, region: "worldwide" },
  ],
  countriesPlayed: ["FR", "US", "GB", "DE", "IT", "ES", "SE", "PL", "AU", "CA", "BR", "JP", "NL"],
  famousAthletes: [
    "Frédéric Henry (FR) — Designer",
  ],
  variants: [
    "timeline-2010-classic-first-set",
    "timeline-inventions-2011",
    "timeline-historical-events-2011",
    "timeline-discoveries-2012",
    "timeline-music-cinema-2013",
    "timeline-diversity-2014",
    "timeline-challenge-2016-party-version",
    "timeline-twist-2020-with-modifiers",
    "timeline-star-wars-various-years",
    "timeline-titanic-2013",
    "timeline-dinosaurs-prehistory-2015",
    "timeline-sports-2015",
    "timeline-africa-french-english-us-history-regional",
    "cardline-various-cardline-critters-globes",
  ],
  relatedSports: ["cardline", "trivial-pursuit", "dixit", "codenames", "just-one"],
  skills: ["general knowledge (history)", "estimation + inference", "elimination (narrowing possible dates)", "family-friendly party skills"],
  strategies: [
    { title: "Place cards where certainty is highest", body: "Save uncertain cards for later when timeline has more anchor points." },
    { title: "Watch other players' successful placements", body: "Learn dates you didn't know." },
    { title: "Combine multiple sets for richer variety", body: "Prevents repetition." },
  ],
  terminology: [
    { term: "Card", meaning: "Event/invention/discovery + year (reverse)." },
    { term: "Timeline", meaning: "Shared chronological arrangement." },
    { term: "Seed card", meaning: "Starting anchor card, both sides visible." },
    { term: "Placement", meaning: "Player action; place hand card into timeline." },
    { term: "Themed set", meaning: "Cards on specific topic (Inventions, Historical, etc.)." },
    { term: "Mix + match", meaning: "Combine multiple sets in same game." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy Timeline Classic ($15)", body: "Simple entry." },
      { title: "Play with family/friends 15-min sessions", body: "Casual play." },
    ]},
    { level: "intermediate", steps: [
      { title: "Add themed sets you enjoy", body: "Mix Inventions + Historical + Discoveries." },
    ]},
    { level: "advanced", steps: [
      { title: "Combine 3-4 sets for full 200+ card pool", body: "Extended variety." },
    ]},
  ],
  faq: [
    { question: "What is Timeline?", answer: "SIMPLE + BRILLIANT HISTORY TRIVIA CARD GAME by FRÉDÉRIC HENRY + published by ASMODEE + BOMBYX (France, 2010). Each card has an EVENT/INVENTION/DISCOVERY on one side + the YEAR on the reverse. Players place cards in chronological order on the shared TIMELINE without seeing the year first. Guess wrong → discard. First to empty hand wins. 15+ THEMED SETS (Inventions, Historical Events, Discoveries, Music & Cinema, Diversity, Star Wars, Titanic, Dinosaurs, Sports, etc.). MIX + MATCH sets. FAMILY-FRIENDLY 15-min games. 5M+ COPIES sold across all editions." },
    { question: "Timeline vs Cardline — same publisher, different themes?", answer: "SAME MECHANIC, DIFFERENT NUMERICAL DIMENSIONS. Timeline uses CHRONOLOGICAL YEAR. Cardline uses NUMERICAL VALUES (Cardline Critters = animal facts like weight/size; Cardline Globe = geographical distances; Cardline Numbers = various numerical trivia). Both by Bombyx/Asmodee, same simple placement mechanic, family-friendly, 15-min games, small tin. RECOMMENDATION: Timeline for history + culture lovers; Cardline for animal + geography + math lovers. Both are excellent gateway trivia games; either or both work great." },
  ],
  wikipediaTitle: "Timeline (card game)",
  sources: [
    { label: "Asmodee — Timeline", url: "https://www.asmodee.com/en/games/timeline/", publisher: "Asmodee" },
    { label: "BoardGameGeek — Timeline", url: "https://boardgamegeek.com/boardgame/128664/timeline", publisher: "BoardGameGeek" },
  ],
  lastVerified: "2026-08-27",
  confidence: "verified",
};

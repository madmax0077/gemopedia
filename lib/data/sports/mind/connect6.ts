import type { Sport } from "@/lib/types";

export const connect6: Sport = {
  id: "connect6",
  slug: "connect6",
  name: "Connect6",
  officialName: "Connect6",
  aliases: ["Connect Six", "6-in-a-Row"],
  shortDescription:
    "ABSTRACT STRATEGY GAME (2003) invented by PROFESSOR I-CHEN WU at NATIONAL CHIAO TUNG UNIVERSITY, Taiwan. Played on a 19×19 Go board with black + white stones. Signature rule: BLACK PLAYS 1 STONE ON MOVE 1, THEN BOTH PLAYERS PLACE 2 STONES PER TURN. Aim: get 6 stones in a row. This 'first-player places 1 + everyone else places 2' rule creates PROVEN FAIRNESS. Recognized as officially 'fair' game family. Rapidly growing community; Connect6 Olympiad; competitive online + tournament play.",
  category: "mind-sports",
  subCategory: "abstract strategy / N-in-a-row / provably fair / academic origin",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "niche",
  countryOfOrigin: "TW",
  regionOfOrigin: "Taiwan (Prof I-Chen Wu, National Chiao Tung University)",
  estimatedOrigin: "2003 Prof I-Chen Wu formalization; Computer Olympiad 2005+; academic + hobbyist growth",
  players: { min: 2, max: 2, note: "Strictly 1v1." },
  equipment: [
    { name: "19×19 Go board", description: "Standard Go equipment repurposed" },
    { name: "Black + white Go stones", description: "Standard Go stones" },
    { name: "Game clock (tournament)", description: "Time controls typical" },
  ],
  duration: { approximateMinutes: 60, structure: "Tournament games 45-90 min." },
  objective: "Get 6 stones in a row (horizontal, vertical, diagonal); first player to do so wins.",
  basicRules: [
    { title: "Move 1: Black plays 1 stone on empty intersection", body: "First-move balance." },
    { title: "Move 2+: Each player places 2 stones per turn (either color, on empty intersections)", body: "Signature '2 stones per turn' rule." },
    { title: "First to 6-in-a-row (horizontal, vertical, or diagonal) wins", body: "Standard N-in-a-row objective." },
    { title: "No captures", body: "Purely placement game." },
    { title: "Draw possible if board fills without 6-in-a-row", body: "Rare draw condition." },
  ],
  scoring: {
    summary: "Get 6 stones in a row.",
    breakdown: [
      { action: "6-in-a-row achieved", points: "WIN" },
      { action: "Draw (rare)", points: "0.5 to each player" },
    ],
    winCondition: "6 stones in a row.",
  },
  countriesPlayed: ["TW", "JP", "KR", "US", "GB", "PL", "SE", "RU"],
  famousAthletes: [
    "Prof I-Chen Wu (inventor + academic promoter)",
    "Computer Olympiad Connect6 champions (rotating annually)",
    "Taiwan Connect6 community leaders",
  ],
  variants: ["connect6-standard-19x19", "connect6-15x15-smaller-variant", "computer-connect6-ai-tournaments"],
  relatedSports: ["gomoku", "renju", "go-board-game", "tic-tac-toe", "pente"],
  skills: ["multi-stone move planning", "long-line threat awareness", "double-threat combinations", "positional evaluation"],
  terminology: [
    { term: "Connect6", meaning: "'6-in-a-row connection' — the winning goal." },
    { term: "Fair Rules", meaning: "The '2 stones per turn' balance provably eliminates first-player advantage." },
    { term: "Six", meaning: "Successful 6-stone line." },
    { term: "Threat", meaning: "Position where opponent must respond to prevent 6-in-a-row." },
  ],
  governingBodies: [
    { name: "International Connect6 Federation", founded: 2006, headquarters: "Taiwan" },
  ],
  majorCompetitions: [
    { name: "Computer Olympiad Connect6", frequency: "annual", founded: 2005, region: "Global (rotating; AI + human categories)" },
    { name: "Connect6 World Championships", frequency: "annual", founded: 2006, region: "Global (Taiwan-dominant)" },
  ],
  faq: [
    { question: "Why '2 stones per turn'?", answer: "In traditional N-in-a-row games (Gomoku, Renju), Black has a strong first-move advantage. Connect6's inventor Prof I-Chen Wu designed the '1 stone first move, then 2 stones per turn' rule to PROVE MATHEMATICALLY that the game is FAIR — no forced win for either player. This makes Connect6 the CLEANEST N-in-a-row game — no forbidden moves, no complex openings, still balanced." },
  ],
  wikipediaTitle: "Connect6",
  sources: [{ label: "Wikipedia — Connect6", url: "https://en.wikipedia.org/wiki/Connect6", publisher: "Wikipedia" }],
  lastVerified: "2026-08-28",
  confidence: "verified",
};

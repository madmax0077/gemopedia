import type { Sport } from "@/lib/types";

export const decryptoTeam: Sport = {
  id: "decrypto-team",
  slug: "decrypto-team",
  name: "Decrypto",
  officialName: "Decrypto (Le Scorpion Masqué / IELLO)",
  aliases: ["Decrypto Team", "Decrypto Code-Breaking"],
  shortDescription:
    "Team-based code-communication party game (2018, Le Scorpion Masqué + IELLO, designer Thomas Dagenais-Lespérance) — 2 teams of 4+ take turns encoding + decoding 3-digit codes referring to 4 secret keywords; must communicate but not too clearly; opposing team intercepts. Kennerspiel des Jahres 2018 winner.",
  longDescription:
    "Decrypto is a team-based code-communication party game published by Le Scorpion Masqué (Quebec) + IELLO (France) in 2018, designed by Thomas Dagenais-Lespérance. Two teams of 4+ players each try to send secret code messages within their team while preventing the opposing team from intercepting. Setup: each team has 4 secret keywords (words visible only to their team members). Round: One team member becomes the Encoder + is given a 3-digit code (e.g., 4-2-1), where each digit corresponds to one of the 4 keywords in position. The Encoder must give 3 clues (one for each keyword-position in the code) that their teammates can guess but their opponents cannot. Both teams then attempt to guess the code — teammates correctly guessing wins that round; opponents correctly intercepting wins them a token. Teams accumulate Misinterception tokens (own team failing to guess) + Interception tokens (opponent guessing). First team to 2 Interception tokens wins the game; first team to 2 Misinterception tokens loses. Deep tension between: (a) giving CLEAR clues so your team gets it; and (b) NOT giving TOO clear clues that opponents can intercept over multiple rounds by pattern-matching. Won Kennerspiel des Jahres 2018 (Germany's premier board game award for enthusiast games — Kennerspiel = 'connoisseur game'). BoardGameGeek rank ~Top 200 all-time. Considered modern classic of the party + team communication genre.",
  category: "party-games",
  subCategory: "team code-communication party game",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "CA",
  regionOfOrigin: "Canada (Quebec — Le Scorpion Masqué) + France (IELLO)",
  estimatedOrigin: "Published 2018 by Le Scorpion Masqué + IELLO",
  players: { min: 3, max: 8, note: "Best 4-8; teams of 2 minimum; 4 per team is optimal." },
  equipment: [{ name: "Decrypto game box", description: "Two team screens + keyword cards + 3-digit code cards + clue notepad + token pool." }, { name: "Two 'screen' privacy shields", description: "Team keyword screens." }, { name: "Notepad + pen (per player)", description: "For jotting down clue-guess associations across rounds." }],
  duration: { approximateMinutes: 30, structure: "Typical game 30-45 min; expansion sets extend play." },
  objective: "Correctly guess opposing team's code twice (interception) OR force opponent to fail their own guesses twice (misinterception).",
  matchStructure: "Rounds alternate; each team encodes + decodes; game continues until win/loss condition met.",
  basicRules: [
    { title: "3-digit code per round", body: "Encoder receives 3-digit code (each digit 1-4) corresponding to team's 4 keywords." },
    { title: "Encoder gives 3 clues (one per digit)", body: "Each clue must reference the keyword at that position; but must be vague enough for opponents to miss." },
    { title: "Both teams attempt to guess the code", body: "Own team guesses first; opponents also guess (after Round 1)." },
    { title: "Interception tokens win; Misinterception tokens lose", body: "First to 2 Interception tokens wins; 2 Misinterception tokens loses." },
  ],
  scoring: {
    summary: "Interception tokens (won by opponents guessing code) + Misinterception tokens (own team fails to guess); first to 2 tokens ends game.",
    winCondition: "First team to 2 Interception tokens wins; 2 Misinterception tokens loses.",
  },
  positions: [{ name: "Team member (Encoder rotating)", role: "Each round one team member is Encoder; others guess.", count: 4 }],
  governingBodies: [{ name: "Le Scorpion Masqué (publisher)", founded: 2004, headquarters: "Quebec, Canada" }, { name: "IELLO (co-publisher)", founded: 1994, headquarters: "Nancy, France" }],
  majorCompetitions: [{ name: "Kennerspiel des Jahres 2018 (won)", frequency: "annual", founded: 1979, region: "Germany" }, { name: "As d'Or (French Board Game of the Year 2019 — Enfants Plus category)", frequency: "annual", founded: 1988, region: "France" }],
  famousAthletes: ["Thomas Dagenais-Lespérance (designer)", "Le Scorpion Masqué + IELLO teams"],
  records: [
    { title: "Kennerspiel des Jahres 2018 winner", holder: "Le Scorpion Masqué / IELLO", value: "Decrypto won Germany's Kennerspiel des Jahres 2018 — one of the top board game awards globally", year: 2018 },
    { title: "As d'Or Enfants Plus 2019 winner", holder: "Le Scorpion Masqué / IELLO", value: "Won France's As d'Or (Golden Ace) Enfants Plus category 2019", year: 2019 },
    { title: "BGG top-200 all-time", holder: "BoardGameGeek", value: "Ranked ~Top 200 games all-time on BoardGameGeek — modern classic of party genre", year: 2024 },
  ],
  variants: ["decrypto-standard-2018", "decrypto-expansion-laserdrive-2019", "decrypto-expansion-worldwide-2019"],
  relatedSports: ["codenames", "wavelength-party", "just-one", "concept"],
  skills: ["cryptic clue-crafting", "team communication", "pattern-matching across rounds", "reading opposing team's guessing patterns"],
  wikipediaTitle: "Decrypto (board game)",
  sources: [{ label: "BoardGameGeek — Decrypto", url: "https://boardgamegeek.com/boardgame/225694/decrypto", publisher: "BoardGameGeek" }, { label: "Le Scorpion Masqué official", url: "https://www.scorpionmasque.com", publisher: "Le Scorpion Masqué" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default decryptoTeam;

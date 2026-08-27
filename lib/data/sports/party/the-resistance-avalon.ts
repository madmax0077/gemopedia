import type { Sport } from "@/lib/types";

export const theResistanceAvalon: Sport = {
  id: "the-resistance-avalon",
  slug: "the-resistance-avalon",
  name: "The Resistance: Avalon",
  officialName: "The Resistance: Avalon",
  aliases: ["Avalon", "Resistance Avalon", "The Resistance"],
  shortDescription:
    "SOCIAL DEDUCTION PARTY GAME (2012) by DON ESKRIDGE, published by INDIE BOARDS & CARDS. King Arthur reskin of Eskridge's THE RESISTANCE (2009). 5-10 players secretly split into LOYAL SERVANTS OF ARTHUR (majority) + MINIONS OF MORDRED (minority). Servants win by completing 3 successful QUESTS; Minions win by sabotaging 3 quests OR (via ASSASSIN role) killing MERLIN at end. Merlin knows all evil but must hide. Considered THE definitive social deduction game + benchmark for the genre. 30 min per game. HELD BGG top-50 party for years.",
  longDescription:
    "THE RESISTANCE: AVALON is a SOCIAL DEDUCTION PARTY GAME (2012) designed by DON ESKRIDGE, published by INDIE BOARDS & CARDS. King Arthur / Camelot reskin of Eskridge's earlier THE RESISTANCE (2009) — same core mechanics, medieval fantasy theme + additional roles (Merlin, Percival, Morgana, Mordred, Oberon). 5-10 PLAYERS secretly split into LOYAL SERVANTS OF KING ARTHUR (majority, GOOD) + MINIONS OF MORDRED (minority, EVIL). Servants win by completing 3 successful QUESTS (out of 5); Minions win by sabotaging 3 quests OR (via ASSASSIN role) correctly identifying + killing MERLIN at end of game. UNIQUE ROLE MERLIN — Merlin knows all Minions but must HIDE THIS KNOWLEDGE to avoid assassination. Percival can protect Merlin. Morgana appears as Merlin to Percival (confusion). Considered THE DEFINITIVE SOCIAL DEDUCTION GAME + benchmark for the genre alongside WEREWOLF. HELD BGG TOP-50 PARTY for years (2012-2026); considered SUPERIOR to Werewolf by many hobby gamers (no player elimination; 30-min games; more structured deduction). 30 MIN PER GAME. GAMEPLAY: Deal roles secretly. At start, EVIL players (except Oberon) know each other; Merlin knows evil (except Mordred); Percival knows Merlin (+ Morgana confusingly). GAME = 5 QUEST ROUNDS. Each round: (1) LEADER (rotating) proposes a TEAM of players to send on quest; (2) All players VOTE approve/reject team; if majority approve, team goes; if 5 rejections in a row = evil wins; (3) Team members SECRETLY play SUCCESS or FAIL cards (Good must play Success; Evil may play either); (4) 1+ FAIL = quest fails (except 4th quest at 7+ players requires 2 fails). WIN: 3 successful quests = Good win; 3 failed quests = Evil win; if Good would win, EVIL ASSASSIN gets 1 chance to identify + kill Merlin — if right, Evil steals win. RECEPTION: BGG top-50 party 12+ years; Golden Geek Best Party Game 2012 nominee; considered a genre-defining classic + more balanced than Werewolf.",
  category: "party-games",
  subCategory: "social deduction / hidden roles / Arthurian theme / Indie Boards & Cards",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Indie Boards & Cards; Don Eskridge designer)",
  estimatedOrigin: "The Resistance base 2009; Avalon reskin 2012; multiple expansions since",
  players: { min: 5, max: 10, note: "5-10 players; BEST AT 7-8. Different role compositions per player count." },
  field: {
    surfaceName: "Central play area for quest board + votes",
    dimensions: "~60×60cm typical",
    description: "Central quest tracker + team proposal area + vote cards. Each player has role card (secret) + vote cards (approve/reject) + quest cards (success/fail).",
  },
  equipment: [
    { name: "The Resistance: Avalon base box", description: "$20 USD; supports 5-10 players" },
    { name: "The Resistance base (2009)", description: "$20; sci-fi reskin, same mechanics" },
    { name: "The Resistance: Hidden Agenda expansion", description: "$15; new role variants" },
    { name: "Role cards (Servants + Minions with special abilities)", description: "Merlin, Percival, Morgana, Mordred, Oberon, Assassin, +generic loyal/minion" },
    { name: "Vote cards (approve/reject)", description: "For team approval" },
    { name: "Quest cards (success/fail)", description: "For quest resolution" },
    { name: "Score tokens + Leader tokens", description: "Track quests + rotating leader" },
  ],
  duration: { approximateMinutes: 30, structure: "20-45 min per game; short + intense." },
  objective: "GOOD wins by completing 3 successful quests + surviving Assassin's Merlin guess. EVIL wins by failing 3 quests OR 5 team-rejections OR correctly identifying Merlin.",
  basicRules: [
    { title: "Deal secret roles (Good majority + Evil minority)", body: "Evil (except Oberon) know each other; Merlin knows evil (except Mordred)." },
    { title: "5 rounds; each = team proposal + vote + quest", body: "Leader rotates each round." },
    { title: "Leader proposes team; all vote approve/reject", body: "5 rejections in a row = Evil wins." },
    { title: "Team members secretly play Success or Fail", body: "1+ Fail = quest fails (except 4th round at 7+p needs 2)." },
    { title: "3 quest successes = Good wins → Assassin gets 1 Merlin guess", body: "Correct guess = Evil steals win." },
    { title: "3 quest failures = Evil wins", body: "Straightforward evil win." },
  ],
  scoring: {
    summary: "Binary team win: Good (3 successful quests + Merlin survives Assassin) OR Evil (3 failed quests OR 5 rejections OR correctly kill Merlin).",
    breakdown: [
      { action: "Successful quest", points: "1 tally to Good" },
      { action: "Failed quest", points: "1 tally to Evil" },
      { action: "3 tallies", points: "Faction wins" },
      { action: "Assassin correctly guesses Merlin", points: "Evil steals win" },
    ],
    winCondition: "Good: 3 quest successes + surviving Assassin. Evil: 3 quest failures OR 5 rejections OR correct Merlin kill.",
  },
  governingBodies: [
    { name: "Indie Boards & Cards (publisher)", founded: 2009, headquarters: "USA" },
    { name: "Don Eskridge (designer)", founded: 2009, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "BGG top-50 party 12+ years", frequency: "ongoing", founded: 2012, region: "worldwide" },
    { name: "Golden Geek Best Party Game 2012 nominee", frequency: "annual", founded: 2012, region: "worldwide" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "IT", "ES", "PL", "AU", "CA", "SE", "NL", "JP", "IN", "CN"],
  famousAthletes: [
    "Don Eskridge (USA) — Designer; also The Resistance, Coup",
  ],
  variants: [
    "the-resistance-2009-sci-fi-original",
    "the-resistance-avalon-2012-arthurian-reskin",
    "the-resistance-hidden-agenda-expansion",
    "coup-2012-eskridge-related-hidden-role-game",
  ],
  relatedSports: ["werewolf", "mafia", "secret-hitler", "spyfall", "coup"],
  skills: ["social deduction", "bluff + persuasion", "voting analysis", "role deduction", "team coordination"],
  strategies: [
    { title: "Merlin: hint at evil without revealing", body: "Steer team choices subtly; avoid explicit knowledge showing." },
    { title: "Percival: watch Merlin/Morgana carefully", body: "Percival sees both; deduce which is real via play." },
    { title: "Assassin: track Merlin candidates", body: "Note who seems to know evil; guess at end." },
    { title: "Evil: coordinate team failures", body: "Only 1 Fail needed early; more nuanced at 7+p round 4." },
    { title: "Team composition math", body: "Track who's been on teams that failed = suspect." },
  ],
  terminology: [
    { term: "Merlin", meaning: "Good role who knows all evil (except Mordred); must hide knowledge." },
    { term: "Percival", meaning: "Good role who sees Merlin + Morgana as one identity." },
    { term: "Morgana", meaning: "Evil role appearing as Merlin to Percival." },
    { term: "Mordred", meaning: "Evil role hidden from Merlin." },
    { term: "Assassin", meaning: "Evil role with end-game Merlin-kill guess." },
    { term: "Oberon", meaning: "Evil role hidden from other Evil (no team recognition)." },
    { term: "Quest", meaning: "One of 5 team missions; success/fail via team card play." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy Avalon ($20)", body: "5-min learning curve." },
      { title: "Start without special roles (base Servants vs Minions)", body: "Learn voting + quest mechanics first." },
    ]},
    { level: "intermediate", steps: [
      { title: "Add Merlin + Assassin", body: "Introduces core Avalon tension." },
    ]},
    { level: "advanced", steps: [
      { title: "Full role set: Merlin + Percival + Morgana + Mordred + Assassin + Oberon", body: "Ultra-complex deduction." },
    ]},
  ],
  faq: [
    { question: "What is The Resistance: Avalon?", answer: "SOCIAL DEDUCTION PARTY GAME (2012) by Don Eskridge. King Arthur reskin of The Resistance (2009). 5-10 players secretly split into LOYAL SERVANTS OF ARTHUR + MINIONS OF MORDRED. Servants win by 3 quest successes; Minions win by 3 quest failures OR killing Merlin. MERLIN knows all evil but must hide. Considered THE definitive social deduction game + genre benchmark. 30 min. HELD BGG top-50 party for years." },
    { question: "Avalon vs The Resistance vs Werewolf?", answer: "SAME DESIGNER for Avalon + Resistance (Don Eskridge). RESISTANCE (2009) = sci-fi setting, simpler roles (Loyal + Spy only). AVALON (2012) = Arthurian setting + 5-6 special roles (Merlin, Percival, Morgana, Mordred, Assassin, Oberon) — MORE DEPTH. WEREWOLF (older, folk game) = larger groups (10-30), player elimination, moderator required. Avalon is CONSIDERED MOST BALANCED + BEST for hobby gaming (no elim, 30 min, structured deduction)." },
  ],
  wikipediaTitle: "The Resistance (game)",
  sources: [
    { label: "Indie Boards & Cards — Avalon", url: "https://indieboardsandcards.com/index.php/games/the-resistance-avalon/", publisher: "IBC" },
    { label: "BoardGameGeek — The Resistance: Avalon", url: "https://boardgamegeek.com/boardgame/128882/resistance-avalon", publisher: "BGG" },
    { label: "Wikipedia — The Resistance", url: "https://en.wikipedia.org/wiki/The_Resistance_(game)", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-27",
  confidence: "verified",
};

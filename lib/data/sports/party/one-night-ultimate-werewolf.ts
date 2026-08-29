import type { Sport } from "@/lib/types";

export const oneNightUltimateWerewolf: Sport = {
  id: "one-night-ultimate-werewolf",
  slug: "one-night-ultimate-werewolf",
  name: "One Night Ultimate Werewolf",
  officialName: "One Night Ultimate Werewolf (2014, Ted Alspach + Akihisa Okui, Bézier Games)",
  aliases: ["ONUW", "One Night Werewolf"],
  shortDescription:
    "A 10-minute streamlined Werewolf/Mafia-style hidden-role social deduction game — just one night phase + one 5-minute day discussion + a single accusatory vote for 3-10 players.",
  longDescription:
    "One Night Ultimate Werewolf is a 2014 hidden-role social deduction game by Ted Alspach + Akihisa Okui, published by Bézier Games. It strips down traditional Werewolf/Mafia (which can run 45-90 minutes) to a compact 10-minute experience. In a single night phase, each role wakes in a specific order to perform an action (Werewolves see each other, Seer peeks at a card, Robber swaps roles, Troublemaker swaps two other players, etc). Then daytime: 5-minute discussion — the village claims roles, deduces liars, and votes for one player to lynch. If the lynched player is a Werewolf, village wins. If no werewolf is lynched (with werewolves in play), werewolves win. If no werewolf is in play, everyone must vote for no one. The genius is 'no elimination' — everyone plays every round, no one sits out. Expansions Daybreak (2015), Vampire (2019), Bonus Roles have added 40+ roles. One of the best-selling social deduction games ever; app-supported version handles narrator role.",
  category: "party-games",
  subCategory: "social deduction / hidden-role (3-10 players)",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Bézier Games, Anaheim)",
  estimatedOrigin: "Published Aug 2014; Ted Alspach + Akihisa Okui adapted from traditional Werewolf/Mafia",
  players: { min: 3, max: 10, note: "5-7 optimal; needs 3+ roles beyond player count for uncertainty." },
  field: {
    surfaceName: "Central table with 3 face-down 'center' cards + player role cards",
    dimensions: "Player count + 3 role cards in play; role reference sheet + tokens",
    description: "Role cards dealt face-down to players + 3 to center; app or narrator conducts night phase." },
  equipment: [
    { name: "16 role cards (base)", description: "Villager (x3), Werewolf (x2), Seer, Robber, Troublemaker, Tanner, Drunk, Hunter, Mason (x2), Insomniac, Minion." },
    { name: "1 role reference sheet", description: "Explains each role's night order + action." },
    { name: "Ultimate Werewolf app (free)", description: "Handles narration + turn order automatically." },
    { name: "Voting tokens (optional)", description: "For simultaneous voting." },
  ],
  duration: { approximateMinutes: 10, structure: "1 night phase (~2 min) + 5-min day discussion + simultaneous vote." },
  objective:
    "Village: lynch a werewolf. Werewolves: avoid getting lynched. Tanner: get yourself lynched. Minion: help werewolves survive.",
  matchStructure:
    "Setup: shuffle roles, deal 1 to each player + 3 to center. NIGHT (2 min, eyes closed): app calls each role in order to perform action. DAY (5 min): open eyes, discuss, deduce. VOTE: on 3-count, everyone points at accused. Highest-voted player 'dies'; check role.",
  basicRules: [
    { title: "Roles in numbered order", body: "Werewolves → Minion → Masons → Seer → Robber → Troublemaker → Drunk → Insomniac." },
    { title: "Werewolves see each other", body: "Peek across the table; if only one, may peek 1 center card." },
    { title: "Seer peeks", body: "Look at either 2 center cards OR 1 other player's card." },
    { title: "Robber swaps", body: "Take another player's card + become that role; give them Robber." },
    { title: "Troublemaker swaps", body: "Blindly swap 2 other players' cards without looking." },
    { title: "5-minute discussion", body: "Everyone claims a role; werewolves must lie." },
    { title: "Simultaneous vote", body: "All players point at one accused on the 'Three... two... one' count." },
  ],
  advancedRules: [
    { title: "Tie votes", body: "Tied players all die (or nobody dies — house rule)." },
    { title: "No werewolf in play", body: "Everyone must vote 'no lynch' by pointing at own hand — else village loses." },
    { title: "Tanner win", body: "If the Tanner is lynched, Tanner wins alone (village loses if only werewolves + Tanner die)." },
    { title: "Minion role", body: "Knows who werewolves are but is on their team; werewolves don't know Minion." },
    { title: "Expansion roles", body: "Daybreak adds 40+ new roles: Curator, Doppelgänger, Bodyguard, etc." },
  ],
  scoring: {
    summary: "Team victory (village vs werewolves) OR solo victory (Tanner).",
    winCondition: "Werewolves win if none of them are lynched (and 1+ was in play). Village wins if 1+ werewolf lynched. Tanner wins solo if lynched.",
    breakdown: [
      { action: "Village lynches werewolf", points: "Village wins" },
      { action: "Werewolf avoids lynch", points: "Werewolf team wins" },
      { action: "Tanner is lynched", points: "Tanner solo win" },
      { action: "No werewolf in play + village lynches no one", points: "Village wins" },
    ],
  },
  penalties: [
    { title: "Peeking during night", body: "Play stops; violator removed (house rule)." },
    { title: "Voting for self", body: "Illegal (except no-lynch scenario)." },
    { title: "Talking about card during night", body: "Not allowed (only during day)." },
  ],
  positions: [
    { name: "Village team", role: "Deduce and lynch werewolves." },
    { name: "Werewolf team", role: "Deceive and survive the vote." },
    { name: "Tanner (solo)", role: "Convince village to lynch you." },
  ],
  officiating: { officials: ["Narrator (human or app)"], summary: "App handles most narration; human moderator optional." },
  governingBodies: [
    { name: "Bézier Games", founded: 2007, headquarters: "Anaheim, USA", website: "https://beziergames.com" },
  ],
  majorCompetitions: [
    { name: "Casual play at cons + parties", frequency: "informal", founded: 2014, region: "worldwide" },
    { name: "Werewolf.online tournaments", frequency: "informal", founded: 2015, region: "online communities" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "JP", "IT", "ES", "CN", "AU", "BR"],
  famousAthletes: [
    "Ted Alspach (designer, Suburbia + Castles of Mad King Ludwig)",
    "Akihisa Okui (co-designer)",
  ],
  records: [
    { title: "Sales", holder: "Bézier Games", value: "1M+ copies sold by 2020", year: 2020 },
    { title: "App downloads", holder: "Ultimate Werewolf app", value: "5M+ downloads", year: 2023 },
  ],
  variants: ["One Night Ultimate Werewolf Daybreak (2015)", "One Night Ultimate Vampire (2019)", "One Night Ultimate Alien (2018)", "One Week Ultimate Werewolf (2019, expanded time-loop version)"],
  relatedSports: ["werewolf", "mafia", "secret-hitler", "the-resistance-avalon"],
  skills: [
    "reading social cues",
    "logical deduction",
    "convincing lying",
    "role-tracking + memory",
    "quick information synthesis",
  ],
  strategies: [
    { title: "Claim roles early", body: "First to claim Seer/Robber/Troublemaker locks credibility." },
    { title: "Werewolves: claim village role", body: "Claim Villager or Troublemaker with fake swap details." },
    { title: "Cross-check claims", body: "If two players claim Robber, one is lying." },
    { title: "Center-card wisdom", body: "Roles moved to center mean their actions still happened but are irrelevant." },
    { title: "Vote last", body: "Watch others' votes first (illegal in strict rules but often done)." },
  ],
  terminology: [
    { term: "Center cards", meaning: "3 face-down cards not dealt to players." },
    { term: "Wake up", meaning: "App/narrator calls role during night phase." },
    { term: "Swap", meaning: "Robber/Troublemaker actions that change roles." },
    { term: "Claim", meaning: "Publicly stating your role during day phase." },
    { term: "Lynch", meaning: "Vote to eliminate a player." },
    { term: "Tanner", meaning: "Solo win role — wants to be lynched." },
  ],
  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Start with basic role set", body: "Village x3, Werewolf x2, Seer, Robber, Troublemaker (5 players)." },
        { title: "Use the free app", body: "Handles narration + turn order — vastly better than manual." },
        { title: "Play 5-10 games", body: "Reading social cues improves rapidly with reps." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Add Daybreak roles", body: "Introduce Doppelgänger, Curator, Alpha Wolf for depth." },
        { title: "Master lying tells", body: "Elite play: appear equally confused as werewolf or villager." },
        { title: "Run 10-player games", body: "Larger groups need more roles + tighter moderation." },
      ],
    },
  ],
  faq: [
    { question: "How is ONUW different from regular Werewolf/Mafia?", answer: "ONUW has just ONE night phase and NO player elimination — everyone plays every round for full 10 minutes." },
    { question: "How many players minimum?", answer: "3 players minimum, but 5-7 is optimal. Fewer players = less uncertainty about roles." },
    { question: "Do I need the app?", answer: "Not required but strongly recommended — it handles narration + turn order flawlessly (free)." },
    { question: "Can beginners keep up?", answer: "Yes — with the app + basic role set (Villager/Werewolf/Seer/Robber/Troublemaker) most players catch on in 2-3 games." },
    { question: "Best expansion first?", answer: "Daybreak — adds 40+ well-designed roles + adds Alpha Wolf/Mystic Wolf for more werewolf variety." },
  ],
  sources: [
    { label: "BoardGameGeek — One Night Ultimate Werewolf", url: "https://boardgamegeek.com/boardgame/147949/one-night-ultimate-werewolf", publisher: "BGG" },
    { label: "Bézier Games — ONUW", url: "https://beziergames.com/products/one-night-ultimate-werewolf", publisher: "Bézier Games" },
    { label: "Wikipedia — Ultimate Werewolf", url: "https://en.wikipedia.org/wiki/Ultimate_Werewolf", publisher: "Wikipedia" },
  ],
  wikipediaTitle: "Ultimate Werewolf",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

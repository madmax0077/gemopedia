import type { Sport } from "@/lib/types";

export const fibbage: Sport = {
  id: "fibbage",
  slug: "fibbage",
  name: "Fibbage",
  officialName: "Fibbage: The Hilarious Bluffing Party Game",
  aliases: ["Fibbage 3", "Fibbage XL", "Fibbage 4"],
  shortDescription:
    "PARTY BLUFFING TRIVIA GAME (2014) by JACKBOX GAMES — smartphone-controlled party game where 2-8 players see an unusual trivia question with a missing fact and must submit FAKE ANSWERS designed to fool their opponents while also trying to guess the TRUE answer. Points scored for identifying the truth + duping others. Signature entry in the Jackbox Party Pack series (Party Pack 1, 2, 6, 8, 9 include Fibbage variants). Runs on any phone browser + shared screen. Fast, hilarious, works for casual groups. 15-30 min.",
  longDescription:
    "FIBBAGE is a PARTY BLUFFING TRIVIA GAME first released in 2014 by JACKBOX GAMES (Chicago, USA), the pioneering studio behind the JACKBOX PARTY PACK series. Fibbage was the FLAGSHIP GAME of THE JACKBOX PARTY PACK (Party Pack 1, 2014) + has since had sequels: FIBBAGE 2 (Party Pack 2, 2015), FIBBAGE 3 (Party Pack 4, 2017), FIBBAGE XL (extended edition, 2015), FIBBAGE ENOUGH ABOUT YOU (Party Pack 6, 2019), + FIBBAGE 4 (Party Pack 9, 2022). GAMEPLAY: 2-8 players use their SMARTPHONE BROWSERS to connect to a shared screen (TV, streaming service, or laptop) at jackbox.tv. Everyone sees a TRIVIA QUESTION with an unusual/obscure fact + a BLANK where a specific detail is missing (e.g. 'In 1998, the World's Largest ____ was constructed in Norway'). Players secretly submit FAKE ANSWERS designed to sound plausible + fool their opponents. Everyone then sees a mix of the TRUE answer + all the fake answers + must GUESS which is the true one. SCORING: Points for correctly identifying the true answer + points for each player who selected YOUR fake answer (dupe others = bonus). GAME LENGTH: 15-30 min per game (3 rounds + final round). BEST AT 5-8 players for maximum fake-answer chaos. HOW IT WORKS: Host runs the game on a laptop/TV/streaming; players connect via smartphone browsers to jackbox.tv + enter a 4-letter game code. No player app install required — just a browser. Works for REMOTE PLAY via screen-sharing on video calls. PART OF JACKBOX ECOSYSTEM: The JACKBOX PARTY PACK series (11 packs as of 2024, each ~$30, containing 5 party games) has become the DOMINANT PARTY GAME PLATFORM for the streaming era. Fibbage is often the FLAGSHIP + most-played game in each pack. Similar Jackbox games: QUIPLASH (write funny answers), DRAWFUL (draw prompts), TRIVIA MURDER PARTY (dark trivia). RECEPTION: Universally praised as one of the BEST DIGITAL PARTY GAMES; ideal for GAME NIGHTS + STREAMING (Twitch streamer favorite for viewer interaction). VARIANTS: FIBBAGE 4 (2022, latest) — refined UI + new question categories; ENOUGH ABOUT YOU version substitutes personal questions ('What is [Player]'s biggest fear?') for public trivia.",
  category: "party-games",
  subCategory: "digital party / trivia + bluffing / Jackbox / smartphone party",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "United States (Jackbox Games, Chicago)",
  estimatedOrigin: "2014 (Jackbox Party Pack 1); Fibbage 4 latest (2022)",
  players: { min: 2, max: 8, note: "2-8 active players; up to 10,000 audience members can vote via jackbox.tv" },
  field: {
    surfaceName: "Shared screen + player smartphones",
    dimensions: "TV/laptop as display; smartphones as controllers",
    description: "Host runs game on shared screen; players connect via browser at jackbox.tv.",
  },
  equipment: [
    { name: "Jackbox Party Pack (any of 1, 2, 4, 6, 8, 9)", description: "$25-30 per pack; contains 5 games" },
    { name: "Shared screen (TV, laptop, streaming)", description: "Runs the game" },
    { name: "Smartphone browsers for each player", description: "Connects at jackbox.tv" },
    { name: "Internet connection", description: "Required for phone connectivity" },
  ],
  duration: { approximateMinutes: 25, structure: "15-30 min for 3 rounds + final round" },
  objective: "Score most points by identifying the true answer + fooling others with your fake answers.",
  basicRules: [
    { title: "Host runs Jackbox game on shared screen; players join via jackbox.tv", body: "Setup." },
    { title: "Trivia question with blank appears; each player submits a FAKE answer", body: "Bluffing phase." },
    { title: "All answers shown mixed (true + fakes); players pick the true one", body: "Guessing phase." },
    { title: "Score points for correct guess + points for each player fooled by your fake", body: "Two scoring paths." },
    { title: "3 rounds + a final round with higher stakes", body: "Standard format." },
    { title: "Highest score at end wins", body: "Simple." },
  ],
  scoring: {
    summary: "Points for guessing truth + points for each player who selected your fake.",
    breakdown: [
      { action: "Correctly identify the true answer", points: "500-1500 points depending on round" },
      { action: "Each opponent who selects your fake answer", points: "500 points each" },
      { action: "Final round: double points", points: "Round 3 = 2x scoring" },
    ],
    winCondition: "Highest total points after 3 rounds + final round.",
  },
  governingBodies: [
    { name: "Jackbox Games (publisher)", founded: 2013, headquarters: "Chicago, USA" },
    { name: "Streaming platforms (Twitch, YouTube)", founded: 2011, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "Jackbox streams (Twitch/YouTube regular content)", frequency: "ongoing", founded: 2014, region: "Global" },
    { name: "Casual party game nights", frequency: "ongoing", founded: 2014, region: "Global" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "CA", "AU", "NL", "SE", "BR", "MX", "JP"],
  famousAthletes: [
    "Jackbox Games team (Chicago)",
    "Twitch streamers who run Fibbage regularly",
    "Content creators: SMii7Y, Cr1TiKaL, Achievement Hunter",
  ],
  variants: [
    "fibbage-1-2014-original",
    "fibbage-2-2015-party-pack-2",
    "fibbage-3-2017-party-pack-4",
    "fibbage-xl-extended-questions",
    "fibbage-enough-about-you-personal-questions",
    "fibbage-4-2022-latest",
  ],
  relatedSports: ["quiplash", "drawful", "trivia-murder-party", "psych", "wits-and-wagers"],
  skills: ["plausible bluffing", "trivia knowledge", "creative writing", "audience reading"],
  strategies: [
    { title: "Write fakes that sound authoritative + specific", body: "Vague fakes lose; specific fakes fool." },
    { title: "Watch how obviously-fake answers perform", body: "Learn opponents' bluff styles." },
    { title: "In final round, prioritize duping over guessing", body: "Point values shift." },
    { title: "Cross-reference clues in the question", body: "True answers often fit the theme." },
  ],
  terminology: [
    { term: "Lie / Fake answer", meaning: "Bluff submission designed to fool opponents." },
    { term: "Truth", meaning: "The correct fact you're trying to identify." },
    { term: "Room code", meaning: "4-letter code to join at jackbox.tv." },
    { term: "Final round", meaning: "Round 3 with 2x scoring." },
    { term: "Jackbox Party Pack", meaning: "Bundle of 5 games including a Fibbage entry." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy Jackbox Party Pack 6 or 9 (has newer Fibbage)", body: "$30 for 5 games." },
      { title: "Play 1 game with 4-6 friends to learn the rhythm", body: "First game is warmup." },
    ]},
  ],
  faq: [
    { question: "What is Fibbage?", answer: "PARTY BLUFFING TRIVIA GAME (2014) by JACKBOX GAMES — smartphone-controlled party game where 2-8 players see an unusual trivia question with a missing fact and must submit FAKE ANSWERS designed to fool their opponents while also trying to guess the TRUE answer. Points scored for identifying the truth + duping others. Signature entry in the Jackbox Party Pack series. Runs on any phone browser + shared screen. Fast, hilarious, works for casual groups. 15-30 min." },
    { question: "Which Jackbox Party Pack should I buy for Fibbage?", answer: "For the LATEST + BEST Fibbage, buy JACKBOX PARTY PACK 9 (2022) which has FIBBAGE 4 with the most refined UI + best question categories. For CLASSIC Fibbage with all-time favorite questions, PARTY PACK 4 has FIBBAGE 3. Each pack is ~$30 + contains 5 games total, so you get 4 bonus games. If you want personal questions instead of trivia, PARTY PACK 6 has FIBBAGE ENOUGH ABOUT YOU. Serious Jackbox fans often own multiple packs; each is a self-contained purchase on Steam/PS/Xbox/Switch." },
  ],
  wikipediaTitle: "Jackbox Party Pack",
  sources: [
    { label: "Jackbox Games — Fibbage", url: "https://www.jackboxgames.com/", publisher: "Jackbox" },
    { label: "Wikipedia — Jackbox Party Pack", url: "https://en.wikipedia.org/wiki/The_Jackbox_Party_Pack", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-28",
  confidence: "verified",
};

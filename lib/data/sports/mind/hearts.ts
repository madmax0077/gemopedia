import type { Sport } from "@/lib/types";

export const hearts: Sport = {
  id: "hearts",
  slug: "hearts",
  name: "Hearts",
  officialName: "Hearts",
  aliases: ["Black Lady", "Black Maria", "Chase the Lady"],
  shortDescription:
    "Trick-taking card game for four players where the goal is to avoid winning hearts and the Queen of Spades, or 'shoot the moon' by winning all of them.",
  longDescription:
    "Hearts is a classic 4-player trick-taking card game in the Whist family, in which the objective is to score as few points as possible. Each heart in a trick you win is worth 1 point, and the Queen of Spades is worth 13 — the exact opposite of standard trick-taking games. The game becomes strategic through the 'shoot the moon' option: capturing all 13 hearts and the Queen of Spades in one hand scores 0 for you and 26 for each opponent. Hearts was another game bundled with Microsoft Windows (from Windows 3.11 in 1993) and is one of the most-played card games in North America. It originated in Spain in the 18th century as 'Reversis' variants and became today's form in the USA around 1880.",

  category: "mind-sports",
  subCategory: "trick-taking card game",
  sportType: "mixed",
  indoorOutdoor: "both",
  isProfessional: false,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "ES",
  regionOfOrigin: "Spain (as Reversis); modern form USA",
  estimatedOrigin: "18th century (Reversis in Spain); modern Hearts codified in USA c. 1880; Windows bundling 1993",

  players: { min: 3, max: 6, note: "Best played with exactly 4 players; 3, 5, and 6-player variants exist with card adjustments." },
  field: {
    surfaceName: "table",
    dimensions: "Any table with room for 4 hands and 4 face-up tricks.",
    description: "Each player holds a hand; the current trick is played face-up in the centre.",
  },
  equipment: [
    { name: "Standard 52-card deck", description: "One deck; remove 2♣ for 3 or 5 players; remove 2♣ and 2♦ for 6 players." },
    { name: "Score pad", description: "Cumulative score sheet — game ends when someone hits 100 points.", optional: true },
  ],
  duration: {
    approximateMinutes: 20,
    structure: "Single hand 3-5 minutes; typical game (to 100 points) 20-45 minutes.",
    note: "Skilled online play averages 25 minutes per full game.",
  },
  objective: "Score as few points as possible — points come from hearts (1 each) and Queen of Spades (13). Alternatively, capture ALL 26 points ('shoot the moon') to give each opponent 26.",
  matchStructure:
    "Deal all 52 cards (13 each for 4 players). Before play, pass 3 cards: hand 1 pass left, hand 2 pass right, hand 3 pass across, hand 4 no pass, then repeat. The player holding 2♣ leads it. Players must follow suit if possible; otherwise, they may play any card (with restrictions on hearts and Queen of Spades on the first trick). Whoever plays the highest card of the led suit wins the trick and leads the next. Hearts cannot lead until 'broken' (i.e., played on a non-heart trick). After 13 tricks, count points. Game ends when a player reaches 100.",

  basicRules: [
    { title: "Card ranking", body: "Aces high; suits have no trumps." },
    { title: "Pass 3 cards", body: "Before each hand: pass left, right, across, or hold (rotates each hand)." },
    { title: "2♣ leads", body: "Player with 2 of Clubs leads it to start the first trick." },
    { title: "Follow suit", body: "Must play the suit led if you have one; else play anything." },
    { title: "No points on first trick", body: "You cannot play a heart or the Q♠ on the very first trick." },
    { title: "Hearts broken", body: "You cannot lead a heart until a heart has been played on a non-heart trick." },
    { title: "Score", body: "Each heart won = 1 point; Q♠ = 13 points. Game ends when anyone reaches 100; lowest total wins." },
  ],
  advancedRules: [
    { title: "Shoot the moon", body: "Capture all 13 hearts and the Q♠ in one hand — you score 0 and each opponent scores 26 (or you subtract 26 from your own score, variant-dependent)." },
    { title: "Jack of Diamonds bonus", body: "Optional rule: J♦ captured is worth −10 to your score." },
    { title: "Passing strategy", body: "Pass high spades if you don't hold Q♠, high hearts, or short a suit." },
    { title: "Shooting-the-moon defence", body: "If opponent has taken every point trick so far, take at least one point to stop them shooting." },
  ],
  scoring: {
    summary: "Low score wins. Hearts = 1 point each; Q♠ = 13 points; shooting the moon = 0 or −26 for shooter, 26 for others.",
    breakdown: [
      { action: "Each heart won in a trick", points: "+1" },
      { action: "Queen of Spades won", points: "+13" },
      { action: "Shoot the moon", points: "0 for you / +26 to each opponent (or −26 to you)" },
      { action: "Jack of Diamonds (optional)", points: "−10", note: "House rule; not universal." },
    ],
    winCondition: "When a player reaches 100 points, the player with the lowest total wins.",
  },

  officiating: {
    officials: ["Self-officiated"],
    summary: "Recreational and online; no formal referee system.",
  },
  governingBodies: [
    { name: "United States Playing Card Company (Bicycle rules)", founded: 1867, headquarters: "Erlanger, USA" },
  ],
  majorCompetitions: [
    { name: "Microsoft Hearts Online (retired)", frequency: "annual events", founded: 2001, region: "worldwide" },
    { name: "World Hearts Championships (recreational)", frequency: "irregular", founded: 2000, region: "USA" },
  ],
  countriesPlayed: ["US", "GB", "CA", "FR", "DE", "ES", "IT", "AU", "NL", "SE"],
  famousAthletes: ["N/A — casual game"],
  records: [
    { title: "Estimated Windows Hearts users (peak)", holder: "Microsoft", value: "over 200 million users", year: 2015 },
    { title: "Consecutive successful 'shoot the moon'", holder: "Online recreational players", value: "3 in a row is exceptional", year: 2018 },
  ],

  variants: ["black-maria", "omnibus-hearts", "spot-hearts", "jack-of-diamonds", "cancellation-hearts"],
  relatedSports: ["spades", "bridge", "whist", "euchre"],

  skills: [
    "hand evaluation",
    "counting cards played",
    "passing strategy",
    "recognising when to shoot the moon",
    "defensive discards",
    "reading opponent's void suits",
  ],
  strategies: [
    { title: "Void a suit if possible", body: "If you can dump a suit early, you can discard hearts on that suit later." },
    { title: "Track the Q♠", body: "Know who holds high spades — if you have A♠ or K♠ without small spades, you're at risk." },
    { title: "Shoot only with strong hand", body: "Long solid heart run + Q♠ safely captured = shoot the moon opportunity." },
    { title: "Break someone's shoot attempt", body: "If opponent takes early hearts, force them to lose one heart to a hidden card." },
  ],

  terminology: [
    { term: "Trick", meaning: "One round: each of 4 players plays one card; winner takes all four." },
    { term: "Follow suit", meaning: "Play a card of the suit led if you have one." },
    { term: "Shoot the moon", meaning: "Capturing all 26 points in one hand — flips scoring in your favour." },
    { term: "Void", meaning: "Holding no cards of a particular suit — allows you to discard." },
    { term: "Break hearts", meaning: "First time a heart is played on a non-heart trick — hearts may now be led." },
    { term: "Q♠ / Black Lady", meaning: "The Queen of Spades — worth 13 penalty points." },
    { term: "Pass hand", meaning: "The rotating card pass at the start of each hand." },
    { term: "Bleed the trump", meaning: "In Hearts, force opponents to exhaust their long suit — no true trump exists." },
    { term: "Painting the trick", meaning: "Discarding hearts or Q♠ onto a trick you're not winning." },
    { term: "Overtake", meaning: "Winning a trick with an unnecessarily high card to control lead." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Setup and deal", body: "Learn card distribution (13 each for 4 players)." },
      { title: "Follow-suit rule", body: "Play the led suit if you have one; else discard." },
      { title: "Point cards", body: "Recognise hearts (1 each) and Q♠ (13) as penalty cards." },
      { title: "First-trick restriction", body: "Never play a heart or Q♠ on the first trick." },
    ] },
    { level: "intermediate", steps: [
      { title: "Passing decisions", body: "Learn to pass high spades (unless you have Q♠ safely covered), high hearts, or void a suit." },
      { title: "Breaking hearts", body: "Understand when hearts can first be led — after they're 'broken'." },
      { title: "Q♠ safety", body: "Play Q♠ on someone else's trick when you can safely discard it." },
      { title: "Basic moon-shot recognition", body: "Recognise a hand strong enough to attempt shooting the moon." },
    ] },
    { level: "advanced", steps: [
      { title: "Card counting", body: "Track which cards have been played to know exactly what remains." },
      { title: "Opponent modelling", body: "Infer opponents' voids and hidden cards from passing and discards." },
      { title: "Advanced moon-shot", body: "Set up a shoot-the-moon over multiple tricks; block opponent's attempts." },
    ] },
  ],
  faq: [
    { question: "What is 'shoot the moon'?", answer: "Winning ALL 13 hearts and the Queen of Spades in one hand. You score 0 points and each opponent scores 26 (or you can subtract 26 from your score, depending on house rules)." },
    { question: "Can you lead with a heart?", answer: "Not until hearts are 'broken' — that is, a heart has been played on a trick where hearts weren't the led suit." },
    { question: "How many points end the game?", answer: "Typically 100 points. When any player reaches 100+, the player with the lowest score wins." },
    { question: "Is the Queen of Spades penalty in every version?", answer: "Yes — 13 points, giving her the nickname 'Black Lady' or 'Black Maria'." },
    { question: "What if I can't follow suit?", answer: "You may play any card — including hearts (once broken or on a subsequent hand) or the Queen of Spades." },
  ],

  wikipediaTitle: "Hearts (card game)",
  sources: [
    { label: "Wikipedia — Hearts (card game)", url: "https://en.wikipedia.org/wiki/Hearts_(card_game)", publisher: "Wikipedia" },
    { label: "Bicycle Cards — Hearts Rules", url: "https://bicyclecards.com/how-to-play/hearts/", publisher: "United States Playing Card Company" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

import type { Sport } from "@/lib/types";

export const tennis: Sport = {
  id: "tennis",
  slug: "tennis",
  name: "Tennis",
  officialName: "Lawn Tennis",
  aliases: ["Lawn Tennis"],
  shortDescription:
    "One-on-one (or doubles) racket sport played over a low net — win points by making the ball bounce untouchable in the opponent's court.",
  longDescription:
    "Tennis is a racket sport played by two players (singles) or four (doubles) on a rectangular court divided by a low net. Players use strung rackets to strike a felt-covered ball back and forth. The game descends from the medieval French jeu de paume ('game of the palm', later real tennis) and was codified in its modern form by Major Walter Wingfield in 1874. The four Grand Slam events — the Australian Open (Melbourne, January), French Open (Paris, May-June), Wimbledon (London, June-July) and US Open (New York, August-September) — form the sport's biggest prizes. Tennis has been on the Olympic programme since 1896 (with a 64-year gap from 1924 to 1988). The men's and women's professional tours are governed by the ATP and WTA respectively; the ITF governs Grand Slams, Davis Cup, Billie Jean King Cup, and Olympic tennis.",

  category: "racket-paddle-sports",
  subCategory: "racket sport",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "England (modern game) — derived from French real tennis (12th century)",
  estimatedOrigin: "Codified 1874 (Major Walter Wingfield's 'Sphairistikè'); Wimbledon Championships 1877; ITF 1913",

  players: { min: 2, max: 4, note: "Singles 1v1 or doubles 2v2. Mixed doubles at Grand Slams pairs a man and woman per team." },
  field: {
    surfaceName: "tennis court",
    dimensions: "Singles: 23.77 m × 8.23 m. Doubles: 23.77 m × 10.97 m. Net height: 0.914 m at centre, 1.07 m at posts.",
    description: "Rectangular court divided by a net into two halves. Surfaces: grass (Wimbledon), clay (French Open), hard court (Australian/US Open, most ATP events), carpet/synthetic.",
  },
  equipment: [
    { name: "Tennis racket", description: "Head 500-700 cm² frame area, strung with polyester/gut hybrid. Max weight ~370 g." },
    { name: "Tennis ball", description: "Yellow (or white) felt-covered rubber, 6.54-6.86 cm diameter, 56-59.4 g." },
    { name: "Tennis shoes", description: "Court-specific outsoles: herringbone for clay, non-marking hard-court soles, grass-friendly nubbed patterns." },
    { name: "Grip and overgrip", description: "Absorbent tape wrap on the handle for feel and moisture management." },
  ],
  duration: {
    approximateMinutes: 120,
    structure: "Best-of-3 sets (women, most men's events) or best-of-5 sets (men's Grand Slams). One set = first to 6 games with 2-game margin; tiebreak at 6-6 in most sets.",
    note: "Grand Slam men's finals can run 4-6 hours; the longest match ever (Isner-Mahut, Wimbledon 2010) lasted 11 hours 5 minutes over 3 days.",
  },
  objective: "Win more sets than the opponent by winning individual points, games and sets according to tennis's hierarchical scoring system.",
  matchStructure:
    "One player serves the entire game; the serve alternates games. To win a game: 4 points ahead by 2. To win a set: 6 games ahead by 2, or win a 7-point tiebreak at 6-6. To win a match: 2 sets (best of 3) or 3 sets (best of 5). Sides are swapped every odd game total. Points scored 15, 30, 40, game (with deuce/advantage from 40-40). Grand Slam finals have varied tiebreak rules — Wimbledon uses 10-point tiebreaks in the final set at 6-6.",

  basicRules: [
    { title: "The serve", body: "Must land diagonally in the opposite service box. First serve fault → second serve; both faults = double fault, opponent scores point." },
    { title: "Bounce rule", body: "The ball must bounce once (in your own court) before you may return it, except when volleying (hitting before the bounce). The ball may bounce only once." },
    { title: "In or out", body: "Ball is 'in' if it lands on or inside the court lines. Line touching = in. Modern events use Hawk-Eye (electronic line-calling) at review level or fully automated." },
    { title: "Foot fault", body: "Server's foot must not touch or cross the baseline before contact with the ball." },
    { title: "Let", body: "Serve touches the net and lands in the service box → replay. Called by an electronic net cord sensor or umpire." },
    { title: "Scoring", body: "0 → 15 → 30 → 40 → game. Tied at 40-40 = 'deuce'; win 2 consecutive points from deuce to take the game." },
    { title: "Changeover", body: "Players switch ends after every odd game and at the end of each set. 90 seconds allowed for rest at changeovers, 2 minutes at set breaks." },
  ],
  advancedRules: [
    { title: "Tiebreak", body: "At 6-6 in a set, play a 7-point tiebreak. First to 7 points, 2-point margin. Serving alternates every 2 points, sides changed every 6 points." },
    { title: "Deciding-set tiebreak", body: "10-point tiebreak at 6-6 in the final set (all four Grand Slams unified in 2022)." },
    { title: "Challenge system / Hawk-Eye", body: "Players get 3 unsuccessful challenges per set (plus 1 more in tiebreaks) on Hawk-Eye-equipped courts. Some events now use fully-electronic line calling." },
    { title: "Time violation", body: "25 seconds between points (ATP/WTA). Violation = warning, then point penalty." },
    { title: "Medical timeout", body: "3 minutes for treatment; only during changeovers unless an emergency." },
    { title: "Doubles specifics", body: "Only one player of the receiving side must strike the return. Poaching (net player intercepting) is a doubles strategy — legal, expected." },
  ],
  scoring: {
    summary: "Points 15/30/40/game → Games (6 with 2-margin or tiebreak) → Sets (best of 3 or 5) → Match.",
    breakdown: [
      { action: "Point", points: "15 → 30 → 40 → game", note: "Deuce at 40-40; ad-in/ad-out; win 2 straight for game." },
      { action: "Game", points: "First to win 6 games (with 2-game margin) wins the set." },
      { action: "Set", points: "First to win 2 sets (women, most men) or 3 sets (men's Slams) wins the match." },
      { action: "Tiebreak point", points: "1", note: "First to 7 with 2-point margin, or 10 with 2 in deciding-set tiebreaks." },
    ],
    winCondition: "Win the required number of sets. Best-of-3 typically for tour events and women's Slams; best-of-5 for men's Slams.",
  },
  penalties: [
    { title: "Warning", body: "First offence — verbal or code violation." },
    { title: "Point penalty", body: "Second violation — point awarded to the opponent." },
    { title: "Game penalty", body: "Third violation — game awarded to the opponent." },
    { title: "Default", body: "Fourth violation or gross misconduct — match forfeit." },
  ],

  officiating: {
    officials: ["Chair umpire", "Line judges (5-9 per court, being phased out for electronic line calling)", "Hawk-Eye / Live ELC operator", "Tournament referee"],
    summary: "The chair umpire calls the score, enforces rules, and reviews challenges. Line judges call in/out (increasingly replaced by electronic systems).",
  },
  governingBodies: [
    { name: "International Tennis Federation", acronym: "ITF", founded: 1913, headquarters: "London, UK", website: "https://www.itftennis.com" },
    { name: "Association of Tennis Professionals", acronym: "ATP", founded: 1972, headquarters: "London/Ponte Vedra Beach, USA", website: "https://www.atptour.com" },
    { name: "Women's Tennis Association", acronym: "WTA", founded: 1973, headquarters: "St. Petersburg, USA", website: "https://www.wtatennis.com" },
  ],
  majorCompetitions: [
    { name: "Australian Open", frequency: "annual", founded: 1905, region: "worldwide", note: "First Grand Slam of the year — Melbourne, January (hard court)." },
    { name: "French Open (Roland-Garros)", frequency: "annual", founded: 1891, region: "worldwide", note: "Paris, May-June (clay)." },
    { name: "Wimbledon", frequency: "annual", founded: 1877, region: "worldwide", note: "The oldest tennis tournament — London, June-July (grass)." },
    { name: "US Open", frequency: "annual", founded: 1881, region: "worldwide", note: "New York, August-September (hard court)." },
    { name: "ATP Finals / WTA Finals", frequency: "annual", founded: 1970, region: "worldwide" },
    { name: "Davis Cup / Billie Jean King Cup", frequency: "annual", founded: 1900 / 1963, region: "worldwide", note: "National team competitions." },
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 1896, region: "worldwide", note: "Continuous from 1988." },
  ],
  countriesPlayed: ["US", "GB", "FR", "AU", "ES", "RS", "CH", "IT", "DE", "AR", "RU", "JP", "IN"],
  famousAthletes: [
    "Roger Federer",
    "Rafael Nadal",
    "Novak Djokovic",
    "Serena Williams",
    "Steffi Graf",
    "Martina Navratilova",
    "Björn Borg",
    "Pete Sampras",
    "Chris Evert",
    "Billie Jean King",
    "Andre Agassi",
    "Iga Świątek",
    "Carlos Alcaraz",
  ],
  records: [
    { title: "Most men's Grand Slam titles", holder: "Novak Djokovic", value: "24", year: 2023 },
    { title: "Most women's Grand Slam titles (Open Era)", holder: "Serena Williams", value: "23", year: 2017 },
    { title: "Longest match ever", holder: "John Isner def. Nicolas Mahut, Wimbledon", value: "11h 5m — 70-68 in 5th set", year: 2010 },
    { title: "Fastest serve", holder: "Sam Groth (AUS)", value: "263 km/h (163.4 mph)", year: 2012 },
  ],

  variants: ["table-tennis", "beach-tennis", "real-tennis", "soft-tennis", "wheelchair-tennis", "padel"],
  relatedSports: ["badminton", "table-tennis", "squash", "pickleball", "padel", "racquetball"],

  skills: ["serve technique", "groundstrokes (forehand, backhand)", "volley (net play)", "footwork", "shot placement", "spin generation (topspin, slice)", "mental resilience"],
  strategies: [
    { title: "Aggressive baseline", body: "Dominate from the back of the court with heavy topspin groundstrokes — the modern staple (Nadal, Djokovic, Świątek)." },
    { title: "Serve-and-volley", body: "Rush the net after the serve — dominant on grass in the 1990s, still used on fast courts." },
    { title: "Counterpuncher / defender", body: "Retrieve everything and let the opponent make errors — Chang, Ivanišević, Medvedev at his best." },
    { title: "All-court player", body: "Blend baseline and net play seamlessly — Federer, McEnroe, Sampras, Alcaraz." },
    { title: "Doubles poaching", body: "Net player crosses to intercept — surprise creates errors." },
  ],

  terminology: [
    { term: "Ace", meaning: "A serve untouched by the opponent — instant point." },
    { term: "Deuce", meaning: "Score tied at 40-40; win 2 consecutive points to win the game." },
    { term: "Advantage", meaning: "The point won after deuce; win again for the game, lose for deuce." },
    { term: "Break", meaning: "Winning a game while opponent is serving — game hangs on the receiver's edge." },
    { term: "Grand Slam", meaning: "Winning all 4 majors in a calendar year — done only 5 times in singles history." },
    { term: "Bagel", meaning: "Winning a set 6-0." },
    { term: "Breadstick", meaning: "Winning a set 6-1." },
    { term: "Fault / double fault", meaning: "Missing the service box on a serve; two missed serves = point for opponent." },
    { term: "Volley", meaning: "Hitting the ball before it bounces — usually from the net." },
    { term: "Let", meaning: "Serve touches the net and lands in — replay." },
    { term: "Tiebreak", meaning: "7-point mini-set at 6-6 to decide a set." },
    { term: "Hawk-Eye / ELC", meaning: "Electronic line-calling; players challenge disputed calls (or fully automated at some events)." },
    { term: "Slam Cup", meaning: "Trophy given to the year-end #1 by the ATP/WTA." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Continental grip", body: "The one-size-fits-all grip — used for serves, volleys, slices, and returns." },
      { title: "Forehand and backhand", body: "Semi-western forehand grip; two-handed backhand for beginners." },
      { title: "Serve motion", body: "Start with abbreviated serve (waiter's tray); progress to full trophy pose over weeks." },
      { title: "Ready position", body: "Split step as opponent hits; recover to centre baseline between shots." },
    ] },
    { level: "intermediate", steps: [
      { title: "Topspin generation", body: "Low-to-high swing path; brush the outside of the ball for kick." },
      { title: "Volley technique", body: "Punch through the ball; short backswing, follow-through low to high." },
      { title: "Approach shots", body: "Slice down the line to come in behind; cut off angles at the net." },
      { title: "Match play", body: "Understand percentages: rally patterns, second-serve returns, break-point strategy." },
    ] },
    { level: "advanced", steps: [
      { title: "Kick serve", body: "The high-bouncing serve that stays in front and jumps up at the opponent." },
      { title: "Drop shot and lob", body: "Change of pace and heights — takes the opponent off-balance." },
      { title: "Court positioning", body: "Read opponent's stance and racket path before contact for anticipation." },
      { title: "Mental game", body: "Serving out matches, closing sets, and playing tiebreaks under pressure." },
    ] },
  ],
  faq: [
    { question: "What are the four Grand Slams?", answer: "Australian Open (Melbourne, January), French Open / Roland-Garros (Paris, May-June), Wimbledon (London, June-July), US Open (New York, August-September)." },
    { question: "Why is the scoring 15, 30, 40 instead of 1, 2, 3?", answer: "Origin debated — most likely from the medieval French clock face (60 min divided into quarters: 15, 30, 45 → shortened to 40 for easy calling). Predates modern scoring by centuries." },
    { question: "What's a tiebreak?", answer: "A 7-point mini-set played at 6 games all — first to 7 (with 2-point margin). It decides the set without endless games. Some formats use a 10-point deciding-set tiebreak." },
    { question: "Why did Federer, Nadal and Djokovic dominate tennis so long?", answer: "The 'Big Three' era (~2003-2023) was defined by exceptional longevity and rivalry — 66 combined Grand Slams among them. Modern coaching, sports science, and their generational overlap created an unprecedented duopoly then triopoly." },
    { question: "How does the ranking system work?", answer: "ATP/WTA points are earned by tournament results in a rolling 52-week window. Grand Slam wins are worth 2000 points; ATP 1000 events 1000; ATP 500 events 500; and so on. The world #1 is whoever has the most points at any given moment." },
  ],

  wikipediaTitle: "Tennis",
  sources: [
    { label: "Wikipedia — Tennis", url: "https://en.wikipedia.org/wiki/Tennis", publisher: "Wikipedia" },
    { label: "ITF — Rules of Tennis", url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/", publisher: "International Tennis Federation" },
    { label: "ATP Tour — Rulebook", url: "https://www.atptour.com", publisher: "ATP" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

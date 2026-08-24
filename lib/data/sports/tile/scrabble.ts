import type { Sport } from "@/lib/types";

export const scrabble: Sport = {
  id: "scrabble",
  slug: "scrabble",
  name: "Scrabble",
  officialName: "Scrabble",
  aliases: ["Lexiko (original name)", "Criss-Crosswords"],
  shortDescription:
    "The classic word-building board game — form crossword-style words on a 15×15 grid using seven lettered tiles per rack, scoring for length, letters and premium squares.",
  longDescription:
    "Scrabble is a word game where 2-4 players place lettered tiles on a 15×15 grid to form crossword-style words, scoring points based on tile letter values and premium bonus squares. It was invented by Alfred Butts, an unemployed architect in Poughkeepsie, New York, in 1938 (first called Lexiko, then Criss-Crosswords) and successfully commercialised by James Brunot in 1948; Selchow & Righter took distribution and launched Scrabble internationally in 1952. It is now sold in 121 countries and 29 languages, and the World English-Language Scrabble Players Association (WESPA) runs a World Championship since 1991. Competitive Scrabble is played to two authoritative dictionaries: TWL (Tournament Word List, North America) and SOWPODS/Collins Scrabble Words (rest of the world).",

  category: "tile-games",
  subCategory: "crossword tile game",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Poughkeepsie, New York (Alfred Butts)",
  estimatedOrigin: "Designed 1938 (Alfred Butts); commercialised 1948 (James Brunot); global launch 1952 (Selchow & Righter)",

  players: { min: 2, max: 4, note: "Official is 2-4 players; tournament play is almost always 1v1." },
  equipment: [
    { name: "Scrabble board", description: "15 × 15 grid = 225 squares. Premium squares: 8 triple-word, 17 double-word, 12 triple-letter, 24 double-letter, and 1 centre 'star' square (double-word, must contain first move)." },
    { name: "100 lettered tiles", description: "98 letters with printed point values (A=1 to Q,Z=10) + 2 blank wildcards. Distribution reflects English letter frequency." },
    { name: "Four racks", description: "Wooden or plastic holders concealing each player's 7 tiles." },
    { name: "Tile bag", description: "Cloth pouch for drawing tiles blind." },
    { name: "Scorepad or digital tracker", description: "For running score per turn and per move." },
    { name: "Two-minute sand timer or chess clock", description: "For timed play. Tournament: 25 minutes per player + 10 seconds/turn penalty." },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "Casual: 45-90 minutes. Tournament: 25 minutes per player total (50 minutes total round).",
  },
  objective: "Score more points than opponents by placing lettered tiles on the board to form crossword-style interlocking words. Game ends when the bag is empty and a player uses all their tiles, or when no legal moves remain.",
  matchStructure:
    "Each player draws 7 tiles. On your turn: (1) place one or more tiles on the board to form a single new word (or extend existing words with letters that also form valid words at every intersection), OR exchange any number of tiles for new ones (losing your turn), OR pass. Score based on tile values and premium squares. Draw back up to 7 tiles. Play continues until the bag is empty and one player uses all their tiles (bonus 2× value of opponents' remaining tiles), or six successive passes end the game.",

  basicRules: [
    { title: "Setup", body: "Each player draws 7 tiles from the bag; highest tile draw goes first. First word must cross the centre 'star' square." },
    { title: "Forming words", body: "All new tiles must form a single main word. All perpendicular sub-words formed at intersections must also be valid dictionary words." },
    { title: "Scoring a turn", body: "Add tile values in the main word, multiply letters on double/triple-letter squares first, then multiply the whole word by any double/triple-word squares. Sub-words score independently in the same way." },
    { title: "Blank tiles", body: "Blanks act as any letter but score zero points. Once placed, a blank's letter is fixed for the game." },
    { title: "Bingo (bonus)", body: "Using all 7 tiles from your rack in one turn awards +50 bonus points ('bingo' or 'bonus')." },
    { title: "Challenging", body: "Any player may challenge an opponent's move; if the word is invalid, the tiles are removed and the opponent scores 0. If valid, penalty rules vary (see advanced rules)." },
    { title: "Game end", body: "When bag is empty and one player uses all their tiles, they score double the remaining tile values of all opponents' racks. Alternatively, six consecutive passes end the game." },
    { title: "Legal words", body: "Anything in the official dictionary (TWL in North America, SOWPODS internationally) except: no capital letters (proper nouns), no hyphens or apostrophes, no abbreviations." },
  ],
  advancedRules: [
    { title: "Challenge penalties", body: "TWL rules: unsuccessful challenger loses their turn. SOWPODS rules: unsuccessful challenger loses 5 points. Double-challenge rule (some tournaments): both penalty and forfeit." },
    { title: "Exchange", body: "You may exchange 1-7 tiles for new ones if the bag has at least 7 tiles remaining; you lose your turn but rack fresh letters." },
    { title: "Timed play", body: "Tournament: 25 minutes per player (50 total). Going over time costs 10 points per minute; over 10 minutes = loss." },
    { title: "Rack management", body: "Balance vowels and consonants; hold high-value tiles for premium squares; use S and blanks strategically." },
    { title: "Rack leave", body: "The tiles left on your rack after a turn — high-scoring leaves (like Q or J) drop average by 5-10 points." },
  ],
  scoring: {
    summary: "Sum tile values × letter bonuses × word bonuses; +50 for a bingo. Playing all tiles first at game end scores double opponents' unplayed tiles.",
    breakdown: [
      { action: "Base tile score", points: "A/E/I/L/N/O/R/S/T/U=1; D/G=2; B/C/M/P=3; F/H/V/W/Y=4; K=5; J/X=8; Q/Z=10", note: "Standard English distribution." },
      { action: "Double letter (light blue)", points: "×2 letter", note: "Only for that specific tile." },
      { action: "Triple letter (dark blue)", points: "×3 letter" },
      { action: "Double word (pink)", points: "×2 whole word" },
      { action: "Triple word (red)", points: "×3 whole word" },
      { action: "Bingo bonus", points: "+50", note: "Using all 7 rack tiles in one turn." },
      { action: "End-game unplayed tiles", points: "-tile value", note: "Deducted from each player's score." },
    ],
    winCondition: "Highest score when game ends. Tie-breaks vary by tournament rules — usually count total 'bingos' or final margin.",
  },

  officiating: {
    officials: ["Tournament director", "Word judge (verifies challenges)", "Timekeeper"],
    summary: "Casual play is self-officiated with a dictionary at hand. Tournament play uses computerised word validation, challenge protocols, and strict timing.",
  },
  governingBodies: [
    { name: "World English-Language Scrabble Players Association", acronym: "WESPA", founded: 2003, headquarters: "worldwide", website: "https://www.wespa.org" },
    { name: "North American Scrabble Players Association", acronym: "NASPA", founded: 2009, headquarters: "USA/Canada", website: "https://www.scrabbleplayers.org" },
    { name: "Association of British Scrabble Players", acronym: "ABSP", founded: 1987, headquarters: "UK", website: "https://www.absp.org.uk" },
  ],
  majorCompetitions: [
    { name: "World Scrabble Championship", frequency: "biennial", founded: 1991, region: "worldwide", note: "WESPA-run; uses Collins Scrabble Words (SOWPODS)." },
    { name: "North American Scrabble Championship (NASC)", frequency: "annual", founded: 1978, region: "US/Canada", note: "TWL dictionary." },
    { name: "Causeway Challenge", frequency: "annual", founded: 2005, region: "Asia (Malaysia)" },
    { name: "African Scrabble Championship", frequency: "annual", region: "Africa" },
  ],
  countriesPlayed: ["US", "GB", "CA", "AU", "NG", "TH", "MY", "SG", "IN", "PK", "NZ", "PH"],
  famousAthletes: [
    "Nigel Richards (5× World Champion)",
    "Jesse Inman (2× WSC finalist)",
    "Adam Logan",
    "Wellington Jighere (2015 World Champion)",
    "Panupol Sujjayakorn (Thailand)",
    "David Boys",
    "Joe Edley (3× NASC Champion)",
  ],
  records: [
    { title: "Most World Scrabble Championships", holder: "Nigel Richards (NZL/MYS)", value: "5 (2007, 2011, 2013, 2018, 2019)", year: 2019 },
    { title: "Highest single-move score", holder: "Michael Cresta", value: "365 points ('QUIXOTRY')", year: 2006 },
    { title: "Highest game total", holder: "Michael Cresta vs Wayne Yorra", value: "830-490 = 1320 combined", year: 2006 },
    { title: "First non-English-speaker to win French Scrabble WC", holder: "Nigel Richards (memorised French dictionary in 9 weeks)", value: "2015", year: 2015 },
  ],

  variants: ["scrabble-super", "scrabble-junior", "scrabble-deluxe", "bananagrams", "words-with-friends"],
  relatedSports: ["bananagrams", "boggle", "upwords", "quiddler", "words-with-friends"],

  skills: ["vocabulary", "anagramming", "board vision", "endgame counting", "probability (rack management)"],
  strategies: [
    { title: "Rack balance", body: "Keep a balanced vowel-consonant ratio (typically 3-4 vowels). Dump problem tiles (V, W, C in poor conditions) before they clog." },
    { title: "Bingo priming", body: "Save the S, blank, and common bingo-friendly letters (E-A-N-I-R-T-L-S-D-O) for a 50-point bonus." },
    { title: "Board position", body: "Score not just for this turn — control the board to deny opponents access to triple-word squares." },
    { title: "Endgame counting", body: "Track remaining tiles from turn 15 onward; every world-class player counts the bag." },
    { title: "Two-letter words", body: "Master the ~120 valid two-letter words (AA, AB, AD, AE, AG, AH, AI, AL, AM, AN, AR, AS, AT, AW, AX, AY, ...) to enable hooks and parallel plays." },
  ],

  terminology: [
    { term: "Bingo", meaning: "Using all 7 rack tiles in a single turn — +50 point bonus." },
    { term: "Rack", meaning: "Your 7 tiles hidden from opponents." },
    { term: "Hook", meaning: "A letter that turns an existing board word into a new word (e.g. HOSE + D = HOSED)." },
    { term: "Bonus square", meaning: "Any premium square: DL, TL, DW, TW." },
    { term: "TWL / SOWPODS / CSW", meaning: "Tournament Word List (North America) / Scrabble Official Words dictionary (international)." },
    { term: "Rack leave", meaning: "The tiles remaining on your rack after a turn." },
    { term: "Fishing", meaning: "Playing off unwanted tiles hoping to draw a bingo-friendly rack next turn." },
    { term: "Sniff", meaning: "A high-scoring word that opens the board for you and closes it to opponents." },
    { term: "Blank", meaning: "The 2 wildcard tiles worth 0 points but usable as any letter." },
    { term: "Quackle / Zyzzyva", meaning: "The two most-used training software packages for anagram practice and postgame analysis." },
    { term: "Overlap", meaning: "A parallel play scoring multiple new 2-letter or 3-letter words simultaneously." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn tile distributions", body: "Memorise how many of each letter and their point values." },
      { title: "Practice anagramming", body: "Take a random 7-letter rack and find as many words as possible in 5 minutes." },
      { title: "Learn 2-letter words", body: "Memorise the ~120 valid 2-letter words — essential for parallel plays." },
      { title: "First scored games", body: "Play with a dictionary at hand; challenge liberally to learn what's legal." },
    ] },
    { level: "intermediate", steps: [
      { title: "3-letter word list", body: "Memorise the ~1000 valid 3-letter words (from AAL to ZZZ)." },
      { title: "Common bingo stems", body: "Learn 6-letter combinations that form 7-letter bingos with the most rack draws (SATIRE, RETINA, SATINE, TISANE...)." },
      { title: "Q without U", body: "Memorise Q-without-U words: QI, QAT, QOPH, QANAT, QINDAR, FAQIR, QWERTY..." },
      { title: "Board vision drills", body: "Practise scanning for multiple 20+ point plays each turn — the difference between casual and club players." },
    ] },
    { level: "advanced", steps: [
      { title: "Full dictionary study", body: "Serious players memorise 100k+ words from Collins Scrabble Words — build progressively through 4-letter, 5-letter, then longer word lists." },
      { title: "Endgame precision", body: "Learn to count the bag from move 12+ and calculate exact tile probabilities." },
      { title: "Postgame analysis", body: "Use Quackle or Elise to analyse every move for expected-value error rate." },
      { title: "Tournament preparation", body: "Play in weekly clubs and rated tournaments; qualify for national and world events." },
    ] },
  ],
  faq: [
    { question: "TWL vs SOWPODS — what's the difference?", answer: "TWL (Tournament Word List) is used in North America — ~180,000 words. SOWPODS / Collins Scrabble Words (CSW) is the international dictionary — ~280,000 words, including more UK slang, Australianisms and archaic words. All world championships use CSW." },
    { question: "Can I use proper nouns?", answer: "No — no capitalised words (people, places, brand names), no hyphens, no apostrophes, no abbreviations." },
    { question: "What if I don't know if a word is valid?", answer: "Play it! Opponent can challenge. In TWL rules an unsuccessful challenge loses your turn; in SOWPODS rules it costs 5 points. Always safer to play borderline words than to concede." },
    { question: "How many blanks are there?", answer: "Exactly 2 — worth zero points but usable as any letter. Blanks + S are the most valuable tiles in Scrabble." },
    { question: "What is a bingo?", answer: "Using all 7 tiles from your rack in a single turn — +50 point bonus. Top players average 3-4 bingos per game." },
  ],

  wikipediaTitle: "Scrabble",
  sources: [
    { label: "Wikipedia — Scrabble", url: "https://en.wikipedia.org/wiki/Scrabble", publisher: "Wikipedia" },
    { label: "WESPA — Rules of Scrabble", url: "https://www.wespa.org/rules/", publisher: "WESPA" },
    { label: "Hasbro — Official Rules", url: "https://scrabble.hasbro.com/en-us/rules", publisher: "Hasbro" },
    { label: "Collins Scrabble Words", url: "https://collinsdictionary.com/scrabble-word-lists/", publisher: "Collins" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
  sportSpecific: {
    tileDistribution: {
      A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4,
      M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1,
      Y: 2, Z: 1, blanks: 2,
    },
    highestPossibleSingleMove: "1782 points (theoretical, SESQUIOXIDIZING triple-triple with 3 sub-word plays)",
  },
};

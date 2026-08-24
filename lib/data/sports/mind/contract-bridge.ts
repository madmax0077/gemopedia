import type { Sport } from "@/lib/types";

export const contractBridge: Sport = {
  id: "contract-bridge",
  slug: "contract-bridge",
  name: "Bridge",
  officialName: "Contract Bridge",
  aliases: ["Bridge", "Duplicate Bridge", "Rubber Bridge"],
  shortDescription:
    "The world's premier partnership card game — bid to a contract with your partner, then take enough tricks to make it.",
  longDescription:
    "Contract Bridge is a four-player trick-taking card game descended from whist, played in two partnerships (North-South vs East-West). Its distinctive feature is a competitive auction: players bid on how many tricks they intend to win and in which trump suit, arriving at a 'contract' that they must then make in the play. Contract bridge was invented on the 1925 SS Finland cruise by Harold Vanderbilt and codified by Ely Culbertson in the 1930s. The game is governed by the World Bridge Federation (WBF), founded in 1958, and recognised as a mind sport by the IOC in 1999. Duplicate bridge — where the same hands are played at every table so luck is eliminated — is the tournament format.",

  category: "mind-sports",
  subCategory: "trick-taking partnership card game",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Aboard the SS Finland (Harold Vanderbilt) & the US East Coast",
  estimatedOrigin: "Modern contract bridge 1925; predecessors (whist, auction bridge) 17th-early-20th century",

  players: { perTeam: 2, min: 4, max: 4, note: "Fixed at 4 players in 2 partnerships (N-S vs E-W)." },
  equipment: [
    { name: "Standard 52-card deck", description: "Four suits (♠, ♥, ♦, ♣); no jokers. Duplicate events use pre-dealt boards." },
    { name: "Bidding box", description: "Set of pre-printed bidding cards used in tournament play to prevent voice inflection giving information." },
    { name: "Bridge tables", description: "Square table with players seated N, S, E, W." },
    { name: "Bridge scoresheet or duplicate boards", description: "For recording scores; duplicate events use boards that preserve the deal for every table." },
  ],
  duration: {
    approximateMinutes: 15,
    structure: "One board (deal) takes ~7 minutes. A duplicate tournament session is typically 26 boards ≈ 3.5 hours.",
  },
  objective: "Bid to a contract with your partner that describes how many tricks you'll take (7-13) and in which trump suit (or notrump), then take at least that many tricks in the play — scoring high enough to win the session or match.",
  matchStructure:
    "Each hand: (1) deal 13 cards to each player; (2) an auction proceeds clockwise with bids, doubles, redoubles or passes until three consecutive passes end it; (3) the final bidder's partnership plays the contract, with the partner of the declarer laid out as 'dummy'; (4) the defenders lead first; (5) 13 tricks are played; (6) score is calculated based on whether the contract made and by how many tricks. In a duplicate tournament, every partnership plays the same hands as their opposite direction, and scores are compared across the field.",

  basicRules: [
    { title: "The deal", body: "One player deals all 52 cards clockwise, 13 to each player. Dealer bids first." },
    { title: "The auction", body: "Bids specify a number of tricks over 6 (called 'book') and a trump suit — e.g. '1 heart' = 7 tricks with hearts as trump. Bids ascend: 1♣ < 1♦ < 1♥ < 1♠ < 1NT < 2♣ ... 7NT." },
    { title: "Doubling", body: "A player may double an opponent's bid (increasing penalties), and the opponent may redouble (doubling again)." },
    { title: "Ending the auction", body: "Three consecutive passes end the auction; the last bid is the 'contract'." },
    { title: "Declarer, dummy and defenders", body: "The first player of the winning side to name the suit becomes declarer. Their partner is dummy — laying their cards face-up after the opening lead. The other two are defenders." },
    { title: "The play", body: "Defender to declarer's left leads. Players follow suit if possible; if not, they may play any card (including trump). Highest trump wins the trick; if no trumps, highest card of the led suit." },
    { title: "Scoring", body: "Points for making the contract (higher for major suits and NT, higher still for slams). Bonuses for game (100+ points in one contract) and slams (12 or 13 tricks). Penalties for undertricks." },
  ],
  advancedRules: [
    { title: "Vulnerability", body: "In duplicate, each side is designated 'vulnerable' or 'not vulnerable' — vulnerable teams score more for making contracts but lose more when defeated." },
    { title: "Slam bonuses", body: "Bidding and making a small slam (12 tricks) scores +500/+750 (nv/vul); a grand slam (13 tricks) +1000/+1500 — huge incentive for accurate slam bidding." },
    { title: "Overtricks and undertricks", body: "Overtricks score a small bonus; undertricks incur escalating penalties, doubled/redoubled if the contract was doubled." },
    { title: "Convention cards", body: "Each partnership must disclose their bidding system on a convention card; the opponents may inspect it at any time." },
    { title: "Alert procedure", body: "Any 'artificial' bid (not showing the natural suit meaning) must be alerted so opponents know its true meaning." },
  ],
  scoring: {
    summary: "Contract score + bonuses (part-score, game, slam) − penalties (undertricks). Duplicate scoring compares raw scores across the field for matchpoints or IMPs.",
    breakdown: [
      { action: "Minor-suit trick (♣/♦)", points: "20 each" },
      { action: "Major-suit trick (♠/♥)", points: "30 each" },
      { action: "Notrump — first trick", points: "40" },
      { action: "Notrump — each subsequent trick", points: "30" },
      { action: "Game bonus (100+ points)", points: "300 (nv) / 500 (vul)" },
      { action: "Small slam bonus", points: "500 (nv) / 750 (vul)" },
      { action: "Grand slam bonus", points: "1000 (nv) / 1500 (vul)" },
      { action: "Undertrick (not doubled)", points: "-50 (nv) / -100 (vul) each" },
    ],
    winCondition: "Rubber bridge: first partnership to win two 'games' (100+ scoring points). Duplicate: highest total across all boards in matchpoints or IMPs.",
  },

  officiating: {
    officials: ["Tournament director (TD)", "Vugraph operator (major events)", "Scorer"],
    summary: "In duplicate events a tournament director enforces rules, adjudicates infractions (misinformation, revoke, lead out of turn) and assigns adjusted scores. Rubber bridge is self-officiated.",
  },
  governingBodies: [
    { name: "World Bridge Federation", acronym: "WBF", founded: 1958, headquarters: "Lausanne, Switzerland", website: "http://www.worldbridge.org" },
    { name: "American Contract Bridge League", acronym: "ACBL", founded: 1937, headquarters: "Horn Lake, Mississippi, USA", website: "https://www.acbl.org" },
    { name: "English Bridge Union", acronym: "EBU", founded: 1954, headquarters: "Aylesbury, UK", website: "https://www.ebu.co.uk" },
  ],
  majorCompetitions: [
    { name: "Bermuda Bowl (World Team Championship)", frequency: "biennial", founded: 1950, region: "worldwide" },
    { name: "Venice Cup (Women's World Team Championship)", frequency: "biennial", founded: 1974, region: "worldwide" },
    { name: "World Bridge Games (formerly Olympiad)", frequency: "quadrennial", founded: 1960, region: "worldwide" },
    { name: "World Bridge Series", frequency: "quadrennial", founded: 1962, region: "worldwide" },
    { name: "European Bridge Championships", frequency: "biennial", founded: 1932, region: "Europe" },
  ],
  countriesPlayed: ["US", "IT", "NO", "FR", "PL", "SE", "GB", "NL", "CN", "IN", "AU", "IL"],
  famousAthletes: [
    "Charles Goren",
    "Ely Culbertson",
    "Omar Sharif",
    "Zia Mahmood",
    "Bob Hamman",
    "Benito Garozzo",
    "Lorenzo Lauria",
    "Geir Helgemo",
    "Nikolas Bausback",
  ],
  records: [
    { title: "Most Bermuda Bowl wins (nation)", holder: "Italy", value: "16", year: 2019 },
    { title: "Most WBF world championship medals (male)", holder: "Bob Hamman (USA)", value: "12 golds", year: 2010 },
    { title: "Longest reign as world's #1", holder: "Bob Hamman", value: "Ranked #1 for over 20 years", year: 2005 },
  ],

  variants: ["duplicate-bridge", "rubber-bridge", "chicago-bridge", "minibridge"],
  relatedSports: ["poker", "chess", "spades", "hearts", "whist"],

  skills: ["partnership communication", "probability calculation", "counting the hand", "psychology and inference", "memory"],
  strategies: [
    { title: "Bidding systems", body: "Learn a natural system (Standard American / SAYC or Acol) or a strong-club system (Precision) for accurate description of your hand." },
    { title: "Counting", body: "Track opponents' distribution and points from the auction and play — every world-class player counts every hand." },
    { title: "Declarer play", body: "Plan the play at trick 1: count losers/winners, plan trump management, and identify entries to each hand." },
    { title: "Defensive signals", body: "Attitude signals (like/hate the suit), count signals (odd/even), and suit-preference signals to guide partner." },
    { title: "Preemptive bidding", body: "Bid aggressively with a long weak suit to block opponents' auction and constrain their information." },
  ],

  terminology: [
    { term: "Contract", meaning: "The final bid, specifying number of tricks and trump suit." },
    { term: "Declarer", meaning: "The player who first named the trump suit in the winning contract — plays both their own and dummy's cards." },
    { term: "Dummy", meaning: "Declarer's partner, whose hand is laid face-up on the table after the opening lead." },
    { term: "Slam", meaning: "A contract for 12 tricks (small slam, 6-level) or 13 (grand slam, 7-level)." },
    { term: "Notrump (NT)", meaning: "A contract with no trump suit — highest card of the led suit always wins the trick." },
    { term: "Vulnerable / non-vulnerable", meaning: "A designation for duplicate scoring that scales bonuses and penalties." },
    { term: "Overtrick / undertrick", meaning: "Winning more (over) or fewer (under) tricks than contracted for." },
    { term: "Finesse", meaning: "A play that tries to win a trick with a lower card when a higher one is expected in a specific opponent's hand." },
    { term: "Squeeze", meaning: "A play that forces an opponent to unguard one of two threats." },
    { term: "Convention", meaning: "An artificial bid whose meaning is agreed by the partnership (Stayman, Blackwood, transfers)." },
    { term: "Matchpoints / IMPs", meaning: "The two main duplicate scoring methods — matchpoints reward outperforming other pairs on each board; IMPs measure absolute score differences." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Trick-taking basics", body: "Learn how tricks are won (follow suit; trump wins; highest card of led suit) — play a hand of whist or hearts first." },
      { title: "Point count", body: "Count high-card points: A=4, K=3, Q=2, J=1. Learn hand valuation." },
      { title: "Opening bids", body: "Learn Standard American / SAYC — when to open 1 of a suit, 1NT, 2NT, or preemptive." },
      { title: "Responses and rebids", body: "Basic partner-response structure; when to raise, invite, or bid a new suit." },
    ] },
    { level: "intermediate", steps: [
      { title: "Slam bidding", body: "Learn Blackwood (ace-asking) and Roman Key Card Blackwood (RKCB)." },
      { title: "Common conventions", body: "Stayman, Jacoby transfers, negative doubles, weak twos." },
      { title: "Declarer play techniques", body: "Establishing suits, ruffing losers, hold-up plays, avoidance plays." },
      { title: "Defensive fundamentals", body: "Opening leads (fourth-best, top of sequence), signalling, breaking new suits." },
    ] },
    { level: "advanced", steps: [
      { title: "Squeeze play", body: "Recognise simple squeezes (BLUE), double squeezes, and progressive squeezes." },
      { title: "End-play technique", body: "Throw-ins, elimination plays, and dummy reversals." },
      { title: "Bidding theory", body: "Study Precision or 2/1 game-forcing systems; understand relay bids." },
      { title: "Tournament experience", body: "Play in weekly clubs, sectional and national tournaments; qualify for national teams." },
    ] },
  ],
  faq: [
    { question: "Is bridge really a sport?", answer: "The IOC recognised bridge as a mind sport in 1999, and it has been a demonstration sport at the World Mind Sports Games since 2008. Whether it's a 'sport' in the athletic sense is debated, but it's rigorously competitive." },
    { question: "How is duplicate bridge different from rubber bridge?", answer: "In duplicate, every table plays the same pre-dealt hands, then scores are compared across the field — luck is eliminated. Rubber bridge shuffles fresh each hand and scores per rubber (best of 3 games)." },
    { question: "What are matchpoints and IMPs?", answer: "The two main duplicate scoring methods. Matchpoints reward outperforming other pairs on each board (percentile-based). IMPs measure absolute score differences on a compressed scale — used for team events." },
    { question: "How long to become a competent player?", answer: "Learning to bid and play at social level: 2-3 months. Reaching intermediate club level: 1-2 years. National-team level typically takes decades of dedicated study." },
    { question: "Do computers dominate bridge like they do chess?", answer: "Not yet at world-class team level — bridge's hidden information and partnership communication remain hard for AI. Top bridge programs (Jack, GIB, Micro Bridge) play well but haven't beaten elite pairs consistently." },
  ],

  wikipediaTitle: "Contract bridge",
  sources: [
    { label: "Wikipedia — Contract bridge", url: "https://en.wikipedia.org/wiki/Contract_bridge", publisher: "Wikipedia" },
    { label: "World Bridge Federation — Laws", url: "http://www.worldbridge.org/laws/", publisher: "WBF" },
    { label: "ACBL — Learn to Play Bridge", url: "https://www.acbl.org/learn/", publisher: "ACBL" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

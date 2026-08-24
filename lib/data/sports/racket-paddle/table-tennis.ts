import type { Sport } from "@/lib/types";

export const tableTennis: Sport = {
  id: "table-tennis",
  slug: "table-tennis",
  name: "Table Tennis",
  officialName: "Table Tennis",
  aliases: ["Ping Pong", "Whiff-Whaff"],
  shortDescription:
    "Fast-paced indoor racket sport played on a 9-foot table divided by a low net — hit a lightweight ball with a rubber paddle before it bounces twice.",
  longDescription:
    "Table Tennis is a racket sport played by two (singles) or four (doubles) players who use small paddles to hit a lightweight ball back and forth across a 2.74 m × 1.525 m table divided by a 15.25 cm net. The game originated in England in the 1880s as a Victorian-era parlour game called 'Whiff-Whaff' or 'Ping Pong', evolved with celluloid balls in the 1900s, and grew into a global sport with the founding of the International Table Tennis Federation (ITTF) in 1926. Table tennis debuted at the Olympics in Seoul 1988 and has since been dominated almost totally by China — Chinese players have won 32 of 37 Olympic gold medals (through 2024). The sport moved from 21-point games to 11-point in 2001 (making matches faster and TV-friendlier), and from celluloid to 40+ mm polypropylene balls in 2014.",

  category: "racket-paddle-sports",
  subCategory: "indoor racket sport",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "England (Victorian parlour game)",
  estimatedOrigin: "1880s England; International Table Tennis Federation founded 1926",

  players: { min: 2, max: 4, note: "Singles 1v1 or doubles 2v2." },
  field: {
    surfaceName: "table",
    dimensions: "2.74 m × 1.525 m × 76 cm high. Net 15.25 cm high. Rubber and blade racket ~15 cm × 25 cm.",
    description: "Solid rectangular table (usually blue or green) with a white line down the centre (for doubles play) and a white line around the edges. Net divides the table lengthwise.",
  },
  equipment: [
    { name: "Table tennis racket (paddle/bat)", description: "Wooden blade (5-7 plies) with rubber sheets glued on both sides — one red, one black. Different rubbers for spin, speed or defensive control." },
    { name: "Ball", description: "40+ mm diameter, 2.7 g. Made of poly-plastic since 2014 (celluloid before). White or orange." },
    { name: "Table", description: "2.74 m × 1.525 m × 76 cm high, dark blue or green matte finish for visibility." },
    { name: "Net and posts", description: "15.25 cm high nylon net extending 15.25 cm past each side." },
    { name: "Court barriers", description: "Portable barriers around the play area for tournaments." },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "Best of 5 games (women, doubles) or best of 7 games (men's singles, most major events). Games to 11 points, win by 2.",
    note: "Play is very fast — a single point takes 3-10 seconds; a match rarely exceeds 40 minutes.",
  },
  objective: "Score 11 points before your opponent, then win the required number of games (3 in best-of-5 or 4 in best-of-7).",
  matchStructure:
    "The serve alternates every 2 points (unlike tennis). To win a point, ensure the ball bounces once in your court, once in your opponent's court, and the opponent fails to return it legally. A game is to 11 points with a 2-point margin. A match is best-of-5 or best-of-7 games. At 10-10 in a game, the serve alternates every 1 point.",

  basicRules: [
    { title: "The serve", body: "Ball must be tossed upwards from an open palm (min 16 cm), then struck so it bounces on the server's side, then over/around the net, then on the receiver's side." },
    { title: "Return", body: "Ball must be returned so it bounces on the opponent's side of the table (or over the end line/side line legally)." },
    { title: "Alternating serves", body: "Serve changes every 2 points until 10-10, then every 1 point." },
    { title: "Point ending", body: "Point ends if the ball hits the net without going over, bounces on the wrong side, is struck twice by the same player, or the returner fails to hit it before the second bounce." },
    { title: "Doubles specifics", body: "Serve must go from server's right court to receiver's right court (diagonally). Partners must alternate hits — you cannot hit twice in a row on the same team." },
    { title: "Net cord", body: "If the ball touches the net on serve and still lands legally, it's a 'let' — serve is replayed. Net cord in a rally is play-on." },
    { title: "Ball off the edge", body: "Legal — even a top edge hit that bounces sideways counts as in." },
  ],
  advancedRules: [
    { title: "Two-colour rule", body: "Rackets must have one red and one black rubber — so opponents can identify spin capabilities." },
    { title: "Expedite system", body: "If a game reaches 10 minutes without ending, the expedite rule activates: server must win the point within 13 strokes or forfeit." },
    { title: "Time-outs", body: "Each side gets one 1-minute time-out per match." },
    { title: "Legal serve — visible ball", body: "Ball must be tossed clearly upward with no hidden spin; the receiver must be able to see the ball's contact with the racket." },
    { title: "Illegal serve", body: "Umpire warns first, then awards points to the receiver on subsequent violations." },
  ],
  scoring: {
    summary: "First to 11 points per game (2-point margin), best of 5 or 7 games.",
    breakdown: [
      { action: "Point", points: "1", note: "Rally ends and one player wins it." },
      { action: "Game", points: "First to 11 (with 2-point margin)." },
      { action: "Match", points: "Best of 5 (women, doubles, team) or best of 7 (men's Olympics, world singles)." },
    ],
    winCondition: "Win required number of games — 3 in best-of-5, 4 in best-of-7.",
  },

  officiating: {
    officials: ["Umpire", "Assistant umpire", "Match referee (tournaments)"],
    summary: "Two umpires (main + assistant) sit at either end of the net line. Main umpire calls the score and calls faults; assistant confirms edge balls and calls faults from their side.",
  },
  governingBodies: [
    { name: "International Table Tennis Federation", acronym: "ITTF", founded: 1926, headquarters: "Lausanne, Switzerland", website: "https://www.ittf.com" },
    { name: "USA Table Tennis", acronym: "USATT", founded: 1933, headquarters: "Colorado Springs, USA" },
    { name: "Chinese Table Tennis Association", acronym: "CTTA", founded: 1955, headquarters: "Beijing, China" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 1988, region: "worldwide" },
    { name: "World Table Tennis Championships", frequency: "biennial", founded: 1926, region: "worldwide" },
    { name: "ITTF World Cup", frequency: "annual", founded: 1980, region: "worldwide" },
    { name: "WTT (World Table Tennis) Series", frequency: "annual", founded: 2021, region: "worldwide", note: "New commercial tour format." },
    { name: "China Super League", frequency: "annual", region: "China", note: "Highest-level pro league." },
  ],
  countriesPlayed: ["CN", "JP", "KR", "DE", "SE", "TW", "SG", "IN", "FR", "US", "HR", "IR"],
  famousAthletes: [
    "Ma Long (CHN, current era GOAT)",
    "Deng Yaping (CHN, women's legend)",
    "Wang Hao (CHN)",
    "Zhang Jike (CHN)",
    "Waldner Jan-Ove (SWE, only Grand Slam outside China)",
    "Ding Ning (CHN)",
    "Timo Boll (GER)",
    "Fan Zhendong (CHN)",
    "Sun Yingsha (CHN)",
  ],
  records: [
    { title: "Most Olympic table tennis gold medals", holder: "Ma Long (CHN)", value: "5 (2012, 2016, 2020, 2020, 2024)", year: 2024 },
    { title: "Most World Championship singles titles", holder: "Zhuang Zedong (CHN, 1961-65)", value: "3 consecutive", year: 1965 },
    { title: "Chinese Olympic domination", holder: "China", value: "32/37 gold medals since 1988", year: 2024 },
  ],

  variants: ["hardbat-table-tennis", "sandpaper-table-tennis", "round-the-table-ping-pong", "para-table-tennis"],
  relatedSports: ["tennis", "badminton", "pickleball", "padel"],

  skills: ["hand-eye coordination", "quick reflexes", "spin recognition", "footwork (small step recovery)", "wrist snap", "topspin loop"],
  strategies: [
    { title: "Third-ball attack", body: "Serve short, force a weak return, then attack aggressively — the modern pro basic." },
    { title: "Loop-drive dominance", body: "Heavy topspin looping shots from the backhand and forehand — the dominant style since 2000." },
    { title: "Defensive chopping", body: "Retrieve from far behind the table with heavy backspin chops — a rare but powerful specialist style (Chen Weixing, Joo Se-hyuk)." },
    { title: "Serve variation", body: "Mix short, long, side-spin, no-spin serves to keep opponent guessing about the return." },
    { title: "Placement over power", body: "Wide angles and body-jamming serves are often more effective than raw speed." },
  ],

  terminology: [
    { term: "Loop", meaning: "Aggressive topspin shot with a lifting motion — the modern power shot." },
    { term: "Chop", meaning: "Heavy backspin defensive shot from behind the table." },
    { term: "Push", meaning: "Short controlled backspin return — usually near the table." },
    { term: "Smash", meaning: "Flat, hard shot with minimal spin — the finishing shot." },
    { term: "Flick", meaning: "Aggressive short return over the table, usually against a short serve." },
    { term: "Third ball", meaning: "The server's third shot — the setup ball for the point." },
    { term: "Setup / opening", meaning: "The shot that opens the point for a winner." },
    { term: "Pips", meaning: "The bumps on rubber sheets — smooth-inverted for spin, short-pips for control, long-pips for chopping." },
    { term: "Blade / rubber", meaning: "The wooden paddle body / the rubber sheets glued to each side." },
    { term: "Spin", meaning: "Topspin, backspin, sidespin — critical to modern play." },
    { term: "No-spin / dead ball", meaning: "A ball with essentially no spin — deceptive because it behaves like heavy topspin/backspin." },
    { term: "Let", meaning: "Serve grazes the net and lands legally — replay." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Racket grip", body: "Shakehand (Western) or penhold (Asian). Try both; most beginners start with shakehand." },
      { title: "Basic forehand and backhand drives", body: "Contact the ball at the peak of the bounce; drive through with forearm rotation." },
      { title: "Basic serve", body: "Learn topspin, backspin, and side-spin serves; toss the ball at least 16 cm from open palm." },
      { title: "Ready stance and small footwork", body: "Balanced stance, small step recovery — footwork is the foundation of table tennis skill." },
    ] },
    { level: "intermediate", steps: [
      { title: "Topspin loop technique", body: "Low-to-high swing, brush contact for maximum spin; forehand loop is the modern signature." },
      { title: "Spin recognition", body: "Read the opponent's racket angle and contact point to identify spin type — critical for returns." },
      { title: "Third-ball tactics", body: "Serve short + attack the return; learn a repertoire of 3-4 serve types with clear follow-ups." },
      { title: "Multi-ball training", body: "Coach or partner fires balls in patterns; hundreds of repetitions per practice session." },
    ] },
    { level: "advanced", steps: [
      { title: "Advanced spin variations", body: "Sidespin loops, no-spin surprises, opening chops — the 4-5 dimensions of modern spin." },
      { title: "Rubber selection", body: "Match your rubbers to your style — different sponge hardnesses, pips-in/pips-out combinations." },
      { title: "Match preparation", body: "Study opponent's serves and returns; scout their weaknesses (backhand, deep balls, no-spin serves)." },
      { title: "Physical training", body: "Explosive footwork, core stability, forearm/wrist strength — elite players train like sprinters." },
    ] },
  ],
  faq: [
    { question: "Table tennis or ping pong — is there a difference?", answer: "'Ping Pong' was originally a Parker Brothers trademark from 1901. Today it's a colloquial name; competitive/tournament play is called 'Table Tennis'. Some tours (World Championship of Ping Pong) even use sandpaper paddles as a nostalgic variant." },
    { question: "Why do rackets have one red and one black side?", answer: "So the opponent can distinguish which rubber (usually different spin behaviour) is being used. Made mandatory by ITTF in 1984 to eliminate ambiguity created by 'combi' bats." },
    { question: "Why did the game switch from 21-point to 11-point games?", answer: "To make matches faster and TV-friendly. Changed in 2001. Also shortened serves from 5 to 2 per player, added more urgency to individual points." },
    { question: "Why does China dominate table tennis?", answer: "Deliberate national development since the 1950s (Mao's era treated it as a symbol of national pride). Massive youth training pipeline, thousands of professional coaches, elite academies from age 5-6, and the highest domestic league (China Super League) draws top talent from around the world." },
    { question: "How fast does the ball travel?", answer: "Top male pros hit forehand smashes at 105-115 km/h (65-72 mph). Elite loops travel at 90 km/h with 100+ revolutions per second of spin." },
  ],

  wikipediaTitle: "Table tennis",
  sources: [
    { label: "Wikipedia — Table tennis", url: "https://en.wikipedia.org/wiki/Table_tennis", publisher: "Wikipedia" },
    { label: "ITTF — Laws of Table Tennis", url: "https://www.ittf.com/handbook", publisher: "International Table Tennis Federation" },
    { label: "USA Table Tennis — Basics", url: "https://www.teamusa.com/usa-table-tennis", publisher: "USATT" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

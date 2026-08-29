import type { Sport } from "@/lib/types";

export const croquet: Sport = {
  id: "croquet",
  slug: "croquet",
  name: "Croquet",
  officialName: "Croquet (World Croquet Federation)",
  aliases: ["Association Croquet", "Golf Croquet", "American Six-Wicket", "Backyard Croquet"],
  shortDescription:
    "Genteel lawn sport where players use mallets to strike wooden or plastic balls through 6 hoops in a specific sequence — codified British/French origins with modern World Championships across four codes (Association, Golf, American, Ricochet).",
  longDescription:
    "Croquet is a lawn game where players use mallets to hit balls through a sequence of 6 iron hoops (wickets) set in the ground. Its origins are debated (French pall-mall 17th century; English 1830s revival; Ireland 1850s codification), but the modern sport was popularized in Victorian England from the 1850s. It became an Olympic sport at Paris 1900 (never repeated) and continues today under four major codes: Association Croquet (the international elite code — deeply strategic, similar to snooker in tactical depth), Golf Croquet (faster, more casual — each ball plays one hoop then all balls advance to next), American Six-Wicket (US variant), and Ricochet (Australian variant). The World Croquet Federation (WCF) governs Association + Golf Croquet globally with World Championships biennial. Elite players: Robert Fulford (GB, multiple World Championships), Reg Bamford (South Africa, multiple World Championships), David Openshaw (GB, sport's most-decorated). Croquet suffers a public perception problem — many casual players know only 'backyard' Croquet without understanding the tactical depth of Association Croquet at elite level.",

  category: "precision-sports",
  subCategory: "lawn game — mallet + ball + hoops",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "summer",
  era: "19th-century",
  popularity: "regional",

  countryOfOrigin: "IE",
  regionOfOrigin: "Ireland (1850s codification); Victorian England popularization; global spread via British Empire",
  estimatedOrigin: "French pall-mall 17th century origins; Irish codification 1850s; English Victorian craze 1860s-70s; WCF founded 1986",

  players: { min: 2, max: 4, note: "Singles (1v1) or doubles (2v2); teams for national competitions." },
  field: {
    surfaceName: "Manicured lawn — bowling-green quality",
    dimensions: "35 yards × 28 yards (32 m × 25.5 m); 6 hoops + center peg arranged in specific pattern",
    description: "Requires bowling-green-quality grass surface (0.25-inch cut, level). Not all lawns qualify — proper Croquet demands golf-green-level maintenance. Six hoops arranged in specific asymmetric pattern; center peg at midpoint.",
  },
  equipment: [
    { name: "Croquet mallet", description: "Weighted mallet with rectangular or round head; typically 32-38 inches long, 2-3 lbs; various head materials (aluminum, wood, composite)." },
    { name: "Croquet balls (4-6 balls)", description: "Standard: 4 balls (blue, red, black, yellow); 6-ball version adds green + orange. Weighted composite balls; standardized diameter (3⅝ inches)." },
    { name: "Iron hoops (wickets)", description: "6 hoops with 3¾-inch inside width (Association Croquet standard); tight fit forces precise ball placement." },
    { name: "Center peg", description: "Marks center of court; final target ball must hit peg to complete play." },
    { name: "Ball marker + score card", description: "Track ball positions + hoops cleared; essential for match management." },
  ],
  duration: {
    approximateMinutes: 90,
    structure: "Association Croquet: 3-4 hour matches typical (deep tactical). Golf Croquet: 30-60 min matches. American: 60-90 min. Timed events cap length; some events time-limited.",
  },
  objective:
    "Complete the sequence: strike your ball(s) through all 6 hoops in specified order (1-6), then through them again in reverse order (6-1), then hit the center peg to 'peg out'. Winner = first to peg out all their balls.",
  matchStructure:
    "Coin toss determines order. Players take turns striking their balls. If ball passes through a hoop → continues shot + gains additional stroke ('bonus stroke'). If ball hits opponent's ball → gets 'roquet' + 2 bonus shots. Continue until miss or peg out.",

  basicRules: [
    { title: "Ball assignment", body: "In singles: each player has 2 balls (blue + black, or red + yellow). Doubles: each player has 1 ball. Colors are fixed per turn." },
    { title: "Hit through hoops in sequence", body: "Balls must pass through 6 hoops in specified numbered order (1, 2, 3, 4, 5, 6), then reverse (6, 5, 4, 3, 2, 1), then hit center peg." },
    { title: "Bonus strokes", body: "Passing through a hoop = 1 bonus stroke. Hitting opponent ball ('roquet') = 2 bonus strokes." },
    { title: "Croquet stroke", body: "After roquet, place your ball touching struck ball; hit your ball, forcing both balls forward. Special tactical shot." },
    { title: "Continuation stroke", body: "Second bonus shot after roquet + croquet; separate placement." },
    { title: "Peg out to finish", body: "After completing all 12 hoops (6 forward + 6 reverse), ball hits center peg to complete. First to peg out all balls wins." },
    { title: "Break structure", body: "Elite Association Croquet: skilled player runs a 'break' — completing multiple hoops in one turn using croquet strokes + bonus shots. Similar to snooker breaks." },
  ],
  advancedRules: [
    { title: "The Break System (Association Croquet)", body: "Elite Association players complete 'triple peel' or 'sextuple peel' — running all 12 hoops + pegging out in a single visit to the lawn. Requires precise ball positioning for multiple bonus strokes." },
    { title: "Peel", body: "Advancing another ball through its next hoop by striking your ball into it. Advanced tactical maneuver." },
    { title: "Golf Croquet differences", body: "Each hoop played once (not twice); all balls play toward same hoop; no roquet/croquet strokes. Simpler + faster; growing globally." },
    { title: "American Six-Wicket differences", body: "US variant: some different rules on bonus strokes + carry-over; historically dominant in USA." },
    { title: "Handicap system", body: "Bisques + bonus turns for weaker players; allows across-skill-level competitive matches." },
    { title: "Time-limited matches", body: "Some events set 30-60 min limits; ties broken by hoops completed." },
    { title: "Tactical positioning", body: "Elite matches involve deep positional play — placing balls to enable future breaks + block opponent lines. Similar chess-like planning." },
  ],
  scoring: {
    summary: "Complete all 12 hoops (6 forward + 6 reverse) + peg out. First player/team to complete all balls wins.",
    winCondition: "First to peg out all balls (singles: 2 balls; doubles: 2 balls). In timed events: most hoops completed if time expires without pegout.",
    breakdown: [
      { action: "Ball through hoop (1st direction)", points: "1 hoop cleared (12 total needed per ball)" },
      { action: "Ball through hoop (reverse direction)", points: "1 hoop cleared" },
      { action: "Ball hits center peg", points: "Ball 'pegged out' — completed" },
      { action: "All balls pegged out", points: "Match win" },
      { action: "Timed event tiebreak", points: "Most hoops completed wins" },
    ],
  },
  penalties: [
    { title: "Wrong-order hoop", body: "Ball position adjusted; turn may end depending on situation." },
    { title: "Interference (touching balls)", body: "Warning; repeated = turn forfeit." },
    { title: "Faulty stroke (double-hit)", body: "Considered a fault; opponent gets bonus." },
    { title: "Illegal roquet", body: "Ball position reset; turn ends." },
    { title: "Unsportsmanlike conduct", body: "Warning to DQ." },
  ],

  positions: [
    { name: "Striker (turn-taker)", role: "Current player making shot.", count: 1 },
    { name: "Opponent(s)", role: "Wait turn; may verbally coach doubles partners." },
    { name: "Doubles partner (doubles)", role: "Coordinates strategy; provides advice.", count: 1 },
    { name: "Referee (competitive)", role: "Adjudicates fouls + close calls." },
  ],
  officiating: {
    officials: ["1 Referee (competitive matches)", "Line judges (major tournaments)"],
    summary: "Casual matches: no officials (honor system). Competitive Association matches: WCF-certified referee; major events add line judges.",
  },

  governingBodies: [
    { name: "World Croquet Federation (WCF)", founded: 1986, headquarters: "UK (rotating leadership)", website: "https://worldcroquet.org" },
    { name: "United States Croquet Association (USCA)", founded: 1976, headquarters: "USA", website: "https://croquetamerica.com" },
    { name: "Croquet Association (Britain — Cheltenham HQ)", founded: 1897, headquarters: "Cheltenham, UK", website: "https://croquet.org.uk" },
    { name: "Australian Croquet Association", founded: 1949, headquarters: "Australia" },
  ],
  majorCompetitions: [
    { name: "WCF World Association Croquet Championships", frequency: "biennial", founded: 1989, region: "worldwide" },
    { name: "WCF World Golf Croquet Championships", frequency: "biennial", founded: 1996, region: "worldwide" },
    { name: "US Open Croquet Championships", frequency: "annual", founded: 1978, region: "USA" },
    { name: "British Open Croquet Championships", frequency: "annual", founded: 1867, region: "UK (Cheltenham typical)" },
    { name: "MacRobertson Shield (Association Team)", frequency: "quadrennial", founded: 1925, region: "GB, NZ, AU, US teams" },
  ],
  countriesPlayed: ["GB", "US", "AU", "NZ", "ZA", "EG", "IE", "CA", "IT", "ES", "FR", "SE", "JP", "HK", "IN"],
  famousAthletes: [
    "Robert Fulford (GB — multiple World Association Championship wins; considered greatest ever)",
    "Reg Bamford (South Africa — multiple World Championship wins + records)",
    "David Openshaw (GB — sport's most-decorated; 4× World Association Champion)",
    "Stephen Mulliner (GB — multiple World Championship medals)",
    "Chris Clarke (GB — sextuple peel + triple peel specialist)",
    "Jamie Burch (US — American croquet dominant)",
    "Rachel Gee (GB — women's World Championship winner)",
    "Yasser Mahmoud (Egypt — Golf Croquet World Championship winner; sport's global expansion)",
    "Mohamed Nasr (Egypt — multiple Golf Croquet World Championships)",
    "John Solomon (GB — historic dominance of 1930s-40s)",
  ],
  records: [
    { title: "Sextuple peel record", holder: "Multiple elite players", value: "Completing all 12 hoops + peg out in one turn — sport's ultimate technical achievement", year: 2020 },
    { title: "Egyptian Golf Croquet rise", holder: "Egypt national team", value: "Since 2000s Egyptian players dominant in Golf Croquet World Championships", year: 2020 },
    { title: "MacRobertson Shield oldest team competition", holder: "MacRobertson Shield", value: "Association Croquet team tournament — GB, NZ, AU, US teams since 1925", year: 1925 },
    { title: "Only Olympic Croquet event", holder: "Paris 1900 Olympics", value: "Croquet contested once at Paris 1900; only 7 athletes; never repeated as Olympic sport", year: 1900 },
    { title: "Victorian craze peak", holder: "England", value: "Croquet was England's most popular outdoor sport 1860s-70s; over 250 croquet clubs by 1875", year: 1870 },
  ],

  variants: ["association-croquet-elite", "golf-croquet-simpler", "american-six-wicket", "ricochet-australian", "backyard-croquet-casual"],
  relatedSports: ["golf", "bocce", "shuffleboard", "billiards", "pool"],

  skills: [
    "mallet control (accuracy + touch)",
    "spatial calculation (angles + break planning)",
    "tactical foresight (multiple-shot planning)",
    "psychological pressure management",
    "physical stamina (3+ hour matches)",
    "handicap play + shot selection",
  ],
  strategies: [
    { title: "Break-based play (Association)", body: "Elite play built around 'breaks' — running multiple hoops in one turn. Position balls to set up future breaks 3-4 hoops ahead." },
    { title: "Roquet to gain bonus strokes", body: "Hitting opponent's ball provides 2 bonus strokes — the tactical currency of Association Croquet. Plan roquets deliberately." },
    { title: "Croquet stroke placement", body: "The croquet stroke (after roquet) requires precise angle + weight for exact positioning. Elite players nail placements within 6 inches." },
    { title: "Defensive positioning", body: "Sometimes safer to abandon a run + position balls to block opponent's future breaks. Deep strategy required." },
    { title: "Golf Croquet quick play", body: "Golf Croquet is fast + tactical — no breaks. Focus on positioning your balls near next hoop while blocking opponent." },
    { title: "Handicap adjustments", body: "In handicap play: use bisques (bonus turns) at critical moments; don't waste them early." },
    { title: "Mental game", body: "Elite Croquet matches are 3-6 hour psychological battles; managing focus + pressure separates good from great." },
  ],

  terminology: [
    { term: "Hoop (Wicket)", meaning: "Iron U-shaped structure that balls must pass through." },
    { term: "Roquet", meaning: "Hitting opponent's ball with your ball; grants 2 bonus strokes." },
    { term: "Croquet stroke", meaning: "Placing your ball against roquet target + striking; propels both balls." },
    { term: "Continuation stroke", meaning: "Second bonus shot after croquet stroke." },
    { term: "Peg out", meaning: "Ball's final action: strike center peg to complete." },
    { term: "Break", meaning: "Sequence of hoops cleared in one turn using bonus strokes." },
    { term: "Triple peel", meaning: "Elite play: running 3 hoops for another ball while running your own break." },
    { term: "Sextuple peel", meaning: "Elite play: running 6 hoops for another ball while running your own break." },
    { term: "Bisque", meaning: "Handicap bonus turn given to weaker player." },
    { term: "WCF", meaning: "World Croquet Federation — world governing body." },
    { term: "MacRobertson Shield", meaning: "Oldest Association Croquet team competition (since 1925)." },
    { term: "Golf Croquet", meaning: "Simpler code — each ball plays each hoop once; no breaks." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Try backyard Croquet first", body: "Standard backyard set (6 wickets, 4 balls, 4 mallets) teaches basic rules + strokes. 30-min introduction." },
      { title: "Learn Golf Croquet at local club", body: "Simpler + faster than Association. Perfect intro to competitive Croquet. Every major club offers Golf Croquet." },
      { title: "Take lessons at USCA / Croquet Association club", body: "Formal instruction essential for progression; recognize + correct bad habits early." },
    ] },
    { level: "intermediate", steps: [
      { title: "Master roquet + croquet stroke", body: "The tactical core of Association Croquet; requires many hours of practice on regulation lawn." },
      { title: "Enter regional tournaments", body: "USCA + Croquet Association + WCF-affiliated national federations run regional events; build ranking + technique." },
      { title: "Study break planning", body: "Elite Croquet is chess with mallets. Study coaching books + video analysis; internalize break patterns." },
    ] },
    { level: "advanced", steps: [
      { title: "Achieve Sextuple Peel", body: "Elite technical achievement; running all 12 hoops + pegging out in one turn. Fewer than 100 players worldwide have accomplished." },
      { title: "Compete at WCF World Championships", body: "Association + Golf Croquet World Championships biennial; qualifying via national ranking + continental championships." },
      { title: "Aim for MacRobertson Shield selection", body: "British/Australian/NZ/US Association team tournament every 4 years; national team selection = career pinnacle." },
    ] },
  ],

  faq: [
    { question: "Is Croquet in the Olympics?", answer: "No — it was contested exactly ONCE, at the Paris 1900 Olympics (7 athletes, all French). Never contested again. Croquet's popularity was too regional (British Empire-focused) + tactical depth too niche for post-1900 IOC recognition. World Croquet Federation has expressed interest but Olympic inclusion is not currently pursued." },
    { question: "What's the difference between Association Croquet and Golf Croquet?", answer: "Association: complex + strategic. Each player has 2 balls; balls play sequence of 12 hoops (6 forward + 6 reverse) then peg out; features roquet + croquet strokes + breaks. 3-4 hour matches. Golf: simpler + faster. Each ball plays each hoop ONCE (12 hoops per side); no roquet/croquet strokes; all balls play toward same hoop. 30-60 minute matches. Association is the elite tactical code; Golf is the growing casual + competitive code." },
    { question: "Who is the greatest Croquet player?", answer: "Multiple candidates: (1) Robert Fulford (GB) — multiple World Association Championship wins; considered peak player 1990s-2000s. (2) Reg Bamford (South Africa) — multiple World Championship wins + records including triple peel achievements. (3) David Openshaw (GB) — 4× World Association Champion; sport's most-decorated. (4) Chris Clarke (GB) — sextuple peel specialist; technical mastery of highest order. Different eras + criteria." },
    { question: "Why is Croquet perceived as a 'genteel' sport?", answer: "Victorian British popularization (1860s-70s) established it as an upper-class garden pastime — the sport of country houses + garden parties. Public perception has never fully recovered from this image. In reality, elite Association Croquet is intensely tactical + physically demanding (3-hour matches on hot summer lawns). The perception problem hinders the sport's growth beyond Britain + former British Empire countries." },
    { question: "Where can I play competitive Croquet?", answer: "UK (Croquet Association — Cheltenham HQ + 200+ clubs), USA (USCA — 400+ clubs), Australia (Australian Croquet Association), New Zealand (dominant nation), South Africa. Egypt has emerged as Golf Croquet powerhouse in 2000s. Most WCF nations have local + national tournaments. Egyptian Golf Croquet World Championship dominance is transforming the sport's global geography." },
    { question: "How long does a Croquet match take?", answer: "Association Croquet: 3-4 hours typical; elite matches may run 4-6 hours. Golf Croquet: 30-60 minutes typical. American Six-Wicket: 60-90 min. Backyard casual: 30-60 min depending on players. Time-limited competitive events cap length; ties broken by hoops completed if peg-out not achieved. Association Croquet is genuinely a marathon of concentration + strategy." },
  ],

  wikipediaTitle: "Croquet",
  sources: [
    { label: "World Croquet Federation (WCF)", url: "https://worldcroquet.org", publisher: "WCF" },
    { label: "United States Croquet Association", url: "https://croquetamerica.com", publisher: "USCA" },
    { label: "The Croquet Association (UK)", url: "https://croquet.org.uk", publisher: "Croquet Association" },
    { label: "Wikipedia — Croquet", url: "https://en.wikipedia.org/wiki/Croquet", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

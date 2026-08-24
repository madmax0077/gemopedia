import type { Sport } from "@/lib/types";

export const mixedMartialArts: Sport = {
  id: "mixed-martial-arts",
  slug: "mixed-martial-arts",
  name: "Mixed Martial Arts",
  officialName: "Mixed Martial Arts",
  aliases: ["MMA", "Cage fighting", "No-holds-barred (historical)"],
  shortDescription:
    "Full-contact combat sport combining striking (boxing, kickboxing, Muay Thai) with grappling (wrestling, jiu-jitsu, judo) — most bouts fought in an octagonal cage over 3-5 rounds of 5 minutes.",
  longDescription:
    "Mixed martial arts (MMA) is a full-contact combat sport that permits a wide range of striking and grappling techniques from many martial arts. Fighters may punch, kick, elbow, knee, wrestle, throw and grapple; the goal is to win by knockout, submission, or judges' decision. The modern format was popularised by the Ultimate Fighting Championship (UFC), founded in 1993 as an open-style tournament with minimal rules. The Unified Rules of MMA (2000) standardised the sport worldwide with weight classes, rounds, judging criteria and a list of illegal techniques. Bouts are typically fought inside a chain-link octagon or ring with 3 five-minute rounds (5 rounds for championship or main events). The UFC is the dominant global promotion, with rivals like ONE Championship (Asia), Bellator (US), PFL (US) and Rizin (Japan).",

  category: "combat-sports",
  subCategory: "mixed combat",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "United States (UFC in Colorado 1993); Vale Tudo roots in Brazil",
  estimatedOrigin: "UFC 1: November 12, 1993 (Denver, Colorado); Unified Rules of MMA formalised 2000",

  players: { min: 2, max: 2, note: "1v1 by weight class; corners have a head coach and up to 2 assistants." },
  field: {
    surfaceName: "octagon (or ring)",
    dimensions: "UFC Octagon: 30 ft (9.1 m) across, 6 ft (1.83 m) tall fence with padded top rail. Alternative regulation cage or ring formats used by some promotions.",
    description: "Octagonal chain-link cage with a padded canvas floor, corner posts and vinyl-covered padded top rail; some promotions (One, Bellator) use rings.",
  },
  equipment: [
    { name: "MMA gloves", description: "4-6 oz open-finger gloves with padded knuckles and wrist support; allow grappling." },
    { name: "Mouthguard", description: "Custom-fitted to protect teeth and reduce concussion risk; mandatory." },
    { name: "Fight shorts", description: "Board-shorts or vale-tudo shorts; no pockets or metal fixtures." },
    { name: "Sports bra / rash guard (women)", description: "Sports bra mandatory for women; rash guard optional." },
    { name: "Groin protector / cup", description: "Mandatory for male fighters; optional for female." },
    { name: "Hand wraps", description: "Cotton wraps under the gloves; inspected by commission staff before the fight." },
    { name: "Foot padding", description: "Feet must be bare; no shoes or boots allowed." },
  ],
  duration: {
    approximateMinutes: 25,
    structure: "Non-title: 3 × 5-minute rounds. Title/main event: 5 × 5-minute rounds. One-minute rest between rounds.",
    note: "Fight ends early on knockout, submission, TKO, doctor stoppage, DQ or corner throw-in.",
  },
  objective: "Win by knockout, technical knockout, submission, or judges' decision at the end of the scheduled rounds.",
  matchStructure:
    "Fighters enter the cage and are called to the centre for pre-fight instructions and glove touch. Referee starts the fight. Rounds run five minutes each; a knockdown does not stop the fight (referee monitors for ability to intelligently defend). Between rounds, fighters return to their corner for 60 seconds. If the fight goes the distance, 3 judges score each round and total scores determine the winner.",

  basicRules: [
    { title: "Legal strikes standing", body: "Punches, elbows, knees, and kicks to the head and body of a standing opponent. No strikes to the groin, back of the head, spine, or throat." },
    { title: "Grappling and takedowns", body: "Fighters may wrestle for takedowns, control positions (mount, back, side control), and submit via joint locks or chokes." },
    { title: "Ground and pound", body: "Once opponent is grounded, strikes to the head and body remain legal — but knees and kicks to the head of a grounded opponent are illegal in the Unified Rules." },
    { title: "Submissions", body: "Chokes and joint locks (armbar, triangle, rear naked choke, kimura) end the fight when the losing fighter taps or the referee stops for unconsciousness." },
    { title: "Rounds and scoring", body: "10-point must system per round: winner gets 10, loser 9 or fewer. Judges score damage, striking, grappling and aggression per round." },
    { title: "Knockdowns", body: "A fighter knocked down may continue if they can 'intelligently defend' — referee may waive on standing 8." },
    { title: "Cage / ring restart", body: "Referee stands fighters up if there is a stalemate on the ground with no significant action." },
  ],
  advancedRules: [
    { title: "Illegal techniques (Unified Rules)", body: "Head-butts, eye-gouging, biting, hair-pulling, groin strikes, downward elbows (12-to-6), knees/kicks to a grounded opponent's head, and stomps to a grounded opponent are all illegal." },
    { title: "Point deductions", body: "Referee may deduct 1-2 points for repeated fouls; three fouls typically = DQ." },
    { title: "Fence grabbing", body: "Grabbing the cage fence for advantage draws a warning first, then point deduction." },
    { title: "Timing of finishes", body: "The referee — not the doctor or corner — stops the fight; corners may throw in a towel to concede a TKO." },
    { title: "Instant replay", body: "Some athletic commissions review knockouts caused by potentially illegal strikes; can change the result to no contest or DQ." },
  ],
  scoring: {
    summary: "10-point must system judged by three officials each round.",
    breakdown: [
      { action: "Winning a round", points: "10 (winner) / 9 or fewer (loser)", note: "10-8 for dominant round; 10-7 for extreme domination." },
      { action: "Knockdown against loser", points: "Typically causes 10-8 round" },
      { action: "Point deduction (foul)", points: "-1 or -2", note: "Referee-imposed." },
      { action: "Knockout", points: "Instant win", note: "Opponent unable to intelligently defend." },
      { action: "Submission", points: "Instant win", note: "Opponent taps or is rendered unconscious." },
    ],
    winCondition: "KO, TKO (referee/doctor stoppage), submission (tap or unconscious), disqualification, forfeit, or judges' decision.",
  },

  officiating: {
    officials: ["Referee (in cage)", "Three judges (cageside)", "Timekeeper", "Ringside physician", "Athletic commission representatives"],
    summary: "The referee ensures fighter safety and enforces rules. Three judges score each round independently. Rulesets are set by state athletic commissions (US) or national federations elsewhere.",
  },
  governingBodies: [
    { name: "Ultimate Fighting Championship", acronym: "UFC", founded: 1993, headquarters: "Las Vegas, USA", website: "https://www.ufc.com" },
    { name: "Nevada State Athletic Commission", acronym: "NSAC", founded: 1941, headquarters: "Las Vegas, USA" },
    { name: "International Mixed Martial Arts Federation", acronym: "IMMAF", founded: 2012, headquarters: "Stockholm, Sweden", website: "https://immaf.org" },
    { name: "Association of Boxing Commissions and Combative Sports", acronym: "ABC", founded: 1990, headquarters: "Nashville, USA" },
  ],
  majorCompetitions: [
    { name: "UFC Championships (Fights)", frequency: "monthly PPVs", founded: 1993, region: "worldwide (dominant promotion)" },
    { name: "ONE Championship", frequency: "monthly", founded: 2011, region: "Asia" },
    { name: "Bellator MMA", frequency: "monthly", founded: 2008, region: "United States" },
    { name: "Professional Fighters League (PFL)", frequency: "annual tournament", founded: 2017, region: "worldwide" },
    { name: "IMMAF Amateur MMA World Championships", frequency: "annual", founded: 2014, region: "worldwide (amateur)" },
  ],
  countriesPlayed: ["US", "BR", "RU", "IE", "GB", "JP", "TH", "AU", "PL", "NL", "DK", "CA", "MX", "KZ", "IL"],
  famousAthletes: [
    "Jon Jones",
    "Georges St-Pierre",
    "Anderson Silva",
    "Khabib Nurmagomedov",
    "Amanda Nunes",
    "Conor McGregor",
    "Israel Adesanya",
    "Ronda Rousey",
    "Demetrious Johnson",
    "Alex Pereira",
    "Fedor Emelianenko",
    "Valentina Shevchenko",
  ],
  records: [
    { title: "Longest UFC unbeaten streak", holder: "Khabib Nurmagomedov", value: "29-0 (13-0 in UFC)", year: 2020 },
    { title: "Most UFC title defences (women)", holder: "Amanda Nunes / Valentina Shevchenko", value: "5", year: 2023 },
    { title: "Most UFC championship reigns", holder: "Amanda Nunes", value: "2 divisions simultaneously (bantamweight + featherweight)", year: 2022 },
    { title: "Fastest UFC title-fight knockout", holder: "Jorge Masvidal", value: "5 seconds (flying knee vs Ben Askren)", year: 2019 },
  ],

  variants: ["vale-tudo", "grappling", "kickboxing", "muay-thai", "amateur-mma"],
  relatedSports: ["boxing", "wrestling", "judo", "brazilian-jiu-jitsu", "muay-thai", "kickboxing"],

  skills: [
    "striking (boxing, Muay Thai, kickboxing)",
    "wrestling for takedowns and takedown defence",
    "Brazilian jiu-jitsu for ground control and submissions",
    "cardio and pace management (5-minute rounds)",
    "fight IQ (recognising sequences and openings)",
    "clinch work",
    "explosive scrambling",
  ],
  strategies: [
    { title: "Wrestle-boxer", body: "Punch to set up takedowns; grind on top with ground-and-pound (Khabib, GSP)." },
    { title: "Striker with takedown defence", body: "Stay standing; pick apart the opponent from range (Israel Adesanya, Alex Pereira)." },
    { title: "BJJ specialist", body: "Actively pull guard or scramble to submission attempts (Demian Maia, Charles Oliveira)." },
    { title: "Muay Thai clinch", body: "Use knees and elbows in the clinch; separate to reset (Anderson Silva, Alex Pereira)." },
  ],

  terminology: [
    { term: "KO / TKO", meaning: "Knockout / technical knockout — the two ways strikes end a fight." },
    { term: "Submission", meaning: "Opponent taps or is rendered unconscious via choke or joint lock." },
    { term: "Tap", meaning: "Physical or verbal signal that the fighter concedes the submission." },
    { term: "Ground-and-pound", meaning: "Striking a grounded opponent from top position." },
    { term: "Takedown defence (TDD)", meaning: "Sprawling, framing and technique to prevent being taken down." },
    { term: "Sprawl", meaning: "Kick-back defensive move against a leg attack." },
    { term: "Guard", meaning: "Bottom position where the grounded fighter uses their legs to control the opponent — full guard, half guard, butterfly guard." },
    { term: "Mount", meaning: "Top control position sitting across the opponent's chest — very dominant." },
    { term: "Rear-naked choke (RNC)", meaning: "Choke applied from behind, one of MMA's most common submissions." },
    { term: "Armbar", meaning: "Joint-lock hyperextending the elbow." },
    { term: "12-to-6 elbow", meaning: "Illegal elbow strike traveling straight down from top to bottom." },
    { term: "Fence-grab", meaning: "Illegal grabbing of the cage fence to prevent a takedown; typically a warning then point deduction." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Choose a base martial art", body: "Start with boxing, Muay Thai, wrestling, or BJJ — most MMA fighters have one strong base." },
      { title: "Learn to fall and shoot", body: "Wrestling shots and breakfalls for safe transitioning to the ground." },
      { title: "Basic BJJ positions", body: "Guard, mount, side control, back — and how to escape each from the bottom." },
      { title: "Basic combinations", body: "Jab-cross-hook-low-kick — a standard MMA striking combo." },
    ] },
    { level: "intermediate", steps: [
      { title: "Cross-train", body: "Add BJJ if you're a wrestler; add wrestling if you're a striker; the best MMA fighters are complete." },
      { title: "Clinch work", body: "Muay Thai clinch (double collar tie, knees) and Greco clinch (over-under, throws)." },
      { title: "Full sparring", body: "Rounds with all techniques allowed at reduced intensity." },
      { title: "Cage strategy", body: "Use the cage for leverage in takedowns and clinch; escape when pressed against it." },
    ] },
    { level: "advanced", steps: [
      { title: "Fight IQ", body: "Recognise opponent patterns and habitual openings — study film." },
      { title: "Weight management", body: "Cut weight healthily for your class — hydration, sodium, carb loading protocols." },
      { title: "Camp planning", body: "8-12 week camp cycles with strength, technique, sparring and rest phases." },
    ] },
  ],
  faq: [
    { question: "How is MMA different from cage fighting?", answer: "'Cage fighting' is a colloquial name for MMA — same regulated sport, most bouts contested in a chain-link octagon." },
    { question: "Is MMA safer than boxing?", answer: "Concussion risk per bout is comparable, but studies show boxing has higher risk of cumulative brain trauma because fighters take more punches over a longer career." },
    { question: "How many weight classes are there?", answer: "The UFC contests 12 (8 men's, 4 women's), from strawweight (up to 115 lb) to heavyweight (up to 265 lb)." },
    { question: "What are the illegal techniques?", answer: "Eye pokes, groin strikes, biting, hair-pulling, downward (12-to-6) elbows, knees/kicks to a grounded opponent's head, and strikes to the back of the head or spine." },
    { question: "Is MMA at the Olympics?", answer: "No — IMMAF pursues Olympic recognition but MMA is not currently on the Olympic programme." },
  ],

  wikipediaTitle: "Mixed martial arts",
  sources: [
    { label: "Wikipedia — Mixed martial arts", url: "https://en.wikipedia.org/wiki/Mixed_martial_arts", publisher: "Wikipedia" },
    { label: "Unified Rules of Mixed Martial Arts (ABC)", url: "https://www.abcboxing.com/unified-rules-mma", publisher: "Association of Boxing Commissions" },
    { label: "UFC Rules", url: "https://www.ufc.com/unified-rules-mixed-martial-arts", publisher: "UFC" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

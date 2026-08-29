import type { Sport } from "@/lib/types";

export const bareKnuckleBoxing: Sport = {
  id: "bare-knuckle-boxing",
  slug: "bare-knuckle-boxing",
  name: "Bare-Knuckle Boxing",
  officialName: "Bare Knuckle Fighting Championship (BKFC — modern sanctioned)",
  aliases: ["Bare Knuckle Fighting", "BKB", "Prizefighting (historical)", "London Prize Ring (historical)"],
  shortDescription:
    "Boxing without gloves — historical form that gave rise to modern gloved boxing, revived in 2018 as a professional combat sport with the BKFC promotion; matches fought in a small circular 'squared circle' with hand wraps only, no gloves.",
  longDescription:
    "Bare-Knuckle Boxing (BKB) is the historical form of boxing — the sport as it existed from ancient Greek pankration through the 18th–19th century 'prizefighting' era before the introduction of gloves under the 1867 Marquess of Queensberry Rules. Legendary bare-knuckle champions include Jack Broughton (1734–50 English champion who codified the first rules), John L. Sullivan (last bare-knuckle heavyweight champion, 1889), and the Irish-American Sullivan-Kilrain 1889 fight (75 rounds, 2h 16min) — the last major American bare-knuckle championship. The sport was outlawed across most of the world by the early 20th century. In 2018, the Wyoming State Board of Mixed Martial Arts sanctioned the first legal bare-knuckle boxing event since 1889 (BKFC 1, Wyoming); the Bare Knuckle Fighting Championship (BKFC) has grown into a globally-televised promotion with events in the US, UK, Thailand, and Mexico. Notable fighters: Artem Lobov, Paulie Malignaggi, Chris Leben, Jorge Masvidal (crossover attempts). Matches are fought in a 20-ft circular ring with tape-wrapped hands only — no gloves.",

  category: "combat-sports",
  subCategory: "gloveless striking / historical + modern combat sport",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "ancient",
  popularity: "major",

  countryOfOrigin: "GB",
  regionOfOrigin: "Ancient Greece (pankration precursor); modern form 18th-century England; revived USA 2018",
  estimatedOrigin: "Ancient Greece pankration precedent; codified 1743 (Broughton's Rules, England); banned early 20th c.; modern revival BKFC 2018 (Wyoming, USA)",

  players: { min: 2, max: 2, note: "1v1 combat; team affiliations for training + coaching only." },
  field: {
    surfaceName: "Circular fighting ring (BKFC 'Squared Circle')",
    dimensions: "BKFC: 20-ft (6.1 m) diameter circle with 4 painted lines marking corners; historic prize ring: 24-ft square rope enclosure",
    description: "BKFC uses a distinctive circular ring with painted 'toe lines' where fighters must touch at round starts. Historic prize rings were roped squares similar to modern boxing rings but with soil / grass surface.",
  },
  equipment: [
    { name: "Hand wraps (BKFC regulation)", description: "Gauze + tape wrapping thumb + wrist; NOTHING covers the knuckles or finger joints — the defining rule. Wraps end 1 inch behind knuckles." },
    { name: "Mouthguard (mandatory)", description: "BKFC + all modern sanctioned events require boil-and-bite or custom mouthguard." },
    { name: "Groin protector (male fighters)", description: "Standard protective cup." },
    { name: "Athletic shorts / trunks", description: "Standard boxing trunks; no shoes or headgear in modern BKFC." },
    { name: "Corner supplies", description: "Vaseline, enswell (metal ice block for swelling), cotton swabs, sutures — bare-knuckle produces more cuts than gloved boxing." },
  ],
  duration: {
    approximateMinutes: 10,
    structure: "BKFC: 5 rounds × 2 minutes with 1-minute rests. Championship: 7 rounds × 2 minutes. Historic prize fights: unlimited rounds until knockout (often 30–75+ rounds).",
  },
  objective:
    "Knock the opponent out OR score more points via the 10-point-must system (aggression, striking, ring control) across the scheduled rounds. Corner may throw in the towel (TKO); referee may stop the fight; doctor may halt for cuts.",
  matchStructure:
    "Round starts with both fighters touching the toe-lines. On the referee's 'Knuckle up!' fighters engage. Round ends at 2 minutes OR earlier via KO / TKO / DQ. Judges score each round 10–9 (winner 10, loser 9); 10–8 for dominant round. After 5 (or 7 championship) rounds, judges' cards decide. Decisions common; historic fights ended by KO.",

  basicRules: [
    { title: "No gloves — hand wraps only", body: "Regulation wraps: gauze + tape covering wrist + thumb + palm, ending 1 inch BEHIND the knuckles. Knuckles + fingers must be exposed." },
    { title: "Touch toe-lines at round start", body: "BKFC-signature: both fighters must place a foot on a marked line at round start (referee's 'Knuckle up!'). Prevents circling stall." },
    { title: "Standing strikes only", body: "No takedowns, no ground fighting, no submissions, no elbows, no knees. Punches only." },
    { title: "5 rounds × 2 minutes (BKFC standard)", body: "Non-title: 5 × 2. Title fights: 7 × 2 with 1-minute rest between." },
    { title: "10-point-must scoring", body: "Judges score each round: 10 to winner, 9 to loser (or 10–8 for dominant). Three judges; majority decides at end." },
    { title: "KO / TKO ends immediately", body: "Any knockout stops the fight. Referee or doctor may stop (TKO); corner may throw in the towel." },
  ],
  advancedRules: [
    { title: "No excessive clinching", body: "Referee separates clinches quickly; repeated clinching draws warning + point deduction." },
    { title: "Cut protocol", body: "Ringside doctor evaluates cuts each round; deep cuts near eyes typically stop the fight (bare-knuckle produces significantly more lacerations than gloved boxing)." },
    { title: "Legal target zones", body: "Legal: head, torso, arms. Illegal: back of head, spine, kidneys, groin, throat." },
    { title: "Standing 8-count", body: "Referee may give a hurt fighter an 8-count if they're stunned but not down." },
    { title: "10-second knockdown count", body: "Fighter down must beat 10-count OR fight is over (KO)." },
    { title: "3-knockdown rule (some jurisdictions)", body: "Some state athletic commissions require automatic TKO on 3 knockdowns in one round." },
    { title: "BKFC 'Squared Circle'", body: "The distinctive circular ring with 4 painted 'toe-lines' — patented BKFC innovation not used in historic prize rings." },
  ],
  scoring: {
    summary: "10-point-must system per round; 3 judges. KO/TKO/DQ end fight immediately. Draws + no-contests possible.",
    winCondition: "KO or TKO — automatic win. Decision — winner has higher judges' total across rounds.",
    breakdown: [
      { action: "Win round (10-point-must)", points: "10 points; loser gets 9" },
      { action: "Dominant round", points: "10–8 (rare in BKFC due to short 2-min rounds)" },
      { action: "Knockdown", points: "-1 to loser's score for that round (typically 10–8 or 10–7)" },
      { action: "KO", points: "Automatic win" },
      { action: "TKO (ref/doctor stop)", points: "Automatic win" },
      { action: "Foul / DQ", points: "Automatic loss for offender" },
    ],
  },
  penalties: [
    { title: "Illegal strike (elbow, knee, kick)", body: "Warning first offense; point deduction second; DQ third." },
    { title: "Low blow (groin)", body: "5-minute recovery time for hit fighter; repeat = point deduction." },
    { title: "Excessive clinching", body: "Referee warning; point deduction if repeated." },
    { title: "Head-butt", body: "Point deduction; DQ if intentional and causes injury." },
    { title: "Hit after bell / on ground", body: "Point deduction; possible DQ." },
  ],

  positions: [
    { name: "Fighter (2)", role: "The combatants — striking-only competition.", count: 1 },
    { name: "Referee", role: "Enforces rules, breaks clinches, calls knockdowns, stops for injury.", count: 1 },
    { name: "Judges", role: "Score rounds 10-point-must; average of 3 decides outcome.", count: 3 },
    { name: "Corner team (per fighter)", role: "Coach + cutman + trainer between rounds; can throw in towel." },
    { name: "Ringside doctor", role: "Evaluates cuts + concussion signs; can stop fight." },
  ],
  officiating: {
    officials: ["State-athletic-commission-licensed referee", "3 state-licensed judges", "Ringside physician", "Timekeeper"],
    summary: "In the US, sanctioned by state athletic commissions (Wyoming was first to sanction in 2018; now ~30 US states permit). BKFC follows unified rules similar to boxing/MMA officiation.",
  },

  governingBodies: [
    { name: "Bare Knuckle Fighting Championship (BKFC)", founded: 2018, headquarters: "Philadelphia, USA", website: "https://bkfc.com" },
    { name: "World Bareknuckle Boxing Association (WBKBA)", founded: 2019, headquarters: "USA (developing)", website: "https://wbkba.com" },
    { name: "State Athletic Commissions (US regulator)", founded: 1920, headquarters: "USA (per state)" },
  ],
  majorCompetitions: [
    { name: "BKFC events (numbered)", frequency: "monthly", founded: 2018, region: "US + international expansion" },
    { name: "BKFC KnuckleMania (flagship annual card)", frequency: "annual", founded: 2021, region: "USA (main event pay-per-view)" },
    { name: "BKB (UK-based Bare Knuckle Boxing promotion)", frequency: "quarterly", founded: 2013, region: "UK" },
    { name: "Historic championships (pre-1889)", frequency: "sporadic", founded: 1734, region: "England + USA" },
  ],
  countriesPlayed: ["US", "GB", "TH", "MX", "BR", "AU", "CA", "IE"],
  famousAthletes: [
    "Jack Broughton (GB, 1734–50 English champion; wrote first rules of boxing)",
    "James Figg (GB, first recognized English champion 1719–30)",
    "John L. Sullivan (US, last bare-knuckle heavyweight champion 1889)",
    "Jake Kilrain (US, opposed Sullivan in famous 75-round 1889 fight)",
    "Artem Lobov (RU/IE, notable BKFC modern fighter)",
    "Paulie Malignaggi (US, former boxing world champion — bare-knuckle since 2019)",
    "Mike Perry (US, current BKFC King of Violence)",
    "Chris Leben (US, former UFC — BKFC fighter)",
    "Luis Palomino (US, BKFC lightweight legend)",
  ],
  records: [
    { title: "Longest bare-knuckle championship fight", holder: "John L. Sullivan vs Jake Kilrain", value: "75 rounds, 2 hours 16 minutes", year: 1889 },
    { title: "First modern-era sanctioned BKB event", holder: "BKFC 1 (Wyoming)", value: "June 2, 2018 — first legal US event since 1889", year: 2018 },
    { title: "Fastest BKFC KO", holder: "Various fighters", value: "Under 10 seconds recorded in BKFC events", year: 2020 },
    { title: "Most BKFC titles held simultaneously", holder: "Luis Palomino", value: "Lightweight title + defenses", year: 2022 },
  ],

  variants: ["bkfc-modern-sanctioned", "london-prize-ring-historical", "broughtons-rules-1743", "queensberry-transitional-1867", "bkb-uk-promotion"],
  relatedSports: ["boxing", "mixed-martial-arts", "muay-thai", "kickboxing", "pankration"],

  skills: [
    "punching power + accuracy (bare knuckles = more damage per strike)",
    "head movement + defense (cuts are common)",
    "ring generalship (small circular ring)",
    "endurance (5–7 short rounds)",
    "recovery + cornering (cuts + swelling management)",
    "chin durability (no gloves = harder impacts)",
  ],
  strategies: [
    { title: "Head movement is life", body: "Bare knuckles cut easily — head movement + slipping punches prevents laceration accumulation that stops fights." },
    { title: "Attack early", body: "5 × 2-min rounds = only 10 minutes total. Aggression pays: waiting = losing on cards. First 30 seconds of round 1 often decides tempo." },
    { title: "Body shots underrated", body: "Bare-knuckle body shots (liver, ribs) hit hard + accumulate; opponents often gas out from body punishment even without knockdown." },
    { title: "Corner cutman is critical", body: "Between-round cut management determines whether doctor stops fight. Elite BKFC cutmen (Stitch Duran) are as valuable as trainers." },
    { title: "Ring control in small circle", body: "BKFC 20-ft ring gives nowhere to hide. Pressure fighters + high work rate dominate. Circling out loses rounds." },
    { title: "Manage your own hands", body: "Broken hand ends fight. Land clean (knuckle contact) or don't throw; slap punches shred your own knuckles." },
  ],

  terminology: [
    { term: "BKFC", meaning: "Bare Knuckle Fighting Championship — dominant modern promotion." },
    { term: "Squared Circle", meaning: "BKFC's signature circular ring with painted toe-lines." },
    { term: "Toe-line", meaning: "Painted line where fighters must place a foot to start each round." },
    { term: "Knuckle up!", meaning: "The referee's start command each round (BKFC signature)." },
    { term: "10-point-must", meaning: "Scoring system: 10 to winner, 9 to loser each round." },
    { term: "TKO", meaning: "Technical Knockout — referee/doctor/corner stops fight without KO." },
    { term: "KO", meaning: "Knockout — fighter cannot beat 10-count." },
    { term: "Cutman", meaning: "Cornerman specializing in cut management between rounds." },
    { term: "Enswell", meaning: "Metal ice block cutmen press on swelling to reduce it." },
    { term: "Broughton's Rules (1743)", meaning: "First codified boxing rules by Jack Broughton — foundational to sport." },
    { term: "Queensberry Rules (1867)", meaning: "Introduction of gloves + 3-min rounds ending bare-knuckle era." },
    { term: "Prizefighting", meaning: "Historical term for professional bare-knuckle boxing (mostly illegal 19th c.)." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Master gloved boxing first", body: "Every BKFC fighter came from gloved boxing or MMA. Learn stance, punches, defense with gloves before bare-knuckle." },
        { title: "Study cut management", body: "Bare-knuckle produces cuts. Learn what causes them (head clashes, slipping punches wrong) + how to prevent." },
        { title: "Understand hand-conditioning myths", body: "You CANNOT 'toughen' knuckles to punch bare without pain. Proper technique + wrapping prevents most breaks; wrong technique breaks hands." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Train at bare-knuckle gyms", body: "Specialty gyms exist for BKFC prep — Philadelphia, Las Vegas, Miami. Different training than gloved boxing (angles, defense, work rate)." },
        { title: "Fight amateur / early-BKFC events", body: "Some sanctioning bodies run amateur BKB events. Learn ring craft in low-stakes fights before pro debut." },
        { title: "Sign with BKFC or WBKBA", body: "Pro contract with a sanctioned promotion; earn purses + build ranking toward title contention." },
      ],
    },
  ],

  faq: [
    { question: "Is bare-knuckle boxing more dangerous than regular boxing?", answer: "Counter-intuitive answer — the injury profile is different, not necessarily worse. Bare-knuckle produces MORE cuts and hand injuries but FEWER long-term brain injuries. Gloves distribute punch force + protect knuckles, allowing more head shots + accumulated damage. Bare knuckles hurt to throw + attackers moderate frequency. Preliminary BKFC medical data suggests concussion rates comparable to or lower than gloved boxing." },
    { question: "Where can I legally watch bare-knuckle boxing?", answer: "BKFC events are sanctioned in 30+ US states (Wyoming, Florida, Mississippi, Kansas etc.), UK, Mexico, Thailand. Events broadcast on FightPass, BKFC's own streaming, occasionally pay-per-view. Major KnuckleMania cards are the flagship annual events." },
    { question: "Why was bare-knuckle boxing outlawed?", answer: "Late 19th / early 20th century social reformers pushed to ban prizefighting as brutal + associated with gambling. Introduction of gloves (Queensberry Rules 1867) allowed 'civilized' boxing to remain legal while bare-knuckle got banned. The 1889 Sullivan-Kilrain fight was the last major American bare-knuckle championship — after that, gloved boxing was the only legal form until 2018." },
    { question: "Who was the greatest bare-knuckle boxer?", answer: "Historical: Jack Broughton (English champion 1734–50, wrote first rules) and John L. Sullivan (last US champion 1889) are the legends. Modern (BKFC era): Luis Palomino (multi-title lightweight), Mike Perry (crossover MMA star), and Artem Lobov (early-era attention-getter) are top BKFC names. All-time comparisons impossible due to 130-year gap in the sport." },
    { question: "How much do bare-knuckle boxers earn?", answer: "BKFC purses vary widely: prelims $2,000–$10,000; main-card fighters $15,000–$50,000; headliners + title fights $100,000–$500,000+; top attractions (Mike Perry, Malignaggi, crossover names) can reach $1M+ for PPV headliners. Lower on average than boxing top-tier but higher per-second-of-actual-fighting than boxing." },
  ],

  wikipediaTitle: "Bare-knuckle boxing",
  sources: [
    { label: "Wikipedia — Bare-knuckle boxing", url: "https://en.wikipedia.org/wiki/Bare-knuckle_boxing", publisher: "Wikipedia" },
    { label: "Bare Knuckle Fighting Championship (BKFC)", url: "https://bkfc.com", publisher: "BKFC" },
    { label: "The 1889 Sullivan-Kilrain fight (historic)", publisher: "Various boxing historians (e.g. Elliott Gorn 'The Manly Art' 1986)" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

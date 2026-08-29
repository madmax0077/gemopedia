import type { Sport } from "@/lib/types";

export const escrima: Sport = {
  id: "escrima",
  slug: "escrima",
  name: "Escrima",
  officialName: "Escrima / Arnis / Kali (Filipino Martial Arts)",
  aliases: ["Arnis", "Kali", "FMA (Filipino Martial Arts)"],
  shortDescription:
    "The Philippines' national martial art — weapons-based combat starting with rattan sticks (single or double) and progressing to knives, empty hand, and swords; officially the country's National Sport and Martial Art since 2009.",
  longDescription:
    "Escrima (also called Arnis or Kali) is an umbrella term for indigenous Filipino martial arts systems that use weapons as the primary teaching tool. Its origins trace to pre-Spanish tribal weapons; Spanish colonization (1565-1898) drove it underground where it survived in dance form. Republic Act 9850 (2009) declared Arnis the National Martial Art + Sport of the Philippines. WEKAF (World Eskrima Kali Arnis Federation) has held World Championships since 1989. Featured famously in Bourne, Bourne Ultimatum, and John Wick fight choreography.",

  category: "combat-sports",
  subCategory: "Filipino weapons-based martial art",
  sportType: "individual",
  indoorOutdoor: "both",
  isProfessional: true,
  season: "year-round",
  era: "medieval",
  popularity: "major",

  countryOfOrigin: "PH",
  regionOfOrigin: "Philippines (pre-Spanish Cebu, Panay, Luzon islands)",
  estimatedOrigin: "Pre-1521 tribal weapons; codified as martial art system 1600s; National Sport of Philippines 2009",

  players: { min: 1, max: 2, note: "Solo forms (anyo); dual sparring (laban); larger formations for demonstrations." },
  field: {
    surfaceName: "Matted arena / open space",
    dimensions: "8×8 m tournament ring (WEKAF)",
    description: "Sanctioned mats + padded flooring for tournament sparring; training in gyms + outdoors." },
  equipment: [
    { name: "Rattan sticks (baston)", description: "1-2 sticks, ~70cm long, 2-3cm diameter; either single or double stick training." },
    { name: "Padded armor (tournament)", description: "WEKAF sanctioned head + body armor; hand + shin guards." },
    { name: "Training knife (trainer blades)", description: "Aluminum or wood trainers for knife (baraw) work." },
    { name: "Long weapon (garrote / staff)", description: "Advanced weapon training; 1.5-2m staff." },
    { name: "Uniform / training gi", description: "Traditional black uniform or modern MMA-style rashguard + shorts." },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "Training session: 60-90 min. Tournament match: 3 × 90-second rounds. Full tournament: 1-2 days." },

  objective:
    "Deliver clean, controlled strikes with the weapon (or empty hand) to score points OR execute a technical takedown/disarm. Traditional systems emphasize practical combat effectiveness.",
  matchStructure:
    "WEKAF: single-elimination brackets. 3 × 90-second rounds. Scoring by clean strikes, disarms, takedowns.",

  basicRules: [
    { title: "Weapons progression", body: "Rattan sticks first; then knife (baraw), then empty hand (panuntukan) — reverse order from most MA systems." },
    { title: "Strike zones", body: "Head, torso, arms/legs; groin strikes prohibited in tournament." },
    { title: "Clean strike scoring", body: "Full-force + clean landing = 1 point; multiple strikes may accumulate per exchange." },
    { title: "Disarm bonuses", body: "Successful weapon disarm = additional points + potential match win." },
    { title: "Sinawali (weaving pattern)", body: "Foundational two-stick weaving drill teaching coordination." },
  ],
  advancedRules: [
    { title: "Redonda + Abecedario", body: "Foundational striking angle systems (12 angles typical)." },
    { title: "Ranges", body: "Corto (short), Medyo (medium), Largo (long) — different techniques per range." },
    { title: "Weapon transitions", body: "Advanced: seamlessly switch stick → knife → empty hand mid-exchange." },
    { title: "Doble baston (double stick)", body: "Simultaneous 2-weapon combat; signature FMA aesthetic." },
    { title: "Espada y daga", body: "Sword + dagger combination — long-range + short-range simultaneous." },
  ],
  scoring: {
    summary: "Clean strikes + disarms + takedowns. WEKAF uses point accumulation; some systems use knockout/submission.",
    winCondition: "Highest points after 3 rounds; automatic win on knockout or disarm-followed-by-strike.",
    breakdown: [
      { action: "Clean strike (any zone)", points: "1-2 pts" },
      { action: "Disarm", points: "3-5 pts" },
      { action: "Takedown", points: "3-5 pts" },
      { action: "Submission (empty hand)", points: "Automatic win" },
    ],
  },
  penalties: [
    { title: "Illegal strike (groin, spine)", body: "1-3 point deduction; repeated = DQ." },
    { title: "Excessive force", body: "Warning + potential DQ." },
    { title: "Wrong weapon use", body: "DQ." },
  ],

  positions: [
    { name: "Practitioner (Guro / Grand Master)", role: "Ranked instructor; teaches formal system.", count: 1 },
    { name: "Student (Apprentice / Padawan)", role: "Trainee; progresses through skill ranks." },
    { name: "Sparring partner", role: "Training partner for laban (sparring)." },
  ],
  officiating: {
    officials: ["WEKAF-certified referees", "Judges (3 typically)"],
    summary: "WEKAF sanctions World Championships; national federations govern domestic events. FMA has multiple lineage systems (Doce Pares, Balintawak, Presas Arnis, Modern Arnis).",
  },

  governingBodies: [
    { name: "World Eskrima Kali Arnis Federation (WEKAF)", founded: 1989, headquarters: "Cebu, Philippines", website: "https://wekafworld.com" },
    { name: "International Modern Arnis Federation (IMAF)", founded: 1976, headquarters: "Philippines", website: "https://modernarnis.com" },
    { name: "Philippine Sports Commission (national)", founded: 1990, headquarters: "Manila, Philippines", website: "https://psc.gov.ph" },
  ],
  majorCompetitions: [
    { name: "WEKAF World Championships", frequency: "biennial", founded: 1989, region: "rotating globally" },
    { name: "Southeast Asian Games (SEA Games)", frequency: "biennial", founded: 1959, region: "SE Asia (with Arnis medal event)" },
    { name: "National Arnis Championships (Philippines)", frequency: "annual", founded: 2009, region: "Philippines" },
  ],
  countriesPlayed: ["PH", "US", "AU", "DE", "GB", "MY", "SG", "JP", "ES", "IT"],
  famousAthletes: [
    "Remy Presas (PH, founder of Modern Arnis)",
    "Cacoy Cañete (PH, Doce Pares system grand master)",
    "Dan Inosanto (US-PH, Bruce Lee's protégé + FMA teacher)",
    "Ernesto Presas (PH, Kombatan founder)",
    "Rene Cruz (PH, WEKAF world champion multiple times)",
  ],
  records: [
    { title: "Most WEKAF world titles (single style)", holder: "Doce Pares system", value: "Multiple gold medals per Worlds", year: 2019 },
    { title: "First national martial art declaration", holder: "Philippines (RA 9850)", value: "Arnis declared national art + sport", year: 2009 },
    { title: "SEA Games inclusion", holder: "Arnis", value: "First included Philippine SEA Games 2005", year: 2005 },
  ],

  variants: ["balintawak", "doce-pares", "modern-arnis", "kali", "sikaran"],
  relatedSports: ["silat", "kali", "sikaran", "mma"],

  skills: [
    "hand-eye coordination + weapon awareness",
    "striking pattern recognition (12 angles)",
    "flow / range control",
    "empty-hand + weapon transitions",
    "defensive footwork + evasion",
  ],
  strategies: [
    { title: "Master the 12 angles", body: "Every strike falls into 1 of 12 angle categories; defense automatic once learned." },
    { title: "Control the range", body: "Corto (in close) neutralizes long-weapon advantage; Largo (out) safer for slower practitioners." },
    { title: "Sinawali daily", body: "Two-stick weaving drills develop coordination + flow — fundamental FMA training." },
    { title: "Practice with real weapons", body: "Rattan sticks OK for training; live-blade drills develop respect + safety." },
  ],

  terminology: [
    { term: "Baston", meaning: "Rattan stick, the primary training weapon." },
    { term: "Baraw", meaning: "Knife or dagger." },
    { term: "Anyo", meaning: "Solo form / kata sequence." },
    { term: "Laban", meaning: "Sparring / free-flow combat." },
    { term: "Sinawali", meaning: "Two-stick weaving drill (double stick pattern)." },
    { term: "Guro", meaning: "Teacher / instructor." },
    { term: "Corto / Medyo / Largo", meaning: "Short / medium / long range." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Find a WEKAF-affiliated instructor", body: "Filipino Martial Arts schools worldwide; WEKAF directory lists certified." },
        { title: "Learn the 12 angles", body: "Foundation of every FMA system; teaches offensive + defensive vocabulary." },
        { title: "Master single-stick basics", body: "Grip, stance, footwork, redonda + abanico patterns." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Enter WEKAF national tournaments", body: "Country-specific federations qualify to biennial Worlds." },
        { title: "Cross-train empty hand + knife", body: "Advanced FMA integrates weapons + empty hand under same principles." },
        { title: "Achieve Guro rank + teach", body: "Traditional path: 8-15 years to teaching rank with lineage recognition." },
      ],
    },
  ],

  faq: [
    { question: "Is Escrima the same as Arnis or Kali?", answer: "All three refer to Filipino Martial Arts; regional/lineage names differ. Arnis (Northern Philippines), Escrima (Central/Cebu), Kali (Southern/international)." },
    { question: "Why start with weapons?", answer: "FMA philosophy: weapons teach empty-hand; movements are identical, weapon adds urgency + precision. Reversed from most Asian MA." },
    { question: "Is Escrima good for self-defense?", answer: "Yes — its emphasis on improvised weapons + close-range combat is highly practical. Used in military + law-enforcement CQC training." },
    { question: "How long to become proficient?", answer: "6 months for basic single-stick competency; 2-3 years for confident sparring; 8-15 years for teaching rank." },
  ],

  sources: [
    { label: "Wikipedia — Arnis", url: "https://en.wikipedia.org/wiki/Arnis", publisher: "Wikipedia" },
    { label: "WEKAF official", url: "https://wekafworld.com", publisher: "WEKAF" },
    { label: "Republic Act 9850 (Philippines)", url: "https://lawphil.net/statutes/repacts/ra2009/ra_9850_2009.html", publisher: "Republic of the Philippines" },
  ],
  wikipediaTitle: "Arnis",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

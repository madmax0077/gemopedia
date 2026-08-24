import type { Sport } from "@/lib/types";

export const judo: Sport = {
  id: "judo",
  slug: "judo",
  name: "Judo",
  officialName: "Judo",
  aliases: ["柔道", "The gentle way"],
  shortDescription:
    "Japanese grappling art of throws, pins, chokes and arm-locks — win by ippon (perfect throw) or accumulate waza-ari.",
  longDescription:
    "Judo (柔道, 'the gentle way') is a modern Japanese martial art and Olympic combat sport founded by Kanō Jigorō in Tokyo in 1882. Drawing on older jujutsu schools but stripped of dangerous techniques, judo emphasises throws (nage-waza) and grappling (katame-waza) — pins, chokes and joint locks — with the aim of scoring ippon: a single technique of such quality (a clean throw flat on the back, a 20-second pin, or a submission) that it wins the match instantly. Judo was included in the Olympic programme in Tokyo 1964 (men) and Barcelona 1992 (women). The International Judo Federation (IJF) governs the sport worldwide.",

  category: "combat-sports",
  subCategory: "grappling martial art",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: true,
  isParalympic: true,
  isProfessional: false,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "JP",
  regionOfOrigin: "Tokyo, Japan",
  estimatedOrigin: "1882 (Kanō Jigorō, Kōdōkan)",

  players: { min: 2, max: 2, note: "1v1 within weight classes. Mixed-team format added at Tokyo 2020 Olympics." },
  field: {
    surfaceName: "tatami",
    dimensions: "Contest area 8 m × 8 m to 10 m × 10 m, within a 14 m × 14 m safety zone",
    description: "Padded straw mats laid on a sprung floor. Athletes wear the traditional white or blue judogi.",
  },
  equipment: [
    { name: "Judogi", description: "Thick cotton uniform — jacket, drawstring trousers and a coloured belt (obi). One athlete wears white, one blue." },
    { name: "Obi (belt)", description: "Signals rank — from white (beginner) through six colours to black dan grades." },
    { name: "Tatami", description: "Padded mats offering safe landing for repeated throws." },
  ],
  duration: {
    approximateMinutes: 4,
    structure: "Regulation bout: 4 minutes (senior). Golden score: unlimited overtime — first score wins.",
    note: "Match ends immediately on ippon or if a competitor reaches two waza-ari.",
  },
  objective: "Score ippon (an instant-win technique) or accumulate more waza-ari than the opponent within regulation time.",
  matchStructure:
    "Athletes bow onto the tatami, salute each other and grip up on 'hajime'. They fight standing (tachi-waza) and on the ground (ne-waza). Any clean throw landing flat on the back scores ippon and ends the bout; lesser throws score waza-ari. Ground fighting may score with a 20-second pin, or a choke/armlock forcing submission. If regulation ends level, golden score runs until any scoring technique or shido penalty decides the winner.",

  basicRules: [
    { title: "Ippon (full point)", body: "Throwing an opponent flat on their back with control, force and speed. Also scored for a 20-second pin (osae-komi) or forcing submission via choke/armlock." },
    { title: "Waza-ari (half point)", body: "A throw that lacks one of the ippon elements — e.g. landing partly on the side. Two waza-ari end the bout." },
    { title: "Osae-komi (hold-down)", body: "Ground pin controlled with the opponent's back to the mat — 10 sec = waza-ari, 20 sec = ippon." },
    { title: "Chokes and armlocks", body: "Legal from age 15+. Locks on the elbow joint only — no wrist, knee or spine locks. Submission is signalled by tapping." },
    { title: "Illegal techniques", body: "Leg grabs, kani-basami (crab scissors), striking, spine cranks and neck cranks are all banned in IJF rules." },
  ],
  advancedRules: [
    { title: "Shido (minor penalty)", body: "Given for non-combativity, false attacks, stepping outside the contest area, or defensive posture. Three shido = hansoku-make (loss)." },
    { title: "Hansoku-make", body: "Direct disqualification for a serious infraction (e.g. dangerous technique) or accumulating three shido." },
    { title: "Golden score", body: "Overtime with no time limit — first score or first shido decides the bout." },
    { title: "Newaza transitions", body: "Ne-waza (ground fighting) is only allowed as a continuation of a scoring throw or clear attack; stalling on the ground triggers a matte (stop)." },
  ],
  scoring: {
    summary: "Ippon = instant win. Two waza-ari = ippon. Yuko was abolished in 2017.",
    breakdown: [
      { action: "Ippon (perfect throw / 20-sec pin / submission)", points: "match-ending", note: "Instant win." },
      { action: "Waza-ari (near-ippon throw / 10-sec pin)", points: "1", note: "Two waza-ari end the bout." },
      { action: "Shido (opponent penalty)", points: "0", note: "Three shido = hansoku-make for opponent." },
    ],
    winCondition: "Ippon, two waza-ari, opponent's third shido, hansoku-make, or highest score at time / in golden score.",
  },
  penalties: [
    { title: "Shido", body: "Warning for passivity, false attack, stepping out, defensive grip, etc. Three shido = loss." },
    { title: "Hansoku-make (direct)", body: "Immediate disqualification for banned or dangerous technique; may include tournament suspension." },
  ],

  officiating: {
    officials: ["Referee (in-tatami)", "Two judges (corner)", "Care system (CARE) video review"],
    summary: "The referee controls the bout inside the tatami; two corner judges support decisions. Since 2013 the CARE (Judogi Control And Video Refereeing) system uses instant replay to confirm scoring and penalties.",
  },
  governingBodies: [
    { name: "International Judo Federation", acronym: "IJF", founded: 1951, headquarters: "Budapest, Hungary", website: "https://www.ijf.org" },
    { name: "Kōdōkan", founded: 1882, headquarters: "Bunkyō, Tokyo", website: "https://www.kodokanjudoinstitute.org" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 1964, region: "worldwide", note: "Men 1964; women 1992; mixed team 2020." },
    { name: "World Judo Championships", frequency: "annual", founded: 1956, region: "worldwide" },
    { name: "IJF World Tour", frequency: "annual", founded: 2009, region: "worldwide", note: "Grand Slams, Grand Prix, Masters." },
    { name: "European / Pan-American / Asian / African Championships", frequency: "annual", region: "continental" },
  ],
  countriesPlayed: ["JP", "FR", "BR", "RU", "GE", "MN", "NL", "KR", "US", "CU", "AZ", "IL"],
  famousAthletes: [
    "Kanō Jigorō (founder)",
    "Yasuhiro Yamashita",
    "Teddy Riner",
    "Ryōko Tani",
    "Shōhei Ono",
    "Kayla Harrison",
    "Clarisse Agbegnenou",
    "David Douillet",
    "Ilias Iliadis",
  ],
  records: [
    { title: "Most Olympic judo golds", holder: "Tadahiro Nomura (JPN)", value: "3 (1996, 2000, 2004)", year: 2004 },
    { title: "Most World Championship golds (male)", holder: "Teddy Riner (FRA)", value: "10", year: 2023 },
    { title: "Longest unbeaten streak", holder: "Teddy Riner", value: "154 fights, 2010-2020", year: 2020 },
  ],

  variants: ["brazilian-jiu-jitsu", "sambo", "kosen-judo"],
  relatedSports: ["brazilian-jiu-jitsu", "sambo", "wrestling", "aikido"],

  skills: ["grip fighting (kumi-kata)", "balance (kuzushi)", "timing", "leverage", "flexibility", "core strength"],
  strategies: [
    { title: "Kuzushi-tsukuri-kake", body: "The three-phase throw: break balance, fit-in, execute — every technique is trained on this template." },
    { title: "Combination attacks (renraku-waza)", body: "Chain a failed attack into a follow-up as the opponent reacts." },
    { title: "Counter-attacks (kaeshi-waza)", body: "Use the opponent's attack momentum to throw them instead." },
    { title: "Newaza pressure", body: "After a scoring throw, immediately transition to a pin or submission for ippon." },
  ],

  terminology: [
    { term: "Ippon", meaning: "A perfect scoring technique — instant win." },
    { term: "Waza-ari", meaning: "Half-point technique — two ends the bout." },
    { term: "Shido", meaning: "A minor penalty — three ends the bout." },
    { term: "Nage-waza", meaning: "Throwing techniques." },
    { term: "Katame-waza", meaning: "Grappling techniques — pins, chokes, joint locks." },
    { term: "Osae-komi", meaning: "A ground pin — 20 seconds scores ippon." },
    { term: "Uchi-komi", meaning: "Repetition throwing practice — entering without completing." },
    { term: "Randori", meaning: "Free-form sparring practice." },
    { term: "Judoka", meaning: "A practitioner of judo." },
    { term: "Ukemi", meaning: "Breakfalling — the first skill every judoka learns." },
    { term: "Hajime / Matte", meaning: "Begin / Stop — the referee's fundamental commands." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Ukemi (breakfalls)", body: "Learn to fall safely — mae-ukemi, ushiro-ukemi, yoko-ukemi, mae-mawari-ukemi." },
      { title: "Basic throws (nage-no-kata 1)", body: "O-goshi, seoi-nage, o-soto-gari, uki-goshi — the foundational hip and leg throws." },
      { title: "Basic pins", body: "Kesa-gatame, kata-gatame, yoko-shiho-gatame, kami-shiho-gatame — the four standard hold-downs." },
      { title: "Rei (etiquette)", body: "Bowing to the dojo, sensei, and partner — essential judo courtesy." },
    ] },
    { level: "intermediate", steps: [
      { title: "Combinations", body: "Renraku-waza — link two or more attacks in fluid sequences." },
      { title: "Counter throws (kaeshi-waza)", body: "Turn opponent's throws against them — sasae-tsuri-komi-ashi counter, o-uchi-gari counter." },
      { title: "Newaza submissions", body: "Juji-gatame (cross armbar), hadaka-jime (rear naked choke), sankaku-jime (triangle)." },
      { title: "Randori", body: "Free-sparring rounds against progressively skilled partners." },
    ] },
    { level: "advanced", steps: [
      { title: "Competition strategy", body: "Grip fighting, pace, opponent scouting, weight management." },
      { title: "Advanced kata", body: "Master Nage-no-Kata, Katame-no-Kata, Kime-no-Kata for dan grading." },
      { title: "Coaching", body: "Learn to teach — many countries require coaching qualification for higher dan grades." },
    ] },
  ],
  faq: [
    { question: "Is judo painful to learn?", answer: "The first weeks are the hardest — you fall a lot. Once ukemi (breakfalls) become second nature, judo is one of the safest combat sports (backed by insurance data)." },
    { question: "Can you strike in judo?", answer: "Not in competition. Strikes exist in kata (atemi-waza) as a study of vulnerable points, but they are never used in randori or contests." },
    { question: "Why can't you grab legs in modern judo?", answer: "The IJF banned direct leg grabs in 2010 to differentiate judo from wrestling and to promote spectacular throws. Leg grabs remain legal in sambo and BJJ." },
    { question: "How many weight classes are there?", answer: "Seven per gender in the IJF senior events: men -60, -66, -73, -81, -90, -100, +100 kg; women -48, -52, -57, -63, -70, -78, +78 kg." },
    { question: "What's the highest dan grade?", answer: "The Kōdōkan awards up to 10th dan; only 15 people in history have ever received it. Most senior competitors and coaches hold 4th-6th dan." },
  ],

  wikipediaTitle: "Judo",
  sources: [
    { label: "Wikipedia — Judo", url: "https://en.wikipedia.org/wiki/Judo", publisher: "Wikipedia" },
    { label: "IJF — Sport & Organisation Rules", url: "https://www.ijf.org/ijf/documents/8", publisher: "International Judo Federation" },
    { label: "Kōdōkan — What is Judo", url: "https://www.kodokanjudoinstitute.org/en/", publisher: "Kōdōkan Institute" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
  sportSpecific: {
    weightClasses: {
      men: ["-60", "-66", "-73", "-81", "-90", "-100", "+100"],
      women: ["-48", "-52", "-57", "-63", "-70", "-78", "+78"],
    },
    beltProgression: ["White", "Yellow", "Orange", "Green", "Blue", "Brown", "Black 1-10 dan", "Red-and-white 6-8 dan", "Red 9-10 dan"],
  },
};

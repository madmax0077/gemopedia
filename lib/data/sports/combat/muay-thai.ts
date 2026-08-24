import type { Sport } from "@/lib/types";

export const muayThai: Sport = {
  id: "muay-thai",
  slug: "muay-thai",
  name: "Muay Thai",
  officialName: "Muay Thai (Thai Boxing)",
  aliases: ["Thai boxing", "The Art of Eight Limbs", "Muay"],
  shortDescription:
    "Thai national combat sport known as the 'art of eight limbs' — fighters strike with fists, elbows, knees and shins over five rounds of three minutes.",
  longDescription:
    "Muay Thai is Thailand's national martial art and combat sport. It is called the 'art of eight limbs' because fighters strike with two fists, two elbows, two knees and two shins — a broader arsenal than most stand-up martial arts. Modern professional bouts are contested inside a boxing-style ring under a promoter, with 5 rounds of 3 minutes separated by 2-minute rests. Scoring emphasises damage, dominance, aggression and technique. The sport evolved from Muay Boran, a battlefield martial art dating back to the Ayutthaya Kingdom (14th-18th centuries). Muay Thai training is a foundational element of many mixed martial arts programmes; it was recognised for full inclusion at the 2028 Los Angeles Olympics (as of IOC 2023 recognition of IFMA).",

  category: "combat-sports",
  subCategory: "stand-up striking",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "medieval",
  popularity: "global",

  countryOfOrigin: "TH",
  regionOfOrigin: "Thailand (Siam)",
  estimatedOrigin: "Ayutthaya Kingdom (1350-1767); modern ring rules early 20th century",

  players: { min: 2, max: 2, note: "1v1 by weight class; corner team of 2-3 with a head trainer and cutman." },
  field: {
    surfaceName: "ring",
    dimensions: "Standard boxing ring 4.9-7.3 m (16-24 ft) square, four ropes, elevated canvas platform.",
    description: "Elevated square ring with four rope-tensioned sides and padded corner posts; typically decorated with sponsor banners in Thai stadia (Lumpinee, Rajadamnern).",
  },
  equipment: [
    { name: "Muay Thai gloves", description: "Boxing-style gloves 8-10 oz for professional bouts; 12-16 oz for amateur." },
    { name: "Hand wraps", description: "Cotton or gauze wraps under the gloves; inspected before the fight." },
    { name: "Mongkhon (headband)", description: "Sacred head-piece worn during the Wai Kru pre-fight ceremony; removed by the trainer before the bell." },
    { name: "Prajioud (arm bands)", description: "Braided arm bands blessed for luck; worn throughout the fight." },
    { name: "Muay Thai shorts", description: "Wide, elastic-waisted shorts worn above the beltline; heavily decorated." },
    { name: "Mouthguard", description: "Mandatory for professional and amateur bouts." },
    { name: "Groin protector", description: "Mandatory for both amateur and professional men." },
    { name: "Shin guards (amateur only)", description: "Required for IFMA amateur bouts; not worn in professional Muay Thai.", optional: true },
    { name: "Headgear (amateur only)", description: "Required in IFMA amateur competition.", optional: true },
  ],
  duration: {
    approximateMinutes: 25,
    structure: "5 rounds of 3 minutes with 2-minute rest between rounds.",
    note: "Amateur IFMA bouts are typically 3 rounds; some promotions use 3-round main cards with a 4th if the first three are close.",
  },
  objective: "Knock the opponent out, force a stoppage, or accumulate more scoring points across five rounds by damage, aggression, technique and ring generalship.",
  matchStructure:
    "Fighters perform the Wai Kru Ram Muay — a pre-fight dance paying respect to trainer, family and country — accompanied by the Sarama musical trio (pi java, ching, klong). Bell begins the first round. Rounds run for 3 minutes with active exchanges; the referee stops the fight for knockouts, TKOs or standing 10-counts. Judges score each round on the 10-point must system.",

  basicRules: [
    { title: "Legal targets", body: "The entire body above the waistline is legal for punches; the whole body is legal for kicks; groin strikes are illegal." },
    { title: "Eight legal weapons", body: "Punches (2 fists), elbows (2), knees (2), and shins/feet for kicks (2). Head-butts illegal in modern rules." },
    { title: "Clinch and knees", body: "Fighters may clinch and strike with knees; the referee separates a stalled clinch." },
    { title: "Sweeps and throws", body: "Legal sweeps of the leg allowed; throws forbidden (unlike Muay Boran)." },
    { title: "Wai Kru", body: "Pre-fight ritual dance — a fighter who refuses the Wai Kru may be disqualified in traditional Thai stadia." },
    { title: "Referee stops", body: "The referee may stop the fight for KO, TKO, technical stoppage, or repeated fouls." },
    { title: "10-point must system", body: "Round winner gets 10, loser 9 or fewer; knockdowns cost the loser an extra point." },
  ],
  advancedRules: [
    { title: "Round scoring emphasis", body: "Judges weight rounds 4 and 5 more heavily — traditional Thai judges look for the fighter clearly winning the championship rounds." },
    { title: "Damage inflicted vs cosmetic strikes", body: "A clean shin kick that visibly hurts the opponent scores more than a fast, superficial jab." },
    { title: "Elbow limits (amateur)", body: "IFMA amateur competition does not allow elbow strikes; professional Muay Thai does." },
    { title: "Ring exit", body: "Fighter who leaves the ring during a live round may lose a point or be disqualified." },
    { title: "Betting norms", body: "In traditional Thai stadia, spectator betting shifts round by round and influences pace — fighters often start slow and escalate to appease bettors." },
  ],
  scoring: {
    summary: "10-point must system judged by three officials — emphasis on damage, dominance and ring generalship.",
    breakdown: [
      { action: "Winning a round", points: "10", note: "Loser gets 9 or fewer." },
      { action: "Knockdown against loser", points: "-1 to loser's round score" },
      { action: "Point deduction (foul)", points: "-1 or -2", note: "Referee-imposed for repeated fouls." },
      { action: "Knockout", points: "Instant win", note: "10-count while opponent is unable to defend." },
    ],
    winCondition: "KO, TKO, disqualification, retirement, or points decision after 5 rounds.",
  },
  penalties: [
    { title: "Point deduction", body: "For low blows, holding without striking, hitting on the break, or hitting after the bell." },
    { title: "Standing 8 count", body: "Referee may pause the fight and count over a fighter who is stunned to check on their ability to continue." },
    { title: "Disqualification", body: "Deliberate fouls or refusal to fight — very rare in Muay Thai due to the sport's culture of respect." },
  ],

  officiating: {
    officials: ["Referee (in-ring)", "Three judges (ringside)", "Timekeeper", "Doctor"],
    summary: "The referee enforces rules and may pause the fight. Three judges score each round independently using the 10-point must system.",
  },
  governingBodies: [
    { name: "International Federation of Muaythai Associations", acronym: "IFMA", founded: 1993, headquarters: "Bangkok, Thailand", website: "https://muaythai.sport" },
    { name: "World Muay Thai Council", acronym: "WMC", founded: 1995, headquarters: "Bangkok, Thailand", website: "https://www.wmcmuaythai.org" },
    { name: "Professional Boxing Association of Thailand", acronym: "PABT", founded: 1937, headquarters: "Bangkok, Thailand" },
  ],
  majorCompetitions: [
    { name: "Lumpinee Boxing Stadium championships", frequency: "monthly", founded: 1956, region: "Thailand (Bangkok)", note: "One of two flagship Muay Thai venues; belts here are the most prestigious in the sport." },
    { name: "Rajadamnern Stadium championships", frequency: "monthly", founded: 1945, region: "Thailand (Bangkok)" },
    { name: "IFMA World Championships (amateur)", frequency: "annual", founded: 1993, region: "worldwide" },
    { name: "ONE Championship Muay Thai", frequency: "monthly", founded: 2018, region: "Asia (largest professional purse for Muay Thai worldwide)" },
    { name: "Glory Kickboxing (Muay Thai crossover)", frequency: "monthly", founded: 2012, region: "Europe (some events include Muay Thai)" },
  ],
  countriesPlayed: ["TH", "US", "GB", "AU", "NL", "FR", "SE", "JP", "RU", "BR", "KZ", "MY", "IT"],
  famousAthletes: [
    "Buakaw Banchamek",
    "Saenchai Sinbimuaythai",
    "Nong-O Gaiyanghadao",
    "Rodtang Jitmuangnon",
    "Yodsanklai Fairtex",
    "Sagat Petchyindee",
    "Samart Payakaroon",
    "Ramon Dekkers (Netherlands)",
    "Jonathan Haggerty",
    "Anissa Meksen",
    "Stamp Fairtex",
    "Sudsakorn Sor. Klinmee",
  ],
  records: [
    { title: "Most Lumpinee stadium titles (multi-weight)", holder: "Samart Payakaroon", value: "4 in 4 different weight classes", year: 1988 },
    { title: "Most consecutive ONE Championship title defences (Muay Thai)", holder: "Nong-O Gaiyanghadao", value: "6", year: 2023 },
    { title: "Fastest Muay Thai KO in a title fight (ONE)", holder: "Rodtang Jitmuangnon", value: "1 min 5 s vs Jonathan Haggerty", year: 2019 },
  ],

  variants: ["muay-boran", "lethwei", "kickboxing", "sanda", "amateur-muay-thai-ifma"],
  relatedSports: ["boxing", "kickboxing", "mma", "lethwei", "sanda"],

  skills: [
    "shin conditioning",
    "clinch control",
    "elbow accuracy",
    "leg-kick placement (thigh, calf, body)",
    "cardio for 5×3 minute rounds",
    "reading opponent stance and rhythm",
    "poise under exchanges (mai mao)",
  ],
  strategies: [
    { title: "Muay Femur (technician)", body: "Sharp elbows, precise counters, technical spacing — Samart, Saenchai." },
    { title: "Muay Mat (puncher)", body: "Boxing-heavy pressure with strong leg kicks — Ramon Dekkers, Buakaw." },
    { title: "Muay Khao (knee fighter)", body: "Constant knee attacks in the clinch — Dieselnoi, Nong-O." },
    { title: "Muay Tae (kicker)", body: "Dominate range with long-range roundhouse kicks — Yodsanklai." },
    { title: "Muay Sok (elbow specialist)", body: "Focus on elbow attacks to open cuts and win by stoppage." },
  ],

  terminology: [
    { term: "Wai Kru Ram Muay", meaning: "Pre-fight ritual dance paying respect to trainers, family and country." },
    { term: "Sarama", meaning: "Traditional 4-piece music (pi java, ching, two klong drums) played during the fight." },
    { term: "Mongkhon", meaning: "Sacred head-band worn during the Wai Kru; removed by the trainer before the bell." },
    { term: "Prajioud", meaning: "Braided arm bands blessed by the fighter's teacher or temple." },
    { term: "Teep (push kick)", meaning: "Long-range straight push kick used to control distance." },
    { term: "Roundhouse (Te)", meaning: "Full-power hip-driven kick with the shin as the striking surface." },
    { term: "Sok (elbow)", meaning: "Elbow strike — includes horizontal, upward, downward, and spinning variants." },
    { term: "Khao (knee)", meaning: "Knee strike — thrust knee, curving knee, and flying knee." },
    { term: "Chok (punch)", meaning: "Punch — jab, cross, hook, uppercut (as in boxing)." },
    { term: "Clinch (chap)", meaning: "Standing grappling position for knee strikes and throws — a defining Muay Thai skill." },
    { term: "Mai Mao (drunken tricks)", meaning: "Feints, off-balance movements, and misdirection to draw predictable attacks." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Stance and guard", body: "Weight slightly forward, hands high, elbows tight; hips square." },
      { title: "Teep (push kick)", body: "Chamber the knee, extend the foot at the opponent's hip — controls range." },
      { title: "Roundhouse kick", body: "Turn the standing foot, drive the hip, connect with the shin — not the foot." },
      { title: "Basic clinch grip", body: "Double collar tie with hands laced behind the neck; break posture with elbows in." },
    ] },
    { level: "intermediate", steps: [
      { title: "Combinations", body: "Jab-cross-low-kick, teep-cross-hook-body-kick — Thai striking rhythms." },
      { title: "Knees in the clinch", body: "Straight knees and curving 'diagonal' knees to the body and head." },
      { title: "Elbow techniques", body: "Slashing elbow (horizontal), upward elbow, spinning elbow." },
      { title: "Leg-kick defence", body: "Check kicks with the shin; catch and sweep against low round kicks." },
    ] },
    { level: "advanced", steps: [
      { title: "Ring generalship", body: "Manage tempo — start conservative in rounds 1-2, escalate in 3-5." },
      { title: "Sweeps and dumps", body: "Convert caught kicks and clinches into scoring dumps." },
      { title: "Adjust to opponent style", body: "Femur, Mat, Khao, Tae — recognise and counter each stylistic archetype." },
    ] },
  ],
  faq: [
    { question: "Why is it called the 'art of eight limbs'?", answer: "A fighter can strike with 8 contact points — two fists, two elbows, two knees, and two shins/feet — more than in boxing (2), Karate (4) or Taekwondo (mostly 4)." },
    { question: "Is Muay Thai at the Olympics?", answer: "IFMA has been fully recognised by the IOC (2021), and Muay Thai will feature at the 2028 Los Angeles Olympics (subject to final scheduling)." },
    { question: "Where is Muay Thai fought most competitively?", answer: "Thailand (Lumpinee, Rajadamnern), and internationally through ONE Championship (Asia) and Glory (Europe)." },
    { question: "How is scoring different from boxing?", answer: "Judges reward damage inflicted and dominance in the championship rounds (4-5) over pure output; a fighter who is clearly hurting the opponent late will often win a close decision." },
    { question: "How does Muay Thai differ from kickboxing?", answer: "Muay Thai allows elbows, knees, extensive clinch work, and traditional rituals (Wai Kru, mongkhon, Sarama). K-1-style kickboxing typically limits or removes elbows and heavy clinch." },
  ],

  wikipediaTitle: "Muay Thai",
  sources: [
    { label: "Wikipedia — Muay Thai", url: "https://en.wikipedia.org/wiki/Muay_Thai", publisher: "Wikipedia" },
    { label: "IFMA Muay Thai Rules", url: "https://muaythai.sport/rules", publisher: "International Federation of Muaythai Associations" },
    { label: "World Muay Thai Council", url: "https://www.wmcmuaythai.org", publisher: "WMC" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

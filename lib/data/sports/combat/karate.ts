import type { Sport } from "@/lib/types";

export const karate: Sport = {
  id: "karate",
  slug: "karate",
  name: "Karate",
  officialName: "Karate-dō",
  aliases: ["空手", "Karate-do", "The Empty Hand"],
  shortDescription:
    "Okinawan striking art of empty-handed punches, kicks, elbows and knees — contested as forms (kata) and sparring (kumite).",
  longDescription:
    "Karate (空手, literally 'empty hand') is a striking martial art that developed in the Ryukyu Kingdom (modern Okinawa, Japan) between the 15th and 19th centuries, drawing on Chinese kung-fu and Okinawan te. Formalised and exported to mainland Japan in the 1920s by Gichin Funakoshi, it now has four major styles — Shotokan, Wado-ryu, Goju-ryu and Shito-ryu — plus the full-contact Kyokushin family. Competitive karate is contested in two disciplines: kata (choreographed solo forms scored by a panel) and kumite (structured sparring, usually to a fixed point total). Karate debuted at the Tokyo 2020 Olympics but was not retained for Paris 2024.",

  category: "combat-sports",
  subCategory: "striking martial art",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: false,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "JP",
  regionOfOrigin: "Ryukyu Islands (Okinawa)",
  estimatedOrigin: "15th-19th century Okinawa; codified in Japan c. 1920 (Gichin Funakoshi)",

  players: { min: 2, max: 2, note: "Kumite is 1v1 in weight and age classes; kata is judged individually or as a synchronised team of 3." },
  field: {
    surfaceName: "tatami",
    dimensions: "8 m × 8 m square competition area with a 1 m safety zone",
    description: "Padded tatami mats. Two athletes start facing each other 3 m apart, red belt (aka) versus blue belt (ao).",
  },
  equipment: [
    { name: "Karategi", description: "White cotton uniform — jacket, drawstring trousers and a coloured belt (obi)." },
    { name: "Coloured belt (obi)", description: "Signals rank — white (beginner) through many colours to black (dan grades)." },
    { name: "Fist protectors", description: "Padded gloves worn in WKF-style kumite competition." },
    { name: "Shin and instep guards", description: "Foam pads for kumite." },
    { name: "Mouthguard, groin guard, chest protector", description: "Mandatory protective equipment for WKF kumite." },
  ],
  duration: {
    approximateMinutes: 4,
    structure: "WKF senior kumite: 3 minutes (men) / 2 minutes (women). Kata: about 1-2 minutes per performance.",
    note: "Bout ends early at an 8-point lead or if a competitor is disqualified.",
  },
  objective: "In kumite, score more points than the opponent within the round via controlled strikes to permitted target areas. In kata, deliver a technically perfect prearranged form judged on precision, power and rhythm.",
  matchStructure:
    "Athletes enter the tatami, bow to each other and the referee. In kumite the referee calls 'shobu hajime' and the round begins; scoring pauses each time a point is awarded and resumes with 'tsuzukete hajime'. In kata each athlete performs the announced form; a panel of judges scores technical and athletic components, and the higher-scoring athlete advances.",

  basicRules: [
    { title: "Legal targets (kumite)", body: "Head, face, neck, abdomen, chest, back and sides. Strikes must be controlled — full-contact head strikes are illegal." },
    { title: "Scoring techniques", body: "Ippon (3 points) — jodan kick (kick to head) or any technique to a downed opponent. Waza-ari (2 points) — chudan kick (kick to body). Yuko (1 point) — punch to head or body." },
    { title: "Distance and control", body: "Techniques must be delivered with proper form, timing and control — hitting hard enough to injure results in warnings or disqualification." },
    { title: "Kata judging", body: "A panel of 5 or 7 judges scores technical performance (70%) and athletic performance (30%); highest and lowest scores discarded, remainder averaged." },
    { title: "Referee signals", body: "Referee calls 'yame' (stop) after scoring; kansa (chief judge) confirms points using coloured flags corresponding to aka/ao." },
  ],
  advancedRules: [
    { title: "Category 1 warning (chukoku, keikoku, hansoku-chui, hansoku)", body: "For excessive contact or dangerous behaviour — escalates from verbal warning to disqualification." },
    { title: "Category 2 warning", body: "For passivity, avoiding combat, faking injury, or leaving the tatami — same escalation ladder." },
    { title: "Senshu", body: "The competitor who scored the first uncontested point holds the 'senshu' advantage — wins in the event of a tie." },
  ],
  scoring: {
    summary: "Kumite: first to 8-point lead or highest score after time. Kata: judged panel score, best average wins.",
    breakdown: [
      { action: "Yuko (punch to head or body)", points: "1" },
      { action: "Waza-ari (kick to body)", points: "2" },
      { action: "Ippon (kick to head / throw + strike)", points: "3" },
      { action: "Hansoku (major penalty)", points: "opponent wins" },
    ],
    winCondition: "8-point lead, highest score at bout end, senshu tiebreak, disqualification (hansoku or shikkaku), or unanimous kata decision.",
  },
  penalties: [
    { title: "Chukoku", body: "First warning for a minor infraction — no point loss." },
    { title: "Keikoku", body: "Second warning; opponent awarded a yuko (1 point)." },
    { title: "Hansoku-chui", body: "Third warning; opponent awarded a waza-ari (2 points)." },
    { title: "Hansoku", body: "Disqualification for repeated fouls — automatic loss." },
    { title: "Shikkaku", body: "Immediate disqualification for serious misconduct; possible tournament ban." },
  ],

  officiating: {
    officials: ["Referee (shushin, in-tatami)", "Four corner judges (fukushin)", "Kansa (arbitrator)"],
    summary: "The referee controls the bout inside the tatami; four judges signal points and fouls with red/blue flags from the corners. A majority of officials must agree for a score to be awarded.",
  },
  governingBodies: [
    { name: "World Karate Federation", acronym: "WKF", founded: 1990, headquarters: "Madrid, Spain", website: "https://www.wkf.net" },
    { name: "International Traditional Karate Federation", acronym: "ITKF", founded: 1974, headquarters: "Warsaw, Poland" },
    { name: "World Kyokushin Karate Organization", acronym: "WKO", founded: 1994, headquarters: "Tokyo, Japan" },
  ],
  majorCompetitions: [
    { name: "Karate World Championships", frequency: "biennial", founded: 1970, region: "worldwide", note: "WKF senior event, in odd-numbered years." },
    { name: "Karate 1 Premier League", frequency: "annual", founded: 2011, region: "worldwide" },
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 2020, region: "worldwide", note: "Debut Tokyo 2020; not on the 2024 or 2028 programme." },
    { name: "WKF Youth League", frequency: "annual", region: "worldwide" },
  ],
  countriesPlayed: ["JP", "FR", "ES", "IT", "TR", "IR", "US", "EG", "AZ", "BR", "IN"],
  famousAthletes: [
    "Gichin Funakoshi (founder of Shotokan)",
    "Mas Oyama (founder of Kyokushin)",
    "Rafael Aghayev",
    "Alisa Buchinger",
    "Antonio Diaz",
    "Sandra Sánchez",
    "Ryo Kiyuna",
    "Steven Da Costa",
  ],
  records: [
    { title: "Most WKF World Championship gold medals (male)", holder: "Rafael Aghayev", value: "5 (2006-2016)", year: 2016 },
    { title: "First Olympic karate gold", holder: "Sandra Sánchez (kata) / Ryo Kiyuna (kata)", value: "Tokyo 2020", year: 2021 },
  ],

  variants: ["kyokushin-karate", "shotokan", "goju-ryu", "wado-ryu", "shito-ryu"],
  relatedSports: ["taekwondo", "kung-fu-wushu", "kickboxing", "muay-thai"],

  skills: ["timing", "speed", "focus (kime)", "flexibility", "spatial awareness", "discipline"],
  strategies: [
    { title: "Counter-strike style", body: "Wait for the opponent to commit, then intercept with a scoring technique — the classic 'ippon' style." },
    { title: "Pressure fighting", body: "Constantly close the gap to force the opponent into panic techniques." },
    { title: "Kick-first game", body: "Use long jodan kicks to score three points at once — favoured by tall competitors." },
  ],

  terminology: [
    { term: "Kata", meaning: "A prearranged sequence of movements simulating combat with imaginary opponents." },
    { term: "Kumite", meaning: "Sparring — competitive fighting between two karateka." },
    { term: "Kime", meaning: "The moment of focused impact — a technique's climax." },
    { term: "Kiai", meaning: "The sharp vocal shout accompanying a decisive technique." },
    { term: "Dojo", meaning: "The training hall — literally 'place of the Way'." },
    { term: "Sensei", meaning: "Teacher; used for any senior instructor holding a dan grade." },
    { term: "Obi", meaning: "The belt tied over the karategi, indicating rank." },
    { term: "Ippon / waza-ari / yuko", meaning: "3 / 2 / 1 point scores in WKF kumite." },
    { term: "Kyu / Dan", meaning: "Coloured-belt ranks (kyu, descending) then black-belt degrees (dan, ascending 1-10)." },
    { term: "Dojo kun", meaning: "The dojo oath — five ethical precepts recited at the end of training." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Basic stances (dachi)", body: "Zenkutsu-dachi (forward stance), kiba-dachi (horse stance), kokutsu-dachi (back stance)." },
      { title: "Basic strikes (uchi)", body: "Choku-zuki (straight punch), oi-zuki (lunge punch), gyaku-zuki (reverse punch)." },
      { title: "Basic kicks (geri)", body: "Mae-geri (front kick), yoko-geri (side kick), mawashi-geri (roundhouse)." },
      { title: "First kata", body: "Heian Shodan / Taikyoku Shodan — the foundational 20-move forms." },
    ] },
    { level: "intermediate", steps: [
      { title: "Combination techniques (renraku-waza)", body: "Chain 2-5 techniques with proper transitions." },
      { title: "Ippon kumite", body: "Prearranged one-step sparring drills." },
      { title: "Advanced kata", body: "Bassai Dai, Kanku Dai, Enpi, Jion — the intermediate kata syllabus." },
    ] },
    { level: "advanced", steps: [
      { title: "Jiyu kumite", body: "Free sparring — read distance, timing and the opponent's rhythm." },
      { title: "Competition kata", body: "Master three tournament-legal kata; tune performance for maximum panel score." },
      { title: "Dan-grade requirements", body: "Written thesis, teaching demonstration, and grading kata performed to standard." },
    ] },
  ],
  faq: [
    { question: "Which karate style is best for competition?", answer: "WKF-style (semi-contact) is the Olympic and World Championship discipline — most club karate is in this ruleset. Kyokushin is preferred if you want full-contact bare-knuckle sparring." },
    { question: "How long to earn a black belt?", answer: "In most WKF-affiliated dojos, 3-5 years of consistent training. Some traditional dojos require longer." },
    { question: "Is karate an Olympic sport?", answer: "It debuted at Tokyo 2020 but is not on the 2024 or 2028 programmes. Its Olympic future is currently uncertain." },
    { question: "What's the difference between karate and taekwondo?", answer: "Both are striking arts, but taekwondo (Korean) emphasises high, fast kicks (80%+ of scoring), while karate (Okinawan/Japanese) uses a more even mix of punches and kicks with a strong emphasis on kata." },
  ],

  wikipediaTitle: "Karate",
  sources: [
    { label: "Wikipedia — Karate", url: "https://en.wikipedia.org/wiki/Karate", publisher: "Wikipedia" },
    { label: "World Karate Federation — Kumite/Kata Rules", url: "https://www.wkf.net/imagenes/noticias/wkf_rules_2023.pdf", publisher: "WKF" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
  sportSpecific: {
    majorStyles: ["Shotokan", "Wado-ryu", "Goju-ryu", "Shito-ryu", "Kyokushin"],
    weightClassesKumite: [
      "Male -60 / -67 / -75 / -84 / +84 kg",
      "Female -50 / -55 / -61 / -68 / +68 kg",
    ],
  },
};

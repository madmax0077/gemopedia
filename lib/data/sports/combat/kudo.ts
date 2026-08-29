import type { Sport } from "@/lib/types";

export const kudo: Sport = {
  id: "kudo",
  slug: "kudo",
  name: "Kudo",
  officialName: "Kudo (Daido Juku Karate-do)",
  aliases: ["Daido Juku", "Kudo Karate", "Daidojuku"],
  shortDescription:
    "Japanese full-contact hybrid martial art founded 1981 by Azuma Takashi — combines Kyokushin karate strikes with judo throws + BJJ ground grappling; fighters wear the distinctive Neo-Head Gear (clear visored helmet) enabling full-power head strikes.",
  longDescription:
    "Kudo is a comprehensive Japanese hybrid martial art founded in 1981 by Azuma Takashi (a former Kyokushin karate All-Japan champion) as 'Daido Juku Karate-do' — later renamed Kudo in 2001 to reflect its evolution beyond pure karate. It combines Kyokushin full-contact striking (punches, kicks, knees, elbows), judo-style throws and takedowns, and Brazilian Jiu-Jitsu ground submissions. The defining innovation is the Neo-Head Gear (NHG) — a clear polycarbonate visored helmet with padding that allows full-power head strikes (including face punches) without the risk of cuts, eye injuries, or immediate KOs, giving Kudo its distinctive 'full-force karate with real head shots' identity. Kudo is contested under the Daido Juku International Kudo Federation (KIF), with the biennial Kudo World Championships held since 2001. Weight classes AND height + weight sum ('index') classes ensure fair matchups. The sport is Japan's answer to MMA — created before UFC, with a distinctly Japanese ruleset emphasizing budo (martial way) philosophy alongside competitive combat. Popular in Russia, Japan, and Kazakhstan; growing globally.",

  category: "combat-sports",
  subCategory: "Japanese hybrid MMA / karate + judo + BJJ",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",

  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Tokyo — Daido Juku Honbu, Tokyo); popular Russia + Central Asia",
  estimatedOrigin: "Founded 1981 by Azuma Takashi as Daido Juku Karate-do; renamed Kudo 2001; World Championships since 2001",

  players: { min: 2, max: 2, note: "1v1 competition; team scores at national championships." },
  field: {
    surfaceName: "Padded competition ring / mat",
    dimensions: "8 × 8 m tatami area with 1 m safety border",
    description: "Standard tatami matting like judo; some events use elevated platform (like karate); World Championships use flat padded floor.",
  },
  equipment: [
    { name: "Neo-Head Gear (NHG)", description: "Signature Kudo equipment: clear polycarbonate visor + padded helmet; enables full-power head strikes; mandatory at all competitions." },
    { name: "Kudogi (uniform)", description: "Modified karate/judo gi — reinforced for grappling; blue or white based on assigned corner." },
    { name: "Fingerless gloves", description: "MMA-style open-palm gloves permitting grip for grappling; padded knuckles for striking." },
    { name: "Mouthguard (mandatory)", description: "Boil-and-bite or custom." },
    { name: "Groin protector + chest guard (women)", description: "Standard protective gear." },
    { name: "Shin pads (optional at some events)", description: "Junior + amateur may wear; senior international events often bare-shin." },
  ],
  duration: {
    approximateMinutes: 3,
    structure: "3-minute round (extended to 5 min for title matches); overtime rounds possible; KO/submission/decision.",
  },
  objective:
    "Score decisively against opponent through strikes, throws, and submissions — OR force submission via strike-out (KO), tap-out (submission), or referee stop.",
  matchStructure:
    "Match: 1 round × 3 minutes (title fights: 5 min or 2 × 3 min). Fighters exchange strikes standing, transition to throws/takedowns, engage in ground grappling. Match ends: KO (10-count), TKO (referee stop), submission (tap), or decision (higher score at time).",

  basicRules: [
    { title: "Full-contact striking + grappling", body: "Punches, kicks, knees, elbows, throws, ground grappling, submissions ALL legal. Only truly banned: eye gouges, biting, groin strikes, throat strikes." },
    { title: "Head strikes require Neo-Head Gear", body: "NHG mandatory; enables face punches + head kicks + head-clinch strikes without immediate KO or laceration risk." },
    { title: "Weight class AND index class", body: "Kudo scores fighters by (weight kg + height cm) 'index'. Both variables prevent tall-vs-short mismatches beyond pure weight." },
    { title: "3-minute rounds", body: "Standard: 1 round × 3 min. Title / final: 5 min or 2 × 3 min. Overtime golden score if tied after regulation." },
    { title: "10-count for KO", body: "Fighter down + unable to continue in 10 seconds = KO loss. Standing 8-count for stunned but conscious." },
    { title: "Ground time limit", body: "Ground fighting limited to 30 seconds per engagement; stalemate = stand-up + reset. Prevents extended ground stalling." },
    { title: "Submission via tap or referee stop", body: "Chokes + joint locks legal — fighter can tap. Referee will stop when fighter cannot intelligently defend." },
  ],
  advancedRules: [
    { title: "Point scoring system", body: "Judges score exchanges: strikes to head/body, throws (2 pts), submissions attempts. Ippon = decisive knockdown or throw = win." },
    { title: "'Kansetsu-waza' (joint lock) + 'Shime-waza' (chokes) permitted", body: "Full BJJ-style submissions legal. Signature Kudo grappling: karate strikes into throw into arm bar." },
    { title: "Kudo Karate Grand Prix format", body: "Elite events run open-weight brackets with index-class matchups; single-elimination tournament in 1 day." },
    { title: "Kata component (traditional)", body: "Kudo retains traditional karate kata (forms) for grading + separate kata competitions." },
    { title: "Belt ranking system", body: "10 kyu grades → shodan (1st dan black belt) → up to 10th dan; requires kata + kumite + shiai (competition) proficiency." },
  ],
  scoring: {
    summary: "Judged decision if no finish. KO / TKO / submission = instant win. Judges score aggression, effective strikes, throws, control.",
    winCondition: "KO / TKO / submission = automatic win. Decision = judge scoring based on effective techniques.",
    breakdown: [
      { action: "KO / TKO", points: "Automatic win" },
      { action: "Submission", points: "Automatic win" },
      { action: "Decisive throw (ippon-equivalent)", points: "Possible instant win" },
      { action: "Effective strike / throw", points: "Half-point / point scored" },
      { action: "Judges' decision (no finish)", points: "Higher score wins" },
    ],
  },
  penalties: [
    { title: "Illegal strike (groin, throat, eyes)", body: "Point deduction to DQ depending on severity." },
    { title: "Excessive ground stalling", body: "Referee restart; repeated = point deduction." },
    { title: "Illegal submission (spine lock, heel hook depending on rules)", body: "Point deduction to DQ; some events allow all locks, others restrict." },
    { title: "Unsporting behavior", body: "Point deduction; DQ possible for repeated." },
  ],

  positions: [
    { name: "Standing striker", role: "Karate-influenced striking exchanges." },
    { name: "Clinch grappler", role: "Judo-style throw + takedown position." },
    { name: "Top ground control", role: "BJJ-style dominant ground position; submission attacks." },
    { name: "Bottom (guard-like)", role: "Defensive ground position; looking for sweep or submission." },
    { name: "Corner / Cornerman", role: "Coach + between-round advice + water." },
  ],
  officiating: {
    officials: ["1 Referee (mat control)", "3 Judges (side scoring)", "Ringside doctor", "Timekeeper"],
    summary: "KIF-standard officiation: 1 mat referee + 3 judges scoring cards. Kudo-specific rules require officials trained in both striking AND grappling scoring criteria.",
  },

  governingBodies: [
    { name: "Kudo International Federation (KIF)", founded: 2001, headquarters: "Tokyo, Japan", website: "https://kudointernational.com" },
    { name: "Daido Juku World Federation", founded: 1981, headquarters: "Tokyo, Japan" },
    { name: "Russian Kudo Federation", founded: 1994, headquarters: "Moscow, Russia" },
  ],
  majorCompetitions: [
    { name: "Kudo World Championships", frequency: "quadrennial", founded: 2001, region: "rotating host (Japan, Russia, Kazakhstan)" },
    { name: "Kudo All-Japan Championships", frequency: "annual", founded: 1981, region: "Tokyo, Japan" },
    { name: "Kudo European Championships", frequency: "biennial", founded: 2004, region: "Europe" },
    { name: "Kudo Asian Championships", frequency: "biennial", founded: 2005, region: "Asia" },
  ],
  countriesPlayed: ["JP", "RU", "KZ", "UA", "BY", "AM", "GE", "MN", "IN", "IT", "FR", "DE", "US", "BR"],
  famousAthletes: [
    "Azuma Takashi (JP, founder of Kudo/Daido Juku; former Kyokushin All-Japan champion)",
    "Ivan Zaytsev (RU, multi-time World Champion — dominant heavyweight)",
    "Grigori Kadyrov (RU, Kudo World Champion)",
    "Alexander Karlovich (RU, Kudo World Championships gold)",
    "Genki Yamamoto (JP, Kudo All-Japan multiple times)",
    "Andrey Chekhonin (RU, Kudo European + World medalist)",
  ],
  records: [
    { title: "Founding of Daido Juku (Kudo predecessor)", holder: "Azuma Takashi", value: "Founded 1981 as full-contact karate hybrid", year: 1981 },
    { title: "First Kudo World Championships", holder: "Kudo World Federation", value: "Tokyo 2001; became quadrennial event", year: 2001 },
    { title: "Russian dominance", holder: "Russia national team", value: "Wins majority of Kudo World Championship medals consistently", year: 2020 },
    { title: "Neo-Head Gear innovation", holder: "Daido Juku (Azuma Takashi)", value: "Enables full-power head strikes safely — enables sport's identity", year: 1981 },
  ],

  variants: ["kudo-full-contact", "daido-juku-original-karate-style", "kudo-junior-restricted-contact"],
  relatedSports: ["kyokushin-karate", "mixed-martial-arts", "judo", "brazilian-jiu-jitsu", "sambo"],

  skills: [
    "full-range striking (karate base)",
    "throw + takedown (judo base)",
    "ground grappling + submissions (BJJ base)",
    "transitioning between ranges seamlessly",
    "conditioning (3-min high-intensity multi-round)",
    "chin durability + head-gear management",
  ],
  strategies: [
    { title: "Cross-train all three ranges", body: "Kudo is truly hybrid — pure strikers get taken down + submitted; pure grapplers get knocked out standing. Must train karate + judo + BJJ." },
    { title: "Use NHG advantage", body: "Neo-Head Gear enables face punches unavailable in most karate rulesets. Set up straight punches to face; opponents unaccustomed struggle to defend." },
    { title: "30-second ground time strategy", body: "Ground time limited — quickly attempt submission or advance position. Stalling = restart. Explosive ground offense." },
    { title: "Throws as scoring wins", body: "Ippon-quality throw can win match instantly. Judo throws remain highest-percentage decisive technique." },
    { title: "Manage index-class matchups", body: "Fighting a taller opponent in same weight = long reach disadvantage. Study opponent's index; adjust range accordingly." },
    { title: "Kyokushin-style body work", body: "Ground-and-pound not allowed after 30s; use standing body kicks + knees to accumulate damage." },
  ],

  terminology: [
    { term: "Kudo", meaning: "'The Way of the Empty Fist'; renamed 2001 from 'Daido Juku Karate-do'." },
    { term: "Daido Juku", meaning: "'Great Path School' — original name of Azuma Takashi's system." },
    { term: "Neo-Head Gear (NHG)", meaning: "Clear-visored padded helmet enabling full-power head strikes." },
    { term: "Index", meaning: "Height (cm) + Weight (kg); Kudo's dual weight classification metric." },
    { term: "Ippon", meaning: "Decisive score — perfect throw, KO, submission = instant win." },
    { term: "Waza-ari", meaning: "Half-point score — significant technique but not match-ending." },
    { term: "Kata", meaning: "Traditional karate forms retained in Kudo grading." },
    { term: "Shiai", meaning: "Competition / match." },
    { term: "Kyu", meaning: "Rank grade (10 kyu = beginner white belt, 1 kyu = brown belt)." },
    { term: "Dan", meaning: "Black-belt rank (1st dan = shodan; up to 10th dan)." },
    { term: "Kumite", meaning: "Sparring / free-fighting practice." },
    { term: "KIF", meaning: "Kudo International Federation — world governing body (2001)." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Find a KIF-affiliated dojo", body: "Rare outside Japan + Russia + Kazakhstan. KIF lists national federations. In West: karate + BJJ + judo cross-training approximates the syllabus." },
        { title: "Master karate strikes first", body: "Kudo's striking base is Kyokushin. 6+ months of Kyokushin karate provides foundational punching + kicking." },
        { title: "Add judo throws + BJJ ground", body: "After striking foundation: add judo for throws + BJJ for ground game. Full hybrid training necessary." },
      ],
    },
    {
      level: "intermediate",
      steps: [
        { title: "Compete at national level", body: "Amateur competitions available in KIF-member countries; Kudo All-Japan open to non-Japanese with sponsorship." },
        { title: "Earn shodan (1st dan black belt)", body: "Requires kata + kumite + shiai + demonstrated technique. Typical timeline: 4–6 years dedicated training." },
        { title: "Study Russian championship footage", body: "Russian Kudo is technically brilliant; footage available online. Study Ivan Zaytsev + Grigori Kadyrov approaches." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Qualify for World Championships", body: "Quadrennial Kudo Worlds; qualification via national federation + international results." },
        { title: "Compete + teach", body: "Advanced Kudo practitioners typically compete + open own dojo; help grow the sport internationally." },
        { title: "Cross to MMA (some fighters)", body: "Kudo hybrid base transfers well to MMA; some Kudo veterans compete successfully in Bellator + Rizin." },
      ],
    },
  ],

  faq: [
    { question: "What is Kudo?", answer: "A Japanese hybrid martial art founded 1981 combining Kyokushin karate striking, judo throws, and BJJ ground grappling. The defining feature is the Neo-Head Gear (NHG) — a clear visored helmet enabling full-power head strikes safely. Kudo is Japan's answer to MMA — created before UFC — with a Japanese budo (martial way) philosophy alongside competitive combat." },
    { question: "How is Kudo different from MMA?", answer: "Similarities: full-contact hybrid; strikes + grappling + submissions all legal. Differences: (1) Kudo requires NHG head gear (enables face strikes safely). (2) Ground time limited to 30 seconds per engagement (prevents extended ground stalling). (3) Ippon-style scoring can end match early (like judo). (4) Kudo retains karate rank / kata tradition. (5) Kudo is smaller globally — mostly Japan + Russia + Central Asia. MMA is more open format; Kudo is more structured Japanese sport." },
    { question: "Is Kudo dangerous?", answer: "Less than pure MMA due to NHG. Face punches don't cut skin; KOs less common (helmet padding). Injury rate is lower than pure MMA or unpadded karate. Ground time limits prevent extended damage. Fatal injuries essentially unheard of at sanctioned Kudo events. That said, it's full-contact combat — bruises, sprains, minor injuries expected." },
    { question: "Where can I train Kudo?", answer: "Japan (~500 dojos), Russia (~200 dojos), Kazakhstan, Ukraine, Belarus (~50 each). Sparse but growing in Europe (Italy, France, Germany). Rare in North America — best bet is cross-training Kyokushin + judo + BJJ + attending KIF international seminars. KIF's website lists affiliated federations." },
    { question: "Is Kudo in the Olympics?", answer: "No. KIF has expressed interest in Olympic recognition but hasn't achieved IOC endorsement. Kudo remains a specialty sport rather than a globally-recognized Olympic discipline. Its Olympic prospects are limited compared to Kudo's peer sports (karate, judo already in Olympics)." },
    { question: "Who founded Kudo and why?", answer: "Azuma Takashi (born 1949), a former All-Japan Kyokushin champion. He wanted a martial art that combined the striking depth of Kyokushin with the grappling depth of judo + BJJ — while allowing full-power head strikes safely via the Neo-Head Gear. Founded 1981 as Daido Juku Karate-do; renamed Kudo 2001 to reflect its evolution beyond pure karate." },
  ],

  wikipediaTitle: "Kūdō",
  sources: [
    { label: "Kudo International Federation (KIF)", url: "https://kudointernational.com", publisher: "KIF" },
    { label: "Wikipedia — Kūdō", url: "https://en.wikipedia.org/wiki/K%C5%ABd%C5%8D", publisher: "Wikipedia" },
    { label: "Daido Juku Honbu (Tokyo HQ)", url: "https://daidojuku.com", publisher: "Daido Juku" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

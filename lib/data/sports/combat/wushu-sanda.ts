import type { Sport } from "@/lib/types";

export const wushuSanda: Sport = {
  id: "wushu-sanda",
  slug: "wushu-sanda",
  name: "Wushu Sanda",
  officialName: "Wushu Sanda (武術散打)",
  aliases: ["Sanda", "Chinese Kickboxing", "Professional Sanda"],
  shortDescription:
    "Modern competition kickboxing variant of Chinese wushu — full-contact with punches, kicks, takedowns + throws on elevated lei tai platform. IWUF-governed; distinct from Wushu Taolu (forms). Sanda is the competitive sparring format; also known as Sanshou 散手.",
  longDescription:
    "Wushu Sanda (武術散打, 'wushu free striking') is the modern full-contact competition sparring format of Chinese wushu — as opposed to Wushu Taolu (forms/routines). Developed 1960s by Chinese military from traditional wushu combat applications; formalised as IWUF competition sport from 1990s. Full arsenal: punches, kicks (including spinning), takedowns, and throws — but no ground fighting or elbows/knees to head. Signature elevated 'lei tai' platform (2m high, 8m×8m, no ropes) — throwing opponent off scores 2 points + reset. Amateur uses gloves + headguard + chest protector + shin pads; professional bare-head with lighter gloves. IWUF Sanda World Championships biennial since 1991; Sanda in Asian Games since 1990. Sanda cross-training produced MMA fighters like Cung Le, Muslim Salikhov, and Zhang Weili. Note: 'Sanshou' and 'Sanda' refer to the same sport (Sanshou older name, Sanda modern IWUF-standardised name); this entry emphasises the IWUF competition ruleset.",
  category: "combat-sports",
  subCategory: "Chinese full-contact kickboxing (IWUF competition)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "CN",
  regionOfOrigin: "China (formalised by Chinese Wushu Association + IWUF)",
  estimatedOrigin: "Modern IWUF competition format standardised 1990; IWUF Sanda World Championships since 1991",
  players: { min: 2, max: 2, note: "1v1 on lei tai platform." },
  equipment: [
    { name: "10oz gloves (amateur)", description: "Amateur uses 10oz gloves; professional smaller lighter gloves." },
    { name: "Amateur head + chest + shin protection", description: "Amateur uses full protection; pro removes headguard + shin gear." },
    { name: "Lei tai platform (2m×8m×8m)", description: "Elevated open platform without ropes — 2m high, 8m square." },
    { name: "Kung fu shoes", description: "Thin-sole shoes for footwork + kicks." },
  ],
  duration: { approximateMinutes: 6, structure: "Best-of-3 rounds × 2 min with 1-min rest (amateur); 3×3 min pro." },
  objective: "Win by KO, TKO, throwing opponent off lei tai, or best-of-3 rounds by scorecard.",
  matchStructure: "Best-of-3 rounds; each round 2 min amateur / 3 min professional; lei tai platform throws score 2 pts + reset.",
  basicRules: [
    { title: "Punches + kicks + throws + takedowns", body: "Full arsenal minus ground fighting + elbow/knee to head." },
    { title: "Lei tai platform (no ropes)", body: "Throwing opponent off = 2 pts + round reset." },
    { title: "Round-by-round scoring", body: "Best-of-3 rounds; each decided by judges independently." },
  ],
  advancedRules: [
    { title: "Clinch 5-sec limit", body: "Referee separates after 5 sec if no takedown attempt." },
    { title: "Knockdown = round loss (3-count)", body: "3 knockdowns in one round = round loss (some rulesets)." },
    { title: "Weight classes 48kg-90kg+", body: "8+ weight classes for men + women." },
  ],
  scoring: {
    summary: "1 pt clean strike/kick; 2 pt throw/takedown; 2 pt + reset for platform expulsion; 3 knockdowns = round loss.",
    winCondition: "KO, TKO, platform expulsion, or best-of-3 rounds by scorecard.",
    breakdown: [
      { action: "Clean strike/kick", points: "1 pt" },
      { action: "Throw / takedown", points: "2 pt" },
      { action: "Throw off platform", points: "2 pt + reset" },
    ],
  },
  penalties: [
    { title: "Illegal strike (elbow/knee to head, groin)", body: "-1 to -3 pts depending on severity; DQ for serious." },
    { title: "Excessive clinch (>5 sec without attempt)", body: "Referee separation; repeat = warning." },
    { title: "Falling off own platform", body: "1 pt to opponent." },
  ],
  positions: [{ name: "Sanda fighter", role: "Complete kickboxer + wrestler — striking, kicking, takedowns, throws.", count: 1 }],
  officiating: { officials: ["1 platform referee", "3 side judges", "Head judge", "Timekeeper"], summary: "Platform referee controls action; side judges score independently per round." },
  governingBodies: [
    { name: "International Wushu Federation (IWUF)", founded: 1990, headquarters: "Beijing, China" },
    { name: "Chinese Wushu Association", founded: 1958, headquarters: "Beijing, China" },
  ],
  majorCompetitions: [
    { name: "IWUF Sanda World Championships", frequency: "biennial", founded: 1991, region: "global" },
    { name: "Asian Games Sanda", frequency: "quadrennial", founded: 1990, region: "Asia" },
    { name: "Chinese National Sanda Championships", frequency: "annual", founded: 1980, region: "China" },
    { name: "Kunlun Fight (pro promotion)", frequency: "monthly", founded: 2014, region: "China" },
  ],
  countriesPlayed: ["CN", "RU", "IR", "US", "BR", "IT", "VN", "TH", "MN"],
  famousAthletes: [
    "Cung Le (USA/Vietnam) — Sanda world champion + UFC/Strikeforce",
    "Muslim Salikhov (Russia) — Sanda world champion + UFC welterweight",
    "Zhang Weili (China) — Sanda background before UFC women's strawweight championship",
    "Liu Hailong (China) — multi-time IWUF Sanda world champion",
  ],
  records: [
    { title: "IWUF Sanda Worlds established", holder: "IWUF", value: "First IWUF Sanda Worlds 1991; biennial format", year: 1991 },
    { title: "Sanda Asian Games debut", holder: "Sanda", value: "Sanda added to Asian Games program 1990 Beijing edition", year: 1990 },
  ],
  variants: ["sanshou-traditional-name", "sanda-professional", "sanda-amateur-headguard"],
  relatedSports: ["kung-fu", "wushu-taolu", "muay-thai", "kickboxing", "shuai-jiao"],
  skills: ["kicks", "punches", "throws", "takedowns", "platform positioning"],
  strategies: [
    { title: "Kick-catch counter-throw", body: "Catch opponent's kick + immediately execute bai (throw) — signature Sanda combo." },
    { title: "Platform-edge pressure", body: "Push opponent toward edge to force cautious defense or platform expulsion." },
    { title: "Spinning back-kick", body: "High-scoring signature offense — 1 pt clean strike." },
  ],
  terminology: [
    { term: "Sanda", meaning: "Free striking — modern IWUF name" },
    { term: "Sanshou", meaning: "Free hand — older name for same sport" },
    { term: "Lei tai", meaning: "Elevated platform ring (no ropes)" },
    { term: "Bai", meaning: "Throw" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Wushu foundation + basic Sanda", body: "Stance, punches, kicks, basic throws." }] },
    { level: "intermediate", steps: [{ title: "Full ruleset + amateur competition", body: "Bai/da/ti offensive levels, headguard sparring." }] },
    { level: "advanced", steps: [{ title: "Professional Sanda + international", body: "Bare-head pro rules, IWUF qualifying, MMA crossover." }] },
  ],
  faq: [
    { question: "Is Wushu Sanda the same as Sanshou?", answer: "Yes — Sanshou (older name) and Sanda (modern IWUF name) refer to the same sport. IWUF standardised 'Sanda' as competitive name from 1990s." },
    { question: "What's the difference between Sanda and Wushu Taolu?", answer: "Sanda is full-contact sparring competition; Wushu Taolu is choreographed forms + weapons routines competition. Both are IWUF-governed but distinct disciplines." },
  ],
  wikipediaTitle: "Sanshou",
  sources: [{ label: "Wikipedia — Sanshou", url: "https://en.wikipedia.org/wiki/Sanshou", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default wushuSanda;

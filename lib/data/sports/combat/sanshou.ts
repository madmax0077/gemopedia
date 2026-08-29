import type { Sport } from "@/lib/types";

export const sanshou: Sport = {
  id: "sanshou",
  slug: "sanshou",
  name: "Sanshou / Sanda",
  officialName: "Sanshou (散手) / Sanda (散打)",
  aliases: ["Wushu Sanda", "Chinese kickboxing", "Chinese Boxing"],
  shortDescription:
    "Chinese full-contact kickboxing with takedowns + throws — developed by Chinese military 1960s from traditional wushu combat applications. Rounded elevated 'lei tai' platform ring, no ropes. Governed by International Wushu Federation (IWUF); IWUF World Championships since 1991.",
  longDescription:
    "Sanshou (散手, 'free hand') or Sanda (散打, 'free striking') is Chinese full-contact kickboxing that adds takedowns + throws to punches + kicks — developed 1960s by the People's Liberation Army from traditional wushu combat applications (traditional Chinese wushu forms → practical sparring format). Signature elevated 'lei tai' platform (2m high, 8m×8m, no ropes) — points awarded for throwing opponent off platform or scoring clean strikes/takedowns. IWUF (International Wushu Federation) governs internationally; IWUF World Championships since 1991. Weight classes 48kg-90kg+ for men, 48kg-75kg+ for women. Signature techniques: bai (throw), da (strike), ti (kick), na (joint lock — professional only). Amateur uses head + torso protection; professional bare-head with mouthguard. Sanda MMA-crossover fighters include Cung Le, Zhang Weili (before her women's UFC title reign).",
  category: "combat-sports",
  subCategory: "Chinese full-contact kickboxing + throws",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "CN",
  regionOfOrigin: "China (developed by PLA military 1960s from wushu combat applications)",
  estimatedOrigin: "Developed 1960s by Chinese People's Liberation Army; IWUF World Championships since 1991",
  players: { min: 2, max: 2, note: "1v1 match." },
  equipment: [
    { name: "10oz gloves", description: "Amateur uses gloves; professional lighter gloves." },
    { name: "Amateur head + chest + shin protection", description: "Amateur uses head + torso + shin protection; pro removes head + shin gear." },
    { name: "Lei tai platform (2m×8m×8m)", description: "Elevated open platform without ropes — 2m high, 8m square." },
  ],
  duration: { approximateMinutes: 6, structure: "2-3 rounds × 2 min with 1-min rest." },
  objective: "Win by KO, TKO, throwing opponent off platform, or scorecard.",
  matchStructure: "2 rounds × 2 min (best-of-3); win by KO, TKO, throwing opponent off lei tai platform, or judges' decision.",
  basicRules: [
    { title: "Strikes + kicks + throws + takedowns", body: "Full arsenal — punches, kicks (including spinning), takedowns via bai (throw)." },
    { title: "Lei tai platform (no ropes)", body: "Throwing opponent off platform scores 2 points + reset." },
    { title: "Round-by-round scoring", body: "Best-of-3 rounds; each round decided by judges independently." },
  ],
  advancedRules: [
    { title: "3 offensive levels (bai, da, ti)", body: "Throw (bai), strike (da), kick (ti) — na joint locks pro-only." },
    { title: "Standing-clinch limit", body: "5-second clinch limit — referee separates after 5 sec if no takedown." },
  ],
  scoring: {
    summary: "Points per action: 1 pt clean strike/kick, 2 pt throw or platform expulsion; 3 knockdowns = round loss.",
    winCondition: "KO, TKO, platform expulsion, or best-of-3 rounds by scorecard.",
    breakdown: [
      { action: "Clean strike/kick", points: "1 pt" },
      { action: "Throw / takedown", points: "2 pt" },
      { action: "Throw off platform", points: "2 pt + reset" },
    ],
  },
  penalties: [
    { title: "Illegal strike (elbow, knee to head, groin)", body: "-1 to -3 pts depending on severity." },
    { title: "Excessive clinch (>5 sec no attempt)", body: "Referee separation; repeat = warning." },
    { title: "Falling off own platform", body: "1 pt to opponent." },
  ],
  positions: [{ name: "Sanda fighter", role: "Complete combatant — striking + kicking + takedowns + throws.", count: 1 }],
  officiating: { officials: ["1 platform referee", "3 side judges", "Head judge", "Timekeeper"], summary: "Platform referee controls action; side judges score independently." },
  governingBodies: [
    { name: "International Wushu Federation (IWUF)", founded: 1990, headquarters: "Beijing, China" },
    { name: "Chinese Wushu Association", founded: 1958, headquarters: "Beijing, China" },
  ],
  majorCompetitions: [
    { name: "IWUF Sanda World Championships", frequency: "biennial", founded: 1991, region: "global (host rotates)" },
    { name: "Asian Games Sanda", frequency: "quadrennial", founded: 1990, region: "Asia" },
    { name: "Chinese National Sanda Championships", frequency: "annual", founded: 1980, region: "China" },
  ],
  countriesPlayed: ["CN", "RU", "IR", "US", "BR", "IT", "VN", "TH"],
  famousAthletes: [
    "Cung Le (USA/Vietnam) — Sanda world champion + UFC/Strikeforce fighter",
    "Muslim Salikhov (Russia) — Sanda world champion + UFC welterweight",
    "Zhang Weili (China) — Sanda background before UFC women's strawweight champion",
    "Liu Hailong (China) — multi-time IWUF Sanda world champion",
  ],
  records: [
    { title: "IWUF Sanda World Championships founded", holder: "International Wushu Federation", value: "First IWUF Sanda Worlds held 1991; biennial format", year: 1991 },
    { title: "Asian Games medal sport", holder: "Sanda", value: "Sanda added to Asian Games program from 1990 Beijing edition", year: 1990 },
  ],
  variants: ["sanshou-traditional", "sanda-professional-bare-head", "sanda-amateur-headguard"],
  relatedSports: ["kung-fu", "muay-thai", "kickboxing", "wushu-taolu"],
  skills: ["kicks", "punches", "throws", "takedowns", "platform positioning"],
  strategies: [
    { title: "Kick-catch counter-throw", body: "Catch opponent's kick + immediately execute bai (throw) — signature Sanda combo." },
    { title: "Platform-edge pressure", body: "Push opponent toward platform edge to force cautious defense or attempt platform expulsion." },
    { title: "Spinning back-kick", body: "High-scoring signature offense — must land clean for 1 pt." },
  ],
  terminology: [
    { term: "Sanshou", meaning: "Free hand (older name)" },
    { term: "Sanda", meaning: "Free striking (modern name)" },
    { term: "Lei tai", meaning: "Elevated platform ring" },
    { term: "Bai", meaning: "Throw" },
    { term: "Da", meaning: "Strike" },
    { term: "Ti", meaning: "Kick" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Wushu foundation + basic Sanda", body: "Stance, punches, kicks, basic throw fundamentals." }] },
    { level: "intermediate", steps: [{ title: "Full Sanda ruleset + amateur competition", body: "Learn 3 offensive levels (bai/da/ti), amateur ruleset, headguard sparring." }] },
    { level: "advanced", steps: [{ title: "Professional Sanda + international qualifying", body: "Bare-head pro rules, IWUF qualifying, MMA crossover potential." }] },
  ],
  faq: [
    { question: "Is Sanshou the same as Sanda?", answer: "Yes — Sanshou (散手, older name) and Sanda (散打, modern) refer to the same sport. IWUF standardised 'Sanda' as the competitive name from 1990s onward." },
    { question: "What's the difference between Sanda and Muay Thai?", answer: "Sanda allows throws + takedowns + platform expulsion; Muay Thai bans throws (only clinch knees). Sanda uses elevated lei tai platform (no ropes); Muay Thai uses standard boxing ring." },
  ],
  wikipediaTitle: "Sanshou",
  sources: [{ label: "Wikipedia — Sanshou", url: "https://en.wikipedia.org/wiki/Sanshou", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default sanshou;

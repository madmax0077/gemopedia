import type { Sport } from "@/lib/types";

export const wushuTaolu: Sport = {
  id: "wushu-taolu",
  slug: "wushu-taolu",
  name: "Wushu Taolu",
  officialName: "Wushu Taolu (武術套路)",
  aliases: ["Chinese Wushu Forms", "Modern Wushu", "Contemporary Wushu"],
  shortDescription:
    "Chinese martial arts forms competition — standardised routines showcasing punches, kicks, jumps, weapons (dao/jian/gun/qiang) scored on technical difficulty, artistic performance, and quality. Governed by IWUF since 1990; World Wushu Championships biennial. Not currently Olympic (Youth Olympic 2014).",
  longDescription:
    "Wushu Taolu (武術套路, 'wushu routines/forms') is the choreographed forms + weapons competition division of modern Chinese martial arts — as opposed to Sanda (full-contact sparring). Standardised in 1958 by Chinese Wushu Association from thousands of regional traditional styles into competition-ready routines showcasing punches, kicks, jumps (including 720° tornado kick + 540° butterfly kick), and weapons (dao/jian/gun/qiang broadsword/straightsword/staff/spear). Judged on 3 components: (A) Quality of Movement (5.0 pts) — technique + power + coordination; (B) Overall Performance (3.0 pts) — rhythm + expression + music; (C) Difficulty (2.0 pts) — jumps + landings + connection difficulty. Total 10 points. Six competition events: Changquan (long fist), Nanquan (southern fist), Taijiquan (tai chi), Dao (broadsword), Jian (straight sword), Gun (staff), Qiang (spear), Nanquan-derived weapon variants. Governed by International Wushu Federation (IWUF, Beijing) — World Wushu Championships biennial since 1991. Wushu debuted at Youth Olympic Games 2014 Nanjing; not yet in Summer Olympics despite decades of petitioning.",
  category: "combat-sports",
  subCategory: "Chinese martial arts forms + weapons",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "CN",
  regionOfOrigin: "China (Chinese Wushu Association standardised 1958)",
  estimatedOrigin: "Standardised 1958 by Chinese Wushu Association from traditional wushu styles; IWUF Worlds since 1991; Youth Olympic 2014",
  players: { min: 1, max: 1, note: "Solo routine performance." },
  equipment: [
    { name: "Wushu uniform (Changpao)", description: "Silk long-sleeve top + loose trousers, coloured per athlete/team." },
    { name: "Dao (broadsword)", description: "Single-edge curved sword — length matches athlete height." },
    { name: "Jian (straight sword)", description: "Double-edge straight sword with tassel." },
    { name: "Gun (staff)", description: "6-foot wax-wood staff — flexible for whipping techniques." },
    { name: "Qiang (spear)", description: "Long spear with red tassel — length exceeds athlete height." },
    { name: "Kung fu shoes", description: "Thin-sole cotton shoes for grip + rotation." },
  ],
  duration: { approximateMinutes: 2, structure: "Individual routine 1 min 20 sec to 1 min 30 sec (Changquan/Nanquan); Taijiquan 5-6 min." },
  objective: "Perform choreographed routine scoring highest 5-judge panel total.",
  matchStructure: "Solo routines evaluated by 3 judging panels (Quality, Performance, Difficulty) — total 10 points.",
  basicRules: [
    { title: "Routine time limits", body: "Changquan/Nanquan 1:20-1:30; Taijiquan 5-6 min; strict enforcement." },
    { title: "Compulsory + optional routines", body: "IWUF Worlds uses compulsory routines; optional routines allow difficulty additions." },
    { title: "3 judging panels (A/B/C)", body: "A: Quality (5.0), B: Performance (3.0), C: Difficulty (2.0)." },
  ],
  advancedRules: [
    { title: "Difficulty (nandu) declarations", body: "Athletes pre-declare difficulty movements (720° tornado, 540° butterfly, C-C landing); judges verify + score." },
    { title: "Deductions for landing errors", body: "Fall = -0.30; step out of area = -0.10; time overage/underage = -0.10 per second." },
  ],
  scoring: {
    summary: "Total 10 points from 3 panels: A (Quality 5.0) + B (Performance 3.0) + C (Difficulty 2.0).",
    winCondition: "Highest total score across compulsory/optional routines.",
    breakdown: [
      { action: "A panel — Quality of Movement", points: "0-5.0" },
      { action: "B panel — Overall Performance", points: "0-3.0" },
      { action: "C panel — Difficulty", points: "0-2.0" },
    ],
  },
  penalties: [
    { title: "Time overage/underage", body: "-0.10 per second beyond time limit." },
    { title: "Fall or serious imbalance", body: "-0.30 per fall; -0.20 for touch." },
    { title: "Out of competition area", body: "-0.10 per step outside." },
  ],
  positions: [{ name: "Wushu athlete (wushuka)", role: "Solo forms + weapons performer.", count: 1 }],
  officiating: {
    officials: ["Chief judge (zongcaipan)", "5 A panel judges (Quality)", "3 B panel judges (Performance)", "3 C panel judges (Difficulty)", "Timekeeper", "Line judges"],
    summary: "3 independent judging panels; scores combined + averaged. Video review available.",
  },
  governingBodies: [
    { name: "International Wushu Federation (IWUF)", founded: 1990, headquarters: "Beijing, China" },
    { name: "Chinese Wushu Association", founded: 1958, headquarters: "Beijing, China" },
  ],
  majorCompetitions: [
    { name: "IWUF Wushu World Championships", frequency: "biennial", founded: 1991, region: "global (host rotates)" },
    { name: "Asian Games Wushu", frequency: "quadrennial", founded: 1990, region: "Asia" },
    { name: "Youth Olympic Games Wushu (debut)", frequency: "quadrennial", founded: 2014, region: "global (Nanjing)" },
    { name: "Chinese National Games Wushu", frequency: "quadrennial", founded: 1959, region: "China" },
  ],
  countriesPlayed: ["CN", "HK", "MO", "TW", "VN", "MY", "SG", "US", "GB", "FR", "IT", "BR", "RU", "IR"],
  famousAthletes: [
    "Jet Li (China) — 5× Chinese National Wushu Champion 1974-1979 before film career",
    "Zhao Qingjian (China) — multi-time IWUF World Wushu Champion",
    "Yuan Xiaochao (China) — Youth Olympic 2014 gold + multi-time World Champion",
  ],
  records: [
    { title: "Wushu Youth Olympic debut", holder: "IWUF", value: "Wushu debuted at Youth Olympic Games 2014 Nanjing", year: 2014 },
    { title: "Jet Li 5× consecutive Chinese Wushu Champion", holder: "Jet Li (Li Lianjie)", value: "5× Chinese National Wushu Champion 1974-1979 before film career", year: 1979 },
  ],
  variants: ["changquan", "nanquan", "taijiquan", "dao", "jian", "gun", "qiang", "nandao", "nangun"],
  relatedSports: ["kung-fu", "sanshou", "taijiquan", "karate-kata", "kobudo"],
  skills: ["stances", "kicks", "jumps", "weapons handling", "artistic performance", "difficulty landings"],
  strategies: [
    { title: "Nandu difficulty stacking", body: "Chain 720° tornado kick + 540° butterfly + C landing for maximum Difficulty panel score." },
    { title: "Performance rhythm to music", body: "IWUF now permits music accompaniment for some events; sync power moments to musical beats for B panel bonus." },
    { title: "Compulsory routine perfection", body: "For team qualifiers, master compulsory routines to 9.7+ scores rather than risky optional additions." },
  ],
  terminology: [
    { term: "Taolu", meaning: "Chinese for 'routine' or 'form'" },
    { term: "Changquan", meaning: "Long fist — most common wushu style" },
    { term: "Nanquan", meaning: "Southern fist — powerful shorter style" },
    { term: "Taijiquan", meaning: "Tai chi — slow flowing internal style" },
    { term: "Nandu", meaning: "Difficulty component" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Stances + basic movements", body: "Bow stance, horse stance, kicks, punches, basic Changquan first form." }] },
    { level: "intermediate", steps: [{ title: "Weapons + compulsory routines", body: "Dao, jian, gun, qiang weapons + IWUF compulsory routines." }] },
    { level: "advanced", steps: [{ title: "Difficulty (nandu) mastery + IWUF qualifying", body: "720° tornado kick, 540° butterfly, C-landing perfection + IWUF Worlds qualifying." }] },
  ],
  faq: [
    { question: "Is Wushu Taolu the same as Kung Fu?", answer: "Kung Fu is umbrella term for all Chinese martial arts (traditional + modern, thousands of styles). Wushu Taolu is the modern competition-standardised subset (formalised 1958)." },
    { question: "Is Wushu in the Olympics?", answer: "Not yet in Summer Olympics despite IWUF campaigns since 2001. Debuted at Youth Olympic Games 2014 Nanjing. Included in Asian Games since 1990." },
  ],
  wikipediaTitle: "Wushu (sport)",
  sources: [{ label: "Wikipedia — Wushu (sport)", url: "https://en.wikipedia.org/wiki/Wushu_(sport)", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default wushuTaolu;

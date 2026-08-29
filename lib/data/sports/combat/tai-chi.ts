import type { Sport } from "@/lib/types";

export const taiChi: Sport = {
  id: "tai-chi",
  slug: "tai-chi",
  name: "Tai Chi",
  officialName: "Tai Chi Chuan / Taijiquan",
  aliases: ["T'ai Chi", "Taiji", "Taijiquan", "Shadow Boxing"],
  shortDescription:
    "Ancient Chinese internal martial art performed as slow, flowing sequences that develop balance, body awareness, and health â€” practiced daily by 250 million people worldwide.",
  longDescription:
    "Tai Chi Chuan ('Supreme Ultimate Fist') is a Chinese internal martial art (neijia) developed in the 17th century, traditionally attributed to Zhang Sanfeng or the Chen family of Chen Village, Henan. Its five major family styles are Chen (original, explosive), Yang (most popular, gentle), Wu (compact), Sun (agile), and Wu(Hao). Health benefits (balance, cardiovascular, arthritis) are UNESCO-recognized. Tai Chi is featured in International Wushu Federation (IWUF) competitions and became UNESCO Intangible Cultural Heritage in 2020.",

  category: "combat-sports",
  subCategory: "Chinese internal martial art (neijia)",
  sportType: "individual",
  indoorOutdoor: "both",
  isProfessional: true,
  season: "year-round",
  era: "early-modern",
  popularity: "global",

  countryOfOrigin: "CN",
  regionOfOrigin: "Chen Village, Henan Province, China (Chen family, 17th century)",
  estimatedOrigin: "Chen style ~1600s (Chen Wangting); Yang style 1800s (Yang Luchan); IWUF competitions 1990; UNESCO listing 2020",

  players: { min: 1, max: 2, note: "Solo forms (taolu) common; push hands (tui shou) partner practice; full-contact San Shou competitive." },
  field: {
    surfaceName: "Open floor / mat",
    dimensions: "IWUF competition: 8Ã—8 m mat",
    description: "Sprung mat for competition; parks + gymnasiums + open spaces for daily practice." },
  equipment: [
    { name: "Comfortable clothing", description: "Traditional silk tai chi uniform OR modern athletic wear; flat-soled shoes." },
    { name: "Weapons (advanced)", description: "Straight sword (jian), sabre (dao), staff (gun), spear (qiang) for weapon forms." },
    { name: "Nothing else required", description: "Tai chi is entirely body-based; no props needed for basic practice." },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "Solo practice: 20-60 min daily. Competition form: 4-6 minutes. Group classes: 45-90 min." },

  objective:
    "Cultivate qi (internal energy), body awareness, and balance through slow flowing movement. Competitively: score maximum points on form + push-hands events.",
  matchStructure:
    "IWUF competition: solo form (4-6 min scored by judges) OR push-hands (2-3 rounds of 90 sec unbalancing opponent).",

  basicRules: [
    { title: "Slow continuous movement", body: "Traditional practice pace: 15-25 min per full 108-move Yang form." },
    { title: "Vertical spine + relaxed shoulders", body: "Every posture requires upright but relaxed alignment." },
    { title: "Weight shifting", body: "Constant single-leg weight shifts train balance; 70/30 or 100/0 principles." },
    { title: "Circular flowing", body: "No sharp angles; every direction change is a curve." },
    { title: "Breath coordination", body: "Inhale on opening/rising; exhale on closing/sinking movements." },
  ],
  advancedRules: [
    { title: "Push hands (tui shou)", body: "Partner sensitivity drills â€” feel + neutralize opponent's force." },
    { title: "Five family styles", body: "Chen (explosive), Yang (large + gentle), Wu (compact), Sun (agile), Wu-Hao (small)." },
    { title: "Neigong (internal work)", body: "Standing meditation + qigong develops the 'internal' aspect." },
    { title: "Application (fa jin)", body: "Explosive short-power release; hidden within slow form as martial application." },
  ],
  scoring: {
    summary: "Competition form scored on execution, difficulty, and traditional form accuracy (out of 10.0). Push hands scored on unbalance/uproot count.",
    winCondition: "Highest form score; push-hands winner unbalances opponent more times.",
    breakdown: [
      { action: "Form score (Nandu difficulty)", points: "Execution 5.0 + difficulty 5.0 = 10.0 max" },
      { action: "Push hands unbalance", points: "1 pt per uproot" },
      { action: "Push hands push out of ring", points: "3 pts (automatic round win)" },
    ],
  },
  penalties: [
    { title: "Missing move in form", body: "-0.1 to -0.5 per omission." },
    { title: "Falling in form", body: "-0.5 to -1.0." },
    { title: "Illegal push (strike, grip)", body: "Point deduction in push hands." },
  ],

  positions: [
    { name: "Practitioner", role: "Solo performer or partnered.", count: 1 },
    { name: "Sifu / Master", role: "Traditional Chinese title for teacher." },
    { name: "Push-hands partner", role: "Training or competition partner for tui shou.", count: 1 },
  ],
  officiating: {
    officials: ["IWUF-certified judges (competition)", "Sifu / lineage teachers (traditional)"],
    summary: "IWUF-certified judges for World Wushu Championships; traditional lineage teachers evaluate progress in traditional schools.",
  },

  governingBodies: [
    { name: "International Wushu Federation (IWUF)", founded: 1990, headquarters: "Beijing, China", website: "https://www.iwuf.org" },
    { name: "Chinese Wushu Association", founded: 1958, headquarters: "Beijing, China", website: "https://www.wushu.com.cn" },
  ],
  majorCompetitions: [
    { name: "IWUF World Wushu Championships (Taijiquan events)", frequency: "biennial", founded: 1991, region: "rotating" },
    { name: "World Tai Chi Chuan Championships", frequency: "biennial", founded: 2000, region: "rotating" },
    { name: "World Tai Chi + Qigong Day", frequency: "annual (last Saturday April)", founded: 1999, region: "global mass demonstration" },
  ],
  countriesPlayed: ["CN", "US", "GB", "DE", "FR", "JP", "KR", "AU", "MX", "IN", "SG", "MY"],
  famousAthletes: [
    "Chen Xiaowang (CN, 19th generation Chen family lineage holder)",
    "Chen Ziqiang (CN, current Chen Village 20th generation master)",
    "Cheng Man-ch'ing (CN, popularized Tai Chi in America 1960s)",
    "Ma Yueh-Liang (CN, Wu style master, lived to 98)",
    "Chen Peishan (CN, IWUF World Champion multiple)",
  ],
  records: [
    { title: "UNESCO Intangible Cultural Heritage", holder: "Tai Chi (People's Republic of China)", value: "Listed December 17, 2020", year: 2020 },
    { title: "Estimated global practitioners", holder: "Global", value: "250 million people practice regularly", year: 2020 },
    { title: "Largest mass demonstration", holder: "World Tai Chi Day", value: "Thousands of cities across 80+ countries", year: 2023 },
  ],

  variants: ["chen-style-tai-chi", "yang-style-tai-chi", "wu-style-tai-chi", "sun-style-tai-chi", "wushu-taijiquan"],
  relatedSports: ["wushu", "qigong", "baguazhang", "xingyiquan"],

  skills: [
    "balance + weight distribution",
    "body awareness (proprioception)",
    "breath coordination",
    "sensitivity (partner practice)",
    "patience + focus",
  ],
  strategies: [
    { title: "Sink your qi to dan tien", body: "Focus attention below navel; lowers center of gravity + calms mind." },
    { title: "Song (relaxed) not slack", body: "Muscles relaxed but structurally connected â€” not floppy." },
    { title: "Follow the master's rhythm", body: "Group practice sets pace; sync breathing + timing to teacher." },
    { title: "Push hands teaches application", body: "Solo form makes sense only after partner practice reveals martial intent." },
  ],

  terminology: [
    { term: "Qi", meaning: "Vital energy or life force â€” central to Tai Chi philosophy." },
    { term: "Dan tien", meaning: "Energy center below navel; focal point of practice." },
    { term: "Tui shou", meaning: "'Push hands' â€” sensitivity/martial partner practice." },
    { term: "Fa jin", meaning: "Explosive short-power release; hidden in slow form." },
    { term: "Song", meaning: "Relaxed but structurally connected muscle state." },
    { term: "Taolu", meaning: "Choreographed form; solo sequence of moves." },
    { term: "Sifu", meaning: "Teacher / master (traditional title)." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Find a lineage teacher", body: "Chen village, Yang family, or their disciples' lineages preferred over 'fitness Tai Chi' YouTube." },
        { title: "Learn 24 Beijing form", body: "Simplified 24-move form; excellent 6-month introduction." },
        { title: "Practice daily 15-20 min", body: "Consistency > duration; 15 min daily beats 2 hours weekly." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Learn 108 traditional Yang form", body: "Full-length form takes 20-25 min; represents complete martial system." },
        { title: "Study weapons + push hands", body: "Straight sword + push hands unlock martial applications." },
        { title: "Enter IWUF wushu competitions", body: "Taijiquan events at World Wushu Championships offer international ranking." },
      ],
    },
  ],

  faq: [
    { question: "Is Tai Chi a real martial art or just exercise?", answer: "Both. Practiced correctly it's a complete martial art with strikes, joint locks, and throws. Modern 'fitness Tai Chi' emphasizes the health aspect and skips application." },
    { question: "Which style should I learn?", answer: "Yang (most common, gentle) for health. Chen (original, more athletic) for martial content. Beijing 24-form is universal entry point." },
    { question: "How long to see benefits?", answer: "Balance + relaxation improvements: 2-4 weeks. Physical fitness gains: 3-6 months. Mastery: lifetime pursuit." },
    { question: "Is Tai Chi in the Olympics?", answer: "No â€” but wushu (which includes taijiquan) is a demonstration sport and IWUF is pushing for Olympic inclusion. Not yet confirmed for LA 2028." },
  ],

  sources: [
    { label: "Wikipedia â€” Tai chi", url: "https://en.wikipedia.org/wiki/Tai_chi", publisher: "Wikipedia" },
    { label: "IWUF official", url: "https://www.iwuf.org", publisher: "IWUF" },
    { label: "UNESCO Intangible Heritage â€” Tai Chi", url: "https://ich.unesco.org/en/RL/taijiquan-01493", publisher: "UNESCO" },
  ],
  wikipediaTitle: "Tai chi",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

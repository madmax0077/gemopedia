import type { Sport } from "@/lib/types";

export const sittingVolleyball: Sport = {
  id: "sitting-volleyball",
  slug: "sitting-volleyball",
  name: "Sitting Volleyball",
  officialName: "Sitting Volleyball (Paralympic)",
  aliases: ["Paravolley Sitting", "Paralympic Volleyball"],
  shortDescription:
    "PARALYMPIC volleyball for athletes with lower-limb disabilities. Players SIT on floor + must maintain hip contact with floor while playing ball. Court 10m × 6m (smaller than standing volleyball); net 1.15m (men) / 1.05m (women). Highly athletic + strategic. Originated 1956 Netherlands. Paralympic sport since 1980.",
  longDescription:
    "Sitting Volleyball is PARALYMPIC ADAPTATION of volleyball for athletes with LOWER-LIMB DISABILITIES (amputations, muscular disorders, spinal injuries). Players SIT on floor + must maintain HIP-TO-FLOOR CONTACT while playing ball (rising off floor called 'lifting' — technical fault). Originated 1956 NETHERLANDS as rehabilitation activity for wounded soldiers. Combined with earlier German 'sitzball' to become modern sitting volleyball. PARALYMPIC SPORT since ARNHEM 1980 (men); WOMEN'S sitting volleyball Paralympic since ATHENS 2004. GAMEPLAY: Court 10m × 6m (smaller than 18m × 9m standing volleyball); net 1.15m HIGH (men) / 1.05m (women) — lower than standing volleyball. 6 PLAYERS PER TEAM (same as standing). Rally scoring to 25 (best of 5 sets). Basic volleyball rules apply: 3 hits per side, service rotation, blocks + attacks. UNIQUE ELEMENT: BLOCKING THE SERVE ALLOWED (unlike standing). Player movement on floor by USING HANDS + REMAINING BODY as needed. Fast-paced, physical, highly skilled. IRAN + BOSNIA-HERZEGOVINA DOMINANT — Iranian men's team won 6 of last 7 Paralympic golds. Growing global sport — 60+ countries. Considered ONE OF MOST TECHNICALLY DEMANDING Paralympic sports due to compressed court + fast action.",
  category: "ball-sports",
  subCategory: "Paralympic seated volleyball for lower-limb disability athletes",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "NL",
  regionOfOrigin: "Netherlands (developed 1956 rehab program)",
  estimatedOrigin: "1956 Netherlands (rehabilitation for wounded soldiers); ISOD registered 1976; Paralympic Men 1980, Women 2004",
  players: { min: 12, max: 14, note: "6v6 on court; rosters 12." },
  field: { surfaceName: "indoor court", dimensions: "10m × 6m; net 1.15m men / 1.05m women", description: "Smaller than standing volleyball (18m × 9m); lower net for seated athletes." },
  equipment: [
    { name: "Volleyball (standard size)", description: "€30-80" },
    { name: "Net (1.15m men / 1.05m women)", description: "Adjustable competition net" },
    { name: "Athletes require lower-limb disability qualification", description: "Amputations, spinal injuries, muscular disorders" },
  ],
  duration: { approximateMinutes: 60, structure: "Best of 5 sets to 25 points (last set to 15); typical match 45-90 min." },
  objective: "Win 3 of 5 sets by scoring 25 points per set (with 2-point margin).",
  basicRules: [
    { title: "Players SIT + must maintain HIP-TO-FLOOR CONTACT while playing ball", body: "Rising off floor = 'lifting' = fault." },
    { title: "6 players per side; 3 hits per side maximum", body: "Same as standing volleyball." },
    { title: "Court 10m × 6m; net 1.15m men / 1.05m women (lower than standing)", body: "Compressed court + lower net make game fast." },
    { title: "BLOCKING THE SERVE ALLOWED (unlike standing volleyball)", body: "Adds attacking dimension." },
    { title: "Athletes must have qualifying LOWER-LIMB DISABILITY", body: "Classification MD (minimally disabled) or D (disabled)." },
    { title: "Rally scoring to 25 (2-point margin); best of 5 sets", body: "5th set to 15." },
  ],
  scoring: {
    summary: "Rally scoring — every rally scores 1 point. Best of 5 sets to 25 (2-point margin).",
    breakdown: [
      { action: "Rally won", points: "1 point" },
      { action: "Ace serve", points: "1 point" },
      { action: "Block for point", points: "1 point" },
      { action: "Set won (25 pts, 2-margin)", points: "1 set toward match" },
      { action: "3 sets won", points: "Match win" },
    ],
    winCondition: "Win 3 of 5 sets by scoring 25 (2-margin, 15 in 5th).",
  },
  governingBodies: [
    { name: "World ParaVolley (WPV)", founded: 1980, headquarters: "Bonn, Germany", website: "https://www.worldparavolley.org/" },
    { name: "International Paralympic Committee (IPC)", founded: 1989, headquarters: "Bonn, Germany" },
  ],
  majorCompetitions: [
    { name: "Paralympic Games (sitting volleyball)", frequency: "every 4 years", founded: 1980, region: "worldwide" },
    { name: "World ParaVolley World Championships", frequency: "every 4 years", founded: 1983, region: "worldwide" },
    { name: "European Sitting Volleyball Championships", frequency: "every 2 years", founded: 1993, region: "Europe" },
  ],
  countriesPlayed: ["IR", "BA", "DE", "US", "NL", "BR", "RU", "CN", "EG", "RS", "UA"],
  famousAthletes: [
    "Sadegh Bigdeli (Iran) — Legendary center, multiple Paralympic gold",
    "Morteza Mehrzad (Iran) — Tallest Paralympic sitting volleyball player (2.46m); dominant blocker",
    "Various Iranian + Bosnian dynasty players (Paralympic golds 2004-2024)",
  ],
  variants: [
    "sitting-volleyball-standard-Paralympic-6v6",
    "sitting-volleyball-recreational-adaptive-classes",
    "standing-volleyball-for-disability-different-classification",
  ],
  relatedSports: ["volleyball", "beach-volleyball", "wheelchair-basketball", "goalball"],
  skills: ["hand-arm speed (compensating for no leg movement)", "core strength (seated stability)", "quick lateral floor movement", "reading opponent's attacks"],
  strategies: [
    { title: "Fast game — compressed court + lower net = quick reactions", body: "Reaction speed critical." },
    { title: "Blocking the serve — special sitting volleyball tactic", body: "Aggressive on serves." },
    { title: "Setter positioning even more critical (small court)", body: "Precision setting essential." },
    { title: "Iranian dynasty strategy — height + power dominance", body: "Elite tall players like Mehrzad transform game." },
  ],
  terminology: [
    { term: "Sitting Volleyball", meaning: "Paralympic seated variant of volleyball." },
    { term: "Lifting", meaning: "Fault — rising off floor while playing ball." },
    { term: "MD / D classification", meaning: "Minimally disabled / Disabled — Paralympic eligibility categories." },
    { term: "WPV", meaning: "World ParaVolley — governing body since 1980." },
    { term: "Sitzball", meaning: "German 1950s precursor sport influencing sitting volleyball." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Contact national Paralympic committee for classification", body: "Confirm qualifying disability." },
      { title: "Find local adaptive volleyball program", body: "Growing but limited outside Iran/Bosnia/US/Germany." },
    ]},
    { level: "intermediate", steps: [
      { title: "National-level competition", body: "Structured Paralympic pipeline." },
    ]},
    { level: "advanced", steps: [
      { title: "National Paralympic team", body: "Elite training + competition." },
      { title: "Paralympic Games qualification", body: "Every 4 years." },
    ]},
  ],
  faq: [
    { question: "What is Sitting Volleyball?", answer: "PARALYMPIC ADAPTATION of volleyball for athletes with LOWER-LIMB DISABILITIES. Players SIT on floor + must maintain hip contact with floor while playing ball. Court 10m × 6m (smaller than standing); net 1.15m men / 1.05m women (lower). 6 players per team, 3 hits per side, rally scoring to 25. BLOCKING SERVES ALLOWED (unlike standing). Paralympic sport since 1980 (men) + 2004 (women). Highly athletic + strategic. Iran + Bosnia-Herzegovina dominant globally. Growing sport with 60+ countries participating." },
    { question: "How is Sitting Volleyball different from Standing Volleyball?", answer: "COURT: SITTING 10m × 6m; STANDING 18m × 9m. NET: SITTING 1.15m/1.05m; STANDING 2.43m/2.24m. PLAYERS: BOTH 6v6. HITS: BOTH max 3. RALLIES: SITTING faster + more reactive (smaller court + lower net); STANDING more spatial/athletic. BLOCKS OF SERVE: SITTING ALLOWED; STANDING NOT ALLOWED. Sitting focuses on UPPER-BODY power + core strength + quick reactions; Standing full-body athleticism. Both use rally scoring to 25 (best of 5)." },
    { question: "Why is Iran so dominant in Sitting Volleyball?", answer: "IRAN has WON 6 OF LAST 7 PARALYMPIC MEN'S GOLD MEDALS. Reasons: (1) National investment in Paralympic sports (Iran-Iraq War (1980-1988) left many wounded veterans needing rehabilitation; sport became institutionalized). (2) Cultural PRIDE + government funding. (3) TALL PLAYERS like MORTEZA MEHRZAD (2.46m — one of tallest Paralympic athletes ever) provide dominant blocking. (4) Strong domestic league + academies. Bosnia-Herzegovina also strong due to Yugoslav War veterans' rehabilitation pipeline. Sitting volleyball offers powerful example of Paralympic sport intersecting with recent conflicts." },
  ],
  wikipediaTitle: "Sitting volleyball",
  sources: [
    { label: "World ParaVolley (WPV)", url: "https://www.worldparavolley.org/", publisher: "WPV" },
    { label: "Wikipedia — Sitting volleyball", url: "https://en.wikipedia.org/wiki/Sitting_volleyball", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};

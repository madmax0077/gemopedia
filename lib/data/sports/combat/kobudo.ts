import type { Sport } from "@/lib/types";

export const kobudo: Sport = {
  id: "kobudo",
  slug: "kobudo",
  name: "Okinawan Kobudō",
  officialName: "Ryūkyū Kobudō",
  aliases: ["琉球古武道", "Ryukyu Kobudo", "Okinawan weapons martial art"],
  shortDescription:
    "Traditional Okinawan weapons martial art formalised late 19th century — practices bo (staff), sai, tonfa, nunchaku, kama (sickle), eku (oar). Complementary to karate; competition scored on kata, kumite, and bunkai. Preserved by Taira Shinken's Ryukyu Kobudo Hozon Shinko-kai since 1955.",
  longDescription:
    "Okinawan Kobudō ('old martial way') is the traditional weapons martial art of Okinawa (formerly Ryukyu Kingdom), formalised in the late 19th century though rooted in centuries-old peasant + Pechin-warrior weapons practice. Practices bo (6-foot staff), sai (twin truncheons), tonfa (side-handle batons), nunchaku (linked sticks), kama (sickle), eku (oar), tekko (knuckle), tinbe-rochin (shield + short spear), kuwa (hoe). Traditionally taught alongside karate as complementary art. Competition scored on kata (solo form 1-3 min), team kata (3-person synchronised 2-4 min), and bunkai demonstration (application 60-90 sec). Preserved by Taira Shinken's Ryukyu Kobudo Hozon Shinko-kai (est. 1955, Naha) and World Kobudo Federation. Not currently Olympic — karate debuted at Tokyo 2020 with kata but not Kobudo.",
  category: "combat-sports",
  subCategory: "traditional weapons martial art",
  sportType: "mixed",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "JP",
  regionOfOrigin: "Okinawa (Ryukyu Kingdom), Japan",
  estimatedOrigin: "Rooted in centuries-old Pechin-warrior weapons practice; formalised late 19th century (~1895); Taira Shinken preservation society 1955",
  players: { min: 1, max: 3, note: "1 in solo kata + kumite; 3 in team kata." },
  equipment: [
    { name: "Bo (6-foot staff)", description: "Tapered hardwood (usually red/white oak) staff ~180cm — foundational Kobudō weapon." },
    { name: "Sai (twin truncheons)", description: "Iron/steel truncheons with side prongs (yoku) — used in pairs for trapping + striking." },
    { name: "Tonfa (side-handle batons)", description: "Wooden batons with 90° side handle — millstone-handle origin, PR-24 police baton ancestor." },
    { name: "Nunchaku (linked sticks)", description: "Two wooden sticks connected by cord/chain — popularised by Bruce Lee." },
    { name: "Karategi + belt", description: "Traditional karate uniform with obi rank belt." },
  ],
  duration: { approximateMinutes: 3, structure: "Kata 1-3 min; team kata 2-4 min; bunkai 60-90 sec." },
  objective: "Demonstrate technical precision, kime (focus), power, timing, breathing in kata; effective application in bunkai; controlled contact in kumite.",
  matchStructure: "Three disciplines: solo kata, team kata (3-person synchronised), bunkai demonstration (application 60-90 sec).",
  basicRules: [
    { title: "Weapon inspection pre-match", body: "All weapons inspected for safety + regulation compliance." },
    { title: "Formal bow protocol", body: "Bow to shomen + opponent + judges before + after kata/kumite." },
    { title: "Kata scored 0-10 per judge", body: "5-judge panel; drop high + low; average middle 3-5." },
  ],
  advancedRules: [
    { title: "Bunkai realism weighting", body: "Bunkai judging emphasises realism + application clarity beyond form." },
    { title: "Uncontrolled contact in kumite", body: "-1 pt per infraction; 3 = DQ." },
  ],
  scoring: {
    summary: "Kata scored 0-10 by 5 judges (drop high/low, avg middle 3); bunkai adds realism weighting.",
    winCondition: "Highest averaged score after 5-judge panel evaluation.",
    breakdown: [
      { action: "Solo kata", points: "0-10 per judge" },
      { action: "Team kata synchronisation", points: "0-10 per judge" },
      { action: "Bunkai application", points: "0-10 per judge" },
    ],
  },
  penalties: [
    { title: "Uncontrolled contact in kumite", body: "-1 pt per infraction; 3 = DQ." },
    { title: "Dropped weapon in kata", body: "-1 to -2 pts; intentional throw + catch = no penalty." },
    { title: "Etiquette breach", body: "Failure to bow = verbal warning; repeat = -0.5 pt." },
  ],
  positions: [{ name: "Kobudōka", role: "Solo weapons practitioner, team form member, or kumite competitor.", count: 1 }],
  officiating: {
    officials: ["Chief referee (shushin)", "4 corner judges (fukushin)", "Kansa (jury supervisor)", "Timekeeper", "Weapon inspector"],
    summary: "5-judge panel; corner judges independently score with flags/scoreboards; kansa overrules irregularities.",
  },
  governingBodies: [
    { name: "Ryukyu Kobudo Hozon Shinko-kai", founded: 1955, headquarters: "Naha, Okinawa" },
    { name: "World Kobudo Federation (WKF-Kobudo)", founded: 1975, headquarters: "Tokyo, Japan" },
    { name: "Okinawa Kobudo Doshin-kai", founded: 1970, headquarters: "Okinawa, Japan" },
  ],
  majorCompetitions: [
    { name: "World Kobudo Championships", frequency: "biennial", founded: 1980, region: "global (host rotates)" },
    { name: "All Japan Kobudo Championships", frequency: "annual", founded: 1962, region: "Japan" },
    { name: "Okinawan Traditional Kobudo Games", frequency: "annual", founded: 1975, region: "Okinawa" },
  ],
  countriesPlayed: ["JP", "US", "BR", "DE", "GB", "FR", "IT", "AR"],
  famousAthletes: [
    "Taira Shinken (Japan, 1897-1970) — preservation society founder, systematised Okinawan kata",
    "Various Okinawan grandmasters (10th dan)",
  ],
  records: [
    { title: "Ryukyu Kobudo Hozon Shinko-kai founding", holder: "Taira Shinken", value: "Oldest continuous Kobudō preservation society; still active in Naha, Okinawa", year: 1955 },
    { title: "Most decorated kata champion", holder: "Various Okinawan grandmasters (10th dan)", value: "Multi-decade competition careers", year: 2020 },
  ],
  variants: ["ryukyu-kobudo", "matayoshi-kobudo", "yamane-ryu-bojutsu"],
  relatedSports: ["karate", "kendo", "iaido", "haidong-gumdo"],
  skills: ["weapon striking", "trapping", "kata precision", "bunkai analysis"],
  strategies: [
    { title: "Bo mid-distance control", body: "Use 6-ft bo to maintain optimum range — thrust to keep out, sweep on entry, spinning strike on retreat." },
    { title: "Sai trap-and-strike", body: "Deflect opponent's weapon with sai fork, twist to lock, hammer-strike with second pommel." },
    { title: "Tonfa rotation defense", body: "Twirl tonfa around lead hand to redirect strikes, then punch through with reinforced fist-behind-tonfa." },
  ],
  terminology: [
    { term: "Bo", meaning: "6-foot wooden staff" },
    { term: "Sai", meaning: "Iron truncheon with side prongs" },
    { term: "Tonfa", meaning: "Side-handle baton" },
    { term: "Nunchaku", meaning: "Two sticks linked by cord/chain" },
    { term: "Bunkai", meaning: "Application analysis of kata" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Bo (6-foot staff) basics", body: "Grip variations, blocking, striking, first kata (Shushi no Kon / Sakugawa)." }] },
    { level: "intermediate", steps: [{ title: "Sai + tonfa introduction", body: "Twirling, blocking, trapping, kata (Chatan Yara no Sai, Yaraguwa no Sai)." }] },
    { level: "advanced", steps: [{ title: "Advanced weapons + bunkai", body: "Kama, nunchaku, eku, tekko, tinbe-rochin; full bunkai analysis and multi-weapon kumite." }] },
  ],
  faq: [
    { question: "How is Kobudō different from karate?", answer: "Karate is empty-hand (kara = empty); Kobudō is weapon-based (ko = old, bu = martial, dō = way). Traditionally taught together as complementary arts." },
    { question: "Is Kobudō in the Olympics?", answer: "No — Kobudō is not Olympic. Karate debuted at Tokyo 2020 with kata but not Kobudō weapons." },
  ],
  wikipediaTitle: "Kobudō",
  sources: [{ label: "Wikipedia — Kobudō", url: "https://en.wikipedia.org/wiki/Kobud%C5%8D", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default kobudo;

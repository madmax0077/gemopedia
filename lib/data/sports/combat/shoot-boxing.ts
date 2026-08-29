import type { Sport } from "@/lib/types";

export const shootBoxing: Sport = {
  id: "shoot-boxing",
  slug: "shoot-boxing",
  name: "Shoot Boxing",
  officialName: "Shoot Boxing (SB)",
  aliases: ["シュートボクシング"],
  shortDescription:
    "Japanese stand-up hybrid founded 1985 by Caesar Takeshi — combines kickboxing (punches + kicks + knees) with standing submissions (chokes, arm-locks, wrist-locks). No ground fighting. Signature event: annual S-Cup World Tournament in Tokyo since 1995.",
  longDescription:
    "Shoot Boxing (SB) is a Japanese stand-up hybrid combat sport founded 1985 by Caesar Takeshi (former shootfighter + kickboxer). Combines full-contact kickboxing (punches + kicks + knees + clinch) with standing submissions (chokes, arm-locks, wrist-locks, throws) — but disallows ground fighting entirely: if opponent falls, the standing submission must be released and fight restarts standing. Signature event is the annual S-Cup World Tournament in Tokyo (est. 1995) — 8-fighter single-elimination featuring international kickboxing + submission specialists. Netherlands' Andy Souwer is the most decorated S-Cup winner with 4 titles (2003, 2004, 2005, 2008). Women's Girls S-Cup added 2013.",
  category: "combat-sports",
  subCategory: "hybrid stand-up striking + submission",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "JP",
  regionOfOrigin: "Tokyo, Japan (founded 1985 by Caesar Takeshi)",
  estimatedOrigin: "Founded 1985 by Caesar Takeshi; S-Cup annual grand-prix since 1995",
  players: { min: 2, max: 2, note: "1v1 match." },
  equipment: [
    { name: "10 oz gloves", description: "Standard boxing gloves; open-palm allowed for submissions." },
    { name: "Boxing ring (5.5-6.1m)", description: "4-rope canvas ring — no cage." },
    { name: "Mouthguard + groin protector", description: "Mandatory safety gear." },
  ],
  duration: { approximateMinutes: 12, structure: "3 or 5 rounds × 3 min with 1-min rest." },
  objective: "Defeat opponent by KO, standing submission, or judges' decision.",
  matchStructure: "3 or 5 rounds of 3 minutes with 1-minute rest — standing submissions must be released when opponent falls; knockdown counts + standing 8-count.",
  basicRules: [
    { title: "Standing submissions legal", body: "Chokes, arm-locks, wrist-locks legal from standing position." },
    { title: "No ground fighting", body: "If any fighter falls, standing sub released; fight restarts standing." },
    { title: "10-point must scoring", body: "10-9 rounds; bonuses for knockdowns + subs." },
  ],
  advancedRules: [
    { title: "Standing 8-count", body: "Referee gives 8-count on knockdown before continuing." },
    { title: "3-knockdown rule per round", body: "3 knockdowns in a round = TKO." },
  ],
  scoring: {
    summary: "10-point must with bonuses for standing submissions + knockdowns.",
    winCondition: "KO, standing submission, TKO, or judges' decision.",
    breakdown: [
      { action: "Knockdown", points: "+1 in scoring round" },
      { action: "Standing submission attempt", points: "Bonus toward round score" },
    ],
  },
  penalties: [
    { title: "Ground strikes", body: "Illegal — instant warning; repeat = point deduction." },
    { title: "Submission held after fall", body: "Immediate point deduction; repeat = DQ." },
    { title: "Groin/rabbit strike", body: "Warning + point deduction." },
  ],
  positions: [{ name: "Shoot Boxer", role: "Complete stand-up fighter — kickboxing + submission.", count: 1 }],
  officiating: {
    officials: ["1 mat referee", "3 judges (10-point must)", "Timekeeper"],
    summary: "Referee enforces standing rule + submission release; judges score striking + submission attempts.",
  },
  governingBodies: [{ name: "Shoot Boxing Association (SBA)", founded: 1985, headquarters: "Tokyo, Japan" }],
  majorCompetitions: [
    { name: "S-Cup World Tournament", frequency: "annual", founded: 1995, region: "Tokyo, Japan" },
    { name: "Girls S-Cup (women)", frequency: "annual", founded: 2013, region: "Tokyo, Japan" },
  ],
  countriesPlayed: ["JP", "NL", "TH", "BR", "FR", "US"],
  famousAthletes: [
    "Andy Souwer (Netherlands) — 4× S-Cup winner (2003, 2004, 2005, 2008)",
    "Rena Kubota (Japan) — long-reigning women's Super Lightweight champion",
    "Caesar Takeshi (Japan) — founder + trainer",
  ],
  records: [
    { title: "Most S-Cup wins", holder: "Andy Souwer (Netherlands)", value: "4× S-Cup winner (2003, 2004, 2005, 2008)", year: 2008 },
    { title: "Longest reign — Super Lightweight (women)", holder: "Rena Kubota (Japan)", value: "Multi-year reign in Girls S-Cup era", year: 2018 },
  ],
  variants: ["s-cup-tournament", "girls-s-cup"],
  relatedSports: ["kickboxing", "muay-thai", "shooto", "k-1"],
  skills: ["kickboxing", "clinch work", "standing submissions", "throws"],
  strategies: [
    { title: "Snatch guillotine off catch", body: "Slip opponent's punch and immediately shoot for standing guillotine — Souwer signature." },
    { title: "Wrist-lock trap in clinch", body: "Enter Thai clinch, isolate wrist, apply kote-gaeshi twist." },
    { title: "Low-kick then arm-drag", body: "Chip lead leg, when guard drops apply standing rear naked choke." },
  ],
  terminology: [
    { term: "S-Cup", meaning: "Annual world grand-prix tournament" },
    { term: "Standing 8-count", meaning: "Referee 8-count on knockdown" },
    { term: "Kote-gaeshi", meaning: "Wrist-turning submission" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Kickboxing foundation", body: "Jab, cross, hook, kicks, knees, clinch entries." }] },
    { level: "intermediate", steps: [{ title: "Standing submission grammar", body: "Guillotine, standing arm-bar, kimura, wrist-lock, standing choke." }] },
    { level: "advanced", steps: [{ title: "S-Cup ruleset sparring", body: "No-ground submission chains + tournament pressure." }] },
  ],
  faq: [
    { question: "How is Shoot Boxing different from K-1?", answer: "Shoot Boxing allows standing submissions; K-1 is pure striking. Both ban ground fighting." },
    { question: "What is the S-Cup?", answer: "Annual 8-fighter single-elimination tournament in Tokyo (since 1995) drawing international kickboxing + submission specialists." },
  ],
  wikipediaTitle: "Shoot boxing",
  sources: [{ label: "Wikipedia — Shoot boxing", url: "https://en.wikipedia.org/wiki/Shoot_boxing", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default shootBoxing;

import type { Sport } from "@/lib/types";

export const k1: Sport = {
  id: "k-1",
  slug: "k-1",
  name: "K-1",
  officialName: "K-1 (Kickboxing)",
  aliases: ["K-1 Kickboxing", "K-1 Rules"],
  shortDescription:
    "Japanese kickboxing promotion (founded 1993) — signature 'K-1 Rules' format (3 rounds × 3 min, elbow-restricted, no clinch) became dominant kickboxing ruleset worldwide. Golden Age (1993-2010) featured Ernesto Hoost, Peter Aerts, Mirko Cro Cop, Semmy Schilt; revived post-2014 in Japan + global expansion.",
  longDescription:
    "K-1 is a Japanese kickboxing promotion founded 1993 by Kazuyoshi Ishii (Seidokaikan karate) — the 'K' stands for Karate, Kickboxing, Kung Fu, Kempo. Introduced a unified kickboxing ruleset ('K-1 Rules': 3 × 3-min rounds, gloved, no elbows, restricted clinch/knee usage) that became the dominant kickboxing format worldwide. Golden Age (1993-2010) with the K-1 World Grand Prix (annual 8-man elimination tournament in Tokyo Dome) featured legendary champions Ernesto Hoost (4× champion), Peter Aerts (3×), Semmy Schilt (4×), Mirko Cro Cop, Alistair Overeem, Badr Hari, Remy Bonjasky, Andy Hug. Company bankruptcy 2011, revived 2014 by K-1 Global as K-1 Japan. Alongside GLORY Kickboxing + ONE Championship Kickboxing, K-1 is one of the top-3 kickboxing promotions globally.",

  category: "combat-sports",
  subCategory: "kickboxing promotion + ruleset",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",
  countryOfOrigin: "JP",
  regionOfOrigin: "Tokyo, Japan (founded by Kazuyoshi Ishii, Seidokaikan karate)",
  estimatedOrigin: "Founded 1993 by Kazuyoshi Ishii; first K-1 World Grand Prix 1993 Tokyo Dome",

  players: { min: 2, max: 2, note: "1v1 kickboxing match." },
  equipment: [
    { name: "Boxing gloves (8-10oz)", description: "Standard kickboxing gloves." },
    { name: "Mouthguard + groin protector", description: "Standard combat sports gear." },
    { name: "Kickboxing shorts", description: "Longer than boxing trunks; allow high kicks." },
  ],
  duration: { approximateMinutes: 15, structure: "3 rounds × 3 min (standard); championship 5 × 3 min; 1-min rest between rounds." },
  objective: "Win by KO/TKO or by judges' decision after 3 rounds.",
  matchStructure: "3-round (or 5) kickboxing bout with K-1 Rules ruleset; judges score each round 10-9 or 10-8.",

  basicRules: [
    { title: "3 rounds × 3 minutes (standard bout)", body: "Championship bouts 5 × 3 min. 1-min rest between rounds." },
    { title: "Legal targets: head + body (front + side)", body: "No strikes to back of head, spine, groin, or knees." },
    { title: "Legal strikes", body: "Punches (all boxing), kicks (all levels), knees (single knee to clinch = OK; multiple = warning)." },
    { title: "Illegal strikes", body: "Elbows (illegal in K-1 Rules — distinct from Muay Thai), extended clinch (broken by ref after single strike)." },
    { title: "Scoring per round", body: "10-point must system; damage + effective aggression + ring generalship + defense." },
    { title: "Knockdown rule", body: "3 knockdowns in a round = TKO; standing 8-count on knockdowns." },
  ],
  advancedRules: [
    { title: "K-1 Rules vs. Muay Thai vs. Dutch kickboxing", body: "K-1 restricts elbows + clinch (unlike Muay Thai) but allows more knee use than Dutch kickboxing." },
    { title: "Grand Prix format", body: "Annual 8-man single-elimination tournament in one night — legendary K-1 World GP format (Golden Age 1993-2010)." },
    { title: "Weight classes", body: "K-1 currently: -55, -60, -65, -70, -75, -80, -85, -90, +90 kg." },
    { title: "Yakuza-associated collapse (2011)", body: "Original K-1 collapsed 2011 amid financial + criminal allegations; revived 2014 by K-1 Global." },
  ],
  scoring: {
    summary: "10-point must system: 3 judges score each round; majority decides.",
    winCondition: "KO / TKO / decision. Championship fight = 5 rounds.",
    breakdown: [
      { action: "Round win (dominant)", points: "10-9 (or 10-8 with knockdown)" },
      { action: "3 knockdowns in round", points: "TKO" },
    ],
  },
  penalties: [
    { title: "Illegal elbow strike", body: "Warning → point deduction → DQ." },
    { title: "Extended clinch / grappling", body: "Ref breaks + warning + point deduction possible." },
    { title: "Low blow", body: "Point deduction + fighter recovery time." },
  ],

  positions: [{ name: "Kickboxer (fighter)", role: "Attacks with punches + kicks + limited knees; defends with guard + footwork.", count: 1 }],
  officiating: {
    officials: ["Referee (in-ring)", "3 judges (ringside)", "Doctor + cornermen"],
    summary: "1 referee + 3 judges scoring cards; doctor on hand for medical checks.",
  },

  governingBodies: [{ name: "K-1 Global (current owner)", founded: 2014, headquarters: "Tokyo, Japan", website: "https://www.k-1.co.jp" }],
  majorCompetitions: [
    { name: "K-1 World Grand Prix (Golden Age)", frequency: "annual", founded: 1993, region: "Tokyo Dome (defunct 2010; revived variant)" },
    { name: "K-1 World GP Series (current)", frequency: "3-5 events per year", founded: 2014, region: "Japan + international" },
    { name: "K-1 Amateur circuits", frequency: "monthly", founded: 2000, region: "Japan + Europe + North America" },
  ],
  countriesPlayed: ["JP", "NL", "TH", "BR", "US", "CA", "AU", "FR", "IT", "DE", "GB", "RU", "CN", "PL", "TR", "GR", "HR", "worldwide"],
  famousAthletes: [
    "Ernesto Hoost (Netherlands, 4× K-1 World Grand Prix champion 1997, 1999, 2000, 2002)",
    "Peter Aerts (Netherlands, 3× champion 1994, 1995, 1998; 'The Dutch Lumberjack')",
    "Semmy Schilt (Netherlands, 4× champion 2005, 2006, 2007, 2009)",
    "Mirko Cro Cop (Croatia, K-1 GP 2012; famous left high kick)",
    "Andy Hug (Switzerland, K-1 GP 1996 champion; iconic kakato-geri)",
    "Alistair Overeem (Netherlands, K-1 GP 2010 champion; transitioned to MMA UFC)",
    "Badr Hari (Morocco/Netherlands, notorious K-1 heavyweight)",
    "Remy Bonjasky (Netherlands, 3× champion 2003, 2004, 2008; 'The Flying Gentleman')",
  ],
  records: [
    { title: "Most K-1 World Grand Prix titles", holder: "Ernesto Hoost + Semmy Schilt", value: "4 championships each (tied record)", year: 2009 },
    { title: "Dominant kickboxing promotion 1993-2010", holder: "K-1 (Golden Age)", value: "K-1 World GP was #1 kickboxing event globally for ~17 years; Tokyo Dome final drew 70,000+ live", year: 2007 },
    { title: "Ruleset adoption", holder: "K-1 Rules ruleset", value: "K-1 Rules became the international standard for kickboxing outside Muay Thai + Dutch kickboxing", year: 2010 },
  ],

  variants: ["k-1-rules-standard", "k-1-max-lightweight-70kg-tournament", "k-1-heavyweight-open-weight", "k-1-amateur-circuit"],
  relatedSports: ["kickboxing", "muay-thai", "boxing", "savate", "sanda", "glory-kickboxing", "one-championship-kickboxing"],

  skills: ["boxing (all punches)", "high + low kicks", "single knee strikes (limited clinch)", "footwork", "guard defense", "counter-striking + timing", "ring generalship"],
  strategies: [
    { title: "Low-kick attrition", body: "Repeated inside/outside low kicks disable opponent mobility over rounds; hallmark Dutch K-1 style." },
    { title: "High kick KO threat", body: "Head-height roundhouse kick as knockout weapon; used late in rounds when opponent's hands drop." },
    { title: "Clinch avoidance", body: "K-1 Rules restrict clinch use; superior stand-up striking preferred over Thai-style clinch battles." },
    { title: "Grand Prix tournament pacing", body: "Historically 3 fights in one night; conserve energy in first fight, peak in final." },
  ],

  terminology: [
    { term: "K-1 Rules", meaning: "K-1's standardized kickboxing ruleset (3×3min, no elbows, limited clinch)." },
    { term: "World Grand Prix", meaning: "Annual 8-man single-elimination heavyweight tournament (Golden Age)." },
    { term: "K-1 Max", meaning: "-70kg lightweight tournament format." },
    { term: "Kakato-geri", meaning: "Axe kick — signature strike of Andy Hug." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Train at kickboxing gym (any K-1/Dutch style)", body: "Look for gym with K-1 Rules sparring." },
      { title: "Start amateur K-1 circuit", body: "Japan + Europe + US amateur K-1 leagues serve as pipeline." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete on K-1 Global professional card", body: "K-1 Global runs 3-5 events per year with international fighter roster." },
      { title: "Transition to MMA (Overeem model)", body: "K-1 champions historically transition to MMA (UFC, PRIDE); K-1 striking pedigree is elite." },
    ]},
  ],

  faq: [
    { question: "What's the difference between K-1 and Muay Thai?", answer: "K-1 Rules restrict elbow strikes (illegal) and clinch/knee combat (broken quickly by ref). Muay Thai allows unrestricted elbows + clinch fighting + multiple knees. K-1 is more punch/kick focused; Muay Thai more knee/elbow/clinch heavy. Both are kickboxing derivatives." },
    { question: "Is K-1 still active?", answer: "Yes — the original K-1 collapsed in 2011 amid financial + yakuza-related issues, but K-1 Global revived the brand in 2014. Currently runs 3-5 events per year in Japan + international dates. Not as dominant as during Golden Age (1993-2010) — GLORY Kickboxing + ONE Championship Kickboxing now share top-tier space." },
    { question: "Who were the best K-1 fighters ever?", answer: "The Golden Age (1993-2010) heavyweights are the consensus GOATs: Ernesto Hoost (4× champion), Peter Aerts (3×), Semmy Schilt (4×), Andy Hug (1996 champion), Mirko Cro Cop, Remy Bonjasky (3×). Netherlands + Dutch kickboxing school dominated the heavyweight division." },
  ],

  wikipediaTitle: "K-1",
  sources: [
    { label: "K-1 official website", url: "https://www.k-1.co.jp", publisher: "K-1 Global" },
    { label: "Wikipedia — K-1", url: "https://en.wikipedia.org/wiki/K-1", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

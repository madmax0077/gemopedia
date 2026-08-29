import type { Sport } from "@/lib/types";

export const campdrafting: Sport = {
  id: "campdrafting",
  slug: "campdrafting",
  name: "Campdrafting",
  officialName: "Campdrafting",
  aliases: ["Camp Drafting", "Camp Draft", "Aussie Campdrafting"],
  shortDescription:
    "Australian equestrian sport originating from cattle-mustering — rider selects one head of cattle from a mob (the 'camp'), separates + controls it, then drafts it around a figure-8 course of pegs. Iconic outback rodeo event; ~30,000 members via Australian Campdraft Association.",
  longDescription:
    "Campdrafting is an Australian equestrian sport unique to Australia — originating in 19th-century outback cattle-mustering practice. A rider mounted on a stock horse enters a 'camp' (small yard) containing 6-8 head of cattle, selects ONE animal to 'cut out' (separate from mob), demonstrates horsemanship + control by keeping the animal separated for ~5-10 seconds in the camp, then rides out into the main arena where the animal must be 'drafted' (guided) around a figure-8 course of pegs, ending at a gate. Judges score on horsemanship + cut-out difficulty + course completion time + animal control. Australian Campdraft Association (ACA) governs ~30,000 members + 300+ campdrafts per year. Signature Australian equestrian tradition alongside polocrosse + stockman's challenges. Top events: Warwick Gold Cup (Queensland, oldest campdraft since 1927), Landmark Classic Cup, Paradise Lagoons Campdraft, Australian Campdraft Association National Finals.",

  category: "equestrian-sports",
  subCategory: "stock-horse cattle-drafting equestrian sport",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "AU",
  regionOfOrigin: "Australian outback (Queensland + New South Wales cattle country)",
  estimatedOrigin: "19th century Australian cattle station mustering practice; formalized competitive event Warwick Gold Cup 1927 (Queensland); Australian Campdraft Association founded 1930s",

  players: { min: 1, max: 1, note: "Individual sport; 1 rider per run." },
  equipment: [
    { name: "Australian stock horse", description: "Working stock horse breed (Australian Stock Horse, Quarter Horse, or crossbreds) with cattle-handling instinct." },
    { name: "Stock saddle + bridle", description: "Traditional Australian stock saddle for extended cattle work." },
    { name: "Riding attire (moleskins + Akubra hat traditional)", description: "Traditional bush riding attire." },
    { name: "Cattle (typically 6-8 head)", description: "Bos taurus cattle in the camp; beast selected by rider." },
    { name: "Arena with camp + course pegs", description: "Small camp yard + main arena with 3 pegs in figure-8 configuration." },
  ],
  duration: { approximateMinutes: 2, structure: "Each run 45-90 seconds; competition may include hundreds of runs across days." },
  objective: "Select cattle from camp + demonstrate horsemanship in cut-out + guide cattle through figure-8 course + finish through gate.",
  matchStructure: "Individual runs judged; scored 0-100 points across cut-out + course + gate segments.",

  basicRules: [
    { title: "Enter camp + select cattle", body: "Rider enters camp yard with 6-8 head; selects ONE animal to cut out." },
    { title: "Cut out + control in camp (~5-10 seconds)", body: "Rider maneuvers horse to separate selected animal from mob + hold separated for judged period; scored on horsemanship." },
    { title: "Draft through course of pegs (figure-8)", body: "Guide cattle through arena course: around peg 1 → around peg 2 → around peg 3 → through gate." },
    { title: "Finish through gate", body: "Run ends when cattle passes through gate at end of course." },
    { title: "Scored 0-100 by judges", body: "Judges score on horsemanship + cut-out + course completion + animal control." },
  ],
  advancedRules: [
    { title: "Losing animal (disqualification)", body: "If cattle escapes control before completing course, run scored zero." },
    { title: "Time limit", body: "Usually 45-60 second time limit; time-out = incomplete run." },
    { title: "Peg-going penalty", body: "Missing a peg or going wrong direction around peg = deduction." },
    { title: "Divisions", body: "Open (any horse/rider), maiden (novice horse), ladies, juvenile, novice." },
  ],
  scoring: {
    summary: "0-100 points per run; judges score cut-out (0-25), course (0-70), gate (0-5).",
    winCondition: "Highest points across final round wins.",
    breakdown: [
      { action: "Cut-out horsemanship + camp work", points: "0-25" },
      { action: "Course peg-work + animal control", points: "0-70" },
      { action: "Gate finish", points: "0-5" },
      { action: "Lose animal (control failure)", points: "0 total" },
    ],
  },
  penalties: [
    { title: "Lose animal", body: "Zero score." },
    { title: "Miss peg / wrong direction", body: "Deduction." },
    { title: "Cruelty to animal", body: "DQ + potential ban." },
  ],

  positions: [{ name: "Rider (campdrafter)", role: "Mounted rider directing horse to cut + control cattle through course.", count: 1 }],
  officiating: {
    officials: ["Judges (2-3, arena)", "Course marshal", "Timekeeper"],
    summary: "2-3 judges score each run + course marshal ensures course completion + timekeeper records run duration.",
  },

  governingBodies: [
    { name: "Australian Campdraft Association (ACA)", founded: 1965, headquarters: "Warwick, Queensland, Australia", website: "https://www.campdraft.com.au" },
    { name: "State associations (QLD, NSW, VIC, SA, WA)", founded: 1930, headquarters: "state-based" },
  ],
  majorCompetitions: [
    { name: "Warwick Gold Cup Campdraft", frequency: "annual", founded: 1927, region: "Warwick, Queensland — oldest continuous campdraft" },
    { name: "Landmark Classic Cup Campdraft", frequency: "annual", founded: 1990, region: "rotating Australian venues" },
    { name: "Paradise Lagoons Campdraft (Australia's richest)", frequency: "annual", founded: 1970, region: "Rockhampton, Queensland" },
    { name: "Australian Campdraft Association National Finals", frequency: "annual", founded: 1980, region: "rotating (usually Queensland)" },
  ],
  countriesPlayed: ["AU (dominant + almost exclusive)", "NZ (small community)"],
  famousAthletes: [
    "Multi-generation Australian campdraft dynasties in Queensland + NSW cattle country",
    "Warwick Gold Cup champions (documented since 1927)",
    "Australian Campdraft Association Hall of Fame inductees",
  ],
  records: [
    { title: "Uniquely Australian equestrian sport", holder: "Campdrafting", value: "Practiced almost exclusively in Australia + small NZ community; no equivalent international sport", year: 2024 },
    { title: "Warwick Gold Cup — 95+ years continuous", holder: "Warwick Gold Cup Campdraft", value: "Continuous since 1927; Australia's oldest campdraft competition still running; ~1500 entries annually", year: 2024 },
    { title: "Large member base", holder: "ACA", value: "~30,000 members + 300+ campdrafts per year across Australia", year: 2023 },
  ],

  variants: ["open-standard-format", "maiden-novice-horse-variant", "ladies-division", "juvenile-youth", "novice-rider-division"],
  relatedSports: ["rodeo", "cutting-horse", "team-penning", "polocrosse", "cowboy-mounted-shooting", "reining"],

  skills: ["stock horse handling (elite level)", "cattle reading + anticipation", "cut-out horsemanship (positioning horse to separate one animal from mob)", "figure-8 course navigation while guiding cattle", "time management", "traditional bush riding tradition + presentation"],
  strategies: [
    { title: "Cattle selection (choose weak but manageable)", body: "Selecting animal that will move but not spook is critical; too spooky = uncontrollable, too slow = time penalty." },
    { title: "Horse-cattle positioning", body: "Position horse's shoulder against cattle's flank to guide direction; core Australian stock horse technique." },
    { title: "Camp work discipline", body: "Cut-out phase requires patience + reading cattle behavior; rushed cuts fail." },
    { title: "Course flow", body: "Peg-to-peg fluid motion; abrupt direction changes lose cattle." },
  ],

  terminology: [
    { term: "Camp", meaning: "The small yard containing 6-8 head of cattle at start of run." },
    { term: "Cut out", meaning: "Selecting + separating one animal from the mob." },
    { term: "Draft", meaning: "Guide + control cattle through course (etymology from cattle-drafting practice)." },
    { term: "Peg", meaning: "Course markers rider must navigate cattle around (typically 3 pegs in figure-8)." },
    { term: "Beast", meaning: "The individual selected animal (Australian bush term)." },
    { term: "Gold Cup", meaning: "Warwick Gold Cup — pinnacle Australian campdraft event since 1927." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn stock horse riding first", body: "Solid Australian stock horse skills essential — cutting horse + reining backgrounds useful." },
      { title: "Novice campdraft entries", body: "Australian Campdraft Association has novice + maiden divisions." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete for Warwick Gold Cup", body: "Australia's oldest + most prestigious campdraft." },
      { title: "Paradise Lagoons for richest prize", body: "Australia's richest campdraft in Rockhampton." },
    ]},
  ],

  faq: [
    { question: "How is campdrafting different from cutting?", answer: "American cutting horse events (NCHA) work cattle WITHIN a cutting pen for 2.5 min — no drafting through arena course. Campdrafting adds the second phase: after cut-out, rider must GUIDE cattle through figure-8 arena course + through gate. Cutting is US Western sport; campdrafting is Australian equivalent with drafting element added. Both share stock horse foundation + cattle-reading skill." },
    { question: "Is campdrafting only in Australia?", answer: "Practically yes — 30,000+ members exclusively in Australia. Small campdraft community in New Zealand. Some Australian expatriate community events elsewhere but essentially Australian sport. No North American, European, or South American equivalent circuits." },
    { question: "How dangerous is campdrafting?", answer: "Risks include: horse falls (especially at speed around pegs), cattle-related injuries, rider ejections. Stock horse skill + experienced rider reduces risk significantly. Fatalities occur but rarely; broken bones + concussions moderate frequency. Safety record comparable to rodeo events." },
  ],

  wikipediaTitle: "Campdrafting",
  sources: [
    { label: "Australian Campdraft Association", url: "https://www.campdraft.com.au", publisher: "ACA" },
    { label: "Wikipedia — Campdrafting", url: "https://en.wikipedia.org/wiki/Campdrafting", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const telemarkSkiing: Sport = {
  id: "telemark-skiing",
  slug: "telemark-skiing",
  name: "Telemark Skiing",
  officialName: "Telemark Skiing",
  aliases: ["Telemark", "Free-Heel Skiing"],
  shortDescription:
    "Norwegian ski technique invented 1868 in Telemark region — skier's heel is FREE (not fixed to ski), allowing signature lunging turn (telemark stance) with front knee flexed + rear knee dropped. FIS-recognized competition discipline; also popular as backcountry + touring style.",
  longDescription:
    "Telemark Skiing is a ski technique invented by Sondre Norheim in the 1868 in the Telemark region of Norway. Distinct from alpine skiing by its FREE HEEL — the ski binding attaches only at the toe, leaving heel free to lift. This enables the signature TELEMARK TURN: skier lunges into position with front leg bent + heel down, rear leg trailing with knee dropped + heel raised, ski tips together. Requires enormous leg strength + balance. FIS (International Ski Federation) recognizes telemark as separate competitive discipline with 3 events: Sprint, Classic, and Parallel Sprint. World Cup circuit + World Championships exist. Beyond competition, telemark is popular as backcountry + ski touring + resort style — free heel enables efficient uphill hiking on the same skis used for descent (with ski skins for uphill). Nordic identity is central: Norway + Sweden + Finland dominate + telemark is national heritage sport in Norway.",

  category: "winter-sports",
  subCategory: "free-heel alpine skiing (Nordic technique)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "winter",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "NO",
  regionOfOrigin: "Telemark region, Norway (Sondre Norheim invented technique 1868)",
  estimatedOrigin: "1868 Sondre Norheim; FIS recognition 1983; World Cup 1987; World Championships since 1988",

  players: { min: 1, max: 1, note: "Individual sport; race format solo runs." },
  equipment: [
    { name: "Telemark skis", description: "Modern alpine-shape skis with telemark-specific bindings." },
    { name: "Telemark binding (75mm 3-pin or NTN system)", description: "Toe-only binding; heel free to lift. NTN (New Telemark Norm) is modern standard; 75mm 3-pin is traditional." },
    { name: "Telemark ski boots (leather traditional / plastic modern)", description: "Boot flexes at ball of foot; heel lifts naturally." },
    { name: "Poles", description: "Standard ski poles." },
    { name: "Helmet + goggles + gloves", description: "Standard alpine skiing safety kit." },
  ],
  duration: { approximateMinutes: 3, structure: "Racing runs 45-120 seconds each; qualifiers + finals over 2-3 hours." },
  objective: "Fastest run through gated course (giant slalom-like), performed with telemark turn technique.",
  matchStructure: "Race format: qualifying rounds → knockout brackets (Parallel Sprint) or single-run time (Classic).",

  basicRules: [
    { title: "Turn using telemark stance (front knee bent, rear knee dropped)", body: "Signature telemark position: lunge stance with rear heel raised + front knee flexed." },
    { title: "Free heel throughout", body: "Ski binding must remain attached only at toe; heel free to lift. Alpine skiing = fixed heel." },
    { title: "Ski gated race course", body: "Course has gates like giant slalom; racer must ski between gates in order." },
    { title: "Fall = re-mount + continue (or run over)", body: "Falls cost time; up to skier to continue or accept run loss." },
  ],
  advancedRules: [
    { title: "Telemark technique judgment (Classic event)", body: "Classic Telemark event judges turn quality — insufficient telemark position deducts style points." },
    { title: "Parallel Sprint (dual-elimination race)", body: "Head-to-head elimination format with parallel course." },
    { title: "Reipe (jump) event", body: "Some competitions include obligatory jump element requiring telemark landing." },
    { title: "NTN vs. 75mm binding standard", body: "NTN (New Telemark Norm) is modern release binding; 75mm 3-pin is traditional non-release. Competition standard is NTN." },
  ],
  scoring: {
    summary: "Fastest time through gated course; Classic event adds style points.",
    winCondition: "Fastest time wins; head-to-head elimination in Parallel Sprint.",
    breakdown: [
      { action: "Race time", points: "Fastest wins" },
      { action: "Classic style points (Classic event only)", points: "Style deductions for insufficient telemark position" },
      { action: "Missed gate", points: "DQ / re-ski" },
    ],
  },
  penalties: [
    { title: "Missed gate", body: "DQ or re-ski depending on ruleset." },
    { title: "Alpine turn (no telemark position, Classic event)", body: "Style deduction." },
  ],

  positions: [{ name: "Skier", role: "Individual telemark racer.", count: 1 }],
  officiating: {
    officials: ["Course judges (multiple)", "Timekeeper", "Style judges (Classic event)"],
    summary: "Course judges + timekeeper + style judges for Classic event.",
  },

  governingBodies: [
    { name: "FIS Telemark Committee", founded: 1983, headquarters: "Oberhofen, Switzerland (FIS HQ)", website: "https://www.fis-ski.com" },
    { name: "US Ski Team Telemark division", founded: 1990, headquarters: "Park City, Utah" },
    { name: "Norwegian Ski Federation Telemark", founded: 1900, headquarters: "Oslo, Norway" },
  ],
  majorCompetitions: [
    { name: "FIS Telemark World Championships", frequency: "biennial", founded: 1988, region: "rotating hosts" },
    { name: "FIS Telemark World Cup", frequency: "annual (Dec-Mar)", founded: 1987, region: "European Alps + Scandinavia primarily" },
    { name: "Norwegian National Championships", frequency: "annual", founded: 1900, region: "Norway" },
    { name: "US Nationals (USSA Telemark)", frequency: "annual", founded: 1990, region: "US mountain resorts" },
  ],
  countriesPlayed: ["NO", "SE", "FI", "FR", "CH", "IT", "DE", "AT", "US", "CA", "CZ", "SI", "SK"],
  famousAthletes: [
    "Sondre Norheim (Norway) — 1825-1897, invented telemark technique + turn 1868 in Morgedal, Telemark",
    "Various Norwegian + French + Swiss FIS World Cup champions",
    "Nicolas Michaud (France, multiple World Championships)",
    "Silje Lange (Norway, top Norwegian telemarker)",
  ],
  records: [
    { title: "Older than alpine skiing", holder: "Telemark", value: "Sondre Norheim's 1868 invention predates alpine skiing (Mathias Zdarsky ~1897 fixed-heel technique) by nearly 30 years — telemark is the original modern ski technique", year: 2024 },
    { title: "Norwegian cultural heritage", holder: "Telemark skiing", value: "Recognized as core Norwegian cultural heritage; Morgedal (Sondre Norheim's birthplace) is telemark's Mecca; annual pilgrimage + heritage events", year: 2024 },
  ],

  variants: ["classic-telemark-race-with-style-judging", "sprint-race-format", "parallel-sprint-head-to-head", "telemark-park-freestyle-newer", "backcountry-touring-recreational"],
  relatedSports: ["alpine-skiing", "cross-country-skiing", "ski-mountaineering", "nordic-combined", "backcountry-skiing"],

  skills: ["telemark turn (front knee bent + rear knee dropped stance)", "leg strength + endurance (single-leg lunge fatigues rapidly)", "free-heel balance control", "carved edge control on downhill runs", "uphill hiking with free-heel skis (touring)"],
  strategies: [
    { title: "Full telemark position for every turn", body: "Classic event style points require deep telemark lunge; alpine cheating deducts." },
    { title: "Efficient rotation", body: "Fluid transitions between left-front + right-front telemark positions preserve momentum." },
    { title: "Leg strength conditioning", body: "Single-leg lunge fatigues quads rapidly; season-long leg strength training essential." },
  ],

  terminology: [
    { term: "Telemark turn", meaning: "Signature lunging turn with front knee bent + rear knee dropped." },
    { term: "Free heel", meaning: "Binding attached only at toe; heel free to lift." },
    { term: "NTN", meaning: "New Telemark Norm — modern step-in binding with release." },
    { term: "75mm 3-pin", meaning: "Traditional telemark binding: 3 metal pins under toe of boot." },
    { term: "Morgedal", meaning: "Village in Telemark, Norway where Sondre Norheim lived + invented technique 1868." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn alpine skiing first (or cross-country)", body: "Solid alpine skiing foundation makes telemark transition easier; XC background helps free-heel balance." },
      { title: "Take telemark lesson at ski resort", body: "Most European + North American ski resorts offer telemark lessons." },
      { title: "Rent telemark gear before purchase", body: "Full setup (skis + boots + bindings) ~$2000+ USD." },
    ]},
    { level: "advanced", steps: [
      { title: "FIS Telemark World Cup circuit", body: "European + Scandinavian races primarily." },
      { title: "Backcountry telemark (ski touring)", body: "Free heel enables efficient uphill hiking + downhill skiing — telemark is ideal backcountry technique." },
    ]},
  ],

  faq: [
    { question: "Why choose telemark over alpine skiing?", answer: "Telemark offers: (1) Traditional/cultural connection to skiing's Norwegian origins, (2) Free heel enables efficient uphill touring on same skis, (3) Athletic challenge — telemark turn requires more strength + balance than alpine, (4) Aesthetic — the lunging turn is visually distinctive + elegant. Downsides: much smaller community + gear ecosystem, steeper learning curve, more physically demanding." },
    { question: "Can you telemark on regular alpine skis?", answer: "No — requires special telemark bindings (NTN or 75mm 3-pin) that attach only at toe. Alpine bindings fix heel + prevent telemark turn entirely. Skis themselves can be shared with alpine (modern telemark uses alpine-shape skis) — just different bindings + boots." },
    { question: "Is telemark harder than alpine skiing?", answer: "Yes, generally. Free heel = less stability + more required balance. Telemark turn requires simultaneous single-leg lunge + weight transfer + edge control. Physical fatigue faster (single-leg loading). But cultural + athletic + touring benefits attract dedicated practitioners despite challenge." },
  ],

  wikipediaTitle: "Telemark skiing",
  sources: [
    { label: "FIS Telemark", url: "https://www.fis-ski.com/en/telemark", publisher: "FIS" },
    { label: "Wikipedia — Telemark skiing", url: "https://en.wikipedia.org/wiki/Telemark_skiing", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const nordicCombined: Sport = {
  id: "nordic-combined",
  slug: "nordic-combined",
  name: "Nordic Combined",
  officialName: "Nordic Combined (FIS)",
  aliases: ["NC", "Skiing's Original Combined"],
  shortDescription:
    "Winter Olympic discipline combining ski jumping and cross-country skiing — jump results determine start intervals for pursuit-style cross-country race (Gundersen method); contested at every Winter Olympics since 1924.",
  longDescription:
    "Nordic Combined is a winter sport combining ski jumping and cross-country skiing. Originating in Norway in the 19th century, it was included in the very first Winter Olympics (Chamonix 1924) and has been contested at every Games since. Competition uses the Gundersen method (since 1985): athletes ski-jump first; jump distances + style points convert to time deficits, with the leader starting the cross-country race first and others chasing at time-based intervals. The winner is the first athlete to cross the cross-country finish line. Distances: individual (10 km cross-country, small or large hill jump), team (relay 4×5 km with team jumps). Norway has dominated historically — the most Olympic gold medals. Modern champions: Jarl Magnus Riiber (Norway — multiple World Cup overall titles), Johannes Rydzek (Germany), Eric Frenzel (Germany — 3× Olympic gold + 5× World Champion), Åsmund Ulsberg (Norway — historic pre-1985 champion). Women's Nordic Combined debuted at 2020-21 World Cup + first World Championships 2021; still fighting for Olympic inclusion.",

  category: "winter-sports",
  subCategory: "combined winter sport — ski jumping + cross-country skiing",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: false,
  isProfessional: true,
  season: "winter",
  era: "19th-century",
  popularity: "major",
  countryOfOrigin: "NO",
  regionOfOrigin: "Norway (19th century); competed at first Winter Olympics Chamonix 1924",
  estimatedOrigin: "Norwegian roots 19th century; Winter Olympic debut Chamonix 1924; Gundersen method introduced 1985; women's World Cup 2020-21",

  players: { min: 1, max: 4, note: "Individual + team relay (4-person) events." },
  field: {
    surfaceName: "Ski jumping hill + cross-country ski track",
    dimensions: "Jump hills: Small (HS 100-109m) + Large (HS 110-140m); cross-country: 10 km individual / 4×5 km relay",
    description: "Two venues used sequentially. Ski jump: takeoff hill + landing area + judges' tower. Cross-country: groomed classic + freestyle tracks through varied terrain.",
  },
  equipment: [
    { name: "Ski jump skis", description: "Long specialized skis (typically 145% of athlete's height, max); wide for lift generation." },
    { name: "Cross-country skis + poles", description: "Freestyle (skate) skis for cross-country portion; carbon poles for maximum efficiency." },
    { name: "Jump suit + cross-country suit", description: "Two different suits: jump suit (specialized aerodynamic shape) + cross-country race suit (compression + moisture management)." },
    { name: "Helmet + goggles", description: "Mandatory helmet for jumping; goggles for both phases." },
    { name: "Ski boots — jumping + cross-country", description: "Different boots for each discipline; athletes switch between phases." },
  ],
  duration: {
    approximateMinutes: 45,
    structure: "Jump portion: 2 jumps × 5 min each. Cross-country: 20-30 min. Full event: ~1.5-2 hours including breaks + judging.",
  },
  objective: "Win by crossing cross-country finish line first, having earned favorable start position via ski jumping results.",
  matchStructure: "Phase 1: Ski jumping — each athlete jumps; distance + style points convert to time deficits. Phase 2: Cross-country pursuit — leader starts first; others chase at time-based intervals. First across finish line wins.",

  basicRules: [
    { title: "Two disciplines in one event", body: "Ski jumping + cross-country skiing; Gundersen method combines results." },
    { title: "Gundersen method scoring", body: "Jump distance + style points converted to time deficit (1 point = 4 seconds behind leader in cross-country)." },
    { title: "Pursuit-style cross-country", body: "Leader from jumping starts cross-country first; others chase at time-based intervals." },
    { title: "First across finish line wins", body: "Cross-country finish = final result; no separate scoring after cross-country starts." },
    { title: "Individual + Team events", body: "Individual (single athlete) + Team (4-athlete relay with combined jumps)." },
    { title: "Small hill + Large hill", body: "Individual event held on Normal Hill (HS 100-109m) or Large Hill (HS 110-140m)." },
  ],
  advancedRules: [
    { title: "Jump style scoring", body: "5 judges score style 0-20 each; top + bottom dropped; middle 3 averaged. Style based on take-off, flight, landing." },
    { title: "K-Point + hill size", body: "K-Point = calculation point (~90% of hill size); jumping past K-Point = bonus points." },
    { title: "Wind + gate compensation", body: "Wind + gate factor adjustments allow fair comparison across changing conditions." },
    { title: "Team relay tag zone", body: "Team event: 4 athletes take turns; jumps combined first, then relay cross-country." },
    { title: "Compact schedule", body: "Individual event completed in single day: jump AM, cross-country PM." },
    { title: "Women's format", body: "Women's Nordic Combined uses similar rules; 5 km + small hill jump typical." },
  ],
  scoring: {
    summary: "Gundersen method: jump points → time deficit → pursuit cross-country → first finisher wins.",
    winCondition: "First across cross-country finish line wins.",
    breakdown: [
      { action: "Ski jump distance points", points: "Meters × hill-specific coefficient" },
      { action: "Ski jump style points (5 judges)", points: "0-60 total (max)" },
      { action: "Jump-to-time conversion (Gundersen)", points: "1 point = 4 seconds behind leader" },
      { action: "Cross-country pursuit", points: "First to finish wins" },
    ],
  },
  penalties: [
    { title: "Suit specification violation", body: "DQ from event if suit exceeds FIS dimensions." },
    { title: "False start (cross-country)", body: "Warning; DQ on repeat." },
    { title: "Cutting course", body: "DQ from event." },
    { title: "Unsafe jump", body: "Judges deduct heavily; possible restart or DQ." },
  ],

  positions: [
    { name: "Competitor", role: "Individual athlete competing in both disciplines.", count: 1 },
    { name: "Team member (relay)", role: "1 of 4 in relay team.", count: 4 },
    { name: "Coach + wax technician", role: "Ski preparation critical for both disciplines." },
  ],
  officiating: {
    officials: ["Chief of Competition", "Jump judges (5)", "Cross-country referee", "Timekeeper + timing officials"],
    summary: "FIS-certified officials at all World Cup + Olympic events; jump judging + cross-country timing are independent systems.",
  },

  governingBodies: [
    { name: "Fédération Internationale de Ski (FIS)", founded: 1924, headquarters: "Oberhofen, Switzerland", website: "https://fis-ski.com" },
    { name: "Norwegian Ski Federation (Norges Skiforbund)", founded: 1908, headquarters: "Oslo, Norway" },
    { name: "German Ski Federation (DSV)", founded: 1905, headquarters: "Planegg, Germany" },
  ],
  majorCompetitions: [
    { name: "Winter Olympic Games", frequency: "quadrennial", founded: 1924, region: "worldwide" },
    { name: "FIS Nordic World Ski Championships", frequency: "biennial", founded: 1925, region: "worldwide" },
    { name: "FIS Nordic Combined World Cup", frequency: "annual (10-15 rounds)", founded: 1983, region: "worldwide winter circuit" },
    { name: "Seefeld Triple", frequency: "annual (part of World Cup)", founded: 2016, region: "Seefeld, Austria" },
  ],
  countriesPlayed: ["NO", "DE", "AT", "FI", "JP", "FR", "IT", "US", "PL", "EE", "CZ", "SI", "RU"],
  famousAthletes: [
    "Jarl Magnus Riiber (Norway — multiple World Cup overall + World Championship titles; modern GOAT)",
    "Eric Frenzel (Germany — 3× Olympic gold + 5× World Champion; longest-dominant modern athlete)",
    "Johannes Rydzek (Germany — 4× World Champion 2017 sweep)",
    "Bjarte Engen Vik (Norway — 3× Olympic gold 1998+2002)",
    "Ulrich Wehling (East Germany — 3× Olympic gold 1972+1976+1980; only 3× consecutive winner)",
    "Felix Gottwald (Austria — 3× Olympic gold + 7 total Olympic medals)",
    "Åsmund Ulsberg (Norway — pioneering Norwegian dominance in early Olympics)",
    "Sampsa Sinerkari (Finland — women's early pioneer)",
    "Gyda Westvold Hansen (Norway — women's World Cup 2020-21 champion)",
  ],
  records: [
    { title: "Most Nordic Combined Olympic gold (individual, historic)", holder: "Ulrich Wehling (East Germany)", value: "3 consecutive Olympic golds 1972+1976+1980", year: 1980 },
    { title: "Most Nordic Combined Olympic golds (recent)", holder: "Eric Frenzel (Germany)", value: "3 golds 2014+2018", year: 2018 },
    { title: "Most Olympic medals in Nordic Combined", holder: "Felix Gottwald (Austria)", value: "7 total Olympic medals (3 gold + 1 silver + 3 bronze)", year: 2010 },
    { title: "Women's World Cup debut", holder: "FIS", value: "First women's World Cup season 2020-21; still not Olympic", year: 2021 },
    { title: "Olympic longevity", holder: "Nordic Combined", value: "Contested every Winter Olympics since 1924 (100 years)", year: 2024 },
  ],

  variants: ["fis-standard-individual", "fis-standard-team-relay", "hs-100-normal-hill", "hs-140-large-hill", "women's-nordic-combined-non-olympic"],
  relatedSports: ["ski-jumping", "cross-country-skiing", "biathlon", "alpine-skiing-combined"],

  skills: ["ski jumping aerodynamics + take-off", "cross-country skiing fitness + technique", "in-air stability + landing", "pursuit racing tactics", "physical + mental crossover conditioning"],
  strategies: [
    { title: "Maximize jump distance + style", body: "Every meter jumped = 15 seconds gained in cross-country pursuit. Elite jumpers can build 30+ second leads." },
    { title: "Cross-country pursuit tactics", body: "Chasers can catch leaders on hills + straightaways; leaders defend by matching pace + skiing efficient lines." },
    { title: "Ski wax + equipment optimization", body: "Cross-country ski wax choice critical for varying snow conditions; costly technical support required." },
    { title: "Balance jump + XC training", body: "Two very different disciplines; athletes must maintain both without overtraining either." },
    { title: "Peak for major events", body: "Olympic + World Championships require training peaks; managing 15-week World Cup schedule + these peaks is decisive." },
    { title: "Team relay strategy", body: "Team events: order runners strategically; strongest jumper first (build lead), fastest XC last (finishing kick)." },
  ],

  terminology: [
    { term: "Nordic Combined", meaning: "Combined ski jumping + cross-country skiing." },
    { term: "Gundersen method", meaning: "Time-based conversion of jump points to cross-country start intervals (since 1985)." },
    { term: "K-Point", meaning: "Calculation point on jump hill (~90% of hill size); baseline for scoring." },
    { term: "Hill Size (HS)", meaning: "Maximum construction size of jump hill in meters." },
    { term: "Pursuit start", meaning: "Cross-country start with time deficits from jumping." },
    { term: "Normal Hill", meaning: "Smaller jump hill (HS 100-109m); one of two Olympic individual events." },
    { term: "Large Hill", meaning: "Larger jump hill (HS 110-140m); second Olympic individual event." },
    { term: "FIS", meaning: "Fédération Internationale de Ski; world governing body." },
    { term: "Team relay", meaning: "4-athlete team event; jumps combined first, then relay cross-country." },
    { term: "Style points", meaning: "Judged 0-20 by 5 judges; top + bottom dropped; middle 3 averaged." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Master alpine + cross-country skiing basics", body: "Nordic Combined requires both disciplines; 5-10 years base skiing before combined training." },
      { title: "Join Norwegian, German, Austrian, Finnish, Estonian ski club", body: "Nordic ski nations have specialized programs from age 10; less accessible elsewhere." },
      { title: "Progressive jump training", body: "Start on tiny K5 hills; graduate up hill sizes over years; safety-critical progression." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at FIS World Cup + World Championships", body: "Top-tier international circuit; qualification via national federation." },
      { title: "Olympic team selection", body: "National federation trials + World Cup ranking determine Olympic squad." },
      { title: "Balance career length", body: "Nordic Combined athletes often peak at 25-30; some careers extend to mid-30s with strategic training." },
    ]},
  ],

  faq: [
    { question: "What is the Gundersen method?", answer: "The scoring system introduced 1985. Ski jump distances + style points are converted to time deficits (1 jump point = 4 seconds in cross-country). Ski jump leader starts cross-country first; others start at time intervals based on their jump deficit. Whoever crosses cross-country finish line first wins. Named after Norwegian coach Gunder Gundersen." },
    { question: "Is Nordic Combined in the Olympics?", answer: "Yes — men's Nordic Combined has been at every Winter Olympics since 1924. Women's Nordic Combined has NOT been added despite World Cup + World Championships existing since 2020-21. IOC gender-parity policies pressure for women's inclusion at Milano-Cortina 2026 or LA 2034." },
    { question: "Who is the greatest Nordic Combined athlete?", answer: "Multiple candidates: (1) Eric Frenzel (Germany) — 3× Olympic gold + 5× World Champion + long career. (2) Ulrich Wehling (East Germany) — 3 consecutive Olympic golds 1972-1980 (record for consecutive). (3) Jarl Magnus Riiber (Norway) — modern GOAT with multiple World Cup overall + World Championship titles. (4) Felix Gottwald (Austria) — 7 Olympic medals (most in the sport)." },
    { question: "How does an event work in one day?", answer: "Compact schedule. Morning: ski jumping phase (2 official jumps per athlete). Late morning: results calculated; time deficits assigned. Afternoon: cross-country pursuit race (10 km individual) starts with leader first, then others at their assigned time deficits. Whoever crosses finish line first = event champion. Total: 4-6 hours event day." },
  ],

  wikipediaTitle: "Nordic combined",
  sources: [{ label: "FIS Nordic Combined", url: "https://fis-ski.com/en/nordic-combined", publisher: "FIS" }, { label: "Wikipedia — Nordic combined", url: "https://en.wikipedia.org/wiki/Nordic_combined", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const wingFoiling: Sport = {
  id: "wing-foiling",
  slug: "wing-foiling",
  name: "Wing Foiling",
  officialName: "Wing Foiling (Global Wingsports Association)",
  aliases: ["Wing Surfing", "Wing Foil", "Wingsurfing", "WingFoil"],
  shortDescription:
    "New water sport (born 2019) combining a handheld inflatable wing (like kite meets sail) with a hydrofoil board — rider flies above the water at 25-40 km/h; expected 2028 or 2032 Olympic inclusion.",
  longDescription:
    "Wing Foiling (or Wing Surfing) is a rapidly growing water sport where the rider stands on a hydrofoil surfboard while holding a handheld inflatable wing — the wing catches wind and propels the rider, who lifts above the water surface on the foil. Emerged in 2019 (Slingshot + Cabrinha + Naish pioneered commercial wings simultaneously), and by 2024 had over 100,000 practitioners globally. Combines elements of windsurfing (handheld sail power) + kitesurfing (compact gear) + surf foiling (foil lift). Speed 25-40 km/h; jumping + tricks emerging as freestyle disciplines. World Wingsurfing Association + Global Wingsports Association govern competitively. World Championships held annually since 2020 (Portugal, Spain, Brazil venues). Expected Olympic inclusion at LA 2028 or Brisbane 2032 given rapid growth. Legendary riders: Kai Lenny (Hawaii — multi-discipline; pioneering wing foil), Titouan Galea (New Caledonia — 2× World Champion), Balz Müller (Switzerland — freestyle innovator), Maddalena Spanu (Italy — women's freestyle pioneer).",

  category: "aquatic-sports",
  subCategory: "wind-powered water sport with hydrofoil",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "United States + Australia + international (2019 commercial launch by Slingshot + Cabrinha + Naish); global spread post-2020",
  estimatedOrigin: "Commercial wings launched 2019 by multiple brands simultaneously; sport explosive growth 2020-2024; Olympic pathway pursued",

  players: { min: 1, max: 1, note: "Individual sport; competitive events use fleet racing or head-to-head heats." },
  field: {
    surfaceName: "Open water — ocean, lake, or bay with 12-25 knot wind",
    dimensions: "Freestyle: small course. Racing: 1-3 km courses. Recreational: no fixed area.",
    description: "Open water with consistent wind (12-25 knots optimal); ability to sail upwind means most locations work. Race courses set with marker buoys.",
  },
  equipment: [
    { name: "Inflatable wing (3-7 sqm)", description: "Handheld inflatable wing; different sizes for different wind conditions (3-5m for high wind; 5-7m for light wind)." },
    { name: "Hydrofoil surfboard", description: "Compact surfboard-shape (typically 4-6 feet) with hydrofoil mast + wings underneath. Modern boards: Cabrinha Wing Board, Naish Hover, Duotone Slick." },
    { name: "Hydrofoil (mast + wings)", description: "Aluminum or carbon fiber mast (60-85cm typical); front + back foil wings. Front foil size varies by rider weight + wind." },
    { name: "Wetsuit / boardshorts", description: "Water-temperature-dependent; wing foiling is done in wide range of temperatures." },
    { name: "Impact vest + optional helmet", description: "Impact vest recommended; helmet for advanced tricks + close-quarters." },
    { name: "Leash", description: "Ankle leash tethering rider to board; safety essential." },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "Recreational: 1-3 hour sessions. Racing: 20-30 min per race. Full event: 1-3 days.",
  },
  objective: "Recreational: fly above water in balanced flight controlled by wing + board. Racing: complete course fastest. Freestyle: highest trick score.",
  matchStructure: "Racing formats: (1) Fleet racing — mass start, all riders on same course, fastest wins. (2) Head-to-head — heats. (3) Slalom — course between markers. Freestyle: judged runs 0-100 on trick difficulty + execution.",

  basicRules: [
    { title: "Handheld wing (no fixed connection)", body: "Wing is held with two hands; can be released to prevent submarining or in emergencies." },
    { title: "Hydrofoil board", body: "Foil mast + wings lift rider above water surface once minimum speed reached (10-15 km/h typical)." },
    { title: "Wind-powered", body: "Wing catches wind; rider uses wing angle + body position to control power + direction." },
    { title: "Racing: standard sailing rules apply", body: "Right of way + starboard tack + windward mark rules similar to sailing." },
    { title: "Freestyle: judged 0-100", body: "Jumps, spins, rotations, board off tricks (jumping over water while releasing board)." },
    { title: "Safety leash + wing release", body: "Ankle leash prevents board separation; wing has release strap for emergencies." },
  ],
  advancedRules: [
    { title: "Trick difficulty scoring", body: "Judges score freestyle 0-100 based on air time, rotation count, board off + on-board tricks, style." },
    { title: "Racing tactical rules", body: "Sailing rules of the road; port + starboard tack; windward mark rounding; penalties for interference." },
    { title: "Board-off tricks", body: "Rider releases board mid-jump + reattaches feet before landing. Signature elite trick category." },
    { title: "Wind-condition modification", body: "Extreme winds may cause postponement; light winds may cancel events." },
    { title: "Wing size matches conditions", body: "Riders bring quiver of 3-5 wing sizes; select based on daily wind." },
    { title: "Slalom + long-distance race formats", body: "Various race formats emerging as sport evolves." },
  ],
  scoring: {
    summary: "Racing: fastest time / position wins. Freestyle: judges score 0-100 on trick difficulty + execution.",
    winCondition: "Racing: fastest across finish line. Freestyle: highest scored run (best of 2-3).",
    breakdown: [
      { action: "Race finish 1st", points: "1 point (lowest = best in fleet racing)" },
      { action: "Race finish 2nd", points: "2 points" },
      { action: "Freestyle perfect run", points: "95-100" },
      { action: "Freestyle good run", points: "70-90" },
      { action: "Freestyle basic run", points: "50-70" },
    ],
  },
  penalties: [
    { title: "Racing: right-of-way violation", body: "720° turn penalty (spin twice); or DQ if severe." },
    { title: "Freestyle: fall on trick", body: "Score 0 for that attempt." },
    { title: "Missing course mark", body: "Time penalty or DQ." },
    { title: "Unsafe behavior", body: "Warning; DQ for repeated." },
  ],

  positions: [
    { name: "Rider", role: "Individual competitor.", count: 1 },
    { name: "Coach + team support", role: "Wing setup + wind analysis + strategy." },
    { name: "Judges (freestyle)", role: "Score runs 0-100." },
  ],
  officiating: {
    officials: ["Race Director", "Race officers", "Judges (freestyle)", "Video review official"],
    summary: "Similar to sailing officiating; multiple race committee boats + judges; video review for close calls.",
  },

  governingBodies: [
    { name: "World Sailing (governance emerging)", founded: 1907, headquarters: "London, UK", website: "https://sailing.org" },
    { name: "Global Wingsports Association (GWA)", founded: 2020, headquarters: "USA", website: "https://gwawingtour.com" },
    { name: "International Wingfoil Association", founded: 2021, headquarters: "worldwide" },
  ],
  majorCompetitions: [
    { name: "GWA Wingfoil World Tour", frequency: "annual (5-8 rounds)", founded: 2020, region: "worldwide (Portugal, Spain, Brazil, Tarifa, Fuerteventura)" },
    { name: "Wingfoil World Championships", frequency: "annual", founded: 2020, region: "worldwide" },
    { name: "European + regional championships", frequency: "annual", founded: 2021, region: "regional" },
    { name: "World Sailing exploration (Olympic pathway)", frequency: "developing", founded: 2024, region: "worldwide" },
  ],
  countriesPlayed: ["US", "AU", "ES", "PT", "FR", "IT", "BR", "DE", "GB", "NZ", "CH", "AR", "MX", "NC"],
  famousAthletes: [
    "Kai Lenny (Hawaii — multi-discipline pioneer + wing foil ambassador)",
    "Titouan Galea (New Caledonia — 2× GWA Wingfoil World Champion)",
    "Balz Müller (Switzerland — freestyle innovator + multiple X Games)",
    "Maddalena Spanu (Italy — women's freestyle pioneer)",
    "Alex Klein (Israel — early wing pioneer)",
    "Nia Suardiaz (Spain — women's champion)",
    "Bastien Escofet (France — freestyle podium regular)",
    "Alessio Stillrich (Italy — race circuit contender)",
    "Colin Carroll (US — modern podium)",
  ],
  records: [
    { title: "First commercial wing", holder: "Slingshot + Cabrinha + Naish", value: "Multiple brands launched wings 2019; sport's official birth", year: 2019 },
    { title: "Fastest wing foil speed record", holder: "Various", value: "Speed records approaching 40 knots (75 km/h) in optimal conditions", year: 2023 },
    { title: "GWA Wingfoil World Tour", holder: "GWA", value: "First official tour season 2021; annual since", year: 2021 },
    { title: "Olympic pathway", holder: "World Sailing", value: "Wing foiling under consideration for LA 2028 or Brisbane 2032 Olympic inclusion", year: 2024 },
  ],

  variants: ["gwa-wingfoil-freestyle", "gwa-wingfoil-race", "gwa-wingfoil-surf-freestyle", "big-air-wing-foiling"],
  relatedSports: ["windsurfing", "kitesurfing", "hydrofoiling", "surfing", "sup-paddleboarding"],

  skills: ["hydrofoil balance + control", "wing power management (up/down power)", "board + wing coordination", "physical fitness (constant micro-adjustments)", "wind reading + line selection", "trick + jump execution (freestyle)"],
  strategies: [
    { title: "Master downwind riding first", body: "Downwind = easiest; learn body position + foil control before attempting upwind or tricks." },
    { title: "Wing size selection", body: "Match wing to daily wind: 3-5m for 20+ knots, 5-6m for 15-20 knots, 6-7m for 10-15 knots." },
    { title: "Foil selection", body: "Larger front wing = more stable + slower; smaller = faster + harder. Match rider weight + skill." },
    { title: "Balance body position", body: "Weight over rear foot for take-off; forward for landing; constant micro-adjustments." },
    { title: "Tricks progression", body: "Start with straight-line flying → jibes + tacks → jumps → board-off tricks → rotations." },
    { title: "Wind + tide reading (racing)", body: "Racing rewards riders who spot wind shifts + tide changes. Study forecasts + on-water conditions." },
  ],

  terminology: [
    { term: "Wing", meaning: "Handheld inflatable sail that catches wind." },
    { term: "Foil", meaning: "Hydrofoil underneath board; lifts rider above water." },
    { term: "Wing Foiling / WingSurf / WingFoil", meaning: "Alternative names for the sport." },
    { term: "Board off", meaning: "Trick where rider releases board mid-jump + reattaches feet." },
    { term: "Jibe / Tack", meaning: "Changing direction while sailing." },
    { term: "Powered", meaning: "Wing catching sufficient wind for propulsion." },
    { term: "Depowered", meaning: "Wing angled to reduce power in gusts." },
    { term: "GWA", meaning: "Global Wingsports Association; world governing body." },
    { term: "Kai Lenny", meaning: "Hawaiian multi-discipline pioneer + wing foil ambassador." },
    { term: "Freestyle", meaning: "Trick-based discipline; jumps + rotations." },
    { term: "Race", meaning: "Course-based discipline; fastest wins." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Take intro lesson (3-day course)", body: "Wing foil schools in Fuerteventura, Tarifa, Maui, Cabarete, Australian Gold Coast. Course $500-1500." },
      { title: "Buy entry-level equipment", body: "Board $1500-2500 + Foil $1500-2500 + Wing $800-1500 = $4,000-6,500 total start." },
      { title: "Practice in 15-20 knot winds", body: "Optimal learning wind; too little = no power, too much = out of control." },
    ]},
    { level: "intermediate", steps: [
      { title: "Master jibes + tacks", body: "Consistent direction changes on foil; critical for racing + longer sessions." },
      { title: "First jumps + board-off attempts", body: "Progressive: small jumps → controlled rotations → board-off jumps." },
      { title: "Join local wing community", body: "Facebook groups + WhatsApp communities in every wind-sport city; ride days + technique sharing." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at GWA Wingfoil World Tour rounds", body: "Global competitive tour; regional qualifying series." },
      { title: "Focus race or freestyle", body: "Two very different disciplines; elite athletes typically specialize." },
      { title: "Sponsorships + brand ambassador", body: "Growing sport = growing sponsor budgets; social media presence critical." },
    ]},
  ],

  faq: [
    { question: "What is Wing Foiling?", answer: "A new water sport (born 2019) combining a handheld inflatable wing (like a compact sail) with a hydrofoil surfboard. Rider stands on foil board holding wing; wing catches wind and propels rider, who lifts above water surface once minimum speed reached (10-15 km/h). Speed reaches 25-40 km/h. Combines elements of windsurfing (handheld sail power) + kitesurfing (compact gear) + surf foiling (foil lift). Sport's explosive growth 2020-2024 with 100,000+ practitioners globally." },
    { question: "Is Wing Foiling in the Olympics?", answer: "Not yet — but expected. Growing global popularity + World Sailing governance interest positions Wing Foiling for LA 2028 or Brisbane 2032 Olympic inclusion. Wing Foiling has already replaced Windsurfing at some regional multi-sport events. Rapid growth trajectory suggests high likelihood of Olympic pathway realization." },
    { question: "How is Wing Foiling different from Kitesurfing?", answer: "Kitesurfing: rider connected to kite via 20m lines + harness; kite in sky above. Wing Foiling: rider holds wing directly in hands (no lines/harness); wing right in front of rider. Wing setup takes 1 min vs. kitesurf 5-10 min setup. Wing more forgiving in gusts (release + drift vs. dangerous kite loss). Similar physics but different feel." },
    { question: "Who is the greatest wing foiler?", answer: "Multiple candidates: (1) Kai Lenny (Hawaii) — multi-discipline pioneer + wing foil ambassador; not exclusively wing but sport's global face. (2) Titouan Galea (New Caledonia) — 2× GWA Wingfoil World Champion. (3) Balz Müller (Switzerland) — freestyle innovator + multiple X Games. Sport is very young; all-time GOATs will emerge as sport matures." },
    { question: "How much does a wing foil kit cost?", answer: "Entry-level: $4,000-6,500 (board + foil + wing). Full competitive setup: $8,000-15,000 (multiple boards + wings + foils for varied conditions). Ongoing costs: wing replacements (2-3 years) + foil maintenance + wetsuit + accessories. Growing rental + demo market reduces initial investment barrier." },
  ],

  wikipediaTitle: "Wing foiling",
  sources: [{ label: "GWA Wingfoil Tour", url: "https://gwawingtour.com", publisher: "GWA" }, { label: "Wikipedia — Wing foiling", url: "https://en.wikipedia.org/wiki/Wing_foiling", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

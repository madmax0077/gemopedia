import type { Sport } from "@/lib/types";

export const iceSwimming: Sport = {
  id: "ice-swimming",
  slug: "ice-swimming",
  name: "Ice Swimming",
  officialName: "Ice Swimming (International Ice Swimming Association)",
  aliases: ["Winter Swimming (related)", "Ice Mile", "IISA"],
  shortDescription:
    "Open-water swimming in water below 5°C (41°F) with no wetsuit — an extreme cold-water endurance sport contested at IISA World Championships since 2009; the 'Ice Mile' (1 mile in <5°C water) is the sport's iconic achievement.",
  longDescription:
    "Ice Swimming is an extreme cold-water swimming discipline conducted in water below 5°C (41°F) without wetsuit — only standard swimsuit, cap, and goggles. It emerged as a codified sport in 2009 with the founding of the International Ice Swimming Association (IISA) by South African swimmer Ram Barkai, who pioneered the discipline through remote polar swims. The sport's iconic achievement is the 'Ice Mile' — swimming 1 statute mile (1.609 km) in water below 5°C, a feat requiring exceptional cold-water adaptation + safety protocols. IISA World Championships are held biennially (Tallinn 2015 debut; Murmansk 2018; Kraljevica 2020; Samoëns France 2023). Key distances: 50m, 100m, 250m, 500m, 1000m, Ice Mile (1609m). Health risks include cardiac arrest, cold-water shock, hypothermia; sport requires extensive medical screening + gradual acclimatization. Legendary swimmers: Ram Barkai (South Africa, founder), Petar Stoychev (Bulgaria, elite performer), Christof Wandratsch (Germany, world record holder multiple events), Lynne Cox (US, first Bering Strait swim 1987 — pre-IISA pioneer).",

  category: "aquatic-sports",
  subCategory: "extreme cold-water swimming",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "winter",
  era: "20th-century",
  popularity: "regional",

  countryOfOrigin: "ZA",
  regionOfOrigin: "South Africa (Ram Barkai founded IISA 2009); global spread through Northern European + Nordic + Russian traditions",
  estimatedOrigin: "Long informal history of winter swimming globally; codified as sport 2009 by Ram Barkai + IISA; World Championships since 2015",

  players: { min: 1, max: 100, note: "Individual competition; open-water format allows multiple swimmers simultaneously." },
  field: {
    surfaceName: "Open water — ice-covered or ice-free lakes, rivers, oceans",
    dimensions: "Standard: 25m or 50m pool lengths (indoor); open-water courses variable (up to 1609m for Ice Mile)",
    description: "Indoor pool with water cooled to <5°C, or natural open water (lake, river, ocean) at that temperature. Water certification + independent thermometer measurement required. Safety infrastructure (rescue divers, medical staff, warming facilities) mandatory.",
  },
  equipment: [
    { name: "Standard swimsuit", description: "Textile swimsuit; NO wetsuits, NO thermal materials, NO fins. IISA regulations strict on materials — traditional cotton/nylon/spandex only." },
    { name: "Swim cap (silicone)", description: "Standard silicone cap; helps with heat retention on head; single layer allowed." },
    { name: "Goggles", description: "Standard swimming goggles; anti-fog treatment critical (fogging in cold water rapid)." },
    { name: "Independent thermometer", description: "IISA-certified thermometer measuring water temperature to certify <5°C. Two independent temperature readings required for record certification." },
    { name: "Safety kayaker + support", description: "Rescue kayaker + support crew mandatory for open-water swims + Ice Miles." },
    { name: "Warming facilities", description: "Warm room / vehicle / thermal blankets + hot drinks immediately available post-swim." },
    { name: "Emergency medical supplies", description: "AED, oxygen, warmed IV fluids, medical staff on-site." },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "Distances: 50m (<1 min), 100m (1-2 min), 250m (3-4 min), 500m (7-10 min), 1000m (15-20 min), Ice Mile (25-35 min).",
  },
  objective:
    "Complete distance in shortest time possible; some events award for completing distance regardless of time. Ice Mile has no time limit but requires proper swimming technique throughout.",
  matchStructure:
    "Individual timed swims. Competition heats: 4-8 swimmers per heat; brackets narrow to finals. World Championships: separate events for each distance × men/women × age category. Ice Mile events: individual attempts throughout event window.",

  basicRules: [
    { title: "Water temperature <5°C", body: "Mandatory: certified <5°C (41°F). Two independent thermometer readings required." },
    { title: "Standard swimsuit only", body: "Textile swimsuit (nylon/spandex/cotton); NO wetsuits, NO thermal materials. Body must be exposed to cold water." },
    { title: "Swim cap + goggles allowed", body: "Standard silicone cap; goggles. That's the only protective equipment permitted." },
    { title: "Distance completed = official swim", body: "Must swim full distance without pausing on wall/bottom. Coach observation + video required." },
    { title: "Medical clearance mandatory", body: "Pre-swim medical screening required; cardiac + respiratory clearance from cold-water physician." },
    { title: "Safety infrastructure required", body: "Rescue diver + kayaker + medical + warming facilities mandatory at IISA events." },
    { title: "Post-swim medical monitoring", body: "Warming protocol + vitals monitoring for 30-60 minutes post-swim. Rewarming shock is major risk." },
  ],
  advancedRules: [
    { title: "Ice Mile certification", body: "1 mile in <5°C water; must complete distance; swim monitored; medical clearance pre + post. IISA maintains official Ice Mile registry." },
    { title: "Water temperature certification", body: "Independent thermometer readings 30 minutes pre-swim + at swim start; averaged for official temperature." },
    { title: "Butterfly + backstroke distances", body: "Some events include butterfly + backstroke; require additional technical mastery in cold water." },
    { title: "Age categories", body: "Separate championships by age group (18-29, 30-39, 40-49, 50-59, 60-69, 70+); women + men separate." },
    { title: "Extreme distance events", body: "Some athletes attempt 2-mile + 5K + longer ice swims; require specialized medical + safety protocols." },
    { title: "Weather cancellation", body: "Extreme conditions may cause postponement; safety trumps competition schedule." },
  ],
  scoring: {
    summary: "Time-based: fastest time wins. Ice Mile: completion certification (no time competition typically).",
    winCondition: "Fastest time in distance event wins. Ice Mile: certified completion = success (no ranking).",
    breakdown: [
      { action: "Fastest time in distance heat", points: "Advance to finals / medal" },
      { action: "Ice Mile completion", points: "Official IISA Ice Mile certification" },
      { action: "World Championship medal", points: "Individual event victory" },
      { action: "Age category championship", points: "Recognition per age group" },
    ],
  },
  penalties: [
    { title: "Illegal equipment (wetsuit, thermal materials)", body: "DQ from event." },
    { title: "Water temperature above 5°C", body: "Swim not counted as ice swim; may count as other event." },
    { title: "Insufficient safety infrastructure", body: "Event cancelled or postponed." },
    { title: "No medical clearance", body: "DQ from event participation." },
    { title: "Unsportsmanlike conduct", body: "Warning; DQ for serious offenses." },
  ],

  positions: [
    { name: "Swimmer", role: "Individual competitor.", count: 1 },
    { name: "Safety kayaker + rescue diver", role: "Mandatory water safety; positioned close to swimmer during open-water attempts." },
    { name: "Medical team (physician + support)", role: "Pre-swim screening + post-swim rewarming + emergency response." },
    { name: "Timekeeper + official", role: "Records time; certifies distance completion." },
    { name: "Coach / support", role: "Advises + prepares swimmer; monitors post-swim recovery." },
  ],
  officiating: {
    officials: ["IISA-certified officials", "Medical director", "Chief timekeeper", "Water safety director", "Independent thermometer operators"],
    summary: "Multi-official system due to safety-critical nature. Medical staff mandatory. IISA verification requires all safety + certification protocols followed.",
  },

  governingBodies: [
    { name: "International Ice Swimming Association (IISA)", founded: 2009, headquarters: "Cape Town, South Africa", website: "https://internationaliceswimming.com" },
    { name: "International Winter Swimming Association (IWSA)", founded: 2006, headquarters: "Finland" },
    { name: "USA Ice Swimming (national)", founded: 2015, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "IISA Ice Swimming World Championships", frequency: "biennial", founded: 2015, region: "worldwide (Tallinn 2015, Murmansk 2018, Kraljevica 2020, Samoëns 2023)" },
    { name: "IWSA World Winter Swimming Championships", frequency: "biennial", founded: 2000, region: "worldwide (Finland origin)" },
    { name: "European Ice Swimming Championships", frequency: "annual", founded: 2013, region: "Europe" },
    { name: "Ice Mile events (individual attempts)", frequency: "throughout winter", founded: 2009, region: "worldwide" },
    { name: "US Winter Swimming Championships", frequency: "annual", founded: 2015, region: "USA" },
  ],
  countriesPlayed: ["ZA", "GB", "DE", "FI", "SE", "NO", "IS", "EE", "LV", "LT", "RU", "US", "CA", "IE", "CZ", "AT", "PL", "AR", "CL"],
  famousAthletes: [
    "Ram Barkai (South Africa — IISA founder; pioneered polar ice swimming)",
    "Petar Stoychev (Bulgaria — elite ice swimming performer)",
    "Christof Wandratsch (Germany — multiple world record holder)",
    "Kim Chambers (New Zealand — Oceans Seven swimmer; Ice Mile pioneer)",
    "Lynne Cox (US — Bering Strait swim 1987; pre-IISA pioneer)",
    "Anna Vardaki (Greece — women's world champion multiple distances)",
    "Bhavani Prakash (Ireland — first person to complete Ice Sevens; extreme swimmer)",
    "Nataliya Usachova (Ukraine — ice swimming champion)",
    "Toks Viviers (South Africa — extreme cold-water swimming pioneer)",
    "Elaine Kelly Howley (US — Ice Mile completer + swimming author)",
  ],
  records: [
    { title: "First Ice Mile completion", holder: "Ram Barkai (South Africa)", value: "November 2009 in Table Bay; founded IISA + established Ice Mile as sport benchmark", year: 2009 },
    { title: "IISA founding", holder: "Ram Barkai + colleagues", value: "Founded 2009; codified ice swimming rules + certification", year: 2009 },
    { title: "First IISA World Championships", holder: "IISA", value: "Tallinn 2015; annual/biennial since", year: 2015 },
    { title: "1000m ice swim world record", holder: "Various — Christof Wandratsch + others", value: "Sub-13 minute times in <5°C water; extremely tight times", year: 2020 },
    { title: "Ice Sevens (7 Ice Miles in 7 continents)", holder: "Multiple athletes since 2017", value: "First accomplished 2017; ~30 completers by 2023", year: 2023 },
    { title: "Coldest documented Ice Mile", holder: "Various", value: "Ice Miles completed at <0°C water (with ice floes) — extreme extreme category", year: 2020 },
  ],

  variants: ["ice-mile-1609m", "iisa-competitive-distances", "informal-winter-swimming", "extreme-polar-swims", "ice-swimming-relay-events"],
  relatedSports: ["open-water-swimming", "cold-water-swimming", "winter-swimming", "channel-swimming"],

  skills: [
    "extreme cold-water tolerance (adaptation)",
    "efficient swimming stroke in cold water",
    "breath control (avoiding cold-water shock)",
    "hydrodynamic body position (heat conservation)",
    "mental focus (extreme discomfort + fear management)",
    "cold-water safety awareness",
    "recovery + rewarming protocols",
    "medical self-awareness (recognizing hypothermia signs)",
  ],
  strategies: [
    { title: "Gradual acclimatization", body: "Never attempt ice swimming without months of progressive cold-water exposure. Start in cool pool (15°C); progress through 10°C, 8°C, 6°C over 6+ months." },
    { title: "Efficient stroke = warmth", body: "Fast stroke rate + minimal drag = more body heat generation + shorter exposure time. Efficient technique is safety technique." },
    { title: "Head position + breathing", body: "Head-up stroke reduces heat loss from face; controlled breathing prevents cold-water gasp reflex." },
    { title: "Warm up before entering", body: "Light exercise + increased body temperature pre-entry helps combat cold shock." },
    { title: "Rewarming protocol", body: "Immediate post-swim rewarming: dry off + cover body + hot drinks + gradual warming (not shower). Rewarming shock is major risk." },
    { title: "Never swim alone", body: "Ice swimming without safety support = potentially fatal. Rescue kayaker + medical support mandatory always." },
    { title: "Medical monitoring", body: "Ongoing medical monitoring of body temperature + cardiac + respiratory during + after swim. Ice swimmers are effectively research subjects." },
  ],

  terminology: [
    { term: "Ice Mile", meaning: "1 statute mile (1.609 km) in water <5°C; sport's iconic achievement." },
    { term: "IISA", meaning: "International Ice Swimming Association; world governing body." },
    { term: "Cold water shock", meaning: "Immediate physiological response to entering cold water; can cause cardiac arrest." },
    { term: "Hypothermia", meaning: "Body temperature dropping below 35°C; life-threatening in cold water." },
    { term: "Rewarming shock", meaning: "Dangerous cardiovascular response to too-rapid warming post-swim." },
    { term: "Ice Sevens", meaning: "Achievement of Ice Mile in 7 continents; extreme ice swimming milestone." },
    { term: "Water certification", meaning: "Independent thermometer readings verifying water temperature <5°C." },
    { term: "Textile-only", meaning: "Rule: only standard swimsuit fabric; no wetsuits or thermal materials." },
    { term: "Ram Barkai", meaning: "South African swimmer; founded IISA 2009 + pioneered sport globally." },
    { term: "Polar swim", meaning: "Ice swim in polar or sub-polar location (Arctic, Antarctic)." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Get medical clearance from cold-water specialist", body: "Cardiac + respiratory clearance from physician familiar with cold-water immersion. NEVER attempt ice swimming without medical approval." },
      { title: "Winter swimming introduction (10-15°C)", body: "Start with informal winter swimming events in Nordic + UK + German-Austrian traditions; graduated cold exposure builds tolerance." },
      { title: "Never swim alone", body: "Even beginner cold-water swimming requires safety support. Join established winter swimming clubs; safety-in-numbers." },
    ] },
    { level: "intermediate", steps: [
      { title: "Progress through 8°C-5°C water", body: "Over 12-24 months, extend exposure duration + reduce temperature. IISA + IWSA recognized training programs." },
      { title: "Complete first IISA-certified ice swim", body: "50m or 100m in <5°C with proper certification + safety infrastructure. Formal entry into IISA competitive swimming." },
      { title: "Study cold-water physiology + safety", body: "Understanding your body's cold-water responses = essential for safe progression. Books + medical resources widely available." },
    ] },
    { level: "advanced", steps: [
      { title: "Attempt Ice Mile", body: "IISA Ice Mile certification requires: 1 mile in <5°C water; medical clearance; safety infrastructure; independent temperature verification. Entry into elite ice swimming." },
      { title: "Compete at IISA World Championships", body: "Biennial; multiple distance events + age categories; requires prior competitive Ice Mile or equivalent." },
      { title: "Consider Ice Sevens (Ice Mile in 7 continents)", body: "Extreme achievement pursued by dozen+ elite athletes; requires global travel + years of preparation." },
    ] },
  ],

  faq: [
    { question: "What is Ice Swimming?", answer: "Swimming in water below 5°C (41°F) with only standard swimsuit, cap, and goggles — NO wetsuits or thermal materials. Codified as competitive sport in 2009 by International Ice Swimming Association (IISA). Distances range from 50m to 1000m + iconic 'Ice Mile' (1 mile). Contested at IISA World Championships biennially; growing globally with 60+ member nations." },
    { question: "What is an 'Ice Mile'?", answer: "Swimming 1 statute mile (1.609 km) in water below 5°C without wetsuit — the sport's iconic achievement. Requires: certified water temperature (two independent readings), completed distance, medical clearance, safety infrastructure. Ram Barkai completed the first Ice Mile in Table Bay, South Africa November 2009 + founded IISA. As of 2023, ~1,000+ swimmers globally have completed an Ice Mile." },
    { question: "How dangerous is Ice Swimming?", answer: "EXTREMELY. Cold water shock can cause immediate cardiac arrest. Hypothermia can develop quickly; rewarming shock can be fatal. Absolutely requires medical clearance, gradual acclimatization over months/years, and safety infrastructure (rescue kayaker + medical team + rewarming facilities). Never attempt without proper preparation. Multiple deaths in ice swimming history; safety protocols minimize but don't eliminate risk." },
    { question: "How is Ice Swimming different from Winter Swimming?", answer: "Overlap significantly but with distinctions. Winter Swimming: informal cultural tradition in Nordic + Russian + German + Austrian communities; often includes ice-covered lakes but water may be 5-10°C; less strict certification. Ice Swimming: codified sport with <5°C water requirement + IISA rules + safety protocols + competition structure. Winter swimming is broader cultural practice; ice swimming is competitive discipline within it." },
    { question: "Who is the greatest ice swimmer?", answer: "Multiple candidates: (1) Ram Barkai (South Africa) — IISA founder + pioneer. (2) Christof Wandratsch (Germany) — multiple world records + extended career. (3) Petar Stoychev (Bulgaria) — elite performer. (4) Lynne Cox (US) — pre-IISA pioneer; first Bering Strait swim 1987. (5) Kim Chambers (New Zealand) — Oceans Seven + Ice Mile. Sport is young + evolving; historic legends + modern champions coexist." },
    { question: "Where can I learn Ice Swimming?", answer: "IISA-affiliated clubs in Northern Europe (Finland, Sweden, Norway, Estonia, Latvia, Russia), UK, Ireland, Germany, Austria, South Africa. Growing in USA + Canada + New Zealand + Australia. Best entry: join local winter swimming club; graduated cold-water exposure with medical supervision + experienced mentors. Never attempt independently without proper training + support." },
  ],

  wikipediaTitle: "Ice swimming",
  sources: [
    { label: "International Ice Swimming Association (IISA)", url: "https://internationaliceswimming.com", publisher: "IISA" },
    { label: "Wikipedia — Ice swimming", url: "https://en.wikipedia.org/wiki/Ice_swimming", publisher: "Wikipedia" },
    { label: "International Winter Swimming Association", url: "https://iwsa.info", publisher: "IWSA" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const alpineSkiing: Sport = {
  id: "alpine-skiing",
  slug: "alpine-skiing",
  name: "Alpine Skiing",
  officialName: "Alpine Skiing",
  aliases: ["Downhill skiing", "World Cup skiing"],
  shortDescription:
    "Winter racing sport where skiers descend a snow-covered mountain course through gates, in five disciplines from slow-turn slalom to 130 km/h downhill.",
  longDescription:
    "Alpine skiing is a competitive snow-sport in which racers descend a marked mountain course through a series of gates, aiming for the fastest possible time. The five FIS World Cup disciplines are slalom (short, technical turns), giant slalom (larger turns), super-G (wider turns at higher speed), downhill (longest, fastest course with jumps), and combined (a downhill/super-G run plus a slalom). Modern alpine ski racing originated in Kandahar, Austria (1911) and was included in the Winter Olympics in 1936. Top speeds in downhill exceed 150 km/h. The FIS Alpine World Cup circuit runs November-March across Europe, North America and Asia.",

  category: "winter-sports",
  subCategory: "gate-racing",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "winter",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "AT",
  regionOfOrigin: "Austrian Alps",
  estimatedOrigin: "First alpine race 1911 (Kandahar Cup, Montana, Switzerland — organised by Arnold Lunn); Olympic 1936",

  players: { min: 1, max: 200, note: "Individual race down the course; only one skier on-course at a time for elite races." },
  field: {
    surfaceName: "ski course",
    dimensions: "Slalom 180-220 m vertical drop, 55-75 gates; GS 300-450 m drop; super-G 400-650 m; downhill 750-1100 m drop and 2-5 km long.",
    description: "Groomed snow slope with plastic slalom poles or panelled gates marking the race line, safety netting alongside jumps and turns, and a start hut, timing wand, and finish gate.",
  },
  equipment: [
    { name: "Alpine skis", description: "Discipline-specific: slalom skis are short (155-165 cm men, deep sidecut for quick turns), downhill skis long (215+ cm)." },
    { name: "Ski boots", description: "Rigid plastic race boots that transfer edge power directly to the skis." },
    { name: "Poles", description: "Bent (aerodynamic) poles for downhill, straight for slalom; slalom poles have shin guards." },
    { name: "Helmet with chin guard", description: "Mandatory FIS-approved helmet; chin guard required in slalom to protect from gate impacts." },
    { name: "Race suit", description: "Aerodynamic Lycra suit; downhill/super-G suits must pass a minimum permeability test." },
    { name: "Goggles", description: "Anti-fog racing goggles with lens colour matched to light conditions." },
    { name: "Back protector", description: "Mandatory for downhill and super-G." },
  ],
  duration: {
    approximateMinutes: 5,
    structure: "Slalom & GS: two runs on different courses; combined time decides. Super-G & DH: single run.",
    note: "A downhill run lasts 90-120 s; a slalom run ~45-55 s. Total event time on-course is only a few minutes; qualification / heats can add hours.",
  },
  objective: "Complete the course through all required gates in the shortest time.",
  matchStructure:
    "Racers start one at a time from a starting hut, launching through a wand that triggers the electronic clock. They ski the marked course, passing each gate correctly. Missing a gate or straddling it is a disqualification. Time is recorded at the finish photocell to 0.01 s. Two-run events sum both times; single-run events post the direct time.",

  basicRules: [
    { title: "Pass all gates", body: "Both ski tips and both feet must cross the gate line on the correct side; missing or straddling a gate is a DSQ." },
    { title: "Start wand", body: "Timing begins when the racer's shin pushes past the wand; leaving early is a DSQ (in later start intervals)." },
    { title: "Course inspection", body: "Racers may inspect the course by sideslipping alongside it before racing — no free skiing on the race line." },
    { title: "Fall lines", body: "A fallen racer may get up and continue only if no gates have been missed after the fall." },
    { title: "Two-run rule (SL & GS)", body: "Slalom and GS have two runs on different course settings; combined time wins." },
    { title: "Speed suits", body: "FIS regulates suit air permeability to prevent suits that behave like a wind-baffle." },
    { title: "Slalom rerun", body: "If a slalom pole is out of position from a previous racer's fall, the affected racer may request a rerun." },
  ],
  advancedRules: [
    { title: "Reverse-30 start order (run 2)", body: "In two-run events, the top 30 from run 1 start in reverse order in run 2 (fastest goes last), rewarding a strong first run." },
    { title: "DSQ vs DNF", body: "DSQ for missing a gate or equipment violation; DNF (did not finish) for a fall / hook out where the racer can't cross the finish." },
    { title: "Combined event", body: "One super-G or downhill run plus one slalom run; times summed." },
    { title: "Weather cancellation", body: "The chief of race can cancel or shorten for wind, visibility or snow safety; races may run at reduced speed." },
    { title: "Parallel events", body: "Head-to-head knockout format on twin identical courses; used in team events and parallel slalom." },
  ],
  scoring: {
    summary: "Ranked by finishing time; fastest legal completion wins.",
    breakdown: [
      { action: "Legal completion", points: "time to 0.01 s", note: "Ties result in duplicate podium positions." },
      { action: "Two-run sum (SL/GS)", points: "sum of times", note: "Skiers who DSQ or DNF in run 1 don't take run 2." },
      { action: "FIS World Cup points", points: "100-1", note: "Top 30 in each race score points toward season globes." },
    ],
    winCondition: "Fastest cumulative time.",
  },

  officiating: {
    officials: ["Race Director (FIS)", "Chief of Race", "Course Setter", "Referee & Jury (starter, technical delegate, chief timekeeper)", "Gate judges", "Course crew"],
    summary: "The jury (5+ officials led by a FIS-appointed Technical Delegate) has final authority. Gate judges monitor each gate and report faults. Timekeeping is fully automated to 0.01 s.",
  },
  governingBodies: [
    { name: "International Ski and Snowboard Federation", acronym: "FIS", founded: 1924, headquarters: "Oberhofen am Thunersee, Switzerland", website: "https://www.fis-ski.com" },
    { name: "US Ski & Snowboard", founded: 1905, headquarters: "Park City, USA", website: "https://usskiandsnowboard.org" },
  ],
  majorCompetitions: [
    { name: "Winter Olympic Games", frequency: "quadrennial", founded: 1936, region: "worldwide" },
    { name: "FIS Alpine World Ski Championships", frequency: "biennial", founded: 1931, region: "worldwide" },
    { name: "FIS Alpine World Cup", frequency: "annual", founded: 1966, region: "worldwide (Nov-Mar circuit)" },
    { name: "Hahnenkamm Downhill (Kitzbühel)", frequency: "annual", founded: 1931, region: "Austria", note: "The most prestigious classic downhill; the 'Streif' is skiing's most feared racecourse." },
  ],
  countriesPlayed: ["AT", "CH", "IT", "FR", "DE", "NO", "SE", "US", "CA", "SI", "CZ", "SK", "LI", "JP"],
  famousAthletes: [
    "Ingemar Stenmark",
    "Marcel Hirscher",
    "Alberto Tomba",
    "Hermann Maier",
    "Lindsey Vonn",
    "Mikaela Shiffrin",
    "Marcel Nadig",
    "Aksel Lund Svindal",
    "Anja Pärson",
    "Bode Miller",
    "Marco Odermatt",
    "Federica Brignone",
  ],
  records: [
    { title: "Most FIS World Cup wins (men)", holder: "Ingemar Stenmark", value: "86", year: 1989 },
    { title: "Most FIS World Cup wins (women)", holder: "Mikaela Shiffrin", value: "99+ (career, still active)", year: 2025 },
    { title: "Most Olympic alpine medals", holder: "Kjetil André Aamodt", value: "8 (4 gold, 2 silver, 2 bronze)", year: 2006 },
    { title: "Fastest speed in downhill", holder: "Johan Clarey", value: "161.9 km/h (Wengen)", year: 2013 },
  ],

  variants: ["slalom", "giant-slalom", "super-g", "downhill", "combined", "parallel-slalom", "team-event", "para-alpine"],
  relatedSports: ["ski-cross", "freestyle-skiing", "para-alpine-skiing"],

  skills: [
    "edge control",
    "explosive lower-body power",
    "aerodynamic tucking",
    "course memorisation",
    "reading terrain and light",
    "fearlessness at speed",
    "quick reflexes for course line",
  ],
  strategies: [
    { title: "Aggressive line vs safety line", body: "The straightest line saves time but is easier to hook a gate; safer arcs sacrifice time but preserve possession of both skis." },
    { title: "Tuck aerodynamics", body: "In downhill, minimising frontal area with a low tuck matters more than raw fitness — Bertran, Franz." },
    { title: "First-run strategy", body: "In slalom, secure a top-30 finish; conservative on tricky sections, aggressive on flush sections." },
    { title: "Powder or ice", body: "Adjust ski wax and edge sharpness to match snow conditions." },
  ],

  terminology: [
    { term: "DSQ", meaning: "Disqualification — usually for missing a gate." },
    { term: "DNF", meaning: "Did not finish — fell, straddled or otherwise couldn't finish." },
    { term: "Wand", meaning: "The starting bar the skier pushes past to trigger the timer." },
    { term: "Corridor", meaning: "The corridor between two adjacent gate pairs — the racing line." },
    { term: "Panel gate", meaning: "The larger flag-panel gate used in speed disciplines (SG and DH)." },
    { term: "Turning gate / offset gate", meaning: "In slalom, the small hinged pole the racer strikes with shin and hand." },
    { term: "Bib", meaning: "Race number, worn over the race suit; bibs 1-15 usually get the freshest snow in run 1." },
    { term: "Tuck", meaning: "Aerodynamic low crouch used on straight sections and airtime landings." },
    { term: "Streif", meaning: "The Hahnenkamm downhill course in Kitzbühel — most famous / feared racecourse." },
    { term: "Combined", meaning: "Two-part event: a speed run plus a slalom run; times added." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Wedge stops", body: "Learn to snowplow and stop on gentle greens." },
      { title: "Parallel turns", body: "Progress from wedge to skis-parallel turns on blue runs." },
      { title: "Edge to edge", body: "Feel the ski edges gripping and releasing on hardpack." },
      { title: "First gates", body: "Ski a set of stubby slalom gates set wide apart on a moderate slope." },
    ] },
    { level: "intermediate", steps: [
      { title: "Carving", body: "Skid-free turns leaving railroad tracks; upper body downhill, lower body angulating." },
      { title: "Course tactics", body: "Look 2-3 gates ahead; commit to line before each gate." },
      { title: "Slalom pole striking", body: "Cross-blocking hand and shin against the gate for a straighter line." },
      { title: "Speed events", body: "Progress to super-G with jumps; learn tuck and pre-jumping." },
    ] },
    { level: "advanced", steps: [
      { title: "Course inspection", body: "Sideslip alongside the course, memorising key gates, terrain rolls and light changes." },
      { title: "Micro-adjustment on the fly", body: "Shift weight mid-turn to recover from an over-aggressive line." },
      { title: "Race pacing", body: "In two-run events, know when to hold back in run 1 to secure a top-30 spot." },
    ] },
  ],
  faq: [
    { question: "What are the five alpine skiing disciplines?", answer: "Slalom (SL), giant slalom (GS), super-G (SG), downhill (DH), and combined (AC) — a downhill/super-G run plus a slalom." },
    { question: "How fast do downhill racers go?", answer: "Peak speeds in downhill are ~140-160 km/h; the Wengen Lauberhorn regularly clocks 155+ km/h." },
    { question: "Why do slalom racers wear shin and hand guards?", answer: "They strike hinged slalom poles as they pass to shorten their line; guards protect from repeated pole impact." },
    { question: "What is 'cross-blocking'?", answer: "Swinging the outside hand across the body to knock a slalom pole out of the way — allows a tighter line." },
    { question: "How is the winner decided in a downhill?", answer: "Single run against the clock; fastest legal time to 0.01 s wins." },
  ],

  wikipediaTitle: "Alpine skiing",
  sources: [
    { label: "Wikipedia — Alpine skiing", url: "https://en.wikipedia.org/wiki/Alpine_skiing", publisher: "Wikipedia" },
    { label: "FIS International Ski Competition Rules (ICR) — Alpine", url: "https://www.fis-ski.com/en/inside-fis/document-library/alpine-documents", publisher: "FIS" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

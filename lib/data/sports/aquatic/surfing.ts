import type { Sport } from "@/lib/types";

export const surfing: Sport = {
  id: "surfing",
  slug: "surfing",
  name: "Surfing",
  officialName: "Surfing",
  aliases: ["Boardriding", "Wave-riding", "He'e nalu (Hawaiian)"],
  shortDescription:
    "Surface water sport in which a rider stands on a floating board and rides the face of an unbroken breaking ocean wave toward shore, performing manoeuvres for judged scores.",
  longDescription:
    "Surfing is the art and sport of riding waves — sliding along the moving face of a wave, typically standing on a buoyant board. It originated among Polynesian peoples over 1,500 years ago and was central to Hawaiian culture (he'e nalu, 'wave-sliding'). Duke Kahanamoku, three-time Olympic swimmer and Hawaiian ambassador, spread surfing globally in the early 20th century. Competitive surfing scores riders on manoeuvres, speed, power, flow, difficulty, and innovation as they ride each wave (heat lasts 20-35 min with 2-4 surfers; best 2 waves score counts). Modern professional surfing is governed by the World Surf League (WSL), whose Championship Tour features the world's top 34 men and 17 women competing on iconic waves from Pipeline (Hawaii) to Teahupo'o (Tahiti). Surfing debuted at the Tokyo 2020 Olympics; Paris 2024's surfing venue was Teahupo'o, Tahiti.",

  category: "aquatic-sports",
  subCategory: "wave riding",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isProfessional: true,
  season: "year-round",
  era: "ancient",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Polynesia / Hawaii",
  estimatedOrigin: "Polynesian origins over 1,500 years ago; Hawaiian he'e nalu documented by 18th-century European explorers; global spread by Duke Kahanamoku early 1900s",

  players: { min: 1, max: 4, note: "Solo activity; competition heats typically 2-4 surfers per heat." },
  field: {
    surfaceName: "surf break",
    dimensions: "Open ocean; competitive waves 1.5-9+ metres (5-30+ ft) face height.",
    description: "Ocean waves breaking over a reef (Pipeline, Teahupo'o), point (Jeffreys Bay, Bells Beach), or beach (Hossegor, Trestles). Different bottoms create different wave shapes: hollow reef breaks (tubes), long point walls, or peaky beach breaks.",
  },
  equipment: [
    { name: "Surfboard", description: "Shortboard (5'8\"-6'6\", 20-22\" wide, 2.5\" thick) for pro shortboard; longboard (9\"+); big-wave boards up to 12\"; foam or PU core with fibreglass/epoxy laminate." },
    { name: "Fins", description: "3-5 fins on the tail; tri-fin 'thruster' is standard; quad and 2+1 also common." },
    { name: "Leash", description: "Urethane cord tethering ankle to board tail." },
    { name: "Wax", description: "Applied to deck for grip." },
    { name: "Wetsuit", description: "3/2 mm to 6/5/4 mm depending on water temperature; boardshorts in tropical water." },
    { name: "Traction pad", description: "Foam grip on tail for the back foot." },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "Casual surf session: 1-3 hours. Competitive heat: 20-35 minutes with 2-4 surfers, best 2 wave scores count.",
    note: "Big-wave events (Nazaré, Mavericks): 60-90 min heats; unpredictable wave windows.",
  },
  objective: "Ride the face of a breaking wave with speed, power, and flow, executing manoeuvres judged on innovation, difficulty, and combination. Recreationally: maximise time on the wave.",
  matchStructure:
    "In competition, 2-4 surfers enter the water for a 20-35 min heat. Each surfer catches waves; only the top 2 scores per surfer count toward the heat total. Priority rules govern who has right-of-way on each wave. Each ride is scored 0-10 by 5 judges based on the entire ride (top and bottom scores dropped, middle three averaged). Highest heat total advances.",

  basicRules: [
    { title: "Priority rule", body: "In competition, the surfer with priority has right-of-way on any wave they choose. Priority rotates after use." },
    { title: "Interference", body: "Non-priority surfer riding a priority-holder's wave = interference; scoring wave reduced or halved." },
    { title: "Wave count", body: "Each surfer's heat total = sum of their best 2 wave scores." },
    { title: "Judge scoring (0-10)", body: "5 judges rate each ride 0-10 (in 0.1 increments); top and bottom scores dropped, middle 3 averaged." },
    { title: "Heat length", body: "Championship tour heats are 30-35 min; qualifying series usually 20-25 min." },
    { title: "Longboard specific", body: "Longboard heats award additional score for traditional walking, noseriding (five toes or ten toes over)." },
  ],
  advancedRules: [
    { title: "Scoring criteria", body: "Judges evaluate: commitment, difficulty, innovation, variety of manoeuvres, and speed/power/flow. A single dominant manoeuvre (huge air, deep barrel) can score 9+ alone." },
    { title: "Barrel scoring", body: "Deep, long, and stylish tube rides typically score 8-10. Getting 'pitted' in a heavy tube is the highest-value manoeuvre." },
    { title: "Aerials", body: "Airs are judged on height, style, completion, and landing. Frontside/backside air-reverses common in modern shortboarding." },
    { title: "Excellent range (8-10)", body: "8.0-10.0 = excellent. Championship-winning waves usually require at least one score in this range." },
    { title: "Big-wave events", body: "Judged more on wave size, commitment, and control; XXL Awards recognise biggest waves paddled/towed each year." },
  ],
  scoring: {
    summary: "Each ride scored 0-10 by 5 judges; best 2 rides per surfer combined = heat total (max 20.0).",
    breakdown: [
      { action: "Poor", points: "0.0-1.9" },
      { action: "Fair", points: "2.0-3.9" },
      { action: "Average", points: "4.0-5.9" },
      { action: "Good", points: "6.0-7.9" },
      { action: "Excellent", points: "8.0-10.0" },
      { action: "Heat total (best 2 waves)", points: "0.0-20.0" },
      { action: "Perfect heat", points: "20.0 (two 10.0 rides)", note: "Extremely rare — Kelly Slater's 20.0 heat at Teahupo'o 2005 is legendary." },
    ],
    winCondition: "Highest heat total advances; final heat wins the event.",
  },

  officiating: {
    officials: ["Head Judge", "5 Judges (per event)", "Priority Judge", "Beach Marshal"],
    summary: "5 judges per heat score waves independently. Priority judge tracks right-of-way. Head Judge oversees and can adjust for interference calls.",
  },
  governingBodies: [
    { name: "World Surf League", acronym: "WSL", founded: 2015, headquarters: "Santa Monica, USA", website: "https://www.worldsurfleague.com/" },
    { name: "International Surfing Association", acronym: "ISA", founded: 1964, headquarters: "La Jolla, USA", website: "https://isasurf.org/" },
  ],
  majorCompetitions: [
    { name: "WSL Championship Tour (CT)", frequency: "annual (10-11 events)", founded: 1976, region: "worldwide — Pipeline, Teahupo'o, J-Bay, Bells, Trestles, Rio, El Salvador, Snapper" },
    { name: "Olympic Games Surfing", frequency: "quadrennial", founded: 2020, region: "worldwide (Tokyo 2020: Tsurigasaki; Paris 2024: Teahupo'o)" },
    { name: "ISA World Surfing Games", frequency: "annual", founded: 1964, region: "worldwide" },
    { name: "Vans Triple Crown of Surfing (Hawaii)", frequency: "annual (Nov-Dec)", founded: 1983, region: "Oahu, Hawaii" },
    { name: "WSL Big Wave Tour / XXL Awards", frequency: "annual", founded: 2009, region: "worldwide" },
  ],
  countriesPlayed: ["US", "AU", "BR", "PT", "FR", "ZA", "ID", "JP", "PE", "CR", "SV", "MX", "NZ", "CL", "MA"],
  famousAthletes: [
    "Kelly Slater (USA) — 11× WSL World Champion, GOAT of surfing",
    "Duke Kahanamoku (Hawaii) — Olympic swimmer who spread surfing worldwide",
    "Mick Fanning (Australia) — 3× World Champion; famous 2015 J-Bay shark encounter",
    "John John Florence (Hawaii) — 2× World Champion, Pipeline master",
    "Gabriel Medina (Brazil) — 3× World Champion, first Brazilian world champ",
    "Filipe Toledo (Brazil) — 2× World Champion, aerial specialist",
    "Layne Beachley (Australia) — 7× WSL Women's World Champion",
    "Stephanie Gilmore (Australia) — 8× World Champion, most all-time women's",
    "Carissa Moore (Hawaii) — 5× World Champion, Tokyo 2020 Olympic gold",
  ],
  records: [
    { title: "Most WSL World Titles (men)", holder: "Kelly Slater", value: "11 (1992, 1994-98, 2005-08, 2010-11)", year: 2011 },
    { title: "Most WSL World Titles (women)", holder: "Stephanie Gilmore", value: "8 (2007-10, 2012, 2014, 2018, 2022)", year: 2022 },
    { title: "Largest wave surfed (Guinness)", holder: "Sebastian Steudtner (Germany)", value: "26.2 m (86 ft), Nazaré, Portugal", year: 2020 },
    { title: "First perfect 10.0 in Olympic Surfing", holder: "Kanoa Igarashi (Japan)", value: "Teahupo'o, Paris 2024", year: 2024 },
    { title: "Kelly Slater's oldest CT event win", holder: "Kelly Slater", value: "50 years old — Billabong Pipeline Pro 2022", year: 2022 },
  ],

  variants: ["shortboard", "longboard", "big-wave-surfing", "sup-surfing", "bodyboarding", "bodysurfing", "kneeboarding", "tow-in-surfing"],
  relatedSports: ["bodyboarding", "windsurfing", "kitesurfing", "wakesurfing"],

  skills: [
    "paddling strength and endurance",
    "wave reading and positioning",
    "balance and pop-up",
    "rail-to-rail transitions",
    "tube-riding awareness",
    "aerial technique",
    "fitness in cold water / big surf",
  ],
  strategies: [
    { title: "Read the sets", body: "Waves come in sets of 3-5. Position yourself for the biggest wave (usually 3rd or 4th of a set)." },
    { title: "Priority management (comp)", body: "Sit deeper than opponents with priority; force them to burn priority on smaller waves." },
    { title: "Big score early", body: "Get a 7-8+ in the first 10 minutes so opponents have to chase 8+ scores under pressure." },
    { title: "Wave selection over quantity", body: "Judges score your BEST 2 waves — not average. Wait for excellent waves instead of frittering on marginal ones." },
    { title: "Play the barrel", body: "In hollow waves (Pipeline, Teahupo'o), commit early to the tube — a deep barrel scores higher than any turn combo." },
  ],

  terminology: [
    { term: "Pop-up", meaning: "The motion of springing from prone paddle position to standing on the board." },
    { term: "Take-off", meaning: "The moment you catch the wave and stand up." },
    { term: "Barrel / Tube", meaning: "The hollow cylinder inside a breaking wave; riding inside it is 'getting barreled' or 'shacked'." },
    { term: "Lineup", meaning: "The area beyond the breakers where surfers wait for waves." },
    { term: "Set", meaning: "A group of larger waves arriving together (usually 3-6)." },
    { term: "Priority", meaning: "The right to the next wave in a heat; strictly rotates after use." },
    { term: "Snake / drop-in", meaning: "Taking off in front of another surfer who is already riding; a serious etiquette breach." },
    { term: "Wipeout", meaning: "Falling off the board mid-ride." },
    { term: "Kick-out", meaning: "Deliberately exiting a wave by turning over the top of the wave." },
    { term: "Bottom turn", meaning: "The turn at the base of the wave leading into the next manoeuvre." },
    { term: "Cutback", meaning: "A curving turn back toward the breaking part of the wave." },
    { term: "Air (aerial)", meaning: "Any manoeuvre where the board leaves the wave surface." },
    { term: "Duck dive", meaning: "Pushing the nose of your board under an oncoming wave to punch through it." },
    { term: "Turtle roll", meaning: "Flipping a longboard upside down to let a wave pass over it (paddling out)." },
    { term: "Point break / Reef break / Beach break", meaning: "Types of surf breaks based on ocean bottom." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn on a soft-top longboard", body: "9'+ foam board for stability; small (1-2 ft) white-water waves at a beach break." },
      { title: "Paddle and pop-up", body: "Practice pop-up on dry sand 20-50 times before entering water." },
      { title: "White water rides", body: "Catch broken waves and ride straight toward shore standing up." },
      { title: "Ocean awareness", body: "Learn to spot rips, identify sets, understand tide impact." },
    ] },
    { level: "intermediate", steps: [
      { title: "Catch unbroken waves", body: "Position further out; paddle into the wave BEFORE it breaks." },
      { title: "Bottom turn and cutback", body: "First 'real' manoeuvres — using the wave face to generate speed." },
      { title: "Drop down board size", body: "Move from longboard to funboard (7'-8') then shortboard (6'-6'6\")." },
      { title: "Progressive surf spots", body: "Progress to reef breaks and shoulder-high waves." },
    ] },
    { level: "advanced", steps: [
      { title: "Tube riding", body: "Read wave shape, commit to hollow section, keep low with a high line." },
      { title: "Aerials", body: "Explosive off-the-lip → rotate → land back on wave face. Requires small strong waves and progressive board." },
      { title: "Competitive surfing", body: "Enter QS (Qualifying Series) events; work toward CT (Championship Tour) qualification." },
      { title: "Big wave", body: "20-ft+ waves require specialised inflation vests, tow-in equipment, and elite paddle strength — extreme risk category." },
    ] },
  ],
  faq: [
    { question: "Where was surfing invented?", answer: "It originated among Polynesian peoples over 1,500 years ago and was central to ancient Hawaiian culture ('he'e nalu' = wave sliding). Captain Cook's crew documented Hawaiians surfing in 1778." },
    { question: "What is 'Pipeline'?", answer: "The Banzai Pipeline on Oahu's North Shore — the world's most famous surf spot, known for perfect hollow tubes over a shallow reef. Hosts the annual WSL Pipeline Pro." },
    { question: "How dangerous is big-wave surfing?", answer: "Extremely. Surfers have drowned or been severely injured at spots like Mavericks (California), Nazaré (Portugal), and Teahupo'o (Tahiti). Modern safety includes inflation vests, jetskis, and swim-team support." },
    { question: "When was surfing added to the Olympics?", answer: "Tokyo 2020 (held in 2021 at Tsurigasaki Beach, Japan). Paris 2024's surfing venue was Teahupo'o, Tahiti — 15,000 km from Paris." },
    { question: "How is a surf heat scored?", answer: "5 judges score each wave 0-10; top and bottom scores dropped, middle 3 averaged. Each surfer's heat total = sum of their 2 best wave scores (max 20.0)." },
    { question: "What's a 'perfect 10'?", answer: "A single wave scored 10.0 out of 10 by the middle 3 judges. Usually requires a huge barrel, multiple critical manoeuvres, and completion. Extremely rare." },
  ],

  wikipediaTitle: "Surfing",
  sources: [
    { label: "Wikipedia — Surfing", url: "https://en.wikipedia.org/wiki/Surfing", publisher: "Wikipedia" },
    { label: "World Surf League", url: "https://www.worldsurfleague.com/", publisher: "WSL" },
    { label: "International Surfing Association", url: "https://isasurf.org/", publisher: "ISA" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

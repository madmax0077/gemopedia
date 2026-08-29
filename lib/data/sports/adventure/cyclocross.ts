import type { Sport } from "@/lib/types";

export const cyclocross: Sport = {
  id: "cyclocross",
  slug: "cyclocross",
  name: "Cyclocross",
  officialName: "Cyclocross (Union Cycliste Internationale - UCI)",
  aliases: ["CX", "Cyclo-cross", "Veldrijden (Dutch)"],
  shortDescription:
    "Off-road cycling discipline — 40-60 minute laps around a technical closed course featuring mud + sand + obstacles + hurdles requiring dismount; UCI-sanctioned World Championships since 1950; Belgian + Dutch dominance.",
  longDescription:
    "Cyclocross is an off-road cycling discipline where riders race 40-60 minute laps around a technical closed course featuring mud, sand, hurdles requiring dismount, steep run-ups, and pavement sections. Emerged in Europe in early 1900s as winter training for road cyclists; developed into own discipline with UCI World Championships since 1950. Traditional season: October-February (winter). UCI Cyclocross World Cup + Superprestige + X²O Trofee + Ethias Cross series structure competitive calendar. Belgium + Netherlands dominate historically — Wout van Aert (Belgium — 3× World Champion) + Mathieu van der Poel (Netherlands — 5× World Champion) + Sanne Cant (Belgium — women's 7× World Champion) + Lucinda Brand (Netherlands — women's champion). Not Olympic despite established UCI World Championships since 1950. Sport considered pinnacle of cycling technique + off-road skill.",

  category: "adventure-extreme-sports",
  subCategory: "off-road cycling — closed-course technical race",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isProfessional: true,
  season: "winter",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "FR",
  regionOfOrigin: "France + Belgium (early 1900s); UCI-sanctioned World Championships from 1950",
  estimatedOrigin: "Emerged Europe early 1900s as winter training for road cyclists; UCI World Championships from 1950; Belgian + Dutch cultural dominance",

  players: { min: 1, max: 1, note: "Individual competition; team standings from national totals." },
  field: {
    surfaceName: "Technical closed course — mud + sand + pavement + hurdles + run-ups",
    dimensions: "~2.5-3.5 km loop; 8-12 laps per race; 40-60 minute race duration",
    description: "Purpose-built or natural terrain courses featuring: mud sections (often deep), sand pits requiring pedaling technique, hurdles requiring rider to dismount + carry bike over, steep run-ups (running with bike), varied surfaces including pavement + gravel. Barriers 40cm high.",
  },
  equipment: [
    { name: "Cyclocross bike", description: "Drop-bar bike similar to road bike but with knobby tires + wider clearance + cantilever/disc brakes for mud. Weight 7-9 kg. Cost $2K-$10K entry to competitive." },
    { name: "Multiple bike wheelsets (mud + drier conditions)", description: "Riders swap bikes multiple times per race for optimal tire condition; team support critical." },
    { name: "Cyclocross tires (33mm max UCI regulation)", description: "Knobby off-road tires; different treads for mud, dry, sand, ice conditions." },
    { name: "Helmet + eyewear + cyclocross-specific shoes", description: "Standard cycling helmet + wraparound eyewear + mountain-bike style shoes with cleats + gripping soles for run-ups." },
    { name: "Race gear + gloves", description: "Cold-weather cycling kit; often heavy conditions in muddy Belgian winter." },
  ],
  duration: { approximateMinutes: 55, structure: "Elite race: 60 min (women's 40-50 min). Full event: 3-4 hours across all classes." },
  objective: "Cross finish line first (position-based points).",
  matchStructure: "Mass start with pre-assigned grid based on UCI ranking + previous results. 8-12 laps depending on course length + weather.",

  basicRules: [
    { title: "Grid position from UCI ranking", body: "Pre-assigned grid based on world ranking + previous season points; top rider = front row." },
    { title: "First across finish line wins", body: "Race position at finish = points awarded per UCI scheme." },
    { title: "Bike changes allowed in pits", body: "Riders may swap bikes multiple times per race for tire condition; team support provides clean bikes." },
    { title: "Multiple laps to lap-time timing", body: "Race timed by laps; riders lapped by leaders may be pulled from race." },
    { title: "Hurdles + run-ups require dismount", body: "Riders must dismount for hurdles (40cm barriers) + steep sections; often carry bike on shoulder." },
    { title: "UCI regulations on bike + tires", body: "Tires max 33mm; drop handlebars required; specific frame regulations." },
  ],
  scoring: {
    summary: "Points per race position; season champion = highest cumulative points.",
    winCondition: "Race win + season championship. Season champion = highest cumulative points across World Cup + Superprestige + Trofee series.",
    breakdown: [
      { action: "World Cup race win", points: "80 UCI points" },
      { action: "Race podium", points: "60-40 pts" },
      { action: "Points to 15th typical", points: "Descending scale" },
      { action: "UCI World Championship win", points: "Rainbow jersey + prestige" },
    ],
  },

  positions: [
    { name: "Rider", role: "Solo racer.", count: 1 },
    { name: "Team mechanic + pit crew", role: "Bike swapping + cleaning during race." },
    { name: "Team director", role: "Season strategy + race tactics." },
  ],
  officiating: {
    officials: ["Chief Commissaire", "Line judges", "Timekeepers", "Medical staff"],
    summary: "UCI-certified officials; strict enforcement of bike + course regulations.",
  },

  governingBodies: [
    { name: "Union Cycliste Internationale (UCI)", founded: 1900, headquarters: "Aigle, Switzerland", website: "https://uci.org" },
    { name: "Belgian Cycling", founded: 1882, headquarters: "Brussels, Belgium" },
    { name: "Dutch Cycling Federation (KNWU)", founded: 1928, headquarters: "Netherlands" },
    { name: "USA Cycling", founded: 1920, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "UCI Cyclocross World Championships", frequency: "annual (January-February)", founded: 1950, region: "worldwide (rotating hosts)" },
    { name: "UCI Cyclocross World Cup", frequency: "annual (October-February)", founded: 1993, region: "worldwide" },
    { name: "Superprestige (Belgian series)", frequency: "annual (November-February)", founded: 1983, region: "Belgium + Netherlands + Netherlands" },
    { name: "X²O Trofee (Belgian series)", frequency: "annual", founded: 1987, region: "Belgium + Netherlands" },
    { name: "Ethias Cross", frequency: "annual", founded: 2018, region: "Belgium" },
  ],
  countriesPlayed: ["BE", "NL", "US", "CZ", "GB", "FR", "IT", "DE", "SP", "PL", "SK"],
  famousAthletes: [
    "Mathieu van der Poel (Netherlands — 5× World Champion; considered greatest ever)",
    "Wout van Aert (Belgium — 3× World Champion + long career)",
    "Sanne Cant (Belgium — women's 7× World Champion 2009+2013+2016-2020)",
    "Lucinda Brand (Netherlands — women's World Champion + long career)",
    "Sven Nys (Belgium — 2× World Champion + 8× Superprestige)",
    "Adrie van der Poel (Netherlands — 1× World Champion + Mathieu's father)",
    "Katie Compton (USA — 15× USA National Champion + World Championship medals)",
    "Marianne Vos (Netherlands — multi-time World Champion + Olympic road cyclist)",
    "Tim Merlier (Belgium — Superprestige podium)",
    "Puck Pieterse (Netherlands — women's modern star)",
  ],
  records: [
    { title: "Most Cyclocross World Championships (men)", holder: "Mathieu van der Poel (Netherlands)", value: "5× World Champion 2015+2019+2020+2021+2023; considered greatest ever", year: 2023 },
    { title: "Most women's Cyclocross World Championships", holder: "Sanne Cant (Belgium)", value: "7× World Champion 2009+2013+2016+2017+2018+2019+2020", year: 2020 },
    { title: "UCI World Championships longevity", holder: "UCI Cyclocross World Championships", value: "Continuous since 1950; sport's peak international event", year: 2024 },
    { title: "Belgian + Dutch dominance", holder: "Belgium + Netherlands", value: "Nearly every men's + women's World Championship medal since 2005; sport's dominant nations", year: 2023 },
  ],

  variants: ["uci-cyclocross-world-championships-annual", "uci-cyclocross-world-cup-annual", "belgian-superprestige-series", "regional-cyclocross-national-championships"],
  relatedSports: ["mountain-biking", "road-cycling", "gravel-cycling", "adventure-racing"],

  skills: ["technical bike handling", "off-camber cornering", "running with bike on shoulder", "quick dismounts + remounts", "sand + mud + snow riding", "cardiovascular fitness (60-min intense race)"],

  terminology: [
    { term: "Cyclocross", meaning: "Off-road cycling discipline on closed technical courses." },
    { term: "CX", meaning: "Common abbreviation for Cyclocross." },
    { term: "Barriers", meaning: "40cm hurdles requiring dismount + carry." },
    { term: "Run-up", meaning: "Steep section requiring running with bike on shoulder." },
    { term: "Pit", meaning: "Bike-swapping zone where riders exchange dirty for clean bikes." },
    { term: "Superprestige", meaning: "Belgian series; sport's prestige circuit alongside UCI World Cup." },
    { term: "Mathieu van der Poel", meaning: "Dutch rider; 5× World Champion; considered GOAT." },
    { term: "Wout van Aert", meaning: "Belgian rider; 3× World Champion; van der Poel's chief rival." },
    { term: "Rainbow jersey", meaning: "UCI World Champion's award; worn for 1 year." },
  ],

  faq: [
    { question: "What is Cyclocross?", answer: "Off-road cycling discipline where riders race 40-60 minute laps around a technical closed course featuring mud, sand, hurdles requiring dismount, steep run-ups, and pavement sections. Emerged in Europe early 1900s as winter training for road cyclists. UCI World Championships annually since 1950. Traditional season October-February (winter). Belgium + Netherlands dominate historically." },
    { question: "Who is the greatest cyclocross rider?", answer: "Multiple candidates: (1) Mathieu van der Poel (Netherlands) — 5× World Champion 2015+2019+2020+2021+2023; considered GOAT. (2) Wout van Aert (Belgium) — 3× World Champion + long career + van der Poel's chief rival. (3) Sven Nys (Belgium) — 2× World Champion + 8× Superprestige. (4) Sanne Cant (Belgium) — women's 7× World Champion. Modern rivalry between van der Poel + van Aert has elevated the sport." },
    { question: "How is Cyclocross different from Mountain Biking?", answer: "Cyclocross: closed 2.5-3.5 km loops with barriers + run-ups + varied surfaces; drop-bar bikes with narrow tires (max 33mm); winter season; 40-60 min races. Mountain Biking (MTB): open trails or purpose-built downhill courses; flat-bar bikes with wide knobby tires + suspension; summer season; longer races. Cyclocross rewards technique + running + off-camber skill; MTB rewards descent skill + endurance." },
    { question: "Is Cyclocross in the Olympics?", answer: "No, despite UCI-sanctioned World Championships since 1950. UCI has explored Olympic pathway but IOC has not accepted. Sport is niche outside Belgium + Netherlands + USA + Central Europe. UCI Cyclocross World Championships remains sport's peak international event." },
    { question: "Where is Cyclocross popular?", answer: "Belgium + Netherlands (sport's home + dominant nations), USA (growing scene), Czech Republic, Great Britain, France, Germany, Poland. Belgian races draw 30,000+ spectators; sport is cultural obsession in Flanders region. USA has strong developmental scene with USA Cycling Cyclocross Nationals." },
  ],

  wikipediaTitle: "Cyclo-cross",
  sources: [{ label: "UCI Cyclocross", url: "https://uci.org/cyclo-cross", publisher: "UCI" }, { label: "Wikipedia — Cyclo-cross", url: "https://en.wikipedia.org/wiki/Cyclo-cross", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

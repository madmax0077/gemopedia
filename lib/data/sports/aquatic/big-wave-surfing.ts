import type { Sport } from "@/lib/types";

export const bigWaveSurfing: Sport = {
  id: "big-wave-surfing",
  slug: "big-wave-surfing",
  name: "Big Wave Surfing",
  officialName: "Big Wave Surfing (World Surf League Big Wave Tour)",
  aliases: ["Big Wave", "Big Wave Riding", "Tow-In Surfing (assisted)", "Paddle Big Wave"],
  shortDescription:
    "Extreme surfing on waves 20+ feet (6+ meters) at legendary breaks — Mavericks, Nazaré, Jaws, Cortes Bank — using specialized 'guns' (long boards) or jet ski tow-ins; contested at World Surf League Big Wave Tour + XXL Big Wave Awards.",
  longDescription:
    "Big Wave Surfing is the extreme discipline of surfing riding waves 20+ feet (6+ meters) — increasingly 50-80+ feet (15-24m) at legendary breaks. It requires specialized long 'gun' boards (9-11 feet) for paddle-in and jet ski assistance for tow-in on the biggest days. Big wave surfing emerged in the 1950s with Buzzy Trent + Greg Noll pioneering large-wave breaks at Waimea Bay (Hawaii); the sport professionalized in the 1990s with tow-in surfing (Laird Hamilton + Buzzy Kerbox 1990s) opening 50+ foot waves. The World Surf League (WSL) Big Wave Tour was established 2015; the annual XXL Big Wave Awards recognize the biggest waves surfed each year. Legendary big-wave breaks: Mavericks (California), Nazaré (Portugal — 100+ foot faces recorded), Jaws/Peahi (Maui, Hawaii), Cortes Bank (California — remote 100+ mile offshore), Waimea Bay (Hawaii), Puerto Escondido (Mexico), Ghost Tree (California), Belharra (France). Iconic riders: Laird Hamilton (Hawaii — big-wave pioneer), Garrett McNamara (US — 78-foot Nazaré 2011 world record), Rodrigo Koxa (Brazil — 80-foot Nazaré 2017 world record), Sebastian Steudtner (Germany — 86-foot Nazaré 2020 world record), Andrew Cotton (UK), Justine Dupont (France), Maya Gabeira (Brazil — women's record 73.5 feet Nazaré 2020).",

  category: "aquatic-sports",
  subCategory: "surfing — extreme large-wave riding",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "winter",
  era: "20th-century",
  popularity: "regional",

  countryOfOrigin: "US",
  regionOfOrigin: "United States (Hawaii — Waimea Bay 1950s); California (Mavericks 1990s); Portugal (Nazaré modern era); global",
  estimatedOrigin: "Buzzy Trent + Greg Noll pioneering Waimea Bay 1957; Mavericks discovery Jeff Clark 1975; Nazaré modern era via Garrett McNamara 2011; WSL Big Wave Tour 2015",

  players: { min: 1, max: 4, note: "Individual competition; some tow-in events have driver + surfer pairs." },
  field: {
    surfaceName: "Ocean — deep-water reef or point break",
    dimensions: "Wave face: 20-100+ feet vertical; wave period: 15-25 seconds; ride length: 100-500 meters typical",
    description: "Specific big-wave breaks in ocean: Nazaré (Portugal — 100+ foot faces from underwater canyon), Mavericks (California — reef break), Jaws (Maui — reef 3/4 mile offshore), Waimea Bay (Hawaii). Requires precise ocean + swell forecasting; storm systems create surfable conditions maybe 1-10 days per year per break.",
  },
  equipment: [
    { name: "Big-wave gun surfboard", description: "Long narrow board (9-11 feet); needle-shaped for paddle speed + wave entry; 4-6 kg; brands: Chilli, Pyzel, Channel Islands." },
    { name: "Tow-in surfboard (assisted)", description: "Shorter (6-8 feet) heavier board with foot straps; jet-ski tow-in allows riding 60+ foot waves. Extra weight prevents wind lift on huge faces." },
    { name: "Jet ski (tow-in)", description: "1000cc+ personal watercraft; used for tow-in + rescue; driver + surfer team required." },
    { name: "Inflatable safety vest", description: "Personal flotation with CO2 cartridges for automatic inflation after wipeout; life-saving in hold-downs." },
    { name: "Leash", description: "Ankle leash tethering surfer to board; must be extra-strong for big waves (10mm typical)." },
    { name: "Wetsuit", description: "Cold-water breaks (Mavericks, Nazaré): 5-6mm full suit + hood + gloves + booties. Warm-water (Fiji, Tahiti): 2-3mm typical." },
    { name: "Watersport helmet (some athletes)", description: "Protects head from board strikes + underwater impact." },
    { name: "Impact vest", description: "Padded torso protection against underwater impact from wipeouts." },
    { name: "Oxygen supply (rescue)", description: "Emergency oxygen for hold-down victims; carried on rescue jet skis." },
  ],
  duration: {
    approximateMinutes: 3,
    structure: "Single wave ride: 30 seconds to 2 minutes. Competition heat: 30-60 minutes. Full contest: 2-8 hours depending on conditions.",
  },
  objective:
    "Ride biggest, best-performed waves. Competition: score highest on judged criteria (wave size, commitment, ride length, technique). Non-competition: personal challenge + record attempts.",
  matchStructure:
    "Competition format varies. World Surf League Big Wave Tour: 30-60 minute heats; judges score best 2 waves per surfer; head-to-head or 4-surfer heats. XXL Big Wave Awards: photographers document biggest waves ridden globally each year; committee scores for annual awards.",

  basicRules: [
    { title: "Wave size threshold (20+ feet)", body: "Traditional big wave: 20+ foot face. Modern extreme: 50-100+ feet. Different events have different minimum thresholds." },
    { title: "Paddle vs. tow-in", body: "Paddle: rider paddles into wave using own power. Tow-in: jet ski pulls surfer onto wave for speeds impossible via paddle. Different disciplines + rules." },
    { title: "Judged scoring criteria", body: "Wave size, commitment (dropping into steep face), ride length, technique (bottom turn, cutback quality), risk taken." },
    { title: "Best 2 waves per heat", body: "Competition: judges score all waves ridden; best 2 scores counted toward total." },
    { title: "Safety requirements", body: "Inflatable safety vests + rescue jet skis mandatory at Big Wave Tour events. Individual surfers responsible for own safety in non-competition." },
    { title: "Wave priority (competition)", body: "Standard surfing wave priority rules apply; surfer closest to peak has priority." },
    { title: "Weather-dependent events", body: "Big Wave Tour events have wait periods (10-30 days) waiting for optimal swell. Events run only on prime days." },
  ],
  advancedRules: [
    { title: "Nazaré Challenge format", body: "Portuguese Big Wave Tour event; specific format for the world's biggest waves. Tow-in typically required." },
    { title: "Mavericks Invitational format", body: "California event; paddle-in traditional; wait period for optimal winter swells." },
    { title: "XXL Big Wave Award categories", body: "Annual awards for: Biggest Wave, Best Ride, Best Wipeout, Women's Overall, Ride of the Year, Verified Biggest Paddle-In." },
    { title: "Wave measurement disputes", body: "Wave height historically disputed; modern events use standardized photograph + video measurement + physics analysis." },
    { title: "Guinness World Record verification", body: "Sebastian Steudtner's 86-foot Nazaré wave (2020) verified as Guinness World Record; multi-agency photographic + video review process." },
    { title: "Personal watercraft support (rescue)", body: "Multiple jet skis on rescue duty at Big Wave Tour events; surfers who wipe out picked up within 30 seconds." },
    { title: "Cortes Bank remote break", body: "100 miles offshore Southern California; requires boat access; only surfed a few times per year by specialists." },
  ],
  scoring: {
    summary: "Judged 0-10 per wave on 5 criteria; best 2 waves count toward total. Overall winner has highest 2-wave total.",
    winCondition: "Highest total from best 2 waves in the heat/event. Season championship = cumulative points across all Big Wave Tour events.",
    breakdown: [
      { action: "Wave size score", points: "0-3 (larger = higher)" },
      { action: "Commitment score", points: "0-2 (steeper drop = higher)" },
      { action: "Ride length score", points: "0-2 (longer clean ride = higher)" },
      { action: "Technique score", points: "0-2 (bottom turn quality, cutbacks)" },
      { action: "Risk / difficulty score", points: "0-1 (aerial + critical positions)" },
      { action: "Total per wave", points: "0-10" },
      { action: "Best 2 waves per heat", points: "Sum = final total" },
    ],
  },
  penalties: [
    { title: "Wave priority interference", body: "Waves scored zero if snake-drop-in violation." },
    { title: "Wipeout unsafe recovery", body: "No score for waves where rider immediately abandons." },
    { title: "Illegal jet-ski assistance (paddle-only)", body: "DQ from event if tow-in during paddle event." },
    { title: "Unsportsmanlike conduct", body: "Warning; DQ for repeated." },
    { title: "Late arrival to heat", body: "Reduced time for heat; potential DQ." },
  ],

  positions: [
    { name: "Surfer", role: "Rides waves; competes for scoring wave positions.", count: 1 },
    { name: "Jet-ski driver (tow-in)", role: "Partners with surfer for tow-in; provides rescue after wipeouts.", count: 1 },
    { name: "Water safety crew", role: "Multiple jet-ski + water-based rescue personnel; medical support ashore." },
    { name: "Judges (competition)", role: "Score waves 0-10; 5+ judges typical.", count: 5 },
  ],
  officiating: {
    officials: ["Head Judge", "5+ Scoring Judges", "Water Safety Director", "Event Director", "Medical Team"],
    summary: "WSL-certified officials at Big Wave Tour events; head judge oversees; independent scoring dropped high/low; water safety mandatory due to life-threatening nature.",
  },

  governingBodies: [
    { name: "World Surf League (WSL)", founded: 1976, headquarters: "Santa Monica, USA", website: "https://worldsurfleague.com" },
    { name: "International Surfing Association (ISA)", founded: 1964, headquarters: "La Jolla, USA", website: "https://isasurf.org" },
    { name: "Association of Professional Surfers (APS, predecessor)", founded: 1976, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "WSL Big Wave Tour (Titans of Mavericks, Nazaré Challenge, Jaws Big Wave, Pe'ahi)", frequency: "annual (season-dependent)", founded: 2015, region: "worldwide (host breaks)" },
    { name: "XXL Big Wave Awards", frequency: "annual", founded: 2000, region: "worldwide (documentation-based)" },
    { name: "Punta Galea Big Wave Championship", frequency: "annual", founded: 2010, region: "Basque Country, Spain" },
    { name: "The Eddie (Eddie Aikau Big Wave Invitational)", frequency: "wait period annual", founded: 1985, region: "Waimea Bay, Hawaii" },
  ],
  countriesPlayed: ["US", "PT", "AU", "BR", "FR", "ES", "MX", "ZA", "IE", "CL", "PE", "NZ", "IE", "ID"],
  famousAthletes: [
    "Laird Hamilton (Hawaii — big-wave pioneer + Jaws/Peahi legendary rides)",
    "Garrett McNamara (US — 78-foot Nazaré wave 2011; pioneered Nazaré as big-wave venue)",
    "Rodrigo Koxa (Brazil — 80-foot Nazaré wave 2017; former world record)",
    "Sebastian Steudtner (Germany — 86-foot Nazaré wave 2020; current Guinness World Record)",
    "Andrew Cotton (UK — Nazaré + Ireland big-wave specialist)",
    "Justine Dupont (France — multiple XXL awards; women's Big Wave Tour champion)",
    "Maya Gabeira (Brazil — 73.5-foot Nazaré wave 2020; women's Guinness record)",
    "Kai Lenny (Hawaii — multi-discipline champion; big-wave + foil surfing)",
    "Grant 'Twiggy' Baker (South Africa — 3× Big Wave Tour champion)",
    "Peter Mel (US — Big Wave Tour champion; contest director)",
    "Nathan Fletcher (US — Wave of the Winter multiple XXL awards)",
    "Bianca Valenti (US — women's big-wave pioneer; equal-pay advocate)",
  ],
  records: [
    { title: "Largest wave ridden (Guinness World Record)", holder: "Sebastian Steudtner (Germany)", value: "86 feet (26.21 m) at Nazaré, Portugal Oct 29 2020", year: 2020 },
    { title: "Largest wave ridden by a woman (Guinness World Record)", holder: "Maya Gabeira (Brazil)", value: "73.5 feet (22.4 m) at Nazaré, Portugal Feb 11 2020", year: 2020 },
    { title: "Nazaré emergence", holder: "Garrett McNamara", value: "78-foot wave 2011 put Nazaré on global big-wave map", year: 2011 },
    { title: "Mavericks winter", holder: "Various", value: "Winter storm conditions produce 40-60 foot Mavericks waves; regularly documented since 1990s", year: 2020 },
    { title: "Longest single ride (big wave)", holder: "Various", value: "1+ km rides recorded at right-hand point breaks; measured via GPS", year: 2020 },
    { title: "Fatal accidents", holder: "Big wave history", value: "20+ documented big-wave surfing deaths since 1943; safety improvements reduce recent rate", year: 2023 },
  ],

  variants: ["paddle-big-wave-traditional", "tow-in-big-wave-assisted", "sup-big-wave-experimental", "foil-big-wave-emerging"],
  relatedSports: ["surfing", "windsurfing", "kitesurfing", "sup-paddleboarding", "wing-foiling"],

  skills: [
    "extreme paddling fitness (getting into 30-60 foot waves requires massive stroke power)",
    "wave-reading (positioning for take-off)",
    "commitment + fear management (life-threatening consequences)",
    "underwater breath-holding (2+ minute hold-downs possible)",
    "board control at extreme speeds (30+ mph on wave face)",
    "physical conditioning (2-3 hour sessions in cold water)",
    "recovery from wipeouts (staying calm during hold-downs)",
  ],
  strategies: [
    { title: "Wave selection", body: "Not every big wave is rideable. Choose waves with makeable exit paths + long ride potential; avoid closeout sets (walls of whitewater)." },
    { title: "Commit to takeoff", body: "Hesitation at the drop = wipeout. Once committed, keep paddling until edge tips over falls." },
    { title: "Bottom turn depth", body: "Deeper bottom turn = more line control + longer rides. Extreme commitment required at 40+ foot faces." },
    { title: "Manage hold-downs", body: "Wipeout in 40+ foot wave = 30-60 second hold-down. Practice breath-holds; stay calm; ride current up before struggling." },
    { title: "Rescue coordination", body: "Tow-in partner + rescue jet ski protocols; know rescue signal; trust safety team implicitly." },
    { title: "Fitness base", body: "6-12 months annual big-wave fitness prep: swim training, breath-hold practice, ocean conditioning, sustained paddling drills." },
    { title: "Study forecasts + swells", body: "Big-wave surfers spend 90% of time watching forecasts + traveling to swells. Precise ocean + wind + tide forecasting essential." },
  ],

  terminology: [
    { term: "Big wave", meaning: "Traditionally 20+ foot face; modern extreme 50-100+ feet." },
    { term: "Gun", meaning: "Long narrow surfboard (9-11 feet) for paddling into large waves." },
    { term: "Tow-in", meaning: "Jet-ski assisted takeoff on waves too big for paddling." },
    { term: "Hold-down", meaning: "Extended underwater time after wipeout; 30-60+ seconds on huge waves." },
    { term: "Rag doll", meaning: "Being tumbled underwater by wave; helpless." },
    { term: "Set", meaning: "Group of waves arriving at intervals." },
    { term: "Closeout", meaning: "Wave that breaks all at once as a wall; unrideable." },
    { term: "Take-off", meaning: "Moment of catching the wave; hardest moment on big waves." },
    { term: "Drop", meaning: "Descent from top of wave to base; the visual signature of big-wave surfing." },
    { term: "Bottom turn", meaning: "Turn at the base of wave; sets up subsequent maneuvers." },
    { term: "Aikau", meaning: "The Eddie invitational; named after legendary lifeguard Eddie Aikau (died 1978 in rescue)." },
    { term: "XXL", meaning: "Big Wave Awards; annual recognition of the year's biggest waves surfed." },
    { term: "Nazaré", meaning: "Portuguese village + break; site of world's biggest documented surfed waves (86 ft record)." },
    { term: "Mavericks", meaning: "California break; 40-60 foot winter storm waves; iconic paddle-in break." },
    { term: "Jaws / Peahi", meaning: "Maui break; site of Laird Hamilton's tow-in pioneering." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Master intermediate surfing first (5+ years)", body: "Big-wave surfing requires decades of surfing experience. Don't attempt without deep ocean + wave knowledge." },
      { title: "Cross-train ocean skills", body: "Swimming, freediving, breath-holds, ocean lifeguarding. Big-wave surfing is an ocean sport, not just a board sport." },
      { title: "Study big-wave literature + videos", body: "Documentaries (Riding Giants, 100 Foot Wave), books (Stealing Feet by Bob Riehl), athlete interviews. Understand history + risks before pursuing." },
    ] },
    { level: "intermediate", steps: [
      { title: "Ride medium-sized waves consistently (10-20 feet)", body: "Progression to big waves requires 10-20 foot confidence first. Spots: Sunset Beach (Hawaii), Cortes Bank buoy (California), local hurricane swells." },
      { title: "Find mentor + safety-conscious partners", body: "Big-wave community is small + safety-focused. Attach to experienced mentor; never attempt big-wave surfing solo." },
      { title: "Attend big-wave training camps", body: "Kalani Robb + Laird Hamilton run big-wave training programs; teach specific fitness + safety protocols." },
    ] },
    { level: "advanced", steps: [
      { title: "Enter Big Wave Tour qualifying series", body: "WSL Big Wave Tour has entry pathway via qualifying results at big-wave breaks. Requires video + resume + safety team." },
      { title: "Target XXL Big Wave Awards nomination", body: "Get photographed + videoed on largest waves possible each year; XXL Award nominations recognized globally." },
      { title: "Pioneer new breaks + charge biggest days", body: "Elite big-wave surfers travel globally for optimal storms; 100 Foot Wave documentary follows this life." },
    ] },
  ],

  faq: [
    { question: "What is Big Wave Surfing?", answer: "Surfing waves 20+ feet (6+ meters) — increasingly 50-80+ feet (15-24m). Requires specialized long 'gun' boards for paddling + jet ski assistance for tow-in on the biggest days. Legendary breaks: Nazaré (Portugal), Mavericks (California), Jaws/Peahi (Maui), Waimea Bay (Hawaii). Contested at World Surf League Big Wave Tour + XXL Big Wave Awards annually." },
    { question: "What is the world's biggest wave ever surfed?", answer: "Sebastian Steudtner (Germany) surfed an 86-foot (26.21 m) wave at Nazaré, Portugal on October 29, 2020 — verified as Guinness World Record. Maya Gabeira (Brazil) holds women's Guinness record: 73.5 feet (22.4 m) at Nazaré on February 11, 2020. Bigger waves have been reportedly ridden but not officially verified." },
    { question: "Why is Nazaré so big?", answer: "Underwater canyon topography. The Nazaré Canyon extends 5+ km into the Atlantic and 5 km deep. Storm swells traveling through the canyon focus + amplify wave energy toward the beach, producing waves 3-5× larger than surrounding areas. During peak winter storms, Nazaré produces 60-100+ foot faces — the world's largest surfable waves consistently." },
    { question: "How dangerous is Big Wave Surfing?", answer: "Life-threatening. Waves 40+ feet can hold surfers underwater 30-60+ seconds after wipeout; 20+ documented deaths since 1943 (Sion Milosky 2011 at Mavericks; Márcio Freire 2023 at Nazaré). Multi-hundred-thousand-dollar rescue infrastructure at events. Safety equipment (inflatable vests, jet ski rescue, oxygen supply) reduces but doesn't eliminate risk. Anyone attempting big-wave surfing must accept fatal risk." },
    { question: "How do surfers paddle into 30+ foot waves?", answer: "For traditional paddle-in big-wave surfing (up to ~50 feet): specialized long 'gun' boards (9-11 feet) generate massive paddle speed; surfers time their paddle strokes precisely to match wave speed at takeoff. For waves 50-80+ feet: paddle is impossible; jet ski tows the surfer onto the wave (tow-in surfing). Modern trend: paddle-in has extended to ~50 feet; tow-in dominates above 60 feet." },
    { question: "Where can I watch Big Wave Surfing?", answer: "WSL Big Wave Tour events — World Surf League website + YouTube. HBO Max: 100 Foot Wave documentary (Garrett McNamara at Nazaré). Documentaries: Riding Giants, Chasing Mavericks, Momentum Generation. Live streams during winter storm swells at Mavericks, Nazaré, Peahi (Jaws). Instagram: @wsl, individual athletes (@laird_hamilton, @mayagabeira, @sebastiansteudtner)." },
  ],

  wikipediaTitle: "Big wave surfing",
  sources: [
    { label: "World Surf League — Big Wave Tour", url: "https://worldsurfleague.com/tours/big-wave-tour", publisher: "WSL" },
    { label: "Wikipedia — Big wave surfing", url: "https://en.wikipedia.org/wiki/Big_wave_surfing", publisher: "Wikipedia" },
    { label: "Guinness World Records — Largest surfed wave", url: "https://guinnessworldrecords.com/", publisher: "Guinness" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

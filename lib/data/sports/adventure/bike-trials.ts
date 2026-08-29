import type { Sport } from "@/lib/types";

export const bikeTrials: Sport = {
  id: "bike-trials",
  slug: "bike-trials",
  name: "Bike Trials",
  officialName: "Bicycle Trials (UCI Trials World Cup)",
  aliases: ["Trials", "Bike Trial", "Trial Riding", "Trials Biking"],
  shortDescription:
    "Extreme balance sport where riders navigate obstacle courses on specialized minimal-suspension bikes without touching foot to ground — jumping, balancing, and traversing walls, boulders, and beams at competitive events; contested at UCI Trials World Cup + Youth Olympic Games.",
  longDescription:
    "Bike Trials (also 'Trials' or 'Bicycle Trials') is an extreme cycling discipline where riders navigate obstacle courses of natural or man-made obstacles (walls, boulders, beams, drops, gaps) on specialized minimal-suspension bikes — typically without touching foot to ground. Riders are penalized for foot-downs ('dabs') and for failing to complete obstacles within time limits. The sport evolved from motorcycle trials in the 1970s-80s in Spain + France; the Union Cycliste Internationale (UCI) recognized it in 2000. Bikes come in two main formats: 20-inch wheel (Modified Trials, agile + technical) and 26-inch wheel (Stock Trials, easier for larger riders). The UCI Trials World Cup circuit hosts multiple annual events; Trials was contested at the Youth Olympic Games (Nanjing 2014, Buenos Aires 2018). Legendary riders: Kenny Belaey (Belgium — multiple UCI World Championships), Vincent Hermance (France — multi-time UCI World Champion), Danny MacAskill (Scotland — YouTube phenomenon with 500M+ views; not competition-focused), Andrei Burton (UK — competition specialist).",

  category: "adventure-extreme-sports",
  subCategory: "extreme cycling — obstacle balance sport",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",

  countryOfOrigin: "ES",
  regionOfOrigin: "Spain (evolved from motorcycle trials 1970s); France; global spread via UCI recognition 2000",
  estimatedOrigin: "Evolved from motorcycle trials 1970s-80s Spain + France; UCI recognition 2000; Youth Olympic Games 2014",

  players: { min: 1, max: 1, note: "Individual competition; team standings calculated at national + UCI events." },
  field: {
    surfaceName: "Obstacle course — natural terrain or purpose-built",
    dimensions: "Course area typically 30-50m × 20-30m; obstacles ranging 30cm to 3m+ in height + up to 3m gaps",
    description: "Purpose-built or natural terrain courses with 5-8 sections; each section has entry + exit points + specific obstacles (walls, boulders, beams, gaps, drops). Riders navigate section within time limit; foot-downs = penalty.",
  },
  equipment: [
    { name: "Trials bike (20-inch Modified or 26-inch Stock)", description: "Specialized minimal-suspension bike; no seat (or very low); powerful brakes; single gear; short wheelbase. 20-inch = agile technical; 26-inch = larger riders." },
    { name: "Rim brakes or disc brakes (powerful)", description: "Hydraulic disc brakes standard on modern bikes; must lock rear wheel instantly for hop maneuvers." },
    { name: "Sticky tire compound", description: "Ultra-soft rubber compound for grip on rocks + wet surfaces; wears fast but provides maximum traction." },
    { name: "Bash guard + chain guide", description: "Protects chainring from impact; keeps chain aligned during aggressive hopping." },
    { name: "Helmet (mandatory in competition)", description: "MTB-style helmet; some events require full-face for higher-risk sections." },
    { name: "Padded shorts + knee/elbow pads", description: "Recommended for training; mandatory at some competition levels." },
    { name: "Cycling shoes", description: "Flat-pedal shoes with sticky rubber sole (5.10 Freerider style); allow quick foot repositioning." },
  ],
  duration: {
    approximateMinutes: 5,
    structure: "Per section: 1-3 min time limit. Full competition: 5-8 sections × riders = 3-5 hours total.",
  },
  objective:
    "Navigate obstacle sections with fewest penalty points (foot-downs, section failures, time overruns). Winner has lowest cumulative penalty score across all sections.",
  matchStructure:
    "Riders complete 5-8 sections in sequence. Each section: 1-3 minute time limit. Foot-down = 1 penalty. Section abandonment = 5 penalties. All riders complete same course; winner = lowest total penalty across all sections.",

  basicRules: [
    { title: "No foot-down ('dab')", body: "Rider's foot must not touch ground within section. Each dab = 1 penalty point." },
    { title: "Section time limits", body: "Each section has 1-3 minute time limit; time exceeded = 5 penalties (section failure)." },
    { title: "Section start + end lines", body: "Rider must cross both entry + exit lines. Failure to complete section = 5 penalties." },
    { title: "Bike must clear obstacles", body: "Bike must actually navigate obstacle (not just rider stepping over)." },
    { title: "Lowest total penalty wins", body: "Cumulative penalties across all sections; lowest score wins the event." },
    { title: "Multiple attempts per section (some formats)", body: "Some events allow multiple attempts per section; only best (lowest penalty) counts." },
    { title: "Categories: 20-inch + 26-inch", body: "Separate competition classes for smaller (20-inch, technical) vs. larger (26-inch, more capable) bikes." },
  ],
  advancedRules: [
    { title: "Trials Elite vs. Semi-Elite classifications", body: "Elite: top international riders; Semi-Elite: developing pros; multiple amateur classes." },
    { title: "Section design principles", body: "Each section balances technical difficulty + creative interpretation. Designers create sections that reward different technique styles." },
    { title: "Judging + observer system", body: "Section judges track penalties in real-time; observer at each section confirms; disputes go to Chief Judge." },
    { title: "Youth Olympic Games format", body: "Youth Olympic Trials uses modified simplified rules for younger athletes; Buenos Aires 2018 was Trials' second Youth Olympic appearance." },
    { title: "UCI World Cup circuit", body: "Multi-round international circuit; final standings determine World Cup champion; separate 20-inch + 26-inch classifications." },
    { title: "Section replay after failure", body: "Some events allow multiple attempts; only best (lowest penalty) counts. Encourages careful line-reading." },
    { title: "Team events", body: "National team formats exist; combined individual scores determine team ranking." },
  ],
  scoring: {
    summary: "Lowest cumulative penalty score wins. Penalties: 1 per foot-down, 5 per section failure, 5 per time overrun.",
    winCondition: "Lowest total penalty points across all sections wins. Ties broken by fewest foot-downs, then fastest completion times.",
    breakdown: [
      { action: "Complete section clean (no foot-down)", points: "0 penalties" },
      { action: "Foot-down (dab)", points: "1 penalty" },
      { action: "Section failure (abandonment or time overrun)", points: "5 penalties" },
      { action: "Bike touching obstacle wrongly", points: "Depending on section rules; often 1-5 penalties" },
      { action: "Tiebreak", points: "Fewest foot-downs first; then fastest cumulative time" },
    ],
  },
  penalties: [
    { title: "Foot-down", body: "1 penalty per foot-down." },
    { title: "Section failure / abandonment", body: "5 penalties." },
    { title: "Time overrun", body: "5 penalties (some events allow retries)." },
    { title: "Illegal equipment (non-compliant bike)", body: "DQ from event." },
    { title: "Unsportsmanlike conduct", body: "Warning; DQ for repeated." },
    { title: "Off-course", body: "5 penalties + potential DQ for repeated." },
  ],

  positions: [
    { name: "Rider", role: "Individual competitor navigating sections.", count: 1 },
    { name: "Coach + observer", role: "Between-section advice; note-taking on obstacles." },
    { name: "Section judges", role: "Count penalties + confirm completion in real-time." },
  ],
  officiating: {
    officials: ["Chief Judge", "Section judges (per section)", "Timekeeper", "Course designer/observer"],
    summary: "UCI-certified officials; section judges + observers track penalties in real-time; disputes go to Chief Judge; video review available for major events.",
  },

  governingBodies: [
    { name: "Union Cycliste Internationale (UCI)", founded: 1900, headquarters: "Aigle, Switzerland", website: "https://uci.org" },
    { name: "British Cycling — Trials", founded: 1959, headquarters: "Manchester, UK", website: "https://britishcycling.org.uk" },
    { name: "USA Cycling — Trials", founded: 1920, headquarters: "Colorado Springs, USA", website: "https://usacycling.org" },
    { name: "Federación Española de Ciclismo (RFEC)", founded: 1896, headquarters: "Madrid, Spain" },
  ],
  majorCompetitions: [
    { name: "UCI Trials World Cup", frequency: "annual (5-8 rounds)", founded: 2000, region: "worldwide" },
    { name: "UCI Trials World Championships", frequency: "annual", founded: 1986, region: "worldwide" },
    { name: "Youth Olympic Games (Trials)", frequency: "quadrennial", founded: 2014, region: "worldwide" },
    { name: "European Trials Championships", frequency: "annual", founded: 1985, region: "Europe" },
    { name: "World Games (Trials)", frequency: "quadrennial", founded: 2005, region: "worldwide" },
  ],
  countriesPlayed: ["ES", "FR", "BE", "GB", "DE", "CZ", "IT", "US", "JP", "PL", "AT", "CH", "NL", "TW", "AU"],
  famousAthletes: [
    "Kenny Belaey (Belgium — multiple UCI Trials World Championships; sport's modern legend)",
    "Vincent Hermance (France — multi-time UCI World Champion)",
    "Danny MacAskill (Scotland — YouTube phenomenon; 500M+ views; iconic sport ambassador)",
    "Andrei Burton (UK — competition specialist; multiple UCI podiums)",
    "Ashton Rewi (New Zealand — youth star)",
    "Nicolò Barzaghi (Italy — multi-time UCI World Championship medalist)",
    "Sergi Llongueras (Spain — historic Spanish trials master)",
    "Cesar Cañas (Spain — multiple World Championship medals)",
    "Ryan Leech (Canada — pioneer + YouTube educator)",
    "Ot Pi (Spain — historic bike trials master; pioneering rider)",
  ],
  records: [
    { title: "First UCI Trials World Championships", holder: "UCI", value: "First held 1986; annual since", year: 1986 },
    { title: "Highest single-hop record", holder: "Various", value: "1.6+ meters vertical hop from stationary; multiple Guinness records", year: 2020 },
    { title: "Youth Olympic Games debut", holder: "Nanjing 2014", value: "Bike Trials contested at Youth Olympics 2014 + 2018", year: 2014 },
    { title: "Danny MacAskill viral phenomenon", holder: "Danny MacAskill", value: "500M+ YouTube views; largest sport ambassador reach ever", year: 2023 },
    { title: "UCI recognition", holder: "UCI", value: "Trials recognized as UCI discipline 2000", year: 2000 },
  ],

  variants: ["20-inch-modified-trials", "26-inch-stock-trials", "urban-trials-street-obstacles", "natural-trials-outdoor-boulders", "junior-trials-modified"],
  relatedSports: ["motorcycle-trials", "bmx", "mountain-biking", "parkour", "freestyle-scooter"],

  skills: [
    "extreme balance + core control",
    "brake control (locking rear wheel)",
    "pedal-hop technique",
    "spatial awareness + line-reading",
    "commitment (jumping to obstacles requires no hesitation)",
    "recovery from imperfect landings",
    "endurance (multiple sections per event)",
  ],
  strategies: [
    { title: "Read the line first", body: "Before attempting section, walk it. Visualize every wheel placement, brake tap, and hop. Mistake in mental line = mistake in physical execution." },
    { title: "Master the pedal-hop", body: "Core Trials technique — hop bike vertically or horizontally using pedals + brakes. Practice hundreds of times daily." },
    { title: "Brake modulation", body: "Locking + releasing rear brake precisely allows control of pivots + hop initiation. Sensitive brake technique separates good from great." },
    { title: "Commit to jumps", body: "Hesitation kills Trials. Once committed to a jump, follow through — half-hearted attempts always fail." },
    { title: "Recover from small errors", body: "Perfect runs are rare. Rider who recovers from foot-down + continues section cleanly scores less than one who abandons." },
    { title: "Physical conditioning", body: "Trials requires exceptional core strength + explosive leg power. Cross-train with parkour + gymnastics + strength work." },
    { title: "Study top riders", body: "Video analysis of Belaey, Hermance, MacAskill; learn technique + line-reading from world's best." },
  ],

  terminology: [
    { term: "Dab", meaning: "Foot touching ground; 1 penalty point per dab." },
    { term: "Section", meaning: "Bounded course area with entry + exit + specific obstacles." },
    { term: "Pedal-hop", meaning: "Hopping bike vertically or horizontally using pedals + brakes." },
    { term: "Modified (20-inch)", meaning: "Smaller bike class; agile + technical; typical for shorter/lighter riders." },
    { term: "Stock (26-inch)", meaning: "Larger bike class; more capable for large obstacles; typical for taller/heavier riders." },
    { term: "Bash guard", meaning: "Protective plate over chainring; prevents damage from obstacle impact." },
    { term: "Nose manual", meaning: "Balance on front wheel; advanced technique for tight sections." },
    { term: "Back hop", meaning: "Bouncing bike backward on rear wheel; used to reposition." },
    { term: "UCI Trials World Cup", meaning: "International competition circuit sanctioned by UCI." },
    { term: "Danny MacAskill", meaning: "Scottish street trials rider; YouTube pioneer; sport's global ambassador." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy an entry-level trials bike or use MTB", body: "Modified bikes (Inspired, Echo, Comas) start $500-1500. Alternative: try trials on hardtail MTB with sticky tires + strong brakes." },
      { title: "Master basic pedal-hop + brake control", body: "Practice hopping bike vertically on flat ground; add small obstacles. YouTube tutorials by Ryan Leech + Danny MacAskill excellent." },
      { title: "Attend local trials clinic + club", body: "Local trials clubs in UK, Spain, France, Germany, USA; welcoming to beginners. Weekly practice sessions build technique." },
    ] },
    { level: "intermediate", steps: [
      { title: "Compete at regional + national championships", body: "National + regional trials championships in most European + North American countries; entry via UCI-affiliated national federations." },
      { title: "Cross-train with parkour + gymnastics", body: "Core strength + explosive movement + spatial awareness all transfer directly to trials." },
      { title: "Build technical bike setup", body: "Upgrade to competition-level 20-inch or 26-inch bike ($2000-5000); tune brakes + suspension for section-specific requirements." },
    ] },
    { level: "advanced", steps: [
      { title: "Compete at UCI Trials World Cup", body: "Top-tier international circuit; qualifying via UCI national federation + national championship results." },
      { title: "Target World Championships + Youth Olympic team", body: "Annual UCI World Championships + Youth Olympic Games team selection for elite young riders." },
      { title: "YouTube + content creator pathway", body: "Alternative career: Danny MacAskill model — build YouTube presence + brand partnerships without pure competition focus." },
    ] },
  ],

  faq: [
    { question: "What is Bike Trials?", answer: "An extreme cycling discipline where riders navigate obstacle courses (walls, boulders, beams, gaps, drops) on specialized minimal-suspension bikes without touching foot to ground. Riders are penalized for foot-downs ('dabs') and section failures. Winner has fewest penalty points. Evolved from motorcycle trials in 1970s Spain/France; UCI recognition 2000." },
    { question: "How is Bike Trials different from BMX or Mountain Biking?", answer: "BMX: focus on jumps + tricks on ramps + dirt. Mountain biking: focus on downhill/cross-country racing over terrain. Trials: focus on precision balance + obstacle navigation with NO foot-downs. Trials bikes have no seat (or very low) + are optimized for hopping + balance rather than speed. Skills overlap partially but core focus differs entirely." },
    { question: "Who is the greatest bike trials rider?", answer: "Multiple candidates by category: (1) Competition legend: Kenny Belaey (Belgium) — multiple UCI World Championships. (2) Modern champion: Vincent Hermance (France) — multi-time UCI World Champion. (3) YouTube ambassador: Danny MacAskill (Scotland) — 500M+ views; iconic viral videos; not competition-focused but ambassador for sport. Different criteria produce different answers." },
    { question: "Is Bike Trials in the Olympics?", answer: "Not in Summer Olympics as of 2024. Was contested at Youth Olympic Games (Nanjing 2014, Buenos Aires 2018). UCI has pursued Olympic inclusion; possible addition at LA 2028 or Brisbane 2032. Also contested at World Games (multi-sport event held quadrennially)." },
    { question: "What bike do I need?", answer: "Two main categories: (1) 20-inch Modified Trials bike — agile, technical, suits smaller/lighter riders; brands: Inspired, Echo, Comas. Cost: $800-3000 for competitive. (2) 26-inch Stock Trials bike — larger, more capable, suits taller/heavier riders; brands: Inspired Skye, Echo Mark. Cost: $1000-4000. Alternative for beginners: sticky tires + strong brakes on standard MTB frame." },
    { question: "How dangerous is Bike Trials?", answer: "Moderate risk. Falls from moderate heights (1-3m); ankle + wrist sprains common; occasional serious falls resulting in broken bones. Mandatory helmets + recommended pads reduce risk substantially. Injury rate lower than downhill mountain biking or motocross; higher than road cycling. Riding within skill level + progressive training keeps risk manageable." },
  ],

  wikipediaTitle: "Bicycle trials",
  sources: [
    { label: "UCI — Trials", url: "https://uci.org/mountain-bike/trials/", publisher: "UCI" },
    { label: "Wikipedia — Bicycle trials", url: "https://en.wikipedia.org/wiki/Bicycle_trials", publisher: "Wikipedia" },
    { label: "Danny MacAskill YouTube", url: "https://youtube.com/user/dannymacaskill", publisher: "Red Bull Media" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

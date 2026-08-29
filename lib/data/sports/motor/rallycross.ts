import type { Sport } from "@/lib/types";

export const rallycross: Sport = {
  id: "rallycross",
  slug: "rallycross",
  name: "Rallycross",
  officialName: "Rallycross (FIA World Rallycross Championship)",
  aliases: ["Rallycross Racing", "World RX", "RX"],
  shortDescription:
    "Motorsport hybrid — 4-6 cars race door-to-door on mixed asphalt/gravel short circuits with jumps + a mandatory Joker Lap detour; each race 4-6 laps; the FIA World Rallycross Championship features 600 HP+ all-wheel-drive supercars reaching 0-60 in ~1.9 seconds.",
  longDescription:
    "Rallycross combines the door-to-door contact of stock-car racing with the mixed-surface handling of rally driving. Cars race 4-6 abreast on short (1-2 km) circuits featuring both asphalt + gravel sections, small jumps + banked turns. Each race is 4-6 laps; every driver MUST take the Joker Lap once per race (a longer detour that gives strategic timing). Rallycross originated in the UK 1967 (Croft Autodrome), spread to Sweden + Norway + Finland where it became a national sport. The FIA World Rallycross Championship (World RX) launched in 2014 as top-tier world series; features 600 HP+ AWD 'Supercars' capable of 0-60 mph in ~1.9 seconds — faster than F1 in acceleration due to AWD grip. Legendary drivers: Petter Solberg (Norway — 2× World RX champion + former WRC champion), Johan Kristoffersson (Sweden — 5× World RX champion), Timmy Hansen (Sweden), Andreas Bakkerud (Norway). In 2022, World RX transitioned to fully electric 'RX1e' cars, becoming one of first fully electric international motorsport series.",

  category: "motor-sports",
  subCategory: "motorsport — mixed-surface short-circuit racing",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "GB",
  regionOfOrigin: "United Kingdom (Croft Autodrome 1967); developed across Sweden + Norway + Finland; FIA World Championship 2014",
  estimatedOrigin: "First held UK 1967 (Croft Autodrome); Nordic dominance 1970s-80s; FIA World Rallycross Championship 2014; electric transition RX1e 2022",

  players: { min: 4, max: 6, note: "4-6 cars race simultaneously per heat; individual drivers." },
  field: {
    surfaceName: "Mixed asphalt + gravel short circuit",
    dimensions: "1-2 km lap length; mixed asphalt (60-70%) + gravel (30-40%); 5-8 turns; typically 200-400 m start straight",
    description: "Purpose-built rallycross circuits with combined asphalt + gravel sections, small jumps, banked turns, and a mandatory Joker Lap detour. World RX venues: Silverstone (UK), Höljes (Sweden), Latvia's Bikernieki, Loheac (France), Buxtehude (Germany).",
  },
  equipment: [
    { name: "Rallycross Supercar (World RX)", description: "600 HP+ AWD car; 0-60 mph ~1.9s. Base platforms: Peugeot 208, Audi S1, Ford Fiesta, Renault Clio, Volkswagen Polo. Heavily modified for rallycross." },
    { name: "RX1e (electric, 2022+)", description: "World RX transitioned to 680 HP electric drivetrain 2022; identical performance envelope to combustion Supercars. Battery + electric motor + regenerative braking." },
    { name: "Full FIA safety cage + fire suit + helmet + HANS", description: "Standard motorsport safety; roll cage, 6-point harness, fireproof suit, full-face helmet with HANS." },
    { name: "Slick + rain tires", description: "Slick tires for dry asphalt; rain tires for wet; some drivers use half-slick for mixed sections. Tire choice = strategic decision." },
    { name: "AWD drivetrain", description: "All-wheel-drive with limited-slip differentials front + center + rear; essential for mixed asphalt + gravel." },
    { name: "Turbo + intercooler (combustion era)", description: "Massive turbochargers producing 600+ HP; intercoolers for boost control." },
  ],
  duration: {
    approximateMinutes: 15,
    structure: "Each heat: 4-6 laps × ~40 seconds/lap = 3-5 minutes per race. Full event: 4 qualifying heats + semifinals + final = 3-4 hours total.",
  },
  objective:
    "Win each race by crossing finish line first after 4-6 laps. Full event structure: qualifying → semifinals → final. Winner of final = event champion.",
  matchStructure:
    "Event structure: (1) 4 Qualifying heats — 5-6 drivers per heat, points based on finish position. (2) Semifinals — top 6 from each of 2 semifinals advance. (3) Final — 6-driver race for event victory. Season-long championship: points across all rounds decide World RX Champion.",

  basicRules: [
    { title: "4-6 cars per heat", body: "Randomly seeded from qualifying (or bracket-based); race simultaneously on short circuit." },
    { title: "Mandatory Joker Lap", body: "Each driver MUST take the Joker Lap once per race — a longer detour costing ~1-3 seconds. Strategic timing matters." },
    { title: "Mixed asphalt + gravel", body: "Circuits combine surfaces; tire + suspension setup + driving line adapted for both." },
    { title: "4-6 lap races", body: "Standard: 5-6 laps; some heats 4 laps for shorter tracks." },
    { title: "Contact allowed (rally-style)", body: "Legal contact for positioning; illegal for intentional blocking or pushing off track." },
    { title: "AWD supercars", body: "Modern World RX cars are AWD with 600+ HP + massive turbos. 0-60 mph faster than F1 due to AWD grip." },
    { title: "Championship points", body: "Points across qualifying + semifinals + final decide event standings; season aggregate decides championship." },
  ],
  advancedRules: [
    { title: "Joker Lap strategic timing", body: "Take Joker early (safer, less traffic) or late (attacks + counter-attacks). Elite drivers time Joker to gain track position or defend." },
    { title: "AWD launch technique", body: "Standing start with AWD requires precise clutch + throttle modulation; wheel-spin costs time." },
    { title: "Tire strategy (mixed conditions)", body: "Rain shower during race can change tire compound decisions. Weather monitoring critical." },
    { title: "Track-limit rules", body: "Some corners have 'track limits' marked by cones; running wide = penalty; consistent 'off' can result in DQ." },
    { title: "Contact-penalty balance", body: "Rally-style contact tolerated more than F1 (pushing, physical positioning); intentional blocking = penalty." },
    { title: "Electric era power delivery", body: "RX1e cars: instant electric torque vs. combustion turbo lag; different racing dynamic + slightly different setup priorities." },
    { title: "Regenerative braking (electric)", body: "RX1e cars recover energy on braking; strategic battery management + throttle discipline." },
  ],
  scoring: {
    summary: "Points system per event: qualifying (30% weight) + semifinals (30%) + final (40%). Season aggregate decides championship.",
    winCondition: "Win Event Final = event victory + max points. Season champion = highest points across all rounds.",
    breakdown: [
      { action: "Final 1st", points: "8 pts (event)" },
      { action: "Semifinal advancement", points: "6 pts (event)" },
      { action: "Qualifying heat win", points: "3 pts per heat (event)" },
      { action: "Championship points scale", points: "1st: 30 pts / 2nd: 26 pts / 3rd: 23 pts / down to 20th" },
      { action: "Season championship", points: "Highest cumulative points across all rounds" },
    ],
  },
  penalties: [
    { title: "Intentional interference / blocking", body: "Time penalty (up to 30 seconds); repeat = DQ from event." },
    { title: "Cutting course", body: "Time penalty; repeated cuts = disqualification." },
    { title: "False start", body: "Warning first; DQ from race on second offense." },
    { title: "Illegal Joker (not taken or taken twice)", body: "DQ from race." },
    { title: "Illegal equipment (non-compliant car)", body: "DQ from event." },
    { title: "Unsafe driving / recklessness", body: "Warning + potential season ban for extreme cases." },
  ],

  positions: [
    { name: "Driver (5-6 per race)", role: "Solo racer; competes against 4-5 opponents simultaneously.", count: 1 },
    { name: "Team engineer + mechanics", role: "Between-race setup + strategy; radio contact during warmup." },
    { name: "Race director + officials", role: "Manage event structure + safety." },
  ],
  officiating: {
    officials: ["Race Director", "Corner marshals (per corner)", "Timekeeper", "Video review officials", "Chief Scrutineer (equipment)"],
    summary: "FIA-certified officials at all World RX events; video review for contact + track-limit calls; scrutineers ensure equipment compliance.",
  },

  governingBodies: [
    { name: "Fédération Internationale de l'Automobile (FIA)", founded: 1904, headquarters: "Paris, France", website: "https://fia.com" },
    { name: "World Rallycross (World RX)", founded: 2014, headquarters: "Paris, France (FIA)", website: "https://fiaworldrallycross.com" },
    { name: "Nitro Rallycross (US-based challenger series)", founded: 2018, headquarters: "USA (Nitro Circus)" },
    { name: "European Rallycross Championship", founded: 1973, headquarters: "Europe (rotating)" },
  ],
  majorCompetitions: [
    { name: "FIA World Rallycross Championship", frequency: "annual (10+ rounds)", founded: 2014, region: "worldwide" },
    { name: "European Rallycross Championship", frequency: "annual", founded: 1973, region: "Europe" },
    { name: "Nitro Rallycross Championship", frequency: "annual", founded: 2018, region: "USA + international" },
    { name: "Global Rallycross (former US series)", frequency: "annual", founded: 2011, region: "USA (folded 2017)" },
    { name: "Race of Champions (RoC)", frequency: "annual", founded: 1988, region: "worldwide (multi-discipline motorsport)" },
  ],
  countriesPlayed: ["SE", "NO", "GB", "FR", "DE", "FI", "LV", "PL", "US", "NZ", "AU", "PT", "IE", "CZ"],
  famousAthletes: [
    "Petter Solberg (Norway — 2× World RX champion 2014+2015; former WRC champion 2003)",
    "Johan Kristoffersson (Sweden — 5× World RX champion 2017+2018+2020+2021+2022)",
    "Timmy Hansen (Sweden — World RX champion 2019)",
    "Andreas Bakkerud (Norway — multiple World RX podiums)",
    "Sébastien Loeb (France — 9× WRC champion; competed in World RX)",
    "Ken Block (US — Global Rallycross champion; Gymkhana YouTube star; passed 2023)",
    "Tanner Foust (US — 2× Global Rallycross champion)",
    "Kevin Hansen (Sweden — World RX podium regular)",
    "Niclas Grönholm (Finland — 2020 World RX runner-up)",
    "Mattias Ekström (Sweden — 2016 World RX champion + DTM champion)",
  ],
  records: [
    { title: "Most World Rallycross championships", holder: "Johan Kristoffersson (SE)", value: "5 championships 2017+2018+2020+2021+2022 — modern dominant", year: 2022 },
    { title: "First electric World Rallycross season", holder: "World RX", value: "Transitioned to fully electric RX1e cars 2022", year: 2022 },
    { title: "0-60 mph time (Supercars)", holder: "World RX Supercars", value: "~1.9 seconds — faster than F1 due to AWD grip", year: 2020 },
    { title: "Croft Autodrome first race", holder: "First rallycross race", value: "Croft Autodrome, UK, 1967 — sport's official birthplace", year: 1967 },
    { title: "Ken Block Gymkhana viral", holder: "Ken Block", value: "Gymkhana YouTube series (2008-2022) — 1B+ views total; rallycross-adjacent content", year: 2022 },
  ],

  variants: ["world-rx-electric-rx1e", "world-rx-supercar-historic-combustion", "european-rallycross", "nitro-rallycross-us", "global-rallycross-historic"],
  relatedSports: ["rally-racing", "world-rally-championship", "circuit-racing", "gymkhana", "drifting"],

  skills: [
    "AWD car control (mixed surfaces)",
    "aggressive starts (0-60 in <2 sec)",
    "close-quarters racing awareness",
    "Joker Lap strategic timing",
    "gravel + asphalt line-reading",
    "physical durability (contact + jumps)",
    "quick recovery (multiple heats per day)",
  ],
  strategies: [
    { title: "Nail the start", body: "0-60 mph in 1.9 seconds. First to lead into first turn = decisive advantage. Explosive launch out of gate + first 100m defines race." },
    { title: "Joker timing", body: "Take Joker early (avoid dirty air) or late (attack). Elite drivers time Joker to gain track position or defend against overtaking." },
    { title: "Tire choice for conditions", body: "Wet or dry? Half-wet? Tire compound decision made pre-race but conditions can change mid-event." },
    { title: "Rally-style contact", body: "Legal contact for positioning; use body positioning for advantage without incurring blocking penalty." },
    { title: "Gravel vs. asphalt line", body: "Gravel section: slide-friendly line + wider approach. Asphalt section: precise apex + late braking. Adjust per corner." },
    { title: "Manage AWD + power", body: "600+ HP + AWD = massive potential; but managing wheel-spin + wheelspeed on mixed surfaces critical to consistency." },
    { title: "Championship points thinking", body: "Season-long championship rewards consistency. Not always attack — sometimes defensive drive for solid points finish better." },
  ],

  terminology: [
    { term: "Joker Lap", meaning: "Mandatory detour taken once per race; adds ~1-3 seconds; strategic timing matters." },
    { term: "World RX", meaning: "FIA World Rallycross Championship — top-tier international series (founded 2014)." },
    { term: "RX1e", meaning: "World RX electric-era cars from 2022; 680 HP fully electric." },
    { term: "Supercar", meaning: "World RX top-class combustion cars (2014-2021); 600+ HP AWD." },
    { term: "Heat", meaning: "Single race between 4-6 cars; typically 4-6 laps." },
    { term: "Qualifying", meaning: "Pre-final heats determining seeding + championship points." },
    { term: "Semifinal", meaning: "Race between top qualifiers determining final line-up." },
    { term: "Nitro Rallycross", meaning: "US-based challenger series (founded 2018); different rules + often night events." },
    { term: "Global Rallycross (GRC)", meaning: "Former US series (2011-2017); folded but influential; created Ken Block Gymkhana era." },
    { term: "Croft Autodrome", meaning: "UK circuit; birthplace of rallycross (first race 1967)." },
    { term: "FIA", meaning: "Fédération Internationale de l'Automobile — motorsport world governing body." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Start with karting + rally schools", body: "Karting for base car control + racing awareness; rally schools (Bill Malloy, Team O'Neil) for mixed-surface driving fundamentals." },
      { title: "Attend rallycross clinics + track days", body: "Local + regional rallycross clubs (SCCA) run beginner-friendly events; drive your own car with minimal modifications." },
      { title: "Build a starter rallycross car", body: "Cheap RWD or AWD platform (Subaru WRX, older BMW 3-series). Modify: coilovers + brake upgrade + safety cage. Budget: $10,000-30,000." },
    ] },
    { level: "intermediate", steps: [
      { title: "Compete at national + regional championships", body: "Regional rallycross championships (British RX, Nordic, French) offer competitive stepping stones. Class-based (RX3, RX2, RX Supercar) accommodate different budgets." },
      { title: "Build competitive supercar-class car", body: "$100,000-300,000 for competitive RX2/RX Supercar (300-500 HP + full safety)." },
      { title: "Get sponsorships + team", body: "Local + car brand sponsorships; team support essential. National championship results build sponsor value." },
    ] },
    { level: "advanced", steps: [
      { title: "Qualify for FIA World Rallycross Championship", body: "Top-tier world series; requires competitive Supercar (or RX1e) + team + budget of $1-3M+ annually." },
      { title: "Cross to WRC or DTM", body: "Some rallycross stars cross to World Rally Championship or DTM touring cars; different but transferable skills." },
      { title: "Nitro Rallycross US series", body: "Alternative pathway for US drivers; smaller budget than World RX but growing global visibility." },
    ] },
  ],

  faq: [
    { question: "What is Rallycross?", answer: "A motorsport combining door-to-door circuit racing with mixed asphalt + gravel surfaces. Cars race 4-6 at a time on short circuits (1-2 km) featuring both surfaces + small jumps. Each race: 4-6 laps; mandatory Joker Lap detour. Cars: 600 HP+ AWD Supercars in top FIA World Rallycross Championship series (or 680 HP RX1e electric from 2022). Originated UK 1967; became Nordic-dominated national sport; FIA World Championship since 2014." },
    { question: "What is the Joker Lap?", answer: "A mandatory longer detour that every driver must take once per race. Takes ~1-3 seconds vs. the standard lap. Strategic timing matters — take it early to avoid dirty air + gain clean track, take it late to attack + counter-attack opponents. Managing when to take Joker is one of rallycross's tactical elements." },
    { question: "How is Rallycross different from Rally?", answer: "Rally: individual timed stages on public roads or forest tracks; time trials; no direct racing. Rallycross: door-to-door racing on short purpose-built circuits with mixed surfaces; heats + finals. Both use similar cars but rally is about single-driver time; rallycross is about racing side-by-side. Rally is slower + more endurance; rallycross is faster + more physical." },
    { question: "Who is the greatest rallycross driver?", answer: "Multiple candidates: (1) Johan Kristoffersson (Sweden) — 5× World RX champion 2017-2022; modern dominant. (2) Petter Solberg (Norway) — 2× World RX champion + former WRC champion; only person to win both. (3) Ken Block (US) — Global Rallycross champion; Gymkhana YouTube star; ambassador for the sport (passed 2023). (4) Timmy Hansen (Sweden) — 2019 World RX champion. Kristoffersson is current GOAT; Solberg is historic legend." },
    { question: "When did World Rallycross go electric?", answer: "2022. World RX transitioned to fully electric RX1e cars (680 HP, ~1.9 sec 0-60 like combustion Supercars). This made World RX one of the first fully electric international motorsport series. Transition responded to global electric-vehicle trends + FIA sustainability goals. Some fans opposed the change; series continues to develop the electric formula." },
    { question: "Where can I watch professional rallycross?", answer: "FIA World Rallycross Championship — official streaming (fiaworldrallycross.com), select broadcasters (Eurosport, Discovery+). Nitro Rallycross — Peacock (US), NBC Sports. YouTube highlights across all series. Race attendance at Croft (UK), Höljes (Sweden), Latvia's Bikernieki, Loheac (France) remains iconic destinations." },
  ],

  wikipediaTitle: "Rallycross",
  sources: [
    { label: "FIA World Rallycross Championship", url: "https://fiaworldrallycross.com", publisher: "FIA" },
    { label: "Wikipedia — Rallycross", url: "https://en.wikipedia.org/wiki/Rallycross", publisher: "Wikipedia" },
    { label: "Nitro Rallycross", url: "https://nitrorallycross.com", publisher: "Nitro Circus" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

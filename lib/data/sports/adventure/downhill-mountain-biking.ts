import type { Sport } from "@/lib/types";

export const downhillMountainBiking: Sport = {
  id: "downhill-mountain-biking",
  slug: "downhill-mountain-biking",
  name: "Downhill Mountain Biking",
  officialName: "Downhill Mountain Biking (UCI Mountain Bike World Cup — Downhill)",
  aliases: ["DH", "Downhill MTB", "Downhill Racing", "UCI DH"],
  shortDescription:
    "Extreme timed racing down steep mountain courses on 200mm-travel suspension bikes at 40-70 mph — riders launch drops, hit big-air jumps, and race gravity itself; UCI World Cup rounds held on legendary tracks like Val di Sole, Fort William, and Mont-Sainte-Anne.",
  longDescription:
    "Downhill Mountain Biking (DH) is the extreme timed-racing discipline of mountain biking. Riders descend steep, technical courses (typically 2-4 km with 400-700m vertical drop) at 40-70 mph, navigating drops (up to 20m), jumps (10-40m gaps), rock gardens, root sections, and gnarly turns. The sport emerged from Californian mountain-bike culture in the late 1970s (Marin County + Repack Downhill 1976); the Union Cycliste Internationale (UCI) recognized it in 1989 with the first UCI DH World Championships. The UCI Mountain Bike World Cup DH circuit hosts 8+ rounds annually at legendary venues: Fort William (Scotland), Val di Sole (Italy), Mont-Sainte-Anne (Canada), Leogang (Austria), Snowshoe (USA), Vallnord (Andorra). Race format: individual timed runs; fastest time wins. Elite bikes: 200mm-travel dual suspension; 27.5\" or 29\" wheels; 5-15 kg lighter than a decade ago. Legendary riders: Steve Peat (UK — 3× World Champion), Aaron Gwin (US — 5× World Cup overall champion), Rachel Atherton (UK — 6× World Cup overall champion + 6× World Champion), Loïc Bruni (France — 5× World Champion). Downhill is NOT Olympic — cross-country mountain biking is (since Atlanta 1996) but downhill hasn't been included.",

  category: "adventure-extreme-sports",
  subCategory: "mountain biking — extreme timed racing",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "US",
  regionOfOrigin: "United States (Marin County, California, late 1970s); UCI recognition 1989; UCI World Cup 1993",
  estimatedOrigin: "Emerged Marin County late 1970s; Repack Downhill 1976; UCI first DH Championships 1990; UCI World Cup 1993",

  players: { min: 1, max: 1, note: "Individual competition; team standings calculated at UCI events." },
  field: {
    surfaceName: "Mountain descent course — natural terrain + man-made features",
    dimensions: "Typically 2-4 km long × 400-700 m vertical drop; race time 3-6 minutes",
    description: "Natural forest/mountain terrain with technical features: rock gardens, roots, drops (up to 20m), gap jumps (up to 40m), banked turns. Course maintained daily during race weeks; different sections favor different rider strengths.",
  },
  equipment: [
    { name: "Downhill mountain bike", description: "Full-suspension bike; 200mm travel front + rear; 27.5\" or 29\" wheels; heavy-duty frame; typical weight 15-17 kg. Brands: Specialized, Trek, Santa Cruz, Commencal, YT Industries." },
    { name: "Full-face helmet", description: "Mandatory; MTB-specific full-face design; ventilation for hot conditions; must meet ASTM/CE standards." },
    { name: "Body armor", description: "Chest + spine protector; elbow + knee pads; shin guards; padded shorts. Mandatory at UCI events." },
    { name: "Neck brace (highly recommended)", description: "Leatt or similar neck brace; prevents catastrophic spinal injuries from crashes." },
    { name: "Goggles + eyewear", description: "Wide-vision goggles; some riders use sunglasses for open sections." },
    { name: "Downhill shoes (flat pedals)", description: "Sticky rubber (5.10, Ride Concepts); flat pedals preferred over clipless for quick foot repositioning after crashes." },
    { name: "Hydraulic disc brakes", description: "Powerful hydraulic disc brakes (203mm rotors) for high-speed descents; brake fade prevention critical." },
  ],
  duration: {
    approximateMinutes: 5,
    structure: "Each race run: 3-6 minutes. Full weekend: qualifying (Saturday) + final (Sunday) = 2 days; typically 2 runs per rider.",
  },
  objective:
    "Set fastest single time down the course. Race format: individual timed runs; best of 2 (qualifying + final) determines placement.",
  matchStructure:
    "Race weekend: Friday practice (multiple runs); Saturday qualifying (single timed run — top 60 (or 30) advance to final); Sunday final (single timed run — fastest wins). Some events have seeded runs. Time separates riders often by hundredths of a second at elite level.",

  basicRules: [
    { title: "Fastest time wins", body: "Single timed run down the course. Time to nearest 1/1000 second." },
    { title: "1 or 2 runs per rider", body: "Qualifying: 1 run. Final: 1 run (some events allow 2 runs, best counts)." },
    { title: "Complete course as marked", body: "Riders must follow the marked course; cutting course = DQ." },
    { title: "Full-face helmet mandatory", body: "UCI rule; failure to wear = DNS (did not start)." },
    { title: "Body armor recommended", body: "Chest protector + neck brace strongly recommended; some events require them." },
    { title: "Weather delays possible", body: "Rain + wind can delay or modify races; safety trumps schedule." },
    { title: "Course walk before race", body: "Riders walk course pre-race to plan line + memorize features." },
  ],
  advancedRules: [
    { title: "Course change during race weekend", body: "Course conditions change with weather + rider wear; times reset between qualifying + final if significant changes." },
    { title: "Split times + sector analysis", body: "Course divided into 3-5 sectors; split times track rider pace throughout run for analysis." },
    { title: "Wildcard entries", body: "UCI World Cup: local riders + national team selections get wildcard entries; qualification via previous results." },
    { title: "Weather-modified courses", body: "In extreme rain, race directors may modify course (reduce jump sizes, add rain lines); affects strategy." },
    { title: "UCI 21+ senior category vs. junior category", body: "Separate championships for senior (21+), junior, and youth categories; different course lengths + features." },
    { title: "Team relay events (some rounds)", body: "Some UCI rounds include team relay format with cross-country + downhill; different format." },
  ],
  scoring: {
    summary: "Fastest single time wins. UCI World Cup: season-long points across rounds decide overall champion.",
    winCondition: "Fastest time in Final Run wins event. Season champion = highest cumulative UCI World Cup points across all rounds.",
    breakdown: [
      { action: "Final 1st place", points: "Event win + 200 UCI points" },
      { action: "Final 2nd place", points: "160 UCI points" },
      { action: "Final 3rd place", points: "140 UCI points" },
      { action: "Points scale to 50th place", points: "Descending points; 50th place = 5 pts" },
      { action: "Season championship", points: "Sum of points across all UCI World Cup rounds" },
    ],
  },
  penalties: [
    { title: "Course cutting", body: "DQ from race." },
    { title: "Missing course tape", body: "Warning if minor; DQ if significant." },
    { title: "No full-face helmet", body: "DNS (did not start)." },
    { title: "Illegal equipment", body: "DQ from event; bike does not meet UCI specs (weight, frame construction)." },
    { title: "Unsportsmanlike conduct", body: "Warning; DQ for serious offenses." },
  ],

  positions: [
    { name: "Rider", role: "Individual competitor.", count: 1 },
    { name: "Team engineer + mechanic", role: "Bike setup + suspension tuning; between-run service." },
    { name: "Team manager + coach", role: "Strategy + course walk analysis; rider mental preparation." },
    { name: "Timekeeper", role: "Records precise timing at start + finish + splits." },
  ],
  officiating: {
    officials: ["Race Director", "Course marshals", "Timing officials", "Chief mechanic + safety inspector", "Medical staff (mandatory)"],
    summary: "UCI-certified officials; timing systems accurate to 1/1000 second; medical staff mandatory at all events due to high-injury nature.",
  },

  governingBodies: [
    { name: "Union Cycliste Internationale (UCI)", founded: 1900, headquarters: "Aigle, Switzerland", website: "https://uci.org" },
    { name: "British Cycling", founded: 1959, headquarters: "Manchester, UK", website: "https://britishcycling.org.uk" },
    { name: "USA Cycling", founded: 1920, headquarters: "Colorado Springs, USA", website: "https://usacycling.org" },
    { name: "Fédération Française de Cyclisme (FFC)", founded: 1881, headquarters: "Rosny-sous-Bois, France" },
  ],
  majorCompetitions: [
    { name: "UCI Mountain Bike World Cup — Downhill", frequency: "annual (7-10 rounds)", founded: 1993, region: "worldwide" },
    { name: "UCI Mountain Bike World Championships — Downhill", frequency: "annual", founded: 1990, region: "worldwide" },
    { name: "Red Bull Rampage (freeride sister event)", frequency: "annual", founded: 2001, region: "Utah, USA (invitation-only)" },
    { name: "Crankworx festival series", frequency: "annual (multiple rounds)", founded: 2004, region: "Whistler, Innsbruck, Rotorua" },
    { name: "Enduro World Series (adjacent discipline)", frequency: "annual", founded: 2013, region: "worldwide" },
  ],
  countriesPlayed: ["US", "GB", "FR", "AU", "NZ", "CA", "IT", "CH", "AT", "DE", "ES", "CO", "BR", "SI", "SK"],
  famousAthletes: [
    "Rachel Atherton (UK — 6× UCI World Champion + 6× World Cup overall champion; sport's dominant women's champion)",
    "Aaron Gwin (US — 5× UCI World Cup overall champion + multiple race wins)",
    "Loïc Bruni (France — 5× UCI World Champion 2015+2017+2018+2019+2022; modern era champion)",
    "Steve Peat (UK — 3× UCI World Champion + 17-year UCI career)",
    "Greg Minnaar (South Africa — 4× UCI World Champion; sport's most-decorated South African)",
    "Sam Hill (Australia — 4× UCI World Champion 2005+2007+2010+2011)",
    "Jared Graves (Australia — multi-discipline champion; DH + 4X + Enduro)",
    "Tahnee Seagrave (UK — multiple UCI DH podiums)",
    "Vali Höll (Austria — women's rising star)",
    "Reece Wilson (UK — 2020 UCI World Champion)",
  ],
  records: [
    { title: "Most UCI Downhill World Championships (men)", holder: "Loïc Bruni (FR) + Greg Minnaar (RSA) tied", value: "Loïc: 5 (2015+2017+2018+2019+2022); Minnaar: 4 (2003+2012+2013+2021)", year: 2022 },
    { title: "Most UCI Downhill World Championships (women)", holder: "Rachel Atherton (UK)", value: "6 World Championships 2008+2013+2015+2016+2019", year: 2019 },
    { title: "Most UCI World Cup overall titles (any discipline)", holder: "Rachel Atherton (UK)", value: "6 overall titles in downhill", year: 2019 },
    { title: "Highest recorded speed on DH course", holder: "Various riders (unofficial)", value: "~90 km/h (56 mph) on fastest sections", year: 2020 },
    { title: "First UCI DH World Championship", holder: "UCI", value: "First held 1990; annual since", year: 1990 },
    { title: "Steve Peat's record career", holder: "Steve Peat (UK)", value: "17-year UCI career; 51 UCI World Cup podium finishes (record)", year: 2015 },
  ],

  variants: ["uci-standard-downhill", "freeride-red-bull-rampage", "downhill-slalom", "enduro-mtb-related", "junior-dh-categories"],
  relatedSports: ["cross-country-mountain-biking", "enduro-mtb", "bmx-racing", "freeride-mountain-biking", "cyclocross"],

  skills: [
    "extreme bike control at speed",
    "line-reading (fastest through technical sections)",
    "aerial control (drops + jumps)",
    "brake modulation (avoid brake fade)",
    "physical fitness (5-min anaerobic bursts)",
    "mental focus + fear management",
    "quick recovery (multiple runs per weekend)",
  ],
  strategies: [
    { title: "Line-reading is everything", body: "Fastest line through technical section can save 1-3 seconds. Elite riders scout courses meticulously + memorize every feature." },
    { title: "Commit to jumps + drops", body: "Hesitation = crash. Once committed to feature, follow through with full commitment. Nervous riders always crash." },
    { title: "Manage brake fade", body: "Long descents + hard braking = brake overheating. Modulate braking; use engine braking (short cranks) where possible." },
    { title: "Choose bike setup for course", body: "Suspension travel + damping + tire pressure adjusted per course. Wet + slippery = more grip; dry + fast = more stiffness." },
    { title: "Manage energy across runs", body: "Multiple runs per weekend + course walks. Physical + mental energy management determines final-run performance." },
    { title: "Study fastest riders' lines", body: "Video analysis of Aaron Gwin + Loïc Bruni + Greg Minnaar; learn technique + line selection from world's best." },
    { title: "Fear management", body: "DH riders operate at edge of skill + safety. Meditation + visualization + repetition build confidence in technical features." },
  ],

  terminology: [
    { term: "DH", meaning: "Downhill; the discipline abbreviation." },
    { term: "Line", meaning: "Chosen path through obstacle or corner; fastest line = winning strategy." },
    { term: "Drop", meaning: "Vertical descent (2m+); rider commits to airborne descent." },
    { term: "Gap jump", meaning: "Horizontal jump over gap (5-40m); requires commitment + speed calculation." },
    { term: "Rock garden", meaning: "Sustained section of rocks; requires body English + line-reading." },
    { term: "Root section", meaning: "Slippery tree roots; challenging in wet conditions." },
    { term: "Berm", meaning: "Banked turn; allows higher-speed cornering." },
    { term: "Split time", meaning: "Time recorded at sector boundary; analytical tool for pace." },
    { term: "Brake fade", meaning: "Loss of braking power due to overheated brake fluid/pads; catastrophic if severe." },
    { term: "UCI World Cup", meaning: "Top-tier international series; 7-10 rounds annually." },
    { term: "Red Bull Rampage", meaning: "Iconic freeride sister event; invitation-only; different format from UCI DH." },
    { term: "Crankworx", meaning: "Multi-event MTB festival series; Whistler + Innsbruck + Rotorua." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Start with cross-country + trail riding", body: "3-5 years of general mountain biking build fundamental bike handling. Downhill demands fitness + control developed first." },
      { title: "Get proper DH bike + gear", body: "Entry-level DH bike $2000-4000; full-face helmet + body armor $500-1000. Rent at bike parks before buying." },
      { title: "Ride local bike park", body: "Bike parks (Whistler, Angel Fire, Sun Peaks) offer graduated trail systems from beginner to expert. Master intermediate before attempting expert lines." },
    ] },
    { level: "intermediate", steps: [
      { title: "Enter local + regional DH races", body: "National DH championships in most cycling countries; entry via UCI-affiliated national federations. Build race craft in low-pressure setting." },
      { title: "Cross-train fitness", body: "DH requires exceptional core strength + explosive leg power + anaerobic capacity. Weights + intervals + XC riding complement." },
      { title: "Learn advanced features gradually", body: "Progressive skill development — larger drops + jumps + technical features. Practice with coaching whenever possible." },
    ] },
    { level: "advanced", steps: [
      { title: "Compete at UCI World Cup + World Championships", body: "Top-tier world series; qualifying via national federation + previous UCI ranking." },
      { title: "Target Red Bull Rampage invitation", body: "Iconic freeride event; invitation-only via previous results + reputation. Career highlight for many riders." },
      { title: "Cross-discipline pathway", body: "Some DH stars cross to Enduro (Aaron Gwin, Sam Hill) for extended career; different but transferable skills." },
    ] },
  ],

  faq: [
    { question: "How is Downhill Mountain Biking different from other mountain biking?", answer: "DH: extreme timed racing down steep courses (2-4 km, 400-700m drop) at 40-70 mph. Cross-country (XC): sustained racing over undulating terrain; Olympic sport. Enduro: multi-stage timed racing combining DH + XC elements. Trail: recreational mountain biking without racing focus. DH is highest-consequence + highest-adrenaline; XC is highest-endurance." },
    { question: "Is Downhill Mountain Biking in the Olympics?", answer: "No. Cross-country mountain biking is Olympic (since Atlanta 1996) but downhill has NOT been included. UCI has advocated for inclusion but IOC has not added. Some proposals for adding DH at future Olympics (LA 2028 or Brisbane 2032) but no confirmation. Meanwhile, downhill contested at UCI World Championships + World Cup annually." },
    { question: "Who is the greatest downhill rider?", answer: "Multiple candidates: (1) Rachel Atherton (UK) — 6× UCI World Champion + 6× World Cup overall champion; sport's dominant women's champion. (2) Loïc Bruni (France) — 5× UCI World Champion; modern era GOAT contender. (3) Aaron Gwin (US) — 5× World Cup overall champion; extended career including bike-brake-cable-broken 2015 Leogang legendary win. (4) Greg Minnaar (South Africa) — 4× UCI World Champion + longest active pro career. Atherton is overall GOAT contender; Bruni + Gwin recent champions." },
    { question: "How dangerous is Downhill MTB?", answer: "Extremely serious. Speeds of 40-70 mph on technical terrain; drops from 20m; gap jumps up to 40m; hard landings on rock + root. Common injuries: broken bones (collarbone, wrist, ankle common); concussions; spinal fractures; catastrophic crashes possible. Full-face helmets + body armor + neck braces reduce risk substantially. Injury rate per hour is among highest in any sport. Sam Hill famously said 'if you're not falling, you're not trying'." },
    { question: "What DH bike should I buy?", answer: "Entry level (learn on): $2000-4000 for hardtail with 150mm+ front suspension + rugged brakes. Intermediate: $4000-8000 for full-suspension trail bike (150-170mm travel). Competitive DH: $8000-15000+ for dedicated DH bike (200mm+ travel; 15-17 kg). Brands: Specialized, Trek, Santa Cruz, Commencal, YT Industries. Rent at bike park before buying to match style + fit." },
    { question: "Where can I watch professional downhill?", answer: "UCI Mountain Bike World Cup — official streaming (uci.tv) + YouTube. UCI World Championships — annual. Red Bull Rampage (Utah, October) — free YouTube stream; iconic freeride event. Crankworx festival series (Whistler, Innsbruck, Rotorua) — YouTube + streaming. Ambassador content: Danny MacAskill videos + Red Bull athlete channels." },
  ],

  wikipediaTitle: "Downhill mountain biking",
  sources: [
    { label: "UCI Mountain Bike World Cup", url: "https://uci.org/mountain-bike/", publisher: "UCI" },
    { label: "Wikipedia — Downhill mountain biking", url: "https://en.wikipedia.org/wiki/Downhill_mountain_biking", publisher: "Wikipedia" },
    { label: "Red Bull Rampage", url: "https://redbull.com/int-en/events/red-bull-rampage", publisher: "Red Bull" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

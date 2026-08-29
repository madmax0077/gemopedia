import type { Sport } from "@/lib/types";

export const touringCarRacing: Sport = {
  id: "touring-car-racing",
  slug: "touring-car-racing",
  name: "Touring Car Racing",
  officialName: "Touring Car Racing (WTCR / Supercars / DTM / BTCC)",
  aliases: ["Touring Cars", "Saloon Car Racing", "Stock Touring"],
  shortDescription:
    "Motorsport with production-based sedans + hatchbacks in door-to-door racing — championships include Australia's V8 Supercars, Germany's DTM, UK's BTCC, and international WTCR / TCR Series; combines high-speed racing with mechanical + strategic depth.",
  longDescription:
    "Touring Car Racing is motorsport featuring modified production-based sedans + hatchbacks in door-to-door racing on road courses. Distinguished from Formula racing (open-wheel) + GT racing (exotic sports cars), Touring Cars maintain visual resemblance to street cars — appealing to fans who relate to the vehicles. Multiple parallel championships worldwide with different technical regulations. Key series: (1) Australian Supercars (V8-powered muscle cars; Ford Mustang vs. Chevrolet Camaro; Mount Panorama Bathurst 1000 iconic race). (2) German DTM (former Deutsche Tourenwagen Masters; GT3-based since 2021; Mercedes-AMG, BMW M4, Ferrari 296 GT3, Audi R8 LMS). (3) British Touring Car Championship (BTCC; UK's longest-running motorsport since 1958; TCR regs; 2-liter turbo hatchbacks). (4) FIA World Touring Car Cup (WTCR)/TCR Series (international TCR regs; Volkswagen Golf, Hyundai i30, Audi RS3, Honda Civic). (5) NASCAR Cup Series (oval racing with tube-frame chassis + body panels resembling street cars; distinct US touring tradition). Physical contact + rubbing common — 'rubbin' is racin' ' as saying goes. Legendary drivers: Craig Lowndes (Australia — 3× Bathurst 1000 winner), Andy Priaulx (UK — 3× WTCC champion), Colin McRae (UK — WRC + Touring crossover), Timo Bernhard (Germany — DTM + GT), Rob Huff (UK — WTCC champion), Yvan Muller (France — 4× WTCC champion).",

  category: "motor-sports",
  subCategory: "motorsport — production-car door-to-door racing",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "GB",
  regionOfOrigin: "United Kingdom (BTCC 1958); Germany (DTM); Australia (Supercars); global via WTCC/WTCR/TCR",
  estimatedOrigin: "BTCC founded UK 1958; DTM founded 1984; Australian Supercars 1997; WTCC 2005-2017; TCR international regs 2015",

  players: { min: 1, max: 1, note: "Individual event racing; some events have team standings + endurance format with 2-3 drivers per car." },
  field: {
    surfaceName: "Road course + street circuit + occasional oval",
    dimensions: "Standard: 3-6 km road courses (Silverstone, Nürburgring, Bathurst, Adelaide); some series race street circuits + ovals",
    description: "Purpose-built road courses (Silverstone Nürburgring Bathurst) + street circuits (Adelaide Race of Remembrance); oval racing dominates NASCAR (Daytona Talladega). Circuit variety = strategic + technical depth.",
  },
  equipment: [
    { name: "Modified production sedan/hatchback", description: "Base: 2.0L turbo (TCR/BTCC) or 5.5L V8 (Australian Supercars) or GT3-based (DTM). 300-650 HP typical. Roll cage + safety equipment mandatory." },
    { name: "Race harness + fireproof suit + helmet + HANS", description: "FIA-approved 6-point harness; fireproof race suit; full-face helmet with HANS device." },
    { name: "Slick + wet tires", description: "Slick tires for dry; grooved wet tires for rain. Tire strategy is race-critical." },
    { name: "Fuel + refueling equipment", description: "Some series allow refueling during races; others (BTCC) restrict for safety + parity." },
    { name: "Advanced electronics + data logging", description: "Traction control + ABS varies by series; extensive data logging + strategy computers." },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "Sprint races: 30-45 min. Endurance races: 300-1000 km (2-6 hours). Season: 10-30 rounds depending on series.",
  },
  objective: "Cross finish line first (position-based points); season champion = highest cumulative points across all rounds.",
  matchStructure: "Weekend format: qualifying (Friday-Saturday) determines starting grid; races (Saturday-Sunday) award points to top 15+ positions. Some series have 2-3 races per weekend; some have single long race.",

  basicRules: [
    { title: "Grid position from qualifying", body: "Fastest qualifying lap = pole position; starting grid based on qualifying." },
    { title: "First across finish line wins", body: "Race position at finish = points awarded per series scheme." },
    { title: "Contact allowed (with limits)", body: "Legal side-by-side contact + rubbing; illegal punting / punting-off tactics." },
    { title: "Pit stops (some series)", body: "Tire changes + refueling in pits; strategic timing critical to race outcome." },
    { title: "Yellow + red flags", body: "Yellow = no overtaking / caution; red = race stopped; green = restart." },
    { title: "Safety car deployments", body: "After major incidents; bunches field + affects strategy." },
  ],
  advancedRules: [
    { title: "Reverse grid rules (some series)", body: "BTCC + some events reverse top 8 or 10 from race 1 for race 2 start; adds unpredictability." },
    { title: "Success ballast", body: "BTCC + some series add weight to winning cars for next race; equalizes competition." },
    { title: "Refueling regulations", body: "Some series allow refueling (WTCC/WTCR); others prohibit (BTCC) for safety." },
    { title: "DRS / P2P (some series)", body: "Some modern series use push-to-pass boost buttons for overtaking assistance." },
    { title: "Endurance format (Bathurst 1000, etc.)", body: "Long races (1000 km) with 2-3 driver teams; strategy + fatigue management critical." },
    { title: "TCR technical regulations", body: "Global TCR regs since 2015: 2.0L turbo, 350 HP, ~1,200 kg, similar cost + speed for all cars." },
  ],
  scoring: {
    summary: "Points per race based on finish position; season champion = highest cumulative points.",
    winCondition: "Race win + season championship. Season champion = highest cumulative points across all rounds.",
    breakdown: [
      { action: "Race win", points: "25 pts (typical); 30-40 in some series" },
      { action: "Race 2nd", points: "18 pts" },
      { action: "Race 3rd", points: "15 pts" },
      { action: "Points to 15th (typical)", points: "Descending scale" },
      { action: "Pole position", points: "1-3 bonus pts" },
      { action: "Fastest lap", points: "1 bonus pt" },
      { action: "Season championship", points: "Sum of all round points" },
    ],
  },
  penalties: [
    { title: "Track limits violation", body: "Warning; multiple = time penalty (5-30 seconds)." },
    { title: "Contact causing collision", body: "Time penalty (5-30 seconds) if judged at fault." },
    { title: "Pit lane speed violation", body: "Drive-through penalty or time penalty." },
    { title: "Unsafe release from pit", body: "Time penalty." },
    { title: "Illegal equipment / tech infringement", body: "DQ from event + potential season penalty." },
    { title: "Dangerous driving", body: "Race ban + fines." },
  ],

  positions: [
    { name: "Driver", role: "Solo racer per car; endurance events have 2-3 drivers per car sharing.", count: 1 },
    { name: "Team engineer + mechanics", role: "Between-session setup + race strategy + pit stop execution." },
    { name: "Race officials", role: "Manage event structure + safety + rule enforcement." },
  ],
  officiating: {
    officials: ["Race Director", "Stewards (3-5)", "Marshals (per corner)", "Timing officials", "Chief Scrutineer", "Medical + safety teams"],
    summary: "FIA / national federation officials; stewards adjudicate incidents post-race; video review for close calls.",
  },

  governingBodies: [
    { name: "Fédération Internationale de l'Automobile (FIA)", founded: 1904, headquarters: "Paris, France", website: "https://fia.com" },
    { name: "TCR International Series (via WSC)", founded: 2015, headquarters: "Cesena, Italy", website: "https://tcr-series.com" },
    { name: "Australian Supercars Championship", founded: 1997, headquarters: "Melbourne, Australia", website: "https://supercars.com" },
    { name: "British Touring Car Championship (BTCC / TOCA)", founded: 1958, headquarters: "UK", website: "https://btcc.net" },
    { name: "DTM (ITR e.V. → ADAC)", founded: 1984, headquarters: "Germany" },
  ],
  majorCompetitions: [
    { name: "Australian Supercars Championship", frequency: "annual (12-15 rounds)", founded: 1997, region: "Australia + New Zealand" },
    { name: "Bathurst 1000 (part of Supercars)", frequency: "annual (October)", founded: 1963, region: "Bathurst, NSW, Australia" },
    { name: "British Touring Car Championship (BTCC)", frequency: "annual (10 weekends)", founded: 1958, region: "UK" },
    { name: "DTM (Deutsche Tourenwagen Masters)", frequency: "annual (8 rounds)", founded: 1984, region: "Germany + international" },
    { name: "FIA WTCR (World Touring Car Cup)", frequency: "annual (historic 2018-2022)", founded: 2018, region: "worldwide" },
    { name: "TCR Series (national)", frequency: "annual", founded: 2015, region: "20+ countries" },
    { name: "24 Hours of Nürburgring (adjacent GT/TCR)", frequency: "annual", founded: 1970, region: "Nürburg, Germany" },
  ],
  countriesPlayed: ["AU", "GB", "DE", "IT", "FR", "ES", "PT", "US", "CN", "JP", "TR", "SE", "AR", "BR", "BE"],
  famousAthletes: [
    "Craig Lowndes (Australia — 7× Bathurst 1000 winner; Supercars legend)",
    "Peter Brock (Australia — 9× Bathurst 1000 winner; iconic V8 driver; died 2006)",
    "Andy Priaulx (UK — 3× WTCC champion 2005+2006+2007)",
    "Yvan Muller (France — 4× WTCC champion 2008+2010+2011+2013)",
    "Rob Huff (UK — 2012 WTCC champion)",
    "Jason Plato (UK — 2× BTCC champion + long career)",
    "Colin Turkington (UK — 4× BTCC champion)",
    "Bernd Schneider (Germany — 5× DTM champion)",
    "Klaus Ludwig (Germany — 3× DTM champion 1988+1992+1994)",
    "Timo Bernhard (Germany — DTM + GT + Le Mans multi-time)",
    "Scott McLaughlin (New Zealand — Supercars + IndyCar crossover)",
  ],
  records: [
    { title: "Most Bathurst 1000 wins", holder: "Peter Brock (Australia)", value: "9× Bathurst 1000 winner (1972-1987); iconic 'King of the Mountain'", year: 1987 },
    { title: "Most WTCC championships", holder: "Yvan Muller (France)", value: "4× WTCC champion 2008+2010+2011+2013", year: 2013 },
    { title: "Longest-running touring car championship", holder: "British Touring Car Championship", value: "Since 1958; 65+ years continuous (only 1974 gap)", year: 2023 },
    { title: "Most DTM championships", holder: "Bernd Schneider (Germany)", value: "5× DTM champion 1995+2000+2001+2003+2006", year: 2006 },
    { title: "Bathurst 1000 attendance", holder: "Bathurst 1000", value: "150,000+ attendance annually; Australia's largest motorsport event", year: 2020 },
  ],

  variants: ["supercars-australia-v8-muscle", "btcc-uk-tcr-hatchbacks", "dtm-germany-gt3-based", "wtcr-world-tcr-international", "tcr-national-series-worldwide", "nascar-us-oval-touring-tradition"],
  relatedSports: ["formula-1", "gt-racing", "rallying", "circuit-racing", "endurance-racing", "nascar"],

  skills: ["high-speed car control", "close-quarters racing awareness", "consistent lap times over long races", "pit stop coordination (team)", "physical fitness (30-60 min races + heat + G-forces)", "mental focus (extended race concentration)"],
  strategies: [
    { title: "Tire management", body: "Elite touring car drivers manage tire wear across race distance. Aggressive early = potential fade later." },
    { title: "Pit stop strategy (endurance)", body: "Bathurst 1000 + long races: pit timing + tire choice + driver changes decisive." },
    { title: "Qualifying + starting position", body: "Front row = major advantage. Elite drivers deliver in qualifying pressure." },
    { title: "Reverse grid tactics", body: "BTCC's reverse-grid rules: sometimes better to finish 8th race 1 than 3rd; strategic thinking required." },
    { title: "Success ballast management", body: "BTCC + some series add weight to winning cars; managing performance vs. ballast is strategic art." },
    { title: "Weather adaptation", body: "Wet + mixed conditions favor drivers with best rain skills; tire choice + brave commitment differentiates." },
  ],

  terminology: [
    { term: "Touring Car", meaning: "Modified production sedan/hatchback used in touring car racing." },
    { term: "TCR", meaning: "Global technical regulation (2015+); 2.0L turbo hatchbacks." },
    { term: "V8 Supercars / Supercars", meaning: "Australian championship; V8-powered muscle cars." },
    { term: "DTM", meaning: "Deutsche Tourenwagen Masters; German premier touring championship (GT3-based since 2021)." },
    { term: "BTCC", meaning: "British Touring Car Championship; UK's longest-running motorsport." },
    { term: "WTCR", meaning: "FIA World Touring Car Cup (2018-2022); global TCR-regs championship." },
    { term: "Bathurst 1000", meaning: "Iconic Australian 1000 km endurance touring car race at Mount Panorama Circuit." },
    { term: "Success ballast", meaning: "Weight added to winning cars for next race (BTCC + some series); equalizes competition." },
    { term: "Reverse grid", meaning: "Race 2 grid based on reverse of race 1 finish (BTCC + some series)." },
    { term: "Refueling", meaning: "Adding fuel during pit stops; allowed in some series (WTCR) prohibited others (BTCC)." },
    { term: "Slick vs. wet tires", meaning: "Dry vs. rain compound tire choice; strategic decision each race." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Karting + car control courses", body: "Karting for base racecraft. Car control clinics (Skip Barber, BMW CCA) build street car foundation." },
      { title: "SCCA + club racing entry-level series", body: "Amateur classes in touring car-adjacent categories build competitive experience." },
      { title: "Track days + open-lapping days", body: "Track time in own car develops confidence + fitness." },
    ]},
    { level: "intermediate", steps: [
      { title: "Enter regional TCR / entry-level touring championships", body: "TCR Ibérico + Spanish TCR + national feeder championships offer entry paths." },
      { title: "Build a competitive car", body: "TCR-spec car $150,000-$300,000 for competitive entry level. Additional annual $100,000+ for team + tires + travel." },
      { title: "Sponsorships critical", body: "Local + regional sponsorships essential for cost. National championship results build sponsor value." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at national championships (BTCC, Supercars, DTM)", body: "Top-tier national championships; established career pathway. Requires seat purchase + team quality." },
      { title: "Cross to international WTCR/TCR World Tour", body: "Some drivers cross to international championships; opens broader career opportunities." },
      { title: "Consider LMP2/GT3 crossover", body: "Touring car drivers often cross to sports car endurance (Le Mans, IMSA); different but transferable skills." },
    ]},
  ],

  faq: [
    { question: "What is Touring Car Racing?", answer: "Motorsport featuring modified production-based sedans + hatchbacks in door-to-door racing on road courses. Cars visually resemble street cars, appealing to fans who relate to the vehicles. Major championships: Australian Supercars (V8 muscle cars), German DTM (GT3-based), British BTCC (TCR hatchbacks), FIA WTCR/TCR International (2.0L turbo hatchbacks worldwide). Physical contact + rubbing common — 'rubbin' is racin' ' as saying goes." },
    { question: "What's the difference between the touring car championships?", answer: "Different technical regulations + geographic focus: (1) Supercars (Australia): V8-powered muscle cars; Ford vs. Chevrolet. (2) DTM (Germany): GT3-based since 2021; Mercedes-AMG, BMW M4, Ferrari, Audi. (3) BTCC (UK): TCR regs, 2.0L turbo hatchbacks; UK's longest-running motorsport since 1958. (4) WTCR/TCR: Global TCR regs; VW Golf, Hyundai i30, Audi RS3, Honda Civic. All fast + tactical + entertaining but different flavors." },
    { question: "Is Touring Car Racing in the Olympics?", answer: "No. Motorsports as a whole not Olympic due to environmental concerns + narrow accessibility. Touring cars unique in fan-relatable vehicle format but no Olympic pathway currently pursued." },
    { question: "What is the Bathurst 1000?", answer: "Iconic 1000 km endurance touring car race held annually (October) at Mount Panorama Circuit in Bathurst, Australia. Part of Supercars Championship. 150,000+ attendance annually — Australia's largest motorsport event. Peter Brock's 9 wins earned him 'King of the Mountain' status. Considered career-defining for Australian touring car drivers; equivalent to Daytona 500 for NASCAR." },
    { question: "Who is the greatest touring car driver?", answer: "Multiple candidates: (1) Peter Brock (Australia) — 9× Bathurst 1000 winner; iconic V8 driver; died 2006. (2) Bernd Schneider (Germany) — 5× DTM champion 1995-2006. (3) Yvan Muller (France) — 4× WTCC champion. (4) Andy Priaulx (UK) — 3× WTCC champion. (5) Colin Turkington (UK) — 4× BTCC champion. Different eras + series produce different answers." },
  ],

  wikipediaTitle: "Touring car racing",
  sources: [{ label: "TCR Series", url: "https://tcr-series.com", publisher: "WSC" }, { label: "Australian Supercars", url: "https://supercars.com", publisher: "Supercars" }, { label: "BTCC", url: "https://btcc.net", publisher: "TOCA" }, { label: "Wikipedia — Touring car racing", url: "https://en.wikipedia.org/wiki/Touring_car_racing", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

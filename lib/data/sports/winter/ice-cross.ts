import type { Sport } from "@/lib/types";

export const iceCross: Sport = {
  id: "ice-cross",
  slug: "ice-cross",
  name: "Ice Cross Downhill",
  officialName: "Ice Cross (formerly Red Bull Crashed Ice / All Terrain Skate Cross Federation)",
  aliases: ["Ice Cross", "Red Bull Crashed Ice", "ATSX", "Skate Cross"],
  shortDescription:
    "Extreme winter racing — 4 skaters race head-to-head down an urban ice track featuring drops, jumps, and banked turns at 60+ km/h; developed 2001 by Red Bull; governed by ATSX Federation; Ice Cross World Championship crowned each season.",
  longDescription:
    "Ice Cross Downhill is an extreme winter racing sport in which 4 skaters race simultaneously down a purpose-built urban ice track featuring steep drops, jumps, banked turns, and technical sections. Speed reaches 60+ km/h. Developed by Red Bull in 2001 for the Crashed Ice event in Stockholm, it spread to iconic urban venues: Quebec City, Saint Paul (Minnesota), Munich, Moscow, Belfast, Yokohama. The All Terrain Skate Cross Federation (ATSX) formed 2015 to govern the sport globally. Races: 4-skater heat-based elimination brackets; fastest completing course wins. Falls, contact, and passing are common — the sport's identity. Legendary skaters: Cameron Naasz (US — 3× World Champion 2016-2018), Marco Dallago (Austria — 2019+2022 World Champion), Miika Jokinen (Finland — multiple World Cup wins). Sport is not Olympic and Red Bull discontinued its Crashed Ice branded events in 2018; ATSX continues under new World Championship format. Skate design: modified hockey skates with hardened boots + steel-toe caps.",

  category: "winter-sports",
  subCategory: "extreme winter racing — 4-skater downhill on ice",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "winter",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "AT",
  regionOfOrigin: "Austria + international (developed by Red Bull 2001 for Stockholm event); ATSX Federation founded 2015",
  estimatedOrigin: "Developed by Red Bull 2001 for Crashed Ice Stockholm; ATSX Federation founded 2015; sport continues post-Red-Bull 2018",

  players: { min: 4, max: 4, note: "Individual sport; 4 skaters race simultaneously per heat." },
  field: {
    surfaceName: "Purpose-built ice track — urban downhill course",
    dimensions: "500-600m long × 200-300m vertical drop typical; 15-20 features (drops, jumps, banked turns, straights)",
    description: "Constructed in urban settings; frequently at iconic locations (Quebec City, Saint Paul cathedral courtyards). Ice track built temporarily each event; features include steep drops (2-3m), jumps (5-10m), banked turns, and technical sections. Race time: 30-40 seconds.",
  },
  equipment: [
    { name: "Modified hockey skates", description: "Reinforced boot with steel-toe cap; longer blade; different rocker profile than hockey skates for stability at speed." },
    { name: "Helmet (mandatory)", description: "Full-face hockey helmet required; some athletes use MTB full-face designs." },
    { name: "Full protective equipment", description: "Chest + spine protector + elbow + knee + shin pads. Mandatory at ATSX events." },
    { name: "Padded shorts + hip protection", description: "Impact protection for falls on ice." },
    { name: "Race suit", description: "Aerodynamic ski suit adapted for skating; team-branded." },
    { name: "Gloves + wrist guards", description: "Grip for course + protection against ice cuts + wrist injuries." },
  ],
  duration: { approximateMinutes: 1, structure: "Each heat: 30-40 seconds. Full event: qualifying + 16-heat elimination brackets = 3-4 hours total." },
  objective: "Cross finish line first in 4-skater heat. Top 2 advance to next round; single-elimination brackets from Round of 32 (or 16) through Final of 4.",
  matchStructure: "Qualification: individual time trial down course; top 32 (or 16) advance to heats. Heats: 4 skaters race simultaneously; top 2 advance. Bracket runs: Round of 32 → 16 → 8 → 4 → 2 → Big Final (top 4) + Small Final (5-8). Winner of Big Final = event champion.",

  basicRules: [
    { title: "4 skaters per heat", body: "Randomly seeded from qualification; race simultaneously down course." },
    { title: "First 2 to finish advance", body: "Top 2 in each heat move to next round; bottom 2 eliminated (or Small Final for 5-8)." },
    { title: "Contact allowed", body: "Skater-to-skater contact permitted; officials monitor for intentional pushing/hooking (illegal)." },
    { title: "Passing anywhere on course", body: "No lane restrictions; skaters may pass anywhere as long as no intentional interference." },
    { title: "Falling = usually elimination", body: "Fallen skater may continue but rarely competitive; typically eliminated." },
    { title: "Course-specific line choice", body: "Skaters choose their own lines through course." },
  ],
  advancedRules: [
    { title: "Intentional interference = disqualification", body: "Officials review video for pushing, blocking, or hooking; DQ if intentional." },
    { title: "Photo finish decisions", body: "Video review at finish line for close calls." },
    { title: "Weather + ice conditions delay", body: "Warm weather or poor ice quality can cause postponement or course modification." },
    { title: "Team format experiments", body: "Some events feature team formats; not currently the standard." },
    { title: "Trick sections (some courses)", body: "Some courses include optional trick sections rewarding aerial style." },
    { title: "Fastest lap qualification tiebreak", body: "Ties in qualification broken by fastest sector times." },
  ],
  scoring: {
    summary: "Elimination-based: top 2 of 4 in each heat advance. Winner of Big Final wins gold; second silver; third bronze.",
    winCondition: "Win Big Final (heat of 4 finalists). No points-based scoring during heats; pure racing.",
    breakdown: [
      { action: "Finish 1st in heat", points: "Advance to next round" },
      { action: "Finish 2nd in heat", points: "Advance to next round" },
      { action: "Finish 3rd/4th in heat", points: "Eliminated (or Small Final for 5-8)" },
      { action: "Big Final 1st", points: "Event gold + World Championship points" },
      { action: "Big Final 2nd/3rd", points: "Silver + bronze + points" },
      { action: "Season championship", points: "Highest cumulative points across all events" },
    ],
  },
  penalties: [
    { title: "Intentional interference / blocking / hooking", body: "Immediate disqualification." },
    { title: "Cutting course", body: "Disqualification if skater goes outside marked boundaries." },
    { title: "False start", body: "Warning first; DQ on second offense." },
    { title: "Illegal equipment", body: "DQ before or after race if equipment doesn't meet ATSX standards." },
    { title: "Unsafe skating", body: "Warning; DQ + potential ban for reckless behavior." },
  ],

  positions: [
    { name: "Competitor", role: "Individual racer; 4 per heat.", count: 1 },
    { name: "Coach + team support", role: "Between-heat advice; course strategy." },
    { name: "Race officials + technical delegates", role: "Ensure course + equipment compliance." },
  ],
  officiating: {
    officials: ["Chief Race Director", "Course marshals", "Video review official", "Timekeeper + starter"],
    summary: "ATSX-certified officials; video review for contact + line calls; medical staff mandatory due to high-injury nature.",
  },

  governingBodies: [
    { name: "All Terrain Skate Cross Federation (ATSX)", founded: 2015, headquarters: "Innsbruck, Austria", website: "https://atsx.com" },
    { name: "Red Bull (event sponsor 2001-2018)", founded: 1987, headquarters: "Salzburg, Austria" },
  ],
  majorCompetitions: [
    { name: "ATSX Ice Cross World Championship", frequency: "seasonal (5-8 events)", founded: 2016, region: "worldwide" },
    { name: "Red Bull Crashed Ice (historic, 2001-2018)", frequency: "annual", founded: 2001, region: "worldwide (rotating iconic urban venues)" },
    { name: "Riders Cup (European circuit)", frequency: "annual", founded: 2010, region: "Europe" },
  ],
  countriesPlayed: ["US", "CA", "AT", "FI", "SE", "CZ", "DE", "CH", "NO", "RU", "JP", "AU"],
  famousAthletes: [
    "Cameron Naasz (US — 3× World Champion 2016-2018)",
    "Marco Dallago (Austria — 2019 + 2022 World Champion)",
    "Miika Jokinen (Finland — multiple World Cup wins)",
    "Kyle Croxall (Canada — 2015 World Champion + multiple podiums)",
    "Amanda Trunzo (US — women's World Champion)",
    "Myriam Trépanier (Canada — women's World Champion)",
    "Arttu Pihlainen (Finland — modern podium contender)",
    "Nicholas Meletis (Canada — multiple podium)",
    "Elaine Topolnisky (Canada — women's contender)",
  ],
  records: [
    { title: "Sport's founding event", holder: "Red Bull Crashed Ice", value: "First held Stockholm 2001; iconic urban venues worldwide", year: 2001 },
    { title: "Most Ice Cross World Championships (men)", holder: "Cameron Naasz (US)", value: "3× World Champion 2016+2017+2018", year: 2018 },
    { title: "Sport transition post-Red Bull", holder: "ATSX", value: "Red Bull discontinued Crashed Ice branding 2018; ATSX continues sport under World Championship format", year: 2019 },
    { title: "Iconic Quebec City venue", holder: "Ice Cross Quebec City", value: "Multi-year event under historic Château Frontenac; sport's most iconic venue", year: 2020 },
  ],

  variants: ["atsx-standard-ice-cross", "red-bull-crashed-ice-historic", "team-ice-cross-experimental", "junior-ice-cross-modified"],
  relatedSports: ["ice-hockey", "speed-skating", "ski-cross", "snowboard-cross", "downhill-skiing"],

  skills: ["ice skating balance at speed", "aerial control (jumps + drops)", "close-quarters racing awareness", "line-choice strategy", "physical durability (contact + crashes)", "mental focus (4-way pressure races)"],
  strategies: [
    { title: "Nail the start", body: "First to lead into first turn = decisive advantage. Explosive start from starting gate + first 50m defines heat." },
    { title: "Line choice through banked turns", body: "Inside line = shortest but tight; outside = longer but more speed. Adapt to opponents' positioning." },
    { title: "Aerial control on drops + jumps", body: "Land clean or lose 0.5s. Practice course-specific features." },
    { title: "Legal physical contact", body: "Body positioning for line control; illegal for intentional pushing. Elite racers use body position for advantage." },
    { title: "Watch for passing lanes", body: "Course design creates specific passing zones. Study course video pre-race." },
    { title: "Manage energy across heats", body: "Multiple heats per day; conserve energy on cruising sections; peak effort on decisive sections." },
    { title: "Reserve hardest passes for Big Final", body: "Get to Final of 4 first; then use best passing move only in Big Final." },
  ],

  terminology: [
    { term: "Ice Cross", meaning: "Sport's official name (post-Red-Bull era)." },
    { term: "Crashed Ice", meaning: "Red Bull's original event branding (2001-2018)." },
    { term: "ATSX", meaning: "All Terrain Skate Cross Federation; world governing body since 2015." },
    { term: "Heat", meaning: "Single race between 4 skaters; top 2 advance." },
    { term: "Big Final", meaning: "Final race between top 4 skaters; determines gold, silver, bronze." },
    { term: "Small Final", meaning: "Race between 5th-8th place finishers." },
    { term: "Berm", meaning: "Banked turn in ice cross course." },
    { term: "Drop", meaning: "Vertical descent feature; typically 2-3m." },
    { term: "Photo finish", meaning: "Close finish requiring video review." },
    { term: "Interference call", meaning: "Officiating decision on illegal contact." },
    { term: "Quebec City", meaning: "Iconic urban venue under Château Frontenac." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Master intermediate hockey skating first", body: "Ice cross requires solid skating base. 3-5 years hockey skating before attempting course training." },
      { title: "Ride small ice cross courses at events", body: "ATSX + regional events sometimes offer beginner-friendly runs during off-hours." },
      { title: "Join local ice cross club", body: "US, Canada, Austria, Finland, Sweden have small ice cross communities; entry via ATSX-affiliated national contacts." },
    ]},
    { level: "intermediate", steps: [
      { title: "Compete at ATSX regional events", body: "Regional Ice Cross circuit; build ranking + technique in low-pressure setting." },
      { title: "Buy proper equipment", body: "Modified skates + full protective kit $1,500-3,000. Not casual investment." },
      { title: "Cross-train physical fitness", body: "Explosive leg power + core strength + cardiovascular. Weight training + intervals + hockey skating build base." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at ATSX Ice Cross World Championship", body: "Top-tier world series; qualification via regional events + previous season ranking." },
      { title: "Sponsorships + team support", body: "Ice cross athletes rely on sponsorships + Red Bull athlete deals; niche sport but passionate fanbase." },
      { title: "Consider parallel careers", body: "Sport rewards multi-discipline athletes; hockey + speed skating + skiing crossovers common." },
    ]},
  ],

  faq: [
    { question: "What is Ice Cross Downhill?", answer: "An extreme winter racing sport where 4 skaters race simultaneously down purpose-built urban ice tracks featuring steep drops, jumps, and banked turns at 60+ km/h. Developed by Red Bull in 2001 for the Crashed Ice event in Stockholm. Now governed by All Terrain Skate Cross Federation (ATSX) with annual World Championship crown. Contested at iconic urban venues: Quebec City, Saint Paul, Munich, Yokohama." },
    { question: "Is Ice Cross the same as Red Bull Crashed Ice?", answer: "Red Bull Crashed Ice was the historic branding (2001-2018) for events organized by Red Bull. Red Bull discontinued the Crashed Ice branding in 2018 but the sport continues under ATSX-organized events with same rules + format. Modern sport is Ice Cross Downhill (ATSX branding); historic events are known as Crashed Ice." },
    { question: "Is Ice Cross in the Olympics?", answer: "No. Sport is too niche + expensive to host for Olympic consideration currently. ATSX has explored Winter Olympic pathways but no active proposal. Continues as its own World Championship circuit." },
    { question: "How dangerous is Ice Cross?", answer: "Very serious. 60+ km/h on ice with contact + jumps + drops. Common injuries: broken bones (collarbone + wrist + ankle common); concussions; spinal fractures possible. Full protective equipment (helmet + chest + spine + elbow + knee + shin) reduces risk substantially. Injury rate per hour is among highest in winter sports." },
    { question: "Who is the greatest Ice Cross athlete?", answer: "Multiple candidates: (1) Cameron Naasz (US) — 3× World Champion 2016-2018; sport's dominant modern era. (2) Marco Dallago (Austria) — 2019 + 2022 World Champion; post-Naasz dominant. (3) Kyle Croxall (Canada) — 2015 World Champion + multiple podiums. (4) Amanda Trunzo (US) — women's World Champion. Sport's history is short; recent champions dominate all-time lists." },
  ],

  wikipediaTitle: "Ice cross downhill",
  sources: [{ label: "ATSX Federation", url: "https://atsx.com", publisher: "ATSX" }, { label: "Wikipedia — Ice cross downhill", url: "https://en.wikipedia.org/wiki/Ice_cross_downhill", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const heliSkiing: Sport = {
  id: "heli-skiing",
  slug: "heli-skiing",
  name: "Heli-Skiing",
  officialName: "Heli-Skiing (Helicopter-Accessed Backcountry Skiing)",
  aliases: ["Helicopter Skiing", "Heli-Ski", "Heli-Snowboarding"],
  shortDescription:
    "Backcountry skiing where helicopter transports skiers to alpine peaks + drop zones inaccessible by resort lifts — for pristine powder + big-mountain descents. Popularized by Hans Gmoser (Canadian Mountain Holidays, 1965); global industry ~$500M annually.",
  longDescription:
    "Heli-Skiing is a form of backcountry skiing (or snowboarding) where a helicopter transports skiers to remote alpine peaks + high-elevation ridges + glacier terrain that is inaccessible by resort ski lifts. Skiers then descend deep powder, corn snow, or challenging alpine terrain guided by professional mountain guides. Popularized by Austrian-Canadian Hans Gmoser (founder of Canadian Mountain Holidays, or CMH — the world's original + still largest heli-ski operator) in 1965 in British Columbia's Bugaboo mountains. Global heli-ski industry today: ~$500M annual revenue, operators in Canada (dominant — CMH, Northern Escape, TLH, Mike Wiegele), Alaska (Chugach mountains, Points North), New Zealand (Southern Alps), Iceland, Japan (Hokkaido powder), Kashmir (Gulmarg), Chile (Andes), Norway (Lyngen Alps). Costs $1,000-$3,000+ per day; multi-day packages $5,000-$25,000. Concentrates uphill labor + provides multiple 3,000-5,000ft descent runs per day. Higher risk than resort skiing (avalanche, terrain hazards, weather); professional guiding + avalanche safety training essential.",

  category: "adventure-extreme-sports",
  subCategory: "backcountry skiing (helicopter-accessed)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "winter",
  era: "20th-century",
  popularity: "niche",
  countryOfOrigin: "CA",
  regionOfOrigin: "British Columbia, Canada (Bugaboo Mountains, popularized by Hans Gmoser 1965)",
  estimatedOrigin: "Pioneered 1965 by Hans Gmoser (Canadian Mountain Holidays) in Bugaboos, BC; industry expansion 1970s-90s to Alaska + NZ + Europe + Asia",

  players: { min: 4, max: 12, note: "Groups of 4-11 skiers + 1-2 guides per helicopter; solo heli-ski essentially impossible (helicopter + guide fixed costs)." },
  equipment: [
    { name: "Powder skis (fat / rockered)", description: "Wide skis (~110-130mm underfoot) designed for deep powder + varied backcountry snow." },
    { name: "Snowboard (backcountry-oriented)", description: "Alternative to skis; increasingly popular." },
    { name: "Avalanche safety equipment (mandatory)", description: "Transceiver (avalanche beacon), probe, shovel — the 'trinity' of avalanche safety. All clients must have + know how to use." },
    { name: "Airbag backpack", description: "Modern standard — inflatable backpack that keeps skier at avalanche surface during slide." },
    { name: "Helmet + ski clothing (extreme cold-weather)", description: "Alpine helmet + shell + insulation for -20°C conditions." },
    { name: "Helicopter (typically Bell 205, 212, or Astar)", description: "Utility helicopter suited for high-altitude operations + 6-11 passenger loads." },
  ],
  duration: { approximateMinutes: 480, structure: "Full-day operations: 6-15 runs per day depending on weather + terrain; multi-day trips 3-7 days typical." },
  objective: "Ski/snowboard descent runs down remote alpine terrain accessed by helicopter drop-off.",
  matchStructure: "Non-competitive; guided recreational descents.",

  basicRules: [
    { title: "Group heli-skiing with certified mountain guide", body: "Every group led by qualified mountain guide (ACMG in Canada, AMGA in USA, IFMGA international)." },
    { title: "Avalanche safety training required (mandatory beacon check + rescue drill)", body: "All clients briefed on avalanche safety + transceiver operation before first drop." },
    { title: "Weather-dependent (many days cancelled by wind + storms + visibility)", body: "Heli operations cannot fly in high wind + storm; ~30-40% of scheduled days affected by weather." },
    { title: "Multiple runs per day", body: "Typical: 6-15 runs; each run 3,000-5,000ft descent; helicopter picks up at bottom + lifts back to top." },
    { title: "Guide controls terrain selection", body: "Guide chooses runs based on avalanche + weather + client skill; strict discipline; clients must follow guide's line + timing." },
  ],
  advancedRules: [
    { title: "Client ability assessment", body: "Operators require intermediate-to-expert alpine ski ability (Blue/Black diamond resort proficiency) minimum; can't teach beginners at heli-ski cost." },
    { title: "Terrain grading", body: "Guides grade terrain by avalanche hazard rating (1-5) + slope angle + snow stability; conservative decisions in high-hazard periods." },
    { title: "Environmental impact concerns", body: "Helicopter noise + wildlife disturbance + carbon footprint drive some tension with backcountry human-powered skiers + conservation groups; industry seeking sustainability improvements." },
    { title: "Multi-day trip logistics", body: "Multi-day trips include lodge accommodation + full-board catering + reserved daily helicopter access; premium pricing." },
  ],
  scoring: {
    summary: "Non-competitive — recreational experience.",
    winCondition: "N/A",
    breakdown: [],
  },
  penalties: [
    { title: "Ignoring guide instructions", body: "Removal from group + refund forfeiture." },
    { title: "Skiing outside guide's line (avalanche risk)", body: "Removal from trip." },
  ],

  positions: [
    { name: "Mountain guide", role: "Route selection + avalanche assessment + client safety + rescue coordination.", count: 1 },
    { name: "Helicopter pilot", role: "Aircraft operation + drop zone selection.", count: 1 },
    { name: "Client skier", role: "Descend selected line under guide's direction.", count: 1 },
  ],
  officiating: {
    officials: ["Mountain guide (safety authority)", "Helicopter pilot (aircraft safety)"],
    summary: "Not competitive — guide + pilot make all safety decisions; clients follow instructions.",
  },

  governingBodies: [
    { name: "Canadian Ski Guides Association (CSGA)", founded: 1978, headquarters: "Canada" },
    { name: "Association of Canadian Mountain Guides (ACMG)", founded: 1963, headquarters: "Canada" },
    { name: "International Federation of Mountain Guides Associations (IFMGA)", founded: 1965, headquarters: "Zurich, Switzerland" },
    { name: "American Mountain Guides Association (AMGA)", founded: 1979, headquarters: "USA" },
    { name: "HeliCat Canada (industry association)", founded: 1979, headquarters: "British Columbia, Canada" },
  ],
  majorCompetitions: [
    { name: "No formal competitions — recreational sport", frequency: "N/A", founded: 0, region: "N/A" },
    { name: "Freeride World Tour (some heli-accessed venues)", frequency: "annual", founded: 1996, region: "Alaska + Europe + Japan" },
    { name: "Big-mountain filming events (Warren Miller films, TGR productions)", frequency: "annual film releases", founded: 1949, region: "worldwide big-mountain terrain" },
  ],
  countriesPlayed: ["CA", "US (Alaska)", "NZ", "IS", "JP (Hokkaido)", "IN (Kashmir Gulmarg)", "CL (Andes)", "AR (Bariloche)", "NO", "IT (Alps limited)", "AT (Alps limited)", "GE (Caucasus)"],
  famousAthletes: [
    "Hans Gmoser (Austria/Canada) — 1932-2006, pioneered heli-skiing 1965 + founded Canadian Mountain Holidays (CMH)",
    "Mike Wiegele (Canada) — pioneering BC heli-ski operator since 1970",
    "Doug Coombs (USA) — legendary big-mountain skier + Alaska heli-ski guide; killed 2006 avalanche",
    "Shane McConkey (Canada) — big-mountain skier; killed 2009 base-jumping",
    "Warren Miller films + Teton Gravity Research (TGR) — heli-ski media pioneers",
  ],
  records: [
    { title: "Original heli-ski operator", holder: "CMH (Canadian Mountain Holidays)", value: "Founded 1965 by Hans Gmoser; still world's largest heli-ski operator with 11 lodges in BC + ~10,000+ client-days per year", year: 2024 },
    { title: "Fatal avalanche history", holder: "Heli-skiing globally", value: "~30-50 avalanche fatalities/year in backcountry skiing worldwide; heli-ski industry maintains lower rate than solo backcountry due to guiding + terrain selection", year: 2024 },
    { title: "Most heli-ski client-days annually", holder: "CMH (Canada)", value: "~10,000+ client-days per year across 11 lodges in BC; largest single heli-ski operation globally", year: 2024 },
  ],

  variants: ["cmh-canadian-lodge-based-week-long", "alaska-chugach-alpine-big-mountain", "japan-hokkaido-powder-day-based", "new-zealand-southern-alps-southern-hemisphere-season", "cat-skiing-snowcat-alternative-to-helicopter"],
  relatedSports: ["backcountry-skiing", "ski-mountaineering", "big-mountain-skiing", "freeride-skiing", "cat-skiing", "ski-touring"],

  skills: ["expert alpine skiing (Blue/Black resort proficiency minimum)", "powder skiing technique", "avalanche safety literacy + transceiver operation", "physical endurance (multiple long descents daily at altitude)", "group discipline + following guide instructions", "backcountry hazard awareness (crevasses, cornices, tree wells)"],
  strategies: [
    { title: "Powder ski technique", body: "Wider stance + centered weight + smooth rhythmic turns; different from resort carving technique." },
    { title: "Follow guide's line exactly", body: "Guides pick lines with terrain + snow stability in mind; deviating = avalanche risk." },
    { title: "Pace management", body: "6-15 runs per day at altitude fatiguing; pace early runs conservatively to sustain full day." },
  ],

  terminology: [
    { term: "Heli", meaning: "Helicopter (short)." },
    { term: "Drop", meaning: "Helicopter landing where skiers deploy for descent." },
    { term: "Beacon", meaning: "Avalanche transceiver — mandatory safety device transmitting + receiving on 457kHz." },
    { term: "Trinity", meaning: "Transceiver + probe + shovel — three-piece avalanche safety kit." },
    { term: "First tracks", meaning: "Being first to ski untouched powder in a terrain feature." },
    { term: "Cat skiing", meaning: "Alternative: snowcat transport instead of helicopter; cheaper + slower access." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Master resort alpine skiing (Blue/Black+ level)", body: "Minimum ability requirement; can't skip resort progression." },
      { title: "Take avalanche safety course (AIARE Level 1 in US, CAA in Canada)", body: "Essential foundational knowledge before any backcountry venture." },
      { title: "Start with resort backcountry gates or intro heli-ski day", body: "Some operators offer intro days with easier terrain for first-timers." },
    ]},
    { level: "advanced", steps: [
      { title: "Multi-day CMH or Alaska trip", body: "Weeklong big-mountain heli-ski trips serve as pinnacle experiences." },
      { title: "Freeride film / competition circuit", body: "Freeride World Tour + Warren Miller / TGR filming for professional-level performance." },
    ]},
  ],

  faq: [
    { question: "How dangerous is heli-skiing?", answer: "Higher risk than resort skiing due to avalanche terrain + remote location + weather. However, professional guiding significantly reduces risk vs. solo backcountry — guides select terrain conservatively based on avalanche + weather assessment. Fatal accidents occur but not epidemic. Client compliance with guide instructions + avalanche safety training critical. Mandatory avalanche transceiver + airbag backpack + guide-led group are safety layers." },
    { question: "How much does heli-skiing cost?", answer: "Single-day operations: $1,000-$3,000 USD depending on location + operator. Multi-day lodge-based trips: $5,000-$25,000 USD for 5-7 day packages including accommodation + meals + guiding + all heli time. Alaska tends most expensive due to logistics; British Columbia most established + reasonable. Japan + Iceland popular emerging destinations at various price points." },
    { question: "Do you need to be an expert skier?", answer: "Yes — intermediate-to-expert (Blue/Black diamond resort proficiency minimum). Heli-ski isn't beginner terrain, and can't teach beginners at heli-ski cost. Operators screen client ability + may cancel refunds if skier can't handle terrain safely. Some operators offer intro or 'first-time heli' days with easier terrain for advanced-intermediate skiers." },
  ],

  wikipediaTitle: "Heliskiing",
  sources: [
    { label: "Canadian Mountain Holidays (original operator)", url: "https://www.canadianmountainholidays.com", publisher: "CMH" },
    { label: "Wikipedia — Heliskiing", url: "https://en.wikipedia.org/wiki/Heliskiing", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const snowboardCross: Sport = {
  id: "snowboard-cross",
  slug: "snowboard-cross",
  name: "Snowboard Cross",
  officialName: "Snowboard Cross / Boardercross (FIS)",
  aliases: ["Boardercross", "SBX", "Snowboard-X", "Snowboarder Cross"],
  shortDescription:
    "Head-to-head 4-rider snowboard racing down a course with jumps, banked turns, and rollers — the winner of each 4-person heat advances through elimination brackets; contested at Winter Olympics since Turin 2006.",
  longDescription:
    "Snowboard Cross (also Boardercross, SBX) is the snowboarding equivalent of Ski Cross — 4 riders race simultaneously down a purpose-built course with jumps, rollers, banked turns, and berms. Emerging from freestyle snowboarding in the mid-1990s, Snowboard Cross debuted at the Winter X Games (1998) alongside Ski Cross, then joined the Winter Olympics at Turin 2006. Legendary champions include Seth Wescott (US — 2× Olympic gold 2006 + 2010), Nate Holland (US — 6× X Games gold record), Lindsey Jacobellis (US — Olympic gold 2022; iconic 2006 near-gold moment), and Pierre Vaultier (France — Olympic gold Sochi 2014 + Pyeongchang 2018). Course lengths + designs are similar to Ski Cross (~1,000-1,300m, 30-50 sec race time); the primary difference is equipment. Snowboard Cross tends to have more aerial airtime + rider-to-rider contact than Ski Cross, making for peak spectacle. Contact + interference calls follow same rules as Ski Cross. Dominant nations: US, France, Canada, Italy, Australia.",

  category: "winter-sports",
  subCategory: "snowboarding — head-to-head racing",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "winter",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "US",
  regionOfOrigin: "United States (Winter X Games 1998); global spread via FIS World Cup + Olympics",
  estimatedOrigin: "Emerged from freestyle snowboarding mid-1990s; Winter X Games debut 1998; FIS World Cup 1997; Olympic debut Turin 2006",

  players: { min: 4, max: 4, note: "Individual sport but 4 riders race simultaneously per heat; single-elimination brackets." },
  field: {
    surfaceName: "Snow snowboard cross course",
    dimensions: "1,000-1,300 m long with 15-20 features (jumps, berms, rollers, banked turns); typically 200-300 m vertical drop",
    description: "Purpose-built course with rolling terrain, banked turns, small + medium jumps, rollers, berms. Similar layout to Ski Cross; different equipment demands. 30-50 seconds race time.",
  },
  equipment: [
    { name: "Race snowboard", description: "Cambered snowboard optimized for racing; slightly narrower + more responsive than freestyle. Typically 155-170cm depending on rider size." },
    { name: "Race bindings", description: "Higher back + stiffer bindings for control; often step-in system for quick entry." },
    { name: "Race boots", description: "Stiffer than freestyle boots; boa-lace + heel-lock systems for responsiveness." },
    { name: "Mandatory helmet + goggles", description: "FIS-approved hard-shell helmet; wide-vision goggles." },
    { name: "Back protector + torso pads", description: "Mandatory spine protector; some events require additional padding." },
    { name: "Wrist guards", description: "Recommended (not always mandatory); prevents wrist fractures on hard falls." },
    { name: "Race suit", description: "Aerodynamic suit; slightly less restrictive than pure alpine racing for movement." },
  ],
  duration: {
    approximateMinutes: 1,
    structure: "Each heat: 30-50 seconds. Full event: qualification time trial + 16-heat elimination brackets = 3-4 hours total.",
  },
  objective:
    "Cross the finish line first in your 4-rider heat. Top 2 advance to next round; single-elimination brackets from Round of 32 (or 16) through Final of 4.",
  matchStructure:
    "Qualification: individual time trial down the course; top 32 (or 16) advance to heats. Heats: 4 riders race simultaneously; top 2 advance. Bracket runs: Round of 32 → 16 → 8 → 4 → 2 → Big Final (top 4) + Small Final (5th-8th). Winner of Big Final = gold.",

  basicRules: [
    { title: "4 riders per heat", body: "Randomly seeded from qualification times; race simultaneously down the course." },
    { title: "First 2 to finish advance", body: "Top 2 in each heat move to next round; bottom 2 eliminated (or Small Final for 5th-8th)." },
    { title: "Contact allowed", body: "Rider-to-rider contact permitted; officials monitor for intentional pushing/hooking (illegal)." },
    { title: "Passing on any part of course", body: "No lane restrictions; riders may pass anywhere as long as no intentional interference." },
    { title: "Falling = elimination", body: "Fallen rider may continue if able but rarely competitive; typically eliminated." },
    { title: "Course-specific line choice", body: "Riders choose their own lines through course; different lines suit different rider styles." },
    { title: "Aerial competence required", body: "Course jumps require aerial control; riders must land clean to maintain speed." },
  ],
  advancedRules: [
    { title: "Intentional interference = disqualification", body: "Officials review video for pushing, blocking, or hooking; DQ if intentional." },
    { title: "Photo finish decisions", body: "Video review at finish line for close calls (sub-0.01-second margins possible)." },
    { title: "Aerial contact permitted", body: "Riders may make contact mid-air if incidental; intentional airborne interference = DQ." },
    { title: "Weather + snow conditions delay", body: "High winds, poor visibility, or dangerous course conditions cause postponement." },
    { title: "Team format experiments", body: "Some non-Olympic events feature team formats; not currently in Olympic program." },
    { title: "Regenerative sections", body: "Some courses include 'regenerative' sections with pumps to build speed; riders must time weight shifts optimally." },
  ],
  scoring: {
    summary: "Elimination-based: top 2 of 4 in each heat advance. Winner of Big Final wins gold; second silver; third bronze.",
    winCondition: "Win Big Final (heat of 4 finalists). No points-based scoring during heats; pure racing.",
    breakdown: [
      { action: "Finish 1st in heat", points: "Advance to next round" },
      { action: "Finish 2nd in heat", points: "Advance to next round" },
      { action: "Finish 3rd in heat", points: "Eliminated (or Small Final for 5-8 places)" },
      { action: "Finish 4th in heat", points: "Eliminated" },
      { action: "Big Final 1st", points: "Gold medal" },
      { action: "Big Final 2nd", points: "Silver medal" },
      { action: "Big Final 3rd", points: "Bronze medal" },
    ],
  },
  penalties: [
    { title: "Intentional interference / blocking / hooking", body: "Immediate disqualification; can also affect ranking through subsequent events." },
    { title: "Cutting course", body: "Disqualification if rider goes outside marked course boundaries." },
    { title: "False start", body: "Warning first; DQ on second offense within event." },
    { title: "Illegal equipment", body: "DQ before or after race if equipment doesn't meet FIS standards." },
    { title: "Late arrival to start", body: "Automatic elimination from event." },
  ],

  positions: [
    { name: "Competitor", role: "Individual racer; 4 per heat.", count: 1 },
    { name: "Coach + team support", role: "Between-heat advice; course strategy; equipment tuning." },
    { name: "Race officials + technical delegates", role: "Ensure course + equipment compliance." },
  ],
  officiating: {
    officials: ["Chief Race Director", "Course judges (multiple stations)", "Video review official", "Timekeeper + starter"],
    summary: "FIS-certified officials; video review for contact + line calls; typically 8+ officials for major event.",
  },

  governingBodies: [
    { name: "Fédération Internationale de Ski (FIS)", founded: 1924, headquarters: "Oberhofen, Switzerland", website: "https://fis-ski.com" },
    { name: "US Ski + Snowboard", founded: 1904, headquarters: "Park City, USA", website: "https://usskiandsnowboard.org" },
    { name: "Canada Snowboard", founded: 1990, headquarters: "Vancouver, Canada", website: "https://canadasnowboard.ca" },
  ],
  majorCompetitions: [
    { name: "Winter Olympic Games (Snowboard Cross)", frequency: "quadrennial", founded: 2006, region: "worldwide (Turin 2006, Vancouver 2010, Sochi 2014, Pyeongchang 2018, Beijing 2022)" },
    { name: "FIS Snowboard World Championships", frequency: "biennial", founded: 1996, region: "worldwide" },
    { name: "FIS Snowboard Cross World Cup", frequency: "seasonal (8-12 events)", founded: 1997, region: "worldwide winter circuit" },
    { name: "X Games (Winter)", frequency: "annual", founded: 1998, region: "Aspen (USA)" },
    { name: "US Grand Prix / Dew Tour", frequency: "annual", founded: 2005, region: "USA" },
    { name: "Paralympic Winter Games (Para-Snowboard Cross)", frequency: "quadrennial", founded: 2014, region: "worldwide" },
  ],
  countriesPlayed: ["US", "FR", "CA", "IT", "AU", "AT", "SE", "CH", "DE", "NO", "FI", "SI", "GB", "CZ", "SK", "ES"],
  famousAthletes: [
    "Seth Wescott (US — 2× Olympic gold 2006 + 2010; sport's founding star)",
    "Nate Holland (US — 6× X Games gold record; multiple World Cup wins)",
    "Lindsey Jacobellis (US — Olympic gold 2022; iconic 2006 silver after error)",
    "Pierre Vaultier (France — Olympic gold Sochi 2014 + Pyeongchang 2018)",
    "Michela Moioli (Italy — Olympic gold Pyeongchang 2018)",
    "Alessandro Hämmerle (Austria — Olympic gold Beijing 2022)",
    "Chloé Trespeuch (France — Olympic silver 2022 + bronze 2014)",
    "Meryeta O'Dine (Canada — Olympic silver 2022 team medal)",
    "Merlin Surget (France — multiple World Cup wins)",
    "Eva Samková (Czech Republic — Olympic gold Sochi 2014)",
  ],
  records: [
    { title: "Olympic debut", holder: "Turin 2006", value: "First Winter Olympics with Snowboard Cross medals", year: 2006 },
    { title: "Most Olympic Snowboard Cross golds", holder: "Seth Wescott (US) + Pierre Vaultier (FR)", value: "2 golds each; Wescott 2006+2010, Vaultier 2014+2018", year: 2018 },
    { title: "Most X Games Snowboard Cross golds", holder: "Nate Holland (US)", value: "6 X Games gold medals (record)", year: 2013 },
    { title: "Lindsey Jacobellis 16-year Olympic quest", holder: "Lindsey Jacobellis (US)", value: "2006 silver after final-jump error → 2022 gold after 4 Olympic tries — sport's most-storied narrative", year: 2022 },
    { title: "Para-Snowboard Cross Paralympic debut", holder: "Sochi 2014", value: "First Paralympic Games with Snowboard Cross events", year: 2014 },
  ],

  variants: ["fis-standard-snowboard-cross", "team-snowboard-cross-non-olympic", "para-snowboard-cross-paralympic", "ski-cross-parallel"],
  relatedSports: ["ski-cross", "snowboarding", "alpine-skiing", "halfpipe-snowboarding", "big-air-snowboarding"],

  skills: [
    "high-speed alpine snowboard technique",
    "aerial control (jumps + rollers)",
    "close-quarters racing awareness",
    "line-choice strategy (through course)",
    "physical durability (contact + crashes)",
    "mental focus (4-way pressure races)",
    "quick recovery (multiple heats in one day)",
  ],
  strategies: [
    { title: "Nail the start", body: "First to lead into first turn = decisive advantage. Explosive start out of gate + first 100m defines heat." },
    { title: "Berm line choice", body: "High line through berm = more speed but longer; low line = shorter but slower. Adapt to opponents' positioning." },
    { title: "Aerial precision", body: "Small aerials can gain 0.1s; land clean or lose 0.5s. Practice course-specific jumps." },
    { title: "Physical contact positioning", body: "Legal contact for line control; illegal for intentional pushing. Elite riders use body position + subtle shoulder for advantage." },
    { title: "Watch for passing lanes", body: "Course design creates specific passing zones. Study course video pre-race to plan overtakes." },
    { title: "Manage energy across heats", body: "Multiple heats per day; conserve energy on cruising sections; peak effort on decisive sections." },
    { title: "Reserve hardest passes for Big Final", body: "Get to Final of 4 first; then use best passing move only in Big Final for maximum reward." },
  ],

  terminology: [
    { term: "Heat", meaning: "Single race between 4 riders; top 2 advance." },
    { term: "Big Final", meaning: "Final race between top 4 riders; determines gold, silver, bronze." },
    { term: "Small Final", meaning: "Race between 5th-8th place finishers; determines 5-8 positions." },
    { term: "Berm", meaning: "Banked turn in snowboard cross course." },
    { term: "Roller", meaning: "Uphill bump in course; requires timing for speed maintenance." },
    { term: "Photo finish", meaning: "Close finish requiring video review; can be decided by <0.01 seconds." },
    { term: "Interference call", meaning: "Officiating decision on illegal contact; can lead to disqualification." },
    { term: "Qualification (Time Trial)", meaning: "Individual timed run down course; seeds riders into brackets." },
    { term: "SBX", meaning: "Common abbreviation for Snowboard Cross." },
    { term: "Boardercross", meaning: "Original name for the sport; still widely used in casual contexts." },
    { term: "Hooking", meaning: "Illegal move to grab opponent's snowboard edge; automatic DQ." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Master intermediate snowboarding first", body: "SBX requires solid all-mountain snowboarding base. 3-5 years riding before attempting course training." },
      { title: "Ride small terrain parks + rollers", body: "Get comfortable with jumps + banked turns + rollers in relaxed setting before competition." },
      { title: "Join local snowboard club with racing program", body: "USASA (US), Canada Snowboard, national federations offer development pipelines." },
    ] },
    { level: "intermediate", steps: [
      { title: "Compete at regional events", body: "Nor-Am Cup + USASA + regional national championships build ranking + technique." },
      { title: "Study course + line-selection", body: "Video analysis of top riders' line choices; understand where speed accumulates + loses." },
      { title: "Add contact-training", body: "Practice close-quarters riding with training partners; learn legal contact positioning." },
    ] },
    { level: "advanced", steps: [
      { title: "Compete at FIS World Cup + X Games", body: "Top pathway to Olympic squad; World Cup podium finishes required for Olympic team." },
      { title: "Nation-team selection", body: "National federation trials + World Cup ranking determine Olympic squad composition." },
      { title: "Target Olympic gold", body: "4-year Olympic cycle dedication; Winter 2026 (Milano-Cortina) awaits current stars." },
    ] },
  ],

  faq: [
    { question: "Is Snowboard Cross in the Olympics?", answer: "Yes — since Turin 2006. Both men's + women's events. First Olympic gold medalists: Seth Wescott (US, men) + Tanja Frieden (Switzerland, women). Recent Olympic champions include Pierre Vaultier (France 2014+2018), Michela Moioli (Italy 2018), Lindsey Jacobellis (US 2022), Alessandro Hämmerle (Austria 2022). Also contested at Paralympic Winter Games since Sochi 2014 as Para-Snowboard Cross." },
    { question: "How is Snowboard Cross different from Ski Cross?", answer: "Same course design + racing format; different equipment. Ski Cross: 2 skis + poles + fast angulated turns; more pole-based push at gate. Snowboard Cross: 1 snowboard + no poles + smoother slide-based turns; more aerial airtime typically; slightly more rider contact due to lateral movement. Both are 4-way head-to-head elimination with same officiating rules. Snowboard Cross debuted at Turin 2006; Ski Cross at Vancouver 2010." },
    { question: "Who is the greatest Snowboard Cross athlete?", answer: "Multiple candidates: (1) Seth Wescott (US) — 2× Olympic gold 2006 + 2010; sport's founding legend. (2) Lindsey Jacobellis (US) — Olympic gold 2022 after 16-year journey; sport's most-storied narrative arc. (3) Nate Holland (US) — 6× X Games gold record; multiple World Cup wins. (4) Pierre Vaultier (France) — 2× Olympic gold 2014 + 2018; recent-era dominant. Wescott + Vaultier are consensus GOATs; Jacobellis's 2022 gold is defining moment." },
    { question: "How dangerous is Snowboard Cross?", answer: "Very serious. Head-to-head racing with contact + aerials at 40-60 mph on hard-packed snow. Common injuries: ACL/MCL tears, shoulder dislocations, spine fractures from bad landings, concussions. Similar risk profile to Ski Cross. Mandatory helmets, back protectors, safety fencing help. Wrist guards recommended for lower-arm protection. Injury rate per hour is among highest in Winter Olympics." },
    { question: "What was Lindsey Jacobellis's 2006 moment?", answer: "One of sport's iconic moments. At Turin 2006 Olympic final, Jacobellis had a massive lead approaching the final jump. Attempting a stylish 'method grab' as a celebration + statement move, she caught her board on landing and crashed, allowing Switzerland's Tanja Frieden to overtake for gold. Jacobellis got silver instead. 16 years later at Beijing 2022, she finally won gold — the sport's most-storied narrative arc." },
  ],

  wikipediaTitle: "Snowboard cross",
  sources: [
    { label: "FIS — Snowboard Cross", url: "https://fis-ski.com/en/snowboarding/snowboard-cross", publisher: "FIS" },
    { label: "Wikipedia — Snowboard cross", url: "https://en.wikipedia.org/wiki/Snowboard_cross", publisher: "Wikipedia" },
    { label: "Olympic.org — Snowboarding", url: "https://olympics.com/", publisher: "IOC" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

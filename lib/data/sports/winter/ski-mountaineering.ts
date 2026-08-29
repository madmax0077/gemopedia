import type { Sport } from "@/lib/types";

export const skiMountaineering: Sport = {
  id: "ski-mountaineering",
  slug: "ski-mountaineering",
  name: "Ski Mountaineering",
  officialName: "Ski Mountaineering / Skimo (International Ski Mountaineering Federation - ISMF)",
  aliases: ["Skimo", "Ski Alpinism", "Randonnée Racing"],
  shortDescription:
    "Winter mountain sport combining uphill ski touring with downhill alpine skiing — racers ascend + descend courses covering 1000-2000m vertical using specialized lightweight skis + skins; debut at Winter Olympics Milano-Cortina 2026.",
  longDescription:
    "Ski Mountaineering (Skimo) combines uphill ski touring — climbing snow-covered slopes with climbing skins attached to lightweight skis — with downhill alpine skiing. Races feature 1,000-2,000m of vertical gain + descent per event, requiring intense endurance + technical skill. Emerged from Alpine mountaineering tradition in the early 20th century; the International Ski Mountaineering Federation (ISMF) governs since 1999. Skimo will make its Olympic debut at Milano-Cortina 2026 (Individual Sprint + Mixed Relay events for men + women — 4 events total). European Alps nations (Italy, France, Switzerland, Spain, Austria) historically dominate. Elite races include the Pierra Menta (French Alps, 4-day team stage race), Patrouille des Glaciers (Swiss military-origin, 53 km), and Trofeo Mezzalama (Italian glacier race). Legendary athletes: Killian Jornet (Spain — 2× World Champion + multi-time record holder), Laetitia Roux (France — dominant women's competitor 2010s), Federica Casini (Italy — modern World Cup champion).",

  category: "winter-sports",
  subCategory: "mountain sport — combined ski touring + alpine skiing",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: false,
  isProfessional: true,
  season: "winter",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "FR",
  regionOfOrigin: "European Alps (France, Italy, Switzerland early 20th century); ISMF founded 1999; Olympic debut Milano-Cortina 2026",
  estimatedOrigin: "Emerged from Alpine mountaineering early 20th century; ISMF founded 1999; Olympic Winter Games debut 2026",

  players: { min: 1, max: 4, note: "Individual + team relay + mixed relay events." },
  field: {
    surfaceName: "Snow-covered mountain terrain — uphill + downhill sections",
    dimensions: "Course length varies by event: Sprint 3-5 km, Vertical 500-1000m vertical, Individual 10-15 km + 1500-2000m vertical",
    description: "Purpose-marked mountain courses with distinct uphill (skin-covered) + downhill (alpine ski) sections; multiple transitions per race; often at high altitude (2000-3500m).",
  },
  equipment: [
    { name: "Lightweight Skimo skis", description: "Ultra-light (700-1000g per ski); ~160-170cm typical; race-specific brands: Ski Trab, Movement, Dynafit." },
    { name: "Climbing skins", description: "Attached to ski bases for uphill grip; removed for downhill; typically mohair blend." },
    { name: "Ultra-light bindings (tech bindings)", description: "300-500g bindings with heel-lift for uphill + locked heel for downhill." },
    { name: "Lightweight ski boots", description: "Carbon fiber race boots (700-900g each); Flex ~90-100; Walking mode for uphill." },
    { name: "Race suit + backpack", description: "Aerodynamic lycra suit; small backpack for skins + spare items + safety kit." },
    { name: "Helmet + goggles", description: "Mandatory for race + downhill; some events require certified climbing helmet." },
    { name: "Poles + probe + shovel + beacon", description: "Poles for uphill push. Safety equipment (probe, shovel, avalanche transceiver) required at competitive events." },
  ],
  duration: {
    approximateMinutes: 90,
    structure: "Sprint: 3-5 min. Vertical: 20-40 min. Individual: 60-120 min. Team relay: 90-120 min.",
  },
  objective: "Complete course fastest — combines uphill climbing speed with downhill technical descent + transition efficiency.",
  matchStructure: "Race formats: (1) Sprint — short 3-5 min race with 1 climb + 1 descent + short skate finish. (2) Vertical — pure uphill race, 500-1000m vertical. (3) Individual — long race, 10-15 km + 1500-2000m vertical, multiple climbs/descents. (4) Team relay — 3-4 athletes tag off. (5) Mixed relay (Olympic debut) — 2 women + 2 men alternating.",

  basicRules: [
    { title: "Climb + descend course as marked", body: "Course-specific route; cutting course = DQ. Multiple transitions per race." },
    { title: "Skin on/off transitions", body: "Athletes must remove/apply climbing skins at designated transition zones." },
    { title: "Fastest total time wins", body: "Individual + Vertical + Sprint races: fastest finisher wins. Team: fastest combined." },
    { title: "Safety equipment mandatory", body: "Beacon, probe, shovel required at ISMF events; may be inspected pre + post race." },
    { title: "Course marking discipline", body: "Bright markers + tape; athletes must stay within marked corridor." },
    { title: "Weather-dependent modifications", body: "Extreme weather (avalanche risk, whiteout) can cause postponement/course change." },
  ],
  advancedRules: [
    { title: "Sprint format 4-runner heats", body: "Sprint race uses heat-based elimination; 4 racers per heat, top 2 advance." },
    { title: "Transition efficiency", body: "Elite skimo racers can transition (skin on/off, boot lock/unlock) in <30 seconds; slow transitions cost heavily." },
    { title: "Boot-lock discipline", body: "Boots must be locked in downhill mode before descent for safety; officials check at some transitions." },
    { title: "Team relay tag zones", body: "Tag-off must occur in designated zone; incoming teammate takes over from tag." },
    { title: "Olympic event structure (Milano-Cortina 2026)", body: "4 events: Men's Sprint, Women's Sprint, Men's Individual, Mixed Relay." },
    { title: "Avalanche safety protocols", body: "Race directors monitor conditions; events cancelled if avalanche risk exceeds thresholds." },
  ],
  scoring: {
    summary: "Fastest time wins. Team events: combined times. ISMF World Cup: season points across all events.",
    winCondition: "Fastest single time in each race; season champion = highest cumulative World Cup points.",
    breakdown: [
      { action: "Race win", points: "First place + ISMF ranking points" },
      { action: "Podium (2nd, 3rd)", points: "Silver + bronze + points" },
      { action: "Season ranking", points: "Cumulative points across World Cup rounds" },
      { action: "Olympic gold", points: "Medal + prestige (from 2026)" },
    ],
  },
  penalties: [
    { title: "Course cutting", body: "DQ from event." },
    { title: "Missing transition zone", body: "Time penalty or DQ depending on severity." },
    { title: "Missing safety equipment", body: "DQ + potential season points penalty." },
    { title: "Unsafe descent (skiing without locked boots)", body: "DQ + potential ban." },
    { title: "False start (Sprint)", body: "Warning first; DQ on repeat." },
  ],

  positions: [
    { name: "Competitor", role: "Individual athlete; racing solo or in team.", count: 1 },
    { name: "Team relay member", role: "1 of 3-4 in relay team.", count: 4 },
    { name: "Coach + support crew", role: "Course strategy + equipment prep + nutrition." },
  ],
  officiating: {
    officials: ["Chief Race Director", "Transition zone officials", "Course marshals", "Timekeeper", "Safety director", "Medical staff"],
    summary: "ISMF-certified officials; timing systems accurate to 1/100 second; safety infrastructure critical due to avalanche + fall risks.",
  },

  governingBodies: [
    { name: "International Ski Mountaineering Federation (ISMF)", founded: 1999, headquarters: "Fiera di Primiero, Italy", website: "https://ismf-ski.org" },
    { name: "US Ski Mountaineering Association", founded: 2007, headquarters: "USA" },
    { name: "Fédération Française des Clubs Alpins et de Montagne", founded: 1874, headquarters: "France" },
  ],
  majorCompetitions: [
    { name: "Winter Olympic Games (Ski Mountaineering)", frequency: "quadrennial", founded: 2026, region: "worldwide (Milano-Cortina 2026 debut)" },
    { name: "ISMF World Championships", frequency: "biennial", founded: 2002, region: "worldwide" },
    { name: "ISMF World Cup", frequency: "annual (6-8 rounds)", founded: 2001, region: "worldwide winter circuit" },
    { name: "Pierra Menta", frequency: "annual (March)", founded: 1985, region: "French Alps (4-day team race)" },
    { name: "Patrouille des Glaciers", frequency: "biennial (spring)", founded: 1943, region: "Swiss Alps (53 km)" },
    { name: "Trofeo Mezzalama", frequency: "biennial", founded: 1933, region: "Italian Alps (glacier race)" },
  ],
  countriesPlayed: ["IT", "FR", "CH", "ES", "AT", "US", "DE", "SI", "AD", "NO", "SE", "PL", "CZ", "SK"],
  famousAthletes: [
    "Killian Jornet (Spain — 2× World Champion + multi-time record holder; multi-discipline mountain athlete)",
    "Laetitia Roux (France — dominant women's competitor 2010s; multiple World titles)",
    "Federica Casini (Italy — modern World Cup champion + multi-time Italian national champion)",
    "William Bon Mardion (France — Pierra Menta multi-time winner)",
    "Michele Boscacci (Italy — long-time World Cup podium regular)",
    "Emelie Forsberg (Sweden — women's mountain sport star)",
    "Kilian Jornet Burgada (Spain — extreme mountain athlete + skimo elite)",
    "Robert Antonioli (Italy — World Championship medalist)",
    "Alba De Silvestro (Italy — women's World Championship medalist)",
    "Damiano Lenzi (Italy — Pierra Menta + World Cup winner)",
  ],
  records: [
    { title: "Olympic debut", holder: "Milano-Cortina 2026", value: "First Winter Olympics with Ski Mountaineering medals", year: 2026 },
    { title: "Patrouille des Glaciers longevity", holder: "Patrouille des Glaciers", value: "Contested since 1943; historic Swiss military race; 53 km", year: 2024 },
    { title: "First ISMF World Championships", holder: "ISMF", value: "First held 2002; biennial since", year: 2002 },
    { title: "Pierra Menta prestige", holder: "Pierra Menta", value: "4-day team stage race in French Alps; sport's premier team event since 1985", year: 2024 },
    { title: "Killian Jornet crossover records", holder: "Killian Jornet (ESP)", value: "Multiple mountain records (Everest, Denali FKTs) + skimo World Championship titles", year: 2020 },
  ],

  variants: ["ismf-sprint-race", "ismf-vertical-race", "ismf-individual-race", "ismf-team-relay", "ismf-mixed-relay", "pierra-menta-multi-day"],
  relatedSports: ["cross-country-skiing", "alpine-skiing", "ski-touring", "mountaineering", "trail-running"],

  skills: ["uphill skinning technique + efficiency", "downhill alpine skiing (high-speed off-piste)", "transition speed (skin on/off <30 sec)", "cardiovascular endurance", "mountain judgment + safety awareness", "route-finding + course navigation"],
  strategies: [
    { title: "Master transitions", body: "Elite skimo races won/lost at transitions. Practice skin on/off + boot lock in <30 seconds until automatic." },
    { title: "Pace management for long events", body: "Individual races 60-120 min; don't blow up in first climb; save energy for final descent + finish." },
    { title: "Downhill risk vs. reward", body: "Aggressive descents save time but risk crash. Balance based on course + conditions." },
    { title: "Equipment weight vs. safety", body: "Lighter equipment = faster; but must meet safety minimums (avalanche beacon + probe + shovel)." },
    { title: "Mixed relay team strategy", body: "Order athletes to maximize combined time; strongest closers on final leg." },
    { title: "Weather + snow adaptation", body: "Wax choice + skin type for varying conditions; wax experts on team." },
  ],

  terminology: [
    { term: "Skimo", meaning: "Common abbreviation for Ski Mountaineering." },
    { term: "Skinning", meaning: "Climbing on skis with removable climbing skins attached." },
    { term: "Skins", meaning: "Fabric strips attached to ski base for uphill grip; removed for downhill." },
    { term: "Transition", meaning: "Skin on/off + boot mode change between uphill + downhill sections." },
    { term: "ISMF", meaning: "International Ski Mountaineering Federation; world governing body." },
    { term: "Sprint", meaning: "Short 3-5 min race format; Olympic 2026 discipline." },
    { term: "Vertical", meaning: "Pure uphill race format; 500-1000m vertical gain." },
    { term: "Individual", meaning: "Long race format with multiple climbs/descents; 10-15 km + 1500-2000m vertical." },
    { term: "Pierra Menta", meaning: "Iconic French Alps 4-day team race; sport's premier event." },
    { term: "Patrouille des Glaciers", meaning: "53 km Swiss Alps race; military-origin 1943." },
    { term: "Tech binding", meaning: "Ultra-light ski binding designed for skimo; 300-500g." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Master intermediate alpine + cross-country skiing", body: "Skimo requires both disciplines; 3-5 years base skiing before attempting skinning." },
      { title: "Learn ski touring / backcountry skiing", body: "Skinning + off-piste descents = foundational skills. AIARE + BCA + AMGA courses recommended." },
      { title: "Attend Skimo intro clinics", body: "Ski Mountaineering intro programs in Alps + Rocky Mountains + Sierra Nevada." },
    ]},
    { level: "intermediate", steps: [
      { title: "Compete at regional + national championships", body: "Skimo racing series in Alps (COSMO, Pyrenees) + North American Continental Cup." },
      { title: "Buy race-grade equipment", body: "$3,000-6,000 for competitive skis + boots + bindings + skins package." },
      { title: "Cross-train endurance", body: "Trail running + XC skiing + cycling build aerobic base." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at ISMF World Cup + World Championships", body: "Top-tier international circuit; qualifying via national federation." },
      { title: "Target Olympic team (Milano-Cortina 2026)", body: "First Winter Olympics with Skimo; historic opportunity for skiers to become Olympians." },
      { title: "Multi-discipline mountain athlete", body: "Kilian Jornet model — Skimo + trail running + FKTs + climbing." },
    ]},
  ],

  faq: [
    { question: "Is Ski Mountaineering in the Olympics?", answer: "Yes — Winter Olympic debut at Milano-Cortina 2026. 4 events: Men's + Women's Sprint + Men's Individual + Mixed Relay. Historic milestone for the sport after 20+ years of ISMF advocacy. Considered gateway to broader Winter Olympic mountain sports representation." },
    { question: "How is Ski Mountaineering different from Alpine Skiing?", answer: "Alpine skiing: downhill only on prepared slopes with lifts. Ski Mountaineering: combines UPHILL skinning (climbing with climbing skins) + downhill skiing on natural mountain terrain. Athletes gain 1,000-2,000m of vertical per race; alpine skiers only descend. Skimo requires alpine ski technique + cross-country ski endurance + backcountry judgment." },
    { question: "Who is the greatest ski mountaineer?", answer: "Killian Jornet (Spain) — 2× World Champion + multi-discipline mountain athlete. Also holds Everest + Denali speed records. Others: Laetitia Roux (France) — dominant women's competitor 2010s. Modern era: Federica Casini (Italy) + Damiano Lenzi (Italy) + William Bon Mardion (France). Sport's biggest events: Pierra Menta + Patrouille des Glaciers + Trofeo Mezzalama in the Alps." },
    { question: "How dangerous is Ski Mountaineering?", answer: "Serious risks. Avalanche risk (mandatory beacon + probe + shovel + training); high-speed off-piste descents; extreme weather; altitude sickness (races at 2,000-3,500m). Injuries: ACL/MCL tears from descents; hypothermia risk; avalanche fatalities in training/backcountry. Race organizers strict on safety; recreational skimo without training = dangerous." },
    { question: "What's the difference between Skimo racing + ski touring?", answer: "Ski Touring: recreational backcountry skiing with climbing skins for uphill + downhill fun; no time pressure. Ski Mountaineering Racing (Skimo Race): competitive timed events with specialized ultra-light equipment + racing tactics. Same underlying skills (skinning + descending) but different equipment + intensity. Ski touring is much more accessible; skimo racing is elite sport." },
  ],

  wikipediaTitle: "Ski mountaineering",
  sources: [{ label: "International Ski Mountaineering Federation", url: "https://ismf-ski.org", publisher: "ISMF" }, { label: "Wikipedia — Ski mountaineering", url: "https://en.wikipedia.org/wiki/Ski_mountaineering", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

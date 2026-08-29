import type { Sport } from "@/lib/types";

export const ultramarathon: Sport = {
  id: "ultramarathon",
  slug: "ultramarathon",
  name: "Ultramarathon",
  officialName: "Ultramarathon (International Association of Ultrarunners - IAU)",
  aliases: ["Ultra", "Ultra-Distance Running", "Ultra Running"],
  shortDescription:
    "Extreme long-distance running events longer than a marathon (42.2 km) — spanning 50 km to 240+ km; contested at various formats: fixed-distance, time-based (24h, 48h, 6-day), multi-day stage races (Marathon des Sables, Barkley Marathons); IAU-sanctioned World Championships.",
  longDescription:
    "Ultramarathon (or Ultrarunning) is any running event longer than a marathon (42.2 km / 26.2 miles). Race distances range from 50 km to 240+ km + more. Multiple formats: (1) Fixed-distance events (50 km, 50 mile, 100 km, 100 mile, 240 mile Cocodona 250); (2) Time-based (24-hour, 48-hour, 6-day races — measure total distance covered); (3) Multi-day stage races (Marathon des Sables — 6-day Sahara stages; Barkley Marathons — 100+ mile Tennessee mountain nightmare); (4) Trail ultras vs. road ultras. IAU (International Association of Ultrarunners) sanctioned since 1984. Multiple World Championships: IAU 24-Hour World Championships + IAU 100 km World Championships + IAU Trail World Championships. Legendary athletes: Kilian Jornet (Spain — mountain ultra legend + multiple records), Yiannis Kouros (Greece — 6-day record 1,036 km), Camille Herron (US — 100-mile + 24-hour world records + 100+ ultras won), Courtney Dauwalter (US — Western States + Hardrock 100 + UTMB multi-time), Jim Walmsley (US — Western States record + world 100 km winner), Aleksandr Sorokin (Lithuania — 6-hour + 100 km records), Vasu Sojitra (US — one-legged trail ultrarunner).",

  category: "athletics",
  subCategory: "extreme long-distance running",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "major",
  countryOfOrigin: "GB",
  regionOfOrigin: "United Kingdom + international; 19th-century pedestrianism roots; IAU founded 1984",
  estimatedOrigin: "19th-century pedestrianism (long-distance walking races); modern ultramarathon post-1970s USA + Europe; IAU 1984",

  players: { min: 1, max: 100, note: "Individual sport; some events feature team standings. Field sizes: 50 (Barkley) to 15,000+ (Marathon des Sables invitation)." },
  field: {
    surfaceName: "Roads + trails + mountains + deserts",
    dimensions: "50 km to 240+ km; time-based events measure distance; multi-day stages 20-100 km per day",
    description: "Wide range of venues: paved roads (world championship 100 km), technical trails (Western States 100), high mountain (Hardrock 100 — 33,000 ft elevation gain), deserts (Marathon des Sables Sahara), 24-hour tracks (IAU World Championships), notorious extreme (Barkley Marathons Tennessee).",
  },
  equipment: [
    { name: "Trail or road running shoes", description: "Sport-specific shoes; trail models with lugs for grip; road models with cushioning for distance. Multiple pairs per event." },
    { name: "Hydration system", description: "Vest + soft flasks + hydration bladders; typically 1-2 liters carried. Water critical over 24+ hours." },
    { name: "Nutrition supplies", description: "Gels + bars + real food; 200-300 calories per hour typical for elite ultra." },
    { name: "Trekking poles (mountain ultras)", description: "Lightweight carbon poles; essential for steep ascents + descents." },
    { name: "Headlamp + backup lighting", description: "Multiple headlamps for night sections; battery backup." },
    { name: "Weather protection", description: "Rain jacket + wind + thermal layers for extreme conditions." },
    { name: "GPS watch + navigation", description: "Course tracking + navigation aid." },
    { name: "Emergency safety kit (mountain events)", description: "First aid + emergency blanket + shelter for wilderness events." },
  ],
  duration: {
    approximateMinutes: 720,
    structure: "50 km: 4-8 hours. 100 km: 10-14 hours. 100 miles: 24-40 hours. 240 mile Cocodona: 5-8 days. 6-day: continuous.",
  },
  objective: "Complete distance fastest (fixed-distance) or cover maximum distance (time-based).",
  matchStructure: "Fixed-distance: standard first-across-finish + course-record chase. Time-based: continuous running; total distance recorded. Multi-day stages: cumulative time.",

  basicRules: [
    { title: "Complete distance / time in fastest / farthest", body: "Fixed-distance: fastest wins. Time-based: farthest wins." },
    { title: "Support crew allowed (many events)", body: "Trail 100s + mountain ultras allow crew at aid stations; road 100 km typically self-supported." },
    { title: "Cut-off times", body: "Most ultras have overall + intermediate cut-off times; missing = DNF." },
    { title: "Marked course", body: "Course marked with flags + signage + reflective markers." },
    { title: "Mandatory equipment (safety-critical events)", body: "Mountain ultras + extreme events require specific gear; failure to carry = DQ." },
    { title: "Environmental respect", body: "Leave No Trace; littering = DQ + potential ban." },
  ],
  scoring: {
    summary: "First across finish (fixed-distance) or farthest distance covered (time-based).",
    winCondition: "Fastest time (fixed-distance) or farthest distance (time-based).",
    breakdown: [
      { action: "Fixed-distance 100 km winner", points: "Race gold + prize money" },
      { action: "Time-based 24-hour winner", points: "Total distance record + prize money" },
      { action: "Multi-day stage race winner", points: "Cumulative time victory" },
      { action: "World record", points: "Historic recognition + prize money" },
    ],
  },

  positions: [
    { name: "Runner", role: "Solo endurance athlete.", count: 1 },
    { name: "Pacer (100+ mile events)", role: "Runs with athlete late in race for company + pacing.", count: 1 },
    { name: "Crew (trail 100s)", role: "Aid station support + nutrition." },
  ],
  officiating: {
    officials: ["Race Director", "Course marshals (aid stations)", "Timekeepers", "Medical staff"],
    summary: "Aid station officials + medical + course marshals + timing; safety infrastructure critical for extreme distances.",
  },

  governingBodies: [
    { name: "International Association of Ultrarunners (IAU)", founded: 1984, headquarters: "worldwide", website: "https://iau-ultramarathon.org" },
    { name: "American Ultra Running Association (AURA)", founded: 1974, headquarters: "USA" },
    { name: "Ultra Trail World Tour (UTWT)", founded: 2013, headquarters: "France" },
  ],
  majorCompetitions: [
    { name: "IAU 24-Hour World Championships", frequency: "biennial", founded: 2001, region: "worldwide" },
    { name: "IAU 100 km World Championships", frequency: "biennial", founded: 1987, region: "worldwide" },
    { name: "IAU Trail World Championships", frequency: "biennial", founded: 2007, region: "worldwide" },
    { name: "UTMB (Ultra-Trail du Mont-Blanc)", frequency: "annual (August)", founded: 2003, region: "Chamonix, France" },
    { name: "Western States 100", frequency: "annual (June)", founded: 1974, region: "California, USA" },
    { name: "Hardrock 100", frequency: "annual (July)", founded: 1992, region: "Colorado, USA" },
    { name: "Marathon des Sables", frequency: "annual (April)", founded: 1986, region: "Sahara, Morocco (6-day stages)" },
    { name: "Barkley Marathons", frequency: "annual (April)", founded: 1986, region: "Tennessee, USA (notorious extreme)" },
    { name: "Cocodona 250", frequency: "annual (May)", founded: 2021, region: "Arizona, USA (240+ miles)" },
  ],
  countriesPlayed: ["US", "FR", "IT", "GB", "ES", "GR", "JP", "KR", "AU", "NZ", "LT", "DE", "CA", "PT", "SI"],
  famousAthletes: [
    "Kilian Jornet (Spain — mountain ultra legend + multiple records: Everest + Denali FKTs + UTMB winner)",
    "Yiannis Kouros (Greece — 6-day record 1,036 km; 24-hour + 48-hour records still stand)",
    "Camille Herron (US — 100-mile + 24-hour world records + 100+ ultras won)",
    "Courtney Dauwalter (US — Western States + Hardrock 100 + UTMB multi-time)",
    "Jim Walmsley (US — Western States record 14:09 + UTMB winner)",
    "Aleksandr Sorokin (Lithuania — 6-hour + 100 km + 24-hour records)",
    "Ellie Greenwood (Scotland — Western States multi-time)",
    "Zach Miller (US — UTMB podium + multiple 100-mile wins)",
    "Anton Krupicka (US — Leadville 100 multi-time)",
    "Scott Jurek (US — 7× Western States + Marathon des Sables + AT record)",
  ],
  records: [
    { title: "6-day world record", holder: "Yiannis Kouros (Greece)", value: "1,036 km (644 miles) in 6 days (1988); stands unbeaten", year: 1988 },
    { title: "24-hour world record (men)", holder: "Aleksandr Sorokin (Lithuania)", value: "319.6 km (198.6 miles) in 24 hours (2022)", year: 2022 },
    { title: "24-hour world record (women)", holder: "Camille Herron (US)", value: "270.5 km (168.1 miles) in 24 hours (2019)", year: 2019 },
    { title: "Western States 100 record (men)", holder: "Jim Walmsley (US)", value: "14 hours 9 minutes (2019); iconic California trail 100-miler", year: 2019 },
    { title: "UTMB winners multi-time", holder: "Kilian Jornet + Courtney Dauwalter", value: "Multiple wins each; sport's most prestigious mountain 100-mile", year: 2023 },
  ],

  variants: ["fixed-distance-50k-100k-100mile", "time-based-24h-48h-6day", "multi-day-stage-marathon-des-sables", "mountain-ultras-utmb-hardrock", "notorious-extreme-barkley-marathons"],
  relatedSports: ["marathon", "trail-running", "long-distance-running", "adventure-racing", "orienteering"],

  skills: ["extreme cardiovascular endurance", "pacing over 12+ hours", "nutrition + hydration management", "mental resilience (multi-hour suffering)", "sleep management (100+ mile + 24+ hour)", "terrain-specific technique (trail vs. road vs. mountain)"],

  terminology: [
    { term: "Ultramarathon", meaning: "Any running event longer than a marathon (42.2 km / 26.2 miles)." },
    { term: "Ultra", meaning: "Common abbreviation for ultramarathon." },
    { term: "50 km", meaning: "Common entry-level ultra distance." },
    { term: "100 mile", meaning: "Iconic distance; sport's benchmark achievement." },
    { term: "24-hour", meaning: "Time-based event; farthest distance covered wins." },
    { term: "6-day", meaning: "Time-based event; often on 400m track." },
    { term: "UTMB", meaning: "Ultra-Trail du Mont-Blanc; sport's most prestigious mountain 100-mile." },
    { term: "Barkley Marathons", meaning: "Notorious Tennessee extreme; very few finishers ever." },
    { term: "IAU", meaning: "International Association of Ultrarunners; world governing body." },
    { term: "Kilian Jornet", meaning: "Spanish mountain ultra legend." },
    { term: "Camille Herron", meaning: "US ultra runner; 100-mile + 24-hour world records + 100+ ultras won." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Build marathon base first", body: "Complete standard marathon (42.2 km) with training. Foundation before ultra." },
      { title: "First ultra: 50 km", body: "50 km is common entry-level ultra; complete without walking excessively." },
      { title: "Local trail ultras", body: "Regional 50 km + 50 mile events; build experience + confidence." },
    ]},
    { level: "intermediate", steps: [
      { title: "100 km road ultras", body: "IAU 100 km World Championships format; requires consistent training." },
      { title: "First 100-mile trail ultra", body: "Western States, Leadville, Hardrock qualify for higher-tier events." },
      { title: "24-hour track race", body: "Time-based event; measures total distance covered." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at IAU World Championships", body: "Top international events for 100 km + 24-hour + trail." },
      { title: "Target iconic events (UTMB, Marathon des Sables, Barkley)", body: "Career-defining achievements." },
      { title: "Multi-year training cycles", body: "Ultra-athletes peak at 30-40; long-term development critical." },
    ]},
  ],

  faq: [
    { question: "What is Ultramarathon?", answer: "Any running event longer than a marathon (42.2 km / 26.2 miles). Race distances range from 50 km to 240+ km. Multiple formats: (1) Fixed-distance (50 km, 50 mile, 100 km, 100 mile, 240+ mile); (2) Time-based (24-hour, 48-hour, 6-day races); (3) Multi-day stage races (Marathon des Sables, Cocodona 250); (4) Trail ultras vs. road ultras. IAU sanctioned since 1984." },
    { question: "What is the Western States 100?", answer: "The world's oldest 100-mile trail race. Held annually since 1974 in California (Sierra Nevada mountains). 100 miles / 100 miles from Squaw Valley Ski Resort to Auburn. Elevation gain 18,000 ft; loss 22,000 ft. Course record men: Jim Walmsley 14:09 (2019). Course record women: Courtney Dauwalter 15:29 (2023). Entry via lottery; entrance highly competitive. Sport's most prestigious American 100-mile." },
    { question: "What is Barkley Marathons?", answer: "Notorious extreme 100+ mile Tennessee event held annually (April) since 1986. Course changes annually; unmarked; navigation via map + compass; extreme elevation gain + descent; harsh terrain. Cutoff 60 hours. Only 15 finishers in event's history (through 2024). Considered impossible for most; documentary 'The Race that Eats Its Young' (2014) brought fame. Not IAU-sanctioned; unique format." },
    { question: "Who is the greatest ultrarunner?", answer: "Multiple candidates: (1) Kilian Jornet (Spain) — mountain ultra legend + multiple records: Everest + Denali FKTs + UTMB winner. (2) Yiannis Kouros (Greece) — 6-day record 1,036 km still stands from 1988. (3) Camille Herron (US) — 100-mile + 24-hour world records + 100+ ultras won. (4) Courtney Dauwalter (US) — Western States + Hardrock 100 + UTMB multi-time. Different distances + terrain produce different answers." },
    { question: "Is Ultramarathon in the Olympics?", answer: "No. Marathon is Olympic; ultramarathon distances beyond 42.2 km are not. IAU + national federations lobby for potential inclusion but IOC has not accepted. Ultramarathon remains its own community with strong global following + dedicated events." },
  ],

  wikipediaTitle: "Ultramarathon",
  sources: [{ label: "IAU", url: "https://iau-ultramarathon.org", publisher: "IAU" }, { label: "Wikipedia — Ultramarathon", url: "https://en.wikipedia.org/wiki/Ultramarathon", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

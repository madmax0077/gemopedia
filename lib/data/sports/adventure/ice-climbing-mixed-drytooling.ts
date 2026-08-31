import type { Sport } from "@/lib/types";

export const iceClimbingMixedDrytooling: Sport = {
  id: "ice-climbing-mixed-drytooling",
  slug: "ice-climbing-mixed-drytooling",
  name: "Ice Climbing + Mixed Drytooling",
  officialName: "UIAA Ice Climbing World Cup",
  aliases: ["Ice Climbing", "Mixed Climbing", "Drytooling", "Piolet Traction"],
  shortDescription:
    "Winter climbing discipline ascending frozen waterfalls + ice/rock mixed routes using ice axes + crampons; competitive scene since 1970s+; UIAA Ice Climbing World Cup annual with Lead + Speed disciplines; mixed drytooling uses ice tools on bare rock; UIAA WC dominated by Russia + South Korea + France.",
  longDescription:
    "Ice Climbing + Mixed Drytooling covers two related winter climbing disciplines: (1) Traditional Ice Climbing — ascending frozen waterfalls + glacial ice using ice axes + crampons + ice screws for protection; developed as offshoot of alpinism 1960s-70s; iconic natural venues include Ouray Ice Park (Colorado — largest artificial ice venue globally, hosts annual Ouray Ice Festival), Rjukan (Norway), Cogne (Italy), Kandersteg (Switzerland), Lillaz (Italy); (2) Mixed Drytooling — using ice tools + crampons to climb bare rock walls (typically overhanging) with strategic dry-rock + ice sections; enables year-round training + steepest possible climbing angles (5-45° overhang). Competitive discipline governed by UIAA (International Climbing + Mountaineering Federation, founded 1932). UIAA Ice Climbing World Cup began 1997; two disciplines: (a) Lead Ice (routes up to 20m on artificial ice + dry-tool walls, difficulty scored); (b) Speed Ice (12m route, fastest time). UIAA also organizes World Championships (biennial since 2000). Strongholds: Russia (dominant historically), South Korea (rising), France, Italy, Switzerland, Poland, Austria. Notable champions: Anna Galliamova (RUS — 6x Ice Climbing WC), Han Wenli (CHN), Angelika Rainer (ITA), Park Hee-yong (KOR), Marcin Dziemyszkiewicz (POL). Signature achievements: 2014 Sochi Winter Olympics included ice climbing as demonstration sport; sport actively campaigning for Olympic inclusion (2026 Milano-Cortina considered — not selected). Extreme dangers: falling ice (dinner-plate), avalanche, hypothermia, ice-anchor failure. Modern gear: Nomic/Cobra/Fusion tools (Petzl/Grivel/Black Diamond), aggressive M-rated crampons, dry-treated ropes.",
  category: "adventure-extreme-sports",
  subCategory: "winter climbing (ice + mixed drytooling)",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "winter", era: "20th-century", popularity: "regional",
  countryOfOrigin: "FR",
  regionOfOrigin: "France / Alps (Chamonix + Alpine tradition — offshoot of alpinism 1960s-70s)",
  estimatedOrigin: "Modern ice climbing offshoot of alpinism 1960s-70s Chamonix + Rocky Mountain; UIAA World Cup 1997",
  players: { min: 1, max: 1 },
  equipment: [{ name: "Ice axes (aggressive-curve leash-less picks)", description: "Petzl Nomic, Grivel X-Monster, Black Diamond Fusion — dedicated ice climbing tools." }, { name: "Crampons (mono-point or dual-point M-rated)", description: "Rigid or semi-rigid mountaineering crampons with M-rated (mixed) or ice-specific front points." }, { name: "Ice screws (for lead protection)", description: "Dynamic screws for protection on lead routes." }, { name: "Ice climbing harness + helmet", description: "Certified climbing harness + helmet (falling-ice hazard)." }, { name: "Winter climbing clothing + gloves + boots", description: "Full winter climbing layering + waterproof gloves + rigid mountaineering boots." }],
  duration: { approximateMinutes: 8, structure: "Lead route: 5-15 min; Speed route: 8-20 seconds; competition session ~2-4 hours." },
  objective: "Lead: complete route with fewest falls or highest reach point. Speed: fastest time on standard route.",
  matchStructure: "Qualifying rounds → semifinals → final; Speed uses parallel-lane elimination bracket.",
  basicRules: [
    { title: "Lead Ice: on-sight climb of 20m route", body: "Climber attempts to complete route without falls; scored by highest reach point + falls." },
    { title: "Speed Ice: fastest time on standard 12m route", body: "Auto-belay parallel-lane elimination format; times to 0.01s." },
    { title: "Mixed drytooling: tools on bare rock allowed", body: "Modern mixed events allow ice tools on rock sections between ice sections — enables overhanging routes." },
    { title: "Falls with protection = OK (safety); on-sight = strict", body: "Lead falls arrested by belayer + protection; on-sight requirement = no beta shared." },
  ],
  scoring: { summary: "Lead: reach + falls scoring. Speed: fastest time to 0.01s.", winCondition: "Lead: highest reach point. Speed: fastest time." },
  positions: [{ name: "Ice climber (competitor)", role: "Sole competitor.", count: 1 }, { name: "Belayer + route-setter (staff)", role: "Support crew for safety + route.", count: 2 }],
  officiating: { officials: ["Chief Judge", "Route Judges", "Timekeeper", "Chief Route Setter"], summary: "UIAA certified officials." },
  governingBodies: [{ name: "UIAA (International Climbing + Mountaineering Federation)", founded: 1932, headquarters: "Bern, Switzerland" }],
  majorCompetitions: [{ name: "UIAA Ice Climbing World Cup", frequency: "annual (5-8 events per season)", founded: 1997, region: "rotating (South Korea Cheongsong, Russia Kirov, France Champagny, Switzerland Saas-Fee)" }, { name: "UIAA Ice Climbing World Championships", frequency: "biennial", founded: 2000, region: "rotating" }, { name: "Ouray Ice Festival Elite Mixed Competition", frequency: "annual (January)", founded: 1996, region: "Ouray, Colorado, USA" }],
  countriesPlayed: ["RUS (historical dominant)", "KOR (rising)", "FRA", "ITA", "CHE", "POL", "AUT", "USA", "CAN", "CHN"],
  famousAthletes: ["Anna Galliamova (RUS — 6x Ice Climbing WC)", "Angelika Rainer (ITA — 3x WC Lead)", "Han Wenli (CHN)", "Park Hee-yong (KOR — Speed dominant)", "Marcin Dziemyszkiewicz (POL)"],
  records: [
    { title: "UIAA World Cup since 1997", holder: "UIAA", value: "First UIAA Ice Climbing World Cup held 1997 — annual since with growing global circuit", year: 1997 },
    { title: "2014 Sochi Olympics demonstration sport", holder: "UIAA / IOC", value: "Ice Climbing demonstrated at 2014 Sochi Winter Olympics as demonstration sport — active campaign for full Olympic inclusion", year: 2014 },
    { title: "Ouray Ice Park largest artificial ice venue", holder: "Ouray Ice Festival", value: "Ouray Ice Park (Colorado) — largest artificial ice climbing venue in the world; hosts annual Ouray Ice Festival + Elite Mixed Competition", year: 2024 },
  ],
  variants: ["lead-ice-competition-scored-on-reach", "speed-ice-parallel-elimination-12m-standard-route", "mixed-drytooling-tool-on-rock", "traditional-natural-ice-climbing-frozen-waterfalls", "alpine-ice-climbing-glacier-terrain"],
  relatedSports: ["rock-climbing-lead", "sport-climbing-olympic", "alpinism", "mountaineering"],
  skills: ["ice-tool placement technique (thin ice reads)", "crampon-precision on rock (drytooling)", "overhang endurance (mixed routes)", "cold-management + gear-manipulation with gloves"],
  wikipediaTitle: "Ice climbing",
  sources: [{ label: "Wikipedia — Ice climbing", url: "https://en.wikipedia.org/wiki/Ice_climbing", publisher: "Wikipedia" }, { label: "UIAA Ice Climbing official", url: "https://www.theuiaa.org/ice-climbing", publisher: "UIAA" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default iceClimbingMixedDrytooling;

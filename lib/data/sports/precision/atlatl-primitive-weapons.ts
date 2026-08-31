import type { Sport } from "@/lib/types";

export const atlatlPrimitiveWeapons: Sport = {
  id: "atlatl-primitive-weapons",
  slug: "atlatl-primitive-weapons",
  name: "Atlatl (Spear-Thrower Competition)",
  officialName: "World Atlatl Association (WAA)",
  aliases: ["Spear Thrower", "Woomera (Aboriginal)", "Estólica"],
  shortDescription:
    "Precision throwing sport revived from ancient hunting weapon (30,000+ years old) — competitor uses atlatl (lever/spear-thrower) to hurl dart 2m long at target from 15-30m distance; International Standard Accuracy Contest (ISAC) governed by World Atlatl Association; strongholds USA, Australia (Woomera), Mexico (Estólica); World Atlatl Championships since 1984.",
  longDescription:
    "Atlatl (Nahuatl: 'spear-thrower', pronounced 'AH-tuh-lah-tuhl') is a competitive precision throwing sport revived from one of humanity's oldest hunting weapons. The atlatl is a wooden or bone lever/spear-thrower ~40-70cm long with a hook at rear that engages notched end of a long dart (~1.8-2.2m); throwing motion extends effective arm length providing mechanical leverage that dramatically increases dart velocity + range compared to hand-throwing. Archaeological evidence traces atlatls back 30,000+ years — used by prehistoric hunters across Africa, Europe, Asia, Australia (called 'woomera'), Americas (Nahuatl 'atlatl' from Mesoamerica). Modern revival scene began 1970s USA + Australia among archaeological + primitive-weapons enthusiasts; formalized as competitive sport 1980s. Modern competition governed by World Atlatl Association (WAA, founded 1988 USA). Standard competition = ISAC (International Standard Accuracy Contest): 10 darts thrown at target 15m for adults (10m for youth) at deer-silhouette target with concentric scoring zones (10-9-8-7-6-5-4-3-2-1); maximum score 100 per round; competition typically 3-6 rounds. Additional events: (a) Long Distance — throw for maximum distance (world record ~260m by David Engvall 1995); (b) Trap Shoot — throw at moving targets; (c) Small Game accuracy (rabbit-sized targets 20m); (d) Big Game accuracy (deer targets 30m); (e) Fishing (spearing fish with barbed dart); (f) Team relay. World Atlatl Championships annual since 1984 (typically Missouri Ozarks USA). Strongholds: USA (dominant scene ~2,000 competitors), Australia (Woomera tradition + modern scene), Mexico (Estólica traditional + revival), France (Val de Loire chapter), Germany, UK, Canada. Notable: (1) Bob Perkins (WAA founding member); (2) John Whittaker (Grinnell College archaeologist + WAA legend); (3) Ilan Peled (Israel — dominant 2010s champion); (4) David Engvall (long distance world record 260.8m 1995). Educational programs teach atlatl in schools/museums as hands-on prehistoric archaeology; increasingly popular in scouting + summer camps. Also legal for hunting in ~40 US states + numerous foreign countries — resurgence as ethical primitive-weapons hunting alternative.",
  category: "precision-sports",
  subCategory: "primitive weapons throwing sport with lever-assisted spear",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "ancient", popularity: "niche",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (modern revival 1970s-80s; ancient origins across multiple continents 30,000+ years)",
  estimatedOrigin: "Ancient hunting weapon 30,000+ years across multiple continents; modern competitive sport revival 1970s-80s USA + Australia; World Atlatl Association founded 1988; first World Championships 1984",
  players: { min: 1, max: 4, note: "Individual sport; team relay events; family + group competitions common." },
  equipment: [{ name: "Atlatl (spear-thrower)", description: "Wooden or bone lever ~40-70cm long with hook at rear; extends effective arm length for mechanical advantage; often carved with decorative elements." }, { name: "Darts (~1.8-2.2m long)", description: "Long flexible darts with fletching (feathers) + stone/bone/steel point + notched rear for atlatl hook engagement; typically hand-crafted." }, { name: "ISAC target (deer silhouette with 10 concentric zones)", description: "Standardized ISAC target: life-size deer silhouette with 10-9-8-...-1 concentric scoring zones; maximum 10 per throw." }, { name: "Bannerstone / weight (optional traditional)", description: "Traditional stone or bone weight attached to atlatl midpoint; theoretical velocity/accuracy benefit; commonly used decorative + functional." }],
  duration: { approximateMinutes: 60, structure: "Single ISAC round 15-30 min (10 throws); full competition 3-6 rounds 2-4 hours; long-distance events 30-90 min." },
  objective: "Score highest possible total across ISAC rounds (10 throws per round, max 100 per round); alternate objectives = maximum distance or moving-target hits.",
  matchStructure: "ISAC: 10 throws per round at 15m adult target; 3-6 rounds per competition. Long distance: 3 throws maximum for record. Team events: rotating team throws.",
  basicRules: [
    { title: "ISAC standard: 10 throws at 15m target (adults)", body: "International Standard Accuracy Contest: 10 darts thrown at deer-silhouette target from 15m adults (10m youth); max 100 per round." },
    { title: "10 concentric scoring zones (10 innermost, 1 outermost)", body: "Target divided into 10 concentric zones scoring 10-9-8-7-6-5-4-3-2-1 from center to edge; hits outside target zone = 0." },
    { title: "Atlatl motion must use lever mechanic (no hand-throw)", body: "Legal throw requires atlatl to make lever motion propelling dart; hand-throwing directly = disqualification." },
    { title: "Dart must be intact (fletched + pointed)", body: "Dart must include full fletching (feathers) + point + straight shaft; broken darts disqualified." },
    { title: "Bannerstone/weight optional but must be attached", body: "Traditional stone/bone weights allowed on atlatl body; must be firmly attached; adds mechanical variability." },
  ],
  scoring: { summary: "ISAC: sum of 10 concentric zone hits per round (max 100); multi-round events sum all rounds. Long distance: farthest legal throw in meters.", winCondition: "ISAC: highest total across specified rounds. Long distance: farthest measured throw." },
  positions: [{ name: "Atlatlist (thrower)", role: "Sole competitor.", count: 1 }, { name: "Range Officer (safety supervisor)", role: "Manages range safety + scoring; official position at competitions.", count: 1 }],
  officiating: { officials: ["Chief Referee", "Range Officers (safety)", "Scorers (target inspection)", "Distance Measurers (long-distance events)"], summary: "WAA certified officials at World Championships + national tournaments." },
  governingBodies: [{ name: "World Atlatl Association (WAA)", founded: 1988, headquarters: "Missouri, USA" }, { name: "European Atlatl Federation (EAF)", founded: 1995, headquarters: "France" }, { name: "Australian Atlatl Association", founded: 1990, headquarters: "Australia" }],
  majorCompetitions: [{ name: "World Atlatl Championships", frequency: "annual", founded: 1984, region: "Missouri Ozarks, USA (typically)" }, { name: "European Atlatl Championships", frequency: "biennial", founded: 1996, region: "Rotating Europe" }, { name: "Australian Woomera Championships", frequency: "annual", founded: 1985, region: "Australia" }, { name: "Mexican Estólica Championships", frequency: "annual", founded: 2000, region: "Mexico" }],
  countriesPlayed: ["USA (dominant modern scene)", "AUS (Woomera tradition)", "MEX (Estólica revival)", "FRA", "DEU", "GBR", "CAN", "ISR", "JPN"],
  famousAthletes: ["Bob Perkins (WAA founding member)", "John Whittaker (Grinnell College archaeologist + WAA legend)", "Ilan Peled (Israel — dominant 2010s champion)", "David Engvall (long distance world record 260.8m 1995)", "Justin Garnett (multi-time USA National Champion)"],
  records: [
    { title: "David Engvall 260.8m long distance world record (1995)", holder: "David Engvall (USA)", value: "David Engvall (USA) set atlatl long distance world record 260.8m (855 ft) in 1995 — record standing 30+ years", year: 1995 },
    { title: "First World Atlatl Championships 1984", holder: "World Atlatl Association", value: "First World Atlatl Championships held 1984 in Missouri Ozarks USA — established modern competitive sport", year: 1984 },
    { title: "30,000+ year old hunting weapon revival", holder: "Modern atlatl community", value: "Atlatl archaeological evidence dates back 30,000+ years across Africa, Europe, Asia, Australia, Americas — modern sport is deliberate revival of prehistoric weapon", year: 2024 },
  ],
  variants: ["isac-standard-accuracy-competition", "long-distance-max-throw-competition", "trap-shoot-moving-target", "small-game-rabbit-target-20m", "big-game-deer-target-30m", "fishing-with-barbed-dart", "woomera-australian-aboriginal-variant", "estolica-mexican-traditional-variant"],
  relatedSports: ["archery-target", "javelin-throw-athletics", "knife-throwing-competitive", "axe-throwing-waltl"],
  skills: ["atlatl release timing (dart engagement)", "arm arc + hip rotation coordination", "wind judgment (dart affected by wind)", "target zone consistency"],
  wikipediaTitle: "Spear-thrower",
  sources: [{ label: "Wikipedia — Spear-thrower", url: "https://en.wikipedia.org/wiki/Spear-thrower", publisher: "Wikipedia" }, { label: "World Atlatl Association", url: "https://worldatlatl.org", publisher: "WAA" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default atlatlPrimitiveWeapons;

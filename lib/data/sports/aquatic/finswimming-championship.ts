import type { Sport } from "@/lib/types";

export const finswimmingChampionship: Sport = {
  id: "finswimming-championship",
  slug: "finswimming-championship",
  name: "Finswimming Championship",
  officialName: "CMAS Finswimming World Championships",
  aliases: ["Fin Swimming", "Monofin Swimming", "Nage avec Palmes"],
  shortDescription:
    "Underwater + surface swimming with fins (monofin or bi-fins) governed by CMAS since 1971; disciplines include Surface Swimming (50m-1500m), Apnoea, Immersion (with tank), Bi-Fins; regular CMAS World Championships since 1976.",
  longDescription:
    "Finswimming is a competitive swimming sport where athletes swim using fins — either a single dolphin-style monofin (large single hydrodynamic blade) or bi-fins (two separate fins similar to snorkeling). Governed globally by CMAS (Confédération Mondiale des Activités Subaquatiques) since 1971 with regular World Championships since 1976. Four main disciplines: (1) Surface Swimming (SF) — 50m/100m/200m/400m/800m/1500m surface with monofin + snorkel — fastest human aquatic sport (world record 50m ~14.05s vs. freestyle 20.91s); (2) Apnoea Finswimming (AP) — 50m underwater on single breath with monofin; (3) Immersion Finswimming (IM) — 100m/400m/800m underwater with monofin + compressed air scuba tank; (4) Bi-Fins (BF) — 50m/100m/200m/400m/800m with two separate fins. Also relay events (4×50m, 4×100m, 4×200m). Also open-water finswimming (marathon distances 3km-25km). Strongholds: Russia (dominant, world championship leader), China, Ukraine, Italy, France, Hungary, Colombia, Egypt. Sport was demonstration event at multiple World Games (1981, 2005) + is regular event at CISM Military Games + Universiade. World records: 50 m SF women 15.19s (Ekaterina Mikhaylushkina, RUS 2018), 50m SF men 14.05s (Pavel Kabanov, RUS 2018). Not currently Olympic but repeatedly proposed.",
  category: "aquatic-sports",
  subCategory: "swimming with fins (CMAS discipline)",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "IT",
  regionOfOrigin: "Italy / France (CMAS founded 1959 Rome; Finswimming Committee 1971)",
  estimatedOrigin: "Finswimming committee formed within CMAS 1971; World Championships since 1976",
  players: { min: 1, max: 4, note: "Individual + relay events (4-person)." },
  equipment: [{ name: "Monofin (dolphin-style single blade)", description: "Large single-blade fin ~65-70cm long; carbon or fiberglass composite; ~1-2 kg." }, { name: "Bi-fins (paired swim fins)", description: "Two separate swim fins; used in Bi-Fins discipline." }, { name: "Snorkel (front-mount)", description: "For surface swimming; front-mounted rigid snorkel." }, { name: "Compressed air scuba tank + regulator", description: "For Immersion Finswimming discipline; single tank." }, { name: "Body suit + swim cap + goggles", description: "Standard swim gear." }],
  duration: { approximateMinutes: 5, structure: "Individual events 14s-16 min depending on distance; Marathon 3km-25km ~30 min-3+ hrs." },
  objective: "Fastest time over specified distance in chosen discipline.",
  matchStructure: "Heats + semifinals + finals (like standard swimming); World Championship 5-day format.",
  basicRules: [
    { title: "Discipline-specific fin type", body: "Monofin for SF/AP/IM; bi-fins for BF discipline only." },
    { title: "Surface Swimming must remain on surface", body: "SF: face + monofin surface — no diving; snorkel required." },
    { title: "Apnoea: single breath underwater", body: "AP: 50m entirely underwater on single breath; no scuba." },
    { title: "Immersion: scuba tank used underwater", body: "IM: entire race underwater with compressed air scuba." },
  ],
  scoring: { summary: "Time-based to 0.01s (or 0.001s for tie-break); ranking = fastest.", winCondition: "Fastest time in discipline + distance." },
  positions: [{ name: "Finswimmer", role: "Sole competitor per lane.", count: 1 }],
  officiating: { officials: ["Chief Referee", "Starter", "Lane Judges", "Turn Judges (immersion)", "Timekeepers"], summary: "CMAS certified officials + electronic timing." },
  governingBodies: [{ name: "CMAS Finswimming Committee", founded: 1971, headquarters: "Rome, Italy" }, { name: "CMAS (parent body)", founded: 1959, headquarters: "Rome, Italy" }],
  majorCompetitions: [{ name: "CMAS World Finswimming Championships", frequency: "biennial", founded: 1976, region: "rotating global" }, { name: "CMAS European Finswimming Championships", frequency: "biennial", founded: 1967, region: "Europe (rotating)" }, { name: "World Games — Finswimming (demonstration)", frequency: "quadrennial", founded: 1981, region: "rotating" }],
  countriesPlayed: ["RUS (dominant)", "CHN", "UKR", "ITA", "FRA", "HUN", "COL", "EGY", "GER", "USA"],
  famousAthletes: ["Pavel Kabanov (RUS — 50m SF WR 14.05s)", "Ekaterina Mikhaylushkina (RUS — women's 50m SF WR 15.19s)", "Petar Stoychev (BUL — open water finswimming)"],
  records: [
    { title: "Pavel Kabanov 50m SF WR 14.05s", holder: "Pavel Kabanov (RUS)", value: "50m Surface Swimming World Record 14.05 seconds (2018) — fastest human aquatic sport", year: 2018 },
    { title: "Ekaterina Mikhaylushkina women's 50m SF WR 15.19s", holder: "Ekaterina Mikhaylushkina (RUS)", value: "Women's 50m Surface Swimming World Record 15.19s (2018)", year: 2018 },
    { title: "First World Championship 1976", holder: "CMAS", value: "First CMAS World Finswimming Championship held 1976 in Hanover, West Germany", year: 1976 },
  ],
  variants: ["surface-swimming-sf", "apnoea-ap", "immersion-scuba-im", "bi-fins-bf", "open-water-finswimming"],
  relatedSports: ["freediving-no-limits", "underwater-hockey", "scuba-diving", "swimming"],
  skills: ["monofin dolphin-kick technique", "streamline body position", "breath-hold (AP)", "start + turn technique"],
  wikipediaTitle: "Finswimming",
  sources: [{ label: "Wikipedia — Finswimming", url: "https://en.wikipedia.org/wiki/Finswimming", publisher: "Wikipedia" }, { label: "CMAS official", url: "https://www.cmas.org", publisher: "CMAS" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default finswimmingChampionship;

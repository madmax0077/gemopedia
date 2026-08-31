import type { Sport } from "@/lib/types";

export const lethweiBurmeseBareknuckle: Sport = {
  id: "lethwei-burmese-bareknuckle",
  slug: "lethwei-burmese-bareknuckle",
  name: "Lethwei (Burmese Bareknuckle Boxing)",
  officialName: "Myanmar Traditional Boxing Federation (MTBF) / World Lethwei Championship (WLC)",
  aliases: ["Burmese Boxing", "Myanmar Lethwei", "9-Limb Combat", "လက်ဝှေ့"],
  shortDescription:
    "Ancient Burmese martial art + national combat sport of Myanmar (~2000+ years old) — full-contact bareknuckle striking with 9 weapons (2 fists + 2 elbows + 2 knees + 2 shins + head-butts); considered most brutal striking sport globally; traditional rules allow only KO wins; modern WLC (2016+) growing global scene.",
  longDescription:
    "Lethwei (Burmese: လက်ဝှေ့, 'boxing') is the traditional Burmese martial art + national combat sport of Myanmar — considered one of the most brutal + dangerous striking combat sports in the world. Historical origins ~2000+ years old, with royal-era patronage during the Pyu, Bagan, and Mrauk-U kingdoms; systematized during Konbaung Dynasty (1752-1885); considered ancestor to modern Muay Thai + Muay Boran (via Southeast Asian trade routes). Signature: 'the art of 9 limbs' — combines Muay Thai's '8 limbs' (2 fists, 2 elbows, 2 knees, 2 shins) with the 9th weapon: HEAD-BUTTS — making Lethwei the only major regulated striking combat sport that allows head-butts. Fought completely BAREKNUCKLE (traditional; some modern events add minimal gauze wraps or MMA-style padding) — competitors fight without gloves, on canvas or dirt floor traditional venues. Traditional rules: only way to win is by KNOCKOUT — decisions/points do NOT exist; if both fighters standing at end of 5-round fight, it's declared a draw. Modern WLC + international rules added judges' decisions + weight classes + shorter rounds for TV. Modern era: World Lethwei Championship (WLC, founded 2016 in Yangon, Myanmar) is premier promotion — features international champions like Dave Leduc (Canada — 3x WLC Openweight World Champion), Cyrus Washington (USA), Antonio Faria (Portugal), Too Too (Myanmar — legendary local hero). Traditional venues: Mandalay + Yangon regional stadiums; annual events at Kachin State + Thingyan Festival. Considered the world's most extreme regulated striking sport — head-butts + bareknuckle combination.",
  category: "combat-sports",
  subCategory: "Burmese bareknuckle striking with head-butts",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "MM",
  regionOfOrigin: "Myanmar (Pyu + Bagan + Mrauk-U + Konbaung era ~2000 years)",
  estimatedOrigin: "Ancient Burmese ~2000+ years; systematized Konbaung 1752-1885; modern WLC 2016+",
  players: { min: 1, max: 2 },
  equipment: [{ name: "Traditional gauze hand wraps (bareknuckle standard) OR modern MMA gloves (WLC)", description: "Traditional: gauze only; Modern WLC: small MMA 4oz gloves." }, { name: "Mouthguard + groin protector", description: "Basic safety." }, { name: "Traditional canvas/dirt fighting arena", description: "Traditional: canvas or dirt-floor ring; Modern: standard boxing/MMA ring." }, { name: "Traditional Longyi shorts", description: "Traditional Burmese wrap-shorts for cultural fights." }],
  duration: { approximateMinutes: 20, structure: "Traditional: 5 rounds × 3 min (KO only, no decisions); Modern WLC: 5 rounds × 3 min with judges' decisions." },
  objective: "Traditional: knock out opponent (only win condition). Modern WLC: KO, TKO, or judges' decision.",
  matchStructure: "5 rounds; traditional format = KO or draw; modern format = KO/TKO/decision.",
  basicRules: [
    { title: "9 weapons: 2 fists + 2 elbows + 2 knees + 2 shins + HEAD", body: "Head-butts legal + widely used — unique among regulated striking sports." },
    { title: "Bareknuckle (traditional)", body: "Traditional Lethwei fought bareknuckle with gauze wraps only; Modern WLC adds 4oz MMA gloves." },
    { title: "Traditional: KO only wins", body: "Traditional rules: draw if both fighters standing at end; no points/decision system." },
    { title: "Modern WLC: judges + weight classes", body: "WLC added weight classes + judges' decisions + shorter format for TV/international audiences." },
  ],
  scoring: { summary: "Traditional: binary KO/draw. Modern WLC: KO/TKO or 5-judge panel decision.", winCondition: "KO / TKO / (modern) decision / (traditional) opponent unable to continue." },
  positions: [{ name: "Lethwei fighter", role: "Sole competitor.", count: 1 }, { name: "Coach + cornerman", role: "Between-rounds support.", count: 2 }],
  officiating: { officials: ["Referee (mat)", "3-5 Judges (WLC modern)", "Timekeeper", "Chief Referee"], summary: "MTBF or WLC certified officials." },
  governingBodies: [{ name: "Myanmar Traditional Boxing Federation (MTBF)", founded: 1946, headquarters: "Yangon, Myanmar" }, { name: "World Lethwei Championship (WLC)", founded: 2016, headquarters: "Yangon, Myanmar" }],
  majorCompetitions: [{ name: "World Lethwei Championship (WLC)", frequency: "quarterly promotions", founded: 2016, region: "Myanmar + international (broadcast globally)" }, { name: "Kachin State Traditional Lethwei Festival", frequency: "annual", founded: 1948, region: "Kachin State, Myanmar" }, { name: "Thingyan Festival Lethwei Tournament", frequency: "annual (April)", founded: 1900, region: "Myanmar (nationwide)" }],
  countriesPlayed: ["MMR (dominant)", "CAN (Dave Leduc)", "USA", "PRT", "BRA", "AUS", "GBR", "THA", "growing globally"],
  famousAthletes: ["Dave Leduc (CAN — 3x WLC Openweight World Champion 2016-2019; helped popularize globally)", "Cyrus Washington (USA — WLC contender)", "Too Too (MMR — legendary local hero)", "Antonio Faria (PRT)", "Tway Ma Shaung (MMR — legendary female Lethwei fighter)"],
  records: [
    { title: "Only regulated striking sport allowing head-butts", holder: "Lethwei tradition", value: "Lethwei is the only major regulated professional striking combat sport in the world that legally allows head-butts — unique '9-limb' distinction", year: 2024 },
    { title: "WLC founded 2016 with global TV distribution", holder: "World Lethwei Championship", value: "WLC founded 2016 in Yangon; secured global TV + streaming distribution (Canal+ Europe, ONE Sports Asia, UFC Fight Pass USA)", year: 2016 },
    { title: "Dave Leduc 3x WLC Openweight World Champion", holder: "Dave Leduc (CAN)", value: "Canadian Dave Leduc became 3-time WLC Openweight World Champion (2016-2019) — first non-Burmese Lethwei openweight world champion; instrumental in globalization", year: 2019 },
    { title: "2000+ year Burmese cultural tradition", holder: "Myanmar tradition", value: "Lethwei traces to Pyu + Bagan + Konbaung Burmese eras ~2000+ years — one of oldest continuously-practiced striking martial arts", year: 24 },
  ],
  variants: ["traditional-lethwei-bareknuckle-ko-only", "modern-wlc-mma-gloves-with-decisions", "amateur-lethwei-headgear-protective"],
  relatedSports: ["muay-thai", "muay-boran", "bareknuckle-boxing", "kickboxing", "kudo"],
  skills: ["head-butt technique (unique — clinch + standing)", "bareknuckle striking (hand toughness)", "9-limb combination generation", "extreme durability + KO-power emphasis"],
  wikipediaTitle: "Lethwei",
  sources: [{ label: "Wikipedia — Lethwei", url: "https://en.wikipedia.org/wiki/Lethwei", publisher: "Wikipedia" }, { label: "World Lethwei Championship", url: "https://wlc.tv", publisher: "WLC" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default lethweiBurmeseBareknuckle;

import type { Sport } from "@/lib/types";

export const tentPeggingCavalry: Sport = {
  id: "tent-pegging-cavalry",
  slug: "tent-pegging-cavalry",
  name: "Tent Pegging (Cavalry Sport)",
  officialName: "International Tent Pegging Federation (ITPF)",
  aliases: ["Tent Pegging", "Neza Bazi", "Ring Sports (Cavalry)"],
  shortDescription:
    "Ancient cavalry sport — mounted rider gallops at a small wooden peg (~15cm) driven into ground + strikes/lifts it with sword or lance while at gallop; roots ~4th century BCE Alexander's cavalry; modern FEI-recognized international sport with 20+ competing nations; Indian + Pakistani armies + South African military dominant.",
  longDescription:
    "Tent Pegging is an ancient cavalry sport with roots dating to at least the 4th century BCE — reportedly used by Alexander the Great's cavalry to train riders in aerial-target striking. Historically practiced by military cavalries + royal Indian, Persian, Ottoman, and Arab horse cultures. Modern sport: mounted rider gallops at full speed toward a small target — traditionally a wooden peg (~15cm × 5cm) driven into the ground OR a suspended ring — and strikes/lifts/retrieves it using a cavalry sword (~1.2m saber) or lance (~2.5m). Signature technique: rider must maintain gallop through the peg strike + carry it as continuing evidence of successful hit. Multiple disciplines: (1) Individual Peg — single rider strikes single peg; (2) Team Peg — 3-4 riders in sequence; (3) Section Peg — 4 riders line-abreast; (4) Ring — suspended ring speared by lance; (5) Lemon/Fruit — small fruit target; (6) Indian File — 3 pegs in sequence struck by 3 riders. Modern FEI recognized as international sport 1993. International Tent Pegging Federation (ITPF, founded 1997, HQ Amman Jordan). Strongholds: India (dominant — Rashtriya Kavaha Championships), Pakistan (huge military tradition), South Africa (SANDF), Oman, Sudan, UAE, Egypt, Australia (RAAF horse tradition), UK (Household Cavalry). World Tent Pegging Championships biennial since 2000. Recognized by FEI (Fédération Équestre Internationale) but currently sits outside Olympic + WEG format. Cultural + military tradition preserved by Indian Army (President's Bodyguard regiment, established 1773) + Pakistani Army horse cavalry.",
  category: "equestrian-sports",
  subCategory: "cavalry aerial-target sport",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "IN",
  regionOfOrigin: "Central/South Asia (Alexander's cavalry 4th c BCE); Indian + Persian + Arab traditions",
  estimatedOrigin: "Ancient cavalry origins ~4th century BCE; modern FEI recognition 1993; ITPF founded 1997",
  players: { min: 1, max: 4, note: "Individual + team (3-4 riders per team)." },
  equipment: [{ name: "Cavalry sword (~1.2m saber) OR Lance (~2.5m)", description: "Traditional cavalry weapons; blunted for sport-safety." }, { name: "Trained cavalry horse (Anglo-Arab, Marwari, Thoroughbred)", description: "Purpose-trained for gallop-stability + not spooking at strike-motion." }, { name: "Wooden target peg (~15cm × 5cm)", description: "Standard peg driven into ground at 90° to run-track." }, { name: "Suspended ring (~10cm) OR fruit/lemon", description: "Alternative aerial targets for lance discipline." }, { name: "Traditional cavalry attire", description: "Military-style tunic + breeches + boots; Indian + Pakistani events use turban + traditional dress." }],
  duration: { approximateMinutes: 1, structure: "Single run ~15-20 seconds at gallop; competition = multiple runs over hours." },
  objective: "Strike + carry peg/ring successfully while at gallop.",
  matchStructure: "Multi-run event; scored on hits + carries; individual + team standings.",
  basicRules: [
    { title: "Must strike at gallop", body: "Rider must maintain full-speed gallop; strike must occur while moving." },
    { title: "Peg must be lifted + carried", body: "Successful strike = peg lifted from ground + carried by rider for minimum 5m; dropped peg = no score." },
    { title: "Individual + team formats", body: "Individual single-rider or Team 3-4 rider sequenced." },
    { title: "FEI safety rules apply", body: "Blunted swords + lances; helmet + protective gear mandatory in FEI events." },
  ],
  scoring: {
    summary: "Points per hit + carry: full hit + carry = 6 pts; hit but not lifted = 4 pts; touch = 2 pts; miss = 0.",
    winCondition: "Highest total across event runs.",
    breakdown: [{ action: "Full hit + carry (5m+)", points: "+6" }, { action: "Hit but not lifted", points: "+4" }, { action: "Touch (no strike)", points: "+2" }, { action: "Miss", points: "0" }],
  },
  positions: [{ name: "Tent pegger (rider)", role: "Sole competitor per run.", count: 1 }, { name: "Team riders (3-4)", role: "Sequential team run.", count: 4 }],
  officiating: { officials: ["Chief Judge", "Peg Judges", "Timekeeper", "Course Marshal"], summary: "ITPF certified officials." },
  governingBodies: [{ name: "International Tent Pegging Federation (ITPF)", founded: 1997, headquarters: "Amman, Jordan" }, { name: "Fédération Équestre Internationale (FEI — recognizing federation)", founded: 1921, headquarters: "Lausanne, Switzerland" }, { name: "Equestrian Federation of India (national)", founded: 1967, headquarters: "New Delhi, India" }],
  majorCompetitions: [{ name: "World Tent Pegging Championship (ITPF)", frequency: "biennial", founded: 2000, region: "rotating (Oman, India, South Africa, Jordan)" }, { name: "Asian Tent Pegging Championship", frequency: "biennial", founded: 2005, region: "Asia (India, Pakistan, Oman)" }, { name: "Rashtriya Kavaha Championship (India national)", frequency: "annual", founded: 1961, region: "India" }, { name: "Pakistan Tent Pegging Championship", frequency: "annual", founded: 1970, region: "Pakistan" }],
  countriesPlayed: ["IND (dominant)", "PAK", "OMN", "ZAF", "SDN", "ARE", "EGY", "AUS (RAAF)", "GBR (Household Cavalry)", "JOR", "GER", "USA"],
  famousAthletes: ["Indian Army President's Bodyguard riders (traditional)", "Pakistan Army cavalry riders", "South African National Defence Force (SANDF) horse artillery"],
  records: [
    { title: "ITPF founded 1997 Amman", holder: "International Tent Pegging Federation", value: "ITPF founded 1997 in Amman Jordan to standardize + govern international tent pegging", year: 1997 },
    { title: "FEI recognized 1993", holder: "Fédération Équestre Internationale", value: "Tent Pegging recognized by FEI as international equestrian sport 1993 — one of FEI's 8 recognized disciplines", year: 1993 },
    { title: "First World Championship 2000", holder: "ITPF", value: "First World Tent Pegging Championship held 2000 in Muscat, Oman — biennial ever since", year: 2000 },
    { title: "Alexander's cavalry ~4th c BCE origins", holder: "ancient cavalry tradition", value: "Sport reportedly used by Alexander the Great's cavalry in 4th century BCE for aerial-target training", year: -330 },
  ],
  variants: ["individual-peg", "team-peg-3-4-riders", "section-peg-4-riders-line-abreast", "indian-file-3-pegs-sequence", "ring-lance-suspended-ring", "lemon-fruit-target"],
  relatedSports: ["polo", "buzkashi-afghan", "gymkhana-timed", "palio-horseback-archery"],
  skills: ["horse-galloping stability + speed", "sword/lance strike technique at gallop", "target-fixation + follow-through", "team coordination (team peg)"],
  wikipediaTitle: "Tent pegging",
  sources: [{ label: "Wikipedia — Tent pegging", url: "https://en.wikipedia.org/wiki/Tent_pegging", publisher: "Wikipedia" }, { label: "ITPF official", url: "https://www.tentpegging.com", publisher: "International Tent Pegging Federation" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default tentPeggingCavalry;

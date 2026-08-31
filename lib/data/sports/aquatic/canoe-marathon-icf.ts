import type { Sport } from "@/lib/types";

export const canoeMarathonIcf: Sport = {
  id: "canoe-marathon-icf",
  slug: "canoe-marathon-icf",
  name: "Canoe Marathon (ICF)",
  officialName: "ICF Canoe Marathon World Championships",
  aliases: ["Canoe Marathon", "Kayak Marathon", "ICF Marathon"],
  shortDescription:
    "Long-distance canoe/kayak racing discipline governed by ICF — races 15-30 km with mandatory portages (carrying boat around obstacles); World Championships biennial since 1988; Hungarian + South African + Australian dominant; parallel to Olympic Sprint (200-1000m) as endurance discipline.",
  longDescription:
    "Canoe Marathon is the long-distance endurance discipline of canoe + kayak racing, governed globally by the International Canoe Federation (ICF, founded 1946, HQ Lausanne). Races are 15-30 km on rivers or lakes with signature mandatory portages — sections where paddlers must exit boat + carry it around obstacles (weirs, rapids, dams) to next put-in point (typically 100-300m portage distance × 2-6 per race). Classes: K1 (kayak single), K2 (kayak double), C1 (canoe single), C2 (canoe double), C4 (canoe four); men + women divisions across each. World Championships biennial since 1988 (first held Nottingham UK); annual World Cup circuit since 2005. Signature global events: (1) Dusi Canoe Marathon (South Africa) — 3-day 120km river race from Pietermaritzburg to Durban; considered world's greatest canoe marathon; started 1951; (2) Fish River Canoe Marathon (South Africa) — 82km 2-day; (3) Devizes-Westminster (UK) — 200km ~24 hour non-stop from Devizes to Westminster London; (4) Yukon River Quest (Canada) — 715km wilderness marathon. Strongholds: Hungary (dominant K1 men + women), South Africa (huge domestic scene), Australia, Denmark, Portugal, Spain, France, Czech Republic. Notable athletes: Renata Csay (HUN — 25+ ICF Marathon WC medals; considered greatest ever), Manuel Antonio Fumado (ESP — multi-time WC), Vagner Souta (BRA), Hank McGregor (RSA — 8x Dusi winner), Andy Birkett (RSA), Bridgitte Hartley (RSA — Olympic sprint + marathon).",
  category: "aquatic-sports",
  subCategory: "long-distance canoe/kayak racing with portages",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "HU",
  regionOfOrigin: "Hungary / Europe (ICF Marathon formalized 1988 — traditional European river marathon culture)",
  estimatedOrigin: "European river marathon culture 1900s+; ICF World Championships since 1988; Dusi Canoe Marathon 1951 South Africa",
  players: { min: 1, max: 4, note: "K1/C1 solo, K2/C2 double, C4 four; individual + team races." },
  equipment: [{ name: "Marathon kayak (K1) or canoe (C1)", description: "Marathon-specific hulls — longer + narrower than sprint boats; K1 ~5.2m × 45cm; C1 ~5.2m × 65cm." }, { name: "Marathon paddle (wing/blade)", description: "Wing paddle for kayak (K); single-blade for canoe (C)." }, { name: "Life vest + spray skirt", description: "PFD + spray skirt on kayaks." }, { name: "Portage gear (carrying handles)", description: "Boat with carrying handles for mandatory portage sections." }, { name: "Timing chip", description: "Electronic timing chip attached to boat + paddler." }],
  duration: { approximateMinutes: 90, structure: "World Championship K1 marathon: ~1.5-2.5 hours (15-30 km); Dusi: 3 days ~12-15 hours total." },
  objective: "Complete marathon course fastest time.",
  matchStructure: "Mass start or interval start; single race per class; time trial format.",
  basicRules: [
    { title: "Mandatory portages 2-6 per race", body: "Portage sections require paddler to exit boat + carry it around obstacle; portage distance 100-300m each; times all-inclusive." },
    { title: "Mass start or interval start (typically mass)", body: "Standard mass start for World Championships; some multi-day events use interval start." },
    { title: "Drafting allowed (unlike triathlon)", body: "Paddlers can draft (ride wake) of other paddlers — legal + strategic." },
    { title: "Doubles portages: both paddlers carry boat together", body: "C2/K2 doubles portages require both paddlers carry — coordination critical." },
  ],
  scoring: { summary: "Race time in minutes:seconds:milliseconds; ranking = fastest.", winCondition: "Fastest completion time." },
  positions: [{ name: "Paddler (marathon)", role: "Sole competitor per boat.", count: 1 }, { name: "Support crew (multi-day events)", role: "Between-day support crew for boat maintenance + nutrition.", count: 3 }],
  officiating: { officials: ["Chief Referee", "Portage Judges (verify legal portage completion)", "Timekeepers", "Course Marshals"], summary: "ICF certified officials." },
  governingBodies: [{ name: "International Canoe Federation (ICF)", founded: 1946, headquarters: "Lausanne, Switzerland" }, { name: "Canoeing South Africa (CSA — Dusi organizer)", founded: 1959, headquarters: "Johannesburg, South Africa" }],
  majorCompetitions: [{ name: "ICF Canoe Marathon World Championships", frequency: "biennial", founded: 1988, region: "rotating (Portugal, Hungary, Denmark, South Africa)" }, { name: "Dusi Canoe Marathon (South Africa)", frequency: "annual (February)", founded: 1951, region: "Pietermaritzburg to Durban, South Africa — 120km 3 days" }, { name: "Devizes-Westminster (UK)", frequency: "annual (Easter)", founded: 1948, region: "UK — 200km non-stop 24hr" }, { name: "Fish River Canoe Marathon (South Africa)", frequency: "annual", founded: 1982, region: "South Africa — 82km 2 days" }],
  countriesPlayed: ["HUN (dominant)", "RSA", "AUS", "DNK", "PRT", "ESP", "FRA", "CZE", "BEL", "GBR"],
  famousAthletes: ["Renata Csay (HUN — 25+ ICF Marathon WC medals; considered greatest)", "Hank McGregor (RSA — 8x Dusi winner + 2015 K1 Marathon World Champion)", "Andy Birkett (RSA — Dusi legend)", "Manuel Antonio Fumado (ESP)", "Vagner Souta (BRA)"],
  records: [
    { title: "Renata Csay 25+ ICF Marathon WC medals", holder: "Renata Csay (HUN)", value: "Renata Csay of Hungary holds record with 25+ ICF Marathon World Championship medals across K1 + K2 women's events — considered greatest canoe marathoner ever", year: 2020 },
    { title: "Dusi Canoe Marathon since 1951", holder: "Canoeing South Africa", value: "Dusi Canoe Marathon (Pietermaritzburg-Durban) continuously held since 1951 — world's greatest canoe marathon; ~1,500 entrants annually", year: 1951 },
    { title: "First ICF World Championships 1988 Nottingham", holder: "International Canoe Federation", value: "First ICF Canoe Marathon World Championships held 1988 in Nottingham, UK", year: 1988 },
  ],
  variants: ["k1-single-kayak", "k2-double-kayak", "c1-single-canoe", "c2-double-canoe", "c4-four-person-canoe", "surfski-open-ocean-marathon", "long-distance-100km-plus-devizes-westminster"],
  relatedSports: ["canoe-sprint-olympic", "kayak-slalom-olympic", "sup-marathon-stand-up-paddleboard"],
  skills: ["endurance paddling technique (efficient wing catch)", "portage transition speed (grab-carry-relaunch)", "drafting tactics (wake riding)", "boat balance in choppy water"],
  wikipediaTitle: "Canoe marathon",
  sources: [{ label: "Wikipedia — Canoe marathon", url: "https://en.wikipedia.org/wiki/Canoe_marathon", publisher: "Wikipedia" }, { label: "ICF Canoe Marathon", url: "https://www.canoeicf.com/disciplines/canoe-marathon", publisher: "International Canoe Federation" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default canoeMarathonIcf;

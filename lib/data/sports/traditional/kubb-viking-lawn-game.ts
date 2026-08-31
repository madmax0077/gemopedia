import type { Sport } from "@/lib/types";

export const kubbVikingLawnGame: Sport = {
  id: "kubb-viking-lawn-game",
  slug: "kubb-viking-lawn-game",
  name: "Kubb (Viking Chess Lawn Game)",
  officialName: "Kubb World Championship — Gotland Sweden",
  aliases: ["Viking Chess", "Kubb", "Swedish Kubb"],
  shortDescription:
    "Swedish outdoor lawn game — 'Viking Chess' — teams throw wooden 'kastpinnar' batons at opponent's 'kubb' wooden blocks trying to knock them all down + finally knock down central 'King' piece; annual World Championship since 1995 on Gotland Sweden (~200 teams); explosive global growth 2000s-2020s as accessible lawn game alternative to cornhole.",
  longDescription:
    "Kubb (pronounced 'koob'; Swedish for 'wooden block') is a Swedish outdoor lawn game often called 'Viking Chess' due to popular folk-history claim (largely unsubstantiated) that it dates to Viking era. Actual documented modern form emerged 1990s Gotland island (Sweden), when local Bengt Karlsson formalized commercial rules + boxed sets from a family lawn game he grew up with. Explosive global growth 2000s-2020s as one of the fastest-growing lawn games — competing with American cornhole for backyard/beach dominance. Standard equipment: (1) 10 'Kubbar' — wooden blocks ~15cm × 7cm × 7cm; 5 per team, placed on team baseline; (2) 6 'Kastpinnar' — throwing batons ~30cm × 4cm diameter; (3) 1 'King' — larger central block ~30cm × 9cm × 9cm; placed center of field; (4) 4 corner stakes marking field. Playing field: rectangular 5m × 8m (recreational) or 5m × 8m up to 8m × 10m (competition). Setup: teams face across field with 5 kubbar on each baseline; King placed in center. Play: (1) Team throws 6 kastpinnar underhand end-over-end at opposing baseline attempting to knock down opposing kubbar; (2) Each knocked-down 'field kubb' gets tossed onto opponent's side of field where it becomes 'field kubb' next round; (3) Field kubbar (kubbar in play field) MUST be knocked down before targeting opponent's baseline kubbar; (4) If team doesn't knock all field kubbar first, opponent may raise remaining field kubb closest to attacking baseline as 'advantage kubb' — makes their approach easier; (5) Once ALL opposing kubbar (field + baseline) knocked down, team may target the King; (6) King MUST be knocked from opponent's own baseline (throwing from own baseline); knocking King BEFORE clearing all kubbar = automatic loss ('own goal'). Signature strategic depth: (a) Advantage kubb placement — where to place raised field kubbar; (b) Baseline vs field kubb targeting priority; (c) Kastpinn conservation — always keep enough for King attempt. Match format 1v1, 2v2, 3v3, 6v6 team formats; games typically best-of-3. World Kubb Championship held annually on Gotland Sweden since 1995 (typically last weekend July) — attracts ~200 teams from ~15 countries; grand prize awards + folk festival atmosphere. Also US Kubb Championship (Eau Claire Wisconsin — capital of American Kubb since 2007), German Kubb Cup, UK Kubb Championship. Notable teams: Gotland local champions + Swedish national teams dominate; USA + Germany + UK growing scenes.",
  category: "traditional-cultural-sports",
  subCategory: "Swedish outdoor lawn game with wooden blocks + throwing batons",
  sportType: "team", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "summer", era: "20th-century", popularity: "regional",
  countryOfOrigin: "SE",
  regionOfOrigin: "Sweden (Gotland island — formalized commercial modern form 1990s by Bengt Karlsson)",
  estimatedOrigin: "Folk-history dates to Viking era (largely unsubstantiated); modern documented form formalized 1990s Gotland Sweden by Bengt Karlsson; first World Championship 1995",
  players: { min: 2, max: 12, note: "1v1, 2v2, 3v3, or 6v6 team formats." },
  equipment: [{ name: "10 Kubbar (wooden blocks ~15×7×7cm)", description: "10 rectangular wooden blocks; 5 per team placed on baselines at start; central hitting targets." }, { name: "6 Kastpinnar (throwing batons ~30cm × 4cm)", description: "6 wooden throwing batons; teams share, throw all 6 per turn." }, { name: "1 King (large central block ~30×9×9cm)", description: "Larger central wooden block placed center of field; final winning target." }, { name: "4 corner stakes + measuring line", description: "Wooden corner stakes marking rectangular field 5m × 8m; measuring line for setup." }],
  duration: { approximateMinutes: 30, structure: "Single game 20-40 min; tournament match best-of-3 45-90 min; competition day 6-10 hours." },
  objective: "Knock down all opponent's kubbar (field + baseline) then knock down the King from own baseline; team that achieves both first wins.",
  matchStructure: "Alternating turns throwing 6 batons each; game continues until one team completes both phases (all kubbar + King).",
  basicRules: [
    { title: "Kastpinnar thrown underhand end-over-end", body: "Throwing batons must be thrown underhand, spinning end-over-end (like axe throwing); overhand or sideways throws = fault, batons don't count." },
    { title: "Field kubbar must be knocked down before baseline kubbar", body: "Field kubbar (in playing field between teams) MUST be cleared each round before attacking opposing baseline kubbar; violating this = advantage to opponent." },
    { title: "Advantage kubb — un-hit field kubb closest to attacker becomes hitting-line", body: "If team doesn't clear all field kubbar in a turn, opponent may 'raise' remaining field kubb closest to attacker's baseline — attacker's throwing line advances to that kubb next round." },
    { title: "King must be knocked from own baseline (after all kubbar cleared)", body: "Once all opponent kubbar knocked down, team attempts King from own baseline (must clear entire field first); knocking King before clearing kubbar = automatic loss." },
    { title: "Standing bandied kubbar re-erected before each turn", body: "Standing kubbar remain in play; knocked-down field kubbar are gathered + thrown into opposing field by throwing team for next round." },
  ],
  scoring: { summary: "No point system — first team to knock down all opponent kubbar (field + baseline) then King wins.", winCondition: "Complete both phases: clear all opponent kubbar then knock King from own baseline." },
  positions: [{ name: "Kubb player", role: "One of 1-6 team members alternating throws.", count: 6 }, { name: "Team captain (calls strategy)", role: "Coordinates team target selection + advantage kubb strategy.", count: 1 }],
  officiating: { officials: ["Chief Umpire (tournament)", "Field Judge (measures + rules)", "Timekeeper (competition)"], summary: "World Kubb Championship certified officials; casual play self-officiated." },
  governingBodies: [{ name: "Kubb VM (World Championship organizing committee)", founded: 1995, headquarters: "Gotland, Sweden" }, { name: "US National Kubb Championship", founded: 2007, headquarters: "Eau Claire, Wisconsin, USA" }, { name: "European Kubb Championship (Germany, UK, Sweden)", founded: 2005, headquarters: "rotating Europe" }],
  majorCompetitions: [{ name: "World Kubb Championship (Kubb VM)", frequency: "annual (last weekend July)", founded: 1995, region: "Gotland, Sweden — ~200 teams from ~15 countries" }, { name: "US National Kubb Championship", frequency: "annual", founded: 2007, region: "Eau Claire, Wisconsin, USA" }, { name: "German Kubb Cup", frequency: "annual", founded: 2008, region: "Germany" }, { name: "UK Kubb Championship", frequency: "annual", founded: 2010, region: "UK" }],
  countriesPlayed: ["SWE (dominant + origin)", "USA (huge scene — Eau Claire Wisconsin US capital)", "DEU", "GBR", "NLD", "NOR", "DNK", "FIN", "AUT", "CHE", "worldwide expansion 2020s"],
  famousAthletes: ["Bengt Karlsson (Gotland — modern rules formalizer)", "Various Swedish + American Championship-winning teams (Gotland Kubb Club, Eau Claire Kubb League)", "USA teams Chippewa Champs + Kubbstore.com champion squads"],
  records: [
    { title: "World Kubb Championship since 1995 Gotland", holder: "Kubb VM organizing committee", value: "World Kubb Championship held annually since 1995 on Gotland island Sweden — attracts ~200 teams from ~15 countries; 30+ year continuous tradition", year: 1995 },
    { title: "Eau Claire Wisconsin = US Kubb capital", holder: "US Kubb community", value: "Eau Claire, Wisconsin recognized as US Kubb capital — hosts US National Championships since 2007; largest US kubb scene", year: 2024 },
    { title: "Explosive growth 2000s-2020s as accessible lawn game", holder: "Global Kubb community", value: "Kubb experienced explosive global growth 2000s-2020s as accessible outdoor lawn game — competing with cornhole for backyard/beach dominance", year: 2024 },
  ],
  variants: ["kubb-standard-6v6-full-field", "kubb-2v2-doubles-common-competitive", "kubb-1v1-singles", "kubb-mini-3m-x-5m-family-format", "kubb-tournament-8m-x-10m-championship"],
  relatedSports: ["cornhole-bags", "petanque-french-boules", "lawn-bowls", "molkky-finnish"],
  skills: ["kastpinn throwing accuracy (end-over-end)", "field kubb clearance planning", "advantage kubb placement strategy", "King shot pressure management"],
  wikipediaTitle: "Kubb",
  sources: [{ label: "Wikipedia — Kubb", url: "https://en.wikipedia.org/wiki/Kubb", publisher: "Wikipedia" }, { label: "US National Kubb Championship", url: "https://usakubbchampionship.com", publisher: "US Kubb" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default kubbVikingLawnGame;

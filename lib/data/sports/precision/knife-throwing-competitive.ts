import type { Sport } from "@/lib/types";

export const knifeThrowingCompetitive: Sport = {
  id: "knife-throwing-competitive",
  slug: "knife-throwing-competitive",
  name: "Knife Throwing (Competitive)",
  officialName: "International Knife Throwers Hall of Fame (IKTHOF) / European Throwing Club Association (EuroThrowers)",
  aliases: ["Competitive Knife Throwing", "Impalement Arts (theatrical)"],
  shortDescription:
    "Precision sport of throwing balanced knives at wooden targets from set distances (3m/5m/7m) — modern competitive tradition since 1950s-60s USA; governed by IKTHOF + EuroThrowers; also includes theatrical 'impalement arts' where thrower throws around live human assistant target.",
  longDescription:
    "Competitive Knife Throwing is a precision sport where practitioners throw balanced throwing knives (specifically designed for throwing — heavier than utility knives, ~200-400g, ~25-40 cm) at wooden targets from measured distances. Modern competitive tradition emerged 1950s-60s in USA (with theatrical impalement arts predating in circus). Standard sport format: (1) Distance categories: 3m (short), 5m (mid), 7m (long); (2) Throw counts: 5-10 knives per set; (3) Target: 60 cm circular wooden target with concentric scoring rings (bullseye 4-5 pts, 3, 2, 1 pts). Multiple throwing styles: (a) 'Full-spin' (knife rotates 360° in flight — most common); (b) 'Half-spin' or 'No-spin' (advanced — knife rotates less or not at all; harder but more consistent). Additional disciplines: (i) Combat/Tactical knife throwing (military heritage); (ii) Card cutting (throwing knife to split playing card edge-on — extreme precision); (iii) Impalement arts (theatrical — thrower throws around live human assistant on target board). Governing bodies: International Knife Throwers Hall of Fame (IKTHOF, founded 2002, USA — competitions at Bowie Blade Show + Blade Show), European Throwing Club Association (EuroThrowers, founded 2002, Germany — annual EuroThrowers Championship rotating Europe), American Knife Throwers Alliance (AKTA, founded 1989). No unified world championship — IKTHOF Grand Championship (USA) + EuroThrowers Championship (Europe) are premier events. Notable throwers: Adam Celadin (Czech Republic — 5x Guinness World Record holder, considered greatest modern thrower), Harry McEvoy (USA — founding IKTHOF pioneer, died 2001), Michael Bainton (USA — theatrical arts), Xolette Ganger + Aleksander Grubelich (Germany — European champions). Cross-over with axe throwing (World Axe Throwing League, WATL) has exploded 2015+ making axe throwing bars mainstream USA.",
  category: "precision-sports",
  subCategory: "throwing precision sport",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "niche",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (modern competitive tradition 1950s-60s; IKTHOF 2002)",
  estimatedOrigin: "Modern competitive era 1950s-60s USA; AKTA 1989; IKTHOF + EuroThrowers 2002",
  players: { min: 1, max: 1 },
  equipment: [{ name: "Balanced throwing knife (200-400g, 25-40cm)", description: "Purpose-designed throwing knives — brands include GilHibben, Cold Steel, Boker, Perfect Point; specific weight distribution + sharpness." }, { name: "Wooden target (60cm diameter, softwood)", description: "Pine or poplar wood target with concentric scoring rings; softwood grips knife tip." }, { name: "Target stand (adjustable)", description: "Freestanding wooden target stand; sometimes hay-bale backdrop for safety." }, { name: "Distance markers (3m/5m/7m)", description: "Standardized distances for competitive throws." }],
  duration: { approximateMinutes: 60, structure: "Round: 5-10 throws ~5-10 min; competitive event: 4-8 rounds ~2-4 hours." },
  objective: "Score maximum points across throws by hitting bullseye + inner scoring rings.",
  matchStructure: "Multi-round bracketed or aggregate scoring format.",
  basicRules: [
    { title: "Throw from designated distance (3m/5m/7m)", body: "Rider stands behind measured line; throw with full-spin or half-spin technique." },
    { title: "Knife must stick point-first into target", body: "Only point-in stick counts; handle stick or bounce-off = 0 points." },
    { title: "Bullseye 4-5 pts, inner rings 3-2-1", body: "Concentric scoring rings; specific values vary by federation." },
    { title: "Safety zone strictly enforced", body: "Only thrower + judges in throw zone; audience behind safety line." },
  ],
  scoring: {
    summary: "Points per throw based on where knife sticks in target.",
    winCondition: "Highest total score across rounds.",
    breakdown: [{ action: "Bullseye (center)", points: "+5" }, { action: "First inner ring", points: "+4" }, { action: "Second ring", points: "+3" }, { action: "Third ring", points: "+2" }, { action: "Outer ring", points: "+1" }, { action: "Off-target or handle-stick", points: "0" }],
  },
  positions: [{ name: "Knife thrower", role: "Sole competitor.", count: 1 }, { name: "Target assistant (impalement arts only)", role: "Human target for theatrical throws (extremely dangerous; only for skilled entertainers).", count: 1 }],
  officiating: { officials: ["Chief Judge", "Target Judges", "Safety Officer"], summary: "IKTHOF/EuroThrowers certified officials." },
  governingBodies: [{ name: "International Knife Throwers Hall of Fame (IKTHOF)", founded: 2002, headquarters: "Austin, Texas, USA" }, { name: "European Throwing Club Association (EuroThrowers)", founded: 2002, headquarters: "Germany (rotating)" }, { name: "American Knife Throwers Alliance (AKTA)", founded: 1989, headquarters: "USA" }],
  majorCompetitions: [{ name: "IKTHOF Grand Championship (Bowie Blade Show)", frequency: "annual", founded: 2002, region: "Austin/Atlanta, USA" }, { name: "EuroThrowers Championship", frequency: "annual", founded: 2003, region: "rotating Europe" }, { name: "AKTA Nationals", frequency: "annual", founded: 1989, region: "USA (rotating)" }],
  countriesPlayed: ["USA", "GER", "CZE", "FRA", "GBR", "RUS", "POL", "AUS", "JPN"],
  famousAthletes: ["Adam Celadin (CZE — 5x Guinness World Record holder; greatest modern thrower)", "Harry McEvoy (USA — IKTHOF founder, died 2001)", "The Great Throwdini (David Adamovich, USA — impalement arts world record)", "Michael Bainton (USA — theatrical arts)"],
  records: [
    { title: "Adam Celadin 5x Guinness World Records", holder: "Adam Celadin (CZE)", value: "5x Guinness World Record holder including 'most knives thrown around human target in 1 minute' + 'most double knife throws in 1 minute'; considered greatest modern thrower", year: 2020 },
    { title: "The Great Throwdini 102 knives around live target 1 min", holder: "David Adamovich (USA)", value: "Guinness World Record: 102 knives thrown around live human target ('the Wheel of Death') in 1 minute", year: 2007 },
    { title: "IKTHOF founded 2002", holder: "International Knife Throwers Hall of Fame", value: "IKTHOF founded 2002 to honor knife throwers + organize Grand Championship — considered USA's premier throwing organization", year: 2002 },
  ],
  variants: ["full-spin-standard-technique", "half-spin-advanced-technique", "no-spin-elite-technique", "impalement-arts-theatrical", "card-cutting-extreme-precision", "combat-tactical-military-heritage"],
  relatedSports: ["axe-throwing-watl", "tomahawk-throwing", "archery-recurve-target", "spear-throwing"],
  skills: ["throwing technique (spin control)", "distance-judgment", "release-timing precision", "grip variation (blade vs. handle grip)"],
  wikipediaTitle: "Knife throwing",
  sources: [{ label: "Wikipedia — Knife throwing", url: "https://en.wikipedia.org/wiki/Knife_throwing", publisher: "Wikipedia" }, { label: "IKTHOF official", url: "https://www.ikthof.com", publisher: "International Knife Throwers Hall of Fame" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default knifeThrowingCompetitive;

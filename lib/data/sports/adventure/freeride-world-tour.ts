import type { Sport } from "@/lib/types";

export const freerideWorldTour: Sport = {
  id: "freeride-world-tour",
  slug: "freeride-world-tour",
  name: "Freeride World Tour (FWT)",
  officialName: "Freeride World Tour",
  aliases: ["FWT", "Xtreme Verbier finale"],
  shortDescription:
    "Elite big-mountain freeride ski + snowboard competition (est. 2008 from Verbier Xtreme) — athletes drop into un-groomed alpine faces (35-60° slopes) at 5 global venues; judged on line choice, control, fluidity, jumps, and technique. Xtreme Verbier finale on 55° Bec des Rosses.",
  longDescription:
    "Freeride World Tour (FWT) is the elite big-mountain freeride ski + snowboard competition circuit — established 2008 from the legendary Xtreme Verbier event (Bec des Rosses, Switzerland, first held 1996). 5 stops per season (typical: Baqueira Beret Spain → Ordino-Arcalís Andorra → Kicking Horse Canada → Fieberbrunn Austria → Xtreme Verbier finale). Athletes score 4 disciplines: ski men, ski women, snowboard men, snowboard women. Each competitor gets 1 competition run (30-90 sec down 400-800m un-groomed face); 5-judge panel scores 0-100 on line difficulty, control, fluidity, jumps + drops, and technique. Best 4 of 5 event scores count for overall title. Qualifier system: Freeride World Qualifier (FWQ) 4-star + 5-star events award points; top FWQ athletes + previous year FWT finalists earn tour spots.",
  category: "adventure-extreme-sports",
  subCategory: "big-mountain freeride ski + snowboard",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "winter",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "CH",
  regionOfOrigin: "Verbier, Switzerland (birthplace via Xtreme Verbier 1996)",
  estimatedOrigin: "Xtreme Verbier 1996; FWT circuit formalised 2008",
  players: { min: 1, max: 1, note: "Solo competition run." },
  equipment: [
    { name: "Powder skis (110-120mm underfoot)", description: "Wide-underfoot rocker skis for powder + variable snow (DPS Wailer, K2 Mindbender, Faction La Machine)." },
    { name: "Freeride snowboard (155-165cm, directional)", description: "Stiff directional board with setback stance + rocker-camber (Jones Ultra Mountain Twin, Burton Family Tree)." },
    { name: "Avalanche safety kit", description: "Transceiver (Mammut Barryvox / BCA Tracker), probe, shovel, airbag pack (ABS/BCA Float 32)." },
    { name: "Helmet + back protector", description: "Certified helmet (POC Fornix, Smith Vantage) + spine protector (Dainese Manis, POC Spine VPD)." },
  ],
  duration: { approximateMinutes: 1, structure: "Each run 30-90 sec; event day = single competition day per venue." },
  objective: "Score highest averaged points on 1 competition run down un-groomed alpine face.",
  matchStructure: "5 stops per season; single competition run per athlete per venue; 5-judge panel scores 0-100.",
  basicRules: [
    { title: "Un-groomed face, natural snow", body: "No man-made features; entirely natural alpine terrain." },
    { title: "Single scored run", body: "Only one competition run counts (no drops if fall)." },
    { title: "Avalanche-controlled slope", body: "Ski patrol conducts avalanche control before competition open." },
  ],
  advancedRules: [
    { title: "Mandatory line features", body: "Judges reward 4-6 jumps/drops per run; line pre-inspection required." },
    { title: "Rider-called drop", body: "Athlete must call themselves in ready on start gate — no unsafe dropping." },
  ],
  scoring: {
    summary: "5-judge panel scores 0-100 on: line difficulty, control, fluidity, jumps + drops, technique. Best 4 of 5 event scores count toward overall.",
    winCondition: "Highest averaged score per stop; highest overall points across 5 stops = FWT champion.",
    breakdown: [
      { action: "Line difficulty", points: "Weighted highest" },
      { action: "Control + fluidity", points: "Deduct on falls/slips" },
      { action: "Jumps + drops", points: "Rewards amplitude + technique" },
    ],
  },
  penalties: [
    { title: "Fall (any body-part touchdown)", body: "-20 to -40 pts depending on severity + recovery." },
    { title: "Out-of-control section", body: "Freeride is un-gated; judges penalise uncontrolled slides." },
    { title: "Unsafe conduct (dropping without call)", body: "Instant DQ + potential season suspension." },
  ],
  positions: [{ name: "Freeride athlete", role: "Skis or snowboards down un-groomed alpine face under scored judgement.", count: 1 }],
  officiating: {
    officials: ["5 judges (former athletes + coaches)", "Chief judge", "Head technical director", "Ski patrol safety chief"],
    summary: "Judges score independently; drop high/low, average middle 3. Video review for disputed falls.",
  },
  governingBodies: [
    { name: "Freeride World Tour Management SA", founded: 2008, headquarters: "Verbier, Switzerland" },
    { name: "International Freeskiers & Snowboarders Association (IFSA)", founded: 1996, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "Freeride World Tour (FWT)", frequency: "annual (5 stops, Jan-Apr)", founded: 2008, region: "global (Europe + North America)" },
    { name: "Freeride World Qualifier (FWQ)", frequency: "annual", founded: 2008, region: "global (50+ events)" },
    { name: "Xtreme Verbier", frequency: "annual", founded: 1996, region: "Verbier, Switzerland (Bec des Rosses)" },
  ],
  countriesPlayed: ["CH", "FR", "AT", "IT", "ES", "AD", "US", "CA", "NZ", "AU"],
  famousAthletes: [
    "Aurélien Ducroz (France) — 2× ski overall champion (2009, 2011)",
    "Manuela Mandl (Austria) — multi-time women's overall champion",
    "Arianna Tricomi (Italy) — women's overall champion",
    "Sammy Luebke (USA) + Victor de Le Rue (France) — snowboard men's overall champions",
  ],
  records: [
    { title: "Most FWT overall titles (ski men)", holder: "Aurélien Ducroz (France)", value: "2-time overall champion (2009, 2011)", year: 2011 },
    { title: "Most FWT overall titles (ski women)", holder: "Manuela Mandl (Austria) / Arianna Tricomi (Italy)", value: "Multiple overall titles across mid-2010s to early-2020s", year: 2021 },
    { title: "Most FWT overall titles (snowboard men)", holder: "Sammy Luebke (USA) / Victor de Le Rue (France)", value: "Multiple overall titles", year: 2020 },
  ],
  variants: ["freeride-world-qualifier", "freeride-junior-tour"],
  relatedSports: ["alpine-skiing", "big-mountain-skiing", "snowboarding", "crankworx"],
  skills: ["line reading", "cliff drops", "spine skiing", "powder technique", "avalanche safety"],
  strategies: [
    { title: "Aggressive top-of-face line", body: "Committing to a steeper technical line at the top scores higher on difficulty." },
    { title: "Mandatory 5-air line", body: "Judges reward 4-6 jumps/drops in a single run — plan line via cliff bands." },
    { title: "Rider inspection day-of", body: "All riders inspect face via binoculars + walk-off; line plans finalised at start gate." },
  ],
  terminology: [
    { term: "FWT", meaning: "Freeride World Tour" },
    { term: "FWQ", meaning: "Freeride World Qualifier" },
    { term: "Xtreme Verbier", meaning: "Legendary Bec des Rosses finale" },
    { term: "Line", meaning: "Chosen route down face" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Off-piste + touring", body: "Powder skiing, tree navigation, avalanche safety." }] },
    { level: "intermediate", steps: [{ title: "Big-mountain progression + qualifiers", body: "Cliff drops (5-15m), spine skiing, Freeride Junior Tour + FWQ points." }] },
    { level: "advanced", steps: [{ title: "FWT wildcard/qualifier + Xtreme Verbier", body: "60° faces, 20m+ mandatory drops, full line commit under judged pressure." }] },
  ],
  faq: [
    { question: "How do athletes qualify for the FWT?", answer: "Through the Freeride World Qualifier (FWQ) series — 4-star + 5-star events award points. Top FWQ athletes + previous year FWT finalists earn tour spots." },
    { question: "What is Xtreme Verbier?", answer: "The FWT season finale on the Bec des Rosses (~55° slope, ~600m face) — considered the most extreme freeride venue in competition." },
  ],
  wikipediaTitle: "Freeride World Tour",
  sources: [{ label: "Wikipedia — Freeride World Tour", url: "https://en.wikipedia.org/wiki/Freeride_World_Tour", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default freerideWorldTour;

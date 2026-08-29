import type { Sport } from "@/lib/types";

export const sledHockey: Sport = {
  id: "sled-hockey",
  slug: "sled-hockey",
  name: "Para Ice Hockey",
  officialName: "Para Ice Hockey (International Paralympic Committee / IIHF)",
  aliases: ["Sled Hockey", "Sledge Hockey", "Ice Sledge Hockey"],
  shortDescription:
    "Paralympic winter team sport — ice hockey played on sledges (short blades attached to frames); athletes use 2 short sticks with picks for propulsion + puck play; contested at Winter Paralympics since Lillehammer 1994.",
  longDescription:
    "Para Ice Hockey (Sled/Sledge Hockey) is a Paralympic winter team sport — ice hockey played by athletes with lower-limb impairments on sledges. Sledges are short frames with 2 blades below allowing puck to pass under. Athletes use 2 short sticks (~1m long); each stick has picks on one end for propulsion + shortened blade on other end for puck play. Standard ice hockey rules apply with modifications. Invented in Sweden in 1961 at Stockholm rehabilitation center; introduced as demonstration sport at Innsbruck 1984 Paralympic Winter Games; full medal event at Lillehammer 1994. IIHF partnered with IPC for governance from 2010. USA + Canada dominate; Norwegian + South Korean + Czech + Russian teams also strong. Legendary players: Sylvester 'Sly' Flis (USA — considered greatest ever), Andy Yohe (USA — Paralympic gold captain), Steve Cash (USA — goaltender + Paralympic gold), Jean-François Guilbault (Canada — Paralympic multi-time).",

  category: "winter-sports",
  subCategory: "paralympic winter team sport — ice hockey on sledges",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: true,
  isProfessional: false,
  season: "winter",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "SE",
  regionOfOrigin: "Sweden (Stockholm rehabilitation center 1961); Paralympic Innsbruck 1984 (demo) + Lillehammer 1994 (full medal)",
  estimatedOrigin: "Invented Stockholm Sweden 1961 at rehabilitation center; International Paralympic Committee recognition 1994; IIHF-IPC partnership 2010",

  players: { perTeam: 6, min: 6, max: 6, substitutes: 12, note: "5 skaters + goalie per side; 12-person bench for rolling substitutions." },
  field: {
    surfaceName: "Standard ice hockey rink",
    dimensions: "IIHF regulation: 60m × 30m; 4×6 ft goals",
    description: "Same rink dimensions + goals as able-bodied ice hockey.",
  },
  equipment: [
    { name: "Sledge", description: "Short frame with 2 blades below; blades spaced to allow puck to pass under. Athlete sits + straps in." },
    { name: "2 short sticks (~1m each)", description: "Each stick has picks on one end for propulsion + shortened blade on other end for puck play." },
    { name: "Full hockey pads + helmet + face guard (mandatory)", description: "Same protective equipment as able-bodied hockey; face guard mandatory." },
    { name: "Goalie equipment", description: "Standard hockey goalie kit + specialized sledge for goaltender." },
    { name: "Standard hockey puck", description: "Unchanged from able-bodied hockey." },
  ],
  duration: { approximateMinutes: 60, structure: "3 × 15-min periods; standard IIHF hockey timing." },
  objective: "Score more goals than opposing team by shooting puck into opposing net.",
  matchStructure: "Standard hockey structure: 3 periods × 15 min. Face-off at center to start. Continuous play; possession changes on turnover.",

  basicRules: [
    { title: "6 vs 6 (5 skaters + goalie)", body: "Standard hockey team structure." },
    { title: "Puck play + propulsion with same 2 sticks", body: "Each stick has picks (propulsion) + blade (puck play)." },
    { title: "Standard hockey off-side + icing rules", body: "Same restrictions as able-bodied hockey." },
    { title: "Standard 3-second lane rule + 24-second shot clock (some formats)", body: "Rule set matches IIHF standards." },
    { title: "Body checking allowed", body: "Legal in men's international; women's often no-contact." },
    { title: "Standard penalties", body: "2-min minor, 5-min major, 10-min misconduct, ejection. Team plays short-handed during minor penalties." },
  ],
  scoring: {
    summary: "1 point per goal. Higher goal count wins.",
    winCondition: "Higher goal count at end of regulation; overtime + shootout for tied games.",
    breakdown: [
      { action: "Regulation goal", points: "1" },
      { action: "Overtime goal", points: "1 (sudden death win)" },
      { action: "Shootout goal", points: "Contributes to shootout total" },
    ],
  },

  positions: [
    { name: "Goalie", role: "Defends net; specialized sledge.", count: 1 },
    { name: "Defensemen (2)", role: "Defensive zone coverage + break-outs.", count: 2 },
    { name: "Forwards (Center + Wings)", role: "3 attacking players; forecheck + scoring.", count: 3 },
  ],
  officiating: {
    officials: ["Referee (1-2)", "Linesmen (2)", "Timekeeper", "Scorekeeper"],
    summary: "IIHF-certified officials; same structure as able-bodied hockey.",
  },

  governingBodies: [
    { name: "International Ice Hockey Federation (IIHF)", founded: 1908, headquarters: "Zurich, Switzerland" },
    { name: "International Paralympic Committee (IPC)", founded: 1989, headquarters: "Bonn, Germany" },
    { name: "USA Hockey Sled Hockey", founded: 2004, headquarters: "USA" },
    { name: "Hockey Canada Para Ice Hockey", founded: 1995, headquarters: "Calgary, Canada" },
  ],
  majorCompetitions: [
    { name: "Winter Paralympic Games (Para Ice Hockey)", frequency: "quadrennial", founded: 1994, region: "worldwide" },
    { name: "World Para Ice Hockey Championships", frequency: "annual (except Paralympic years)", founded: 1996, region: "worldwide" },
    { name: "IPC Regional Championships", frequency: "biennial", founded: 2005, region: "regional" },
  ],
  countriesPlayed: ["US", "CA", "NO", "RU", "KR", "CZ", "SE", "IT", "JP", "GB", "SK", "DE"],
  famousAthletes: [
    "Sylvester 'Sly' Flis (USA — considered greatest ever sled hockey player)",
    "Andy Yohe (USA — Paralympic gold captain)",
    "Steve Cash (USA — goaltender + Paralympic gold)",
    "Jean-François Guilbault (Canada — Paralympic multi-time)",
    "Brody Roybal (USA — modern Paralympic gold)",
    "Adam Page (USA — Paralympic gold)",
    "Anders Bengtsson (Sweden — early sport pioneer)",
    "Norwegian team dominant early era",
  ],
  records: [
    { title: "Most Paralympic Para Ice Hockey gold (nation)", holder: "USA + Canada + Norway", value: "Multiple Paralympic golds across nations; competitive across nations", year: 2022 },
    { title: "Sport origin", holder: "Stockholm Sweden 1961", value: "Invented at Stockholm rehabilitation center", year: 1961 },
    { title: "Paralympic debut", holder: "Lillehammer 1994", value: "Full medal event debut", year: 1994 },
    { title: "Sylvester Flis dominance", holder: "Sylvester Flis (USA)", value: "Considered greatest ever sled hockey player; multiple Paralympic + World Championship gold", year: 2010 },
  ],

  variants: ["ipc-standard-para-ice-hockey", "national-sled-hockey-leagues"],
  relatedSports: ["ice-hockey", "wheelchair-rugby", "wheelchair-basketball", "sitting-volleyball"],

  skills: ["sledge propulsion technique (stick picks)", "puck handling with short sticks", "physical strength (arm-only propulsion)", "positional play + spacing", "team system + coordination"],

  terminology: [
    { term: "Para Ice Hockey", meaning: "IPC-preferred sport name; also known as Sled/Sledge Hockey." },
    { term: "Sled/Sledge Hockey", meaning: "Historic + colloquial name for the sport." },
    { term: "Sledge", meaning: "Short frame with 2 blades below; athlete sits + straps in." },
    { term: "Picks", meaning: "Sharp end of each stick used for propulsion on ice." },
    { term: "Sticks", meaning: "2 short (~1m) sticks; each has picks + shortened blade." },
    { term: "IIHF", meaning: "International Ice Hockey Federation." },
    { term: "IPC", meaning: "International Paralympic Committee." },
    { term: "Sylvester Flis", meaning: "American; considered greatest ever sled hockey player." },
  ],

  faq: [
    { question: "What is Para Ice Hockey?", answer: "Paralympic winter team sport — ice hockey played by athletes with lower-limb impairments on sledges. Sledges are short frames with 2 blades below allowing puck to pass under. Athletes use 2 short sticks each with picks (propulsion) + blade (puck play). Standard hockey rules apply with modifications. Paralympic since Lillehammer 1994." },
    { question: "How is Para Ice Hockey different from able-bodied Hockey?", answer: "Main differences: (1) Athletes sit on SLEDGES with 2 blades below vs. skate blades on feet. (2) Athletes use 2 SHORT STICKS each with picks (for propulsion) + shortened blade (for puck play). Standard hockey team structure (6 vs 6 including goalie). Standard rules (off-side, icing, penalties, 24-second shot clock in some formats). Body checking legal in men's international; women's often no-contact." },
    { question: "Who is the greatest sled hockey player?", answer: "Sylvester 'Sly' Flis (USA) — considered greatest ever sled hockey player. Multiple Paralympic + World Championship gold. Others: Andy Yohe (USA Paralympic gold captain), Steve Cash (USA goaltender + Paralympic gold), Jean-François Guilbault (Canada Paralympic multi-time)." },
    { question: "Is Para Ice Hockey in the Olympics?", answer: "No, but at every Winter Paralympics since Lillehammer 1994. Paralympic Games run alongside Winter Olympic Games in same host city." },
  ],

  wikipediaTitle: "Para ice hockey",
  sources: [{ label: "IPC Para Ice Hockey", url: "https://paralympic.org/ice-hockey", publisher: "IPC" }, { label: "Wikipedia — Para ice hockey", url: "https://en.wikipedia.org/wiki/Para_ice_hockey", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const fivePinBilliards: Sport = {
  id: "five-pin-billiards",
  slug: "five-pin-billiards",
  name: "Five-Pin Billiards",
  officialName: "Five-Pin Italian Billiards (Biliardo Cinque Birilli)",
  aliases: ["5-Pin", "Biliardo Cinque Birilli", "Italian Billiards", "Italian 5-Pin"],
  shortDescription:
    "Italian carom billiards variant featuring 5 small skittles (pins) in the table's center — score by knocking down opponent's pins via cue+ball contact; national pastime of Italy with dedicated pro tour + World Championship.",
  longDescription:
    "Five-Pin Billiards (Biliardo Cinque Birilli) is the Italian national billiards variant — a fusion of carom billiards + skittles played on a pocketless carom table with 5 small skittles (4 white + 1 red 'castle') arranged in a cross pattern at table center. Three balls in play: white cue, opposing white cue (marked), red object ball. Point-scoring is uniquely double-layered: (1) legal caroms score cannon points; (2) pins knocked down by the target ball (never the cue ball directly) score pin points — the red 'castle' pin is worth double. Match format: race to 60, 80, or 100 pts. Codified in Italy in the early 20th century, Five-Pin is deeply cultural in Italian bars + billiards clubs (~5,000 clubs nationwide) and forms the base of a professional tour under FIBIS (Federazione Italiana Biliardo Sportivo). World Cup + World Championship contested since 1974 in Italy + international; strongholds in Italy, Argentina (~2M players via Italian immigrant community), Spain, and France.",

  category: "precision-sports",
  subCategory: "carom billiards + skittles (Italian)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "IT",
  regionOfOrigin: "Italy (early 20th century codification); FIBIS founded 1959; World Championship since 1974",
  estimatedOrigin: "Early 20th century Italy (fusion of carom + skittles); FIBIS 1959; World Championship 1974",

  players: { min: 2, max: 2, note: "1v1 competitive; also team formats at national level." },
  field: {
    surfaceName: "5-Pin billiards table (2.84m × 1.42m; pocketless with pin cross)",
    dimensions: "2.84m × 1.42m; same as carom table with 5 small skittles at center in cross pattern",
    description: "Carom table with 5 pins at exact center (4 white 8mm x 25mm pins + 1 red 'castle' pin); pins arranged in cross with red at intersection.",
  },
  equipment: [
    { name: "3 carom balls (2 cues + 1 red)", description: "Standard 61.5mm carom balls; one cue ball marked to distinguish players." },
    { name: "5 pins (4 white + 1 red)", description: "Small wooden or plastic skittles ~25mm × 8mm; 4 white positioned at cross ends, 1 red at cross center." },
    { name: "Cue stick", description: "Standard carom cue." },
    { name: "Chalk", description: "Applied to cue tip." },
  ],
  duration: { approximateMinutes: 45, structure: "Race to 60, 80, or 100 points; typical match 30-90 min." },
  objective: "Score more points via cannons (2 pts) and pins knocked down by target ball (white pin 2 pts, red 'castle' pin 4 pts).",
  matchStructure: "Race to target format. Player continues break while scoring legal caroms + pin knockdowns; miss or foul = opponent's turn.",

  basicRules: [
    { title: "Cannon (cue contacts opponent's cue + red)", body: "Legal shot must contact both other balls." },
    { title: "Pin knockdowns by target ball only", body: "Pins may only be knocked down by red or opponent's cue ball (NOT directly by your cue ball) to score." },
    { title: "White pin = 2 pts", body: "Each white pin knocked down = 2 pts." },
    { title: "Red 'castle' pin = 4 pts", body: "Red center pin = 4 pts (double); often the primary target for high-scoring shots." },
    { title: "Continue break while scoring", body: "Legal cannon + pin scores continue turn; miss = opponent's turn." },
    { title: "Cue ball directly hitting pin = foul", body: "Fundamental rule: cue ball may never touch pins directly." },
  ],
  advancedRules: [
    { title: "Compound shots", body: "Advanced players combine cannon + multiple pin knockdowns in single shot for 8-10+ pt strokes." },
    { title: "Kiss-back shots", body: "Ball rebounds off cushion + kiss for extended geometry into pins." },
    { title: "Pin position after shot", body: "Pins must fall completely; leaning pins don't count until fully knocked down." },
    { title: "Pin replacement after each turn", body: "All 5 pins reset at end of each inning; every player starts with fresh pin setup." },
    { title: "Cannon-only failure", body: "Cannon without pin knockdown scores 2 pts only; strong strategic play mixes both." },
  ],
  scoring: {
    summary: "Cannons 2 pts + pin knockdowns (white 2 pts, red 4 pts). Race to target.",
    winCondition: "First to 60, 80, or 100 pts wins match (event-dependent).",
    breakdown: [
      { action: "Cannon (both balls contacted)", points: "2" },
      { action: "White pin knocked (per pin)", points: "2" },
      { action: "Red castle pin knocked", points: "4" },
      { action: "Cannon + red pin + 2 white pins (compound)", points: "2 + 4 + 4 = 10" },
    ],
  },
  penalties: [
    { title: "Cue ball direct pin contact", body: "Foul — opponent's turn + potential penalty points." },
    { title: "Only 1 ball contacted (no cannon)", body: "Foul — opponent's turn." },
    { title: "Ball off table", body: "Foul + replaced." },
  ],

  positions: [
    { name: "Player 1", role: "Alternates with Player 2 on miss/foul.", count: 1 },
    { name: "Player 2", role: "Alternates with Player 1.", count: 1 },
  ],
  officiating: {
    officials: ["Referee (1)", "Scorekeeper", "Pin-reset assistant"],
    summary: "Referee judges cannons + pin knockdowns; pin-reset assistant resets between turns.",
  },

  governingBodies: [
    { name: "Federazione Italiana Biliardo Sportivo (FIBIS)", founded: 1959, headquarters: "Rome, Italy", website: "https://www.fibis.it" },
    { name: "Confederación Panamericana de Billar (CPB)", founded: 1975, headquarters: "Argentina" },
  ],
  majorCompetitions: [
    { name: "FIBIS World Championship 5-Pin", frequency: "annual", founded: 1974, region: "worldwide (Italy + Argentina + Spain + France dominant)" },
    { name: "Italian National Championship (FIBIS)", frequency: "annual", founded: 1960, region: "Italy" },
    { name: "Argentine National Championship 5-Pin", frequency: "annual", founded: 1970, region: "Argentina (~2M players)" },
    { name: "5-Pin European Championship", frequency: "biennial", founded: 1985, region: "Europe" },
  ],
  countriesPlayed: ["IT", "AR", "ES", "FR", "DE", "UY", "PY", "CL", "SM", "MT", "CH", "PE"],
  famousAthletes: [
    "Andrea Quarta (Italy — multiple FIBIS World Champion; face of 5-pin globally)",
    "Michelangelo Aniello (Italy — Serie A + World Champion multiple)",
    "Luca Ombrini (Italy — FIBIS World Champion)",
    "Carlos Krivic (Argentina — Argentine + South American champion)",
    "Fabio Cavazzana (Italy — long-career Serie A player)",
  ],
  records: [
    { title: "Most FIBIS World Championships", holder: "Andrea Quarta (Italy)", value: "Multiple 5-pin world titles; modern face of the sport", year: 2023 },
    { title: "Largest 5-pin national participation", holder: "Argentina + Italy", value: "Argentina ~2M players (via Italian immigrant billiards culture); Italy ~500K registered", year: 2023 },
    { title: "Highest single-inning score", holder: "Various", value: "Competition record ~30+ pts in single inning via chained cannon + red pin knockdowns", year: 2020 },
  ],

  variants: ["5-pin-italian-standard-race-to-100", "goriziana-9-pin-italian-variant", "5-pin-argentine-variant", "team-5-pin-serie-a"],
  relatedSports: ["goriziana", "carom-billiards", "three-cushion-billiards", "italian-boccia"],

  skills: ["pin geometry reading (5 pins × ball trajectory)", "compound-shot planning (cannon + multi-pin)", "spin control for pin approaches", "position play after pin knockdowns", "mental focus over long matches"],
  strategies: [
    { title: "Target red castle pin", body: "4 pts vs. 2 for white; every shot ideally routes to red pin if pin knockdown planned." },
    { title: "Compound scoring shots", body: "Single stroke with cannon (2) + red pin (4) + 1-2 white pins (2-4 each) = 8-12 pt strokes; watch pros build these." },
    { title: "Cannon-only when pins unavailable", body: "If pin geometry unfavorable, play safe cannon-only for 2 pts + continue break." },
    { title: "Position for red pin approach", body: "Every shot considers next; leave target ball geometry that approaches red pin from favorable angle." },
    { title: "Pin cluster reading", body: "5 pins in cross create specific geometry; visualize how target ball propagates through cluster." },
  ],

  terminology: [
    { term: "Birilli (pins)", meaning: "The 5 small skittles at table center." },
    { term: "Castello", meaning: "The red center pin worth 4 pts (double)." },
    { term: "Cannone", meaning: "Cannon shot (both balls contacted, 2 pts)." },
    { term: "Filotto", meaning: "Long straight-line shot through pins." },
    { term: "Bandierina", meaning: "Small marking flag denoting pin positions." },
    { term: "Serie A", meaning: "Italy's top pro 5-pin league." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play in Italian bar or club", body: "Italy has ~5,000 5-pin clubs + bars; Rome, Milan, Naples, Bologna all with major scenes." },
      { title: "Learn carom cannon fundamentals first", body: "Cannon is base scoring stroke; understanding cushion geometry critical." },
      { title: "Practice pin approach angles", body: "Study how target ball propagates through 5-pin cross; visualize compound shots." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete in FIBIS regional championships", body: "Italian regional pyramid feeds into national + international qualifiers." },
      { title: "Serie A pro league", body: "Italy's top 5-pin league; sponsored teams + televised finals." },
      { title: "FIBIS World Championship qualifier", body: "Via national federation quota + open qualifiers." },
    ]},
  ],

  faq: [
    { question: "How is 5-Pin different from other billiards?", answer: "5-Pin uniquely combines carom (cannon requirement — cue must hit both balls) with skittles (pin knockdowns for extra points). The cue ball may NEVER touch pins directly — pins must be knocked over by the target ball (opponent's cue or red ball). This creates a two-layer strategic depth not found in pool, snooker, or standard carom." },
    { question: "Why is 5-Pin so big in Argentina?", answer: "Italian immigrants brought 5-pin culture to Argentina in the late 1800s and early 1900s. Argentine 5-pin developed independently but retains Italian rules structure. Today ~2M Argentines play 5-pin, comparable to or exceeding Italy's ~500K registered players; Argentina + Italy contest most World Championship finals." },
    { question: "Is Goriziana the same as 5-Pin?", answer: "Goriziana (Italian 9-Pin billiards) is a related variant played on the same table but with 9 pins instead of 5, arranged in a 3×3 grid. Goriziana has similar scoring structure but different pin geometry + rules. FIBIS governs both; Goriziana is smaller but growing especially in northeastern Italy." },
  ],

  wikipediaTitle: "Five-pins billiards",
  sources: [
    { label: "FIBIS (Italy)", url: "https://www.fibis.it", publisher: "FIBIS" },
    { label: "Wikipedia — Five-pins billiards", url: "https://en.wikipedia.org/wiki/Five-pins_billiards", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

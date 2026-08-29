import type { Sport } from "@/lib/types";

export const polocrosse: Sport = {
  id: "polocrosse",
  slug: "polocrosse",
  name: "Polocrosse",
  officialName: "Polocrosse",
  aliases: ["Polo-Cross"],
  shortDescription:
    "Hybrid mounted team sport combining polo (horse riding + hitting ball) with lacrosse (netted racquet ball-carry + goal-scoring) — invented in Australia in 1938. Small horses, teams of 3, fast-paced chukkas. Popular in Australia, South Africa, UK, Zambia, USA.",
  longDescription:
    "Polocrosse is a mounted team sport combining polo + lacrosse — invented in Australia in 1938 by Marjorie + Edward Hirst as an economical alternative to polo (uses one horse per player vs. polo's multiple ponies, and smaller field). Teams of 3 (attack, center, defense) play 6 chukkas of 6-8 minutes on a field ~90m long. Each rider carries a POLOCROSSE STICK (netted racquet with cane shaft) and passes/carries/shoots a soft ball (sponge). Attack scores in opponent's goal (soccer-style upright); defense defends own goal. Only attack + defense may enter respective scoring third of field; center plays whole field. Fast-paced, physical, requires excellent horsemanship + hand-eye coordination + team play. Now practiced in ~30+ countries with strong presence in Australia, South Africa, UK, Zambia, USA, Zimbabwe, New Zealand. World Cup held every 4 years; Australia + South Africa historically dominate.",

  category: "equestrian-sports",
  subCategory: "mounted team ball sport (polo + lacrosse hybrid)",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "AU",
  regionOfOrigin: "New South Wales, Australia (invented 1938 by Marjorie + Edward Hirst near Sydney)",
  estimatedOrigin: "Invented 1938 by Marjorie + Edward Hirst as economical polo alternative; first Polocrosse Association 1939 Australia; internationalized post-WWII to South Africa (1948), UK (1990s)",

  players: { min: 6, max: 8, note: "Teams of 3 on field; typically 6 total per squad (2 halves alternate)." },
  equipment: [
    { name: "Polocrosse stick (netted racquet)", description: "Long cane shaft (~1m) with netted head; catches, carries, shoots ball." },
    { name: "Soft sponge ball", description: "Sponge rubber ball ~15cm diameter; soft to reduce injury risk." },
    { name: "Horse (any breed)", description: "One horse per player throughout match; horse must have good stamina + agility." },
    { name: "Helmet + face guard", description: "Mandatory rider protection." },
    { name: "Field (~90m × ~50m)", description: "Rectangular grass field with goal areas at each end." },
  ],
  duration: { approximateMinutes: 60, structure: "6 chukkas × 6-8 min = ~45-60 min play + rest between chukkas." },
  objective: "Score more goals than opponent by throwing/hitting sponge ball through opponent's goal (soccer-style upright).",
  matchStructure: "6 chukkas × 6-8 minutes; 3-min rest between chukkas; halftime after 3 chukkas.",

  basicRules: [
    { title: "Teams of 3: Attack (1) + Center (2) + Defense (3)", body: "Positions have restricted field areas. Attack + defense may only enter their team's scoring third." },
    { title: "Score by throwing/hitting ball through opponent goal", body: "Soccer-style goal uprights; ball must pass between + under bar (or over depending on variant)." },
    { title: "Carry, pass, catch with polocrosse stick", body: "Ball manipulated only with polocrosse stick — not hands." },
    { title: "Riding + horsemanship required", body: "Both riding skill + stick skill essential; horse handling under contest = defining challenge." },
    { title: "Position restrictions", body: "Attack (1) may only enter opponent's third of field for scoring; defense (3) may only enter own third; center (2) plays whole field." },
  ],
  advancedRules: [
    { title: "Ride-off", body: "Legal physical shoulder-to-shoulder contact between horses to knock opponent off ball; core polocrosse tactical element." },
    { title: "Illegal riding", body: "Crossing in front of opponent horse dangerously = foul; may result in penalty throw." },
    { title: "Stick check", body: "May check opponent's stick with own stick to dislodge ball." },
    { title: "Team format standardization", body: "6 players (2 sets of 3 rotating) alternate chukkas to preserve horse endurance." },
  ],
  scoring: {
    summary: "Goals scored; one goal = 1 point.",
    winCondition: "Higher score at end of match.",
    breakdown: [{ action: "Goal scored", points: "1" }],
  },
  penalties: [
    { title: "Dangerous riding", body: "Penalty throw for opposing team." },
    { title: "High stick (above shoulder in dangerous position)", body: "Free throw or penalty." },
    { title: "Position violation (attack in own defensive third or vice-versa)", body: "Turnover or free throw." },
  ],

  positions: [
    { name: "Attack (No. 1)", role: "Scoring; may only enter own team's scoring third + midfield.", count: 1 },
    { name: "Center (No. 2)", role: "Plays whole field; distributes ball between attack + defense.", count: 1 },
    { name: "Defense (No. 3)", role: "Defends own goal; may only enter own defensive third + midfield.", count: 1 },
  ],
  officiating: {
    officials: ["Referee (mounted, on horseback)", "Goal judges (2)", "Timekeeper + scorer"],
    summary: "1 mounted referee + 2 goal judges + timekeeper; mounted refereeing is unique feature.",
  },

  governingBodies: [
    { name: "International Polocrosse Council (IPC)", founded: 1974, headquarters: "rotates, various", website: "https://www.polocrosseintl.com" },
    { name: "Polocrosse Association of Australia", founded: 1939, headquarters: "Australia" },
    { name: "South African Polocrosse Association", founded: 1948, headquarters: "South Africa" },
    { name: "United Kingdom Polocrosse Association", founded: 1990, headquarters: "UK" },
  ],
  majorCompetitions: [
    { name: "Polocrosse World Cup", frequency: "quadrennial", founded: 2003, region: "rotating (Australia + South Africa + UK typical hosts)" },
    { name: "Australian National Polocrosse Championships", frequency: "annual", founded: 1949, region: "rotating Australian venues" },
    { name: "South African National Polocrosse Championship", frequency: "annual", founded: 1950, region: "rotating South African venues" },
    { name: "UK National Championships", frequency: "annual", founded: 1995, region: "United Kingdom" },
  ],
  countriesPlayed: ["AU", "ZA", "ZM", "ZW", "GB", "IE", "US", "NZ", "PG", "DE", "KE", "CA"],
  famousAthletes: [
    "Multi-generation Australian polocrosse families (Hirst descendants of inventors)",
    "South African players dominant in World Cups alongside Australians",
    "Various African polocrosse country champions",
  ],
  records: [
    { title: "Most Polocrosse World Cups", holder: "Australia + South Africa", value: "Alternate winners at World Cup (2003, 2007, 2011, 2015, 2019, 2023) — dominant nations", year: 2023 },
    { title: "Global expansion", holder: "Polocrosse", value: "From single Australian origin 1938 to 30+ nations; International Polocrosse Council governs 15+ member nations", year: 2024 },
    { title: "One-horse economic accessibility", holder: "Polocrosse", value: "One-horse-per-player rule makes polocrosse ~10× cheaper than polo (which requires 6-8 ponies per player), enabling broader participation", year: 2024 },
  ],

  variants: ["standard-3v3-6-chukka-format", "junior-youth-variant", "indoor-polocrosse-limited-variant"],
  relatedSports: ["polo", "lacrosse", "beach-polo", "arena-polo", "horseball", "cowboy-mounted-shooting"],

  skills: ["horsemanship (all riding disciplines)", "polocrosse stick skill (catch + carry + throw)", "hand-eye coordination while mounted", "team play + positioning", "ride-off physical contact", "spatial awareness of field position rules"],
  strategies: [
    { title: "Center as playmaker", body: "Center plays whole field; distributes ball between attack + defense; must be team's best rider + passer." },
    { title: "Attack goal positioning", body: "Attack player positions between defenders + goal, waiting for center's pass for one-touch shot." },
    { title: "Defense pressure + ride-off", body: "Defense uses physical ride-off to disrupt opposing attack + create turnovers." },
    { title: "Horse rotation for endurance", body: "6-player squad rotates 3-player teams between chukkas to keep horses fresh." },
  ],

  terminology: [
    { term: "Chukka", meaning: "Period of play (6-8 min); polo terminology inheritance." },
    { term: "Ride-off", meaning: "Legal shoulder-to-shoulder horse contact to knock opponent off ball." },
    { term: "Stick check", meaning: "Using own stick to disrupt opponent's stick + dislodge ball." },
    { term: "Third", meaning: "Attack third, midfield, defensive third — restricted zones by position." },
    { term: "Sponge", meaning: "The polocrosse ball — soft sponge rubber." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn horseback riding first", body: "Solid riding skills essential before adding polocrosse stick + ball." },
      { title: "Join Polocrosse Association club (Australia, South Africa, UK)", body: "Local clubs offer training + club matches." },
      { title: "Start with youth or beginner-grade tournaments", body: "Regional grades system enables progression." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at national championships", body: "Australian + South African + UK national events." },
      { title: "Represent country at World Cup", body: "Quadrennial international pinnacle." },
    ]},
  ],

  faq: [
    { question: "How is polocrosse different from polo?", answer: "Polocrosse uses a NETTED STICK (like lacrosse) to catch/carry/throw a SPONGE ball — polo uses a MALLET to hit a HARD ball. Polocrosse teams have 3 players with position restrictions; polo teams have 4 with no position restrictions. Polocrosse uses ONE horse per player throughout match; polo requires 6-8 ponies per player. Polocrosse is much more economically accessible + faster-paced but less prestigious. Polo is aristocratic tradition; polocrosse is Australian rural + emerging international sport." },
    { question: "Is polocrosse dangerous?", answer: "Physical contact + horse-based sport = inherent risk. Ride-offs (shoulder-to-shoulder horse contact) can result in falls. Helmets + face guards mandatory. Sponge ball reduces impact injury. Injury rate similar to polo — moderate for a contact horse sport." },
    { question: "How dominant are Australia + South Africa?", answer: "Both nations have won all Polocrosse World Cups (2003-2023 event history) — they alternate as dominant nations. Australia won inaugural 2003 + subsequent alternations. Emerging nations (Zimbabwe, Zambia, UK, USA) competitive but not yet World Cup winners." },
  ],

  wikipediaTitle: "Polocrosse",
  sources: [
    { label: "International Polocrosse Council", url: "https://www.polocrosseintl.com", publisher: "IPC" },
    { label: "Wikipedia — Polocrosse", url: "https://en.wikipedia.org/wiki/Polocrosse", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

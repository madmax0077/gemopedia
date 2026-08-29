import type { Sport } from "@/lib/types";

export const blindMansBuff: Sport = {
  id: "blind-mans-buff",
  slug: "blind-mans-buff",
  name: "Blind Man's Buff",
  officialName: "Blind Man's Buff (Blind Man's Bluff)",
  aliases: ["Blind Man's Bluff", "Blindman's Buff", "Mush Pot", "Copper Mosquito"],
  shortDescription:
    "Ancient blindfolded tag — one player is blindfolded, spun, and tries to catch and identify others by touch alone.",
  longDescription:
    "Blind Man's Buff is a party and playground game descended from ancient Greece — Julius Pollux (2nd century AD) records a version called 'Copper Mosquito' (χαλκῆ μυῖα, chalkē muia). It flourished through medieval Europe as a nobles' court game, became a Victorian parlour staple depicted in paintings by Fragonard and Wilkie, and survives worldwide today under dozens of local names (Buff / Bluff in English; Colin-Maillard in France; Gallina Ciega in Spain; Bäumchen wechsel dich in Germany; Zmurki in Russia). The word 'buff' comes from an archaic term for a light punch — because in earlier versions the players teased and buffeted the blindfolded seeker.",

  category: "playground-games",
  subCategory: "blindfold tag / parlour game",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "global",

  countryOfOrigin: "GR",
  regionOfOrigin: "Ancient Greece; universal European tradition since medieval times",
  estimatedOrigin: "Documented in 2nd-century Greek text 'Onomasticon' by Julius Pollux; adopted across medieval Europe",

  players: { min: 4, max: 20, note: "Best with 6–12 in a bounded indoor room or outdoor circle." },
  field: {
    surfaceName: "Living room, parlour, gymnasium, or grass circle",
    dimensions: "5–10 m diameter clear space; furniture pushed back to walls",
    description: "Any bounded space free of trip hazards. Historically played in great halls, parlours, ballrooms; today most common at children's parties and camps.",
  },
  equipment: [
    { name: "Blindfold", description: "Scarf, bandana, or cloth tied over the eyes. Must be fully opaque — cheating by peeking is the classic accusation." },
    { name: "Bounded room or circle", description: "Furniture cleared; boundaries agreed so the blindfolded player doesn't wander into hazards." },
  ],
  duration: {
    approximateMinutes: 15,
    structure: "Rounds of 2–5 minutes each; whoever gets caught (and correctly identified) is the next 'buff'.",
  },
  objective:
    "For the blindfolded player: catch another player and correctly identify them by touch alone. For the runners: dodge, tease, and avoid capture without leaving the play area.",
  matchStructure:
    "One player is chosen as 'buff', blindfolded, and spun three times in the middle of the room. Everyone else scatters. The buff gropes forward, arms outstretched; runners dodge close and tease with claps or whispered names but must not leave the boundary. When the buff catches someone, they identify the captive by touch — face, hair, clothing. Correct guess → the caught player becomes the new buff. Wrong guess → captive is released and play continues.",

  basicRules: [
    { title: "Blindfold + spin", body: "The buff is blindfolded (opaque cloth), stood in the middle, and spun 3 times to disorient. Some versions add 'Where are you?' calls to hint at direction." },
    { title: "Boundaries agreed", body: "Play area boundaries agreed before the round starts — walls, marked circle, edge of the rug. Runners who step outside are out for that round." },
    { title: "Runners must stay in area", body: "Runners dodge the buff but cannot leave the play area or hide behind furniture." },
    { title: "Catch + identify", body: "The buff catches by touch. They then feel the captive's face/hair/clothing and must name them. Some versions allow up to 3 guesses; classic play is one guess only." },
    { title: "Correct guess → swap roles", body: "Correct identification: captive becomes the new buff for the next round. Wrong guess: captive is released, buff continues." },
    { title: "No dangerous items", body: "Sharp corners, glassware, staircases removed from play area — this is a game where children run backward into things." },
  ],
  advancedRules: [
    { title: "Silent variant", body: "Runners must be silent — no giggles, taps, or whispers. Requires acute hearing from the buff." },
    { title: "Teasing variant (traditional)", body: "Runners may clap, whisper the buff's name, or tap them — increasing chaos but also risking capture." },
    { title: "Statue variant", body: "When the buff calls 'Statue!' all runners must freeze in place for 3 seconds — giving the buff a chance to locate by sound of breath." },
    { title: "Timed variant", body: "If the buff hasn't caught anyone in 3 minutes, a new buff is chosen at random." },
    { title: "Copper Mosquito (Greek original)", body: "Ancient version: buff called 'brazen fly, I shall hunt you'; runners struck buff with paper scrolls until caught." },
  ],
  scoring: {
    summary: "Not points-based. Whoever the buff correctly identifies becomes the new buff. Traditional 'first to be buff three times loses' scoring in some households.",
    winCondition: "Party-game format — game ends when players tire or the party moves on. Some scoring versions: first player to be the buff 3 times is out.",
    breakdown: [
      { action: "Buff catches + correctly identifies runner", points: "Captive becomes new buff" },
      { action: "Buff catches but misidentifies", points: "Captive released; buff continues" },
      { action: "Runner leaves boundary", points: "Runner is out that round (or becomes buff)" },
    ],
  },

  positions: [
    { name: "Buff (Blind Man)", role: "Blindfolded seeker who tries to catch and identify a runner.", count: 1 },
    { name: "Runners", role: "Non-blindfolded players who dodge, tease, and avoid capture." },
    { name: "Adult supervisor", role: "Ensures safety; often removes hazards and calls boundary violations." },
  ],
  officiating: {
    officials: ["Adult supervisor (party/camp)", "None in casual friend play"],
    summary: "Purely casual — no formal rules body, no referees. Adult supervision recommended for young children due to trip risk.",
  },

  governingBodies: [
    { name: "No official governing body — traditional folk game", founded: 0, headquarters: "n/a" },
  ],
  majorCompetitions: [
    { name: "No formal competitions — recreational party game", frequency: "n/a", founded: 0, region: "n/a" },
  ],
  countriesPlayed: ["GR", "GB", "US", "FR", "DE", "IT", "ES", "RU", "PL", "IN", "JP", "MX", "BR", "AU"],
  famousAthletes: [
    "No professional players — recreational game",
    "Depicted by Jean-Honoré Fragonard (Colin-Maillard, 1750s Rococo paintings)",
    "David Wilkie — Blind-Man's Buff (1812 oil painting, Royal Collection)",
  ],
  records: [
    { title: "Oldest documented playground game", holder: "Julius Pollux (Greek grammarian)", value: "Chalkē Muia — described 2nd century AD", year: 180 },
    { title: "Most cross-cultural spread", holder: "Global — 60+ named local variants", value: "Played in every European country + colonial descendants worldwide", year: 2020 },
  ],

  variants: ["copper-mosquito-ancient-greek", "colin-maillard-french", "gallina-ciega-spanish", "silent-buff", "statue-buff"],
  relatedSports: ["tag", "hide-and-seek", "duck-duck-goose", "sardines", "manhunt"],

  skills: [
    "spatial awareness without sight",
    "tactile identification (recognising by touch)",
    "auditory location (tracking by sound)",
    "quick dodging + evasion",
    "trust + physical courage (for the buff)",
  ],
  strategies: [
    { title: "For the buff — use hearing", body: "Sight is off; hearing becomes primary. Pause frequently to listen for breath, footsteps, whispered giggles." },
    { title: "For the buff — sweep low + high", body: "Runners often crouch to duck under outstretched arms; sweep both waist-height and floor-height." },
    { title: "For runners — stay behind, not in front", body: "Buff faces where they think you are. Circle around behind them; makes chasing hard." },
    { title: "For runners — silent breathing", body: "Hold breath when very close; the buff can hear a nervous exhale from 1m away." },
    { title: "For identification — feel hair + jewelry", body: "Distinctive features: hair length, glasses, watches, jewellery, height. Feel these before guessing." },
  ],

  terminology: [
    { term: "Buff", meaning: "The blindfolded player (from archaic 'buff' = light punch — since runners once buffeted the seeker)." },
    { term: "Spin", meaning: "The ceremonial 3 turns to disorient the buff before play starts." },
    { term: "Mush pot", meaning: "American variant name; also Duck Duck Goose's 'It' penalty area." },
    { term: "Colin-Maillard", meaning: "French name — from 10th-century Belgian knight Jean-Colin Maillard who fought blinded." },
    { term: "Chalkē Muia", meaning: "Ancient Greek name — 'Brazen Fly' — the earliest documented form." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Learn at a birthday party or camp", body: "Traditional introduction is family, school, or camp play — rules explained in 30 seconds." },
        { title: "Play in a safe, cleared room", body: "First few games with cleared furniture + adult supervision to build confidence in blindfolding." },
        { title: "Take turns being the buff", body: "Everyone should try both roles — the terror + fun of being blindfolded is half the point." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Try the silent variant", body: "Much harder — runners cannot make noise. Tests the buff's hearing skills to the limit." },
        { title: "Play in larger groups outdoors", body: "Outdoors with a bounded circle (e.g. hay bales at a fall festival) — different acoustic + tactile challenge." },
        { title: "Add the identification twist", body: "Historic version required identifying by touch — feels harder than pure tag, adds memory + social element." },
      ],
    },
  ],

  faq: [
    { question: "How old is Blind Man's Buff?", answer: "The Greek grammarian Julius Pollux described it around 180 AD as 'Copper Mosquito' (χαλκῆ μυῖα). It's one of the oldest documented playground games in Western culture, played continuously for nearly 2,000 years." },
    { question: "Is it Blind Man's 'Buff' or 'Bluff'?", answer: "Both are used — 'Buff' is the older, correct form (from archaic English 'buff' meaning a light punch or push). 'Bluff' became common in America through folk etymology. British and academic sources prefer 'Buff'; American everyday speech often says 'Bluff'." },
    { question: "Why do you spin the blindfolded player?", answer: "Three spins is traditional — it disorients the buff so they don't know which way they're facing. Modern child-safety guidance recommends only 1–2 gentle spins for young children to avoid dizziness or falls." },
    { question: "Is Blind Man's Buff safe?", answer: "For older children and adults in a cleared space, yes. Common injuries: bumping into furniture, tripping on rugs, colliding with other players. Always play in a bounded, hazard-free area; supervise young children; and stop if anyone feels unsafe." },
    { question: "What's the difference from Marco Polo?", answer: "Marco Polo is Blind Man's Buff in a swimming pool — buff calls 'Marco', runners must respond 'Polo'. The auditory-tracking mechanic is the same; the water changes movement and adds safety benefits (no hard surfaces)." },
  ],

  wikipediaTitle: "Blind man's buff",
  sources: [
    { label: "Wikipedia — Blind man's buff", url: "https://en.wikipedia.org/wiki/Blind_man%27s_buff", publisher: "Wikipedia" },
    { label: "Julius Pollux — Onomasticon (2nd c. AD)", url: "https://en.wikipedia.org/wiki/Julius_Pollux", publisher: "Public domain (Loeb translation)" },
    { label: "V&A — Fragonard's Colin-Maillard", url: "https://www.vam.ac.uk/", publisher: "Victoria & Albert Museum" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

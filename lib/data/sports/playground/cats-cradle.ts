import type { Sport } from "@/lib/types";

export const catsCradle: Sport = {
  id: "cats-cradle",
  slug: "cats-cradle",
  name: "Cat's Cradle",
  officialName: "Cat's Cradle (String Figures)",
  aliases: ["String Figures", "String Games", "Whai (Māori)", "Fanshengr (Chinese)", "Ayatori (Japanese)"],
  shortDescription:
    "The universal string-loop craft — one or two players pass a loop between fingers, transforming it into named geometric patterns (Cradle, Manger, Diamonds, Cat's Eye).",
  longDescription:
    "Cat's Cradle is the English name for a family of string-figure games found in virtually every human culture, from Inuit hunters to Māori navigators to Chinese scholars. Its origins are prehistoric — string is one of humanity's earliest tools, and figure-making appears on every inhabited continent. The two-player 'transfer' form popular in the English-speaking world (Cradle → Soldier's Bed → Candles → Manger → Diamonds → Cat's Eye → Fish in a Dish → back to Cradle) is only one branch of a vast tradition. The International String Figure Association (ISFA), founded 1978, catalogues over 3,000 documented figures from oral traditions worldwide. Cat's Cradle is UNESCO Intangible Cultural Heritage in the Māori tradition (Whai) and is played by school children on every continent.",

  category: "playground-games",
  subCategory: "string figure craft / two-player transfer game",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "global",

  countryOfOrigin: "CN",
  regionOfOrigin: "Traditional across many cultures — Chinese, Māori, Inuit, Navajo, Melanesian variants all documented",
  estimatedOrigin: "Prehistoric — string figures documented on every continent; English 'Cat's Cradle' name from 17th–18th century",

  players: { min: 1, max: 2, note: "Solo string figures (Cup and Saucer, Jacob's Ladder, Witch's Broom) or two-player transfer sequences." },
  field: {
    surfaceName: "Any tabletop or lap",
    dimensions: "About 30–40 cm working space",
    description: "Played anywhere — home, classroom, campfire, plane seat. Only requires enough room for the string loop between two pairs of hands.",
  },
  equipment: [
    { name: "String loop", description: "A single loop of string — traditional length ~1.5 m (5 ft) tied into a closed loop. Cotton, nylon, or paracord all work; softer string is easier for beginners." },
    { name: "Two pairs of hands (transfer form)", description: "Cat's Cradle transfers require two players; solo figures need just one." },
  ],
  duration: {
    approximateMinutes: 10,
    structure: "A single Cat's Cradle sequence takes 1–3 minutes; a full session of figures can go 30+ minutes.",
  },
  objective:
    "Create and name the geometric patterns of the tradition, either solo (Jacob's Ladder, Cup and Saucer, Witch's Broom) or transferred between two players (Cradle → Soldier's Bed → Candles → Manger → Diamonds → Cat's Eye → Fish in a Dish).",
  matchStructure:
    "Two players sit facing each other. Player 1 makes the opening 'Cradle' figure on their hands. Player 2 pinches specific string crossings, lifts, and pulls — the string transfers to their hands as a new figure ('Soldier's Bed'). Play alternates through the named sequence. A mis-pinch collapses the figure back to a tangle; the sequence ends and starts over.",

  basicRules: [
    { title: "One loop, tied closed", body: "A single continuous loop of string ~1.5 m long. No knots inside the loop; no cutting mid-game." },
    { title: "Opening position: Cradle", body: "Loop rests across both palms; string wraps once around each hand; middle finger of each hand hooks the opposite palm string. This is 'Cradle'." },
    { title: "Two-player transfer sequence", body: "Cradle → Soldier's Bed → Candles → Manger → Diamonds → Cat's Eye → Fish in a Dish → Hand Drum → back to Cradle. Each move has a specific pinch-and-lift pattern." },
    { title: "Solo figures", body: "Solo forms (Cup and Saucer, Jacob's Ladder, Witch's Broom, Eiffel Tower) don't need a partner — self-transferred through finger movements." },
    { title: "No shortcuts", body: "Half the game is aesthetic — figures should be clean, symmetric, and named. Sloppy pattern = lost figure, start over." },
    { title: "Failure = start over", body: "If a figure collapses mid-transfer (bad pinch, wrong finger), the sequence resets and the losing player starts again from Cradle." },
  ],
  advancedRules: [
    { title: "Regional traditions have different names", body: "The same figure has different names worldwide: 'Cradle' in English, 'Berceau' in French, 'Zhi Chuang' in Chinese, 'Ayatori' in Japanese." },
    { title: "Solo figure competitions", body: "ISFA holds informal figure-recreation competitions — players race to reconstruct a specific traditional figure from memory." },
    { title: "Storytelling variant (Inuit + Māori)", body: "Traditional cultures use string figures to illustrate stories — each figure represents a scene in the tale, transformed as the story progresses." },
    { title: "Diamonds figure — signature complexity", body: "The Diamonds figure (also called Fence or Nine Diamonds) has 4 diamond-shaped openings arranged vertically — one of the more visually striking positions." },
  ],
  scoring: {
    summary: "No formal scoring. Success = completing the sequence without collapse; failure = restart. Some school variants: first to collapse loses.",
    winCondition: "Casual play: whoever collapses the string first 'loses'. Traditional practice: no winner/loser — the goal is the beauty of the figures themselves.",
    breakdown: [
      { action: "Successful transfer to next figure", points: "Continue sequence" },
      { action: "Collapse or mis-pinch", points: "Reset from Cradle" },
      { action: "Complete full 7-figure sequence", points: "Traditional 'win' + start again" },
    ],
  },

  positions: [
    { name: "Player 1", role: "Holds the initial Cradle figure.", count: 1 },
    { name: "Player 2", role: "Executes the transfer to the next figure.", count: 1 },
    { name: "Solo player", role: "Performs single-hand string figures (Cup and Saucer, Jacob's Ladder)." },
  ],
  officiating: {
    officials: ["None — casual craft game", "Cultural elders (in traditional Māori/Inuit contexts)"],
    summary: "No formal officiation. In traditional Māori Whai and Inuit Ajarâq contexts, elders teach and verify correct figure execution.",
  },

  governingBodies: [
    { name: "International String Figure Association (ISFA)", founded: 1978, headquarters: "USA (nonprofit)", website: "https://www.isfa.org" },
  ],
  majorCompetitions: [
    { name: "No formal championships — cultural craft", frequency: "n/a", founded: 0, region: "n/a" },
    { name: "ISFA Annual Meeting (informal figure-sharing)", frequency: "annual", founded: 1978, region: "rotating US/UK/Japan" },
  ],
  countriesPlayed: ["CN", "JP", "GB", "US", "NZ", "AU", "CA", "GL", "PE", "PG", "SB", "FR", "DE", "IN"],
  famousAthletes: [
    "No professional players — cultural craft",
    "Kathleen Haddon (early 20th c. British anthropologist — documented Melanesian figures)",
    "Diamond Jenness (Canadian anthropologist — documented Inuit Ajarâq figures)",
    "Hiroshi Noguchi (Japanese ISFA president — codified hundreds of figures)",
  ],
  records: [
    { title: "Most documented string figures worldwide", holder: "ISFA archive", value: "3,000+ named figures catalogued", year: 2020 },
    { title: "Oldest photographic record", holder: "Franz Boas + colleagues", value: "1900s Northwest Coast + Inuit fieldwork", year: 1905 },
    { title: "UNESCO recognition (Māori Whai)", holder: "New Zealand / Aotearoa", value: "Whai practice recognised as Māori cultural heritage", year: 2010 },
  ],

  variants: ["chinese-fanshengr", "japanese-ayatori", "maori-whai", "inuit-ajaraq", "navajo-string-games", "solo-cup-and-saucer", "solo-jacobs-ladder"],
  relatedSports: ["hand-clap-games", "hopscotch", "jacks", "marbles", "skipping-rope"],

  skills: [
    "fine motor control + finger dexterity",
    "spatial memory (remembering transfer patterns)",
    "pattern recognition (identifying figures)",
    "hand-eye coordination",
    "patience + focus",
  ],
  strategies: [
    { title: "Practice each figure solo first", body: "Before attempting transfers, master the shape of each named figure on your own hands — you'll recognise which string to pinch." },
    { title: "Keep the loop taut", body: "Slack string tangles; keep constant tension by spreading your hands. Loosening only during the transfer motion." },
    { title: "Learn the sequence's rhythm", body: "The 7-figure sequence has a natural rhythm — Cradle-Bed-Candles-Manger takes about 15 seconds when practised. Learn it as a flow." },
    { title: "Choose your string wisely", body: "Cotton is grippier (easier for beginners); nylon is smoother (better for advanced solo figures with many crossings)." },
    { title: "Study non-Western traditions", body: "Māori Whai and Inuit Ajarâq have figures unknown to European Cat's Cradle — richer visual + narrative possibilities." },
  ],

  terminology: [
    { term: "Cradle", meaning: "The opening figure — two triangular openings between the strings; also the sequence's namesake." },
    { term: "Soldier's Bed", meaning: "Second figure — long rectangular pattern with two crossings." },
    { term: "Candles", meaning: "Third figure — four parallel vertical lines." },
    { term: "Manger", meaning: "Fourth figure — an X-cross with two side triangles." },
    { term: "Diamonds", meaning: "Fifth figure — 4 diamond-shaped openings stacked vertically." },
    { term: "Cat's Eye", meaning: "Sixth figure — central diamond flanked by two side triangles." },
    { term: "Fish in a Dish", meaning: "Seventh figure — the final named position before returning to Cradle." },
    { term: "Whai", meaning: "Māori name for string figures; associated with traditional navigation storytelling." },
    { term: "Ajarâq", meaning: "Inuit name for string figures; hundreds of documented figures depict Arctic animals." },
    { term: "Transfer", meaning: "The act of one player pinching + lifting the string off the other's hands to form a new figure." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Tie a good loop", body: "~1.5 m cotton string, tied with a square knot; test that the knot doesn't slip mid-figure." },
        { title: "Learn the Cradle opening", body: "First figure — hands facing you, string across both palms, wrap around each hand, middle finger hooks opposite palm string. 30-second learn." },
        { title: "Find a partner + do 3 transfers", body: "With a partner, run through the first 3 figures (Cradle → Soldier's Bed → Candles). Once solid, add Manger + Diamonds." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Master solo Jacob's Ladder", body: "Signature solo figure — 10-move sequence that ends in a 4-rung ladder. Impressive and portable." },
        { title: "Study international figures", body: "Māori Whai (Karere, Manu) and Inuit figures (Two Walrus, Caribou) — much richer than the Anglo-Cat's Cradle." },
        { title: "Join ISFA + contribute", body: "The International String Figure Association welcomes documentation of regional figures; publishes 'String Figure Magazine' quarterly." },
      ],
    },
  ],

  faq: [
    { question: "Why is it called Cat's Cradle?", answer: "The 'cratch cradle' (a manger for hay) was the original name — 'cratch' being an old English word for a manger. Folk etymology gradually turned 'cratch' into 'cat's' by the 18th century. The famous middle figure of the sequence — a diamond-shaped grid — does slightly resemble a hay manger." },
    { question: "How long a string do I need?", answer: "About 1.5 metres (5 feet) tied into a closed loop is standard for two-player Cat's Cradle. For solo figures like Jacob's Ladder or Cup and Saucer, 1 metre is enough. Cotton or paracord works well; avoid rubbery elastic string." },
    { question: "Are string figures the same everywhere?", answer: "No — regional traditions have wildly different figures. The Māori Whai tradition has figures depicting canoes and Polynesian gods. The Inuit Ajarâq tradition depicts Arctic animals — walruses, seals, caribou. Anglo Cat's Cradle is just one small branch of a vast global craft." },
    { question: "Is Cat's Cradle good for children?", answer: "Yes — string figures develop fine motor control, sequential memory, and cross-cultural awareness. Occupational therapists use them for hand rehabilitation. Suitable from about age 5 for the simplest solo figures; the two-player sequence needs age 7+." },
    { question: "Are there Cat's Cradle competitions?", answer: "No formal championships. The International String Figure Association (ISFA) holds annual meetings where members share and demonstrate figures but the tradition is fundamentally non-competitive — the beauty of the figures themselves is the point." },
  ],

  wikipediaTitle: "Cat's cradle",
  sources: [
    { label: "Wikipedia — Cat's cradle", url: "https://en.wikipedia.org/wiki/Cat%27s_cradle", publisher: "Wikipedia" },
    { label: "International String Figure Association", url: "https://www.isfa.org", publisher: "ISFA" },
    { label: "Māori Whai — Te Ara Encyclopedia", url: "https://teara.govt.nz/", publisher: "Te Ara" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

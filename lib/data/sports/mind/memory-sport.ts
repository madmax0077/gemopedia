import type { Sport } from "@/lib/types";

export const memorySport: Sport = {
  id: "memory-sport",
  slug: "memory-sport",
  name: "Memory Sports",
  officialName: "Competitive Memory (International Association of Memory)",
  aliases: ["Memory Sports", "Mental Athletics", "Competitive Memorization", "Memory Athletics"],
  shortDescription:
    "Competitive memorization contested at 10 standardized events — numbers, cards, images, historic dates, and names/faces — sanctioned by the International Association of Memory (IAM) with World Championships since 1991; top athletes memorize 500+ digits in 5 minutes.",
  longDescription:
    "Memory Sports is a competitive mental discipline where athletes memorize sequences of numbers, playing cards, images, historic dates, and names/faces under strict time constraints. Founded as a formal sport in 1991 by British Grand Master of Memory Tony Buzan (inventor of Mind Mapping) with the first World Memory Championships in London, it has grown to include 10 standardized disciplines across 30+ national championships worldwide. Sanctioning bodies include the International Association of Memory (IAM, founded 2016 after WMSC split) and the older World Memory Sports Council (WMSC). Top memory athletes use memory techniques dating to ancient Greek + Roman rhetoric (Method of Loci / Memory Palace) refined with modern encoding systems (PAO — Person Action Object). Current world records are stunning: 616 decimal digits memorized in 5 minutes (Ryu Song-i, DPRK, 2019); 1080 playing cards memorized in 1 hour (Ryu Song-i, 2019); 226 words memorized in 5 minutes (Simon Reinhard, DE). Prominent figures include 8× World Champion Dominic O'Brien (GB), Ben Pridmore (GB), Boris Konrad (DE), Alex Mullen (US, 3× World Champion), and Sherwin Hall + Ola Kåre Risa (Norway, brothers dominating 2020s).",

  category: "mind-sports",
  subCategory: "competitive memorization / mental athletics",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",

  countryOfOrigin: "GB",
  regionOfOrigin: "Founded 1991 London (Tony Buzan); grown globally with strong presence in UK, Germany, Sweden, Mongolia, China, USA, Nordic countries",
  estimatedOrigin: "Techniques from ancient Greek Rhetoric (Cicero, Seneca); modern sport codified 1991 with first World Memory Championships (Tony Buzan, London); IAM founded 2016",

  players: { min: 1, max: 1, note: "Individual sport; team scoring at national championships." },
  field: {
    surfaceName: "Silent competition hall with individual desks",
    dimensions: "Individual desks in a silent hall; typically 100+ competitors per event",
    description: "Standard competition setup: silent hall with individual desks; official timers; standardized card decks + printed pages for each discipline. Video-monitored to prevent cheating.",
  },
  equipment: [
    { name: "Printed material (numbers, images, dates, words)", description: "Official sheets provided; competitors also receive blank recall sheets for reproduction phase." },
    { name: "Standard playing cards (multiple decks)", description: "For card disciplines: standardized 52-card decks; up to 30+ decks in 1-hour event." },
    { name: "Headphones / earplugs", description: "Recommended (not mandatory) for concentration; block out ambient noise." },
    { name: "Timer / stopwatch (official)", description: "Standardized digital timers displayed to all competitors; some events use per-competitor timers." },
    { name: "Pen + pencil", description: "Standard writing implements for recall phase." },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "Individual events: 5 min – 1 hour memorization + separate recall period. Full championships: 2 days of events across 10 disciplines.",
  },
  objective:
    "Correctly recall the greatest quantity of memorized material within the discipline-specific time limits. Points awarded per correct answer, deductions per error.",
  matchStructure:
    "Championships consist of 10 standardized events across 2 days. Each event has: (1) MEMORIZATION phase (fixed time — 5 min, 15 min, 30 min, or 1 hour depending on discipline). (2) RECALL phase (typically double the memorization time). Points calculated per event; total across 10 events determines overall winner. National + regional championships may use subset of events.",

  basicRules: [
    { title: "10 official disciplines", body: "5-min Numbers, 15-min Numbers, 30-min Numbers, 1-hour Numbers, Speed Numbers (5min all-out), 10-min Cards, 1-hour Cards, Speed Cards (1 deck fastest), Words (15min), Names & Faces (15min), Historic Dates (5min), Binary Digits (30min)." },
    { title: "Silent memorization phase", body: "Fixed memorization time (5 min – 1 hour depending on event). Total silence in hall; any communication = DQ." },
    { title: "Recall phase", body: "Typically 2× memorization time. Write down what was memorized on official blank recall sheets. No consultation." },
    { title: "Scoring by correct answers", body: "Points per correct item; deductions per error; blanks score 0. Full row of correct = bonus." },
    { title: "Ties broken by speed", body: "If tied points, the competitor with faster completion wins (some events)." },
    { title: "10 events sum to overall score", body: "Standardized scoring formula: each event score converted to standard 0–1000 point range; sum across 10 events = overall rank." },
    { title: "Grand Master of Memory title", body: "Awarded for exceeding thresholds: memorize 1000+ random digits in 1 hour, 10 shuffled decks (520 cards) in 1 hour, single deck in under 2 minutes." },
  ],
  advancedRules: [
    { title: "Speed Cards discipline", body: "Fastest to memorize (then recall in order) a single shuffled 52-card deck. World record: 12.74 seconds memorize (Alex Mullen, 2019)." },
    { title: "Speed Numbers", body: "Memorize maximum digits in 5 minutes. Record: 616 digits (Ryu Song-i, DPRK, 2019)." },
    { title: "1-hour Numbers", body: "Memorize maximum digits in 1 hour. Record: 4,620 digits (Ryu Song-i, 2019)." },
    { title: "Historic Dates + Names/Faces", body: "5 min to memorize 30–60 date-event pairs OR 30 name-face pairs; recall the associations." },
    { title: "Binary Digits", body: "Memorize as many 1s and 0s in 30 min as possible. Requires binary → symbol encoding systems." },
    { title: "Regional variations", body: "IAM + WMSC may run slightly different event formats; both use similar 10-event structure." },
  ],
  scoring: {
    summary: "Points per event based on correct recall; converted to standard scale; sum across 10 events determines overall.",
    winCondition: "Highest total score across all 10 events wins overall championship. Individual event winners recognized separately.",
    breakdown: [
      { action: "Correct answer per item", points: "1 pt per digit / card / word / date" },
      { action: "Incorrect answer", points: "Deduction (typically -0.5 pt)" },
      { action: "Full row correct (bonus)", points: "Bonus multiplier (event-specific)" },
      { action: "Speed bonus (Speed Cards)", points: "Rank by fastest completion time" },
      { action: "Overall (10 events sum)", points: "Standardized 0-1000 per event; sum" },
    ],
  },
  penalties: [
    { title: "Any communication with others", body: "Immediate DQ." },
    { title: "Electronic device", body: "Immediate DQ. No phones, no smart watches allowed in hall." },
    { title: "Writing during memorization phase", body: "Immediate DQ; only look-and-memorize allowed." },
    { title: "Recall period overrun", body: "Recall stopped; only what was written counted." },
  ],

  positions: [
    { name: "Competitor", role: "Individual memorization performer.", count: 1 },
  ],
  officiating: {
    officials: ["IAM/WMSC-certified adjudicators", "Timekeepers", "Score verifiers", "Chief Arbiter"],
    summary: "IAM + WMSC certify arbiters. Multi-person officiating: timekeepers, adjudicators, score verifiers. Video recording of memorization phase increasingly used to detect cheating.",
  },

  governingBodies: [
    { name: "International Association of Memory (IAM)", founded: 2016, headquarters: "Sweden", website: "https://iam.memory-sports.com" },
    { name: "World Memory Sports Council (WMSC)", founded: 1991, headquarters: "UK (Tony Buzan-founded)", website: "https://worldmemorychampionships.com" },
    { name: "USA Memory Championship", founded: 1997, headquarters: "USA", website: "https://usamemorychampionship.com" },
    { name: "MSO (Mind Sports Olympiad — hosts memory events)", founded: 1997, headquarters: "UK", website: "https://mindsportsolympiad.com" },
  ],
  majorCompetitions: [
    { name: "World Memory Championship (WMSC)", frequency: "annual", founded: 1991, region: "rotating (China, UK, USA)" },
    { name: "IAM World Championship", frequency: "annual (since IAM founding)", founded: 2016, region: "rotating" },
    { name: "USA Memory Championship", frequency: "annual", founded: 1997, region: "USA (NYC typically)" },
    { name: "German Memory Championship (Gedächtnismeisterschaft)", frequency: "annual", founded: 1994, region: "Germany" },
    { name: "Extreme Memory Tournament (XMT)", frequency: "annual", founded: 2014, region: "USA (invitational)" },
  ],
  countriesPlayed: ["GB", "DE", "MN", "CN", "US", "SE", "NO", "IN", "KP", "KR", "NL", "AT", "ES", "FR", "IT"],
  famousAthletes: [
    "Dominic O'Brien (GB, 8× World Memory Champion — sport's founding legend)",
    "Alex Mullen (US, 3× World Champion 2015-2017; Speed Cards WR)",
    "Ben Pridmore (GB, 3× World Champion 2004/2008/2009)",
    "Boris Konrad (DE, multiple World records)",
    "Simon Reinhard (DE, Words WR)",
    "Ryu Song-i (DPRK/North Korea, multiple WRs including 616 Speed Numbers)",
    "Ola Kåre Risa (NO, dominant 2020s)",
    "Katie Kermode (GB, multiple World Championship medals)",
    "Nelson Dellis (US, 4× USA Memory Champion)",
    "Jonas von Essen (SE, 2× World Champion 2013 + 2014)",
    "Yanjaa Wintersoul (SE/MN, women's memory legend)",
  ],
  records: [
    { title: "Speed Numbers WR (5-min)", holder: "Ryu Song-i (DPRK)", value: "616 decimal digits memorized in 5 min", year: 2019 },
    { title: "1-hour Numbers WR", holder: "Ryu Song-i (DPRK)", value: "4,620 digits in 1 hour", year: 2019 },
    { title: "Speed Cards WR", holder: "Alex Mullen (US)", value: "12.74 seconds to memorize shuffled 52-card deck", year: 2019 },
    { title: "1-hour Cards WR", holder: "Ryu Song-i (DPRK)", value: "1,080 cards (20+ decks) in 1 hour", year: 2019 },
    { title: "Words WR (5-min)", holder: "Simon Reinhard (DE)", value: "226 random words in 5 min", year: 2019 },
    { title: "Most World Championship titles", holder: "Dominic O'Brien (GB)", value: "8 World Championships 1991-2002", year: 2002 },
  ],

  variants: ["iam-format-2016-plus", "wmsc-format-1991-2015-standard", "usa-memory-format", "xmt-invitational-format", "mmo-mind-sports-olympiad-format"],
  relatedSports: ["chess", "go-board-game", "speedcubing", "sudoku", "crossword"],

  skills: [
    "memory palace / method of loci mastery",
    "encoding system (PAO — Person Action Object)",
    "phonetic number system (Major system)",
    "visualization + creativity",
    "focus + concentration under time pressure",
    "recall accuracy",
    "endurance (multi-day championships)",
  ],
  strategies: [
    { title: "Master the Method of Loci (Memory Palace)", body: "Ancient Greek technique used by every top memory athlete. Encode information as vivid images placed at locations along a mentally-walked route. Requires 100+ well-known locations." },
    { title: "PAO (Person-Action-Object) for cards", body: "Assign every card a person + action + object; group 3 cards = 1 PAO scene. 52 cards = ~17 scenes. Speed Cards WR uses PAO systems." },
    { title: "Major System for numbers", body: "Phonetic encoding: each digit → consonant sound; digit-groups → words. 30 → 'moss' (m + s consonants). Convert numbers to images." },
    { title: "Practice with spaced repetition", body: "Daily 30-min practice > weekly 3-hour sessions. Build baseline daily; sprint before championships." },
    { title: "Chunk creatively", body: "Don't memorize individual digits — chunk into groups of 2-3-4 and encode as single images. 100 digits = 25-50 chunks." },
    { title: "Study top performer routines", body: "Alex Mullen + Ola Kåre Risa share systems on YouTube + books. Learn from best; adapt to your visual style." },
  ],

  terminology: [
    { term: "Memory Palace / Method of Loci", meaning: "Ancient technique of placing memorized images at mental locations along a walked route." },
    { term: "PAO", meaning: "Person-Action-Object encoding — 3 cards or 6 digits = 1 encoded scene." },
    { term: "Major System", meaning: "Phonetic system converting digits to consonant sounds, then words + images." },
    { term: "Grand Master of Memory (GMM)", meaning: "Title for exceeding 3 threshold events: 1000 digits/hour, 10 decks/hour, deck in <2 min." },
    { term: "IAM", meaning: "International Association of Memory (founded 2016)." },
    { term: "WMSC", meaning: "World Memory Sports Council (founded 1991 by Tony Buzan)." },
    { term: "Speed Cards", meaning: "Discipline: fastest to memorize + correctly recall a shuffled 52-card deck." },
    { term: "Names + Faces", meaning: "Discipline: memorize name-face pairs in 15 min; recall associations." },
    { term: "Historic Dates", meaning: "Discipline: memorize event-date pairs in 5 min; recall correctly." },
    { term: "Binary Digits", meaning: "Discipline: memorize 1s + 0s in 30 min; recall in order." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Read 'Moonwalking with Einstein'", body: "Joshua Foer's memoir (2011) — an accessible entry into memory sports; documents Foer's journey to USA Memory Championship title." },
        { title: "Build first Memory Palace", body: "Choose 20 locations along a familiar route (home, workplace, walking path). Practice placing images at each location; recall in order." },
        { title: "Learn Major System basics", body: "Convert 0–99 into phonetic-based images. Foundation for all number memory." },
      ],
    },
    {
      level: "intermediate",
      steps: [
        { title: "Compete at national championship", body: "USA Memory Championship (NYC annually), German Championship, UK Championship — entry-level tournaments open to beginners." },
        { title: "Master PAO for cards", body: "Assign every card a Person + Action + Object; practice card memorization daily." },
        { title: "Achieve Memory Master milestones", body: "Memorize 500+ digits in 30 min, one deck in under 5 min — intermediate-tier accomplishments." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Earn Grand Master of Memory title", body: "3 milestones: 1000 digits/hour, 10 decks/hour, deck in <2 min. Top ~200 athletes worldwide have GMM." },
        { title: "Compete at IAM/WMSC World Championships", body: "Annual events in China, UK, USA. Qualification via national ranking or open registration." },
        { title: "Study Ryu Song-i + Alex Mullen techniques", body: "Current top-tier record holders share technique details in interviews + books. Elite-level insight." },
      ],
    },
  ],

  faq: [
    { question: "What is Memory Sports?", answer: "A competitive discipline where athletes memorize sequences of numbers, playing cards, images, historic dates, and names/faces under strict time limits (5 min to 1 hour). Founded formally 1991 with the first World Memory Championships in London by Tony Buzan. Currently sanctioned by the International Association of Memory (IAM, founded 2016) and the older World Memory Sports Council (WMSC). 10 standardized events; 30+ national championships worldwide." },
    { question: "How do memory athletes memorize so much?", answer: "Technique — not innate ability. Every top memory athlete uses: (1) MEMORY PALACE (Method of Loci) — placing images at mental locations along a walked route. (2) PAO encoding — Person-Action-Object system converting cards/numbers into vivid scenes. (3) Major System — phonetic conversion of numbers to words/images. Practiced daily for years. Athletes' underlying memory is often average; the SYSTEMS transform performance. Joshua Foer's 'Moonwalking with Einstein' documents this — an ordinary journalist became USA Memory Champion in 1 year of training." },
    { question: "What are the world records?", answer: "Extraordinary: (1) 616 decimal digits memorized in 5 minutes (Ryu Song-i, DPRK, 2019). (2) 4,620 digits in 1 hour (Ryu Song-i). (3) 12.74 seconds to memorize a shuffled 52-card deck (Alex Mullen, US, 2019). (4) 1,080 playing cards (20+ decks) memorized in 1 hour (Ryu Song-i). (5) 226 random words in 5 minutes (Simon Reinhard, DE). These are 100–1000× normal human capacity — achievable only through advanced techniques." },
    { question: "Who is the greatest memory athlete?", answer: "Contested: (1) Dominic O'Brien (GB) — 8× World Champion 1991–2002, sport's founding legend + author. (2) Alex Mullen (US) — 3× World Champion 2015–2017; Speed Cards WR. (3) Ryu Song-i (DPRK/North Korea) — holds multiple WRs including 616-digit + 4620-digit + 1080-card records. Modern era: Ryu Song-i is dominant. All-time: Dominic O'Brien for founding influence + longevity. Grand Master of Memory title held by ~200 athletes worldwide." },
    { question: "Can anyone learn memory techniques?", answer: "Yes — extensively documented that ordinary people can achieve Memory Master (~200 digits/5min) with 6 months of consistent training. Grand Master of Memory (1000 digits/hour) typically requires 2–4 years dedicated practice. Elite World Championship level (~500+ digits/5min) requires 5–10 years. Investment: 30 min daily practice minimum; systematic technique study; competitive practice." },
    { question: "Is Memory Sports in the Olympics?", answer: "No. Not IOC-recognized. Contested at World Championships (annual), IAM + WMSC events, and the Mind Sports Olympiad (annual UK event alongside chess + Go). IAM has pursued IOC recognition without success — the sport remains niche + specialty. Continued growth may bring wider recognition." },
  ],

  wikipediaTitle: "Memory sport",
  sources: [
    { label: "International Association of Memory (IAM)", url: "https://iam.memory-sports.com", publisher: "IAM" },
    { label: "World Memory Sports Council (WMSC)", url: "https://worldmemorychampionships.com", publisher: "WMSC" },
    { label: "Wikipedia — Memory sport", url: "https://en.wikipedia.org/wiki/Memory_sport", publisher: "Wikipedia" },
    { label: "Joshua Foer — 'Moonwalking with Einstein' (2011)", publisher: "Penguin Press" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

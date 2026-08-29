import type { Sport } from "@/lib/types";

export const chidaoba: Sport = {
  id: "chidaoba",
  slug: "chidaoba",
  name: "Chidaoba",
  officialName: "Chidaoba (ჩიდაობა) — Georgian National Wrestling",
  aliases: ["Georgian Wrestling", "ჩიდაობა", "Chidaoba Wrestling"],
  shortDescription:
    "Georgia's national wrestling — a 3,000-year-old standing jacket-wrestling style performed to zurna+doli folk music; UNESCO Intangible Cultural Heritage 2018; ancestor of modern judo throws and Georgian sambo dominance.",
  longDescription:
    "Chidaoba (ჩიდაობა) is the national wrestling of Georgia — a 3,000-year-old cultural tradition documented since the Bronze Age and continuously practiced. UNESCO recognized Chidaoba as Intangible Cultural Heritage of Humanity in 2018. Wrestlers wear a chokha-style short jacket (ჩოხა), bare feet, and short trousers; matches are performed IN a musical circle to the sound of the zurna (double-reed horn) and doli (frame drum) — the music dictates rhythm and adds ceremonial weight. All throws must be from standing; the moment a wrestler touches the mat, the match resets. There is NO ground work. Georgian wrestlers who train Chidaoba have historically dominated at Olympic freestyle wrestling, judo, and combat sambo — Georgia is a per-capita wrestling superpower with more Olympic wrestling + judo medals per million than any country. Legendary Chidaoba masters include Vakhtang 'Buba' Balavadze (5× Soviet freestyle wrestling champion + Chidaoba grandmaster), Iason Tarielashvili (traditional master), and modern figures like Varlam Liparteliani (Olympic judo silver 2016) who trained Chidaoba as a foundational base.",

  category: "combat-sports",
  subCategory: "Georgian national wrestling — jacket + standing",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "regional",

  countryOfOrigin: "GE",
  regionOfOrigin: "Georgia (national sport across all regions); UNESCO Intangible Cultural Heritage 2018",
  estimatedOrigin: "Bronze Age Caucasus (3000+ years documented); continuous cultural practice; UNESCO recognition 2018",

  players: { min: 2, max: 2, note: "1v1; team competitions at national + regional festivals." },
  field: {
    surfaceName: "Grass circle, sand circle, or gymnasium mat",
    dimensions: "Traditional: 6–8 m diameter circle; modern competition: 8 m padded mat area",
    description: "Traditionally an outdoor grass or sand circle at village festivals. Modern competition + championships on standard wrestling mats. Musicians (zurna + doli) sit at the circle edge.",
  },
  equipment: [
    { name: "Chokha (jacket)", description: "Traditional Georgian short jacket (dark colored); belted at waist; a key gripping point. Historically felt/wool; modern events use canvas." },
    { name: "Chidaobiskha shalvari (trousers)", description: "Short traditional trousers reaching just below the knee; allow leg attacks in traditional variants." },
    { name: "Bare feet", description: "No shoes — traditional; direct foot contact with grass, sand, or mat." },
    { name: "Zurna (musical instrument)", description: "Traditional double-reed horn played during match — dictates rhythm + adds ceremony." },
    { name: "Doli (musical instrument)", description: "Traditional frame drum played alongside zurna — the driving pulse of Chidaoba matches." },
  ],
  duration: {
    approximateMinutes: 5,
    structure: "Traditional match: continues until decisive throw. Modern rules: 3–5 min with sudden-death overtime.",
  },
  objective:
    "Throw opponent onto their back with speed + amplitude — a clean 'chidobis' throw ends the match instantly. Standing wrestling only; touching the mat with anything except feet resets the position.",
  matchStructure:
    "Match begins with wrestlers bowing to the elders + musicians. Zurna + doli begin playing (music defines pace). Wrestlers grip each other's chokha jackets + attempt throws. Match ends when: one wrestler achieves a decisive back-landing throw ('chidobis'), OR time expires in modern events (higher score wins), OR one wrestler cannot continue.",

  basicRules: [
    { title: "Standing only — no ground fighting", body: "Once any wrestler touches the mat with a body part other than feet, referee resets the position. No ground grappling, no submissions." },
    { title: "Jacket + trouser grip", body: "Wrestlers grip the chokha (jacket) + short trousers. Grip on skin considered improper." },
    { title: "Clean back landing wins", body: "Throw that lands opponent flat on back = 'chidobis' = instant win (like ippon)." },
    { title: "Music dictates pace", body: "Zurna + doli musicians play during match. Traditional rhythm accelerates action; slower phases allow tactical positioning." },
    { title: "No striking, no submissions", body: "Pure throwing wrestling. Strikes, chokes, joint locks all prohibited." },
    { title: "Leg attacks legal (limited)", body: "Some leg trips + sweeps allowed (unlike Greco-Roman); differs from Uzbek Kurash which prohibits legs." },
    { title: "Bow to elders + musicians", body: "Ceremonial start + finish; respect for tradition + performers." },
  ],
  advancedRules: [
    { title: "Chidobis (perfect throw)", body: "Wrestler thrown flat on back = instant win. Requires both shoulders on ground + hips + head touching simultaneously." },
    { title: "Nakhevari chidobis (half-throw)", body: "Opponent lands on side; partial score. Modern events: 2 pts." },
    { title: "Bolo (waist throw)", body: "Signature Chidaoba throw — over-the-hip via belt grip. Georgian equivalent of judo's uchi-mata / harai-goshi family." },
    { title: "Chokhas dachidoba (jacket-wrestling grip)", body: "Distinctive Georgian grip — one hand on collar, one on belt or opposite lapel." },
    { title: "Regional variants", body: "Different Georgian regions have distinct Chidaoba variants: Kartli style, Kakheti style, Guria style — subtle grip + throw preferences." },
    { title: "Modern regulated variant", body: "Modern Chidaoba Federation events use standardized rules with time limits + scoring; traditional village matches retain older rhythm-based format." },
  ],
  scoring: {
    summary: "Chidobis (flat-back throw) = instant win. Modern events add partial-throw scoring for decision if no clean chidobis.",
    winCondition: "Chidobis (flat-back throw) instantly wins. Modern time-based events: highest score at time.",
    breakdown: [
      { action: "Chidobis (flat-back throw)", points: "Automatic win (ippon)" },
      { action: "Nakhevari chidobis (opponent on side)", points: "2 pts" },
      { action: "Small throw / partial fall", points: "1 pt" },
      { action: "Passivity + evasion penalty", points: "1 pt to opponent" },
    ],
  },
  penalties: [
    { title: "Grabbing skin (not jacket)", body: "Warning first; point deduction if repeated." },
    { title: "Excessive passivity", body: "Point deduction; forced re-engagement." },
    { title: "Falling on top of opponent dangerously", body: "Warning; DQ if intentional." },
    { title: "Unsporting behavior (disrespect to elders / musicians)", body: "Warning; DQ possible for serious breaches." },
  ],

  positions: [
    { name: "Wrestler (2)", role: "The combatants in the circle.", count: 1 },
    { name: "Referee (traditional 'moudge')", role: "Village elder or trained official; controls action + calls throws." },
    { name: "Musicians (zurna + doli)", role: "Play throughout match; their rhythm dictates pace + adds ceremony.", count: 2 },
    { name: "Elders (traditional)", role: "Village elders witness + validate — cultural authority of the event." },
  ],
  officiating: {
    officials: ["1 Referee ('moudge')", "1–2 Corner judges (modern)", "Musicians (as unofficial pace-keepers)", "Elders (traditional witnesses)"],
    summary: "Traditional Chidaoba officiated by village elders; modern Chidaoba Federation events use standardized 3-official model. Musicians retain traditional pace-setting role even in modern events.",
  },

  governingBodies: [
    { name: "Georgian Chidaoba Federation", founded: 1998, headquarters: "Tbilisi, Georgia" },
    { name: "UNESCO (recognized as Intangible Heritage)", founded: 1945, headquarters: "Paris, France", website: "https://ich.unesco.org/en/RL/chidaoba-wrestling-in-georgia-01371" },
  ],
  majorCompetitions: [
    { name: "Georgian National Chidaoba Championships", frequency: "annual", founded: 1998, region: "Tbilisi, Georgia" },
    { name: "Regional Village Festivals (traditional)", frequency: "seasonal (harvests, weddings)", founded: 1500, region: "Georgian villages nationwide" },
    { name: "International Georgian Diaspora Chidaoba Events", frequency: "occasional", founded: 2005, region: "Georgian communities worldwide (USA, Israel, Russia)" },
  ],
  countriesPlayed: ["GE", "RU", "IL", "US", "TR", "AM", "AZ"],
  famousAthletes: [
    "Vakhtang 'Buba' Balavadze (GE, 5× Soviet freestyle wrestling champion + Chidaoba grandmaster)",
    "Iason Tarielashvili (GE, traditional Chidaoba master + national instructor)",
    "Levan Tediashvili (GE, 2× Olympic wrestling gold + Chidaoba practitioner)",
    "Varlam Liparteliani (GE, Olympic judo silver 2016; Chidaoba-trained)",
    "Zurab Zviadauri (GE, Olympic judo gold 2004; Chidaoba lineage)",
    "Guram Tushishvili (GE, current heavyweight judo star)",
  ],
  records: [
    { title: "UNESCO Intangible Cultural Heritage recognition", holder: "Georgia", value: "Chidaoba added to Representative List 2018", year: 2018 },
    { title: "Bronze Age documentation", holder: "Georgian archaeology + historic texts", value: "3,000+ year continuous cultural practice", year: 1000 },
    { title: "Georgian per-capita wrestling dominance", holder: "Georgia national teams", value: "Highest Olympic wrestling + judo medal count per million people", year: 2020 },
    { title: "Vakhtang Balavadze mastery", holder: "Vakhtang Balavadze", value: "5× Soviet freestyle wrestling champion + Chidaoba grandmaster; sport's modern icon", year: 1960 },
  ],

  variants: ["chidaoba-classic-village", "chidaoba-modern-federation", "kartli-style", "kakheti-style", "guria-style"],
  relatedSports: ["freestyle-wrestling", "judo", "sambo", "sumo", "kurash"],

  skills: [
    "chokha grip + upper-body strength",
    "hip throws (bolo)",
    "leg trips + sweeps",
    "musicality (matching rhythm to action)",
    "explosive off-balance timing",
    "endurance + composure under public performance",
  ],
  strategies: [
    { title: "Master the chokha grip", body: "Every Chidaoba throw starts from jacket grip. Superior gripping = superior wrestler. Fight for dominant collar + belt position." },
    { title: "Follow the music", body: "Doli drum rhythm dictates when to explode; wrestlers who synchronize with music find natural momentum peaks for attacks." },
    { title: "Bolo — the signature", body: "Belt-driven over-the-hip throw. Master this; it's Georgia's Olympic-champion-maker (Levan Tediashvili, Zurab Zviadauri won gold via bolo variants)." },
    { title: "Leg trips as setup", body: "Use leg trips to weight-shift opponent; then explosive hip throw for finish." },
    { title: "Public performance composure", body: "Chidaoba is watched by whole village + elders + musicians. Composure under scrutiny distinguishes champions." },
    { title: "Cross-train sambo + judo", body: "Georgian wrestlers cross-train Chidaoba + freestyle + judo + sambo — synergies across styles produce world-class multi-discipline athletes." },
  ],

  terminology: [
    { term: "Chidaoba (ჩიდაობა)", meaning: "The name — Georgian for 'wrestling'." },
    { term: "Chidobis", meaning: "Perfect throw on back — instant win (like ippon)." },
    { term: "Nakhevari chidobis", meaning: "'Half-throw' — opponent lands on side; partial score." },
    { term: "Bolo", meaning: "Signature waist throw — over-the-hip via belt grip." },
    { term: "Chokha (ჩოხა)", meaning: "Traditional Georgian short jacket worn in Chidaoba." },
    { term: "Zurna", meaning: "Traditional double-reed horn played during matches." },
    { term: "Doli", meaning: "Traditional frame drum played during matches." },
    { term: "Moudge", meaning: "Referee — traditionally a village elder or master." },
    { term: "Chidaobiskha shalvari", meaning: "Traditional short trousers worn in Chidaoba." },
    { term: "UNESCO ICH", meaning: "UNESCO Intangible Cultural Heritage — recognition Chidaoba received 2018." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Visit Georgia + attend village festival", body: "Best introduction: attend a rural Georgian wedding or Chidaoba tournament. Visceral cultural experience." },
        { title: "Find a Tbilisi-affiliated dojo", body: "Georgian Chidaoba Federation has training centers in Tbilisi + regional cities. Increasingly welcoming international students." },
        { title: "Cross-train freestyle wrestling", body: "Chidaoba's technical base overlaps heavily with Olympic freestyle wrestling. Most Chidaoba wrestlers also train freestyle." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Compete at Georgian National Championships", body: "Open to Chidaoba Federation members + qualified international competitors." },
        { title: "Learn the musical + ceremonial aspects", body: "Chidaoba is as much cultural performance as competition. Understanding zurna + doli rhythm + elder respect is essential to mastery." },
        { title: "Cross-train judo + sambo + freestyle", body: "Georgian wrestlers dominate Olympic + world levels because they train ALL wrestling styles. Chidaoba as base + freestyle/judo/sambo for international competition." },
      ],
    },
  ],

  faq: [
    { question: "What is Chidaoba?", answer: "Chidaoba (ჩიდაობა) is the national wrestling of Georgia — a 3,000-year-old cultural tradition. Standing wrestling with jacket + belt grips, performed to traditional zurna + doli music. UNESCO added Chidaoba to its Intangible Cultural Heritage list in 2018. Different from Uzbek Kurash (which forbids leg attacks) in that Chidaoba permits some leg trips + sweeps." },
    { question: "How old is Chidaoba?", answer: "3,000+ years. Archaeological + historical evidence documents wrestling in the Caucasus region since the Bronze Age. Chidaoba as a codified cultural practice has continuous history from at least the medieval period, likely older. UNESCO recognition in 2018 formally acknowledged this heritage." },
    { question: "Why is music part of Chidaoba?", answer: "Zurna (double-reed horn) + doli (frame drum) accompany all traditional Chidaoba matches. The music dictates rhythm — accelerating during action, slowing during positioning — and adds ceremonial weight. Wrestlers synchronize their attacks with musical peaks. It transforms wrestling from purely athletic competition into cultural performance." },
    { question: "How does Chidaoba compare to Olympic wrestling?", answer: "Chidaoba is standing-only (no ground work) with jacket grips — closer to judo than Olympic freestyle wrestling. Georgian wrestlers who train Chidaoba have dominated Olympic freestyle wrestling AND judo — the standing throws + hip explosions transfer perfectly. Georgia has more Olympic wrestling + judo medals per capita than any country, largely due to Chidaoba's foundational training." },
    { question: "Is Chidaoba in the Olympics?", answer: "No — but Chidaoba wrestlers dominate Olympic freestyle wrestling + judo + sambo. Levan Tediashvili (2 Olympic wrestling golds), Zurab Zviadauri (Olympic judo gold 2004), Varlam Liparteliani (Olympic judo silver 2016) all had Chidaoba backgrounds. Chidaoba itself is not Olympic — it's a cultural sport preserved specifically for its heritage value." },
    { question: "Can foreigners learn Chidaoba?", answer: "Yes, and increasingly welcomed. The Georgian Chidaoba Federation actively promotes the sport internationally following UNESCO recognition. Training centers in Tbilisi accept international students. Georgian diaspora communities in Russia, Israel, and USA maintain small Chidaoba clubs. Best learning path: visit Georgia, attend a village festival, then find a formal training center in Tbilisi." },
  ],

  wikipediaTitle: "Chidaoba",
  sources: [
    { label: "UNESCO — Chidaoba wrestling in Georgia", url: "https://ich.unesco.org/en/RL/chidaoba-wrestling-in-georgia-01371", publisher: "UNESCO" },
    { label: "Wikipedia — Chidaoba", url: "https://en.wikipedia.org/wiki/Chidaoba", publisher: "Wikipedia" },
    { label: "Georgian Chidaoba Federation", publisher: "Georgian NOC + Ministry of Sport" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

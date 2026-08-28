import type { Sport } from "@/lib/types";

export const glima: Sport = {
  id: "glima",
  slug: "glima",
  name: "Glíma",
  officialName: "Glíma (Icelandic wrestling)",
  aliases: ["Icelandic wrestling", "Viking wrestling", "Brókartök glíma"],
  shortDescription:
    "ANCIENT NORDIC (primarily ICELANDIC) folk wrestling with unbroken lineage back to VIKING AGE (~9-10th c CE) — mentioned in Icelandic sagas + LANDNÁMABÓK. Two wrestlers grip each other's LEATHER BELT + THIGH STRAPS (BROKARTÖK — trouser grips) + rotate CLOCKWISE stepping in a circular dance while attempting THROWS/TRIPS (BRÖGð — 8 traditional). First person whose BODY ABOVE KNEE TOUCHES GROUND loses. Emphasizes UPRIGHT POSTURE + DRENGSKAPUR (honorable conduct). National sport of ICELAND; governed by GLÍMUSAMBAND ÍSLANDS (Icelandic Glíma Federation, 1916). Variants include LAUSATÖK (freegrip, more combative) + HRYGGSPENNA (back-hold).",
  longDescription:
    "GLÍMA is Iceland's NATIONAL FOLK WRESTLING with an unbroken tradition traceable to the VIKING AGE (~9-10th century CE) — referenced in the Icelandic SAGAS, EDDAS + Landnámabók. It arrived with the Norse settlers who colonized Iceland from AD 874; while related wrestling styles existed across Scandinavia (Norwegian LAUS), only Iceland preserved a continuous, codified tradition. THREE MAIN VARIANTS: (1) BROKARTÖK GLÍMA (trouser-grip glíma) — the SPORTIFIED / competitive form; wrestlers wear a LEATHER BELT around the waist + TWO THIGH STRAPS; opponents grip these fixed handles + attempt throws while ROTATING CLOCKWISE ('STÍGANDINN' — the step) in a distinctive circular dance; UPRIGHT POSTURE mandatory (no bending forward); first competitor whose BODY (above the knee, i.e. elbow, back, hip) TOUCHES THE GROUND loses. (2) LAUSATÖK ('LOOSE-GRIP') — more combative unrestricted version, historically used for self-defense; allows grabbing anywhere; can include leg trips + minor throws. (3) HRYGGSPENNA ('BACK-HOLD') — Nordic-style back-hold wrestling where both grip around opponent's torso from behind + attempt to throw. TRADITIONAL 8 THROWS (BRÖGÐ): KLOFBRAGÐ (crotch throw), HÆLKRÓKUR (heel hook trip), LEGGJARBRAGÐ (leg lock), SNIÐGLÍMA (crossbuttock), HNÉKROSSBRAGÐ, HÁLSBRAGÐ, INNRI HÆLKRÓKUR, YTRI HÆLKRÓKUR. ETHICAL CODE: DRENGSKAPUR ('honorable conduct') — no strikes, no attempts to injure, respect for opponent; historically a HERO'S SPORT associated with Icelandic identity + kings (King Magnus III, King Olaf II were wrestlers). MODERN GLÍMA: Governed by GLÍMUSAMBAND ÍSLANDS (GLÍ — Icelandic Glíma Federation) founded 1916; annual GRETTIS BELT contest (dating from 1906) awards Iceland's top glíma champion; women's ÍSLANDSGLÍMAN + junior competitions. INCLUDED in Iceland's national sports curriculum. GROWING internationally with clubs in Nordic countries + North America (Icelandic diaspora). Featured in Icelandic literature + occasionally in film. RELATED to but distinct from other Nordic folk wrestling: Norwegian LAUS, Faroese GLIMA, Danish BAJERSK BRYDNING.",
  category: "traditional-cultural-sports",
  subCategory: "folk wrestling / Nordic / Viking-era / Icelandic national",
  sportType: "individual",
  indoorOutdoor: "both",
  isProfessional: false,
  season: "year-round",
  era: "medieval",
  popularity: "regional",
  countryOfOrigin: "IS",
  regionOfOrigin: "Iceland (also Norway, Faroe Islands, Norse diaspora)",
  estimatedOrigin: "~9-10th century CE (Viking Age); codified competition since late 19th c",
  players: { min: 2, max: 2, note: "1v1 individual bouts; team competitions score wins per team." },
  field: {
    surfaceName: "Mat or grass circle",
    dimensions: "7-9 m diameter circular mat (indoor) or grass field",
    description: "Padded mat for modern sport; historically grass, sand, or turf.",
  },
  equipment: [
    { name: "Glímubelti — leather waist belt", description: "Main grip point around waist" },
    { name: "Two leather thigh straps", description: "Fixed additional grip points on each leg" },
    { name: "Traditional or modern athletic clothing", description: "Loose trousers + shirt" },
    { name: "Wrestling shoes or barefoot", description: "Depending on venue" },
  ],
  duration: { approximateMinutes: 3, structure: "Bouts typically 2-5 minutes; sudden-throw endings common." },
  objective: "Throw opponent so their body above the knee touches the ground first — while maintaining upright posture + honorable conduct.",
  basicRules: [
    { title: "Grip leather belt + thigh straps only (Brokartök)", body: "Fixed grip; hands cannot leave." },
    { title: "Rotate clockwise in the Stígandinn dance", body: "Continuous circular stepping." },
    { title: "Maintain upright posture — no bending forward", body: "Signature of glíma." },
    { title: "First body-above-knee ground contact loses", body: "Foot/lower leg touching = no loss." },
    { title: "No strikes, no chokes, no joint locks", body: "Throws + trips only." },
    { title: "Drengskapur — honorable conduct required", body: "Deliberate injury = disqualification." },
  ],
  scoring: {
    summary: "Best of 1 fall per bout; competitions use round-robin or knockout for overall champion.",
    breakdown: [
      { action: "Clean throw (body above knee touches ground)", points: "Bout won" },
      { action: "Simultaneous fall / disputed", points: "Referee decision or restart" },
      { action: "Illegal grip or dishonorable conduct", points: "Warning / disqualification" },
      { action: "Grettis Belt (Iceland's top annual title)", points: "Overall tournament winner" },
    ],
    winCondition: "First clean throw of opponent's body-above-knee to ground.",
  },
  governingBodies: [
    { name: "Glímusamband Íslands (GLÍ)", founded: 1916, headquarters: "Reykjavík, Iceland" },
    { name: "International Glíma Association (IGA)", founded: 2007, headquarters: "Iceland" },
  ],
  majorCompetitions: [
    { name: "Grettis Belt (Grettisbeltið)", frequency: "annual", founded: 1906, region: "Iceland" },
    { name: "Íslandsglíman (Icelandic Championships)", frequency: "annual", founded: 1906, region: "Iceland" },
    { name: "Freyjumen (women's championship)", frequency: "annual", founded: 1996, region: "Iceland" },
    { name: "World Glíma Championships", frequency: "biennial", founded: 2008, region: "Global" },
  ],
  countriesPlayed: ["IS", "NO", "SE", "DK", "FO", "US", "CA", "DE", "GB"],
  famousAthletes: [
    "Jóhannes Jósefsson (1883-1968) — Legendary early 20th c champion + strongman",
    "Sigtryggur Sigurðsson — 5x Grettis Belt winner",
    "Pétur Yngvason — Modern multi-time champion",
    "Ingibergur Sigurðsson — Champion + coach",
  ],
  variants: [
    "brokartok-glima-trouser-grip-sport-form",
    "lausatok-loose-grip-combative-self-defense",
    "hryggspenna-back-hold-nordic-style",
    "hafnfirsk-glima-hafnarfjordur-variant",
  ],
  relatedSports: ["schwingen", "sumo", "freestyle-wrestling", "senegalese-wrestling", "judo", "kabaddi"],
  skills: ["belt/strap grip control", "circular footwork (Stígandinn)", "upright balance", "trip + throw execution", "reading opponent's shifts"],
  strategies: [
    { title: "Control the pace of the Stígandinn", body: "Rhythm dictates initiative." },
    { title: "Set up trips with the rotation direction", body: "Clockwise circle enables specific throws." },
    { title: "Stay tall — never bend forward", body: "Both a rule and a tactical safety measure." },
    { title: "Master the 8 traditional bragð", body: "Foundation of competitive glíma." },
  ],
  terminology: [
    { term: "Glíma", meaning: "Icelandic 'wrestle/glide' — the sport itself." },
    { term: "Brokartök", meaning: "Trouser-grip — the sport form." },
    { term: "Lausatök", meaning: "Loose-grip — combative form." },
    { term: "Stígandinn", meaning: "The step — the clockwise rotation." },
    { term: "Bragð (pl. Brögð)", meaning: "Throw / trick — the traditional techniques." },
    { term: "Drengskapur", meaning: "Honorable conduct — ethical code." },
    { term: "Grettisbeltið", meaning: "Grettis Belt — top annual prize." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Find a GLÍ-affiliated club or Icelandic diaspora group", body: "Rare outside Iceland." },
      { title: "Learn the belt grip + Stígandinn footwork", body: "Foundation before throws." },
    ]},
    { level: "intermediate", steps: [
      { title: "Master the 8 traditional bragð", body: "Core throw curriculum." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at Íslandsglíman or Grettis Belt", body: "National-level pathway." },
    ]},
  ],
  faq: [
    { question: "What is Glíma?", answer: "ANCIENT NORDIC (primarily ICELANDIC) folk wrestling with unbroken lineage back to VIKING AGE (~9-10th c CE). Two wrestlers grip each other's LEATHER BELT + THIGH STRAPS + rotate CLOCKWISE stepping in a circular dance while attempting THROWS/TRIPS. First person whose BODY ABOVE KNEE TOUCHES GROUND loses. Emphasizes UPRIGHT POSTURE + DRENGSKAPUR (honorable conduct). National sport of ICELAND; governed by GLÍMUSAMBAND ÍSLANDS since 1916. Variants: BROKARTÖK (sport), LAUSATÖK (combative), HRYGGSPENNA (back-hold)." },
    { question: "Glíma vs Sumo vs Freestyle Wrestling?", answer: "GLÍMA emphasizes UPRIGHT POSTURE + fixed BELT/STRAP grips + CIRCULAR STEPPING; body-above-knee touches ground = loss. SUMO uses circle ring + push-out or non-sole ground touch. FREESTYLE WRESTLING has open grips + pin-focused with points. Glíma is unique for its dance-like rotation + honor code." },
  ],
  wikipediaTitle: "Glíma",
  sources: [
    { label: "Glímusamband Íslands", url: "https://www.glima.is/", publisher: "GLÍ" },
    { label: "Wikipedia — Glíma", url: "https://en.wikipedia.org/wiki/Gl%C3%ADma", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-28",
  confidence: "verified",
};

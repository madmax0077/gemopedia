import type { Sport } from "@/lib/types";

export const catchWrestling: Sport = {
  id: "catch-wrestling",
  slug: "catch-wrestling",
  name: "Catch Wrestling",
  officialName: "Catch-As-Catch-Can Wrestling",
  aliases: ["Catch-as-Catch-Can", "CACC", "Lancashire Wrestling", "Hooker Style", "Snake Pit Wrestling"],
  shortDescription:
    "The rough British wrestling style that gave rise to professional wrestling + shoot fighting — allows all holds including painful joint locks ('hooks') + submissions; the technical ancestor of American folkstyle wrestling, pro wrestling, and modern MMA grappling.",
  longDescription:
    "Catch Wrestling (Catch-As-Catch-Can) is a British submission-grappling style that emerged from 19th-century Lancashire mining and mill towns — particularly the famous 'Snake Pit' Wigan school run by Billy Riley (1919–1977). It fused Cumberland-and-Westmorland, Devonshire, and Cornish English wrestling styles with a pragmatic 'anything goes' catch philosophy: any hold that catches you can win the match, including painful joint locks (called 'hooks') and pin submissions. Catch wrestling was the base sport for American folkstyle wrestling (imported to US in mid-19th c.), professional wrestling (the 'wrestling' at circuses and vaudeville was catch), and the pre-Rickson-era shootfighting scene in Japan (UWF, RINGS, Pancrase). Legendary catch names include George Hackenschmidt, Frank Gotch, Lou Thesz, Karl Gotch, and Billy Robinson. Modern catch survives at Wigan's Snake Pit (revived by Roy Wood + Karl Gotch), at Josh Barnett's academy (Erik Paulson lineage), at Neil Melanson's Catch Academy, and through catch-influenced MMA fighters (Josh Barnett, Kazushi Sakuraba). Not an Olympic sport; competes on the modern grappling circuit (ADCC, Quintet, Snake Pit Cup).",

  category: "combat-sports",
  subCategory: "submission grappling / historical British wrestling",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "regional",

  countryOfOrigin: "GB",
  regionOfOrigin: "Lancashire, England (industrial North); spread to USA via 19th-century immigration; revived in Japan 1970s–2000s",
  estimatedOrigin: "Mid-19th-century Lancashire fusion of English wrestling styles; Snake Pit Wigan founded 1919; USA popularized 1880s–1920s; Japanese revival 1970s (Karl Gotch → Antonio Inoki)",

  players: { min: 2, max: 2, note: "1v1 submission grappling; team affiliations for training." },
  field: {
    surfaceName: "Wrestling mat (padded)",
    dimensions: "Modern: ~10 × 10 m padded area; historic: any flat surface (grass, gym floor)",
    description: "Modern catch tournaments use standard wrestling / grappling mats. Historic matches at mining towns fought on grass or gym floors with minimal padding.",
  },
  equipment: [
    { name: "Shorts + rashguard", description: "Modern catch: MMA-style shorts + tight rashguard (no gi). Historic: singlet or shirtless." },
    { name: "Wrestling shoes (optional)", description: "Some modern catch events allow wrestling shoes; some barefoot (like grappling)." },
    { name: "Mouthguard", description: "Recommended for training + mandatory at competition." },
    { name: "Ear protection (optional)", description: "For heavy training to prevent cauliflower ear; not typically worn in competition." },
  ],
  duration: {
    approximateMinutes: 15,
    structure: "Modern catch tournaments: matches 5–15 min with submission or points decision. Historic 'best 2-of-3 falls' matches ran 30 min – 2+ hours.",
  },
  objective:
    "Force opponent to submit (verbal or physical tap) OR pin both shoulders to the mat for 3 seconds ('flying fall'). Modern events also allow decision by pin count or judges' points.",
  matchStructure:
    "Modern rules: single 10-min match with submission = win, pin = win, points-decision otherwise. Historic 'best 2-of-3 falls' matches: continued until one wrestler achieved 2 submissions/pins. Legs, arms, chokes all legal — the 'catch' philosophy accepts any hold that scores.",

  basicRules: [
    { title: "Submission wins immediately", body: "Verbal 'I quit', physical tap, or referee-observed submission = instant win. All joints legal (arms, legs, spine)." },
    { title: "Pin wins immediately", body: "Both shoulders on mat for 3 seconds ('flying fall') = win. Similar to freestyle wrestling pin but with 3-second count." },
    { title: "All holds legal", body: "Legs, arms, chokes, neck cranks — every submission legal. Catch philosophy: 'catch as catch can' — grab what you can, when you can." },
    { title: "No striking (in true catch)", body: "Modern catch is pure grappling. Historic 'no-holds-barred' events sometimes included strikes; catch as a discipline excludes them." },
    { title: "Best 2-of-3 falls (historic)", body: "Traditional format: first to achieve 2 pins or submissions wins. Modern format usually single match." },
    { title: "Modern point scoring", body: "Modern catch events (Snake Pit Cup, Quintet Catch Wrestling) score: 3 pts submission, 2 pts pin, 1 pt takedown / control position — for judged decisions." },
  ],
  advancedRules: [
    { title: "The 'Hook' — signature catch move", body: "A hook is a painful joint-attack: wrist locks, toe holds, ankle locks, kneebars, spine locks. Catch is famous for HOOKS as the differentiator from other wrestling." },
    { title: "Neck cranks legal", body: "Unusual among grappling arts — catch permits neck cranks, twister-type spine attacks. Often banned in modern sport BJJ." },
    { title: "Small joint manipulation", body: "Historic catch allowed finger + toe attacks; most modern events prohibit small joint attacks for safety." },
    { title: "Pin considered submission-worthy", body: "Unlike modern BJJ, pins score in catch — some historical matches ended by pin without submission attempt." },
    { title: "No time limit (historic)", body: "Historic catch matches had NO time limit — some ran 2+ hours until one wrestler quit or was pinned. Frank Gotch vs. Farmer Burns 1898: 2h 15min." },
    { title: "Ride time (historic scoring)", body: "In some historic scoring systems: time spent on top of opponent counted as points toward decision — origin of American collegiate 'riding time'." },
  ],
  scoring: {
    summary: "Submission or pin (3 sec) = automatic win. Modern events may award points for decision if neither achieved.",
    winCondition: "Submission tap or pin. Modern events: points decision if time expires without finish.",
    breakdown: [
      { action: "Submission (tap / verbal / referee stoppage)", points: "Automatic win" },
      { action: "Pin (both shoulders 3 sec)", points: "Automatic win" },
      { action: "Takedown (points scoring)", points: "1 pt" },
      { action: "Sweep / reversal", points: "1 pt" },
      { action: "Advantage / control position (modern events)", points: "1 pt" },
    ],
  },
  penalties: [
    { title: "Small joint attacks (finger/toe)", body: "Warning first; DQ if repeated in most modern events (allowed historically)." },
    { title: "Strikes", body: "Warning; DQ if repeated. Catch is pure grappling in modern rules." },
    { title: "Excessive brutality", body: "Referee stoppage; DQ possible. Cranks + hooks legal but referee may intervene if fighter unable to protect themselves." },
    { title: "Illegal grip (eye rake, biting)", body: "Immediate DQ." },
  ],

  positions: [
    { name: "Standing (feet)", role: "Both wrestlers upright; hand-fighting for takedowns." },
    { name: "Top control (ground)", role: "Advantageous position; attacks pins + submissions from above." },
    { name: "Bottom (guard-like)", role: "Defensive position on back; looks for sweeps + submissions." },
    { name: "Turtle (defensive)", role: "Belly-down defensive ball; opponent attacks turnovers + neck cranks." },
    { name: "Side control / North-south", role: "Dominant control positions from top; set up submissions + pins." },
  ],
  officiating: {
    officials: ["1 Referee (mat control + submission signals)", "Judges (in modern point-decision events)"],
    summary: "Modern catch tournaments use single referee for submissions + pins; judges score if decision needed. Historic prizefighting-era catch had loose officiation.",
  },

  governingBodies: [
    { name: "Snake Pit Wigan (Riley Gym) — historical home", founded: 1919, headquarters: "Wigan, England" },
    { name: "Catch Wrestling Alliance (modern)", founded: 2012, headquarters: "USA" },
    { name: "British Wrestling Association (adjacent)", founded: 1904, headquarters: "UK" },
  ],
  majorCompetitions: [
    { name: "Snake Pit Cup (UK)", frequency: "annual", founded: 2010, region: "Wigan, England" },
    { name: "Quintet Catch Wrestling Rules events", frequency: "occasional", founded: 2018, region: "USA + Japan (Sakuraba-affiliated)" },
    { name: "ADCC Submission Wrestling", frequency: "biennial", founded: 1998, region: "worldwide (not catch-specific but catch-friendly)" },
    { name: "Historic Championships (pre-WW2)", frequency: "sporadic", founded: 1880, region: "USA + UK carnival + vaudeville circuits" },
  ],
  countriesPlayed: ["GB", "US", "JP", "CA", "AU", "DE", "BR", "RU"],
  famousAthletes: [
    "George Hackenschmidt (EE/GB, 'The Russian Lion', early-1900s world champion)",
    "Frank Gotch (US, greatest early American catch champion 1908–1913)",
    "Karl Gotch (BE/US, 'god of wrestling' — brought catch to Japan, taught Antonio Inoki + Tatsumi Fujinami)",
    "Billy Riley (GB, founder Snake Pit Wigan — trained a generation of British catch)",
    "Billy Robinson (GB, Snake Pit graduate; taught Karl Gotch's Japanese students)",
    "Lou Thesz (US, 6× NWA World Heavyweight Champion — legit catch shooter)",
    "Kazushi Sakuraba (JP, catch-influenced MMA legend; UFC Japan tournament winner)",
    "Josh Barnett (US, catch-oriented MMA fighter + UFC heavyweight champion)",
    "Erik Paulson (US, catch teacher + CSW system founder)",
    "Neil Melanson (US, catch-influenced MMA grappling coach)",
  ],
  records: [
    { title: "Longest catch wrestling match", holder: "Frank Gotch vs. Farmer Burns", value: "~2h 15min continuous 1898", year: 1898 },
    { title: "Most legit catch shooters cross to MMA", holder: "Josh Barnett + Sakuraba lineage", value: "Multiple UFC + PRIDE champions with catch base", year: 2010 },
    { title: "Snake Pit Wigan founding", holder: "Billy Riley", value: "Founded 1919, ran until 1977 — trained generations of catch wrestlers", year: 1919 },
    { title: "Karl Gotch's Japanese revival", holder: "Karl Gotch (via Antonio Inoki)", value: "Taught NJPW founders — catch became base of Japanese pro-wrestling shoot style", year: 1970 },
  ],

  variants: ["classical-catch-riley-lineage", "hookers-catch-us-tradition", "shoot-wrestling-japan", "modern-quintet-catch-rules", "cacc-purist"],
  relatedSports: ["freestyle-wrestling", "brazilian-jiu-jitsu", "sambo", "mixed-martial-arts", "judo", "shootfighting"],

  skills: [
    "grappling control + top position dominance",
    "submission chains (transitioning between attacks)",
    "hook + joint-lock mechanics",
    "pin technique (unique to catch + folkstyle)",
    "endurance (historically no time limit)",
    "grip strength + hand-fighting",
    "spinal awareness (cranks + twisters)",
  ],
  strategies: [
    { title: "Attack the hook chain", body: "Catch philosophy: any hold that catches. Chain attacks — if the wristlock fails, transition to toe hold, then kneebar. Multiple attacks per position." },
    { title: "Ride top for pin + submissions", body: "Catch's 'ride time' concept: control opponent from top; makes them work escape + tires them; opens submission windows." },
    { title: "Neck attacks are underused elsewhere", body: "Modern BJJ often neglects neck cranks + twisters; catch fighter's neck attacks catch grapplers off-guard." },
    { title: "Small-joint control (where legal)", body: "Historic catch used fingers + toes for control; modern events restrict but some allow. Neil Melanson's system emphasizes." },
    { title: "Pin vs. finish trade-off", body: "In catch, a pin is as good as a submission. Sometimes control + pin is safer than aggressive sub attempt." },
    { title: "Cross-train with judo + BJJ", body: "Modern catch practitioners cross-train — Sakuraba blended catch + BJJ perfectly for MMA." },
  ],

  terminology: [
    { term: "Catch-as-catch-can", meaning: "'Catch as (whatever holds) can (be applied)' — full name; anything-goes philosophy." },
    { term: "Hook", meaning: "A joint-lock or painful attack; catch's signature — wristlocks, toeholds, kneebars, neck cranks." },
    { term: "Shooter", meaning: "Legit catch wrestler; term contrasts with pro-wrestling 'worker' who cooperates. Both trained same base." },
    { term: "Hooker", meaning: "Master of catch hooks; feared for painful submissions. Karl Gotch was 'the god of hookers'." },
    { term: "Flying fall", meaning: "Pin — both shoulders to mat for 3 seconds; instant win in catch." },
    { term: "Ride time", meaning: "Time spent controlling opponent on top; contributed to historic scoring (basis of US collegiate riding time)." },
    { term: "Snake Pit", meaning: "Legendary Wigan gym founded by Billy Riley 1919; central catch training location for decades." },
    { term: "Shoot fight", meaning: "Real (not scripted) fight; catch-wrestlers were 'shooters' capable of legit combat vs. pro-wrestling 'work'." },
    { term: "Twister", meaning: "Spine crank submission; catch signature also popular in modern BJJ (via Eddie Bravo)." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Find a catch-lineage gym", body: "Rare outside UK/US/Japan. Snake Pit Wigan, Josh Barnett's academy (LA), Erik Paulson CSW, Neil Melanson Catch Academy are top options." },
        { title: "Learn wrestling base first", body: "Catch builds on wrestling. Start with folkstyle or freestyle wrestling; add catch hooks + submissions after." },
        { title: "Study catch history + technique", body: "Karl Gotch's videos, Billy Robinson's 'Physical Chess' (book), Josh Barnett's instructional series — foundational study material." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Compete at grappling tournaments", body: "ADCC, Snake Pit Cup, Quintet events — catch-friendly rulesets that reward submissions + pins." },
        { title: "Cross-train MMA", body: "Catch's modern relevance is in MMA. Cross-train striking + BJJ; catch base gives unique top game + submission variety." },
        { title: "Teach + preserve lineage", body: "Catch is a dying art; senior practitioners actively preserve technique through instructionals, seminars, competitions." },
      ],
    },
  ],

  faq: [
    { question: "What is Catch Wrestling?", answer: "A British-origin submission grappling style — 'catch-as-catch-can' — that permits ANY hold including joint locks, chokes, and pins. It emerged from 19th-century Lancashire wrestling, spread to America via immigration, became the base of both professional wrestling AND legitimate shoot fighting. Modern catch survives at Wigan's Snake Pit, in Josh Barnett's academy, and through catch-influenced MMA fighters." },
    { question: "How is catch different from BJJ?", answer: "Similar goals (submission grappling) but different philosophy: (1) Catch permits neck cranks + twisters + pin-focused offense — BJJ discourages neck cranks. (2) Catch scores PINS as wins — BJJ doesn't. (3) Catch emphasizes top-position ride time — BJJ emphasizes guard + sweeps. (4) Catch has no gi — BJJ often does. (5) Catch is dying; BJJ is thriving. Both effective; different styles for different practitioners." },
    { question: "Is catch wrestling the same as pro wrestling?", answer: "Historically, yes — professional wrestling started as real catch matches in 19th-century carnivals + vaudeville circuits. Over decades, matches became increasingly scripted ('worked') for entertainment while remaining superficially indistinguishable from real ('shoot') matches. The 'catch' technique base still underlies pro-wrestling moves. Modern pro-wrestling is scripted; modern catch (as a sport) is real submission grappling." },
    { question: "Why is catch wrestling rare today?", answer: "Multiple reasons: (1) Wrestling in America shifted to Olympic freestyle + college folkstyle, not catch. (2) BJJ dominated 1990s–2000s submission grappling globally. (3) Pro wrestling absorbed the entertainment audience. (4) Only 20–30 legitimate catch schools worldwide currently active. It survives thanks to lineage holders (Barnett, Melanson, Paulson) + growing MMA interest in unique submissions." },
    { question: "Who is the greatest catch wrestler?", answer: "Historical: Frank Gotch (US, early-1900s world champion) or Karl Gotch (BE/US, taught the entire Japanese catch lineage). Modern MMA: Kazushi Sakuraba (JP, catch-influenced) or Josh Barnett (US, UFC champion with catch base). For pure catch skill in the modern era: Billy Robinson and Karl Gotch are the acknowledged masters. Sakuraba is the greatest catch-styled fighter in modern combat sports." },
  ],

  wikipediaTitle: "Catch wrestling",
  sources: [
    { label: "Wikipedia — Catch wrestling", url: "https://en.wikipedia.org/wiki/Catch_wrestling", publisher: "Wikipedia" },
    { label: "Billy Robinson + Jake Shannon — 'Physical Chess: My Life in Catch-as-Catch-Can Wrestling' (2012)", publisher: "ECW Press" },
    { label: "Snake Pit Wigan", url: "https://snake-pit-wigan.com", publisher: "Snake Pit Wigan" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

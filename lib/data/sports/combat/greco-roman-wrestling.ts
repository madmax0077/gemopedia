import type { Sport } from "@/lib/types";

export const grecoRomanWrestling: Sport = {
  id: "greco-roman-wrestling",
  slug: "greco-roman-wrestling",
  name: "Greco-Roman Wrestling",
  officialName: "Greco-Roman Wrestling (United World Wrestling)",
  aliases: ["Greco Wrestling", "Classical Wrestling", "Upper-Body Wrestling"],
  shortDescription:
    "Olympic wrestling style that permits holds and throws only above the waist — no leg attacks; famous for spectacular high-amplitude suplexes and gut-wrenches; contested at every modern Olympics since 1896.",
  longDescription:
    "Greco-Roman Wrestling is one of two Olympic wrestling styles (the other being Freestyle). The defining rule is deceptively simple: attacks below the waist are forbidden. Wrestlers cannot grip the legs, trip, or use leg holds — every technique must originate from the upper body. This constraint transforms the sport into a physically brutal art of clinches, throws, suplexes, and gut-wrenches. Named 'Greco-Roman' by 19th-century French promoter Jean Exbrayat evoking the wrestling of ancient Greek Olympia + Roman circuses, the modern style was codified in 1848 France. It featured in the very first modern Olympics (Athens 1896) and every Summer Olympics since (except 1900). Governed globally by United World Wrestling (UWW, formerly FILA), Greco-Roman weight classes range from 55 to 130 kg. Legendary figures include Aleksandr Karelin (RU, 3× Olympic gold, unbeaten 1988–2000), Mijaín López (CU, 4× Olympic gold), and Roman Vlasov (RU, 2× Olympic gold).",

  category: "combat-sports",
  subCategory: "Olympic wrestling — upper-body only",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: true,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "FR",
  regionOfOrigin: "France (codified 1848); named for evoking ancient Greek + Roman wrestling; globally practiced today",
  estimatedOrigin: "Codified 1848 France (Jean Exbrayat); first modern Olympics Athens 1896; UWW (FILA) founded 1912",

  players: { min: 2, max: 2, note: "1v1 matches; team scores at national + international team competitions." },
  field: {
    surfaceName: "Wrestling mat (UWW-regulation)",
    dimensions: "9 m diameter circular mat + 1.5 m safety zone; total ~12 m circle",
    description: "Standardized foam mat with orange central circle (7 m) surrounded by red 'passivity zone' (1 m) and blue safety zone (1.5 m). Wrestlers must return to central circle if pushed to passivity zone.",
  },
  equipment: [
    { name: "Singlet", description: "One-piece stretch uniform; red or blue based on assigned corner; UWW-approved cut." },
    { name: "Wrestling shoes", description: "Flat-soled leather or synthetic; high-top or low-top; provides grip on mat + ankle support." },
    { name: "Handkerchief (mandatory)", description: "White cloth tucked in singlet — UWW-required for wiping blood." },
    { name: "Mouthguard (recommended)", description: "Not mandatory but strongly recommended for injury prevention." },
    { name: "Headgear (optional in Greco)", description: "Ear protection optional in Greco-Roman (unlike freestyle where it's more common)." },
  ],
  duration: {
    approximateMinutes: 6,
    structure: "Two periods × 3 minutes with 30-second rest. Sudden victory + criteria for tie-breaks.",
  },
  objective:
    "Score more points than opponent by executing legal takedowns, throws, exposure, gut-wrenches, and control positions — using ONLY upper-body attacks (no legs allowed) — OR win by pin (both shoulders on mat 1 second).",
  matchStructure:
    "Match: two 3-minute periods with 30-sec rest. Points awarded for takedowns (2–5 depending on amplitude), gut-wrenches / exposure (2 pts), reversals (1 pt). Match won by: pin (both shoulders down 1 sec — instant win), technical superiority (8-point lead ends match), or higher score at time. Ties broken by: 5-pt criteria (highest single scored move), most cautions issued, coin flip.",

  basicRules: [
    { title: "NO LEG ATTACKS — the defining rule", body: "No grabbing legs, no leg trips, no leg holds, no throwing opponent using their legs. All attacks originate above the waist. Violation = point to opponent + potential caution." },
    { title: "Two 3-minute periods", body: "Match = 2 × 3-min with 30-sec break. Clock stops for injury / disputes / mat-return." },
    { title: "Scoring by technique amplitude", body: "1 point: takedown / exposure. 2 pts: gut-wrench / short-amplitude throw. 4 pts: throw with high amplitude. 5 pts: throw of grand amplitude." },
    { title: "Par terre (ground) position", body: "When both wrestlers on mat, one may be in defensive par terre position; offensive wrestler tries gut-wrench + turnover for exposure points." },
    { title: "Pin ends match immediately", body: "Both shoulders on mat for 1 second = pin = instant win regardless of score." },
    { title: "Technical superiority", body: "8-point lead any time = match ends via 'tech fall'; also 4-point lead can end period." },
    { title: "Passivity + mat awarding", body: "Referee awards passivity against inactive wrestlers; forces them to par terre with opponent given attack position." },
  ],
  advancedRules: [
    { title: "Cautions + point deductions", body: "Fleeing hold: 1 caution. 3 cautions = disqualification. Point awarded to opponent per caution." },
    { title: "Passivity forcing", body: "Referee can force passive wrestler to par terre giving opponent 30 seconds of attack; failed attack returns to standing." },
    { title: "Danger zone", body: "Being on your back with hips in danger scores exposure points for opponent (2 pts)." },
    { title: "Salto / suplex grand amplitude", body: "5-point throws: wrestler taken from feet to head-below-hips position over the thrower's shoulder. Signature Greco move." },
    { title: "Reversal + Rollups", body: "Wrestler underneath in par terre reversing to top position: 1 pt reversal." },
    { title: "Locked-hands rule", body: "Cannot lock hands around opponent's body in par terre defensively; forced separation." },
    { title: "Weight classes 2024", body: "10 Olympic weight classes: 55, 60, 63, 67, 72, 77, 82, 87, 97, 130 kg." },
  ],
  scoring: {
    summary: "Point-based per exchange; pins end match instantly; technical superiority (8-pt lead) ends match; higher score at time otherwise.",
    winCondition: "Pin (both shoulders down 1 sec), tech fall (8-pt lead), or highest score at time. Ties broken by criteria.",
    breakdown: [
      { action: "Takedown / exposure", points: "1 pt" },
      { action: "Gut-wrench / short-amplitude throw", points: "2 pts" },
      { action: "High-amplitude throw", points: "4 pts" },
      { action: "Grand-amplitude throw (salto)", points: "5 pts" },
      { action: "Reversal", points: "1 pt" },
      { action: "Opponent caution", points: "1 pt awarded" },
      { action: "Pin (both shoulders 1 sec)", points: "Automatic win" },
      { action: "Tech fall (8-pt lead)", points: "Automatic win" },
    ],
  },
  penalties: [
    { title: "Illegal leg attack", body: "Point to opponent + caution; repeated = DQ." },
    { title: "Fleeing hold / stepping out", body: "1 caution + 1 point to opponent; 3 cautions = DQ." },
    { title: "Locked hands in par terre defense", body: "Warning first; caution + point second." },
    { title: "Unnecessary roughness", body: "Warning first; caution + point to opponent second." },
    { title: "3-caution disqualification", body: "Three cautions in one match = automatic DQ." },
  ],

  positions: [
    { name: "Standing (feet)", role: "Both wrestlers upright; primary combat position." },
    { name: "Par terre — top (offensive)", role: "Attacking wrestler on top of grounded defender; attempts gut-wrench + turnover." },
    { name: "Par terre — bottom (defensive)", role: "Defensive wrestler on hands + knees; must survive attack while looking for reversal." },
    { name: "Danger position", role: "On back with hips exposed — opponent scores exposure points." },
    { name: "Pin position", role: "Both shoulders flat on mat — 1-second hold ends match." },
  ],
  officiating: {
    officials: ["1 Referee (mat control)", "1 Judge (scoring confirmation)", "1 Mat Chairman (final authority)"],
    summary: "3-official system per UWW rules. Referee on mat controls action + calls holds. Judge sits ringside confirming scores. Chairman oversees + rules on disputes.",
  },

  governingBodies: [
    { name: "United World Wrestling (UWW, formerly FILA)", founded: 1912, headquarters: "Corsier-sur-Vevey, Switzerland", website: "https://uww.org" },
    { name: "USA Wrestling", founded: 1968, headquarters: "Colorado Springs, USA", website: "https://usawrestling.org" },
    { name: "Russian Wrestling Federation", founded: 1913, headquarters: "Moscow, Russia" },
    { name: "Iran Wrestling Federation", founded: 1934, headquarters: "Tehran, Iran" },
  ],
  majorCompetitions: [
    { name: "Olympic Games (Wrestling)", frequency: "quadrennial", founded: 1896, region: "worldwide (host city)" },
    { name: "UWW World Wrestling Championships", frequency: "annual (non-Olympic years)", founded: 1904, region: "rotating host countries" },
    { name: "European Wrestling Championships", frequency: "annual", founded: 1911, region: "Europe" },
    { name: "Asian Wrestling Championships", frequency: "annual", founded: 1979, region: "Asia" },
    { name: "Pan-American Championships", frequency: "annual", founded: 1968, region: "Americas" },
  ],
  countriesPlayed: ["RU", "TR", "IR", "GE", "AM", "AZ", "US", "CU", "SE", "FI", "HU", "PL", "BG", "RO", "UZ", "KZ", "KR", "JP", "DE", "FR", "IT"],
  famousAthletes: [
    "Aleksandr Karelin (RU, 3× Olympic gold 1988/1992/1996; unbeaten 13 yrs — sport's GOAT)",
    "Mijaín López (CU, 4× Olympic gold 2008/2012/2016/2020 — most Olympic wrestling golds ever)",
    "Roman Vlasov (RU, 2× Olympic gold 2012/2016)",
    "Hamza Yerlikaya (TR, 2× Olympic gold 1996/2000)",
    "Ivan Poddubny (Russian Empire, early-20th c. legendary strongman-wrestler)",
    "Nikola Petrov (BG, Olympic + world champion 1970s)",
    "Rulon Gardner (US, upset Karelin 2000 Olympics — historic gold)",
  ],
  records: [
    { title: "Most Olympic wrestling golds (any style)", holder: "Mijaín López (CU)", value: "4 consecutive Greco-Roman heavyweight golds 2008-2020", year: 2021 },
    { title: "Longest unbeaten streak", holder: "Aleksandr Karelin (RU)", value: "13 years unbeaten 1987–2000", year: 2000 },
    { title: "Most consecutive Olympic gold medals (individual)", holder: "Mijaín López + Karelin tied at 3", value: "Karelin: 1988/92/96; López: 4 Olympics (broke record 2020)", year: 2021 },
    { title: "Greatest Olympic upset (arguably)", holder: "Rulon Gardner (US)", value: "Beat unbeaten Karelin 2000 Olympics 1-0", year: 2000 },
  ],

  variants: ["greco-roman-modern-uww", "freestyle-wrestling-comparison", "collegiate-folkstyle-us"],
  relatedSports: ["freestyle-wrestling", "judo", "sambo", "sumo", "mixed-martial-arts"],

  skills: [
    "upper-body strength + grip",
    "explosive hip lift (for throws)",
    "clinch control + hand-fighting",
    "balance + base (avoiding takedowns)",
    "endurance (2 × 3-min high-intensity)",
    "spatial awareness (mat edges)",
    "flexibility (for bridging out of pins)",
  ],
  strategies: [
    { title: "Win the hand-fight", body: "First 30 seconds of any exchange is hand-fighting for grip control. Superior hand fighter dictates all subsequent techniques." },
    { title: "Force par terre — offense from top", body: "Aggressive wrestlers push for passivity calls; force opponent to par terre where 2-pt gut wrenches accumulate quickly." },
    { title: "Master the gut-wrench", body: "The gut-wrench (opponent on hands + knees, roll them over) is the highest-percentage par terre attack. 2 pts every time." },
    { title: "Body-lock for the throw", body: "The classic Greco setup: overhook + underhook body lock allows arch-and-throw (4-5 pt salto) — signature move." },
    { title: "Defend the salto", body: "When opponent locks body — sprawl hips back + squat low; prevents them arching for high-amplitude throw." },
    { title: "Manage the passivity clock", body: "Ref clocks each wrestler's passivity separately. Stay just active enough to avoid par terre penalty." },
    { title: "Weight-cut discipline", body: "Making weight in Greco is brutal — wrestlers often cut 5–10 kg for competition. Water + carb loading post-weigh-in matters." },
  ],

  terminology: [
    { term: "Par terre", meaning: "'On the ground' — the ground position (French)." },
    { term: "Gut-wrench", meaning: "Standard par terre offense: attack wrestler wraps opponent's waist + rolls them over for 2 pts." },
    { term: "Salto / Suplex", meaning: "High-amplitude throw; wrestler taken from feet to head-below-hips over thrower's shoulder." },
    { term: "Body lock", meaning: "Clinch position where attacker locks hands around opponent's torso; setup for throws." },
    { term: "Underhook / Overhook", meaning: "Hand positions in tie-up: under (arm under opponent's) or over (over)." },
    { term: "Danger position", meaning: "On back with hips exposed — scores opponent 2 exposure points." },
    { term: "Pin", meaning: "Both shoulders held to mat for 1 second — instant match win." },
    { term: "Tech fall / Superiority", meaning: "8-point lead ends match automatically." },
    { term: "Caution", meaning: "Warning for rule infraction; 3 cautions = DQ; each caution awards opponent 1 point." },
    { term: "Fleeing hold", meaning: "Backing out of ring / stalling; earns caution." },
    { term: "Passivity", meaning: "Ref call for inactive wrestler; forces par terre with opponent on top." },
    { term: "UWW", meaning: "United World Wrestling — international governing body." },
    { term: "FILA", meaning: "Former name of UWW — Fédération Internationale des Luttes Associées." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Find a wrestling club", body: "USA Wrestling has 4,000+ affiliated clubs; UWW national federations similar elsewhere. High-school + college programs feed the sport." },
        { title: "Learn stance + tie-ups first", body: "Basic upright stance + hand-fighting occupies first 3 months. Techniques come after posture + grip are solid." },
        { title: "Master the gut-wrench", body: "Simplest + highest-percentage par terre move. Learn top + bottom position control." },
      ],
    },
    {
      level: "intermediate",
      steps: [
        { title: "Compete at high school + club level", body: "In wrestling countries: high school folkstyle → USA Wrestling club Greco. Get 20+ matches/year." },
        { title: "Learn signature throws", body: "Body lock → arch throw. Bear hug lift. Duck under. These are the 4-5 pt scorers." },
        { title: "Weight class discipline", body: "Pick a weight class + train year-round to make it healthily. Cutting 10+ kg is dangerous + counter-productive." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Compete at senior nationals + international", body: "Senior nationals → World Team → Olympic team pipeline. Requires 8–15 years of dedication." },
        { title: "Train at Olympic Training Center", body: "USA + Russia + Iran have residential training programs for national team members." },
        { title: "Pursue Olympic qualification", body: "Continental championships + World Championships award Olympic quota spots. 4-year Olympic cycle dedication." },
      ],
    },
  ],

  faq: [
    { question: "What's the difference between Greco-Roman and Freestyle wrestling?", answer: "Greco-Roman: ONLY upper-body attacks allowed — no legs, no trips, no leg-holds. Freestyle: full-body — leg attacks, single-legs, double-legs, ankle picks all allowed. Freestyle is generally more dynamic + higher-scoring; Greco produces more spectacular throws + suplexes. Both are Olympic since 1896 (Greco) + 1904 (Freestyle for men)." },
    { question: "Who is the greatest Greco-Roman wrestler ever?", answer: "Two candidates: (1) Aleksandr Karelin (RU) — 3× Olympic gold 1988/1992/1996, unbeaten from 1987 to his shocking 1-0 loss to Rulon Gardner at the 2000 Olympics; considered the sport's GOAT for peak dominance. (2) Mijaín López (CU) — 4× Olympic gold 2008/2012/2016/2020 — the most Olympic wrestling gold medals ever (any style). Karelin was more feared; López has more medals." },
    { question: "Is Greco-Roman wrestling harder than freestyle?", answer: "Different, not easier or harder. Greco requires more upper-body strength + throw technique because you can't shoot legs. Freestyle requires more agility + leg-attack timing. Wrestlers often specialize in one; some switch styles for country's Olympic depth needs. Physically, Greco produces more high-amplitude throws + shoulder injuries; freestyle produces more knee/ankle injuries from leg attacks." },
    { question: "Where is Greco-Roman most popular?", answer: "Historical + current powerhouses: Russia, Iran, Turkey, Georgia, Armenia, Cuba, Sweden, Finland, Hungary, Bulgaria, Uzbekistan, Kazakhstan. Russia dominates historically; Cuba (via López) is currently a heavyweight power. Iran + Georgia produce technical specialists. USA improved dramatically 2010s onwards." },
    { question: "How long is a Greco-Roman match?", answer: "6 minutes total: two 3-minute periods with a 30-second rest. Match can end earlier via: pin (both shoulders down 1 second), technical superiority (8-point lead), or disqualification. Actual physical intensity per second is extreme — often compared to sprinting for the full duration." },
  ],

  wikipediaTitle: "Greco-Roman wrestling",
  sources: [
    { label: "United World Wrestling — Rules", url: "https://uww.org/rules", publisher: "UWW" },
    { label: "Wikipedia — Greco-Roman wrestling", url: "https://en.wikipedia.org/wiki/Greco-Roman_wrestling", publisher: "Wikipedia" },
    { label: "Olympic.org — Wrestling", url: "https://olympics.com/en/sports/wrestling/", publisher: "IOC" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

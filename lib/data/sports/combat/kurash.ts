import type { Sport } from "@/lib/types";

export const kurash: Sport = {
  id: "kurash",
  slug: "kurash",
  name: "Kurash",
  officialName: "Kurash (International Kurash Association)",
  aliases: ["Uzbek Kurash", "Kurash Wrestling", "Curaş (Turkish)", "Kurosh"],
  shortDescription:
    "Ancient Uzbek upright-jacket wrestling practiced for 3,500+ years — standing-only throws with a mandatory sash grip, no ground fighting; contested at Asian Games since 2006 and pushing for Olympic inclusion.",
  longDescription:
    "Kurash is an ancient Central Asian upright wrestling style with archaeological + textual evidence dating back 3,500 years in modern Uzbekistan. It is one of Central Asia's most beloved sports — Uzbekistan's national sport, played at every wedding, festival, and Navruz (spring equinox) celebration. Wrestlers wear a robe (yaktak) belted with a sash; the mandatory rule is that both hands must maintain a grip on the opponent's jacket or sash at all times. All techniques are standing throws — no ground work, no submissions, no leg attacks below the knee. Kurash was codified as a competitive sport by the International Kurash Association (IKA) in 1998; became an Asian Games medal event in 2006 (Doha); added to the Asian Indoor Games and Islamic Solidarity Games; pushing for Olympic inclusion. Legendary champions include Uzbek greats Ruslan Djuraev, Bakhodir Kurbonov (Rio 2016 Olympic bronze in judo — Kurash trained), and Diyorbek Urozboev. The sport shares deep roots with Turkish yağlı güreş, Azerbaijani gulesh, and — via medieval Silk Road transmission — influenced Japanese sumo and jujutsu.",

  category: "combat-sports",
  subCategory: "Central Asian jacket wrestling — standing only",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "ancient",
  popularity: "regional",

  countryOfOrigin: "UZ",
  regionOfOrigin: "Uzbekistan (national sport); Central Asia (Uzbek/Tajik/Turkmen shared heritage); influenced Anatolia, Persia, and beyond",
  estimatedOrigin: "3,500+ years documented in Uzbek archaeology + Avestan texts; IKA founded 1998; Asian Games medal event since 2006",

  players: { min: 2, max: 2, note: "1v1; team competitions at national + international level." },
  field: {
    surfaceName: "Kurash tatami / mat",
    dimensions: "IKA-regulation: 10 × 10 m contest area with 8 × 8 m active zone + 1 m safety border",
    description: "Tatami-style padded mat similar to judo. Blue border marks safety zone; central circle designates start position.",
  },
  equipment: [
    { name: "Yaktak (jacket)", description: "Traditional Uzbek robe-style jacket (cotton or canvas); blue or green in modern sanctioned competition." },
    { name: "Belt / sash", description: "Wide fabric belt tied around waist — a key gripping point for many throws." },
    { name: "Trousers", description: "Loose cotton or canvas trousers, similar to judo; must extend below the knee." },
    { name: "Bare feet", description: "No shoes — like judo + wrestling — direct foot contact with mat." },
  ],
  duration: {
    approximateMinutes: 4,
    structure: "Standard match: 4 minutes senior men; 3 minutes women + juniors. Extended if scores tied (Golden Score sudden victory).",
  },
  objective:
    "Score more points than opponent through legal throws or force an 'ippon' (perfect throw ending match) — using only standing techniques with continuous jacket/sash grip.",
  matchStructure:
    "Match starts on the referee's 'boshlang' (Uzbek: begin). Wrestlers grip each other's jackets + sashes and attempt to throw. Match ends via: 'Halol' (Ippon — perfect throw on back — instant win), higher score at time (5 mins), or Golden Score sudden victory if tied.",

  basicRules: [
    { title: "Standing only — NO ground fighting", body: "Once one or both wrestlers touch the mat with anything except feet, referee immediately calls halt. No mat work, no submissions, no ground grappling." },
    { title: "Mandatory jacket / sash grip", body: "Both hands must maintain grip on opponent's jacket or sash throughout. Losing grip stops action + risks passivity call." },
    { title: "No leg attacks below the knee", body: "No leg trips, no leg holds, no takedowns using the legs. All attacks originate from upper body with jacket / sash grip." },
    { title: "Halol (Ippon) ends match", body: "Perfect throw — opponent lands flat on back — instant win. Equivalent to judo ippon." },
    { title: "Yonbosh (Waza-ari) scoring", body: "Partial throw scoring 2 pts (opponent lands on side or bottom); two Yonbosh equals a Halol (2×2 = 4 = win)." },
    { title: "Chala (Yuko) scoring", body: "Small throw scoring 1 pt; opponent partially rolls." },
    { title: "4 mins men / 3 mins women", body: "Standard match duration. Sudden-victory Golden Score if tied." },
  ],
  advancedRules: [
    { title: "Passivity penalty", body: "Referee may warn passive wrestler; repeated passivity = point to opponent (Dakhaba)." },
    { title: "Weight classes", body: "IKA senior men: 60, 66, 73, 81, 90, 100, +100 kg (7 classes). Senior women: 48, 52, 57, 63, 70, 78, +78 kg." },
    { title: "Falling on top of opponent (illegal)", body: "Falling in a way that causes opponent injury = penalty. Controlled throws expected." },
    { title: "Referee signals + calls", body: "Uzbek-language calls: 'Halol' (perfect), 'Yonbosh' (partial), 'Chala' (small), 'Dakhaba' (penalty), 'Tamam' (finished)." },
    { title: "IKA Grand Prix circuit", body: "Similar to judo world tour — Grand Prix events across Asia + Europe leading to World Championships." },
  ],
  scoring: {
    summary: "Ippon-style (Halol) ends match; partial scores (Yonbosh 2pts, Chala 1pt) accumulate for decision.",
    winCondition: "Halol (perfect throw on back) OR highest score at end of time OR Golden Score sudden victory.",
    breakdown: [
      { action: "Halol (opponent flat on back)", points: "Instant win (ippon)" },
      { action: "Yonbosh (opponent on side)", points: "2 pts (2× Yonbosh = win)" },
      { action: "Chala (small throw)", points: "1 pt" },
      { action: "Dakhaba (opponent penalty)", points: "1 pt awarded" },
      { action: "Passivity call", points: "Warning; repeated = 1 pt to opponent" },
    ],
  },
  penalties: [
    { title: "Passivity", body: "Verbal warning first; point deduction if repeated." },
    { title: "Illegal grip (single-hand extended time)", body: "Warning first; penalty second." },
    { title: "Illegal technique (leg attack)", body: "Immediate point to opponent; DQ if repeated." },
    { title: "Falling on opponent dangerously", body: "Warning to DQ depending on severity." },
    { title: "Unsporting behavior", body: "Warning to DQ." },
  ],

  positions: [
    { name: "Wrestler (red)", role: "Assigned corner; wears designated jacket color.", count: 1 },
    { name: "Wrestler (blue)", role: "Assigned corner; opposing color.", count: 1 },
    { name: "Referee (on mat)", role: "Controls action, calls scores + halts.", count: 1 },
    { name: "Corner judges", role: "Confirm scoring calls (2 corner judges).", count: 2 },
    { name: "Mat Chairman", role: "Final authority on disputes.", count: 1 },
  ],
  officiating: {
    officials: ["1 Referee on mat", "2 corner judges", "1 Mat Chairman", "Table officials (scoring + time)"],
    summary: "5-person officiating team; Uzbek referee terminology; IKA rules based on judo-style structure adapted for standing-only wrestling.",
  },

  governingBodies: [
    { name: "International Kurash Association (IKA)", founded: 1998, headquarters: "Tashkent, Uzbekistan", website: "https://kurash-ika.org" },
    { name: "Uzbekistan Kurash Federation", founded: 1992, headquarters: "Tashkent, Uzbekistan" },
    { name: "Asian Kurash Union", founded: 2003, headquarters: "Tashkent, Uzbekistan" },
    { name: "European Kurash Association", founded: 2004, headquarters: "Baku, Azerbaijan" },
  ],
  majorCompetitions: [
    { name: "World Kurash Championships", frequency: "biennial", founded: 1999, region: "rotating host (Uzbekistan, Turkey, Iran typically)" },
    { name: "Asian Games (Kurash medal event)", frequency: "quadrennial", founded: 2006, region: "Asia (host city)" },
    { name: "Asian Indoor + Martial Arts Games", frequency: "quadrennial", founded: 2005, region: "Asia" },
    { name: "IKA Grand Prix (World Tour)", frequency: "monthly", founded: 2010, region: "worldwide" },
    { name: "Islamic Solidarity Games", frequency: "quadrennial", founded: 2005, region: "OIC member countries" },
  ],
  countriesPlayed: ["UZ", "TJ", "TM", "KG", "KZ", "TR", "IR", "IN", "PK", "AZ", "RU", "MN", "AF", "SA", "EG"],
  famousAthletes: [
    "Ruslan Djuraev (UZ, multi-time Kurash World Champion)",
    "Bakhodir Kurbonov (UZ, Kurash + judo Olympic bronze Rio 2016)",
    "Diyorbek Urozboev (UZ, Kurash + judo Olympic bronze 2020 Tokyo)",
    "Kadyr Muhammadov (UZ, Kurash World Champion multiple weights)",
    "Sardor Nurillaev (UZ, Asian Games gold medalist)",
    "Turkey + Iran national teams — significant international presence",
  ],
  records: [
    { title: "Oldest documented martial art (still practiced)", holder: "Kurash", value: "3,500+ years archaeological + Avestan textual evidence", year: 1500 },
    { title: "First Asian Games inclusion", holder: "Kurash", value: "Doha 2006 Asian Games — 8 medal events", year: 2006 },
    { title: "Uzbekistan gold medal dominance", holder: "Uzbekistan national team", value: "Wins majority of medals at World Championships + Asian Games consistently", year: 2020 },
    { title: "Push for Olympic inclusion", holder: "IKA", value: "Ongoing IOC recognition pursuit; not yet in Olympics", year: 2024 },
  ],

  variants: ["kurash-uzbek-standard", "curas-turkish-yagli-gures-influenced", "kaznok-cossack-parallel", "gulesh-azerbaijani-cousin"],
  relatedSports: ["judo", "sambo", "sumo", "belt-wrestling", "yagli-gures"],

  skills: [
    "hand-fighting for grip",
    "hip explosion (throws)",
    "balance + base",
    "upper-body strength",
    "timing (attacking opponent's momentum)",
    "endurance (4-min high-intensity)",
  ],
  strategies: [
    { title: "Win the grip battle", body: "Kurash mandates jacket grip. Superior gripping = superior wrestler. Fight for dominant collar + sash position first." },
    { title: "Attack from movement", body: "Circle, pull, off-balance opponent constantly; static wrestling = passivity call. Constant motion earns throws + avoids penalties." },
    { title: "Set up Halol with feints", body: "Fake one direction to draw opponent's weight, then throw the opposite way. Perfect timing = 8-second match." },
    { title: "Bel throws for high scoring", body: "Sash-based throws (belt throws) score bigger due to full-body lift. Key Uzbek signature technique." },
    { title: "Manage passivity clock", body: "Ref clocks passivity separately for each wrestler. Stay aggressive; don't stall even with lead." },
    { title: "Weight-cut discipline", body: "Central Asian weight-cutting is intense — hydrate immediately post-weigh-in + carb-load for match energy." },
  ],

  terminology: [
    { term: "Halol", meaning: "Ippon — perfect throw on back; instant win. From Uzbek 'lawful/proper'." },
    { term: "Yonbosh", meaning: "Waza-ari equivalent — partial throw on side; 2 pts." },
    { term: "Chala", meaning: "Yuko equivalent — small throw; 1 pt." },
    { term: "Dakhaba", meaning: "Penalty against opponent; 1 pt to other wrestler." },
    { term: "Tamam", meaning: "'Finished' — ref call ending action." },
    { term: "Boshlang", meaning: "'Begin' — start command." },
    { term: "Yaktak", meaning: "Traditional Uzbek robe / jacket worn in Kurash." },
    { term: "Belbog'i", meaning: "The belt / sash — key gripping point." },
    { term: "IKA", meaning: "International Kurash Association — world governing body (founded 1998)." },
    { term: "Navruz", meaning: "Central Asian spring equinox festival — traditional Kurash tournament season." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Find IKA-affiliated club", body: "Rare outside Central Asia; growing presence in Turkey, Iran, Russia, and diaspora communities. IKA lists affiliated national federations." },
        { title: "Cross-train judo first", body: "Judo grip + throws directly transfer to Kurash. Many Uzbek judokas train Kurash equally." },
        { title: "Learn basic throws", body: "Uchi-mata equivalents, seoi-nage equivalents, sasae-tsuri-komi-ashi — Kurash uses many judo-family throws with jacket grip." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Compete at national + Grand Prix events", body: "IKA Grand Prix circuit hosts monthly events; Asian + European Championships biennial." },
        { title: "Study Uzbek signature techniques", body: "Bel throws (belt lifts), sash throws, and rapid grip-changes are Kurash signatures not found in pure judo." },
        { title: "Target World Championships + Asian Games", body: "World Kurash Championships biennial; Asian Games quadrennial — highest level of competition until Olympic inclusion." },
      ],
    },
  ],

  faq: [
    { question: "How old is Kurash?", answer: "Very old. Archaeological evidence + references in the Avesta (Zoroastrian sacred text) date Kurash to 3,500+ years ago in modern Uzbekistan. The great Persian poet Ferdowsi's 'Shahnameh' (10th c.) mentions Kurash. Alexander the Great's soldiers reportedly witnessed it in 4th century BC Bactria. Modern sanctioned competition began 1998 with IKA founding." },
    { question: "Is Kurash the same as judo?", answer: "No — closely related but distinct. Similarities: jacket grip, throws to score, ippon-equivalent win condition. Differences: (1) Kurash = STANDING ONLY (no ground work); judo = standing + newaza (ground). (2) Kurash = no leg attacks below knee; judo permits many leg throws. (3) Different terminology (Halol vs. Ippon). (4) Different jacket (yaktak vs. judogi). Historical judo pioneer Jigoro Kano studied Central Asian wrestling before founding judo." },
    { question: "Is Kurash in the Olympics?", answer: "Not yet. IKA has pursued IOC recognition + Olympic inclusion for 15+ years. Kurash is contested at the Asian Games (since 2006), Asian Indoor + Martial Arts Games, Islamic Solidarity Games, and World Combat Games. Being included in more multi-sport events increases eligibility for future Olympic consideration. No confirmed date for Olympic inclusion." },
    { question: "Which country dominates Kurash?", answer: "Uzbekistan — overwhelmingly. As the sport's national heritage sport, Uzbekistan wins the vast majority of medals at World Championships + Asian Games. Turkey, Iran, Tajikistan, and Russia are the next-tier competitive nations. Growing programs in India, Pakistan, and Central Asian diaspora." },
    { question: "Can I train Kurash outside Central Asia?", answer: "Growing possibility but still rare. IKA maintains ~35 affiliated national federations. Central Asian diaspora communities in Russia, Turkey, Germany, USA (Brighton Beach NYC) have small clubs. Best option for non-Uzbeks: train judo intensively + attend IKA seminars + international tournaments where you can. IKA runs beginner-friendly camps." },
  ],

  wikipediaTitle: "Kurash",
  sources: [
    { label: "International Kurash Association (IKA)", url: "https://kurash-ika.org", publisher: "IKA" },
    { label: "Wikipedia — Kurash", url: "https://en.wikipedia.org/wiki/Kurash", publisher: "Wikipedia" },
    { label: "Asian Games — Kurash medal history", url: "https://olympics.com/", publisher: "OCA / IOC" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

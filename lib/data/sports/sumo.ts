import type { Sport } from "@/lib/types";

export const sumo: Sport = {
  id: "sumo",
  slug: "sumo",
  name: "Sumo",
  officialName: "Sumō (相撲)",
  aliases: ["Ō-zumō", "Sumo wrestling"],
  shortDescription:
    "The national sport of Japan — two enormous rikishi try to force each other out of a straw-ring dohyō, or make any body part other than the soles of their feet touch the ground.",
  longDescription:
    "Sumo is an ancient Japanese sport with over 1,500 years of history, wrapped in Shintō ritual and unbroken tradition. Two wrestlers ('rikishi') collide in a circular clay dohyō barely 4.55 metres across. The bout is usually over in seconds. Modern professional sumo is administered by the Japan Sumo Association; six 15-day 'basho' tournaments are held each year and the sport crowns its yokozuna — grand champions — for life. Weight, mass and the perfect first-second stance decide most matches.",

  category: "combat-sports",
  subCategory: "grappling / pushing",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "ancient",
  popularity: "regional",

  countryOfOrigin: "JP",
  regionOfOrigin: "Japan",
  estimatedOrigin: "c. 3rd century (earliest written references in the Nihon Shoki)",

  players: { note: "1 vs 1. Bouts are single-elimination within a match — no rounds." },
  field: {
    surfaceName: "dohyō",
    dimensions: "Circular ring 4.55 m in diameter, on a raised clay platform 66 cm high and 5.7 m square at the base.",
    description:
      "A ring of rice-straw bales (tawara) set into a raised clay platform. The wrestlers face off from two white starting lines (shikiri-sen) 70 cm apart at the centre.",
  },
  equipment: [
    { name: "Mawashi", description: "A 9 m-long silk belt wrapped around the waist and between the legs — the only garment worn, and the only legal handhold." },
    { name: "Dohyō", description: "The clay ring with straw bales, built anew for every tournament." },
  ],
  duration: {
    approximateMinutes: 1,
    structure: "A single bout lasts from a few seconds to (very rarely) 4+ minutes. A day of a basho comprises many bouts.",
    note: "Pre-bout rituals (salt-throwing, stare-downs) take longer than most bouts themselves.",
  },
  objective:
    "Force your opponent to either (a) step out of the dohyō, or (b) touch the ground inside the ring with any part of their body other than the soles of their feet.",
  matchStructure:
    "Two rikishi enter the dohyō, perform the ritual of purification (salt-throwing, four stamps), squat behind their starting lines, and charge (tachi-ai) the moment both simultaneously touch their fists to the ground. The bout ends the instant one wrestler leaves the ring or touches down.",

  basicRules: [
    { title: "Win conditions", body: "Push, throw or trip your opponent out of the ring, or make any part of their body other than the soles of their feet touch the clay inside the ring." },
    { title: "The tachi-ai", body: "The initial charge. Both wrestlers must place both fists on the ground simultaneously; a false start (matta) is called if not synchronised." },
    { title: "Legal techniques", body: "82 formal 'kimarite' (winning techniques) are recognised — pushing, shoving, throwing, tripping and belt-work are all legal." },
    { title: "Illegal actions", body: "No punching with closed fists, no eye-poking, no hair-pulling, no strikes to the groin, no chokes." },
  ],
  advancedRules: [
    { title: "Mawashi grip", body: "The belt is the primary handhold; 'migi-yotsu' (right-inside grip) vs 'hidari-yotsu' (left-inside) define a rikishi's style." },
    { title: "Deshimari", body: "If a wrestler suddenly retreats (henka) at the tachi-ai and their opponent falls, they win — but this is looked down upon and rarely used by ranked wrestlers." },
    { title: "Winning technique announced", body: "After each bout the announcer names the kimarite used, e.g. yorikiri (force-out), oshidashi (push-out), uwatenage (over-arm throw)." },
  ],
  scoring: {
    summary: "One point (a win) per bout. A wrestler's tournament record — e.g. 10-5, 8-7 — determines promotion and demotion between ranks after each basho.",
    winCondition: "A wrestler with a majority-winning record (kachi-koshi, 8-7 or better in the top division) is promoted or maintains their rank; a losing record (make-koshi) usually results in demotion.",
  },
  penalties: [
    { title: "Matta (false start)", body: "The gyōji (referee) restarts the bout. Repeat matta can result in a caution." },
    { title: "Kinjite (illegal moves)", body: "Immediate loss and possible sanction from the association." },
  ],
  fouls: [
    { title: "Punching with closed fist", body: "Immediate disqualification." },
    { title: "Hair-pulling", body: "Immediate loss of the bout." },
    { title: "Attacking the groin", body: "Illegal and results in immediate loss." },
  ],
  winningConditions: [
    "Force your opponent to touch the ground inside the dohyō with any part of their body other than the feet.",
    "Force your opponent out of the dohyō (any body part touches outside the tawara).",
  ],

  positions: [
    { name: "Rikishi", role: "The wrestler.", count: 1 },
    { name: "Yokozuna", role: "The highest rank — a grand champion held for life once achieved." },
    { name: "Ōzeki", role: "The second-highest rank; two consecutive kachi-koshi are required to hold it." },
    { name: "Sekiwake / Komusubi", role: "Junior sanyaku ranks — the challengers." },
    { name: "Maegashira", role: "The rank-and-file of the top division (Makuuchi)." },
  ],
  officiating: {
    officials: ["Gyōji (referee — in traditional silk robes)", "Five shimpan (judges) around the dohyō"],
    summary: "The gyōji is the sole referee in the ring, with a signalling fan (gunbai). Five shimpan sit around the dohyō and can call a mono-ii to overturn a decision after video and consensus.",
    signals: [
      { name: "Gunbai fan", description: "Pointed toward the winner immediately after the bout." },
      { name: "Mono-ii", description: "A judge calls a formal meeting to review a close decision." },
    ],
  },

  governingBodies: [
    { name: "Japan Sumo Association", acronym: "JSA / Nihon Sumō Kyōkai", founded: 1925, headquarters: "Tokyo, Japan", website: "https://www.sumo.or.jp" },
    { name: "International Sumo Federation", acronym: "IFS", founded: 1992, headquarters: "Tokyo, Japan" },
  ],
  majorCompetitions: [
    { name: "Honbasho", frequency: "6 tournaments per year (odd months)", region: "Japan", note: "The six grand tournaments: Hatsu, Haru, Natsu, Nagoya, Aki, Kyushu — each 15 days long." },
    { name: "Emperor's Cup", frequency: "6 per year", region: "Japan", note: "Awarded to the makuuchi division champion of each basho." },
  ],
  countriesPlayed: ["JP", "MN", "US", "BR", "GB"],
  famousAthletes: ["Taihō Kōki", "Chiyonofuji Mitsugu", "Akebono Tarō", "Asashōryū Akinori", "Hakuhō Shō", "Terunofuji Haruo"],
  records: [
    { title: "Most yūshō (basho titles)", holder: "Hakuhō Shō (Mongolia)", value: "45 titles", year: 2021 },
    { title: "Longest yokozuna career", holder: "Hakuhō Shō", value: "14 years at yokozuna", year: 2021 },
  ],

  relatedSports: ["mongolian-wrestling", "judo", "kabaddi"],

  skills: ["explosive power", "balance", "grip strength", "body weight management", "ritual precision"],

  terminology: [
    { term: "Dohyō", meaning: "The elevated clay ring bordered by rice-straw bales in which bouts take place." },
    { term: "Mawashi", meaning: "The heavy silk belt worn as the sole garment." },
    { term: "Rikishi", meaning: "A sumo wrestler." },
    { term: "Yokozuna", meaning: "The highest sumo rank — held for life once achieved." },
    { term: "Kimarite", meaning: "The winning technique of a bout — 82 are officially recognised." },
    { term: "Tachi-ai", meaning: "The initial simultaneous charge that begins every bout." },
    { term: "Kachi-koshi / make-koshi", meaning: "Winning majority record / losing majority record in a 15-day basho." },
    { term: "Gyōji", meaning: "The referee, dressed in ceremonial silk kimono." },
  ],
  strategies: [
    { title: "Winning at the tachi-ai", body: "Most bouts are decided in the first second. A lower centre of gravity and a straight-forward drive typically wins the collision." },
    { title: "Yotsu-zumo vs oshi-zumo", body: "'Yotsu' rikishi seek a belt grip and grinding technique; 'oshi' rikishi push with palms and thrusts and try never to grip the belt." },
    { title: "Henka", body: "Sidestepping the tachi-ai — effective but seen as cheap; a yokozuna using it would face intense public criticism." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "What is sumo?", body: "A one-on-one grappling sport in a 4.55 m clay ring — first to touch outside the ring, or the clay inside it with anything but the feet, loses.", anchor: "hero" },
        { title: "The dohyō and mawashi", body: "The ring and the belt are the two icons of sumo.", anchor: "playing-area" },
        { title: "How to win", body: "82 kimarite are recognised; force-outs (yorikiri) and push-outs (oshidashi) are the most common.", anchor: "how-it-works" },
        { title: "Ranks", body: "Six divisions; the top is Makuuchi with maegashira, sanyaku and yokozuna at the top.", anchor: "positions" },
      ],
    },
  ],
  faq: [
    { question: "How long does a sumo bout last?", answer: "Most last a few seconds. The rituals and staredown before a bout usually take much longer than the bout itself." },
    { question: "How heavy is a sumo wrestler?", answer: "There is no weight class. Modern top-division rikishi typically weigh 120–200 kg; the heaviest have exceeded 275 kg." },
    { question: "Are foreigners allowed in professional sumo?", answer: "Yes, but with strict rules — each stable is limited to one foreign-born wrestler. Mongolians have dominated the highest ranks over the past two decades." },
  ],

  animations: [
    { id: "dohyo", title: "Reading the dohyō", component: "SumoDohyo", description: "Understand the ring, the starting lines, and how push-outs are judged." },
  ],

  diagrams: [
    {
      id: "sumo-dohyo-static",
      title: "The dohyō (technical view)",
      component: "sumo-dohyo",
      slot: "playing-area",
    },
  ],

  sources: [
    { label: "Japan Sumo Association — Official Rules", publisher: "Nihon Sumō Kyōkai", url: "https://www.sumo.or.jp" },
    { label: "Britannica — Sumo", publisher: "Encyclopaedia Britannica", url: "https://www.britannica.com/sports/sumo" },
  ],
  lastVerified: "2026-08-20",
  confidence: "verified",
};

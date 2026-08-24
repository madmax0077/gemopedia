import type { Sport } from "@/lib/types";

export const archery: Sport = {
  id: "archery",
  slug: "archery",
  name: "Archery",
  officialName: "Archery",
  aliases: ["Target archery", "The bow"],
  shortDescription:
    "Precision sport of shooting arrows at a target from a set distance — competitive events include recurve (Olympic), compound, barebow, and field archery.",
  longDescription:
    "Archery is a precision sport in which competitors shoot arrows at a target using a bow. The Olympic discipline is recurve archery, in which archers shoot at a 122 cm ten-ringed target from 70 metres. Other major disciplines include compound (with a mechanical release aid and higher precision), barebow (no sights, no stabilisers), and field archery (varied distances on a woodland course). Archery has been contested at the modern Olympics since Paris 1900 and continuously since Munich 1972 for men and women. World Archery governs the international sport. Korean recurve archers have dominated Olympic team competitions for decades, and Kim Woo-jin holds the men's world record in the 72-arrow ranking round.",

  category: "precision-sports",
  subCategory: "target sport",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "year-round",
  era: "ancient",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "England (organised competition); global antiquity for the bow itself (30,000+ years)",
  estimatedOrigin: "Modern target archery codified in England mid-19th century; Grand National Archery Meeting 1844; Olympic 1900",

  players: { min: 1, max: 2, note: "Individual events; team events use 3 archers per team. Mixed team events pair one male and one female recurve archer." },
  field: {
    surfaceName: "range",
    dimensions: "Olympic recurve range: 70 m × 122 cm target for outdoor. Indoor: 18 m or 25 m × 40 cm target. Field archery: variable 5-60 m on woodland course.",
    description: "Long shooting range with a shooting line, buttresses of straw or foam holding paper faces, and safety areas behind and beside. Concentric coloured rings score 10 (yellow centre) down to 1 (white outer).",
  },
  equipment: [
    { name: "Recurve bow", description: "Traditional Olympic bow with limbs curving away from the archer; 15-50 lb draw weight." },
    { name: "Compound bow", description: "Modern bow with cams that reduce holding weight (peak weight up to 60+ lb, hold ~15 lb); allows a mechanical release." },
    { name: "Arrows", description: "Aluminium, carbon or aluminium-carbon; length matches draw length; fletched with vanes or feathers." },
    { name: "Finger tab or release aid", description: "Recurve archers use a leather finger tab; compound archers use a mechanical release trigger." },
    { name: "Arm guard", description: "Leather / plastic guard on the bow arm to protect from string slap." },
    { name: "Quiver", description: "Belt or ground quiver holding arrows." },
    { name: "Sight & stabilisers", description: "Sight-pin for aiming and long rod + side rod stabilisers to reduce bow torque." },
  ],
  duration: {
    approximateMinutes: 90,
    structure: "72-arrow ranking round (~90 min) + head-to-head knockout matches (recurve: sets of 3 arrows; compound: cumulative 15 arrows).",
    note: "A single elimination match takes 15-25 minutes.",
  },
  objective: "Score more points than the opponent by shooting arrows into the highest-value rings of the target.",
  matchStructure:
    "Qualifying round: each archer shoots 72 arrows at 70 m; total score seeds the head-to-head bracket. Recurve knockout: best of 5 sets of 3 arrows (2 set points for winning a set, 1 each for tied; first to 6 points wins the match). Compound knockout: 5 ends of 3 arrows; highest cumulative score wins.",

  basicRules: [
    { title: "Shooting order", body: "In sets, archers alternate or shoot simultaneously per event. In qualifying, archers shoot in flights and score after each end of 6 or 3 arrows." },
    { title: "Time per end", body: "Recurve: 4 minutes for 6 arrows or 2 minutes for 3 arrows. Compound: similar limits per end." },
    { title: "Line straddling", body: "Archer must have one foot on each side of the shooting line at draw." },
    { title: "Arrow scoring", body: "Point where the arrow shaft enters the target face determines the score; if the shaft touches two rings, the higher ring scores." },
    { title: "Cross-shooting", body: "If an arrow crosses into another archer's target, both archers may re-shoot the affected arrow." },
    { title: "Draw and release", body: "Draw to full length, hold on target, release smoothly through the shot — the archery equivalent of a clean strike." },
    { title: "Equipment inspection", body: "Bows, arrows and accessories inspected before major competitions for legality." },
  ],
  advancedRules: [
    { title: "Set-point system (recurve)", body: "2 points for winning an end, 1 each for a tie. First to 6 set points wins the match." },
    { title: "Shoot-off tiebreaker", body: "If tied after 5 sets: single-arrow shoot-off; arrow closest to centre wins." },
    { title: "Xs (inner 10)", body: "The innermost 6 cm 'X-ring' inside the 10-ring; used for tiebreaks — most Xs wins." },
    { title: "Compound scoring", body: "Cumulative score across 15 arrows; ties broken by X-count then single arrow shoot-off." },
    { title: "Wind allowance", body: "Archers must judge and adjust for outdoor wind — no wind flag adjustments are illegal, but wind reading is expected." },
  ],
  scoring: {
    summary: "Concentric coloured rings score 10 (yellow centre) to 1 (white outer); miss = 0.",
    breakdown: [
      { action: "Yellow centre (10)", points: "10", note: "Inner 'X' is worth 10 with a tiebreak advantage." },
      { action: "Red (9-8)", points: "9 outer / 10 inner ring" },
      { action: "Blue (7-6)", points: "7 outer / 6 inner" },
      { action: "Black (5-4)", points: "5 outer / 4 inner" },
      { action: "White (3-2)", points: "3 outer / 2 inner" },
      { action: "Outside white / miss", points: "0" },
    ],
    winCondition: "Higher cumulative score (compound / qualifying) or first to 6 set points (recurve knockout).",
  },

  officiating: {
    officials: ["Director of Shooting (DoS)", "Judges (arrow scoring)", "Timekeeper", "Chief Judge"],
    summary: "The DoS controls the shooting cadence with lights and horns. Judges walk the line to confirm scores and adjudicate close arrow calls.",
  },
  governingBodies: [
    { name: "World Archery Federation", acronym: "WA", founded: 1931, headquarters: "Lausanne, Switzerland", website: "https://www.worldarchery.sport" },
    { name: "USA Archery", founded: 1879, headquarters: "Colorado Springs, USA", website: "https://www.usarchery.org" },
    { name: "Korea Archery Association", founded: 1922, headquarters: "Seoul, South Korea" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 1900, region: "worldwide" },
    { name: "World Archery Championships", frequency: "biennial", founded: 1931, region: "worldwide" },
    { name: "Hyundai Archery World Cup", frequency: "annual", founded: 2006, region: "worldwide (4-stage circuit + final)" },
    { name: "Asian Games Archery", frequency: "quadrennial", founded: 1978, region: "Asia" },
  ],
  countriesPlayed: ["KR", "US", "CN", "JP", "IN", "MX", "IT", "FR", "GB", "ES", "TR", "TW", "NL", "BR", "CO"],
  famousAthletes: [
    "Kim Woo-jin",
    "Ki Bo-bae",
    "Chang Hye-jin",
    "Brady Ellison",
    "Deepika Kumari",
    "Mike Schloesser",
    "Sara López",
    "An San",
    "Sjef van den Berg",
    "Lisa Barbelin",
    "Kim Je-deok",
  ],
  records: [
    { title: "Men's 72-arrow world record (recurve)", holder: "Kim Woo-jin (KOR)", value: "702/720 (Tokyo 2020)", year: 2021 },
    { title: "Women's 72-arrow world record (recurve)", holder: "Kang Chae-young (KOR)", value: "692/720", year: 2019 },
    { title: "Most Olympic archery gold medals (nation)", holder: "South Korea", value: "27+", year: 2024 },
    { title: "First archer with 3 Olympic golds at single Games", holder: "An San (KOR)", value: "3 (Tokyo 2020)", year: 2021 },
  ],

  variants: ["recurve", "compound", "barebow", "field-archery", "3d-archery", "para-archery", "kyudo"],
  relatedSports: ["shooting-sports", "kyudo", "3d-archery", "field-archery"],

  skills: [
    "postural stability",
    "consistent draw and anchor",
    "back-tension release",
    "sight-picture discipline",
    "breath control",
    "mental focus under pressure",
    "wind and light adaptation",
  ],
  strategies: [
    { title: "Aiming small, missing small", body: "Focus on the X-ring only; larger visual targets breed sloppy aim." },
    { title: "Consistent shot cycle", body: "Same stance → draw → anchor → aim → release → follow-through on every arrow." },
    { title: "Managing pressure", body: "In sets, adopt a routine that resets the mind after each arrow; ignore the score board." },
    { title: "Wind reading", body: "Watch flags, hair, treetops; hold off left or right of centre by predicted drift." },
  ],

  terminology: [
    { term: "X-ring", meaning: "Innermost 6 cm circle inside the 10-ring — worth 10 with tiebreak priority." },
    { term: "End", meaning: "A single sequence of 3 or 6 arrows before archers walk to score." },
    { term: "Anchor", meaning: "Consistent draw-hand position on the face for repeatable draw length." },
    { term: "Clicker (recurve)", meaning: "Small metal indicator on the bow that signals correct draw length." },
    { term: "Peep sight (compound)", meaning: "Small aperture set in the string for aligning the sight ring." },
    { term: "Release aid (compound)", meaning: "Handheld trigger that releases the string cleanly." },
    { term: "Cant", meaning: "Any lean of the bow left or right — should be zero for consistent scoring." },
    { term: "Fletching", meaning: "Vanes or feathers on the back of the arrow that stabilise flight." },
    { term: "Nocking point", meaning: "The exact position on the string where the arrow is nocked, marked with tape or brass." },
    { term: "Bareshaft", meaning: "Arrow without fletching, used in tuning to compare with a fletched arrow's impact." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Safe range basics", body: "Learn line rules, whistle signals, and always wait for the DoS command to shoot." },
      { title: "Stance and grip", body: "Perpendicular to the target; bow-hand grip relaxed; draw-hand three-finger under the string." },
      { title: "Draw and anchor", body: "Draw to the corner of the mouth; consistent anchor point every time." },
      { title: "Release and follow-through", body: "Relax the fingers cleanly; hold the bow arm on target for 1-2 seconds after release." },
    ] },
    { level: "intermediate", steps: [
      { title: "Sight-in", body: "Adjust bow-sight for elevation and windage at each distance you shoot." },
      { title: "Add stabilisers", body: "Long rod plus V-bar side rods to reduce vertical/horizontal torque." },
      { title: "Clicker training (recurve)", body: "Learn to draw the last few millimetres through the clicker before release." },
      { title: "Distance shoot", body: "Practise at 30, 50, 60 and 70 m to internalise each hold." },
    ] },
    { level: "advanced", steps: [
      { title: "Back-tension release", body: "Use rhomboid contraction rather than finger flick — smoother, more reliable release." },
      { title: "Tuning arrows", body: "Bareshaft, walk-back and paper tests to align nock, spine and dynamic tuning." },
      { title: "Mental game", body: "Pre-shot routine; visualisation; performance psychology to handle Olympic pressure." },
    ] },
  ],
  faq: [
    { question: "What are the Olympic archery events?", answer: "Individual recurve (men's and women's), team recurve (men's and women's), and mixed team recurve. Compound archery is contested at World Championships and the Asian Games but not yet at the Olympics." },
    { question: "Why is Korea so dominant in archery?", answer: "Korea has produced multiple generations of elite archers through a systematic development pipeline starting in elementary school; national team selection is legendarily competitive." },
    { question: "How far is the Olympic target?", answer: "70 metres for recurve; the target is 122 cm across with a 12.2 cm (10-ring) yellow centre — smaller than a compact disc from 70 m away." },
    { question: "What is 'the X-ring'?", answer: "The small 6 cm ring inside the 10; still scores 10 points but is used as a tiebreaker (most Xs wins)." },
    { question: "Can I use any bow at the Olympics?", answer: "Only recurve bows meeting World Archery equipment specifications — no compound, no barebow. Sight, stabilisers and clicker are allowed." },
  ],

  wikipediaTitle: "Archery",
  sources: [
    { label: "Wikipedia — Archery", url: "https://en.wikipedia.org/wiki/Archery", publisher: "Wikipedia" },
    { label: "World Archery Rulebook", url: "https://www.worldarchery.sport/rulebook", publisher: "World Archery Federation" },
    { label: "USA Archery", url: "https://www.usarchery.org", publisher: "USA Archery" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

import type { Sport } from "@/lib/types";

export const sepakTakraw: Sport = {
  id: "sepak-takraw",
  slug: "sepak-takraw",
  name: "Sepak Takraw",
  officialName: "Sepak Takraw",
  aliases: ["Kick volleyball"],
  shortDescription:
    "Southeast Asia's answer to volleyball — three players per side vault into acrobatic scissor-kicks over a badminton-height net, using only their feet, knees, chest and head.",
  longDescription:
    "Sepak Takraw ('sepak' = kick, 'takraw' = woven ball) fuses volleyball, football and gymnastics. Two teams of three face off across a low net (1.52 m men / 1.42 m women) on a court the size of a badminton doubles court. Players may touch the rattan ball with any part of the body except the arms and hands. The signature spike — a mid-air bicycle kick delivered with the sole of the foot — is one of the most spectacular strikes in any team sport. The sport's stronghold is Southeast Asia; Thailand, Malaysia and Indonesia dominate international competition.",

  category: "traditional-cultural-sports",
  subCategory: "net game",
  sportType: "team",
  indoorOutdoor: "both",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "medieval",
  popularity: "regional",

  countryOfOrigin: "MY",
  regionOfOrigin: "Malay Archipelago (Malaysia, Thailand, Indonesia, Philippines)",
  estimatedOrigin: "15th century (Malay sultanate courts)",

  players: { perTeam: 3, min: 3, max: 3, substitutes: 1, note: "Roles are 'tekong' (server), 'apit kanan' (right feeder/striker), 'apit kiri' (left feeder/striker)." },
  field: {
    surfaceName: "court",
    dimensions: "13.4 m × 6.1 m — split by a net 1.52 m high (men) or 1.42 m (women).",
    description: "Rectangular court identical in size to a badminton doubles court. A service circle sits in each half; players outside the circle cannot make the serve.",
  },
  equipment: [
    { name: "Rattan (or synthetic) ball", description: "Hollow woven ball, ~42 cm circumference, 170–180 g." },
    { name: "Net", description: "0.7 m tall netting stretched at 1.52 m (men) / 1.42 m (women)." },
    { name: "Shoes", description: "Optional; many players play barefoot on soft surfaces." },
  ],
  duration: {
    approximateMinutes: 45,
    structure: "Best of three sets to 21 points; deciding set to 15.",
  },
  objective: "Land the ball in the opponent's court, or force them to hit it into the net or out of bounds — using only your feet, knees, chest, shoulders and head.",
  matchStructure:
    "The tekong serves from the service circle by kicking a ball tossed by a teammate. The receiving team may touch the ball up to 3 times (including a spike) before returning it — but a single player may touch it multiple times in succession.",

  basicRules: [
    { title: "No hands or arms", body: "The ball may not touch the arms or hands at any point. Everything else is legal." },
    { title: "Three touches", body: "Each side gets up to three touches before returning the ball — same as volleyball." },
    { title: "The serve", body: "The tekong stands in the service circle and kicks the ball tossed by a teammate. A foot outside the circle at contact = fault." },
    { title: "Rally scoring", body: "Every rally scores a point — win the rally, win the point, whether you served or not." },
  ],
  advancedRules: [
    { title: "Multi-touch by one player", body: "Unlike volleyball, one player CAN touch the ball multiple times in a row (up to the 3-touch team maximum)." },
    { title: "Net contact", body: "Players may not touch the net or reach over into the opponent's court." },
    { title: "Set structure", body: "First to 21 points wins a set (two-point margin); best of 3 sets. Deciding set to 15." },
  ],
  scoring: {
    summary: "Rally scoring — every rally wins a point.",
    breakdown: [
      { action: "Point on serve", points: "1 pt" },
      { action: "Point on receipt", points: "1 pt" },
    ],
    winCondition: "First to 21 (with a 2-point margin) wins a set; best of 3 wins the match.",
  },
  fouls: [
    { title: "Touching the net", body: "Immediate loss of the rally." },
    { title: "Foot outside service circle at contact", body: "Service fault." },
    { title: "Ball touching hand or arm", body: "Loss of the rally." },
  ],

  positions: [
    { name: "Tekong", role: "The server; stays at the back to receive and dig the opposition's spikes.", count: 1 },
    { name: "Apit kanan (right feeder)", role: "The primary striker; typically the most acrobatic player.", count: 1 },
    { name: "Apit kiri (left feeder)", role: "Secondary striker; also serves as feeder to the right feeder.", count: 1 },
  ],
  officiating: {
    officials: ["1 referee", "1 assistant referee", "6 line judges", "Score-keeper"],
    summary: "The referee is on a raised chair beside the net; line judges call in-outs and net faults.",
  },

  governingBodies: [
    { name: "International Sepak Takraw Federation", acronym: "ISTAF", founded: 1988, headquarters: "Bangkok, Thailand" },
  ],
  majorCompetitions: [
    { name: "King's Cup", frequency: "annual", founded: 1985, region: "Thailand" },
    { name: "ISTAF World Cup", frequency: "biennial", founded: 2011, region: "worldwide" },
    { name: "Asian Games — Sepak Takraw", frequency: "quadrennial", founded: 1990, region: "Asia" },
    { name: "Southeast Asian Games", frequency: "biennial", founded: 1965, region: "Southeast Asia" },
  ],
  countriesPlayed: ["TH", "MY", "ID", "PH", "VN", "MM", "LA", "SG", "KH", "KR", "JP"],
  famousAthletes: ["Suebsak Phunsueb", "Rungruang Wandee", "Norhaffizal Abd Aziz"],

  variants: ["hoop-takraw", "beach-takraw"],
  relatedSports: ["volleyball", "association-football"],

  skills: ["acrobatic control", "flexibility", "spatial awareness", "leg strength", "aerial timing"],

  terminology: [
    { term: "Tekong", meaning: "The server, positioned inside the service circle." },
    { term: "Apit", meaning: "The two feeders / strikers who share attacking duties." },
    { term: "Rattan ball", meaning: "The traditional woven ball still used in casual play; synthetic versions are standard in tournaments." },
  ],

  learningPaths: [{ level: "beginner", steps: [
    { title: "What is sepak takraw?", body: "Three-a-side kick-only volleyball played across a badminton-height net.", anchor: "hero" },
    { title: "The court", body: "Same size as a badminton doubles court, split by a low net.", anchor: "playing-area" },
    { title: "Three touches, no hands", body: "Each team can touch the ball up to 3 times using anything but the arms.", anchor: "rules" },
    { title: "The serve & the spike", body: "The tekong kicks a tossed ball; strikers spike with a mid-air scissor kick.", anchor: "rules" },
  ] }],
  diagrams: [
    {
      id: "sepak-takraw-court",
      title: "The court",
      component: "sepak-takraw-court",
      slot: "playing-area",
    },
  ],
  faq: [
    { question: "Is sepak takraw in the Olympics?", answer: "Not yet, though the ISTAF has campaigned for inclusion for over a decade." },
    { question: "How do you serve?", answer: "The tekong stands inside the service circle and kicks a ball tossed by a teammate — feet must stay inside the circle at contact." },
  ],

  sources: [
    { label: "ISTAF — Rules of the Game", publisher: "International Sepak Takraw Federation" },
    { label: "Olympic Council of Asia — Sepak Takraw at the Asian Games", publisher: "OCA" },
  ],
  lastVerified: "2026-08-20",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const beachSoccer: Sport = {
  id: "beach-soccer",
  slug: "beach-soccer",
  name: "Beach Soccer",
  officialName: "Beach Soccer (FIFA / Beach Soccer Worldwide)",
  aliases: ["Beach Football", "Sand Soccer", "Futebol de Praia"],
  shortDescription:
    "5-a-side football played on sand — smaller pitch, three 12-minute periods, unlimited substitutions, and a scoring rate 3–4× higher than pitch football; FIFA-sanctioned World Cup since 2005.",
  longDescription:
    "Beach Soccer is a variant of association football played on sand with 5 players per side (goalkeeper + 4 outfield). Its formalized rules date to 1992 (Beach Soccer Worldwide, Rio de Janeiro), though beach kickabouts on Copacabana + Ipanema go back to the 1930s. FIFA absorbed the World Cup from BSWW in 2005, running it biennially since. The soft-sand surface strips football down to its most acrobatic essentials: overhead kicks, bicycle scissors, and volleys dominate; the ball rarely stops moving. Portugal (Madjer, Belchior), Brazil (Bruno Xavier, Datinha), and Russia (Alexey Makarov) are the historic powers.",

  category: "ball-sports",
  subCategory: "association football variant on sand",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "summer",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "BR",
  regionOfOrigin: "Brazil (Copacabana + Ipanema beaches of Rio de Janeiro); formalized 1992",
  estimatedOrigin: "Casual play from 1930s Brazilian beaches; codified 1992 by Beach Soccer Worldwide (BSWW); FIFA World Cup since 2005",

  players: { perTeam: 5, min: 5, max: 5, substitutes: 5, note: "5-a-side (1 GK + 4 outfield); unlimited flying substitutions." },
  field: {
    surfaceName: "Sand pitch",
    dimensions: "35–37 m × 26–28 m (FIFA regulation)",
    description: "Fine, even sand at least 40 cm deep; goals 5.5 m wide × 2.2 m high; flag markers instead of solid corner posts.",
  },
  equipment: [
    { name: "Beach soccer ball", description: "Standard size-5 football with slightly softer surface for barefoot control." },
    { name: "Barefoot", description: "Players play barefoot; ankle tape or thin bandages permitted." },
    { name: "Team kit", description: "Sleeveless jerseys + shorts common due to heat." },
    { name: "Goalkeeper gloves + optional shirt", description: "GK differentiated; may wear long sleeves + light protection." },
  ],
  duration: {
    approximateMinutes: 45,
    structure: "3 × 12-minute periods with 3-minute breaks; 3-minute sudden-death extra time, then penalty shootout.",
  },
  objective:
    "Score more goals than the opposition in three 12-minute periods. Ties resolved by 3-minute golden-goal extra time, then 3-round penalty shootout.",
  matchStructure:
    "Kick-off restarts each of three 12-min periods. Clock stops for goal celebrations and injuries. No draws in FIFA-sanctioned events: golden-goal ET, then penalties. Unlimited flying substitutions from a rolling bench of 5.",

  basicRules: [
    { title: "5 vs 5 (incl. GK)", body: "One goalkeeper + four outfield; teams of 12 with 5 rolling subs." },
    { title: "Three 12-minute periods", body: "Clock stops for goals + injuries — a 12-min period typically takes 15–18 real minutes." },
    { title: "Barefoot play", body: "Ankle wraps allowed; no cleats, boots, or shoes." },
    { title: "Kick-in, not throw-in", body: "Ball out over sideline is kicked back in from where it left play (foot placed on line)." },
    { title: "No offside rule", body: "Offside abolished — encourages fast breaks + attacking play." },
    { title: "5-second rule for GK + kicks", body: "Goalkeeper must release ball within 5 seconds; free kicks + corners must be taken within 5 seconds." },
    { title: "No wall on free kick", body: "The fouled team's kick — defenders may not form a wall in front of the kicker; makes free kicks especially dangerous." },
  ],
  advancedRules: [
    { title: "Direct free kicks only", body: "All free kicks are direct — every foul is a shooting chance. Contrast with pitch football's indirect kicks for technical offences." },
    { title: "Corner kicks + volleys", body: "Corner kicks routinely volleyed on target; the soft landing rewards aerial acrobatics unimaginable on grass." },
    { title: "Yellow + red cards", body: "Same as pitch football; red-carded team plays a man down for 2 minutes (temporary sin bin) before replacement allowed." },
    { title: "3-round penalty shootout", body: "If ET is scoreless: 3 kicks per side, then sudden death." },
    { title: "Golden-goal extra time", body: "3-minute sudden-death; first goal wins. If still tied, straight to penalty shootout." },
    { title: "Overhead kicks legal in the box", body: "Bicycle + scissors kicks legal anywhere; only dangerous play or high boots to opposing head penalized." },
  ],
  scoring: {
    summary: "1 point per goal. Team with more goals after 3 periods wins. Ties → 3-min golden goal → 3-round penalty shootout.",
    winCondition: "Higher goal count at final whistle; golden-goal ET; then 3-round penalty shootout with sudden death.",
    breakdown: [
      { action: "Field goal", points: "1" },
      { action: "Penalty goal", points: "1" },
      { action: "Free-kick goal", points: "1" },
      { action: "Own goal", points: "1 to opposition" },
    ],
  },
  penalties: [
    { title: "Yellow card", body: "Warning; two yellows = red." },
    { title: "Red card", body: "Player ejected; team plays a man down 2 minutes, then substitute allowed." },
    { title: "Dangerous play", body: "Yellow to red depending on severity — high boots near head, cleats to opponent." },
    { title: "Delay of game (5-second violations)", body: "Free kick or throw awarded to opposition." },
  ],

  positions: [
    { name: "Goalkeeper", role: "Only player who may handle the ball inside the box; also throws to launch attacks.", count: 1 },
    { name: "Sweeper (defender)", role: "Deepest outfield player; screens the goalkeeper.", count: 1 },
    { name: "Central pivots", role: "Two central runners linking defence + attack.", count: 2 },
    { name: "Striker/target", role: "Advanced player; often specialist in bicycle kicks + volleys.", count: 1 },
  ],
  officiating: {
    officials: ["1 Referee (on-sand)", "2 Assistant Referees (touchline)", "1 Reserve/Third Referee (bench + timekeeper)"],
    summary: "4-official system per FIFA laws for beach soccer; assistants call offside-equivalents (dangerous play, out-of-play) + monitor substitutions.",
  },

  governingBodies: [
    { name: "FIFA (from 2005)", founded: 1904, headquarters: "Zurich, Switzerland", website: "https://fifa.com" },
    { name: "Beach Soccer Worldwide (BSWW)", founded: 1992, headquarters: "Barcelona, Spain", website: "https://beachsoccer.com" },
  ],
  majorCompetitions: [
    { name: "FIFA Beach Soccer World Cup", frequency: "biennial", founded: 2005, region: "worldwide (host country)" },
    { name: "BSWW Mundialito", frequency: "annual", founded: 1994, region: "worldwide" },
    { name: "Euro Beach Soccer League", frequency: "annual", founded: 1998, region: "Europe" },
    { name: "AFC Beach Soccer Championship", frequency: "biennial", founded: 2006, region: "Asia" },
  ],
  countriesPlayed: ["BR", "PT", "RU", "IR", "JP", "IT", "ES", "MX", "SN", "AE", "TA", "US", "FR", "AR"],
  famousAthletes: [
    "Madjer (Portugal — 5× FIFA World Cup top scorer; considered greatest ever)",
    "Belchior (Portugal — World Cup champion 2015)",
    "Bruno Xavier (Brazil — multi-time world champion)",
    "Datinha (Brazil — Golden Ball winner)",
    "Alexey Makarov (Russia — 2× World Cup champion)",
    "Ozu Moreira (Brazil/Japan — top-flight scorer)",
  ],
  records: [
    { title: "Most World Cup titles", holder: "Brazil", value: "5 titles (2006, 2007, 2008, 2009, 2017)", year: 2017 },
    { title: "Most goals — single World Cup", holder: "Madjer (POR)", value: "21 goals — 2008 tournament", year: 2008 },
    { title: "Most FIFA Puskás Award nominations from Beach Soccer", holder: "Madjer + others", value: "Multiple nominations for bicycle-kick goals", year: 2015 },
    { title: "Portugal's 2015 World Cup win", holder: "Portugal", value: "First European nation to break Russia–Brazil dominance", year: 2015 },
  ],

  variants: ["fifa-beach-soccer", "6-a-side-recreational", "sand-football-informal"],
  relatedSports: ["association-football", "futsal", "footvolley", "sepak-takraw", "handball"],

  skills: [
    "aerial control (bicycle + overhead kicks)",
    "first-touch on soft sand",
    "explosive short-burst speed",
    "shooting through the air",
    "goalkeeper distribution (arm + drop-kick)",
    "conditioning on unstable surface",
  ],
  strategies: [
    { title: "Play through the air", body: "Sand kills rolling passes. Chip, loft, and volley — passes travel best off the surface." },
    { title: "Rotate constantly", body: "Sand exhausts legs 3× faster than grass. Rolling subs every 60–90 seconds keep intensity high." },
    { title: "Set up bicycle kicks", body: "The signature scoring move. Attackers drift to back post; midfielders loop crosses high + long." },
    { title: "Goalkeeper as playmaker", body: "GK's throws can reach the opposition box in one motion. Fast breaks originate from goalkeeper distribution." },
    { title: "Foul strategically", body: "Every foul = direct free kick with no wall. Only foul when goal-side of the ball or the attacker is far from the box." },
  ],

  terminology: [
    { term: "Bicycle kick / Chilena", meaning: "Overhead scissors kick; the signature Beach Soccer scoring technique." },
    { term: "Kick-in", meaning: "Restart from sideline — foot kick, not a throw-in." },
    { term: "Golden goal", meaning: "Sudden-death goal in 3-minute extra time; ends the match." },
    { term: "Sin bin", meaning: "2-minute suspension after a red card before substitute allowed." },
    { term: "Flying sub", meaning: "Unlimited rolling substitution during play." },
    { term: "BSWW", meaning: "Beach Soccer Worldwide — founding governing body (1992)." },
    { term: "Madjer", meaning: "Portuguese GOAT; nickname; considered the sport's Pelé." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play barefoot in a bounded sand area", body: "Even 4v4 kickabouts teach the fundamental adjustments — first touch, no-roll passing, air control." },
      { title: "Master the volley", body: "Passes arrive high; controlling and shooting on the volley are the base skills. Practice against a wall or partner." },
      { title: "Build sand-specific conditioning", body: "Short interval sprints on sand — the fitness demand is uniquely high." },
    ] },
    { level: "advanced", steps: [
      { title: "Learn bicycle + scissors kicks", body: "Progressive drills on gymnastic mats before attempting on live pitch." },
      { title: "Join a BSWW-affiliated club", body: "Europe (Spain, Portugal, Italy, Russia) and Brazil have organised leagues; entry via club trials." },
      { title: "Target Euro Beach Soccer League + Mundialito", body: "Semi-pro competitive circuit outside the FIFA World Cup year." },
    ] },
  ],

  faq: [
    { question: "How is Beach Soccer different from Futsal?", answer: "Futsal is indoor 5-a-side with a hard court + low-bounce ball. Beach Soccer is outdoor 5-a-side on sand, barefoot, with 3×12 periods and no offside. Beach Soccer produces far more aerial goals; futsal is technical and low." },
    { question: "Why are beach soccer scores so high?", answer: "Small pitch (35×27 m vs. 105×68 m), no offside rule, direct free kicks without walls, and constant substitutions keep intensity peaked. FIFA World Cup averages 6–8 goals per match — 3–4× pitch football." },
    { question: "Is Beach Soccer in the Olympics?", answer: "Not yet. It was demonstration at the 2019 ANOC World Beach Games. FIFA + BSWW have pursued IOC recognition; possible LA 2028 or Brisbane 2032 inclusion under discussion." },
    { question: "Who is Beach Soccer's greatest player?", answer: "Madjer (Portugal) — full name Jorge Manuel Rebelo Fonseca — is the sport's Pelé. 5× FIFA World Cup top scorer, ballroom-athletic bicycle kicks, multiple World Cup + European titles across a 20-year career." },
  ],

  wikipediaTitle: "Beach soccer",
  sources: [
    { label: "FIFA — Beach Soccer World Cup", url: "https://fifa.com/beachsoccerworldcup", publisher: "FIFA" },
    { label: "Beach Soccer Worldwide (BSWW)", url: "https://beachsoccer.com", publisher: "BSWW" },
    { label: "Wikipedia — Beach soccer", url: "https://en.wikipedia.org/wiki/Beach_soccer", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

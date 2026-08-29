import type { Sport } from "@/lib/types";

export const fistball: Sport = {
  id: "fistball",
  slug: "fistball",
  name: "Fistball",
  officialName: "Fistball (IFA)",
  aliases: ["Faustball", "Bola-ao-punho", "Pelota al puño"],
  shortDescription:
    "Team net-and-court sport played 5v5 where players strike the ball only with fists/arms — Germany, Austria, Brazil, and Argentina powerhouses; contested at World Games since 1981 and IFA World Championships since 1968.",
  longDescription:
    "Fistball (German 'Faustball') is a team sport with roots in Roman handball and formal codification in 19th-century Germany. Two teams of 5 face off across a 2m-high net on a 50m × 20m grass or indoor court, striking a leather ball only with a fist or forearm. The ball is allowed one ground bounce between each of the maximum three touches per side. Founded internationally by the IFA in 1960, fistball is contested at the World Games (since 1981), IFA World Championships (since 1968 men, 1994 women), and IFA Nations Cup. Germany, Austria, Brazil, and Switzerland dominate; Argentina and Chile lead South America.",

  category: "ball-sports",
  subCategory: "net-and-court team sport",
  sportType: "team",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "summer",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "DE",
  regionOfOrigin: "Germany (Faustball codified 1893; roots trace to Italian 16th-century pallone; IFA founded 1960 in Frankfurt)",
  estimatedOrigin: "Modern rules codified in Germany 1893; IFA founded 1960; first World Championships Austria 1968",

  players: { perTeam: 5, min: 5, max: 5, substitutes: 5, note: "5 players (attacker + setter + defenders); rolling subs between rallies allowed in indoor variant." },
  field: {
    surfaceName: "Fistball court — grass (outdoor) or indoor court",
    dimensions: "50m × 20m outdoor (with 3m safety zone); 40m × 20m indoor",
    description: "Rectangular court divided by 2m-high (men) / 1.9m (women) tape/net; 3m attack line; grass outdoor, wooden/synthetic indoor.",
  },
  equipment: [
    { name: "Fistball", description: "Leather ball, 65-68cm circumference, 320-380g; softer than volleyball for fist-strike safety." },
    { name: "Net/tape", description: "2m (men), 1.9m (women), 1.8m (U18). Rope-tape indoor; net outdoor." },
    { name: "Court shoes", description: "Grass cleats outdoor; court shoes indoor." },
  ],
  duration: { approximateMinutes: 60, structure: "Best-of-3 or best-of-5 sets; each set to 11 points (must win by 2, cap 15)." },
  objective: "Land the ball in the opponent's court after a maximum of 3 fist/arm touches, using only fists or forearms to strike.",
  matchStructure: "Best-of-3 or best-of-5 sets to 11 pts (cap 15). Rally scoring. Serve rotates every set.",

  basicRules: [
    { title: "Fist/forearm only", body: "Ball must be struck with a closed fist or forearm; no open hand, foot, or other body part." },
    { title: "Max 3 touches per side", body: "Same as volleyball; single player may touch consecutively only in specific defensive save cases (indoor)." },
    { title: "One bounce allowed between touches", body: "Ball may bounce once on the ground between each of the 3 touches (unique to fistball)." },
    { title: "Serve from baseline", body: "Underhand or overhead fist serve from behind service line." },
    { title: "Rally scoring", body: "Point awarded on every rally regardless of who served." },
  ],
  advancedRules: [
    { title: "Attack line", body: "Attacker takes third touch — usually a spike from behind 3m attack line." },
    { title: "Ball landing", body: "Ball out if crosses side/end line without bounce; out if bounces twice in own court." },
    { title: "Net/tape violation", body: "Ball may not touch the tape on outdoor; touching net is a fault indoor." },
    { title: "Side change", body: "Teams change sides after each set." },
  ],
  scoring: {
    summary: "Rally scoring to 11 points per set (cap 15); best-of-3 or best-of-5 sets.",
    winCondition: "Team winning majority of sets (2-of-3 or 3-of-5) wins the match.",
    breakdown: [
      { action: "Rally won (ball lands in opponent court or opponent fault)", points: "1" },
    ],
  },
  penalties: [
    { title: "Fault", body: "Illegal touch (open hand, kick), 4+ touches, double bounce, out-of-bounds — point to opponent." },
    { title: "Yellow card", body: "Unsportsmanlike behavior warning." },
    { title: "Red card", body: "Ejection for repeated violations or serious misconduct." },
  ],

  positions: [
    { name: "Attacker/Striker", role: "Third-touch spiker; primary point scorer.", count: 1 },
    { name: "Setter", role: "Second-touch set-up; positions the ball for the striker.", count: 1 },
    { name: "Defenders (back three)", role: "First-touch reception; cover deep court.", count: 3 },
  ],
  officiating: {
    officials: ["Chief referee", "Assistant referee (line judge)", "Scorekeeper", "Timekeeper"],
    summary: "3-4 officials at international IFA matches.",
  },

  governingBodies: [
    { name: "International Fistball Association (IFA)", founded: 1960, headquarters: "Vienna, Austria", website: "https://ifa-fistball.com" },
    { name: "Deutscher Turner-Bund Faustball (Germany)", founded: 1893, headquarters: "Frankfurt, Germany" },
  ],
  majorCompetitions: [
    { name: "IFA Fistball World Championships (men)", frequency: "quadrennial", founded: 1968, region: "worldwide" },
    { name: "IFA Women's World Championships", frequency: "quadrennial", founded: 1994, region: "worldwide" },
    { name: "World Games (Fistball)", frequency: "quadrennial", founded: 1981, region: "worldwide" },
    { name: "IFA Nations Cup", frequency: "biennial", founded: 2004, region: "worldwide" },
  ],
  countriesPlayed: ["DE", "AT", "CH", "BR", "AR", "CL", "NA", "IT", "US", "JP", "CZ", "DK"],
  famousAthletes: [
    "Patrick Thomas (Germany — multiple World Championships)",
    "Sebastian Kunert (Germany — striker star)",
    "Karsten Boye (Germany — striker legend)",
    "Selina Fritzenwallner (Austria — women's star)",
  ],
  records: [
    { title: "Most Men's World Championships", holder: "Germany", value: "13+ titles since 1968; dominant nation", year: 2023 },
    { title: "Most Women's World Championships", holder: "Germany", value: "Multiple titles since 1994", year: 2022 },
    { title: "World Games appearances", holder: "Fistball", value: "Contested at every World Games since 1981", year: 2022 },
  ],

  variants: ["outdoor-5v5-grass", "indoor-5v5-court", "beach-fistball-3v3", "school-4v4-mini"],
  relatedSports: ["volleyball", "sepak-takraw", "beach-volleyball", "pallone-col-bracciale", "pelota"],

  skills: ["fist-strike accuracy + power", "read-and-react defense", "positional footwork", "set precision", "bounce-timing anticipation", "team communication"],
  strategies: [
    { title: "Third-touch spike attack", body: "Set up striker to spike downward from just inside the attack line; power the ball into corners." },
    { title: "Serve to weakest defender", body: "Attack the opponent's least mobile defender or new sub." },
    { title: "Use the bounce", body: "Between touches, allow the bounce to reposition; do not chase the ball in flight when the bounce buys time." },
    { title: "Defensive triangle", body: "3 defenders form a deep triangle to cover angled spike attacks." },
  ],

  terminology: [
    { term: "Faustball", meaning: "German name for fistball ('fist-ball')." },
    { term: "Angreifer", meaning: "Attacker/striker (German)." },
    { term: "Zuspieler", meaning: "Setter (German)." },
    { term: "Bounce", meaning: "Single ground bounce allowed between each of 3 touches per side." },
    { term: "Tape", meaning: "The 2m rope/tape replacing volleyball's net in outdoor play." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Join a Turnverein or IFA-affiliated club", body: "Germany + Austria + Brazil have 100s of clubs; adults + youth welcome." },
      { title: "Learn the fist-punch technique", body: "Closed fist, thumb outside; hit through the ball with the flat top of the fist." },
      { title: "Play 3v3 mini-fistball first", body: "Reduced sides let beginners get more touches." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete in Bundesliga (Germany)", body: "Top-flight club fistball in Germany; pathway to national team." },
      { title: "IFA World Championships or World Games selection", body: "Via national federation trials." },
    ]},
  ],

  faq: [
    { question: "How is fistball different from volleyball?", answer: "Same net-and-court structure and 3-touches-per-side rule, but the ball must be struck with a fist/forearm (not open hand), and a single ground bounce is allowed between each of the 3 touches. This creates longer rallies and rewards fist-strike accuracy over volleyball's aerial spike." },
    { question: "Where is fistball most played?", answer: "Germany (100,000+ registered players), Austria, Switzerland, Brazil (national team world champion in the past), Argentina, Chile, Namibia. IFA has 55+ member nations." },
    { question: "Is fistball Olympic?", answer: "No — but it is a permanent World Games sport (since 1981) and has been proposed for Olympic inclusion." },
  ],

  wikipediaTitle: "Fistball",
  sources: [
    { label: "IFA", url: "https://ifa-fistball.com", publisher: "International Fistball Association" },
    { label: "Wikipedia — Fistball", url: "https://en.wikipedia.org/wiki/Fistball", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

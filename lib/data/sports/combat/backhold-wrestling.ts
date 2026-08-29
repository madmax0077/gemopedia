import type { Sport } from "@/lib/types";

export const backholdWrestling: Sport = {
  id: "backhold-wrestling",
  slug: "backhold-wrestling",
  name: "Backhold Wrestling",
  officialName: "Scottish Backhold Wrestling",
  aliases: ["Scots Backhold", "Cumberland-Westmorland Wrestling (English cousin)", "Backhaad"],
  shortDescription:
    "Traditional Scottish + North English folk wrestling — wrestlers begin with locked hands behind opponent's back (backhold), attempt to throw opponent to ground; releasing grip = loss. Signature event at Highland Games worldwide since 1800s.",
  longDescription:
    "Backhold Wrestling is a traditional Scottish + North English folk wrestling style — wrestlers face each other, lock hands behind opponent's back (this is 'the backhold'), and attempt to throw each other while maintaining the grip. Any wrestler whose grip breaks first, or whose body-part other than feet touches the ground first, LOSES. English variant (Cumberland-Westmorland Wrestling) uses same backhold posture with minor rule differences. Central event at Highland Games competitions worldwide since 1800s — Braemar Highland Gathering (attended by British monarchy since Queen Victoria), Cowal Highland Games, and dozens of smaller Highland Games events in Scotland + North England + Cornish/Scots diaspora (Canada, US, Australia, New Zealand). Weight classes: heavyweight, middleweight, lightweight. Championship at Braemar + Cowal historically prestigious; Scottish Wrestling Bond governs modern sport.",

  category: "combat-sports",
  subCategory: "folk wrestling (Celtic-origin, jacketed-optional standing grip)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "summer",
  era: "medieval",
  popularity: "regional",
  countryOfOrigin: "GB",
  regionOfOrigin: "Scotland + North England (Cumberland, Westmorland, Lake District, Scottish Highlands)",
  estimatedOrigin: "Medieval Celtic + Norse origins; codified at Highland Games from 1800s; governed by Scottish Wrestling Bond since 1970s",

  players: { min: 2, max: 2, note: "1v1 match." },
  equipment: [
    { name: "Wrestling attire (kilt or shorts)", description: "Cumberland-Westmorland variant historically worn embroidered singlets; Scottish variant may wear kilt." },
    { name: "Grass wrestling ring", description: "Traditional grass ring; no fixed size at Highland Games." },
  ],
  duration: { approximateMinutes: 5, structure: "Best-of-3 falls; each fall typically <1 minute; entire match usually 3-5 min." },
  objective: "Throw opponent to ground while maintaining backhold grip; wrestler whose body-part (other than feet) touches ground first = LOSES fall.",
  matchStructure: "3 falls per match (best-of-3); tournament format at Highland Games often single-elimination.",

  basicRules: [
    { title: "Start position: BACKHOLD grip", body: "Wrestlers face each other + lock hands behind opponent's back (each wrestler's chin over opponent's right shoulder, arms wrapped, hands clasped)." },
    { title: "Grip must be maintained through throw", body: "Wrestler who releases grip first LOSES the fall." },
    { title: "First body part (other than feet) to touch ground = loses fall", body: "Even a knee touch = loss; strict standing-throw discipline." },
    { title: "Best-of-3 falls wins match", body: "First to 2 falls wins." },
    { title: "No striking, no leg grips", body: "Pure standing wrestling from backhold; may use leg trips WITHOUT gripping opponent's leg." },
  ],
  advancedRules: [
    { title: "Legal throws", body: "Hip throws (hipe), cross-buttock, back-heel trip, sacrifice throws where wrestler goes to ground WITH opponent (both fall together = judges decide who touched first)." },
    { title: "Sacrifice throws (dohg)", body: "Wrestler deliberately falls WITH opponent to force opponent to hit ground first; risky but effective on stronger opponent." },
    { title: "Grip breaking = automatic loss", body: "Even if opponent hits ground first, if you break grip, you lose." },
    { title: "Weight classes (Highland Games standard)", body: "Lightweight (~70kg), middleweight (~85kg), heavyweight (open weight)." },
    { title: "Cumberland-Westmorland variant differences", body: "Same backhold posture but different scoring nuances; historical northern English wrestling tradition documented since 12th century." },
  ],
  scoring: {
    summary: "Best-of-3 falls; fall = opponent touches ground first (grip maintained).",
    winCondition: "First to 2 falls wins match.",
    breakdown: [
      { action: "Opponent touches ground (any body part other than feet) first while your grip held", points: "1 fall" },
      { action: "You release grip first", points: "You LOSE the fall (regardless of throw)" },
    ],
  },
  penalties: [
    { title: "Illegal leg grip", body: "Fall loss." },
    { title: "Striking", body: "Disqualification." },
    { title: "Refusal to engage backhold", body: "Fall loss." },
  ],

  positions: [{ name: "Wrestler ('wrastler')", role: "Backhold grip + throw execution + fall avoidance.", count: 1 }],
  officiating: {
    officials: ["Referee (ring official)", "Judges (2-3 for fall determination)"],
    summary: "Judges determine which body part touched ground first + grip discipline.",
  },

  governingBodies: [
    { name: "Scottish Wrestling Bond", founded: 1970, headquarters: "Scotland", website: "https://www.scottishwrestlingbond.co.uk" },
    { name: "Cumberland & Westmorland Wrestling Association (England variant)", founded: 1980, headquarters: "Cumbria, England" },
  ],
  majorCompetitions: [
    { name: "Braemar Highland Gathering wrestling championship", frequency: "annual (September)", founded: 1832, region: "Braemar, Scotland — royal event" },
    { name: "Cowal Highland Games wrestling", frequency: "annual (August)", founded: 1894, region: "Dunoon, Scotland" },
    { name: "Grasmere Sports (Cumberland-Westmorland style)", frequency: "annual (August)", founded: 1852, region: "Grasmere, English Lake District" },
    { name: "US Highland Games wrestling (Grandfather Mountain, Long Beach, etc.)", frequency: "annual", founded: 1950, region: "US Scottish-American Highland Games circuit" },
    { name: "Canadian + Australian + New Zealand Highland Games", frequency: "annual", founded: 1900, region: "Scottish diaspora Highland Games worldwide" },
  ],
  countriesPlayed: ["GB (Scotland + Cumbria)", "US (Highland Games diaspora)", "CA (Scottish-Canadian Highland Games)", "AU (Scottish-Australian)", "NZ (Scottish-NZ)", "ZA"],
  famousAthletes: [
    "Various Braemar + Cowal champions across 150+ years",
    "Multi-generation Highland Games wrestling families in Scotland + Cumbria",
    "Alan Kirkpatrick (Cumberland-Westmorland champion, multiple)",
  ],
  records: [
    { title: "Royal recognition", holder: "Braemar Highland Gathering wrestling", value: "British royal family attends annually since Queen Victoria; wrestling is core event alongside caber toss + hammer throw + tossing", year: 2024 },
    { title: "Continuous 800-year tradition (Cumberland-Westmorland variant)", holder: "Cumberland-Westmorland Wrestling", value: "Documented in English northern counties since 12th century; among the oldest continuously-practiced wrestling styles in England", year: 2024 },
  ],

  variants: ["scottish-backhold-standard", "cumberland-westmorland-english-variant", "highland-games-competition-format", "diaspora-us-canada-australia-highland-games-variant"],
  relatedSports: ["cornish-wrestling", "gouren", "glima", "schwingen", "highland-games", "yagli-gures", "sumo"],

  skills: ["backhold grip strength + endurance", "hip throw (hipe) execution", "back-heel trip timing", "sacrifice throw (dohg) judgment", "balance + base defense", "grip discipline (never release)"],
  strategies: [
    { title: "Grip discipline first", body: "Never release grip; even losing fall is better than releasing (releasing = auto-loss)." },
    { title: "Hipe (hip throw) as go-to attack", body: "Hip below opponent's center + lift + rotate = classic Highland Games throw." },
    { title: "Sacrifice throw for stronger opponent", body: "If overmatched, deliberately fall together — force judges to decide who touched first." },
    { title: "Grip breaking counter", body: "If you sense your grip breaking, initiate throw immediately before it fails." },
  ],

  terminology: [
    { term: "Backhold", meaning: "The mandatory start-grip: hands locked behind opponent's back." },
    { term: "Hipe", meaning: "Hip throw — classic Highland Games attack." },
    { term: "Dohg", meaning: "Sacrifice throw — deliberately fall with opponent." },
    { term: "Chip", meaning: "Small technical throws or trips." },
    { term: "Grand Wrestling Champion", meaning: "Braemar wrestling champion title." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Attend local Highland Games (Scotland or diaspora)", body: "Wrestling exhibitions + amateur entries at every Highland Games." },
      { title: "Train with Scottish Wrestling Bond clubs", body: "Small but active club network across Scotland + Cumbria." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete for Braemar Grand Championship", body: "Highest honor in Scottish backhold wrestling — royal attendance." },
      { title: "Cross-style training with Cornish + Breton wrestling", body: "Celtic wrestling family shares many technical elements." },
    ]},
  ],

  faq: [
    { question: "How do wrestlers score without releasing grip?", answer: "The backhold posture allows leg-trip attacks (using your own leg to trip opponent's stance without gripping their leg), hip throws by lifting + rotating hips under opponent's center of gravity, sacrifice throws where you deliberately fall together forcing opponent to hit ground first, and back-heel trips. Skilled backhold wrestlers execute impressive throws entirely from the fixed grip." },
    { question: "Is backhold wrestling only at Highland Games?", answer: "Primarily yes — it's the traditional Highland Games wrestling discipline. However, Scottish Wrestling Bond runs some club-level training + tournaments outside Highland Games. Cumberland-Westmorland variant has its own English northern counties tournament circuit (Grasmere Sports flagship). Scottish diaspora Highland Games in US + Canada + Australia + NZ continue tradition worldwide." },
    { question: "How is it different from Cornish Wrestling?", answer: "Cornish uses jacket grips + is not fixed to backhold posture. Backhold requires the specific locked-hands-behind-back start position throughout; grip release = automatic loss. Both are Celtic-origin folk wrestling; both feature at Highland Games events. Backhold is Scottish + North English; Cornish is southwestern English." },
  ],

  wikipediaTitle: "Scottish backhold",
  sources: [
    { label: "Scottish Wrestling Bond", url: "https://www.scottishwrestlingbond.co.uk", publisher: "SWB" },
    { label: "Wikipedia — Scottish backhold", url: "https://en.wikipedia.org/wiki/Scottish_backhold", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

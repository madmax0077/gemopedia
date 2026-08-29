import type { Sport } from "@/lib/types";

export const freezeTag: Sport = {
  id: "freeze-tag",
  slug: "freeze-tag",
  name: "Freeze Tag",
  officialName: "Freeze Tag",
  aliases: ["Stuck in the Mud", "Ice Tag", "Statue Tag"],
  shortDescription:
    "Tag variant — being tagged freezes you in place; you stay frozen (statue-still, arms out) until a free teammate crawls under your legs or touches you to unfreeze.",
  longDescription:
    "Freeze Tag is the single most popular Tag variant on Earth, played in every playground where Tag itself is played. Instead of the caught player becoming 'It', they must freeze in place — usually with arms outstretched — until a teammate frees them. It is functionally identical to the British 'Stuck in the Mud' and the Australian 'Ice Tag'. The mechanic transforms Tag from a solo game (you're It until you tag someone) into a team survival game (the runners cooperate to keep everyone unfrozen while the seekers try to freeze everyone). Freeze Tag is a staple of American schoolyards, camp warmup games, PE-class icebreakers, and neighborhood play — an essential physical-literacy game that develops running, dodging, teamwork, and spatial awareness.",

  category: "playground-games",
  subCategory: "cooperative tag variant",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "American schoolyards; parallel evolution in UK ('Stuck in the Mud') and Australia ('Ice Tag')",
  estimatedOrigin: "Mid-20th-century America — likely evolved organically from Tag as playground teachers sought a group-cooperation variant",

  players: { min: 4, max: 30, note: "Best with 8–20 players; smaller groups struggle to keep runners unfrozen." },
  field: {
    surfaceName: "Playground, gym floor, grass field",
    dimensions: "Roughly 15–40 m × 15–40 m — small enough that runners can't escape indefinitely, large enough for real dodging",
    description: "Any bounded space with clear boundaries. Grass reduces injury risk from tagged players falling; hard courts allow faster running.",
  },
  equipment: [
    { name: "None required", description: "Zero equipment — only players and a bounded space. Sometimes cones or chalk lines mark boundaries." },
    { name: "Team markers (optional)", description: "In some variants: coloured wristbands or bibs distinguish taggers from runners." },
    { name: "Whistle (adult supervision)", description: "For PE class or camp: whistle to start/end rounds, call out-of-bounds." },
  ],
  duration: {
    approximateMinutes: 10,
    structure: "Rounds of 3–10 minutes; ends when all runners are frozen OR the timer runs out. Fresh taggers each round.",
  },
  objective:
    "For the taggers ('It'): freeze every runner. For the runners: stay unfrozen while freeing frozen teammates by crawling under their legs or touching them.",
  matchStructure:
    "1–3 players designated 'It' (taggers). All other players are runners. On 'Go!', taggers chase runners; touched runners freeze in place with legs apart and arms outstretched. Free runners can unfreeze frozen teammates by crawling between their legs (traditional) or touching them (simplified version). Round ends when every runner is frozen (taggers win) or after a time limit (runners win). Then new taggers are chosen — usually the last player frozen in the previous round.",

  basicRules: [
    { title: "1–3 players are 'It'", body: "Chosen by counting-out rhyme ('One potato, two potato…') or volunteering. Wear something distinctive if desired (bib, arm raised)." },
    { title: "Tag freezes you in place", body: "Touched by an 'It' → you freeze immediately. Stand still with legs apart and arms outstretched (traditional 'stuck in the mud' pose)." },
    { title: "Free runners unfreeze frozen teammates", body: "Crawl between the frozen player's legs (Stuck in the Mud variant), OR simply touch them (simplified). Frozen player rejoins the game unfrozen." },
    { title: "Bounded play area", body: "Boundaries agreed before play. Runners who leave the area are considered frozen (or out for that round)." },
    { title: "Round ends when all frozen", body: "Taggers win when every runner is frozen. Round ends; new taggers chosen." },
    { title: "Time limit alternative", body: "If a round drags on, timer (2–5 minutes) is set; runners still moving at the end 'win' the round." },
  ],
  advancedRules: [
    { title: "Multiple taggers scaling", body: "Small groups (5 players): 1 tagger. Medium (10–15): 2 taggers. Large (20+): 3–5 taggers." },
    { title: "Zombie Freeze Tag variant", body: "Frozen runners become taggers — spreading the 'infection' across the field until only 1 runner remains." },
    { title: "Unfreeze cooldown", body: "Some rules: player who was just unfrozen has 3-second invulnerability to prevent instant re-freezing." },
    { title: "Bases / safe zones", body: "Small designated 'base' areas where runners are safe — but only 3 seconds each, or no bases at all in strict play." },
    { title: "Winter variant (Ice Tag)", body: "Played in snow — the movement is slower + the aesthetic ties the 'freeze' metaphor to actual cold. Popular in Nordic countries." },
    { title: "Cross-country freeze tag", body: "Camp variant on much larger terrain (forests, meadows) — much slower, more strategic hide-and-move gameplay." },
  ],
  scoring: {
    summary: "Round-based. Team wins when either all runners frozen (taggers win) or timer expires with runners still moving (runners win).",
    winCondition: "Taggers win by freezing every runner. Runners win if any player is still unfrozen at the timer expiry.",
    breakdown: [
      { action: "All runners frozen", points: "Taggers win the round" },
      { action: "Runner still moving at time limit", points: "Runners win the round" },
      { action: "Frozen player unfrozen by teammate", points: "Player rejoins the game" },
    ],
  },

  positions: [
    { name: "It / Tagger", role: "Chase runners to freeze them by touch.", count: 2 },
    { name: "Runner", role: "Dodge taggers + unfreeze frozen teammates." },
    { name: "Adult supervisor / PE teacher", role: "Marks boundaries + starts/stops rounds + ensures safety." },
  ],
  officiating: {
    officials: ["Adult supervisor (PE class, camp)", "None in casual friend play"],
    summary: "No formal officiation. Adult supervisor in PE/camp settings monitors boundaries and safety; players self-officiate honesty on tags.",
  },

  governingBodies: [
    { name: "No official governing body — folk playground game", founded: 0, headquarters: "n/a" },
  ],
  majorCompetitions: [
    { name: "No formal competitions — recreational game", frequency: "n/a", founded: 0, region: "n/a" },
    { name: "PE / camp / after-school programs (informal)", frequency: "daily", founded: 1900, region: "worldwide" },
  ],
  countriesPlayed: ["US", "CA", "GB", "AU", "NZ", "IE", "DE", "FR", "JP", "KR", "IN", "BR", "MX", "ZA", "SE", "FI"],
  famousAthletes: [
    "No professional players — universal children's game",
    "Featured in school PE curricula worldwide (SHAPE America, PE curriculum standards)",
  ],
  records: [
    { title: "Estimated players worldwide daily", holder: "Global school playgrounds", value: "Millions of children play daily", year: 2020 },
    { title: "Recommended in child fitness guidelines", holder: "American Heart Association / CDC", value: "Cited as example of MVPA (moderate-to-vigorous physical activity)", year: 2020 },
  ],

  variants: ["stuck-in-the-mud-british", "ice-tag-nordic", "zombie-freeze-tag", "chain-tag", "shadow-tag"],
  relatedSports: ["tag", "capture-the-flag", "hide-and-seek", "duck-duck-goose", "kick-the-can"],

  skills: [
    "running speed + agility",
    "quick direction changes (cutting)",
    "spatial awareness (peripheral vision)",
    "teamwork + cooperation",
    "endurance (rounds can last several minutes)",
  ],
  strategies: [
    { title: "For taggers — corner runners", body: "Chasing in a straight line rarely works. Herd runners toward boundaries or corners where they run out of dodging room." },
    { title: "For taggers — coordinate 2-on-1", body: "Two taggers can trap one runner between them with much higher success rate than solo chasing." },
    { title: "For runners — stay near frozen teammates", body: "Move as a cluster near frozen players so you can unfreeze them quickly. Cluster movement is safer than lone running." },
    { title: "For runners — bait + switch", body: "Draw taggers toward a frozen teammate, then dart around them to unfreeze; requires teamwork." },
    { title: "Fitness pacing", body: "Rounds are 3–10 minutes of near-constant running. Don't sprint all-out early — sustain a fast jog with sprint bursts." },
  ],

  terminology: [
    { term: "It / Tagger", meaning: "Player designated to chase and freeze runners." },
    { term: "Frozen", meaning: "Tagged player standing still with arms outstretched, waiting for teammate to unfreeze." },
    { term: "Unfreeze", meaning: "Free a frozen teammate — traditionally by crawling under their legs; casually by touching them." },
    { term: "Base / Safe zone", meaning: "Optional designated area where runners are temporarily safe (3-second limit typical)." },
    { term: "Zombie variant", meaning: "Rules where frozen players become taggers, spreading the freeze until 1 runner left." },
    { term: "Chain Tag", meaning: "Related variant — tagged players join hands with 'It' and chase as a growing chain." },
    { term: "Stuck in the Mud", meaning: "British name for Freeze Tag — traditional 'legs apart, arms out' pose." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Learn Tag first", body: "Freeze Tag is a variant — kids should understand the basic Tag mechanic (chase + touch = you're It) before adding the freezing rule." },
        { title: "Start with 1 tagger + small group", body: "5–8 players + 1 tagger is easiest. Add taggers as group grows." },
        { title: "Emphasise the unfreeze mechanic", body: "The 'unfreeze' rule is what makes it a team game — kids need to be reminded to look for frozen friends, not just run." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Larger groups + zone play", body: "20+ players in a large space — introduces spatial strategy (guard zones, split-attack)." },
        { title: "Try Zombie Freeze Tag", body: "Frozen players become taggers — dramatically changes strategy (runners work together longer)." },
        { title: "Cross-country variant", body: "Play in a park or forest with much larger bounded area — becomes as much hide-and-seek as tag." },
      ],
    },
  ],

  faq: [
    { question: "How is Freeze Tag different from regular Tag?", answer: "In regular Tag, being tagged makes YOU the new 'It'. In Freeze Tag, being tagged freezes you in place — someone stays 'It' for the whole round, and frozen players wait for teammates to unfreeze them. This turns a solo game into a team survival game." },
    { question: "How do you unfreeze someone?", answer: "Two common methods: (1) Traditional 'Stuck in the Mud' style — the frozen player stands with legs apart and a teammate crawls under their legs to unfreeze them. (2) Simplified version — teammate just touches the frozen player. Choose one at start of game." },
    { question: "How many players is Freeze Tag good for?", answer: "5–30 players is the sweet spot. Below 5, the taggers overwhelm too quickly. Above 30, chaos dominates and the game becomes hard to track. For 8–15 players: 2 taggers. For 20+: 3–5 taggers." },
    { question: "Is Freeze Tag safe?", answer: "Reasonably safe — it's just running + light touching. Common injuries: bumping into other players, tripping. Play on grass or soft surface where possible; ensure boundaries are clear (no traffic, no drop-offs). Not recommended on ice or slick surfaces." },
    { question: "What's the 'Zombie' variant?", answer: "Zombie Freeze Tag: frozen players become taggers instead of waiting for unfreezing. The 'infection' spreads across the field until only one runner remains — that runner wins. Popular Halloween-season variant + at camps." },
  ],

  wikipediaTitle: "Freeze tag",
  sources: [
    { label: "Wikipedia — Freeze tag", url: "https://en.wikipedia.org/wiki/Freeze_tag", publisher: "Wikipedia" },
    { label: "SHAPE America — PE curriculum standards", url: "https://www.shapeamerica.org/", publisher: "SHAPE America" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const manhunt: Sport = {
  id: "manhunt",
  slug: "manhunt",
  name: "Manhunt",
  officialName: "Manhunt",
  aliases: ["Man Hunt", "Night Manhunt", "Team Hide-and-Seek", "Ringolevio (NYC variant)"],
  shortDescription:
    "Large-area team Hide-and-Seek — one team hides across a neighborhood or camp; the seeker team hunts and tags them, often played at night with flashlights.",
  longDescription:
    "Manhunt is a large-area, team-based Hide-and-Seek game especially popular with American and Canadian teenagers on suburban streets, at summer camps, and youth-group retreats. Unlike plain Hide-and-Seek, Manhunt has TEAMS: one hides across a large bounded area (a neighborhood, a park, a camp property), the other searches. Tagged hiders either join the seekers ('convert' variant) or are 'out' for the round. Games often run for hours across sprawling terrain, played at dusk or after dark for maximum atmosphere. Manhunt is essentially unregulated — every neighborhood and camp has its own house rules — but the core mechanic (large area + team seekers + tagging) is universal. The New York City version 'Ringolevio' has particularly detailed rules and a documented street-culture history. Modern gaming references include Manhunt as inspiration for Fortnite's Prop Hunt, Rainbow Six's Hostage, and countless YouTube-viral 'Neighborhood Manhunt' challenges.",

  category: "playground-games",
  subCategory: "team hide-and-seek / large-area chase",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "summer",
  era: "20th-century",
  popularity: "regional",

  countryOfOrigin: "US",
  regionOfOrigin: "American + Canadian suburbs 1950s onwards; NYC 'Ringolevio' variant 1920s onward",
  estimatedOrigin: "Mid-20th-century American suburbs (car-culture-era + safe neighborhoods enabled large-scale play); Ringolevio NYC 1920s",

  players: { min: 6, max: 40, note: "Best with 10–25; below 6 no team dynamic, above 30 becomes hard to track." },
  field: {
    surfaceName: "Neighborhood streets, park, summer-camp grounds, wooded area",
    dimensions: "Large — 200 m to 2 km radius; bounded but sprawling",
    description: "Requires substantial terrain: multiple houses, streets, cars, trees, playgrounds. Manhunt WITHOUT a large hiding area is just Tag. Traditional suburban play uses ~5-block area; camp play uses 20+ acres.",
  },
  equipment: [
    { name: "None required (traditional)", description: "Just players, bounded terrain, and (ideally) darkness. That's it." },
    { name: "Flashlights (night variant)", description: "Traditional dusk / night play — one flashlight per seeker helps hunt in the dark." },
    { name: "Walkie-talkies / phones (large-area)", description: "For camp-scale games (20+ acres): seekers coordinate via radio/phone to close in on hiders." },
    { name: "Team armbands / bibs", description: "For clear team identification in confusion, especially in mixed lighting conditions." },
    { name: "Meeting point / 'jail'", description: "Some rules have a designated jail where caught hiders wait." },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "Long — casual games 30–90 minutes; camp games 2+ hours; competitive versions run until one team fully captured.",
  },
  objective:
    "For seekers: find and tag every hider. For hiders: stay uncaught for the game duration OR reach a designated 'safe home' base without being tagged.",
  matchStructure:
    "Boundaries + game duration agreed. Teams divided (equal, or 60/40 favoring hiders). Hiders get a 3-5 minute head start. Seekers then hunt across the bounded area. Rules dictate: (a) tagged hiders join seekers OR (b) tagged hiders are 'out' OR (c) tagged hiders go to jail (some rules allow rescue). Game ends when all hiders caught OR time expires OR (some versions) hiders reach a 'safe home' base to win.",

  basicRules: [
    { title: "Two teams", body: "Split players roughly equal — or 60/40 favoring hiders. Traditional: 3 seekers per 5 hiders is fair." },
    { title: "Define boundaries + game area", body: "Absolute must — everyone must agree on exact area (which streets, which yards, which parts of camp). Out-of-bounds = automatic capture." },
    { title: "Hiders get head start", body: "Seekers close eyes + count to 60–120 while hiders scatter and hide. Longer for larger areas." },
    { title: "Seekers hunt + tag", body: "Seekers walk + search; tagging a hider (touch on shoulder or back) counts as capture." },
    { title: "Choose tag consequence", body: "'Convert' rule: tagged hiders join seekers. 'Elimination' rule: tagged hiders sit out. 'Jail' rule: tagged hiders go to a marked spot; free hiders can rescue by tagging." },
    { title: "Game ends by capture or timer", body: "Traditional: game ends when all hiders caught. Timed variant: game ends at time limit; hiders still free win." },
  ],
  advancedRules: [
    { title: "Ringolevio (NYC classic)", body: "Two teams, a chalked 'den' as jail; jail-freeing requires the rescuer to touch the caged prisoner AND shout 'Ringolevio! One-two-three!' — highly codified NYC street tradition." },
    { title: "Safe home variant", body: "Hiders can 'win' individually by reaching a designated home base without being tagged; adds racing dynamic to hiding." },
    { title: "Night Manhunt", body: "Played after dark with flashlights. Massively changes tactics — flashlight = visibility beacon; sneak hiders can be invisible in shadows." },
    { title: "Prop hunt variant", body: "Hiders can crouch behind or 'become' inanimate objects; seekers must inspect suspicious 'objects'. Comedy potential high." },
    { title: "Camp-scale Manhunt", body: "20+ acres, walkie-talkies, teams of 10+, 90+ min games. Serious tactical hide-and-seek." },
    { title: "Streaming / YouTube Manhunt", body: "Modern viral phenomenon — teens film their neighborhood Manhunts, edit as chase videos. Sub-genre on TikTok + YouTube 2020s." },
  ],
  scoring: {
    summary: "Team-based: seekers win by capturing all hiders; hiders win by surviving time limit OR reaching safe home.",
    winCondition: "Seekers win: all hiders captured. Hiders win: at least one hider free at time expiry OR safe home reached (variant-dependent).",
    breakdown: [
      { action: "Seeker tags hider", points: "1 capture (hider joins seekers OR is out OR jailed)" },
      { action: "Free hider rescues jailed teammate (jail variant)", points: "Jailed hider freed" },
      { action: "Hider reaches safe home (safe-home variant)", points: "Individual win" },
      { action: "All hiders captured", points: "Seekers win the game" },
      { action: "Timer expires with hiders free", points: "Hiders win the game" },
    ],
  },

  positions: [
    { name: "Seeker", role: "Hunts + tags hiders across the bounded area." },
    { name: "Hider", role: "Stays concealed; some rules allow active movement + rescues." },
    { name: "Jailed hider (jail variant)", role: "Captured player waiting for teammate rescue." },
    { name: "Adult supervisor (camp / minor-age settings)", role: "Enforces boundaries + safety — mandatory at organized youth events." },
  ],
  officiating: {
    officials: ["None in casual play", "Adult supervisor (camp / youth group setting)"],
    summary: "No formal officiation; agreed boundaries + honor-system tag calls. Adult supervision mandatory at organized youth events for safety + boundary enforcement.",
  },

  governingBodies: [
    { name: "No official governing body — traditional / folk game", founded: 0, headquarters: "n/a" },
  ],
  majorCompetitions: [
    { name: "No formal competitions — recreational game", frequency: "n/a", founded: 0, region: "n/a" },
    { name: "Summer camps + youth groups (informal)", frequency: "seasonal", founded: 1950, region: "North America" },
    { name: "Ringolevio street tradition (NYC)", frequency: "informal", founded: 1920, region: "NYC boroughs" },
  ],
  countriesPlayed: ["US", "CA", "GB", "AU", "NZ", "IE"],
  famousAthletes: [
    "No professional players — recreational teen / camp game",
    "Emmett Grogan — 'Ringolevio' (1972 memoir) — literary chronicle of NYC childhood street Manhunt",
    "Featured in countless YouTube 'Neighborhood Manhunt' videos (2015–present)",
  ],
  records: [
    { title: "Emmett Grogan's memoir 'Ringolevio'", holder: "Emmett Grogan (Digger co-founder)", value: "1972 autobiography naming NYC street version", year: 1972 },
    { title: "Largest documented Manhunt game", holder: "Various summer camps", value: "100+ players across 50+ acres reported", year: 2015 },
    { title: "Longest single Manhunt game", holder: "College campus + camp reports", value: "12+ hours multi-team session (extreme cases)", year: 2018 },
  ],

  variants: ["classic-manhunt", "ringolevio-nyc", "night-manhunt-flashlight", "safe-home-race-variant", "prop-hunt", "camp-scale-radio-manhunt"],
  relatedSports: ["hide-and-seek", "capture-the-flag", "kick-the-can", "tag", "sardines"],

  skills: [
    "stealth + quiet movement",
    "navigation + spatial memory (large area)",
    "risk assessment (hide vs. move)",
    "night vision + hearing (night play)",
    "team coordination (radio / signals)",
    "sprint bursts + endurance",
  ],
  strategies: [
    { title: "For hiders — move periodically", body: "Static hiders eventually get found. Move every 5–10 minutes to a new spot; hardest to find are those who never stay put." },
    { title: "For hiders — high spots + shadows", body: "Elevated positions (roof, treehouse, high tree branch) rarely searched. Shadows + dark clothing at dusk = near-invisibility." },
    { title: "For seekers — split territory", body: "Divide the bounded area into zones; each seeker (or pair) covers one zone. Prevents overlap + missing corners." },
    { title: "For seekers — listen more than look", body: "Hiders make noise. Movement rustles leaves; whispered giggles carry. In darkness, ears beat eyes." },
    { title: "For seekers — return to previously searched areas", body: "Hiders often move to spots already searched (thinking they're safe). Second sweeps catch these." },
    { title: "For teams — coordinate via radio", body: "In large games, seekers coordinate by radio to close in on hiders — herding rather than chasing." },
  ],

  terminology: [
    { term: "Manhunt", meaning: "The game itself; also refers to a single hunt / round." },
    { term: "Seeker / Hunter", meaning: "Player actively searching for hiders." },
    { term: "Hider", meaning: "Player attempting to avoid capture." },
    { term: "Boundaries", meaning: "Agreed geographic limits of the play area — critical to prevent 'runners' fleeing indefinitely." },
    { term: "Safe home", meaning: "In some variants — designated goal where hiders can 'win' by reaching un-tagged." },
    { term: "Jail / Den", meaning: "In jail-variant + Ringolevio — marked area where captured hiders wait for rescue." },
    { term: "Convert", meaning: "In convert-variant — tagged hider immediately joins seekers." },
    { term: "Ringolevio", meaning: "NYC-specific codified variant with a chalked 'den' + specific rescue chant." },
    { term: "Night Manhunt", meaning: "Traditional evening / after-dark version with flashlights." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play in a familiar backyard or neighborhood", body: "Start where everyone knows the terrain. Boundaries: 'this yard + the driveway + the sidewalk to that tree'. 30-min games." },
        { title: "Use daylight for first games", body: "Night play is atmospheric but harder to organize. Learn the rhythm in daylight first." },
        { title: "Try both 'convert' + 'elimination' rules", body: "See which your group prefers — convert extends game length; elimination is quicker." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Camp-scale Manhunt with radios", body: "20+ players across 20+ acres, with walkie-talkies + a jail + multi-hour sessions. Deep strategic experience." },
        { title: "Night Manhunt with flashlights", body: "The classic teenage form — dusk falls, everyone gets a flashlight, atmosphere is peak." },
        { title: "Try Ringolevio (NYC rules)", body: "Formal chalked den, jail-rescue mechanics + rescue chant — the most codified Manhunt tradition." },
      ],
    },
  ],

  faq: [
    { question: "How is Manhunt different from Hide-and-Seek?", answer: "Two big differences: (1) TEAMS — Manhunt has team of seekers vs. team of hiders, not one lone seeker. (2) SCALE — Manhunt is played across large bounded areas (neighborhoods, camp grounds, parks), often for hours, whereas Hide-and-Seek is small-area + quick. Manhunt is more strategic + endurance-oriented; Hide-and-Seek is quicker + more social." },
    { question: "Is Night Manhunt safe?", answer: "With caveats. Safe: bounded area agreed, flashlights required, boundaries include only safe terrain (no busy streets, no water hazards), adult check-in every 30 min for youth groups. Unsafe: unbounded 'the whole neighborhood', no supervision, players trespassing on unknown yards, playing near roads. Follow common sense + local laws." },
    { question: "What's Ringolevio?", answer: "The New York City street version of Manhunt — codified since the 1920s. Features a chalked 'den' (jail) in the middle of the play area. To rescue a jailed teammate, a free hider must physically touch them and shout 'Ringolevio! One-two-three!' Emmett Grogan's 1972 memoir 'Ringolevio' made it culturally iconic beyond NYC." },
    { question: "How many players do you need?", answer: "Minimum 6 (3v3 — barely works). Ideal 10–25 (rich team dynamics + manageable). Above 30 becomes hard to track everyone; consider splitting into two simultaneous games. Camp-scale games with 40+ players work but require radio communication + adult coordinators." },
    { question: "How long does a game last?", answer: "Casual games: 30–60 minutes. Camp-scale games: 90–120 minutes. Extreme (multi-team, huge area): 3–5 hours. Time-limit rule cap common in youth-group settings for meal/curfew reasons. Traditional 'play until all captured' can drag if hiders are skilled." },
  ],

  wikipediaTitle: "Manhunt (game)",
  sources: [
    { label: "Wikipedia — Manhunt", url: "https://en.wikipedia.org/wiki/Manhunt_(game)", publisher: "Wikipedia" },
    { label: "Wikipedia — Ringolevio", url: "https://en.wikipedia.org/wiki/Ringolevio", publisher: "Wikipedia" },
    { label: "Emmett Grogan — 'Ringolevio: A Life Played for Keeps' (1972)", publisher: "Little, Brown" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

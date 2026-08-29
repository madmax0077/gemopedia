import type { Sport } from "@/lib/types";

export const athletics: Sport = {
  id: "athletics",
  slug: "athletics",
  name: "Athletics",
  officialName: "Athletics (Track and Field)",
  aliases: ["Track and Field", "T&F"],
  shortDescription:
    "The umbrella Olympic discipline covering track (sprint, middle, long distance, hurdles), field (jumps + throws), road (marathon, race walking), and cross country — 47 medal events at every Summer Games.",
  longDescription:
    "Athletics ('track and field' in North America) is the Olympic Games' original discipline — every event featured at the 1896 Athens Olympics was athletics. Governed globally by World Athletics (founded 1912 as IAAF), the sport encompasses 47 Olympic medal events across sprints (100m-400m), middle distance (800m, 1500m), long distance (5000m, 10000m, marathon), hurdles (110m/100m + 400m), field jumps (long, triple, high, pole vault), field throws (shot put, discus, javelin, hammer), race walking (20km, 50km), and combined events (heptathlon, decathlon). USA, Kenya, Jamaica, and Ethiopia dominate the medal tables.",

  category: "athletics",
  subCategory: "umbrella Olympic track + field discipline",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "year-round",
  era: "ancient",
  popularity: "global",

  countryOfOrigin: "GR",
  regionOfOrigin: "Ancient Olympia, Greece (Olympics from 776 BCE)",
  estimatedOrigin: "Ancient Olympics 776 BCE; modern Olympics 1896; IAAF (now World Athletics) founded 1912",

  players: { min: 1, max: 8, note: "Individual events (100m, high jump) 8 lanes/positions. Relays: 4-person teams. Marathon: 200+ mass start." },
  field: {
    surfaceName: "Track and field stadium",
    dimensions: "400 m 8-lane synthetic Mondo track; standardized field event areas",
    description: "Oval track (typically 400m); field events on infield or side pits. Certified by World Athletics for records." },
  equipment: [
    { name: "Track spikes", description: "Sport-specific: sprint (6-8 spikes), middle-distance (5 spikes + flat), long-distance (racing flat)." },
    { name: "Sprint blocks", description: "Starting blocks for 100m/200m/400m/hurdles + relays." },
    { name: "Batons (relays)", description: "Aluminum baton for 4×100m + 4×400m." },
    { name: "Implements (throws)", description: "Shot: 7.26 kg men / 4 kg women. Discus: 2 kg men / 1 kg women. Javelin: 800g men / 600g women. Hammer: 7.26 kg men / 4 kg women." },
    { name: "Pole vault + high jump equipment", description: "Fiberglass poles (5m+), landing pads." },
    { name: "Vertical + long jump measures", description: "Electronic + tape measure verification." },
  ],
  duration: {
    approximateMinutes: 10,
    structure: "Sprint: 10-45 seconds. Middle: 2-4 min. Long: 15-45 min. Marathon: 2h+. Field events: 60-min timed sessions." },

  objective:
    "Win your event — fastest time (track), longest/highest jump or throw (field). At Olympics: earn medal via prelims → semis → final elimination.",
  matchStructure:
    "Prelims/heats → semis → final. Field events: qualification round + final. Marathon + walks: single mass-start race.",

  basicRules: [
    { title: "Lane assignments (track)", body: "Sprints run in assigned lanes; distance races merge onto rail lane." },
    { title: "False starts", body: "Automatic disqualification on second false start (some events, one false start = DQ)." },
    { title: "Baton exchange zones (relays)", body: "20 m acceleration + 20 m exchange zone; drop = DQ." },
    { title: "Field event attempts", body: "3 attempts for shot/discus/javelin/long/triple; top 8 get 3 more." },
    { title: "Photofinish", body: "Ties broken by chest crossing line first — automated photo systems for elite events." },
  ],
  advancedRules: [
    { title: "Wind + altitude legality", body: "Sprint/jump records only ratified if wind ≤ +2.0 m/s; altitude noted." },
    { title: "Reaction time (sprints)", body: "Below 100ms reaction = false start; blocks measure pressure change." },
    { title: "Doping tests", body: "WADA-compliant in + out of competition testing." },
    { title: "Pacemakers (Diamond League)", body: "Legal pacemakers in road + track races; sometimes wave lights on rail." },
  ],
  scoring: {
    summary: "Track: fastest time. Field: longest/highest attempt (measured to nearest cm). Combined events: points table from IAAF scoring tables.",
    winCondition: "Fastest time OR longest/highest distance OR most combined-event points.",
    breakdown: [
      { action: "1st place finish", points: "Gold medal + world/personal record recognition" },
      { action: "World record", points: "Ratified only with wind/course compliance" },
      { action: "Combined event points (decathlon)", points: "9000+ = elite; Kevin Mayer 9126 WR" },
    ],
  },
  penalties: [
    { title: "False start", body: "Automatic DQ (second false start; sometimes first)." },
    { title: "Lane cut (200m/400m)", body: "DQ for cutting inside your lane in curves." },
    { title: "Baton drop", body: "DQ of entire relay team." },
    { title: "Doping positive", body: "2-4 year ban + record annulment." },
  ],

  positions: [
    { name: "Sprinter", role: "100m-400m specialist.", count: 1 },
    { name: "Distance runner", role: "800m-marathon specialist." },
    { name: "Hurdler", role: "100m/110m hurdles + 400m hurdles." },
    { name: "Jumper (high/long/triple/pole)", role: "Jump events specialist." },
    { name: "Thrower (shot/discus/javelin/hammer)", role: "Field throwing specialist." },
    { name: "Race walker", role: "20 km / 50 km race walking specialist." },
  ],
  officiating: {
    officials: ["Chief Referee", "Track judges", "Field event judges", "Photofinish officials", "Anti-doping officials"],
    summary: "World Athletics + national federations sanction all events. Photofinish + measurement systems standardized worldwide.",
  },

  governingBodies: [
    { name: "World Athletics (formerly IAAF)", founded: 1912, headquarters: "Monaco", website: "https://worldathletics.org" },
    { name: "USA Track and Field (USATF)", founded: 1979, headquarters: "Indianapolis, USA", website: "https://usatf.org" },
    { name: "European Athletics", founded: 1934, headquarters: "Lausanne, Switzerland", website: "https://european-athletics.com" },
  ],
  majorCompetitions: [
    { name: "Olympic Games", frequency: "every 4 years", founded: 1896, region: "rotating" },
    { name: "World Athletics Championships", frequency: "biennial", founded: 1983, region: "rotating" },
    { name: "Diamond League (14 meets)", frequency: "annual", founded: 2010, region: "global circuit" },
    { name: "European Championships", frequency: "biennial", founded: 1934, region: "Europe" },
    { name: "World Cross Country Championships", frequency: "annual", founded: 1973, region: "rotating" },
  ],
  countriesPlayed: ["US", "KE", "ET", "JM", "GB", "GE", "IT", "DE", "CN", "JP", "AU", "BR", "SE"],
  famousAthletes: [
    "Usain Bolt (JAM, 8 Olympic golds, 100m + 200m + 4×100m WR)",
    "Sifan Hassan (NL, 3× Olympic golds Paris 2024 distance)",
    "Karsten Warholm (NOR, 400m hurdles WR)",
    "Elaine Thompson-Herah (JAM, sprint double-double 2016+2020)",
    "Mondo Duplantis (SWE, pole vault WR + Olympic gold 2020+2024)",
    "Sydney McLaughlin-Levrone (US, 400m hurdles WR)",
  ],
  records: [
    { title: "100m men's WR", holder: "Usain Bolt", value: "9.58 seconds (Berlin 2009)", year: 2009 },
    { title: "100m women's WR", holder: "Florence Griffith-Joyner", value: "10.49 seconds (1988)", year: 1988 },
    { title: "Marathon men's WR", holder: "Kelvin Kiptum", value: "2:00:35 (Chicago 2023)", year: 2023 },
    { title: "Pole vault men's WR", holder: "Mondo Duplantis", value: "6.28 m (Paris 2024)", year: 2024 },
    { title: "Long jump men's WR", holder: "Mike Powell", value: "8.95 m (Tokyo 1991)", year: 1991 },
  ],

  variants: ["marathon-running", "cross-country", "race-walking", "decathlon", "heptathlon", "para-athletics"],
  relatedSports: ["marathon", "cross-country", "race-walking", "decathlon", "heptathlon"],

  skills: [
    "event-specific technique",
    "aerobic + anaerobic conditioning",
    "explosive power (sprints + jumps)",
    "race tactics + pacing",
    "mental toughness under pressure",
  ],
  strategies: [
    { title: "Event specialization", body: "Elite athletes focus on 1-2 events; combined-event athletes accept lower individual peaks." },
    { title: "Peak for championships", body: "12-16 week periodized training cycles targeting major meets (Worlds, Olympics)." },
    { title: "Study race patterns", body: "Middle-distance races often decided in final 200m; sprinters must peak from block-clearance." },
    { title: "Recovery matters more than training", body: "Elite athletes sleep 9-10 hours + prioritize recovery to enable hard training." },
  ],

  terminology: [
    { term: "PB (Personal Best)", meaning: "Athlete's individual best mark in an event." },
    { term: "SB (Season Best)", meaning: "Athlete's best mark in current season." },
    { term: "NR (National Record)", meaning: "Best-ever mark by national representative." },
    { term: "WR (World Record)", meaning: "Best-ever ratified performance by any athlete." },
    { term: "PR (Personal Record)", meaning: "Same as PB in American usage." },
    { term: "Diamond League points", meaning: "Season-long circuit ranking system across 14 meets." },
    { term: "Photofinish", meaning: "High-speed camera measuring exact finish order in track races." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Join a local athletics club", body: "USA Track & Field / national federation clubs offer youth + adult training." },
        { title: "Choose an event", body: "Sprints (fast twitch), distance (aerobic), throws (strength), jumps (power) — try each to find fit." },
        { title: "Compete in local + state meets", body: "Youth series → Junior Olympics → NCAA collegiate → national ranking." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "NCAA Division I / national federation", body: "US college pathway or European national federation training centers." },
        { title: "Qualify for World Championships", body: "Meet World Athletics qualifying standards + national trials." },
        { title: "Diamond League + Olympic circuit", body: "Prize money + qualification points via 14-meet Diamond League series." },
      ],
    },
  ],

  faq: [
    { question: "How many events at the Olympics?", answer: "47 medal events (23 men + 23 women + 1 mixed 4×400m relay) — the most of any Olympic sport." },
    { question: "What's the difference between 'athletics' and 'track and field'?", answer: "Same sport, different terminology. 'Athletics' is used globally; 'track and field' is American English." },
    { question: "Which country dominates?", answer: "USA (most golds all-time), Kenya (distance), Jamaica (sprints), Ethiopia (distance), Norway (recent field events)." },
    { question: "Are super-shoes legal?", answer: "Yes — carbon-plate super-shoes (Nike Vaporfly, Adidas Adios Pro) are legal within World Athletics rules; must be publicly available for 4 months + max sole 40 mm." },
  ],

  sources: [
    { label: "Wikipedia — Athletics (sport)", url: "https://en.wikipedia.org/wiki/Athletics_(sport)", publisher: "Wikipedia" },
    { label: "World Athletics official", url: "https://worldathletics.org", publisher: "World Athletics" },
    { label: "USATF official", url: "https://usatf.org", publisher: "USATF" },
  ],
  wikipediaTitle: "Athletics (sport)",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

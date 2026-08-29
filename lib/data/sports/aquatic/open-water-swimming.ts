import type { Sport } from "@/lib/types";

export const openWaterSwimming: Sport = {
  id: "open-water-swimming",
  slug: "open-water-swimming",
  name: "Open-Water Swimming",
  officialName: "Open Water Swimming (World Aquatics discipline)",
  aliases: ["Marathon Swimming", "OW Swimming"],
  shortDescription:
    "Endurance swimming in lakes, rivers, and seas — Olympic 10 km marathon plus ultra-distance channel swims and mass-participation events like the English Channel and Manhattan Marathon Swim.",
  longDescription:
    "Open-water swimming's storied crossings began with Captain Matthew Webb's first English Channel swim in 1875. The sport joined the Olympic program at Beijing 2008 as the 10 km marathon. World Aquatics governs the 5/10/25 km FINA/WA World Cup and Championships. Ultra-marathon events (Catalina, Manhattan, English Channel) form the 'Triple Crown' — completed by 400+ athletes. Cold-water (5-15°C) and warm-water (28°C+) events test dramatically different physiology.",

  category: "aquatic-sports",
  subCategory: "endurance swimming in open water",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "summer",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "GB",
  regionOfOrigin: "English Channel (Captain Matthew Webb, 1875 first crossing)",
  estimatedOrigin: "Matthew Webb crossed English Channel 1875; FINA (now World Aquatics) added 10km marathon at Beijing 2008 Olympics",

  players: { min: 1, max: 500, note: "Individual competitor; mass-start events can have 500+ swimmers." },
  field: {
    surfaceName: "Open water (lake/sea/river)",
    dimensions: "5-42 km course typical; ultra events 50-100+ km",
    description: "Marked course with buoys; support boats for safety + feeding." },
  equipment: [
    { name: "Swimsuit", description: "Jammer (men) / one-piece (women); wetsuit permitted in cold water (14°C-)." },
    { name: "Goggles + swim cap", description: "Tinted goggles for sun glare; latex/silicone cap." },
    { name: "Feeding pole", description: "5-8 m pole to hand feed swimmers gel + drink from support boat." },
    { name: "Support boat + kayak", description: "Escort boat + kayak paddler stays alongside." },
    { name: "GPS tracker", description: "Race timing + safety monitoring." },
  ],
  duration: {
    approximateMinutes: 120,
    structure: "10 km Olympic: 1h 45m-2h 15m. 25 km World: 5-6 hours. English Channel: 7-16+ hours. Ultra: 20-40 hours." },

  objective:
    "Complete the course in the fastest time (races) OR successfully complete an established crossing (channel swims).",
  matchStructure:
    "Mass start (or waves) → around buoy course OR point-to-point → finish gate or landing on opposite shore.",

  basicRules: [
    { title: "Course navigation", body: "Around marked buoys OR point-to-point; must round every waypoint." },
    { title: "No touching support boat", body: "Feeding via pole only; hand contact = DQ." },
    { title: "Wetsuit rules", body: "Water >20°C: no wetsuit. 18-20°C: optional. <18°C: recommended. <14°C: cold-water rules." },
    { title: "Anti-fouling", body: "Fingernails clipped; no jewelry that could injure other swimmers in mass start." },
    { title: "Cutoff times", body: "Ultra events (English Channel) have time cutoffs (24h max)." },
  ],
  advancedRules: [
    { title: "Feeding schedule", body: "Every 20-30 minutes; gel + carb drink handed on pole." },
    { title: "Drafting", body: "Legal in open water — drafting on hip/feet saves 20-30% energy." },
    { title: "Body contact", body: "Legal in mass starts; called 'washing machine' at first buoy." },
    { title: "Ratified crossing", body: "English Channel + Catalina swims must be observer-witnessed for record ratification." },
  ],
  scoring: {
    summary: "Time to finish. Overall + age-group + gender categories.",
    winCondition: "First to finish (race format); successful crossing (channel format).",
    breakdown: [
      { action: "Overall winner", points: "1st, 2nd, 3rd podium" },
      { action: "Age-group podium", points: "5-year buckets" },
      { action: "Successful crossing", points: "Ratified by observer" },
    ],
  },
  penalties: [
    { title: "Missed buoy", body: "Must return + round; time penalty or DQ." },
    { title: "Boat contact", body: "DQ." },
    { title: "Cut course", body: "DQ + ban from event." },
  ],

  positions: [
    { name: "Swimmer", role: "The competitor.", count: 1 },
    { name: "Support boat crew", role: "Feeds + navigates alongside." },
    { name: "Observer (channel swims)", role: "Official who verifies crossing rules." },
  ],
  officiating: {
    officials: ["Chief Referee", "Course judges", "Observers (channel swims)"],
    summary: "World Aquatics + Channel Swimming Association observers verify all record attempts + ratified crossings.",
  },

  governingBodies: [
    { name: "World Aquatics (formerly FINA)", founded: 1908, headquarters: "Lausanne, Switzerland", website: "https://worldaquatics.com" },
    { name: "Channel Swimming Association", founded: 1927, headquarters: "Dover, UK", website: "https://channelswimmingassociation.com" },
    { name: "World Open Water Swimming Association (WOWSA)", founded: 2005, headquarters: "USA", website: "https://openwaterswimming.com" },
  ],
  majorCompetitions: [
    { name: "Olympic Games (10 km marathon)", frequency: "every 4 years", founded: 2008, region: "rotating" },
    { name: "World Aquatics Championships", frequency: "biennial", founded: 1991, region: "rotating" },
    { name: "English Channel Swim season", frequency: "annual (July-Sept)", founded: 1875, region: "Dover, UK" },
    { name: "Marathon Swim World Series", frequency: "annual", founded: 2007, region: "6-8 races globally" },
  ],
  countriesPlayed: ["NL", "AU", "IT", "DE", "FR", "US", "GB", "BR", "HU", "PT", "IL", "AR"],
  famousAthletes: [
    "Sharon van Rouwendaal (NL, Olympic gold 2016 + 2024)",
    "Ferry Weertman (NL, Olympic gold Rio 2016)",
    "Ana Marcela Cunha (BR, Olympic gold Tokyo 2020)",
    "Kristof Rasovszky (HU, Olympic gold Paris 2024)",
    "Diana Nyad (US, Cuba-to-Florida crossing at age 64)",
  ],
  records: [
    { title: "Fastest English Channel (men)", holder: "Trent Grimsey", value: "6h 55m", year: 2012 },
    { title: "Fastest English Channel (women)", holder: "Yvetta Hlavacova", value: "7h 25m", year: 2006 },
    { title: "Longest continuous ocean swim", holder: "Sarah Thomas", value: "4× English Channel (54 hours)", year: 2019 },
  ],

  variants: ["ice-swimming", "marathon-swimming", "channel-swimming", "triathlon-swim"],
  relatedSports: ["swimming", "triathlon", "ice-swimming", "wild-swimming"],

  skills: [
    "aerobic endurance",
    "cold-water tolerance (thermoregulation)",
    "sighting + navigation",
    "drafting + pack strategy",
    "nutrition + carb intake at speed",
  ],
  strategies: [
    { title: "Feed early + often", body: "60-90g carbs/hour; miss a feed = bonk in the last hour." },
    { title: "Sight every 6-10 strokes", body: "Front-lift head for course check without breaking rhythm." },
    { title: "Draft on the feet", body: "Following swimmer's feet saves 20% energy — key in packs." },
    { title: "Cold acclimation", body: "For channel swims: 10+ 15°C swims prior to attempt." },
  ],

  terminology: [
    { term: "Feed", meaning: "Nutrition break where boat crew hands gel/drink via pole." },
    { term: "Sighting", meaning: "Lifting head mid-stroke to check course direction." },
    { term: "Drafting", meaning: "Swimming close behind another to reduce drag." },
    { term: "Ratified crossing", meaning: "Officially observed + certified swim (English Channel, Catalina, Manhattan)." },
    { term: "Triple Crown", meaning: "English Channel + Manhattan Island + Catalina Channel — the ultra-swim trifecta." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Complete a 1500m pool swim", body: "Baseline aerobic fitness before open-water attempt." },
        { title: "Enter a 1500m open-water race", body: "Local lake/reservoir races; wetsuit-allowed for beginners." },
        { title: "Build to 5 km open-water swim", body: "Standard progression through 3 km, 5 km, then 10 km events." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Complete 10 km FINA-sanctioned race", body: "Continental / World Cup ranking races." },
        { title: "Attempt an English Channel swim", body: "18-24 month training plan; $6K-$15K organizational costs." },
        { title: "Complete Triple Crown", body: "English Channel + Manhattan Island + Catalina — the ultra-swim benchmark." },
      ],
    },
  ],

  faq: [
    { question: "Is open-water swimming safe?", answer: "Yes when done with support boats + trained observers. Solo swims + non-ratified attempts carry higher risk (hypothermia, boats, marine life)." },
    { question: "Do I need a wetsuit?", answer: "Depends on water temperature. >20°C: no. 14-20°C: recommended. <14°C: cold-water rules apply (specialized cold-adaptation training required)." },
    { question: "How long does the English Channel take?", answer: "7-16 hours typical; fastest ~7 hours, slower attempts approach 20 hours. Cold + tides significantly extend time." },
    { question: "How is Olympic marathon swimming different?", answer: "Olympic = 10 km timed race, warm water (25°C+), no wetsuits allowed. Channel swimming = 34 km crossing, cold water (14-18°C), no wetsuit for ratification." },
  ],

  sources: [
    { label: "Wikipedia — Open water swimming", url: "https://en.wikipedia.org/wiki/Open_water_swimming", publisher: "Wikipedia" },
    { label: "World Aquatics Marathon Swimming", url: "https://www.worldaquatics.com/marathon-swimming", publisher: "World Aquatics" },
    { label: "Channel Swimming Association", url: "https://channelswimmingassociation.com", publisher: "CSA" },
  ],
  wikipediaTitle: "Open water swimming",
  lastVerified: "2026-08-29",
  confidence: "verified",
};

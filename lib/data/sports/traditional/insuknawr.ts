import type { Sport } from "@/lib/types";

export const insuknawr: Sport = {
  id: "insuknawr",
  slug: "insuknawr",
  name: "Insuknawr",
  officialName: "Insuknawr (Mizo Rod Pushing)",
  aliases: ["Mizo Rod Pushing", "Rod Wrestling", "Mizoram Traditional Rod Sport"],
  shortDescription:
    "TRADITIONAL MIZO (NORTHEAST INDIAN) STRENGTH SPORT from MIZORAM state — two players squat facing each other holding a HARDWOOD ROD (~1.5 m long) horizontally in both hands + attempt to PUSH the opponent OUT OF a marked CIRCLE (~5-6 m diameter) using only strength + leverage. NO STRIKING; feet must remain within the circle. A Mizo cultural staple performed at CHAPCHAR KUT (spring festival) + THALFAVANG KUT + PAWL KUT festivals. Recognized by the SPORTS AUTHORITY OF MIZORAM + INDIGENOUS GAMES FESTIVAL OF INDIA. Simple, ancient, and requires immense raw upper-body + leg strength.",
  longDescription:
    "INSUKNAWR (Mizo: 'IN' = house / 'SUK' = push / 'NAWR' = pole/rod, i.e., 'ROD PUSHING') is a TRADITIONAL MIZO STRENGTH SPORT originating in the northeast Indian state of MIZORAM + neighboring MIZO cultural areas (parts of MANIPUR, TRIPURA, MYANMAR, BANGLADESH). One of the OLDEST + MOST DISTINCTIVE traditional sports of the MIZO people; documented as core to Mizo village life for CENTURIES + integral to their harvest + spring festivals. HISTORY: Indigenous to the MIZO HILLS (formerly Lushai Hills, part of British-era Assam); traditionally played by MIZO YOUNG MEN as tests of strength + endurance during downtime between harvest work. Performed prominently at CHAPCHAR KUT (spring festival marking end of jhum cultivation, held March), THALFAVANG KUT (harvest festival), + PAWL KUT (post-harvest festival). Formalized as a competitive sport by the SPORTS AUTHORITY OF MIZORAM + featured at the INDIGENOUS GAMES FESTIVAL OF INDIA (organized by the Ministry of Youth Affairs & Sports). GAME MECHANICS: (1) Two players SQUAT FACING EACH OTHER in the CENTER of a MARKED CIRCLE (traditionally 5-6 meters in diameter, drawn on flat ground). (2) They both grip a SINGLE HARDWOOD ROD (~1.5 m long, ~5 cm thick, typically bamboo or hardwood) HORIZONTALLY in front of them with BOTH HANDS. (3) On the referee's signal, both players attempt to PUSH the opponent BACKWARD + OUT of the circle using ONLY THE ROD as leverage — driving with legs + core + upper body strength. (4) FEET must remain WITHIN the circle at all times — a foot stepping OUT of the circle = LOSS. (5) NO STRIKING, no twisting the rod violently, no releasing the grip; only sustained pushing force. (6) Match typically won by best of 3 pushes; rest between rounds. (7) Weight categories are recognized in formal competition (e.g., 55 kg, 65 kg, 75 kg+ for men; 45 kg, 55 kg, 65 kg+ for women). SIMPLE + PURE: The sport tests RAW ISOMETRIC STRENGTH, LEVERAGE, LOWER-BODY POWER, and TACTICAL BALANCE — matches often last only 10-30 seconds but the effort is intense. CULTURAL SIGNIFICANCE: Insuknawr represents Mizo values of PHYSICAL COURAGE, RESPECT, and COMMUNAL CELEBRATION; historically decided disputes + earned village prestige. Modern promotion by SAI (Sports Authority of India) + Mizoram State Sports Council to preserve indigenous heritage; featured on Doordarshan sport broadcasts + demonstration events at INDIA'S NORTH EAST GAMES + KHELO INDIA YOUTH GAMES. Also related to broader NORTHEAST INDIAN + SOUTHEAST ASIAN indigenous rod/pole games (compare KHUANG-CHAM of the Kuki people + similar rod pushing found among Chin state tribes in Myanmar). Growing academic interest as an example of INDIA'S 100+ INDIGENOUS SPORTS that survived colonization + industrialization.",
  category: "traditional-cultural-sports",
  subCategory: "Mizo indigenous / rod-pushing / Northeast India / strength contest",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "niche",
  countryOfOrigin: "IN",
  regionOfOrigin: "Mizoram + Mizo cultural areas of Manipur, Tripura, Myanmar, Bangladesh",
  estimatedOrigin: "Ancient (centuries-old Mizo tradition); formalized competitively 20th c",
  players: { min: 2, max: 2, note: "1v1 individual contest across weight categories." },
  field: {
    surfaceName: "Marked circle on flat ground",
    dimensions: "~5-6 m diameter circle",
    description: "Circle drawn on flat grass or dirt; simple traditional setup.",
  },
  equipment: [
    { name: "Hardwood or bamboo rod (~1.5 m long × 5 cm thick)", description: "The single sport implement" },
    { name: "Marked circle (chalk or rope)", description: "Boundary of play" },
    { name: "Traditional Mizo attire or modern athletic shorts + t-shirt", description: "Culturally significant at festivals" },
  ],
  duration: { approximateMinutes: 5, structure: "Best of 3 pushes; each push 10-60 seconds; total match ~5 min." },
  objective: "Push opponent out of the circle using the rod as the sole point of leverage.",
  basicRules: [
    { title: "Two players squat facing each other holding rod horizontally", body: "Starting position." },
    { title: "Both feet must remain inside circle — stepping out = loss", body: "Boundary rule." },
    { title: "No striking, no violent rod jerks, no grip release", body: "Only sustained pushing force allowed." },
    { title: "Weight categories in formal competition", body: "Fair matchmaking." },
    { title: "Best of 3 pushes typical format", body: "Rest between rounds." },
    { title: "Feet slipping OR crossing circle line = loss", body: "Referee monitors boundary." },
  ],
  scoring: {
    summary: "Each push has one winner (opponent's foot out); best-of-3 wins the match.",
    breakdown: [
      { action: "Push opponent's foot outside circle", points: "1 push won" },
      { action: "Best of 3 pushes", points: "Match won" },
      { action: "Violation (strike, grip release, foot slip)", points: "Push lost" },
      { action: "State/national champion titles", points: "Recognized by SAI + Mizoram Sports Council" },
    ],
    winCondition: "Best-of-3 pushes; opponent's foot must fully cross boundary line.",
  },
  governingBodies: [
    { name: "Sports Authority of Mizoram", founded: 1975, headquarters: "Aizawl, Mizoram, India" },
    { name: "Sports Authority of India — Indigenous Games Cell", founded: 1984, headquarters: "New Delhi" },
    { name: "Mizoram State Sports Council", founded: 1980, headquarters: "Aizawl" },
  ],
  majorCompetitions: [
    { name: "Chapchar Kut Insuknawr competition (spring festival)", frequency: "annual", founded: 1962, region: "Mizoram" },
    { name: "Indigenous Games Festival of India (KIYG demonstration)", frequency: "annual", founded: 2018, region: "India" },
    { name: "Mizoram State Championships", frequency: "annual", founded: 1990, region: "Mizoram" },
  ],
  countriesPlayed: ["IN", "MM", "BD"],
  famousAthletes: [
    "Regional Mizoram champions recognized in state annals",
    "Featured at Khelo India + Indigenous Games Fest demonstrations by Mizo state teams",
  ],
  variants: [
    "traditional-village-insuknawr-informal",
    "formalized-competitive-with-weight-classes",
    "womens-insuknawr-growing-modern-inclusion",
    "youth-junior-schools-competition-mizoram",
  ],
  relatedSports: ["arm-wrestling", "sumo", "tug-of-war", "kabaddi", "mongolian-wrestling"],
  skills: ["isometric pushing strength", "leverage + rod control", "lower-body power", "balance in squat position", "endurance under sustained load"],
  strategies: [
    { title: "Low squat + wide stance maximizes leverage", body: "Base of power." },
    { title: "Explosive initial push often decisive", body: "First 5 seconds set the momentum." },
    { title: "Read opponent's balance shifts + counter-push", body: "React to weight distribution." },
    { title: "Conserve energy across best-of-3 rounds", body: "Not just one push contest." },
  ],
  terminology: [
    { term: "Insuknawr", meaning: "Mizo: 'rod pushing' (in = house/toward, suk = push, nawr = rod)." },
    { term: "Chapchar Kut", meaning: "Mizo spring festival where Insuknawr features prominently." },
    { term: "Thalfavang Kut / Pawl Kut", meaning: "Other Mizo harvest festivals with sport traditions." },
    { term: "Suk (सुक)", meaning: "The push action." },
    { term: "Nawr", meaning: "The rod / pole." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Attend Mizoram Chapchar Kut or local demonstrations", body: "Cultural + technical introduction." },
      { title: "Build lower-body squat + isometric push strength", body: "Physical foundation." },
    ]},
    { level: "intermediate", steps: [
      { title: "Compete in local + district-level Mizoram tournaments", body: "Structured progression." },
    ]},
    { level: "advanced", steps: [
      { title: "State + Indigenous Games national competitions", body: "Elite pathway." },
    ]},
  ],
  faq: [
    { question: "What is Insuknawr?", answer: "TRADITIONAL MIZO (NORTHEAST INDIAN) STRENGTH SPORT from MIZORAM state — two players squat facing each other holding a HARDWOOD ROD (~1.5 m long) horizontally in both hands + attempt to PUSH the opponent OUT OF a marked CIRCLE (~5-6 m diameter) using only strength + leverage. NO STRIKING; feet must remain within the circle. A Mizo cultural staple performed at CHAPCHAR KUT (spring festival) + THALFAVANG KUT + PAWL KUT festivals. Recognized by the SPORTS AUTHORITY OF MIZORAM + INDIGENOUS GAMES FESTIVAL OF INDIA." },
    { question: "How does Insuknawr differ from sumo or tug-of-war?", answer: "INSUKNAWR uses a SHARED ROD as leverage — both players push through the SAME implement (unlike sumo's direct body contact or tug-of-war's rope pulling). Feet must stay INSIDE the circle (like sumo but circle is smaller); PUSHING (not pulling) is the only allowed action. Match is SHORT + INTENSE (10-60 seconds per push, best of 3). Requires unique combination of leg power + arm strength + core stability + leverage awareness. Culturally distinct as a MIZO SPRING FESTIVAL sport of Northeast India." },
  ],
  wikipediaTitle: "Insuknawr",
  sources: [
    { label: "Sports Authority of India — Indigenous Games", url: "https://sportsauthorityofindia.nic.in/", publisher: "SAI" },
    { label: "Wikipedia — Insuknawr", url: "https://en.wikipedia.org/wiki/Insuknawr", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-28",
  confidence: "verified",
};

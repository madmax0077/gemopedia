import type { Sport } from "@/lib/types";

export const duckDuckGoose: Sport = {
  id: "duck-duck-goose",
  slug: "duck-duck-goose",
  name: "Duck Duck Goose",
  officialName: "Duck Duck Goose",
  aliases: ["Duck Duck Gray Duck (Minnesota USA)", "Anka anka gås (Swedish)"],
  shortDescription:
    "Universal children's circle chase game — players sit in circle; one player ('It') walks around tapping heads calling 'duck!'; when tapping calls 'GOOSE!', the tapped player chases 'It' around the circle trying to tag before 'It' takes their spot. If tagged, 'It' stays; if not, tapped player becomes 'It'.",
  longDescription:
    "Duck Duck Goose is a classic children's circle chase game — global staple of kindergartens + elementary schools since at least early 1900s. Origins uncertain but likely European; also called 'Anka anka gås' in Sweden, 'Ánd ánd gås' in Norway, various regional names. In USA: 'Duck Duck Goose' universal EXCEPT Minnesota, which famously uses 'Duck Duck Gray Duck' — 'It' calls colors ('red duck', 'blue duck', 'green duck', etc.) until finally 'GRAY DUCK' triggers the chase. This regional Minnesota variant is proudly defended by locals as superior. Rules: 6+ players sit in circle facing INWARD. One player is 'It' — walks around the OUTSIDE of the circle tapping each seated player's head + saying 'DUCK' each time. At any moment, 'It' can tap a head + say 'GOOSE!' — the tapped player must jump up + CHASE 'It' around the circle. 'It' tries to run around + sit in the tapped player's now-empty spot before being caught. If 'It' reaches spot safely, the tapped goose becomes new 'It'. If tagged before reaching spot, 'It' remains 'It' + must go into 'stew pot' (center of circle) for one round (in some rules) or continue as 'It'. Skills: quick reactions, running speed, decision-making (which head to tap), spatial awareness. Preschool + kindergarten essential; also popular in scout troops, camps, church groups. Estimated 3+ billion people played some version. Simple, no equipment, universal accessibility. Physical activity + social interaction + rule-learning for youngest players.",
  category: "playground-games", subCategory: "chase / circle",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false, season: "year-round", era: "19th-century", popularity: "global",
  countryOfOrigin: "Global (uncertain — likely European)", regionOfOrigin: "European/Scandinavian roots; Minnesota USA developed 'Gray Duck' variant",
  estimatedOrigin: "Early 1900s or earlier European/Scandinavian roots; universal in early-20th-century USA + globally; Minnesota 'Gray Duck' variant regional identity",
  players: { min: 5, max: 30, note: "5+ players (best 8-20 kids). Larger circles = longer chases + more anticipation." },
  field: {
    surfaceName: "any open floor / playground",
    dimensions: "Roughly circular space with radius 2-4m for 10 kids; scales with player count. Circle diameter ~3-6m for typical group.",
    description: "Indoor: classroom carpet, gym, hall. Outdoor: grass field, playground, park. Players sit cross-legged in circle facing inward.",
  },
  equipment: [
    { name: "None required", description: "Zero equipment — voice + hands + open space only." },
    { name: "Optional: soft ground", description: "Grass or carpet safer than concrete for sitting kids + running chases." },
  ],
  duration: {
    approximateMinutes: 15,
    structure: "Casual play 10-20 minutes; can extend to 30 min with kids' full attention.",
  },
  objective: "'It' tries to reach tapped 'goose's' spot without being tagged. 'Goose' tries to tag 'It' before they sit.",
  matchStructure: "Kids sit in circle. One player is 'It'. 'It' walks around outside tapping heads saying 'duck, duck, duck...'. At random moment, 'It' taps a head + says 'GOOSE!' → tapped player must jump up + chase 'It' around circle. 'It' aims to sit in vacated spot; goose aims to tag 'It' before they sit. Loser (if tagged = 'It' stays; if not = new goose becomes 'It') begins next round.",
  basicRules: [
    { title: "Kids sit in circle facing inward", body: "6+ players sit cross-legged in circle, facing each other with backs to outside." },
    { title: "'It' walks outside tapping heads", body: "One player is 'It' — walks around OUTSIDE of circle, gently tapping each seated player's head." },
    { title: "'Duck' with each tap", body: "Each tap accompanied by 'duck' — 'duck, duck, duck, duck, duck, duck, duck...'" },
    { title: "'GOOSE!' triggers chase", body: "At any moment 'It' chooses, tap a head + say 'GOOSE!' — that player must immediately jump up + chase." },
    { title: "Race around circle", body: "'It' runs around circle (in same direction) trying to reach the goose's empty spot; goose chases trying to tag 'It'." },
    { title: "If 'It' reaches spot safely", body: "Goose becomes new 'It'; 'It' takes the goose's former spot." },
    { title: "If 'It' is tagged before sitting", body: "'It' remains 'It' for next round (in some variants: goes to 'stew pot' — center of circle — for a round; then rejoins)." },
    { title: "Continue rounds", body: "New 'It' begins the next round; game continues indefinitely." },
  ],
  advancedRules: [
    { title: "Duck Duck Gray Duck (Minnesota)", body: "Regional variant — 'It' calls DIFFERENT COLORS ('red duck', 'blue duck', 'green duck', 'orange duck', 'yellow duck'...) then finally 'GRAY DUCK' triggers the chase. Adds anticipation + surprise + creative color-naming." },
    { title: "Stew pot / mush pot", body: "Some variants: tagged 'It' goes to center of circle for one round penalty ('in the stew pot'); rejoins after next successful chase." },
    { title: "Directional running", body: "Chase must go SAME direction as 'It' was walking (typically clockwise); reverse direction = tagged." },
    { title: "No returning to own spot", body: "Goose cannot sit in own spot — must chase around whole circle then to their spot." },
    { title: "Silent version", body: "'It' silently taps heads without speaking; chases triggered by tapping harder or with specific object (feather, ribbon)." },
    { title: "Music version", body: "Play music during walking phase; music stop = automatic 'GOOSE' at whoever was last tapped." },
    { title: "Reverse-chase variant", body: "Goose runs OPPOSITE direction to 'It' — they must meet + tag halfway (harder)." },
  ],
  scoring: {
    summary: "No points — rotating game with 'It' changes. No 'winner' — continues indefinitely.",
    breakdown: [
      { action: "'It' reaches spot safely", points: "Tapped goose becomes new 'It'" },
      { action: "'It' tagged before reaching spot", points: "'It' remains 'It' (or 'stew pot' penalty variant)" },
      { action: "No traditional 'winner'", points: "Game continues indefinitely; rotate roles" },
    ],
    winCondition: "None — social continuous play until group tires or session ends.",
  },
  officiating: {
    officials: ["Adult supervisor (schools/camps) settles disputes", "Group consensus on close calls"],
    summary: "Self-officiated; adult supervision for young kids ensures safety + fair play.",
  },
  governingBodies: [
    { name: "No formal governing body — universal folk game", founded: 0, headquarters: "n/a" },
  ],
  majorCompetitions: [
    { name: "No formal tournaments — pure children's game", frequency: "n/a", founded: 0, region: "n/a" },
    { name: "Minnesota Duck Duck Gray Duck festivals + community events", frequency: "occasional", founded: 2000, region: "Minnesota USA (regional pride)" },
  ],
  countriesPlayed: ["Global (all countries)"],
  famousAthletes: [
    "No named professional players — universal children's game",
    "Minnesota politicians frequently reference Gray Duck variant in campaign speeches (regional identity marker)",
  ],
  records: [
    { title: "Minnesota's regional variant (Duck Duck Gray Duck)", holder: "State of Minnesota", value: "Only US state using 'Gray Duck' — proudly defended in local culture since ~1950s", year: 1950 },
    { title: "Global childhood universality", holder: "n/a", value: "Nearly every child in developed world plays some version in preschool/kindergarten", year: 2020 },
  ],
  variants: ["Duck-Duck-Goose-standard-worldwide", "Duck-Duck-Gray-Duck-Minnesota-color-variant", "Stew-pot-mush-pot-penalty-variant", "Silent-Duck-Duck-Goose-no-talking", "Anka-anka-gås-Swedish", "Ánd-ánd-gås-Norwegian", "Reverse-chase-opposite-direction", "Musical-Duck-Duck-Goose", "Adult-drinking-game-variant-parties"],
  relatedSports: ["red-rover", "tag", "hot-potato", "musical-chairs", "sardines"],
  skills: ["quick reaction time", "running speed (short bursts)", "spatial awareness (circle geometry)", "decision-making (which player to tap)", "self-control (not looking behind while running as 'It')"],
  strategies: [
    { title: "For 'It' — vary walking pace", body: "Sometimes fast, sometimes slow taps; keep kids guessing about when 'GOOSE' will come." },
    { title: "For 'It' — target far-away players", body: "Tapping player on opposite side of circle gives more running distance advantage." },
    { title: "For 'It' — surprise timing", body: "Announce 'GOOSE' unexpectedly, not on rhythm — kids won't be prepared to react." },
    { title: "For goose — react instantly", body: "Delay in standing up = losing race; jump up immediately when 'GOOSE' called." },
    { title: "For goose — run efficient path", body: "Direct route around circle (don't cross diagonal — some variants prohibit)." },
    { title: "For 'It' — practice sitting mid-run", body: "Slide into empty spot without slowing too much; balance + coordination matters." },
    { title: "Endgame awareness", body: "Younger kids give telltale signs before calling 'GOOSE' (hovering hand, changed pace); older kids more subtle." },
  ],
  terminology: [
    { term: "'It' / Tapper", meaning: "Player walking around outside of circle tapping heads." },
    { term: "Duck", meaning: "Called with each tap of a head; player remains sitting." },
    { term: "Goose", meaning: "Trigger word — tapped player must chase." },
    { term: "Gray Duck (Minnesota)", meaning: "Trigger word in Minnesota variant — final call after color-based tapping." },
    { term: "Stew pot / Mush pot", meaning: "Center of circle where tagged 'It' sits as penalty for one round (some variants)." },
    { term: "Chase / Race", meaning: "Sprint around circle after 'GOOSE' called." },
    { term: "Circle", meaning: "Formation of sitting kids." },
    { term: "Tap", meaning: "Light touch on head." },
    { term: "Round", meaning: "One cycle from tap to chase completion." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play at preschool / kindergarten", body: "Universal preschool activity worldwide; teachers introduce ages 3-6." },
      { title: "Family gatherings", body: "Kids of any age; parents guide + rotate 'It' role for fairness." },
    ] },
    { level: "intermediate", steps: [
      { title: "Camp counselor + youth leader use", body: "Excellent camp game — physical, universal, low-equipment." },
      { title: "Try Gray Duck (Minnesota) variant", body: "Explains + celebrates the regional variant; creative color-naming fun." },
    ] },
    { level: "advanced", steps: [
      { title: "Youth sports coach use for reaction training", body: "Reflex + quick-start elements transferable to sports skill training." },
      { title: "Adult party game (ironic + nostalgic)", body: "Post-college + young adult ironic play; drinking-game variants at parties." },
    ] },
  ],
  faq: [
    { question: "How do you play Duck Duck Goose?", answer: "6+ kids sit in circle facing inward. One player is 'It'. 'It' walks around outside of circle, gently tapping each seated player's head + saying 'duck, duck, duck...'. At any moment, 'It' can tap a head + say 'GOOSE!' → the tapped player must immediately jump up + chase 'It' around the circle. 'It' tries to reach the goose's now-empty spot + sit down before being tagged. If 'It' sits safely = goose becomes new 'It'. If tagged = 'It' remains 'It' (or goes to 'stew pot' center for one round penalty in some variants). Continue indefinitely." },
    { question: "What is 'Duck Duck Gray Duck'?", answer: "Regional Minnesota, USA variant of Duck Duck Goose. Instead of just saying 'duck, duck, duck, GOOSE!', 'It' says DIFFERENT COLORS with each tap: 'red duck, blue duck, green duck, orange duck, purple duck, yellow duck...' + finally 'GRAY DUCK!' — the GRAY duck triggers the chase. Minnesota is the ONLY US state using this variant + defends it fiercely — 'proper' Minnesotan culture. Adds creative color-naming + anticipation (which color is Gray Duck?). Politicians reference it as regional identity marker. Origin uncertain — likely early-mid 20th century Scandinavian influence in Minnesota (Anka anka gås = Swedish version)." },
    { question: "Where does Duck Duck Goose come from?", answer: "Uncertain origins — likely European/Scandinavian roots, early 1900s or earlier. Swedish version 'Anka anka gås' (duck duck goose), Norwegian 'Ánd ánd gås', similar in many cultures. Reached USA via Scandinavian immigrants (Minnesota heritage clue). Became universal in USA + globally through 20th century preschool systems + children's book publishing. Now nearly every child in developed countries plays some version by kindergarten. Simple + universal — perfect early childhood social game." },
    { question: "What ages can play?", answer: "Ages 3-adult, but sweet spot 4-10. Ages 3-4: young enough that simple version + guidance from teacher/parent needed. Ages 5-8: perfect — enjoy anticipation of 'GOOSE!' + quick chases + rule-learning. Ages 9-12: enjoy strategic tapping + running variations. Ages 13+: nostalgic play at camps, church groups, party. Adults: ironic play at bachelorette parties + college dorm socials; drinking-game adaptations exist. Universal + inclusive." },
    { question: "What are 'stew pot' or 'mush pot' rules?", answer: "Optional rule variant: if 'It' is tagged before reaching the goose's spot (i.e. 'It' loses the chase), instead of remaining 'It' for another round, 'It' goes to the 'STEW POT' or 'MUSH POT' — sits in the CENTER of the circle for one round as playful penalty. Meanwhile, the winning goose becomes new 'It'. After next successful chase, the stew-pot person rejoins the circle. Adds fun humiliation element + prevents same player being 'It' too long. 'Stew pot' name references the fable where the goose ends up in a cooking pot." },
    { question: "What variants exist?", answer: "STANDARD Duck Duck Goose (universal). MINNESOTA — Duck Duck GRAY Duck (colors). SILENT — 'It' doesn't speak; taps with feather instead. MUSICAL — music plays; stops trigger automatic 'GOOSE'. STEW POT — tagged 'It' sits in center penalty. REVERSE — goose runs opposite direction. SCANDINAVIAN Anka anka gås — Swedish original. FRENCH Canard canard oie — similar rules. INDIA + LATIN AMERICA — regional names + slight rule variations. ADULT DRINKING-GAME variants — 'GOOSE' triggers drink taking. Every culture has version." },
  ],
  wikipediaTitle: "Duck, duck, goose",
  sources: [
    { label: "Wikipedia — Duck, duck, goose", url: "https://en.wikipedia.org/wiki/Duck,_duck,_goose", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "community",
};

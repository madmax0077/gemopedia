import type { Sport } from "@/lib/types";

export const kickTheCan: Sport = {
  id: "kick-the-can",
  slug: "kick-the-can",
  name: "Kick the Can",
  officialName: "Kick the Can",
  aliases: ["Kanketri (Japan)", "Bote Bote (Spain)", "Dosenwerfen (Germany)", "Depression-era Hide-and-Seek"],
  shortDescription:
    "Hide-and-Seek + jailbreak hybrid — one seeker guards an empty tin can; hiders can free jailed teammates by sneaking in and kicking the can.",
  longDescription:
    "Kick the Can is a Depression-era North American playground game blending Hide-and-Seek with Capture the Flag mechanics. An empty tin can (or bottle) sits in the middle of the play area — the 'jail'. One player is 'It' and guards the can while the others hide. When 'It' spots a hider, they must run back to the can, kick it, and shout the hider's name to send them to jail. But at any moment a still-free hider can sneak in and 'kick the can' — freeing every jailed player and forcing 'It' to start over. The tension between guarding the can and hunting the hiders is what gives Kick the Can its enduring appeal. Popular from the 1920s–1950s in North American neighborhoods (a favourite of Depression-era children with no other equipment), it appears in the classic 1962 Twilight Zone episode of the same name and has parallel versions in Japan (Kanketri, 缶蹴り), Spain (Bote Bote), and Germany (Dosenwerfen).",

  category: "playground-games",
  subCategory: "hide-and-seek + jailbreak hybrid",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "summer",
  era: "20th-century",
  popularity: "regional",

  countryOfOrigin: "US",
  regionOfOrigin: "North American neighborhoods 1920s–1950s; also Japan (Kanketri), Spain (Bote Bote), Germany",
  estimatedOrigin: "Late 19th – early 20th century North America; Depression-era peak popularity 1930s; still played worldwide",

  players: { min: 4, max: 20, note: "Best with 6–12; below 4 no jail dynamic, above 15 becomes chaotic." },
  field: {
    surfaceName: "Neighborhood street, park, backyard, camp field",
    dimensions: "Large — 30–50 m radius from the can; enough hiding spots for all players",
    description: "Requires abundant hiding places — trees, bushes, fences, cars, playground equipment. A large yard or park works; a bare gym floor doesn't. Dusk / evening play traditional (lengthens shadows, extends hiding).",
  },
  equipment: [
    { name: "Empty tin can", description: "The centerpiece — traditionally a soup can or coffee tin. Any solid object with a kick-and-clank sound works: bottle, tin, small ball." },
    { name: "'Jail' area", description: "Marked area near the can where captured players wait to be freed. Usually a chalked circle or clear ground marker." },
    { name: "Bounded play area", description: "Agreed boundaries — the block, the yard, park limits. Hiders must stay within." },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "Continuous — game ends when 'It' has caught every hider without the can being kicked. Rounds typically 15–45 minutes.",
  },
  objective:
    "For 'It': catch every hider by spotting them, running back to the can, and calling their name — without leaving the can unguarded long enough for another hider to kick it. For hiders: stay hidden OR sneak in and kick the can to free jailed teammates.",
  matchStructure:
    "'It' counts to 30 (or higher) at the can while everyone hides. Then 'It' searches. When they spot a hider, they must sprint back to the can, kick it or tap it, and shout the hider's name — that hider goes to jail near the can. Any still-free hider can sneak in and kick the can, shouting 'Can!' — this frees all jailed players and forces 'It' to restart. Game ends when every hider is in jail without the can being kicked. Then whoever was captured first (or by rotation) becomes the new 'It'.",

  basicRules: [
    { title: "Setup the can + jail", body: "Empty can placed in centre of play area. Jail is a marked area 2–3 metres from the can where captured players wait." },
    { title: "'It' counts + hiders hide", body: "'It' closes eyes at the can and counts to 30 (or 50, or 100 depending on area size); hiders scatter to hiding spots." },
    { title: "'It' searches — must return to can", body: "'It' searches for hiders. To capture a hider, 'It' must sprint back to the can, kick or tap it, and shout the hider's name." },
    { title: "Captured hider goes to jail", body: "Correctly-named captured hider walks to jail area and waits." },
    { title: "Free hider can kick the can", body: "At any time, a still-free hider can sneak to the can, kick it hard, and shout 'Kick the can!' — this frees ALL jailed players." },
    { title: "Restart after can-kick", body: "If the can is kicked, 'It' must chase down the kicker and re-set the can (fetch it if kicked far), giving all freed hiders time to re-hide." },
    { title: "Game ends when all captured without can-kick", body: "'It' wins when every hider is in jail simultaneously with the can un-kicked." },
  ],
  advancedRules: [
    { title: "Multiple 'Its'", body: "Larger groups: 2 'Its' guard the can together — makes the game much harder for hiders. Adjust based on player count." },
    { title: "Boundary rules", body: "Agree strict boundaries; wanderers 'out of bounds' auto-capture (or forfeit)." },
    { title: "Silent capture rule", body: "'It' must whisper the name, not shout — makes it harder to spot who's been named + adds tension." },
    { title: "Dusk / flashlight variant", body: "Traditional play at dusk / night with flashlights adds hide-quality strategy + fun." },
    { title: "Team version", body: "Two teams: one guards + defends the can; the other tries to kick it. Alternating roles." },
    { title: "Kanketri (Japanese)", body: "Popular Japanese schoolyard version 缶蹴り — near-identical rules with rice paper 'names' + regional variations." },
    { title: "Bote Bote (Spanish)", body: "Spanish equivalent — 'the tin' — same mechanic; some regions add a foot-race back to the can." },
  ],
  scoring: {
    summary: "Not points-based. 'It' wins by capturing all hiders without the can being kicked; hiders win by being the last free player.",
    winCondition: "'It' wins when all hiders are simultaneously in jail (no free hiders remain).",
    breakdown: [
      { action: "'It' captures a hider (name + can-tap)", points: "Hider goes to jail" },
      { action: "Free hider kicks the can", points: "All jailed hiders freed; can-kicker becomes hider again; game continues" },
      { action: "All hiders captured", points: "'It' wins the round" },
      { action: "Last uncaught hider", points: "Individual round winner" },
    ],
  },

  positions: [
    { name: "It / Seeker", role: "Guards the can + hunts hiders — must return to can to capture.", count: 1 },
    { name: "Hider", role: "Hides + optionally sneaks in to kick can + free teammates." },
    { name: "Jailed hider", role: "Captured player waiting for a can-kick to free them." },
    { name: "Adult supervisor (optional)", role: "Enforces boundaries + safety in child play." },
  ],
  officiating: {
    officials: ["None — casual game", "Adult supervisor (young children)"],
    summary: "No formal rules body. Games self-officiated on honor system; adult supervisor helpful with children under 8 or in unfamiliar terrain.",
  },

  governingBodies: [
    { name: "No official governing body — traditional folk game", founded: 0, headquarters: "n/a" },
  ],
  majorCompetitions: [
    { name: "No formal competitions — recreational + nostalgia game", frequency: "n/a", founded: 0, region: "n/a" },
    { name: "Summer camp + neighbourhood play (informal)", frequency: "seasonal", founded: 1920, region: "North America + Japan + parts of Europe" },
  ],
  countriesPlayed: ["US", "CA", "MX", "JP", "ES", "DE", "AR", "BR", "CO", "IT"],
  famousAthletes: [
    "No professional players — traditional neighborhood game",
    "Featured in Twilight Zone episode 'Kick the Can' (1962) — Ray Bradbury-influenced episode about aging",
    "Steven Spielberg directed the 1983 Twilight Zone: The Movie remake of the same episode",
  ],
  records: [
    { title: "Twilight Zone episode 'Kick the Can'", holder: "Rod Serling / Ray Bradbury", value: "Original 1962 episode + 1983 Spielberg film remake", year: 1962 },
    { title: "Depression-era peak popularity", holder: "North American children", value: "Peak 1930s — game required nothing but a tin can", year: 1935 },
    { title: "Japanese Kanketri (缶蹴り)", holder: "Japanese schoolchildren", value: "Widely-played parallel tradition, near-identical rules", year: 1930 },
  ],

  variants: ["kick-the-can-classic", "kanketri-japanese", "bote-bote-spanish", "team-vs-team-can", "dusk-flashlight-variant"],
  relatedSports: ["hide-and-seek", "capture-the-flag", "tag", "manhunt", "sardines"],

  skills: [
    "stealth + quiet movement",
    "spatial awareness + hiding-spot judgment",
    "sprint speed (for can-kick attempts)",
    "risk assessment (when to try the kick)",
    "teamwork (coordinating hider strategies)",
  ],
  strategies: [
    { title: "For hiders — hide close to the can", body: "Counter-intuitive but effective — 'It' rarely searches right next to the can; you can make a quick kick attempt when they wander." },
    { title: "For hiders — coordinate distractions", body: "One hider intentionally revealed on far side draws 'It' away; second hider sneaks the kick." },
    { title: "For hiders — sprint the last 5m", body: "Approach the can slowly then explode into a full sprint at 5m — no time for 'It' to close." },
    { title: "For 'It' — never leave the can unattended", body: "Wandering more than 15–20m from the can = a smart hider will kick it. Search in expanding circles." },
    { title: "For 'It' — bait a rescue attempt", body: "Pretend to search far away; hide in shadows near the can and catch the sneak-attempter." },
    { title: "For 'It' — capture in reverse order of speed", body: "Chase down the slowest hiders first (easier). Fast can-kickers are impossible to catch mid-sprint." },
  ],

  terminology: [
    { term: "The can", meaning: "The empty tin can (or bottle/object) at the play area's center — the goal of the kick." },
    { term: "Jail", meaning: "Marked area near the can where captured hiders wait." },
    { term: "Kick", meaning: "The kick that frees all jailed players. Must be firm + audible ('Kick the can!' shout traditional)." },
    { term: "It", meaning: "The seeker/guardian of the can." },
    { term: "Hider", meaning: "Player attempting to stay concealed or kick the can." },
    { term: "Named", meaning: "'It' correctly identifying a spotted hider by shouting their name at the can." },
    { term: "Kanketri", meaning: "Japanese version — 缶蹴り, literally 'can-kick'." },
    { term: "Bote Bote", meaning: "Spanish version — 'bote' means tin/can; same mechanic." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Learn in a small neighborhood group", body: "Best introduction: 5–8 friends in a backyard or park with lots of hiding spots. One round explains it." },
        { title: "Master the sneak-kick", body: "The satisfaction of the game is the sudden kick. Practise sneaking approaches + timing." },
        { title: "Understand the 'It' pressure", body: "As 'It' you're always torn between guarding the can + hunting the hiders. Managing that tension is the skill." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Play at dusk with flashlights", body: "Traditional peak experience — evening light + flashlights add hide difficulty + atmosphere." },
        { title: "Try large-group play (15+)", body: "With more players + coordinated hider strategies (distractions + team-sneak) the game becomes chess-like." },
        { title: "Adult camp / retreat version", body: "Adults playing at camps + reunions with large terrain + generous boundaries makes for a rich nostalgic experience." },
      ],
    },
  ],

  faq: [
    { question: "How is Kick the Can different from Hide-and-Seek?", answer: "Hide-and-Seek ends when 'It' finds everyone. Kick the Can adds a rescue mechanic — any free hider can sneak to the central can, kick it, and free every jailed player. That constant tension between guarding + searching is what makes Kick the Can strategically richer than plain Hide-and-Seek." },
    { question: "Where does the name come from?", answer: "Literal: the game centers on a physical can (traditionally an empty tin soup or coffee can) that gets kicked. When free hiders kick the can, all jailed players are released. The name is descriptive of the central action." },
    { question: "How many players do you need?", answer: "Minimum 4 (1 'It' + 3 hiders — barely works). Ideal 6–12 (rich hider dynamics, viable can-kick attempts, manageable size). Above 15 becomes chaotic; consider 2 'Its'." },
    { question: "Why was it so popular during the Depression?", answer: "It required nothing but a tin can. During the 1930s economic collapse, when children had no money for balls, jump ropes, or store-bought toys, Kick the Can (and Hide-and-Seek) became the games of choice — free, endlessly re-playable, and equipment-free. It remained popular through the 1950s before television-era leisure changed childhood play." },
    { question: "Is Kick the Can still played today?", answer: "Less than it once was in North America, but yes — at summer camps, family reunions, scout troops, and neighborhoods with playing children. It remains widely popular in Japan under the name Kanketri (缶蹴り) and in Spain as Bote Bote. Nostalgia-fueled revival among adults playing 'Old-Fashioned Playground Games' events." },
  ],

  wikipediaTitle: "Kick the can",
  sources: [
    { label: "Wikipedia — Kick the can", url: "https://en.wikipedia.org/wiki/Kick_the_can", publisher: "Wikipedia" },
    { label: "Twilight Zone: 'Kick the Can' (1962)", publisher: "CBS / MGM" },
    { label: "Wikipedia — 缶蹴り (Kanketri)", url: "https://ja.wikipedia.org/wiki/%E7%BC%B6%E8%B9%B4%E3%82%8A", publisher: "Wikipedia (Japan)" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

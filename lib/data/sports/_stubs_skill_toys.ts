import type { Sport } from "@/lib/types";

/**
 * Skill toys — solo dexterity toys practised alone or competitively.
 * Yo-yo, diabolo, juggling, poi, spinning tops, hacky sack, fingerboards.
 * New category `skill-toys`. Kendama and Speedcubing already live in
 * `traditional-cultural-sports` and `puzzle-games` respectively.
 */
const TODAY = "2026-08-24";

export const SPORT_STUBS_SKILL_TOYS: Sport[] = [
  {
    id: "yo-yo", slug: "yo-yo", name: "Yo-Yo",
    category: "skill-toys", sportType: "individual", indoorOutdoor: "both",
    isOlympic: false, popularity: "global", era: "ancient",
    countryOfOrigin: "GR", estimatedOrigin: "500-BCE Greek terracotta yo-yos; modern trick yo-yo popularised 1928 by Pedro Flores (Philippines/USA)",
    players: { min: 1, max: 1 },
    shortDescription: "String-and-spool skill toy — 'walk the dog', 'around the world', 'trapeze' and thousands more tricks; competitive world championships since 1932.",
    longDescription: "The Yo-yo is one of the oldest toys in history — 500-BCE Greek terracotta yo-yos survive; Chinese, Filipino and Indian variants have existed for centuries. The modern trick yo-yo was popularised in the US by Filipino immigrant Pedro Flores in 1928 (Duncan bought his company in 1929). The World Yo-Yo Championships have run since 1932. Modern competitive yo-yoing includes 5 divisions (1A single-hand looping, 2A two-hand looping, 3A two-hand stringtricks, 4A off-string, 5A counterweight).",
    wikipediaTitle: "Yo-yo", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "diabolo", slug: "diabolo", name: "Diabolo",
    aliases: ["Chinese Yo-yo"],
    category: "skill-toys", sportType: "individual", indoorOutdoor: "both",
    isOlympic: false, popularity: "global", era: "ancient",
    countryOfOrigin: "CN", estimatedOrigin: "Ancient Chinese 'kongzhu' (12th century); European version 1810s coined 'diabolo' 1900",
    players: { min: 1, max: 2 },
    shortDescription: "Two-stick juggling prop — spin an hourglass-shaped spool on a string held between two hand-sticks; then throw, catch and pass it.",
    longDescription: "The Diabolo (from ancient Chinese kongzhu, 'the noise-maker') is a two-stick juggling prop — an hourglass-shaped spool spun on a string held between two hand-sticks. Once the spool is spinning fast, it can be thrown high in the air, caught back on the string, passed to a partner, or made to travel around the arms and body in complex sequences. Chinese circus tradition (kongzhu) has centuries of technique; modern Western freestyle diabolo is a fixture at conventions and Cirque du Soleil.",
    wikipediaTitle: "Diabolo", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "juggling", slug: "juggling", name: "Juggling",
    category: "skill-toys", sportType: "individual", indoorOutdoor: "both",
    isOlympic: false, popularity: "global", era: "ancient",
    countryOfOrigin: "EG", estimatedOrigin: "1994-BCE Egyptian tomb of Beni Hasan (women juggling three balls); universal since",
    players: { min: 1, max: 6 },
    shortDescription: "The classic circus skill — keep three or more objects in the air in a repeating pattern, with hands, feet or clubs.",
    longDescription: "Juggling — keeping multiple objects in the air in a repeating pattern — is one of humanity's oldest performing skills, depicted in the 1994-BCE Egyptian tomb of Beni Hasan. Modern juggling was codified into a mathematical notation ('siteswap') in the 1980s. The International Jugglers' Association has run world championships since 1947. Common props include balls, clubs, rings, knives, fire torches, chainsaws — and, for team juggling, human bodies (Chinese acrobatic troupes).",
    wikipediaTitle: "Juggling", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "poi", slug: "poi", name: "Poi",
    category: "skill-toys", sportType: "individual", indoorOutdoor: "both",
    isOlympic: false, popularity: "global", era: "ancient",
    countryOfOrigin: "NZ", estimatedOrigin: "Traditional Māori practice; modern flow-arts poi since 1990s",
    players: { min: 1, max: 4 },
    shortDescription: "Māori-origin flow-art — swing weighted balls on cords through geometric patterns around the body; fire-poi is the spectacular variant.",
    longDescription: "Poi is a performing art originally practised by the Māori of New Zealand, in which weighted balls on cords are swung through geometric patterns around the body. Traditional poi was used by Māori women to develop hand coordination and rhythm. From the 1990s a global 'flow-arts' community adopted poi in fabric, LED, glow-stick and fire variants; fire-poi has become a fixture of the burner/festival circuit worldwide.",
    wikipediaTitle: "Poi (performance art)", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "spinning-tops", slug: "spinning-tops", name: "Spinning Tops",
    aliases: ["Top", "Trompo", "Beyblade"],
    category: "skill-toys", sportType: "individual", indoorOutdoor: "both",
    isOlympic: false, popularity: "global", era: "ancient",
    countryOfOrigin: "IQ", estimatedOrigin: "3500-BCE Mesopotamian tops (clay); universal traditional toy in nearly every culture",
    players: { min: 1, max: 8 },
    shortDescription: "Ancient spinning toy — from string-wrapped wooden tops to Beyblades and Latin-American Trompo battles; spin the longest or knock the others out.",
    longDescription: "Spinning tops are one of humanity's oldest toys — clay tops from 3500 BCE Mesopotamia survive. Traditional variants exist across Asia (Japanese koma, Chinese tuoluo, Korean paengi), Latin America (Mexican trompo, Colombian trompo, Cuban trompito) and Europe. Modern Beyblade launcher-style tops (Takara Tomy 1999) revived a global competitive scene with world tournaments. Common play: spin the longest, or knock opponents' tops out of a small ring.",
    wikipediaTitle: "Top", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "cup-stacking", slug: "cup-stacking", name: "Sport Stacking",
    aliases: ["Cup Stacking", "Speed Stacks"],
    category: "skill-toys", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "US", estimatedOrigin: "1980s California; codified by Speed Stacks Inc. and WSSA in 2001",
    players: { min: 1, max: 4 },
    shortDescription: "Timed cup-stacking speed sport — up-stack and down-stack 12 specially-designed plastic cups in pyramid patterns as fast as possible.",
    longDescription: "Sport Stacking (also Cup Stacking, Speed Stacks) is a timed dexterity sport in which players up-stack and down-stack 12 specially-designed plastic cups in three prescribed pyramid patterns (3-3-3, 3-6-3 and Cycle) as fast as possible. It grew from a 1980s Southern California YMCA activity into a world sport codified by the World Sport Stacking Association (WSSA) in 2001. Records are measured to the hundredth of a second; the current Cycle world record is under 4.7 seconds.",
    wikipediaTitle: "Sport stacking", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "hacky-sack", slug: "hacky-sack", name: "Hacky Sack",
    aliases: ["Footbag"],
    category: "skill-toys", sportType: "individual", indoorOutdoor: "both",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "US", estimatedOrigin: "1972, John Stalberger & Mike Marshall (Oregon USA) — patented 1979",
    players: { min: 1, max: 6 },
    shortDescription: "Feet-only footbag — keep a small bean-bag airborne using feet, knees and other non-arm surfaces; freestyle and net variants exist.",
    longDescription: "Hacky Sack is a footbag skill toy — a small bean-bag kept airborne using the feet, knees, chest and head (no hands, no arms). Invented by John Stalberger and Mike Marshall in Oregon in 1972 as rehabilitation for Stalberger's injured knee, and popularised through the 1980s university campuses. The International Footbag Players' Association runs World Freestyle and Footbag Net championships. Related sport Footbag Net is a competitive 2-a-side game across a 5-foot net.",
    wikipediaTitle: "Footbag", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "fingerboarding", slug: "fingerboarding", name: "Fingerboarding",
    aliases: ["Tech Deck"],
    category: "skill-toys", sportType: "individual", indoorOutdoor: "both",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "US", estimatedOrigin: "1980s skateboarder subculture; Tech Deck (Spin Master) commercialised 1998",
    players: { min: 1, max: 4 },
    shortDescription: "Miniature-skateboard finger sport — perform ollies, kickflips and grinds on a tiny skateboard using two fingers, over model ramps and rails.",
    longDescription: "Fingerboarding is the skill of performing skateboard tricks — ollies, kickflips, grinds, manuals — with a miniature (approximately 96 mm) skateboard controlled by two fingers. It began as an idle 1980s skateboarder pastime and was mass-marketed by Canadian toy company Spin Master from 1998 as Tech Deck. Devoted fingerboarders build detailed model skateparks; annual Fast Fingers championships in Germany crown world champions. Related: Handboarding, Fingerskating.",
    wikipediaTitle: "Fingerboard (skateboard)", lastVerified: TODAY, confidence: "verified",
  },
];

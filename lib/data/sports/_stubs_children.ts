import type { Sport } from "@/lib/types";

/**
 * Remaining classic children's games not yet in `_stubs_playground`:
 * Red-Light-Green-Light, Mother May I?, Jacks, Blind Man's Buff, Cat's
 * Cradle and Rock-Paper-Scissors. Category `playground-games`.
 */
const TODAY = "2026-08-24";

export const SPORT_STUBS_CHILDREN: Sport[] = [
  {
    id: "red-light-green-light", slug: "red-light-green-light", name: "Red Light, Green Light",
    aliases: ["Statues"],
    category: "playground-games", sportType: "individual", indoorOutdoor: "outdoor",
    isOlympic: false, popularity: "global", era: "medieval",
    countryOfOrigin: "US", estimatedOrigin: "Traditional worldwide — Squid Game (2021) made it a viral global reference",
    players: { min: 4, max: 30 },
    shortDescription: "Playground stop-and-go — creep towards the caller on 'green light'; freeze on 'red light' or be sent back to start.",
    longDescription: "Red Light, Green Light is a traditional children's playground running game found worldwide (Statues in Britain, Un-Deux-Trois-Soleil in France, Daruma-san ga Koronda in Japan, Mugunghwa-kkoci Pieotseumnida in Korea). One player is 'It' and faces away from the others; they call 'Green Light' (everyone advances) and 'Red Light' (everyone freezes). Anyone caught moving on red is sent back to start. First player to tag 'It' wins. Made globally viral by Netflix's Squid Game (2021).",
    wikipediaTitle: "Statues (game)", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "mother-may-i", slug: "mother-may-i", name: "Mother May I?",
    aliases: ["Captain May I?", "Giant Steps"],
    category: "playground-games", sportType: "individual", indoorOutdoor: "outdoor",
    isOlympic: false, popularity: "regional", era: "20th-century",
    countryOfOrigin: "US", estimatedOrigin: "Early-20th-century American children's playground game",
    players: { min: 4, max: 15 },
    shortDescription: "Playground permission game — 'Mother, may I take five giant steps?' — remember the polite formula or head back to start.",
    longDescription: "Mother May I? is a classic playground game especially popular with American schoolchildren in the mid-20th century. One player is 'Mother' (or Captain) and faces away from the others at the far end of the field. Each player takes turns requesting a movement — 'Mother, may I take three giant steps?' — and Mother replies 'Yes, you may' or 'No, you may not, but you may take X'. If a player moves without first asking permission, they must return to the start. First to reach Mother wins.",
    wikipediaTitle: "Mother, May I?", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "jacks", slug: "jacks", name: "Jacks",
    aliases: ["Knucklebones", "Fivestones"],
    category: "playground-games", sportType: "individual", indoorOutdoor: "both",
    isOlympic: false, popularity: "global", era: "ancient",
    countryOfOrigin: "GR", estimatedOrigin: "Ancient Greek astragaloi (sheep-knuckle bones); modern metal jacks 19th-century America",
    players: { min: 1, max: 6 },
    shortDescription: "Ancient bounce-and-scoop dexterity game — toss a ball, pick up 'jacks' before it lands, catch the ball. Repeat with more jacks each round.",
    longDescription: "Jacks (also Knucklebones, Fivestones, Astragaloi) is an ancient dexterity game descended from Greek and Roman play with sheep knuckle-bones. The modern children's version uses a small rubber ball and six-pointed metal 'jacks'. The player scatters the jacks, tosses the ball, picks up a required number of jacks with the same hand, then catches the ball before it bounces twice — repeating with 'onesies', 'twosies', 'threesies' up to picking all ten in one grab. A schoolyard staple for centuries.",
    wikipediaTitle: "Jacks", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "blind-mans-buff", slug: "blind-mans-buff", name: "Blind Man's Buff",
    aliases: ["Blind Man's Bluff", "Mush Pot"],
    category: "playground-games", sportType: "individual", indoorOutdoor: "both",
    isOlympic: false, popularity: "global", era: "ancient",
    countryOfOrigin: "GR", estimatedOrigin: "Ancient Greece (played as 'Copper Mosquito'); universal European tradition since",
    players: { min: 4, max: 15 },
    shortDescription: "Blindfolded tag — one player is blindfolded and spun round, then tries to catch and identify another by touch alone.",
    longDescription: "Blind Man's Buff (or Bluff) is a variant of tag with roots at least as far back as ancient Greece and Rome, and popular across Europe through the Middle Ages onwards. One player is blindfolded and spun three times; the others tease and dodge them. When the blindfolded player catches someone, they must identify who they've caught by touch alone to become 'It'. A staple of Victorian nursery and parlour play.",
    wikipediaTitle: "Blind man's buff", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "cats-cradle", slug: "cats-cradle", name: "Cat's Cradle",
    aliases: ["String Figures"],
    category: "playground-games", sportType: "individual", indoorOutdoor: "both",
    isOlympic: false, popularity: "global", era: "ancient",
    countryOfOrigin: "CN", estimatedOrigin: "Traditional across many cultures — Chinese, Māori (Whai) and Inuit variants documented",
    players: { min: 1, max: 2 },
    shortDescription: "String-loop patterns played solo or between two — pass the loop between fingers to make ever-more-complex geometric figures.",
    longDescription: "Cat's Cradle is a two-player string game where a loop of string is passed back and forth between two pairs of hands, each transfer transforming it into a named geometric pattern ('Cradle', 'Soldier's Bed', 'Candles', 'Manger', 'Diamonds', 'Cat's Eye'). Solo string figures (Cup and Saucer, Jacob's Ladder, Witch's Broom) are also traditional. Documented in cultures worldwide — Chinese (fanshengr), Māori (Whai) and Inuit variants are especially rich.",
    wikipediaTitle: "Cat's cradle", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "rock-paper-scissors", slug: "rock-paper-scissors", name: "Rock Paper Scissors",
    aliases: ["Roshambo", "Janken"],
    category: "playground-games", sportType: "individual", indoorOutdoor: "both",
    isOlympic: false, popularity: "global", era: "medieval",
    countryOfOrigin: "CN", estimatedOrigin: "Han-dynasty China ('sansukumi-ken'); modern form via Japanese Janken in 17th century",
    players: { min: 2, max: 4 },
    shortDescription: "The universal hand-decider — rock crushes scissors, scissors cut paper, paper covers rock. Best of three.",
    longDescription: "Rock Paper Scissors (Janken in Japan, Kai-Bai-Bo in Korea, Roshambo colloquially) is the world's most-common hand-decider game. On the count of three (or 'rock, paper, scissors, shoot!'), each player throws one of three hand shapes: rock (fist) crushes scissors (V-shape), scissors cut paper (flat hand), paper covers rock. The World RPS Society has run world championships since 2002; academic game-theorists still analyse throw distributions.",
    wikipediaTitle: "Rock paper scissors", lastVerified: TODAY, confidence: "verified",
  },
];

import type { SportCategory } from "@/lib/types";

/**
 * Category catalog — one entry per top-level SportCategory.
 *
 * Adding a new category is a two-line change here: add the type-literal to
 * `SportCategory` in `lib/types.ts`, then add an entry below. The
 * `/categories/[slug]` page automatically picks it up.
 *
 * `hue` is a pair of Tailwind color stops used for the category's card
 * gradient AND (by inheritance) as the default hero tint of every sport
 * under it. Sports can override via `sport.heroTint`.
 */
export interface CategoryDef {
  slug: SportCategory;
  name: string;
  short: string;
  description: string;
  hue: { from: string; to: string };
  icon: string;   // Lucide/heroicons-style key resolved in components/Icon.tsx
}

export const CATEGORIES: CategoryDef[] = [
  {
    slug: "ball-sports",
    name: "Ball Sports",
    short: "Contested with a ball on a field, court, pitch or table.",
    description:
      "Sports built around advancing a ball into a target zone — a goal, a basket, a wicket, a hoop. Includes team giants like football, cricket and basketball as well as global favourites like handball, netball and sepak takraw.",
    hue: { from: "from-emerald-500", to: "to-teal-500" },
    icon: "ball",
  },
  {
    slug: "racket-paddle-sports",
    name: "Racket & Paddle Sports",
    short: "Struck with a racket, paddle or bat across a net or wall.",
    description:
      "Face-off games decided by ball-striking control and court coverage — tennis, badminton, table tennis, pickleball, squash, padel and their cousins.",
    hue: { from: "from-lime-500", to: "to-green-500" },
    icon: "racket",
  },
  {
    slug: "combat-sports",
    name: "Combat Sports",
    short: "One-on-one contests of striking, grappling or armed technique.",
    description:
      "Sports where two competitors face each other under a formal ruleset: boxing, wrestling, judo, karate, taekwondo, MMA, sumo, fencing, kendo and many more.",
    hue: { from: "from-rose-500", to: "to-red-500" },
    icon: "fist",
  },
  {
    slug: "athletics",
    name: "Athletics",
    short: "Running, jumping and throwing events at the heart of the Olympics.",
    description:
      "Track and field disciplines measured in metres and seconds: sprints, marathons, hurdles, high jump, pole vault, javelin, decathlon and everything between.",
    hue: { from: "from-amber-500", to: "to-orange-500" },
    icon: "run",
  },
  {
    slug: "aquatic-sports",
    name: "Aquatic Sports",
    short: "On, in or under the water.",
    description:
      "Sports played in pools, on lakes, in rivers or in the ocean — swimming, water polo, rowing, sailing, surfing, canoeing, artistic swimming and underwater hockey.",
    hue: { from: "from-sky-500", to: "to-cyan-500" },
    icon: "wave",
  },
  {
    slug: "winter-sports",
    name: "Winter Sports",
    short: "Ice, snow and mountain-driven sports.",
    description:
      "Sports whose surface is snow or ice — alpine and cross-country skiing, snowboarding, curling, figure skating, luge, biathlon and ice hockey.",
    hue: { from: "from-cyan-500", to: "to-blue-500" },
    icon: "snowflake",
  },
  {
    slug: "motor-sports",
    name: "Motor Sports",
    short: "Engines, wheels and lap times.",
    description:
      "Racing series on tarmac, dirt, oval or off-road — Formula 1, MotoGP, rally, NASCAR, endurance racing, karting and drag racing.",
    hue: { from: "from-red-500", to: "to-orange-500" },
    icon: "wheel",
  },
  {
    slug: "equestrian-sports",
    name: "Equestrian Sports",
    short: "Horse and rider working as one.",
    description:
      "Sports centred on riding: dressage, show jumping, eventing, polo, horse racing, endurance riding, vaulting and rodeo.",
    hue: { from: "from-yellow-600", to: "to-amber-600" },
    icon: "horse",
  },
  {
    slug: "precision-sports",
    name: "Precision Sports",
    short: "Aim, strike, land — accuracy is everything.",
    description:
      "Games decided by fine aim rather than raw athleticism: archery, shooting, darts, snooker, pool, bowling, bocce and pétanque.",
    hue: { from: "from-purple-500", to: "to-fuchsia-500" },
    icon: "target",
  },
  {
    slug: "strength-sports",
    name: "Strength Sports",
    short: "Move as much weight as human ability allows.",
    description:
      "Sports built around raw strength or power: weightlifting, powerlifting, strongman, Highland games and bodybuilding.",
    hue: { from: "from-orange-500", to: "to-red-500" },
    icon: "dumbbell",
  },
  {
    slug: "gymnastics",
    name: "Gymnastics",
    short: "Balance, flight and body control across apparatus.",
    description:
      "Choreographed and judged sports: artistic gymnastics, rhythmic gymnastics, trampoline, acrobatic and aerobic gymnastics.",
    hue: { from: "from-pink-500", to: "to-rose-500" },
    icon: "sparkles",
  },
  {
    slug: "adventure-extreme-sports",
    name: "Adventure & Extreme Sports",
    short: "Ride, climb, jump and glide.",
    description:
      "Sports set in unusual environments and often self-judged: skateboarding, BMX, parkour, climbing, mountaineering, skydiving, paragliding and BASE jumping.",
    hue: { from: "from-indigo-500", to: "to-purple-500" },
    icon: "mountain",
  },
  {
    slug: "mind-sports",
    name: "Mind Sports",
    short: "Games won by pattern, memory and calculation.",
    description:
      "Board- and card-based competitive games: chess, Go, xiangqi, shogi, bridge, backgammon, mahjong and poker.",
    hue: { from: "from-slate-600", to: "to-slate-800" },
    icon: "brain",
  },
  {
    slug: "traditional-cultural-sports",
    name: "Traditional & Cultural Sports",
    short: "Regional and indigenous sports with deep local roots.",
    description:
      "Sports tied to a specific culture or region — kabaddi, kho kho, hurling, buzkashi, sepak takraw, pencak silat, Mongolian wrestling and more.",
    hue: { from: "from-amber-600", to: "to-orange-600" },
    icon: "globe",
  },
  {
    slug: "esports",
    name: "Esports",
    short: "Competitive video-game formats.",
    description:
      "Organised competitive video game formats across genres — MOBAs, FPS, fighting games, RTS and sports simulators.",
    hue: { from: "from-fuchsia-500", to: "to-violet-500" },
    icon: "controller",
  },
  {
    slug: "air-sports",
    name: "Air Sports",
    short: "Sports played in the sky.",
    description:
      "Sports whose arena is the air itself: skydiving, paragliding, hang gliding, wingsuit flying, ballooning and formation aerobatics.",
    hue: { from: "from-cyan-400", to: "to-sky-500" },
    icon: "wind",
  },
  /* ────────────────────────  TABLETOP + GAMES  ──────────────────────── */
  {
    slug: "board-games",
    name: "Board Games",
    short: "Race, capture, build and trade on a shared board.",
    description:
      "Ancient abstract-strategy games and modern designer classics — Monopoly, Catan, Carcassonne, Ticket to Ride, Chess-adjacent abstracts and hobbyist masterpieces from Twilight Imperium to Wingspan and Gloomhaven.",
    hue: { from: "from-emerald-600", to: "to-teal-700" },
    icon: "board",
  },
  {
    slug: "card-games",
    name: "Card Games",
    short: "Standard-deck classics, TCGs and regional cardplay.",
    description:
      "Every family of cardplay — bridge, poker, rummy and whist, shedding games like Uno, collectible card games such as Magic: the Gathering and Pokémon TCG, and regional traditions from Hanafuda to Truco.",
    hue: { from: "from-rose-500", to: "to-red-600" },
    icon: "card",
  },
  {
    slug: "dice-games",
    name: "Dice Games",
    short: "Rolled cubes decide it — sometimes strategy, always chance.",
    description:
      "Games where the roll is the engine: Yahtzee, Farkle, Liar's Dice, Craps, Sic Bo, Perudo, Shut the Box and the ancient art of knucklebones.",
    hue: { from: "from-orange-500", to: "to-amber-600" },
    icon: "dice",
  },
  {
    slug: "tile-games",
    name: "Tile Games",
    short: "Draw, arrange and combine — the mahjong family and beyond.",
    description:
      "Games centred on drawing and combining tiles: mahjong, dominoes and their many descendants — Rummikub, Mexican Train, Bananagrams and carrom tile play.",
    hue: { from: "from-indigo-600", to: "to-violet-700" },
    icon: "tiles",
  },
  {
    slug: "tabletop-rpg",
    name: "Tabletop Role-Playing",
    short: "Collaborative storytelling with dice and pencil.",
    description:
      "Pen-and-paper role-playing systems and live-action variants — Dungeons & Dragons, Pathfinder, Call of Cthulhu, Warhammer Fantasy Roleplay, LARP and everything between.",
    hue: { from: "from-purple-700", to: "to-fuchsia-700" },
    icon: "wizard",
  },
  {
    slug: "wargames",
    name: "Miniature Wargames",
    short: "Painted armies, tape measures and dice.",
    description:
      "Tabletop battle games played with painted miniatures — Warhammer 40,000, Age of Sigmar, Bolt Action, Star Wars: X-Wing, Blood Bowl and historical miniature wargaming.",
    hue: { from: "from-stone-700", to: "to-zinc-800" },
    icon: "swords",
  },
  {
    slug: "party-games",
    name: "Party Games",
    short: "Group games designed to laugh through.",
    description:
      "Group-play staples of family nights and parties — Pictionary, Charades, Taboo, Cluedo, Jenga, Twister, Battleship and modern hits like Codenames and Fall Guys.",
    hue: { from: "from-pink-500", to: "to-fuchsia-500" },
    icon: "party",
  },
  {
    slug: "playground-games",
    name: "Playground Games",
    short: "Tag, hide-seek, hopscotch — no equipment required.",
    description:
      "The childhood games played in schoolyards, parks and streets around the world — tag, hide-and-seek, hopscotch, dodgeball, marbles, four square and jump rope.",
    hue: { from: "from-sky-400", to: "to-cyan-400" },
    icon: "swing",
  },
  {
    slug: "puzzle-games",
    name: "Puzzle Games",
    short: "One player, one problem — logic, spatial reasoning or word.",
    description:
      "Physical and logic puzzles played solo or against the clock — Rubik's Cube, jigsaw puzzles, crosswords, Sudoku, tangrams, nonograms, KenKen and Tower of Hanoi.",
    hue: { from: "from-yellow-400", to: "to-amber-500" },
    icon: "puzzle",
  },
  {
    slug: "video-games",
    name: "Video Games",
    short: "The universe of digital games — every genre.",
    description:
      "Landmark video games organised by genre — action, RPG, strategy, simulation, adventure, puzzle and sandbox — from Super Mario Bros. to Minecraft and Elden Ring.",
    hue: { from: "from-violet-600", to: "to-indigo-700" },
    icon: "console",
  },
  {
    slug: "casino-games",
    name: "Casino & Gambling",
    short: "House-vs-player wagering games from every continent.",
    description:
      "Casino floor and gambling-hall staples — roulette, blackjack, baccarat, craps, bingo, keno, pai gow, teen patti, andar bahar and pachinko. Distinct from strategic card and dice games because the house edge, wagering and social context are core to the game itself.",
    hue: { from: "from-green-700", to: "to-emerald-800" },
    icon: "chip",
  },
  {
    slug: "escape-immersive",
    name: "Escape & Immersive",
    short: "Real-world puzzle rooms, scavenger hunts and ARGs.",
    description:
      "Live, real-world puzzle experiences — escape rooms, scavenger and treasure hunts, geocaching, alternate reality games (ARGs), murder-mystery evenings and immersive theatre. Games where the world is the board.",
    hue: { from: "from-slate-700", to: "to-neutral-900" },
    icon: "key",
  },
  {
    slug: "skill-toys",
    name: "Skill Toys",
    short: "Solo dexterity toys — yo-yos, kendama, diabolo, juggling clubs.",
    description:
      "Hand-held skill toys practised alone or in competition — yo-yos, kendamas, diabolos, juggling props, spinning tops, hacky sack, fingerboards and speedcubes.",
    hue: { from: "from-amber-500", to: "to-yellow-600" },
    icon: "sparkles",
  },
];

export const CATEGORY_BY_SLUG: Record<SportCategory, CategoryDef> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c]),
) as Record<SportCategory, CategoryDef>;

export function categoryHue(slug: SportCategory) {
  return CATEGORY_BY_SLUG[slug].hue;
}

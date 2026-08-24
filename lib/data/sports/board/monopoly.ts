import type { Sport } from "@/lib/types";

export const monopoly: Sport = {
  id: "monopoly",
  slug: "monopoly",
  name: "Monopoly",
  officialName: "Monopoly",
  aliases: ["The Landlord's Game (progenitor)"],
  shortDescription:
    "The world's best-selling property-trading board game — buy, rent and mortgage streets until you bankrupt every opponent.",
  longDescription:
    "Monopoly is a real-estate-themed board game in which 2-8 players roll two dice, move around a 40-space board, buy properties, collect rent, and try to bankrupt their opponents. Its true origin is Elizabeth Magie's 1904 'The Landlord's Game' — designed to demonstrate the evils of unchecked capitalism — which was played and modified through the 1910s-20s in the American Northeast before Charles Darrow rebranded it 'Monopoly' in 1934 and sold it to Parker Brothers in 1935. Since then it has been published in over 43 languages, sold more than 275 million copies, and spawned hundreds of city-specific and licence-themed editions. Hasbro runs the Monopoly World Championship every four years — the current holder is crowned at Macau (2015) and elsewhere.",

  category: "board-games",
  subCategory: "property-trading board game",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "USA (Atlantic City-themed classic edition)",
  estimatedOrigin: "The Landlord's Game (Elizabeth Magie, 1904); modern Monopoly (Charles Darrow / Parker Brothers, 1935)",

  players: { min: 2, max: 8, note: "Ideal 4-5. Solo variants exist as puzzle books but are non-canonical." },
  equipment: [
    { name: "Monopoly board", description: "40 spaces around a square track: 22 street properties (in 8 colour groups), 4 railroads, 2 utilities, 3 chance spaces, 3 community chest spaces, GO, Jail, Free Parking, Go to Jail, and 4 taxes." },
    { name: "Two six-sided dice", description: "Rolled together each turn — doubles allow a re-roll." },
    { name: "Tokens", description: "8 metal pieces representing each player — Dog, Cat, Battleship, Top Hat, Racecar, Thimble (retired), Wheelbarrow, Iron, and rotating anniversary tokens." },
    { name: "Property title deed cards", description: "One per property, showing purchase price, rent progression, mortgage value and building cost." },
    { name: "Chance and Community Chest cards", description: "16 cards each — luck-driven events like Go To Jail, Bank Error In Your Favour, Advance To Boardwalk." },
    { name: "Houses (32) and hotels (12)", description: "Green plastic houses and red hotels; strict scarcity when 32 houses are exhausted." },
    { name: "Play money", description: "Bills in $1, $5, $10, $20, $50, $100, $500 denominations — starting bank $1500 per player." },
  ],
  duration: {
    approximateMinutes: 180,
    structure: "Casual game: 2-4 hours. Tournament games: 90-minute cap with tie-break rules.",
  },
  objective: "Bankrupt every other player. The last player with any money or unmortgaged property wins.",
  matchStructure:
    "Each player starts with $1500 and rotates around the board rolling two dice per turn. Landing on unowned property, you may buy it at the printed price; landing on someone else's property, pay rent. Property groups (all 3 streets of a colour) may be developed with houses ($50-$200 each) then a hotel, sharply increasing rent. Trading, mortgaging and negotiation are the game's real strategy. When a player cannot pay a debt, they mortgage, sell buildings, or declare bankruptcy — property returns to the bank or the creditor.",

  basicRules: [
    { title: "Setup", body: "Each player picks a token, receives $1500, and starts on GO. Two dice are rolled to determine turn order." },
    { title: "Movement", body: "Roll two dice each turn and move that many spaces clockwise. Passing GO collects $200." },
    { title: "Buying property", body: "Landing on an unowned property, you may buy it at the printed price or send it to auction (this rule is often skipped casually but is official)." },
    { title: "Paying rent", body: "Landing on someone else's property, pay rent per the deed. Full colour group doubles rent on undeveloped lots; houses/hotels multiply rent up to ~5-40×." },
    { title: "Doubles and jail", body: "Rolling doubles gives you another turn. Rolling three doubles in a row sends you directly to Jail." },
    { title: "Jail", body: "Get out by rolling doubles (3 tries), paying $50, or using a Get Out of Jail Free card. You still collect rent while in jail." },
    { title: "Building houses", body: "You may build only after owning a complete colour group, with no mortgages, and must build evenly (no two houses on one lot until all lots have one)." },
    { title: "Bankruptcy", body: "If you cannot pay a debt after mortgaging and selling buildings, you're out — creditor takes your property (or bank auctions it)." },
  ],
  advancedRules: [
    { title: "Auction rule (official)", body: "If a player lands on an unowned property but chooses not to buy at the printed price, the property must be auctioned — starting bid can be $1. Casual play often skips this." },
    { title: "Building shortage", body: "If the bank runs out of houses (32) or hotels (12), no new buildings can be built. Advanced play uses this to lock out opponents." },
    { title: "Free Parking", body: "Officially does nothing. The 'money jackpot' house rule (put taxes there) actually extends the game — Hasbro considers it a variant." },
    { title: "Speed Die (2007+)", body: "Optional third die — Bus (choose any single-die value), Mr. Monopoly (triples doubles-on-triples), 1/2/3 — speeds the game up." },
    { title: "Mortgaging", body: "Property can be mortgaged for half its purchase price; buildings must be sold first. Rent isn't collected on mortgaged property." },
  ],
  scoring: {
    summary: "No numeric score — victory by elimination. Cash + property + buildings determines net worth for tiebreaks in tournament play.",
    winCondition: "Only player with any assets remaining wins. In tournament play (90-minute time cap) highest net worth wins.",
  },

  officiating: {
    officials: ["Banker (any player who volunteers)", "Tournament director (Monopoly World Championship)"],
    summary: "Casual play is self-officiated; one player traditionally acts as banker. Tournament play (Hasbro Monopoly Championship) uses external referees, chess-style clocks, and the 90-minute cap.",
  },
  governingBodies: [
    { name: "Hasbro Games", founded: 1923, headquarters: "Pawtucket, Rhode Island, USA", website: "https://monopoly.hasbro.com" },
  ],
  majorCompetitions: [
    { name: "Monopoly World Championship", frequency: "quadrennial", founded: 1973, region: "worldwide", note: "Hasbro-run; most recent held Macau 2015." },
    { name: "Monopoly US National Championship", frequency: "quadrennial", region: "US" },
    { name: "Various national championships", frequency: "annual", region: "national", note: "UK, Germany, France, Japan, others." },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "IT", "ES", "JP", "IN", "BR", "MX", "AU", "CN"],
  famousAthletes: [
    "Nicolò Falcone (2015 World Champion)",
    "Bjørn Halvard Knappskog (2009 Runner-Up)",
    "Björn Halland (Norway pro)",
    "Tim Vandenberg (US teacher/tactician)",
  ],
  records: [
    { title: "Most Monopoly boards produced", holder: "Hasbro", value: "300+ licensed editions in 43+ languages", year: 2020 },
    { title: "Longest recorded Monopoly game", holder: "Various", value: "70 straight days (per Hasbro's website)", year: 1961 },
    { title: "Largest Monopoly board", holder: "St. Louis Ritenour High School", value: "Regulation ×938 (Guinness)", year: 1988 },
  ],

  variants: ["monopoly-deal", "monopoly-express", "monopoly-junior", "monopoly-here-and-now"],
  relatedSports: ["catan", "ticket-to-ride", "the-game-of-life"],

  skills: ["negotiation", "probability", "resource management", "endurance", "psychological pressure"],
  strategies: [
    { title: "Get the orange group", body: "Statistically the most-landed-on colour group (fed by Jail exits with 6/7/8 dice rolls). St. James Place, Tennessee Avenue, and New York Avenue are worth aggressive pursuit." },
    { title: "Build 3 houses fast", body: "Rent jumps sharpest between 2 and 3 houses on most properties — 3 houses is the ROI sweet spot before hotels." },
    { title: "Never let opponents complete a group cheaply", body: "Trade property to block colour groups; only trade if the deal benefits you strategically, not just financially." },
    { title: "Use the building shortage", body: "In two-player endgames, holding 4-5 buildings on cheap lots can starve the opponent's hotel builds." },
    { title: "Cash reserves", body: "Keep ~$500 buffer at all times — one unlucky landing on a fully-developed hotel can bankrupt you." },
  ],

  terminology: [
    { term: "GO", meaning: "The starting corner square; passing collects $200." },
    { term: "Jail", meaning: "Corner square; sent there by rolling three consecutive doubles or landing on Go to Jail. Can still collect rent." },
    { term: "Colour group / monopoly", meaning: "Owning all lots of a single colour — required to build houses." },
    { term: "House / hotel", meaning: "Buildings placed on a monopolised colour group to multiply rent." },
    { term: "Deed", meaning: "Title card for each property showing purchase price and rent scale." },
    { term: "Mortgage", meaning: "Selling property back to the bank for half its purchase price; interest to unmortgage is 10%." },
    { term: "Free Parking", meaning: "Do-nothing corner — house rules often add a money jackpot here." },
    { term: "Chance / Community Chest", meaning: "Two decks of 16 luck cards each — many benefit or penalise the player." },
    { term: "Bankruptcy", meaning: "Unable to pay a debt after mortgages/liquidation — player is eliminated." },
    { term: "Speed Die", meaning: "Optional third die introduced in 2007 to speed up long games." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn the board", body: "Memorise the 40 spaces, corner squares, and the four railroads and two utilities." },
      { title: "Play your first game", body: "Play a full game with all official rules (auction on refused purchase, no jackpot Free Parking, houses evenly)." },
      { title: "Understand rent scales", body: "Study a title-deed card to see how rent multiplies with houses and hotels (typically 5-15× jump)." },
    ] },
    { level: "intermediate", steps: [
      { title: "Trading strategy", body: "Learn to trade property to complete colour groups — the single most powerful skill." },
      { title: "Building shortage", body: "Track the 32 houses; when the bank runs low, adjust strategy to buy remaining housing before opponents." },
      { title: "Play with strict official rules", body: "Auction refused purchases, no jackpot Free Parking, no unlimited money loans." },
    ] },
    { level: "advanced", steps: [
      { title: "Board landing frequencies", body: "Memorise the top 10 most-landed squares (Illinois Ave, Go, B&O RR, Free Parking, Tennessee Ave...)." },
      { title: "Tournament pace", body: "Practise 90-minute games with a clock; net-worth counting at time expiry." },
      { title: "Bluffing and negotiation", body: "Study negotiation tactics — Monopoly world-champion play is more diplomacy than dice." },
    ] },
  ],
  faq: [
    { question: "How long should a Monopoly game take?", answer: "Officially, Hasbro estimates 60-180 minutes. Casual games often stretch to 4+ hours (usually because of house rules like Free Parking jackpots)." },
    { question: "Is Free Parking a jackpot?", answer: "Not officially. In the Hasbro rules, Free Parking does nothing. Adding tax money there is the most common house rule but significantly extends game length." },
    { question: "Are you forced to buy a property you land on?", answer: "Officially, no — but if you refuse, the property must be auctioned to all players starting at $1. Most casual games skip the auction (a house rule)." },
    { question: "Which property is best?", answer: "Statistically the orange group (St. James, Tennessee, New York) is landed on most because of Jail exits. Boardwalk + Park Place have the highest raw rent but land less often." },
    { question: "What if the bank runs out of houses?", answer: "No more houses can be built until houses are returned to the bank. Advanced players 'hog' houses to lock out opponents in the endgame." },
  ],

  wikipediaTitle: "Monopoly (game)",
  sources: [
    { label: "Wikipedia — Monopoly (game)", url: "https://en.wikipedia.org/wiki/Monopoly_(game)", publisher: "Wikipedia" },
    { label: "Hasbro — Monopoly Official Rules", url: "https://www.hasbro.com/common/instruct/monins.pdf", publisher: "Hasbro" },
    { label: "'The Monopolists' — Mary Pilon", publisher: "Bloomsbury, 2015" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
  sportSpecific: {
    firstPublished: 1935,
    publisher: "Hasbro (originally Parker Brothers)",
    boardSpaces: 40,
    colourGroups: 8,
    startingCash: "$1500",
  },
};

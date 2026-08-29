import type { Sport } from "@/lib/types";

export const soloWhist: Sport = {
  id: "solo-whist",
  slug: "solo-whist",
  name: "Solo Whist",
  officialName: "Solo Whist (English Solo)",
  aliases: ["Solo", "English Solo", "Auction Solo"],
  shortDescription:
    "Late-Victorian British 4-player trick-taking card game — each player bids for a solo or partnership contract from 5 options (Prop-and-Cop, Solo, Misère, Abundance, Abundance-in-Trumps); pub + club staple 1890s-1950s.",
  longDescription:
    "Solo Whist (usually just 'Solo') is a British 4-player trick-taking card game developed from Whist in the 1890s, combining elements of bridge and Napoleon. Each of 4 players is dealt 13 cards from a standard deck. Bidding is complex — a hierarchy of 5-6 possible contracts: PROP-AND-COP (partnership with another player to take 8 of 13 tricks), SOLO (take 5 of 13 tricks alone), MISÈRE (take zero tricks alone), ABUNDANCE (take 9 of 13 tricks alone with player-chosen trump), ABUNDANCE-IN-TRUMPS (take 9 with dealer's trump), and OPEN MISÈRE (take zero tricks with hand exposed). Highest bidder plays contract; success wins from all opponents, failure loses. Solo Whist dominated British pub + working men's club culture 1890s-1950s and remains actively played across UK + Ireland + Commonwealth. Slightly more strategic than Napoleon due to 13-card hands (full deck use) + 5+ contract options.",

  category: "card-games",
  subCategory: "trick-taking card game (bid + solo/partnership)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "GB",
  regionOfOrigin: "United Kingdom (developed from Whist 1890s); British Empire pub + club spread",
  estimatedOrigin: "Developed 1890s Britain from Whist; peak popularity 1900-1955; regional variants developed 1920s+",

  players: { min: 4, max: 4, note: "Strictly 4 players; each dealt 13 cards." },
  equipment: [
    { name: "Standard 52-card deck", description: "Full deck; suits + ranks A-K used." },
    { name: "Score pad or chip pile", description: "Track cumulative winnings across hands." },
  ],
  duration: { approximateMinutes: 30, structure: "Deal + bid + 13 tricks = ~5-15 min per hand; ~6-12 hands per game session." },
  objective: "Meet or exceed declared bid contract to win stakes from all opponents; fail = pay penalty.",
  matchStructure: "Series of hands. Each: deal 13 cards → bid → contract player declares trump (if applicable) + plays contract vs. all → resolve stakes.",

  basicRules: [
    { title: "Deal 13 cards to each player", body: "Full 52-card deck; 13 per player." },
    { title: "Bidding phase (ascending contracts)", body: "Bids in ascending order: Pass < Prop < Solo < Misère < Abundance < Abundance-in-Trumps < Open Misère (or Slam)." },
    { title: "Winning bidder plays contract", body: "Highest bidder plays contract; other 3 players oppose unified except in Prop-and-Cop where bidder partners with 'Cop' player." },
    { title: "Follow suit if possible", body: "Standard trick-taking; highest trump/highest card of led suit wins." },
    { title: "13 tricks played", body: "13 tricks per hand; count towards contract requirement." },
    { title: "Meet contract = win stakes", body: "Contract player wins stakes from 3 opponents (or opponent from partnership); failure = pay penalty × 3." },
  ],
  advancedRules: [
    { title: "Prop-and-Cop partnership", body: "Bidder proposes → any other player accepts as 'Cop' partner → they combine for 8-trick target; win stakes from other 2." },
    { title: "Misère", body: "Zero tricks with any hand; failure = 1 trick loss = -1 stakes × 3." },
    { title: "Abundance = 9 tricks + own trump", body: "9 of 13 tricks with player-chosen trump suit." },
    { title: "Abundance-in-Trumps", body: "9 tricks with hearts as trump (some rulesets)." },
    { title: "Open Misère", body: "Zero tricks with hand exposed face-up; most extreme bid." },
    { title: "Slam / Grand Solo", body: "Take all 13 tricks; pays 10× stakes." },
  ],
  scoring: {
    summary: "Cash stakes (or chips) collected from/paid to opponents based on contract multiplier.",
    winCondition: "Highest cumulative winnings after agreed number of hands.",
    breakdown: [
      { action: "Prop-and-Cop met (8 tricks)", points: "Partners collect 2 chips from each opponent" },
      { action: "Solo met (5 tricks)", points: "Collect 3 chips from each opponent" },
      { action: "Misère met (0 tricks)", points: "Collect 4 chips from each" },
      { action: "Abundance met (9 tricks)", points: "Collect 6 chips from each" },
      { action: "Open Misère met (0 tricks with hand shown)", points: "Collect 12 chips from each" },
      { action: "Slam (13 tricks)", points: "Collect 25+ chips from each" },
      { action: "Contract failed", points: "Pay contract stake × 3 opponents" },
    ],
  },
  penalties: [
    { title: "Renege (failure to follow suit)", body: "Immediate hand loss + potential contract penalty." },
    { title: "Illegal bid", body: "Disqualified; next player." },
  ],

  positions: [
    { name: "Player (any of 4 seats)", role: "Everyone equal; bidder plays solo (or with 'Cop' partner) vs. others.", count: 4 },
  ],
  officiating: {
    officials: ["Self-refereed (pub + club)"],
    summary: "Casual pub game; no formal officiating.",
  },

  governingBodies: [
    { name: "No governing body — folk pub game", founded: 1890, headquarters: "N/A" },
  ],
  majorCompetitions: [
    { name: "Pub-league Solo Whist tournaments", frequency: "seasonal", founded: 1920, region: "UK" },
    { name: "British Legion Solo Championship", frequency: "annual", founded: 1955, region: "UK" },
    { name: "Various regional working men's club competitions", frequency: "annual", founded: 1900, region: "Northern England, Wales, Ireland" },
  ],
  countriesPlayed: ["GB", "IE", "AU", "NZ", "CA", "IN (colonial legacy)"],
  famousAthletes: [
    "Folk pub game — no famous professional players",
    "Featured prominently in Victorian + Edwardian British literature as social context",
  ],
  records: [
    { title: "Peak popularity", holder: "Solo Whist", value: "Dominant British pub card game 1900-1955 alongside Napoleon", year: 1930 },
    { title: "Bridge ancestor", holder: "Solo Whist", value: "Together with Bridge Whist + Auction Whist, Solo Whist evolved into modern Contract Bridge in 1920s", year: 1920 },
  ],

  variants: ["standard-solo-whist-4-player", "hearts-as-permanent-trump-abundance-variant", "misere-ouvert-open-misere-variant", "slam-variant-13-trick-bid", "australian-solo-variant"],
  relatedSports: ["whist", "bridge", "napoleon", "spades", "euchre", "500"],

  skills: ["13-card hand valuation (harder than 5-card Napoleon)", "contract choice (5+ options)", "partnership signaling (Prop-and-Cop)", "trick-taking geometry", "opponent card counting", "risk-reward decision making (multiple bid tiers)"],
  strategies: [
    { title: "Contract choice by hand strength", body: "Weak hand + long suit → Prop; medium hand → Solo; strong long suit + high cards → Abundance; hand with all low cards → Misère." },
    { title: "Prop-and-Cop partnership signaling", body: "'Prop' shows moderate strength wanting partner; 'Cop' accepts if their hand complements; bid reveals partial info." },
    { title: "Trump selection for Abundance", body: "Choose your longest + highest-suit; 4+ cards including aces/kings is minimum." },
    { title: "Misère defense against opponent", body: "When opponent bids Misère, force them to take a trick — lead low cards + force them high." },
    { title: "Card counting", body: "With 13 cards each, track suits + rank distribution to predict opponent hands." },
  ],

  terminology: [
    { term: "Prop-and-Cop", meaning: "Partnership contract (8 tricks); bidder 'proposes' + partner 'copes'." },
    { term: "Solo", meaning: "5-trick solo bid." },
    { term: "Misère", meaning: "Zero-trick bid (no trump)." },
    { term: "Abundance", meaning: "9-trick bid with player-chosen trump." },
    { term: "Open Misère", meaning: "Zero-trick bid with hand exposed." },
    { term: "Slam", meaning: "13-trick bid (take everything)." },
    { term: "Trump", meaning: "Suit that overrides non-trump cards in tricks." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn Whist first (partnership no-bid trick-taking)", body: "Foundation for Solo Whist; teaches trick-taking + trump structure." },
      { title: "Play with British pub + club regulars", body: "Northern England, Wales, Ireland pubs still have active Solo Whist tables." },
      { title: "Start with Prop-and-Cop bids only", body: "Partnership contracts are safest for beginners; master these before Solo/Abundance." },
    ]},
    { level: "advanced", steps: [
      { title: "Learn all 5-6 contract tiers", body: "Full contract vocabulary + hand valuation for each tier takes months of practice." },
      { title: "Compete in pub + Legion tournaments", body: "British Legion Halls host winter Solo Whist tournaments across UK." },
    ]},
  ],

  faq: [
    { question: "How is Solo Whist different from Bridge?", answer: "Solo Whist is bridge's direct ancestor — same 4-player, 13-card, trick-taking + trump structure, but with SIMPLER bidding (5-6 contracts vs. bridge's complex tier hierarchy) and mostly SOLO play (vs. bridge's fixed partnership). Bridge evolved from Solo Whist + Bridge Whist + Auction Whist in the 1920s-30s. Solo is faster + more casual; bridge is more strategically deep." },
    { question: "How is Solo Whist different from Napoleon?", answer: "Both are British bidding trick-taking games. Napoleon uses 5-card hands with 3-6 players + simple bidding (3, 4, 5 tricks). Solo Whist uses 13-card hands with 4 players + complex contract bidding (5+ options including Prop-and-Cop partnership, Solo, Misère, Abundance, Open Misère, Slam). Solo is more strategic; Napoleon is faster." },
    { question: "Is Solo Whist still played today?", answer: "Yes — remains active in British + Irish pubs + working men's clubs, especially in Northern England, Yorkshire, Ireland, Wales, and among older generations. Displaced from its 1930s peak by bridge + modern card games. Australia + New Zealand + Canada also have surviving Solo scenes." },
  ],

  wikipediaTitle: "Solo Whist",
  sources: [
    { label: "Wikipedia — Solo Whist", url: "https://en.wikipedia.org/wiki/Solo_Whist", publisher: "Wikipedia" },
    { label: "Pagat.com — Solo Whist", url: "https://www.pagat.com/solo/solo_whist.html", publisher: "Pagat" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

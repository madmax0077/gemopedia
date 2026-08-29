import type { Sport } from "@/lib/types";

export const pitch: Sport = {
  id: "pitch",
  slug: "pitch",
  name: "Pitch",
  officialName: "Pitch (American Auction Pitch)",
  aliases: ["Auction Pitch", "Setback", "High-Low-Jack (variant)", "American Pitch"],
  shortDescription:
    "American derivative of All Fours (19th century) — 4-player partnership trick-taking game with bidding for High, Low, Jack, Game points; dominates US Midwest + Appalachia recreational card play with dedicated tournament circuits.",
  longDescription:
    "Pitch (usually Auction Pitch, sometimes called Setback) is the dominant American descendant of English All Fours. Developed in the 19th-century US, Pitch adds a bidding phase to All Fours' 4-point trick-taking structure: players bid 1-4 points they expect to capture; highest bidder ('pitcher') leads first trick + names trump. Play 6 tricks; score is the 4 categories from All Fours (High, Low, Jack, Game). Bidder failing to make bid is 'set back' (loses bid amount) — hence 'Setback'. First team to 21 (or 11, or 7) points wins. 4-player partnership is standard; 2-3 player variants exist. Pitch is deeply embedded in US Midwest + Appalachia recreational culture — church groups, VFW halls, family reunions, and community centers host regular Pitch nights. National Pitch tournaments (Ozark Pitch Championship in Missouri, Great Lakes Pitch Tour) exist regionally. Amish + Mennonite variant 'Setback' remains popular alongside Rook.",

  category: "card-games",
  subCategory: "trick-taking card game (bid + partnership)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "United States (19th century development from All Fours); Midwest + Appalachia + Anabaptist Christian communities dominant",
  estimatedOrigin: "Mid-19th century US (evolved from English All Fours); Auction Pitch codified late 1800s; peaked 1930s-1970s Midwest recreational play",

  players: { min: 2, max: 4, note: "4-player partnership (2v2) standard; 2 + 3-player variants exist." },
  equipment: [
    { name: "Standard 52-card deck", description: "Full deck; some variants use 32-card reduced deck (2s-6s removed)." },
    { name: "Score pad", description: "Track partnership scores across hands to target (21, 11, or 7)." },
  ],
  duration: { approximateMinutes: 45, structure: "Games to 21 points typical; ~8-15 hands = 45-90 min." },
  objective: "First partnership to reach target (21, 11, or 7 points) wins game.",
  matchStructure: "Deal 6 cards each → bid 1-4 → highest bidder ('pitcher') leads first trick + names trump → 6 tricks played → score 4 categories → repeat until target reached.",

  basicRules: [
    { title: "Deal 6 cards to each player", body: "6 cards per player from standard 52-card deck." },
    { title: "Bidding phase (1, 2, 3, or 4 points)", body: "Each player bids in turn: pass or bid 1-4 points expecting to capture. Highest bid wins; only 1 bidder per hand." },
    { title: "Pitcher leads first + names trump", body: "Winning bidder ('pitcher') leads first trick; suit of that lead becomes trump for the hand." },
    { title: "6 tricks played", body: "Standard trick-taking; must follow suit; highest trump/highest of led suit wins trick." },
    { title: "Score 4 categories", body: "HIGH (highest trump played), LOW (lowest trump played, wins to team capturing it), JACK (Jack of trumps captured), GAME (highest pip count of scoring cards captured)." },
    { title: "Meet bid = score all categories; fail = 'set back'", body: "Bidder must capture ≥ bid amount of the 4 categories; failure = bid amount deducted from bidder team." },
  ],
  advancedRules: [
    { title: "'Smudge' bid (5 = 21 auto-win)", body: "Some rulesets allow 5-point bid: winning all 4 + game = instant 21 pts + game win." },
    { title: "Partnership signaling", body: "Bid values + trump choice signal hand strength to partner." },
    { title: "Setback variant scoring", body: "Failed bid subtracts bid amount from cumulative team score (can go negative)." },
    { title: "9-card variant (Pinochle-adjacent Pitch)", body: "Some Northern US variants deal 9 cards per player with expanded scoring." },
    { title: "Rag & Bone rule (regional)", body: "Missouri variant: special penalty for holding all trump but bidding low." },
  ],
  scoring: {
    summary: "4 categories per hand (max 4 points); meet bid to score; fail = -bid; first team to 21 wins.",
    winCondition: "First partnership to reach 21 (or 11 or 7) points wins.",
    breakdown: [
      { action: "High (capture highest trump)", points: "1" },
      { action: "Low (winning team captures lowest trump)", points: "1" },
      { action: "Jack (capture Jack of trumps)", points: "1" },
      { action: "Game (higher pip count)", points: "1" },
      { action: "Bid met (all 4)", points: "4 pts to bidding team" },
      { action: "Bid failed", points: "-bid amount to bidding team" },
      { action: "Smudge (5-bid all categories)", points: "5 pts (instant game win in some rulesets)" },
    ],
  },
  penalties: [
    { title: "Renege (failure to follow suit)", body: "Hand loss + potential game penalty." },
    { title: "Cheat / misdeal", body: "Redeal or opponent scoring bonus." },
  ],

  positions: [
    { name: "Partner (2 per team)", role: "One team of 2 partners across from each other.", count: 2 },
  ],
  officiating: {
    officials: ["Self-refereed (family + club + tournament)"],
    summary: "Casual play self-refereed; regional tournaments have referees for disputes.",
  },

  governingBodies: [
    { name: "No dedicated Pitch governing body — regional community game", founded: 1850, headquarters: "N/A" },
    { name: "Ozark Pitch Championship (regional)", founded: 1980, headquarters: "Missouri, USA" },
  ],
  majorCompetitions: [
    { name: "Ozark Pitch Championship", frequency: "annual", founded: 1980, region: "Missouri" },
    { name: "Great Lakes Pitch Tour", frequency: "annual", founded: 1995, region: "Michigan + Wisconsin + Minnesota" },
    { name: "Various Amish + Mennonite Pitch/Setback tournaments", frequency: "annual (community)", founded: 1950, region: "Ohio + Indiana + Iowa + Pennsylvania Anabaptist communities" },
    { name: "State fair Pitch tournaments (Iowa, Nebraska, Kansas)", frequency: "annual (summer)", founded: 1900, region: "US Midwest" },
  ],
  countriesPlayed: ["US", "CA", "MX (border communities)"],
  famousAthletes: [
    "Folk community game — no famous professional players",
    "Culturally dominant in US Midwest recreational play alongside Euchre + Cribbage",
  ],
  records: [
    { title: "Peak US Midwest popularity", holder: "Pitch", value: "One of top-3 recreational card games in US Midwest 1930s-1970s alongside Euchre + Cribbage", year: 1960 },
    { title: "Largest Pitch community", holder: "US Anabaptist communities (Amish + Mennonite)", value: "Amish + Mennonite play Setback (Pitch variant) alongside Rook as primary recreational cards; hundreds of thousands of players", year: 2024 },
  ],

  variants: ["auction-pitch-standard-4-player-21-target", "setback-scoring-can-go-negative", "9-card-pitch-northern-us-variant", "smudge-5-bid-variant", "amish-setback-anabaptist-community-variant", "3-player-cutthroat-pitch-variant"],
  relatedSports: ["all-fours", "seven-up", "setback", "euchre", "spades", "500", "rook"],

  skills: ["6-card hand valuation for bid", "trump selection", "trick-taking geometry", "partnership signaling via bid values", "opponent card counting", "pip counting for Game category"],
  strategies: [
    { title: "Conservative bidding", body: "Bid 2 pts safely (High + Jack likely) rather than aggressive 4-bid that risks setback." },
    { title: "Trump selection for maximum points", body: "Trump where you have length + Jack + high cards; short trump = failed bid risk." },
    { title: "Play for all 4 categories", body: "Meeting bid + winning all 4 categories = maximum 4 pt score; play for High + Low + Jack + Game together." },
    { title: "Partner signaling via bid + trump", body: "Bid amount + trump suit signal hand strength; partner adjusts play accordingly." },
    { title: "Bidding defense", body: "Force opponent to bid high (bluff-bid 1 pt) to make setback more likely." },
  ],

  terminology: [
    { term: "Pitcher", meaning: "Winning bidder; leads first trick + names trump." },
    { term: "Pitch", meaning: "The act of leading first trick as winning bidder." },
    { term: "Trump", meaning: "Suit named by pitcher (usually suit of first-led card)." },
    { term: "Setback", meaning: "Failing to meet bid — bid amount deducted from team score." },
    { term: "Smudge", meaning: "5-point bid (some rulesets); instant game win if made." },
    { term: "High / Low / Jack / Game", meaning: "The 4 scoring categories inherited from All Fours." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn All Fours scoring first", body: "High + Low + Jack + Game categories transfer directly to Pitch." },
      { title: "Play with US Midwest family or church group", body: "Every Midwest town has active Pitch players; ask at community centers + VFW halls." },
      { title: "Start with conservative bids (1-2 pts)", body: "Master low bids before attempting 3-4 pt bids that risk setback." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete in Ozark Pitch Championship or Great Lakes Tour", body: "Regional tournaments provide competitive pipelines." },
      { title: "Learn regional variants (Setback, 9-card Pitch, Smudge)", body: "Variant depth extends strategic options." },
    ]},
  ],

  faq: [
    { question: "Is Pitch the same as Setback?", answer: "Setback is a specific variant of Auction Pitch where a failed bid subtracts from the team's cumulative score (can go negative). Standard Auction Pitch penalizes failed bid but scores can't go negative. Setback is common in Amish + Mennonite Anabaptist communities. Both are Pitch-family games with same core mechanics." },
    { question: "How is Pitch different from All Fours?", answer: "Pitch is the American descendant of English All Fours (17th century). Pitch added bidding (1-4 pt contracts) whereas All Fours has no bidding (trump determined by turn-up + 'beg' option). Scoring categories are identical: High + Low + Jack + Game. Pitch dominates US Midwest + Appalachia; All Fours dominates Trinidad + Caribbean + Britain." },
    { question: "How popular is Pitch today?", answer: "Very actively played across US Midwest + Appalachia + Anabaptist Christian communities (Amish + Mennonite Ohio, Indiana, Iowa, Pennsylvania). Regional tournaments (Ozark Pitch, Great Lakes Tour) run annually. Estimated hundreds of thousands of active US players; culturally embedded alongside Euchre + Cribbage as core Midwest card games." },
  ],

  wikipediaTitle: "Pitch (card game)",
  sources: [
    { label: "Wikipedia — Pitch (card game)", url: "https://en.wikipedia.org/wiki/Pitch_(card_game)", publisher: "Wikipedia" },
    { label: "Pagat.com — Pitch", url: "https://www.pagat.com/allfours/pitch.html", publisher: "Pagat" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

import type { Sport } from "@/lib/types";

export const foodChainMagnate: Sport = {
  id: "food-chain-magnate",
  slug: "food-chain-magnate",
  name: "Food Chain Magnate",
  officialName: "Food Chain Magnate",
  aliases: ["FCM", "Food Chain"],
  shortDescription:
    "2015 HEAVY BUSINESS SIMULATION BOARD GAME by SPLOTTER SPELLEN (JEROEN DOUMEN + JOOP KIPPERS, DUTCH DESIGNERS known for uncompromising strategy games) — players run a 1950s FAST-FOOD RESTAURANT CHAIN, hiring STAFF (managers, marketing gurus, cooks, waitresses), running MARKETING CAMPAIGNS (billboards, radio, TV) to create DEMAND, and delivering food to hungry consumers via TRUCKS or RESTAURANTS. Notoriously PUNISHING learning curve + AGGRESSIVE PLAYER-VS-PLAYER ECONOMY where poor decisions can lock a player out of scoring. First to $10M in the bank wins. Ranked in BGG Top 30; considered a MASTERPIECE of intensely competitive Euro strategy.",
  longDescription:
    "FOOD CHAIN MAGNATE is a 2015 HEAVY BUSINESS SIMULATION BOARD GAME designed by JEROEN DOUMEN + JOOP KIPPERS + published by their SPLOTTER SPELLEN (Dutch boutique publisher famous for uncompromising heavy strategy games — ROADS & BOATS, ANTIQUITY, INDONESIA, THE GREAT ZIMBABWE + others). FCM is considered SPLOTTER'S MOST ACCESSIBLE + BEST-KNOWN work, though 'accessible' is relative — the game remains a HEAVY strategic experience. OVERVIEW: 2-5 players run competing 1950s FAST-FOOD RESTAURANT CHAINS in an American town, seeking to be the first to accumulate $10 MILLION in the bank (the game's win condition). CORE MECHANICS: HIRE STAFF to your CORPORATE ORG CHART: junior + senior EMPLOYEES include COOK, TRAINER, MANAGER, KITCHEN TRAINEE, WAITRESS, DRIVE-THRU (added Ketchup expansion), MARKETING TRAINEE + GURU, TRAVELING SALESMAN, MARKETING DIRECTOR, RECRUITER + CFO. Each staff role UNLOCKS specific game actions + provides special abilities. MARKETING CAMPAIGNS: Use MARKETING STAFF to run BILLBOARDS (short-range demand), RADIO SPOTS (medium), TV COMMERCIALS (long-range demand), and DISCOUNTS — creating DEMAND for specific FOODS (BURGERS, PIZZA, LEMONADE, BEER, SODA, COFFEE) in nearby residential zones. RESTAURANTS: Build + upgrade restaurant locations on the map board (hex or grid); each restaurant can serve certain foods based on menu + staff. TRUCKS/DELIVERY: Deliver product to consumers unable to reach restaurants; delivery expands your effective service radius. ECONOMY: When a house needs a product (created by marketing) and multiple players can serve it, the CLOSEST restaurant/truck serves them at the LOWEST MARKET PRICE — driving fierce competition. Prices are set by CFO STAFF (a critical role); running out of CFO means opponents can undercut your prices. WIN CONDITION: FIRST PLAYER TO REACH $10 MILLION cash wins immediately. LOSING CONDITION: A common trap is players who don't hire aggressive marketing/staff early → they fall behind exponentially → can be effectively 'game-over' within 3-4 rounds while game continues 5+ more hours. This ruthlessness is BOTH FCM'S ATTRACTION + DIVISIVE aspect. GAME LENGTH: 2-4 hours (highly variable — game ends when someone hits $10M). WEIGHT: BGG weight ~4.2/5 — HEAVY. RANKINGS: BGG Top 30 as of 2020s; considered a MASTERPIECE by hardcore Euro strategy fans. EXPANSIONS: KETCHUP + THE MINISTRY (2018) — adds new staff, food (fries), demand cards, government interactions. SPLOTTER PHILOSOPHY: Splotter deliberately designs games where PLAYERS CAN CRIPPLE THEMSELVES + others — no rubber-banding, no consolation prizes; brutal PvP economy. FCM epitomizes this. Notable Dutch design tradition. Considered one of the best AGGRESSIVE COMPETITIVE Euro games ever made.",
  category: "board-games",
  subCategory: "heavy Euro / business simulation / corporate strategy / brutal PvP economy",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "niche",
  countryOfOrigin: "NL",
  regionOfOrigin: "Netherlands (Splotter Spellen, Jeroen Doumen + Joop Kippers)",
  estimatedOrigin: "2015 (Splotter Spellen)",
  players: { min: 2, max: 5, note: "2-5 players; 3-4 optimal; 2P less confrontational; 5P chaotic + long." },
  field: {
    surfaceName: "Modular hex/grid map of a 1950s town",
    dimensions: "Modular tiles form ~60cm × 60cm town map",
    description: "Town map with houses (consumers), restaurant locations, source suppliers.",
  },
  equipment: [
    { name: "Modular town map tiles", description: "Randomly-generated each game" },
    { name: "Staff cards (Cook, Trainer, Manager, CFO, Marketing, etc.)", description: "The org chart — signature FCM" },
    { name: "Restaurant + truck miniatures", description: "Physical presence on board" },
    { name: "Product tokens (Burger, Pizza, Lemonade, Beer, Soda, Coffee)", description: "Deliverable goods" },
    { name: "Marketing campaign markers (Billboard, Radio, TV)", description: "Demand creators" },
    { name: "Money + Milestone bonus cards", description: "Rewards + tracking" },
  ],
  duration: { approximateMinutes: 180, structure: "2-4 hours; ends when first player hits $10M cash." },
  objective: "Be the first player to accumulate $10 MILLION in cash reserves.",
  basicRules: [
    { title: "Hire staff to unlock actions (Cook enables cooking, CFO enables pricing, etc.)", body: "Org chart drives gameplay." },
    { title: "Run marketing to create demand for specific foods", body: "Billboards/Radio/TV = different ranges." },
    { title: "Build restaurants + trucks to serve created demand", body: "Physical service." },
    { title: "Closest server at lowest price wins customer", body: "Signature economic mechanic." },
    { title: "Milestone bonuses reward first-to-achieve certain goals", body: "Race elements." },
    { title: "First to $10M cash wins immediately", body: "Definite endgame." },
  ],
  scoring: {
    summary: "Cash accumulation; first player to $10M wins.",
    breakdown: [
      { action: "Serving customer demand (revenue)", points: "Cash income" },
      { action: "Milestone bonuses (first waitress, first drive-thru, etc.)", points: "Bonus cash" },
      { action: "Marketing campaigns creating profitable demand", points: "Revenue driver" },
      { action: "First to $10M in cash", points: "Game won" },
    ],
    winCondition: "First to accumulate $10M cash.",
  },
  governingBodies: [
    { name: "Splotter Spellen (publisher + designers)", founded: 1996, headquarters: "Netherlands" },
    { name: "BoardGameGeek community", founded: 2000, headquarters: "Online" },
  ],
  majorCompetitions: [
    { name: "FCM community events + BoardGameGeek forums", frequency: "periodic", founded: 2016, region: "Global" },
    { name: "Online Yucata + Board Game Arena play", frequency: "ongoing", founded: 2018, region: "Online" },
  ],
  countriesPlayed: ["NL", "US", "DE", "GB", "FR", "IT", "JP", "CA", "AU", "PL"],
  famousAthletes: [
    "Jeroen Doumen (b. 1970, Netherlands) — Co-designer + Splotter co-founder",
    "Joop Kippers (Netherlands) — Co-designer + Splotter co-founder",
    "Splotter Spellen designer duo known for uncompromising heavy games",
  ],
  variants: [
    "food-chain-magnate-base-2015-mainstream",
    "ketchup-expansion-2018-new-staff-fries",
    "the-ministry-expansion-2018-government-interactions",
    "modular-map-random-town-layouts-replay-value",
  ],
  relatedSports: ["indonesia", "roads-and-boats", "antiquity", "concordia", "brass-birmingham"],
  skills: ["staff hiring + org-chart planning", "marketing timing + campaign selection", "map + demand geography", "pricing + CFO management", "opponent modeling"],
  strategies: [
    { title: "Hire CFO early — pricing control is decisive", body: "Undercutting is powerful." },
    { title: "Marketing creates artificial demand — time it with capacity", body: "Match demand to supply." },
    { title: "Milestone bonuses reward first-movers — race for early ones", body: "Front-load ambitions." },
    { title: "Avoid overcapacity without demand — bankruptcy risk", body: "Efficient scaling." },
  ],
  terminology: [
    { term: "FCM", meaning: "Food Chain Magnate abbreviation." },
    { term: "Org Chart", meaning: "Player's corporate hierarchy of staff." },
    { term: "CFO", meaning: "Chief Financial Officer staff — controls pricing." },
    { term: "Marketing Campaign", meaning: "Billboard (short), Radio (medium), TV (long) demand creation." },
    { term: "Milestone", meaning: "First-to-achieve bonus cards." },
    { term: "Truck / Restaurant", meaning: "Service delivery methods." },
    { term: "Splotter", meaning: "The Dutch publisher — synonymous with uncompromising heavy strategy." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Watch rules tutorial + play with 2 experienced players", body: "First game will be brutal — accept it." },
      { title: "Focus on hiring CFO + basic marketing your first game", body: "Foundation strategy." },
    ]},
    { level: "intermediate", steps: [
      { title: "Learn milestone strategies + counter-CFO tactics", body: "Optimization." },
    ]},
    { level: "advanced", steps: [
      { title: "Master expansions (Ketchup + Ministry) + 5-player games", body: "Full depth." },
    ]},
  ],
  faq: [
    { question: "What is Food Chain Magnate?", answer: "2015 HEAVY BUSINESS SIMULATION BOARD GAME by SPLOTTER SPELLEN (JEROEN DOUMEN + JOOP KIPPERS, DUTCH DESIGNERS) — players run a 1950s FAST-FOOD RESTAURANT CHAIN, hiring STAFF (managers, marketing gurus, cooks, waitresses), running MARKETING CAMPAIGNS (billboards, radio, TV) to create DEMAND, and delivering food to hungry consumers via TRUCKS or RESTAURANTS. Notoriously PUNISHING learning curve + AGGRESSIVE PLAYER-VS-PLAYER ECONOMY where poor decisions can lock a player out of scoring. First to $10M in the bank wins. Ranked in BGG Top 30; considered a MASTERPIECE of intensely competitive Euro strategy." },
    { question: "Why is FCM considered so brutal?", answer: "FCM's REPUTATION FOR BRUTALITY comes from: (1) NO RUBBER-BANDING — the game does not help losing players catch up. (2) EARLY MISTAKES COMPOUND — bad hiring or marketing in rounds 1-2 can put you 5+ hours behind, effectively game-over. (3) DIRECT PVP UNDERCUTTING via CFO pricing — opponents can literally starve your restaurants of customers. (4) MILESTONE BONUSES reward first-movers heavily — being second-to-market on key milestones is often permanently fatal. (5) The GAME DOESN'T END until someone hits $10M — losing players may play 2+ hours with zero chance of winning. Splotter Spellen DELIBERATELY designs uncompromising games; FCM is their most accessible but still brutal. FANS LOVE THIS for the pure strategic test; CRITICS find it unfairly punishing to newcomers. Best played with experienced groups where everyone accepts the design philosophy." },
  ],
  wikipediaTitle: "Food Chain Magnate",
  sources: [
    { label: "BoardGameGeek — Food Chain Magnate", url: "https://boardgamegeek.com/boardgame/175914/food-chain-magnate", publisher: "BGG" },
    { label: "Splotter Spellen", url: "https://splotter.nl/", publisher: "Splotter" },
  ],
  lastVerified: "2026-08-28",
  confidence: "verified",
};

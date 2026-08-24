import type { Sport } from "@/lib/types";

export const badminton: Sport = {
  id: "badminton",
  slug: "badminton",
  name: "Badminton",
  officialName: "Badminton",
  aliases: ["Poona (Indian origin name)"],
  shortDescription:
    "The fastest racket sport in the world — hit a feathered shuttlecock over a 1.55 m net using a light racket; win by driving the shuttle to the floor of your opponent's court.",
  longDescription:
    "Badminton is a racket sport played by 2 (singles) or 4 (doubles) players who use lightweight rackets to hit a feathered projectile — the shuttlecock — over a net. It has the fastest projectile speed in any racket sport: recorded shuttle smashes exceed 500 km/h (Mads Pieler Kolding, 2017). The modern game evolved from the Indian pastime 'Poona' in the mid-19th century, refined by British Army officers and codified by the Bath Badminton Club in 1877. The Badminton World Federation (BWF, founded 1934) governs internationally. Badminton has been an Olympic sport since Barcelona 1992 and is dominated in the modern era by Asian nations — China, Indonesia, Malaysia, Korea, Denmark and now India lead the world stage.",

  category: "racket-paddle-sports",
  subCategory: "shuttlecock racket sport",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "IN",
  regionOfOrigin: "Pune, India (Poona) — codified by British officers; global rules formalised at Bath, England, 1877",
  estimatedOrigin: "1870s India/England; Badminton World Federation founded 1934",

  players: { min: 2, max: 4, note: "Singles 1v1 or doubles 2v2. Mixed doubles pairs a man and woman per team." },
  field: {
    surfaceName: "badminton court",
    dimensions: "Singles: 13.4 m × 5.18 m. Doubles: 13.4 m × 6.1 m. Net height: 1.55 m at edges, 1.524 m at centre.",
    description: "Indoor court with a low net. Marked with singles/doubles sidelines, service lines (short at 1.98 m from net, long service line for doubles at 0.76 m from back), and centre line.",
  },
  equipment: [
    { name: "Badminton racket", description: "Graphite/composite frame, 68 cm long, 70-95 g strung. Strung with high-tension nylon or gut synthetic." },
    { name: "Shuttlecock (shuttle/birdie)", description: "16 goose feathers or synthetic plumes in a cork base. Weighs 4.74-5.5 g. Feather shuttles for elite play, plastic for club/casual." },
    { name: "Court shoes", description: "Non-marking, gum-rubber sole for fast lateral movement on indoor courts." },
    { name: "Hand grip / overgrip", description: "Absorbent grip wrap on the handle." },
  ],
  duration: {
    approximateMinutes: 45,
    structure: "Best of 3 games; games to 21 points, win by 2, cap at 30.",
    note: "Rallies in professional badminton average 5-15 seconds; match times: 30-90 minutes depending on quality of play and court speed.",
  },
  objective: "Win 2 out of 3 games to 21 points each by hitting the shuttlecock over the net so it lands in the opponent's court and cannot be returned.",
  matchStructure:
    "Each game is played to 21 points (win by 2, capped at 30). Match is best of 3. Server serves diagonally into the receiver's service court; a rally continues until the shuttle hits the floor, goes out, hits the net (into own court), or a fault is called. Serve alternates each rally in singles; in doubles, service side changes only when it loses a rally.",

  basicRules: [
    { title: "The serve", body: "Server must strike the shuttle below the waist with a underhand motion. Serve must land diagonally in the receiver's service box." },
    { title: "Return", body: "Shuttle must be hit before it touches the ground. Only one player of the receiving side may hit it back." },
    { title: "In or out", body: "A shuttle landing on the line is considered in. In doubles, sidelines are wider; back service line is shorter for doubles (1.98 m closer to net for serve; but back-line is same for rally play)." },
    { title: "Fault (loss of point)", body: "Missing the shuttle on your side, hitting into the net, out of bounds, illegal serve, or touching the net with racket/body." },
    { title: "Alternating serves", body: "In singles: serve alternates with each rally. In doubles: only the winning-side serves; when server's team wins a rally, the same server serves again from the opposite service box." },
    { title: "Change of ends", body: "Ends are switched after each game and, in a deciding game, at 11 points." },
  ],
  advancedRules: [
    { title: "Setting the game", body: "At 20-all, the side that first reaches a 2-point lead wins. If the score reaches 29-all, the side scoring the 30th point wins." },
    { title: "Serve height rule", body: "Since 2018, the shuttle must be struck below 1.15 m from the court (the new 'flat' serve rule — replaced the older 'waist' rule)." },
    { title: "Video review challenges", body: "In many top events, each side has 2 unsuccessful line-call challenges per game (Hawk-Eye)." },
    { title: "Coaching allowed", body: "Since 2018, players may receive coaching between rallies at all events." },
    { title: "Shuttle change", body: "Either player may request a shuttle change if the shuttle is damaged; usually granted." },
  ],
  scoring: {
    summary: "Rally scoring: any rally scores a point. First to 21 with 2-point margin (capped at 30). Best of 3 games.",
    breakdown: [
      { action: "Rally win", points: "1", note: "Awarded to whoever wins the rally regardless of who served." },
      { action: "Game win", points: "First to 21 (with 2-point margin, capped at 30)." },
      { action: "Match win", points: "Best of 3 games." },
    ],
    winCondition: "Win 2 games. Change ends after each game, and in game 3 at 11 points.",
  },

  officiating: {
    officials: ["Umpire (chair)", "Service judge", "Line judges (up to 10)", "Match referee (tournaments)"],
    summary: "Umpire in the chair controls the match; service judge sits opposite and calls illegal serves; line judges call in/out on each line. Video review (Hawk-Eye) available at top events.",
  },
  governingBodies: [
    { name: "Badminton World Federation", acronym: "BWF", founded: 1934, headquarters: "Kuala Lumpur, Malaysia", website: "https://bwfbadminton.com" },
    { name: "Badminton Asia Confederation", founded: 1959, headquarters: "Kuala Lumpur, Malaysia" },
    { name: "Badminton Association of India", acronym: "BAI", founded: 1934, headquarters: "New Delhi, India" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 1992, region: "worldwide" },
    { name: "BWF World Championships", frequency: "annual", founded: 1977, region: "worldwide", note: "Not held in Olympic years." },
    { name: "Thomas Cup", frequency: "biennial", founded: 1948, region: "worldwide", note: "Men's national team championship." },
    { name: "Uber Cup", frequency: "biennial", founded: 1956, region: "worldwide", note: "Women's national team championship." },
    { name: "Sudirman Cup", frequency: "biennial", founded: 1989, region: "worldwide", note: "Mixed national team championship." },
    { name: "BWF World Tour (Super 1000, 750, 500, 300)", frequency: "annual", founded: 2018, region: "worldwide" },
    { name: "All England Open", frequency: "annual", founded: 1899, region: "worldwide", note: "The oldest and most prestigious open." },
  ],
  countriesPlayed: ["CN", "IN", "ID", "MY", "KR", "JP", "DK", "TW", "TH", "GB", "SG"],
  famousAthletes: [
    "Lin Dan (CHN, 2× Olympic gold)",
    "Lee Chong Wei (MAS)",
    "Rudy Hartono (INA)",
    "Kento Momota (JPN)",
    "Viktor Axelsen (DEN)",
    "Chen Long (CHN)",
    "PV Sindhu (IND)",
    "Carolina Marín (ESP)",
    "Saina Nehwal (IND)",
    "Tai Tzu-ying (TW)",
    "Susi Susanti (INA)",
    "Peter Gade (DEN)",
  ],
  records: [
    { title: "Fastest recorded shuttle smash", holder: "Mads Pieler Kolding (DEN)", value: "426 km/h (recorded in a controlled test); match shots regularly exceed 300 km/h", year: 2017 },
    { title: "Most All England titles (men)", holder: "Rudy Hartono (INA)", value: "8 (7 consecutive 1968-1974)", year: 1976 },
    { title: "Most Olympic gold medals", holder: "Zhang Ning (CHN)", value: "2 (2004, 2008 singles)", year: 2008 },
    { title: "Longest rally in a match", holder: "Ratchanok Intanon vs Nozomi Okuhara", value: "195 shots (2019 Malaysia Masters)", year: 2019 },
  ],

  variants: ["indoor-badminton", "beach-badminton", "para-badminton", "poona"],
  relatedSports: ["tennis", "table-tennis", "squash", "pickleball", "sepak-takraw"],

  skills: ["reflexes", "footwork", "wrist snap", "smash technique", "deception (fake shots)", "endurance and speed", "positional awareness"],
  strategies: [
    { title: "Attack the back", body: "Deep clears to push opponents to the baseline, opening the front court for a follow-up drop or smash." },
    { title: "Deception and disguise", body: "Late wrist changes and slice shots that look like smashes but become drops — Lin Dan and Tai Tzu-ying's signature." },
    { title: "Repeated backhand attacks", body: "Backhand is most players' weaker side — repeatedly attacking it eventually forces a weak return." },
    { title: "Front court pressure (doubles)", body: "Aggressive net play from the front player — half-smashes, net kills, quick pushes." },
    { title: "Rotation in doubles", body: "The two-back/two-front rotation lets the attacking side keep pressure — a hallmark of top pro doubles play." },
  ],

  terminology: [
    { term: "Shuttlecock / shuttle / birdie", meaning: "The feathered/plastic projectile — 4.74-5.5 g." },
    { term: "Smash", meaning: "Steep downward power shot — the winning stroke." },
    { term: "Clear (lob)", meaning: "High, deep shot to push opponents to the baseline." },
    { term: "Drop shot", meaning: "Soft shot that lands close to the net on the opponent's side." },
    { term: "Drive", meaning: "Fast, flat shot at shoulder or head height." },
    { term: "Net kill", meaning: "Steep angled shot from close to the net when the shuttle is above net height." },
    { term: "Serve short / long", meaning: "Short low serve (mostly doubles) vs deep long serve (mostly singles)." },
    { term: "Rally scoring", meaning: "Point awarded to whoever wins the rally, regardless of who served — replaced the old side-out system in 2006." },
    { term: "Setting", meaning: "The 2-point margin rule at 20-all, up to a max of 30 points." },
    { term: "Deception", meaning: "Faking one shot then playing another — a defining pro skill." },
    { term: "Racket face angle", meaning: "The tilt of the strings at contact — determines shot type." },
    { term: "Backhand clear", meaning: "The most difficult foundational shot in badminton — requires trained wrist snap." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Grip fundamentals", body: "Forehand and backhand grips — thumb-up backhand grip is critical for defence and net play." },
      { title: "Basic serves", body: "Low forehand doubles serve; high singles serve." },
      { title: "Overhead clear and smash", body: "Overhead strokes are the platform for the whole game — learn timing, shoulder rotation and follow-through." },
      { title: "Basic footwork", body: "Split step, chassé step, lunge — 5-corner footwork drill covers all court areas." },
    ] },
    { level: "intermediate", steps: [
      { title: "Backhand overhead clear", body: "The hardest stroke in badminton — requires precise timing and wrist snap." },
      { title: "Deceptive drops and slices", body: "Late-wrist-change drops that look like clears; slice smashes for angle." },
      { title: "Doubles tactics", body: "Learn front-back rotation, sides positioning, and defensive/attacking modes." },
      { title: "Match play", body: "Play tournaments to develop tactical awareness — reading opponents mid-rally is a match-winner." },
    ] },
    { level: "advanced", steps: [
      { title: "Elite footwork drills", body: "Multi-shuttle drills, shadow footwork, agility ladders — top pros train footwork daily." },
      { title: "Pattern play and setting up smashes", body: "Learn 3-4 shot combinations that force weak returns; develop percentage-based strategy." },
      { title: "Elite conditioning", body: "Anaerobic power for rallies + aerobic endurance for a 90-minute match; VO2max is a limiter at world level." },
      { title: "Mental preparation", body: "Playing 21-20 in game 3 requires trained focus and composure; visualisation and routine matter." },
    ] },
  ],
  faq: [
    { question: "How fast is a badminton smash?", answer: "The record for the fastest smash is 426 km/h (Mads Pieler Kolding, controlled test 2017). In actual match play, elite men's smashes regularly exceed 300 km/h — the fastest projectile in racket sports." },
    { question: "Why is badminton so fast to watch?", answer: "Shuttle decelerates rapidly (aerodynamic feathers) but starts extremely fast off the racket. Court is small (13.4 m × 6.1 m), rallies are short, and the point-per-rally scoring rewards aggression." },
    { question: "What's the difference between singles and doubles courts?", answer: "The doubles court is wider (6.1 m vs 5.18 m). The doubles service back line is 0.76 m in from the back boundary; the singles service back line is at the back boundary. Rally boundaries: singles use the inner sidelines and back line; doubles use the outer sidelines and back line." },
    { question: "Why does Asia dominate badminton?", answer: "Cultural roots: badminton is treated as a major sport in China, Indonesia, Malaysia, Korea, Japan and India — with government sports schools, professional training pipelines from age 5-6, and top-tier coaching investment. Asian nations have won 47 of 55 Olympic badminton golds." },
    { question: "Feather vs plastic shuttles — which is better?", answer: "Feather shuttles (16 goose feathers) are used exclusively at elite level — they slow more dramatically and reward finesse. Plastic (synthetic) shuttles fly straighter and last longer, ideal for training and casual play. BWF elite events use feather only." },
  ],

  wikipediaTitle: "Badminton",
  sources: [
    { label: "Wikipedia — Badminton", url: "https://en.wikipedia.org/wiki/Badminton", publisher: "Wikipedia" },
    { label: "BWF — Laws of Badminton", url: "https://bwfbadminton.com/wp-content/uploads/2019/03/BWF-Statutes.pdf", publisher: "Badminton World Federation" },
    { label: "USA Badminton", url: "https://www.teamusa.org/USA-Badminton", publisher: "USA Badminton" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};

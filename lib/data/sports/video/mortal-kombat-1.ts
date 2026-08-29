import type { Sport } from "@/lib/types";

export const mortalKombat1: Sport = {
  id: "mortal-kombat-1",
  slug: "mortal-kombat-1",
  name: "Mortal Kombat 1",
  officialName: "Mortal Kombat 1",
  aliases: ["MK1 (2023)", "MK12"],
  shortDescription:
    "NetherRealm Studios 2D fighting game reboot (Sep 19, 2023 PS5/Xbox/PC/Switch) — new timeline after MK11 story. Introduces Kameo Fighters (secondary summonable partners) + new Fatalities. Signature EVO 2024 game; roster 24+ launched characters + DLC packs.",
  longDescription:
    "Mortal Kombat 1 (also known as MK12, 2023) is NetherRealm Studios' 2D fighting game reboot of the Mortal Kombat franchise — released September 19, 2023 for PS5, Xbox Series X/S, PC (Steam), and Nintendo Switch. Directed by Ed Boon (series co-creator + long-time NRS creative director). Story reboots the entire MK timeline post-MK11's ending — Liu Kang is now Fire God + Keeper of Time, has reset the universe into a new timeline where familiar characters have altered backstories + relationships. Signature new mechanic: 'Kameo Fighter' — secondary summonable partner character (chosen from separate roster of 15+ Kameos including Sonya, Cyrax, Sub-Zero, Frost, Motaro, etc.) provides assist attacks + tag combos + Fatal Blow help. Every match is 1v1 main + 1 Kameo per side. 23+ launch main characters + 6 DLC (Homelander, Peacemaker, Omni-Man, Ermac, Quan Chi, Takeda). Story mode is signature NRS cinematic (18+ hrs). Invasions mode is single-player RPG-lite grinder. Fatalities + Brutalities + Fatal Blows all return with new animations. Signature EVO 2024 game; NRS Pro Kompetition esports circuit. 3M+ units first month. Praised for Kameo depth + story; criticised for online netcode + Invasions grind.",
  category: "video-games",
  subCategory: "2D fighting game (reboot)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "21st-century", popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (NetherRealm Studios, Chicago)",
  estimatedOrigin: "Released Sep 19, 2023 for PS5/Xbox Series/PC/Switch — MK series reboot",
  players: { min: 1, max: 2, note: "Single-player Story/Invasions + 1v1 online + local versus." },
  equipment: [
    { name: "PS5, Xbox Series X/S, PC (Steam), Switch", description: "Multi-platform; Switch version has downgraded visuals but full gameplay." },
    { name: "Fight stick / Hitbox / controller", description: "Pro players use hitboxes or arcade sticks; NRS games traditionally gamepad-friendly." },
  ],
  duration: { approximateMinutes: 10, structure: "Match ~3-5 min; tournament set (best-of-3 or Bo5 games) ~10-20 min." },
  objective: "In fighting mode: reduce opponent HP to zero + optionally perform Fatality. In tournament: win most sets. Story: complete Ed Boon's cinematic reboot story.",
  matchStructure: "Fighting Ground: 1v1 with Kameo pick / arcade / training. Online Ranked. NRS Pro Kompetition: single-elim brackets.",
  basicRules: [
    { title: "Main character + Kameo Fighter", body: "Each player picks 1 main + 1 Kameo (secondary summonable partner)." },
    { title: "Special moves via motion inputs", body: "Traditional NRS 4-button (Front Punch, Back Punch, Front Kick, Back Kick) with motion + button inputs for specials." },
    { title: "Fatality after final round win", body: "After KO of opponent's final round, input Fatality sequence within window for cinematic finisher." },
  ],
  advancedRules: [
    { title: "Kameo cooldown + Kameo Fatalities", body: "Kameo attacks are on cooldown; Kameos have own Fatalities usable via specific input during Fatality window." },
    { title: "Fatal Blow (once per match)", body: "Below 30% HP → Fatal Blow super attack available once per match; can be combined with Kameo assist." },
    { title: "Brutalities (mid-round finishers)", body: "Certain moves become Brutality finishers if conditions met (special buttons held, etc.) — cinematic mid-round kill." },
  ],
  scoring: {
    summary: "Win 2 rounds to win game; win 3-4 games to win tournament set.",
    winCondition: "Reduce opponent HP to zero required rounds.",
    breakdown: [{ action: "Round win", points: "Bo3 or Bo5" }, { action: "Fatality performed", points: "Extra style points (no impact on match)" }],
  },
  penalties: [
    { title: "Rounds lost to Fatal Blow", body: "Full super damage; hard to punish." },
    { title: "Failed Fatality input", body: "Fatality window missed = normal KO (no bonus)." },
    { title: "Wake-up trap combos", body: "Landing on knock-down state punished for extended combo." },
  ],
  positions: [{ name: "Main Fighter (23+ launch)", role: "Solo character selection per match.", count: 1 }, { name: "Kameo Fighter (15+ Kameos)", role: "Secondary summonable partner providing assists + tag combos.", count: 1 }],
  officiating: { officials: ["NRS Pro Kompetition Referees", "EVO Referees", "Anti-cheat + report system"], summary: "Tournament refs + online moderation." },
  governingBodies: [
    { name: "NetherRealm Studios (WB Games)", founded: 2010, headquarters: "Chicago, Illinois (USA)" },
    { name: "Warner Bros. Games", founded: 2004, headquarters: "Burbank, California" },
    { name: "NRS Pro Kompetition organiser", founded: 2015, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "NRS Pro Kompetition (MK1)", frequency: "annual multi-event", founded: 2023, region: "USA + Europe" },
    { name: "EVO — Mortal Kombat 1 main game", frequency: "annual", founded: 1996, region: "Las Vegas, USA" },
    { name: "Combo Breaker (MK majors)", frequency: "annual", founded: 2014, region: "USA (Chicago)" },
  ],
  countriesPlayed: ["US", "MX", "BR", "AR", "GB", "DE", "FR", "IT", "JP", "KR", "AU"],
  famousAthletes: ["SonicFox (Dominique McLean, USA) — MK series legend, multi-EVO champion", "Ninjakilla_212 (Perry Simmons, USA)", "Rewind (USA)", "Scorpionprocs (USA)", "Nicolas 'Nicolas' Kelsch (BRA)"],
  records: [
    { title: "3M+ units first month", holder: "NetherRealm / WB Games", value: "3 million+ units shipped in first month across all platforms", year: 2023 },
    { title: "SonicFox EVO 2024 winner", holder: "SonicFox (USA)", value: "SonicFox won EVO 2024 Mortal Kombat 1 championship — MK legend continues dominance", year: 2024 },
    { title: "Timeline reboot post-MK11", holder: "NRS / Ed Boon", value: "First timeline reboot in MK franchise — Liu Kang as Fire God + Keeper of Time resets the universe", year: 2023 },
    { title: "Kameo Fighter system debut", holder: "NRS", value: "First MK entry with summonable secondary Kameo Fighter partner mechanic", year: 2023 },
  ],
  variants: ["mk1-standard", "mk1-premium", "mk1-kollectors-edition", "mk1-khaos-reigns-expansion"],
  relatedSports: ["mortal-kombat-11", "mortal-kombat-x", "injustice-2", "street-fighter-6", "tekken-8"],
  skills: ["motion input execution", "Kameo cooldown management", "Fatal Blow timing", "combo optimisation with Kameo assist"],
  strategies: [
    { title: "Kameo synergy building", body: "Main + Kameo pair should have complementary strengths — e.g., zoning Main + rushdown Kameo assist." },
    { title: "Fatal Blow timing", body: "Save Fatal Blow for round-ending burst; don't waste on early-round chip damage." },
    { title: "Wake-up defense with Kameo", body: "Use Kameo assist as universal wake-up option to counter opponent pressure." },
  ],
  terminology: [
    { term: "Kameo", meaning: "Secondary summonable partner fighter" },
    { term: "Fatality", meaning: "Cinematic finisher after final round KO" },
    { term: "Brutality", meaning: "Mid-round move-based cinematic kill" },
    { term: "Fatal Blow", meaning: "Once-per-match super attack (low-HP trigger)" },
    { term: "Invasions", meaning: "Single-player RPG-lite content mode" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Story Mode + Invasions", body: "Learn characters + Kameo basics via single-player content." }] },
    { level: "intermediate", steps: [{ title: "Ranked Kombat League climb", body: "Play Ranked; climb League ranks; learn matchups + Kameo synergies." }] },
    { level: "advanced", steps: [{ title: "NRS Pro Kompetition / EVO majors", body: "Compete in Pro Kompetition regional events + qualify for majors." }] },
  ],
  faq: [
    { question: "How does Mortal Kombat 1 (2023) differ from previous MK games?", answer: "MK1 is a timeline reboot — new backstories for all characters + Liu Kang as Fire God + Keeper of Time. Adds Kameo Fighter system (secondary summonable partner). Retains classic MK4-button + Fatality tradition but with modernised graphics + gameplay depth." },
    { question: "Do I need to have played MK11 to enjoy MK1?", answer: "No — MK1 is a full timeline reboot. Story picks up from MK11's ending but establishes an entirely new world where familiar characters have different histories. Great entry point for newcomers." },
  ],
  wikipediaTitle: "Mortal Kombat 1 (2023 video game)",
  sources: [{ label: "Wikipedia — Mortal Kombat 1 (2023)", url: "https://en.wikipedia.org/wiki/Mortal_Kombat_1_(2023_video_game)", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default mortalKombat1;

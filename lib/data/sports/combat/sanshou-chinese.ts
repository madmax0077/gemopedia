import type { Sport } from "@/lib/types";

export const sanshouChinese: Sport = {
  id: "sanshou-chinese",
  slug: "sanshou-chinese",
  name: "Sanshou (Chinese Kickboxing)",
  officialName: "Sanda / Wushu Sanshou (International Wushu Federation, IWUF)",
  aliases: ["Sanda", "Chinese Kickboxing", "Wushu Sanshou", "散手"],
  shortDescription:
    "Full-contact Chinese kickboxing sport combining Wushu Kung Fu with strikes + kicks + throws + sweeps on a raised leitai platform (2 m high); IWUF governance since 1990; regular World Wushu Championships event since 1991.",
  longDescription:
    "Sanshou (散手, 'free hand') — officially renamed Sanda (散打, 'free fighting') in 1998 — is the full-contact combat sport component of modern Chinese Wushu, developed by the Chinese State Sports Commission from 1958 onward through systematic study of traditional Kung Fu striking + Chinese wrestling (Shuai Jiao) + Qin-na (grappling). Signature feature: fought on a raised leitai platform (擂台) 2 m high × 8 m × 8 m — dating to traditional imperial-era prize-fighting platforms; competitors can score by knocking opponent off the platform. Full contact with punches, kicks, throws, sweeps (limited grappling, no ground fighting), foot sweeps allowed. Signature techniques: Jian Ti (front kick), Bian Ti (roundhouse), Chuai Ti (side kick), Jia Da (blocking punch), Shuai (throws from clinch), Da (strikes). Weight classes 48-80+ kg (men) + women's divisions. Governed by International Wushu Federation (IWUF, founded 1990, HQ Lausanne). Regular World Wushu Championships biennial since 1991; Sanshou also part of World Combat Games. Notable pro fighter crossover: Cung Le (USA/Vietnam — UFC), Muslim Salikhov (RUS — UFC welterweight), Zhang Weili (CHN — UFC strawweight champion base). China dominates Sanshou globally (75%+ world titles); Russia, Vietnam, Iran, Egypt strong secondary powers.",
  category: "combat-sports",
  subCategory: "Chinese full-contact kickboxing + throwing",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "CN",
  regionOfOrigin: "China (State Sports Commission systematized 1958+; IWUF 1990)",
  estimatedOrigin: "Traditional Chinese prize-fighting leitai; modern Sanshou systematized 1958-1979 by Chinese State Sports Commission; IWUF 1990",
  players: { min: 1, max: 2 },
  equipment: [{ name: "Leitai platform (2m × 8m × 8m raised)", description: "Signature raised platform for Sanshou; falling off = 1 point to opponent." }, { name: "Padded gloves (10 oz)", description: "Boxing-style padded gloves." }, { name: "Headgear + chest protector + shin pads", description: "Standard amateur safety gear." }, { name: "Mouthguard + groin guard", description: "Mandatory safety." }],
  duration: { approximateMinutes: 6, structure: "3 rounds × 2 min with 1 min rest; amateur bouts." },
  objective: "Win rounds by scoring more points via strikes + throws + knock-offs, or force stoppage.",
  matchStructure: "Best-of-3 rounds; round winner determined by point advantage; overall winner = 2+ rounds.",
  basicRules: [
    { title: "Strikes + kicks + throws allowed", body: "Punches, kicks (including sweeps), grappling to throws (2-second grip max)." },
    { title: "Ground fighting NOT allowed", body: "Fight resets standing after throws — no ground grappling." },
    { title: "Knock-off scoring", body: "Throwing opponent off leitai platform = 3 points." },
    { title: "Throws + sweeps score points", body: "Clean throws = 2 points; sweeps = 1 point." },
    { title: "Strikes score points", body: "Clean strikes = 1-2 points." },
  ],
  scoring: {
    summary: "Points per strike (1-2) / throw (2) / sweep (1) / knock-off (3); round + match awarded by aggregate.",
    winCondition: "Win 2 of 3 rounds OR force stoppage (KO/TKO/injury/knock-off decisive).",
  },
  positions: [{ name: "Sanshou fighter", role: "Sole competitor per bout.", count: 1 }, { name: "Coach + cornerman", role: "Between-rounds support.", count: 2 }],
  officiating: { officials: ["Referee (in-ring)", "3-5 Corner Judges", "Ring Timer", "Chief Referee"], summary: "IWUF certified officials panel." },
  governingBodies: [{ name: "IWUF (International Wushu Federation)", founded: 1990, headquarters: "Lausanne, Switzerland" }, { name: "Chinese Wushu Association (CWA)", founded: 1958, headquarters: "Beijing, China" }],
  majorCompetitions: [{ name: "World Wushu Championships (Sanshou event)", frequency: "biennial", founded: 1991, region: "rotating global" }, { name: "Asian Wushu Championships", frequency: "biennial", founded: 1987, region: "Asia (rotating)" }, { name: "World Combat Games — Sanshou", frequency: "quadrennial", founded: 2010, region: "rotating" }],
  countriesPlayed: ["CHN (dominant)", "RUS", "VNM", "IRN", "EGY", "USA", "UKR", "KAZ", "TUR"],
  famousAthletes: ["Cung Le (USA/VNM — 2001+2002 Sanshou WC medals → UFC/StrikeForce)", "Muslim Salikhov (RUS — 3x Sanshou WC → UFC)", "Zhang Weili (CHN — Sanshou base → UFC strawweight champion)"],
  records: [
    { title: "Renamed Sanda from Sanshou 1998", holder: "IWUF", value: "Officially renamed Sanshou → Sanda 1998; both names remain in use", year: 1998 },
    { title: "World Wushu Championships since 1991", holder: "IWUF", value: "Biennial event since 1991 (Beijing inaugural); Sanshou always featured", year: 1991 },
    { title: "Cung Le crossover UFC", holder: "Cung Le (USA/VNM)", value: "Sanshou/Sanda world championship medalist who became UFC middleweight fighter; ambassador for Sanshou → MMA transition", year: 2007 },
  ],
  variants: ["professional-sanda-open-glove", "amateur-sanshou-headgear", "traditional-leitai-no-gloves"],
  relatedSports: ["muay-thai", "kickboxing", "shuai-jiao", "kung-fu-traditional-forms"],
  skills: ["kick-punch combinations", "throw setups from clinch", "leitai edge awareness", "distance management"],
  wikipediaTitle: "Sanshou",
  sources: [{ label: "Wikipedia — Sanshou", url: "https://en.wikipedia.org/wiki/Sanshou", publisher: "Wikipedia" }, { label: "IWUF official", url: "https://www.iwuf.org", publisher: "International Wushu Federation" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default sanshouChinese;

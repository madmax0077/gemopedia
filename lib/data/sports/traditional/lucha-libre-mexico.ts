import type { Sport } from "@/lib/types";

export const luchaLibreMexico: Sport = {
  id: "lucha-libre-mexico",
  slug: "lucha-libre-mexico",
  name: "Lucha Libre (Mexican Professional Wrestling)",
  officialName: "Consejo Mundial de Lucha Libre (CMLL) / AAA (Lucha Libre AAA Worldwide)",
  aliases: ["Mexican Wrestling", "Lucha Libre Mexicana", "Rey de Reyes"],
  shortDescription:
    "Traditional Mexican professional wrestling characterized by masks (máscaras), high-flying aerial style (lucha aérea), + mask-vs-mask (máscara contra máscara) matches; premier promotions CMLL (founded 1933) + AAA (founded 1992); part of Mexican cultural heritage.",
  longDescription:
    "Lucha Libre (Mexican professional wrestling; literally 'Free Wrestling') is a traditional Mexican variant of professional wrestling characterized by luchadores wearing colorful masks (máscaras), a high-flying acrobatic aerial style (lucha aérea) featuring dives + flips + moonsaults, and dramatic mask-vs-mask (máscara contra máscara) OR mask-vs-hair (máscara contra cabellera) apuestas matches where the loser must unmask or have their head shaved publicly. Founded 1933 by Salvador Lutteroth González who launched Empresa Mexicana de Lucha Libre (EMLL, later renamed CMLL — Consejo Mundial de Lucha Libre, still operating today as world's oldest continuous pro wrestling promotion). Rival premier promotion: AAA (Lucha Libre AAA Worldwide, founded 1992 by Antonio Peña after splitting from CMLL). Iconic luchadores: El Santo (silver mask; considered the greatest luchador all-time, 40+ movies, held mask until death 1984 — buried in it); Blue Demon; Mil Máscaras ('Man of 1000 Masks' — 3rd major legend); Rey Mysterio (crossover to WWE megastar); Konnan; Vampiro; La Parka (original); Psicosis; Sin Cara/Mistico; Andrade El Idolo; Bandido; Dragon Lee. Signature techniques: Frankensteiner (invented Mexico), 619 (Rey Mysterio), suicide dive, tope suicida. Champions crowned across weight classes (Mini, Junior Heavyweight, Middleweight, Light Heavyweight, Heavyweight). Legally regulated in Mexico as spectacle (not competitive sport). Major arenas: Arena México (CMLL, since 1946), Arena Coliseo, Arena Naucalpan. Tag-team traditions include Trios (3-man teams) unique to Lucha Libre.",
  category: "traditional-cultural-sports",
  subCategory: "Mexican professional wrestling (masked luchadores)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "MX",
  regionOfOrigin: "Mexico (CMLL founded 1933 by Salvador Lutteroth González)",
  estimatedOrigin: "Founded 1933 by Salvador Lutteroth; iconic mask tradition since 1930s; El Santo era 1940s-1980s",
  players: { min: 1, max: 6, note: "Singles matches, tag-team, Trios (3-man unique to Lucha Libre), 4-way, 6-way matches." },
  equipment: [{ name: "Máscara (colorful mask)", description: "Signature colorful mask — sacred to luchador identity; losing in mask-vs-mask match = unmasking humiliation." }, { name: "Colorful ring attire (mallas + capa)", description: "Colorful ring attire with capes + tights; unique to each luchador." }, { name: "Standard 20'x20' wrestling ring", description: "Standard pro wrestling ring." }],
  duration: { approximateMinutes: 15, structure: "Match: singles ~10-15 min; Trios matches ~15-25 min; major title matches 20-30+ min." },
  objective: "Pin opponent's shoulders for 3-count OR force submission OR win via count-out/DQ; premium apuestas match = force opponent to lose mask/hair.",
  matchStructure: "Best of 3 falls (rare — traditional); Singles, Tag-Team, Trios; Special: máscara contra máscara, máscara contra cabellera, torneo (tournament).",
  basicRules: [
    { title: "Best-of-3 falls (traditional)", body: "Traditional Lucha matches were best-of-3 falls; modern matches often single-fall to accommodate TV." },
    { title: "Máscara contra máscara / cabellera apuestas", body: "Special match where loser must reveal identity + lose mask (or shave head)." },
    { title: "Trios matches (3-man teams)", body: "Unique 3-on-3 tag matches; distinctive of Lucha Libre." },
    { title: "Aerial style (lucha aérea)", body: "High-flying acrobatic style with dives + flips distinct from American mat wrestling." },
    { title: "Weight classes strict", body: "Mini, Junior Heavyweight, Middleweight, Light Heavyweight, Heavyweight — enforced by CMLL." },
  ],
  scoring: { summary: "Match result determined by scripted booking (predetermined outcome per pro wrestling tradition).", winCondition: "Pinfall (3-count), submission, count-out, DQ, or apuestas victory." },
  positions: [{ name: "Técnico (face / hero luchador)", role: "Fan-favorite / good-guy luchador.", count: 1 }, { name: "Rudo (heel / villain luchador)", role: "Antagonist / bad-guy luchador.", count: 1 }, { name: "Trios team member", role: "Member of 3-man team.", count: 3 }],
  officiating: { officials: ["Referee (Árbitro)", "Chief Steward"], summary: "1 primary referee per match; occasional secondary; enforcer of pro-wrestling scripted rules." },
  governingBodies: [{ name: "CMLL (Consejo Mundial de Lucha Libre)", founded: 1933, headquarters: "Mexico City, Mexico" }, { name: "AAA (Lucha Libre AAA Worldwide)", founded: 1992, headquarters: "Mexico City, Mexico" }, { name: "Comisión de Box y Lucha Libre Ciudad de México (regulator)", founded: 1946, headquarters: "Mexico City" }],
  majorCompetitions: [{ name: "CMLL Aniversario Show", frequency: "annual (mid-September)", founded: 1934, region: "Arena México, Mexico City" }, { name: "AAA TripleMania", frequency: "annual (August)", founded: 1993, region: "Mexico (rotating)" }, { name: "AAA Rey de Reyes tournament", frequency: "annual", founded: 1997, region: "Mexico" }, { name: "CMLL Torneo Gran Prix", frequency: "annual", founded: 1994, region: "Arena México" }],
  countriesPlayed: ["MEX (traditional home)", "USA (large Mexican-American fanbase)", "JPN (NJPW / CMLL exchange programs)", "GBR (via WWE/AEW exposure)"],
  famousAthletes: ["El Santo (silver mask legend, 40+ movies, 1917-1984)", "Blue Demon", "Mil Máscaras ('Man of 1000 Masks')", "Rey Mysterio (crossover WWE)", "Konnan", "Vampiro", "La Parka (original)", "Psicosis", "Andrade El Idolo", "Bandido", "Dragon Lee", "Místico"],
  records: [
    { title: "CMLL oldest continuous pro wrestling promotion", holder: "CMLL", value: "Founded 1933; still operating today — oldest continuous pro wrestling promotion in the world (90+ years)", year: 2024 },
    { title: "El Santo buried in mask", holder: "El Santo (1917-1984)", value: "El Santo (Rodolfo Guzmán Huerta) never revealed face publicly; buried wearing silver mask 1984 — icon of Mexican cultural heritage", year: 1984 },
    { title: "Arena México since 1946", holder: "CMLL", value: "Arena México — 'Cathedral of Lucha Libre' — opened 1946; capacity 16,500", year: 1946 },
  ],
  variants: ["singles-lucha", "trios-lucha", "cage-jaula-de-los-muertos", "masks-vs-masks-apuestas", "hair-vs-hair-apuestas", "mini-estrellas"],
  relatedSports: ["american-professional-wrestling-wwe", "japanese-strong-style-njpw", "greco-roman-wrestling", "lucha-libre-underground"],
  skills: ["aerial stunts + dives", "mask-preserving character maintenance", "storytelling in-ring", "high-spot timing"],
  strategies: [
    { title: "Character preservation (protecting the mask)", body: "Preserving luchador character/mask is paramount to career longevity + cultural respect." },
    { title: "Tempo pacing", body: "Lucha style pacing alternates fast aerial spots with slower psychology work." },
  ],
  wikipediaTitle: "Lucha libre",
  sources: [{ label: "Wikipedia — Lucha libre", url: "https://en.wikipedia.org/wiki/Lucha_libre", publisher: "Wikipedia" }, { label: "CMLL official", url: "https://cmll.com", publisher: "Consejo Mundial de Lucha Libre" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default luchaLibreMexico;

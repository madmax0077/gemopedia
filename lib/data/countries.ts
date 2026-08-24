/**
 * Countries catalog (minimal, ISO 3166-1 alpha-2 keyed).
 *
 * We keep this deliberately small — only countries referenced by at least
 * one seed sport — because the "world map" isn't a v1 feature. When we
 * add the interactive vector map (v2), replace this file with the full
 * ISO list.
 *
 * The emoji flag is generated via the two Unicode regional-indicator
 * symbols corresponding to the country code (no image asset needed).
 */

export interface CountryDef {
  code: string;     // ISO 3166-1 alpha-2
  name: string;
  region: "Asia" | "Africa" | "Europe" | "North America" | "South America" | "Oceania" | "Middle East";
  flag: string;     // emoji flag
}

/** Generate the emoji flag for a two-letter country code. */
function flagOf(code: string): string {
  return code
    .toUpperCase()
    .split("")
    .map((c) => String.fromCodePoint(127397 + c.charCodeAt(0)))
    .join("");
}

const COUNTRY_LIST: Omit<CountryDef, "flag">[] = [
  { code: "IN", name: "India", region: "Asia" },
  { code: "PK", name: "Pakistan", region: "Asia" },
  { code: "BD", name: "Bangladesh", region: "Asia" },
  { code: "LK", name: "Sri Lanka", region: "Asia" },
  { code: "NP", name: "Nepal", region: "Asia" },
  { code: "JP", name: "Japan", region: "Asia" },
  { code: "KR", name: "South Korea", region: "Asia" },
  { code: "CN", name: "China", region: "Asia" },
  { code: "MN", name: "Mongolia", region: "Asia" },
  { code: "TH", name: "Thailand", region: "Asia" },
  { code: "MY", name: "Malaysia", region: "Asia" },
  { code: "ID", name: "Indonesia", region: "Asia" },
  { code: "PH", name: "Philippines", region: "Asia" },
  { code: "VN", name: "Vietnam", region: "Asia" },
  { code: "AF", name: "Afghanistan", region: "Asia" },
  { code: "MM", name: "Myanmar", region: "Asia" },
  { code: "KH", name: "Cambodia", region: "Asia" },
  { code: "UZ", name: "Uzbekistan", region: "Asia" },
  { code: "KG", name: "Kyrgyzstan", region: "Asia" },
  { code: "WS", name: "Samoa", region: "Oceania" },
  { code: "IR", name: "Iran", region: "Middle East" },
  { code: "IL", name: "Israel", region: "Middle East" },
  { code: "AE", name: "United Arab Emirates", region: "Middle East" },
  { code: "SA", name: "Saudi Arabia", region: "Middle East" },
  { code: "GB", name: "United Kingdom", region: "Europe" },
  { code: "IE", name: "Ireland", region: "Europe" },
  { code: "FR", name: "France", region: "Europe" },
  { code: "DE", name: "Germany", region: "Europe" },
  { code: "IT", name: "Italy", region: "Europe" },
  { code: "ES", name: "Spain", region: "Europe" },
  { code: "PT", name: "Portugal", region: "Europe" },
  { code: "NL", name: "Netherlands", region: "Europe" },
  { code: "BE", name: "Belgium", region: "Europe" },
  { code: "AT", name: "Austria", region: "Europe" },
  { code: "CH", name: "Switzerland", region: "Europe" },
  { code: "DK", name: "Denmark", region: "Europe" },
  { code: "SE", name: "Sweden", region: "Europe" },
  { code: "NO", name: "Norway", region: "Europe" },
  { code: "FI", name: "Finland", region: "Europe" },
  { code: "IS", name: "Iceland", region: "Europe" },
  { code: "PL", name: "Poland", region: "Europe" },
  { code: "CZ", name: "Czech Republic", region: "Europe" },
  { code: "HR", name: "Croatia", region: "Europe" },
  { code: "HU", name: "Hungary", region: "Europe" },
  { code: "RU", name: "Russia", region: "Europe" },
  { code: "GE", name: "Georgia", region: "Europe" },
  { code: "RO", name: "Romania", region: "Europe" },
  { code: "GR", name: "Greece", region: "Europe" },
  { code: "TR", name: "Türkiye", region: "Middle East" },
  { code: "US", name: "United States", region: "North America" },
  { code: "CA", name: "Canada", region: "North America" },
  { code: "MX", name: "Mexico", region: "North America" },
  { code: "CU", name: "Cuba", region: "North America" },
  { code: "JM", name: "Jamaica", region: "North America" },
  { code: "BR", name: "Brazil", region: "South America" },
  { code: "AR", name: "Argentina", region: "South America" },
  { code: "UY", name: "Uruguay", region: "South America" },
  { code: "CO", name: "Colombia", region: "South America" },
  { code: "AU", name: "Australia", region: "Oceania" },
  { code: "NZ", name: "New Zealand", region: "Oceania" },
  { code: "FJ", name: "Fiji", region: "Oceania" },
  { code: "ZA", name: "South Africa", region: "Africa" },
  { code: "KE", name: "Kenya", region: "Africa" },
  { code: "ET", name: "Ethiopia", region: "Africa" },
  { code: "EG", name: "Egypt", region: "Africa" },
  { code: "SN", name: "Senegal", region: "Africa" },
  { code: "MA", name: "Morocco", region: "Africa" },
  { code: "GH", name: "Ghana", region: "Africa" },
  { code: "NG", name: "Nigeria", region: "Africa" },
  { code: "TZ", name: "Tanzania", region: "Africa" },
  { code: "MG", name: "Madagascar", region: "Africa" },
  /* South America — added for Perudo, etc. */
  { code: "PE", name: "Peru", region: "South America" },
  /* Asia — added for card games and tile games */
  { code: "TW", name: "Taiwan", region: "Asia" },
  { code: "HK", name: "Hong Kong", region: "Asia" },
  { code: "SG", name: "Singapore", region: "Asia" },
  /* Extra countries needed for board/card/game additions */
  { code: "IQ", name: "Iraq", region: "Middle East" },
  { code: "MZ", name: "Mozambique", region: "Africa" },
  { code: "ZW", name: "Zimbabwe", region: "Africa" },
  { code: "BS", name: "Bahamas", region: "North America" },
  { code: "PR", name: "Puerto Rico", region: "North America" },
  { code: "PY", name: "Paraguay", region: "South America" },
  { code: "VE", name: "Venezuela", region: "South America" },
  { code: "CL", name: "Chile", region: "South America" },
  { code: "SK", name: "Slovakia", region: "Europe" },
  { code: "BG", name: "Bulgaria", region: "Europe" },
  { code: "UA", name: "Ukraine", region: "Europe" },
  { code: "EE", name: "Estonia", region: "Europe" },
  { code: "LV", name: "Latvia", region: "Europe" },
  { code: "LT", name: "Lithuania", region: "Europe" },
  { code: "RS", name: "Serbia", region: "Europe" },
  { code: "LB", name: "Lebanon", region: "Middle East" },
  { code: "JO", name: "Jordan", region: "Middle East" },
  { code: "KW", name: "Kuwait", region: "Middle East" },
];

export const COUNTRIES: CountryDef[] = COUNTRY_LIST.map((c) => ({
  ...c,
  flag: flagOf(c.code),
}));

export const COUNTRY_BY_CODE: Record<string, CountryDef> = Object.fromEntries(
  COUNTRIES.map((c) => [c.code, c]),
);

export function countryName(code: string | undefined): string {
  if (!code) return "";
  return COUNTRY_BY_CODE[code]?.name ?? code;
}

export function countryFlag(code: string | undefined): string {
  if (!code) return "";
  return COUNTRY_BY_CODE[code]?.flag ?? flagOf(code);
}

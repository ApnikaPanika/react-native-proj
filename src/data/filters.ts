export const Climates = [
  "tropical",
  "temperate",
  "arctic",
  "arid",
  "mediterranean",
] as const;

export const Seasons = ["spring", "summer", "autumn", "winter"] as const;

export const Continents = [
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "South America",
] as const;

export type Climate = (typeof Climates)[number];
export type Season = (typeof Seasons)[number];
export type Continent = (typeof Continents)[number];

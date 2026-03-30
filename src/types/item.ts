export type Climate =
  | "tropical"
  | "temperate"
  | "arctic"
  | "arid"
  | "mediterranean";

export type Season = "spring" | "summer" | "autumn" | "winter";

export type TravelItem = {
  id: number;
  destination: string;
  country: string;
  continent: string;
  category: "beach" | "mountain" | "city" | "desert" | "forest" | "island";
  climate: Climate;
  duration: number; // days
  price: number; // USD per person
  rating: number; // 1-5
  difficulty: "easy" | "moderate" | "challenging";
  bestSeason: Season[];
  activities: string[];
  description: string;
};

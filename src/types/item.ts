export type TravelItem = {
  id: number;
  destination: string;
  country: string;
  continent: string;
  category: "beach" | "mountain" | "city" | "desert" | "forest" | "island";
  climate: "tropical" | "temperate" | "arctic" | "arid" | "mediterranean";
  duration: number; // days
  price: number; // USD per person
  rating: number; // 1-5
  difficulty: "easy" | "moderate" | "challenging";
  bestSeason: ("spring" | "summer" | "autumn" | "winter")[];
  activities: string[];
  description: string;
};

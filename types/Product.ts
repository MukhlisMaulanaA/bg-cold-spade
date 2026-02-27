export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  ageGroup: "toddlers" | "juniors" | "preteens";
  style: "classic" | "retro" | "urban";
  badge?: "Bestseller" | "New" | "Limited Edition" | "New Arrival";
}
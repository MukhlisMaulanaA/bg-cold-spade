export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  ageGroup: "toddlers" | "juniors" | "preteens";
  style: "classic" | "retro" | "urban";
  badge?: "Bestseller" | "New" | "Limited Edition" | "New Arrival";
  // Optional detail fields to support the product detail page
  slug?: string;
  tagline?: string;
  images?: string[];
  rating?: number;
  reviewCount?: number;
  originalPrice?: number;
  stock?: string;
  specs?: {
    ageRange?: string;
    weight?: string;
    materials?: string;
    warranty?: string;
  };
}
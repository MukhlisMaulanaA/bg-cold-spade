export interface ProductDetail {
  id: string;
  name: string;
  tagline: string;
  description: string[];
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  stock: string;
  badge?: "Bestseller" | "New";
  images: string[];
  specs: {
    ageRange: string;
    weight: string;
    materials: string;
    warranty: string;
  };
}
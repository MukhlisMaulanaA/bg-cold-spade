export interface Scooter {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  rating: number; // 0 - 5 (supports halves)
  badge?: string;
  grayscale?: boolean;
}
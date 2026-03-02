import { ProductDetail } from "@/types/ProductDetail";

export const productDetails: ProductDetail[] = [
  {
    id: "zephyr-glider",
    name: "The Zephyr Glider",
    tagline: "Where form meets childhood wonder.",
    rating: 5,
    reviewCount: 128,
    price: 89,
    originalPrice: 120,
    stock: "In Stock & Ready to Ship",
    badge: "Bestseller",
    images: [
      "https://images.unsplash.com/photo-1558980664-10e7170fa0d1",
      "https://images.unsplash.com/photo-1617654112368-307921291f42",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
    ],
    description: [
      "Forget the utilitarian plastics of the modern age. The Zephyr Glider is crafted to ignite the imagination.",
      "Designed meticulously for form, the Zephyr encourages poise and balance."
    ],
    specs: {
      ageRange: "3 - 7 Years",
      weight: "5.5 lbs (Lightweight)",
      materials: "Alloy & Treated Wood",
      warranty: "2-Year Wonder Guarantee",
    },
  },

  {
    id: "crimson-arrow",
    name: "The Crimson Arrow",
    tagline: "Speed wrapped in timeless elegance.",
    rating: 4,
    reviewCount: 84,
    price: 79,
    stock: "In Stock",
    images: [
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1"
    ],
    description: [
      "A bold statement piece for adventurous young riders."
    ],
    specs: {
      ageRange: "5 - 10 Years",
      weight: "6.2 lbs",
      materials: "Steel Frame",
      warranty: "1-Year Warranty",
    },
  }
];
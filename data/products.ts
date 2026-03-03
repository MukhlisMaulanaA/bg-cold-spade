import { Product } from "@/types/Product";

export const products: Product[] = [
  {
    id: "1",
    name: "The Bumblebee Flyer",
    description:
      "A striking yellow chassis with curved handlebars that evoke the golden age of flight.",
    price: 45,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUnQt77XGCotT8vW_2eF9i9XSXLW0vdDo_2dM-OjwnNZeXpXX7fP3SqBwNVdJlNDx53S0RvmaSvmGcHpsnupXp74DV3AiR91xZe5rPWyk_jyJqpwGtonpeNl9is23MgY8ECrJItwA-ssazFe5TMcqHi0OmYVO0Ti4PCN-lnxsLkPsQwG6qpOeCzt-s8Fc8nBO0R2w1-L8kk34bXylJzHFq1IbABHs5FkEUSlh9J30JOJGwC20SzwSF4s0hX-pMsi1KvM-RAbvPDx4",
    slug: "the-bumblebee-flyer",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUnQt77XGCotT8vW_2eF9i9XSXLW0vdDo_2dM-OjwnNZeXpXX7fP3SqBwNVdJlNDx53S0RvmaSvmGcHpsnupXp74DV3AiR91xZe5rPWyk_jyJqpwGtonpeNl9is23MgY8ECrJItwA-ssazFe5TMcqHi0OmYVO0Ti4PCN-lnxsLkPsQwG6qpOeCzt-s8Fc8nBO0R2w1-L8kk34bXylJzHFq1IbABHs5FkEUSlh9J30JOJGwC20SzwSF4s0hX-pMsi1KvM-RAbvPDx4"
    ],
    tagline: "Bright, balanced, and built for tiny pilots.",
    rating: 5,
    reviewCount: 142,
    originalPrice: 55,
    stock: "In Stock & Ready to Ship",
    specs: {
      ageRange: "2 - 5 Years",
      weight: "4.8 lbs",
      materials: "Polymer & Alloy",
      warranty: "1-Year Manufacturer Warranty",
    },
    ageGroup: "toddlers",
    style: "classic",
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "The Crimson Arrow",
    description:
      "Streamlined for the little speedster, featuring art-deco inspired fenders.",
    price: 52,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQisBZ04iX74tJCnzdPC7DZHJnZBLaGqWYfnJDYl2m2fde0PcTmDAzwe98yqS3ot6wDn0bKLoZnaIvWMZLmhn-JI-Ee09ZSXVu541tmWIMDe1vYT2ZZa-gxuGNMKMJEV_8csjxOmUqHbQUqP1T2jr09KMNEHpN4NiK2UZNT0Duy6hjbRJyLdp5lj3EualcliAB1qIW_MEBzfi5PsuuBDKDCDIqt-Wmta-xOC7TY46pIt40cbCioA0mNDFbzslYSO4yveAzNj_L31k",
    slug: "the-crimson-arrow",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQisBZ04iX74tJCnzdPC7DZHJnZBLaGqWYfnJDYl2m2fde0PcTmDAzwe98yqS3ot6wDn0bKLoZnaIvWMZLmhn-JI-Ee09ZSXVu541tmWIMDe1vYT2ZZa-gxuGNMKMJEV_8csjxOmUqHbQUqP1T2jr09KMNEHpN4NiK2UZNT0Duy6hjbRJyLdp5lj3EualcliAB1qIW_MEBzfi5PsuuBDKDCDIqt-Wmta-xOC7TY46pIt40cbCioA0mNDFbzslYSO4yveAzNj_L31k"
    ],
    tagline: "Speed wrapped in timeless elegance.",
    rating: 4,
    reviewCount: 84,
    originalPrice: 62,
    stock: "In Stock",
    specs: {
      ageRange: "5 - 10 Years",
      weight: "6.2 lbs",
      materials: "Steel Frame",
      warranty: "1-Year Warranty",
    },
    ageGroup: "juniors",
    style: "retro",
  },
  {
    id: "3",
    name: "The Silver Comet",
    description:
      "A polished chrome frame that gleams under the sun, built for those who love high-velocity style.",
    price: 65,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqcDGeu6A_R_kSnc4fTaUqbJSnCZxLbCXL1My_CPon5gb-BfNg0LTmzAUQ79ZnOXHjA_DTQCq5Yngs1yQHQ0CbgU6ck1wh-vPV0TeQWhfc9deq_O7-DslQW35THXdMuWefdzp1eNt2f64eG4opLEx94_Fp7ts9SGwMIBHFxkpMqRzrr--El9HPC_eUsUX3qMFSJ6U62CxwKIpXJEvaiir7oLEfJquXihCjPml-AWPJyQiAMozlu5z8xZ8blnP35v21iEgu_N5hFv4",
    slug: "the-silver-comet",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqcDGeu6A_R_kSnc4fTaUqbJSnCZxLbCXL1My_CPon5gb-BfNg0LTmzAUQ79ZnOXHjA_DTQCq5Yngs1yQHQ0CbgU6ck1wh-vPV0TeQWhfc9deq_O7-DslQW35THXdMuWefdzp1eNt2f64eG4opLEx94_Fp7ts9SGwMIBHFxkpMqRzrr--El9HPC_eUsUX3qMFSJ6U62CxwKIpXJEvaiir7oLEfJquXihCjPml-AWPJyQiAMozlu5z8xZ8blnP35v21iEgu_N5hFv4"
    ],
    tagline: "Polished for performance and presence.",
    rating: 4.5,
    reviewCount: 99,
    originalPrice: 75,
    stock: "In Stock",
    specs: {
      ageRange: "6 - 12 Years",
      weight: "7.1 lbs",
      materials: "Chrome-Plated Alloy",
      warranty: "2-Year Warranty",
    },
    ageGroup: "juniors",
    style: "retro",
    badge: "New Arrival",
  },
  {
    id: "4",
    name: "Midnight Shadow",
    description:
      "A sleek, matte black finish with tan leather grips for a sophisticated, understated look.",
    price: 58,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwFdq-tPm2biuCsScQ3CWZL5G1KopOmr13i-DSaq_cbw8Rp6J7bcwQWBdb8SyGc9BXXky6vQSvMPLCyL1CS8ILR5IiFr2_Wp7lRfL4-PPXr5chnJ5Oj8FuRWd6yuabTnCB6pBzh4syJyy9hQ3YP3cTxMkOxcTD4cNX9f2pU7evhmncrpm5oO9q4ps5aon2N33rHOFX_n8C3jTk2N2XArwIiL0aO7gRZDgnHXm_a91Ycf3bakOtGoEqkStjQWzQKLn4ppQ_0tAYUq4",
    slug: "midnight-shadow",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwFdq-tPm2biuCsScQ3CWZL5G1KopOmr13i-DSaq_cbw8Rp6J7bcwQWBdb8SyGc9BXXky6vQSvMPLCyL1CS8ILR5IiFr2_Wp7lRfL4-PPXr5chnJ5Oj8FuRWd6yuabTnCB6pBzh4syJyy9hQ3YP3cTxMkOxcTD4cNX9f2pU7evhmncrpm5oO9q4ps5aon2N33rHOFX_n8C3jTk2N2XArwIiL0aO7gRZDgnHXm_a91Ycf3bakOtGoEqkStjQWzQKLn4ppQ_0tAYUq4"
    ],
    tagline: "Sophistication in matte black.",
    rating: 4,
    reviewCount: 47,
    originalPrice: 68,
    stock: "In Stock",
    specs: {
      ageRange: "5 - 11 Years",
      weight: "6.0 lbs",
      materials: "Aluminum & Leather",
      warranty: "1-Year Limited",
    },
    ageGroup: "juniors",
    style: "classic",
  },
  {
    id: "5",
    name: "The Rose Petal",
    description:
      "Soft pastel pink with a charming front-mounted wicker basket for carrying secret treasures.",
    price: 48,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXGyExI-UE0UvVWN7h9m23Zfs_bGN7Mf0UpD33rd-Tj3PHoaSGWD_W-btlFmnk4JUoet3jLM0nXQIJk990uu3c06CABuZ2MoeoCDSJKRh-Gj4wiDHPysow82Bjv0WA3EUM6myIPbXOBfasM6VW_q7CU2TzvdiH_4h-BrCNaRPrpZbaxfX8WkwdRSuxN7EWlySWt1uk0LIBB-2U3l_VAsZSLaOkuhUt0VDzjvIvPwA6p_kAZNjjtmfg_DGlNt3fMqRaiS8qECaHUPk",
    slug: "the-rose-petal",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXGyExI-UE0UvVWN7h9m23Zfs_bGN7Mf0UpD33rd-Tj3PHoaSGWD_W-btlFmnk4JUoet3jLM0nXQIJk990uu3c06CABuZ2MoeoCDSJKRh-Gj4wiDHPysow82Bjv0WA3EUM6myIPbXOBfasM6VW_q7CU2TzvdiH_4h-BrCNaRPrpZbaxfX8WkwdRSuxN7EWlySWt1uk0LIBB-2U3l_VAsZSLaOkuhUt0VDzjvIvPwA6p_kAZNjjtmfg_DGlNt3fMqRaiS8qECaHUPk"
    ],
    tagline: "Pastel charm and basket-ready fun.",
    rating: 4,
    reviewCount: 61,
    originalPrice: 58,
    stock: "In Stock",
    specs: {
      ageRange: "2 - 5 Years",
      weight: "5.0 lbs",
      materials: "Polymer & Wicker",
      warranty: "6-Month Parts",
    },
    ageGroup: "toddlers",
    style: "retro",
  },
  {
    id: "6",
    name: "Azure Breeze",
    description:
      "A light blue frame paired with white-walled tires that capture the essence of a seaside summer.",
    price: 42,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVnCtpF-e-yC6YDDpNsv1roEIDoX2wtgQzlBW22n46LXisz9cXBmcrlYEaVYJ-dUeypr-YQJWofTBByPu2Oi36Z7EU55FKoU4KyBMbchf86L0V2ULQmmZHHLnpwjxmFaXLuHn8lJdwTdSw0Y8EWWMKBEu_bvH96-ZmH5b7DtD6pBHwfQfTktibuyAMYJK8wLV1Vl1kFqZLb0BH-_yOWni1Aj8elLjYs7MHRC0LIvdmX4oAtL_3BUWLneRmHVm-V4IrbCqm1o7YmZU",
    slug: "azure-breeze",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVnCtpF-e-yC6YDDpNsv1roEIDoX2wtgQzlBW22n46LXisz9cXBmcrlYEaVYJ-dUeypr-YQJWofTBByPu2Oi36Z7EU55FKoU4KyBMbchf86L0V2ULQmmZHHLnpwjxmFaXLuHn8lJdwTdSw0Y8EWWMKBEu_bvH96-ZmH5b7DtD6pBHwfQfTktibuyAMYJK8wLV1Vl1kFqZLb0BH-_yOWni1Aj8elLjYs7MHRC0LIvdmX4oAtL_3BUWLneRmHVm-V4IrbCqm1o7YmZU"
    ],
    tagline: "Seaside hues for sunny rides.",
    rating: 4,
    reviewCount: 36,
    originalPrice: 50,
    stock: "In Stock",
    specs: {
      ageRange: "2 - 5 Years",
      weight: "4.6 lbs",
      materials: "Alloy & Rubber",
      warranty: "1-Year Warranty",
    },
    ageGroup: "toddlers",
    style: "classic",
  },
  {
    id: "7",
    name: "The Emerald Explorer",
    description:
      "Deep forest green with rich wooden accents on the frame, perfect for backyard adventures.",
    price: 55,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwFdq-tPm2biuCsScQ3CWZL5G1KopOmr13i-DSaq_cbw8Rp6J7bcwQWBdb8SyGc9BXXky6vQSvMPLCyL1CS8ILR5IiFr2_Wp7lRfL4-PPXr5chnJ5Oj8FuRWd6yuabTnCB6pBzh4syJyy9hQ3YP3cTxMkOxcTD4cNX9f2pU7evhmncrpm5oO9q4ps5aon2N33rHOFX_n8C3jTk2N2XArwIiL0aO7gRZDgnHXm_a91Ycf3bakOtGoEqkStjQWzQKLn4ppQ_0tAYUq4",
    slug: "the-emerald-explorer",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwFdq-tPm2biuCsScQ3CWZL5G1KopOmr13i-DSaq_cbw8Rp6J7bcwQWBdb8SyGc9BXXky6vQSvMPLCyL1CS8ILR5IiFr2_Wp7lRfL4-PPXr5chnJ5Oj8FuRWd6yuabTnCB6pBzh4syJyy9hQ3YP3cTxMkOxcTD4cNX9f2pU7evhmncrpm5oO9q4ps5aon2N33rHOFX_n8C3jTk2N2XArwIiL0aO7gRZDgnHXm_a91Ycf3bakOtGoEqkStjQWzQKLn4ppQ_0tAYUq4"
    ],
    tagline: "Rugged style for backyard expeditions.",
    rating: 4.5,
    reviewCount: 28,
    originalPrice: 65,
    stock: "Limited Edition",
    specs: {
      ageRange: "6 - 12 Years",
      weight: "7.4 lbs",
      materials: "Wood Accents & Alloy",
      warranty: "1-Year Warranty",
    },
    ageGroup: "juniors",
    style: "retro",
    badge: "Limited Edition",
  },
  {
    id: "8",
    name: "Golden Sunbeam",
    description:
      "A bright mustard yellow finish with a vintage brass bell that rings with nostalgia.",
    price: 47,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXGyExI-UE0UvVWN7h9m23Zfs_bGN7Mf0UpD33rd-Tj3PHoaSGWD_W-btlFmnk4JUoet3jLM0nXQIJk990uu3c06CABuZ2MoeoCDSJKRh-Gj4wiDHPysow82Bjv0WA3EUM6myIPbXOBfasM6VW_q7CU2TzvdiH_4h-BrCNaRPrpZbaxfX8WkwdRSuxN7EWlySWt1uk0LIBB-2U3l_VAsZSLaOkuhUt0VDzjvIvPwA6p_kAZNjjtmfg_DGlNt3fMqRaiS8qECaHUPk",
    slug: "golden-sunbeam",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXGyExI-UE0UvVWN7h9m23Zfs_bGN7Mf0UpD33rd-Tj3PHoaSGWD_W-btlFmnk4JUoet3jLM0nXQIJk990uu3c06CABuZ2MoeoCDSJKRh-Gj4wiDHPysow82Bjv0WA3EUM6myIPbXOBfasM6VW_q7CU2TzvdiH_4h-BrCNaRPrpZbaxfX8WkwdRSuxN7EWlySWt1uk0LIBB-2U3l_VAsZSLaOkuhUt0VDzjvIvPwA6p_kAZNjjtmfg_DGlNt3fMqRaiS8qECaHUPk"
    ],
    tagline: "Vintage charm with a sunny heart.",
    rating: 4,
    reviewCount: 19,
    originalPrice: 54,
    stock: "In Stock",
    specs: {
      ageRange: "3 - 7 Years",
      weight: "5.2 lbs",
      materials: "Alloy & Brass",
      warranty: "1-Year Warranty",
    },
    ageGroup: "toddlers",
    style: "classic",
  },
  {
    id: "9",
    name: "The Iron Horse",
    description:
      "Inspired by industrial design, featuring an unpainted steel look and heavy-duty rubber tires.",
    price: 70,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUnQt77XGCotT8vW_2eF9i9XSXLW0vdDo_2dM-OjwnNZeXpXX7fP3SqBwNVdJlNDx53S0RvmaSvmGcHpsnupXp74DV3AiR91xZe5rPWyk_jyJqpwGtonpeNl9is23MgY8ECrJItwA-ssazFe5TMcqHi0OmYVO0Ti4PCN-lnxsLkPsQwG6qpOeCzt-s8Fc8nBO0R2w1-L8kk34bXylJzHFq1IbABHs5FkEUSlh9J30JOJGwC20SzwSF4s0hX-pMsi1KvM-RAbvPDx4",
    slug: "the-iron-horse",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUnQt77XGCotT8vW_2eF9i9XSXLW0vdDo_2dM-OjwnNZeXpXX7fP3SqBwNVdJlNDx53S0RvmaSvmGcHpsnupXp74DV3AiR91xZe5rPWyk_jyJqpwGtonpeNl9is23MgY8ECrJItwA-ssazFe5TMcqHi0OmYVO0Ti4PCN-lnxsLkPsQwG6qpOeCzt-s8Fc8nBO0R2w1-L8kk34bXylJzHFq1IbABHs5FkEUSlh9J30JOJGwC20SzwSF4s0hX-pMsi1KvM-RAbvPDx4"
    ],
    tagline: "Industrial strength, childhood sized.",
    rating: 4.5,
    reviewCount: 12,
    originalPrice: 85,
    stock: "In Stock",
    specs: {
      ageRange: "7 - 12 Years",
      weight: "8.0 lbs",
      materials: "Unpainted Steel",
      warranty: "2-Year Warranty",
    },
    ageGroup: "juniors",
    style: "retro",
  },
  {
    id: "10",
    name: "Cotton Candy Cruiser",
    description:
      "Swirls of soft lavender and mint green make this the dreamiest ride on the sidewalk.",
    price: 44,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUnQt77XGCotT8vW_2eF9i9XSXLW0vdDo_2dM-OjwnNZeXpXX7fP3SqBwNVdJlNDx53S0RvmaSvmGcHpsnupXp74DV3AiR91xZe5rPWyk_jyJqpwGtonpeNl9is23MgY8ECrJItwA-ssazFe5TMcqHi0OmYVO0Ti4PCN-lnxsLkPsQwG6qpOeCzt-s8Fc8nBO0R2w1-L8kk34bXylJzHFq1IbABHs5FkEUSlh9J30JOJGwC20SzwSF4s0hX-pMsi1KvM-RAbvPDx4",
    slug: "cotton-candy-cruiser",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUnQt77XGCotT8vW_2eF9i9XSXLW0vdDo_2dM-OjwnNZeXpXX7fP3SqBwNVdJlNDx53S0RvmaSvmGcHpsnupXp74DV3AiR91xZe5rPWyk_jyJqpwGtonpeNl9is23MgY8ECrJItwA-ssazFe5TMcqHi0OmYVO0Ti4PCN-lnxsLkPsQwG6qpOeCzt-s8Fc8nBO0R2w1-L8kk34bXylJzHFq1IbABHs5FkEUSlh9J30JOJGwC20SzwSF4s0hX-pMsi1KvM-RAbvPDx4"
    ],
    tagline: "Dreamy swirls for gentle cruising.",
    rating: 4,
    reviewCount: 73,
    originalPrice: 52,
    stock: "In Stock",
    specs: {
      ageRange: "2 - 5 Years",
      weight: "5.1 lbs",
      materials: "Polymer & Alloy",
      warranty: "6-Month Warranty",
    },
    ageGroup: "toddlers",
    style: "classic",
  },
  {
    id: "11",
    name: "The Ruby Racer",
    description:
      "Classic candy-apple red with racing stripes and a low-slung seat for maximum stability.",
    price: 49,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVnCtpF-e-yC6YDDpNsv1roEIDoX2wtgQzlBW22n46LXisz9cXBmcrlYEaVYJ-dUeypr-YQJWofTBByPu2Oi36Z7EU55FKoU4KyBMbchf86L0V2ULQmmZHHLnpwjxmFaXLuHn8lJdwTdSw0Y8EWWMKBEu_bvH96-ZmH5b7DtD6pBHwfQfTktibuyAMYJK8wLV1Vl1kFqZLb0BH-_yOWni1Aj8elLjYs7MHRC0LIvdmX4oAtL_3BUWLneRmHVm-V4IrbCqm1o7YmZU",
    slug: "the-ruby-racer",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVnCtpF-e-yC6YDDpNsv1roEIDoX2wtgQzlBW22n46LXisz9cXBmcrlYEaVYJ-dUeypr-YQJWofTBByPu2Oi36Z7EU55FKoU4KyBMbchf86L0V2ULQmmZHHLnpwjxmFaXLuHn8lJdwTdSw0Y8EWWMKBEu_bvH96-ZmH5b7DtD6pBHwfQfTktibuyAMYJK8wLV1Vl1kFqZLb0BH-_yOWni1Aj8elLjYs7MHRC0LIvdmX4oAtL_3BUWLneRmHVm-V4IrbCqm1o7YmZU"
    ],
    tagline: "Racy stripes for stable smiles.",
    rating: 4,
    reviewCount: 54,
    originalPrice: 58,
    stock: "In Stock",
    specs: {
      ageRange: "3 - 6 Years",
      weight: "5.6 lbs",
      materials: "Alloy Frame",
      warranty: "1-Year Warranty",
    },
    ageGroup: "toddlers",
    style: "retro",
    badge: "Bestseller",
  },
  {
    id: "12",
    name: "Arctic Fox",
    description:
      "Clean, minimalist white frame with silver spokes, embodying a modern take on classic geometry.",
    price: 60,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUnQt77XGCotT8vW_2eF9i9XSXLW0vdDo_2dM-OjwnNZeXpXX7fP3SqBwNVdJlNDx53S0RvmaSvmGcHpsnupXp74DV3AiR91xZe5rPWyk_jyJqpwGtonpeNl9is23MgY8ECrJItwA-ssazFe5TMcqHi0OmYVO0Ti4PCN-lnxsLkPsQwG6qpOeCzt-s8Fc8nBO0R2w1-L8kk34bXylJzHFq1IbABHs5FkEUSlh9J30JOJGwC20SzwSF4s0hX-pMsi1KvM-RAbvPDx4",
    slug: "arctic-fox",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUnQt77XGCotT8vW_2eF9i9XSXLW0vdDo_2dM-OjwnNZeXpXX7fP3SqBwNVdJlNDx53S0RvmaSvmGcHpsnupXp74DV3AiR91xZe5rPWyk_jyJqpwGtonpeNl9is23MgY8ECrJItwA-ssazFe5TMcqHi0OmYVO0Ti4PCN-lnxsLkPsQwG6qpOeCzt-s8Fc8nBO0R2w1-L8kk34bXylJzHFq1IbABHs5FkEUSlh9J30JOJGwC20SzwSF4s0hX-pMsi1KvM-RAbvPDx4"
    ],
    tagline: "Minimal lines, maximum polish.",
    rating: 4.5,
    reviewCount: 33,
    originalPrice: 70,
    stock: "In Stock",
    specs: {
      ageRange: "6 - 12 Years",
      weight: "6.8 lbs",
      materials: "Aluminum & Steel",
      warranty: "2-Year Warranty",
    },
    ageGroup: "juniors",
    style: "classic",
  }
];
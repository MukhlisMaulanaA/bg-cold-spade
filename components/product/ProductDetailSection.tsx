"use client";

import { ProductDetail } from "@/types/ProductDetail";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { WhyChoose } from "./WhyChoose";
import { ProductReviews } from "./ProductReviews";

interface Props {
  product: ProductDetail;
}

export const ProductDetailSection = ({ product }: Props) => {
  return (
    <div className="bg-[#f4efe6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductGallery images={product.images} badge={product.badge} />
          <ProductInfo product={product} />
        </div>

        {/* Divider */}
        <div className="my-20 border-t border-gray-300 relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f4efe6] px-3 text-primary">
            ✦
          </span>
        </div>

        <WhyChoose />

        <div className="mt-20">
          <ProductReviews />
        </div>
      </div>
    </div>
  );
};
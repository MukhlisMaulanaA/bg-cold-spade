"use client";

import { CirclePlus } from 'lucide-react';


import { Product } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="group relative bg-paper rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 shadow-md">
      <div className="relative h-60 bg-gray-200 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500 sepia-[.3]"
        />
        {product.badge && (
          <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 uppercase rounded">
            {product.badge}
          </div>
        )}
      </div>

      <div className="p-6">
        {/** prefer explicit slug if present, otherwise compute kebab-case slug */}
        {(() => {
          const slugify = (name: string) =>
            name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");

          const slug = (product as any).slug ?? slugify(product.name);

          return (
            <Link
              href={`/products/${slug}`}
              className="text-xl font-display text-secondary mb-2 block"
            >
              {product.name}
            </Link>
          );
        })()}

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center border-t pt-4">
          <span className="text-2xl font-bold text-secondary">
            ${product.price.toFixed(2)}
          </span>
          <button className="text-secondary hover:text-primary transition cursor-pointer">
            <CirclePlus />
          </button>
        </div>
      </div>
    </div>
  );
};
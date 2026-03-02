"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  images: string[];
  badge?: string;
}

export const ProductGallery = ({ images, badge }: Props) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative rounded-xl overflow-hidden border-4 border-yellow-200">
        <Image
          src={images[active]}
          alt="Product"
          width={700}
          height={700}
          className="w-full h-auto object-cover"
        />
        {badge && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase rounded-full">
            {badge}
          </div>
        )}
      </div>

      <div className="flex gap-4 mt-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`border-2 rounded-lg overflow-hidden ${active === i ? "border-yellow-400" : "border-transparent"
              }`}
          >
            <Image
              src={img}
              alt="thumb"
              width={120}
              height={120}
              className="object-cover w-24 h-24"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
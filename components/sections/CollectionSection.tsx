"use client";

import React from "react";
import { scooters } from "../../data/scooters";
import { Scooter } from "../../types/Scooter";
import Image from "next/image";

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-${i}`} className="material-symbols-rounded">
        star
      </span>
    );
  }

  if (halfStar) {
    stars.push(
      <span key="half" className="material-symbols-rounded">
        star_half
      </span>
    );
  }

  return stars;
};

export const CollectionSection: React.FC = () => {
  return (
    <section className="py-20" id="collection">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display text-secondary mb-4">
            The Vintage Collection
          </h2>
          <p className="text-lg text-gray-600 italic">
            Choose the vessel for their next great expedition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {scooters.map((scooter: Scooter) => (
            <a
              href="#"
              key={scooter.id}
              className="group relative bg-white border-2 border-secondary vintage-shadow p-4 shadow-[6px_4px_0px_0px_rgba(0,_0,_0,_0.8)]"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={scooter.image}
                  alt={scooter.name}
                  width={500}
                  height={400}
                  className={`w-full h-64 object-cover object-center transition-opacity ${scooter.grayscale
                    ? "filter grayscale hover:grayscale-0 duration-500"
                    : "group-hover:opacity-90"
                    }`}
                />

                {scooter.badge && (
                  <div className="absolute top-2 right-2 bg-accent text-white text-xs font-bold px-2 py-1 uppercase">
                    {scooter.badge}
                  </div>
                )}
              </div>

              <div className="mt-4 flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-display text-secondary">
                    {scooter.name}
                  </h3>
                  <p className="text-sm text-gray-500 italic">
                    {scooter.tagline}
                  </p>
                </div>
                <p className="text-lg font-bold text-primary font-display">
                  ${scooter.price.toFixed(2)}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t flex justify-between items-center">
                <div className="flex text-primary text-sm">
                  {renderStars(scooter.rating)}
                </div>
                <span className="text-xs uppercase tracking-widest font-bold group-hover:text-accent-red transition-colors">
                  View Details
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
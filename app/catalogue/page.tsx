import React from "react";
import { CatalogSection } from "@/components/catalogue/CatalogSection";
import { CTASection } from "@/components/catalogue/CTASection";


export default function CataloguePage() {
  return (

    <main className="flex-grow">
      <header className="bg-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <svg className="h-full w-full opacity-10" fill="none" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="20" id="dot-pattern" patternUnits="userSpaceOnUse" width="20" x="0" y="0">
                <circle className="text-black dark:text-white" cx="2" cy="2" fill="currentColor" r="1"></circle>
              </pattern>
            </defs>
            <rect fill="url(#dot-pattern)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl font-display uppercase">
            Product Catalogue
          </h1>
          <p className="mt-4 text-xl text-beige max-w-3xl mx-auto font-serif italic">"Rekindling the magic of childhood movement. Where form meets fancy, and adventure awaits around every corner."</p>
        </div>
      </header>

      {/* Use the existing CollectionSection as a catalogue sketch */}
      <CatalogSection />
      <CTASection />
    </main>

  );
}

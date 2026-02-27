import React from "react";
import { CatalogSection } from "@/components/catalogue/CatalogSection";
import { CTASection } from "@/components/catalogue/CTASection";


export default function CataloguePage() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow">
        <header className="bg-primary text-center py-14 border-b-4 border-secondary">
          <h1 className="text-4xl font-display text-secondary tracking-widest">
            Product Catalogue
          </h1>
          <p className="text-gray-600 mt-3">"Rekindling the magic of childhood movement. Where form meets fancy, and adventure awaits around every corner."</p>
        </header>

        {/* Use the existing CollectionSection as a catalogue sketch */}
        <CatalogSection />
        <CTASection />
      </main>

    </div>
  );
}

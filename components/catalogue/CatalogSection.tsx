"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { Product } from "@/types/Product";
import { ProductCard } from "./ProductCard";

const ITEMS_PER_PAGE = 6;

export const CatalogSection = () => {
  const [selectedAge, setSelectedAge] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>("all");
  const [sort, setSort] = useState<string>("featured");
  const [page, setPage] = useState<number>(1);

  const filteredProducts = useMemo(() => {
    let filtered: Product[] = [...products];

    if (selectedAge.length) {
      filtered = filtered.filter((p) => selectedAge.includes(p.ageGroup));
    }

    if (selectedStyle.length) {
      filtered = filtered.filter((p) => selectedStyle.includes(p.style));
    }

    if (priceRange === "under50") filtered = filtered.filter((p) => p.price < 50);
    if (priceRange === "50to100") filtered = filtered.filter((p) => p.price >= 50 && p.price <= 100);
    if (priceRange === "100plus") filtered = filtered.filter((p) => p.price > 100);

    if (sort === "low") filtered.sort((a, b) => a.price - b.price);
    if (sort === "high") filtered.sort((a, b) => b.price - a.price);

    return filtered;
  }, [selectedAge, selectedStyle, priceRange, sort]);

  const styles = useMemo(() => Array.from(new Set(products.map((p) => p.style))).filter(Boolean), []);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const paginated = filteredProducts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8">

        {/* FILTER SIDEBAR */}
        <aside className="w-full md:w-64">
          <div className="bg-paper p-6 rounded-lg shadow-md sticky top-24">
            <h2 className="text-xl font-display mb-6 border-b pb-2">Filter By</h2>

            <div className="mb-6">
              <h3 className="font-bold mb-3">Age Group</h3>
              {["toddlers", "juniors", "preteens"].map((age) => {
                const checked = selectedAge.includes(age);
                return (
                  <label key={age} className="flex items-center mb-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={(e) =>
                        setSelectedAge((prev) => (e.target.checked ? [...prev, age] : prev.filter((a) => a !== age)))
                      }
                    />
                    <span className="material-symbols-rounded text-primary">{checked ? "check_box" : "check_box_outline_blank"}</span>
                    <span className="ml-2 capitalize">{age}</span>
                  </label>
                );
              })}
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-3">Style</h3>
              {styles.map((style) => {
                const checked = selectedStyle.includes(style);
                return (
                  <label key={style} className="flex items-center mb-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={(e) =>
                        setSelectedStyle((prev) => (e.target.checked ? [...prev, style] : prev.filter((s) => s !== style)))
                      }
                    />
                    <span className="material-symbols-rounded text-primary">{checked ? "check_box" : "check_box_outline_blank"}</span>
                    <span className="ml-2 capitalize">{style}</span>
                  </label>
                );
              })}
            </div>

            <div>
              <h3 className="font-bold mb-3">Price</h3>
              <select onChange={(e) => setPriceRange(e.target.value)} className="w-full border p-2">
                <option value="all">All</option>
                <option value="under50">Under $50</option>
                <option value="50to100">$50 - $100</option>
                <option value="100plus">$100+</option>
              </select>
            </div>
          </div>
        </aside>

        {/* PRODUCT GRID */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="italic text-gray-600">Showing {filteredProducts.length} products</p>

            <select onChange={(e) => setSort(e.target.value)} className="border p-2">
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginated.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="mt-12 flex justify-center gap-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 border ${page === i + 1 ? "bg-primary text-white" : "bg-paper"}`}>
                {i + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
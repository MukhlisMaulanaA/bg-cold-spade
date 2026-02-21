"use client";

import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary border-b-4 border-secondary">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-secondary text-xl">🛵</span>
          <span className="font-display text-xl tracking-widest text-secondary">
            COLD SPADE
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="#collection" className="text-secondary uppercase text-sm tracking-widest">
            Our Scooters
          </Link>
          <Link href="#" className="text-secondary uppercase text-sm tracking-widest">
            Our Story
          </Link>
          <Link href="#contact" className="text-secondary uppercase text-sm tracking-widest">
            Contact
          </Link>

          <button className="bg-secondary text-primary px-4 py-2 text-xs uppercase tracking-widest">
            Buy Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-secondary"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary px-6 pb-4 space-y-4">
          <Link href="#collection" className="block uppercase text-secondary">
            Our Scooters
          </Link>
          <Link href="#contact" className="block uppercase text-secondary">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};
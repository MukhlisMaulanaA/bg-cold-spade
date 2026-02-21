"use client";
import { Scooter } from 'lucide-react';

import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary border-b-4 border-secondary">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-secondary text-xl"><Scooter size={52}/></span>
          <span className="font-display text-xl tracking-widest font-black text-secondary">
            COLD SPADE
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="#collection" className="font-display text-md font-bold text-secondary hover:text-white transition uppercase tracking-widest border-b-2 border-transparent hover:border-secondary">
            Our Scooters
          </Link>
          <Link href="#" className="font-display text-md font-bold text-secondary hover:text-white transition uppercase tracking-widest border-b-2 border-transparent hover:border-secondary">
            Our Story
          </Link>
          <Link href="#contact" className="font-display text-md font-bold text-secondary hover:text-white transition uppercase tracking-widest border-b-2 border-transparent hover:border-secondary">
            Contact
          </Link>
          
          <a href='#' className="bg-secondary text-primary px-6 py-2 border-2 font-bold border-secondary font-display uppercase tracking-widest hover:bg-white hover:text-secondary transition shadow-lg">
            Get It Now!
          </a>
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
"use client";

import { Scooter } from 'lucide-react';

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

interface NewsletterForm {
  email: string;
}

export const Footer = () => {
  const [form, setForm] = useState<NewsletterForm>({ email: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ email: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Newsletter signup:", form.email);
    setForm({ email: "" });
  };

  return (
    <footer className="bg-secondary border-t-8 border-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* BRAND COLUMN */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-3xl text-primary"><Scooter size={52}/></span>
              <span className="text-2xl font-display tracking-wide text-primary uppercase">
                Cold Spade
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting high-quality, inexpensive scooters that emphasize form,
              beauty, and the pure wonder of childhood.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="font-display text-primary uppercase tracking-widest mb-6">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Scooters</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Accessories</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Our Story</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-display text-primary uppercase tracking-widest mb-6">
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-primary transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Care Instructions</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="font-display text-primary uppercase tracking-widest mb-6">
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Join our club for stories and updates.
            </p>

            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-gray-800 text-white px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-secondary px-4 py-2 font-bold uppercase text-xs hover:bg-white transition"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
          <p>© 2024 Cold Spade. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
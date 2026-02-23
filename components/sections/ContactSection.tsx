"use client";

import { MapPin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { useState, ChangeEvent, FormEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-beige py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* OUTER BORDER WRAPPER */}
        <div className="border-4 border-primary shadow-[8px_8px_0px_#2C3E50] bg-paper">

          <div className="grid md:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="p-10 border-r border-primary/30">
              <h2 className="text-3xl font-display text-secondary mb-6">
                Write to Us
              </h2>

              <p className="italic text-gray-600 leading-relaxed mb-10">
                Whether you have a question about sizing, materials, or just
                want to share a story of your child's adventure, we are here
                to listen.
              </p>

              <div className="space-y-6 text-secondary">
                <div className="flex items-start gap-3">
                  <span className="text-accent text-xl"><MapPin /></span>
                  <div>
                    <p className="uppercase text-sm font-semibold tracking-widest">
                      Workshop
                    </p>
                    <p className="text-gray-600">
                      123 Cobblestone Lane,
                      <br />
                      Craftsman District, NY 10012
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-accent text-xl"><Mail /></span>
                  <div>
                    <p className="uppercase text-sm font-semibold tracking-widest">
                      Electronic Mail
                    </p>
                    <p className="text-gray-600">
                      hello@coldspade.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="p-10 bg-[#F3EEDC]">
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-md font-semibold uppercase tracking-widest text-secondary mb-2">
                    Parent's Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-400 bg-[#E8DFC9] px-4 py-3 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-md font-semibold uppercase tracking-widest text-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-400 bg-[#E8DFC9] px-4 py-3 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-md font-semibold uppercase tracking-widest text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-400 bg-[#E8DFC9] px-4 py-3 focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-4 uppercase tracking-widest font-semibold hover:bg-[#1f2f3a] transition"
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
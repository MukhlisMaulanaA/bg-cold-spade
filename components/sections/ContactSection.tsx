"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const ContactSection: React.FC = () => {
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

    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-paper-light" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-display mb-6">Write to Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Parent's Name"
            className="w-full border-2 p-3"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border-2 p-3"
            required
          />
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full border-2 p-3"
            required
          />
          <button
            type="submit"
            className="w-full bg-secondary text-white py-3 font-display uppercase"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
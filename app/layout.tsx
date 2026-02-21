import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Abril_Fatface, Lora} from 'next/font/google';


export const metadata: Metadata = {
  title: "Cold Spade | Scooters of Wonder",
  description:
    "High-quality vintage scooters crafted with timeless design and childhood wonder in mind.",
};

const displayFont = Abril_Fatface({
  subsets: ['latin'],
  weight: '400', // Abril Fatface only has one weight
  variable: '--font-display', // Optional: for CSS variable usage
});

const bodyFont = Lora({
  subsets: ["latin"],
  variable: "--font-body",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} bg-cream text-secondary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
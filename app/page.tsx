import { HeroSection } from "@/components/sections/HeroSection";
import { PromiseSection } from "@/components/sections/PromiseSection";
import { CollectionSection } from "@/components/sections/CollectionSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection/>
        <PromiseSection/>
        <CollectionSection />
        <QuoteSection />
        <ContactSection />
      </main>
    </>
  );
}
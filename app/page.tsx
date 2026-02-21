import { HeroSection } from "@/components/sections/HeroSection";
import { PromiseSection } from "@/components/sections/PromiseSection";
import { CollectionSection } from "@/components/sections/CollectionSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection/>
        <PromiseSection/>
        <CollectionSection />
        <ContactSection />
      </main>
    </>
  );
}
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WeSayYesBand } from "@/components/sections/WeSayYesBand";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { BeforeAfterShowcase } from "@/components/sections/BeforeAfterShowcase";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ServiceAreaSnippet } from "@/components/sections/ServiceAreaSnippet";
import { FinalCTABand } from "@/components/sections/FinalCTABand";

export const metadata: Metadata = {
  title: "Thiel Masonry Restoration | Central Minnesota Masonry Repair",
  description:
    "Expert masonry restoration in Central Minnesota — foundation repair, chimney repair, tuck pointing, and more. 5.0★ Google rating. Call Dustin at (763) 688-1248.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WeSayYesBand />
      <ServicesGrid />
      <BeforeAfterShowcase />
      <ProcessSection />
      <TestimonialsSection />
      <ServiceAreaSnippet />
      <FinalCTABand />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import CompanyIntro from "@/components/CompanyIntro";
import WhyChooseUs from "@/components/WhyChooseUs";
import PropertyCTA from "@/components/PropertyCTA";
import Footer from "@/components/Footer";
import { PageTransition } from "@/components/ui/animations/PageTransition";

export default function Home() {
  return (
    <PageTransition className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1C1815]">
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. HERO SECTION */}
      <Hero />

      {/* 3. FEATURED PROPERTIES */}
      <FeaturedProperties />

      {/* 4. COMPANY INTRODUCTION */}
      <CompanyIntro />

      {/* 5. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 6. PROPERTY CTA SECTION */}
      <PropertyCTA />

      {/* 7. FOOTER */}
      <Footer />
    </PageTransition>
  );
}

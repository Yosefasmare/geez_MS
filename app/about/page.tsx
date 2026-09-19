import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurStory from "@/components/about/OurStory";
import WhatWeDo from "@/components/about/WhatWeDo";
import HowWeWork from "@/components/about/HowWeWork";
import WhatWeValue from "@/components/about/WhatWeValue";
import WhyWorkWithUs from "@/components/about/WhyWorkWithUs";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Us | GE'EZ Marketing Solution PLC",
  description:
    "Learn about GE'EZ Marketing Solution PLC, Ethiopia's premier real estate sales, renting brokerage, and advisory agency based in Bole, Addis Ababa.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1C1815]">
      {/* NAVBAR (Active tab: About) */}
      <Navbar activePage="about" />

      {/* HERO BANNER */}
      <AboutHero />

      {/* 1. WHO WE ARE */}
      <WhoWeAre />

      {/* 2. OUR STORY */}
      <OurStory />

      {/* 3. WHAT WE DO */}
      <WhatWeDo />

      {/* 4. HOW WE WORK */}
      <HowWeWork />

      {/* 5. WHAT WE VALUE */}
      <WhatWeValue />

      {/* 6. WHY CLIENTS WORK WITH US */}
      <WhyWorkWithUs />

      {/* 7. CONTACT / CTA */}
      <AboutCTA />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

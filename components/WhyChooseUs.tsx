import { ShieldCheck, Building2, MapPin, Users2 } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Service & Proven Track Record",
    description:
      "With over 220+ successfully closed apartment and commercial shop sales, our structured process guarantees absolute reliability and transparency.",
  },
  {
    icon: Building2,
    title: "Quality Property Portfolio",
    description:
      "We strictly select and represent high-build-quality residential developments and prime commercial real estate in Addis Ababa's top growth zones.",
  },
  {
    icon: MapPin,
    title: "Deep Local Market Expertise",
    description:
      "Based in Bole Selam City Mall, our sales team brings deep sub-market intelligence across Bole, Kazanchis, CMC, and Old Airport corridors.",
  },
  {
    icon: Users2,
    title: "Client-Centric Advisory",
    description:
      "Tailored solutions designed specifically for corporate key accounts, business leaders, and diaspora buyers seeking secure property investments.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white border-t border-stone-200/60">
      <div className="site-container">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">
            The GE'EZ Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1815] tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Our unwavering commitment to professionalism, local expertise, and client trust sets us apart in the Ethiopian real estate landscape.
          </p>
        </div>

        {/* 4 Feature Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-md border border-stone-200/80 bg-[#FAFAF8] hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Minimal Icon Container */}
                  <div className="w-13 h-13 rounded-md bg-white border border-stone-200 flex items-center justify-center text-[#C5A059] shadow-2xs group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#1C1815] leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-200/60 flex items-center text-xs font-semibold text-[#8C6D37]">
                  <span>GE'EZ Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

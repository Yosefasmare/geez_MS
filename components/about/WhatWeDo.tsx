import { ShieldCheck, KeyRound, Sparkles } from "lucide-react";

export default function WhatWeDo() {
  const services = [
    {
      icon: ShieldCheck,
      title: "Real Estate Sales & Marketing",
      description:
        "End-to-end sales representation for high-end residential apartments, penthouses, luxury villas, and commercial retail units across Addis Ababa.",
      highlights: [
        "Buyer & seller representation",
        "Property valuation advisory",
        "Direct site visits & negotiation",
      ],
    },
    {
      icon: KeyRound,
      title: "Real Estate Renting Brokerage",
      description:
        "Connecting corporate entities, diplomatic staff, businesses, and private tenants with premium rental residences and commercial shop spaces.",
      highlights: [
        "Corporate leasing advisory",
        "Commercial space placement",
        "Lease agreement coordination",
      ],
    },
    {
      icon: Sparkles,
      title: "Real Estate Solution & Innovation",
      description:
        "Providing real estate developers with dedicated sales forces, multichannel campaign management, CRM tracking, and market positioning strategies.",
      highlights: [
        "Dedicated sales force allocation",
        "Multichannel marketing execution",
        "Pipeline & CRM management",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-stone-200/80">
      <div className="site-container space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">
            03. What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1815] tracking-tight">
            Our Core Property Services
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            We deliver end-to-end real estate brokerage and marketing solutions tailored to buyers, renters, and property developers.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAFAF8] p-7 rounded-lg border border-stone-200/90 space-y-6 flex flex-col justify-between hover:border-[#C5A059] transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-white border border-stone-200 p-2.5 text-[#C5A059] shadow-2xs group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
                    <IconComp className="w-full h-full" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1C1815] tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80 space-y-2">
                  {service.highlights.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2 text-xs font-medium text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Shield, Target, Zap, Handshake } from "lucide-react";

export default function WhatWeValue() {
  const values = [
    {
      icon: Target,
      title: "Deep Work & Focus",
      desc: "We believe in deep, concentrated effort over superficial outreach. Every property listing receives dedicated, focused sales attention.",
    },
    {
      icon: Shield,
      title: "Legal Compliance & Integrity",
      desc: "Fully registered under the Addis Ababa City Trade Bureau with transparent commission structures and verified property documentation.",
    },
    {
      icon: Zap,
      title: "Agility & Responsiveness",
      desc: "Swift follow-up, adaptive marketing strategies, and clear communication at every stage of the sales pipeline.",
    },
    {
      icon: Handshake,
      title: "Client-Centric Partnership",
      desc: "Building enduring relationships beyond single transactions through thorough after-sales support and ongoing real estate advisory.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-stone-200/80">
      <div className="site-container space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">
            05. What We Value
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1815] tracking-tight">
            Our Guiding Principles
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            At GE'EZ Marketing Solution PLC, our core values drive how we serve homebuyers, property investors, and development partners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {values.map((v, idx) => {
            const IconComp = v.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-lg bg-[#FAFAF8] border border-stone-200 space-y-3 hover:border-[#C5A059] transition-colors"
              >
                <div className="w-10 h-10 rounded bg-white border border-stone-200 flex items-center justify-center text-[#C5A059] shadow-2xs">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#1C1815]">{v.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

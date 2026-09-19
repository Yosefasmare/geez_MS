import { Briefcase, Globe, Store, Building2 } from "lucide-react";

export default function WhyWorkWithUs() {
  const targetMarkets = [
    {
      icon: Briefcase,
      title: "Corporate Key Accounts",
      desc: "Providing dedicated real estate placement, executive housing, and commercial office solutions for corporate clients.",
    },
    {
      icon: Store,
      title: "The Business Community",
      desc: "Connecting local business leaders and commercial enterprises with high-yield retail shops, office floors, and prime developments.",
    },
    {
      icon: Globe,
      title: "Diaspora Community",
      desc: "Delivering trusted, transparent property investment advisory and management for Ethiopian Diaspora buyers worldwide.",
    },
  ];

  const partners = [
    "BAT Real Estate",
    "Palm Real Estate",
    "Vamos Real Estate",
    "Amibara Real Estate",
    "Get-As Real Estate",
  ];

  // Quadruple items to ensure smooth seamless infinite looping ticker
  const marqueeList = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="py-16 md:py-24 bg-[#FAFAF8] border-b border-stone-200/80 overflow-hidden">
      <div className="site-container space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">
            06. Why Clients Work With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1815] tracking-tight">
            Specialized Target Markets & Proven Developer Partnerships
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            We deliver targeted solutions for specific market segments while maintaining close relationships with Ethiopia's leading property developers.
          </p>
        </div>

        {/* Target Market Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {targetMarkets.map((m, idx) => {
            const IconComp = m.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-lg border border-stone-200 space-y-4 hover:shadow-xs transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF5EB] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1C1815]">{m.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Developer Partners Infinite Moving Banner */}
        <div className="bg-white py-10 px-6 sm:px-10 rounded-xl border border-stone-200/90 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              Track Record & Collaborations
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1815] tracking-tight">
              Trusted Development Partners
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              GE'EZ Marketing Solution PLC has collaborated with major Ethiopian real estate developers:
            </p>
          </div>

          {/* Infinite Marquee Ticker Track with Side Gradient Fades */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Left & Right Gradient Fades */}
            <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

            {/* Marquee Inner Flex */}
            <div className="animate-marquee flex items-center gap-6 sm:gap-8">
              {marqueeList.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 px-6 sm:px-8 py-4 rounded-lg bg-[#FAFAF8] border border-stone-200/90 hover:border-[#C5A059] shadow-2xs transition-all shrink-0 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FAF5EB] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
                    <Building2 className="w-4 h-4" />
                  </div>

                  {/* BIG BOLD PARTNER NAME */}
                  <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1C1815] group-hover:text-[#C5A059] tracking-tight whitespace-nowrap transition-colors">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import { Target } from "lucide-react";

export default function OurStory() {
  return (
    <section className="py-16 md:py-24 bg-[#FAFAF8] border-b border-stone-200/80">
      <div className="site-container">
        <div className="max-w-4xl space-y-10">
          
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">
              02. Our Story & Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1815] tracking-tight">
              Building Ethiopia's Most Trusted Property Sales Network
            </h2>
          </div>

          <div className="space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed">
            <p>
              Founded in <strong>September 2025</strong>, GE'EZ Marketing Solution PLC was established with a singular focus: to elevate real estate transaction standards in Addis Ababa through structured sales processes, data-informed strategy, and dedicated account management.
            </p>
            <p>
              Observing that real estate developers often struggled to maintain dedicated sales focus while buyers struggled to find transparent, verified guidance, GE'EZ introduced a specialized agent framework. By combining digital marketing, tele-sales, affiliate networks, and hands-on site visits, we ensure properties reach the right buyers with speed and legal clarity.
            </p>
          </div>

          {/* Strategic Vision Feature Card */}
          <div className="bg-white p-8 rounded-lg border border-stone-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF5EB] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                  Our Vision 2026
                </span>
                <h3 className="text-xl font-bold text-[#1C1815]">
                  The Preferred Agent Company in Real Estate Solutions
                </h3>
              </div>
            </div>

            <p className="text-stone-600 text-base italic border-l-2 border-[#C5A059] pl-4 py-1">
              "By 2026, be the most Preferred Agent Company in Real Estate Solutions and Services."
            </p>

            <p className="text-sm text-stone-500 pt-2">
              We measure our success not just by volume, but by the trust we cultivate with property developers, corporate accounts, diaspora clients, and home seekers across Ethiopia.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

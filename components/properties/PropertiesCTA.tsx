import Link from "next/link";
import { PhoneCall, Sparkles } from "lucide-react";

export default function PropertiesCTA() {
  return (
    <section className="py-14 bg-[#1C1815] text-white border-t border-stone-800">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-[#24201C] p-8 sm:p-10 rounded-lg border border-stone-800 shadow-md">
          
          {/* Left Text */}
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">
              TAILORED PROPERTY SEARCH
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Can&apso;t Find What You&apos;re Looking For?
            </h3>
            <p className="text-sm sm:text-base text-stone-300 font-normal leading-relaxed">
              Speak with our property advisory team at Bole Selam City Mall and let us locate off-market listings or custom real estate solutions for you.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded text-xs font-bold text-[#1C1815] bg-[#C5A059] hover:bg-[#B59049] transition-all duration-200 shadow-xs"
            >
              <PhoneCall className="mr-1.5 w-4 h-4" />
              <span>Contact Us</span>
            </Link>

            <Link
              href="/#properties"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded text-xs font-semibold text-white bg-stone-900 border border-stone-700 hover:border-[#C5A059] transition-all duration-200"
            >
              <Sparkles className="mr-1.5 w-3.5 h-3.5 text-[#C5A059]" />
              <span>View Featured Properties</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

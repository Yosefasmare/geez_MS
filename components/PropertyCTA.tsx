import Link from "next/link";
import { ArrowUpRight, PhoneCall } from "lucide-react";

export default function PropertyCTA() {
  return (
    <section className="py-20 md:py-24 bg-[#1C1815] text-white border-t border-stone-800">
      <div className="site-container text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Eyebrow */}
          <span className="inline-block text-xs font-bold tracking-widest text-[#C5A059] uppercase px-4 py-1.5 rounded bg-[#26211C] border border-[#C5A059]/30">
            START YOUR JOURNEY
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Your Next Property <br className="hidden sm:inline" />
            <span className="text-[#C5A059]">Could Be Here.</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Whether you are seeking a luxury penthouse in Bole, a modern family villa in CMC, or high-yield commercial space, our expert team at GE&apos;EZ Marketing Solution PLC is ready to assist you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/properties"
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 rounded-md text-sm font-bold text-[#1C1815] bg-[#C5A059] hover:bg-[#B59049] transition-all duration-200 shadow-md group"
            >
              <span>Explore Properties</span>
              <ArrowUpRight className="ml-2 w-4 h-4 text-[#1C1815] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 rounded-md text-sm font-semibold text-white bg-stone-900 border border-stone-700 hover:border-[#C5A059] hover:bg-stone-800 transition-all duration-200"
            >
              <PhoneCall className="mr-2 w-4 h-4 text-[#C5A059]" />
              <span>Schedule Consultation</span>
            </Link>
          </div>

          {/* Phone Numbers Banner */}
          <div className="pt-6 text-xs sm:text-sm text-stone-400 font-medium">
            Direct Helpline: <span className="text-[#C5A059] font-bold">+251 941 912 041</span> | <span className="text-[#C5A059] font-bold">+251 929 018 171</span>
          </div>

        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#FAFAF8] border-b border-stone-200/80">
      <div className="site-container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 font-medium mb-6">
          <Link href="/" className="hover:text-[#1C1815] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-[#C5A059] font-semibold">About Us</span>
        </nav>

        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#C5A059] uppercase px-3 py-1 rounded bg-[#FAF5EB] border border-[#C5A059]/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Licensed Real Estate Brokerage • Addis Ababa</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C1815] tracking-tight leading-[1.1]">
            Empowering Ethiopian Property Buyers, Investors & Developers.
          </h1>

          <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-normal pt-2">
            GE'EZ Marketing Solution PLC is Ethiopia's dedicated real estate brokerage and advisory firm. We bridge the gap between premier property developments and discerning home buyers, corporate key accounts, and diaspora investors.
          </p>
        </div>
      </div>
    </section>
  );
}

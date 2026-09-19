import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-[#FAFAF8] border-b border-stone-200/80">
      <div className="site-container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 font-medium mb-6">
          <Link href="/" className="hover:text-[#1C1815] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-[#C5A059] font-semibold">Contact</span>
        </nav>

        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase block">
            GET IN TOUCH
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1815] tracking-tight leading-tight">
            Let's Talk About Your Property.
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed pt-1">
            Whether you are looking to buy a home, lease commercial space, or discuss strategic sales representation for your real estate development, our team in Addis Ababa is here to assist you.
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Building2, MapPin } from "lucide-react";

export default function CompanyIntro() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAFAF8] border-t border-stone-200/60">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden border border-stone-200 shadow-md bg-white">
              <div className="relative aspect-[4/3] xl:aspect-[16/11] w-full">
                <Image
                  src="/about-realestate.png"
                  alt="GE'EZ Marketing Solution PLC advisory office and property model"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute bottom-6 right-6 bg-[#1C1815] text-white p-6 rounded-md shadow-lg border border-[#C5A059]/40 max-w-xs">
                <div className="text-4xl font-extrabold text-[#C5A059] tracking-tight">
                  220+
                </div>
                <div className="text-xs font-semibold text-stone-300 uppercase tracking-wider mt-1">
                  Apartments & Shop Units Successfully Closed
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Company Stats */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-7">
            {/* Small Gold Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C5A059]/30 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
              <span className="text-xs font-bold tracking-wider uppercase text-[#8C6D37]">
                ABOUT OUR COMPANY
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1815] leading-tight tracking-tight">
              Redefining Real Estate <br />
              <span className="text-[#C5A059]">Solutions in Ethiopia</span>
            </h2>

            {/* Paragraph Description based on PDF profile */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              GE'EZ Marketing Solution PLC is an established real estate sales, rental brokerage, and marketing advisory firm headquartered at <strong className="text-[#1C1815]">Bole, Selam City Mall (4th Floor)</strong> in Addis Ababa.
            </p>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              With a proven track record of securing over <strong className="text-[#1C1815]">220+ high-value apartment and retail shop unit sales</strong>, our team brings exceptional sales management, market intelligence, and advisory services tailored for Corporate Accounts, the Business Community, and Diaspora investors.
            </p>

            {/* Vision Highlight Box */}
            <div className="p-5 rounded-md bg-white border border-stone-200/80 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                <Target className="w-4 h-4" />
                <span>Our 2026 Vision</span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-[#1C1815] leading-snug">
                "To be the most preferred and trusted agent company in Real Estate Solutions and Services across Ethiopia."
              </p>
            </div>

            {/* Key Office Info Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-medium text-stone-700 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Bole, Selam City Mall - 4th Fl.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Sales, Renting & Innovation</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold text-[#1C1815] bg-white border border-stone-300 hover:border-[#C5A059] hover:bg-[#FAF5EB] transition-all duration-200 shadow-2xs group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="ml-2 w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

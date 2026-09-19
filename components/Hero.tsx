import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/animations/FadeIn";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAFAF8]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-8">
            {/* Small Gold Eyebrow */}
            <FadeIn delay={0.05} distance={10}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30">
                <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
                <span className="text-xs font-bold tracking-wider uppercase text-[#8C6D37]">
                  GE&apos;EZ MARKETING SOLUTION PLC • ADDIS ABABA
                </span>
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.12} distance={14}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1C1815] leading-[1.12] tracking-tight">
                Find a Place <br />
                <span className="text-[#C5A059]">Worth Calling Home</span>
              </h1>
            </FadeIn>

            {/* Supporting Paragraph */}
            <FadeIn delay={0.2} distance={14}>
              <p className="text-base sm:text-lg lg:text-xl text-stone-600 leading-relaxed font-normal">
                Ethiopia’s premier real estate marketing and advisory firm. Based in Bole Selam City Mall, we connect discerning homeowners, corporate clients, and diaspora buyers with extraordinary residential and commercial properties across Addis Ababa.
              </p>
            </FadeIn>

            {/* Key Trust Signals */}
            <FadeIn delay={0.28} distance={12}>
              <div className="flex flex-wrap items-center gap-y-3 gap-x-8 text-xs sm:text-sm font-semibold text-stone-700 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>220+ Unit Sales Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Prime Bole & CMC Portfolio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Corporate & Diaspora Advisory</span>
                </div>
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.35} distance={12}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="/properties"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold text-white bg-[#C5A059] hover:bg-[#B59049] transition-all duration-200 shadow-sm hover:shadow group"
                >
                  <span>View Properties</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold text-[#1C1815] bg-white border border-stone-300 hover:border-[#C5A059] hover:bg-stone-50 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Hero Property Visual */}
          <div className="lg:col-span-6 xl:col-span-6">
            <FadeIn delay={0.25} distance={20}>
              <div className="relative rounded-lg overflow-hidden border border-stone-200 shadow-md bg-stone-100 group">
                <div className="relative aspect-[16/11] sm:aspect-[16/10] xl:aspect-[16/10] w-full">
                  <Image
                    src="/hero-property.png"
                    alt="Modern luxury residential architecture by GE'EZ Marketing Solution PLC"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Minimalist Editorial Tag */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-xs p-5 rounded-md border border-stone-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-[#C5A059] uppercase">
                      Featured Development
                    </p>
                    <p className="text-base font-bold text-[#1C1815]">
                      The Bole Heights Luxury Residences
                    </p>
                  </div>
                  <div className="text-right hidden sm:block">
                    <span className="inline-flex items-center text-xs font-semibold text-stone-700 bg-stone-100 px-3 py-1.5 rounded">
                      <Building className="w-3.5 h-3.5 mr-1 text-[#C5A059]" />
                      Bole, Addis Ababa
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-16 sm:py-20 bg-[#14110F] text-white border-t border-stone-800">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">
              07. Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Discuss Your Property Goals or Development Marketing?
            </h2>
            <p className="text-stone-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Whether you are buying a home, seeking high-yielding commercial investment, or looking for a dedicated sales agency for your real estate development, GE'EZ Marketing Solution PLC is here to guide you.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3.5">
            <Link
              href="/properties"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-bold text-stone-900 bg-[#C5A059] hover:bg-[#B59049] transition-all duration-200 shadow-md"
            >
              <span>Explore Property Catalogue</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+251941912041"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-bold text-white border border-stone-700 bg-stone-900/60 hover:bg-stone-800 hover:border-[#C5A059] transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>Call +251 941 912 041</span>
            </a>
          </div>

        </div>

        {/* Contact Info Row */}
        <div className="pt-12 mt-12 border-t border-stone-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-400">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Bole, Selam City Mall - 4th Floor, Addis Ababa</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>+251 941 912 041 / +251 929 018 171</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>yeabsirakebede720@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

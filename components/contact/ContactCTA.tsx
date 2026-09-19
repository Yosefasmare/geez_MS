import Link from "next/link";
import { Phone, ArrowUpRight } from "lucide-react";
import { contactData } from "@/app/data/contactData";

export default function ContactCTA() {
  const primaryPhone = contactData.phones[0] || { display: "+251 941 912 041", href: "tel:+251941912041" };

  return (
    <section className="py-16 sm:py-20 bg-[#14110F] text-white border-t border-stone-800">
      <div className="site-container text-center max-w-3xl mx-auto space-y-6">
        <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase block">
          CURATED CATALOGUE
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Looking for the Right Property?
        </h2>

        <p className="text-stone-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          Explore our available properties or speak with our team directly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/properties"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-bold text-stone-900 bg-[#C5A059] hover:bg-[#B59049] transition-all duration-200 shadow-md"
          >
            <span>View Properties</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={primaryPhone.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-bold text-white border border-stone-700 bg-stone-900/60 hover:bg-stone-800 hover:border-[#C5A059] transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-[#C5A059]" />
            <span>Call Us: {primaryPhone.display}</span>
          </a>
        </div>

        <div className="pt-4 text-xs text-stone-400">
          <span>Headquarters: Bole, Selam City Mall - 4th Floor, Addis Ababa</span>
        </div>
      </div>
    </section>
  );
}

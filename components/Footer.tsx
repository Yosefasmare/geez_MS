import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#14110F] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-md border border-stone-700 bg-white p-1">
                <Image
                  src="/geez-logo.png"
                  alt="GE'EZ Marketing Solution PLC"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white leading-tight">
                  GE'EZ <span className="text-[#C5A059]">MARKETING</span>
                </span>
                <span className="text-[10px] tracking-widest text-stone-400 font-semibold uppercase">
                  SOLUTION PLC
                </span>
              </div>
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              Ethiopia’s premier agent company in real estate sales, renting brokerage, and innovation. Over 220+ apartment and shop units successfully transacted.
            </p>

            <div className="pt-2 text-xs text-stone-400">
              <span className="text-[#C5A059] font-semibold">General Manager:</span> Yeabsira Kebede
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-[#C5A059] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-[#C5A059] transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C5A059] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:text-[#C5A059] transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#C5A059] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Real Estate Sales & Marketing</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Real Estate Renting Brokerage</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Real Estate Advisory & Innovation</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Corporate Key Account Management</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Diaspora Property Advisory</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Bole, Selam City Mall - 4th Floor, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>+251 941 912 041 / +251 929 018 171</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>yeabsirakebede720@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Mon - Sat: 8:30 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} GE'EZ Marketing Solution PLC. All rights reserved.</p>
          <p className="text-stone-400">
            Selam City Mall, Bole • Addis Ababa, Ethiopia
          </p>
        </div>

      </div>
    </footer>
  );
}

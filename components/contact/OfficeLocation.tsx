import { MapPin, Compass, Building } from "lucide-react";
import { contactData } from "@/app/data/contactData";

export default function OfficeLocation() {
  return (
    <section className="py-16 md:py-24 bg-[#FAFAF8] border-b border-stone-200/80">
      <div className="site-container space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase block">
              HEADQUARTERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1815] tracking-tight">
              Visit Our Office
            </h2>
            <p className="text-stone-600 text-base">
              Conveniently located in the commercial heart of Bole, Addis Ababa.
            </p>
          </div>

          <div className="bg-white px-5 py-3 rounded-lg border border-stone-200 shadow-2xs space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block">
              Office Hours
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#1C1815] block">
              {contactData.officeHours}
            </span>
          </div>
        </div>

        {/* Map Visual Placeholder Card */}
        <div className="bg-[#14110F] text-white rounded-xl p-8 relative overflow-hidden border border-stone-800 shadow-md min-h-[360px] flex flex-col justify-between group">
          {/* Blueprint Grid Background Pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px]" />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded text-xs text-stone-300 border border-stone-700">
              <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="font-semibold uppercase tracking-wider text-[10px]">
                Selam City Mall • Bole District
              </span>
            </div>

            <span className="text-[11px] font-mono text-stone-400 bg-stone-900/80 px-3 py-1 rounded border border-stone-800">
              Coordinates: 8.9912° N, 38.7885° E
            </span>
          </div>

          {/* Center Location Pin Badge */}
          <div className="relative z-10 my-auto py-10 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C5A059]/20 border-2 border-[#C5A059] text-[#C5A059] shadow-xl shadow-black/60 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 fill-[#C5A059]/30" />
            </div>

            <div className="space-y-1 max-w-md mx-auto">
              <h3 className="text-2xl font-extrabold text-white tracking-wide">
                {contactData.address.building}
              </h3>
              <p className="text-sm text-[#C5A059] font-bold">
                {contactData.address.floor} • {contactData.address.subCity}, {contactData.address.city}
              </p>
              <p className="text-xs text-stone-400 pt-1">
                Full Address: {contactData.address.fullText}
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-[#C5A059]" />
              <span>GE'EZ Marketing Solution PLC Headquarters</span>
            </div>
            <span className="text-[#C5A059] font-semibold">Static Map View • Map API Integrates Here</span>
          </div>
        </div>
      </div>
    </section>
  );
}

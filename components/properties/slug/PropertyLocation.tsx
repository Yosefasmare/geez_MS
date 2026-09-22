import { MapPin } from "lucide-react";

interface PropertyLocationProps {
  location: string;
}

export default function PropertyLocation({ location }: PropertyLocationProps) {
  return (
    <div className="space-y-6 pt-8 border-t border-stone-200/80">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1815] tracking-tight">
          Location
        </h2>
        <p className="text-sm font-medium text-stone-600 mt-2 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
          <span>{location}</span>
        </p>
      </div>

      <div className="bg-[#1C1815] rounded-lg p-6 sm:p-8 relative overflow-hidden border border-stone-800 text-stone-300 min-h-[220px] flex flex-col justify-between">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059]">
            Location Blueprint
          </span>
          <span className="text-[11px] font-mono text-stone-400 bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">
            Addis Ababa, Ethiopia
          </span>
        </div>

        <div className="relative z-10 my-auto py-4 text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C5A059]/20 border border-[#C5A059] text-[#C5A059] shadow-md mx-auto">
            <MapPin className="w-6 h-6 fill-[#C5A059]/30" />
          </div>
          <h4 className="text-lg font-bold text-white tracking-wide">
            {location}
          </h4>
        </div>

        <div className="relative z-10 text-xs text-stone-400 border-t border-stone-800/80 pt-3 flex justify-between items-center">
          <span>Precise location released upon viewing confirmation</span>
          <span className="text-[#C5A059] font-medium">GE'EZ Marketing Solution</span>
        </div>
      </div>
    </div>
  );
}

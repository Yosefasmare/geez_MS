import { MapPin, Navigation, Clock, Compass } from "lucide-react";

interface PropertyLocationProps {
  location: string;
  neighborhood: string;
  city: string;
  nearbyPoints: { label: string; time: string }[];
}

export default function PropertyLocation({
  location,
  neighborhood,
  city,
  nearbyPoints,
}: PropertyLocationProps) {
  return (
    <div className="space-y-6 pt-8 border-t border-stone-200/80">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1815] tracking-tight">
            Location
          </h2>
          <p className="text-sm font-medium text-stone-600 mt-1 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#C5A059]" />
            <span>{location} ({neighborhood}, {city})</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Map Visual Placeholder Card (8 cols) */}
        <div className="lg:col-span-8 bg-[#1C1815] rounded-lg p-6 relative overflow-hidden border border-stone-800 text-stone-300 min-h-[300px] sm:min-h-[340px] flex flex-col justify-between group">
          {/* Stylized Architectural Map Blueprint Background Pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Top Map Bar */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded text-xs text-stone-300 border border-stone-700">
              <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="font-semibold uppercase tracking-wider text-[10px]">
                Architectural Location Blueprint
              </span>
            </div>

            <span className="text-[11px] font-mono text-stone-400 bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">
              9°04'N 38°45'E • Entoto Heights
            </span>
          </div>

          {/* Center Location Marker */}
          <div className="relative z-10 my-auto py-8 text-center space-y-3">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#C5A059]/20 border-2 border-[#C5A059] text-[#C5A059] shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-7 h-7 fill-[#C5A059]/30" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white tracking-wide">
                {location}
              </h4>
              <p className="text-xs text-stone-400 font-medium max-w-sm mx-auto">
                Prime residential corridor with mountain micro-climate & city skyline vistas.
              </p>
            </div>
          </div>

          {/* Bottom Overlay Info */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-3 border-t border-stone-800/80 text-xs text-stone-400">
            <span>Static Map View • Precise coordinates released upon viewing booking</span>
            <span className="text-[#C5A059] font-medium">Addis Ababa, Ethiopia</span>
          </div>
        </div>

        {/* Nearby Distance Highlights (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-stone-200/90 rounded-lg p-6 space-y-5 shadow-xs flex flex-col justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059]">
              Accessibility
            </span>
            <h3 className="text-lg font-bold text-[#1C1815]">
              Nearby Landmarks
            </h3>
            <p className="text-xs text-stone-500">
              Estimated drive times from Entoto Ridge Villa
            </p>
          </div>

          <div className="space-y-3.5 divide-y divide-stone-100">
            {nearbyPoints.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between pt-3 first:pt-0">
                <div className="flex items-center gap-2.5">
                  <Navigation className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span className="text-xs font-semibold text-stone-800">{item.label}</span>
                </div>
                <span className="text-xs font-bold font-mono text-[#C5A059] bg-[#FAF5EB] px-2.5 py-1 rounded border border-[#C5A059]/30">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span>Drive times measured under average traffic conditions.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

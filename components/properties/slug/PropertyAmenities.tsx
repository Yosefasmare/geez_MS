import { Check } from "lucide-react";

interface PropertyAmenitiesProps {
  amenities: string[];
}

export default function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
  return (
    <div className="space-y-6 pt-8 border-t border-stone-200/80">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1815] tracking-tight">
        Features & Amenities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {amenities.map((amenity, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-3.5 rounded bg-white border border-stone-200/80 shadow-2xs"
          >
            <div className="w-6 h-6 rounded-full bg-[#FAF5EB] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <span className="text-sm font-semibold text-[#1C1815]">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

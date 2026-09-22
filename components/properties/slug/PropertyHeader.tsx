import { DetailedProperty } from "@/lib/types";
import { MapPin } from "lucide-react";

interface PropertyHeaderProps {
  property: DetailedProperty;
}

export default function PropertyHeader({ property }: PropertyHeaderProps) {
  return (
    <section className="pt-8 pb-6 bg-[#FAFAF8]">
      <div className="site-container">
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            {/* Listing Type Tag */}
            <span className="text-[11px] font-bold tracking-widest text-[#C5A059] uppercase px-3 py-1 rounded bg-[#FAF5EB] border border-[#C5A059]/30">
              {property.listingType}
            </span>

            {/* Availability Badge */}
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>{property.status}</span>
            </span>
          </div>

          {/* Property ID */}
          <span className="text-xs font-mono font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded border border-stone-200">
            REF: {property.id}
          </span>
        </div>

        {/* Title and Price Flex Container */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1815] tracking-tight leading-tight">
              {property.title}
            </h1>
            <div className="flex items-center gap-2 text-stone-600 font-medium text-sm sm:text-base">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>{property.location}</span>
            </div>
          </div>

          {/* Price */}
          <div className="lg:text-right pt-2 lg:pt-0">
            <span className="text-xs text-stone-600 uppercase tracking-wider block mb-0.5 font-semibold">
              Guide Price
            </span>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#C5A059] tracking-tight">
              {property.currency || "ETB"} {property.price ? Number(property.price).toLocaleString() : "N/A"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

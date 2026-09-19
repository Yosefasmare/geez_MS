import { Bed, Bath, Maximize2, Layers } from "lucide-react";
import { DetailedProperty } from "@/app/data/mockProperties";

interface PropertyOverviewProps {
  property: DetailedProperty;
}

export default function PropertyOverview({ property }: PropertyOverviewProps) {
  return (
    <div className="space-y-8">
      {/* Primary Specifications Grid Bar */}
      <div className="bg-white rounded-lg border border-stone-200/90 p-6 shadow-xs">
        <h3 className="text-xs font-bold tracking-widest text-[#C5A059] uppercase mb-5">
          Key Highlights
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
          {/* Bedrooms */}
          <div className="space-y-1.5 flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
              <Bed className="w-5 h-5" />
            </div>
            <div>
              <span className="text-2xl font-bold text-[#1C1815] block leading-none">
                {property.bedrooms}
              </span>
              <span className="text-xs font-medium text-stone-500">Bedrooms</span>
            </div>
          </div>

          {/* Bathrooms */}
          <div className="space-y-1.5 flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
              <Bath className="w-5 h-5" />
            </div>
            <div>
              <span className="text-2xl font-bold text-[#1C1815] block leading-none">
                {property.bathrooms}
              </span>
              <span className="text-xs font-medium text-stone-500">Bathrooms</span>
            </div>
          </div>

          {/* Area */}
          <div className="space-y-1.5 flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
              <Maximize2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-2xl font-bold text-[#1C1815] block leading-none">
                {property.area}
              </span>
              <span className="text-xs font-medium text-stone-500">Total Area</span>
            </div>
          </div>

          {/* Floors */}
          <div className="space-y-1.5 flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-2xl font-bold text-[#1C1815] block leading-none">
                {property.floors}
              </span>
              <span className="text-xs font-medium text-stone-500">Floors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Summary Metadata Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-stone-50 p-4 rounded border border-stone-200/70">
          <span className="text-[11px] uppercase tracking-wider text-stone-600 block font-semibold">
            Property Type
          </span>
          <span className="text-base font-bold text-[#1C1815] mt-1 block">
            {property.propertyType}
          </span>
        </div>

        <div className="bg-stone-50 p-4 rounded border border-stone-200/70">
          <span className="text-[11px] uppercase tracking-wider text-stone-600 block font-semibold">
            Listing Type
          </span>
          <span className="text-base font-bold text-[#1C1815] mt-1 block">
            {property.listingType}
          </span>
        </div>

        <div className="bg-stone-50 p-4 rounded border border-stone-200/70">
          <span className="text-[11px] uppercase tracking-wider text-stone-600 block font-semibold">
            Status
          </span>
          <span className="text-base font-bold text-emerald-700 mt-1 block">
            {property.status}
          </span>
        </div>

        <div className="bg-stone-50 p-4 rounded border border-stone-200/70">
          <span className="text-[11px] uppercase tracking-wider text-stone-600 block font-semibold">
            Property ID
          </span>
          <span className="text-base font-bold font-mono text-[#1C1815] mt-1 block">
            {property.propertyId}
          </span>
        </div>
      </div>
    </div>
  );
}

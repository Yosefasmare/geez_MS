import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Maximize2, MapPin, ArrowRight } from "lucide-react";
import PropertyStatus from "./PropertyStatus";
import { Property } from "@/app/data/mockProperties";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-md border border-stone-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col group">
      {/* 4:3 Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Top Badges Overlay */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <PropertyStatus status={property.status} />
        </div>

        {/* Property Type Badge */}
        <div className="absolute top-3.5 right-3.5">
          <span className="bg-[#1C1815]/80 text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded backdrop-blur-2xs">
            {property.propertyType}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-stone-500">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#1C1815] group-hover:text-[#C5A059] transition-colors leading-snug line-clamp-1">
            {property.title}
          </h3>

          {/* Price */}
          <div className="pt-0.5">
            <span className="text-xl font-extrabold text-[#C5A059] tracking-tight">
              {property.price}
            </span>
          </div>
        </div>

        {/* Specifications Row */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 font-medium">
          <div className="flex items-center gap-1.5">
            <Bed className="w-3.5 h-3.5 text-stone-400" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-3.5 h-3.5 text-stone-400" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize2 className="w-3.5 h-3.5 text-stone-400" />
            <span>{property.area}</span>
          </div>
        </div>

        {/* View Property Action */}
        <div className="pt-1">
          <Link
            href={`/properties/${property.slug}`}
            className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded text-xs font-bold text-[#1C1815] bg-[#FAFAF8] border border-stone-200 hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-200 group/btn"
          >
            <span>VIEW PROPERTY</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
}

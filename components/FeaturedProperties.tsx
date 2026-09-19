import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight } from "lucide-react";

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  beds: number | string;
  baths: number | string;
  area: string;
  image: string;
  featuredTag: string;
}

const properties: Property[] = [
  {
    id: "prop-1",
    title: "The Royal Bole Penthouse",
    location: "Bole Atlas, Addis Ababa",
    price: "ETB 38,500,000",
    type: "Luxury Apartment",
    beds: 3,
    baths: 3.5,
    area: "260 m²",
    image: "/prop-penthouse.png",
    featuredTag: "Exclusive Listing",
  },
  {
    id: "prop-2",
    title: "CMC Executive Sanctuary Villa",
    location: "CMC Residential Zone, Addis Ababa",
    price: "ETB 52,000,000",
    type: "Standalone Villa",
    beds: 5,
    baths: 4,
    area: "420 m²",
    image: "/prop-villa.png",
    featuredTag: "Prime Investment",
  },
  {
    id: "prop-3",
    title: "Selam Commercial Retail Space",
    location: "Bole, Selam City Mall 4th Floor",
    price: "ETB 24,000,000",
    type: "Commercial Retail",
    beds: "N/A",
    baths: 2,
    area: "120 m²",
    image: "/prop-commercial.png",
    featuredTag: "High Yield Retail",
  },
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-20 md:py-28 bg-white border-t border-stone-200/60">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 pb-6 border-b border-stone-100">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">
              Curated Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1815] tracking-tight">
              Featured Properties
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Explore our handpicked selection of premium residential apartments, luxury villas, and high-yielding commercial spaces across Addis Ababa.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/properties"
              className="inline-flex items-center text-sm font-semibold text-[#1C1815] hover:text-[#C5A059] transition-colors group"
            >
              <span>Explore All Listings</span>
              <ArrowUpRight className="ml-1.5 w-4 h-4 text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-md border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-100">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1C1815]/90 text-white text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
                    {property.type}
                  </span>
                </div>

                {/* Featured Tag Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/95 text-[#8C6D37] border border-[#C5A059]/40 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded shadow-xs">
                    {property.featuredTag}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-stone-500">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{property.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1C1815] group-hover:text-[#C5A059] transition-colors leading-snug">
                    {property.title}
                  </h3>

                  <div className="pt-1">
                    <span className="text-2xl font-extrabold text-[#C5A059] tracking-tight">
                      {property.price}
                    </span>
                  </div>
                </div>

                {/* Specs Divider & Grid */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs sm:text-sm text-stone-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4 text-stone-400" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath className="w-4 h-4 text-stone-400" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Maximize2 className="w-4 h-4 text-stone-400" />
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <Link
                    href={`/properties/${property.title}`}
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded text-xs font-bold text-[#1C1815] bg-[#FAFAF8] border border-stone-200 hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-200"
                  >
                    <span>View Property Details</span>
                    <ArrowUpRight className="ml-1.5 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

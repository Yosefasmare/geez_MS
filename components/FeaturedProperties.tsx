import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight, Building2 } from "lucide-react";
import { getProperties } from "@/lib/actions/properties";


export default async function FeaturedProperties() {

  const result = await getProperties(true)

  if (!result.data || result.data.length === 0) {
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
          </div>

          {/* Empty State Card */}
          <div className="bg-[#FAFAF8] border border-stone-200/80 rounded-xl p-8 sm:p-12 md:p-16 text-center max-w-2xl mx-auto space-y-6 shadow-xs">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mx-auto border border-[#C5A059]/20">
              <Building2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1C1815] tracking-tight">
                No Featured Properties Available
              </h3>
              <p className="text-sm sm:text-base text-stone-500 max-w-md mx-auto leading-relaxed">
                Our curated portfolio is currently being updated with new exclusive luxury listings. Check back soon or explore our complete property listings.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/properties"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded text-xs font-bold text-white bg-[#C5A059] hover:bg-[#B59049] transition-all shadow-xs"
              >
                <span>Browse All Properties</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded text-xs font-bold text-[#1C1815] bg-white border border-stone-300 hover:bg-stone-50 transition-all"
              >
                <span>Contact Advisory Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }



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
          {result.data.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-md border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-100">
                <Image
                  src={property.images?.[0]?.secureUrl || "/prop-penthouse.png"}
                  alt={property.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1C1815]/90 text-white text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
                    {property.propertyType}
                  </span>
                </div>

                {/* Featured Tag Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/95 text-[#8C6D37] border border-[#C5A059]/40 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded shadow-xs">
                    {property.listingType}
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
                    {property.title.length > 30 ?  property.title.substring(0,30) : property.title }
                  </h3>

                  <div className="pt-1">
                    <span className="text-2xl font-extrabold text-[#C5A059] tracking-tight">
                     {property.currency} {Number(property.price).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Specs Divider & Grid */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs sm:text-sm text-stone-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4 text-stone-400" />
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath className="w-4 h-4 text-stone-400" />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Maximize2 className="w-4 h-4 text-stone-400" />
                    <span>{property.area} m²</span>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <Link
                    href={`/properties/${property.slug}`}
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

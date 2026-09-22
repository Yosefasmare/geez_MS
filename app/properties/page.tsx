import Link from "next/link";
import { SearchX } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageIntro from "@/components/properties/PageIntro";
import PropertyFilters from "@/components/properties/PropertyFilters";
import PropertyResultsHeader from "@/components/properties/PropertyResultsHeader";
import PropertyGrid from "@/components/properties/PropertyGrid";
import Pagination from "@/components/properties/Pagination";
import PropertiesCTA from "@/components/properties/PropertiesCTA";
import { getProperties } from "@/lib/actions/properties";

export const metadata = {
  title: "Property Collection | GE'EZ Marketing Solution PLC",
  description:
    "Explore our full catalogue of luxury penthouses, modern villas, family residences, and commercial shop spaces in Addis Ababa.",
};

export default async function PropertiesPage({
  searchParams
   }: {
    searchParams: Promise<{page?: string,location?: string,propertyType?: string,listingType?:string,minPrice?:string,maxPrice?:string}>
   }) {

    const params = await searchParams
    const currentPage = Number(params.page) || 1
    const filters = {
    page: Number(params.page) || 1,
    location: params.location || "",
    propertyType: params.propertyType || "",
    listingType: params.listingType || "",
    minPrice: params.minPrice ? Number(params.minPrice) : undefined,
    maxPrice: params.maxPrice ? Number(params.maxPrice) : undefined,
  };

  const result = await getProperties(false,filters)


  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1C1815]">
      {/* 1. NAVBAR (Active tab: Properties) */}
      <Navbar activePage="properties" />

      {/* 2. PAGE INTRO / HERO */}
      <PageIntro />

      {/* 3. PROPERTY SEARCH + FILTERS */}
      <PropertyFilters />

      {/* Catalog Content Area */}
      <section className="py-12 bg-white flex-1">
        <div className="site-container">
          {/* 4. PROPERTY RESULTS HEADER */}
          
          <PropertyResultsHeader totalCount={result.data?.length || 0} />

          {/* 5. PROPERTY GRID */}
          {result.data && result.data.length > 0 ? (
            <PropertyGrid properties={result.data} />
          ) : (
            <div className="bg-[#FAFAF8] border border-stone-200/80 rounded-xl p-8 sm:p-12 md:p-16 text-center max-w-2xl mx-auto my-8 space-y-6 shadow-xs">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mx-auto border border-[#C5A059]/20">
                <SearchX className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C1815] tracking-tight">
                  No Properties Match Your Search
                </h3>
                <p className="text-sm sm:text-base text-stone-500 max-w-md mx-auto leading-relaxed">
                  We couldn&apos;t find any properties matching your current search criteria. Try adjusting your filters or reset them to view all listings.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/properties"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded text-xs font-bold text-white bg-[#C5A059] hover:bg-[#B59049] transition-all shadow-xs"
                >
                  <span>Reset All Filters</span>
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded text-xs font-bold text-[#1C1815] bg-white border border-stone-300 hover:bg-stone-50 transition-all"
                >
                  <span>Contact Advisory Desk</span>
                </Link>
              </div>
            </div>
          )}

          {/* 6. PAGINATION */}
          {result.propertyCount! > 12 && (
            <Pagination propertyCount={result.propertyCount || 0} currentPage={currentPage}/>
          )}
        </div>
      </section>

      {/* 7. SMALL CTA */}
      <PropertiesCTA />

      {/* 8. FOOTER */}
      <Footer />
    </main>
  );
}

"use client";

import { useState } from "react";
import { Search, RotateCcw, SlidersHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PropertyFilters() {
  const router = useRouter()

  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("All");
  const [listingType, setListingType] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () =>{
    const params = new URLSearchParams()


    if(searchTerm !== "") params.set("location",searchTerm);
    if(propertyType !== "" && propertyType !== "All") params.set("propertyType",propertyType)
    if(listingType !== "" && listingType !== "All") params.set("listingType",listingType)
    if(minPrice !== "") params.set("minPrice",minPrice)
    if(maxPrice !== "") params.set("maxPrice",maxPrice)

    params.set("page","1")


    router.push(`/properties?${params.toString()}`)

 
  }

  const handleReset = () => {
    setSearchTerm("");
    setPropertyType("All");
    setListingType("All");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <section className="py-6 bg-white border-b border-stone-200/80 shadow-2xs">
      <div className="site-container">
        <div className="bg-[#FAFAF8] p-5 sm:p-6 rounded-lg border border-stone-200 space-y-4">
          
          {/* Top Label / Header */}
          <div className="flex items-center justify-between pb-2 border-b border-stone-200/60">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1C1815]">
              <SlidersHorizontal className="w-4 h-4 text-[#C5A059]" />
              <span>Property Search & Filter</span>
            </div>
            
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-[#C5A059] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>

          {/* Controls Form Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
            
            {/* Search Input (4 cols on lg) */}
            <div className="lg:col-span-4 space-y-1.5">
              <label className="text-xs font-bold text-stone-700 tracking-wide">
                Search Location or Property
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Bole, Penthouse, Kazanchis..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded bg-white border border-stone-300 text-sm text-[#1C1815] placeholder-stone-400 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                />
              </div>
            </div>

            {/* Property Type Dropdown (2 cols on lg) */}
            <div className="lg:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-stone-700 tracking-wide">
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded bg-white border border-stone-300 text-sm text-[#1C1815] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all cursor-pointer"
              >
                <option value="All">All Types</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
                <option value="Land">Land</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            {/* Listing Type Dropdown (2 cols on lg) */}
            <div className="lg:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-stone-700 tracking-wide">
                Listing Type
              </label>
              <select
                value={listingType}
                onChange={(e) => setListingType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded bg-white border border-stone-300 text-sm text-[#1C1815] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all cursor-pointer"
              >
                <option value="All">All Listings</option>
                <option value="Sale">For Sale</option>
                <option value="Rent">For Rent</option>
              </select>
            </div>

            {/* Price Range (2 cols on lg) */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 tracking-wide truncate block">
                  Min Price
                </label>
                <input
                  type="text"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full px-3 py-2.5 rounded bg-white border border-stone-300 text-xs text-[#1C1815] placeholder-stone-400 focus:outline-none focus:border-[#C5A059] transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 tracking-wide truncate block">
                  Max Price
                </label>
                <input
                  type="text"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full px-3 py-2.5 rounded bg-white border border-stone-300 text-xs text-[#1C1815] placeholder-stone-400 focus:outline-none focus:border-[#C5A059] transition-all"
                />
              </div>
            </div>

            {/* Submit CTA (2 cols on lg) */}
            <div className="lg:col-span-2">
              <button
                type="button"
                onClick={()=>handleSearch()}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded text-sm font-semibold text-white bg-[#C5A059] hover:bg-[#B59049] transition-all duration-200 shadow-xs cursor-pointer"
              >
                <span>Search Properties</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

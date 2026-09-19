"use client";

import { useState } from "react";
import { ArrowUpDown } from "lucide-react";

interface PropertyResultsHeaderProps {
  totalCount?: number;
}

export default function PropertyResultsHeader({ totalCount = 12 }: PropertyResultsHeaderProps) {
  const [sortOption, setSortOption] = useState("Newest");

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-stone-200">
      {/* Left: Heading & Count */}
      <div className="flex items-baseline gap-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#1C1815] tracking-tight">
          Available Properties
        </h2>
        <span className="text-xs font-semibold text-[#8C6D37] bg-[#FAF5EB] border border-[#C5A059]/30 px-2.5 py-0.5 rounded-full">
          {totalCount} properties
        </span>
      </div>

      {/* Right: Sort Dropdown */}
      <div className="flex items-center gap-2 self-end sm:self-auto">
        <label className="text-xs font-semibold text-stone-500 flex items-center gap-1.5">
          <ArrowUpDown className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Sort by:</span>
        </label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="bg-white border border-stone-300 text-xs font-medium text-[#1C1815] rounded px-3 py-1.5 focus:outline-none focus:border-[#C5A059] cursor-pointer"
        >
          <option value="Newest">Newest</option>
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}

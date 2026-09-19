"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  return (
    <div className="flex items-center justify-center gap-2 pt-12 pb-4">
      {/* Previous Button */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="inline-flex items-center gap-1 px-3.5 py-2 rounded text-xs font-semibold text-[#1C1815] bg-white border border-stone-300 hover:border-[#C5A059] disabled:opacity-40 disabled:hover:border-stone-300 transition-all cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1.5">
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => setCurrentPage(page)}
            className={`w-9 h-9 rounded text-xs font-bold transition-all cursor-pointer ${
              currentPage === page
                ? "bg-[#C5A059] text-white shadow-2xs"
                : "bg-white text-stone-700 border border-stone-200 hover:border-[#C5A059]"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        className="inline-flex items-center gap-1 px-3.5 py-2 rounded text-xs font-semibold text-[#1C1815] bg-white border border-stone-300 hover:border-[#C5A059] disabled:opacity-40 disabled:hover:border-stone-300 transition-all cursor-pointer"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

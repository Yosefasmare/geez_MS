
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
interface PaginationProps {
  propertyCount: number;
  currentPage: number
}

export default function Pagination({propertyCount,currentPage}: PaginationProps) {
  const totalPages = Math.ceil(propertyCount / 12);
  console.log(totalPages)

  return (
    <div className="flex items-center justify-center gap-2 pt-12 pb-4">
      {/* Previous Button */}
      {currentPage > 1 ? (
      <Link
        href={`/properties?page=${currentPage - 1}`}
        className="inline-flex items-center gap-1 px-3.5 py-2 rounded text-xs font-semibold text-[#1C1815] bg-white border border-stone-300 hover:border-[#C5A059] disabled:opacity-40 disabled:hover:border-stone-300 transition-all cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </Link>
      ) : (
        <button
        disabled
        className="inline-flex items-center gap-1 px-3.5 py-2 rounded text-xs font-semibold text-[#1C1815] bg-white border border-stone-300 hover:border-[#C5A059] disabled:opacity-40 disabled:hover:border-stone-300 transition-all cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <Link
            key={page}
            href={`/properties?page=${page}`}
            className={`w-9 h-9 rounded text-xs font-bold transition-all cursor-pointer ${
              currentPage === page
                ? "bg-[#C5A059] text-white shadow-2xs"
                : "bg-white text-stone-700 border border-stone-200 hover:border-[#C5A059]"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {/* Next Button */}
      {currentPage === totalPages ? (
        <button
        type="button"
        disabled={currentPage === totalPages}
        className="inline-flex items-center gap-1 px-3.5 py-2 rounded text-xs font-semibold text-[#1C1815] bg-white border border-stone-300 hover:border-[#C5A059] disabled:opacity-40 disabled:hover:border-stone-300 transition-all cursor-pointer"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
      ) : (
        <Link
        href={`/properties?page=${currentPage + 1}`}
        className="inline-flex items-center gap-1 px-3.5 py-2 rounded text-xs font-semibold text-[#1C1815] bg-white border border-stone-300 hover:border-[#C5A059] disabled:opacity-40 disabled:hover:border-stone-300 transition-all cursor-pointer"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </Link>
      )}
    </div>
  );
}

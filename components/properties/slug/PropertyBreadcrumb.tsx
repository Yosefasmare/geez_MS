import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PropertyBreadcrumbProps {
  title: string;
}

export default function PropertyBreadcrumb({ title }: PropertyBreadcrumbProps) {
  return (
    <nav className="py-4 border-b border-stone-200/60 bg-[#FAFAF8]">
      <div className="site-container flex items-center gap-2 text-xs sm:text-sm text-stone-500 font-medium overflow-x-auto whitespace-nowrap scrollbar-none">
        <Link href="/" className="hover:text-[#1C1815] transition-colors shrink-0">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/properties" className="hover:text-[#1C1815] transition-colors shrink-0">
          Properties
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-[#C5A059] font-semibold truncate shrink-0">
          {title}
        </span>
      </div>
    </nav>
  );
}

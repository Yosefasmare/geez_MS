interface ListingBadgeProps {
  status: "SALE" | "RENT";
}

export default function PropertyStatus( {status}: ListingBadgeProps ) {
  switch (status) {
    case "RENT":
      return (
        <span className="bg-[#FAF5EB] text-[#8C6D37] border border-[#C5A059]/40 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded shadow-2xs">
          FOR RENT
        </span>
      );
    case "SALE":
      return (
        <span className="bg-white/95 text-[#1C1815] border border-stone-300 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded shadow-2xs">
          FOR SALE
        </span>
      );
    default:
      return (
        <span className="bg-stone-100 text-stone-700 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded">
          {status}
        </span>
      );
  }
}

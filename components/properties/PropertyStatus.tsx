interface PropertyStatusProps {
  status: "AVAILABLE" | "FOR RENT" | "FOR SALE" | "SOLD";
}

export default function PropertyStatus({ status }: PropertyStatusProps) {
  switch (status) {
    case "AVAILABLE":
      return (
        <span className="bg-[#1C1815]/90 text-white text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded shadow-2xs">
          AVAILABLE
        </span>
      );
    case "FOR RENT":
      return (
        <span className="bg-[#FAF5EB] text-[#8C6D37] border border-[#C5A059]/40 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded shadow-2xs">
          FOR RENT
        </span>
      );
    case "FOR SALE":
      return (
        <span className="bg-white/95 text-[#1C1815] border border-stone-300 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded shadow-2xs">
          FOR SALE
        </span>
      );
    case "SOLD":
      return (
        <span className="bg-stone-200 text-stone-600 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded">
          SOLD
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

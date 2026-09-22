import { DetailedProperty } from "@/lib/types";

interface PropertyDetailsProps {
  property: DetailedProperty;
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  const detailsList = [
    { label: "Property Type", value: property.propertyType },
    { label: "Listing Type", value: property.listingType },
    { label: "Status", value: property.status },
    { label: "Bedrooms", value: property.bedrooms ?? "N/A" },
    { label: "Bathrooms", value: property.bathrooms ?? "N/A" },
    { label: "Total Area", value: property.area ? `${property.area} sq m` : "N/A" },
    { label: "Floors", value: property.floors ?? "N/A" },
    { label: "Year Built", value: property.yearBuilt ?? "N/A" },
    { label: "Property ID", value: property.slug },
  ];

  return (
    <div className="space-y-6 pt-8 border-t border-stone-200/80">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1815] tracking-tight">
        Property Details
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-8 py-6 px-6 bg-stone-50 border border-stone-200/70 rounded-md">
        {detailsList.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
              {item.label}
            </span>
            <span className="text-base sm:text-lg font-bold text-[#1C1815] block">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

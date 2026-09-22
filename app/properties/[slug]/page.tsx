import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyBreadcrumb from "@/components/properties/slug/PropertyBreadcrumb";
import PropertyHeader from "@/components/properties/slug/PropertyHeader";
import PropertyGallery from "@/components/properties/slug/PropertyGallery";
import PropertyOverview from "@/components/properties/slug/PropertyOverview";
import PropertyContactPanel from "@/components/properties/slug/PropertyContactPanel";
import PropertyDescription from "@/components/properties/slug/PropertyDescription";
import PropertyDetails from "@/components/properties/slug/PropertyDetails";
import PropertyLocation from "@/components/properties/slug/PropertyLocation";
import PropertyCTA from "@/components/properties/slug/PropertyCTA";
import { getPropertyDetail } from "@/lib/actions/properties";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getPropertyDetail(slug);
  const property = result.data;

  if (!property) {
    return {
      title: "Property Not Found | GE'EZ Marketing Solution PLC",
    };
  }

  return {
    title: `${property.title} | GE'EZ Marketing Solution PLC`,
    description: `Explore details for ${property.title}, a premier ${(property.propertyType || "").toLowerCase()} in ${property.location}. ${property.bedrooms ?? 0} bedrooms, ${property.bathrooms ?? 0} bathrooms, ${property.area || ""}.`,
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getPropertyDetail(slug);

  if (!result.data) {
    return (
      <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1C1815]">
        <Navbar activePage="properties" />
        <div className="pt-24 flex-1 flex items-center justify-center">
          <div className="text-center space-y-4 py-20 px-4">
            <h1 className="text-3xl font-bold text-stone-800">Property Not Found</h1>
            <p className="text-stone-500">The requested property listing could not be found.</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const property = result.data;


  const serializedImages = property?.images?.map((img) => ({
  ...img,
  createdAt: img.createdAt ? String(img.createdAt) : null, // Convert Temporal.Instant to string
}));

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1C1815]">
      {/* 1. NAVBAR */}
      <Navbar activePage="properties" />

      {/* Spacer for fixed top navbar */}
      <div className="pt-20 md:pt-24" />

      {/* 2. BREADCRUMB */}
      <PropertyBreadcrumb title={property.title} />

      {/* 3. PROPERTY HEADER */}
      <PropertyHeader property={property} />

      {/* 4. PROPERTY IMAGE GALLERY */}
      <PropertyGallery images={serializedImages} title={property.title} />

      {/* 5. PROPERTY INFORMATION + CONTACT PANEL (2 COLUMNS) */}
      <section className="py-12 bg-white flex-1 border-t border-b border-stone-200/70">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* LEFT COLUMN (8 cols on desktop): Overview, Description, Details, Amenities, Location */}
            <div className="lg:col-span-8 space-y-12">
              {/* 5. PROPERTY OVERVIEW */}
              <PropertyOverview property={property} />

              {/* 6. PROPERTY DESCRIPTION */}
              <PropertyDescription description={property.description} />

              {/* 7. PROPERTY DETAILS */}
              <PropertyDetails property={property} />

              {/* 8. FEATURES / AMENITIES */}

              {/* 9. LOCATION */}
              <PropertyLocation location={property.location} />
            </div>

            {/* RIGHT COLUMN (4 cols on desktop): Contact Panel */}
            <div className="lg:col-span-4">
              {/* 5. CONTACT PANEL */}
              <PropertyContactPanel propertyID={property.id} propertyTitle={property.title} />
            </div>

          </div>
        </div>
      </section>

      {/* 10. CONTACT CTA */}
      <PropertyCTA propertyTitle={property.title} propertyId={property.id} />

      {/* 11. FOOTER */}
      <Footer />
    </main>
  );
}

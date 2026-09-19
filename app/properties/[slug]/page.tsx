import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyBreadcrumb from "@/components/properties/slug/PropertyBreadcrumb";
import PropertyHeader from "@/components/properties/slug/PropertyHeader";
import PropertyGallery from "@/components/properties/slug/PropertyGallery";
import PropertyOverview from "@/components/properties/slug/PropertyOverview";
import PropertyContactPanel from "@/components/properties/slug/PropertyContactPanel";
import PropertyDescription from "@/components/properties/slug/PropertyDescription";
import PropertyDetails from "@/components/properties/slug/PropertyDetails";
import PropertyAmenities from "@/components/properties/slug/PropertyAmenities";
import PropertyLocation from "@/components/properties/slug/PropertyLocation";
import PropertyCTA from "@/components/properties/slug/PropertyCTA";
import { getDetailedPropertyBySlug } from "@/app/data/mockProperties";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getDetailedPropertyBySlug(slug);

  return {
    title: `${property.title} | GE'EZ Marketing Solution PLC`,
    description: `Explore details for ${property.title}, a premier ${property.propertyType.toLowerCase()} in ${property.location}. ${property.bedrooms} bedrooms, ${property.bathrooms} bathrooms, ${property.area}.`,
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getDetailedPropertyBySlug(slug);

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
      <PropertyGallery images={property.images} title={property.title} />

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
              <PropertyAmenities amenities={property.amenities} />

              {/* 9. LOCATION */}
              <PropertyLocation
                location={property.location}
                neighborhood={property.neighborhood}
                city={property.city}
                nearbyPoints={property.nearbyPoints}
              />
            </div>

            {/* RIGHT COLUMN (4 cols on desktop): Contact Panel */}
            <div className="lg:col-span-4">
              {/* 5. CONTACT PANEL */}
              <PropertyContactPanel property={property} />
            </div>

          </div>
        </div>
      </section>

      {/* 10. CONTACT CTA */}
      <PropertyCTA propertyTitle={property.title} propertyId={property.propertyId} />

      {/* 11. FOOTER */}
      <Footer />
    </main>
  );
}

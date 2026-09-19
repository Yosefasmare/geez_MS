import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageIntro from "@/components/properties/PageIntro";
import PropertyFilters from "@/components/properties/PropertyFilters";
import PropertyResultsHeader from "@/components/properties/PropertyResultsHeader";
import PropertyGrid from "@/components/properties/PropertyGrid";
import Pagination from "@/components/properties/Pagination";
import PropertiesCTA from "@/components/properties/PropertiesCTA";
import { mockProperties } from "@/app/data/mockProperties";

export const metadata = {
  title: "Property Collection | GE'EZ Marketing Solution PLC",
  description:
    "Explore our full catalogue of luxury penthouses, modern villas, family residences, and commercial shop spaces in Addis Ababa.",
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1C1815]">
      {/* 1. NAVBAR (Active tab: Properties) */}
      <Navbar activePage="properties" />

      {/* 2. PAGE INTRO / HERO */}
      <PageIntro />

      {/* 3. PROPERTY SEARCH + FILTERS */}
      <PropertyFilters />

      {/* Catalog Content Area */}
      <section className="py-12 bg-white flex-1">
        <div className="site-container">
          {/* 4. PROPERTY RESULTS HEADER */}
          <PropertyResultsHeader totalCount={mockProperties.length} />

          {/* 5. PROPERTY GRID */}
          <PropertyGrid properties={mockProperties} />

          {/* 6. PAGINATION */}
          <Pagination />
        </div>
      </section>

      {/* 7. SMALL CTA */}
      <PropertiesCTA />

      {/* 8. FOOTER */}
      <Footer />
    </main>
  );
}

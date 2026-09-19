import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocation from "@/components/contact/OfficeLocation";
import FAQ from "@/components/contact/FAQ";
import ContactCTA from "@/components/contact//ContactCTA";

export const metadata = {
  title: "Contact Us | GE'EZ Marketing Solution PLC",
  description:
    "Get in touch with GE'EZ Marketing Solution PLC. Speak with our property advisory desk in Bole, Selam City Mall, Addis Ababa. Phone: +251 941 912 041 / +251 929 018 171.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1C1815]">
      {/* 1. NAVBAR */}
      <Navbar activePage="contact" />

      {/* 2. CONTACT INTRODUCTION */}
      <ContactHero />

      {/* 3. CONTACT INFORMATION + FORM (TWO-COLUMN DESKTOP LAYOUT) */}
      <section className="py-12 md:py-20 bg-white border-b border-stone-200/80 flex-1">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Contact Information */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* 4. OFFICE / LOCATION */}
      <OfficeLocation />

      {/* 5. FAQ */}
      <FAQ />

      {/* 6. CLOSING CTA */}
      <ContactCTA />

      {/* 7. FOOTER */}
      <Footer />
    </main>
  );
}

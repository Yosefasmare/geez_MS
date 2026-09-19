"use client";

import { useState } from "react";
import { Calendar, Phone } from "lucide-react";
import ViewingModal from "./ViewingModal";

interface PropertyCTAProps {
  propertyTitle: string;
  propertyId: string;
}

export default function PropertyCTA({ propertyTitle, propertyId }: PropertyCTAProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleContactScroll = () => {
    const footerContact = document.getElementById("contact");
    if (footerContact) {
      footerContact.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "mailto:yeabsirakebede720@gmail.com";
    }
  };

  return (
    <>
      <section id="contact-cta" className="py-16 sm:py-20 bg-[#14110F] text-white border-t border-stone-800">
        <div className="site-container text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">
            Private Appointment
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to See It in Person?
          </h2>

          <p className="text-stone-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Contact our property advisory team to arrange a private viewing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-bold text-stone-900 bg-[#C5A059] hover:bg-[#B59049] transition-all duration-200 shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Viewing</span>
            </button>

            <button
              type="button"
              onClick={handleContactScroll}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-bold text-white border border-stone-700 bg-stone-900/60 hover:bg-stone-800 hover:border-[#C5A059] transition-all duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>Contact Us</span>
            </button>
          </div>

          <div className="pt-4 text-xs text-stone-400">
            <span>Direct Desk: +251 941 912 041 / +251 929 018 171</span>
          </div>
        </div>
      </section>

      <ViewingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        propertyTitle={propertyTitle}
        propertyId={propertyId}
      />
    </>
  );
}

"use client";

import { useState } from "react";
import { Phone, Mail, Calendar, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { DetailedProperty } from "@/app/data/mockProperties";
import ViewingModal from "./ViewingModal";

interface PropertyContactPanelProps {
  property: DetailedProperty;
}

export default function PropertyContactPanel({ property }: PropertyContactPanelProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleContactUs = () => {
    const contactSection = document.getElementById("contact-cta") || document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `mailto:${property.contactInfo.email}?subject=Inquiry regarding ${property.title} (${property.propertyId})`;
    }
  };

  return (
    <>
      <div className="bg-[#F4F3EF] border border-stone-300/80 rounded-lg p-6 sm:p-7 space-y-6 shadow-xs lg:sticky lg:top-28">
        {/* Header */}
        <div className="space-y-2 border-b border-stone-200 pb-5">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059]">
            Direct Advisory
          </span>
          <h3 className="text-xl font-bold text-[#1C1815] tracking-tight">
            Interested in this property?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Speak with our property advisory team for more information or to arrange a private viewing.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md text-sm font-semibold text-white bg-[#C5A059] hover:bg-[#B59049] transition-all duration-200 shadow-xs group cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule a Viewing</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={handleContactUs}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-sm font-semibold text-[#1C1815] bg-white border border-stone-300 hover:border-[#C5A059] hover:bg-stone-50 transition-all duration-200 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#C5A059]" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Direct Contact Info */}
        <div className="pt-4 border-t border-stone-200 space-y-3.5 text-xs sm:text-sm">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
            Advisory Desk
          </h4>

          <div className="flex items-start gap-3 text-stone-700">
            <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
            <div>
              <a href="tel:+251941912041" className="font-semibold hover:text-[#C5A059] block">
                {property.contactInfo.phone1}
              </a>
              <a href="tel:+251929018171" className="text-stone-500 hover:text-[#C5A059] block text-xs mt-0.5">
                {property.contactInfo.phone2}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-stone-700">
            <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
            <a href={`mailto:${property.contactInfo.email}`} className="font-medium hover:text-[#C5A059] truncate text-xs">
              {property.contactInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-3 text-stone-700 text-xs pt-1">
            <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span className="text-stone-500">Mon - Sat: 8:30 AM - 6:00 PM</span>
          </div>
        </div>

        {/* Advisory Guarantee Note */}
        <div className="pt-3 border-t border-stone-200 flex items-center gap-2 text-[11px] text-stone-500">
          <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
          <span>Verified listing with direct developer/owner documentation.</span>
        </div>
      </div>

      {/* Viewing Modal UI */}
      <ViewingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        propertyTitle={property.title}
        propertyId={property.propertyId}
      />
    </>
  );
}

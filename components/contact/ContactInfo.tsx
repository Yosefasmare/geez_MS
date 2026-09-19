import { Phone, Mail, MapPin, Clock, User, ShieldCheck } from "lucide-react";
import ContactInfoItem from "./ContactInfoItem";
import { contactData } from "@/app/data/contactData";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase block">
          ADVISORY DESK
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1815] tracking-tight">
          Contact Details
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          Reach out directly to our real estate advisory team or visit our office in Bole, Selam City Mall.
        </p>
      </div>

      <div className="space-y-3.5">
        {/* Phone */}
        <ContactInfoItem icon={<Phone className="w-4 h-4" />} label="Phone Desk">
          <div className="space-y-0.5">
            {contactData.phones.map((p, idx) => (
              <a
                key={idx}
                href={p.href}
                className="hover:text-[#C5A059] transition-colors block text-sm sm:text-base font-bold"
              >
                {p.display}
              </a>
            ))}
          </div>
        </ContactInfoItem>

        {/* Email */}
        <ContactInfoItem icon={<Mail className="w-4 h-4" />} label="Email Address">
          <a
            href={`mailto:${contactData.email}`}
            className="hover:text-[#C5A059] transition-colors font-medium break-all"
          >
            {contactData.email}
          </a>
        </ContactInfoItem>

        {/* Office Address */}
        <ContactInfoItem icon={<MapPin className="w-4 h-4" />} label="Headquarters">
          <p className="font-semibold text-stone-800 leading-snug">
            {contactData.address.fullText}
          </p>
        </ContactInfoItem>

        {/* Hours */}
        <ContactInfoItem icon={<Clock className="w-4 h-4" />} label="Office Hours">
          <p className="font-medium text-stone-700">{contactData.officeHours}</p>
        </ContactInfoItem>

        {/* Leadership */}
        <ContactInfoItem icon={<User className="w-4 h-4" />} label="Management & Contact">
          <p className="font-semibold text-stone-800">
            {contactData.generalManager} <span className="text-stone-600 text-xs font-normal">(General Manager)</span>
          </p>
          <p className="text-xs text-stone-500 mt-0.5">
            Contact Persons: {contactData.contactPersons.join(" & ")}
          </p>
        </ContactInfoItem>
      </div>

      {/* Registration & Legal Accreditation Card */}
      <div className="pt-2">
        <div className="p-4 rounded-md bg-[#FAF5EB] border border-[#C5A059]/30 text-xs space-y-1.5">
          <div className="flex items-center gap-2 font-bold text-[#8C6D37] uppercase tracking-wider text-[11px]">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>Licensed Real Estate Agency</span>
          </div>
          <p className="text-stone-700">
            Licensed by <strong className="text-stone-900">{contactData.registration.authority}</strong>
          </p>
          <p className="font-mono text-stone-600 text-[11px]">
            License: {contactData.registration.licenseNo} • TIN: {contactData.registration.tin}
          </p>
        </div>
      </div>
    </div>
  );
}

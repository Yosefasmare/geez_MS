"use client";

import { useState } from "react";
import { X, CheckCircle2, User, Phone, Mail, Loader2 } from "lucide-react";
import { sendInquiry } from "@/lib/actions/inquiry";

interface ViewingModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle: string;
  propertyId: string;
}

export default function ViewingModal({
  isOpen,
  onClose,
  propertyTitle,
  propertyId,
}: ViewingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    propertyId,
    type: 'PROPERTY' as "GENERAL" | "PROPERTY"
  });

  if (!isOpen) return null;


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      console.log(formData);
      const result = await sendInquiry(formData);

      if(result.success){
        setSubmitted(true);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 relative border border-stone-200 shadow-xl animate-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                Private Advisory Service
              </span>
              <h3 className="text-xl font-bold text-[#1C1815]">
                Schedule a Property Viewing
              </h3>
              <p className="text-xs text-stone-500">
                Viewing for <span className="font-semibold text-stone-800">{propertyTitle}</span> ({propertyId})
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Abebe Bikila"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+251 911 000 000"
                      value={formData.phone}
                      maxLength={13}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>
              </div>

              

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Additional Requests / Questions
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention any specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-2.5 text-sm bg-stone-50 border border-stone-300 rounded focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>

            <div className="pt-3 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-[#C5A059] hover:bg-[#B59049] disabled:opacity-70 disabled:cursor-not-allowed text-white text-xs font-bold rounded shadow-xs transition-colors inline-flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span>Requesting...</span>
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <span>Request Viewing Appointment</span>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#1C1815]">
              Viewing Request Received
            </h3>
            <p className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-stone-800">{formData.name || "Client"}</span>. Our senior property advisor will contact you shortly at <span className="font-semibold text-stone-800">{formData.phone}</span> to confirm your appointment for {propertyTitle}.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#1C1815] text-white text-xs font-bold rounded hover:bg-stone-800 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

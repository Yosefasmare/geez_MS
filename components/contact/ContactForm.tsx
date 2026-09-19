"use client";

import { useState } from "react";
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare, HelpCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "Buying a Property",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "Buying a Property",
      message: "",
    });
  };

  return (
    <div className="bg-white border border-stone-200/90 rounded-lg p-6 sm:p-8 space-y-6 shadow-xs">
      <div className="space-y-1.5 border-b border-stone-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059]">
          DIRECT INQUIRY
        </span>
        <h2 className="text-2xl font-bold text-[#1C1815] tracking-tight">
          Send Us a Message
        </h2>
        <p className="text-xs text-stone-500">
          Fill out the form below and an advisor from GE'EZ Marketing Solution PLC will reach out to you.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1">
            <label htmlFor="fullName" className="block text-xs font-semibold text-stone-700">
              Full Name <span className="text-[#C5A059]">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="e.g. Abebe Bikila"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAFAF8] border border-stone-300/80 rounded focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Address */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-xs font-semibold text-stone-700">
                Email Address <span className="text-[#C5A059]">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAFAF8] border border-stone-300/80 rounded focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1">
              <label htmlFor="phone" className="block text-xs font-semibold text-stone-700">
                Phone Number <span className="text-[#C5A059]">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+251 911 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAFAF8] border border-stone-300/80 rounded focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Subject Select */}
          <div className="space-y-1">
            <label htmlFor="subject" className="block text-xs font-semibold text-stone-700">
              Subject / Nature of Inquiry <span className="text-[#C5A059]">*</span>
            </label>
            <div className="relative">
              <HelpCircle className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAFAF8] border border-stone-300/80 rounded focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
              >
                <option value="Buying a Property">Buying a Property (Apartment, Villa, House)</option>
                <option value="Renting a Property">Renting / Leasing Brokerage</option>
                <option value="Developer Partnership">Real Estate Developer Partnership / Advisory</option>
                <option value="Diaspora Investment">Diaspora Real Estate Investment</option>
                <option value="Commercial Space">Commercial Shop Unit / Key Account</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
          </div>

          {/* Message Area */}
          <div className="space-y-1">
            <label htmlFor="message" className="block text-xs font-semibold text-stone-700">
              Your Message <span className="text-[#C5A059]">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about your property preferences, location priorities, or questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAFAF8] border border-stone-300/80 rounded focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded text-sm font-bold text-white bg-[#C5A059] hover:bg-[#B59049] transition-all duration-200 shadow-xs group cursor-pointer"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </form>
      ) : (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-[#1C1815]">
            Message Received
          </h3>
          <p className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-stone-800">{formData.fullName || "Client"}</span>. Our property advisory team at GE'EZ Marketing Solution PLC has received your inquiry regarding <span className="font-semibold text-stone-800">{formData.subject}</span> and will contact you promptly at <span className="font-semibold text-stone-800">{formData.phone}</span>.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#1C1815] text-white text-xs font-bold rounded hover:bg-stone-800 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

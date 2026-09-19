import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "What types of real estate services does GE'EZ Marketing Solution PLC provide?",
      a: "GE'EZ Marketing Solution PLC specializes in three core service lines: Real Estate Sales & Marketing (representing luxury penthouses, villas, and apartments), Real Estate Renting Brokerage (placing corporate and private tenants), and Real Estate Solution & Innovation (providing dedicated sales force representation and marketing campaigns for property developers).",
    },
    {
      q: "Which property types and locations in Addis Ababa do you handle?",
      a: "We manage transactions for luxury penthouses, standalone villas, multi-bedroom family apartments, and commercial retail shop units across prime Addis Ababa districts including Bole, Kazanchis Financial District, CMC, Old Airport, Summit, Lideta, Sar Bet, and Ayat.",
    },
    {
      q: "Where is your head office located and what are your working hours?",
      a: "Our headquarters is located at Bole, Selam City Mall - 4th Floor, Addis Ababa, Ethiopia. Our advisory desk is open Monday through Saturday from 8:30 AM to 6:00 PM.",
    },
    {
      q: "How can I schedule a property viewing or consult with an advisor?",
      a: "You can submit an inquiry via the online message form on this page, call our advisory team directly at +251 941 912 041 or +251 929 018 171, or send an email to yeabsirakebede720@gmail.com. An advisor will promptly confirm your appointment.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-stone-200/80">
      <div className="site-container space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1815] tracking-tight">
            Common Inquiries
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Find quick answers to common questions about our brokerage services, office location, and client process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAF8] p-6 sm:p-7 rounded-lg border border-stone-200/90 space-y-3"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <h3 className="text-lg font-bold text-[#1C1815] leading-snug">
                  {faq.q}
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

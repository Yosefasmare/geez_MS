export default function HowWeWork() {
  const steps = [
    { num: "01", title: "Prospecting & Outreach", desc: "Identifying high-potential buyer and tenant leads through digital media, events, tele-marketing, and networks." },
    { num: "02", title: "Consultation & Approach", desc: "Initiating confidential consultations to understand buyer preferences, budget parameters, and investment goals." },
    { num: "03", title: "Needs Assessment", desc: "Analyzing property specs, location priorities, and floor plans to match clients with verified options." },
    { num: "04", title: "Tailored Offer", desc: "Presenting curated property options, complete with pricing breakdowns, payment terms, and developer credentials." },
    { num: "05", title: "Guided Site Visits", desc: "Arranging private accompanied site inspections, answering technical queries, and assisting during negotiations." },
    { num: "06", title: "Sales Closing & Contracts", desc: "Facilitating clear, legally sound transaction documentation in full compliance with municipal trade regulations." },
    { num: "07", title: "After-Sales Support", desc: "Providing post-transaction assistance, lease coordination, and ongoing property advisory for long-term retention." },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAFAF8] border-b border-stone-200/80">
      <div className="site-container space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">
            04. How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1815] tracking-tight">
            Our Structured 3-Phase Client Process: Find, Acquire, Retain
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            We follow a rigorous, step-by-step methodology to ensure smooth transactions and transparent communication from initial query to long-term ownership.
          </p>
        </div>

        {/* 3 Core Mindset Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase">Pillar I</span>
            <h3 className="text-lg font-bold text-[#1C1815]">FIND</h3>
            <p className="text-xs text-stone-600">
              Multichannel market reach across social media, events, affiliate networks, tele-marketing, and direct canvassing to discover prime opportunities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase">Pillar II</span>
            <h3 className="text-lg font-bold text-[#1C1815]">ACQUIRE</h3>
            <p className="text-xs text-stone-600">
              Needs analysis, site visit coordination, objection handling, transparent price negotiation, and legal contract closing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase">Pillar III</span>
            <h3 className="text-lg font-bold text-[#1C1815]">RETAIN</h3>
            <p className="text-xs text-stone-600">
              Dedicated after-sales support, tenancy management, and ongoing market updates for long-term client satisfaction.
            </p>
          </div>
        </div>

        {/* Step-by-step Timeline Grid */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-bold text-[#1C1815] tracking-tight mb-6">
            The 7-Step Advisory Journey
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded border border-stone-200/90 space-y-2 relative"
              >
                <span className="text-2xl font-extrabold text-[#C5A059]/40 font-mono block">
                  {step.num}
                </span>
                <h4 className="text-sm font-bold text-[#1C1815]">{step.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

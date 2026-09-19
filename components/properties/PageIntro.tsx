export default function PageIntro() {
  return (
    <section className="pt-32 pb-8 md:pt-36 md:pb-10 bg-[#FAFAF8] border-b border-stone-200/50">
      <div className="site-container">
        <div className="max-w-4xl space-y-3">
          
          {/* Gold Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#FAF5EB] border border-[#C5A059]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#8C6D37]">
              OUR PROPERTY COLLECTION
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1C1815] tracking-tight leading-tight">
            Find Your Next Property
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Explore our available residences, penthouses, villas, and commercial spaces across prime locations in Addis Ababa.
          </p>

        </div>
      </div>
    </section>
  );
}

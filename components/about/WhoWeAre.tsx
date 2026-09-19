import { Building2, MapPin, Award, CheckCircle2, FileText, User } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-stone-200/80">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">
                01. Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1815] tracking-tight">
                Ethiopia's Premier Real Estate Brokerage & Sales Advisory Firm
              </h2>
            </div>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              <strong>GE'EZ Marketing Solution PLC</strong> is a fully licensed real estate sales agency and advisory firm headquartered in Bole, Selam City Mall, Addis Ababa. 
            </p>

            <p className="text-stone-600 text-base leading-relaxed">
              Led by General Manager <strong>Ms. Yeabsira Kebede Negash</strong>, our leadership team brings over two years of intensive sales management experience with a verified track record of securing <strong>220+ apartment and commercial shop unit sales</strong> across Addis Ababa's fastest-growing corridors.
            </p>

            {/* Fact Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded bg-[#FAFAF8] border border-stone-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  <Award className="w-4 h-4" />
                  <span>Proven Track Record</span>
                </div>
                <p className="text-xl font-extrabold text-[#1C1815]">220+ Unit Sales</p>
                <p className="text-xs text-stone-500">Secured across apartments & retail shops</p>
              </div>

              <div className="p-4 rounded bg-[#FAFAF8] border border-stone-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  <FileText className="w-4 h-4" />
                  <span>Licensed Brokerage</span>
                </div>
                <p className="text-sm font-bold text-[#1C1815]">Proc. No 980/2016</p>
                <p className="text-xs text-stone-500">Addis Ababa City Trade Bureau License</p>
              </div>
            </div>
          </div>

          {/* Right Visual / Credentials Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#14110F] text-white p-8 rounded-lg border border-stone-800 space-y-6 shadow-md">
            <div className="border-b border-stone-800 pb-4">
              <span className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase block">
                Official Company Details
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                GE'EZ Marketing Solution PLC
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-3">
                <User className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-400 block text-xs">General Manager</span>
                  <span className="font-semibold text-white">Ms. Yeabsira Kebede Negash</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-400 block text-xs">Headquarters</span>
                  <span className="font-semibold text-white">Bole, Selam City Mall - 4th Floor, Addis Ababa</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-400 block text-xs">Tax & Registration</span>
                  <span className="font-mono text-stone-200">TIN: 0100200156 • License: AACATB Proc. 980/2016</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-400 block text-xs">Field of Business</span>
                  <span className="font-medium text-stone-300">Real estate commission, brokerage & property marketing agency</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800 text-[11px] text-stone-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Full legal registration under Federal Democratic Republic of Ethiopia.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

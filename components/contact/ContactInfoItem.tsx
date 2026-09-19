import { ReactNode } from "react";

interface ContactInfoItemProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}

export default function ContactInfoItem({ icon, label, children }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-md bg-[#FAFAF8] border border-stone-200/80">
      <div className="w-10 h-10 rounded bg-white border border-stone-200 flex items-center justify-center text-[#C5A059] shrink-0 shadow-2xs mt-0.5">
        {icon}
      </div>
      <div className="space-y-1 min-w-0 flex-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] block">
          {label}
        </span>
        <div className="text-sm font-semibold text-[#1C1815] leading-snug">
          {children}
        </div>
      </div>
    </div>
  );
}

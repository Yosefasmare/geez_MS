interface PropertyDescriptionProps {
  description: string;
}

export default function PropertyDescription({ description }: PropertyDescriptionProps) {
  const paragraphs = description.split("\n\n").filter(Boolean);

  return (
    <div className="space-y-4 pt-8 border-t border-stone-200/80">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1815] tracking-tight">
        About This Property
      </h2>

      <div className="text-stone-700 leading-relaxed space-y-4 text-base sm:text-lg">
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </div>
  );
}

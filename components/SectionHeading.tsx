export default function SectionHeading({ title, note }: { title: string; note: string }) {
  return (
    <div className="mb-12 flex items-baseline justify-between border-b border-border-soft pb-5">
      <h2 className="font-display text-3xl font-semibold text-[#f2f4f6] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <span className="hidden font-mono text-sm text-muted sm:block">{note}</span>
    </div>
  );
}
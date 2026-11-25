export default function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</div>
      <h2 className="section-title mt-4">{title} <span>{accent}</span></h2>
      {description && <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">{description}</p>}
    </div>
  );
}

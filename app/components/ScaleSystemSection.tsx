import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    num: "01",
    title: "Positioning",
    desc: "Define who you are, who you speak to, and what makes you worth following.",
  },
  {
    num: "02",
    title: "Personal Brand",
    desc: "Build a consistent identity across platforms that earns trust at scale.",
  },
  {
    num: "03",
    title: "Organic Growth",
    desc: "Content strategy that compounds — without relying on paid ads or luck.",
  },
  {
    num: "04",
    title: "Monetisation",
    desc: "Structure your offers, pricing, and DMs to convert attention into revenue.",
  },
  {
    num: "05",
    title: "Retention",
    desc: "Keep subscribers engaged, spending, and referring others over time.",
  },
];

export default function ScaleSystemSection() {
  return (
    <SectionWrapper className="py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
        How we scale
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 max-w-xl">
        A five-part system built around sustainable income.
      </h2>

      {/* Desktop: horizontal row */}
      <div className="hidden md:flex gap-0 border border-gray-100 rounded-2xl overflow-hidden">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`flex-1 px-6 py-8 ${i < steps.length - 1 ? "border-r border-gray-100" : ""}`}
          >
            <p className="text-2xl font-light text-gray-200 mb-4">{step.num}</p>
            <p className="text-sm font-semibold text-gray-900 mb-2">{step.title}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile: vertical stack */}
      <div className="flex flex-col md:hidden border border-gray-100 rounded-2xl overflow-hidden">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`flex gap-5 px-6 py-6 ${i < steps.length - 1 ? "border-b border-gray-100" : ""}`}
          >
            <p className="text-xl font-light text-gray-200 shrink-0 w-8">{step.num}</p>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">{step.title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

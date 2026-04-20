import SectionWrapper from "./SectionWrapper";

const cards = [
  {
    tag: "Growth model",
    title: "3-Stage Growth Framework",
    body: "Build → Amplify → Scale. Every creator we work with moves through the same proven stages.",
  },
  {
    tag: "Creator system",
    title: "5-Part Creator System",
    body: "Positioning, brand, growth, monetisation, and retention — all working together.",
  },
  {
    tag: "Approach",
    title: "Monetisation-First Thinking",
    body: "Every decision — content, posting schedule, DMs — is made with income as the outcome.",
  },
  {
    tag: "Traffic",
    title: "Organic Traffic Flow",
    body: "Content earns attention. Attention earns followers. Followers become subscribers.",
  },
  {
    tag: "Brand",
    title: "Personal Brand Architecture",
    body: "You are the product. We build the systems that make you undeniable to your audience.",
  },
  {
    tag: "Retention",
    title: "Subscriber Retention Engine",
    body: "One-time subscribers become long-term income when retention is built into the system.",
  },
];

function TrendLine() {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      className="w-24 h-8 text-rose-200"
      aria-hidden="true"
    >
      <polyline
        points="0,36 20,28 40,30 60,18 80,14 100,8 120,2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SystemMetricsSection() {
  return (
    <section className="bg-gray-50">
      <SectionWrapper className="py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
          The system
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 max-w-xl">
          Every part of the operation, structured.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <div key={card.title} className="bg-white border border-gray-100 rounded-2xl px-6 py-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-3">
                {card.tag}
              </p>
              <p className="text-sm font-semibold text-gray-900 mb-2">{card.title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{card.body}</p>
              {i === 0 && (
                <div className="mt-4">
                  <TrendLine />
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}

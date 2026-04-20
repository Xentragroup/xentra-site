import SectionWrapper from "./SectionWrapper";

const stages = [
  {
    label: "Attention",
    sub: "TikTok · Instagram · Content",
    desc: "Your content builds visibility. Every post is the top of your funnel.",
  },
  {
    label: "Interest",
    sub: "Profile positioning · Curiosity",
    desc: "A well-positioned profile turns viewers into genuinely curious followers.",
  },
  {
    label: "Conversion",
    sub: "OnlyFans · DMs · Subscribers",
    desc: "Warm audiences convert. We make sure you're set up to capture them.",
  },
  {
    label: "Growth",
    sub: "Retention · Spend · Brand",
    desc: "Subscribers who stay and spend more — this is where income compounds.",
  },
];

function ArrowDown() {
  return (
    <div className="flex justify-center py-2">
      <svg width="20" height="28" viewBox="0 0 20 28" fill="none" aria-hidden="true">
        <line x1="10" y1="0" x2="10" y2="20" stroke="#e5e7eb" strokeWidth="1.5" />
        <polyline points="4,16 10,24 16,16" stroke="#e5e7eb" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="flex items-center px-2 shrink-0">
      <svg width="32" height="20" viewBox="0 0 32 20" fill="none" aria-hidden="true">
        <line x1="0" y1="10" x2="24" y2="10" stroke="#e5e7eb" strokeWidth="1.5" />
        <polyline points="18,4 26,10 18,16" stroke="#e5e7eb" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function FunnelSection() {
  return (
    <section className="bg-gray-50">
      <SectionWrapper className="py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
          The creator funnel
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 max-w-xl">
          Attention becomes income — when it&apos;s structured properly.
        </h2>

        {/* Mobile: vertical */}
        <div className="flex flex-col md:hidden max-w-sm">
          {stages.map((stage, i) => (
            <div key={stage.label}>
              <div className="bg-white border border-gray-100 rounded-2xl px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-1">
                  {stage.label}
                </p>
                <p className="text-sm font-medium text-gray-700 mb-2">{stage.sub}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{stage.desc}</p>
              </div>
              {i < stages.length - 1 && <ArrowDown />}
            </div>
          ))}
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden md:flex items-center">
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex items-center flex-1 min-w-0">
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl px-5 py-6 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-1">
                  {stage.label}
                </p>
                <p className="text-sm font-medium text-gray-700 mb-3">{stage.sub}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{stage.desc}</p>
              </div>
              {i < stages.length - 1 && <ArrowRight />}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}

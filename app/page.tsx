import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "./components/FAQAccordion";

export const metadata: Metadata = {
  title: "Xentra Group — OnlyFans Management Agency",
  description:
    "We help creators turn OnlyFans into real income. No bad agencies, no guessing — just management done correctly.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Xentra Group — OnlyFans Management Agency",
    description:
      "We help creators turn OnlyFans into real income. No bad agencies, no guessing — just management done correctly.",
    url: "/",
    siteName: "Xentra Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xentra Group — OnlyFans Management Agency",
    description:
      "We help creators turn OnlyFans into real income. No bad agencies, no guessing — just management done correctly.",
  },
};

const services = [
  {
    label: "Video & Editing",
    title: "Dedicated editing team — just upload and we handle the rest",
    desc: "Drop your raw content into your dedicated folder and our editing team handles everything: cuts, captions, formatting, and platform-specific posting across TikTok, Instagram, and more.",
  },
  {
    label: "Chat & Sales",
    title: "24/7 fan chat that actually converts",
    desc: "PPV, customs, upsells, and renewals handled around the clock by a team that knows how to make subscribers spend and come back — not just reply.",
  },
  {
    label: "Growth",
    title: "Multi-platform growth that compounds",
    desc: "TikTok, Instagram, Reddit — we identify where your audience lives and build daily content pipelines that grow it consistently over time.",
  },
  {
    label: "Brand",
    title: "A personal brand that makes you unforgettable",
    desc: "Your identity is your competitive moat. We build the positioning, voice, and aesthetic that makes you genuinely distinctive in a saturated market.",
  },
  {
    label: "Retention",
    title: "A retention system that stops silent churn",
    desc: "Most creators lose subscribers and never know why. We build the engagement and loyalty systems that keep your audience renewing month after month.",
  },
  {
    label: "Privacy",
    title: "Content protection and privacy management",
    desc: "Leak takedowns, DMCA management, and a privacy-first approach to every decision we make on your behalf.",
  },
];

const comparison = [
  {
    feature: "Account ownership",
    xentra: "You own everything — always",
    bad: "They control your logins",
    diy: "Full ownership, zero support",
  },
  {
    feature: "Fan chat quality",
    xentra: "Trained team, 24/7",
    bad: "Outsourced, slow, off-brand",
    diy: "Only when you're online",
  },
  {
    feature: "Growth strategy",
    xentra: "Built around your brand",
    bad: "Copy-paste playbook",
    diy: "Figuring it out alone",
  },
  {
    feature: "Personal brand",
    xentra: "Core to everything we do",
    bad: "Ignored entirely",
    diy: "Only if you have the time",
  },
  {
    feature: "Reporting",
    xentra: "Full transparency, always",
    bad: "Vague or non-existent",
    diy: "Whatever you track yourself",
  },
  {
    feature: "Revenue growth",
    xentra: "Structured and compounding",
    bad: "Big promises, poor delivery",
    diy: "Inconsistent and unpredictable",
  },
];

function GrowthChart() {
  // Two paths over 12 months (x: 40→520, y inverted: 0=high income, 160=low income)
  // Without management: slow linear £100→£600
  // With Xentra: compound curve £100→£3,000+
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 560 200"
        className="w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Income growth chart comparing managed vs unmanaged growth over 12 months"
      >
        {/* Grid lines */}
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="40" y1={y} x2="520" y2={y} stroke="#f3f4f6" strokeWidth="1" />
        ))}
        {/* Month markers */}
        {[40, 160, 280, 400, 520].map((x, i) => (
          <line key={x} x1={x} y1="40" x2={x} y2="165" stroke="#f3f4f6" strokeWidth="1" />
        ))}

        {/* Area under Xentra curve */}
        <path
          d="M 40 155 C 150 150 280 120 370 80 C 430 55 470 35 520 18 L 520 165 L 40 165 Z"
          fill="#f43f5e"
          fillOpacity="0.06"
        />
        {/* Without management — dashed gray */}
        <path
          d="M 40 155 L 520 110"
          stroke="#d1d5db"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          fill="none"
        />
        {/* With Xentra — solid rose compound curve */}
        <path
          d="M 40 155 C 150 150 280 120 370 80 C 430 55 470 35 520 18"
          stroke="#f43f5e"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Endpoint dots */}
        <circle cx="520" cy="18" r="4" fill="#f43f5e" />
        <circle cx="520" cy="110" r="4" fill="#d1d5db" />

        {/* Endpoint labels */}
        <text x="526" y="22" fontSize="10" fill="#f43f5e" fontWeight="600">High</text>
        <text x="526" y="114" fontSize="10" fill="#9ca3af">Low</text>

        {/* X-axis labels */}
        <text x="40" y="182" fontSize="9" fill="#9ca3af" textAnchor="middle">Month 1</text>
        <text x="160" y="182" fontSize="9" fill="#9ca3af" textAnchor="middle">Month 3</text>
        <text x="280" y="182" fontSize="9" fill="#9ca3af" textAnchor="middle">Month 6</text>
        <text x="400" y="182" fontSize="9" fill="#9ca3af" textAnchor="middle">Month 9</text>
        <text x="520" y="182" fontSize="9" fill="#9ca3af" textAnchor="middle">Month 12</text>

        {/* Legend */}
        <line x1="40" y1="198" x2="58" y2="198" stroke="#f43f5e" strokeWidth="2" />
        <text x="63" y="201" fontSize="9" fill="#6b7280">With Xentra — structured, compounding</text>
        <line x1="260" y1="198" x2="278" y2="198" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="283" y="201" fontSize="9" fill="#6b7280">Without management</text>
      </svg>
    </div>
  );
}

function WorkflowArrow() {
  return (
    <div className="hidden md:flex items-center justify-center shrink-0 w-8">
      <svg width="28" height="16" viewBox="0 0 28 16" fill="none" aria-hidden="true">
        <line x1="0" y1="8" x2="20" y2="8" stroke="#e5e7eb" strokeWidth="1.5" />
        <polyline points="14,3 21,8 14,13" stroke="#e5e7eb" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function WorkflowArrowDown() {
  return (
    <div className="flex md:hidden justify-center py-1">
      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
        <line x1="8" y1="0" x2="8" y2="16" stroke="#e5e7eb" strokeWidth="1.5" />
        <polyline points="3,12 8,19 13,12" stroke="#e5e7eb" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

const workflowSteps = [
  { who: "You", action: "Upload raw content", sub: "Drop files into your dedicated folder — that's it" },
  { who: "Xentra", action: "Edit & produce", sub: "Cuts, captions, formatting done for you" },
  { who: "Xentra", action: "Post across platforms", sub: "TikTok, Instagram, Reddit — scheduled daily" },
  { who: "Xentra", action: "Convert & maximise", sub: "Chat, PPV, upsells, retention managed 24/7" },
  { who: "Both", action: "Income compounds", sub: "Every month builds on the last" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-5">
            OnlyFans Management Agency
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight max-w-3xl mb-6">
            We turn OnlyFans into{" "}
            <span className="text-rose-500">a business.</span>
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed max-w-xl mb-10">
            Bad agency experience? Same story we hear every week. Management done correctly —
            dedicated editing, posting, chat, growth, and retention. All you do is upload.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/apply"
              className="inline-block bg-rose-500 hover:bg-rose-400 text-white font-medium px-8 py-3.5 rounded-full transition-colors text-sm text-center"
            >
              Apply to work with us
            </Link>
            <a
              href="mailto:admin@xentragroup.co.uk"
              className="inline-block border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-900 font-medium px-8 py-3.5 rounded-full transition-colors text-sm text-center"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-rose-500">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "24/7", label: "Account management" },
              { value: "30-day", label: "Results guarantee" },
              { value: "100%", label: "Creator ownership" },
              { value: "Rev-share", label: "We earn when you earn" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl md:text-3xl font-semibold text-white mb-1">{stat.value}</dt>
                <dd className="text-xs text-rose-200 uppercase tracking-widest">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Just upload callout ── */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-4">
                The simplest part of working with us
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-5 leading-snug">
                All you have to do is upload.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Every creator we work with gets a dedicated content folder. You upload your raw
                footage — our editing team handles the rest. Cuts, captions, formatting, and
                platform-specific posting across TikTok, Instagram, and wherever your audience is.
                No editing skills required. No posting schedule to manage. Just create.
              </p>
              <p className="text-gray-900 font-medium text-sm">
                Your only job is to show up and create content. We do everything else.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  step: "01",
                  title: "You upload raw content",
                  desc: "Drop videos or photos into your dedicated folder — no formatting needed.",
                },
                {
                  step: "02",
                  title: "Our editing team produces it",
                  desc: "Cuts, captions, colour grading, and platform-specific formatting handled for you.",
                },
                {
                  step: "03",
                  title: "We post it across your platforms",
                  desc: "Scheduled and posted to TikTok, Instagram, and other relevant platforms daily.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                  <span className="text-2xl font-light text-rose-200 shrink-0 w-8">{item.step}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Agency-Creator Relationship ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-4">
            The most important part
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-5 max-w-2xl">
            The agency-creator relationship is everything.
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-2xl mb-14">
            Most agencies treat you like a product to be optimised. We work differently — because
            we genuinely believe that a real partnership, built on trust and transparency, is the
            only foundation that produces lasting results. We can&apos;t build your business well
            if we don&apos;t understand you.
          </p>

          {/* Partnership split visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 rounded-3xl overflow-hidden mb-12">
            <div className="bg-rose-50 p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-5">
                You bring
              </p>
              <ul className="space-y-3">
                {[
                  "Your raw content — uploaded to your dedicated folder",
                  "Your personality and authentic voice",
                  "Your existing audience and platform presence",
                  "Your ambition and commitment to growth",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-5">
                We bring
              </p>
              <ul className="space-y-3">
                {[
                  "A dedicated editing team — your raw footage, fully produced",
                  "Daily posting across TikTok, Instagram, and more",
                  "24/7 chat management and revenue maximisation",
                  "Strategy, brand building, and retention systems",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Relationship pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Open communication",
                desc: "Regular check-ins, full reporting, and honest conversations — always. No black boxes.",
              },
              {
                title: "Aligned incentives",
                desc: "Revenue share only. We make money when you make money, which means our success is literally tied to yours.",
              },
              {
                title: "Long-term thinking",
                desc: "We don't optimise for this month at the expense of next year. Everything we do compounds.",
              },
              {
                title: "You stay in control",
                desc: "Your account, your logins, your earnings. We work with you — we never take ownership of anything.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gray-100 rounded-2xl p-6 bg-gray-50">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we do (services) ── */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-4">
            What we do
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-3 max-w-2xl">
            Every lever that drives subscriber income, handled correctly.
          </h2>
          <p className="text-gray-500 mb-12 max-w-xl leading-relaxed">
            You focus on content. We handle the rest — end to end, built around you specifically.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-3">
                  {s.label}
                </p>
                <h3 className="font-semibold text-gray-900 mb-2 leading-snug">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work (workflow diagram) ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-4">
            How we work
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4 max-w-2xl">
            A clear pipeline from content to compounding income.
          </h2>
          <p className="text-gray-500 mb-14 max-w-xl leading-relaxed">
            This is how a managed account runs — every stage intentional, every output feeding the next.
          </p>

          {/* Flow diagram */}
          <div className="flex flex-col md:flex-row md:items-start">
            {workflowSteps.map((step, i) => (
              <div key={step.action} className="flex flex-col md:flex-row md:items-start flex-1 min-w-0">
                <div className="flex flex-col items-center md:items-start flex-1 min-w-0">
                  <div className={`w-full rounded-2xl p-5 border ${
                    step.who === "You"
                      ? "bg-rose-50 border-rose-100"
                      : step.who === "Both"
                      ? "bg-gray-900 border-gray-800"
                      : "bg-white border-gray-100 shadow-sm"
                  }`}>
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${
                      step.who === "You"
                        ? "text-rose-500"
                        : step.who === "Both"
                        ? "text-rose-400"
                        : "text-gray-400"
                    }`}>
                      {step.who === "Both" ? "Together" : step.who}
                    </p>
                    <p className={`font-semibold text-sm leading-snug mb-1 ${
                      step.who === "Both" ? "text-white" : "text-gray-900"
                    }`}>
                      {step.action}
                    </p>
                    <p className={`text-xs leading-relaxed ${
                      step.who === "Both" ? "text-gray-400" : "text-gray-500"
                    }`}>
                      {step.sub}
                    </p>
                  </div>
                  {i < workflowSteps.length - 1 && <WorkflowArrowDown />}
                </div>
                {i < workflowSteps.length - 1 && <WorkflowArrow />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Growth chart ── */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-4">
                Why structure matters
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-5">
                Unmanaged accounts plateau. Managed accounts compound.
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                The difference isn&apos;t luck or content quality alone — it&apos;s the system
                behind the account. Retention, revenue per subscriber, and consistent
                growth all compound over time when they&apos;re managed correctly.
              </p>
              <ul className="space-y-3">
                {[
                  "Retention reduces subscriber churn each month",
                  "Better chat converts more followers to paying fans",
                  "Consistent posting builds a compounding audience",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-3 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Income trajectory — 12 months (illustrative)
              </p>
              <GrowthChart />
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-4">
            How we compare
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4 max-w-xl">
            Not all management is the same.
          </h2>
          <p className="text-gray-500 mb-12 max-w-xl leading-relaxed">
            The difference between agencies that compound your income and ones that waste your time is in the details.
          </p>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm min-w-150">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="text-left py-4 pr-6 text-gray-400 font-medium w-1/4" />
                  <th className="text-left py-4 px-6 w-1/4">
                    <span className="inline-block bg-rose-50 text-rose-600 font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                      Xentra Group
                    </span>
                  </th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium w-1/4">
                    Bad agency
                  </th>
                  <th className="text-left py-4 pl-6 text-gray-400 font-medium w-1/4">
                    Going alone
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {comparison.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 pr-6 text-gray-500 font-medium text-xs uppercase tracking-wide">{row.feature}</td>
                    <td className="py-4 px-6 text-gray-900 font-medium">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                        {row.xentra}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-400">{row.bad}</td>
                    <td className="py-4 pl-6 text-gray-400">{row.diy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Guarantee ── */}
      <section className="bg-rose-500">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-rose-200 mb-3">
                Our guarantee
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3 max-w-lg leading-snug">
                Make more in your first 30 days than your best month ever.
                Or we work for free until you do.
              </h2>
              <p className="text-rose-100 leading-relaxed max-w-lg text-sm">
                We&apos;re confident enough in our approach to put this in writing. If we don&apos;t deliver, you don&apos;t pay.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/apply"
                className="inline-block bg-white hover:bg-rose-50 text-rose-600 font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
              >
                Apply now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-4">
                FAQs
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Questions we hear a lot.
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                If yours isn&apos;t here, just email us at{" "}
                <a href="mailto:admin@xentragroup.co.uk" className="text-rose-500 hover:underline">
                  admin@xentragroup.co.uk
                </a>
              </p>
            </div>
            <div className="md:col-span-3">
              <FAQAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-6">
            Ready to grow?
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6 max-w-2xl mx-auto leading-tight">
            We only take on a small number of creators at a time.
          </h2>
          <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
            If you&apos;re serious about building real, consistent income from your OnlyFans account, reach out now.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-rose-500 hover:bg-rose-400 text-white font-medium px-10 py-4 rounded-full transition-colors text-base"
          >
            Apply to work with us
          </Link>
        </div>
      </section>
    </>
  );
}

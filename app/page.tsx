import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "./components/FAQAccordion";

export const metadata: Metadata = {
  title: "Xentra Group — OnlyFans Management Agency",
  description:
    "We help creators turn OnlyFans into real income. No bad agencies, no guessing — just structure, consistency, and growth.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Xentra Group — OnlyFans Management Agency",
    description:
      "We help creators turn OnlyFans into real income. No bad agencies, no guessing — just structure, consistency, and growth.",
    url: "/",
    siteName: "Xentra Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xentra Group — OnlyFans Management Agency",
    description:
      "We help creators turn OnlyFans into real income. No bad agencies, no guessing — just structure, consistency, and growth.",
  },
};

const services = [
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
            We build OnlyFans{" "}
            <span className="text-rose-500">businesses.</span>
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed max-w-xl mb-10">
            Bad agency experience? Same story we hear every week. Full management done right —
            strategy, brand, chat, growth, and retention all working together.
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
              { value: "Rev-share", label: "We only earn when you do" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl md:text-3xl font-semibold text-white mb-1">{stat.value}</dt>
                <dd className="text-xs text-rose-200 uppercase tracking-widest">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-4">
            What we do
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-3 max-w-2xl">
            Everything that drives subscriber income, handled.
          </h2>
          <p className="text-gray-500 mb-12 max-w-xl leading-relaxed">
            You focus on content. We handle the rest — end to end, built around you.
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

      {/* ── The problem ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-4">
                The reality
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
                Most creators are doing this alone — and it shows.
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Income fluctuates with no clear reason. Bad agencies promise big, take their cut,
                and disappear. Without structure, growth is almost impossible — there&apos;s no
                roadmap, no system, no one genuinely in your corner.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  heading: "Inconsistent income",
                  body: "You post, you hope, you wait. Month to month has no pattern and no clear lever to pull.",
                },
                {
                  heading: "Agencies that over-promise",
                  body: "Big pitch, low effort. Most agencies manage dozens of creators on autopilot and deliver almost nothing.",
                },
                {
                  heading: "No system, no scale",
                  body: "Managing content, messages, strategy, and brand alone isn't sustainable — something always slips.",
                },
              ].map((item) => (
                <div key={item.heading} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-rose-400 shrink-0 mt-2" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{item.heading}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-12 max-w-xl">
            Three steps to getting started.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Apply",
                desc: "Send us a message so we can understand where you are and what you're working towards. No hard sell.",
              },
              {
                step: "02",
                title: "Onboard",
                desc: "If we're a good fit, we set everything up properly from day one — strategy, systems, and access sorted.",
              },
              {
                step: "03",
                title: "Scale",
                desc: "With structure in place, we grow your income consistently. No guessing, no luck, no waiting around.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <p className="text-5xl font-light text-rose-100 mb-6">{item.step}</p>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
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

      {/* ── Why Xentra ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-4">
            Why Xentra Group
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-12 max-w-xl">
            Most agencies treat creators like numbers.<br />We don&apos;t.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden">
            {[
              {
                title: "Small, focused roster",
                desc: "We work with a deliberately small number of creators so every account gets real hands-on attention — not a template run on autopilot.",
              },
              {
                title: "Revenue share only",
                desc: "No upfront fees. No monthly retainers. We make money when you make money — our incentives are completely aligned with yours.",
              },
              {
                title: "Built around you",
                desc: "We don't use copy-paste strategies. Every creator gets a system built around who they actually are and where they want to go.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8">
                <h3 className="font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
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

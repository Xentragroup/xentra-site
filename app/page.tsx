import SectionWrapper from "./components/SectionWrapper";
import FunnelSection from "./components/FunnelSection";
import ScaleSystemSection from "./components/ScaleSystemSection";
import SystemMetricsSection from "./components/SystemMetricsSection";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50">
        <SectionWrapper className="py-28 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 leading-tight max-w-2xl mx-auto">
            We help creators turn OnlyFans into real income
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            No guessing. No bad agencies. Just structure, consistency, and growth.
          </p>
          <div className="mt-10">
            <a
              href="mailto:admin@xentragroup.co.uk"
              className="inline-block bg-rose-400 hover:bg-rose-500 text-white font-medium px-9 py-4 rounded-full transition-colors text-base"
            >
              Apply to work with us
            </a>
          </div>
        </SectionWrapper>
      </section>

      {/* Trust */}
      <SectionWrapper className="py-20">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            "We work closely with a small number of creators",
            "We focus on long-term income, not quick wins",
            "Everything is built around you, not a template",
          ].map((item) => (
            <li key={item} className="text-gray-600 leading-relaxed text-base">
              {item}
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      {/* Problem */}
      <SectionWrapper className="py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
            The reality
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">
            Most creators are doing this alone — and it shows.
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Income fluctuates month to month with no clear reason why. You
              post, you hope, and you wait.
            </p>
            <p>
              Bad agencies promise the world, take their cut, and disappear.
              You&apos;re left worse off than before.
            </p>
            <p>
              Without structure, it&apos;s almost impossible to grow
              consistently — there&apos;s no roadmap, no system, no one in your
              corner.
            </p>
            <p>
              You&apos;re managing content, messages, strategy, and brand all at
              once. That&apos;s not sustainable.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      {/* What We Do */}
      <SectionWrapper className="py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
            What we do
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">
            We handle the business side. You focus on content.
          </h2>
          <ul className="space-y-4 text-gray-600 leading-relaxed">
            {[
              "We manage your messages",
              "We maximise your earnings",
              "We build your personal brand",
              "We handle strategy and growth",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-300 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-gray-800 font-medium">
            You focus on content. We handle everything else.
          </p>
        </div>
      </SectionWrapper>

      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      {/* How It Works */}
      <SectionWrapper className="py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
          How it works
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12">
          Three steps to getting started
        </h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              step: "01",
              title: "Apply to work with us",
              desc: "Send us a quick email so we can learn about where you are and what you're working towards.",
            },
            {
              step: "02",
              title: "We review and onboard you",
              desc: "If we're a good fit, we'll go through our onboarding process and set up everything properly from day one.",
            },
            {
              step: "03",
              title: "We scale your account",
              desc: "With systems in place, we grow your income in a structured, sustainable way.",
            },
          ].map(({ step, title, desc }) => (
            <li key={step} className="space-y-3">
              <p className="text-3xl font-light text-gray-200">{step}</p>
              <p className="font-semibold text-gray-900">{title}</p>
              <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
            </li>
          ))}
        </ol>
      </SectionWrapper>

      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      {/* Why Xentra */}
      <SectionWrapper className="py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
            Why Xentra Group
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">
            Most agencies treat creators like numbers.
            <br />
            We build systems around individuals.
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              We&apos;re a small, focused team. We don&apos;t take on hundreds
              of creators and leave them to run on autopilot.
            </p>
            <p>
              Every creator we work with gets a hands-on, structured approach
              built around their specific account, audience, and goals.
            </p>
            <p>
              We&apos;re not a generic agency. We don&apos;t use copy-paste
              strategies. We build properly.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Funnel Visual */}
      <FunnelSection />

      {/* How We Scale System */}
      <ScaleSystemSection />

      {/* System / Metrics Grid */}
      <SystemMetricsSection />

      {/* Final CTA */}
      <section className="bg-white">
        <SectionWrapper className="py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
            Ready to take this seriously?
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
            We only work with a small number of creators at a time. If
            you&apos;re ready to grow properly, reach out.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-rose-400 hover:bg-rose-500 text-white font-medium px-9 py-4 rounded-full transition-colors text-base"
          >
            Apply now
          </Link>
        </SectionWrapper>
      </section>
    </>
  );
}

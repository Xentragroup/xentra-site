import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "Best Fanvue Agency — What to Look For and What to Avoid",
  description:
    "How do you find the best Fanvue agency? The same principles that apply to OnlyFans agencies apply here — with some platform-specific differences worth knowing.",
  alternates: { canonical: "/best-fanvue-agency" },
  openGraph: {
    title: "Best Fanvue Agency — What to Look For and What to Avoid",
    description:
      "How do you find the best Fanvue agency? The same principles that apply to OnlyFans agencies apply here — with some platform-specific differences worth knowing.",
    url: "/best-fanvue-agency",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fanvue Agency — What to Look For and What to Avoid",
    description:
      "How do you find the best Fanvue agency? The same principles that apply to OnlyFans agencies apply here — with some platform-specific differences worth knowing.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>Best Fanvue Agency</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          Best Fanvue agency — how to evaluate management options for Fanvue creators
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            The Fanvue management space is smaller and less saturated than the
            OnlyFans equivalent — which means there are fewer agencies to choose
            from, but also fewer bad actors. That said, the evaluation criteria
            are largely the same.
          </p>
          <p>
            This is a guide to finding the best management option if you are
            building on Fanvue, including what platform-specific knowledge actually
            matters and what to ask any agency you consider.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          Does Fanvue require a Fanvue-specialist agency?
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            The core of creator management — message handling, account strategy,
            subscriber retention, external traffic building — does not fundamentally
            change by platform. The mechanics of subscriber monetisation are
            similar across Fanvue and OnlyFans, and the social media funnel that
            drives growth is identical.
          </p>
          <p>
            What you want is an agency with genuine experience on subscription
            content platforms and an understanding of Fanvue&apos;s specific
            features — the revenue share structure, the AI tools, how the platform
            handles content differently from OnlyFans. That knowledge matters, but
            it does not require an agency that only works on Fanvue.
          </p>
          <p>
            An agency experienced across both platforms often brings useful
            comparative knowledge — understanding what works on each and why, and
            how to position your presence across both if that is where you want
            to be.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What to look for in a Fanvue agency
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Platform familiarity, not just marketing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ask any agency you consider whether they have worked with Fanvue
              creators specifically. If they can only speak generally about
              &ldquo;subscription platforms&rdquo; without specific Fanvue knowledge,
              they are likely adapting their OnlyFans playbook without platform-specific
              thought. That may work, but it is worth knowing.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              A realistic view of Fanvue&apos;s audience size
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Fanvue has a smaller subscriber base than OnlyFans. An agency that
              projects OnlyFans-level growth timelines onto a Fanvue account without
              accounting for this is either uninformed or overpromising. Realistic
              expectations based on actual platform data are a sign of an agency
              that knows what they are talking about.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              The same transparency and process standards as any other agency
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Clear commission structures, documented process, honest onboarding,
              and exit terms that protect you — these standards apply regardless of
              platform. A Fanvue agency that cannot meet these basic criteria is not
              worth working with, regardless of their platform-specific knowledge.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          How Xentra Group works with Fanvue creators
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            We work with creators on Fanvue, OnlyFans, and across both platforms.
            Our approach to management is platform-informed but not platform-limited —
            the fundamentals of message management, growth strategy, and income
            optimisation transfer across subscription platforms, with adjustments
            made for what each platform does differently.
          </p>
          <p>
            We are a UK-based agency, operated by CoachFlo Ltd. We work with a small
            number of creators at a time and do not take on anyone we cannot
            genuinely help.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Building on Fanvue and want proper support?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below — we&apos;ll review your situation and let you know
            if we think we can help.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-rose-400 hover:bg-rose-500 text-white font-medium px-8 py-3.5 rounded-full transition-colors text-sm"
          >
            Apply to work with us
          </Link>
        </div>

      </div>
    </SectionWrapper>
  );
}

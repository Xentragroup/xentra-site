import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "How to Scale OnlyFans Income — Moving From Consistent to Growing",
  description:
    "How do you scale OnlyFans income beyond a plateau? A breakdown of the levers that increase earnings at scale — and why scaling requires different thinking than getting started.",
  alternates: { canonical: "/how-to-scale-onlyfans-income" },
  openGraph: {
    title: "How to Scale OnlyFans Income — Moving From Consistent to Growing",
    description:
      "How do you scale OnlyFans income beyond a plateau? A breakdown of the levers that increase earnings at scale — and why scaling requires different thinking than getting started.",
    url: "/how-to-scale-onlyfans-income",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Scale OnlyFans Income — Moving From Consistent to Growing",
    description:
      "How do you scale OnlyFans income beyond a plateau? A breakdown of the levers that increase earnings at scale — and why scaling requires different thinking than getting started.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>How to Scale OnlyFans Income</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          How to scale OnlyFans income — moving from consistent to genuinely growing
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Scaling OnlyFans income requires different thinking from getting started.
            The actions that get you to £500/month are not the same as the actions
            that get you to £2,000/month or beyond. Understanding what scaling
            actually means — and which levers produce genuine income growth at this
            stage — is the critical question for creators who have built a foundation
            and want to push further.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          The difference between growing and scaling
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Growing means adding subscribers. Scaling means increasing income
            disproportionately to the effort you put in. A creator who doubles
            their subscriber count is growing. A creator who increases revenue
            per subscriber from £15 to £35 without adding new subscribers is scaling.
          </p>
          <p>
            True income scaling on OnlyFans comes from a combination of both —
            continued subscriber acquisition plus improving how efficiently the
            existing subscriber base is monetised. Both matter, but at the scaling
            stage, optimising per-subscriber revenue is often the higher-leverage
            activity.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          The key levers for scaling income
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Improving message management quality
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The most direct lever for increasing per-subscriber revenue is better
              message management. A systematic approach to DM engagement — knowing
              which subscribers are high-value, how to structure PPV offers, how to
              build subscriber relationships that produce long-term spending — can
              double per-subscriber revenue without adding a single new subscriber.
              This is the most underutilised scaling lever available to most creators.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Accelerating the subscriber acquisition funnel
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At the scaling stage, doubling TikTok posting frequency, improving
              content quality, or experimenting with new content formats can
              accelerate audience growth significantly. Creators who have been
              posting three times a week and moving to daily typically see
              subscriber acquisition increase substantially, because the platform
              rewards the increased consistency with more distribution.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Raising your subscription price
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Creators who have built a genuine audience and strong subscriber
              retention can often increase their subscription price. The conversion
              rate drops slightly, but the revenue per subscriber increases. If
              retention is strong, this can produce a net revenue increase even
              with fewer new subscribers converting at the higher price.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Developing high-value content tiers
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Custom content, premium PPV campaigns, exclusive experiences —
              developing a range of high-value offerings that your most engaged
              subscribers can access creates significant revenue from a small
              portion of your subscriber base. The 20 percent of subscribers who
              spend 80 percent of the money deserve the most attention and the
              most tailored offers.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Ready to scale properly?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below — we build the message management and strategy that scales income.
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

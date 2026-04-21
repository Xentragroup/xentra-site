import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "How Much Can You Make on OnlyFans? Realistic Earnings Breakdown",
  description:
    "How much do OnlyFans creators actually make? A realistic breakdown of earnings ranges, what affects income, and what it takes to reach different income levels.",
  alternates: { canonical: "/how-much-can-you-make-on-onlyfans" },
  openGraph: {
    title: "How Much Can You Make on OnlyFans? Realistic Earnings Breakdown",
    description:
      "How much do OnlyFans creators actually make? A realistic breakdown of earnings ranges, what affects income, and what it takes to reach different income levels.",
    url: "/how-much-can-you-make-on-onlyfans",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Can You Make on OnlyFans? Realistic Earnings Breakdown",
    description:
      "How much do OnlyFans creators actually make? A realistic breakdown of earnings ranges, what affects income, and what it takes to reach different income levels.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>How Much Can You Make on OnlyFans</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          How much can you make on OnlyFans — a realistic breakdown
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            The income figures that circulate about OnlyFans are almost entirely
            misleading — either the extreme high end (the top 0.1 percent of
            creators) or the absolute minimum (accounts with no subscribers at all).
            Neither is useful for understanding what is actually achievable.
          </p>
          <p>
            This is a realistic breakdown of what creators at different stages
            actually earn, what factors determine where you land, and what it
            takes to move between levels.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          The realistic earnings spectrum
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            The majority of active OnlyFans creators — those posting consistently
            and doing some form of promotion — earn between £100 and £500 per month.
            This is the reality for most accounts in the first six to twelve months.
          </p>
          <p>
            Creators who have been building consistently for a year or more, with
            active social media funnels and proper account management, typically
            earn between £1,000 and £5,000 per month. This is achievable for a
            significant number of creators, but it requires the right structure and
            sustained effort.
          </p>
          <p>
            Earnings above £5,000 per month exist but require either a large
            existing social media following, significant investment in growth, or
            the kind of compound growth that comes from doing everything right for
            two or more years. These incomes are real — but they are not the
            starting point.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What determines your income level
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Subscriber count
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Subscriber count is the most obvious driver of income — more subscribers
              means more subscription revenue. But it is far from the only one.
              A creator with 200 highly engaged subscribers generating strong PPV
              revenue can earn more than a creator with 500 disengaged subscribers
              who never spend beyond the base subscription.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Revenue per subscriber
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This is determined by message management quality, PPV strategy, tip
              campaigns, and the subscriber relationships you build. Professional
              management significantly increases revenue per subscriber — which is
              why agency-managed accounts at the same subscriber count often earn
              meaningfully more than self-managed ones.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Subscription price
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Higher subscription prices generate more revenue per subscriber but
              reduce conversion rates. The right pricing depends on your niche,
              content quality, and the size and temperature of the audience you
              are converting. Getting this calibrated correctly significantly affects
              total income.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Consistency and retention
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Income compounds when subscribers stay. A creator with a monthly
              churn rate of five percent retains 95 percent of their base each
              month — which means growth accumulates. A creator with 30 percent
              monthly churn is perpetually rebuilding. Retention is one of the
              most significant income multipliers available, and it is almost
              entirely within the creator&apos;s control.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Want to maximise what your account actually earns?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below — we build the strategy and management that moves your income upward.
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

import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "OnlyFans Income Realistic — What Creators Actually Earn vs What's Advertised",
  description:
    "What is realistic OnlyFans income? The gap between advertised earnings and typical earnings — and what it actually takes to reach meaningful income on the platform.",
  alternates: { canonical: "/onlyfans-income-realistic" },
  openGraph: {
    title: "OnlyFans Income Realistic — What Creators Actually Earn vs What's Advertised",
    description:
      "What is realistic OnlyFans income? The gap between advertised earnings and typical earnings — and what it actually takes to reach meaningful income on the platform.",
    url: "/onlyfans-income-realistic",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyFans Income Realistic — What Creators Actually Earn vs What's Advertised",
    description:
      "What is realistic OnlyFans income? The gap between advertised earnings and typical earnings — and what it actually takes to reach meaningful income on the platform.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>OnlyFans Income Realistic</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          OnlyFans income — realistic expectations versus what gets advertised
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            The income figures that circulate about OnlyFans come almost exclusively
            from two sources: top-1-percent creators with millions of social media
            followers, and agencies trying to recruit creators. Neither is a useful
            reference point for understanding what a real creator in a normal
            position can realistically build.
          </p>
          <p>
            This is an honest attempt to close that gap — what income actually looks
            like across different stages of creator development, and what it takes
            to reach different levels.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          The income reality most creators experience
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            The median active OnlyFans creator earns somewhere between £100 and
            £300 per month. This is not failure — it is the natural distribution
            of any platform where the top end is highly visible and the middle is
            not. Most active creators who are consistently posting and promoting
            earn in this range.
          </p>
          <p>
            Creators who are doing the right things — consistent social media,
            active message management, strong retention — can realistically build
            to £500–£2,000 per month within the first year. This requires real
            effort and the right approach, but it is absolutely achievable for
            a creator who treats it seriously.
          </p>
          <p>
            Earnings above £2,000 per month are real but typically require either
            an existing large social media following, professional management
            significantly increasing per-subscriber revenue, or twelve or more
            months of compound growth. These incomes exist — but they are the
            result of sustained, strategic effort, not a starting position.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What determines your realistic ceiling
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Social media audience size and quality
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your social media following is the primary determinant of subscriber
              acquisition rate. A creator with 50,000 engaged TikTok followers
              has a fundamentally different growth ceiling than one with 2,000.
              The ceiling is not fixed — it grows as your social media grows — but
              it is the most important single variable.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Revenue per subscriber
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Income is subscriber count multiplied by revenue per subscriber.
              A creator earning £8 per subscriber monthly earns £800 at 100
              subscribers. A creator earning £30 per subscriber monthly (through
              active PPV and strong message management) earns £3,000 at 100
              subscribers. The ceiling from the same subscriber count is very
              different depending on how well the account is monetised.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Retention rate
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Income that compounds requires subscribers who stay. Accounts with
              high churn rates perpetually reset — gaining and losing subscribers
              rather than accumulating them. The income ceiling for a high-churn
              account is much lower than for an account where the subscriber base
              genuinely grows over time.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Want to reach the realistic upper end of what your account can do?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below. We build the strategy and management that maximises what your account produces.
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

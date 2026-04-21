import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "How Much Do Beginners Make on OnlyFans? Realistic First-Year Earnings",
  description:
    "What do OnlyFans beginners actually earn? Realistic earnings expectations for new creators — the first month, the first year, and what determines where you land.",
  alternates: { canonical: "/how-much-do-beginners-make-on-onlyfans" },
  openGraph: {
    title: "How Much Do Beginners Make on OnlyFans? Realistic First-Year Earnings",
    description:
      "What do OnlyFans beginners actually earn? Realistic earnings expectations for new creators — the first month, the first year, and what determines where you land.",
    url: "/how-much-do-beginners-make-on-onlyfans",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Do Beginners Make on OnlyFans? Realistic First-Year Earnings",
    description:
      "What do OnlyFans beginners actually earn? Realistic earnings expectations for new creators — the first month, the first year, and what determines where you land.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>How Much Do Beginners Make on OnlyFans</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          How much do beginners make on OnlyFans — realistic expectations for your first year
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            The income figures most commonly associated with OnlyFans — the creators
            earning five or six figures a month — are not representative of what
            beginners make. Understanding the realistic earnings arc for a new
            creator helps you plan properly and avoids the disappointment that
            causes most people to quit before the compound growth kicks in.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          What most beginners earn in the first few months
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Honestly: very little. The first one to three months for most new
            creators produces minimal income — often under £100 per month, sometimes
            nothing. This is not a failure. It is what building an audience from
            zero looks like. The traffic from social media that drives subscribers
            takes time to build, and a new account has no subscriber base to
            monetise yet.
          </p>
          <p>
            This is the period that separates creators who eventually succeed from
            those who do not. Quitting in month two because income is low is quitting
            before the audience has been built. Most creators who see meaningful
            income did so after months of consistent effort with minimal reward.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          The realistic first-year earnings arc
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Months 1–3: audience building phase
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For most creators, earnings in this period are between £0 and £200
              per month. The focus should be on building social media audiences
              and establishing posting consistency, not on optimising income.
              This phase is an investment in the foundation, not a revenue period.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Months 4–6: early growth phase
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With consistent social media growth, this period typically sees
              earnings move to £200–£600 per month. The subscriber base is small
              but growing. The habits are established. Revenue is starting to
              reflect the work put in during months one through three.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Months 7–12: momentum phase
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Creators who have been consistent for six months typically see
              meaningful income in this period — somewhere between £500 and
              £2,000 per month, depending on how effectively their social media
              funnel has been built and how well their message management and
              retention is performing. This is where the compound effect starts
              to show up.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          What determines where you land on the range
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Social media growth rate is the single biggest variable. Creators who
            build a TikTok following of several thousand in the first three months
            will see subscriber acquisition rates that produce much higher earnings
            in months four through twelve than those whose social media grows slowly.
          </p>
          <p>
            Message management is the second biggest variable. Creators who
            actively engage subscribers in DMs and run PPV campaigns earn significantly
            more per subscriber than those who post content and let DMs sit idle.
            Professional management consistently produces higher per-subscriber revenue.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Want to land at the top of the range, not the bottom?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below. We help new creators build the structure that produces
            meaningful income.
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

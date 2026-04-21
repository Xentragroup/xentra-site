import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "OnlyFans Earnings Beginner — What New Creators Actually Make",
  description:
    "What do beginner OnlyFans creators actually earn? Realistic earnings data for new accounts, the factors that most affect early income, and how to maximise your starting position.",
  alternates: { canonical: "/onlyfans-earnings-beginner" },
  openGraph: {
    title: "OnlyFans Earnings Beginner — What New Creators Actually Make",
    description:
      "What do beginner OnlyFans creators actually earn? Realistic earnings data for new accounts, the factors that most affect early income, and how to maximise your starting position.",
    url: "/onlyfans-earnings-beginner",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyFans Earnings Beginner — What New Creators Actually Make",
    description:
      "What do beginner OnlyFans creators actually earn? Realistic earnings data for new accounts, the factors that most affect early income, and how to maximise your starting position.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>OnlyFans Earnings Beginner</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          OnlyFans earnings for beginners — what new creators realistically make
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Earnings data for OnlyFans is widely reported incorrectly. The median
            creator earnings are much lower than headlines suggest, and the gap
            between top earners and everyone else is enormous. For a beginner,
            understanding the realistic earnings landscape is more useful than
            headline figures that do not reflect your starting position.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          The realistic earnings picture for new creators
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            The average active OnlyFans creator — one who is posting consistently
            and doing some promotion — earns somewhere between £100 and £500 per
            month. The majority of this comes from subscription revenue, with a
            smaller portion from PPV content and tips.
          </p>
          <p>
            For a beginner in the first three months, earnings are typically at
            the lower end of this range or below it. This is because the subscriber
            base is still being built and the social media audience that drives
            subscribers is still growing. The income at this stage is not reflective
            of the eventual income — it is the cost of building the foundation.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          Factors that most affect beginner earnings
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Whether you have an existing social media following
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A beginner with an existing TikTok or Instagram following of several
              thousand engaged followers can launch to significantly higher early
              earnings than one starting from zero. The social media audience is
              the starting subscriber pipeline. More audience equals faster early
              growth. This is the single biggest variable in beginner earnings.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              How quickly your TikTok grows
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For creators starting from zero social media, the rate at which
              TikTok grows determines the rate at which subscriber acquisition
              accelerates. Creators who post daily and grow TikTok quickly
              see earnings increase faster than those who post sporadically
              and grow slowly.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              How actively you engage subscribers in DMs
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Early-stage revenue per subscriber is heavily influenced by DM
              engagement. A creator with 30 subscribers who actively messages
              and runs PPV can earn more than a creator with 50 subscribers who
              does not. PPV revenue in the early stage often exceeds subscription
              revenue — and it is almost entirely driven by how well you manage
              your DMs.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          How earnings typically develop over the first year
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Month 1–3: £0–£200. Building phase. Low subscriber count, low income.
            This is normal.
          </p>
          <p>
            Month 4–6: £200–£800. Social media is building, subscriber base growing.
            PPV revenue starting to appear with active DM management.
          </p>
          <p>
            Month 7–12: £500–£2,000+. For creators who have been consistent,
            the compound effect of a growing social media presence and a growing
            subscriber base with improving retention starts to show.
          </p>
          <p>
            Professional management at any stage of this arc typically increases
            income by 30 to 100 percent through improved message management and
            more effective growth strategy.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Ready to build the structure that maximises your earnings?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below — we help new creators build income that compounds.
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

import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "OnlyFans Agency Glasgow — UK Management for Scottish Creators",
  description:
    "Looking for an OnlyFans agency in Glasgow or Scotland? Xentra Group works with creators across Scotland and the UK. Remote-first management that works wherever you are.",
  alternates: { canonical: "/onlyfans-agency-glasgow" },
  openGraph: {
    title: "OnlyFans Agency Glasgow — UK Management for Scottish Creators",
    description:
      "Looking for an OnlyFans agency in Glasgow or Scotland? Xentra Group works with creators across Scotland and the UK. Remote-first management that works wherever you are.",
    url: "/onlyfans-agency-glasgow",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyFans Agency Glasgow — UK Management for Scottish Creators",
    description:
      "Looking for an OnlyFans agency in Glasgow or Scotland? Xentra Group works with creators across Scotland and the UK. Remote-first management that works wherever you are.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>OnlyFans Agency Glasgow</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          OnlyFans agency Glasgow — what creator management looks like for Scottish creators
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Scottish creators on OnlyFans face the same fundamental challenges as
            creators anywhere in the UK — a platform that does not surface content
            to new audiences, a competitive market that rewards structure and
            strategy, and the time pressure of managing everything alongside content
            creation.
          </p>
          <p>
            Xentra Group works with creators across Scotland and the UK. We are
            UK-based, operated by CoachFlo Ltd, and fully remote — Glasgow-based
            creators receive the same management quality as those in London or
            anywhere else in the UK.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          The Scotland creator market
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Scotland has an active and growing creator community, particularly in
            Glasgow and Edinburgh. Scottish creators often have a distinct and
            compelling identity that resonates well with both UK and international
            audiences — an asset worth building on strategically.
          </p>
          <p>
            The challenges are familiar: building the social media presence that
            drives subscribers, managing the time demands of a properly run OnlyFans
            account, and putting the strategic structure in place that turns a
            reasonable income into a sustainable one. These are not Scotland-specific
            problems — they are universal, and the solutions are the same regardless
            of location.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What management looks like for Glasgow and Scotland creators
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Building a subscriber acquisition funnel
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We build the TikTok and Instagram presence that drives consistent
              subscriber growth — strategy, content planning, and funnel optimisation
              all included as part of full management.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Professional message management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Subscriber DMs handled properly — genuine engagement, PPV campaigns,
              and the relationship-building that produces retention and consistent
              monthly revenue.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Account strategy and income growth
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Strategy built around your account, updated based on performance
              data, and focused on building income that is sustainable rather
              than dependent on constant promotional activity.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Based in Glasgow or Scotland and ready to grow?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We work with creators across Scotland and the UK. Apply below.
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

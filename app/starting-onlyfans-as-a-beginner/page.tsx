import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "Starting OnlyFans as a Beginner — The Mindset and First Steps That Matter",
  description:
    "Starting OnlyFans as a beginner? What actually matters in the first three months — mindset, consistency, the right foundations — and what most beginners get wrong.",
  alternates: { canonical: "/starting-onlyfans-as-a-beginner" },
  openGraph: {
    title: "Starting OnlyFans as a Beginner — The Mindset and First Steps That Matter",
    description:
      "Starting OnlyFans as a beginner? What actually matters in the first three months — mindset, consistency, the right foundations — and what most beginners get wrong.",
    url: "/starting-onlyfans-as-a-beginner",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Starting OnlyFans as a Beginner — The Mindset and First Steps That Matter",
    description:
      "Starting OnlyFans as a beginner? What actually matters in the first three months — mindset, consistency, the right foundations — and what most beginners get wrong.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>Starting OnlyFans as a Beginner</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          Starting OnlyFans as a beginner — what actually matters in the first months
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Most beginners approach OnlyFans the same way — create an account, post
            some content, wait for subscribers. When they do not come quickly,
            frustration sets in and many quit. The problem is not the platform.
            It is the expectation and the approach.
          </p>
          <p>
            This is a guide to what actually matters in the first three to six months
            as a beginner — the foundations that produce growth over time, and the
            mistakes that prevent it.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          The most important thing beginners get wrong
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            The most common beginner mistake is focusing entirely on OnlyFans while
            neglecting the social media presence that brings people to it. OnlyFans
            has no discovery mechanism — it does not show your content to new
            audiences. Every subscriber has to come from somewhere else.
          </p>
          <p>
            Beginners who spend all their energy creating OnlyFans content and none
            building a TikTok or Instagram following are putting effort into the
            destination without building any roads to it. The social media work is
            not secondary — for a new creator, it is the primary job.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What the first three months should look like
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Build social media first, OnlyFans second
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Spend at least as much time building your TikTok or Instagram as
              you do creating OnlyFans content. Post daily on TikTok if you can.
              Build familiarity. Get into the habit of showing up consistently
              on social media before you need subscribers to generate income.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Post consistently, even when it feels pointless
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The first month of consistent posting almost always feels invisible.
              Low subscriber counts, low engagement, minimal income. This is normal
              and temporary. The creators who push through it — posting consistently
              for three to six months — are the ones who see compounding growth
              afterwards. Quitting at month one is quitting just before things
              start moving.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Engage with every subscriber you get
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Early subscribers are valuable precisely because you can give them
              genuine attention. Message every new subscriber. Build real engagement
              from the start. The subscriber relationships you build in the first
              50 subscribers are often the most loyal ones you will ever have —
              and they will tell others about you.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Do not optimise too early
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Many beginners spend more time adjusting pricing, tweaking profile
              copy, and reading about strategy than they spend creating content
              and posting on social media. In the first three months, the most
              important thing is output and consistency, not optimisation.
              Optimise once you have data. Create until you do.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Starting out and want to build correctly from day one?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below. We work with early-stage creators who are serious and consistent.
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

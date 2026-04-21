import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "OnlyFans Marketing Strategy — A Framework for Sustainable Growth",
  description:
    "What does a real OnlyFans marketing strategy look like? A complete framework covering the funnel, social media, conversion, and retention — built for sustainable income growth.",
  alternates: { canonical: "/onlyfans-marketing-strategy" },
  openGraph: {
    title: "OnlyFans Marketing Strategy — A Framework for Sustainable Growth",
    description:
      "What does a real OnlyFans marketing strategy look like? A complete framework covering the funnel, social media, conversion, and retention — built for sustainable income growth.",
    url: "/onlyfans-marketing-strategy",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyFans Marketing Strategy — A Framework for Sustainable Growth",
    description:
      "What does a real OnlyFans marketing strategy look like? A complete framework covering the funnel, social media, conversion, and retention — built for sustainable income growth.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>OnlyFans Marketing Strategy</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          OnlyFans marketing strategy — a framework for building sustainable income
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            A marketing strategy for OnlyFans is not a list of things to try.
            It is a system — interconnected components that work together to
            continuously bring in new subscribers, convert them, and retain them
            over time. When all parts of the system are working, income compounds.
            When any part is broken, the whole system underperforms.
          </p>
          <p>
            This is a strategic framework for thinking about OnlyFans marketing
            as a complete system rather than a collection of isolated tactics.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          The four components of an effective OnlyFans marketing strategy
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              1. Awareness — building audiences that find you
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The awareness stage is about building an audience on platforms that
              have discovery — primarily TikTok, then Instagram. The goal at this
              stage is not to sell subscriptions; it is to get in front of people
              who do not know you exist. Content here should be engaging, consistent,
              and designed to build a following that wants more of what you offer.
              This is a long-term investment — the awareness channel you build
              today is the subscriber source you draw from in six months.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              2. Interest — turning followers into warm prospects
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The interest stage is about deepening the relationship with the
              audience you have built. Instagram Stories, engagement with followers,
              the development of a recognisable persona — these build the trust and
              familiarity that makes someone willing to pay for more access. Followers
              move from casually aware to genuinely interested at this stage, which
              is the transition that makes conversion possible.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              3. Conversion — turning interest into subscriptions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The conversion stage is where interested followers become paying
              subscribers. The key levers are: a compelling OnlyFans profile
              (clear value proposition, good preview content, appropriate pricing),
              a simple path from social media to your OnlyFans link, and enough
              social proof or urgency to trigger the subscription decision. Most
              creators lose subscribers at this stage through profile presentation
              problems — not because of lack of interest.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              4. Retention — keeping subscribers and maximising their value
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The retention stage determines whether your income compounds or
              resets every month. Consistent content posting, active DM engagement,
              PPV strategy, and the ongoing development of genuine subscriber
              relationships are the mechanisms. An account with strong retention
              needs less constant acquisition activity — the subscriber base grows
              net of cancellations over time.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          Why strategy beats tactics
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Tactics without strategy produce short-term results that do not connect
            into compounding growth. Running a discount promotion is a tactic.
            Building a TikTok audience that consistently feeds subscribers into a
            well-optimised, high-retention account is a strategy. The difference
            in long-term outcomes is enormous.
          </p>
          <p>
            The most common mistake creators make is jumping between tactics —
            trying new things without understanding where each one sits in the
            overall system. Building the full system, executing each component
            consistently, and measuring what is actually moving is what produces
            sustainable income growth.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Want the full strategy built and executed for your account?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below — we build the system and run it.
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

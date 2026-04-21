import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "OnlyFans Management UK — What Full Management Actually Involves",
  description:
    "What does OnlyFans management in the UK actually cover? A detailed breakdown of what full management looks like — messaging, strategy, growth, and what you should expect.",
  alternates: { canonical: "/onlyfans-management-uk" },
  openGraph: {
    title: "OnlyFans Management UK — What Full Management Actually Involves",
    description:
      "What does OnlyFans management in the UK actually cover? A detailed breakdown of what full management looks like — messaging, strategy, growth, and what you should expect.",
    url: "/onlyfans-management-uk",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyFans Management UK — What Full Management Actually Involves",
    description:
      "What does OnlyFans management in the UK actually cover? A detailed breakdown of what full management looks like — messaging, strategy, growth, and what you should expect.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>OnlyFans Management UK</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          OnlyFans management UK — what full management actually involves
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            The phrase &ldquo;OnlyFans management&rdquo; gets used to describe
            everything from someone replying to messages twice a week to a fully
            structured operation covering strategy, growth, messaging, and income
            optimisation. The gap between those two things is significant.
          </p>
          <p>
            This is a practical breakdown of what professional OnlyFans management
            in the UK actually looks like when it is done properly — what is covered,
            what you keep control of, and what realistic outcomes look like.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          The core components of full management
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Message management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This is the most time-consuming part of running an OnlyFans account.
              Full management means handling subscriber DMs properly — not just
              responding, but building genuine engagement, managing PPV campaigns,
              and structuring conversations in a way that develops lasting subscriber
              relationships. Done well, this is where a significant portion of monthly
              revenue is generated.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Account strategy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Strategy covers pricing decisions, posting schedule, what content to
              put behind the paywall versus what drives subscriptions, how to run
              promotions without cannibalising long-term value, and how to structure
              the account for retention. A good management agency builds and updates
              this strategy based on actual account data — not intuition or templates
              lifted from other creators.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Growth and subscriber acquisition
            </h3>
            <p className="text-gray-600 leading-relaxed">
              OnlyFans has no internal discovery mechanism. Every new subscriber
              comes through an external channel — primarily TikTok and Instagram.
              Full management includes working on that external presence: what to
              post, how often, how to convert followers into subscribers, and how
              to build an audience that is actually interested in what you offer.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Income optimisation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Beyond raw subscriber numbers, income depends on how well the account
              is monetised. PPV messaging, tip campaigns, personalised content
              offers — these are the levers that determine revenue per subscriber.
              A management agency that only tracks subscriber count is missing most
              of what makes accounts profitable.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          What management does not cover
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Management does not create your content. You remain entirely in control
            of what you produce — the agency handles the operations around that
            content. No legitimate management operation directs your image, dictates
            your content, or takes creative control.
          </p>
          <p>
            It also does not guarantee results. Income depends significantly on
            the creator — content quality, consistency, how well the niche fits the
            market. Management creates better conditions for growth; it does not
            produce growth independently of what you bring to it.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          Xentra Group&apos;s approach to UK management
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            We are UK-based, operated by CoachFlo Ltd, and we work with a small
            number of creators at a time. Our management covers the full picture —
            message management, account strategy, growth, and income optimisation —
            not a subset of it.
          </p>
          <p>
            We work transparently. You always know what is happening on your account,
            who is handling your messages, and what decisions are being made and why.
            That transparency is not just a nice-to-have — it is fundamental to how
            the relationship works.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Want proper management, not just message replies?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We work with UK-based creators who are ready to build something serious.
            Apply below.
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

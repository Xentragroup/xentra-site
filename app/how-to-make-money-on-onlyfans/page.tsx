import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "How to Make Money on OnlyFans — Every Revenue Stream Explained",
  description:
    "How do you actually make money on OnlyFans? A breakdown of every revenue stream — subscriptions, PPV, tips, custom content — and how to maximise each one.",
  alternates: { canonical: "/how-to-make-money-on-onlyfans" },
  openGraph: {
    title: "How to Make Money on OnlyFans — Every Revenue Stream Explained",
    description:
      "How do you actually make money on OnlyFans? A breakdown of every revenue stream — subscriptions, PPV, tips, custom content — and how to maximise each one.",
    url: "/how-to-make-money-on-onlyfans",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make Money on OnlyFans — Every Revenue Stream Explained",
    description:
      "How do you actually make money on OnlyFans? A breakdown of every revenue stream — subscriptions, PPV, tips, custom content — and how to maximise each one.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>How to Make Money on OnlyFans</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          How to make money on OnlyFans — every revenue stream explained
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Most creators who start on OnlyFans think of it as a subscription
            platform — post content, get a monthly fee. That is only one of several
            revenue streams available. Understanding all of them, and how to use
            each effectively, makes the difference between modest income and
            meaningful income from the same account.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          The revenue streams on OnlyFans
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Subscription revenue
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The recurring monthly fee subscribers pay for access to your profile.
              This is the most predictable revenue stream — it repeats monthly for
              as long as subscribers stay. Subscription revenue scales with subscriber
              count and subscription price. It is the foundation, but typically
              not the majority of income for well-managed accounts.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Pay-per-view (PPV) content
            </h3>
            <p className="text-gray-600 leading-relaxed">
              PPV is content sent directly to subscribers at an additional charge —
              typically through DMs. A subscriber who pays £10/month in subscription
              might spend £50 or more monthly on PPV content if it is offered
              well. PPV is where the majority of revenue comes from in properly
              managed accounts. It requires active DM management to execute —
              which is why message management is such a significant part of what
              agencies do.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Tips
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Subscribers can tip on content posts or in DMs. Tips are typically
              smaller amounts but can add meaningfully to monthly revenue for creators
              with engaged audiences. Encouraging tips through genuine engagement —
              responding to messages, thanking subscribers, building relationships —
              generates more tip revenue than passive posting.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Custom content
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Personalised content created for an individual subscriber at a premium
              price. Custom requests command significant premiums — often £50 to
              £200 or more per request. They require more time than standard content
              but generate disproportionate revenue per piece created. Managing
              custom requests properly — with clear pricing, turnaround times, and
              quality standards — is a meaningful income lever for active accounts.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Live streams
            </h3>
            <p className="text-gray-600 leading-relaxed">
              OnlyFans supports live streaming, which generates revenue through
              tips during the stream. Creators with engaged audiences can generate
              significant live revenue, though it requires an audience that is
              available and engaged simultaneously — more relevant for creators
              with larger subscriber bases.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          Where most income actually comes from
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            For accounts with strong message management, PPV revenue typically
            exceeds subscription revenue. The ratio varies, but a common pattern
            for well-managed accounts is 30 to 40 percent subscription revenue
            and 60 to 70 percent PPV and tip revenue. This is why DM management
            is such a significant part of what professional management addresses —
            it is where the majority of income is generated.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Want every revenue stream properly managed?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below — we handle message management, PPV strategy, and income optimisation.
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

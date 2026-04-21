import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "How to Make £1k a Month on OnlyFans — What It Actually Takes",
  description:
    "How do you make £1,000 a month on OnlyFans? A specific breakdown of the subscriber count, revenue per subscriber, and social media requirements to hit £1k monthly income.",
  alternates: { canonical: "/how-to-make-1k-a-month-on-onlyfans" },
  openGraph: {
    title: "How to Make £1k a Month on OnlyFans — What It Actually Takes",
    description:
      "How do you make £1,000 a month on OnlyFans? A specific breakdown of the subscriber count, revenue per subscriber, and social media requirements to hit £1k monthly income.",
    url: "/how-to-make-1k-a-month-on-onlyfans",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make £1k a Month on OnlyFans — What It Actually Takes",
    description:
      "How do you make £1,000 a month on OnlyFans? A specific breakdown of the subscriber count, revenue per subscriber, and social media requirements to hit £1k monthly income.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>How to Make £1k a Month on OnlyFans</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          How to make £1,000 a month on OnlyFans — what it actually takes
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            £1,000 per month is a meaningful but achievable milestone on OnlyFans.
            It is the income level where the platform starts to feel like a genuine
            business rather than a side project, and it is the point where professional
            management often becomes clearly worth the commission.
          </p>
          <p>
            This is a specific breakdown of what reaching £1,000 per month actually
            requires — the numbers, the activities, and what needs to be in place.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          The maths behind £1,000 per month
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            There are multiple paths to £1,000 per month. The right one depends
            on where your account is and what levers you can pull.
          </p>
          <p>
            <strong className="text-gray-800">Route 1 — subscription-heavy:</strong> 100 subscribers at £12/month = £1,200 gross
            (£960 after OnlyFans 20% fee). Achievable with a consistent social media
            funnel and reasonable retention. Takes most creators six to twelve months
            to build to this subscriber count from zero.
          </p>
          <p>
            <strong className="text-gray-800">Route 2 — subscription plus PPV:</strong> 50 subscribers at £10/month (£500 gross,
            £400 net) plus £600 in PPV revenue from an active message management
            operation. Total: £1,000/month net. This requires fewer subscribers but
            significantly better DM management.
          </p>
          <p>
            <strong className="text-gray-800">Route 3 — smaller subscription, high PPV:</strong> 30 highly engaged subscribers
            at £8/month (£192 net) plus strong PPV and custom content revenue making
            up the remainder. Fewer subscribers, higher per-subscriber value.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What you need to have in place
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              A working social media funnel
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Reaching 50 to 100 subscribers requires a consistent subscriber
              acquisition channel. That almost always means TikTok with several
              thousand followers, or Instagram with a highly engaged following,
              consistently sending people to your OnlyFans link. Without this,
              subscriber acquisition is slow enough that £1,000/month takes years
              rather than months.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Active message management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The PPV route to £1,000/month only works with active DM management.
              This means messaging subscribers regularly, sending PPV content
              strategically, and building the kind of engagement that makes
              subscribers willing to spend. Without this, you leave the majority
              of your potential revenue on the table.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Consistent content output
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Retention matters as much as acquisition at this income level.
              Keeping subscribers means giving them a continuous reason to stay.
              Three to four OnlyFans posts per week plus regular social media
              output maintains the activity level that produces low churn.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          How long does it take?
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            For a creator starting from zero with consistent social media building
            and active message management, six to twelve months is the realistic
            timeline to £1,000/month. Creators with an existing audience can reach
            it significantly faster. Creators without active social media building
            may take significantly longer or not reach it at all.
          </p>
          <p>
            Professional management typically accelerates this timeline materially —
            because the message management revenue is captured from the start,
            and the social media strategy is more consistent and effective.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Targeting £1k/month and want to get there faster?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below — we build the strategy and handle the management that drives this.
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

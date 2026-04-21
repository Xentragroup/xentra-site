import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "OnlyFans Not Making Money — What's Actually Wrong and How to Fix It",
  description:
    "If your OnlyFans isn't making money, the cause is almost always one of a handful of things. Here's how to diagnose the real problem and what to do about it.",
  alternates: { canonical: "/onlyfans-not-making-money" },
  openGraph: {
    title: "OnlyFans Not Making Money — What's Actually Wrong and How to Fix It",
    description:
      "If your OnlyFans isn't making money, the cause is almost always one of a handful of things. Here's how to diagnose the real problem and what to do about it.",
    url: "/onlyfans-not-making-money",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyFans Not Making Money — What's Actually Wrong and How to Fix It",
    description:
      "If your OnlyFans isn't making money, the cause is almost always one of a handful of things. Here's how to diagnose the real problem and what to do about it.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>OnlyFans Not Making Money</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          OnlyFans not making money — diagnosing the real problem
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            If your OnlyFans is not making money, the frustrating truth is that
            the cause is almost always one of a small number of things — and most
            of them are fixable. The problem is that without diagnosing which one
            is actually affecting your account, you end up working on the wrong
            thing.
          </p>
          <p>
            This is a framework for identifying what is actually holding your
            income back, and what the right response to each problem looks like.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          The four reasons OnlyFans accounts fail to make money
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Almost every &ldquo;not making money&rdquo; situation falls into one
            of these categories: a traffic problem (not enough people finding your
            account), a conversion problem (people finding it but not subscribing),
            a retention problem (subscribers joining but leaving quickly), or a
            monetisation problem (subscribers staying but not spending much).
          </p>
          <p>
            Identifying which one — or which combination — applies to your account
            is the essential first step. Throwing more content at a retention
            problem will not help. Building more traffic into an account with a
            conversion problem wastes the traffic.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          Diagnosing your specific problem
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Traffic problem: not enough people arriving
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If your subscriber count is very low despite posting consistently,
              the issue is almost certainly traffic — not enough people are arriving
              at your profile. OnlyFans has no internal discovery mechanism. Every
              subscriber comes from outside the platform. If you are not actively
              building on TikTok or Instagram and driving people to your link, your
              growth will be minimal regardless of content quality.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Conversion problem: visitors not subscribing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If people are clicking your link but not subscribing, the issue is
              your profile presentation — the bio, the preview content, the pricing,
              or the value proposition. Your profile page is effectively a sales
              page. If it is not converting visitors into subscribers, something
              about the presentation is not compelling enough. This is fixable with
              profile optimisation.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Retention problem: subscribers leaving
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If you are gaining subscribers but your count is not growing (or
              is dropping), churn is the problem. Subscribers are arriving but
              not staying past the first month. The most common causes are
              infrequent posting, low DM engagement, no ongoing reason to stay
              subscribed, or pricing that is not justified by the content being
              delivered.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Monetisation problem: subscribers not spending
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If you have a solid subscriber base but low monthly income, you
              have a monetisation problem — your subscribers are not converting
              beyond the base subscription. Revenue per subscriber is a key metric.
              If it is very low, the issue is usually underdeveloped message management
              and a lack of PPV strategy. Most subscription revenue comes from
              DM-driven sales, not just the subscription itself.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          Where management helps
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Professional management addresses retention and monetisation most
            directly — through proper message management, PPV strategy, and
            subscriber engagement. It also addresses traffic through social media
            strategy. If you are experiencing more than one of these problems
            simultaneously, which is common, having a structured approach to all
            of them at once is often the most effective path forward.
          </p>
          <p>
            If you are dealing with a clear single problem — you just need more
            traffic, for example — a more focused approach may be sufficient.
            But most accounts that are &ldquo;not making money&rdquo; have
            multiple issues compounding each other.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Ready to fix what&apos;s actually wrong?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below. We will review your account and tell you honestly
            what we think is holding you back.
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

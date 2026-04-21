import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "How to Fix OnlyFans Not Growing — A Diagnostic Checklist",
  description:
    "OnlyFans not growing? Work through this diagnostic checklist to identify exactly what's stalling your growth and what to do about each issue.",
  alternates: { canonical: "/how-to-fix-onlyfans-not-growing" },
  openGraph: {
    title: "How to Fix OnlyFans Not Growing — A Diagnostic Checklist",
    description:
      "OnlyFans not growing? Work through this diagnostic checklist to identify exactly what's stalling your growth and what to do about each issue.",
    url: "/how-to-fix-onlyfans-not-growing",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Fix OnlyFans Not Growing — A Diagnostic Checklist",
    description:
      "OnlyFans not growing? Work through this diagnostic checklist to identify exactly what's stalling your growth and what to do about each issue.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>How to Fix OnlyFans Not Growing</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          How to fix OnlyFans not growing — a diagnostic checklist
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            If your OnlyFans is not growing, there is a specific reason — and that
            reason is almost always identifiable if you look at the right things.
            This is a practical checklist to work through, covering the most common
            causes of stalled growth and what to do about each one.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          Work through these in order
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              1. Are you actively building on TikTok or Instagram?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If no — this is almost certainly the primary cause. OnlyFans does not
              bring you an audience. You need to build one somewhere else and drive
              it to your page. Start building your TikTok or Instagram presence before
              anything else. No social media strategy means no subscriber acquisition
              pipeline.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              2. Is your social media growing but your OnlyFans is not?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This is a conversion problem — your social media is not effectively
              leading people to subscribe. Check your link-in-bio setup, whether
              you have a clear call-to-action in your content, and how your public
              social media relates to what subscribers get on OnlyFans. The connection
              between the two needs to be explicit and compelling.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              3. Are subscribers joining but leaving after the first month?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              High churn means a retention problem. The most common causes: posting
              infrequently so subscribers do not feel they are getting value, not
              engaging with subscribers in DMs so the experience feels one-sided,
              or subscription pricing that attracted bargain-hunters who are not
              genuinely interested in the content. Improve posting consistency and
              DM engagement before anything else.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              4. Is your subscriber count growing but income is flat?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Growth without income growth indicates a monetisation problem. Revenue
              per subscriber is too low. The fix is almost always better message
              management — actively engaging in DMs, running PPV campaigns, and
              building the kind of subscriber relationships that generate spending
              beyond the base subscription.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              5. Has everything been stagnant for more than three months?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Three months of genuine effort with no movement usually means the
              current approach has reached its ceiling. Something structural needs
              to change — the social media strategy, the content angle, the pricing,
              or the level of operational support. This is often where bringing in
              professional management makes the most sense: when you have been doing
              the right things and still cannot break through.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          The principle behind fixing growth
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Most growth problems are not content problems — they are infrastructure
            problems. The content is there. The funnel that moves people from
            awareness to subscription to retention is not. Building that infrastructure,
            or having it professionally managed, is what turns a stalled account into
            a growing one.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Done the checklist and want help fixing what you found?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below — we will audit your account and build a plan to fix it.
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

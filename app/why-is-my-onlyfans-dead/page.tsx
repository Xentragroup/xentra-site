import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "Why Is My OnlyFans Dead — Diagnosing and Reviving a Stalled Account",
  description:
    "Your OnlyFans is dead — no new subscribers, no engagement, income has dried up. Here's what actually happened and how to revive a stalled account properly.",
  alternates: { canonical: "/why-is-my-onlyfans-dead" },
  openGraph: {
    title: "Why Is My OnlyFans Dead — Diagnosing and Reviving a Stalled Account",
    description:
      "Your OnlyFans is dead — no new subscribers, no engagement, income has dried up. Here's what actually happened and how to revive a stalled account properly.",
    url: "/why-is-my-onlyfans-dead",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Is My OnlyFans Dead — Diagnosing and Reviving a Stalled Account",
    description:
      "Your OnlyFans is dead — no new subscribers, no engagement, income has dried up. Here's what actually happened and how to revive a stalled account properly.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>Why Is My OnlyFans Dead</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          Why is my OnlyFans dead — what happened and how to revive it
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            A dead OnlyFans — no new subscribers arriving, existing subscribers
            cancelling, income tapering to almost nothing — is a specific situation
            with specific causes. It is also one that is recoverable in most cases,
            but only if you address the right things.
          </p>
          <p>
            This is a breakdown of what typically causes an account to go dead and
            what a genuine revival looks like versus a short-term fix.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          What usually kills an OnlyFans account
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Accounts go dead for a small number of common reasons. Understanding
            which one applies to your situation is the starting point for any
            meaningful recovery.
          </p>
          <p>
            The most common: the external traffic source dried up. If the TikTok
            or Instagram account that was driving subscribers stopped growing —
            or you stopped posting consistently — the pipeline of new subscribers
            closes. Without new arrivals, the account slowly empties as existing
            subscribers cancel over time.
          </p>
          <p>
            The second most common: posting inconsistency. If you stopped posting
            regularly — even for a few weeks — many subscribers will have cancelled
            for inactivity. Reactivating a dead account after a gap requires treating
            it almost like starting over, because most of the previous subscriber
            base may have left.
          </p>
          <p>
            Less commonly: the niche or positioning no longer resonates. What worked
            six months ago may not work now. Markets shift, competition increases,
            and content that was distinctive becomes less so. This requires more
            substantial repositioning, not just posting more of the same.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          How to revive a dead account
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Rebuild the external funnel first
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Before anything else — before posting new content, before running
              promotions, before adjusting pricing — rebuild the social media
              presence that will deliver new subscribers. A dead account with a
              working TikTok behind it will recover. A dead account with no external
              funnel will stay dead regardless of what you do on the platform itself.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Refresh the profile presentation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If the account has been inactive, a profile refresh — updated bio,
              fresh preview content, potentially adjusted pricing — signals to
              new visitors that the account is active and worth subscribing to.
              First impressions matter for conversion, and a stale-looking profile
              will not convert the new traffic you rebuild.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Re-engage remaining subscribers before running promotions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Whatever subscribers remain are more valuable than they appear —
              they stayed even through a period of inactivity. Re-engage them
              directly through DMs before running any promotional activity. Rebuilding
              engagement with your existing base gives you a foundation to work
              from rather than starting from zero.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Be consistent for at least 90 days before evaluating
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Revival takes time. An account that went dead over three months will
              not recover in two weeks. Commit to three months of consistent posting,
              active social media building, and proper DM management before drawing
              conclusions about whether the account is recoverable. Most are — they
              just require patience and consistency that the creator ran out of
              the first time around.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Ready to revive your account properly?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We have helped creators rebuild stalled accounts. Apply below
            and we will tell you if we think we can help yours.
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

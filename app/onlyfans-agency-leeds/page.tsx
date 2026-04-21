import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "OnlyFans Agency Leeds — UK Management for Yorkshire Creators",
  description:
    "Looking for an OnlyFans agency in Leeds? Xentra Group works with creators across Yorkshire and the UK. Here's what professional management looks like for Leeds-based creators.",
  alternates: { canonical: "/onlyfans-agency-leeds" },
  openGraph: {
    title: "OnlyFans Agency Leeds — UK Management for Yorkshire Creators",
    description:
      "Looking for an OnlyFans agency in Leeds? Xentra Group works with creators across Yorkshire and the UK. Here's what professional management looks like for Leeds-based creators.",
    url: "/onlyfans-agency-leeds",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyFans Agency Leeds — UK Management for Yorkshire Creators",
    description:
      "Looking for an OnlyFans agency in Leeds? Xentra Group works with creators across Yorkshire and the UK. Here's what professional management looks like for Leeds-based creators.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>OnlyFans Agency Leeds</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          OnlyFans agency Leeds — professional management for Yorkshire creators
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Leeds and the wider Yorkshire region have a growing presence in the
            UK creator economy. If you are based in Leeds and looking for OnlyFans
            management support, understanding what an agency actually provides —
            and what the location question really means — will help you make the
            right decision.
          </p>
          <p>
            Xentra Group works with creators across the UK. We are UK-based,
            operated by CoachFlo Ltd, and work entirely remotely — a Leeds-based
            creator receives exactly the same management as a London-based one.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          What matters more than location
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            When you are looking for an OnlyFans agency in Leeds, the instinct is
            to find something local. But what matters far more than proximity is
            whether the agency is properly structured, transparent, and capable of
            delivering real results for your account.
          </p>
          <p>
            The entire management operation happens digitally — message management,
            social media strategy, account optimisation — none of it requires the
            agency to be in the same city. What it requires is the right expertise,
            consistent communication, and a genuine investment in your account&apos;s
            growth.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What full management covers for Leeds creators
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Subscriber acquisition through social media
            </h3>
            <p className="text-gray-600 leading-relaxed">
              OnlyFans does not bring subscribers to you. We build and manage the
              TikTok and Instagram strategy that does — consistent, algorithm-aware
              content that builds an audience that converts to paying subscribers.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              DM management and PPV revenue
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A professional message management operation significantly increases
              the revenue generated from your existing subscriber base. We handle
              DMs properly — not just replying, but driving the subscriber
              engagement that produces consistent PPV income.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Strategy built around your account
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We review your account, build a strategy specific to your situation,
              and update it based on what the data shows. No templates, no
              copy-paste approach.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Based in Leeds and ready to grow seriously?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We work with creators across Yorkshire and the UK. Apply below.
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

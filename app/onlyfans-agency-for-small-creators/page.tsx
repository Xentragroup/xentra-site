import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "OnlyFans Agency for Small Creators — Does Management Make Sense?",
  description:
    "If you're making under £500/month on OnlyFans, is an agency worth it? An honest breakdown of when management helps small creators and when it doesn't.",
  alternates: { canonical: "/onlyfans-agency-for-small-creators" },
  openGraph: {
    title: "OnlyFans Agency for Small Creators — Does Management Make Sense?",
    description:
      "If you're making under £500/month on OnlyFans, is an agency worth it? An honest breakdown of when management helps small creators and when it doesn't.",
    url: "/onlyfans-agency-for-small-creators",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyFans Agency for Small Creators — Does Management Make Sense?",
    description:
      "If you're making under £500/month on OnlyFans, is an agency worth it? An honest breakdown of when management helps small creators and when it doesn't.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>OnlyFans Agency for Small Creators</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          OnlyFans agency for small creators — an honest look at whether it makes sense
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            If you are making a few hundred pounds a month on OnlyFans and you are
            considering working with a management agency, the question you should
            be asking is not &ldquo;which agency should I join?&rdquo; — it is
            &ldquo;does agency management make financial sense at this stage?&rdquo;
          </p>
          <p>
            The answer is not straightforward. It depends on where the ceiling is,
            what is holding you back, and what a specific agency is actually
            offering. This page works through that honestly.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          The economics of management for small accounts
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Agencies typically take a percentage of revenue — often somewhere between
            20 and 40 percent. On a £300/month account, that is £60–£120 going to
            the agency. For that cost to be worth it, the agency needs to meaningfully
            increase what you are making — not just marginally.
          </p>
          <p>
            The question is not whether £300 becomes £360 with management. It is
            whether £300 can become £800 or £1,200 with the right support in place.
            If the answer is yes — because the bottleneck is strategy, messaging,
            or growth infrastructure, not the content itself — then the commission
            makes sense. If the account is already performing at close to its ceiling,
            management cannot extract what is not there.
          </p>
          <p>
            Good agencies understand this calculus. They will be honest about whether
            they can genuinely move the needle for a small account before taking you on.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What small creators actually need from an agency
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              A working funnel, not just account management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Small accounts are almost always small because of a traffic problem,
              not a conversion problem. The subscriber base is limited because not
              enough people are finding the account. What a small creator needs most
              is help building a TikTok or Instagram presence that actually drives
              people to OnlyFans — not just someone tidying up DMs on a small account.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Honest feedback on what is holding them back
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Small creators often do not know exactly why they are not growing. The
              issue might be pricing, content frequency, profile presentation, or
              social media approach. A good agency diagnoses this honestly rather than
              just activating a generic management template. The diagnosis is often
              worth more than the management itself at the early stage.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Patient, long-term thinking
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Small accounts grow into large ones when the fundamentals are built
              correctly and maintained consistently. An agency that pushes for fast
              results through promotions and discount strategies will often produce
              short spikes that do not hold. Small creators benefit from agencies
              that think in months, not days.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          When to wait before joining an agency
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            If you are not posting consistently yet, working on your content
            consistency before bringing in management will produce better results.
            Management cannot create the content — it can only optimise and amplify
            what you are already producing. Build the habit first.
          </p>
          <p>
            If you are posting consistently and have a clear sense of your niche
            but are still below £500/month, that is when management is most likely
            to make a meaningful difference — because the raw material is there, and
            the structure is what is missing.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Creating consistently and ready to grow?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We work with small creators who have the foundation in place and are
            serious about building on it. Apply below.
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

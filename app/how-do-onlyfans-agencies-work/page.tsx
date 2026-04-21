import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "How Do OnlyFans Agencies Work? The Business Model Explained",
  description:
    "How do OnlyFans agencies actually work? From commission structures to day-to-day operations — a clear explanation of the agency model and what the relationship looks like.",
  alternates: { canonical: "/how-do-onlyfans-agencies-work" },
  openGraph: {
    title: "How Do OnlyFans Agencies Work? The Business Model Explained",
    description:
      "How do OnlyFans agencies actually work? From commission structures to day-to-day operations — a clear explanation of the agency model and what the relationship looks like.",
    url: "/how-do-onlyfans-agencies-work",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Do OnlyFans Agencies Work? The Business Model Explained",
    description:
      "How do OnlyFans agencies actually work? From commission structures to day-to-day operations — a clear explanation of the agency model and what the relationship looks like.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>How Do OnlyFans Agencies Work</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          How do OnlyFans agencies work — the business model and relationship explained
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            If you are considering working with an OnlyFans agency for the first
            time, it helps to understand exactly how the model works — how they
            are paid, what access they have, how the day-to-day relationship
            functions, and what your obligations are in return.
          </p>
          <p>
            This is a plain-English explanation of the agency model, without the
            sales pitch.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          How agencies are paid
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Almost all OnlyFans agencies work on a revenue share model — they take
            a percentage of everything your account earns. Commission rates typically
            range from 20 to 40 percent, depending on what services are included
            and the scale of the operation.
          </p>
          <p>
            Some agencies charge a flat monthly retainer on top of or instead of
            commission. This is less common but exists, particularly for agencies
            offering specific marketing or social media services rather than full
            management.
          </p>
          <p>
            The commission model means the agency is incentivised to grow your
            income — they earn more when you earn more. That alignment is one of
            the practical advantages of the model when it is structured correctly.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What access an agency has
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Account access for message management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To handle DMs, the agency needs to be logged into your OnlyFans account
              or have access via a shared login arrangement. This is standard practice
              — the agency needs to be in the account to do the work. What matters
              is that this access is clearly defined in the contract: what they
              can do, what they cannot do, and how access is revoked when the
              relationship ends.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Social media access
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If the agency is managing your TikTok or Instagram, they will need
              access to those accounts as well. Again, this should be explicitly
              covered in the contract — what they post, how they manage the account,
              and what happens to access at the end of the engagement.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              What they do not have access to
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A legitimate agency does not need access to your bank account or
              payout settings. You receive all revenue directly from OnlyFans —
              the agency invoices you for their commission, or the payout structure
              is handled through a separate arrangement that you control. If an
              agency wants direct access to your payouts, that is a serious red flag.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          What the onboarding process looks like
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            A structured agency will begin with an account audit — reviewing your
            current profile, content, pricing, social media presence, and income
            history. This informs the strategy they build for you.
          </p>
          <p>
            There will typically be a onboarding call or conversation to align
            on voice, tone, and how the messaging should reflect your persona.
            Message management only works if the agency understands how you
            communicate — they need enough context to represent you authentically.
          </p>
          <p>
            A clear contract should be signed before any work begins, covering
            commission structure, what services are included, notice periods for
            either party to exit, and how account access is handled.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          How the ongoing relationship works
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Day-to-day, the agency handles operations without requiring your constant
            involvement. You create content and deliver it to the agency (or post it
            yourself), and the agency manages everything around it.
          </p>
          <p>
            Good agencies maintain regular communication — updates on performance,
            strategic decisions, and anything that requires your input. You should
            always be informed and in control of the direction of your account, even
            if you are not handling the daily operations.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Want to see how this works in practice?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below. We will walk you through our process during the review.
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

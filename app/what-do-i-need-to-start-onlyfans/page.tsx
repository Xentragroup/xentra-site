import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "What Do I Need to Start OnlyFans? The Practical Checklist",
  description:
    "What do you actually need to start OnlyFans? A practical checklist — the technical requirements, what to have ready, and what most guides leave out.",
  alternates: { canonical: "/what-do-i-need-to-start-onlyfans" },
  openGraph: {
    title: "What Do I Need to Start OnlyFans? The Practical Checklist",
    description:
      "What do you actually need to start OnlyFans? A practical checklist — the technical requirements, what to have ready, and what most guides leave out.",
    url: "/what-do-i-need-to-start-onlyfans",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Do I Need to Start OnlyFans? The Practical Checklist",
    description:
      "What do you actually need to start OnlyFans? A practical checklist — the technical requirements, what to have ready, and what most guides leave out.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>What Do I Need to Start OnlyFans</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          What do I need to start OnlyFans — the practical checklist
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            The barrier to starting on OnlyFans is lower than most people expect.
            The technical requirements are minimal. What most guides miss is the
            non-technical preparation that determines whether you actually build
            income — not just an account.
          </p>
          <p>
            This is a complete checklist of what you need before you go live.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          The technical requirements
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Valid ID for verification
            </h3>
            <p className="text-gray-600 leading-relaxed">
              OnlyFans requires identity verification before your account can
              go live. A passport or driving licence will work. The verification
              is handled by a third-party service and typically completes within
              24 hours. You must be 18 or over — OnlyFans enforces this during
              the verification process.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              A bank account for payouts
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Payouts go directly to a bank account. You can add payment details
              after registration. OnlyFans holds earnings for a short period before
              releasing them — the exact timing depends on your account standing
              and payout method.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              A device capable of creating and uploading content
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A modern smartphone is sufficient for most creators — current iPhone
              and Android cameras produce content quality that is more than adequate.
              You do not need professional camera equipment to start. You do need
              adequate lighting — which is often the single biggest quality improvement
              available for minimal cost.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What you need beyond the technical
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              A defined content direction
            </h3>
            <p className="text-gray-600 leading-relaxed">
              What are you creating? Who is it for? A clear niche — even a broad
              one — makes everything else easier: the social media strategy, the
              profile copy, the pricing, the subscriber approach. Going live without
              a direction means figuring it out in real time, which is inefficient.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              An active or actively building social media account
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You cannot build an OnlyFans subscriber base without external traffic.
              Before you launch, have a TikTok or Instagram account either already
              running or committed to being built from the same day as your OnlyFans.
              The social media work is not optional — it is the primary growth mechanism.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              A content buffer
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Having two to four weeks of content ready before you launch means
              you will not go quiet immediately after the initial burst of activity.
              Consistency from the first week signals to subscribers that the
              account is worth staying subscribed to — and a content buffer makes
              that consistency sustainable.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Realistic expectations about timeline
            </h3>
            <p className="text-gray-600 leading-relaxed">
              OnlyFans income takes time to build. Most creators see minimal
              income in the first month. Meaningful income typically develops
              over three to twelve months of consistent effort. This is not a
              shortcut to quick money — it is a business that builds over time.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Have everything in place and want professional support?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below — we work with creators at every stage.
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

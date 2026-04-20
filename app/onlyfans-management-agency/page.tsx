import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "OnlyFans Management Agency — What They Do and Whether You Need One",
  description:
    "What does an OnlyFans management agency actually do? This is an honest breakdown of how management works, what it costs, and how to know if it's right for you.",
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>OnlyFans Management Agency</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          What an OnlyFans management agency actually does — and whether you need one
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            The term &ldquo;OnlyFans management agency&rdquo; gets used loosely.
            Some operations genuinely manage accounts at a professional level.
            Others are little more than someone with a Canva template and a
            commission agreement. Knowing the difference matters.
          </p>
          <p>
            This is a straightforward explanation of what real management looks
            like, what it costs you, and how to decide whether working with an
            agency is the right move for where you are right now.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          What management actually covers
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            At its core, an OnlyFans management agency handles the business
            operations of your account — the things that take time, require skill,
            and don&apos;t involve you creating content.
          </p>
          <p>
            That typically includes message management (responding to subscribers,
            managing DMs, sending PPV), account strategy (pricing, posting
            schedule, what to push and when), and growth work (helping you build
            the external presence that brings in new subscribers).
          </p>
          <p>
            The best agencies also work on your personal brand — your TikTok,
            your Instagram identity, how you come across publicly. Because
            OnlyFans has no internal discovery, everything depends on what happens
            outside the platform.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What an agency should never do
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Take control of your content
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your content is yours. A management agency advises on strategy and
              handles operations — it does not direct what you create or dictate
              your image. Any agreement that gives an agency creative control over
              your account is a red flag.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Lock you into an exit-proof contract
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Reasonable notice periods exist for a reason, but contracts that
              make it difficult or expensive to leave are designed to protect the
              agency, not you. You should always be able to exit if the
              relationship isn&apos;t working.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Operate without transparency
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You should always know what is happening on your account, who is
              handling your messages, and how decisions are being made. An agency
              that keeps you in the dark about your own account is not working in
              your interest.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          Is an OnlyFans management agency right for you?
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Management makes the most sense when you are already creating
            consistently but the business side is holding you back. If you are
            spending hours on messages, struggling to grow your subscriber base,
            or unsure how to monetise what you already have — that&apos;s exactly
            what management is for.
          </p>
          <p>
            It also makes sense if you want to treat this seriously from the
            start. Building the right structure early — brand, funnel, retention
            system — is significantly easier than trying to retrofit it later.
          </p>
          <p>
            If you are not yet creating regularly or are still figuring out your
            niche, management may not be the highest-leverage move right now. Most
            good agencies will tell you this honestly during an initial
            conversation.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          How Xentra Group approaches management
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            We work with a small number of creators at a time. Our approach is
            hands-on — we build a strategy around each creator individually, handle
            message management properly, and focus on building income that is
            sustainable rather than just impressive in month one.
          </p>
          <p>
            We are transparent about everything. You know what is happening on your
            account, why decisions are being made, and what the plan looks like
            going forward.
          </p>
          <p>
            We do not take on creators who are not a good fit. If we do not think
            we can genuinely help you, we will tell you that in our initial
            conversation.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Ready to work with an agency that does this properly?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We work with a small number of creators who are serious about growth.
            If that&apos;s you, apply below.
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

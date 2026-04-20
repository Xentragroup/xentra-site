import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "Best OnlyFans Agency — What to Look For (and What to Avoid)",
  description:
    "Most OnlyFans agencies overpromise and underdeliver. Here's how to identify the best OnlyFans agency for your situation — and the red flags that should make you walk away.",
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>Best OnlyFans Agency</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          How to find the best OnlyFans agency — and avoid the ones that will waste your time
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Searching for the best OnlyFans agency is harder than it should be. The
            space is full of operations that look professional on the surface but
            have no real structure behind them. They sign as many creators as
            possible, deliver generic advice, and move on when results don&apos;t
            come.
          </p>
          <p>
            This guide is designed to give you a clear picture of what separates a
            genuinely good agency from a mediocre one — so you can make the right
            decision for your account.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          What a good OnlyFans agency actually does
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
          <p>
            A legitimate management agency handles the operational side of your
            account so you can focus on creating content. That means message
            management, subscriber retention, pricing strategy, and growth — all
            working as a joined-up system.
          </p>
          <p>
            The best agencies also help you build outside OnlyFans. Your TikTok,
            your Instagram, your personal brand — because without external traffic,
            your OnlyFans growth has a ceiling.
          </p>
          <p>
            Crucially, a good agency does not take over your identity or your
            content. They support the business side. You remain in full control of
            what you create and how you present yourself.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          Red flags to watch for
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              They guarantee specific earnings
            </h3>
            <p className="text-gray-600 leading-relaxed">
              No honest agency can promise you &pound;10k a month. Anyone who does
              is either lying or has no idea how this works. Results depend on your
              starting point, your consistency, your content, and the market — not
              just the agency.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              They take a large cut with no clear breakdown
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Commission structures vary, but you should always know exactly what
              you&apos;re paying for and why. Vague agreements with high percentages
              and no defined deliverables are a serious warning sign.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              They work with hundreds of creators
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Scale and quality rarely coexist in this industry. An agency managing
              two hundred creators is not giving anyone meaningful attention. The
              better operations are intentionally small.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              No clear onboarding or strategy process
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If an agency cannot explain how they work, what the first thirty days
              look like, and how they measure progress — they are making it up as
              they go. Structure is everything in this kind of management.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              They pressure you to sign quickly
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A legitimate agency is selective. They want to understand your
              situation before committing. If you&apos;re being rushed, that tells
              you something about their priorities.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          Questions worth asking any agency before you sign
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>How many creators do you currently manage?</p>
          <p>What does your onboarding process look like?</p>
          <p>How do you handle message management — who is actually doing it?</p>
          <p>What does the first 30 to 60 days look like in practice?</p>
          <p>What happens if I want to leave?</p>
          <p>
            The answers to these questions will tell you a lot. Vague or evasive
            responses are as revealing as clear ones.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          What Xentra Group does differently
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            We are deliberately small. We work with a limited number of creators
            at any given time — not because we can&apos;t grow, but because the
            quality of our work depends on it.
          </p>
          <p>
            Every creator we take on gets a structured approach built around their
            account. We handle messages, strategy, and income optimisation. We
            help build the external presence that drives sustainable growth.
          </p>
          <p>
            We don&apos;t overpromise. We don&apos;t use copy-paste playbooks. We
            build properly, and the results follow from that.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Looking for an agency that actually delivers?
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

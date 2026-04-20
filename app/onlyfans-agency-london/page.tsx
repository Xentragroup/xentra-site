import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "OnlyFans Agency London & England | Xentra Group",
  description:
    "Xentra Group works with OnlyFans creators across London and England. UK-based management focused on real income growth through structure, brand, and strategy.",
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>OnlyFans Agency London</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          OnlyFans agency serving London and England — how it actually works
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            London has one of the highest concentrations of OnlyFans creators in
            Europe. England more broadly has a strong, active creator market with
            real earning potential — but also real competition. Working with the
            right OnlyFans agency makes a measurable difference in how quickly
            that potential converts into consistent income.
          </p>
          <p>
            Xentra Group works with creators across London and England. We are
            UK-based, operate remotely, and bring a structured management approach
            to every creator we work with.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          The London creator landscape
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            London creators have advantages that creators in other markets
            don&apos;t always have — proximity to a large, high-spending audience,
            strong lifestyle content opportunities, and a natural presence on
            platforms like TikTok and Instagram where content from London
            consistently performs well.
          </p>
          <p>
            The challenge is that competition is also higher. There are more
            creators, more noise, and more pressure to differentiate. That is
            exactly where proper management helps — not by doing more, but by
            doing the right things in the right order.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          Does it matter where your agency is based?
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            For day-to-day management, physical location is largely irrelevant —
            everything happens remotely. What matters is timezone alignment,
            communication quality, and that your agency actually understands
            the market you are operating in.
          </p>
          <p>
            A UK-based agency understands the dynamics of UK audiences, how UK
            platforms behave, and the practical considerations of working with
            UK-based creators. That context matters more than having an office
            in the same city.
          </p>
          <p>
            Xentra Group is operated by CoachFlo Ltd, a UK registered company.
            We work with creators across London, the South East, and the rest
            of England — and the process is the same regardless of where you are.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What we focus on for England-based creators
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Building the external funnel
            </h3>
            <p className="text-gray-600 leading-relaxed">
              OnlyFans does not surface your content to new audiences. Every new
              subscriber you get has come from somewhere else — usually TikTok or
              Instagram. We work with creators to build and strengthen that funnel
              so it delivers consistently, not just in spikes.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Message management that converts
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A significant portion of OnlyFans revenue comes from DMs. We handle
              message management properly — not just replying, but structuring
              conversations in a way that builds genuine subscriber relationships
              and drives PPV revenue without feeling transactional.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Long-term income over short-term spikes
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Promotions and discounts create temporary subscriber numbers that
              rarely hold. We focus on retention — keeping subscribers engaged,
              spending, and staying — because that is what produces income that
              compounds rather than resets every month.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          How to get started
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            We review every application personally. If we think there is a good
            fit, we will reach out to discuss your situation, where your account
            currently is, and what we think is possible.
          </p>
          <p>
            We do not take on creators we cannot genuinely help. If we do not
            think management is the right move for you at this stage, we will tell
            you that directly.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Based in London or England and ready to grow?
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

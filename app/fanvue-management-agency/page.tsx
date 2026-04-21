import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "Fanvue Management Agency — Full Account Management for Fanvue Creators",
  description:
    "What does full Fanvue management involve? From DMs and PPV to growth strategy and social media — a detailed breakdown of what Fanvue creator management covers.",
  alternates: { canonical: "/fanvue-management-agency" },
  openGraph: {
    title: "Fanvue Management Agency — Full Account Management for Fanvue Creators",
    description:
      "What does full Fanvue management involve? From DMs and PPV to growth strategy and social media — a detailed breakdown of what Fanvue creator management covers.",
    url: "/fanvue-management-agency",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fanvue Management Agency — Full Account Management for Fanvue Creators",
    description:
      "What does full Fanvue management involve? From DMs and PPV to growth strategy and social media — a detailed breakdown of what Fanvue creator management covers.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>Fanvue Management Agency</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          Fanvue management agency — what full management covers on Fanvue
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Fanvue management follows the same operational model as OnlyFans management,
            with some platform-specific adjustments. If you are building your audience
            on Fanvue — or considering whether to use it alongside OnlyFans — understanding
            what professional management covers will help you evaluate whether it is
            the right investment.
          </p>
          <p>
            This is a breakdown of what full Fanvue account management involves,
            what it does not cover, and how the economics work.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What full Fanvue management covers
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              DM management and subscriber engagement
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Subscriber relationships are built in DMs. Full management means
              handling this properly — responding promptly, building genuine
              engagement, running PPV campaigns strategically, and managing the
              day-to-day subscriber communication that converts casual subscribers
              into long-term, high-value ones. On Fanvue, where the subscriber
              base is more concentrated, each subscriber relationship carries
              more relative weight.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Content strategy and posting schedule
            </h3>
            <p className="text-gray-600 leading-relaxed">
              What you post, how often, and how you price and gate content all
              affect subscriber acquisition and retention. Management includes
              advising on and executing a content strategy that works with how
              Fanvue surfaces and presents creator content — including what goes
              on the free preview versus behind the paywall.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              External traffic and social media
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Fanvue, like OnlyFans, does not surface content to new audiences
              organically. Every new subscriber comes from outside the platform.
              Full management includes working on the TikTok and Instagram presence
              that drives that traffic — not just managing the account once people
              arrive.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Platform-specific optimisation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Fanvue has specific features — including AI-assisted tools, a different
              revenue share structure from OnlyFans, and its own approach to creator
              discovery. A management agency with genuine platform experience will
              leverage these features rather than applying a generic template.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          Fanvue versus OnlyFans management — key differences
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            The primary practical difference is audience scale. Fanvue has a
            smaller global subscriber base, which means subscriber acquisition
            tends to be slower in absolute terms. This does not make Fanvue a
            worse platform — the revenue share is often more favourable — but it
            affects how management is paced and what growth expectations are realistic.
          </p>
          <p>
            For creators using both platforms, management covers the operational
            side of each — typically with shared strategy and social media work
            feeding into both, and separate message management for each platform.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Ready to grow on Fanvue with proper support?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We work with creators on Fanvue and OnlyFans. Apply below to see
            if we&apos;re a good fit.
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

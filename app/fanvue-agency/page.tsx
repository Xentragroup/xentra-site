import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "Fanvue Agency — Creator Management on Fanvue Explained",
  description:
    "What is a Fanvue agency and how does it differ from OnlyFans management? An honest breakdown of Fanvue as a platform and what creator management looks like on it.",
  alternates: { canonical: "/fanvue-agency" },
  openGraph: {
    title: "Fanvue Agency — Creator Management on Fanvue Explained",
    description:
      "What is a Fanvue agency and how does it differ from OnlyFans management? An honest breakdown of Fanvue as a platform and what creator management looks like on it.",
    url: "/fanvue-agency",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fanvue Agency — Creator Management on Fanvue Explained",
    description:
      "What is a Fanvue agency and how does it differ from OnlyFans management? An honest breakdown of Fanvue as a platform and what creator management looks like on it.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>Fanvue Agency</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          Fanvue agency — what creator management looks like on Fanvue
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Fanvue is a subscription content platform with a growing UK presence,
            often positioned as a direct alternative to OnlyFans. As more creators
            diversify across platforms — or consider Fanvue as a primary home —
            the question of platform-specific management has become more relevant.
          </p>
          <p>
            This page explains what Fanvue is, how it compares to OnlyFans from a
            management standpoint, and what to look for in an agency that works
            across both.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          What Fanvue is and how it differs from OnlyFans
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Fanvue operates on a similar subscription model to OnlyFans — creators
            charge a monthly fee for access, plus pay-per-view content and tips.
            The platform has positioned itself as more creator-friendly in terms of
            revenue share and features, and it has invested in AI-assisted tools
            for creators.
          </p>
          <p>
            The core difference from a management standpoint is audience scale.
            OnlyFans has a significantly larger established audience base, which
            means traffic generated through social media is more likely to convert
            on OnlyFans. Fanvue is growing, but the subscriber pool is smaller.
            This affects the economics of management: the fundamentals are the same,
            but expectations about subscriber acquisition pace should be adjusted.
          </p>
          <p>
            For many creators, the question is not Fanvue versus OnlyFans but whether
            to maintain a presence on both. Cross-platform management is increasingly
            common — and the management approach for both is largely identical, with
            platform-specific adjustments to strategy and messaging.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What Fanvue-specific management covers
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Platform setup and profile optimisation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              First impressions matter on any subscription platform. Profile
              presentation, bio copy, pricing structure, and what content appears
              publicly all affect conversion rates from social media to paid
              subscribers. This is the same on Fanvue as on OnlyFans — and getting
              it right from the start matters.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Message management and PPV strategy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Subscriber engagement and DM revenue follow the same principles on
              Fanvue as they do on OnlyFans. Message management that builds genuine
              relationships and drives pay-per-view revenue without feeling
              transactional is the core of what good management delivers on either
              platform.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Social media traffic strategy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The external funnel that drives growth is identical regardless of
              platform — TikTok and Instagram remain the primary traffic sources
              for subscription content creators. An agency managing your Fanvue
              account should be working on that funnel just as aggressively as
              they would for OnlyFans.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          How Xentra Group approaches multi-platform management
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            We work with creators across subscription platforms and understand the
            specific dynamics of each. Whether you are focused on OnlyFans, Fanvue,
            or building a presence across both, the approach we take is built around
            your specific situation — not a generic template applied uniformly.
          </p>
          <p>
            The fundamentals of good management do not change by platform: clear
            strategy, strong messaging, a working external funnel, and a focus on
            retention over short-term spikes. That applies regardless of where your
            account lives.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Building on Fanvue, OnlyFans, or both?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We work with serious creators on any major subscription platform.
            Apply below.
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

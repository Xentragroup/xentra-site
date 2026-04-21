import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "How to Get Subscribers on OnlyFans — The Complete Guide",
  description:
    "How do you actually get subscribers on OnlyFans? A complete guide to subscriber acquisition — the channels that work, the conversion factors, and how to build a consistent pipeline.",
  alternates: { canonical: "/how-to-get-subscribers-on-onlyfans" },
  openGraph: {
    title: "How to Get Subscribers on OnlyFans — The Complete Guide",
    description:
      "How do you actually get subscribers on OnlyFans? A complete guide to subscriber acquisition — the channels that work, the conversion factors, and how to build a consistent pipeline.",
    url: "/how-to-get-subscribers-on-onlyfans",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get Subscribers on OnlyFans — The Complete Guide",
    description:
      "How do you actually get subscribers on OnlyFans? A complete guide to subscriber acquisition — the channels that work, the conversion factors, and how to build a consistent pipeline.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>How to Get Subscribers on OnlyFans</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          How to get subscribers on OnlyFans — building a consistent acquisition pipeline
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Getting subscribers on OnlyFans requires understanding one thing above
            all else: the platform does not bring them to you. You need to find
            people somewhere they already are — on social media platforms with actual
            discovery — and convert them into subscribers. This guide covers how
            to do that systematically.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          The subscriber acquisition channels that actually work
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              TikTok organic content
            </h3>
            <p className="text-gray-600 leading-relaxed">
              TikTok remains the highest-volume subscriber acquisition channel for
              most creators. The algorithm surfaces content to new audiences on the
              For You page without requiring a large existing following. Content that
              is engaging and relates — even loosely — to your OnlyFans niche can
              reach tens of thousands of people who have never seen your account.
              The goal is to build a TikTok following that is predisposed to subscribe
              — not just to accumulate views.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Instagram Stories and Reels
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Instagram serves as a warmer traffic source than TikTok. Followers
              who have chosen to follow you are more likely to click your bio link
              and subscribe. Stories with direct CTAs to your OnlyFans link convert
              consistently for creators who maintain an active Instagram presence.
              Reels provide organic reach; Stories convert it.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Reddit promotion
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For certain niches, Reddit is a significant subscriber source. Free
              promotion subreddits allow creators to share content alongside an
              OnlyFans link. The key is choosing the right subreddits for your
              specific niche and posting consistently enough to maintain visibility.
              Reddit traffic tends to convert at lower rates than social media
              followers, but the volume can be significant for the right content types.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Creator collaborations
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Partnering with another creator for a TikTok duet, Instagram collab,
              or shared promotion exposes your account to their audience directly.
              The best collaborations are with creators whose audience overlaps with
              yours — same niche, similar aesthetic, comparable account size. Audience
              relevance matters far more than follower count.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          Converting traffic into subscribers
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Traffic is only half the equation. The other half is converting visitors
            into subscribers once they arrive. Your OnlyFans profile page functions
            as a sales page — the bio, the preview content, the pricing, and the
            value proposition all affect how many of the people who click your link
            actually subscribe.
          </p>
          <p>
            A clear, compelling bio that explains what subscribers get. Preview
            content that represents your best work without giving everything away.
            Pricing that matches the perceived value of the content. A consistent
            posting schedule that gives new subscribers confidence they are joining
            an active account. These are the conversion factors most creators
            underinvest in.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Want a managed pipeline that brings subscribers consistently?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We build and manage the external funnel. Apply below.
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

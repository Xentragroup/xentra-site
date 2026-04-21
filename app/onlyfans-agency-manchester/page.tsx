import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "OnlyFans Agency Manchester — UK Management for North West Creators",
  description:
    "Looking for an OnlyFans agency in Manchester? Xentra Group works with creators across the North West and the UK. Remote-first management that delivers wherever you are.",
  alternates: { canonical: "/onlyfans-agency-manchester" },
  openGraph: {
    title: "OnlyFans Agency Manchester — UK Management for North West Creators",
    description:
      "Looking for an OnlyFans agency in Manchester? Xentra Group works with creators across the North West and the UK. Remote-first management that delivers wherever you are.",
    url: "/onlyfans-agency-manchester",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyFans Agency Manchester — UK Management for North West Creators",
    description:
      "Looking for an OnlyFans agency in Manchester? Xentra Group works with creators across the North West and the UK. Remote-first management that delivers wherever you are.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>OnlyFans Agency Manchester</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          OnlyFans agency Manchester — what creator management looks like for North West creators
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Manchester has one of the strongest creator communities outside London —
            a large, engaged population with strong social media culture and real
            income potential on platforms like OnlyFans. If you are based in
            Manchester or the wider North West and are considering working with
            an agency, this is what you should know.
          </p>
          <p>
            Xentra Group works with creators across the UK, including Manchester.
            We are UK-based, operated by CoachFlo Ltd, and our management is
            fully remote — your location within the UK makes no difference to
            the quality or process of what we deliver.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          The Manchester creator market
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Manchester creators tend to have a distinct identity — the city has a
            strong cultural identity that carries into creator content and resonates
            with both local and national audiences. This can be an advantage in
            building a recognisable persona that stands out from the more generic
            content common on the platform.
          </p>
          <p>
            The practical challenge is the same as for any UK creator: the platform
            does not bring you subscribers. Building the external presence — primarily
            TikTok and Instagram — that drives consistent subscriber acquisition
            is where most of the growth work happens, regardless of where you are based.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What Xentra Group does for Manchester creators
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Social media and subscriber acquisition
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We help build and manage the TikTok and Instagram presence that drives
              subscribers to your OnlyFans consistently. Strategy, content planning,
              and funnel optimisation — handled as part of full account management.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Message management and monetisation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              DM management is where a significant portion of monthly revenue is
              generated. We handle it professionally — building genuine subscriber
              relationships, running PPV campaigns, and maximising what your
              existing subscriber base generates month over month.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Account strategy and income optimisation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Pricing, posting schedule, what to gate versus what to share
              publicly — strategy built around your account and updated based
              on actual performance data, not assumptions.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Based in Manchester and serious about growing?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We work with creators across the North West and the UK. Apply below.
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

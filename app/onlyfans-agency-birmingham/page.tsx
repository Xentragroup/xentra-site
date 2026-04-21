import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "OnlyFans Agency Birmingham — UK Management for Midlands Creators",
  description:
    "Looking for an OnlyFans agency in Birmingham? Xentra Group works with creators across the Midlands and the UK. Here's what remote-first management looks like for Birmingham creators.",
  alternates: { canonical: "/onlyfans-agency-birmingham" },
  openGraph: {
    title: "OnlyFans Agency Birmingham — UK Management for Midlands Creators",
    description:
      "Looking for an OnlyFans agency in Birmingham? Xentra Group works with creators across the Midlands and the UK. Here's what remote-first management looks like for Birmingham creators.",
    url: "/onlyfans-agency-birmingham",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyFans Agency Birmingham — UK Management for Midlands Creators",
    description:
      "Looking for an OnlyFans agency in Birmingham? Xentra Group works with creators across the Midlands and the UK. Here's what remote-first management looks like for Birmingham creators.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>OnlyFans Agency Birmingham</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          OnlyFans agency Birmingham — how UK management works for Midlands creators
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Birmingham has a growing creator community, and demand for structured
            OnlyFans management has grown alongside it. If you are based in Birmingham
            or the wider Midlands and are looking for an agency, understanding what
            you actually need — and what location means in practice — is the right
            starting point.
          </p>
          <p>
            Xentra Group works with creators across the UK, including Birmingham and
            the Midlands. We are UK-based, operated by CoachFlo Ltd, and everything
            we do is fully remote.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          Does it matter if the agency is in Birmingham specifically?
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            For the day-to-day work of account management — message handling,
            strategy, social media growth — physical location is irrelevant.
            Everything happens digitally, in real time, regardless of whether your
            agency is in the same city or the same country.
          </p>
          <p>
            What matters is that your agency is in the same timezone, communicates
            reliably, and understands the UK creator market. A UK-based agency
            with those qualities will serve a Birmingham creator just as well as
            one with a Birmingham office — and most Birmingham-claiming agencies
            are not actually based there.
          </p>
          <p>
            Xentra Group is UK-based, and the management process is identical
            whether you are in Birmingham, London, or Glasgow. The results are
            driven by strategy and execution, not geography.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What management looks like for Birmingham creators
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Building your external funnel
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The fundamental challenge for any OnlyFans creator is traffic —
              getting new people to find and subscribe. We help build the TikTok
              and Instagram presence that drives consistent subscriber acquisition,
              designed around your specific niche and persona rather than a
              generic template.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Message management and subscriber retention
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We handle your subscriber DMs professionally — building genuine
              engagement, managing PPV, and developing the subscriber relationships
              that produce consistent monthly income rather than one-time spending.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Account strategy tailored to your situation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We build strategy around your account specifically — pricing, content
              approach, growth plan — not a template lifted from a different creator.
              That personalisation is part of what makes management work.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Based in Birmingham and ready to grow?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We work with creators across the Midlands and the UK. Apply below.
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

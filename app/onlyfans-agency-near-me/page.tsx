import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "OnlyFans Agency Near Me — Why Location Matters Less Than You Think",
  description:
    "Searching for an OnlyFans agency near you? Here's why proximity is not the right criterion — and what to look for instead when choosing an agency.",
  alternates: { canonical: "/onlyfans-agency-near-me" },
  openGraph: {
    title: "OnlyFans Agency Near Me — Why Location Matters Less Than You Think",
    description:
      "Searching for an OnlyFans agency near you? Here's why proximity is not the right criterion — and what to look for instead when choosing an agency.",
    url: "/onlyfans-agency-near-me",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyFans Agency Near Me — Why Location Matters Less Than You Think",
    description:
      "Searching for an OnlyFans agency near you? Here's why proximity is not the right criterion — and what to look for instead when choosing an agency.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>OnlyFans Agency Near Me</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          OnlyFans agency near me — why location is the wrong criterion
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Searching for an OnlyFans agency &ldquo;near me&rdquo; is understandable —
            the instinct to want local, accessible support makes sense. But it is
            not the right filter for this particular service, and using it can lead
            you toward agencies that are not the best fit for your actual needs.
          </p>
          <p>
            This is an honest explanation of why location does not determine quality
            in this industry — and what criteria actually should guide your decision.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          Why OnlyFans management is inherently remote
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Every single function that a management agency performs happens
            digitally. Message management takes place in your OnlyFans inbox.
            Social media strategy is executed through apps. Account strategy and
            reporting happen over calls and shared documents. There is no part of
            the management operation that requires physical presence.
          </p>
          <p>
            A well-run agency can serve a creator in Glasgow just as effectively
            as one in London. The quality of the management depends on the expertise,
            the process, and the commitment of the team — not on whether they share
            a postcode with you.
          </p>
          <p>
            What proximity does affect is convenience for in-person meetings —
            which almost no agency uses as a standard part of their process anyway.
            The idea of an &ldquo;agency near me&rdquo; reflects an expectation
            that does not match how these operations actually work.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What to look for instead of proximity
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Same timezone and reliable communication
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The practical benefit of a &ldquo;local&rdquo; agency is often
              communication timing — being reached during working hours, getting
              responses promptly. A UK-based agency solves this just as well as
              a Birmingham-based one. Avoid agencies operating in significantly
              different timezones — the communication lag creates real problems
              in a responsive operation like message management.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              UK legal accountability
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Working with a UK-registered agency means your agreement operates
              under UK law, the agency can be verified on Companies House, and
              any dispute has a clear legal framework. This matters more than
              proximity. Xentra Group is operated by CoachFlo Ltd — a UK registered
              company, verifiable, accountable.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Understanding of the UK creator market
            </h3>
            <p className="text-gray-600 leading-relaxed">
              UK audiences, UK platform behaviour, and the UK creator ecosystem
              have specific dynamics. A UK-based agency that works with UK creators
              understands these in a way that an overseas operation targeting UK
              keywords does not. That market knowledge matters for strategy.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          How Xentra Group serves creators across the UK
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            We work with creators in London, Birmingham, Manchester, Leeds, Glasgow,
            and everywhere else in the UK. The process is identical regardless of
            location — a thorough account review, a strategy built around your
            specific situation, and full management executed with genuine attention.
          </p>
          <p>
            You do not need an agency near you. You need an agency that is good
            at what they do, transparent about how they work, and genuinely invested
            in your results. That is what we offer.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Ready to work with a UK agency that actually delivers?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below — wherever you are in the UK.
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

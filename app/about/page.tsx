import type { Metadata } from "next";
import SectionWrapper from "../components/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Xentra Group",
  description:
    "A small, focused team helping OnlyFans creators grow with structure.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Xentra Group",
    description:
      "A small, focused team helping OnlyFans creators grow with structure.",
    url: "/about",
    siteName: "Xentra Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Xentra Group",
    description:
      "A small, focused team helping OnlyFans creators grow with structure.",
  },
};

export default function AboutPage() {
  return (
    <SectionWrapper className="py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
          About us
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12">
          We&apos;re a small team that does this properly.
        </h1>

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Xentra Group was built around one idea: that creators deserve better
            than what most agencies offer. Too many management companies take on
            as many creators as possible, charge high rates, and deliver very
            little. We operate differently.
          </p>

          <p>
            We work closely with a small number of creators at a time. That
            means every person we partner with gets real attention, a real
            strategy, and real results. Not a template. Not a generic playbook.
            A system built specifically around them.
          </p>

          <p>
            Our focus is income and brand. We care about where your account is
            in six months, not just this week. That means building structure
            from the ground up — consistent messaging, a clear personal brand,
            and a strategy that compounds over time.
          </p>

          <p>
            We&apos;re not a large agency. We don&apos;t want to be. We want to
            be the team that creators actually trust — the one that shows up,
            does the work, and helps build something that lasts.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-4">
            Want to know if we&apos;re a good fit?
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

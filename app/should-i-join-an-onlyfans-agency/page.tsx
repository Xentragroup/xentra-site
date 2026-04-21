import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "Should I Join an OnlyFans Agency? A Decision Framework",
  description:
    "Not sure whether to join an OnlyFans agency? This is a practical decision framework — the questions to ask yourself, the signs you're ready, and the signs you're not.",
  alternates: { canonical: "/should-i-join-an-onlyfans-agency" },
  openGraph: {
    title: "Should I Join an OnlyFans Agency? A Decision Framework",
    description:
      "Not sure whether to join an OnlyFans agency? This is a practical decision framework — the questions to ask yourself, the signs you're ready, and the signs you're not.",
    url: "/should-i-join-an-onlyfans-agency",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Should I Join an OnlyFans Agency? A Decision Framework",
    description:
      "Not sure whether to join an OnlyFans agency? This is a practical decision framework — the questions to ask yourself, the signs you're ready, and the signs you're not.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>Should I Join an OnlyFans Agency</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          Should I join an OnlyFans agency? How to make the right decision
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            This is a question that comes up constantly — and the answer is different
            for every creator. Whether agency management is right for you depends
            on where your account is, what your bottlenecks are, and what you are
            actually looking for.
          </p>
          <p>
            This is a practical framework for making the decision clearly, without
            the noise of agency marketing or horror stories from creators who had
            bad experiences.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          Questions to ask yourself first
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Before you look at any agency, it is worth being honest about your
            current situation. These questions will help clarify what you actually
            need and whether management is the right answer.
          </p>
          <p>
            Am I posting consistently? If the answer is no, an agency will struggle
            to help you — management optimises what exists. Build the content habit
            first.
          </p>
          <p>
            What is holding my income back — the number of subscribers, or what
            I make per subscriber? If you have a decent subscriber base but low
            average revenue per subscriber, message management and PPV strategy
            can make a significant difference. If you have minimal subscribers,
            the growth and social media side of management is more urgent.
          </p>
          <p>
            How much time am I spending on things an agency would handle? If DMs
            and strategy are consuming hours you do not have, that is a strong
            signal that management would free you to do more of what matters.
          </p>
          <p>
            Am I comfortable with someone else having access to my account? This
            is a legitimate concern that deserves a direct answer. A transparent,
            well-structured agency will give you visibility into everything — but
            if you are fundamentally not comfortable with the arrangement, it is
            not the right move regardless of financial logic.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          Signs you are ready to work with an agency
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              You are already creating but stuck at a plateau
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If you have been posting for three or more months, you have a clear
              niche, your content is consistent, but income has stopped growing —
              that is the classic management-ready profile. The foundation is there.
              The operational structure to build on it is missing.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              You want to treat this seriously
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If OnlyFans is something you want to build into a meaningful income
              source — not just a hobby — having professional support from an early
              stage sets you up much better than trying to retrofit structure after
              you have outgrown your current approach.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              You are time-limited
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Creators who are managing OnlyFans alongside other work, study, or
              commitments are often the ones who benefit most from management.
              Delegating the operational heavy lifting allows you to stay consistent
              and growing without burning out.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          Signs you should wait
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            You are still in the first few months of creating and have not
            established a consistent output yet. Build the habit first.
          </p>
          <p>
            You have not yet identified your niche or style — management cannot
            solve a positioning problem that has not been worked through yet.
          </p>
          <p>
            You are considering joining an agency primarily because you are
            frustrated with slow growth and hoping management will be a quick fix.
            It is not. Management creates better conditions for growth over time —
            it does not produce instant results.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Think you&apos;re ready?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below. We review every application personally and will give
            you an honest answer about whether we think management is the right
            move for you right now.
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

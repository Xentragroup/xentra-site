import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "What Does an OnlyFans Agency Do? A Day-by-Day Breakdown",
  description:
    "What does an OnlyFans agency actually do on a day-to-day basis? A detailed, honest breakdown of what management covers, what it doesn't, and how it works in practice.",
  alternates: { canonical: "/what-does-an-onlyfans-agency-do" },
  openGraph: {
    title: "What Does an OnlyFans Agency Do? A Day-by-Day Breakdown",
    description:
      "What does an OnlyFans agency actually do on a day-to-day basis? A detailed, honest breakdown of what management covers, what it doesn't, and how it works in practice.",
    url: "/what-does-an-onlyfans-agency-do",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Does an OnlyFans Agency Do? A Day-by-Day Breakdown",
    description:
      "What does an OnlyFans agency actually do on a day-to-day basis? A detailed, honest breakdown of what management covers, what it doesn't, and how it works in practice.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>What Does an OnlyFans Agency Do</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          What does an OnlyFans agency do — a detailed, practical breakdown
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            The short answer: an OnlyFans agency handles the business operations
            of your account so you can focus on creating content. But that short
            answer covers a lot of ground. Here is a more detailed look at what
            a professional agency actually does day-to-day, week-to-week, and
            month-to-month.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          Daily operations
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Message management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This is the most time-intensive daily task. The agency handles all
              subscriber DMs — responding to messages, maintaining conversation flow,
              building subscriber relationships, and running pay-per-view content
              sends. This is not simply replying to messages. Done well, it involves
              understanding each subscriber relationship and managing it in a way
              that drives both retention and revenue. A professional messaging
              operation is a meaningful income lever that most self-managed creators
              do not fully utilise.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Content scheduling and posting
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Many agencies handle the actual posting of content — receiving
              content from the creator, scheduling it for optimal times, and
              managing the feed so the account always has fresh material. This
              removes a logistical task from the creator&apos;s plate and ensures
              consistency even when the creator is busy or travelling.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          Weekly operations
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Strategy review and adjustment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A good agency reviews account performance regularly — which content
              is converting, how message engagement is performing, what the
              subscriber retention numbers look like. Strategy is adjusted based
              on actual data rather than assumption.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Social media management and growth work
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Growing the TikTok and Instagram presence that drives subscribers is
              ongoing work. Agencies with a proper growth focus are consistently
              working on content strategy for these platforms, monitoring what is
              performing, and adjusting the approach to maintain an active and
              growing external funnel.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          Monthly operations
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Income review and reporting
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Professional management includes transparent reporting on what has
              happened across the month — subscriber numbers, revenue breakdown,
              PPV performance, message engagement metrics. You should always know
              exactly what your account is doing and why.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Strategic planning
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Monthly check-ins with the creator to align on the next period —
              what is working, what to adjust, what the focus should be for the
              coming weeks. Management is a collaborative relationship, not a
              black box.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          What an agency does not do
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            An agency does not create your content. The content is yours — the
            agency handles everything around it. No legitimate agency directs your
            image, dictates what you create, or takes creative control of your
            account.
          </p>
          <p>
            An agency does not guarantee results. They create better conditions
            for growth and optimise what you have. How well that translates to
            income depends significantly on the creator and the account.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Want this running for your account?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We work with a small number of creators and deliver this properly.
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

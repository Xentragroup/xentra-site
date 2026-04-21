import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "OnlyFans Agency vs Doing It Yourself — A Genuine Comparison",
  description:
    "Should you run your OnlyFans yourself or work with an agency? A real comparison of both paths — the trade-offs, the economics, and how to decide which is right for you.",
  alternates: { canonical: "/onlyfans-agency-vs-doing-it-yourself" },
  openGraph: {
    title: "OnlyFans Agency vs Doing It Yourself — A Genuine Comparison",
    description:
      "Should you run your OnlyFans yourself or work with an agency? A real comparison of both paths — the trade-offs, the economics, and how to decide which is right for you.",
    url: "/onlyfans-agency-vs-doing-it-yourself",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyFans Agency vs Doing It Yourself — A Genuine Comparison",
    description:
      "Should you run your OnlyFans yourself or work with an agency? A real comparison of both paths — the trade-offs, the economics, and how to decide which is right for you.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>OnlyFans Agency vs Doing It Yourself</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          OnlyFans agency vs doing it yourself — a genuine comparison
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Both paths work for the right creator in the right situation. This is
            not an argument for agencies — it is a genuine comparison of what each
            path requires and what you give up with either choice.
          </p>
          <p>
            Understanding the real trade-offs will help you make a decision that
            is right for your situation, rather than one driven by marketing from
            either side.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          What doing it yourself actually requires
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            Running OnlyFans independently is entirely viable — many successful
            creators do it with no agency involvement. But it requires you to wear
            multiple hats simultaneously: content creator, strategist, social media
            manager, DM handler, pricing analyst, and growth planner.
          </p>
          <p>
            Most creators who go solo underestimate the message management time
            commitment. A genuinely active account with hundreds of subscribers
            generates a significant daily message volume. Handling that properly —
            building engagement, running PPV, managing subscriber relationships —
            is a part-time job on its own, on top of content creation.
          </p>
          <p>
            The other consistent challenge is objectivity. It is difficult to
            analyse your own account clearly — to identify what is working and
            what is not, to make pricing decisions without emotion, and to keep
            strategy consistent when results are slow. An external perspective
            helps with this in a way that self-management structurally cannot.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          What you give up by working with an agency
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              A percentage of your revenue
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This is the most obvious trade-off. If you are making £2,000/month
              and paying 25 percent commission, that is £500 going to the agency.
              Whether that is worth it depends entirely on whether the agency is
              generating more than £500 in incremental value — through better
              message management, subscriber growth, or strategic improvements you
              would not have made alone.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Some degree of control over day-to-day operations
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A management agency handles DMs on your behalf. Some creators are
              comfortable with this; others are not. A good agency will be
              transparent about how your messages are handled and maintain a tone
              that reflects your persona — but if full personal control over every
              subscriber interaction is important to you, self-management is the
              better fit.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              The learning that comes from doing it yourself
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Running your own account teaches you things that management insulates
              you from. Some creators value that direct knowledge of the platform —
              what converts, what retains, what messaging approaches work. If
              learning the craft yourself is part of the goal, agency management
              short-circuits that process.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          How to decide
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            If you are time-poor, have an account with clear untapped potential,
            and want to treat this as a serious income source — agency management
            is likely the right call. The commission pays for itself when the
            operation is working properly.
          </p>
          <p>
            If you are still building, enjoy the direct relationship with your
            subscribers, and want to understand the platform yourself before
            delegating — self-management makes sense for now. There is nothing
            wrong with starting solo and bringing in support when you have hit
            a genuine ceiling.
          </p>
          <p>
            The worst outcome is working with an agency that does not actually
            deliver — you lose the commission without gaining the benefit. That
            is why choosing the right agency matters far more than the agency
            versus self-management question.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Decided that management is the right move?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We work with creators who are ready to grow seriously. Apply below.
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

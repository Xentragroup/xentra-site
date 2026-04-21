import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "OnlyFans Beginner Guide — Everything You Need to Know Before You Start",
  description:
    "The complete OnlyFans beginner guide — from account setup and pricing to social media strategy and subscriber management. Everything a new creator actually needs to know.",
  alternates: { canonical: "/onlyfans-beginner-guide" },
  openGraph: {
    title: "OnlyFans Beginner Guide — Everything You Need to Know Before You Start",
    description:
      "The complete OnlyFans beginner guide — from account setup and pricing to social media strategy and subscriber management. Everything a new creator actually needs to know.",
    url: "/onlyfans-beginner-guide",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyFans Beginner Guide — Everything You Need to Know Before You Start",
    description:
      "The complete OnlyFans beginner guide — from account setup and pricing to social media strategy and subscriber management. Everything a new creator actually needs to know.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>OnlyFans Beginner Guide</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          OnlyFans beginner guide — everything you actually need to know
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            This is a complete overview for new creators — covering the things
            that matter most before you start, how to set up for success, and
            what to focus on in the critical first months. No fluff.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          Before you launch
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Understand how the platform actually works
            </h3>
            <p className="text-gray-600 leading-relaxed">
              OnlyFans is a subscription platform where you charge a monthly fee
              for access to your content. There is no discovery mechanism — the
              platform does not bring subscribers to you. Every subscriber will
              come from outside the platform, primarily from your social media.
              This is the most important thing to understand before you start.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Know your niche
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Going into OnlyFans without a clear sense of what your content is
              and who it is for means your early weeks will be spent figuring
              this out in public. It is much more effective to have a defined
              direction before you start, even if that direction evolves over time.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Have a social media presence ready or being built
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Do not launch OnlyFans without any social media presence. Ideally,
              start building TikTok or Instagram a few weeks before you launch
              your OnlyFans, so there is some audience to direct to it.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          Account setup essentials
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Profile and pricing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A compelling bio, strong profile image, and good banner. Preview
              content that represents your best work without giving everything away.
              For new accounts without an existing following, pricing between
              £6 and £12 per month is usually effective — not so cheap you devalue
              yourself, not so expensive you create a barrier for new subscribers.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Payment setup
            </h3>
            <p className="text-gray-600 leading-relaxed">
              OnlyFans pays out to a bank account with a minimum withdrawal threshold.
              Set up your payment details before you start so payouts happen
              automatically. Understand that OnlyFans takes 20 percent of all
              earnings — your income figure is what remains after that deduction.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          Growing from zero
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Post consistently on social media before optimising your OnlyFans
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Daily or near-daily TikTok posting is the highest-leverage activity
              for a new creator. Build the audience that will become subscribers.
              Everything else follows from that.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Engage every subscriber personally
            </h3>
            <p className="text-gray-600 leading-relaxed">
              When you have ten subscribers, message all ten. Build real relationships.
              These early subscribers will be your most loyal, and they will tell
              others about you.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Be patient with the first three months
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Slow growth in the first three months is normal, not a failure signal.
              The creators who push through it and stay consistent are the ones
              who see meaningful growth in months four through twelve. This is not
              a quick income — it is a business you are building.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Ready to build this with proper support?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We work with beginners who are serious and consistent. Apply below.
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

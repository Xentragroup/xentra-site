import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "Is an OnlyFans Agency Worth It? An Honest Answer",
  description:
    "Is joining an OnlyFans agency actually worth it? An honest breakdown of the ROI, when management pays off, when it doesn't, and what to expect before you sign.",
  alternates: { canonical: "/is-an-onlyfans-agency-worth-it" },
  openGraph: {
    title: "Is an OnlyFans Agency Worth It? An Honest Answer",
    description:
      "Is joining an OnlyFans agency actually worth it? An honest breakdown of the ROI, when management pays off, when it doesn't, and what to expect before you sign.",
    url: "/is-an-onlyfans-agency-worth-it",
    siteName: "Xentra Group",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is an OnlyFans Agency Worth It? An Honest Answer",
    description:
      "Is joining an OnlyFans agency actually worth it? An honest breakdown of the ROI, when management pays off, when it doesn't, and what to expect before you sign.",
  },
};

export default function Page() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="max-w-2xl">

        <p className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <span>Is an OnlyFans Agency Worth It</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 leading-snug mb-6">
          Is an OnlyFans agency worth it? The honest answer
        </h1>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            This question gets asked constantly, and most answers online come from
            agencies (who are incentivised to say yes) or from creators who had
            a bad experience with a specific agency (who are incentivised to say no).
            Neither is particularly useful.
          </p>
          <p>
            The honest answer is: it depends on where you are, what the agency
            is offering, and whether the commission you pay is likely to return
            more than it costs. Here is how to think through that.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          The basic ROI question
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            An agency takes a percentage of your revenue — typically 20 to 35 percent.
            For that to be worth it, the agency needs to generate more incremental
            revenue than the commission they take. If you are making £500/month and
            an agency takes 25 percent (£125/month), management needs to lift your
            income by more than £125 to be financially positive.
          </p>
          <p>
            The question is whether that is realistic given your specific situation.
            If the agency is handling message management that is currently generating
            minimal PPV revenue, building a social media funnel you have not developed,
            and optimising an account that has clear untapped potential — yes, that
            commission is very likely to return positive ROI. If the account is already
            performing close to its ceiling and the bottleneck is content quality or
            niche fit rather than operations, management will not move the needle much.
          </p>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
          When an agency is genuinely worth it
        </h2>
        <div className="space-y-8 mb-14">

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              You are creating consistently but stuck
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If you have been posting consistently for several months, your content
              quality is solid, but your income is plateaued — that is exactly the
              scenario where management has the highest impact. The raw material is
              there. The bottleneck is strategy, message management, or growth
              infrastructure. Those are precisely what an agency addresses.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              You have no external social media strategy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If you are not actively building on TikTok or Instagram, your
              subscriber acquisition is likely slow or dependent on paid promotions.
              A management agency that helps build that external funnel will unlock
              a growth channel you currently do not have.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              You are spending hours a day on messages
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Time is the most finite resource a creator has. If you are spending
              three or four hours a day managing DMs, that is time not spent creating
              content, building social media, or doing anything else. The value of
              message management is partly the revenue it generates directly and
              partly the time it gives back to you.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
          When an agency is probably not worth it
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-14">
          <p>
            If you are still working out your niche, posting inconsistently, or
            in the first few months of creating — management is premature. The
            infrastructure needs something to work with. Build the content habit
            first.
          </p>
          <p>
            If the agency you are considering cannot clearly explain what they
            will actually do for your account — specific actions, measurable
            outcomes, realistic timelines — they are unlikely to deliver ROI.
            Vague promises of &ldquo;growth&rdquo; are not a business case.
          </p>
          <p>
            If the commission structure is unclear, the exit terms are restrictive,
            or the contract gives the agency rights over your account that you are
            not comfortable with — walk away. The financial question only matters
            if the relationship is structured correctly.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            Think management might be the right move?
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Apply below. We review every application personally and will tell
            you honestly if we think we can help.
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

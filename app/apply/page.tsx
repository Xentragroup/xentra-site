import type { Metadata } from "next";
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: "Apply — Xentra Group",
  description: "Apply to work with Xentra Group and take your OnlyFans income seriously.",
};

export default function ApplyPage() {
  return (
    <SectionWrapper className="py-20">
      <div className="max-w-lg">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
          Get started
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-3">
          Tell us a bit about you
        </h1>
        <p className="text-gray-500 mb-12 leading-relaxed">
          Fill in the form below and we&apos;ll get back to you. We review every
          application personally.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Age
            </label>
            <input
              type="number"
              name="age"
              placeholder="Your age"
              min={18}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Instagram handle
            </label>
            <input
              type="text"
              name="instagram"
              placeholder="@yourusername"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Current monthly earnings
            </label>
            <input
              type="text"
              name="earnings"
              placeholder="e.g. £500/month, just starting out, etc."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              What are your goals?
            </label>
            <textarea
              name="goals"
              rows={4}
              placeholder="Tell us what you're hoping to achieve and why you're reaching out..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-rose-400 hover:bg-rose-500 text-white font-medium py-3.5 rounded-full transition-colors text-sm"
          >
            Submit application
          </button>

          <p className="text-xs text-gray-400 text-center">
            We&apos;ll respond to your application within 48 hours.
          </p>
        </form>
      </div>
    </SectionWrapper>
  );
}

import type { Metadata } from "next";
import SectionWrapper from "../components/SectionWrapper";
import ApplyForm from "./ApplyForm";

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
        <ApplyForm />
      </div>
    </SectionWrapper>
  );
}

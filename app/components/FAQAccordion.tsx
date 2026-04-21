"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do I keep full control of my account?",
    a: "Yes — completely. You own your OnlyFans account, your logins, and all your payouts. We work with you, not for you. You can stop at any time.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most creators see a meaningful lift in revenue within the first 30 days. Compounding growth — where the subscriber base genuinely builds — typically becomes clear over 3–6 months.",
  },
  {
    q: "What if I've had a bad experience with an agency before?",
    a: "We hear this constantly. Most agencies over-promise and then disappear. We work with a small number of creators, stay hands-on, and are fully transparent about what we do and what you earn.",
  },
  {
    q: "Do I need a large following to work with you?",
    a: "Not necessarily. What matters more is your commitment to building consistently and your willingness to work on brand and strategy — not just content output.",
  },
  {
    q: "How does pricing work?",
    a: "We work on a revenue share basis — we only make money when you do. Reach out and we'll walk you through exactly how it works for your situation.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes. We don't lock creators into long contracts. If it's not working, you can leave. We're confident enough in our results to back that with a 30-day guarantee.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-100">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left text-gray-900 hover:text-rose-500 transition-colors"
          >
            <span className="font-medium pr-8">{faq.q}</span>
            <span className="shrink-0 text-gray-400 text-xl leading-none font-light">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <p className="pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

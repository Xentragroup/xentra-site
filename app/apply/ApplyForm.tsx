"use client";

import { useState, FormEvent } from "react";

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!;

interface Fields {
  name: string;
  age: string;
  instagram: string;
  earnings: string;
  goals: string;
}

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent disabled:opacity-50";

export default function ApplyForm() {
  const [fields, setFields] = useState<Fields>({
    name: "",
    age: "",
    instagram: "",
    earnings: "",
    goals: "",
  });
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(): boolean {
    const next: Partial<Fields> = {};
    if (!fields.name.trim()) next.name = "Please enter your name.";
    const age = Number(fields.age);
    if (!fields.age.trim()) next.age = "Please enter your age.";
    else if (isNaN(age) || age < 18) next.age = "You must be 18 or older.";
    if (!fields.instagram.trim()) next.instagram = "Please enter your Instagram handle.";
    if (!fields.earnings.trim()) next.earnings = "Please describe your current earnings.";
    if (!fields.goals.trim()) next.goals = "Please tell us about your goals.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function set(field: keyof Fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  }

  if (status === "success") {
    return (
      <div className="py-16 text-center">
        <p className="text-2xl font-semibold text-gray-900 mb-3">Application received.</p>
        <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">
          Thank you — we review every application personally and will be in
          touch within 48 hours.
        </p>
      </div>
    );
  }

  const disabled = status === "loading";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {status === "error" && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:admin@xentragroup.co.uk" className="underline">
            admin@xentragroup.co.uk
          </a>
          .
        </p>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={fields.name}
          onChange={set("name")}
          disabled={disabled}
          className={inputClass}
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Age</label>
        <input
          type="number"
          name="age"
          placeholder="Your age"
          min={18}
          value={fields.age}
          onChange={set("age")}
          disabled={disabled}
          className={inputClass}
        />
        {errors.age && <p className="mt-1.5 text-xs text-red-500">{errors.age}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Instagram handle</label>
        <input
          type="text"
          name="instagram"
          placeholder="@yourusername"
          value={fields.instagram}
          onChange={set("instagram")}
          disabled={disabled}
          className={inputClass}
        />
        {errors.instagram && <p className="mt-1.5 text-xs text-red-500">{errors.instagram}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Current monthly earnings
        </label>
        <input
          type="text"
          name="earnings"
          placeholder="e.g. £500/month, just starting out, etc."
          value={fields.earnings}
          onChange={set("earnings")}
          disabled={disabled}
          className={inputClass}
        />
        {errors.earnings && <p className="mt-1.5 text-xs text-red-500">{errors.earnings}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          What are your goals?
        </label>
        <textarea
          name="goals"
          rows={4}
          placeholder="Tell us what you're hoping to achieve and why you're reaching out..."
          value={fields.goals}
          onChange={set("goals")}
          disabled={disabled}
          className={`${inputClass} resize-none`}
        />
        {errors.goals && <p className="mt-1.5 text-xs text-red-500">{errors.goals}</p>}
      </div>

      <button
        type="submit"
        disabled={disabled}
        className="w-full bg-rose-400 hover:bg-rose-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3.5 rounded-full transition-colors text-sm"
      >
        {disabled ? "Sending…" : "Submit application"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We&apos;ll respond to your application within 48 hours.
      </p>
    </form>
  );
}

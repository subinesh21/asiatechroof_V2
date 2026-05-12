"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How much does general contracting work cost in Singapore?", a: "Costs vary depending on the scope and complexity of the project. KSP General Contractors offers free on-site inspections to provide an accurate quote with no obligation." },
  { q: "How long does a typical renovation or repair job take?", a: "Most projects take 1–5 days depending on the area size and requirements. Our professional team works efficiently to minimize disruption to your property." },
  { q: "Do you serve all areas in Singapore?", a: "Yes, KSP General Contractors serves all areas across Singapore including residential, commercial, and industrial properties." },
  { q: "Are you a registered builder in Singapore?", a: "Yes, we are a registered Class 1 Builder in Singapore, ensuring that all our works meet the highest standards of safety and quality." },
  { q: "How quickly can you respond to an emergency repair?", a: "We offer 24-hour response for urgent repair needs across Singapore to protect your property from further damage." },
  { q: "What types of services do you specialize in?", a: "We specialize in a wide range of services including painting, waterproofing, roof repairs, P.U. pressure grouting, and general construction works." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-pad grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Frequently Asked<br />Questions
          </h2>
          <p className="mt-6 max-w-sm text-ink-muted">
            Quick answers to the questions our clients ask us most often.
          </p>
        </div>

        <div className="md:col-span-7">
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((f, i) => (
              <button key={i} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-start justify-between gap-6 py-6 text-left">
                <div className="flex-1">
                  <p className="font-display text-lg font-semibold text-ink md:text-xl">{f.q}</p>
                  {open === i && <p className="mt-3 text-sm leading-relaxed text-ink-muted">{f.a}</p>}
                </div>
                <span className="mt-1 grid h-9 w-9 flex-none place-items-center rounded-full border border-ink/15 text-ink">
                  {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

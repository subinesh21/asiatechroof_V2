"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How much does roof repair cost in Singapore?", a: "Roof repair costs in Singapore vary depending on the size and type of damage. Asia Tech Roofing offers free on-site inspections to provide an accurate quote with no obligation." },
  { q: "How long does a roof waterproofing job take?", a: "Most waterproofing jobs take 1–3 days depending on the area size. Our certified team works efficiently to minimize disruption to your property." },
  { q: "Do you serve all areas in Singapore?", a: "Yes, Asia Tech Roofing serves all areas across Singapore including HDB estates, landed properties, commercial buildings, and industrial facilities." },
  { q: "How quickly can you respond to an emergency roof leak?", a: "We offer 24-hour emergency response for roof leaks across Singapore to minimize water damage to your property." },
  { q: "What are common roofing problems in Singapore?", a: "Common roofing issues in Singapore include leaks, tile damage, and moss growth due to the tropical climate." },
  { q: "How can I prevent roof leaks in Singapore?", a: "Regular inspections, timely repairs, and proper drainage maintenance can help prevent roof leaks in Singapore." },
  { q: "What's the best roofing material for Singapore's climate?", a: "Roofing materials like metal or concrete tiles are ideal for Singapore's climate, offering durability and heat-resistance." },
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
            Quick answers to the questions homeowners ask us most often.
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

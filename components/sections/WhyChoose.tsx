"use client";
import { useReveal } from "@/hooks/useReveal";
import { ShieldCheck, Wrench, Award } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Free Site Inspection", body: "We assess your roof on-site at no cost — giving you an honest evaluation and clear quote." },
  { icon: Wrench, title: "Certified Workers", body: "Every technician is fully trained, certified, and backed by 20+ years of experience." },
  { icon: Award, title: "Fast 24hr Response", body: "Roof emergencies can't wait. Our team responds within 24 hours to minimise damage." },
];


export default function WhyChoose() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-ink py-20 text-white md:py-28">
      <div className="container-pad">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/50">— Why Choose Us</p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
            Why Homeowners <span className="font-serif italic text-white/70">Trust Us.</span>
          </h2>
        </div>

        <div ref={ref} className="grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="group bg-ink p-8 transition-colors hover:bg-white/5 md:p-10">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-ink transition-transform group-hover:rotate-12">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-10 font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

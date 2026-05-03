"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); };

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Certified Workers" },
  { value: 24, suffix: "hr", label: "Response Time" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const ctx = gsap.context(() => {
      const nums = el.querySelectorAll<HTMLElement>(".stat-num");
      nums.forEach((n) => {
        const target = Number(n.dataset.target);
        const suffix = n.dataset.suffix ?? "";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: n, start: "top 90%" },
          onUpdate: () => {
            n.textContent = Math.round(obj.v).toLocaleString() + suffix;
          },
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-background">
      <div ref={ref} className="container-pad grid grid-cols-2 gap-10 py-16 md:grid-cols-4 md:gap-6 md:py-24">
        {stats.map((s) => (
          <div key={s.label}>
            <p
              className="stat-num font-display text-5xl font-bold text-ink md:text-6xl"
              data-target={s.value}
              data-suffix={s.suffix}
            >
              0{s.suffix}
            </p>
            <p className="mt-3 text-sm text-ink-muted md:text-base">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

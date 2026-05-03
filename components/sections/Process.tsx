"use client";
import { useEffect, useRef } from "react";
import { Search, Map, Wrench, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); };

const steps = [
  {
    title: "Inspection & Consultation.",
    desc: "We assess your roof and discuss the best solutions for your needs.",
    icon: Search,
  },
  {
    title: "Planning & Quotation.",
    desc: "We develop a clear plan & upfront pricing for your project.",
    icon: Map,
  },
  {
    title: "Installation & Execution.",
    desc: "Our expert team installs your roof efficiently and with precision.",
    icon: Wrench,
  },
  {
    title: "Final Check & Maintenance.",
    desc: "We ensure quality, clean up the site, and provide ongoing care advice.",
    icon: CheckCircle2,
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f8f7f4] py-24 md:py-32">
      <div className="container-pad">
        <h2 className="max-w-md font-display text-4xl font-bold leading-[1.1] text-ink md:text-5xl lg:text-6xl">
          Our Roofing<br />Process.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="process-card flex flex-col items-start bg-white p-10 transition-transform hover:-translate-y-1 shadow-sm"
            >
              <div className="mb-20">
                <step.icon className="h-10 w-10 text-ink" strokeWidth={1.5} />
              </div>
              
              <h3 className="mb-4 font-display text-xl font-bold leading-tight text-ink md:text-2xl">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-ink/60">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

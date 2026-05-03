"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
;
;
;

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); };

const projects = [
  { 
    year: "2025", 
    title: "Fast and Reliable Roof Leak Repair in Singapore", 
    warranty: "10-Year Warranty", 
    img: "/Projects/IMG-20250413-WA0049.webp" 
  },
  { 
    year: "2023", 
    title: "Commercial Building Waterproofing Solution", 
    warranty: "7-Year Warranty", 
    img: "/Projects/IMG-20221215-WA0065.webp" 
  },
  { 
    year: "2022", 
    title: "High-Quality Residential Roof Overhaul", 
    warranty: "10-Year Warranty", 
    img: "/Projects/IMG-20221215-WA0047.webp" 
  },
  { 
    year: "2024", 
    title: "Industrial Metal Roofing Project", 
    warranty: "5-Year Warranty", 
    img: "/Projects/IMG-20221215-WA0062.webp" 
  },
];

export default function ProjectsRecent() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !stackRef.current) return;
    const section = sectionRef.current;
    const cards = stackRef.current.querySelectorAll<HTMLElement>(".project-card");

    const ctx = gsap.context(() => {
      // All cards start off-screen (below) except the first
      cards.forEach((card, i) => {
        if (i > 0) gsap.set(card, { yPercent: 100 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * (projects.length + 0.5)}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate(self) {
            const idx = Math.min(
              projects.length - 1,
              Math.floor(self.progress / (1 / projects.length))
            );
            setActive(idx);
          },
        },
      });

      // Each card slides up from bottom and covers the previous one
      cards.forEach((card, i) => {
        if (i > 0) {
          tl.to(
            card,
            { yPercent: 0, ease: "power2.out", duration: 1 },
            (i - 1) * 1
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-background"
    >
      {/* Header — left-aligned, above the text column */}
      <div className="absolute top-0 left-0 z-20 pt-10 px-8 md:pt-12 md:px-16 flex items-end gap-6">
        <h2 className="font-display text-4xl font-semibold text-ink md:text-6xl">
          Our Recent Projects
        </h2>
        <Link href="/projects" className="btn-ghost-dark text-sm inline-flex shrink-0 mb-1">
          More Projects <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Stacking cards container */}
      <div ref={stackRef} className="relative h-full w-full">
        {projects.map((p, i) => {
          const isActive = active === i;
          return (
            <div
              key={p.title}
              className="project-card absolute inset-0 h-full w-full bg-background"
              style={{ zIndex: i + 1 }}
            >
              <div className="grid h-full grid-cols-1 md:grid-cols-12">

                {/* Left — Text */}
                <div className="flex flex-col justify-center px-8 pt-28 pb-10 md:col-span-5 md:px-16 md:pt-0 md:pb-0">
                  <p className="font-display text-sm tracking-widest text-ink/30 uppercase">
                    {p.year}
                  </p>
                  <h3 className={`mt-4 font-display text-3xl font-bold leading-tight transition-colors duration-500 md:text-5xl ${
                    isActive ? "text-ink" : "text-ink/30"
                  }`}>
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm text-ink/50">[ • {p.warranty} ]</p>
                  <Link href="/projects" className="btn-ghost-dark mt-8 self-start text-sm">
                    View Project <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Right — Image */}
                <div className="relative overflow-hidden md:col-span-7">
                  <Image width={800} height={600}
                    src={p.img}
                    alt={p.title}
                    className={`h-full w-full object-cover transition-transform [transition-duration:1200ms] ${
                      isActive ? "scale-100" : "scale-110"
                    }`}
                    loading="lazy"
                  />
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

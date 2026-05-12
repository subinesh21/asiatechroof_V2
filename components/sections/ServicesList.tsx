"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Eye } from "lucide-react";
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
;
;
;
;

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); };

import { services } from "@/lib/services-data";

export default function ServicesList() {
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !innerRef.current) return;
    const section = sectionRef.current;
    const inner = innerRef.current;
    const rows = inner.querySelectorAll<HTMLElement>(".service-row");

    const ctx = gsap.context(() => {
      // ── Master Timeline: Reveal (0-20%) -> Pin/Scroll List (20-100%) ──
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * (services.length + 0.5)}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate(self) {
            // Only update active index AFTER reveal (progress > 0.10)
            if (self.progress > 0.10) {
              const listProgress = (self.progress - 0.10) / 0.90;
              const idx = Math.min(
                services.length - 1,
                Math.floor(listProgress / (1 / services.length))
              );
              setActive(idx);
            } else {
              setActive(0);
            }
          },
        },
      });

      // 1. Reveal Animation (starts at the very beginning of the pin)
      masterTl.fromTo(
        ".section-bg-layer",
        { xPercent: 50, yPercent: 100 },
        { xPercent: 0, yPercent: 0, ease: "none", duration: 0.5 }
      );
      masterTl.fromTo(
        inner,
        { xPercent: 30, yPercent: 30, opacity: 0 },
        { xPercent: 0, yPercent: 0, opacity: 1, ease: "none", duration: 0.4 },
        0.05
      );

      // 2. Row Entry Animations (staggered slightly after reveal begins)
      rows.forEach((row, i) => {
        gsap.set(row, { yPercent: 40, opacity: 0, visibility: "visible" });
        masterTl.to(
          row,
          { yPercent: 0, opacity: 1, ease: "power2.out", duration: 0.8 },
          0.5 + i * 0.3 // Starts immediately after the 0.5 reveal
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen text-white overflow-hidden flex items-start z-20"
    >
      <div className="section-bg-layer absolute inset-0 bg-ink z-0" />

      <div ref={innerRef} className="relative z-10 w-full pt-20 md:pt-8 px-6 md:px-12 lg:px-16 max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end mb-8">
          <h2 className="font-display text-4xl font-semibold md:text-6xl">
            Our Expert <span className="font-serif italic">Solution.</span>
          </h2>
          <Link href="/services" className="btn-ghost-light text-sm">
            More Services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Rows */}
        <div className="border-t border-white/10">
          {services.map((s, i) => {
            const isOpen = active === i;
            return (
              <div key={s.title} className="service-row invisible border-b border-white/10">
                <Link href={s.to} className="block py-5 md:py-7">

                  {/* ── Top bar: number | title | desc | copyright ── */}
                  <div className="grid grid-cols-12 items-start gap-x-10 gap-y-4">
                    {/* Number */}
                    <p className="col-span-1 font-display text-lg text-white/30 md:text-xl pt-0.5">
                      {s.num}
                    </p>
                    {/* Title */}
                    <h3 className={`col-span-11 md:col-span-4 font-display text-xl font-semibold transition-colors duration-500 md:text-2xl ${isOpen ? "text-white" : "text-white/40"
                      }`}>
                      {s.title}
                    </h3>
                    {/* Description — aligns under col 6 on desktop */}
                    <p className="col-span-12 md:col-span-5 text-sm text-white/60 md:text-base md:col-start-6">
                      {s.desc}
                    </p>
                    {/* Copyright */}
                    <p className="hidden md:block md:col-span-2 text-xs text-white/30 text-right self-start md:col-start-11">
                      [ KSP General Contractors © 2026 ]
                    </p>
                  </div>

                  {/* ── Expandable image — starts at col 5 (same as desc) ── */}
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-700 ease-out ${isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      {/* Indent to col 6: 1 (num) + 4 (title) = 5 cols = 41.666% */}
                      <div className="">
                        <div className="relative overflow-hidden">
                          <Image width={800} height={600}
                            src={s.img}
                            alt={s.title}
                            className={`h-72 w-full object-cover transition-transform [transition-duration:1200ms] md:h-[500px] ${isOpen ? "scale-100" : "scale-110"
                              }`}
                            loading="lazy"
                          />
                          {/* View pill — on the image, left-aligned, vertically centered */}
                          <span
                            className={`absolute left-6 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-sm transition-all duration-500 ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
                              }`}
                          >
                            View <Eye className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
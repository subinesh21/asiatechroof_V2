"use client";
import Image from 'next/image';
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from 'next/link';
import { gsap } from "gsap";
;
;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-word", { y: 80, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.08, delay: 0.2 });
      gsap.from(".hero-cta", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.9 });
      gsap.from(".hero-card", { x: 80, opacity: 0, duration: 1, ease: "power3.out", delay: 1.1 });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <Image width={1600} height={900}
        src="/assets/hero-roofer.jpg"
        alt="Asia Tech Roofing - Professional Service"
        className="absolute inset-0 h-full w-full object-cover"
        priority={true}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/60" />

      <div className="relative flex h-full flex-col justify-center pl-4 md:pl-12 lg:pl-20 pt-60">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-white drop-shadow-md md:text-7xl lg:text-[88px]">
            <span className="hero-word inline-block">ROOFING</span>{" "}
            <br />
            <span className="hero-word inline-block text-accent">BUILT TO</span>{" "}
            <br />
            <span className="hero-word inline-block">
              <span className="font-serif italic text-white">LAST.</span>
            </span>
          </h1>
          <p className="hero-cta mt-6 max-w-lg text-lg text-white/80">
            Singapore&apos;s trusted roofing specialist since 2004. Expert repair, waterproofing, and structural works.
          </p>
          <Link href="/contact" className="btn-yellow hero-cta mt-8 text-base">
            Get Free Inspection <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

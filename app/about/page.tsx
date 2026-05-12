"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Plus } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import RecentWorks from "@/components/sections/RecentWorks";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const values = [
  {
    id: 1,
    title: "Programme",
    subtitle: "DELIVERED ON TIME, EVERY TIME",
    description: "EVERY PROJECT RUNS ON A DETAILED BASELINE PROGRAMME WITH MILESTONE TRACKING AND PROACTIVE EARLY WARNING TO PROTECT YOUR COMPLETION DATE.",
    image: "/about/69bd3af08655fb8bb68ab2d7_Portrait_of_a_202603201301.webp"
  },
  {
    id: 2,
    title: "Transparency",
    subtitle: "CLEAR COMMUNICATION",
    description: "WE MAINTAIN FULL TRANSPARENCY THROUGHOUT THE CONSTRUCTION PROCESS, ENSURING YOU ARE ALWAYS INFORMED AND IN CONTROL OF YOUR PROJECT.",
    image: "/about/69bd3af64127eed8c30c0b21_Engineer_holding_construction_202603201301.webp"
  },
  {
    id: 3,
    title: "Fleet",
    subtitle: "MODERN EQUIPMENT",
    description: "OUR EXTENSIVE FLEET OF MODERN CONSTRUCTION EQUIPMENT ENSURES THAT WE HAVE THE RIGHT TOOLS FOR EVERY JOB, FROM SMALL RENOVATIONS TO LARGE-SCALE BUILDS.",
    image: "/about/69bd3b8158b0e252d053c6a5_Construction_manager_standing_202603201319.webp"
  },
  {
    id: 4,
    title: "Safety",
    subtitle: "ZERO ACCIDENT GOAL",
    description: "SAFETY IS OUR TOP PRIORITY. WE RIGOROUSLY ADHERE TO SINGAPORE'S WORKPLACE SAFETY STANDARDS TO ENSURE A SAFE ENVIRONMENT FOR OUR TEAM AND CLIENTS.",
    image: "/about/69c288d9fb5bed3e49687138_Small_renovation_team_202603201300.webp"
  }
];

const sectorsData = [
  {
    id: 1,
    title: "Infrastructure",
    img: "/about/69c2a254c4cdd2bb1b2f5ff7_jerry-zhang-Oigm8vRIXFM-unsplash-p-500.webp",
    stats: {
      label: "SECTOR FOCUS",
      value: "CIVIL",
      sub: "Infrastructure"
    }
  },
  {
    id: 2,
    title: "Industrial",
    img: "/about/69c2a27f3d384c514020916b_alain-pham-P_qvsF7Yodw-unsplash-p-500.webp",
    stats: {
      label: "SECTOR FOCUS",
      value: "PLANT",
      sub: "Industrial"
    }
  },
  {
    id: 3,
    title: "Residential",
    img: "/about/69c2a29be89279aedc9aca65_ricardo-gomez-angel-U_riwEM5piM-unsplash-p-500.webp",
    stats: {
      label: "SECTOR FOCUS",
      value: "HOME",
      sub: "Residential"
    }
  }
];

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero reveal animations
      gsap.from(".hero-reveal-text", {
        y: "100%",
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <SiteLayout>
      <main className="bg-white text-[#0f172a] overflow-x-hidden">

        {/* 1. Hero Section */}
        <section ref={heroRef} className="pt-32 pb-24 px-8 md:px-16">
          <h1 className="font-display text-[22vw] font-bold leading-none uppercase tracking-tighter mb-16 flex flex-col">
            <div className="overflow-hidden">
              <span className="hero-reveal-text block">ABOUT</span>
            </div>
            <div className="overflow-hidden self-end">
              <span className="hero-reveal-text block">US</span>
            </div>
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#5f90f7]" />
            <span className="text-[70px] font-bold tracking-[0.3em] text-[#0f172a] uppercase">Building Excellence</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/about/69bd3ae95af9aba573809a55_Construction_manager_wearing_202603201303.webp"
                  alt="Construction worker"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-8 text-sm md:text-base font-medium leading-relaxed max-w-sm uppercase tracking-tight">
                FROM NEW CONSTRUCTION TO RENOVATIONS AND ONGOING MAINTENANCE, WE APPROACH EACH PROJECT WITH CLEAR PLANNING, CONSISTENT COMMUNICATION, AND A COMMITMENT TO QUALITY.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-8">
                <Image
                  src="/about/69c288c5b5fb3947c1532e62_Construction_team_on_202603201301.webp"
                  alt="Construction site"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12vw] font-bold text-white/20 uppercase tracking-widest pointer-events-none">
                    CONSTRUCTION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Focus Section */}
        <section className="py-24 px-8 md:px-16 border-t border-black/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/about/69b69f1b7e4b5238b3f9d2a2_76bb791547e57cae261c24dae49b1368_excavator-loading.webp"
                alt="Excavator"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex gap-4 items-center">
                <span className="px-3 py-1 border border-black/20 rounded-md text-[10px] font-bold uppercase">About</span>
                <span className="px-3 py-1 border border-black/20 rounded-md text-[10px] font-bold uppercase">KSP</span>
              </div>
              <h2 className="font-display text-6xl md:text-8xl font-bold uppercase leading-none">
                FOCUS ON DELIVERING
              </h2>
              <div className="flex gap-8 border-t border-black/10 pt-8 max-w-xl">
                <div className="w-1 bg-[#5f90f7] shrink-0" />
                <p className="text-sm md:text-base text-[#0f172a]/70 uppercase font-medium leading-relaxed">
                  WE FOCUS ON DELIVERING CONSTRUCTION AND PROPERTY SERVICES THAT ARE PRACTICAL, EFFICIENT, AND BUILT FOR LONG-TERM PERFORMANCE.
                </p>
              </div>

              <ul className="flex flex-col gap-6 mt-4">
                {[
                  "STRUCTURED PROJECT PLANNING AND EXECUTION",
                  "RELIABLE TIMELINES AND TRANSPARENT COMMUNICATION",
                  "SKILLED CRAFTSMANSHIP ACROSS ALL PROJECT STAGES"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start border-t border-black/5 pt-4">
                    <span className="text-[10px] font-bold text-black/30">0{i + 1}</span>
                    <span className="text-sm font-bold tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center gap-4 bg-[#5f90f7] text-white px-8 py-4 rounded-md font-bold uppercase tracking-widest text-xs self-start hover:bg-[#0f172a] transition-colors"
              >
                OUR SERVICES <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Values Grid */}
        <section className="py-24 px-8 md:px-16 bg-white/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.id} className="bg-[#f0f0eb] rounded-3xl p-8 md:p-12 flex flex-col gap-8 shadow-sm border border-black/5 relative overflow-hidden group">
                <div className="flex justify-between items-start z-10">
                  <div className="relative w-32 aspect-video rounded-xl overflow-hidden border border-black/5">
                    <Image src={v.image} alt={v.title} fill className="object-cover" />
                  </div>
                  <span className="text-[10px] font-bold text-black/20 uppercase tracking-widest">{v.id}</span>
                </div>

                <div className="z-10">
                  <h3 className="font-display text-4xl md:text-5xl font-bold uppercase mb-2">{v.title}</h3>
                  <p className="text-[10px] font-bold text-[#5f90f7] uppercase tracking-[0.2em] mb-8">{v.subtitle}</p>

                  <div className="flex gap-6 items-start border-t border-black/10 pt-8 mt-auto">
                    <Plus className="h-4 w-4 shrink-0 text-black/30" />
                    <p className="text-xs md:text-sm font-medium leading-relaxed text-[#0f172a]/70 uppercase max-w-sm">
                      {v.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Sectors Sticky Section (Now using Reusable RecentWorks) */}
        <RecentWorks
          title={<>Sectors<br />we serve</>}
          tagline="WE PROVIDE SPECIALIZED CONSTRUCTION SOLUTIONS ACROSS MULTIPLE KEY SECTORS IN SINGAPORE."
          data={sectorsData}
        />

      </main>
    </SiteLayout>
  );
}

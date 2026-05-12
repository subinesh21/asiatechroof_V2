"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: 1,
    title: "General Work & Painting",
    description: "Full-cycle maintenance, repair, construction, and renovation with expert internal & external painting for residential and commercial spaces.",
    tag: "BUILT TO PERFORM",
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80",
    color: "#e8c84a"
  },
  {
    id: 2,
    title: "Tile Roof Repair & Re-coating",
    description: "Specialized services for repairing leaking tile roofs and re-coating tiles to protect against Singapore's weather conditions.",
    tag: "BUILT AT SCALE",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    color: "#c8b99a"
  },
  {
    id: 3,
    title: "Concrete Ceiling Repair",
    description: "Expert repairs for concrete ceilings and ceiling boards — fixing cracks, replacing damaged boards, restoring structural integrity.",
    tag: "CEILING WORKS",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    color: "#c8b99a"
  },
  {
    id: 4,
    title: "Waterproofing Work",
    description: "Professional waterproofing solutions to permanently protect your property from water damage and leakage infiltration.",
    tag: "WATERPROOFING",
    image: "https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?w=800&q=80",
    color: "#e8c84a"
  },
  {
    id: 5,
    title: "P.U Pressure Grouting",
    description: "Efficient P.U pressure grouting for structural stability and water leakage prevention in foundations and walls.",
    tag: "GROUTING",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    color: "#c8b99a"
  },
  {
    id: 6,
    title: "Polycarbonate Roof Work",
    description: "Expert polycarbonate roof installations and repairs for durability, natural lighting, and long-lasting aesthetic appeal.",
    tag: "POLYCARBONATE",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    color: "#e8c84a"
  },
  {
    id: 7,
    title: "Bird Netting & Spike Installation",
    description: "Effective and humane bird deterrent solutions — netting and spike systems to protect your property from bird damage.",
    tag: "BIRD CONTROL",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    color: "#c8b99a"
  },
  {
    id: 8,
    title: "Aluminum Composite Panel",
    description: "Expert ACP installation services for sleek, modern, and weather-resistant building facades that elevate curb appeal.",
    tag: "FACADE WORKS",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    color: "#e8c84a"
  },
];

interface ServicesRevealProps {
  title?: string;
  tagline?: string;
  description?: string;
}

export default function ServicesReveal({
  title = "KSP CONSTRUCT",
  tagline = "[ GENERAL CONTRACTORS ]",
  description = "WE DELIVER HIGH-QUALITY HOUSE CONSTRUCTION, RENOVATION, AND MAINTENANCE SERVICES."
}: ServicesRevealProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealSectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!heroRef.current || !revealSectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        endTrigger: revealSectionRef.current,
        end: "top top",
        pin: true,
        pinSpacing: false,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: revealSectionRef.current,
          start: "top bottom", 
          end: "top top",      
          scrub: true,
        }
      });

      tl.to(".reveal-column", {
        yPercent: -100,
        stagger: {
          amount: 0.8,
          from: "end"
        },
        ease: "none"
      });

      gsap.from(".service-grid-item", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid-container",
          start: "top 80%",
        }
      });

      gsap.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        }
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#0f172a] relative">
      
      {/* Section 1: Mini-Hero for Reveal */}
      <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1541913007797-45f2807d5ee5?w=1600&q=80"
          alt="KSP Construction Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 md:p-16 text-center">
          <h2 className="font-display text-[8vw] font-bold leading-none text-white uppercase whitespace-nowrap">
            {title}
          </h2>
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-xs tracking-widest text-[#5f90f7] font-bold uppercase">
              {tagline}
            </p>
            <p className="text-sm text-white/90 whitespace-nowrap">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Services Section (Scrolls Over Hero) */}
      <div 
        ref={revealSectionRef} 
        className="relative z-10 bg-white min-h-screen"
      >
        {/* Masking columns for stepped reveal */}
        <div className="absolute top-0 left-0 w-full h-[900px] z-20 pointer-events-none flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="reveal-column h-full bg-white flex-1 border-r border-white/5" />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-0 pt-24 pb-32 px-8 md:px-16">
          <h2 
            ref={titleRef}
            className="font-display text-[18vw] font-bold leading-none text-[#0f172a] uppercase mb-64 mt-64 text-center"
          >
            SERVICES
          </h2>

          <div className="services-grid-container grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.id} className="service-grid-item group flex flex-col bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-200/50">
                {/* Top Content Area */}
                <div className="p-8 md:p-12 flex flex-col gap-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-6">
                      <span className="inline-block px-3 py-1 bg-slate-100 text-[10px] text-slate-500 font-bold tracking-wider rounded uppercase self-start">
                        {s.tag}
                      </span>
                      <h3 className="font-display text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight">
                        {s.title}
                      </h3>
                    </div>
                    <Link 
                      href={`/services/${s.id}`}
                      className="flex h-12 w-24 items-center justify-center bg-[#0f172a] text-[#5f90f7] text-[10px] font-bold tracking-widest uppercase transition-colors hover:bg-[#5f90f7] hover:text-white"
                    >
                      SERVICE <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>

                  <div className="flex gap-8 border-t border-slate-100 pt-8">
                    <div className="w-1 bg-[#5f90f7] shrink-0" />
                    <p className="text-base text-slate-600 max-w-lg leading-relaxed uppercase font-medium text-[13px] tracking-tight">
                      {s.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Projects</p>
                      <p className="text-xl font-bold text-[#0f172a]">25+</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Experience</p>
                      <p className="text-xl font-bold text-[#0f172a]">10 Years</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Impact</p>
                      <p className="text-xl font-bold text-[#0f172a]">100%</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Image Area */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image 
                    src={s.image} 
                    alt={s.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

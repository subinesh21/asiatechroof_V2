"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectData {
  id: number;
  title: string;
  img: string;
  stats: {
    label: string;
    value: string;
    sub: string;
  };
}

interface RecentWorksProps {
  title?: React.ReactNode;
  tagline?: string;
  data?: ProjectData[];
}

const defaultProjects: ProjectData[] = [
  {
    id: 1,
    title: "Full Home Renovation & Structural Enhancement",
    img: "https://images.unsplash.com/photo-1541913007797-45f2807d5ee5?w=1200&q=80",
    stats: {
      label: "PROJECTS COMPLETED",
      value: "320+",
      sub: "In General Contracting"
    }
  },
  {
    id: 2,
    title: "Commercial Property Waterproofing & Maintenance",
    img: "https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?w=1200&q=80",
    stats: {
      label: "EXPERIENCE",
      value: "10 YEARS",
      sub: "Building Trust"
    }
  },
  {
    id: 3,
    title: "Residential Interior & Exterior Painting Works",
    img: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1200&q=80",
    stats: {
      label: "SATISFACTION",
      value: "100%",
      sub: "Client Retention"
    }
  },
  {
    id: 4,
    title: "Industrial Roof Restoration & Protection",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    stats: {
      label: "WARRANTY",
      value: "10-YEAR",
      sub: "Peace of Mind"
    }
  },
];

export default function RecentWorks({
  title = <>Proven<br />results</>,
  tagline = "WE MEASURE SUCCESS THROUGH COMPLETED PROJECTS AND SATISFIED CLIENTS. SCROLL FOR MORE.",
  data = defaultProjects
}: RecentWorksProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the entire section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".left-content",
        pinSpacing: false,
      });

      // Animate the stats blocks in the left column
      data.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `.project-img-${i}`,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              gsap.to(`.stat-block-${i}`, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              });
            } else {
              gsap.to(`.stat-block-${i}`, {
                opacity: 0,
                y: 20,
                duration: 0.5,
                ease: "power2.in",
              });
            }
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  return (
    <section ref={containerRef} className="bg-[#0f172a] text-white">
      <div className="flex flex-col md:flex-row min-h-screen">
        
        {/* Left Column: Pinned via GSAP */}
        <div className="left-content md:w-1/2 md:h-screen p-8 md:p-16 flex flex-col justify-between">
          <div>
            <h2 className="font-display text-[8vw] md:text-[6vw] font-bold leading-none text-[#5f90f7] uppercase mb-8">
              {title}
            </h2>
            <div className="flex gap-8 border-t border-white/10 pt-8 max-w-sm">
              <div className="w-1 bg-[#5f90f7] shrink-0" />
              <p className="text-xs tracking-widest text-white/60 uppercase leading-relaxed">
                {tagline}
              </p>
            </div>
          </div>

          {/* Dynamic Stats Section */}
          <div className="relative h-48 mt-12">
            {data.map((p, i) => (
              <div 
                key={p.id} 
                className={`stat-block-${i} absolute inset-0 opacity-0 transform translate-y-5`}
              >
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm max-w-xs">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#5f90f7] uppercase mb-4">
                    {p.stats.label}
                  </p>
                  <div className="flex items-baseline gap-4">
                    <p className="text-5xl font-bold font-display">{p.stats.value}</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">{p.stats.sub}</p>
                  </div>
                  <div className="mt-8 h-[1px] w-full bg-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#5f90f7] transform -translate-x-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Scrolling Images */}
        <div className="md:w-1/2 p-8 md:p-16 flex flex-col gap-16 md:gap-32">
          {data.map((p, i) => (
            <div key={p.id} className={`project-img-${i} flex flex-col gap-6`}>
              <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden group">
                <Image 
                  src={p.img} 
                  alt={p.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold tracking-widest text-[#5f90f7] uppercase">[ PROJECT {i + 1} ]</p>
                <h3 className="text-xl md:text-2xl font-bold max-w-md uppercase">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

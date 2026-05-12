"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import { Eye, ArrowUpRight } from "lucide-react";
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blogPosts } from "@/lib/blog-data";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); };

export default function BlogTeaser() {
  const posts = blogPosts.slice(0, 3);
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !stackRef.current) return;
    const section = sectionRef.current;
    const cards = stackRef.current.querySelectorAll<HTMLElement>(".blog-stack-card");

    const ctx = gsap.context(() => {
      // All cards start off-screen (below) except the first
      cards.forEach((card, i) => {
        if (i > 0) gsap.set(card, { yPercent: 100 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * (posts.length + 0.5)}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate(self) {
            const idx = Math.min(
              posts.length - 1,
              Math.floor(self.progress / (1 / posts.length))
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
            { yPercent: 0, ease: "none", duration: 1 },
            (i - 1) * 1
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, [posts.length]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-ink">
      {/* Header */}
      <div className="absolute top-0 left-0 z-20 pt-12 px-8 md:pt-16 md:px-16 flex items-end gap-8">
        <h2 className="font-display text-4xl font-semibold text-white md:text-7xl">
          Latest <span className="font-serif italic text-primary">News.</span>
        </h2>
        <Link href="/blog" className="btn-yellow text-sm hidden md:inline-flex shrink-0 mb-2">
          View All Posts <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Stacking cards container */}
      <div ref={stackRef} className="relative h-full w-full">
        {posts.map((p, i) => {
          const isActive = active === i;
          return (
            <div
              key={p.slug}
              className="blog-stack-card absolute inset-0 h-full w-full bg-ink"
              style={{ zIndex: i + 1 }}
            >
              <div className="grid h-full grid-cols-1 md:grid-cols-12">
                
                {/* Left — Text content */}
                <div className="flex flex-col justify-center px-8 pt-32 pb-10 md:col-span-5 md:px-16 md:pt-0 md:pb-0">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60 mb-6">
                    — {p.date}
                  </p>
                  <h3 className={`font-display text-3xl font-bold leading-tight transition-all duration-700 md:text-5xl lg:text-6xl ${
                    isActive ? "text-white translate-x-0 opacity-100" : "text-white/20 -translate-x-8 opacity-0"
                  }`}>
                    {p.title}
                  </h3>
                  <div className={`mt-8 transition-all duration-1000 delay-300 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}>
                    <Link href={`/blog/${p.slug}`} className="btn-yellow px-10">
                      Read Full Article <Eye className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right — Featured Image */}
                <div className="relative overflow-hidden md:col-span-7">
                  <Image 
                    src={p.img} 
                    alt={p.title} 
                    fill
                    className={`object-cover transition-transform [transition-duration:2000ms] ${
                      isActive ? "scale-100 rotate-0" : "scale-125 rotate-2"
                    }`}
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-ink/30" />
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

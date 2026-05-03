"use client";
import Image from 'next/image';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
;
;

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); };

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+",  label: "Projects Completed" },
  { value: "100%",   label: "Certified Workers" },
];

const features = [
  { icon: "🔍", title: "Free Site Inspection",      desc: "No-obligation honest evaluation." },
  { icon: "👷", title: "Certified Workers",      desc: "Fully trained and experienced." },
  { icon: "⚡", title: "24hr Response", desc: "Fast emergency roof repair." },
];

export default function AboutBlurb() {
  const sectionRef  = useRef<HTMLElement>(null);
  const cubeRef     = useRef<HTMLDivElement>(null);
  const faceWrapRef = useRef<HTMLDivElement>(null);
  const ctxRef      = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !cubeRef.current || !faceWrapRef.current) return;

    function init() {
      const wrap = faceWrapRef.current;
      const cube = cubeRef.current;
      const section = sectionRef.current;
      if (!wrap || !cube || !section) return;

      // ── Step 1: measure the ACTUAL rendered column width ──
      const w = wrap.getBoundingClientRect().width;
      
      // ── Step 2: force the wrapper to be a perfect square ──
      wrap.style.height = `${w}px`;

      // ── Step 3: for a 4-face cube, translateZ = w/2 exactly ──
      const half = w / 2;

      // ── Step 4: set each face's position around the Y axis ──

      const faces = cube.querySelectorAll<HTMLElement>(".cube-face");
      const angles = [0, 90, 180, 270];
      faces.forEach((face, i) => {
        face.style.width  = `${w}px`;
        face.style.height = `${w}px`;
        face.style.transform = `rotateY(${angles[i]}deg) translateZ(${half}px)`;
      });

      // ── Step 5: kill old ScrollTriggers, create fresh ──
      ctxRef.current?.revert();
      ctxRef.current = gsap.context(() => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=310%",
          pin: true,
          pinSpacing: false,
        });

        // Rotation finishes at 300vh, leaving 100vh of "dead space"
        gsap.to(cube, {
          rotateY: -270,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=300%",
            scrub: 1,
          },
        });
      }, section);
    }

    // rAF so grid columns are resolved before we measure
    const raf = requestAnimationFrame(init);

    // Re-measure if window resizes
    const ro = new ResizeObserver(init);
    ro.observe(faceWrapRef.current);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      ctxRef.current?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background h-screen flex items-center z-10"
    >
      <div className="container-pad w-full">
        <h2 className="font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
          Built on Trust.<br />Proven by Results.
        </h2>

        <div className="relative mt-12 md:mt-16">
          {/* Marquee */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden">
            <div className="marquee-track flex whitespace-nowrap font-serif italic text-[120px] leading-none text-ink/[0.06] md:text-[180px]">
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} className="px-8">
                  ABOUT US&nbsp;&nbsp;•&nbsp;&nbsp;ABOUT US&nbsp;&nbsp;•&nbsp;&nbsp;
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">

            {/*
              The perspective wrapper is now centered via justify-center on the parent.
            */}
            <div
              ref={faceWrapRef}
              style={{
                width: "100%",
                maxWidth: "520px",
                aspectRatio: "1/1",
                perspective: "1200px",
                perspectiveOrigin: "50% 50%",
                overflow: "visible",
                position: "relative",
              }}
            >
              {/* Cube — JS sizes & positions faces absolutely */}
              <div
                ref={cubeRef}
                style={{
                  /* cube fills the wrapper; faces use absolute positioning */
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  transformStyle: "preserve-3d",
                  transformOrigin: "50% 50%",
                }}
              >
                {/* Face 0 – Photo (front, 0°) */}
                <CubeFace className="overflow-hidden rounded-2xl shadow-lg">
                  <Image width={800} height={600}
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
                    alt="Asia Tech Roofer"
                    className="h-full w-full object-cover object-center"
                  />
                </CubeFace>

                {/* Face 1 – Stats (right, 90°) */}
                <CubeFace className="rounded-2xl bg-[#f5f4f0] flex flex-col justify-center px-8 shadow-lg">
                  {stats.map((s) => (
                    <div
                      key={s.value}
                      className="flex items-center justify-between border-b border-ink/10 py-5 last:border-0"
                    >
                      <div>
                        <p className="font-display text-4xl font-bold text-ink">{s.value}</p>
                        <p className="mt-0.5 text-sm text-ink/50">{s.label}</p>
                      </div>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-lg">
                        ★
                      </span>
                    </div>
                  ))}
                </CubeFace>

                {/* Face 2 – Features (back, 180°) */}
                <CubeFace className="rounded-2xl bg-[#f5f4f0] flex flex-col justify-center px-8 shadow-lg">
                  {features.map((f) => (
                    <div
                      key={f.title}
                      className="flex items-center gap-4 border-b border-ink/10 py-5 last:border-0"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-lg">
                        {f.icon}
                      </span>
                      <div>
                        <p className="font-display font-semibold text-ink">{f.title}</p>
                        <p className="text-sm text-ink/50">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </CubeFace>

                {/* Face 3 – Photo 2 (left, 270°) */}
                <CubeFace className="overflow-hidden rounded-2xl shadow-lg">
                  <Image width={800} height={600}
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                    alt="Roofing project"
                    className="h-full w-full object-cover object-center"
                  />
                </CubeFace>
              </div>
            </div>

            {/* Blurb — positioned to the right side, absolute so it doesn't affect centering */}
            <p
              className="hidden lg:block absolute right-0 bottom-0 text-base leading-relaxed text-ink-soft pb-2"
              style={{ maxWidth: "220px" }}
            >
              Singapore&apos;s trusted<br />
              roofing contractor since 2004.<br />
              Quality you can rely on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CubeFace({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`cube-face ${className}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        /* width + height set by JS to match the wrapper's measured size */
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  );
}
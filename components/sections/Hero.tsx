"use client";
import Image from 'next/image';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";


export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      // Hero image reveal or other animations can be added here
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <Image width={2240} height={400}
        src="/KSP.png"
        alt="KSP General Contractors"
        className="absolute inset-0 h-full w-full object-cover"
        priority={true}
      />
    </section>
  );
}

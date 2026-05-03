"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); };

/**
 * Reveals direct children of the returned ref with a staggered fade/slide-up
 * when scrolled into view. Mirrors the Webflow IX2 split-text feel.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(opts?: {
  selector?: string;
  y?: number;
  stagger?: number;
  duration?: number;
}) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const targets = opts?.selector
      ? el.querySelectorAll(opts.selector)
      : el.children;
    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y: opts?.y ?? 40,
        duration: opts?.duration ?? 0.9,
        ease: "power3.out",
        stagger: opts?.stagger ?? 0.12,
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    }, el);
    return () => ctx.revert();
  }, [opts?.selector, opts?.y, opts?.stagger, opts?.duration]);
  return ref;
}

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- Interfaces ---
interface Category {
  id: number | string;
  title: string;
  imageUrl: string;
  gallery: string[];
}

interface AccordionItemProps {
  item: Category;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onClick, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[80px] md:w-[100px]'}
      `}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 400px, 400px"
      />
      {/* Dark overlay for better text readability */}
      <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-black/20' : 'bg-black/50 hover:bg-black/30'}`}></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-8 left-8 rotate-0' 
              : 'bottom-24 left-1/2 -translate-x-1/2 rotate-90 origin-center'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};


// --- Main App Component ---
export function LandingAccordionItem({ categories }: { categories: Category[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!categories || categories.length === 0) return null;

  return (
    <div className="bg-white font-sans overflow-hidden">
      <section className="container-pad py-16 md:py-24">
        <div className="flex flex-col items-center gap-10 md:gap-14">
          
          {/* Top Side: Text Content */}
          <div className="w-full text-center max-w-6xl mx-auto">
            <h1 className="text-[32px] md:text-[64px] font-display font-bold text-ink leading-tight tracking-tighter">
              Crafting Roofs that <span className="font-serif italic text-primary">Last a Lifetime.</span>
            </h1>
            <div className="mt-6">
              <Link
                href="/contact"
                className="btn-yellow"
              >
                Free Inspection
              </Link>
            </div>
          </div>

          {/* Middle Side: Image Accordion */}
          <div className="w-full">
            <div className="flex flex-row items-center justify-center gap-3 md:gap-6 overflow-x-auto scrollbar-hide">
              {categories.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Bottom Side: Category Gallery */}
          <div className="w-full mt-2 animate-in fade-in slide-in-from-bottom-8 duration-1000" key={activeIndex}>
            <div className="mb-10 text-center">
              <p className="text-sm uppercase tracking-widest text-ink/40 font-semibold">— Projects in {categories[activeIndex].title}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {categories[activeIndex].gallery.map((img, idx) => (
                <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream">
                  <Image 
                    src={img} 
                    alt={`${categories[activeIndex].title} project ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-ink/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "The team was professional & efficient, completing our new roof on time with excellent quality. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Mitchell",
    role: "Homeowner",
  },
  {
    text: "From inspection to installation, every step was handled with care. Our roof looks incredible and we feel safe.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "James Cooper",
    role: "Property Manager",
  },
  {
    text: "The support team guided us through every decision. Their expertise in waterproofing saved us thousands.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Emily Chen",
    role: "Homeowner",
  },
  {
    text: "Outstanding craftsmanship and attention to detail. They transformed our aging roof into a modern masterpiece.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "David Williams",
    role: "Real Estate Developer",
  },
  {
    text: "Fast, reliable, and the quality exceeded our expectations. The 10-year warranty gives us total peace of mind.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Maria Rodriguez",
    role: "Homeowner",
  },
  {
    text: "They delivered exceptional results on a tight deadline. Our commercial property looks brand new.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Owner",
  },
  {
    text: "Professional from start to finish. The team's expertise in structural works is unmatched in the industry.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Robert Anderson",
    role: "Construction Manager",
  },
  {
    text: "They understood exactly what we needed and delivered beyond expectations. Truly a premium roofing service.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Jessica Taylor",
    role: "Homeowner",
  },
  {
    text: "Our property value increased significantly after the roof renovation. Best investment we have made in years.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Michael Brown",
    role: "Property Investor",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28 relative overflow-hidden">
      <div className="container-pad relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-ink/10 py-1 px-4 rounded-lg text-xs uppercase tracking-[0.25em] text-ink-muted">
              Testimonials
            </div>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-5 text-ink text-center">
            What People Say About Us
          </h2>
          <p className="text-center mt-5 text-ink/60 text-base">
            See why homeowners and businesses trust us with their general contracting needs.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}

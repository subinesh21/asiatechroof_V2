import Image from 'next/image';
import { ArrowUpRight } from "lucide-react";
import Link from 'next/link';
;

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden flex items-start pt-20 md:pt-40 min-h-[500px] md:min-h-[900px]">
      <Image src="/assets/cta-bg.webp" alt="cta-bg.webp" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" width={1920} height={800} />

      <div className="w-full relative pl-4 md:pl-17 lg:pl-28">
        <div className="max-w-4xl">
          <h2 className="font-display text-5xl font-semibold leading-[1.1] text-white drop-shadow md:text-8xl mb-8">
            Ready to Build Your<br /><span className="text-primary italic font-serif">Dream Home?</span>
          </h2>
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              Contact KSP General Contractors today for a consultation and let us help you transform your house into a home.
            </p>
            <Link href="/contact" className="btn-yellow text-lg px-10 py-4">
              Request Free Quote <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

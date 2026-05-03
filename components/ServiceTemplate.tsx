import Image from 'next/image';
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import { Check } from "lucide-react";
import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  bullets: string[];
};

export default function ServiceTemplate({ eyebrow, title, intro, image, bullets }: Props) {
  return (
    <SiteLayout>
      <PageHeader eyebrow={eyebrow} title={title}>{intro}</PageHeader>

      <section className="bg-background py-16 md:py-24">
        <div className="container-pad grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Image src={image} alt={title} className="h-80 w-full rounded-2xl object-cover md:h-[520px]" loading="lazy" width={1280} height={768} />
          </div>
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">What&apos;s included</h2>
            <ul className="mt-8 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-accent text-ink"><Check className="h-3.5 w-3.5" /></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-yellow mt-10 text-sm">
              Request a Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}

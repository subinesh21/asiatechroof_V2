import Image from 'next/image';
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import { Eye } from "lucide-react";
import Link from 'next/link';
;
;
;
;

import { blogPosts } from "@/lib/blog-data";

export default function Blog() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Journal" title="Stories, Guides & Insights.">
        Practical roofing knowledge, written by the people who do the work.
      </PageHeader>

      <section className="bg-background py-16 md:py-24">
        <div className="container-pad grid gap-10 md:grid-cols-2">
          {blogPosts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-2xl">
                <Image src={p.img} alt={p.title} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-96" loading="lazy" width={1280} height={768} />
                <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-ink/60 px-4 py-2 text-sm text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  View <Eye className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-5 text-sm text-ink-muted">[ {p.date} ]</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

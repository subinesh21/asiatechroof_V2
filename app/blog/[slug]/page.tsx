import Image from 'next/image';
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import CTABanner from '@/components/sections/CTABanner';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteLayout>
      <PageHeader eyebrow={post.category} title={post.title}>
        [ {post.date} ]
      </PageHeader>

      <article className="bg-background py-16 md:py-24">
        <div className="container-pad">
          <div className="mx-auto max-w-4xl">
            <Image 
              src={post.img} 
              alt={post.title} 
              width={1200} 
              height={700} 
              className="h-[300px] w-full rounded-2xl object-cover md:h-[500px]" 
              priority
            />
            
            <div className="mt-12 md:mt-16">
              <div className="prose prose-lg max-w-none text-ink-soft">
                {post.content.split('\n\n').map((paragraph, i) => {
                  if (paragraph.startsWith('###')) {
                    return (
                      <h3 key={i} className="mt-10 mb-4 font-display text-2xl font-semibold text-ink md:text-3xl">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('1.') || paragraph.startsWith('-')) {
                     return (
                        <div key={i} className="my-6 space-y-2">
                           {paragraph.split('\n').map((line, j) => (
                             <p key={j} className="flex items-start gap-2">
                               {line}
                             </p>
                           ))}
                        </div>
                     )
                  }
                  return (
                    <p key={i} className="mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {post.gallery && (
                <div className="mt-16 grid gap-8 md:grid-cols-2">
                  {post.gallery.map((img, i) => (
                    <div key={i} className="relative overflow-hidden rounded-2xl shadow-lg">
                      <Image 
                        src={img} 
                        alt={`Gallery image ${i + 1}`} 
                        width={600} 
                        height={1000} 
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      <CTABanner />
    </SiteLayout>
  );
}

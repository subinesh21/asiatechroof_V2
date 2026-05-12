import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";


export default function Blog() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Latest News" title="Blog">
        We are currently preparing original branded content for KSP General Contractors. Stay tuned for expert insights on general contracting and home building.
      </PageHeader>

      <section className="bg-background py-16 md:py-32">
        <div className="container-pad text-center">
          <h2 className="font-display text-4xl font-bold text-ink mb-6">Coming Soon</h2>
          <p className="text-lg text-ink/60 max-w-2xl mx-auto">
            Our team is working hard to bring you the best advice and stories from our project sites. Check back soon for more updates!
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

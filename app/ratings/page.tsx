import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import { Star } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

const reviews = [
  { name: "Tan Boon Hock", role: "Landed Homeowner · Bukit Timah", text: "Asia Tech Roofing fixed my long-standing roof leak in one afternoon. Very professional and tidy work." },
  { name: "Siti Rahayu", role: "HDB Resident · Tampines", text: "Fast response for our ceiling leak. The team was very polite and explained the repair process clearly." },
  { name: "Michael Cheng", role: "Warehouse Manager · Jurong", text: "Expert waterproofing for our factory. Highly recommend for any commercial roofing needs in Singapore." },
  { name: "David Lim", role: "Bungalow Owner · Sentosa Cove", text: "The team did a full roof overhaul for us. Quality materials and excellent finish. 5 stars." },
  { name: "Ariffin Ismail", role: "Commercial Property Manager", text: "Reliable partner for our maintenance works. Always on time and within budget." },
  { name: "Jessica Wong", role: "Homeowner · Serangoon", text: "Free inspection was honest and helpful. No hard selling, just great advice and solid repair." },
];

export default function Ratings() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Ratings" title="Trusted by 500+ Property Owners.">
        4.8/5 from 47+ Google Reviews. Real feedback from our clients across Singapore.
      </PageHeader>

      <section className="bg-background py-20 md:py-28">
        <div className="container-pad grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="rounded-2xl border border-ink/10 bg-cream p-7">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400" />)}
              </div>
              <p className="mt-5 text-ink-soft">&quot;{r.text}&quot;</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-semibold text-accent">{r.name[0]}</span>
                <div>
                  <p className="text-sm font-semibold text-ink">{r.name}</p>
                  <p className="text-xs text-ink-muted">{r.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}

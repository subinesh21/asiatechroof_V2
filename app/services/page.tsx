import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import ServicesList from "@/components/sections/ServicesList";
import CTABanner from "@/components/sections/CTABanner";
import FAQ from "@/components/sections/FAQ";

export default function Services() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Our Services" title="Every Roof Solution, One Trusted Team.">
        From new installs to leak repair and waterproofing, we cover every part of keeping your roof strong.
      </PageHeader>
      <ServicesList />
      <FAQ />
      <CTABanner />
    </SiteLayout>
  );
}

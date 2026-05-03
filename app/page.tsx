
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import AboutBlurb from "@/components/sections/AboutBlurb";
import ServicesList from "@/components/sections/ServicesList";
import Process from "@/components/sections/Process";
import ProjectsRecent from "@/components/sections/RecentWorks";
import WhyChoose from "@/components/sections/WhyChoose";
import Testimonials from "@/components/sections/Testimonials";
import BlogTeaser from "@/components/sections/BlogTeaser";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";


export default function IndexPage() {
  return (
    <>
      <Hero />
      <AboutBlurb />
      <div className="bg-ink">
        <ServicesList />
      </div>
      <Process />
      <Stats />
      <ProjectsRecent />
      <WhyChoose />
      <Testimonials />
      <BlogTeaser />
      <FAQ />
      <CTABanner />
    </>
  );
}

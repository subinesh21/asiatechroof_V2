
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesReveal from "@/components/sections/ServicesReveal";
import Process from "@/components/sections/Process";
import ProjectsRecent from "@/components/sections/RecentWorks";
import WhyChoose from "@/components/sections/WhyChoose";
import Testimonials from "@/components/sections/Testimonials";
import BlogTeaser from "@/components/sections/BlogTeaser";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";


export default function IndexPage() {
  return (
    <main className="relative bg-[#0f172a]">
      {/* Stable Hero */}
      <div className="sticky top-0 z-0 h-screen w-full">
        <Hero />
      </div>

      {/* Reveal Sections Container */}
      <div className="relative z-10">
        <ServicesReveal 
          title="OUR EXPERTISE"
          tagline="[ WHAT WE DO ]"
          description="EXPLORE OUR COMPREHENSIVE CONSTRUCTION AND RENOVATION SOLUTIONS."
        />
        <Process />
        <Stats />
        <ProjectsRecent />
        <WhyChoose />
        <Testimonials />
        <BlogTeaser />
        <FAQ />
        <CTABanner />
      </div>
    </main>
  );
}

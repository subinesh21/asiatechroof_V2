import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Target, Eye, MapPin, Phone, Mail, Star, Users, Clock, ShieldCheck, Award } from 'lucide-react';
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import Stats from "@/components/sections/Stats";
import CTABanner from "@/components/sections/CTABanner";

const whyChooseUs = [
  { icon: ShieldCheck, title: "Certified Technicians", desc: "Our team consists of highly trained and certified professionals." },
  { icon: Clock, title: "Fast Response", desc: "We understand urgency; our team responds quickly to all service calls." },
  { icon: Award, title: "Transparent Quotes", desc: "No hidden costs. We provide clear, itemized pricing for all projects." },
  { icon: CheckCircle2, title: "Free On-Site Inspections", desc: "We assess your roof's condition at no cost to you." },
  { icon: Users, title: "Eco-Friendly Materials", desc: "We use sustainable, high-quality materials for lasting results." },
  { icon: Award, title: "On-Time Delivery", desc: "We respect your schedule and complete projects within the agreed timeline." },
];

export default function About() {
  return (
    <SiteLayout>
      {/* 1. Company Overview & Hero */}
      <PageHeader eyebrow="About Asia Tech Roofing" title="The Trusted Name in Singapore Roofing & Waterproofing.">
        Founded on principles of integrity and excellence, Asia Tech Roofing & Waterproofing has grown to become Singapore&apos;s premier contractor for comprehensive roofing solutions.
      </PageHeader>

      {/* 2. Years of Experience (Stats) */}
      <Stats />

      {/* Overview Image */}
      <section className="bg-background pb-20">
        <div className="container-pad">
          <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-3xl shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" 
              alt="Professional roofing work" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Star className="fill-yellow-400 text-yellow-400 h-6 w-6" />
                <span className="text-2xl font-bold font-display">4.9/5 Rating</span>
              </div>
              <p className="text-white/80">Trusted by 500+ Happy Clients in Singapore</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="bg-ink text-white py-24 md:py-32">
        <div className="container-pad">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-6">
              <div className="h-14 w-14 bg-primary rounded-2xl flex items-center justify-center">
                <Target className="text-white h-8 w-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Our Mission</h2>
              <p className="text-xl text-white/70 leading-relaxed font-serif italic">
                To provide reliable, affordable, and fast roofing solutions without compromising on quality, ensuring every home in Singapore is safe and secure.
              </p>
            </div>
            <div className="space-y-6">
              <div className="h-14 w-14 bg-primary rounded-2xl flex items-center justify-center">
                <Eye className="text-white h-8 w-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Our Vision</h2>
              <p className="text-xl text-white/70 leading-relaxed font-serif italic">
                To be Singapore&apos;s #1 trusted roofing company, known for innovation, integrity, and unparalleled customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="bg-background py-24 md:py-32">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-ink mb-6">Why Choose Asia Tech?</h2>
            <p className="text-lg text-ink/70">Built on a foundation of trust, we ensure every project meets the highest standards of safety and durability.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-3xl border border-ink/5 shadow-sm transition-all hover:shadow-xl hover:border-primary/20">
                <item.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-ink/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Team & Professionalism */}
      <section className="bg-ink/5 py-24 md:py-32">
        <div className="container-pad">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1621905235277-33f7c32b903e?w=800&q=80" 
                  alt="Our professional team" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-ink">Our Team of Experts</h2>
              <p className="text-lg text-ink/70 leading-relaxed">
                Our team is composed of seasoned professionals who are not only experts in roofing and waterproofing but are also dedicated to the safety and satisfaction of our clients. 
              </p>
              <p className="text-lg text-ink/70 leading-relaxed">
                We emphasize continuous training and strict adherence to safety protocols, ensuring that every technician at Asia Tech represents our values of professionalism and excellence.
              </p>
              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-ink/5">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-primary h-6 w-6" />
                </div>
                <p className="font-semibold text-ink">Strict Safety & Professional Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Service Areas */}
      <section className="bg-background py-24 md:py-32 border-b border-ink/5">
        <div className="container-pad text-center">
          <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <MapPin className="text-primary h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-ink mb-6">Service Areas</h2>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto font-serif italic mb-12">
            Serving all across Singapore — providing reliable solutions for Residential, Commercial, and Industrial properties.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Central", "North", "East", "West"].map((region) => (
              <div key={region} className="py-4 px-6 bg-ink/5 rounded-xl font-bold text-ink/80">{region} Singapore</div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact Section / CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-pad">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-ink">Get in Touch</h2>
              <p className="text-lg text-ink/70">Have a question or need a free inspection? Reach out to our friendly team today.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-ink/40 font-bold uppercase tracking-wider">Phone</p>
                    <p className="text-lg font-bold text-ink">+65 90545431 / +65 98927202</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-ink/40 font-bold uppercase tracking-wider">Email</p>
                    <p className="text-lg font-bold text-ink">sales@asiatechroof.sg</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/contact" className="btn-yellow text-lg px-10">
                  Get a Free Inspection Today
                </Link>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=800&q=80" 
                alt="Singapore Architecture" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

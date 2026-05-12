"use client";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import { ArrowUpRight, Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact" title="Have Questions? Contact KSP General Contractors">
        We&apos;re Here to Serve You: Let KSP General Contractors Help Bring Your Vision to Life.
      </PageHeader>

      <section className="bg-background py-20 md:py-28">
        <div className="container-pad grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">Get in touch</h2>
            <p className="mt-4 text-ink-muted">Available 24/7 for your convenience.</p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-ink"><Phone className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-muted">Phone</p>
                  <a href="tel:+6582355452" className="text-ink hover:underline">+65 8235 5452</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#25D366] text-white"><MessageSquare className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-muted">WhatsApp</p>
                  <a href="https://api.whatsapp.com/send?phone=6582355452" target="_blank" rel="noopener noreferrer" className="text-ink hover:underline">+65 8235 5452</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-ink"><Mail className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-muted">Email</p>
                  <a href="mailto:kspgeneralcontractors@gmail.com" className="text-ink hover:underline">kspgeneralcontractors@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-ink"><MapPin className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-muted">Location</p>
                  <p className="text-ink">Serving all of Singapore<br />Class 1 Builder (Singapore)</p>
                </div>
              </li>
            </ul>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl bg-cream p-8 md:col-span-7 md:p-12">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-ink-muted">Name</span>
                <input className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-ink focus:border-ink focus:outline-none" placeholder="Enter your name" />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-ink-muted">Email</span>
                <input type="email" className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-ink focus:border-ink focus:outline-none" placeholder="Enter your email" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs uppercase tracking-widest text-ink-muted">Message</span>
                <textarea rows={5} className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-ink focus:border-ink focus:outline-none" placeholder="How can we help you?" />
              </label>
            </div>
            <button type="submit" className="btn-yellow mt-8 text-sm">
              Request Free Quote <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Instagram, Twitter, Dribbble, MessageSquare } from "lucide-react";


const mainPages = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/blog", label: "Blog" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact Us" },
  { to: "/ratings", label: "Pricing Plan" },
];

const utilities = [
  { label: "Style Guide" },
  { label: "Protected Password" },
  { label: "404 Not Found" },
  { label: "Changelog" },
  { label: "License" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white">


      <div className="container-pad py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h3 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              Get Expert Roofing SG
            </h3>
            <form className="mt-7 flex max-w-md items-center gap-2 rounded-xl border border-white/15 p-1.5">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-3 py-2 text-base text-white placeholder:text-white/50 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-white transition-colors hover:bg-accent hover:text-ink"
              >
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </form>
            <div className="mt-6">
              <a 
                href="https://api.whatsapp.com/send?phone=6598927202" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-full justify-center md:w-auto rounded-full px-8 py-4 text-sm font-bold bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors shadow-lg"
              >
                Chat on WhatsApp <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:col-span-4">
            <Link href="/" className="transition-transform hover:scale-105">
              <Image 
                src="/logo.webp" 
                alt="Asia Tech Roofing" 
                width={180} 
                height={60} 
                className="h-16 w-auto" 
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            <div>
              <p className="mb-5 text-lg font-medium text-white/90">Main Pages</p>
              <ul className="space-y-3 text-base text-white/60">
                {mainPages.map((p) => (
                  <li key={p.label}>
                    <Link href={p.to} className="transition-colors hover:text-accent">{p.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-5 text-lg font-medium text-white/90">Utilities</p>
              <ul className="space-y-3 text-base text-white/60">
                {utilities.map((u) => (
                  <li key={u.label}><span className="cursor-pointer transition-colors hover:text-accent">{u.label}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3 md:items-center">
          <p className="text-base text-white/55">
            © {new Date().getFullYear()} — <span className="text-white">Asia Tech Roofing</span> | Serving Singapore since 2004<br />
            Professional Roofing & Waterproofing Specialist
          </p>
          <div className="flex justify-start gap-3 md:justify-center">
            {[Instagram, Dribbble, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-accent hover:text-accent">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-1 text-base text-white/70 md:items-end">
            <a href="mailto:sales@asiatechroof.sg" className="underline-offset-4 hover:text-accent hover:underline">sales@asiatechroof.sg</a>
            <a href="tel:+6590545431" className="hover:text-accent">+65 9054 5431</a>
            <a href="https://api.whatsapp.com/send?phone=6598927202" target="_blank" rel="noopener noreferrer" className="hover:text-accent">WhatsApp: +65 9892 7202</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

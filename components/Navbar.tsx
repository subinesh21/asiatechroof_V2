"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { NavLink } from './NavLink';
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const mainNav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/services", label: "Services", hasMenu: true },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Pages", hasMenu: true },
];

const servicesMenu = [
  { to: "/services/roof-repair", label: "Roof Repair" },
  { to: "/services/leak-repair", label: "Leak Repair" },
  { to: "/services/waterproofing", label: "Waterproofing" },
  { to: "/services/structural-works", label: "Structural Works" },
];

const pagesMenu = [
  { to: "/blog", label: "Blog" },
  { to: "/ratings", label: "Ratings" },
  { to: "/contact", label: "Contact" },
];

const Logo = () => (
  <Link href="/" className="flex items-center gap-2" aria-label="Asia Tech Roofing home">
    <Image 
      src="/logo.webp" 
      alt="Asia Tech Roofing" 
      width={200} 
      height={60} 
      className="h-12 w-auto"
      priority
    />
  </Link>
);

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const lastScrollX = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.pageYOffset;
      const currentX = window.pageXOffset;
      if (current < 50) {
        setVisible(true);
      } else if (current > lastScrollY.current) {
        if (current > 150) setVisible(false);
      } else if (current > lastScrollX.current) {
        if (current > 150) setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = current;
      lastScrollX.current = currentX;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setVisible(true);
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
      visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"
    }`}>
      <div className="px-4 md:px-8 py-4 md:py-6">
        <nav className="container-pad flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3 shadow-2xl backdrop-blur-md md:px-7">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasMenu && setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <NavLink
                href={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 rounded-full px-4 py-2 text-[15px] transition-colors ${
                    isActive || pathname.startsWith(item.to) && item.to !== "/"
                      ? "font-semibold text-ink"
                      : "text-ink/70 hover:text-ink"
                  }`
                }
              >
                {item.label}
                {item.hasMenu && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </NavLink>

              {item.hasMenu && open === item.label && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                  <div className="w-56 rounded-2xl border border-ink/5 bg-white p-2 shadow-xl">
                    {(item.label === "Services" ? servicesMenu : pagesMenu).map((sub) => (
                      <Link
                        key={sub.to}
                        href={sub.to}
                        className="block rounded-xl px-4 py-2.5 text-sm text-ink/80 transition-colors hover:bg-cream hover:text-ink"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-5">
          <Link href="/contact" className="btn-yellow !py-3 !px-5 text-sm">
            Free Inspection <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>
    </div>
  </header>
);
}

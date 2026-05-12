"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { NavLink } from './NavLink';
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface NavItem {
  to: string;
  label: string;
}

const mainNav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About KSP" },
  { to: "/services", label: "Our Services" },
  { to: "/#feedback", label: "Feedback" },
  { to: "/#recent-works", label: "Recent Works" },
  { to: "/contact", label: "Contact" },
];

const Logo = () => (
  <Link href="/" className="flex items-center gap-2" aria-label="KSP General Contractors home">
    <Image
      src="https://assets.nicepagecdn.com/2185bf63/6190518/images/logo.png"
      alt="KSP General Contractors"
      width={200}
      height={60}
      className="h-12 w-auto"
      priority
    />
  </Link>
);

export default function Navbar() {
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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"
      }`}>
      <div className="px-4 md:px-8 py-4 md:py-6">
        <nav className="container-pad flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 shadow-lg backdrop-blur-xl md:px-7">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <li key={item.label} className="relative">
                <NavLink
                  href={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 rounded-full px-4 py-2 text-[15px] transition-colors ${isActive || pathname.startsWith(item.to) && item.to !== "/"
                      ? "font-semibold text-[#0f172a] bg-[#5f90f7]/10"
                      : "text-[#0f172a]/70 hover:text-[#0f172a] hover:bg-[#5f90f7]/5"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 md:gap-5">
            <Link href="/contact" className="btn-yellow !py-3 !px-5 text-sm">
              Request Free Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

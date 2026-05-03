"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string | ((props: { isActive: boolean }) => string);
  activeClassName?: string;
}

export const NavLink = ({ href, children, className, activeClassName }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  const resolvedClassName = typeof className === "function" ? className({ isActive }) : cn(className, isActive && activeClassName);

  return (
    <Link href={href} className={resolvedClassName}>
      {children}
    </Link>
  );
};

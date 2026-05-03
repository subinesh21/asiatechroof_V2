import { ReactNode } from "react";

export default function PageHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-cream pt-40 pb-16 md:pt-48 md:pb-20">
      <div className="container-pad">
        {eyebrow && <p className="mb-4 text-xs uppercase tracking-[0.25em] text-ink-muted">{eyebrow}</p>}
        <h1 className="font-display text-4xl font-semibold leading-[1.05] text-ink md:text-7xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-base text-ink-soft">{children}</div>}
      </div>
    </section>
  );
}

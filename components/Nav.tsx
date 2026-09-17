"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";

const SECTIONS = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/leadership", label: "LEADERSHIP" },
  { href: "/publications", label: "PUBLICATIONS & ACHIEVEMENTS" },
  { href: "/about", label: "ABOUT" }
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
      <div className="flex w-full max-w-wide items-center justify-between rounded-full border border-border-soft bg-bg/80 px-5 py-3 backdrop-blur-md sm:px-6">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 font-mono text-sm tracking-wider text-ink transition-colors hover:text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent pulse-soft" />
          CBR
        </Link>

        {/* DESKTOP LINKS */}
        <nav className="hidden items-center gap-2 md:flex">
          {SECTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`rounded-full px-4 py-2 font-mono text-sm tracking-wide transition-colors ${
                isActive(s.href) ? "bg-accent-soft text-accent" : "text-muted hover:text-ink-dim"
              }`}
            >
              {s.label}
            </Link>
          ))}
        </nav>

        {/* BUTTONS */}
        <div className="flex items-center gap-3">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ae22b028@smail.iitm.ac.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden rounded-full border border-border px-4 py-2 font-mono text-sm text-ink-dim transition-colors hover:border-accent hover:text-accent sm:block"
          >
            Email
          </a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hidden rounded-full border border-border px-4 py-2 font-mono text-sm text-ink-dim transition-colors hover:border-accent hover:text-accent sm:block">GitHub</a>
          <button className="rounded-full border border-border px-4 py-2 font-mono text-sm text-ink md:hidden" onClick={() => setOpen((v) => !v)}>
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute inset-x-4 top-20 flex flex-col gap-2 rounded-2xl border border-border-soft bg-bg/95 p-4 backdrop-blur-md md:hidden">
          {SECTIONS.map((s) => (
            <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className={`rounded-lg px-4 py-3 font-mono text-base transition-colors ${isActive(s.href) ? "bg-accent-soft text-accent" : "text-ink-dim hover:bg-accent-soft hover:text-accent"}`}>
              {s.label}
            </Link>
          ))}
          <a href="mailto:ae22b028@smail.iitm.ac.in" className="rounded-lg px-4 py-3 font-mono text-base text-ink-dim hover:bg-accent-soft hover:text-accent">Email ↗</a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="rounded-lg px-4 py-3 font-mono text-base text-ink-dim hover:bg-accent-soft hover:text-accent">GitHub ↗</a>
        </div>
      )}
    </header>
  );
}
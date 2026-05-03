"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
  { label: "Certifications", href: "/certifications" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isDark, setIsDark] = useState(false);

  const applyTheme = (dark: boolean) => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
    setIsDark(dark);
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      applyTheme(true);
      return;
    }
    if (stored === "light") {
      applyTheme(false);
      return;
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    applyTheme(prefersDark);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="relative overflow-hidden border-b border-border bg-background/95 backdrop-blur-2xl">
        <div className="pointer-events-none absolute left-16 top-3 h-2.5 w-2.5 bg-cyan-400/70 shadow-[0_0_12px_rgba(56,189,248,0.8)] animate-pulse" />
        <div className="pointer-events-none absolute right-28 top-2 h-1.5 w-1.5 bg-primary/75 shadow-[0_0_10px_rgba(81,162,255,0.7)] animate-pulse [animation-delay:500ms]" />
        <div className="pointer-events-none absolute right-10 bottom-3 h-2 w-2 bg-cyan-300/65 shadow-[0_0_10px_rgba(34,211,238,0.75)] animate-pulse [animation-delay:900ms]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 scanlines" />

        <div className="mx-auto grid min-h-[4.2rem] w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 md:px-6">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center gap-1.5 font-mono text-xl font-bold no-underline group"
          >
            <span className="glitch-text text-primary">
              <span className="glitch-layer" data-text="<S/>">
                &lt;S/&gt;
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="relative z-10 hidden items-center gap-2.5 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={cn(
                    "px-4.5 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-200",
                    activeLink === link.label
                      ? "border border-primary/50 bg-primary/15 text-primary shadow-[0_0_12px_rgba(81,162,255,0.45)]"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative z-10 flex shrink-0 items-center justify-end gap-2">
            <a
              href="/resume.pdf"
              download
              className="hidden items-center gap-1.5 border border-primary/60 bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-[0_0_14px_rgba(81,162,255,0.45)] transition-all duration-200 hover:scale-[1.02] hover:brightness-110 md:inline-flex"
              aria-label="Download resume"
            >
              Resume
              <Download className="h-3.5 w-3.5 shrink-0 opacity-95" aria-hidden />
            </a>
            <button
              onClick={() => applyTheme(!isDark)}
              className="border border-primary/40 p-2 text-primary transition-colors hover:bg-primary/10"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="border border-primary/50 p-2.5 text-primary transition-colors hover:bg-primary/10 md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-border bg-background/95 p-5 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="pointer-events-none absolute inset-0 opacity-30 scanlines" />
            <ul className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-2">
              <li>
                <a
                  href="/resume.pdf"
                  download
                  onClick={() => setMenuOpen(false)}
                  className="relative z-10 flex items-center justify-center gap-2 border border-primary/60 bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_14px_rgba(81,162,255,0.45)] transition-all duration-200 hover:brightness-110"
                  aria-label="Download resume"
                >
                  Resume
                  <Download className="h-4 w-4 shrink-0 opacity-95" aria-hidden />
                </a>
              </li>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.label);
                      setMenuOpen(false);
                    }}
                    className={cn(
                      "relative z-10 block px-4 py-3 text-sm font-semibold transition-all duration-200",
                      activeLink === link.label
                        ? "bg-primary/15 text-primary border border-primary/50"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/10",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

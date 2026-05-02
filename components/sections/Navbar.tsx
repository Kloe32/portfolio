"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-black/60 backdrop-blur-2xl border border-[#51a2ff]/40 shadow-[0_0_35px_rgba(81,162,255,0.18)] px-4 py-3.5 flex items-center min-h-[3.25rem]">
          <div className="pointer-events-none absolute -inset-6 rounded-[22px] bg-[#51a2ff]/10 blur-2xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(81,162,255,0.14),transparent_40%,rgba(81,162,255,0.18))]" />
          <div className="pointer-events-none absolute inset-0 opacity-30 scanlines" />
          <div className="pointer-events-none absolute -left-10 top-0 h-full w-24 bg-linear-to-r from-[#51a2ff]/30 to-transparent blur-xl animate-pulse" />
          {/* Logo/Brand */}
          <Link
            href="#home"
            className="relative z-10 flex shrink-0 items-center gap-1.5 font-mono text-xl font-bold no-underline group ml-2"
          >
            <span className="glitch-text text-primary">
              <span className="glitch-layer" data-text="<S/>">
                &lt;S/&gt;
              </span>
            </span>
          </Link>

          {/* Desktop Navigation — geometric center of pill */}
          <ul className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center gap-2.5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={cn(
                    "px-4.5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap",
                    activeLink === link.label
                      ? "bg-[#51a2ff]/15 text-[#51a2ff] shadow-[0_0_12px_rgba(81,162,255,0.45)] border border-[#51a2ff]/50"
                      : "text-zinc-300 hover:text-[#51a2ff] hover:bg-[#51a2ff]/10",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative z-10 ml-auto flex shrink-0 items-center gap-2">
            <button
              onClick={() => applyTheme(!isDark)}
              className="rounded-md border border-[#51a2ff]/40 p-2 text-[#51a2ff] transition-colors hover:bg-[#51a2ff]/10"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden rounded-md border border-[#51a2ff]/50 p-2.5 text-[#51a2ff] transition-colors hover:bg-[#51a2ff]/10"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-22 left-4 right-4 sm:left-6 sm:right-6 rounded-2xl bg-black/70 backdrop-blur-xl border border-[#51a2ff]/40 shadow-[0_0_30px_rgba(81,162,255,0.2)] p-5 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="pointer-events-none absolute inset-0 opacity-30 scanlines" />
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.label);
                      setMenuOpen(false);
                    }}
                    className={cn(
                      "relative z-10 block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200",
                      activeLink === link.label
                        ? "bg-[#51a2ff]/15 text-[#51a2ff] border border-[#51a2ff]/50"
                        : "text-zinc-300 hover:text-[#51a2ff] hover:bg-[#51a2ff]/10",
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

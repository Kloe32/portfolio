"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-full bg-zinc-900/40 backdrop-blur-md border border-blue-500/30 shadow-2xl shadow-blue-500/10 px-2 py-3 flex items-center justify-between">
          {/* Logo/Brand */}
          <Link
            href="#home"
            className="ml-4 font-bold text-[#51a2ff] text-sm sm:text-base tracking-tight hover:text-blue-300 transition-colors"
          >
            SAI
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap",
                    activeLink === link.label
                      ? "bg-blue-500/20 text-[#51a2ff] shadow-lg shadow-blue-500/20 border border-blue-500/30"
                      : "text-zinc-300 hover:text-[#51a2ff] hover:bg-blue-500/10",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden mr-3 p-2 rounded-full hover:bg-blue-500/10 transition-colors text-[#51a2ff]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-20 left-4 right-4 sm:left-6 sm:right-6 rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-blue-500/30 shadow-2xl shadow-blue-500/10 p-4 animate-in fade-in slide-in-from-top-2 duration-200">
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
                      "block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                      activeLink === link.label
                        ? "bg-blue-500/20 text-[#51a2ff] border border-blue-500/30"
                        : "text-zinc-300 hover:text-[#51a2ff] hover:bg-blue-500/10",
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

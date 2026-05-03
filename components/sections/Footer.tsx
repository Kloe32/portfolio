import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail,  } from "react-icons/fi";
import {FaWhatsapp} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background px-6 py-8 md:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-3 md:gap-10">
        <div className="flex justify-center md:justify-start">
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
        </div>

        <p className="text-center font-mono text-xs leading-relaxed text-muted-foreground">
          © 2026 Sai Saing Wan. Built with Next.js &amp; Tailwind.
        </p>

        <div className="flex items-center justify-center gap-3 md:justify-end">
          <a
            href="https://github.com/Kloe32"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center border border-border bg-card text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
          >
            <FiGithub className="text-base" />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-saing-wan-2aa191191/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center border border-border bg-card text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
          >
            <FiLinkedin className="text-base" />
          </a>
          <a
            href="mailto:angellay969.al969@gmail.com"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center border border-border bg-card text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
          >
            <FiMail className="text-base" />
          </a>
          <a
            href="https://wa.me/6591308695?text=Hello, I came across your portfolio and I'm interested in your services."
            aria-label="Whatsapp"
            className="flex h-9 w-9 items-center justify-center border border-border bg-card text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
          >
            <FaWhatsapp className="text-base" />
          </a>
        </div>
      </div>
    </footer>
  );
}

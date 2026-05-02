import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background px-6 py-8 md:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-3 md:gap-10">
        <div className="flex justify-center md:justify-start">
          <Link
            href="/"
            className="font-mono text-lg font-bold tracking-tight no-underline hover:opacity-90"
          >
            <span className="text-primary">&lt;S/</span>
            <span className="text-primary/70">&gt;</span>
          </Link>
        </div>

        <p className="text-center font-mono text-xs leading-relaxed text-muted-foreground">
          © 2024 Sai Saing Wan. Built with Next.js &amp; Tailwind.
        </p>

        <div className="flex items-center justify-center gap-3 md:justify-end">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
          >
            <FiGithub className="text-base" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
          >
            <FiLinkedin className="text-base" />
          </a>
          <a
            href="mailto:saisaingwan@email.com"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
          >
            <FiMail className="text-base" />
          </a>
        </div>
      </div>
    </footer>
  );
}

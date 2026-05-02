"use client";

import type { FormEvent } from "react";
import { MapPin, Clock, Mail } from "lucide-react";

export default function PortfolioContact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className=" px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <h2 className="w-fit border-b-2 border-primary/60 pb-1 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Get in touch
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="font-mono text-sm leading-relaxed text-muted-foreground">
              I&apos;m currently open to full-time roles and freelance projects.
              Drop me a message and I&apos;ll get back to you within 24 hours.
            </p>

            <ul className="mt-10 space-y-6 font-mono text-sm">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 text-primary">
                  <Mail className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">Email</p>
                  <a
                    href="mailto:angellay969.al969@gmail.com"
                    className="mt-1 block break-all text-muted-foreground transition-colors hover:text-primary"
                  >
                    angellay969.al969@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 text-primary">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="mt-1 text-muted-foreground">Singapore</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 text-primary">
                  <Clock className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">Availability</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="relative inline-flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="font-medium text-muted-foreground">
                      Open to work
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4"
            aria-label="Contact form"
          >
            <label className="block">
              <span className="sr-only">Name</span>
              <input
                name="name"
                placeholder="Name"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none"
                autoComplete="name"
              />
            </label>
            <label className="block">
              <span className="sr-only">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none"
                autoComplete="email"
              />
            </label>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                className="h-32 min-h-32 w-full resize-y rounded-xl border border-border bg-card px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="mt-2 w-full rounded-xl border border-primary/40 bg-primary/10 py-3 font-semibold text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary/15"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

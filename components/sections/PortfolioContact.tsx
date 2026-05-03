"use client";

import type { FormEvent } from "react";
import { motion } from "motion/react";
import { Clock, Mail, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";

/** Matches `--primary` in globals.css */
const PRIMARY = "#51a2ff";

/** Fixed positions/sizes so layout feels organic without runtime randomness */
const FLOAT_SHAPES = [
  { className: "left-[6%] top-[14%] h-1.5 w-1.5 rounded-full", delay: 0 },
  { className: "right-[11%] top-[22%] h-2 w-2 rotate-12 rounded-sm", delay: 0.15 },
  { className: "left-[18%] bottom-[26%] h-1 w-3 rounded-full", delay: 0.08 },
  { className: "right-[20%] bottom-[18%] h-2.5 w-2.5 rounded-full", delay: 0.22 },
  { className: "left-[42%] top-[8%] h-px w-8 rotate-[35deg]", delay: 0.12 },
  { className: "right-[38%] bottom-[12%] h-px w-6 -rotate-[18deg]", delay: 0.18 },
] as const;

export default function PortfolioContact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const fieldClass = cn(
    "w-full rounded-xl bg-white/[0.06] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
  );

  return (
    <section id="contact" className="relative px-6 py-20 md:py-24">
      <div className="relative isolate mx-auto w-full max-w-7xl font-exo">
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -z-10 -inset-x-4 -inset-y-8 sm:-inset-x-8 sm:-inset-y-10"
        >
          <div
            className="absolute inset-0 opacity-75 blur-[44px] sm:blur-[52px]"
            style={{
              background: `radial-gradient(ellipse 80% 65% at 32% 42%, color-mix(in srgb, ${PRIMARY} 18%, transparent) 0%, rgba(139,92,246,0.07) 48%, transparent 72%)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-50 mix-blend-screen blur-[32px]
              mask-[radial-gradient(ellipse_55%_48%_at_70%_50%,rgba(0,0,0,1)_28%,transparent_78%)]"
            style={{
              background: `radial-gradient(ellipse 42% 34% at 74% 46%, color-mix(in srgb, ${PRIMARY} 14%, transparent) 0%, transparent 55%)`,
            }}
          />
        </div>

        {/* Loose scatter — section-level décor */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-[5] overflow-hidden"
        >
          <span className="absolute right-[4%] top-[8%] text-lg text-primary/25">
            ✦
          </span>
          <span className="absolute bottom-[20%] left-[3%] text-xs text-primary/20">
            · ·
          </span>
          <span className="absolute right-[12%] top-[38%] h-8 w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent" />
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.header
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="mx-auto max-w-md lg:mx-0">
              <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Get in touch
              </h2>
              <p className="mt-5 text-[17px] font-light leading-relaxed tracking-wide text-zinc-400 md:text-lg">
                Open to full-time roles and freelance work. I usually reply
                within{" "}
                <span className="font-medium text-primary">24 hours</span>.
              </p>
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="relative lg:col-span-7"
          >
            <div
              className={cn(
                "relative overflow-hidden rounded-3xl bg-white/[0.05] p-7 shadow-[0_25px_80px_rgba(15,23,42,0.45)] backdrop-blur-2xl",
                "md:p-8",
              )}
            >
              {/* In-card micro accents */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
              >
                {FLOAT_SHAPES.map((shape, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: shape.delay, duration: 0.5 }}
                    className={cn(
                      "absolute bg-primary/35",
                      shape.className,
                    )}
                  />
                ))}
                <motion.span
                  aria-hidden
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.45, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.45 }}
                  className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/[0.07] blur-2xl"
                />
                <span className="absolute bottom-5 left-5 text-primary/20">✦</span>
                <span className="absolute right-7 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.4em] text-zinc-600/70">
                  ···
                </span>
              </div>

              <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-8">
                <div>
                  <ul className="space-y-5">
                    <li className="flex gap-4">
                      <span
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary"
                        aria-hidden
                      >
                        <Mail className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">Email</p>
                        <a
                          href="mailto:angellay969.al969@gmail.com"
                          className="mt-1 block break-all text-sm leading-relaxed text-zinc-400 transition-colors hover:text-primary"
                        >
                          angellay969.al969@gmail.com
                        </a>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary"
                        aria-hidden
                      >
                        <MapPin className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Location
                        </p>
                        <p className="mt-1 text-sm text-zinc-400">Singapore</p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary"
                        aria-hidden
                      >
                        <Clock className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Availability
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="relative inline-flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/45" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                          </span>
                          <span className="text-sm font-medium text-zinc-300">
                            Open to work
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
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
                        className={fieldClass}
                        autoComplete="name"
                      />
                    </label>
                    <label className="block">
                      <span className="sr-only">Email</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={fieldClass}
                        autoComplete="email"
                      />
                    </label>
                    <label className="block">
                      <span className="sr-only">Message</span>
                      <textarea
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        className={cn(fieldClass, "min-h-36 resize-y")}
                      />
                    </label>
                    <button
                      type="submit"
                      className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_32px_rgba(81,162,255,0.28)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      Send message
                      <Send className="h-4 w-4 opacity-90" aria-hidden />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

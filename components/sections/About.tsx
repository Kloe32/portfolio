"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 pt-10 pb-24 md:pt-12 md:pb-28"
    >
      <div className="relative isolate mx-auto w-full max-w-7xl font-exo">
        {/* Ambient glow behind the whole block */}
        <div
          aria-hidden
          className="pointer-events-none absolute -z-10 -inset-x-4 -inset-y-6 sm:-inset-x-8 sm:-inset-y-10 md:-inset-x-10 md:-inset-y-12"
        >
          <div
            className="absolute inset-0 scale-[1.05] opacity-[0.9] blur-[44px] sm:blur-[56px] md:blur-[64px]
              [background:radial-gradient(ellipse_88%_72%_at_30%_45%,rgba(139,92,246,0.18)_0%,rgba(56,189,248,0.08)_45%,transparent_70%)]"
          />
          <div
            className="absolute inset-0 scale-105 opacity-65 mix-blend-screen blur-[32px] sm:blur-[40px]
              [mask-image:radial-gradient(ellipse_65%_58%_at_72%_48%,rgba(0,0,0,1)_30%,transparent_75%)]
              [background:radial-gradient(ellipse_50%_45%_at_75%_42%,rgba(34,211,238,0.12)_0%,transparent_60%)]"
          />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left: minimal section title */}
          <header className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-md lg:mx-0 lg:max-w-none"
            >
              <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                About me
              </h2>
            </motion.div>
          </header>

          {/* Right: body copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="space-y-8 text-[17px] font-light leading-[1.75] tracking-wide text-zinc-400 lg:col-span-7 md:space-y-10 md:text-lg lg:pt-2"
          >
            <p className="text-zinc-300">
              Hi, I&apos;m Sai Saing Wan — a fresh Computer Science graduate who
              fell in love with building things on the internet.{" "}
              <span className="font-medium text-zinc-100">
                Full stack by trade, detail-obsessed by nature
              </span>{" "}
              — I believe the difference between good and great software lives
              in the small things most people skip.
            </p>

            <p>
              What excites me most is where web development meets AI. Outside of
              formal projects I&apos;m constantly exploring new technologies and
              building things from scratch — not because I have to, but because I
              genuinely can&apos;t stop.
            </p>

            <p>
              I&apos;m looking for my first full-time role where I can bring
              that energy into a real team. I learn fast, I care deeply, and I go
              all in from day one —{" "}
              <span className="font-medium text-cyan-300/95">
                let&apos;s talk.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

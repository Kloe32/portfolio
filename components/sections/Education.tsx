"use client";

import { motion } from "motion/react";
import type { MotionProps } from "motion/react";

const items = [
  {
    institution: "University",
    degree: "Bachelor of Computer Science",
    years: "2020–2024",
    summary: "Focused on software engineering and AI fundamentals.",
    side: "left" as const,
  },
  {
    institution: "PSB Academy",
    degree: "Diploma in Information Technology",
    years: "2018–2020",
    summary: "Built practical foundations in programming and web development.",
    side: "right" as const,
  },
  {
    institution: "High School",
    degree: "Science Stream",
    years: "2016–2017",
    summary: "Foundation in mathematics and computer studies.",
    side: "left" as const,
  },
];

export default function Education() {
  return (
    <section id="experience" className="relative px-6 py-16 md:py-20">
      <div className="relative mx-auto w-full max-w-7xl font-exo">
        <div
          aria-hidden
          className="absolute bottom-10 left-7 top-4 z-0 md:left-1/2 md:-translate-x-1/2"
        >
          <motion.div
            className="h-full w-[2px] bg-gradient-to-b from-cyan-500/0 via-cyan-300/45 to-cyan-500/0"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-48px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>

        <ul className="relative z-10 space-y-14 md:space-y-16">
          {items.map((entry, idx) => {
            const side = entry.side;
            const cardMotion: MotionProps = {
              initial: { opacity: 0, x: side === "left" ? -40 : 40 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, ease: "easeOut" },
            };

            return (
              <li key={`${entry.institution}-${idx}`}>
                <div className="relative hidden items-start md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8">
                  <div className="flex justify-end pr-8">
                    {side === "left" ? (
                      <motion.article {...cardMotion} className="w-full max-w-xl">
                        <EducationCard {...entry} />
                      </motion.article>
                    ) : (
                      <div className="flex w-full max-w-xl items-start justify-end pt-2">
                        <p className="text-right text-3xl font-bold tracking-tight text-cyan-200">
                          {entry.years}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex w-8 shrink-0 flex-col items-center pt-5">
                    <span
                      className="relative h-3 w-3 shrink-0 rotate-45 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] ring-4 ring-background"
                      aria-hidden
                    />
                  </div>

                  <div className="flex justify-start pl-8">
                    {side === "right" ? (
                      <motion.article {...cardMotion} className="w-full max-w-xl">
                        <EducationCard {...entry} />
                      </motion.article>
                    ) : (
                      <div className="flex w-full max-w-xl items-start pt-2">
                        <p className="text-3xl font-bold tracking-tight text-cyan-200">
                          {entry.years}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="relative flex gap-4 pl-[1px] md:hidden">
                  <div className="flex shrink-0 flex-col items-center pt-1">
                    <p className="mb-2 text-lg font-bold tracking-tight text-cyan-200">
                      {entry.years}
                    </p>
                    <span
                      className="relative z-10 h-3 w-3 shrink-0 rotate-45 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] ring-4 ring-background"
                      aria-hidden
                    />
                  </div>
                  <motion.article {...cardMotion} className="min-w-0 flex-1">
                    <EducationCard {...entry} />
                  </motion.article>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function EducationCard({
  institution,
  degree,
  summary,
}: (typeof items)[number]) {
  return (
    <div className="rounded-xl border border-cyan-400/20 bg-black/45 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/45 hover:shadow-[0_0_28px_rgba(56,189,248,0.12)] md:w-full">
      <p className="text-lg font-semibold text-white">{institution}</p>
      <p className="mt-1 text-sm font-medium text-cyan-300">{degree}</p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{summary}</p>
    </div>
  );
}

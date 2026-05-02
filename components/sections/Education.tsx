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
    institution: "High School",
    degree: "Science Stream",
    years: "2018–2020",
    summary: "Foundation in mathematics and computer studies.",
    side: "right" as const,
  },
];

export default function Education() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-20 md:py-28"
      aria-labelledby="education-heading"
    >
      <div className="relative mx-auto max-w-5xl">
        <header className="mb-14">
          <h2
            id="education-heading"
            className="w-fit border-b-2 border-cyan-400 pb-1 text-3xl font-semibold tracking-tight text-white md:text-4xl"
          >
            Education journey
          </h2>
        </header>

        <div className="relative pb-8">
          <div
            aria-hidden
            className="absolute bottom-[2rem] left-7 top-0 z-0 md:left-1/2 md:-translate-x-1/2"
          >
            <motion.div
              className="h-full w-[2px] bg-gradient-to-b from-cyan-500/0 via-cyan-500/40 to-cyan-500/0"
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
                  <div className="relative hidden items-start md:flex md:justify-between md:gap-6">
                    <div className="flex w-[42%] shrink-0 justify-end pr-10">
                      {side === "left" ? (
                        <motion.article {...cardMotion} className="w-full">
                          <EducationCard {...entry} />
                        </motion.article>
                      ) : (
                        <div className="w-full" aria-hidden />
                      )}
                    </div>

                    <div className="flex shrink-0 flex-col items-center pt-9">
                      <span
                        className="relative z-10 h-3 w-3 shrink-0 rotate-45 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] ring-4 ring-[#030712]"
                        aria-hidden
                      />
                    </div>

                    <div className="flex w-[42%] shrink-0 justify-start pl-10">
                      {side === "right" ? (
                        <motion.article {...cardMotion} className="w-full">
                          <EducationCard {...entry} />
                        </motion.article>
                      ) : (
                        <div className="w-full" aria-hidden />
                      )}
                    </div>
                  </div>

                  <div className="relative flex gap-6 pl-[1px] md:hidden">
                    <div className="flex shrink-0 flex-col items-center pt-8">
                      <span
                        className="relative z-10 h-3 w-3 shrink-0 rotate-45 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] ring-4 ring-[#030712]"
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
      </div>
    </section>
  );
}

function EducationCard({
  institution,
  degree,
  years,
  summary,
}: (typeof items)[number]) {
  return (
    <div className="rounded-xl border border-cyan-500/15 bg-[#0D1526] p-5 md:w-full">
      <p className="font-semibold text-white">{institution}</p>
      <p className="mt-1 text-sm text-cyan-400">{degree}</p>
      <p className="mt-2 font-mono text-xs text-slate-500">{years}</p>
      <p className="mt-3 text-sm text-slate-400">{summary}</p>
    </div>
  );
}

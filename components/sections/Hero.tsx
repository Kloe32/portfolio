"use client";

import { AuroraText } from "@/components/ui/aurora-text";
import { TypingAnimation } from "../ui/typing-animation";
export default function Hero() {
  const techStacks = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
  ];

  return (
    <section id="home" className="flex min-h-screen items-center px-6">
      <div className="mx-auto w-full max-w-6xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
          Hello, I&apos;m...
        </p>

        <h1 className="mt-5 text-3xl font-black leading-[0.95] text-white sm:text-6xl md:text-6xl lg:text-8xl">
          <AuroraText colors={["#7928CA", "#0070F3", "#38bdf8"]}>
            Sai Saing Wan
          </AuroraText>
        </h1>

        <TypingAnimation
          words={[
            "FULL STACK DEVELOPER",
            "SOFTWARE ENGINEER",
            "PROBLEM SOLVER",
          ]}
          className="mx-auto mt-8 w-fit overflow-hidden whitespace-nowrap pr-2 text-base font-medium tracking-[0.2em] text-blue-300 md:text-3xl"
          loop={true}
        />

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
          I build modern web applications that are fast, accessible, and
          production-ready. I focus on clean architecture, thoughtful UI, and
          reliable backend systems.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-px hover:bg-zinc-200"
          >
            See Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-px hover:border-zinc-300"
          >
            Contact
          </a>
        </div>

        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
            Tech Stack
          </p>
          <div className="mx-auto mt-4 flex max-w-3xl flex-wrap justify-center gap-2">
            {techStacks.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1 text-xs text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

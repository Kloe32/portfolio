"use client";

import Image from "next/image";
import { AuroraText } from "@/components/ui/aurora-text";
import { TypingAnimation } from "../ui/typing-animation";
import { ShimmerButton } from "../ui/shimmer-button";
import { Marquee } from "../ui/marquee";
import StackIcon from "tech-stack-icons";
import { cn } from "@/lib/utils";

type TechStackItem = {
  name: string;
  stack:
    | "js"
    | "typescript"
    | "react"
    | "nodejs"
    | "nextjs"
    | "tailwindcss"
    | "expressjs"
    | "mysql"
    | "html5"
    | "css3";
  /** Light icons on dark: invert + boost brightness */
  dark?: boolean;
};

export default function Hero() {
  const techStacks: TechStackItem[] = [
    { name: "JavaScript", stack: "js" },
    { name: "TypeScript", stack: "typescript" },
    { name: "React", stack: "react" },
    { name: "Node.js", stack: "nodejs" },
    { name: "Next.js", stack: "nextjs", dark: true },
    { name: "Tailwind CSS", stack: "tailwindcss" },
    { name: "Express", stack: "expressjs", dark: true },
    { name: "MySQL", stack: "mysql", dark: true },
    { name: "Html", stack: "html5" },
    { name: "Css", stack: "css3" },
  ];
  return (
    <section id="home" className="flex min-h-screen items-center px-6">
      <div className="mx-auto w-full max-w-7xl font-space-grotesk">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.3em]">
              Hello, I&apos;m...
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-8xl">
              <AuroraText colors={["#7928CA", "#0070F3", "#38bdf8"]}>
                SAI SAING WAN
              </AuroraText>
            </h1>

            <TypingAnimation
              words={[
                "FULL STACK DEVELOPER",
                "SOFTWARE ENGINEER",
                "AI DEVELOPER",
              ]}
              className="mx-auto mt-8 w-fit overflow-hidden whitespace-nowrap pr-2 text-base font-medium tracking-[0.2em] text-blue-300 md:text-3xl lg:mx-0"
              loop={true}
            />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base lg:mx-0">
              Full Stack Developer specializing in React and Node.js, building
              scalable and user-focused applications. Currently expanding
              expertise in software engineering and AI-driven development.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              <ShimmerButton
                href="#projects"
                className="shadow-2xl"
                shimmerColor="#51a2ff"
                shimmerSize="0.1em"
                background="rgba(0,11,60)"
              >
                <span className="text-center text-sm leading-none font-medium whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10">
                  View My Works
                </span>
              </ShimmerButton>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-80 w-80 items-center justify-center overflow-hidden rounded-[2.5rem] bg-white/5 shadow-2xl shadow-blue-500/10 sm:h-96 sm:w-96">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/15 via-transparent to-cyan-500/15" />

              <div className="absolute -top-6 -right-4 h-6 w-6 rounded-full bg-blue-400/60 blur-[1px] animate-float-slow" />
              <div className="absolute -bottom-8 right-10 h-8 w-8 rounded-full bg-cyan-300/50 blur-[2px] animate-float" />
              <div className="absolute left-6 -bottom-4 h-10 w-10 rounded-full border border-blue-300/40 bg-white/5 animate-orbit" />
              <div className="absolute -left-8 top-10 h-14 w-14 rounded-full border border-cyan-400/40 bg-cyan-400/5 animate-orbit-slow" />
              <div className="absolute right-10 top-6 h-2 w-16 rotate-35 bg-linear-to-r from-transparent via-blue-200/50 to-transparent animate-glow" />

              <div className="relative z-10 flex h-64 w-64 items-center justify-center rounded-3xl bg-white/5 ring-1 ring-blue-500/30 shadow-[0_0_30px_rgba(81,162,255,0.25)] transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.02] sm:h-72 sm:w-72">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/10 via-transparent to-cyan-500/15" />
                <Image
                  src="/images/Profile.png"
                  alt="Profile"
                  width={320}
                  height={320}
                  className="relative z-10 h-full w-full rounded-3xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pb-2 text-center">
          <p className="text-base uppercase tracking-[0.34em] text-blue-200/80">
            Tech Stack
          </p>
          <div className="mx-auto mt-4 flex max-w-4xl flex-wrap justify-center gap-3">
            <Marquee speed={20} reverse={true} pauseOnHover>
              {techStacks.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative flex items-center rounded-full border border-cyan-500/30 bg-[#0D1526] p-3 text-xs text-blue-100 shadow-[0_0_12px_rgba(81,162,255,0.2)] backdrop-blur-sm hover:gap-2"
                >
                  <StackIcon
                    name={tech.stack}
                    className={cn(
                      "size-8 rounded-full md:size-10",
                      tech.dark &&
                        "[filter:invert(1)_brightness(2)]",
                    )}
                  />
                  <span className="max-w-0 overflow-hidden whitespace-nowrap text-[11px] tracking-[0.18em] text-blue-200/90 opacity-0 transition-all duration-200 group-hover:max-w-35 group-hover:opacity-100">
                    {tech.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { AuroraText } from "@/components/ui/aurora-text";
import { TypingAnimation } from "../ui/typing-animation";
import { ShimmerButton } from "../ui/shimmer-button";
import { Marquee } from "../ui/marquee";
import StackIcon from "tech-stack-icons";
export default function Hero() {
  const techStacks = [
    {
      name: "JavaScript",
      icon: <StackIcon name="js" className="w-10 h-10 rounded-full" />,
    },
    {
      name: "TypeScript",
      icon: <StackIcon name="typescript" className="w-10 h-10  rounded-full" />,
    },
    {
      name: "React",
      icon: <StackIcon name="react" className="w-10 h-10 rounded-full" />,
    },
    {
      name: "Node.js",
      icon: <StackIcon name="nodejs" className="w-10 h-10 rounded-full" />,
    },
    {
      name: "Next.js",
      icon: <StackIcon name="nextjs" className="w-10 h-10 rounded-full" />,
    },
    {
      name: "Tailwind CSS",
      icon: <StackIcon name="tailwindcss" className="w-10 h-10 rounded-full" />,
    },
    {
      name: "Express",
      icon: <StackIcon name="expressjs" className="w-10 h-10 rounded-full" />,
    },
    {
      name: "MySQL",
      icon: <StackIcon name="mysql" className="w-10 h-10 rounded-full" />,
    },
    {
      name: "Html",
      icon: <StackIcon name="html5" className="w-10 h-10 rounded-full" />,
    },
    {
      name: "Css",
      icon: <StackIcon name="css3" className="w-10 h-10 rounded-full" />,
    },
  ];
  return (
    <section id="home" className="flex min-h-screen items-center px-6">
      <div className="mx-auto w-full max-w-6xl text-center font-space-grotesk">
        <p className="text-sm font-medium uppercase tracking-[0.3em]">
          Hello, I&apos;m...
        </p>

        <h1 className="mt-5 text-3xl font-black leading-[0.95] text-white sm:text-6xl md:text-6xl lg:text-8xl">
          <AuroraText colors={["#7928CA", "#0070F3", "#38bdf8"]}>
            SAI SAING WAN
          </AuroraText>
        </h1>

        <TypingAnimation
          words={["FULL STACK DEVELOPER", "SOFTWARE ENGINEER", "AI DEVELOPER"]}
          className="mx-auto mt-8 w-fit overflow-hidden whitespace-nowrap pr-2 text-base font-medium tracking-[0.2em] text-blue-300 md:text-3xl"
          loop={true}
        />

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
          Computer Science graduate with expertise in Full Stack Development, AI
          Driven Development and Problem Solving. Passionate about building
          impactful digital experiences.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
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

        <div className="mt-8">
          <p className="text-sm uppercase tracking-[0.28em] ">Tech Stack</p>
          <div className="mx-auto mt-4 flex max-w-3xl flex-wrap justify-center gap-2">
            <Marquee speed={30} reverse={true}>
              {techStacks.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 rounded-full border border-zinc-700 bg-primary/30 px-3 py-3 text-xs text-zinc-300"
                >
                  {tech.icon}
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import type { IconType } from "react-icons";
import { FiCpu, FiMonitor, FiServer } from "react-icons/fi";
import {
  SiCss,
  SiFigma,
  SiGithub,
  SiGit,
  SiHtml5,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiExpress,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

type RackVariant = "frontend" | "backend" | "tools";

type SkillItem = {
  name: string;
  icon: IconType;
  level: number;
};

type Category = {
  key: string;
  title: string;
  Icon: IconType;
  skills: SkillItem[];
  variant: RackVariant;
};

const categories: Category[] = [
  {
    key: "frontend",
    title: "Frontend",
    Icon: FiMonitor,
    variant: "frontend",
    skills: [
      { name: "React", icon: SiReact, level: 94 },
      { name: "Next.js", icon: SiNextdotjs, level: 92 },
      { name: "TypeScript", icon: SiTypescript, level: 88 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      { name: "HTML5", icon: SiHtml5, level: 95 },
      { name: "CSS", icon: SiCss, level: 90 },
    ],
  },
  {
    key: "backend",
    title: "Backend",
    Icon: FiServer,
    variant: "backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 86 },
      { name: "Express", icon: SiExpress, level: 84 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
      { name: "MySQL", icon: SiMysql, level: 78 },
      { name: "REST API", icon: TbApi, level: 88 },
    ],
  },
  {
    key: "tools",
    title: "Tools & AI",
    Icon: FiCpu,
    variant: "tools",
    skills: [
      { name: "Git", icon: SiGit, level: 90 },
      { name: "GitHub", icon: SiGithub, level: 89 },
      { name: "Figma", icon: SiFigma, level: 76 },
      { name: "OpenAI", icon: SiOpenai, level: 82 },
      { name: "Vercel", icon: SiVercel, level: 87 },
      { name: "VS Code", icon: VscCode, level: 93 },
    ],
  },
];

const rackTheme: Record<
  RackVariant,
  {
    rackBorder: string;
    rackGlow: string;
    led: string;
    progress: string;
    icon: string;
  }
> = {
  frontend: {
    rackBorder: "border-cyan-400/25 hover:border-cyan-300/55",
    rackGlow: "hover:shadow-[0_0_32px_rgba(34,211,238,0.2)]",
    led: "bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]",
    progress: "from-cyan-300 via-sky-300 to-blue-400",
    icon: "text-cyan-200",
  },
  backend: {
    rackBorder: "border-violet-400/25 hover:border-violet-300/55",
    rackGlow: "hover:shadow-[0_0_32px_rgba(167,139,250,0.2)]",
    led: "bg-violet-300 shadow-[0_0_10px_rgba(167,139,250,0.9)]",
    progress: "from-violet-300 via-fuchsia-300 to-indigo-400",
    icon: "text-violet-200",
  },
  tools: {
    rackBorder: "border-emerald-400/25 hover:border-emerald-300/55",
    rackGlow: "hover:shadow-[0_0_32px_rgba(52,211,153,0.2)]",
    led: "bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]",
    progress: "from-emerald-300 via-teal-300 to-cyan-400",
    icon: "text-emerald-200",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-20 md:py-24">
      <div className="relative isolate mx-auto w-full max-w-7xl font-exo">
        <div
          aria-hidden
          className="pointer-events-none absolute -z-10 -inset-x-4 -inset-y-8 sm:-inset-x-8 sm:-inset-y-12"
        >
          <div
            className="absolute inset-0 opacity-[0.75] blur-[48px] sm:blur-[60px]
              [background:radial-gradient(ellipse_90%_70%_at_70%_35%,rgba(56,189,248,0.16)_0%,rgba(139,92,246,0.1)_45%,transparent_75%)]"
          />
          <div
            className="absolute inset-0 opacity-60 mix-blend-screen blur-[36px]
              mask-[radial-gradient(ellipse_60%_55%_at_32%_52%,rgba(0,0,0,1)_32%,transparent_75%)]
              [background:radial-gradient(ellipse_48%_38%_at_30%_45%,rgba(34,211,238,0.15)_0%,transparent_60%)]"
          />
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-10">
          <header className="relative lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-md lg:mx-0 lg:max-w-none"
            >
              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Skills & technologies
              </h2>
            </motion.div>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="lg:col-span-8"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_25px_80px_rgba(15,23,42,0.45)] backdrop-blur-2xl md:p-9">
              <div className="grid gap-6 md:grid-cols-3">
                {categories.map(({ key, title, Icon, skills, variant }) => (
                  <motion.article
                    key={key}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-white/10 bg-black/45 p-5 shadow-[0_0_25px_rgba(56,189,248,0.12)]"
                  >
                    <div className="mb-4 flex items-center gap-2">
                      <Icon
                        className={`h-5 w-5 ${rackTheme[variant].icon}`}
                        aria-hidden
                      />
                      <h3 className="text-sm font-semibold text-white">
                        {title}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {skills.map((skill, rackIndex) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div
                            key={`${key}-${skill.name}`}
                            className={`group relative overflow-hidden rounded-xl border bg-zinc-950/85 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 ${rackTheme[variant].rackBorder} ${rackTheme[variant].rackGlow}`}
                          >
                            <div
                              aria-hidden
                              className="absolute inset-y-1 left-1 w-2 rounded-full border border-white/10 bg-zinc-900/90"
                            >
                              <div className="mt-1 space-y-1">
                                <span className="mx-auto block h-0.5 w-0.5 rounded-full bg-zinc-600" />
                                <span className="mx-auto block h-0.5 w-0.5 rounded-full bg-zinc-600" />
                                <span className="mx-auto block h-0.5 w-0.5 rounded-full bg-zinc-600" />
                              </div>
                            </div>
                            <div
                              aria-hidden
                              className="absolute inset-y-1 right-1 w-2 rounded-full border border-white/10 bg-zinc-900/90"
                            >
                              <div className="mt-1 space-y-1">
                                <span className="mx-auto block h-0.5 w-0.5 rounded-full bg-zinc-600" />
                                <span className="mx-auto block h-0.5 w-0.5 rounded-full bg-zinc-600" />
                                <span className="mx-auto block h-0.5 w-0.5 rounded-full bg-zinc-600" />
                              </div>
                            </div>

                            <div className="mb-2 flex items-center justify-between pl-3 pr-3">
                              <div className="flex items-center gap-2">
                                <SkillIcon
                                  className={`h-5 w-5 ${rackTheme[variant].icon}`}
                                />
                                <span className="text-[13px] font-medium text-zinc-100">
                                  {skill.name}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span
                                  className={`h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-125 ${rackTheme[variant].led}`}
                                  aria-hidden
                                />
                              </div>
                            </div>

                            <div
                              aria-hidden
                              className="mb-2 ml-3 mr-3 flex gap-1 opacity-70"
                            >
                              <span className="h-0.5 flex-1 rounded-full bg-zinc-700" />
                              <span className="h-0.5 flex-1 rounded-full bg-zinc-700" />
                              <span className="h-0.5 flex-1 rounded-full bg-zinc-700" />
                            </div>

                            <div className="ml-3 mr-3 flex items-center gap-2">
                              <div className="h-1.5 flex-1 rounded-full bg-zinc-800/90">
                                <div
                                  className={`h-full rounded-full bg-linear-to-r transition-all duration-500 group-hover:brightness-125 ${rackTheme[variant].progress}`}
                                  style={{ width: `${skill.level}%` }}
                                  aria-hidden
                                />
                              </div>
                              <span className="min-w-10 text-right text-[11px] font-semibold text-zinc-300">
                                {skill.level}%
                              </span>
                            </div>

                            <div
                              aria-hidden
                              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            >
                              <div
                                className={`absolute inset-x-8 bottom-0 h-px bg-linear-to-r ${rackTheme[variant].progress}`}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

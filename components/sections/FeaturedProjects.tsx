import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { cn } from "@/lib/utils";

const projects = [
  {
    slug: "ai-chat",
    name: "AI Chat App",
    title: "AI Chat App",
    description:
      "Conversational interface with streamed responses and session memory. Experimented with prompt design and moderation.",
    tech: ["React", "Node.js", "OpenAI"],
    liveHref: "#",
    repoHref: "https://github.com",
    bannerClass: "from-cyan-500/15 via-sky-500/10 to-violet-500/15",
  },
  {
    slug: "portfolio-v1",
    name: "Portfolio v1",
    title: "Portfolio v1",
    description:
      "Personal site showcasing projects and skills with a focus on typography, motion, and layout polish.",
    tech: ["Next.js", "Tailwind"],
    liveHref: "#",
    repoHref: "https://github.com",
    bannerClass: "from-violet-500/15 via-cyan-500/10 to-sky-500/10",
  },
  {
    slug: "task-manager",
    name: "Task Manager",
    title: "Task Manager",
    description:
      "CRUD workspaces with tagging and deadlines. Implemented REST APIs with validation and Postgres persistence.",
    tech: ["React", "Express", "PostgreSQL"],
    liveHref: "#",
    repoHref: "https://github.com",
    bannerClass: "from-cyan-500/12 to-violet-500/18",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className=" px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12">
          <h2 className="w-fit pb-1 text-3xl font-semibold tracking-tight text-white md:text-4xl border-b-2 border-cyan-400">
            Featured projects
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className={cn(
                "group flex flex-col overflow-hidden rounded-2xl border bg-[#0D1526] transition-all duration-300",
                "border-cyan-500/15 hover:border-cyan-500/40",
                "hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(56,189,248,0.08)]",
              )}
            >
              <div
                className={cn(
                  "relative flex h-40 items-center justify-center bg-gradient-to-br",
                  project.bannerClass,
                )}
              >
                <span className="pointer-events-none text-center px-6 text-xl font-semibold tracking-tight text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.45)]">
                  {project.name}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t, ti) => (
                    <span
                      key={t}
                      className={cn(
                        "rounded-full border px-3 py-1 font-mono text-[11px] font-medium",
                        ti % 2 === 0
                          ? "border-cyan-500/35 bg-cyan-500/10 text-cyan-200"
                          : "border-[#A78BFA]/40 bg-[#A78BFA]/10 text-purple-100",
                      )}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-cyan-500/10 pt-4">
                  <Link
                    href={project.liveHref}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-gradient-to-r from-cyan-500/15 to-violet-500/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400"
                  >
                    Live
                    <ExternalLink className="h-4 w-4 opacity-70" aria-hidden />
                  </Link>
                  <Link
                    href={project.repoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="inline-flex rounded-full border border-cyan-500/20 bg-[#030712]/60 p-2.5 text-cyan-400 transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-200"
                  >
                    <FiGithub className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

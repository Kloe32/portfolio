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
    bannerClass: "from-cyan-500/25 via-sky-500/15 to-violet-500/25",
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
    bannerClass: "from-violet-500/25 via-cyan-500/15 to-sky-500/15",
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
    bannerClass: "from-cyan-500/20 via-blue-500/12 to-violet-500/22",
  },
];

export default function FeaturedProjects({
  showProjectsPageButton = true,
  layout = "home",
}: {
  showProjectsPageButton?: boolean;
  layout?: "home" | "page";
}) {
  const isProjectsPage = layout === "page";

  return (
    <section id="projects" className="relative px-6 py-20 md:py-24">
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

        <header className={cn("mb-10", isProjectsPage && "mb-12")}>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {isProjectsPage ? "All projects" : "Featured projects"}
          </h2>
        </header>

        <div
          className={cn(
            "rounded-3xl border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(15,23,42,0.45)] backdrop-blur-2xl",
            isProjectsPage ? "p-5 md:p-7" : "p-7 md:p-9",
          )}
        >
          <div
            className={cn(
              "grid grid-cols-1",
              isProjectsPage ? "gap-5 lg:grid-cols-12" : "gap-6 md:grid-cols-2 xl:grid-cols-3",
            )}
          >
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-2xl border bg-black/45 transition-all duration-300",
                  "border-cyan-400/20 hover:-translate-y-1 hover:border-cyan-300/45",
                  "hover:shadow-[0_0_28px_rgba(56,189,248,0.12)]",
                  isProjectsPage &&
                    (index % 3 === 0
                      ? "lg:col-span-7"
                      : index % 3 === 1
                        ? "lg:col-span-5"
                        : "lg:col-span-6"),
                )}
              >
                <div className="border-b border-white/10 p-3">
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br",
                      isProjectsPage ? "aspect-[16/8.6]" : "aspect-video",
                      project.bannerClass,
                    )}
                  >
                    <div className="absolute inset-x-0 top-0 flex h-7 items-center gap-1.5 border-b border-white/10 bg-black/40 px-3">
                      <span className="h-2 w-2 rounded-full bg-rose-300/80" />
                      <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                      <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
                    </div>

                    <div className={cn("absolute inset-0 top-7", isProjectsPage ? "p-4" : "p-3")}>
                      <div className="h-full rounded-md border border-white/10 bg-black/25 p-3 backdrop-blur-[1px]">
                        <div className={cn("rounded-full bg-white/30", isProjectsPage ? "h-2.5 w-28" : "h-2 w-24")} />
                        <div className={cn("mt-2 grid grid-cols-2", isProjectsPage ? "gap-3" : "gap-2")}>
                          <div className={cn("rounded bg-white/10", isProjectsPage ? "h-14" : "h-12")} />
                          <div className={cn("rounded bg-white/10", isProjectsPage ? "h-14" : "h-12")} />
                        </div>
                        <div className={cn("mt-2 rounded bg-white/10", isProjectsPage ? "h-10" : "h-8")} />
                      </div>
                    </div>

                    <span className="absolute bottom-2 right-2 rounded-md border border-white/20 bg-black/45 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white/85">
                      Screenshot Placeholder
                    </span>
                  </div>
                </div>

                <div className={cn("flex flex-1 flex-col", isProjectsPage ? "p-6" : "p-5")}>
                  <h3 className={cn("font-semibold text-white", isProjectsPage ? "text-xl" : "text-lg")}>
                    {project.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 flex-1 leading-relaxed text-zinc-400",
                      isProjectsPage ? "text-[15px]" : "text-sm",
                    )}
                  >
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t, ti) => (
                      <span
                        key={t}
                        className={cn(
                          "rounded-full border px-3 py-1 text-[11px] font-medium",
                          ti % 2 === 0
                            ? "border-primary/35 bg-primary/10 text-foreground"
                            : "border-border bg-accent text-accent-foreground",
                        )}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={cn("mt-6 flex items-center gap-3 border-t border-white/10", isProjectsPage ? "pt-5" : "pt-4")}>
                    <Link
                      href={project.liveHref}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/35 bg-cyan-400/10 font-semibold text-white transition-all duration-300 hover:border-cyan-300/65",
                        isProjectsPage ? "px-4.5 py-2.5 text-sm" : "px-4 py-2 text-sm",
                      )}
                    >
                      Live
                      <ExternalLink className="h-4 w-4 opacity-70" aria-hidden />
                    </Link>
                    <Link
                      href={project.repoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="inline-flex rounded-full border border-white/15 bg-black/40 p-2.5 text-cyan-300 transition-colors duration-300 hover:border-cyan-300/45 hover:text-cyan-200"
                    >
                      <FiGithub className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 border-t border-white/10 pt-6">
            {showProjectsPageButton && (
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/10"
              >
                View all projects
                <ExternalLink className="h-4 w-4 opacity-70" aria-hidden />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { ProjectScreenshotRotator } from "@/components/sections/ProjectScreenshotRotator";

/** Put files in `public/images/projects/` and list paths in `screenshots` (cycles automatically). */
type Project = {
  slug: string;
  name: string;
  title: string;
  description: string;
  tech: string[];
  liveHref: string;
  repoHref: string;
  bannerClass: string;
  /** Optional screenshots — multiple URLs rotate on a timer (see ProjectScreenshotRotator). */
  screenshots?: string[];
};

/** Slugs shown on the home “Featured projects” section only; `/projects` lists everything */
const FEATURED_SLUGS = ["boxwise", "boxwise-admin", "portfolio"] as const;

const projects: Project[] = [
  {
    slug: "boxwise",
    name: "BoxWise",
    title: "BoxWise (Client + Server)",
    description:
      "Full-stack BoxWise application with a dedicated client and backend server. Focused on building end-to-end flows between UI and API.",
    tech: [
      "JavaScript",
      "Node.js",
      "REST API",
      "MySQL",
      "React + Vite",
      "Tailwind CSS",
    ],
    liveHref: "https://www.boxwise.asia/",
    repoHref: "https://github.com/Kloe32/boxWise_client",
    bannerClass: "from-cyan-500/25 via-sky-500/15 to-violet-500/25",
    screenshots: [
      "/images/projects/boxwiseHome.webp",
      "/images/projects/boxwiseUnit.webp",
      "/images/projects/boxwiseSelect.webp",
      "/images/projects/boxwiseDashboard.webp",
    ],
  },
  {
    slug: "boxwise-admin",
    name: "BoxWise Admin",
    title: "BoxWise Admin Dashboard",
    description:
      "A JavaScript-based admin dashboard for BoxWise, built for internal operations to manage users and system data, oversee day-to-day workflows, and monitor activity from a single control panel.",
    tech: ["JavaScript", "React + Vite", "Tailwind CSS"],
    liveHref: "#",
    repoHref: "https://github.com/Kloe32/boxWise_admin",
    bannerClass: "from-amber-500/20 via-orange-500/12 to-rose-500/20",
    screenshots: [
      "/images/projects/boxwise-admin-dashboard.webp",
      "/images/projects/boxwise-admin-unit.webp",
      "/images/projects/boxwise-admin-booking.webp",
    ],
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    title: "Developer Portfolio",
    description:
      "Personal portfolio site built with TypeScript to present projects, skills, and links in a clean layout.",
    tech: ["TypeScript", "Tailwind CSS", "Next.js"],
    liveHref: "#",
    repoHref: "https://github.com/Kloe32/portfolio",
    bannerClass: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    screenshots: ["/images/projects/portfolio.webp"],
  },
  {
    slug: "stackoverflow-appwrite",
    name: "StackOverflow App (Appwrite)",
    title: "On-board StackOverflow Appwrite",
    description:
      "TypeScript project exploring Appwrite for auth and data management, structured around a StackOverflow-style workflow.",
    tech: ["TypeScript", "Appwrite", "CSS"],
    liveHref: "#",
    repoHref: "https://github.com/Kloe32/on-board-stackoverflow-appwrite",
    bannerClass: "from-violet-500/20 via-fuchsia-500/10 to-sky-500/20",
  },
  {
    slug: "shopping-backend",
    name: "Shopping Backend",
    title: "Shopping Backend (API)",
    description:
      "E-commerce backend API for a shopping system. Built to support typical store workflows like managing products and users.",
    tech: ["JavaScript", "Node.js", "REST API"],
    liveHref: "#",
    repoHref: "https://github.com/Kloe32/shopping_server",
    bannerClass: "from-cyan-500/20 via-blue-500/12 to-violet-500/22",
  },

  {
    slug: "shopping-pwa",
    name: "Shopping PWA",
    title: "Shopping Progressive Web App",
    description:
      "PWA storefront for a shopping experience with a responsive UI. Built as a web app optimized for mobile-like usage.",
    tech: ["JavaScript", "PWA", "HTML", "CSS"],
    liveHref: "#",
    repoHref: "https://github.com/Thuya-Myint/shopping-pwa",
    bannerClass: "from-sky-500/20 via-violet-500/12 to-cyan-500/20",
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

  const displayedProjects = isProjectsPage
    ? projects
    : FEATURED_SLUGS.map((slug) =>
        projects.find((p) => p.slug === slug),
      ).filter((p): p is (typeof projects)[number] => p != null);

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
            "border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(15,23,42,0.45)] backdrop-blur-2xl",
            isProjectsPage ? "p-4 md:p-6" : "p-6 md:p-8",
          )}
        >
          <div
            className={cn(
              "grid grid-cols-1",
              isProjectsPage
                ? "gap-5 lg:grid-cols-12"
                : "gap-6 md:grid-cols-2 xl:grid-cols-3",
            )}
          >
            {displayedProjects.map((project, index) => (
              <article
                key={project.slug}
                className={cn(
                  "group flex h-full flex-col overflow-hidden border bg-black/45 transition-all duration-300",
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
                <div className="border-b border-white/10 p-0">
                  <div
                    className={cn(
                      "relative w-full overflow-hidden border border-white/10 bg-linear-to-br",
                      isProjectsPage
                        ? "min-h-[12rem] aspect-[16/9] sm:min-h-[14rem] md:min-h-[16rem]"
                        : "min-h-[12rem] aspect-[3/2] sm:min-h-[15rem] md:min-h-[18rem]",
                      project.bannerClass,
                    )}
                  >
                    <div className="absolute inset-x-0 top-0 z-20 flex h-6 items-center gap-1.5 border-b border-white/10 bg-black/50 px-2.5">
                      <span className="h-2 w-2 bg-rose-300/80" />
                      <span className="h-2 w-2 bg-amber-300/80" />
                      <span className="h-2 w-2 bg-emerald-300/80" />
                    </div>

                    <div
                      className={cn(
                        "absolute inset-0 top-6 overflow-hidden p-0",
                      )}
                    >
                      {project.screenshots && project.screenshots.length > 0 ? (
                        <ProjectScreenshotRotator
                          images={project.screenshots}
                          title={project.title}
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 520px"
                        />
                      ) : (
                        <div className="h-full border border-white/10 bg-black/25 p-3 backdrop-blur-[1px]">
                          <div
                            className={cn(
                              "bg-white/30",
                              isProjectsPage ? "h-2.5 w-28" : "h-2 w-24",
                            )}
                          />
                          <div
                            className={cn(
                              "mt-2 grid grid-cols-2",
                              isProjectsPage ? "gap-3" : "gap-2",
                            )}
                          >
                            <div
                              className={cn(
                                "bg-white/10",
                                isProjectsPage ? "h-14" : "h-12",
                              )}
                            />
                            <div
                              className={cn(
                                "bg-white/10",
                                isProjectsPage ? "h-14" : "h-12",
                              )}
                            />
                          </div>
                          <div
                            className={cn(
                              "mt-2 bg-white/10",
                              isProjectsPage ? "h-10" : "h-8",
                            )}
                          />
                        </div>
                      )}
                    </div>

                    {(!project.screenshots ||
                      project.screenshots.length === 0) && (
                      <span className="absolute bottom-2 right-2 border border-white/20 bg-black/45 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white/85">
                        Screenshot Placeholder
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={cn(
                    "flex flex-1 flex-col",
                    isProjectsPage ? "p-6" : "p-5",
                  )}
                >
                  <h3
                    className={cn(
                      "font-semibold text-white",
                      isProjectsPage ? "text-xl" : "text-lg",
                    )}
                  >
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
                          "border px-3 py-1 text-[11px] font-medium",
                          ti % 2 === 0
                            ? "border-primary/35 bg-primary/10 text-foreground"
                            : "border-border bg-accent text-accent-foreground",
                        )}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    className={cn(
                      "mt-6 flex items-center gap-3 border-t border-white/10",
                      isProjectsPage ? "pt-5" : "pt-4",
                    )}
                  >
                    <Link
                      href={project.liveHref}
                      className={cn(
                        "inline-flex items-center gap-1.5 border border-cyan-400/35 bg-cyan-400/10 font-semibold text-white transition-all duration-300 hover:border-cyan-300/65",
                        isProjectsPage
                          ? "px-4.5 py-2.5 text-sm"
                          : "px-4 py-2 text-sm",
                      )}
                    >
                      Live
                      <ExternalLink
                        className="h-4 w-4 opacity-70"
                        aria-hidden
                      />
                    </Link>
                    <Link
                      href={project.repoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="inline-flex border border-white/15 bg-black/40 p-2.5 text-cyan-300 transition-colors duration-300 hover:border-cyan-300/45 hover:text-cyan-200"
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
                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/10"
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

const sampleProjects = [
  {
    title: "DevDash Analytics",
    description:
      "A real-time dashboard for product metrics with role-based access and customizable reports.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "ShopFlow API",
    description:
      "Scalable e-commerce backend with payments, inventory sync, and webhook-driven order processing.",
    tech: ["Node.js", "Express", "Redis", "Docker"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "FocusBoard",
    description:
      "A collaborative productivity app with drag-and-drop boards, team comments, and calendar integrations.",
    tech: ["React", "TypeScript", "Prisma", "Supabase"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Projects
          </h2>
          <p className="mt-3 text-zinc-400">
            A few sample projects that reflect product thinking and engineering
            depth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleProjects.map((project) => (
            <article
              key={project.title}
              className="border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-zinc-700"
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.demoUrl}
                  className="bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeUrl}
                  className="border border-zinc-600 px-4 py-2 text-sm font-medium text-white transition hover:border-zinc-400"
                >
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

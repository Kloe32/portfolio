const sampleExperience = [
  {
    role: "Full Stack Developer",
    company: "Nova Labs",
    period: "2023 - Present",
    highlights: [
      "Built and shipped customer-facing features used by 20k+ monthly users.",
      "Reduced API response times by 38% by optimizing database queries and caching.",
      "Led migration from JavaScript to TypeScript across core frontend modules.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Pixel Forge",
    period: "2021 - 2023",
    highlights: [
      "Implemented reusable UI component library adopted by 4 product teams.",
      "Improved Lighthouse performance score from 71 to 95 on key landing pages.",
      "Collaborated with designers to deliver accessible interfaces (WCAG AA).",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Experience
          </h2>
          <p className="mt-3 text-zinc-400">
            Sample timeline of roles, impact, and delivery outcomes.
          </p>
        </div>

        <div className="space-y-6">
          {sampleExperience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {item.role}
                </h3>
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-400">{item.company}</p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

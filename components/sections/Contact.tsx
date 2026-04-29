export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 text-center md:p-10">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Let’s Work Together
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          I’m currently open to freelance and full-time opportunities. If you
          have a project in mind, feel free to reach out.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:sai@example.com"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
          >
            sai@example.com
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-zinc-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-zinc-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

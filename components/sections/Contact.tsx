export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="relative isolate mx-auto w-full max-w-7xl font-exo">
        <div
          aria-hidden
          className="pointer-events-none absolute -z-10 -inset-x-4 -inset-y-8 sm:-inset-x-10 sm:-inset-y-12"
        >
          <div
            className="absolute inset-0 opacity-[0.75] blur-[52px]
              [background:radial-gradient(ellipse_80%_65%_at_35%_40%,rgba(56,189,248,0.16)_0%,rgba(139,92,246,0.12)_45%,transparent_75%)]"
          />
          <div
            className="absolute inset-0 opacity-60 mix-blend-screen blur-[36px]
              mask-[radial-gradient(ellipse_58%_50%_at_68%_55%,#000_35%,transparent_72%)]
              [background:radial-gradient(ellipse_48%_40%_at_70%_45%,rgba(34,211,238,0.14)_0%,transparent_60%)]"
          />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <header className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-[#51a2ff]/40 bg-black/55 p-8 shadow-[0_0_35px_rgba(81,162,255,0.14)] backdrop-blur-xl lg:mx-0 lg:max-w-none">
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-[linear-gradient(125deg,rgba(81,162,255,0.12),transparent_42%,rgba(56,189,248,0.1))]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.22] scanlines" />

              <p className="relative text-xs font-medium uppercase tracking-[0.28em] text-cyan-300/85">
                Contact
              </p>

              <h2 className="relative mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
                Let’s work together
              </h2>

              <div className="relative mt-6 flex items-center gap-3">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
                  aria-hidden
                />
                <div className="h-px flex-1 max-w-40 bg-linear-to-r from-cyan-400/70 via-[#A78BFA]/60 to-transparent" />
              </div>

              <p className="relative mt-5 text-sm font-light leading-relaxed tracking-wide text-zinc-400">
                I’m open to freelance and full-time opportunities. If you have a
                project in mind or want to collaborate, let’s chat.
              </p>
            </div>
          </header>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.45)] backdrop-blur-2xl md:p-8">
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/80">
                    Email
                  </p>
                  <a
                    href="mailto:sai@example.com"
                    className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-white transition hover:text-cyan-200"
                  >
                    sai@example.com
                  </a>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-200"
                  >
                    GitHub
                    <span className="text-xs text-cyan-300/70 transition group-hover:translate-x-1">
                      View
                    </span>
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-200"
                  >
                    LinkedIn
                    <span className="text-xs text-cyan-300/70 transition group-hover:translate-x-1">
                      Connect
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

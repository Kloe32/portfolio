import Link from "next/link";
import Education from "@/components/sections/Education";
import Footer from "@/components/sections/Footer";

export default function EducationPage() {
  return (
    <main className="relative flex min-h-[100vh] flex-col pt-24">
      <section className="relative px-6 pb-8 pt-14 md:pb-10 md:pt-18">
        <div className="relative isolate mx-auto w-full max-w-7xl font-exo">
          <div
            aria-hidden
            className="pointer-events-none absolute -z-10 -inset-x-4 -inset-y-8 sm:-inset-x-8 sm:-inset-y-12"
          >
            <div
              className="absolute inset-0 opacity-[0.78] blur-[54px]
                [background:radial-gradient(ellipse_85%_68%_at_40%_35%,rgba(56,189,248,0.18)_0%,rgba(139,92,246,0.12)_48%,transparent_78%)]"
            />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300/85">
              My path
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              From classrooms to code.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              A quick timeline of how I built my technical foundations and moved
              into full stack development.
            </p>
            <div className="mt-7">
              <Link
                href="/projects"
                className="inline-flex items-center border border-cyan-400/35 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300/65"
              >
                View projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Education />
      <Footer />
    </main>
  );
}

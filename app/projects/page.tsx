import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Footer from "@/components/sections/Footer";

export default function ProjectsPage() {
  return (
    <main className="relative flex min-h-[100vh] flex-col pt-24">
      <section className="relative px-6 pb-2 pt-14 md:pt-18">
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
              Portfolio
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Projects that I built.
            </h1>
          </div>
        </div>
      </section>

      <FeaturedProjects showProjectsPageButton={false} layout="page" />
      <Footer />
    </main>
  );
}

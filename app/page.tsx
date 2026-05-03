import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import PortfolioContact from "@/components/sections/PortfolioContact";
import Skills from "@/components/sections/Skills";
import { FadeInSection } from "@/components/FadeInSection";

export default function Home() {
  return (
    <main className="relative flex min-h-[100vh] flex-col pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 bg-indigo-500/15 blur-3xl" />
      </div>

      <FadeInSection delay={0}>
        <Hero />
      </FadeInSection>

      <div
        className="relative z-10 mx-auto flex max-w-4xl items-center justify-center px-6 py-2"
        aria-hidden
      >
        <div className="pointer-events-none absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent md:inset-x-12" />
        <span className="relative z-10 bg-background px-3 text-sm text-primary/40">
          ✦
        </span>
      </div>

      <FadeInSection delay={0.1}>
        <About />
      </FadeInSection>



      <FadeInSection delay={0.3}>
        <FeaturedProjects />
      </FadeInSection>
      
      <FadeInSection delay={0.2}>
        <Skills />
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <PortfolioContact />
      </FadeInSection>

      <Footer />
    </main>
  );
}

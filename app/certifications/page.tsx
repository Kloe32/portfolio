import { Award, Calendar, ExternalLink } from "lucide-react";
import Footer from "@/components/sections/Footer";

const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "Coursera / Meta",
    issued: "2024",
    credentialId: "META-FSWD-0001",
    verifyUrl: "#",
    summary:
      "Covered modern frontend and backend architecture, REST APIs, and deployment workflows.",
  },
  {
    title: "AI for Developers",
    issuer: "DeepLearning.AI",
    issued: "2024",
    credentialId: "DLAI-AI-0002",
    verifyUrl: "#",
    summary:
      "Focused on practical prompt engineering, LLM integrations, and AI product implementation.",
  },
  {
    title: "Advanced JavaScript",
    issuer: "Udemy",
    issued: "2023",
    credentialId: "UDEMY-JS-0003",
    verifyUrl: "#",
    summary:
      "Deep dive into modern JavaScript patterns, async flows, and performance-focused coding practices.",
  },
];

export default function CertificationsPage() {
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
              Credentials
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Certifications
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              Professional certifications and verified learning milestones that
              support my engineering journey.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-20 md:pb-24">
        <div className="mx-auto w-full max-w-7xl font-exo">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((cert) => (
              <article
                key={cert.credentialId}
                className="group rounded-2xl border border-cyan-400/20 bg-black/45 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-[0_0_28px_rgba(56,189,248,0.12)]"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <Award className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                  <span className="rounded-md border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-zinc-300">
                    {cert.issuer}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-white">{cert.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {cert.summary}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-zinc-400">
                  <Calendar className="h-3.5 w-3.5 text-cyan-300/80" aria-hidden />
                  <span>Issued {cert.issued}</span>
                </div>

                <p className="mt-2 text-xs text-zinc-500">
                  Credential ID: {cert.credentialId}
                </p>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/35 bg-cyan-400/10 px-3.5 py-2 text-xs font-semibold text-white transition-all duration-300 hover:border-cyan-300/65"
                >
                  Verify
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

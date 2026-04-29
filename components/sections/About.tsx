import Image from "next/image";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Git",
  "REST APIs",
];

export default function About() {
  return (
    <section id="about" className=" py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl font-bold text-white mb-16 text-center">
          About Me
        </h2>

        {/* Two column layout — stacks on mobile */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left — Profile photo */}
          <div className="shrink-0">
            <div className="w-56 h-56 rounded-2xl overflow-hidden border border-zinc-700">
              <Image
                src="https://placehold.co/224x224/27272a/ffffff?text=Your+Photo"
                alt="Profile photo"
                width={224}
                height={224}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right — Bio + Skills */}
          <div className="flex flex-col gap-6">
            {/* Bio */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Hi, I&apos;m [Your Name] 👋
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                I&apos;m a Full Stack Developer passionate about building
                products that live on the internet. I enjoy working across the
                stack — from designing clean UIs to architecting reliable
                backends. When I&apos;m not coding, you&apos;ll find me [your
                hobby here].
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-zinc-800 text-zinc-300 text-sm px-4 py-1.5 rounded-full border border-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

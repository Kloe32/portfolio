"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ProjectScreenshotRotatorProps = {
  images: string[];
  title: string;
  sizes: string;
  /** Time between slides (ms). Ignored when only one image or reduced motion. */
  intervalMs?: number;
};

export function ProjectScreenshotRotator({
  images,
  title,
  sizes,
  intervalMs = 5500,
}: ProjectScreenshotRotatorProps) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (images.length <= 1 || reduceMotion || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [images.length, intervalMs, reduceMotion, paused]);

  if (images.length === 0) return null;

  return (
    <div
      className="relative h-full min-h-[11rem] w-full overflow-hidden border border-white/10 bg-black/40 sm:min-h-[14rem] md:min-h-[18rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${title} — screenshot ${i + 1} of ${images.length}`}
          fill
          className={cn(
            "object-contain object-center transition-opacity duration-700 ease-in-out",
            i === index ? "z-[1] opacity-100" : "z-0 opacity-0",
          )}
          sizes={sizes}
        />
      ))}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/35 via-transparent to-black/10"
      />
      {images.length > 1 && (
        <div
          className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 shadow-[0_0_15px_rgba(0,0,0,0.45)] backdrop-blur"
          role="tablist"
          aria-label="Screenshots"
        >
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              tabIndex={i === index ? 0 : -1}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                i === index
                  ? "w-6 bg-primary"
                  : "w-2 bg-white/50 hover:bg-white/75",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

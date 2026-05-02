"use client";

import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

const STAR_COUNT = 30;
const PROGRESS_MS = 2500;

type LoaderProps = {
  onDismiss: () => void;
};

export default function Loader({ onDismiss }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => ({
        left: `${(i * 37 + 13) % 97}%`,
        top: `${(i * 59 + 7) % 94}%`,
        delayMs: i * 80,
      })),
    [],
  );

  useEffect(() => {
    const start = Date.now();
    let frame = 0;
    let finished = false;

    const tick = () => {
      const elapsed = Date.now() - start;
      const next = Math.min(100, Math.round((elapsed / PROGRESS_MS) * 100));
      setProgress(next);

      if (elapsed >= PROGRESS_MS) {
        setProgress(100);
        if (!finished) {
          finished = true;
          onDismiss();
        }
        return;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onDismiss]);

  return (
    <motion.div
      role="presentation"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050B18]"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className="pointer-events-none absolute h-px w-px animate-pulse rounded-full bg-white"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: `${s.delayMs}ms`,
          }}
          aria-hidden
        />
      ))}

      <div className="relative z-10 flex flex-col items-center">
        <span className="glitch-text text-primary animate-pulse font-mono text-4xl font-bold md:text-5xl">
          <span className="glitch-layer" data-text="<S/>">
            &lt;S/&gt;
          </span>
        </span>
        <p className="mt-4 font-mono text-xs tracking-widest text-cyan-400">
          Initializing systems...
        </p>
        <div className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-cyan-400 transition-[width] duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 font-mono text-xs text-slate-500">{progress}%</p>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type FadeInSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function FadeInSection({
  children,
  delay = 0,
  className,
}: FadeInSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

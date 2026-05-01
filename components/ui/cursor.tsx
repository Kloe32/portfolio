"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rx = useRef(0);
  const ry = useRef(0);
  const mx = useRef(0);
  const my = useRef(0);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Don't enable custom cursor on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return;

    // hide native cursor while custom cursor is active
    const previousCursor = document.documentElement.style.cursor;
    document.documentElement.style.cursor = "none";

    const baseDotColor = "#51a2ff";
    const baseRingColor = "rgba(81,162,255,0.6)";
    const hoverDotColor = "#FF0080";
    const hoverRingColor = "rgba(255,0,128,0.5)";

    const onMouseMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };

    let rafId: number;
    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.1;
      ry.current += (my.current - ry.current) * 0.1;
      ring.style.left = rx.current + "px";
      ring.style.top = ry.current + "px";

      // Check if cursor is over an interactive element
      // Use a small offset to avoid the cursor elements blocking the check
      const elementUnderCursor = document.elementFromPoint(
        mx.current + 10,
        my.current + 10,
      );
      const isOverInteractive = elementUnderCursor?.closest?.(
        "a, button, [role=button]",
      );

      if (isOverInteractive) {
        // Enlarge cursor over interactive elements
        dot.style.width = "0.75rem";
        dot.style.height = "0.75rem";
        dot.style.backgroundColor = hoverDotColor;
        ring.style.width = "3.25rem";
        ring.style.height = "3.25rem";
        ring.style.borderColor = hoverRingColor;
      } else {
        // Shrink cursor elsewhere
        dot.style.width = "0.5rem";
        dot.style.height = "0.5rem";
        dot.style.backgroundColor = baseDotColor;
        ring.style.width = "2.25rem";
        ring.style.height = "2.25rem";
        ring.style.borderColor = baseRingColor;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      // restore native cursor
      document.documentElement.style.cursor = previousCursor || "";
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed z-9999 w-2 h-2 bg-primary pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color] duration-150"
      />
      <div
        ref={ringRef}
        className="fixed z-9998 w-9 h-9 border border-primary/60 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-200"
      />
    </>
  );
}

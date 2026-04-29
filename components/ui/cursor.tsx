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
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dot.classList.add("!w-3", "!h-3", "!bg-[#FF0080]");
      ring.classList.add("!w-13", "!h-13", "!border-[#FF0080]/50");
    };
    const onLeave = () => {
      dot.classList.remove("!w-3", "!h-3", "!bg-[#FF0080]");
      ring.classList.remove("!w-13", "!h-13", "!border-[#FF0080]/50");
    };

    const addHoverListeners = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    addHoverListeners();
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
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

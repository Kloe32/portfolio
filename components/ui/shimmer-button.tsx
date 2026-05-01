import React, {
  type ComponentPropsWithoutRef,
  type CSSProperties,
} from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<"button">;
type AnchorProps = ComponentPropsWithoutRef<"a">;

export interface ShimmerButtonProps extends ButtonProps {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  href?: string;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)",
      className,
      children,
      href,
      ...props
    },
    ref,
  ) => {
    const sharedStyle = {
      "--spread": "90deg",
      "--shimmer-color": shimmerColor,
      "--radius": borderRadius,
      "--speed": shimmerDuration,
      "--cut": shimmerSize,
      "--bg": background,
    } as CSSProperties;

    const sharedClassName = cn(
      "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 whitespace-nowrap text-white [background:var(--bg)] pointer-events-auto",
      "transform-gpu transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_0_24px_rgba(81,162,255,0.22)] active:translate-y-px",
      className,
    );

    const content = (
      <>
        {/* spark container */}
        <div
          className={cn(
            "-z-30 blur-[2px] pointer-events-none",
            "@container-[size] absolute inset-0 overflow-visible",
          )}
        >
          {/* spark */}
          <div className="animate-shimmer-slide absolute inset-0 aspect-[1] h-[100cqh] rounded-none [mask:none]">
            {/* spark before */}
            <div className="animate-spin-around absolute -inset-full w-auto [translate:0_0] rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
          </div>
        </div>
        {children}

        {/* Highlight */}
        <div
          className={cn(
            "absolute inset-0 size-full pointer-events-none",

            "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",

            // transition
            "transform-gpu transition-all duration-300 ease-in-out",

            // on hover
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",

            // on click
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
          )}
        />

        {/* backdrop */}
        <div
          className={cn(
            "absolute inset-(--cut) -z-20 [border-radius:var(--radius)] [background:var(--bg)] pointer-events-none",
          )}
        />
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          style={sharedStyle}
          className={sharedClassName}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          {...(props as AnchorProps)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        style={sharedStyle}
        className={sharedClassName}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        {...props}
      >
        {/* spark container */}
        {content}
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";

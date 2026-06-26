"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-950 text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `[--aurora:repeating-linear-gradient(100deg,oklch(0.70_0.18_145)_10%,oklch(0.07_0.01_150)_15%,oklch(0.55_0.15_165)_20%,oklch(0.07_0.01_150)_25%,oklch(0.75_0.16_85)_30%)]
              [background-image:var(--aurora)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              filter blur-[10px]
              after:content-[""] after:absolute after:inset-0
              after:[background-image:var(--aurora)]
              after:[background-size:200%,_100%]
              after:animate-aurora
              after:[background-attachment:fixed]
              after:mix-blend-difference
              pointer-events-none
              absolute -inset-[10px]
              opacity-40
              animate-aurora`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          />
        </div>
        {children}
      </div>
    </main>
  );
}

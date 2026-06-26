"use client";
import { cn } from "@/lib/utils";

interface GlowingBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}

export function GlowingBorderButton({
  children,
  className,
  variant = "primary",
  ...props
}: GlowingBorderButtonProps) {
  if (variant === "outline") {
    return (
      <button
        className={cn(
          "relative inline-flex h-12 items-center justify-center rounded-full border border-emerald-500/50 bg-transparent px-8 text-sm font-medium text-emerald-400 transition-all duration-300",
          "hover:border-emerald-400 hover:text-emerald-300 hover:shadow-[0_0_20px_oklch(0.70_0.18_145/30%)]",
          "active:scale-95",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-emerald-500 px-8 text-sm font-semibold text-zinc-950 transition-all duration-300",
        "hover:bg-emerald-400 hover:shadow-[0_0_30px_oklch(0.70_0.18_145/50%)]",
        "active:scale-95",
        "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/20 before:to-transparent",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

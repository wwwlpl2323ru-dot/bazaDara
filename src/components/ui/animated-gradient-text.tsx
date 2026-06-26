import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/10 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#22c55e1f] backdrop-blur-sm transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#22c55e3f]",
        className
      )}
    >
      <span
        className="animate-gradient bg-gradient-to-r from-[#4ade80] via-[#d4a017] to-[#4ade80] bg-[length:var(--bg-size,300%)] bg-clip-text text-transparent"
      >
        {children}
      </span>
    </div>
  );
}

import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
};

export function GlassCard({
  className,
  hover = true,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        hover &&
          "hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.28)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

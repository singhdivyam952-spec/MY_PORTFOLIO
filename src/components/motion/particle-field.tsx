"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
};

export function ParticleField({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 28 }, (_, id) => ({
        id,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 8 + 10,
        delay: Math.random() * 4,
      })),
    []
  );

  if (!mounted || reduce) {
    return (
      <div
        aria-hidden
        className={className}
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, oklch(0.55 0.1 230 / 0.15), transparent 50%)",
        }}
      />
    );
  }

  return (
    <div aria-hidden className={className}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-brand/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.55, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

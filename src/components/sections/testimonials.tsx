import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { Reveal } from "@/components/motion/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Testimonials"
            title="What clients say about working together"
            description="Partnerships measured by clarity, delivery speed, and systems that keep performing after launch."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05}>
              <GlassCard className="h-full">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <Image
                    src={t.logo}
                    alt={`${t.company} logo`}
                    width={120}
                    height={32}
                    className="opacity-80"
                  />
                  <div className="flex gap-0.5 text-brand">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="size-4 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

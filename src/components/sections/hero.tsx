import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { ParticleField } from "@/components/motion/particle-field";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedCounter } from "@/components/motion/animated-counter";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 mesh-bg" />
      <ParticleField className="pointer-events-none absolute inset-0 overflow-hidden" />

      <div className="container-wide relative section-pad !pb-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-[0.14em] text-brand uppercase">
                <Sparkles className="size-4" />
                {siteConfig.title}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                {siteConfig.headline}
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {siteConfig.subheadline}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 px-6">
                  <Link href="/contact">
                    {siteConfig.ctaPrimary}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-6">
                  <Link href="/projects">{siteConfig.ctaSecondary}</Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="h-12 px-6">
                  <Link href="/contact?intent=consult">
                    <Calendar className="size-4" />
                    {siteConfig.ctaTertiary}
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-6 text-sm text-muted-foreground">
                {siteConfig.availability}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <Image
                key={siteConfig.profileImage}
                src={siteConfig.profileImage}
                alt={`${siteConfig.name} — professional profile`}
                fill
                priority
                unoptimized
                className="object-cover object-[center_18%]"
                sizes="(max-width: 768px) 90vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-6">
                <p className="font-display text-xl font-semibold drop-shadow-sm">
                  {siteConfig.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.shortTitle} · {siteConfig.location}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-border/60 pt-10 sm:grid-cols-3 lg:grid-cols-6">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <AnimatedCounter
                  value={stat.value}
                  suffix={"suffix" in stat ? stat.suffix : ""}
                  display={"display" in stat ? stat.display : undefined}
                  className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
                />
                <p className="text-xs tracking-wide text-muted-foreground uppercase sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

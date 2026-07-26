import { siteConfig } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { SectionHeader } from "@/components/ui/section-header";

export function StatsSection() {
  return (
    <section id="achievements" className="section-pad bg-muted/20">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Certifications & Achievements"
            title="Proof of consistent delivery"
            description="Numbers that reflect production systems, international collaboration, and long-term client partnerships."
            align="center"
            className="mb-14"
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {siteConfig.achievements.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.04}>
              <div className="text-center">
                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                  className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
                />
                <p className="mt-2 text-xs tracking-wide text-muted-foreground uppercase sm:text-sm">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

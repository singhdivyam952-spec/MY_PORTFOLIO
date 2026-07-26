import { services } from "@/content/services";
import { Reveal } from "@/components/motion/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-muted/20">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Services"
            title="Capabilities built for growth-stage products"
            description="From AI systems to enterprise platforms—engagements designed around outcomes founders, CTOs, and operators can measure."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={i * 0.05}>
                <GlassCard className="h-full">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border/70 bg-background/40 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

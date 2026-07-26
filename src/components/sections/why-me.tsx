import { whyChooseMe } from "@/content/why";
import { Reveal } from "@/components/motion/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { CheckCircle2 } from "lucide-react";

export function WhyMeSection() {
  return (
    <section id="why" className="section-pad bg-muted/20">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Why Clients Choose Me"
            title="Trust built on outcomes, communication, and craft"
            description="You should hire me when you need a senior partner who ships intelligent software that grows the business—not just tickets closed."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseMe.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.03}>
              <GlassCard className="h-full" hover={false}>
                <div className="mb-3 flex items-center gap-2 text-brand">
                  <CheckCircle2 className="size-5" />
                  <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

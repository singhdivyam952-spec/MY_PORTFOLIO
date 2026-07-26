import { processSteps } from "@/content/process";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function ProcessSection() {
  return (
    <section id="process" className="section-pad">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Work Process"
            title="A clear path from discovery to durable support"
            description="Structured delivery that keeps stakeholders aligned and production quality high."
          />
        </Reveal>

        <ol className="relative space-y-0 border-l border-border/70 ml-3 sm:ml-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.03}>
              <li className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
                <span className="absolute top-1 -left-[9px] flex size-4 items-center justify-center rounded-full border border-brand/40 bg-background">
                  <span className="size-2 rounded-full bg-brand" />
                </span>
                <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
                  Step {String(step.step).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

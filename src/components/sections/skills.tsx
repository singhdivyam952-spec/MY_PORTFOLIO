import { skillCategories } from "@/content/skills";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function SkillsSection() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Technical Skills"
            title="A modern stack for intelligent products"
            description="Languages, frameworks, AI tooling, and infrastructure selected for production reliability—not novelty."
          />
        </Reveal>

        <div className="space-y-8">
          {skillCategories.map((category, i) => (
            <Reveal key={category.name} delay={i * 0.04}>
              <div>
                <h3 className="mb-3 text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-border/70 bg-card/60 px-3 py-2 text-sm transition hover:border-brand/40 hover:bg-brand/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

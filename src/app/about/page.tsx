import type { Metadata } from "next";
import { aboutContent } from "@/content/about";
import { siteConfig } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "About",
  description: aboutContent.lead,
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-narrow">
          <Reveal>
            <SectionHeader
              eyebrow="About"
              title={aboutContent.title}
              description={aboutContent.lead}
            />
          </Reveal>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {aboutContent.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="font-display mt-16 mb-8 text-3xl font-semibold tracking-tight">
              Career timeline
            </h2>
          </Reveal>

          <ol className="relative ml-3 space-y-0 border-l border-border/70 sm:ml-4">
            {aboutContent.timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.05}>
                <li className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
                  <span className="absolute top-1 -left-[9px] flex size-4 items-center justify-center rounded-full border border-brand/40 bg-background">
                    <span className="size-2 rounded-full bg-brand" />
                  </span>
                  <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <ContactCTA compact />
    </>
  );
}

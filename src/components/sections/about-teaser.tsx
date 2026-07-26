import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutContent } from "@/content/about";
import { siteConfig } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

export function AboutTeaser() {
  return (
    <section id="about" className="section-pad">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="About"
              title="Engineering that moves the business forward"
              className="mb-0"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p className="text-foreground">{aboutContent.lead}</p>
              <p>{siteConfig.summary}</p>
              <p>{siteConfig.focus}</p>
              <Button asChild variant="outline" className="mt-2">
                <Link href="/about">
                  Full biography & timeline
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

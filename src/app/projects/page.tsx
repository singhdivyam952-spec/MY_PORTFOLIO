import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies across AI systems, SaaS platforms, cloud products, and enterprise software by Divyam Singh.",
  alternates: { canonical: `${siteConfig.url}/projects` },
};

export default function ProjectsPage() {
  return (
    <section className="section-pad">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Projects"
            title="Selected case studies"
            description="Business problems, architecture decisions, and production outcomes—written for clients evaluating senior delivery."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.04}>
              <Link
                href={`/projects/${project.slug}`}
                className="group glass block overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-brand/30"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-2 p-6">
                  <Badge variant="secondary">{project.category}</Badge>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-display text-2xl font-semibold tracking-tight">
                        {project.title}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {project.tagline}
                      </p>
                    </div>
                    <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-brand" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

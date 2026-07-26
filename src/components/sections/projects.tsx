import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/content/projects";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className="section-pad bg-muted/20">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Featured Projects"
            title="Case studies that prove delivery"
            description="Selected work across travel marketplaces, business intelligence, cloud platforms, AI assistants, and enterprise systems."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <Link
                href={`/projects/${project.slug}`}
                className="group glass block overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-brand/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="font-display text-2xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.tagline}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition group-hover:text-brand" />
                  </div>
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {project.problem}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View all case studies</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

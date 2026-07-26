import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { getProjectBySlug, projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.problem,
    alternates: { canonical: `${siteConfig.url}/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.problem,
      images: [project.cover],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="section-pad">
      <div className="container-narrow">
        <Reveal>
          <Badge variant="secondary">{project.category}</Badge>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{project.tagline}</p>
          {project.url && (
            <Button asChild variant="outline" className="mt-6">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Visit live site
                <ExternalLink className="size-4" />
              </a>
            </Button>
          )}
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border/60">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6">
          {[
            ["Business Problem", project.problem],
            ["My Role", project.role],
            ["Architecture", project.architecture],
          ].map(([title, body], i) => (
            <Reveal key={title} delay={i * 0.04}>
              <GlassCard hover={false}>
                <h2 className="font-display text-xl font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {body}
                </p>
              </GlassCard>
            </Reveal>
          ))}

          <Reveal>
            <GlassCard hover={false}>
              <h2 className="font-display text-xl font-semibold">Highlights</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground sm:text-base">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal>
            <GlassCard hover={false}>
              <h2 className="font-display text-xl font-semibold">Results</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground sm:text-base">
                {project.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal>
            <GlassCard hover={false}>
              <h2 className="font-display text-xl font-semibold">
                Technology Stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>

        <Reveal>
          <h2 className="font-display mt-14 mb-6 text-2xl font-semibold">
            Project Gallery
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.gallery.map((src) => (
              <div
                key={src}
                className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/60"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Discuss a similar project</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">All projects</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

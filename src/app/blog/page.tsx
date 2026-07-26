import type { Metadata } from "next";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on AI, RAG, FastAPI, system design, Docker, and software architecture by Divyam Singh.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="section-pad">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Blog"
            title="Technical articles"
            description="Client-focused writing on building intelligent software that ships and scales."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.04}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <GlassCard className="h-full">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="font-display text-xl font-semibold tracking-tight">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {post.description}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {format(parseISO(post.date), "MMM d, yyyy")} ·{" "}
                    {post.readingTime}
                  </p>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

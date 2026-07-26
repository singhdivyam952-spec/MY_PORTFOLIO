import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getLatestPosts } from "@/lib/blog";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function BlogPreview() {
  const posts = getLatestPosts(3);

  return (
    <section id="blog" className="section-pad bg-muted/20">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Blog"
            title="Notes on AI, architecture, and shipping"
            description="Practical writing for founders and engineering leaders building intelligent software."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <GlassCard className="flex h-full flex-col">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">
                    {post.description}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {format(parseISO(post.date), "MMM d, yyyy")} · {post.readingTime}
                  </p>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">View all articles</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/blog";
import { siteConfig } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <article className="section-pad">
      <div className="container-narrow">
        <Reveal>
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            {format(parseISO(post.date), "MMMM d, yyyy")} · {post.readingTime}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="prose prose-invert dark:prose-invert prose-neutral mt-12 max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-brand prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
            <MDXRemote source={post.content} />
          </div>
        </Reveal>

        {related.length > 0 && (
          <Reveal>
            <div className="mt-16 border-t border-border/60 pt-10">
              <h2 className="font-display mb-4 text-xl font-semibold">
                More articles
              </h2>
              <div className="flex flex-col gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="text-sm text-muted-foreground hover:text-brand"
                  >
                    {r.title}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <Reveal>
          <Button asChild variant="outline" className="mt-10">
            <Link href="/blog">Back to blog</Link>
          </Button>
        </Reveal>
      </div>
    </article>
  );
}

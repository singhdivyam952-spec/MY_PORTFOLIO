import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Separator } from "@/components/ui/separator";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "AI Engineering", href: "/#services" },
  { label: "Backend Development", href: "/#services" },
  { label: "Full Stack", href: "/#services" },
  { label: "Consulting", href: "/#services" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="container-wide section-pad !py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="font-display text-xl font-semibold">{siteConfig.name}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.title}. Helping businesses scale with AI-powered
              software and modern engineering.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-border/70 p-2 text-muted-foreground transition hover:text-foreground"
              >
                <LinkedInIcon className="size-4" />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-border/70 p-2 text-muted-foreground transition hover:text-foreground"
              >
                <GitHubIcon className="size-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="rounded-lg border border-border/70 p-2 text-muted-foreground transition hover:text-foreground"
              >
                <Mail className="size-4" />
              </a>
              <a
                href={siteConfig.phoneHref}
                aria-label="Phone"
                className="rounded-lg border border-border/70 p-2 text-muted-foreground transition hover:text-foreground"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-wide uppercase">
              Quick Links
            </p>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-wide uppercase">
              Services
            </p>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-wide uppercase">
              Newsletter
            </p>
            <p className="mb-4 text-sm text-muted-foreground">
              Insights on AI systems, backend architecture, and shipping
              production software.
            </p>
            <Link
              href="/blog"
              className="text-sm font-medium text-brand hover:underline"
            >
              Read the latest articles →
            </Link>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.availability}</p>
        </div>
      </div>
    </footer>
  );
}

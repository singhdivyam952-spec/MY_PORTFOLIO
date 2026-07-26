import { Suspense } from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";

export function ContactCTA({
  id = "contact",
  compact = false,
}: {
  id?: string;
  compact?: boolean;
}) {
  return (
    <section id={id} className={`section-pad ${compact ? "" : "bg-muted/20"}`}>
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title={siteConfig.contactCta}
            description="Share your goals and constraints. I'll respond with next steps, a clear approach, and honest fit assessment."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.06}>
            <GlassCard hover={false} className="p-6 sm:p-8">
              <Suspense fallback={<div className="h-80 animate-pulse rounded-xl bg-muted" />}>
                <ContactForm />
              </Suspense>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              <GlassCard hover={false} className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm hover:text-brand"
                >
                  <Mail className="size-4 text-brand" />
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-3 text-sm hover:text-brand"
                >
                  <Phone className="size-4 text-brand" />
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-brand"
                >
                  <LinkedInIcon className="size-4 text-brand" />
                  LinkedIn
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-brand"
                >
                  <GitHubIcon className="size-4 text-brand" />
                  GitHub
                </a>
              </GlassCard>

              <p className="text-sm leading-relaxed text-muted-foreground">
                Prefer a quick chat first? Use{" "}
                <Link
                  href="/contact?intent=consult"
                  className="text-brand hover:underline"
                >
                  Book Free Consultation
                </Link>{" "}
                and I&apos;ll schedule a discovery call.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

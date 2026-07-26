import { HeroSection } from "@/components/sections/hero";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { ServicesSection } from "@/components/sections/services";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ProcessSection } from "@/components/sections/process";
import { WhyMeSection } from "@/components/sections/why-me";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { StatsSection } from "@/components/sections/stats";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FAQSection } from "@/components/sections/faq";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutTeaser />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <ProcessSection />
      <WhyMeSection />
      <TestimonialsSection />
      <StatsSection />
      <BlogPreview />
      <FAQSection />
      <ContactCTA />
    </>
  );
}

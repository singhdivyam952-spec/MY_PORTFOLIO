import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hire Divyam Singh for AI engineering, full-stack development, and technical consulting. Book a free consultation.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return <ContactCTA compact />;
}

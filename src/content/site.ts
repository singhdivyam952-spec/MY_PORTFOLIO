export const siteConfig = {
  name: "Divyam Singh",
  title: "Senior AI & Full-Stack Software Engineer",
  shortTitle: "AI & Full-Stack Engineer",
  experience: "3.5+",
  location: "India",
  email: "singhdivyam952@gmail.com",
  phone: "+91 98158 61601",
  phoneHref: "tel:+919815861601",
  linkedin: "https://linkedin.com/in/divyam-singh-83337929b",
  github: "https://github.com/",
  availability:
    "Available for Freelance, Contract, Remote, and Full-Time Opportunities",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://divyamsingh.dev",
  ogImage: "/og.png",
  profileImage: "/profile-v2.jpg",
  headline: "Building Intelligent Software That Helps Businesses Scale.",
  subheadline:
    "I design and develop AI-powered applications, enterprise software, SaaS platforms, and scalable backend systems using Python, MERN Stack, FastAPI, Django, and modern AI technologies.",
  summary:
    "I am an AI and Full-Stack Software Engineer with over 3.5 years of experience designing and developing scalable software solutions for startups, enterprises, and SaaS companies. I specialize in Artificial Intelligence, Large Language Models, Retrieval-Augmented Generation (RAG), AI Agents, Python, FastAPI, Django, MERN Stack, React, Next.js, and cloud-based backend architectures. I help businesses build intelligent software that automates workflows, improves efficiency, and scales reliably.",
  focus:
    "My focus is not just writing code—I solve business problems using modern software architecture and AI.",
  ctaPrimary: "Hire Me",
  ctaSecondary: "View My Projects",
  ctaTertiary: "Book Free Consultation",
  contactCta: "Let's Build Something Amazing",
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  stats: [
    { value: 3.5, suffix: "+", label: "Years Experience" },
    { value: 50, suffix: "+", label: "Projects Delivered" },
    { value: 20, suffix: "+", label: "Technologies" },
    { value: 10, suffix: "+", label: "Production Deployments" },
    { value: 100, suffix: "%", label: "Commitment" },
    { value: 0, suffix: "", label: "Worldwide Remote", display: "Worldwide" },
  ],
  achievements: [
    { value: 50, suffix: "+", label: "Projects Completed" },
    { value: 3.5, suffix: "+", label: "Years Experience" },
    { value: 20, suffix: "+", label: "Technologies" },
    { value: 10, suffix: "+", label: "Production Systems" },
    { value: 30, suffix: "+", label: "Happy Clients" },
    { value: 8, suffix: "+", label: "Countries Served" },
  ],
};

export type SiteConfig = typeof siteConfig;

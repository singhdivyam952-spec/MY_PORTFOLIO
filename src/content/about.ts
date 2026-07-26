export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export const aboutContent = {
  title: "About Divyam",
  lead: "I help businesses transform ideas into scalable, high-performance software solutions using AI and modern engineering practices.",
  paragraphs: [
    "My journey as a software engineer started with a simple belief: code only matters when it moves a business forward. Over 3.5+ years, I’ve designed and shipped systems for startups, SaaS companies, and enterprises—always with an eye on reliability, clarity, and outcomes.",
    "I’m passionate about solving business problems. Whether that’s automating workflows with AI agents, building RAG systems that unlock internal knowledge, or architecting backends that stay fast under growth, I treat engineering as a lever for efficiency and revenue—not an end in itself.",
    "My AI expertise spans LLMs, Retrieval-Augmented Generation, prompt systems, and production integrations with OpenAI and Claude. On the enterprise side, I’ve delivered ERPs, dashboards, and operational platforms that unify teams around a single source of truth.",
    "I specialize in backend architecture and scalable systems—FastAPI, Django, Node.js, and cloud-native patterns—paired with modern frontends in React and Next.js. I collaborate closely with founders, CTOs, and product teams, and I mentor developers to raise the quality bar across the codebase.",
  ],
  timeline: [
    {
      year: "2022",
      title: "Engineering Foundations",
      description:
        "Built full-stack products and APIs, learning how architecture decisions show up as user experience and operational cost.",
    },
    {
      year: "2023",
      title: "Backend & Platform Depth",
      description:
        "Owned production backends, authentication, and cloud deployments for client platforms that needed to scale safely.",
    },
    {
      year: "2024",
      title: "AI Systems in Production",
      description:
        "Shipped RAG assistants, LLM integrations, and automation that turned internal data into daily business leverage.",
    },
    {
      year: "2025–Now",
      title: "Senior AI & Full-Stack Partnerships",
      description:
        "Partnering with international clients on AI products, SaaS platforms, and enterprise systems—from discovery through long-term support.",
    },
  ] satisfies TimelineItem[],
};

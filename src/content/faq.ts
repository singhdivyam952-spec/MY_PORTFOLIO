export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "How do you price projects?",
    answer:
      "Pricing depends on scope, timeline, and complexity. I typically work on fixed-scope milestones for well-defined products, or weekly/monthly retainers for ongoing product engineering. After a short discovery call, you’ll get a clear proposal with deliverables and investment—no vague estimates.",
  },
  {
    question: "What does a typical project timeline look like?",
    answer:
      "Small AI or API engagements often ship in 2–4 weeks. Mid-size SaaS features or dashboards usually take 4–8 weeks. Larger ERP or multi-module platforms are planned in phases so you see production value early. Exact timelines are confirmed after requirements are locked.",
  },
  {
    question: "How do we communicate during the engagement?",
    answer:
      "You’ll get a dedicated channel (Slack, email, or preferred tools), weekly progress updates, and demos at milestone checkpoints. I work async-friendly across time zones and stay responsive for decisions that unblock delivery.",
  },
  {
    question: "Which technology stack do you recommend?",
    answer:
      "I recommend stacks based on your team, hosting, and growth plans—commonly Python/FastAPI or Django for backends, React/Next.js for product UIs, PostgreSQL/MongoDB for data, and Docker plus cloud (AWS/Azure/GCP) for deployment. AI work typically uses OpenAI/Claude with LangChain and a vector database when RAG is required.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. I offer post-launch support and maintenance retainers covering bugfixes, monitoring tweaks, small enhancements, and operational handoff documentation so your team can own the system confidently.",
  },
  {
    question: "Can you maintain and improve an existing codebase?",
    answer:
      "Absolutely. I frequently audit, stabilize, and extend existing systems—improving performance, security, and architecture without a full rewrite unless it’s clearly necessary for business outcomes.",
  },
  {
    question: "What AI development work do you take on?",
    answer:
      "Chatbots, RAG assistants over private documents, AI agents for workflow automation, LLM integrations (OpenAI/Claude), prompt systems, and evaluation-minded production deployments. I focus on reliable systems with citations, guardrails, and measurable ROI—not demos that stall in production.",
  },
  {
    question: "Do you offer architecture consulting without full build work?",
    answer:
      "Yes. I provide architecture reviews, performance audits, technical leadership, and roadmap consulting for founders and CTOs who need senior judgment before or during a build.",
  },
];

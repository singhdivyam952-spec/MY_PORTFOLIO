export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  url?: string;
  featured: boolean;
  cover: string;
  gallery: string[];
  problem: string;
  role: string;
  architecture: string;
  highlights: string[];
  stack: string[];
  results: string[];
};

export const projects: Project[] = [
  {
    slug: "wondrfly",
    title: "Wondrfly",
    tagline: "Kids Activities & Experiences Marketplace",
    category: "Marketplace / EdTech",
    url: "https://www.wondrfly.com",
    featured: true,
    cover: "/projects/wondrfly-cover.jpg",
    gallery: ["/projects/wondrfly-cover.jpg"],
    problem:
      "Parents needed one place to discover in-person classes, online programs, camps, and experiences—without juggling fragmented listings across cities and providers.",
    role: "Led backend architecture and API development, integrated discovery and booking flows, and optimized performance for high-traffic search and conversion paths.",
    architecture:
      "Service-oriented Node/Express API with MongoDB, Redis caching for search and availability, secure auth, and a React frontend optimized for discovery and bookings.",
    highlights: [
      "Built scalable APIs for classes, camps, experiences, and provider listings",
      "Improved search and listing performance for local and online discovery",
      "Integrated booking and operational workflows for providers",
      "Hardened production delivery for a consumer marketplace experience",
    ],
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "Redis",
      "REST APIs",
      "AWS",
    ],
    results: [
      "Faster discovery and listing performance under load",
      "Reliable path from browse → book for families",
      "Operator-ready tooling for marketplace operations",
    ],
  },
  {
    slug: "mentorx",
    title: "MentorX",
    tagline: "Restaurant Delivery Management Platform",
    category: "SaaS / Restaurant Tech",
    url: "https://mentorxapp.com/en",
    featured: true,
    cover: "/projects/mentorx-cover.jpg",
    gallery: ["/projects/mentorx-cover.jpg"],
    problem:
      "Restaurants struggled to manage delivery across Bolt, Glovo, and Wolt from scattered tools—losing visibility into orders, performance, and profit.",
    role: "Built backend APIs, automation, and dashboard data flows that unify multi-platform delivery operations into one product experience.",
    architecture:
      "Authenticated API layer with multi-platform integrations, aggregated order and analytics pipelines, and a React dashboard for restaurant operators.",
    highlights: [
      "Unified delivery-platform data into a single operator dashboard",
      "Built APIs for orders, performance analytics, and operational workflows",
      "Added automation to reduce manual reconciliation across platforms",
      "Designed scalable multi-tenant architecture for restaurant accounts",
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React",
      "Docker",
      "Redis",
      "REST APIs",
    ],
    results: [
      "One dashboard for multi-platform delivery operations",
      "Clearer performance and profit visibility for restaurants",
      "Less manual work reconciling orders across providers",
    ],
  },
  {
    slug: "vavencloud",
    title: "VavenCloud",
    tagline: "Hosting & Custom Development Platform",
    category: "Cloud / Hosting",
    url: "https://vavencloud.com",
    featured: true,
    cover: "/projects/vavencloud-cover.jpg",
    gallery: ["/projects/vavencloud-cover.jpg"],
    problem:
      "Businesses needed reliable hosting plus custom web, mobile, and SaaS development—with security, support, and a clear path from launch to scale.",
    role: "Owned authentication, backend services, security hardening, deployment pipelines, and core product foundations for hosting and development offerings.",
    architecture:
      "Secure API layer with auth and role-based access, containerized services, Nginx reverse proxy, and CI/CD for repeatable production releases.",
    highlights: [
      "Implemented authentication and authorization with security best practices",
      "Built resilient backend services for hosting and product workflows",
      "Hardened deployment with Docker, Nginx, and environment isolation",
      "Established CI/CD for safer, faster production releases",
    ],
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "Nginx",
      "Linux",
      "CI/CD",
    ],
    results: [
      "Production-grade auth and access control",
      "Repeatable infrastructure and deployment process",
      "Stronger security posture across services",
    ],
  },
  {
    slug: "ai-rag-chatbot",
    title: "AI RAG Chatbot",
    tagline: "Enterprise AI Assistant",
    category: "AI / LLM",
    featured: true,
    cover: "/projects/rag-cover.png",
    gallery: ["/projects/rag-cover.png"],
    problem:
      "Enterprises needed employees to query internal documents safely—with accurate answers, citations, and conversation context—without leaking proprietary knowledge.",
    role: "Designed and built the full RAG pipeline: ingestion, embeddings, retrieval, streaming chat, memory, and citation UX.",
    architecture:
      "Document ingestion pipeline into a vector store, LangChain orchestration, OpenAI embeddings and chat models, streaming responses, and conversation memory with source citations.",
    highlights: [
      "Document upload and PDF parsing for knowledge ingestion",
      "Semantic search across enterprise content with vector databases",
      "Streaming responses for low-latency conversational UX",
      "Conversation memory and source citations for trust and auditability",
    ],
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI",
      "Pinecone",
      "React",
      "PostgreSQL",
    ],
    results: [
      "Answers grounded in company documents with citations",
      "Faster internal knowledge discovery for teams",
      "Reusable foundation for multi-tenant enterprise AI assistants",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

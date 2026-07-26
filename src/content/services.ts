import {
  Bot,
  Cloud,
  Code2,
  Layers,
  Building2,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export const services: Service[] = [
  {
    id: "ai-engineering",
    title: "AI Engineering",
    description:
      "Ship production AI that automates work, answers with your data, and creates measurable business leverage.",
    icon: Bot,
    items: [
      "AI Chatbots",
      "AI Agents",
      "OpenAI Integration",
      "Claude Integration",
      "RAG Systems",
      "LLM Applications",
      "Prompt Engineering",
      "Workflow Automation",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Reliable APIs and services designed for security, throughput, and long-term maintainability.",
    icon: Code2,
    items: [
      "FastAPI",
      "Django",
      "REST APIs",
      "GraphQL",
      "Authentication",
      "WebSockets",
      "Payment Integration",
    ],
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    description:
      "End-to-end product engineering—from polished interfaces to scalable SaaS backends.",
    icon: Layers,
    items: ["MERN Stack", "React", "Next.js", "TypeScript", "SaaS Platforms"],
  },
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    description:
      "Operational systems that unify teams: ERPs, CRMs, dashboards, and automation that cut cost.",
    icon: Building2,
    items: [
      "ERP Systems",
      "CRM Development",
      "Automation",
      "Dashboards",
      "Reporting",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Production-ready infrastructure, CI/CD, and cloud deployments that stay stable under growth.",
    icon: Cloud,
    items: [
      "Docker",
      "Linux",
      "Nginx",
      "CI/CD",
      "AWS",
      "Azure",
      "Google Cloud",
    ],
  },
  {
    id: "consulting",
    title: "Consulting & Leadership",
    description:
      "Architecture guidance, performance work, and technical leadership that de-risks delivery.",
    icon: Lightbulb,
    items: [
      "Architecture",
      "Performance Optimisation",
      "Code Reviews",
      "Technical Leadership",
    ],
  },
];

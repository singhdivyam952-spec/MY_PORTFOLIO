export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description:
      "Clarify business goals, constraints, users, and success metrics before a single line of architecture is locked.",
  },
  {
    step: 2,
    title: "Requirement Analysis",
    description:
      "Translate stakeholder needs into precise functional and non-functional requirements that prevent costly rework.",
  },
  {
    step: 3,
    title: "Planning",
    description:
      "Define milestones, risks, and delivery scope so timelines stay realistic and stakeholders stay aligned.",
  },
  {
    step: 4,
    title: "UI/UX Design",
    description:
      "Shape clear interfaces and flows that convert users and reduce support burden.",
  },
  {
    step: 5,
    title: "Architecture",
    description:
      "Choose scalable patterns for data, APIs, AI, and infrastructure that fit today’s needs and tomorrow’s growth.",
  },
  {
    step: 6,
    title: "Development",
    description:
      "Build in iterative slices with clean code, strong typing, and continuous feedback loops.",
  },
  {
    step: 7,
    title: "Testing",
    description:
      "Validate correctness, performance, and edge cases so releases feel boring—in the best way.",
  },
  {
    step: 8,
    title: "Deployment",
    description:
      "Ship with CI/CD, monitoring hooks, and rollback readiness for production confidence.",
  },
  {
    step: 9,
    title: "Maintenance",
    description:
      "Keep systems healthy with updates, observability, and proactive performance work.",
  },
  {
    step: 10,
    title: "Support",
    description:
      "Partner long-term with clear communication and reliable response when the business needs it.",
  },
];

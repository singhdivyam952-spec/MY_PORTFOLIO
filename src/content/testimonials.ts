export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
  logo: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Mehra",
    role: "CTO",
    company: "Northline SaaS",
    quote:
      "Divyam didn’t just ship features—he redesigned our API layer so we could scale onboarding without rewriting every quarter. Communication was crisp and delivery was predictable.",
    rating: 5,
    avatar: "/avatars/avatar-1.svg",
    logo: "/logos/logo-1.svg",
  },
  {
    id: "2",
    name: "James Carter",
    role: "Founder",
    company: "Atlas Logistics",
    quote:
      "We needed an AI assistant grounded in our internal docs. Divyam delivered a RAG system with citations that our ops team actually trusts in daily work.",
    rating: 5,
    avatar: "/avatars/avatar-2.svg",
    logo: "/logos/logo-2.svg",
  },
  {
    id: "3",
    name: "Ananya Rao",
    role: "Head of Product",
    company: "Helix Health",
    quote:
      "From discovery to production, Divyam treated our constraints like first-class requirements. The dashboard and backend he built cut reporting time dramatically.",
    rating: 5,
    avatar: "/avatars/avatar-3.svg",
    logo: "/logos/logo-3.svg",
  },
  {
    id: "4",
    name: "Marcus Chen",
    role: "CEO",
    company: "Forge Manufacturing",
    quote:
      "Our ERP modules finally talk to each other. Inventory accuracy and workflow visibility improved within weeks of launch. Highly recommend for enterprise builds.",
    rating: 5,
    avatar: "/avatars/avatar-4.svg",
    logo: "/logos/logo-4.svg",
  },
];

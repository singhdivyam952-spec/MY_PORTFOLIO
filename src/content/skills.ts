export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "C#"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    name: "Backend",
    skills: [
      "FastAPI",
      "Django",
      "Django REST Framework",
      "Node.js",
      "Express",
      "NestJS",
    ],
  },
  {
    name: "AI",
    skills: [
      "OpenAI",
      "Claude",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "NLP",
      "PyTorch",
      "ONNX",
      "Machine Learning",
    ],
  },
  {
    name: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQLite",
      "Redis",
      "Supabase",
      "Vector Databases",
      "Pinecone",
      "Qdrant",
    ],
  },
  {
    name: "DevOps",
    skills: ["Docker", "Linux", "Nginx", "GitHub Actions", "CI/CD", "PM2"],
  },
  {
    name: "Cloud",
    skills: ["AWS", "Azure", "Google Cloud"],
  },
  {
    name: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "PyCharm",
      "BeautifulSoup",
      "Selenium",
      "Pandas",
      "NumPy",
    ],
  },
];

import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().optional(),
  email: z.string().email("Enter a valid email"),
  budget: z.string().min(1, "Select a budget range"),
  timeline: z.string().min(1, "Select a timeline"),
  description: z
    .string()
    .min(20, "Tell me a bit more about the project (20+ characters)"),
  intent: z.string().optional(),
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const budgetOptions = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $40,000",
  "$40,000+",
  "Not sure yet",
];

export const timelineOptions = [
  "ASAP",
  "2–4 weeks",
  "1–2 months",
  "3+ months",
  "Exploring / flexible",
];

import { Resend } from "resend";
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

const rateMap = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + windowMs });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const to = process.env.CONTACT_TO_EMAIL || "singhdivyam952@gmail.com";
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          error:
            "Contact form is not configured yet. Please email singhdivyam952@gmail.com directly.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, company, email, budget, timeline, description, intent } =
      parsed.data;

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: [to],
      replyTo: email,
      subject: `New portfolio inquiry from ${name}${intent ? ` (${intent})` : ""}`,
      text: [
        `Name: ${name}`,
        `Company: ${company || "—"}`,
        `Email: ${email}`,
        `Budget: ${budget}`,
        `Timeline: ${timeline}`,
        `Intent: ${intent || "general"}`,
        "",
        "Project Description:",
        description,
      ].join("\n"),
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Failed to send message. Please try email instead." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}

import OpenAI from "openai";
import { NextResponse } from "next/server";
import { dailyLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const limitCheck = dailyLimit(ip, 5);

  if (!limitCheck.allowed) {
    return NextResponse.json(
      { error: "Only 5 requests allowed per day" },
      { status: 429 }
    );
  }

  const { resumeText, jd } = await req.json();

  if (!resumeText || !jd) {
    return NextResponse.json(
      { error: "Resume and Job Description are required" },
      { status: 400 }
    );
  }

  const prompt = `
You are an ATS evaluation engine.

Analyze the resume against the job description.

Return ONLY valid JSON in the following format.
Do NOT add explanations outside JSON.
Do NOT repeat the score anywhere else.

JSON format:
{
  "score": number (0-100),
  "missing_keywords": string[],
  "summary": string,
  "improvements": string[]
}

Resume:
${resumeText}

Job Description:
${jd}
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [{ role: "user", content: prompt }],
  });

  let parsed;

  try {
    parsed = JSON.parse(completion.choices[0].message.content);
  } catch (e) {
    return NextResponse.json(
      { error: "AI response format error" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    score: parsed.score,
    missing: parsed.missing_keywords,
    summary: parsed.summary,
    improvements: parsed.improvements,
    remaining: limitCheck.remaining,
  });
}

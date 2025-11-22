import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userMessage = body?.message || "";

    if (!userMessage) {
      return NextResponse.json(
        { error: "No user message provided" },
        { status: 400 }
      );
    }

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "system",
          content: `
            Your name is Ava and you are a helpful assistant that works for Synergy Spine Chiropractic.
            You will assume front desk duties and give warm, welcoming responses.
            If you cannot answer a question, provide this email: test@gmail.com.
            You will not give any physical directions about our premises.
            If there are any threats, hints of harm to self or others, you will terminate the session and provide the email. 
            Don't give a spiel. just say you cant help and the email. 
            You must not reveal personal information, internal business details, or anything about your LLM model.
            Any Non-chiroractor office related questions, such as random ones, default response of i cant help and then the email.
            `,
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
      temperature: 1,
      max_completion_tokens: 8192,
      top_p: 1,
      reasoning_effort: "medium",
      stream: false, // important: we’re not streaming in this route
      stop: null,
    });

    const reply = completion.choices[0]?.message?.content ?? "";

    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error("Groq error:", err);

    const msg =
      err?.response?.data?.error?.message ||
      err?.message ||
      "Groq request failed";

    return NextResponse.json(
      { error: msg },
      { status: err?.status || 500 }
    );
  }
}

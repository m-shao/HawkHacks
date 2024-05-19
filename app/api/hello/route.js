import { NextResponse } from "next/server";
import generateSchema from "./gemini";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const prompt = searchParams.get("prompt");
  let response = generateSchema(prompt);
  console.log(response);
  return NextResponse.json(
    { message: "Hello from Next.js", response: response },
    { status: 200 }
  );
}

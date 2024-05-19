import { GoogleGenerativeAI } from "@google/generative-ai";
// import "~/envConfig.js";
// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export default async function generateSchema(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

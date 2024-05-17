import { createClient } from '@vercel/ai-sdk';
import { OpenAIAPI } from 'openai';

// Initialize Vercel AI SDK
const vercelClient = createClient({
  token: process.env.VERCEL_AI_SDK_TOKEN,
});

// Initialize OpenAI
const openai = new OpenAIAPI(process.env.OPENAI_API_KEY);

// Function to handle chat with AI
export async function handleChat(message) {
  const response = await vercelClient.chat({
    messages: [
      {
        role: 'system',
        content: 'You are chatting with LLM data analyst.',
      },
      {
        role: 'user',
        content: message,
      },
    ],
  });

  return response;
}

// Function to handle AI analysis
export async function handleAIAnalysis(data) {
  const prompt = `Analyze the following data: ${data}`;
  const response = await openai.complete({
    engine: 'davinci-codex',
    prompt,
    maxTokens: 60,
  });

  return response.data.choices[0].text;
}
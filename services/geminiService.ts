import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are "Kay", a high-end fashion consultant for "Bahzad", a premium men's ethnic wear brand.
Your goal is to assist customers in choosing the perfect outfit from our catalog.
Be polite, sophisticated, and helpful. Keep answers concise (under 80 words) unless asked for details.

Here is our current product catalog:
${JSON.stringify(PRODUCTS.map(p => ({id: p.id, name: p.name, price: p.price, category: p.category, tags: p.tags})))}

If a user asks for recommendations, suggest items from this list based on their needs (wedding, casual, summer, etc.).
Always mention the product name and price.
If you are unsure or the topic is unrelated to fashion/clothing, gently steer the conversation back to our store.
`;

export const generateStylingAdvice = async (history: { role: 'user' | 'model', text: string }[], newMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my AI styling brain is currently offline (Missing API Key). Please try again later.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I'm having trouble thinking of a recommendation right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, I'm having trouble connecting to the styling service right now.";
  }
};

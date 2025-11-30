import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// Note: In a production environment, you should handle the case where the key is missing gracefully.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

/**
 * Generates an enhanced description or post caption using Gemini.
 * @param promptText The user's rough input text.
 * @param context The context (e.g., 'post', 'bio', 'product').
 * @returns The generated text.
 */
export const enhanceTextWithGemini = async (promptText: string, context: 'post' | 'bio' | 'product'): Promise<string> => {
  if (!apiKey) {
    console.warn("Gemini API Key is missing. Returning original text.");
    return promptText;
  }

  let systemInstruction = "";
  
  switch (context) {
    case 'post':
      systemInstruction = "You are a social media expert for the construction industry. Rewrite the user's text to be engaging, professional, and use appropriate emojis. Keep it concise.";
      break;
    case 'bio':
      systemInstruction = "You are a profile consultant. Rewrite the user's professional biography to sound trustworthy, skilled, and approachable. Keep it under 200 characters if possible.";
      break;
    case 'product':
      systemInstruction = "You are a marketing copywriter. Write a short, persuasive product description based on the input.";
      break;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: promptText,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || promptText;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return promptText; // Fallback to original text on error
  }
};
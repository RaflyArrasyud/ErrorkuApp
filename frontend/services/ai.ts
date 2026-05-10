/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function explainError(input: string | { mimeType: string, data: string }) {
  const isImage = typeof input !== 'string';
  
  const prompt = `Analyze the following coding error ${isImage ? 'seen in this image' : ''} and explain it in very simple, human-like language for a beginner programmer. 
  
  CRITICAL: You MUST write the explanation and solution in INDONESIAN language (Bahasa Indonesia) only. 
  Explain it like a helpful friend would.
  Do not use overly technical jargon without explaining it in simple Indonesian terms. 
  Provide a clear step-by-step solution in Indonesian.
  
  ${!isImage ? `Error: ${input}` : ''}
  
  Format the response in JSON:
  {
    "language": "detected programming language",
    "simpleExplanation": "penjelasan dalam bahasa Indonesia yang sangat sederhana",
    "solution": "solusi langkah demi langkah dalam bahasa Indonesia",
    "difficulty": "Easy/Medium/Hard"
  }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: { 
        parts: isImage 
          ? [{ text: prompt }, { inlineData: input }] 
          : [{ text: prompt }] 
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            language: { type: Type.STRING },
            simpleExplanation: { type: Type.STRING },
            solution: { type: Type.STRING },
            difficulty: { type: Type.STRING },
          },
          required: ["language", "simpleExplanation", "solution", "difficulty"],
        },
      },
    });

    return JSON.parse(response.text || "{}");
  } catch (err) {
    console.error("AI Error:", err);
    throw new Error("Gagal menganalisis error. Silakan coba lagi.");
  }
}

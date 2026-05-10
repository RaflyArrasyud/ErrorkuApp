import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function explainError(errorText: string) {
    // Implementasi logic AI di sini (Backend Version)
    return {
        language: "detected",
        simpleExplanation: "Ini adalah penjelasan backend...",
        solution: "Lakukan step A, B, C",
        difficulty: "Medium"
    };
}

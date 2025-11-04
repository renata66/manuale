import { GoogleGenAI } from "@google/genai";
import type { Manual, Chapter, ContentItem, Language } from '../types';

// Assume API_KEY is set in the environment
if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. AI Assistant will not work.");
}

// FIX: Per coding guidelines, initialize GoogleGenAI with process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

// FIX: Added strong types for better type safety.
const extractTextFromManual = (manual: Manual): string => {
    let fullText = '';
    manual.chapters.forEach((chapter: Chapter) => {
        fullText += `Chapter: ${chapter.title}\n`;
        chapter.content.forEach((item: ContentItem) => {
            if (item.type === 'paragraph' && item.text) {
                fullText += item.text + '\n';
            } else if (item.type === 'list' && item.items) {
                fullText += item.items.join('\n') + '\n';
            } else if (item.type === 'table' && item.data && 'headers' in item.data) {
                const { headers, rows } = item.data;
                fullText += headers.join(' | ') + '\n';
                rows.forEach((row: string[]) => {
                    fullText += row.join(' | ') + '\n';
                });
            }
        });
        fullText += '\n';
    });
    return fullText;
};


export const askAiAssistant = async (question: string, language: Language): Promise<string> => {
  // FIX: Per coding guidelines, check for process.env.API_KEY directly.
  if (!process.env.API_KEY) {
    if (language === 'it') return "La chiave API non è configurata. L'assistente AI non è disponibile.";
    if (language === 'en') return "API key is not configured. The AI assistant is unavailable.";
    return "एपीआई कुंजी कॉन्फ़िगर नहीं है। एआई सहायक अनुपलब्ध है।";
  }

  const { MANUAL_CONTENT } = await import('../constants/content');
  const manualContext = extractTextFromManual(MANUAL_CONTENT[language]);
  
  let langInstruction: string;
  switch (language) {
    case 'it':
      langInstruction = 'Rispondi in italiano.';
      break;
    case 'en':
      langInstruction = 'Respond in English.';
      break;
    case 'hi':
      langInstruction = 'हिंदी में जवाब दें।'; // Respond in Hindi.
      break;
    default:
      langInstruction = 'Respond in English.';
  }


  const systemInstruction = `Sei un assistente esperto del manuale di pulizia e sanificazione di "Ca' Scapin". Il tuo unico scopo è rispondere a domande basate sul contenuto del manuale fornito. Sii conciso e preciso. Non rispondere a domande non pertinenti al manuale. ${langInstruction}\n\n---MANUAL CONTENT---\n${manualContext}\n---END MANUAL CONTENT---`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: systemInstruction,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (language === 'it') return "Si è verificato un errore during la comunicazione con l'assistente AI.";
    if (language === 'en') return "An error occurred while communicating with the AI assistant.";
    return "एआई सहायक के साथ संचार करते समय एक त्रुटि हुई।";
  }
};

import React, { useState, useRef, useEffect } from 'react';
import { askAiAssistant } from '../services/geminiService';
import type { Language } from '../types';
import { MANUAL_CONTENT } from '../constants/content';
import { PaperAirplaneIcon, SparklesIcon, UserIcon } from './icons/Icons';

interface GeminiBotProps {
  language: Language;
}

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const GeminiBot: React.FC<GeminiBotProps> = ({ language }) => {
  const botContent = MANUAL_CONTENT[language].bot;
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: botContent.initialMessage }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    setMessages([{ sender: 'bot', text: MANUAL_CONTENT[language].bot.initialMessage }]);
  }, [language]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await askAiAssistant(input, language);

    const botMessage: Message = { sender: 'bot', text: responseText };
    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };
  
  return (
    <div className="mt-6 border border-slate-700 rounded-lg shadow-xl bg-slate-800/70 flex flex-col h-[70vh] md:h-[60vh]">
      <div className="p-4 border-b border-slate-700">
        <h3 className="text-xl font-semibold text-blue-300">{botContent.title}</h3>
      </div>
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
            {msg.sender === 'bot' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"><SparklesIcon className="w-5 h-5 text-white"/></div>}
            <div className={`max-w-md p-3 rounded-lg ${msg.sender === 'user' ? 'bg-slate-600 text-white' : 'bg-slate-700 text-slate-200'}`}>
                {msg.text.split('\n').map((line, i) => <p key={i}>{line}</p>)}
            </div>
            {msg.sender === 'user' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-500 flex items-center justify-center"><UserIcon className="w-5 h-5 text-white"/></div>}
          </div>
        ))}
        {isLoading && (
            <div className="flex items-start gap-3">
                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"><SparklesIcon className="w-5 h-5 text-white animate-pulse"/></div>
                <div className="max-w-md p-3 rounded-lg bg-slate-700 text-slate-200">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-slate-700 flex items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={botContent.placeholder}
          className="flex-1 bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors"
        >
          <PaperAirplaneIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default GeminiBot;
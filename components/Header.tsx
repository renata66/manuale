
import React from 'react';
import type { Language } from '../types';
import { GlobeAltIcon } from './icons/Icons';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, title }) => {
  
  const handleLanguageChange = () => {
    if (language === 'it') {
      setLanguage('en');
    } else if (language === 'en') {
      setLanguage('hi');
    } else {
      setLanguage('it');
    }
  };

  return (
    <header className="bg-slate-800/50 backdrop-blur-sm sticky top-0 z-10 p-4 shadow-lg flex justify-between items-center border-b border-slate-700">
      <div className="flex items-center">
         <div className="p-2 bg-blue-600 rounded-lg mr-4">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
         </div>
         <h1 className="text-xl md:text-2xl font-bold text-blue-300 tracking-wide">{title}</h1>
      </div>
      <div className="relative">
        <button 
          onClick={handleLanguageChange}
          className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-blue-600 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <GlobeAltIcon className="w-5 h-5" />
          <span className="font-semibold uppercase text-sm">{language}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
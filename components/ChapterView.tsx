
import React from 'react';
import type { Chapter, ContentItem, Language } from '../types';
import Table from './Table';
import BarChart from './BarChart';
import GeminiBot from './GeminiBot';
import ColorizedText from './ColorizedText';

interface ChapterViewProps {
  chapter: Chapter;
  language: Language;
}

const renderContentItem = (item: ContentItem, index: number, language: Language) => {
  switch (item.type) {
    case 'paragraph':
      return <p key={index} className="mb-4 text-lg leading-relaxed text-slate-300"><ColorizedText text={item.text || ''} /></p>;
    case 'list':
      return (
        <ul key={index} className="list-disc list-inside mb-4 pl-4 text-lg space-y-2">
          {item.items?.map((li, i) => <li key={i} className="text-slate-300"><ColorizedText text={li} /></li>)}
        </ul>
      );
    case 'table':
      if (item.data && 'headers' in item.data) {
        return <Table key={index} data={item.data} />;
      }
      return null;
    case 'chart':
       if (item.data && Array.isArray(item.data)) {
        return <BarChart key={index} data={item.data} />;
      }
      return null;
    case 'bot':
      return <GeminiBot key={index} language={language} />;
    default:
      return null;
  }
};

const ChapterView: React.FC<ChapterViewProps> = ({ chapter, language }) => {
  return (
    <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl shadow-2xl border border-slate-700/50">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6 pb-4 border-b-2 border-blue-500/30 flex items-center">
        <chapter.icon className="w-8 h-8 mr-4 text-blue-400" />
        {chapter.title}
      </h1>
      <div>
        {chapter.content.map((item, index) => renderContentItem(item, index, language))}
      </div>
    </div>
  );
};

export default ChapterView;
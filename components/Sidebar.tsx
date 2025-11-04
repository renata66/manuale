
import React from 'react';
import type { Chapter } from '../types';

interface SidebarProps {
  chapters: Chapter[];
  selectedChapterId: string;
  onSelectChapter: (id: string) => void;
  tocTitle: string;
}

const Sidebar: React.FC<SidebarProps> = ({ chapters, selectedChapterId, onSelectChapter, tocTitle }) => {
  return (
    <aside className="w-full md:w-64 lg:w-72 bg-slate-900/80 md:bg-slate-800 p-4 md:p-6 border-b md:border-b-0 md:border-r border-slate-700">
      <h2 className="text-lg font-semibold text-blue-400 mb-4 uppercase tracking-wider">{tocTitle}</h2>
      <nav>
        <ul>
          {chapters.map((chapter) => (
            <li key={chapter.id} className="mb-2">
              <button
                onClick={() => onSelectChapter(chapter.id)}
                className={`w-full text-left flex items-center p-3 rounded-md transition-all duration-200 text-base ${
                  selectedChapterId === chapter.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <chapter.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="flex-grow">{chapter.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

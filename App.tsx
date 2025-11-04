
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChapterView from './components/ChapterView';
import { MANUAL_CONTENT } from './constants/content';
import type { Language, Chapter } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('it');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('intro');

  const content = useMemo(() => MANUAL_CONTENT[language], [language]);

  const selectedChapter = useMemo(() => {
    return content.chapters.find(chapter => chapter.id === selectedChapterId) as Chapter;
  }, [content.chapters, selectedChapterId]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        title={content.appTitle}
      />
      <div className="flex flex-col md:flex-row">
        <Sidebar 
          chapters={content.chapters}
          selectedChapterId={selectedChapterId}
          onSelectChapter={setSelectedChapterId}
          tocTitle={content.tocTitle}
        />
        <main className="flex-1 p-4 md:p-8 md:overflow-y-auto md:max-h-[calc(100vh-80px)]">
          <ChapterView chapter={selectedChapter} language={language} />
        </main>
      </div>
    </div>
  );
};

export default App;
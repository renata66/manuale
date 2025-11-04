import React from 'react';

export type Language = 'it' | 'en' | 'hi';

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface ChartData {
  name: string;
  value: number;
}

export interface ContentItem {
  type: 'paragraph' | 'list' | 'table' | 'chart' | 'bot';
  text?: string;
  items?: string[];
  data?: TableData | ChartData[];
}

export interface Chapter {
  id: string;
  title: string;
  // FIX: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  // This uses the explicitly imported React namespace, which can be more robust in some TypeScript configurations.
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  content: ContentItem[];
}

export interface Manual {
  appTitle: string;
  tocTitle: string;
  chapters: Chapter[];
  bot: {
    title: string;
    placeholder: string;
    button: string;
    initialMessage: string;
  }
}
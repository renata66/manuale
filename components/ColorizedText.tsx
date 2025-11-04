import React from 'react';

interface ColorizedTextProps {
  text: string;
}

const colorMap: { [key: string]: string } = {
  // Italian
  'rosso': 'text-red-500',
  'giallo': 'text-yellow-400',
  'verde': 'text-green-500',
  'blu': 'text-blue-500',
  'bianco': 'text-white font-bold',
  'marrone': 'text-yellow-700',
  'azzurro': 'text-cyan-400',
  'nero': 'text-gray-400',

  // English
  'red': 'text-red-500',
  'yellow': 'text-yellow-400',
  'green': 'text-green-500',
  'blue': 'text-blue-500',
  'white': 'text-white font-bold',
  'brown': 'text-yellow-700',
  'black': 'text-gray-400',

  // Hindi
  'लाल': 'text-red-500',
  'पीला': 'text-yellow-400',
  'हरा': 'text-green-500',
  'नीला': 'text-blue-500',
  'सफ़ेद': 'text-white font-bold',
  'भूरा': 'text-yellow-700',
  'काला': 'text-gray-400',
};

const shadowClass = '[text-shadow:0_1px_2px_rgba(0,0,0,0.9)]';

const ColorizedText: React.FC<ColorizedTextProps> = ({ text }) => {
  if (!text) return null;
  
  const colorWords = Object.keys(colorMap);
  // Create a regex that finds any of the color words as whole words, case-insensitively.
  // The `\b` are word boundaries, preventing matches inside other words (e.g., "rosso" in "grossolani").
  // The capturing group `()` is important for `split` to keep the delimiter.
  const regex = new RegExp(`\\b(${colorWords.join('|')})\\b`, 'gi');
  
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const lowerPart = part.toLowerCase();
        if (colorMap[lowerPart]) {
          return (
            <span key={index} className={`${colorMap[lowerPart]} ${shadowClass} font-semibold`}>
              {part}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};

export default ColorizedText;
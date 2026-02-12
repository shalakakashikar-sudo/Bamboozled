
import React from 'react';

interface ChapterCardProps {
  id: number;
  title: string;
  onClick: () => void;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({ id, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-center justify-center p-6 bg-white border-2 border-emerald-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 active:scale-95 text-left w-full h-full min-h-[160px]"
    >
      <div className="absolute top-0 left-0 w-4 h-full bg-emerald-200 rounded-l-3xl overflow-hidden flex flex-col justify-around py-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-full h-0.5 bg-emerald-400 opacity-50"></div>
        ))}
      </div>
      <div className="pl-6 w-full">
        <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold mb-3">
          CHAPTER {id}
        </span>
        <h3 className="text-xl font-bold text-emerald-950 leading-tight group-hover:text-emerald-600 transition-colors">
          {title}
        </h3>
      </div>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </button>
  );
};

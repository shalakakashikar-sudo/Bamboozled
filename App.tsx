import React, { useState, useEffect } from 'react';
import { chapters } from './data/studyData';
import { quizzes } from './data/quizData';
import { MoMo } from './components/Mascot';
import { ChapterCard } from './components/ChapterCard';
import { QuizRoom } from './components/QuizRoom';
import { Chapter, ContentPart } from './types';

const App: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);

  const selectedChapter = chapters.find(c => c.id === selectedChapterId);
  const activeQuiz = activeQuizId ? quizzes[activeQuizId] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedChapterId, activeQuizId]);

  const handleBack = () => {
    setSelectedChapterId(null);
    setActiveQuizId(null);
  };

  const startChapterQuiz = () => {
    if (selectedChapter) {
      setActiveQuizId(`chapter_${selectedChapter.id}`);
    }
  };

  const startGrandQuiz = () => {
    setSelectedChapterId(null);
    setActiveQuizId('grand_quiz');
  };

  const renderContentPart = (part: ContentPart, index: number) => {
    switch (part.type) {
      case 'heading':
        return (
          <h3 key={index} className="text-3xl md:text-4xl font-black text-emerald-950 mt-14 mb-8 border-l-8 border-emerald-500 pl-6">
            {part.title}
          </h3>
        );
      case 'text':
        return (
          <div key={index} className="mb-8">
            {part.title && <h4 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">{part.title}</h4>}
            <p className="text-emerald-800 leading-relaxed text-lg md:text-xl">{part.content}</p>
          </div>
        );
      case 'formula':
        return (
          <div key={index} className="mb-8 bg-emerald-900 text-emerald-50 p-8 rounded-[2rem] shadow-2xl transform hover:rotate-0 rotate-1 transition-transform cursor-pointer group border-4 border-emerald-800">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs uppercase tracking-[0.3em] opacity-60 font-black bg-white/10 px-3 py-1 rounded">BAMBOO PLAQUE FORMULA</span>
              <div className="w-3 h-3 rounded-full bg-emerald-400 group-hover:animate-ping"></div>
            </div>
            {part.title && <p className="text-sm md:text-base uppercase tracking-widest mb-2 opacity-70 font-black text-emerald-300">{part.title}</p>}
            <p className="text-2xl md:text-4xl font-mono text-center py-2 font-bold">{part.content}</p>
          </div>
        );
      case 'example':
        return (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border-4 border-emerald-50 p-6 rounded-[2.5rem] shadow-sm hover:border-emerald-300 transition-colors">
              <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">Active</span>
              <p className="text-xl md:text-2xl text-emerald-900 mt-2 font-semibold">{part.active}</p>
            </div>
            <div className="bg-emerald-50 border-4 border-emerald-100 p-6 rounded-[2.5rem] shadow-sm hover:border-emerald-400 transition-colors">
              <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Passive</span>
              <p className="text-xl md:text-2xl text-emerald-950 font-black mt-2">{part.passive}</p>
            </div>
          </div>
        );
      case 'situation':
        return (
          <div key={index} className="mb-8 bg-white border-2 border-emerald-100 p-8 rounded-[3rem] shadow-lg flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0 text-2xl font-black text-emerald-600 shadow-inner">
               {part.title?.match(/\d+/) || '🎋'}
            </div>
            <div className="flex-1">
              <h4 className="font-black text-emerald-900 text-2xl md:text-3xl mb-1">{part.title}</h4>
              <p className="text-emerald-500 text-xs md:text-sm font-black uppercase tracking-widest mb-3">{part.description}</p>
              <div className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 text-emerald-950 font-semibold text-lg md:text-xl leading-relaxed whitespace-pre-line">
                {part.content}
              </div>
            </div>
          </div>
        );
      case 'comparison':
        return (
          <div key={index} className="mb-10 bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-8 rounded-[4rem] border-4 border-white shadow-xl">
             <h4 className="text-2xl md:text-3xl font-black text-emerald-950 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
                {part.title}
             </h4>
             <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="md:w-32 text-xs font-black text-emerald-400 uppercase tracking-widest">Active Focus</span>
                  <div className="flex-1 bg-white p-5 rounded-2xl text-emerald-900 border-2 border-emerald-100 shadow-sm text-lg font-medium">{part.active}</div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="md:w-32 text-xs font-black text-emerald-600 uppercase tracking-widest">Passive Focus</span>
                  <div className="flex-1 bg-emerald-800 p-5 rounded-2xl text-white shadow-xl text-lg font-bold">{part.passive}</div>
                </div>
             </div>
          </div>
        );
      case 'list':
        return (
          <div key={index} className="mb-8">
            {part.title && <h4 className="text-xl md:text-2xl font-black text-emerald-900 mb-6 flex items-center gap-3">
              <div className="w-5 h-5 bg-emerald-500 rounded transform rotate-45 shadow-lg shadow-emerald-200"></div>
              {part.title}
            </h4>}
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {part.items?.map((item, i) => (
                <li key={i} className="flex items-start bg-white/80 backdrop-blur p-5 rounded-3xl border-2 border-white hover:border-emerald-200 hover:shadow-lg transition-all">
                  <span className="w-8 h-8 flex-shrink-0 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mr-3 font-black text-sm">
                    {i + 1}
                  </span>
                  <span className="text-emerald-900 font-bold text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'table':
        return (
          <div key={index} className="mb-12 overflow-x-auto p-1">
             {part.title && <h4 className="text-2xl font-black text-emerald-900 mb-6">{part.title}</h4>}
             <table className="w-full text-left glass-panel rounded-[2.5rem] overflow-hidden border-collapse border-4 border-white shadow-2xl">
               <thead>
                 <tr className="bg-emerald-900 text-white">
                   {part.headers?.map((h, i) => (
                     <th key={i} className="px-8 py-5 font-black uppercase text-xs tracking-[0.2em]">{h}</th>
                   ))}
                 </tr>
               </thead>
               <tbody className="divide-y-2 divide-emerald-50">
                 {part.rows?.map((row, i) => (
                   <tr key={i} className="hover:bg-emerald-100/30 transition-colors group">
                     {row.map((cell, j) => (
                       <td key={j} className="px-8 py-5 text-emerald-950 font-bold text-lg group-hover:text-emerald-600 transition-colors">{cell}</td>
                     ))}
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        );
      case 'mistake':
        return (
          <div key={index} className="mb-8 bg-red-50 border-4 border-dashed border-red-200 p-8 rounded-[3.5rem] relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full -mr-16 -mt-16 opacity-30 blur-xl"></div>
            <div className="flex items-center mb-6 relative z-10">
              <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl shadow-red-200">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-black text-red-900 uppercase tracking-tighter">{part.title || "Panda Alert!"}</h4>
                <p className="text-red-600 text-[10px] font-black uppercase tracking-[0.3em]">CRITICAL ERROR</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="bg-red-100/60 p-6 rounded-3xl border-2 border-red-200/50">
                <p className="text-[10px] font-black text-red-400 uppercase mb-2 tracking-widest">Wrong</p>
                <p className="text-red-950 font-bold text-xl italic leading-tight">{part.passive}</p>
              </div>
              <div className="bg-emerald-100/60 p-6 rounded-3xl border-2 border-emerald-200/50">
                <p className="text-[10px] font-black text-emerald-400 uppercase mb-2 tracking-widest">Right</p>
                <p className="text-emerald-950 font-black text-xl leading-tight">{part.active}</p>
              </div>
            </div>
          </div>
        );
      case 'tip':
        return (
          <div key={index} className="mb-10 bg-gradient-to-r from-amber-50 to-orange-50 border-4 border-amber-200 p-8 rounded-[4rem] flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-amber-100/50">
             <div className="flex-shrink-0 bg-white p-4 rounded-full shadow-lg border-2 border-amber-100">
               <MoMo size="sm" hideBubble={true} />
             </div>
             <div className="flex-1 text-center md:text-left">
               <h4 className="text-amber-900 font-black text-3xl mb-2">{part.title || "MoMo's Pro Tip"}</h4>
               <p className="text-amber-800 leading-relaxed font-bold text-xl">{part.content}</p>
             </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bamboo-gradient pb-24 relative overflow-x-hidden">
      
      {/* Decorative Background Elements */}
      <div className="hidden xl:block absolute top-0 left-[-100px] w-[300px] h-full opacity-10 pointer-events-none select-none">
        <svg viewBox="0 0 100 1000" className="w-full h-full fill-emerald-800">
          <rect x="45" y="0" width="10" height="1000" rx="5" />
          <path d="M 55 100 Q 80 80 70 120" />
          <path d="M 45 300 Q 20 280 30 320" />
          <path d="M 55 500 Q 85 470 75 520" />
          <path d="M 45 700 Q 15 670 25 720" />
        </svg>
      </div>
      <div className="hidden xl:block absolute top-0 right-[-100px] w-[300px] h-full opacity-10 pointer-events-none select-none">
        <svg viewBox="0 0 100 1000" className="w-full h-full fill-emerald-800">
          <rect x="45" y="0" width="10" height="1000" rx="5" />
          <path d="M 45 150 Q 20 130 30 170" />
          <path d="M 55 350 Q 85 320 75 370" />
          <path d="M 45 550 Q 15 520 25 570" />
          <path d="M 55 750 Q 85 720 75 770" />
        </svg>
      </div>

      {/* Header */}
      <header className="px-4 py-2 md:px-10 md:py-4 flex items-center justify-between glass-panel sticky top-0 z-50 border-b border-emerald-100 shadow-sm backdrop-blur-xl">
        <div className="flex items-center gap-4 cursor-pointer" onClick={handleBack}>
          <MoMo size="sm" hideBubble={true} />
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-4xl font-black text-emerald-950 flex items-center gap-3 leading-none tracking-tight">
               Bamboozled
            </h1>
            <p className="text-emerald-700 font-black text-[9px] md:text-xs uppercase tracking-widest leading-none mt-1.5 opacity-70">Active & Passive Bamboo Scroll</p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={handleBack}
            className={`flex items-center gap-2 px-3 py-2 md:px-6 md:py-3 rounded-2xl transition-all font-black uppercase tracking-widest text-[10px] md:text-xs shadow-md ${!selectedChapterId && !activeQuizId ? 'bg-emerald-100 text-emerald-950 border-2 border-emerald-200' : 'bg-emerald-950 text-white hover:bg-emerald-800'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Learn
          </button>
          <button
            onClick={startGrandQuiz}
            className={`flex items-center gap-2 px-3 py-2 md:px-6 md:py-3 rounded-2xl transition-all font-black uppercase tracking-widest text-[10px] md:text-xs shadow-md ${activeQuizId === 'grand_quiz' ? 'bg-emerald-500 text-white border-2 border-emerald-400' : 'bg-white border-2 border-emerald-100 text-emerald-950 hover:border-emerald-500'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Grand Quiz
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1400px] mx-auto w-full p-4 md:p-8 lg:p-14 relative z-10">
        {activeQuiz ? (
          <QuizRoom quiz={activeQuiz} onClose={handleBack} />
        ) : !selectedChapterId ? (
          <section className="fade-in">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-16 bg-white/70 p-10 md:p-16 rounded-[4.5rem] border-8 border-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full -mr-32 -mt-32 opacity-40 blur-3xl group-hover:bg-emerald-200 transition-colors duration-1000"></div>
              <div className="flex-shrink-0 scale-110 lg:scale-125">
                <MoMo 
                  size="lg" 
                  showRandomThoughts={true}
                />
              </div>
              <div className="relative z-10 text-center lg:text-left max-w-2xl">
                <span className="inline-block px-4 py-1.5 bg-emerald-950 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-xl shadow-emerald-200">The Ultimate Guide</span>
                <h2 className="text-5xl md:text-8xl font-black text-emerald-950 mb-8 leading-[0.85] tracking-tighter">
                  Active Power. <br/><span className="text-emerald-500">Rule the Grove.</span>
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                   <button 
                     onClick={startGrandQuiz}
                     className="bg-emerald-600 hover:bg-emerald-950 px-8 py-4 rounded-3xl text-white font-black border-4 border-emerald-500 shadow-2xl transition-all hover:-translate-y-1 active:scale-95 text-xs uppercase tracking-[0.2em]"
                   >
                     Take Grand Master Quiz
                   </button>
                   <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-3xl text-emerald-900 font-black border-2 border-emerald-100 shadow-lg text-xs uppercase tracking-[0.2em]">12 Extensive Chapters</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {chapters.map(chapter => (
                <ChapterCard
                  key={chapter.id}
                  id={chapter.id}
                  title={chapter.title}
                  onClick={() => setSelectedChapterId(chapter.id)}
                />
              ))}
            </div>
          </section>
        ) : (
          <section className="bg-white/95 rounded-[5rem] p-8 md:p-20 shadow-[0_60px_120px_-30px_rgba(6,78,59,0.2)] border-8 border-white relative overflow-hidden animate-in fade-in zoom-in duration-700">
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-600"></div>
            
            <div className="relative z-10">
              <div className="mb-14 pb-10 border-b-4 border-emerald-50 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-16 h-2 bg-emerald-500 rounded-full"></span>
                    <span className="text-emerald-400 font-black uppercase tracking-[0.4em] text-xs">Learning Module</span>
                  </div>
                  <h2 className="text-4xl md:text-7xl font-black text-emerald-950 leading-[0.9] tracking-tighter">
                    <span className="text-emerald-200 block text-2xl mb-2 uppercase tracking-widest font-black">CH {selectedChapter?.id}</span>
                    {selectedChapter?.title}
                  </h2>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="hidden lg:block transform scale-110 origin-bottom">
                     <MoMo size="sm" hideBubble={true} />
                  </div>
                  <button 
                    onClick={startChapterQuiz}
                    className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg active:scale-95"
                  >
                    Test Your Knowledge
                  </button>
                </div>
              </div>

              <div className="max-w-5xl mx-auto">
                {selectedChapter?.parts.map((part, idx) => renderContentPart(part, idx))}
              </div>

              <div className="mt-24 flex flex-col sm:flex-row items-center justify-between gap-8 pt-12 border-t-4 border-emerald-50">
                 <button
                   onClick={handleBack}
                   className="text-emerald-950 font-black uppercase tracking-[0.2em] text-xs hover:text-emerald-500 transition-colors flex items-center gap-3 group px-6 py-3 rounded-full hover:bg-emerald-50"
                 >
                   <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-md">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                   </div>
                   Return to Syllabus
                 </button>

                 <div className="flex items-center gap-4 flex-wrap justify-center">
                   {selectedChapterId > 1 && (
                     <button
                       onClick={() => setSelectedChapterId(selectedChapterId - 1)}
                       className="px-8 py-4 border-4 border-emerald-100 text-emerald-900 rounded-[2.5rem] hover:bg-emerald-50 transition-all font-black uppercase tracking-widest text-xs"
                     >
                       Previous
                     </button>
                   )}
                   
                   <button 
                    onClick={startChapterQuiz}
                    className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 text-xs"
                   >
                    Test Your Knowledge
                   </button>

                   {selectedChapterId < chapters.length && (
                     <button
                       onClick={() => setSelectedChapterId(selectedChapterId + 1)}
                       className="px-14 py-4 bg-emerald-600 text-white rounded-[2.5rem] hover:bg-emerald-950 transition-all shadow-2xl shadow-emerald-200 font-black uppercase tracking-widest text-xs"
                     >
                       Next Chapter
                     </button>
                   )}
                 </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Sticky Footer */}
      <footer className="fixed bottom-0 left-0 right-0 glass-panel border-t-4 border-white/60 py-3 px-10 flex items-center justify-between z-[60] shadow-2xl backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-200"></div>
          <span className="text-xs font-black text-emerald-950 uppercase tracking-[0.2em] opacity-60">
            {activeQuizId ? `Quizzing: ${activeQuiz?.title}` : `Reading: ${selectedChapter?.title || "Syllabus"}`}
          </span>
        </div>
        <p className="text-emerald-900 font-black text-xs uppercase tracking-[0.1em] flex items-center gap-3">
          Developed By <span className="bg-emerald-950 text-white px-3 py-1 rounded-lg">Shalaka Kashikar</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
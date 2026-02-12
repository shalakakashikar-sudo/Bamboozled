import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Quiz, QuizQuestion, UserAnswer } from '../types';
import { MoMo, Mood } from './Mascot';
import { quizzes } from '../data/quizData';

interface QuizRoomProps {
  quiz: Quiz;
  onClose: () => void;
}

type QuizStage = 'setup' | 'active' | 'results';

export const QuizRoom: React.FC<QuizRoomProps> = ({ quiz, onClose }) => {
  const [stage, setStage] = useState<QuizStage>('setup');
  const [targetCount, setTargetCount] = useState<number>(10);
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<(UserAnswer | null)[]>([]);
  
  const [mood, setMood] = useState<Mood>('happy');
  const [message, setMessage] = useState<string>(`Ready for the ${quiz.title}? Choose your challenge!`);
  
  const quizAnchorRef = useRef<HTMLDivElement>(null);

  // --- Refined Scroll Logic ---
  useEffect(() => {
    if (stage === 'active' && quizAnchorRef.current) {
      const timeout = setTimeout(() => {
        const headerOffset = 180; 
        const elementPosition = quizAnchorRef.current?.getBoundingClientRect().top ?? 0;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIdx, stage]);

  // --- Setup Logic ---
  const startQuiz = () => {
    // 1. Determine the source pool
    let pool: QuizQuestion[] = [];
    
    if (quiz.id === 'grand_quiz') {
      // For the Grand Quiz, aggregate EVERYTHING from the entire database
      pool = Object.values(quizzes).flatMap(q => q.questions);
    } else {
      // For chapter-specific quizzes, stick to that chapter's bank
      pool = [...quiz.questions];
    }

    // 2. Fisher-Yates Shuffle for true randomness
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // 3. Select the requested number of questions
    const selected = shuffled.slice(0, targetCount);
    
    setActiveQuestions(selected);
    setUserAnswers(new Array(selected.length).fill(null));
    setCurrentIdx(0);
    setStage('active');
    setMood('determined');
    setMessage("Focus on the subject and object. Let's grow!");
  };

  const currentQuestion = activeQuestions[currentIdx];
  const currentAnswerRecord = userAnswers[currentIdx];
  const isAnswered = !!currentAnswerRecord;

  const correctCount = userAnswers.filter(a => a?.isCorrect).length;
  const incorrectCount = userAnswers.filter(a => a && !a.isCorrect).length;

  // --- Submission Logic ---
  const handleSubmit = useCallback(() => {
    if (isAnswered || selectedOption === null) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    const newAnswer: UserAnswer = {
      questionIdx: currentIdx,
      selectedOption,
      isCorrect
    };

    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentIdx] = newAnswer;
    setUserAnswers(updatedAnswers);

    if (isCorrect) {
      setMood('laughing');
      setMessage("Perfect! That's how a master does it.");
    } else {
      setMood('confused');
      setMessage("Oops! Check the logic below.");
    }
  }, [isAnswered, selectedOption, currentQuestion, currentIdx, userAnswers]);

  // Handle Enter Key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && stage === 'active') {
        if (!isAnswered && selectedOption !== null) {
          handleSubmit();
        } else if (isAnswered) {
          handleNext();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stage, isAnswered, selectedOption, handleSubmit]);

  const handleNext = () => {
    if (currentIdx < activeQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(userAnswers[currentIdx + 1]?.selectedOption ?? null);
      setMood('thinking');
      setMessage(`Question ${currentIdx + 2}: You've got this!`);
    } else {
      setStage('results');
      const finalScore = userAnswers.filter(a => a?.isCorrect).length;
      const pct = (finalScore / activeQuestions.length) * 100;
      if (pct >= 80) setMood('love');
      else if (pct >= 50) setMood('wink');
      else setMood('sleepy');
      setMessage(pct >= 80 ? "Legendary performance!" : pct >= 50 ? "Solid effort, keep going." : "Take a nap, then try again.");
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
      setSelectedOption(userAnswers[currentIdx - 1]?.selectedOption ?? null);
    }
  };

  if (stage === 'setup') {
    return (
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[4rem] shadow-2xl border-8 border-emerald-50 p-10 md:p-16 fade-in min-h-[500px]">
        <div className="lg:w-1/2 flex justify-center">
          <MoMo size="lg" mood="happy" message={message} />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-black text-emerald-950 mb-2 leading-tight">Quiz Setup</h2>
          <p className="text-emerald-700 font-medium mb-8">How many bamboo shoots will you tackle?</p>
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[5, 10, 20, 30, 40, 50].map(count => (
              <button
                key={count}
                onClick={() => setTargetCount(count)}
                className={`py-3 rounded-2xl font-black text-lg transition-all border-4 ${targetCount === count ? 'bg-emerald-600 text-white border-emerald-400 scale-105 shadow-lg' : 'bg-emerald-50 text-emerald-900 border-white hover:border-emerald-200'}`}
              >
                {count}
              </button>
            ))}
          </div>
          <button 
            onClick={startQuiz}
            className="w-full py-5 bg-emerald-950 text-white rounded-3xl font-black uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-xl text-lg hover:scale-[1.02] active:scale-95"
          >
            Start Quiz
          </button>
          <button 
            onClick={onClose}
            className="w-full mt-4 py-3 text-emerald-600 font-black uppercase tracking-widest text-xs hover:text-emerald-900 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (stage === 'results') {
    const score = userAnswers.filter(a => a?.isCorrect).length;
    return (
      <div className="max-w-[1400px] mx-auto fade-in pb-20">
        <div className="bg-white rounded-[4rem] shadow-2xl border-8 border-emerald-50 p-10 flex flex-col lg:flex-row items-center gap-10 mb-10">
          <div className="lg:w-1/3 flex justify-center">
            <MoMo size="md" mood={mood} message={message} />
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-5xl font-black text-emerald-950 mb-2">Quiz Complete!</h2>
            <div className="flex items-center justify-center lg:justify-start gap-8 my-6">
              <div>
                <div className="text-7xl font-black text-emerald-600">{score} / {activeQuestions.length}</div>
                <div className="text-xs font-black text-emerald-400 uppercase tracking-widest mt-1">Questions Correct</div>
              </div>
              <div className="w-1.5 h-16 bg-emerald-100 rounded-full"></div>
              <div>
                <div className="text-7xl font-black text-emerald-950">{Math.round((score / activeQuestions.length) * 100)}%</div>
                <div className="text-xs font-black text-emerald-400 uppercase tracking-widest mt-1">Overall Rank</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
              <button onClick={() => { setStage('setup'); setCurrentIdx(0); }} className="px-10 py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg hover:bg-emerald-500 transition-all">New Quiz</button>
              <button onClick={onClose} className="px-10 py-4 bg-emerald-950 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg hover:bg-emerald-800 transition-all">Home</button>
            </div>
          </div>
        </div>
        <h3 className="text-3xl font-black text-emerald-950 mb-8 px-4 border-l-8 border-emerald-500 ml-4">Scroll of Wisdom (Review)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4">
          {activeQuestions.map((q, i) => {
            const ans = userAnswers[i];
            return (
              <div key={i} className={`p-8 rounded-[3rem] border-4 bg-white shadow-lg flex flex-col transition-transform hover:scale-[1.01] ${ans?.isCorrect ? 'border-emerald-100' : 'border-fuchsia-100'}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest ${ans?.isCorrect ? 'bg-emerald-500 shadow-emerald-100' : 'bg-fuchsia-500 shadow-fuchsia-100 shadow-md'}`}>
                    {ans?.isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                  <span className="text-xs font-black text-emerald-200 uppercase">Q{i + 1}</span>
                </div>
                <h4 className="text-lg font-black text-emerald-950 mb-6 flex-grow leading-tight">{q.question}</h4>
                <div className="bg-emerald-50/30 p-5 rounded-2xl border-2 border-dashed border-emerald-100 text-[12px] leading-relaxed italic text-emerald-800">
                  <p className="not-italic font-black text-[10px] text-emerald-400 uppercase mb-2">Panda Logic:</p>
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const progressPercent = ((currentIdx + 1) / activeQuestions.length) * 100;

  return (
    <div className="max-w-[1400px] mx-auto fade-in">
      <div className="mb-8 w-full sticky top-[72px] z-20 glass-panel p-4 rounded-[2rem] border-2 border-white shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center mb-2 px-3">
           <div className="flex items-center gap-3">
             <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></div>
             <span className="text-[11px] font-black text-emerald-950 uppercase tracking-[0.2em]">Growth Segment {currentIdx + 1} / {activeQuestions.length}</span>
           </div>
           <div className="bg-emerald-100 px-3 py-1 rounded-full">
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{Math.round(progressPercent)}% COMPLETE</span>
           </div>
        </div>
        <div className="h-4 w-full bg-emerald-50 rounded-full border-2 border-white shadow-inner relative overflow-hidden flex">
          <div 
            className="h-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 transition-all duration-700 ease-out relative"
            style={{ width: `${progressPercent}%` }}
          >
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute h-full w-0.5 bg-white/30" style={{ left: `${(i+1)*5}%` }}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start relative">
        <aside className="lg:w-[350px] flex flex-col gap-6 lg:sticky lg:top-[160px] w-full z-10">
          <div className="bg-white p-8 rounded-[3.5rem] shadow-2xl border-4 border-emerald-50 flex flex-col items-center">
            <MoMo size="md" mood={mood} message={message} />
            <div className="w-full mt-8 pt-8 border-t-4 border-emerald-50 grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 p-4 rounded-3xl text-center shadow-inner border border-emerald-100">
                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">Correct</p>
                <p className="text-3xl font-black text-emerald-600">{correctCount}</p>
              </div>
              <div className="bg-fuchsia-50 p-4 rounded-3xl text-center shadow-inner border border-fuchsia-100">
                <p className="text-[10px] font-black text-fuchsia-400 uppercase tracking-widest mb-1">Missed</p>
                <p className="text-3xl font-black text-fuchsia-600">{incorrectCount}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Enter to confirm</p>
            </div>
          </div>
        </aside>

        <div className="flex-1 w-full min-h-[500px] flex flex-col">
          <div ref={quizAnchorRef} className="invisible h-0 w-0" />
          
          <div className="bg-white p-8 md:p-14 rounded-[4.5rem] shadow-2xl border-4 border-emerald-50 flex flex-col h-full">
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-black text-emerald-300 uppercase tracking-[0.3em]">CHALLENGE MODULE</span>
                <div className="flex-1 h-0.5 bg-emerald-50 rounded-full"></div>
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-emerald-950 leading-[1.15] tracking-tight">
                {currentQuestion.question}
              </h3>
              {isAnswered && (
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-950 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  Review Mode
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {currentQuestion.options.map((option, idx) => {
                let stateClass = "bg-white border-emerald-100 text-emerald-900 hover:border-emerald-400 hover:bg-emerald-50/30";
                if (isAnswered) {
                  if (idx === currentQuestion.correctAnswer) {
                    stateClass = "bg-emerald-500 border-emerald-400 text-white shadow-2xl scale-[1.03] z-10";
                  } else if (idx === selectedOption) {
                    stateClass = "bg-fuchsia-500 border-fuchsia-400 text-white shadow-xl";
                  } else {
                    stateClass = "bg-gray-50 border-gray-100 text-gray-400 opacity-40 scale-[0.98]";
                  }
                } else if (selectedOption === idx) {
                  stateClass = "bg-emerald-50 border-emerald-600 text-emerald-950 shadow-2xl ring-4 ring-emerald-100 scale-[1.02] z-10";
                }

                return (
                  <button 
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => setSelectedOption(idx)}
                    className={`text-left p-6 rounded-[2.5rem] border-4 transition-all duration-300 font-black text-lg flex items-center gap-5 group ${stateClass}`}
                  >
                    <span className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 text-sm font-black border-2 transition-colors ${selectedOption === idx || (isAnswered && idx === currentQuestion.correctAnswer) ? 'bg-white border-white text-emerald-900' : 'bg-emerald-50 border-emerald-100 text-emerald-300'}`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 text-base md:text-xl leading-tight">{option}</span>
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="mb-10 p-8 bg-emerald-50/60 rounded-[3.5rem] border-2 border-emerald-100 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-inner">
                <div className="flex items-center gap-5 mb-4">
                  <div className={`w-12 h-12 rounded-[1.25rem] flex items-center justify-center text-white text-xl shadow-lg transform rotate-3 ${currentAnswerRecord?.isCorrect ? 'bg-emerald-500' : 'bg-fuchsia-500'}`}>
                    {currentAnswerRecord?.isCorrect ? '✓' : '×'}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-emerald-800 uppercase tracking-[0.2em]">
                      {currentAnswerRecord?.isCorrect ? 'MOMO IS PROUD!' : 'QUICK LESSON:'}
                    </h4>
                    <p className="text-emerald-950 font-black text-lg">Panda Insights</p>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-200 pl-6 py-2">
                  <p className="text-emerald-900 leading-relaxed font-bold italic text-base md:text-lg">
                    "{currentQuestion.explanation}"
                  </p>
                </div>
              </div>
            )}

            <div className="mt-auto pt-8 border-t-4 border-emerald-50 flex flex-col sm:flex-row gap-4 items-center">
               <div className="flex gap-4 w-full">
                 <button
                   onClick={handlePrev}
                   disabled={currentIdx === 0}
                   className="px-8 py-5 rounded-3xl font-black uppercase tracking-widest text-[11px] transition-all border-4 bg-white border-emerald-100 text-emerald-900 hover:bg-emerald-50 disabled:opacity-20 shadow-sm"
                 >
                   Back
                 </button>
                 {!isAnswered ? (
                   <button
                     onClick={handleSubmit}
                     disabled={selectedOption === null}
                     className="flex-1 px-10 py-5 bg-emerald-950 text-white rounded-3xl font-black uppercase tracking-[0.25em] text-[11px] transition-all hover:bg-emerald-800 disabled:opacity-30 shadow-2xl hover:scale-[1.02] active:scale-95"
                   >
                     Submit Choice
                   </button>
                 ) : (
                   <button
                     onClick={handleNext}
                     className="flex-1 px-10 py-5 bg-emerald-500 text-white rounded-3xl font-black uppercase tracking-[0.25em] text-[11px] transition-all hover:bg-emerald-600 shadow-2xl hover:scale-[1.02] active:scale-95"
                   >
                     {currentIdx < activeQuestions.length - 1 ? 'Next Challenge' : 'Finish Quiz'}
                   </button>
                 )}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
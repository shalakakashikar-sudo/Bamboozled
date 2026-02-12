import React, { useState, useEffect, useCallback, useRef } from 'react';

// --- Types ---
export type Mood = 
  | 'happy' 
  | 'thinking' 
  | 'surprised' 
  | 'sleepy' 
  | 'wink' 
  | 'tickled' 
  | 'confused' 
  | 'love' 
  | 'determined'
  | 'laughing'
  | 'tongue'
  | 'shy'
  | 'giggling';

interface Thought {
  text: string;
  mood: Mood;
}

// --- Heavily Expanded Dialogue Data ---
const MOMO_THOUGHTS: Thought[] = [
  { text: "Did you know? Even pandas prefer Active Voice! It's much faster.", mood: 'happy' },
  { text: "Active: 'I eat bamboo.' Passive: 'Bamboo is eaten by me.' I prefer the eating part!", mood: 'determined' },
  { text: "Don't let the V3 forms chew you up. They are your friends!", mood: 'wink' },
  { text: "Bamboozled? Just check the formula plaque! It's our secret map.", mood: 'thinking' },
  { text: "Passive voice is useful, but don't over-rely on it... *yawn*", mood: 'sleepy' },
  { text: "Remember: 'Be + V3' is the heartbeat of every passive sentence.", mood: 'love' },
  { text: "Wait... was the bamboo eaten by me, or did I eat the bamboo?", mood: 'confused' },
  { text: "The Subject performs the action. Like me performing a nap!", mood: 'happy' },
  { text: "Use Passive Voice when the 'doer' is unknown. Like: 'My cake was stolen!'", mood: 'surprised' },
  { text: "I love a strong Verb. It moves the sentence forward!", mood: 'love' },
  { text: "Hmm... By whom was this code written? A mystery!", mood: 'thinking' },
  { text: "LOL! Active voice is so much more energetic!", mood: 'laughing' },
  { text: "Blep! Grammar is fun when you're a panda!", mood: 'tongue' },
  { text: "Oh, you're doing so well... I'm getting emotional!", mood: 'shy' },
  { text: "Hahaha! That's a funny sentence structure!", mood: 'laughing' },
  { text: "Psst... V3 is the secret ingredient. Don't tell the monkeys!", mood: 'wink' },
  { text: "The object becomes the subject... it's like a magic trick!", mood: 'thinking' },
  { text: "I'm not lazy, I'm just in passive mode right now.", mood: 'sleepy' },
  { text: "You're becoming a total Grammar Master! Yay!", mood: 'love' },
  { text: "A mistake? No worries! That's how we grow (like bamboo)!", mood: 'happy' },
  { text: "Hehehe, I just thought of a passive-aggressive joke. Get it?", mood: 'giggling' },
  { text: "Grammar makes my heart go V3-V3-V3!", mood: 'love' },
  { text: "Is it 'The panda was tickled' or 'You tickled the panda'?", mood: 'thinking' },
  { text: "Whoa! That's a lot of knowledge for one day!", mood: 'surprised' },
  { text: "Don't stop now, you're on a roll!", mood: 'happy' },
];

const TICKLE_REACTIONS: Thought[] = [
  { text: "Eep! That tickles! The button was clicked BY you!", mood: 'tickled' },
  { text: "Hey! I'm trying to teach grammar here!", mood: 'surprised' },
  { text: "Hahaha! Stop! My passive voice is breaking!", mood: 'laughing' },
  { text: "Whoa! Unprovoked action! Subject: YOU.", mood: 'surprised' },
  { text: "Aww, you care! I am loved by the user!", mood: 'shy' },
  { text: "Giggle! Tickles are the best!", mood: 'giggling' },
  { text: "Stoooop! I'll drop my bamboo!", mood: 'tongue' },
  { text: "Tehehe! You're so funny!", mood: 'giggling' },
  { text: "ROFL! Stop it, stop it!", mood: 'laughing' },
  { text: "Oh stop... I'm blushing!", mood: 'shy' },
];

// --- Component ---
export const MoMo: React.FC<{ 
  size?: 'sm' | 'md' | 'lg', 
  message?: string, 
  mood?: Mood,
  showRandomThoughts?: boolean,
  hideBubble?: boolean
}> = ({ 
  size = 'md', 
  message, 
  mood: forcedMood,
  showRandomThoughts = false,
  hideBubble = false
}) => {
  const [internalMood, setInternalMood] = useState<Mood>('happy');
  const [internalMessage, setInternalMessage] = useState<string>(MOMO_THOUGHTS[Math.floor(Math.random() * MOMO_THOUGHTS.length)].text);
  const [isWiggling, setIsWiggling] = useState(false);
  const [isReactionLocked, setIsReactionLocked] = useState(false);
  const resetTimeoutRef = useRef<number | null>(null);

  // --- Auto-Rotation Logic ---
  useEffect(() => {
    if (showRandomThoughts && !message && !isReactionLocked) {
      const interval = setInterval(() => {
        const random = MOMO_THOUGHTS[Math.floor(Math.random() * MOMO_THOUGHTS.length)];
        setInternalMood(random.mood);
        setInternalMessage(random.text);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [showRandomThoughts, message, isReactionLocked]);

  // --- Handle Props Updates ---
  useEffect(() => {
    if (forcedMood) setInternalMood(forcedMood);
    if (message) setInternalMessage(message);
  }, [forcedMood, message]);

  // --- Tickle Handler ---
  const handleTickle = useCallback(() => {
    if (resetTimeoutRef.current) {
      window.clearTimeout(resetTimeoutRef.current);
    }

    setIsWiggling(true);
    setIsReactionLocked(true);
    
    const reaction = TICKLE_REACTIONS[Math.floor(Math.random() * TICKLE_REACTIONS.length)];
    setInternalMood(reaction.mood);
    setInternalMessage(reaction.text);

    setTimeout(() => setIsWiggling(false), 800);
    
    resetTimeoutRef.current = window.setTimeout(() => {
      setIsReactionLocked(false);
      const random = MOMO_THOUGHTS[Math.floor(Math.random() * MOMO_THOUGHTS.length)];
      setInternalMood(random.mood);
      if (!message) setInternalMessage(random.text);
      resetTimeoutRef.current = null;
    }, 7500);
  }, [message]);

  const currentMood = internalMood;
  const currentMessage = message || internalMessage;

  const sizeClasses = {
    sm: 'w-32',
    md: 'w-56',
    lg: 'w-72'
  };

  const renderEyeContent = (side: 'left' | 'right') => {
    if (currentMood === 'sleepy') {
      return <line x1="-8" y1="2" x2="8" y2="2" stroke="white" strokeWidth="3" strokeLinecap="round" />;
    }
    if ((currentMood === 'wink' && side === 'left') || currentMood === 'giggling') {
      return <path d="M -8 2 Q 0 10 8 2" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />;
    }
    if (currentMood === 'laughing') {
      return <path d="M -8 2 Q 0 -6 8 2" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />;
    }
    if (currentMood === 'love') {
      return <path d="M 0 4 L -5 -2 Q -8 -6 -3 -6 Q 0 -6 0 -2 Q 0 -6 3 -6 Q 8 -6 5 -2 Z" fill="#ff6b81" />;
    }
    if (currentMood === 'tongue' && side === 'left') {
      return <path d="M -8 2 Q 0 10 8 2" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />;
    }
    if (currentMood === 'shy') {
      const offset = side === 'left' ? -3 : 3;
      return <circle cx={offset} cy="0" r="3" fill="white" />;
    }
    
    if (['tickled', 'surprised', 'confused', 'thinking', 'determined', 'tongue'].includes(currentMood)) {
      let px = 0; 
      let py = 0;
      if (currentMood === 'thinking') { px = 3; py = -3; } 
      if (currentMood === 'confused') { px = -2; py = 1; } 
      if (currentMood === 'determined') { py = 2; } 
      
      const eyelid = currentMood === 'determined' ? <path d="M -10 -5 Q 0 5 10 -5" fill="#1a2e1a" /> : null;

      return (
        <g>
          <circle cx="0" cy="0" r="9" fill="white" />
          <circle cx={px} cy={py} r="3.5" fill="#1a2e1a" />
          {eyelid}
        </g>
      );
    }
    return <circle cx="-3" cy="-3" r="4" fill="white" />;
  };

  const renderMouthContent = () => {
    switch (currentMood) {
      case 'laughing':
        return <path d="M -12 0 Q 0 20 12 0 Z" fill="#ef4444" stroke="#1a2e1a" strokeWidth="2" />;
      case 'giggling':
        return <path d="M -8 0 Q 0 10 8 0" fill="#ef4444" stroke="#1a2e1a" strokeWidth="2" />;
      case 'tongue':
        return (
          <g>
            <path d="M -10 0 Q 0 8 10 0" fill="none" stroke="#1a2e1a" strokeWidth="3" strokeLinecap="round" />
            <path d="M -4 2 Q 0 14 4 2" fill="#ff80ab" stroke="#1a2e1a" strokeWidth="1" />
          </g>
        );
      case 'shy':
        return <path d="M -6 2 Q 0 5 6 2" fill="none" stroke="#1a2e1a" strokeWidth="2" strokeLinecap="round" />;
      case 'happy':
      case 'love':
      case 'wink':
        return <path d="M -10 0 Q 0 8 10 0" fill="none" stroke="#1a2e1a" strokeWidth="3" strokeLinecap="round" />;
      case 'determined':
        return <path d="M -8 5 Q 0 0 8 5" fill="none" stroke="#1a2e1a" strokeWidth="3" strokeLinecap="round" />;
      case 'thinking':
        return <line x1="-6" y1="2" x2="6" y2="2" stroke="#1a2e1a" strokeWidth="3" strokeLinecap="round" />;
      case 'surprised':
      case 'tickled':
        return <circle cx="0" cy="2" r="5" fill="#1a2e1a" />;
      case 'confused':
        return <path d="M -8 4 Q 0 0 8 4" fill="none" stroke="#1a2e1a" strokeWidth="3" strokeLinecap="round" />;
      default:
        return <path d="M -10 0 Q 0 8 10 0" fill="none" stroke="#1a2e1a" strokeWidth="3" strokeLinecap="round" />;
    }
  };

  return (
    <div className={`flex flex-col items-center relative group ${sizeClasses[size]} transition-all duration-500`}>
      <div 
        className={`
          cursor-pointer select-none transition-transform duration-300
          ${isWiggling || currentMood === 'giggling' || currentMood === 'laughing' ? 'animate-wiggle' : 'animate-panda-sway hover:scale-105'}
        `}
        onClick={handleTickle}
        title="Tickle me!"
      >
        <svg viewBox="0 0 200 220" className="w-full drop-shadow-2xl">
          {/* Ears */}
          <circle cx="55" cy="85" r="20" fill="#1a2e1a" />
          <circle cx="145" cy="85" r="20" fill="#1a2e1a" />
          
          {/* Body */}
          <ellipse cx="100" cy="180" rx="65" ry="45" fill="white" stroke="#1a2e1a" strokeWidth="4" />
          <ellipse cx="65" cy="205" rx="18" ry="14" fill="#1a2e1a" />
          <ellipse cx="135" cy="205" rx="18" ry="14" fill="#1a2e1a" />
          
          {/* Head */}
          <ellipse cx="100" cy="130" rx="70" ry="55" fill="white" stroke="#1a2e1a" strokeWidth="4" />
          
          {/* Eye Patches & Eyes */}
          <g transform={`translate(65, 125) rotate(${currentMood === 'shy' ? -5 : -15})`}>
            <ellipse cx="0" cy="0" rx="18" ry="22" fill="#1a2e1a" />
            {renderEyeContent('left')}
          </g>
          <g transform={`translate(135, 125) rotate(${currentMood === 'shy' ? 25 : 15})`}>
            <ellipse cx="0" cy="0" rx="18" ry="22" fill="#1a2e1a" />
            {renderEyeContent('right')}
          </g>
          
          {/* Blushes */}
          <ellipse cx="50" cy="145" rx="10" ry="6" fill="#fbcfe8" opacity={currentMood === 'love' || currentMood === 'shy' || currentMood === 'giggling' ? 0.9 : 0.6} />
          <ellipse cx="150" cy="145" rx="10" ry="6" fill="#fbcfe8" opacity={currentMood === 'love' || currentMood === 'shy' || currentMood === 'giggling' ? 0.9 : 0.6} />
          
          {/* Nose */}
          <path d="M 94 145 Q 100 150 106 145 Q 100 138 94 145" fill="#1a2e1a" />
          
          {/* Mouth */}
          <g transform="translate(100, 155)">
            {renderMouthContent()}
          </g>
          
          {/* Bamboo Prop */}
          <g transform="translate(115, 150) rotate(20)">
            <rect x="0" y="0" width="10" height="50" rx="2" fill="#86efac" stroke="#15803d" strokeWidth="2" />
            <line x1="0" y1="15" x2="10" y2="15" stroke="#15803d" strokeWidth="1" />
            <line x1="0" y1="35" x2="10" y2="35" stroke="#15803d" strokeWidth="1" />
            <path d="M 10 15 Q 25 10 18 25 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
            <path d="M 0 35 Q -15 30 -8 45 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
          </g>
          
          {/* Paws */}
          <ellipse cx="125" cy="170" rx="22" ry="14" fill="#1a2e1a" transform="rotate(-20 125 170)" />
          <ellipse cx="75" cy="170" rx="22" ry="14" fill="#1a2e1a" transform="rotate(20 75 170)" />
          
          {/* Hat (Bamboozled Style) */}
          <path d="M 25 105 L 100 25 L 175 105 Q 100 115 25 105 Z" fill="#d97706" stroke="#92400e" strokeWidth="3" strokeLinejoin="round" />
          <path d="M 100 25 L 100 110" stroke="#fcd34d" strokeWidth="1" opacity="0.5" />
          <path d="M 100 25 L 60 108" stroke="#fcd34d" strokeWidth="1" opacity="0.5" />
          <path d="M 100 25 L 140 108" stroke="#fcd34d" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {!hideBubble && currentMessage && (
        <div className={`
          mt-4 relative bg-white px-5 py-3 rounded-2xl border-2 shadow-lg transition-all duration-300
          ${['tickled', 'love', 'laughing', 'tongue', 'shy', 'giggling'].includes(currentMood) ? 'border-pink-400 scale-105 rotate-1' : 'border-emerald-100'}
        `}>
          <p className={`
            text-sm font-medium text-center leading-snug
            ${['tickled', 'love', 'laughing', 'tongue', 'shy', 'giggling'].includes(currentMood) ? 'text-pink-600 font-bold' : 'text-emerald-900'}
          `}>
            {currentMessage}
          </p>
          <div className={`
            absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t-2 border-l-2 rotate-45
            ${['tickled', 'love', 'laughing', 'tongue', 'shy', 'giggling'].includes(currentMood) ? 'border-pink-400' : 'border-emerald-100'}
          `}></div>
        </div>
      )}

      <style>{`
        @keyframes panda-sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-panda-sway { animation: panda-sway 4s ease-in-out infinite; }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        .animate-wiggle { animation: wiggle 0.2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};
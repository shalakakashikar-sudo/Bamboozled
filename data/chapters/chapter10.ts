import { Chapter } from '../../types';

export const chapter10: Chapter = {
  id: 10,
  title: "Practice Strategies & Mastery",
  parts: [
    { type: 'heading', title: "10.1 Step-by-Step Conversion Method" },
    { 
      type: 'text', 
      content: "Mastering conversion is about following a logical sequence. Follow these 5 steps for a perfect passive sentence every time:" 
    },
    {
      type: 'list',
      items: [
        "Step 1: Identify Subject, Verb, and Object.",
        "Step 2: Identify the tense (this dictates your 'be' verb).",
        "Step 3: Make the original object the new subject.",
        "Step 4: Add the appropriate form of 'be' + V3 (Past Participle).",
        "Step 5: Add 'by + original subject' (Agent) if needed."
      ]
    },
    
    { type: 'heading', title: "Example Breakdown" },
    { 
      type: 'text', 
      title: "Active Sentence", 
      content: "\"The teacher is explaining the lesson.\"" 
    },
    {
      type: 'list',
      title: "Conversion Steps in Action",
      items: [
        "Step 1: Subject = teacher, Verb = is explaining, Object = lesson",
        "Step 2: Tense = Present Continuous",
        "Step 3: New subject = The lesson",
        "Step 4: is + being + explained",
        "Step 5: by the teacher"
      ]
    },
    { 
      type: 'example', 
      active: "The teacher is explaining the lesson.", 
      passive: "The lesson is being explained by the teacher." 
    },

    { type: 'heading', title: "10.2 Self-Check Questions" },
    { 
      type: 'text', 
      content: "After converting, run your new sentence through this checklist to ensure accuracy:" 
    },
    {
      type: 'list',
      items: [
        "1. Did I use the correct form of V3? (Check irregulars!)",
        "2. Does the auxiliary verb (am/is/are/was/were) match the NEW subject?",
        "3. Did I preserve the original tense correctly?",
        "4. Is 'being' needed (for continuous) or 'been' (for perfect)?",
        "5. Does the sentence make logical sense in context?"
      ]
    },

    { type: 'heading', title: "10.3 Memory Tricks" },
    { 
      type: 'text', 
      content: "Quick mental shortcuts to help you remember the auxiliary requirements:" 
    },
    { type: 'situation', title: "Continuous Tenses", description: "Ongoing action", content: "Think 'BEING' = The action is still in progress." },
    { type: 'situation', title: "Perfect Tenses", description: "Completed action", content: "Think 'BEEN' = The action has finished." },
    { type: 'situation', title: "Modal Verbs", description: "Ability/Duty/Necessity", content: "Think Modal + BE + V3 (Keep it simple, no 'being' or 'been')." },
    { type: 'situation', title: "Intransitive Verbs", description: "The Dead Ends", content: "No object = No Passive! Don't try to force it." },

    { type: 'heading', title: "10.4 Practice Tips" },
    { 
      type: 'text', 
      content: "Consistency is the key to mastery. Integrate these habits into your study routine:" 
    },
    {
      type: 'list',
      items: [
        "TIP 1: Practice 10 sentences daily from active to passive.",
        "TIP 2: Create flashcards for the V3 forms of irregular verbs.",
        "TIP 3: Read newspapers or news apps and identify passive sentences.",
        "TIP 4: Rewrite paragraphs by changing all active sentences to passive.",
        "TIP 5: Quiz yourself on tense formulas specifically.",
        "TIP 6: Focus on one tense at a time until you master it completely.",
        "TIP 7: Keep a 'Mistake Log' of your most frequent errors.",
        "TIP 8: Practice with real-world examples (news headlines, science articles)."
      ]
    },

    { 
      type: 'tip', 
      title: "MoMo's Final Strategy", 
      content: "Practice doesn't make perfect—perfect practice makes perfect! Use the 5-Step method slowly at first, and soon it will be second nature. Go get 'em! 🎋🐼" 
    }
  ]
};
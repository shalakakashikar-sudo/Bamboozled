
import { Quiz } from '../../types';

export const chapter4Quiz: Quiz = {
  id: 'chapter_4',
  title: "Ch. 4: Modal Verbs Quiz",
  questions: [
    {
      id: 1,
      question: "What is the correct structure for a passive modal sentence?",
      options: [
        "Modal + V3",
        "Modal + been + V3",
        "Modal + be + V3",
        "Modal + being + V3"
      ],
      correctAnswer: 2,
      explanation: "Modals use 'be' (e.g., 'can be done', 'must be followed'). Never 'been' or 'being'."
    },
    {
      id: 2,
      question: "Convert to Passive: 'You must follow the rules.'",
      options: [
        "The rules must follow.",
        "The rules must be followed.",
        "The rules must been followed.",
        "The rules should be followed."
      ],
      correctAnswer: 1,
      explanation: "The modal 'must' stays, followed by 'be' and the V3 'followed'."
    }
  ]
};

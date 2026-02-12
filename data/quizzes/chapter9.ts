
import { Quiz } from '../../types';

export const chapter9Quiz: Quiz = {
  id: 'chapter_9',
  title: "Ch. 9: Common Errors Quiz",
  questions: [
    {
      id: 1,
      question: "Identify the error: 'The work must been finished.'",
      options: ["Wrong V3", "Using 'been' instead of 'be'", "Missing the subject", "Wrong tense"],
      correctAnswer: 1,
      explanation: "Modals take 'be', not 'been'. Correct: 'The work must BE finished'."
    },
    {
      id: 2,
      question: "Is 'The accident was happened' correct?",
      options: ["Yes", "No, 'happen' is intransitive."],
      correctAnswer: 1,
      explanation: "'Happen' does not take an object and cannot be passive."
    }
  ]
};

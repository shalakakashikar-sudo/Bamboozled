
import { Quiz } from '../../types';

export const chapter5Quiz: Quiz = {
  id: 'chapter_5',
  title: "Ch. 5: Special Structures Quiz",
  questions: [
    {
      id: 1,
      question: "How do you convert the imperative 'Open the door' to passive?",
      options: [
        "The door is opened.",
        "Let the door be opened.",
        "You are open the door.",
        "Let the door open."
      ],
      correctAnswer: 1,
      explanation: "Imperatives (commands) typically use the 'Let + Object + be + V3' formula."
    },
    {
      id: 2,
      question: "In a 'Who' question, what does 'Who' become in the passive voice?",
      options: ["Whom", "By whom", "Who was", "Whose"],
      correctAnswer: 1,
      explanation: "'Who' usually becomes 'By whom' at the start of a passive sentence."
    }
  ]
};

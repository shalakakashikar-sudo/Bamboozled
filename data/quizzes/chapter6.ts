
import { Quiz } from '../../types';

export const chapter6Quiz: Quiz = {
  id: 'chapter_6',
  title: "Ch. 6: Advanced Patterns Quiz",
  questions: [
    {
      id: 1,
      question: "When using causative 'have', what is the pattern?",
      options: [
        "Have + Person + V3",
        "Have + Object + V3",
        "Have + been + V3",
        "Have + V1 + Object"
      ],
      correctAnswer: 1,
      explanation: "Example: 'I had my car serviced' (arranged for someone else to do it)."
    },
    {
      id: 2,
      question: "In the passive of 'I saw him open the door', what must you add?",
      options: ["being", "to", "by", "that"],
      correctAnswer: 1,
      explanation: "Perception verbs (see, hear) require the 'to-infinitive' in passive: 'He was seen TO open...'"
    }
  ]
};

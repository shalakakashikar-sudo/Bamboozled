
import { Quiz } from '../../types';

export const chapter1Quiz: Quiz = {
  id: 'chapter_1',
  title: "Ch. 1: Understanding Voice Quiz",
  questions: [
    {
      id: 1,
      question: "In Active Voice, who performs the action?",
      options: ["The Object", "The Subject", "The Verb", "The Adverb"],
      correctAnswer: 1,
      explanation: "In Active Voice, the focus is on the Subject who performs the action (e.g., 'The cat chased the mouse')."
    },
    {
      id: 2,
      question: "Which of these is the correct basic Passive Formula?",
      options: [
        "Subject + Verb + Object",
        "Object + be + V3 + by + Subject",
        "Subject + have + V3",
        "Object + V2 + Subject"
      ],
      correctAnswer: 1,
      explanation: "Passive voice always requires a form of 'be' (am/is/are/was/were) and the Past Participle (V3)."
    },
    {
      id: 3,
      question: "When is it appropriate to use the Passive Voice?",
      options: [
        "When the doer is unknown",
        "When the doer is obvious",
        "In scientific or formal writing",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "Passive voice is useful when the agent is unknown, obvious, unimportant, or when we need to be formal."
    }
  ]
};

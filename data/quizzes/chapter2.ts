
import { Quiz } from '../../types';

export const chapter2Quiz: Quiz = {
  id: 'chapter_2',
  title: "Ch. 2: Verb Forms Mastery Quiz",
  questions: [
    {
      id: 1,
      question: "What is the V3 form (Past Participle) of the verb 'WRITE'?",
      options: ["Wrote", "Written", "Writing", "Writes"],
      correctAnswer: 1,
      explanation: "'Written' is the V3 form. Remember: write (V1), wrote (V2), written (V3)."
    },
    {
      id: 2,
      question: "Which form of the verb is ALWAYS used in Passive Voice?",
      options: ["V1 (Base Form)", "V2 (Past Tense)", "V3 (Past Participle)", "V-ing (Continuous)"],
      correctAnswer: 2,
      explanation: "Passive voice construction is impossible without the V3 form."
    },
    {
      id: 3,
      question: "What is the V3 form of 'EAT'?",
      options: ["Ate", "Eaten", "Eating", "Eats"],
      correctAnswer: 1,
      explanation: "Eat (V1), Ate (V2), Eaten (V3)."
    }
  ]
};

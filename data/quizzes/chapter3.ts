
import { Quiz } from '../../types';

export const chapter3Quiz: Quiz = {
  id: 'chapter_3',
  title: "Ch. 3: Tense Transformations Quiz",
  questions: [
    {
      id: 1,
      question: "Which auxiliary word is essential for Present Continuous passive?",
      options: ["Been", "Being", "Was", "Done"],
      correctAnswer: 1,
      explanation: "Continuous tenses require 'being' to show progress: 'A letter is BEING written'."
    },
    {
      id: 2,
      question: "What is the passive form of 'She has written a letter'?",
      options: [
        "A letter was written by her.",
        "A letter is written by her.",
        "A letter has been written by her.",
        "A letter had been written by her."
      ],
      correctAnswer: 2,
      explanation: "Present Perfect (has + V3) becomes 'has been + V3' in passive."
    },
    {
      id: 3,
      question: "Convert to Passive: 'I saw a movie.'",
      options: [
        "A movie is seen by me.",
        "A movie was seen by me.",
        "A movie had been seen by me.",
        "A movie was being seen by me."
      ],
      correctAnswer: 1,
      explanation: "Simple Past (V2) becomes 'was/were + V3' in passive."
    }
  ]
};

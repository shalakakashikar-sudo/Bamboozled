
import { Quiz } from '../../types';

export const chapter7Quiz: Quiz = {
  id: 'chapter_7',
  title: "Ch. 7: Non-Convertible Sentences Quiz",
  questions: [
    {
      id: 1,
      question: "Which of these sentences CANNOT be changed to passive voice?",
      options: [
        "I wrote a book.",
        "He laughed loudly.",
        "She ate the apple.",
        "They built a house."
      ],
      correctAnswer: 1,
      explanation: "'Laugh' is an intransitive verb (no object), so it cannot be passive."
    },
    {
      id: 2,
      question: "Can 'I have a car' be changed to passive voice?",
      options: ["Yes, 'A car is had by me.'", "No, because 'have' here is a stative verb."],
      correctAnswer: 1,
      explanation: "'Have' used for possession is stative and sounds unnatural in passive voice."
    }
  ]
};

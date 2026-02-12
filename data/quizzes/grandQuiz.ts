
import { Quiz } from '../../types';

export const grandQuiz: Quiz = {
  id: 'grand_quiz',
  title: "The Grand Bamboo Master Quiz",
  questions: [
    {
      id: 1,
      question: "Which tense uses 'being' in the passive voice?",
      options: ["Present Simple", "Present Continuous", "Present Perfect", "Future Simple"],
      correctAnswer: 1,
      explanation: "Continuous tenses (Present and Past) use 'being' to show ongoing action."
    },
    {
      id: 2,
      question: "Passive form of 'They are building a house'?",
      options: [
        "A house is built.",
        "A house is being built.",
        "A house was built.",
        "A house has been built."
      ],
      correctAnswer: 1,
      explanation: "Present continuous 'is/are building' becomes 'is/are being built'."
    },
    {
      id: 3,
      question: "Can the verb 'ARRIVE' be used in passive voice?",
      options: ["Yes", "No"],
      correctAnswer: 1,
      explanation: "'Arrive' is intransitive. No object means no passive possible."
    },
    {
      id: 4,
      question: "What is the passive of 'Who wrote Hamlet?'",
      options: [
        "Who was Hamlet written?",
        "By whom was Hamlet written?",
        "Hamlet was written by who?",
        "Who did write Hamlet?"
      ],
      correctAnswer: 1,
      explanation: "'Who' changes to 'By whom' at the start for traditional passive questions."
    },
    {
      id: 5,
      question: "Identify the correct passive: 'I must do the work.'",
      options: [
        "The work must done.",
        "The work must been done.",
        "The work must be done.",
        "The work must being done."
      ],
      correctAnswer: 2,
      explanation: "Modal + be + V3 is the correct structure."
    },
    {
      id: 6,
      question: "Passive of 'She gave me a gift' (Direct Object focus)?",
      options: [
        "A gift was given to me by her.",
        "I was given a gift by her.",
        "Both are correct.",
        "None are correct."
      ],
      correctAnswer: 2,
      explanation: "Both are correct passive versions of a double-object sentence!"
    },
    {
      id: 7,
      question: "What does 'happen' become in passive?",
      options: ["happend", "was happened", "It cannot be passive", "is happening"],
      correctAnswer: 2,
      explanation: "'Happen' is intransitive and cannot be passive."
    },
    {
      id: 8,
      question: "Passive of 'The police are looking into the matter'?",
      options: [
        "The matter is looked into by the police.",
        "The matter is being looked into by the police.",
        "The matter is being looked by the police.",
        "The matter was looked into."
      ],
      correctAnswer: 1,
      explanation: "Keep the preposition 'into' with the verb 'looked'!"
    }
  ]
};

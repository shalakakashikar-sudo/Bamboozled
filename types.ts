
export interface ContentPart {
  type: 'text' | 'formula' | 'list' | 'table' | 'example' | 'mistake' | 'tip' | 'situation' | 'comparison' | 'heading';
  title?: string;
  items?: string[];
  content?: string;
  headers?: string[];
  rows?: string[][];
  active?: string;
  passive?: string;
  description?: string;
  icon?: string;
}

export interface Chapter {
  id: number;
  title: string;
  parts: ContentPart[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string; // chapter_1, chapter_2, ..., grand_quiz
  title: string;
  questions: QuizQuestion[];
}

export interface UserAnswer {
  questionIdx: number;
  selectedOption: number;
  isCorrect: boolean;
}


import { Quiz } from '../types';
import { chapter1Quiz } from './quizzes/chapter1';
import { chapter2Quiz } from './quizzes/chapter2';
import { chapter3Quiz } from './quizzes/chapter3';
import { chapter4Quiz } from './quizzes/chapter4';
import { chapter5Quiz } from './quizzes/chapter5';
import { chapter6Quiz } from './quizzes/chapter6';
import { chapter7Quiz } from './quizzes/chapter7';
import { chapter8Quiz } from './quizzes/chapter8';
import { chapter9Quiz } from './quizzes/chapter9';
import { chapter10Quiz } from './quizzes/chapter10';
import { chapter11Quiz } from './quizzes/chapter11';
import { chapter12Quiz } from './quizzes/chapter12';
import { grandQuiz } from './quizzes/grandQuiz';

export const quizzes: Record<string, Quiz> = {
  chapter_1: chapter1Quiz,
  chapter_2: chapter2Quiz,
  chapter_3: chapter3Quiz,
  chapter_4: chapter4Quiz,
  chapter_5: chapter5Quiz,
  chapter_6: chapter6Quiz,
  chapter_7: chapter7Quiz,
  chapter_8: chapter8Quiz,
  chapter_9: chapter9Quiz,
  chapter_10: chapter10Quiz,
  chapter_11: chapter11Quiz,
  chapter_12: chapter12Quiz,
  grand_quiz: grandQuiz,
};

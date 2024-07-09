import type { Question } from '@/types';
import { useState } from 'react';
import { QuestionForm } from './Form';
import { QuestionList } from './List';

export const QuestionScreen = () => {
  const [questions, setQuestions] = useState<Array<Question>>([]);
  const addQuestion = (question: Question) =>
    setQuestions((savedQuestions) => [question, ...savedQuestions]);

  return (
    <>
      <QuestionForm onAdd={addQuestion} />
      <QuestionList questions={questions} />
    </>
  );
};

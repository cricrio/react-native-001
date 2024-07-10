import type { Question } from '@/types';
import { randomId } from '@/utils';
import { createContext, useContext, useState, type ReactNode } from 'react';

interface ContextShape {
  questions: Question[];
  addQuestion: (question: Omit<Question, 'id'>) => void;
  updateQuestion: (question: Question) => void;
  deleteQuestion: (questionId: Question['id']) => void;
}

const context = createContext<ContextShape>({
  questions: [],
  addQuestion: () => {},
  updateQuestion: () => {},
  deleteQuestion: () => {},
});

export const useQuestions = () => {
  return useContext(context);
};

export const QuestionProvider = ({ children }: { children: ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = (question: Omit<Question, 'id'>) => {
    setQuestions((q) => [{ id: randomId(), ...question }, ...q]);
  };

  const updateQuestion = (question: Question) => {
    setQuestions((q) =>
      q.map((item) => (item.id === question.id ? question : item))
    );
  };

  const deleteQuestion = (questionId: Question['id']) => {
    setQuestions((q) => q.filter((item) => item.id !== questionId));
  };

  return (
    <context.Provider
      value={{ questions, addQuestion, updateQuestion, deleteQuestion }}
    >
      {children}
    </context.Provider>
  );
};

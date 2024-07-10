import { QuestionForm } from '@/components/Form';
import { addQuestion, useQuestions } from '@/contexts/questionContext';
import type { Question } from '@/types';
import { useRouter } from 'expo-router';

export default function AddQuestion() {
  const { dispatch } = useQuestions();
  const router = useRouter();

  const onSubmit = (question: Omit<Question, 'id'>) => {
    addQuestion(dispatch)(question);
    router.push('/');
  };

  return <QuestionForm onSubmit={onSubmit} role='add' />;
}

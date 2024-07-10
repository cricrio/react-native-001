import { QuestionForm } from '@/components/Form';
import { useQuestions } from '@/contexts/questionContext';
import type { Question } from '@/types';
import { useRouter } from 'expo-router';

export default function AddQuestion() {
  const { addQuestion } = useQuestions();
  const router = useRouter();

  const onSubmit = (question: Omit<Question, 'id'>) => {
    addQuestion(question);
    router.push('/');
  };

  return <QuestionForm onSubmit={onSubmit} role='add' />;
}

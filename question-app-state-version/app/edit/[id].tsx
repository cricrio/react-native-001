import { QuestionForm } from '@/components/Form';
import { useQuestions } from '@/contexts/questionContext';
import type { Question } from '@/types';
import { useRoute } from '@react-navigation/native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import invariant from 'tiny-invariant';

export default function EditQuestion() {
  const { id: questionId } = useLocalSearchParams<{ id: Question['id'] }>();
  const { questions, updateQuestion } = useQuestions();
  const router = useRouter();

  invariant(questionId);

  const question = questions.find(({ id }) => questionId === id);

  const onSubmit = (question: Omit<Question, 'id'>) => {
    updateQuestion({ ...question, id: questionId });
    router.push('/');
  };

  return <QuestionForm question={question} onSubmit={onSubmit} role='edit' />;
}

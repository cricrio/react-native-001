import { QuestionForm } from '@/components/Form';
import { updateQuestion, useQuestions } from '@/contexts/questionContext';
import type { Question } from '@/types';
import { useLocalSearchParams, useRouter } from 'expo-router';
import invariant from 'tiny-invariant';

export default function EditQuestion() {
  const { id: questionId } = useLocalSearchParams<{ id: Question['id'] }>();
  const { questions, dispatch } = useQuestions();
  const router = useRouter();

  invariant(questionId);

  const question = questions.find(({ id }) => questionId === id);

  const onSubmit = (question: Omit<Question, 'id'>) => {
    updateQuestion(dispatch)({ ...question, id: questionId });
    router.push('/');
  };

  return <QuestionForm question={question} onSubmit={onSubmit} role='edit' />;
}

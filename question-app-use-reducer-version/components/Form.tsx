import type { Question } from '@/types';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

interface Props {
  onSubmit: (question: Omit<Question, 'id'>) => void;
  question?: Omit<Question, 'id'>;
  role: 'edit' | 'add';
}

export const QuestionForm = ({
  onSubmit,
  role,
  question: initialQuestion,
}: Props) => {
  const [question, setQuestion] = useState(initialQuestion?.question ?? '');
  const [response, setResponse] = useState(initialQuestion?.response ?? '');

  return (
    <View style={styles.container}>
      <Text variant='labelMedium'>Question</Text>
      <TextInput value={question} onChangeText={setQuestion} />
      <Text variant='labelMedium'>Response</Text>
      <TextInput value={response} onChangeText={setResponse} />
      <Button
        disabled={!(question && response)}
        onPress={() => {
          onSubmit({ question, response });
          setQuestion('');
          setResponse('');
        }}
      >
        {role === 'edit' ? 'Edit question' : 'Add question'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});

import type { Question } from '@/types';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

interface Props {
  onAdd: (question: Question) => void;
}

export const QuestionForm = ({ onAdd }: Props) => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  return (
    <View style={styles.container}>
      <Text variant='labelMedium'>Question</Text>
      <TextInput value={question} onChangeText={setQuestion} />
      <Text variant='labelMedium'>Response</Text>
      <TextInput value={response} onChangeText={setResponse} />
      <Button
        onPress={() => {
          onAdd({ question, response });
          setQuestion('');
          setResponse('');
        }}
      >
        Add question
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});

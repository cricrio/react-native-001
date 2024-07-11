import { useQuestions } from '@/contexts/questionContext';
import type { Question } from '@/types';
import { Link } from 'expo-router';
import { FlatList, View, StyleSheet } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { QuestionItem } from './QuestionItem';


export const QuestionList = () => {
  const { questions } = useQuestions();
  return (
    <FlatList
      data={questions}
      renderItem={QuestionItem}
      ListEmptyComponent={
        <Text variant='bodyMedium'>No questions to display</Text>
      }
      ItemSeparatorComponent={Divider}
    />
  );
};

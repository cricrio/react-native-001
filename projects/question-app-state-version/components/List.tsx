import { useQuestions } from '@/contexts/questionContext';
import type { Question } from '@/types';
import { Link } from 'expo-router';
import { FlatList, View, StyleSheet } from 'react-native';
import { Divider, Text } from 'react-native-paper';

interface QuestionItemProps {
  item: Question;
}

const QuestionItem = ({ item }: QuestionItemProps) => (
  <Link href={`/edit/${item.id}`}>
    <View>
      <Text variant='bodyMedium'>{item.question}</Text>
      <Text variant='bodyMedium'>{item.response}</Text>
    </View>
  </Link>
);

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

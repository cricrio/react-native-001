import type { Question } from '@/types';
import { FlatList, View, StyleSheet } from 'react-native';
import { Divider, Text } from 'react-native-paper';

interface QuestionItemProps {
  item: Question;
}

const QuestionItem = ({ item }: QuestionItemProps) => (
  <View>
    <Text variant='bodyMedium'>{item.question}</Text>
    <Text variant='bodyMedium'>{item.response}</Text>
  </View>
);

interface QuestionListProps {
  questions: Array<Question>;
}

export const QuestionList = ({ questions }: QuestionListProps) => {
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

import type { Question } from '@/types';
import { Link } from 'expo-router';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { deleteQuestion, useQuestions } from '@/contexts/questionContext';

interface QuestionItemProps {
  item: Question;
}

export const QuestionItem = ({ item }: QuestionItemProps) => {
  const { dispatch } = useQuestions();
  return (
    <View
      style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}
    >
      <Link href={`/edit/${item.id}`}>
        <View style={{ flex: 1 }}>
          <Text variant='bodyMedium'>{item.question}</Text>
          <Text variant='bodyMedium'>{item.response}</Text>
        </View>
      </Link>
      <Ionicons
        name='trash'
        size={32}
        color='black'
        onPress={() => deleteQuestion(dispatch)(item.id)}
      />
    </View>
  );
};

import { QuestionList } from '@/components/List';
import { View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <QuestionList />
    </View>
  );
}

import { QuestionScreen } from '@/components/QuestionScreen';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <QuestionScreen />
    </View>
  );
}

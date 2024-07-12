import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native-paper';

export default function IdPage() {
  const { id } = useLocalSearchParams();
  return <Text variant='displayMedium'>{id}</Text>;
}

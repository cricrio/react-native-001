import { useTexts } from '@/contexts/textProvider';
import { Text } from 'react-native-paper';

export default function Bla() {
  const [texts] = useTexts();

  return <Text variant='bodyLarge'>{texts.join('   ')}</Text>;
}

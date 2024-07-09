import { useTexts } from '@/contexts/textProvider';
import { Link } from 'expo-router';
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Index() {
  const [_, add] = useTexts();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Link href={'/bla'}>Go to Bla</Link>
      <Link href={'/test/ototto'}>Go to ototto</Link>
      <Link href={'/test/blaal'}>Go to blaal</Link>
      <Button onPress={() => add('1 2 3 4')}>Tape me </Button>
    </View>
  );
}

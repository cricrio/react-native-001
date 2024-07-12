import { useTexts } from '@/contexts/textProvider';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Index() {
  const [_, add] = useTexts();
  const { query, machin } = useLocalSearchParams<{
    query: string;
    machin: string;
  }>();
  const router = useRouter();

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
      <Link href={'/?query=ahahahhahah'}>Go to search params</Link>
      <Link href={'/barcode-demo'}>Go to barcode demo</Link>
      <Link href={'/camera-demo'}>Go to camera demo</Link>
      <Button onPress={() => add('1 2 3 4')}>Tape me </Button>
      <TextInput
        value={query ?? ''}
        onChangeText={(text) => router.setParams({ query: text, machin: '' })}
      ></TextInput>
      <TextInput
        value={machin ?? ''}
        onChangeText={(text) => router.setParams({ machin: text })}
      ></TextInput>
    </View>
  );
}

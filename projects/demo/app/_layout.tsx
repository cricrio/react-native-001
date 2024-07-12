import { TextsProvider } from '@/contexts/textProvider';
import { Stack } from 'expo-router';
import { PaperProvider, Text } from 'react-native-paper';

export default function RootLayout() {
  return (
    <TextsProvider initialTexts={['bloa', 'bloa']}>
      <PaperProvider>
        <Stack
          screenOptions={{
            header: () => <Text variant='titleLarge'>Demo</Text>,
            contentStyle: {
              padding: 20,
            },
          }}
        >
          <Stack.Screen name='index' />
          <Stack.Screen name='bla' />
          <Stack.Screen name='test/[id]' />
        </Stack>
      </PaperProvider>
    </TextsProvider>
  );
}

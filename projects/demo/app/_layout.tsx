import { TextsProvider } from '@/contexts/textProvider';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            <Stack.Screen name='mail-demo' />
          </Stack>
        </PaperProvider>
      </TextsProvider>
    </SafeAreaView>
  );
}

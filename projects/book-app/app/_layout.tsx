import { Stack } from 'expo-router';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { PaperProvider } from 'react-native-paper';
import { Text } from 'react-native-paper';
import TopBar from '@/components/TopBar';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <PaperProvider>
          <Stack
            screenOptions={{
              header: TopBar,
              contentStyle: {
                padding: 20,
                flex: 1,
              },
            }}
          >
            <Stack.Screen name='index' />
          </Stack>
        </PaperProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

import { QuestionProvider } from '@/contexts/questionContext';
import { Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { PaperProvider, Text, Button } from 'react-native-paper';

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PaperProvider>
        <QuestionProvider>
          <Stack
            screenOptions={{
              headerTitle: () => (
                <Text variant='headlineMedium'>Questions</Text>
              ),
              headerShadowVisible: true,
              contentStyle: {
                paddingVertical: 20,
                paddingHorizontal: 10,
              },
            }}
          >
            <Stack.Screen
              name='index'
              options={{
                headerRight: () => (
                  <Link href='/add' asChild>
                    <Button>Add</Button>
                  </Link>
                ),
              }}
            />
            <Stack.Screen
              name='add'
              options={{
                headerTitle: () => (
                  <Text variant='headlineSmall'>Add question</Text>
                ),
              }}
            />
          </Stack>
        </QuestionProvider>
      </PaperProvider>
    </SafeAreaView>
  );
}

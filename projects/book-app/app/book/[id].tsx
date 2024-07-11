import { useFetchBook } from '@/hooks/useFetchBook';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Image, ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';

function sanitize(input: string) {
  // Replace <p> tags with an empty string
  let withoutPTags = input.replace(/<p>/g, '');

  // Replace </p> tags with a new line character
  let withoutPTagsAndNewLine = withoutPTags.replace(/<\/p>/g, '\n');

  // Remove all other HTML tags
  return withoutPTagsAndNewLine.replace(/<[^>]*>/g, '');
}

export default function BookDetail() {
  const params = useLocalSearchParams<{ id: string }>();
  const id = params.id as string;
  const { book, loading, error } = useFetchBook(id);

  if (error) {
    return <Text variant='bodyMedium'>error: {error}</Text>;
  }

  if (loading || !book) {
    return <ActivityIndicator animating />;
  }
  return (
    <ScrollView style={{ flex: 1, height: 400 }}>
      <Image
        source={{ uri: book?.images.cover ?? book?.images?.thumbnail }}
        width={200}
        height={300}
        style={{ alignSelf: 'center' }}
      />
      <Text variant='headlineMedium'>{book?.title}</Text>
      <Text variant='headlineSmall'>{book?.authors?.join(', ')}</Text>
      <View style={{ flex: 1 }}>
        <Text variant='bodyMedium'>{sanitize(book?.description ?? '')}</Text>
      </View>
    </ScrollView>
  );
}

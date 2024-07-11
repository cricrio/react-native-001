import { BookCard } from '@/components/BookCard';
import { useFetchBooks } from '@/hooks/useFetchBooks';
import { Link } from 'expo-router';
import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { ActivityIndicator, Searchbar, Text, Card } from 'react-native-paper';

export default function Search() {
  const [query, setQuery] = useState('');
  const { books, error, loading } = useFetchBooks(query);

  let content = null;
  if (loading) {
    content = <ActivityIndicator animating />;
  } else if (error) {
    content = <Text variant='bodyMedium'>error: {error}</Text>;
  } else {
    content = (
      <FlatList
        data={books}
        renderItem={({ item }) => <BookCard book={item} />}
        ItemSeparatorComponent={() => <View style={{ padding: 10 }} />}
        ListEmptyComponent={() => (
          <Text variant='bodyMedium'>No book to display</Text>
        )}
      />
    );
  }

  return (
    <View style={{ gap: 20, flex: 1 }}>
      <View
        style={{
          alignItems: 'center',
          gap: 5,
        }}
      >
        <Searchbar
          style={{ alignSelf: 'stretch' }}
          placeholder='Search'
          onChangeText={setQuery}
          value={query}
        />
      </View>
      {content}
    </View>
  );
}

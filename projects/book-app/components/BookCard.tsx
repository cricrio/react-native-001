import type { Book } from '@/types';
import { Link } from 'expo-router';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';

interface Props {
  book: Book;
}

export function BookCard({ book }: Props) {
  return (
    <Card mode='outlined'>
      <Card.Cover source={{ uri: book?.images?.thumbnail }} />
      <View style={{ padding: 10 }}>
        <Link href={`/book/${book.id}`}>
          <Text variant='titleLarge'>{book.title}</Text>
        </Link>
      </View>
    </Card>
  );
}

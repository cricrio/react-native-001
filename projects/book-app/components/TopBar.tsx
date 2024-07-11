import { Link } from 'expo-router';
import { Appbar, Text } from 'react-native-paper';

export default function TopBar() {
  return (
    <Appbar.Header>
      <Appbar.Content
        title={
          <Link href='/'>
            <Text variant='titleMedium'>Book App</Text>
          </Link>
        }
      />
    </Appbar.Header>
  );
}

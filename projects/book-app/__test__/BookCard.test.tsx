import { BookCard } from '../components/BookCard';
import { render } from '@testing-library/react-native';

test('Should display the title', () => {
  const { getByText } = render(
    <BookCard book={{ title: 'Harry Potter', id: '02', images: {} }} />
  );

  const title = getByText('Harry Potter');
  expect(title).toBeTruthy();
});

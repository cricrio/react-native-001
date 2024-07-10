import { useEffect, useState } from 'react';
import { Text, TextInput } from 'react-native';

export default function DemoApi() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [text, setText] = useState('');

  useEffect(() => {
    const getBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${text}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (text) {
      getBooks();
    }
  }, [text]);

  const textComposant = (
    <TextInput onChangeText={setText} value={text}></TextInput>
  );

  if (loading)
    return (
      <>
        {textComposant} <Text>loading</Text>{' '}
      </>
    );
  if (error)
    return (
      <>
        {textComposant}
        <Text>{JSON.stringify(error, null, 2)}</Text>{' '}
      </>
    );
  if (data)
    return (
      <>
        {textComposant}
        <Text>{JSON.stringify(data, null, 2)}</Text>{' '}
      </>
    );

  return (
    <>
      {textComposant}
      <Text>Nothing to display here</Text>
    </>
  );
}
